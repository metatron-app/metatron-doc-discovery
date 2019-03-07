데이터 소스 만들기
--------------------------------------------

Step-by-step으로 데이터 소스 만들기를 해봅니다.

.. figure:: /_static/img/discovery/part02/create_datasource_1.png

데이터 소스를 만들기 위해서는 메인 화면 좌측 탭에서 'WORKSPACE - MANAGEMENT - 데이터 스토리지' 이동을 합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_2.png

'데이터 스토리지' 화면에서 상단 탭에서  '데이터 소스' 선택을 합니다. 변경된 화면의 목록 우측 상단의 '+ 새로운 데이터 소스 생성' 버튼을 클릭하면 데이터 소스를 샐 생성할 수 있습니다. 먼저 원천 데이터의 타입을 선택합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_3.png

소스 타입에 대해서는 아래 순서대로 설명이 되어 있습니다.

* 파일: 사용자의 로컬 PC에 저장되어 있는 파일을 가져와서 데이터 소스를 생성합니다. xls, xlsx, csv와 같이 쉼표로 분리된 파일만 허용됩니다(자세한 절차는 :ref:`create_datasource_from_file` 참조).
* 데이터베이스: 외부 데이터베이스에서 데이터를 가져와서 데이터 소스를 생성합니다. 현재 Metatron Discovery에서 지원하는 데이터베이스로는 MySQL, PostgreSQL, Hive, Presto 가 있습니다(자세한 절차는 :ref:`create_datasource_from_db` 참조).
* Staging DB: Metatron의 내부 Hive 데이터베이스에서 가져온 데이터를 기반으로 데이터 소스를 생성합니다 (자세한 절차는 :ref:`create_datasource_from_stagingdb` 참조) .
* 실시간: 현재 해당 기능은 지원하지 않습니다.
* 데이터스냅샷: 현재 해당 기능은 지원하지 않습니다.
* 메타트론 엔진: Metatron 이전 버전에 저장된 데이터 소스를 마이그레이션 합니다 (자세한 절차는 :ref:`create_datasource_from_metatron` 참조).

.. _create_datasource_from_file:

파일로 데이터소스 만들기
=================================================

원천 데이터 타입 선택 화면에서 ‘파일’을 선택합니다.

사용자 로컬 PC에서 데이터 소스로 사용할 파일을 가져옵니다. Import 버튼을 클릭하여 파일을 선택할 수도 있고 화면 상으로 파일을 끌어다 놓을 수도 있습니다. 파일을 가져왔으면 다음 버튼을 누릅니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_1.png

가져온 파일에서 데이터 소스에 포함시킬 시트를 선택합니다. 데이터가 있음에도 불구하고 '미리보기 데이터가 없습니다'로 나오는 경우에는, '컬럼 구분자' 및 '라인 구분자'를 맞게 설정했는지 확인해야 합니다. 만일 이 값이 잘못 되었을 경우 수정을 해줘야 합니다. 이 예제에서는 '라인 구분자'가 MS Windows의 carriage return인 '\r'로 입력이 되어야 합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_2.png

'라인 구분자' 변경을 통해 데이터가 정상적으로 미리보기를 통해 확인이 가능합니다.

* 파일 이름: 가져온 파일의 이름입니다. 다른 파일을 다시 가져올 수도 있습니다.
* 파일 시트 목록: 가져온 파일에 포함된 시트들을 보여줍니다. 여기서 데이터 소스로 만들 시트를 선택합니다.
* 파일 시트 이름: 현재 선택된 시트 이름입니다.
* 용량: 가져온 파일의 용량입니다.
* 컬럼: 가져온 파일의 컬럼 개수입니다.
* 행: 가져온 파일의 행 개수입니다. 숫자를 입력하면 해당 숫자만큼의 행이 화면에 나타납니다.
* 타입: 각 컬럼으로부터 인식한 데이터 타입이 몇 종류인지 보여줍니다. 컬럼별 데이터 타입은 이후 화면에서 수정할 수 있습니다.
* 첫째 행을 컬럼명으로 사용 여부 확인란: 선택하면 파일 내의 첫번째 행의 내용이 컬럼명으로 사용됩니다. 선택하지 않을 경우 컬럼명을 기재할 행이 새로 생성됩니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_3.png

데이터 소스에서 구현하고자 하는 스키마를 설정합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_4.png

* 컬럼명으로 검색: 가져온 파일에 들어있는 컬럼을 이름으로 검색합니다.
* 역할: 가져온 파일에 들어있는 컬럼을 전체/차원값/측정값으로 선별하여 조회합니다.
* 추천 필터: 최우선 추천 필터가 적용된 컬럼들만 선별하여 조회합니다.
* 타입: 가져온 파일에 들어있는 컬럼을 필드 타입별로 선별하여 조회합니다.
* 컬럼 목록 영역: 설정한 선별 조건에 맞는 컬럼들을 보여줍니다(자세한 설명은 아래 '일괄 컬럼 수정 및 삭제' 항목 참조).
* 개별 컬럼 설정 영역: 컬럼 목록에서 선택한 컬럼의 속성들을 설정할 수 있는 영역입니다(자세한 설명은 아래 '개별 컬럼 속성 수정' 항목 참조).
* 타임스탬프 설정: 데이터 소스 내에 무조건 존재해야하는 타임스탬프 설정입니다. Metatron 엔진은 데이터 소스 저장 시 무조건 시간 값을 보유해야 하는 시계열 엔진입니다.

따라서, 기존 데이터가 보유하고 있는 시간 타입 컬럼을 타임스탬프로 지정할 것인지, 또는 현재 시간 값으로 이루어진 시간 타입 컬럼을 생성하여 타임스탬프로 지정할 것인지를 선택할 수 있습니다.

**일괄 컬럼 수정 및 삭제**

데이터 컬럼 목록 영역에서는 컬럼들의 일괄 수정 및 삭제가 가능합니다. 타입 변경을 하거나 삭 제하고자 하는 컬럼들의 확인란을 체크한 후 아래 설명을 참조하여 원하는 동작을 설정한 다음 ‘적용’ 버튼을 누르십시오.

.. figure:: /_static/img/discovery/part02/create_datasource_file_5.png

타입 변경/삭제: 현재 선택한 컬럼들에 대해 원하는 동작을 선택합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_6.png

**차원값/측정값**

현재 선택한 컬럼의 역할을 차원값 혹은 측정값으로 변경할 수 있습니다.
* 차원값으로 변경할 경우, 데이터 타입을 문자/불린/정수/소수/날짜/시간/위도/경도 중 하나로 변경이 가능합니다.
* 측정값으로 변경할 경우, 데이터 타입을 정수/소수 중 하나로 변경이 가능합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_7.png

**컬럼 타입**

선택한 컬럼들을 어떤 타입으로 변경할지 선택합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_8.png

**개별 컬럼 속성 수정**

컬럼 목록에서 선택한 컬럼의 속성들을 수정하는 영역입니다

.. figure:: /_static/img/discovery/part02/create_datasource_file_9.png

* 이름: 선택한 칼럼의 이름입니다.
* 데이터 행 수: 현재 화면에 표시된 데이터 행 수를 가리킵니다.
* 역할: 해당 컬럼에 부여된 역할인 차원값/측정값이 나타납니다. 여기서 변경 가능합니다.
* 타입: 해당 칼럼의 데이터 타입을 나타냅니다. 다른 데이터 타입으로 변경 가능하며, 선택한 역할(차원값/측정값)에 따라 선택 가능한 데이터 타입이 달라집니다.
* 추천 필터: 대용량 데이터를 포함한 컬럼이 있을 경우, 데이터 소스 로딩 시 긴 시간이 소요되어 타임아웃 에러가 발생할 수 있습니다. 데이터 관리자는 이와 같은 에러가 예상되는 컬럼을 추천 필터로 등록하여 대시보드나 차트 구성이 원활하게 이루어 질 수 있도록 도와줄 수 있습니다.
   * 최우선 추천 필터로 적용: 선택한 컬럼을 최우선 추천 필터로 적용할지 결정합니다.
   * 단일 항목만 선택할 수 있습니다: 해당 컬럼을 최우선 추천 필터로 적용하면 이 항목이 생깁니다. 데이터의 용량이 매우 큰 경우에는 체크하십시오.
   * 순서 수정: 클릭하면 현재 추천 필터를 적용한 컬럼들의 우선 순위를 변경할 수 있습니다.
* Missing: 컬럼 내 Null 값을 처리하는 방식에 대해 설정할 수 있습니다.
   * 대체: 여기에 입력된 값으로 Null 값이 대체됩니다.
   * 버림: Null 값을 버립니다.
   * 설정안함: Null 값이 그대로 보여집니다. 단 데이터 소스의 타임스탬프의 Null 값은 무조건 버려지게 됩니다.

데이터 소스 수집 설정을 하고 다음 버튼을 누릅니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_10.png

* 타임스틈프 설정: 세그먼트와 쿼리 단위를 설정합니다.
  * 세그먼튼 단위: 분산 노드 환경에서 동작하는 Druid의 특성을 활용하기 위해 데이터를 분할하여 저장하게 되는데 이때 저장하는 시간 단위를 결정합니다.
  * 쿼리 단위: 분석에서 수행하고자 하는 최소 시간 단위를 결정합니다. 이는 최소 단위까지의 결과를 미리 생성하여 이후에 보다 빠른 응답을 얻을 수 있도록 하기 위함입니다.
* 롤업: 롤업은 차원값을 따라 데이터를 요약하는 작업이 포함됩니다. 요약 규칙은 계층 구조를 따라 합계를 계산하거나 ‘profit=sales=expenses’와 같은 수식 집합을 적용하는 것일 수 있습니다. 즉, 롤업은 수집 시에 효과적인 옵션입니다.
* 고급설정: 적재 성능을 설정합니다. 적재 성능 설정은 수집 시 효과적인 옵션입니다. 텍스트상자에 JSON 형식의 구문을 입력하십시오. 예,

.. code-block:: python

  {maxRowsInMemory : 75000,
  maxOccupationInMemory : -1,
  maxShardLength : -2147483648,
  leaveIntermediate : false,
  cleanupOnFailure : true,
  overwriteFiles : false,
  ignoreInvalidRows : false,
  assumeTimeSorted : false}

가져온 파일에서 설정한 데이터에 관한 정보를 확인한 뒤, 이름과 설명을 입력하고 완료 버튼을 누르면 데이터 소스가 생성됩니다. 이때, 원천 데이터에서부터 Metatron 내장 엔진(Druid)으로 저장(ingestion)하기 때문에 데이터량에 따라 수 초~분의 시간이 소요될 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_12.png

데이터 적재가 완료 된 후 상태를 확인해 볼 수 있습니다. 상태가 ENABLED로 되어 있으며, 히스토그램이 보입니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_13.png

'데이터' 탭으로 이동을 하면 적재된 데이터를 테이블 형태로 확인이 가능합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_15.png

데이터 소스 관리 홈 화면으로 이동하면 생성된 데이터 소스를 화면에서 확인할 수 있습니다. ingestion이 수행되는 중에는 아래와 같이 상태가 Disabled 로 표시되게 되고 ingestion이 완료되면 Enabled로 변경됩니다. 이때부터 데이터 소스를 사용할 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_file_16.png

.. _create_datasource_from_db:

DB로 데이터소스 만들기
=================================================

원천 데이터 타입 선택 화면에서 ‘데이터베이스’를 선택합니다. '데이터베이스'를 선택했을 경우에는 아래와 같은 데이터커넥션 세팅 화면에서 기존에 생성된 데이터 커넥션을 불러오거나 새로운 데이터베이스 접속 정보를 입력합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_1.png

*  데이터커넥션 로드: 현재 저장되어 있는 데이터 커넥션을 선택할 수 있습니다. 선택하면 해당 데이터 커넥션에 연결되어 있는 데이터베이스에 대한 접근 정보가 자동으로 불러와집니다. 단, 이때도 ‘Test’ 버튼을 눌러서 연결 검증은 반드시 실시해야 합니다.
* DB 타입: 연결할 데이터베이스의 타입을 선택합니다. 현재 총 5개 타입의 데이터베이스를 지원합니다. (MySQL, Hive, presto)
* 수집 타입: 데이터 소스가 데이터를 수집하는 방식을 선택합니다.
   * 수집형 데이터(Ingested): 데이터를 Metatron 서버에 직접 저장하는 방식으로 수집된 데이터 소스들이 출력됩니다.
   * 연결형 데이터(Linked): 연결된 데이터베이스에서 필요한 시점마다 데이터를 가져오는 방식의 데이터 소스들이 출력됩니다.
* Host: 연결할 호스트 값을 입력합니다.
* Port: 연결할 포트 번호를 입력합니다.
* 사용자이름: 해당 데이터베이스의 username을 입력합니다.
* 비밀번호: 해당 데이터베이스의 비밀번호를 입력합니다.
* 유효성 체크: 모든 입력 항목을 다 작성하면 테스트 버튼이 활성화 됩니다. 클릭하면 커넥션이 정상적인지 여부가 버튼 하단에 나타납니다. 정상적이라면 ‘유효한 커넥션’, 비정상적이라면 ‘잘못된 커넥션’ 이라는 문구가 나타납니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_2.png

다음은 MySQL에 대해 입력한 예제 입니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_3.png

유효성 체크를 통해 '유효한 커넥션' 확인이 되었습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_4.png

데이터를 선택합니다. 연결된 데이터베이스 계정에서 테이블을 선택할 수도 있고 쿼리문을 직접 작성할 수도 있습니다.

**테이블**
데이터베이스와 테이블명을 선택한 후 실제 저장될 데이터가 조회되면, 확인 후 ‘다음’ 버튼을 누릅니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_5.png

* 데이터베이스 선택: 선택한 데이터 커넥션과 연결되어 있는 데이터베이스 중 하나를 선택합니다.
* 스키마 선택: 선택한 데이터베이스에 속한 테이블 중 하나를 선택합니다.

**쿼리**
원하는 데이터를 가져올 수 있는 쿼리문을 직접 작성하고 ‘실행’ 버튼을 클릭하면 하단에 데이터
가 보여집니다. 데이터를 확인한 후 ‘다음’ 버튼을 누르십시오.

.. figure:: /_static/img/discovery/part02/create_datasource_db_5_2.png

이후 절차는 파일에서 데이터를 가져오는 방식은 '파일로 데이터 소스 만들기'와 동일 합니다. 단, 데이터베이스로부터 데이터 소스를 생성할 경우 수집 설정 시 다음과 같은 추가적인 설정 항목이 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_6.png

**수집 설정**

데이터 수집에 관해 설정 합니다. '1회 수집'과 '주기적 수집' 두가지 옵션이 있습니다.

1회 수집: 선택하면 데이터 저장을 이번 한번만 하게 됩니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_7.png

수집 데이터 범위: 수집 데이터의 범위를 설정합니다.
* 전체: 데이터 수집을 주기적으로 실행할 경우, 전체 데이터를 수집합니다.
* 최대 건수: 데이터의 시작부터 특정 몇 개 까지만 넣을 것인지를 설정합니다.

주기적 수집: 기간을 두어 데이터 저장을 주기적으로 실행합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_8.png

수집 데이터 범위: 수집 데이터의 범위를 설정합니다.
* 증감분 데이터: 배치주기에 따라 데이터 수집을 주기적으로 실행 할 경우, 특정 몇 개 까지만 넣을 것인지를 설정합니다.
* 전체: 데이터 수집을 주기적으로 실행할 경우, 전체 데이터를 수집합니다.

타임스탬프 설정은 '세그먼트 단위'로 일, 월, 년 단위를 선택 할 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_9.png

쿼리 단위로 초, 분, 시간 단위를 선택 할 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_10.png

polaris-dashboard라는 이름으로 데이터소스를 생성 합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_11.png

다음과 같은 화면을 통해 생성 상태를 확인 할 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_db_12.png

.. _create_datasource_from_stagingdb:

StagingDB로 데이터소스 만들기
=================================================

Metatron의 내부 Hive 데이터베이스에서 가져온 데이터를 기반으로 데이터 소스를 생성합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_stagingdb_1.png

데이터베이스와 테이블을 선택하면, 데이터를 보여 줍니다.

.. figure:: /_static/img/discovery/part02/create_datasource_stagingdb_2.png

스키마 생성은 다음과 같으며, 이 부분은 '데이터베이스로 데이터 소스 만들기'와 동일하므로 해당 파트를 참고 바랍니다.

.. figure:: /_static/img/discovery/part02/create_datasource_stagingdb_3.png

수집 설정을 완료합니다. 이 부분은 '데이터베이스로 데이터 소스 만들기'와 동일하므로 해당 파트를 참고 바랍니다.

.. figure:: /_static/img/discovery/part02/create_datasource_stagingdb_5.png

다음과 같은 화면을 통해 생성 상태를 확인 할 수 있습니다.

.. figure:: /_static/img/discovery/part02/create_datasource_stagingdb_6.png

.. _create_datasource_from_metatron:

메타트론 엔진을 통해 데이터소스 추가하기
=================================================

Metatron 이전 버전에 저장된 데이터 소스를 마이그레이션 합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_metatron_engine_1.png

아래와 같이 이전 Metatron에서 만든 데이터 소스가 좌측 화면에 나열되면, 그중에서 현 버전으로 마이그레이션 하고자 하는 데이터 소스들이 보입니다. 추가를 원하는 대상들을 체크박스를 통해 선택 합니다.

.. figure:: /_static/img/discovery/part02/create_datasource_metatron_engine_2.png

'마침' 버튼을 누르면 선택한 데이터 소스들이 마이그레이션 됩니다.

.. figure:: /_static/img/discovery/part02/create_datasource_metatron_engine_3.png
