Docker Migration 가이드
================================

Docker로 배포된 Metatron Discovery를 다른 docker image로 이관하는 작업에 대한 가이드 문서입니다.

https://github.com/teamsprint/docker-metatron.git/ 을 사용한다고 가정합니다.
이에 대해선 https://metatron.app/2020/01/21/deploying-metatron-with-the-fully-engineered-docker-image/ 를 참고하세요.

메타데이터 스토어로 MySQL을 사용한 경우에 대해서만 기술합니다.

1. 메타트론 서비스 중단
--------------------------------

Docker 외부에서 다음 명령을 수행하면 docker instance 내부로 들어갑니다.

.. code::

  git clone https://github.com/teamsprint/docker-metatron.git/
  cd docker-metatron
  ./attach.sh

Docker 내부에서 다음의 명령을 통해 메타트론 서비스를 중지시킵니다.

.. code::

  cd $METATRON_HOME
  bin/metatron.sh stop


2. 메타데이터 스토어 백업
---------------------------------

메타트론에서 사용하는 데이터셋, 데이터 플로우 등에 대한 정보를 먼저 백업해야합니다.
Docker 외부에서 다음 명령을 수행합니다. (Container의 이름이 metatron, 메타데이터 스토어로 사용한 데이터베이스의 이름이 polaris 경우)

.. code::

  sudo docker exec metatron /usr/bin/mysqldump -uroot -pMetatron123$ polaris > metadata_store_backup.sql


3. 설정 및 실행 스크립트 백업
-------------------------------------

.. code::

  sudo docker cp metatron:/servers/metatron-discovery/conf/application-config.yaml .
  sudo docker cp metatron:/servers/metatron-discovery/conf/metatron-env.sh .
  sudo docker cp metatron:/servers/metatron-discovery/conf/logback-console.sh .
  sudo docker cp metatron:/servers/metatron-discovery/bin/metatron.sh .
  sudo docker cp metatron:/servers/metatron-discovery/bin/common.sh .


4. 업로드된 파일 데이터셋, 데이터 스냅샷 백업
-------------------------------------------------

.. code::

  sudo docker cp metatron:/servers/metatron-discovery/dataprep/uploads .
  sudo docker cp metatron:/servers/metatron-discovery/dataprep/snapshots .

일반적인 경우 데이터 스냅샷은 백업할 필요가 없습니다.
데이터 스냅샷이 작은 경우라면 금방 다시 만들어낼 수 있고, 다시 만들어내기 부담스러울 정도로 크다면 백업에 대한 부담도 크기 때문입니다.

Docker instance 내부의 데이터베이스에 저장한 데이터 스냅샷은 백업할 수 없습니다.
Staging DB에 대한 설정을 따로 하지 않았다면 (docker instance의 초기 설정 그대로인 경우), staging DB 타입의 데이터 스냅샷도 백업할 수 없습니다.


5. 기존 docker instance 제거
----------------------------------------

다음의 명령을 수행하면 docker instance가 제거됩니다.

.. code::

  ./destroy.sh


6. 새로운 docker instance 실행
-----------------------------------------

Docker instance 외부에서 다음의 명령을 수행합니다.

.. code::

  ./run.sh

새 바이너리로 패치하려면 run.sh을 편집하여 IMAGE_NAME을 수정해야합니다.

Docker instance 내부에서 다음의 명령을 수행합니다.

.. code::

  ./prepare-all-metatron.sh

보통 2~3분 내로 메타트론 서비스가 시작됩니다.
서비스 시작을 확인한 후 바로 서버를 내리고 복원을 시작합니다.

.. code::

  ./stop-metatron.sh


7. 메타데이터 스토어 복원
---------------------------------

Docker instance 외부에서 다음의 명령을 수행합니다.

.. code::

  cat metadata_store_backup.sql | sudo docker exec -i metatron /usr/bin/mysql -uroot -pMetatron123$ polaris


8. 설정 및 실행 스크립트 복원
-------------------------------------

Docker instance 외부에서 다음의 명령을 수행합니다.
바이너리를 패치하는 경우, 설정 또는 실행 스크립트의 내용이 변한 경우 수정사항을 반영해주어야 합니다.

.. code::

  sudo docker cp application-config.yaml metatron:/servers/metatron-discovery/conf/
  sudo docker cp metatron-env.sh metatron:/servers/metatron-discovery/conf/
  sudo docker cp logback-console.sh metatron:/servers/metatron-discovery/conf/
  sudo docker cp metatron.sh metatron:/servers/metatron-discovery/bin/
  sudo docker cp common.sh metatron:/servers/metatron-discovery/bin/


9. 백업된 파일 데이터셋, 데이터 스냅샷 복원
-----------------------------------------------

Docker instance 외부에서 다음의 명령을 수행합니다.

.. code::

  sudo docker exec metatron mkdir -p /servers/metatron-discovery/dataprep
  sudo docker cp uploads metatron:/servers/metatron-discovery/dataprep/
  sudo docker cp snapshots metatron:/servers/metatron-discovery/dataprep/


10. 메타트론 서비스 시작
---------------------------------

Docker instance 외부에서 다음의 명령을 수행합니다.

.. code::

  ./attach.sh

Docker instance 내부에서 다음의 명령을 수행합니다.

.. code::

  ./start-metatron.sh

보통 1~2분 내로 메타트론 서비스가 시작됩니다.

