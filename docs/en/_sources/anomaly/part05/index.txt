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

	.. figure:: /_static/img/anomaly/part04/alarm_list_01.png
	   :align: center
	   :alt: alarm list

* **Timeline** (발생 시간 기준으로 정렬)

	.. figure:: /_static/img/anomaly/part04/alarm_list_03.png
	   :align: center
	   :alt: timeline type display

카테고리 맨 끝에 있는 **+ Load more**\를 클릭하면 해당 카테고리 내 더 많은 알람 항목을 보여줍니다.

	.. figure:: /_static/img/anomaly/part04/alarm_list_02.png
	   :align: center
	   :alt: alarm list show more

.. _alarm_details:

알람 상세
==================================================

알람 리스트에 열거된 항목 중 하나를 선택하면 해당 알람에 대한 상세 정보를 열람할 수 있습니다. 아래는 알람 상세 페이지의 각 영역별 설명입니다.

Alarm Info 영역
``````````````````````````````````````````````````

이 영역에서는 해당 알람의 심각도와 발생 시각, 그리고 이 알람을 발생시킨 룰의 설정값을 보여줍니다.

	.. figure:: /_static/img/anomaly/part04/alarm_detail_01.png
	   :align: center
	   :alt: alarm info


알람 현황 일람 상자
``````````````````````````````````````````````````

이 영역에서는 해당 알람의 발생 현황을 보여줍니다. 정해진 주기에 따라 알람이 연속적으로 발생하면 1개의 알람 항목으로 계속 유지됩니다. 아래 그림 예시에서는 알람이 4번의 주기 동안 연속적으로 발생하였고(**Alarms**), 주기가 1분이었기 때문에 4건의 알람이 총 4분 동안 지속된 것입니다(**Elapsed Time**).

	.. figure:: /_static/img/anomaly/part04/alarm_detail_02.png
	   :align: center
	   :alt: alarm overview

Alarm History 영역
``````````````````````````````````````````````````

이 영역에서는 해당 알람에 적용된 알람 룰에 의해 발생한 알람의 이력을 보여줍니다.

	.. figure:: /_static/img/anomaly/part04/alarm_detail_03.png
	   :align: center
	   :alt: alarm history

Chart View 탭
``````````````````````````````````````````````````

이 탭 영역에서는 해당 알람 구간 내에서 모니터링한 aggregate 데이터의 abnormal score 추이를 차트로 보여줍니다. 여기서는 각 조건별 점수 한계값에 도달하여 상응하는 알람(``Critical``, ``Major``, ``Moderate``, ``Low``)을 일으킨 발생 건도 보고해줍니다. 차트 산출 방식에 관해서는 :ref:`basic_principles` 항목을 참조하십시오.

	.. figure:: /_static/img/anomaly/part04/alarm_detail_04.png
	   :align: center
	   :alt: chart view

	* **Total abnormal score:** 알람 룰에 포함된 모든 측정값 컬럼에 대한 abnormal score를 보여줍니다.
	* **Chart by measures:** 알람 룰에 포함된 각 개별 측정값 컬럼 데이터의 예측치와 실제치의 추이를 보여줍니다.

Table View 탭
``````````````````````````````````````````````````

이 탭 영역에서는 각 알람 발생 건별로 데이터 실제치와 예측치, 그리고 abnormal score를 보여줍니다.

	.. figure:: /_static/img/anomaly/part04/alarm_detail_05.png
	   :align: center
	   :alt: table view

