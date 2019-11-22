.. _scheduled_run:

워크플로우 실행 예약하기
-------------------------------------------------

.. |exec| image:: /_static/img/integrator/part03/icon_exec.png
.. |bin| image:: /_static/img/integrator/part03/icon_bin.png

워크플로우를 정해진 주기에 따라 반복적으로 실행해야할 경우 이러한 실행을 예약하고, 그 결과를 SMS, 메신저, 이메일 등으로 보고받을 수 있습니다.

예약 실행 리스트
==================================

워크플로우 에디터 우측 하단의 실행 내역 표시 영역에서 **Scheduled run** 탭을 클릭하면, 아래와 같이 해당 워크플로우에 대해 등록된 예약 실행 리스트가 나타납니다.
이 리스트에는 각 예약 실행 항목의 실행 현황이 표시되며, |exec| 버튼을 누르면 해당 예약 건이 실행되고 |bin| 버튼을 누르면 삭제됩니다.

	.. figure:: /_static/img/integrator/part03/schedule_list.png

예약 실행 추가하기
==================================

Scheduled run 영역에서 **+ Create execution schedule**\을 클릭하면 다음과 같이 새 예약 실행을 생성하는 대화 상자가 열립니다. 아래 설명을 참조하여 각 필드 입력 후 **생성** 버튼을 클릭하십시오.

	.. figure:: /_static/img/integrator/part03/create_schedule.png

	* **Name:** 예약 실행의 이름을 입력합니다.
	* **Description:** 예약 실행에 대한 설명을 입력합니다.
	* **Tags:**
	* **Workflow:** 예약 실행할 워크플로우를 선택합니다.
	* **Period:** 예약 실행될 기간의 시작과 끝을 설정합니다.
	* **Frequency:** 예약실행되는 기간 중 반복 주기를 설정합니다.
	* **Concurrency:**
	* **Timeout(min):**
	* **Datasets:**
	* **Configuration:**
	* **Variables:**
	* **Alert:** 