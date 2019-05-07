Step1. 데이터 소스 만들기
---------------------------------------------

데이터 분석을 하기 위해 가장 먼저 해야할 일은 데이터를 시스템에 적재하는 것 입니다. Metatron Discovery는 다양한 원천 데이터를 쉽게 적재할 수 있도록 지원합니다.

본 튜토리얼 예제에서는 로컬 파일에 있는 데이터를 적재하는 방법을 소개합니다. 먼저 데이터를 준비하세요. 흔히 쓰이는 엑셀 파일(.xls, .xlsx)또는 .csv 형식의 파일이면 충분합니다. 여기서는 판매 현황 데이터를 활용합니다. 아래 링크에서 다운로드 받으세요.

	:download:`sample data (.csv) </_static/data/sales-data-sample.csv>`


데이터 소스는 **Management** > **데이터 스토리지** > **데이터 소스**\에서 조회하고 적재할 수 있습니다. 새로운 데이터 소스를 만들기 위해서 데이터 소스 리스트 우측 상단의 **new** 버튼을 클릭합니다.

	.. figure:: /_static/img/discovery/part00/s1-1.png
		:align: center 
		:alt: create a new data source

일단 튜토리얼에서는 **파일**\을 눌러 로컬 폴더에서 데이터를 가져옵니다. 다른 원천에서 데이터 소스를 만드는 방법은 :doc:`../part02/create_a_data_source` 문서를 참조하세요.

분석하고 싶은 데이터를 drag & drop하거나 디렉토리로부터 불러올 수 있습니다.

	.. figure:: /_static/img/discovery/part00/s1-2.png
		:align: center
		:alt: create a data source from local

판매 현황 데이터를 드래그하면 컬럼과 라인 구분자에 따라 나타나는 데이터 샘플을 최대 100행까지 조회할 수 있습니다. 이 데이터는 기본적으로 설정된 구분자로 충분히 데이터를 잘 나타내는 것 같네요! **다음**\을 누릅니다.

	.. figure:: /_static/img/discovery/part00/s1-3.png
		:align: center
		:alt: data preview

이제 실제로 데이터를 보면서 컬럼의 타입을 알맞게 조정해야 합니다. 이 작업을 **데이터 스키마 구성**\이라고 부릅니다.

	.. figure:: /_static/img/discovery/part00/s1-4.png
		:align: center
		:alt: data schema configuration

각 컬럼은 '차원값'(dimension) 또는 '측정값'(measure)이라는 역할로 나뉩니다. 자세한 내용은 :doc:`../part02/dimension_and_measures` 문서를 참조하세요. 이 데이터에서는 ``Discount``, ``Profit``, ``Quantity``, ``Sales``, ``DaystoShipActual``, ``SalesForecast``, ``DaystoShipScheduled``, ``SalesperCustomer``, ``ProfitRatio`` 컬럼들을 측정값으로 변경해야 합니다.

그 다음은 컬럼의 데이터 타입을 적절하게 변경해 주어야 합니다. 기본적으로 차원값은 문자로, 측정값은 정수로 설정되어 있습니다. 데이터 샘플을 보면서 가장 알맞는 형식으로 변경해주세요. 아래에 이 데이터에서 변경할 사항들을 나열했습니다.

	* ``Orderdate`` : 날짜/시간
	* ``Discount`` : 소수
	* ``ShipDate`` : 날짜/시간 (시간 표현을 yyyy. MM. dd. 로 변경한 후 체크박스 클릭하여 유효성 확인)
	* ``SalesperCustomer`` : 소수
	* ``ProfitRatio`` : 소수
	* ``latitude`` : 위도
	* ``longitude`` : 경도

마지막으로 새로운 컬럼을 만들어 줄 차례입니다. 우리는 위도와 경도 컬럼을 갖고 있으므로 Point 타입의 컬럼을 새로 만들 수 있습니다. 우측 상단의 **컬럼 추가** 버튼을 누르세요. **위도** 컬럼에 ``latitude`` 컬럼을 선택하고, **경도** 컬럼에 ``longitude`` 컬럼을 선택합니다. 컬럼 이름을 적절하게 입력한 후 **추가**\를 누르세요. 새로운 Point 타입 컬럼이 생성되었습니다!

	.. figure:: /_static/img/discovery/part00/s1-5.png
		:align: center
		:alt: create a new Point type column

스키마 구성 작업이 마무리되었으면 **다음**\을 누릅니다. 필요한 경우 Druid의 수집 설정을 변경하는 작업입니다. 지금은 기본 설정으로도 충분합니다.

	.. figure:: /_static/img/discovery/part00/s1-6.png
		:align: center
		:alt: druid ingestion setting

마지막으로 데이터 소스의 **이름**\과 **설명**\을 입력합니다. **마침**\을 누르면 즉시 데이터 소스 상세로 넘어갑니다.

	.. figure:: /_static/img/discovery/part00/s1-7.png
		:align: center
		:alt: typing name and description for a new data source in metatron discovery

데이터 소스 상세에서는 적재 현황을 실시간으로 볼 수 있습니다. 몇 분 기다리면 아래와 같이 적재가 성공했음을 알리며 히스토그램이 나타납니다. 혹시 다른 데이터 소스를 적재하다 에러가 났을 경우 **상세** 링크를 클릭하여 Druid 적재 로그를 조회할 수 있습니다. 컬럼명 중복, 컬럼 타입과 불일치하는 데이터 등으로 인해 적재가 실패할 수 있습니다. 이 경우 원인을 찾아 다시 적재를 시도해보아야 합니다.

	.. figure:: /_static/img/discovery/part00/s1-8.png
		:align: center
		:alt: success for creation of data source for the metatron discovery

이 데이터 소스를 다른 사용자들에게 오픈하려면 **할당**\에서 **모든 워크스페이스에 데이터소스를 사용하도록 허용** 체크박스에 체크합니다. 모든 사용자가 아니라 특정 사용자들에게만 오픈하고 싶으면 **수정**\을 클릭하여 할당하고자 하는 개인 사용자들 또는 팀 워크스페이스를 선택합니다.

	.. figure:: /_static/img/discovery/part00/s1-9.png
		:align: center
		:alt: assign data source to specific workspaces

이 예제에서는 모든 사용자가 사용할 수 있도록 **Open Data**\로 설정하겠습니다.

	.. figure:: /_static/img/discovery/part00/s1-10.png
		:align: center
		:alt: make public data

적재된 데이터는 **데이터** 탭에서 조회할 수 있습니다. 

	.. figure:: /_static/img/discovery/part00/s1-11.png
		:align: center
		:alt: data tab in metatron discovery


축하합니다! 이제 데이터 소스를 사용해 볼 차례네요. 다음 스텝으로 넘어가볼까요?

	* :doc:`../part00/step2`