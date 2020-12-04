알람 내역 열람하기
----------------------------------------------

**Alarm** 탭 메뉴에서는 지금까지 발생한 알람 내역을 확인할 수 있습니다. 알람의 전체적인 현황을 보여주는 :ref:`Statistics` 페이지와는 다르게 이 메뉴에서는 보다 개별적인 알람들을 열람하고 탐색하는 데 최적화된 UI를 제공합니다.

이 메뉴는 다음의 두 가지 페이지로 구성되어 있습니다.

	* :ref:`alarm_list`
	* :ref:`alarm_details`

.. _alarm_list:

알람 리스트
==================================================

**Alarm** 탭으로 들어가면 현재까지 발생한 알람들을 열거하여 보여줍니다. 화면 상단에 있는 **Alarm rule** / **Timeline** 선택 박스를 이용하여, 알람 리스트를 알람 룰 기준으로 정렬할 수도 있고, 발생한 시간 기준으로 정렬할 수도 있습니다.

* **Alarm rule** (알람 룰 기준으로 정렬)

	.. figure:: /_static/img/anomaly/part03/alarm_list_01_1.jpg
	   :align: center
	   :alt: alarm list

* **Timeline** (발생 시간 기준으로 정렬)

	.. figure:: /_static/img/anomaly/part03/alarm_list_02_1.jpg
	   :align: center
	   :alt: timeline type display

카테고리 맨 끝에 있는 **+ Load more**\를 클릭하면 해당 카테고리 내 더 많은 알람 항목을 보여줍니다.

.. _alarm_details:

알람 상세
==================================================

알람 리스트에 열거된 항목 중 하나를 선택하면 해당 알람에 대한 상세 정보를 열람할 수 있습니다. 아래는 알람 상세 페이지의 각 영역별 설명입니다.

Summary
``````````````````````````````````````````````````

이 영역에서는 해당 알람의 발생 현황을 보여줍니다. 정해진 주기에 따라 알람이 연속적으로 발생하면 1개의 알람 항목으로 계속 유지되며, 알람의 심각도(severity) 기준을 넘은 데이터 포인트 수가 함께 표기됩니다. 또한 알람을 확인한 후 처리 결과를 기록할 수 있도록 링크를 제공합니다. 내가 생성한 알람 룰이 아닌 경우 **Subscribe**\을 눌러 해당 알람 룰로 추후 발생한 알람들에 대해 알림을 받을 수 있습니다.

아래 그림 예시에서는 알람이 2번 연속적으로 발생하였고(**Alarms**), 알람 확인 주기가 1분이기 때문에 2건의 알람이 총 120초 동안 지속된 것을 보여주고 있습니다.(**Elapsed Time**).

	.. figure:: /_static/img/anomaly/part03/alarm_detail_01.png
	   :align: center
	   :alt: alarm overview
	   :scale: 50%

Alarm History 영역
``````````````````````````````````````````````````

이 영역에서는 해당 알람에 적용된 알람 룰에 의해 발생한 알람의 이력을 보여줍니다. 우측 링크 아이콘을 누르면 해당 알람으로 이동합니다.

	.. figure:: /_static/img/anomaly/part03/alarm_detail_02.png
	   :align: center
	   :alt: alarm history
	   :scale: 50%


Alarm Confirmation 탭
``````````````````````````````````````````````````

우측 탭 첫번째 메뉴에서는 알람 확인 후 해당 알람 구독자 리스트를 확인하고(**Subscriber**) 알람을 확인하여 상태를 기록하고(**Alarm Confirm**) 작업자가 기록을 남길 수 있는 커뮤니케이션 기능을 제공합니다.

알람 확인 항목은 4가지로 구분됩니다.

	* **미처리**\: 알람 최초 발생 시 기본값. 해당 알람에 대해 어떠한 조치도 취하지 않은 상태
	* **알림 중지**\: 해당 알람을 사용자가 확인하여 더이상 알림(notification)을 받지 않는 상태
	* **처리 완료**\: 해당 알람을 확인하고 조치를 취한 상태로, 해당 알람에 관련된 tag 기록 가능
	* **오탐**\: 이상 상태가 아닌데 발생한 알람

	.. figure:: /_static/img/anomaly/part03/alarm_detail_03.png
	   :align: center
	   :alt: alarm confirmation
	   :scale: 50%

구독자(Subscriber)는 해당 알람에 관계된 유저를 아이디로 검색하여 추가할 수 있으며, E-mail에 체크하면 해당 유저 정보에 기록된 이메일로 알람을 발송합니다.

	.. figure:: /_static/img/anomaly/part03/alarm_detail_04.png
	   :align: center
	   :alt: alarm confirmation
	   :scale: 50%



Alarm Rule 탭
``````````````````````````````````````````````````

이 영역에서는 해당 알람의 심각도와 알람 발생 시각, 그리고 이 알람을 발생시킨 룰과 데이터 소스에 관련된 정보를 보여줍니다.

	* **Severity**\: 현재 발생한 알람의 심각도 
	* **Occurrence Time**\: 알람 발생 시각
	* **Alarm Rule**\: 알람을 발생시킨 임계치와 임계치 초과 건수/알람 발생 검사 주기. 우측 링크 버튼 클릭 시 해당 알람 룰로 이동
	* **Alarm Interval**\: 알람 발생 검사 주기. 1분일 경우 1분마다 Abnormal score가 임계치를 넘었는지 검사
	* **Data Source**\: 데이터 소스 정보
	* **Granularity**\: 데이터 소스가 적재되는 시간 단위
	* **Training Interval**\: 모델 학습을 위해 사용한 데이터 기간
	* **Scoring Method**\: 여러 개의 측정값(Measure)을 사용할 경우 Abnormal Score를 계산하는 방식

	.. figure:: /_static/img/anomaly/part03/alarm_detail_05.png
	   :align: center
	   :alt: alarm info
	   :scale: 50%


View by Chart 탭
``````````````````````````````````````````````````

이 탭 영역에서는 해당 알람 구간에서 모니터링한 데이터의 Abnormal Score 를 그래프로 보여줍니다. 각 조건별 점수 임계치(Threshold)에 상응하는 알람(``Critical``, ``Major``, ``Moderate``, ``Low``) 별로 발생된 알람의 건수를 확인할 수 있습니다. 차트 산출 방식에 관해서는 :ref:`basic_principles` 항목을 참조하십시오.

	.. figure:: /_static/img/anomaly/part03/alarm_detail_06.png
	   :align: center
	   :alt: chart view

	* **Total abnormal score:** 알람 룰에 포함된 모든 측정값 컬럼에 대한 Abnormal Score를 보여줍니다.
	* **Chart by measures:** 알람 룰에 포함된 각 개별 측정값 컬럼 데이터의 예측치와 실제치의 추이를 보여줍니다.

View by Table 탭
``````````````````````````````````````````````````

이 탭 영역에서는 각 알람 발생 건별로 데이터 실제치와 예측치, 그리고 Abnormal Score를 표 형식으로 나열합니다.

	.. figure:: /_static/img/anomaly/part03/alarm_detail_07.png
	   :align: center
	   :alt: table view

