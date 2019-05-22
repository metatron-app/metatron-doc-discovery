얄람 룰 내역 열람·수정하기
-------------------------------------------

.. |icon_period_edit| image:: /_static/img/anomaly/part05/icon_period_edit.png
.. |icon_rule_settings_edit| image:: /_static/img/anomaly/part05/icon_rule_settings_edit.png
.. |icon_alarm_history| image:: /_static/img/anomaly/part05/icon_alarm_history.png


**Alarm Rule** 탭 메뉴에서는 등록된 알람 룰을 열람·수정할 수 있습니다. 또한 이 메뉴에서는 선택한 알람 룰의 따라 산출되고 있는 데이터 abnormal score 현황도 쉽게 파악할 수 있습니다.

알람 룰 메뉴는 다음의 두 가지 페이지로 구성되어 있습니다.

	* :ref:`alarm_rule_list`
	* :ref:`alarm_rule_details`

.. _alarm_rule_list:

알람 룰 리스트
========================================

**Alarm Rule** 탭으로 들어가면 현재 등록된 알람 룰들을 열거하여 보여줍니다.

	.. figure:: /_static/img/anomaly/part05/complete_alarm_rules_02.png
	   :align: center
	   :alt: alarm rule list

리스트에 표시되는 정보는 아래와 같으며, 이를 기준으로 열거할 룰을 필터링하거나 검색할 수 있습니다.

	* **Current Status:** 해당 룰에 따른 모니터링 결과 상태
	* **Alarm Rule Name:** 해당 룰의 이름
	* **DataSource:** 모니터링 대상 데이터 소스
	* **Measure:** 모니터링 대상 측정값 컬럼
	* **Alarm Interval:** 알람 발생 주기
	* **Condition:** 해당 룰에 적용된 알람 발생 조건의 개수
	* **Alarm:** 해당 룰에 의해 발생한 알람의 수
	* **Running:** 해당 룰의 모니터링 활성 여부
	* **Updated:** 해당 룰을 마지막으로 업데이트한 시간과 사용자

.. _alarm_rule_details:

알람 룰 상세
========================================

알람 룰 리스트에 열거된 항목 중 하나를 선택하면 해당 알람 룰에 대한 상세 정보를 열람하고 설정을 수정할 수 있습니다. 화면 좌측에서는 모니터링 현황을 시각화하여 보여주고, 우측에는 알람 룰 조건 설정값이 표시됩니다. 

	.. figure:: /_static/img/anomaly/part05/alarm_rule_detail_01.png
	   :align: center
	   :alt: alarm rule detail

모니터링 현황 영역 상단에는 화면에 보여주는 모니터링 기간 설정값이 표시되어 있습니다. |icon_period_edit| 아이콘을 클릭하면 기간 설정값을 변경할 수 있습니다.

	.. figure:: /_static/img/anomaly/part05/alarm_rule_detail_02.png
	   :align: center
	   :alt: change visualize range

알람 룰 조건 설정 영역에서는 기존에 설정된 알람 룰 설정값을 수정할 수 있습니다. 자세한 내용은 :ref:`alarm_rule_settings` 항목을 참조하십시오.

	.. figure:: /_static/img/anomaly/part05/alarm_rule_detail_03.png
	   :align: center
	   :alt: change alarm rule condition

우측 끝단에서 |icon_alarm_history| 버튼을 누르면 **Conditions** 패널이 **Alarm History** 패널로 전환되어 지금까지 발생한 알람 이력을 보여줍니다(다시 |icon_rule_settings_edit| 버튼을 누르면 **Conditions** 패널로 되돌아옵니다).

	.. figure:: /_static/img/anomaly/part05/alarm_rule_detail_04.png
	   :align: center
	   :alt: list alarm history


