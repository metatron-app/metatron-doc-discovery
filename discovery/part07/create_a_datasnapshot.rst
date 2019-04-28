데이터 스냅샷 만들기
----------------------------------------------

데이터플로우에서 룰 편집이 완료된 데이터셋은 '데이터 스냅샷'을 찍어서 로컬 PC에 파일로 다운로드 받거나, Metatron 엔진으로 즉시 적재할 수 있습니다. 데이터 스냅샷을 실행하면 10,000개 행 이하의 샘플 데이터에만 적용된 룰을 전체 데이터에 대해 적용하게 됩니다.

스냅샷을 만드는 방법은 다음과 같습니다.

	#. :doc:`룰 편집 <edit_rules>` 창 우측 상단에 위치한 **데이터 스냅샷** 버튼을 클릭합니다.

		.. figure:: /_static/img/discovery/part07/create_a_datasnapshot_1.png

	#. 스냅샷 생성을 위한 팝업이 나타나면, 스냅샷 생성 위치를 FILE과 HIVE(STAGING_DB) 중에서 지정합니다.

		.. figure:: /_static/img/discovery/part07/create_a_datasnapshot_2.png

		* FILE 경로로 스냅샷의 위치를 지정하는 경우, **CSV** 또는 **JSON**\의 포맷으로 생성할 수 있습니다.

			.. figure:: /_static/img/discovery/part07/create_a_datasnapshot_3.png

		* HIVE 옵션은 STAGING_DB가 설정된 경우에만 활성화됩니다. 스키마명과 테이블명을 지정하면 해당 테이블에 스냅샷이 생성됩니다.

			.. figure:: /_static/img/discovery/part07/create_a_datasnapshot_4.png

	#. 스냅샷을 생성하면 동일한 창에서 스냅샷 생성 상태와 정보를 조회할 수 있습니다.

		.. figure:: /_static/img/discovery/part07/create_a_datasnapshot_5.png
