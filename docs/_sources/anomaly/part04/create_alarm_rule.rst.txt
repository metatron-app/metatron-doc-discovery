알람 룰 만들기
-----------------------------------------------------

.. |icon_set| image:: /_static/img/anomaly/part04/icon_set.png
.. |icon_split| image:: /_static/img/anomaly/part04/icon_split.png
.. |icon_ano_filter| image:: /_static/img/anomaly/part04/icon_ano_filter.png
.. |icon_custom_column| image:: /_static/img/anomaly/part04/icon_custom_column.png
.. |icon_info| image:: /_static/img/anomaly/part04/icon_info.png
.. |icon_multirule| image:: /_static/img/anomaly/part04/icon_multirule.png
.. |icon_rule_detail| image:: /_static/img/anomaly/part04/icon_rule_detail.png

Metatron Anomaly는 가장 기본이 되는 단일 알람 룰 생성과 다량의 룰을 한번에 생성할 수 있는 복수 알람 룰 생성 기능을 지원합니다.

.. _single_alarm_rule:

알람 룰 생성
*******************************************************

Anomaly는 다음의 절차를 순차적으로 수행하도록 안내하여 사용자가 원하는 알람 룰을 쉽게 생성할 수 있도록 지원해줍니다.

	* :ref:`select_datasource`
	* :ref:`select_columns`
	* :ref:`configure_training`
	* :ref:`select_model`
	* :ref:`alarm_rule_settings`
	* :ref:`complete_rule`

.. _select_datasource:

데이터 소스 선정
======================================================

알람 룰을 생성하기 위해서는 가장 먼저 모니터링할 데이터 소스를 선정해야 합니다.

	#. Alarm Rule 우측 상단에 있는 **Create Alarm Rule** 버튼을 클릭합니다.

		.. figure:: /_static/img/anomaly/part04/create_rule_01.png
		   :align: center
		   :alt: create rule

	#. 모니터링하고자 하는 데이터 소스를 선택합니다.

		.. figure:: /_static/img/anomaly/part04/choose_data_source_01.png
		   :align: center
		   :alt: select datasource

.. _select_columns:

모니터링할 지표 선택하기
======================================================

데이터 소스를 선택하면 다음 화면으로 넘어가면서 좌측에 **Data** 패널이 열립니다. 이 패널에서 아래와 같이 모니터링할 지표를 선택할 수 있습니다.

	#. **Measure 선택**\: **Measure** 영역에서 알람을 설정하고자 하는 측정값 컬럼을 선택합니다. 클릭한 측정값 컬럼은 Aggregate 선반에 자동으로 옮겨집니다.

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_measure_01.png
		   :align: center
		   :alt: select measure

	#. **사용자 컬럼 추가**\: 필요한 경우 기존 컬럼에 수식을 적용하여 새로운 컬럼을 만들 수도 있습니다. **Measure** 영역의 우측 상단에서 |icon_custom_column| 버튼을 클릭하여 대화 상자를 열고 직접 새로운 컬럼을 만들어 보세요.

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_measure_02.png
		   :align: center
		   :alt: make custem measure rule

	#. **Measure 집계 방식 변경**\: Aggregate 선반에 올려진 각 컬럼을 클릭하여 원하는 집계 방식을 선택합니다. 기본값은 SUM으로 지정되어 있습니다.

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_measure_03.png
		   :align: center
		   :alt: select aggregation type

	#. **Split**\: 필요할 경우 차원값 컬럼을 기준으로 aggregate 데이터를 분할할 수 있습니다. **Dimension** 영역에서 분할의 기준으로 삼을 측정값 컬럼에 마우스 커서를 오버한 후 |icon_split| 버튼을 클릭하세요. split 가능한 개수는 최대 10개이며, dimension 값이 10개 이상이라면 임의의 값 10개가 선택됩니다. 

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_measure_04.png
		   :align: center
		   :alt: splite measure by dimension

	#. **Dimension 값으로 필터링**\: 필요할 경우 차원값(Dimension) 컬럼을 기준으로 데이터를 필터링할 수 있습니다. **Dimension** 영역에서 필터를 설정할 측정값 컬럼에 마우스 커서를 오버한 후 |icon_ano_filter| 버튼을 클릭하세요. 그 후 아래 화면처럼 모니터링이 필요한 특정 범주를 선택하세요. 

		.. figure:: /_static/img/anomaly/part04/choose_metrics_add_filter_01.png
		   :align: center
		   :alt: select filter value

.. _configure_training:

트레이닝 기간 설정하기
======================================================

모니터링할 지표 선택을 마쳤으면 **Training interval** 패널에서 예측 모델 트레이닝에 사용할 데이터 범위를 지정할 수 있습니다.

	#. 모델 학습에 사용할 데이터의 기본 시간 단위를 **Granularity** 메뉴에서 결정할 수 있습니다. 그래프를 보면서 데이터의 패턴을 가장 잘 보여주는 형태의 단위를 선택합니다.

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_training_interval_01.png
		   :align: center
		   :alt: select granularity

	#. 모델 학습에 사용할 데이터의 범위를 설정합니다. 위에 설정한 기본 Granularity보다 같거나 큰 단위로 학습할 데이터 범위를 입력할 수 있습니다.

		.. figure:: /_static/img/anomaly/part04/choose_metrics_select_training_interval_02.png
		   :align: center
		   :alt: select specific time

	#. 모든 설정을 마쳤으면 **Next**\를 클릭합니다.

.. _select_model:
	
모델 선택하기
======================================================

이제 **Model** 패널로 넘어가서 어떤 예측 모델을 사용할지 선택합니다. Anomaly는 앞서 설정한 학습 데이터 기간으로 각각의 모델을 트레이닝시킨 후 정확도를 계산합니다. 아래 두 방법 중 하나를 통해 적합한 예측 모델을 선택할 수 있습니다.

	* **추천 모델 사용**\: 기본적으로 우측에 표시되는 정확도 점수(100점 만점)가 가장 높은 모델이 **Recommend** 태그와 함께 자동 선택됩니다.
	
		.. figure:: /_static/img/anomaly/part04/choose_model_01.png
		   :align: center
		   :alt: auto training model
	
	* **비교 후 직접 선택**\: 각 모델을 선택하면 예측값과 Abnormal Score를 그래프에서 볼 수 있습니다. 가장 적합하다고 생각되는 모델을 직접 선택할 수 있습니다. 모델명 우측 아이콘에 마우스를 오버하면 해당 모델이 학습된 상세 값을 볼 수 있습니다.
	
		.. figure:: /_static/img/anomaly/part04/choose_model_02.png
		   :align: center
		   :alt: model details

		* **Multivariate 모델 선택**\: 룰 생성 2단계에서 1개의 measure 및 1개의 dimension으로 split했다면 다변량 모델 중 Multivariate Mean Model을 사용할 수 있습니다. (추후 다양한 모델 추가 예정) 해당 모델은 각 dimension value에 대한 measure 값들의 중앙값을 계산하는 모델로, anomaly score 계산 시 복수개의 변수를 동시에 참조한다는 점이 장점입니다.

			.. figure:: /_static/img/anomaly/part04/multivariate_model.jpg
			:align: center
			:alt: multivariate model

.. _alarm_rule_settings:
	
알람 룰 조건 설정하기
======================================================

사용할 예측 모델을 선택하였으면, **Condition** 패널에서 알람이 발생하는 조건을 설정할 수 있습니다.

	#. **Subscribers** 항목의 우측에 있는 |icon_info| 버튼을 클릭하여 대화 상자를 연 후, 알람 발생 시 통보 받는 대상과 통보 방식을 설정합니다.

		.. figure:: /_static/img/anomaly/part04/set_alarm_rules_01.png
		   :align: center
		   :alt: set alarm noti detail
	
	#. 아래 각 항목의 설명을 참고하여 알람 발생 조건을 설정합니다.
	
		.. figure:: /_static/img/anomaly/part04/set_alarm_rules_02.png
		   :align: center
		   :alt: set alarm interval

		* **Alarm Start:** 알람 조건 검사를 시작할 순간을 설정합니다. 이 설정값에 해당하는 시간 이후부터 알람 발생을 검사합니다.
		* **Alarm Interval:** 알람 발생 조건을 검사하는 주기를 설정합니다.
	
	#. **Scoring Method**\는 여러 개의 측정값(Measure)에서 Abnormal Score를 계산하는 방식을 결정합니다. 기본값은 각 측정값에서 계산된 Abnormal Score들의 평균값(Average)으로 계산하며, 최대값(Maximum) 또는 최소값(Minimum)으로 변경할 수 있습니다.

		.. figure:: /_static/img/anomaly/part04/set_alarm_rules_03.png
		   :align: center
		   :alt: set scoring method

	#. 아래 각 항목의 설명을 참고하여 모니터링 대상 데이터의 abnormal score에 따른 알람 발동 조건을 설정합니다. 기본적으로 하나의 조건이 주어지며, **+ Add Condition** 버튼을 클릭하면 조건을 추가할 수 있습니다.
		
		.. figure:: /_static/img/anomaly/part04/set_alarm_rules_04.png
		   :align: center
		   :alt: set alarm condition

		* **Severity:** 주어진 조건에 해당하는 알람의 심각도를 설정합니다.
		* **Threshold:** Abnormal Score가 이 설정값을 초과하면 데이터 이상 상태로 간주됩니다.
		* **Frequency:** Abnormal Score가 한계값을 초과하는 빈도가 어떠할 때 알람을 발생시킬지 결정합니다. 예를 들어, "3 within 5 minute"로 설정한 경우에는 abnormal score가 5분 안에 3회 이상 한계값을 초과하면 알람이 발생합니다.
	
	#. 모든 설정을 마쳤으면 **Next**\를 클릭합니다.

.. _complete_rule:

알람 룰 완성하기
=========================================

알람 룰 설정이 끝났으면 아래와 같이 알람 룰 만들기 절차를 마무리합니다.

	#. 알람 룰의 이름과 설명을 기입한 후 **Done** 버튼을 클릭합니다.

		.. figure:: /_static/img/anomaly/part04/complete_alarm_rules_01.png
		   :align: center
		   :alt: write alarm rule name

	#. 생성된 알람 룰은 알람 룰 리스트의 최상단에 노출되며 실행 중인 상태(Running)로 나타납니다.

		.. figure:: /_static/img/anomaly/part04/complete_alarm_rules_02.png
		   :align: center
		   :alt: alarm rule list


.. _multi_alarm_rule:

복수 알람 룰 생성
*******************************************************

메타트론 어노말리는 시스템 운영자들이 대량의 장비를 관제하는 경우를 위해 동시에 다량의 알람 룰을 생성하는 기능을 제공합니다. 이 때에는 threshold 와 같은 알람 발생 조건을 일일이 설정하지 않고 최대 200개까지의 알람 룰을 생성할 수 있습니다.

	.. note::
			해당 기능은 운영 환경에 따라 시스템에 과부하를 줄 수 있으므로 알람 룰에 대한 이해와 시스템 상황에 대한 판단이 가능한 사용자만 이용하도록 권고하고 있습니다.

복수 알람 룰 생성 진입
========================================================

단일 알람 룰 생성이 기본이며, 상황에 따라 복수 알람 룰을 생성해야 할 때는 step 2에서 |icon_multirule| 을 클릭하면 진행여부를 묻는 팝업과 함께 복수 알람 룰 생성을 시작할 수 있습니다. 이때 해당 버튼을 다시 누르면 단일 알람 룰 생성으로 복귀합니다.

	.. figure:: /_static/img/anomaly/part04/create_multi_rule_01.png
	   :align: center
	   :alt: create multi rule

기본적으로 한번에 생성할 수 있는 알람 룰은 최대 200개이며, 필터를 이용해 생성 조건을 변경할 수 있습니다.
또한 알람 룰 생성 시 기준을 변경할 수 있는데, 각 measure 및 dimension 값을 전체 분리하는 **전체분리**\, split된 dimension을 기준으로 룰을 묶는 **차원값 기준**\, 선택한 meaure 기준으로 룰을 묶는 **측정값 기준**\생성 방식을 선택할 수 있습니다.

	.. figure:: /_static/img/anomaly/part04/create_multi_rule_02.png
	   :align: center
	   :alt: create multi rule

다음을 누르고 3step으로 넘어가면 룰을 학습하기 시작합니다. 리스트의 첫 번째 룰을 학습하여 추천된 모델로 자동으로 선택하며, 필요시 우측 Model 탭을 눌러 변경할 수 있습니다. 학습이 완료된 룰의 이상치 스코어가 어떻게 계산되었는지 상세 차트를 보려면 |icon_rule_detail| 버튼을 눌러서 확인할 수 있습니다. 

	.. figure:: /_static/img/anomaly/part04/create_multi_rule_03.png
	   :align: center
	   :alt: create multi rule

이 때 리스트의 첫번째 이외의 룰들은 다음 스텝에서 자동으로 추천 모델로 선택되며, 만약 수동 조정이 필요하다면 체크박스로 룰들을 선택한 후 Model 탭 하단에서 Train을 눌러 수동학습 후 모델 및 세부 threshold 조건을 수정할 수 있습니다. 

	.. figure:: /_static/img/anomaly/part04/create_multi_rule_04.png
	   :align: center
	   :alt: create multi rule

최종적으로 알람룰 이름의 prefix 값이 될 알람 그룹의 이름을 작성하여 복수 알람 룰 생성을 마무리 합니다. 알람 그룹명과 룰 이름들의 prefix값을 다르게 지정하고 싶다면 하단의 prefix 텍스트 필드에 값을 입력합니다.

	.. figure:: /_static/img/anomaly/part04/create_multi_rule_05.png
	   :align: center
	   :alt: create multi rule

