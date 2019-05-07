데이터 관리
--------------------------------------------

.. figure:: /_static/img/discovery/part02/datasource_management.png
	:align: center

위 그림과 같이 Metatron Discovery의 3가지 분석 모듈(워크북, 노트북, 워크벤치)에서 사용하는 데이터는 다양한 원천 데이터 유형과 여러 엔진 및 저장소를 통해 마련됩니다. 따라서 이러한 데이터 흐름을 정형화 및 관리하고 여러 원천 데이터를 연결시켜주는 작업이 반드시 필요합니다.

데이터 분석 및 시각화에 필요한 원천 데이터는 Metatron 내부 엔진로 가져와 **데이터 소스** 단위로 저장하거나, 아니면 **데이터 커넥션**\을 통해 외부 데이터베이스와 직접 연결하여 사용할 수 있습니다. 그리고 이러한 데이터의 사용 현황은 **데이터 모니터링**\을 이용하여 감독하고 추적할 수 있습니다.
   
.. toctree::
   :maxdepth: 2
   
   ../part02/data_source
   ../part02/data_connection
   ../part02/data_monitoring