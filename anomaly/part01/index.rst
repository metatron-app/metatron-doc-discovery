Anomaly 확장팩 소개
-------------------------------------------------

이상 탐지 확장팩 Anomaly는 Machine Learning 예측 모델을 기반으로 데이터 흐름의 비정상적인 상황을 감지하여 사용자가 즉각적으로 확인할 수 있도록 도와주는 도구입니다.

.. _basic_principles:

기본 원리
==================================

아래 그림과 같이 Anomaly는 대상 데이터 소스의 집계값을 실시간으로 예측하고 실제 값을 모니터링합니다.

	.. figure:: /_static/img/anomaly/part01/features_01.png
	   :align: center
	   :alt: aggregation monitoring

여기서 **Predict**\로 표시된 값은 머신러닝 기반으로 예측한 데이터 집계값이고, **Actual**\로 표시된 값은 실제로 모니터링한 결과 값입니다. 아래 그림과 같이 두 값 간의 격차가 커질수록 **total abnormal score**\가 증가하게 됩니다. 즉, 실제치가 예상치와 다르면 데이터 집계값이 그만큼 정상 범위를 벗어났다고 간주하는 것입니다.

	.. figure:: /_static/img/anomaly/part01/features_02.png
	   :align: center
	   :alt: total abnormal score

이 예시에서는 abnormal score가 10점에 도달하면 ``Moderate`` 알람을 발생시키고, 80점에 도달하면 ``Critical`` 알람을 발생시키도록 설정되어 있습니다.

이렇게 발생하는 알람은 다양한 채널로 사용자에게 통보되어, 사용자는 데이터 이상 상황에 즉각 대처할 수 있습니다.

주요 기능
==================================

Anomaly의 주요 기능은 다음과 같습니다.

**Machine Learning**

	머신러닝에 기반한 예측 모델이 자동으로 추천되어 사용자 편의 증대

**Alarm & Report**
	
	비정상적인 상황 발생 시 즉각 알람 발동 및 보고서 생성

**Analyze**

	데이터로 차트 생성하고 분석하는 서비스 메타트론 디스커버리와 연계 가능

**Link with Learning System**

	새로운 분석을 적용할 수 있도록 외부 분석 시스템과의 연계를 지원

구조
==================================

Anomaly의 메뉴 구성은 다음과 같습니다.

	.. figure:: /_static/img/anomaly/part01/structure_01.png
	   :align: center
	   :alt: metatron anomaly structure

주요 메뉴 간 이동이 쉽고 세부 항목 간 참조 기능도 잘 구축되어 있어, 알람 룰 설정값과 발생한 알람 내역, 그리고 전반적인 알람 현황 간의 유기적인 파악이 용이합니다.