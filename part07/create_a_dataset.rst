데이터셋 만들기
-----------------------------------------

데이터셋은 데이터 프리퍼레이션의 가장 기본이 되는 단위로 데이터 연산의 대상이 되는 개체를 말합니다.
Imported Dataset과 Wrangled Dataset의 두 가지 종류로 존재합니다.

Imported Dataset은 출처가 되는 가장 초기 형태의 실제 데이터 개체입니다.
Wrangled Dataset은 작업의 대상이 되는 데이터 개체 입니다.

Wrangled Dataset은 룰 편집을 위해서 Dataflow 안에서 생성됩니다.
그러므로 우리는 데이터 프리퍼레이션에 데이터를 제공하기 위하여 Imported Dataset만을 생성하게 됩니다.

다음과 같은 과정을 통해 (Imported) 데이터셋을 만들 수 있습니다.
 
.. figure:: /_static/img/part07/create_a_dataset_1.png
   :scale: 50 %

데이터셋을 만들기 위해서는 메인 화면 좌측 탭에서 'WORKSPACE - MANAGEMENT - 데이터 프리퍼레이션' 이동을 합니다.

.. figure:: /_static/img/part07/create_a_dataset_2.png

'데이터 셋' 탭의 데이터셋 목록 화면에서 '새로운 데이터셋 생성' 버튼을 사용하면 데이터셋을 만들 수 있습니다.

.. figure:: /_static/img/part07/create_a_dataset_3.png
   :scale: 50 %

데이터셋은 3가지 종류로 생성할 수 있습니다.

Import Type의 종류
=================================================

* File : 사용자가 소유한 파일 또는 URI(곧 지원 예정)를 이용하여 Import
* Database : Database 접속 정보와 쿼리를 이용하여 Import
* Staging DB : 메타트론 구동시 설정된 Staging DB의 정보를 이용하여 Import

.. _create_a_dataset_of_file:

File 타입 데이터셋 생성하기
=================================================

파일 타입을 선택하고 진행하면 파일을 업로드 할 수 있는 탭이 표시됩니다.

.. figure:: /_static/img/part07/create_a_dataset_of_file_1.png

드래그&드롭 또는 Import 링크를 클릭하여 파일을 선택합니다. (cvs, json, excel 형식이 지원됩니다.)

.. figure:: /_static/img/part07/create_a_dataset_of_file_2.png

업로드 된 파일의 그리드 형태를 확인하고 컬럼 구분자를 지정할 수 있으며, 문제가 없다면 다음으로 넘어갑니다.

.. figure:: /_static/img/part07/create_a_dataset_of_file_3.png

데이터 셋의 이름과 설명을 기술합니다.
이름은 사용자가 식별하기 위한 표기이므로 중복을 허용하며 설명은 없어도 무방합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_file_3.png

데이터셋 생성이 완료되면 데이터셋 목록 화면으로 자동으로 이동합니다.
방금 생성한 데이터셋을 확인할 수 있습니다.

.. _create_a_dataset_of_database:

Database 타입 데이터셋 생성하기
=================================================

Database 타입의 데이터셋을 생성하기 위해서는 선행적으로 커넥션이 생성되어 있어야 합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_1.png

데이터 커넥션이 만들어져 있지 않다면 'WORKSPACE - MANAGEMENT - 데이터 스토리지 - `데이터 커넥션 <../part02/data_connection.html>`_'을 통하여 데이터셋을 생성하여야 합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_2.png

연결하길 원하는 커넥션이 생성되어 있다면 해당 커넥션을 선택하고 테스트 버튼을 눌러 유효한 커넥션임을 확인합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_3.png

DB명과 테이블명을 선택하여 데이터셋을 생성할 수 있습니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_4.png

또는 쿼리를 직접 입력하여 데이터셋을 생성할 수도 있습니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_5.png

모든 정보가 설정되었다면 데이터셋 이름과 설명을 기술하고 완료합니다.
이름은 사용자가 식별하기 위한 표기이므로 중복을 허용하며 설명은 없어도 무방합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_database_6.png

데이터셋 생성이 완료되면 데이터셋 목록 화면으로 자동으로 이동합니다.
방금 생성한 데이터셋을 확인할 수 있습니다.

.. _create_a_dataset_of_stagingdb:

Staging DB 타입 데이터셋 생성하기
=================================================

Staging DB 타입의 데이터셋은 데이터 커넥션을 지정할 필요가 없다는 것을 제외하면 Database 타입의 데이터셋과 동일합니다. 

.. figure:: /_static/img/part07/create_a_dataset_of_stagingdb_1.png

Staging DB의 정보가 기본으로 사용되므로 데이터 커넥션 선택 없이 바로 테이블을 선택할 수 있습니다.

.. figure:: /_static/img/part07/create_a_dataset_of_stagingdb_2.png

또는 쿼리를 직접 입력하여 데이터셋을 생성할 수 있습니다.

.. figure:: /_static/img/part07/create_a_dataset_of_stagingdb_3.png

데이터셋 이름과 설명을 기술하고 완료합니다.
이름은 사용자가 식별하기 위한 표기이므로 중복을 허용하며 설명은 없어도 무방합니다.

.. figure:: /_static/img/part07/create_a_dataset_of_stagingdb_4.png

데이터셋 생성이 완료되면 데이터셋 목록 화면으로 자동으로 이동합니다.
방금 생성한 데이터셋을 확인할 수 있습니다.

