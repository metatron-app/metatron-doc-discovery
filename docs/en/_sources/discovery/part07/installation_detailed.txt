상세 설치 가이드 (CentOS 7 기준)
================================

Linux OS만 제공된 환경(클라우드 서비스)을 기준으로, 데이터 프리퍼레이션 기능을 모두 사용해볼 수 있도록 메타트론을 설치, 설정하는 것에 대한 가이드 문서입니다.

1. 필수 패키지 설치
-------------------

루트로 다음 명령들을 실행합니다.

.. code::

  yum clean all && yum repolist && yum -y update
  yum -y install tar unzip vi vim telnet apr apr-util apr-devel apr-util-devel net-tools curl openssl elinks locate python-setuptools
  yum -y install java-1.8.0-openjdk-devel.x86_64
  export JAVA_HOME=/usr/lib/jvm/java
  export PATH=$PATH:$JAVA_HOME/bin

2. Hadoop 설치
-------------------

루트로 다음 명령들을 실행합니다.
Hadoop 바이너리는 가까운 mirror를 통해서 다운로드 받는 것이 더 좋습니다.

.. code::

  yum -y install openssh-server openssh-clients rsync netstat wget
  yum -y update libselinux

  ssh-keygen -q -N "" -t dsa -f /etc/ssh/ssh_host_dsa_key
  ssh-keygen -q -N "" -t rsa -f /etc/ssh/ssh_host_rsa_key
  ssh-keygen -q -N "" -t rsa -f /root/.ssh/id_rsa
  cp /root/.ssh/id_rsa.pub /root/.ssh/authorized_keys

  wget http://archive.apache.org/dist/hadoop/common/hadoop-2.7.3/hadoop-2.7.3.tar.gz
  tar -zxvf hadoop-2.7.3.tar.gz -C /opt
  rm -f hadoop-2.7.3.tar.gz
  ln -s /opt/hadoop-2.7.3 /opt/hadoop

  export HADOOP_PREFIX=/opt/hadoop
  export HADOOP_COMMON_HOME=$HADOOP_PREFIX
  export HADOOP_HDFS_HOME=$HADOOP_PREFIX
  export HADOOP_MAPRED_HOME=$HADOOP_PREFIX
  export HADOOP_YARN_HOME=$HADOOP_PREFIX
  export HADOOP_CONF_DIR=$HADOOP_PREFIX/etc/hadoop
  export YARN_CONF_DIR=$HADOOP_PREFIX
  export PATH=$PATH:$HADOOP_PREFIX/bin:$HADOOP_PREFIX/sbin

  sed -i "/^export JAVA_HOME/ s:.*:export JAVA_HOME=$JAVA_HOME:" $HADOOP_CONF_DIR/hadoop-env.sh
  sed -i "/^export HADOOP_CONF_DIR/ s:.*:export HADOOP_CONF_DIR=$HADOOP_CONF_DIR:" $HADOOP_CONF_DIR/hadoop-env.sh

다음 파일들을 $HADOOP_CONF_DIR에 넣어주세요.

    :download:`core-site.xml </_static/data/discovery/part07/core-site.xml>`
    :download:`hdfs-site.xml </_static/data/discovery/part07/hdfs-site.xml>`
    :download:`mapred-site.xml </_static/data/discovery/part07/mapred-site.xml>`
    :download:`yarn-site.xml </_static/data/discovery/part07/yarn-site.xml>`

계속해서 루트로 다음 명령들을 실행합니다.

.. code::

  $HADOOP_PREFIX/bin/hdfs namenode -format

다음 내용을 /root/.ssh/config에 다음 내용을 추가해주세요.

.. code::

  Host *
    UserKnownHostsFile /dev/null
    StrictHostKeyChecking no
    LogLevel quiet
    Port 2122

계속해서 루트로 다음 명령들을 실행합니다.

.. code::

  chmod 600 /root/.ssh/config
  chown root:root /root/.ssh/config

  chmod +x $HADOOP_CONF_DIR/*-env.sh
  
  sed  -i "/^[^#]*UsePAM/ s/.*/#&/"  /etc/ssh/sshd_config
  echo "UsePAM no" >> /etc/ssh/sshd_config
  echo "Port 2122" >> /etc/ssh/sshd_config

SSH 서버를 다시 시작합니다.

.. code::

  service sshd restart

HDFS 및 Yarn을 실행합니다.

.. code::

  start-dfs.sh
  start-yarn.sh

Hadoop이 제대로 설치되었는지 테스트해봅니다.

.. code::

  hdfs dfs -mkdir -p /user/hadoop/input
  hdfs dfs -put $HADOOP_PREFIX/LICENSE.txt /user/hadoop/input
  hadoop jar $HADOOP_PREFIX/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.3.jar wordcount /user/hadoop/input /user/hadoop/output

3. MySQL 설치
-------------------

.. code::

  wget http://dev.mysql.com/get/mysql57-community-release-el7-7.noarch.rpm \
        && yum -y localinstall mysql57-community-release-el7-7.noarch.rpm \
        && yum repolist enabled | grep "mysql.*-community.*" \
        && yum -y install mysql-community-server mysql \
        && rm -f mysql57-community-release-el7-7.noarch.rpm
  service mysqld start

다음의 명령을 통해 임시패스워드를 알아냅니다.

.. code::

  grep 'temporary password' /var/log/mysqld.log | awk {'print $11'}
  Z&O+estx9vTt

위 패스워드를 이용해서 mysql_secure_installation을 실행합니다.

.. code::

  mysql_secure_installation
  Enter password for user root: -> Z&O+estx9vTt
  New password: -> Metatron123$
  Re-enter new password: -> Metatron123$
  Change the password for root ? ((Press y|Y for Yes, any other key for No) : y
  New password: -> Metatron123$
  Re-enter new password: -> Metatron123$
  Do you wish to continue with the password provided? -> y
  Remove anonymous users? -> enter
  Disallow root login remotely? -> enter
  Remove test database and access to it? -> enter
  Reload privilege tables now? -> enter

MySQL에 접속해봅니다.

.. code::

  mysql -uroot -pMetatron123$

4. Hive 설치
-------------------

.. code::

  wget http://mirror.navercorp.com/apache/hive/hive-2.3.6/apache-hive-2.3.6-bin.tar.gz \
        && tar -zxvf apache-hive-2.3.6-bin.tar.gz -C /opt \
        && rm -f apache-hive-2.3.6-bin.tar.gz \
        && ln -s /opt/apache-hive-2.3.6-bin /opt/hive
  export HIVE_HOME=/opt/hive
  export PATH=$PATH:$HIVE_HOME/bin:$HIVE_HOME/hcatalog/sbin
  wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/5.1.38/mysql-connector-java-5.1.38.jar
  mv mysql-connector-java-5.1.38.jar $HIVE_HOME/lib/

다음 파일을 $HIVE_HOME/conf에 넣어주세요.

    :download:`hive-site.xml </_static/data/discovery/part07/hive-site.xml>`

Hive metastore를 초기화합니다.

.. code::

  mysql -uroot -pMetatron123$
  create database hive_metastore;
  create user 'hive'@'%' identified by 'Metatron123$';
  grant all privileges on *.* to 'hive'@'%';
  grant all privileges on hive_metastore.* to 'hive'@'%';
  create user 'hive'@'localhost' identified by 'Metatron123$';
  grant all privileges on *.* to 'hive'@'localhost';
  grant all privileges on hive_metastore.* to 'hive'@'localhost';
  flush privileges;
  quit
  schematool -initSchema -dbType mysql

Hive를 시작합니다.

.. code::

  hdfs dfs -mkdir -p /user/hive/warehouse
  mkdir -p $HIVE_HOME/hcatalog/var/log
  hcat_server.sh start
  hiveserver2 &

Hive에 접속해봅니다.

.. code::

  beeline -u jdbc:hive2://localhost:10000 "" ""

5. Metatron 설치
-------------------

.. code::

  wget https://sktmetatronkrsouthshared.blob.core.windows.net/metatron-public/discovery-dist/latest/metatron-discovery-latest-bin.tar.gz
  mkdir /servers
  tar zxf metatron-discovery-latest-bin.tar.gz -C /servers
  ln -s /servers/metatron-discovery-* /servers/metatron-discovery
  export METATRON_HOME=/servers/metatron-discovery

다음 파일들을 $METATRON_HOME/conf에 넣어주세요.

    :download:`application-config.yaml </_static/data/discovery/part07/application-config.yaml>`
    :download:`metatron-env.sh </_static/data/discovery/part07/metatron-env.sh>`
    :download:`logback-console.xml </_static/data/discovery/part07/logback-console.xml>`

Metatron을 초기화합니다.

.. code::

  mysql -uroot -pMetatron123$
  create database polaris;
  create user 'polaris'@'%' identified by 'Metatron123$';
  grant all privileges on *.* to 'polaris'@'%';
  grant all privileges on hive_metastore.* to 'polaris'@'%';
  create user 'polaris'@'localhost' identified by 'Metatron123$';
  grant all privileges on *.* to 'polaris'@'localhost';
  grant all privileges on hive_metastore.* to 'polaris'@'localhost';
  flush privileges;
  quit
  cd $METATRON_HOME
  bin/metatron.sh --init start

진행상황을 보려면 log 파일을 tail 하세요.

.. code::

  tail -f logs/metatron-*.out

이제 http://localhost:8180/ 으로 접속하면 됩니다.

