알람 룰 내역 열람·수정하기
-------------------------------------------

.. |icon_period_edit| image:: /_static/img/anomaly/part04/icon_period_edit.png
.. |icon_rule_settings_edit| image:: /_static/img/anomaly/part04/icon_rule_settings_edit.png
.. |icon_alarm_history| image:: /_static/img/anomaly/part04/icon_alarm_history.png


**Alarm Rule** 탭 메뉴에서는 등록된 알람 룰을 열람·수정할 수 있습니다. 또한 이 메뉴에서는 선택한 예측 모델에 따라 산출되고 있는 데이터 abnormal score 현황도 쉽게 파악할 수 있습니다.

	* :ref:`alarm_rule_list`
	* :ref:`alarm_rule_details`
	* :ref:`alarm_rule_group`

.. _alarm_rule_list:

알람 룰 리스트
========================================

**Alarm Rule** 탭으로 들어가면 현재 등록된 알람 룰들을 열거하여 보여줍니다.

	.. figure:: /_static/img/anomaly/part04/complete_alarm_rules_02.png
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
	* **Owner:** 해당 룰을 생성한 사용자

.. _alarm_rule_details:

알람 룰 상세
========================================

알람 룰 리스트에 열거된 항목 중 하나를 선택하면 해당 알람 룰에 대한 상세 정보를 열람하고 설정을 수정할 수 있습니다. 화면 좌측에서는 모니터링 현황을 시각화하여 보여주고, 우측에는 알람 룰 조건 설정값이 표시됩니다. 

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_01.png
	   :align: center
	   :alt: alarm rule detail

모니터링 현황 영역 상단에는 화면에 보여주는 모니터링 기간 설정값이 표시되어 있습니다. |icon_period_edit| 아이콘을 클릭하면 기간 설정값을 변경할 수 있습니다.

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_02.png
	   :align: center
	   :alt: change visualize range

우측의 조건 영역은 해당 룰의 전반적인 설정을 조정할 수 있습니다.

	* **Alarm Start:** 알람이 발생하는지 검사하기 시작한 시간
	* **Alarm Interval:** 시스템이 알람 발생 조건을 검사하는 주기 
	* **Running State:** 해당 알람 룰 조건을 검사하는 중인지(Running) 안 하는 중인지(Stopped)에 관한 여부

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_03_01.png
	   :align: center
	   :alt: change alarm rule condition

Subscribers 우측 아이콘을 누르면 해당 알람 룰의 구독자를 추가/변경할 수 있습니다.

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_03_02.png
	   :align: center
	   :alt: change alarm rule condition

해당 룰로 인해 알람이 발생 할 때 추가적인 작업을 하도록 설정할 수 있는 Post Processing을 제공합니다. Post Processing은 현재 두 가지 기능을 제공하고 있습니다.

	* **Script Execution:** 쉘 스크립트를 등록하여 실행
	* **Additional Chart:** 알람 상세에 표 차트를 노출 

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_03_03.png
	   :align: center
	   :alt: change alarm rule condition


또한 기존에 설정된 알람 발생 기준값을 수정할 수 있습니다. 자세한 내용은 :ref:`alarm_rule_settings` 항목을 참조하십시오.

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_03.png
	   :align: center
	   :alt: change alarm rule condition

우측 끝단에서 |icon_alarm_history| 버튼을 누르면 **Conditions** 패널이 **Alarm History** 패널로 전환되어 지금까지 발생한 알람 이력을 보여줍니다(다시 |icon_rule_settings_edit| 버튼을 누르면 **Conditions** 패널로 되돌아옵니다).

	.. figure:: /_static/img/anomaly/part04/alarm_rule_detail_04.png
	   :align: center
	   :alt: list alarm history

.. _alarm_rule_group:

알람룰 그룹 및 복수 알람룰 관리
========================================

메타트론 어노말리에는 복수개의 알람룰을 함께 그룹핑할 수 있는 알람룰 그룹이 존재합니다. 알람룰 리스트 상에서 폴더 아이콘으로 표시되며 클릭하면 해당 룰 그룹에 속한 알람 룰들의 리스트로 이동합니다.

	.. figure:: /_static/img/anomaly/part04/alarm_rule_group.png
	   :align: center
	   :alt: alarm rule group

알람룰 그룹에 룰을 이동하거나 복수의 알람룰들의 조건 변경, 재학습을 위해서는 룰 이름 앞의 체크박스 선택 후 우측 상단의 메뉴에서 각 액션을 선택하여 진행합니다.

	.. figure:: /_static/img/anomaly/part04/alarm_rules_edit.png
	   :align: center
	   :alt: edit multiple alarm rules

	* **Cretae New Group**\: 새로운 알람룰 그룹을 생성합니다. 이름과 설명을 입력하면 즉시 룰그룹이 생성됩니다.
	* **Set Alarm Rule Condition**: 선택된 복수의 알람룰의 조건을 동시에 변경합니다.
	* **Move Alarm Rule Condition**: 선택된 알람룰들을 루트에서 특정 룰그룹으로, 또는 룰그룹에서 루트로 이동합니다.
	* **Alarm Rule Retraining**: 선택된 복수의 알람룰들을 동시에 재학습합니다. 이때 모델은 추천 모델로 자동 선택됩니다.
	* **Delete Group and Alarm Rule**: 선택된 알람룰 및 룰그룹을 삭제합니다.
