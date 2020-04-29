알고리즘
--------------------------------

.. |icon_link| image:: /_static/img/anomaly/part05/icon_link.png

Metatron Anomaly는 머신러닝 알고리즘을 활용하여 시계열 데이터의 비정상 수치에 대해 알람을 발생시킵니다. 이러한 이상치 탐지 알고리즘은 학습 시 비정상 sample을 활용하는지 여부에 따라 두 가지로 나누어 집니다.

* **Supervised Anomaly Detection**\: 정상/비정상 여부가 존재하는 학습 데이터 셋을 사용해서 이상치를 검출하는 지도학습 알고리즘. 정확도가 높으나 비정상 sample 취득에 시간과 비용 소모.
* **Unsupervised Anomaly Detection**\: 대부분의 데이터가 정상 sample이라는 가정으로, 데이터 셋에 비정상 여부가 존재하지 않더라도 이상치를 검출할 수 있는 비지도학습 알고리즘.

Metatron Anomaly는 일반적인 정상/비정상 데이터 label이 없는 모든 시계열 데이터에서도 이상 탐지가 가능하도록 Unsupervised 알고리즘 학습을 기본으로 제공합니다.

Metatron Anomaly에서는 이러한 알고리즘들을 관리하고 신규 알고리즘을 추가할 수 있는 **알고리즘 매니저**\기능을 제공합니다. 알고리즘 매니저는 다음 세 페이지로 이루어집니다.

	* :ref:`algorithm_list`
	* :ref:`create_new_algorithm`
	* :ref:`algorithm_details`

.. _algorithm_list:

알고리즘 리스트
================================

Anomaly Detection 하위 메뉴 중 **Algorithm** 탭으로 들어가면 모델 학습에 사용 가능한 알고리즘을 리스트에서 확인할 수 있습니다.

	.. figure:: /_static/img/anomaly/part05/algorithm_01.png
			   :align: center
			   :alt: algorithm manager


기본적으로 Metatron Anomaly는 아래의 7가지 통계 알고리즘들을 시스템에 내장하고 있습니다.

	* Seasonal Median Model
	* Statistical Mean Model
	* Regression Forecast Model
	* Naive Forecast Model
	* Simple Exponential Smoothing Forecast Model
	* Triple Exponential Smoothing Forecast Model
	* Long Triple Exponential Smoothing Forecast Model

.. _create_new_algorithm:

신규 알고리즘 생성
===================================

알고리즘 페이지 우측 상단의 **+ Algorithm** 버튼을 클릭하면 신규 알고리즘을 추가할 수 있습니다.

	.. figure:: /_static/img/anomaly/part05/algorithm_02.png
			   :align: center
			   :alt: new algorithm

신규로 생성할 알고리즘의 이름, 설명을 입력합니다. 알고리즘 생성에 기본적으로 사용 가능한 작업 환경은 Jupyter Notebook이며, Python 언어를 사용할 수 있습니다.

	.. figure:: /_static/img/anomaly/part05/algorithm_03.png
			   :align: center
			   :alt: new algorithm

.. _algorithm_details:

알고리즘 상세
===================================

신규 알고리즘을 생성하면 상세 페이지로 이동합니다. **구분**\에는 사용자가 직접 생성한 알고리즘이면 확장, 시스템에 기본 구현된 알고리즘이면 기본으로 표시됩니다.

**Notebook** 옆의 |icon_link|\를 누르면 신규 알고리즘을 구현할 수 있는 Jupyter Notebook 환경으로 이동합니다. 기본 템플릿으로 linear regression 알고리즘이 구현되어 있으며, 사용자가 적절히 변형하여 신규 알고리즘을 구현할 수 있습니다.

구현된 알고리즘을 테스트하여 시스템에 적합한지 확인하여야 합니다. 하단의 Test 버튼을 누르면 구현된 알고리즘이 시스템에 적합한지 내부적으로 테스트를 진행합니다. **Status**\에 그 결과가 나타납니다. 테스트 결과는 한번도 테스트한 적이 없으면 **N/A**\, 실패하면 **Fail**\, 성공하면 **Available**\로 기록됩니다.

	.. figure:: /_static/img/anomaly/part05/algorithm_04.png
			   :align: center
			   :alt: new algorithm

