데이터 스냅샷 결과 이용하기
----------------------------------------

데이터플로우를 통해 생성된 **데이터 스냅샷**\은 다음과 같이 활용할 수 있습니다.

	* :ref:`snapshot_result_check`
	* :ref:`snapshot_into_druid`
	* :ref:`snapshot_into_csv`

.. _snapshot_result_check:

데이터 스냅샷 결과 확인하기
========================================

스냅샷의 생성 단계는 다음과 같은 3가지 경우로 분류됩니다.

	* **성공** = SUCCEEDED
	* **실패** = FAILED
	* **처리중** = INITIALIZING, RUNNING, WRITING, TABLE_CREATING, CANCELING

스냅샷의 상세한 처리 결과는 다음 2가지 경로를 통해 확인할 수 있습니다.

	* **MANAGEMENT** > **데이터 프리퍼레이션** > **데이터 스냅샷**\의 스냅샷 목록을 통해서 확인

		.. figure:: /_static/img/discovery/part07/data_snapshot_1.png

	* **데이터플로우**\의 :doc:`룰 편집 <edit_rules>` 화면 우측에서 **스냅샷(#)** 탭을 클릭

		.. figure:: /_static/img/discovery/part07/data_snapshot_2.png

생성에 성공한 스냅샷의 상세 보기 화면으로 들어가면, 데이터의 유효성 비율, 생성된 스냅샷의 그리드 등을 확인할 수 있고, 스냅샷 결과를 :ref:`CSV 파일로 다운로드 <snapshot_into_csv>`\할 수 있습니다.

	.. figure:: /_static/img/discovery/part07/data_snapshot_3.png

유효한 데이터가 생성되지 못한 스냅샷의 상세 보기 화면으로 들어가면, 실패를 발생시킨 예외의 로그가 표시됩니다.

	.. figure:: /_static/img/discovery/part07/data_snapshot_4.png

.. _snapshot_into_druid:

Metatron 엔진으로 적재하기
========================================

(개발예정)

.. _snapshot_into_csv:

CSV파일로 다운로드 받기
========================================

생성에 성공한 스냅샷의 상세 보기에서는 **CSV로 다운로드**\가 가능합니다.

	.. figure:: /_static/img/discovery/part07/data_snapshot_5.png

다운로드한 파일은 표준 CSV 형식으로, 'comma'로 구분되고 'new line'으로 개행합니다. 

	.. figure:: /_static/img/discovery/part07/data_snapshot_6.png