메타트론 디스커버리 개요
---------------------------------------------
메타트론 디스커버리는 메타트론 운용 서버 클러스터에 적재된 데이터를 단순하면서도 고도화된 방식으로 분석한 후 그 결과를 다양한 형식의 차트와 보고서로 사용자 PC에 출력해줍니다.
웹 템플릿 형식으로 구성되어 있으며 계정이 발급되면 아무 PC 에서나 원격으로 접속할 수 있기 때문에 매우 편리한 접근성을 보장합니다.

OLAP BI
===================================

메타트론 디스커버리는 빅데이터로부터 쉽고 빠르게 Insight 를 찾게 해주는 4 세대 OLAP BI 솔루션입니다. 아래 그림은 1 세대부터 4 세대까지의 BI 의 흐름을 나타낸 그림입니다.

.. figure:: /_static/img/discovery/part01/bi.png
   :align: center
   :alt: BI의 흐름

현재 시장은 2 세대, 3 세대 제품이 주류를 이루고 있으며, 4 세대 제품이 주목받고 있습니다.

BIG OLAP 정의
===================================

metatron Discovery 는 대용량 Fact 데이터를 기준으로 다양한 Dimension 데이터를 결합하여 하나의 Big OLAP Cube(Mart) 생성할 수 있습니다.

.. figure:: /_static/img/discovery/part01/big_olap_cube.png
   :align: center
   :alt: Big OLAP Cube(Mart)


Big OLAP Cube로 사용 시, 다음과 같은 장점이 있습니다.

1. ETL 비용 최소화 Mart 의 생성을 최소화 함에 따라 Mart 생성을 위한 ETL 비용 감소 Mart 데이터 수가 적어짐에 따라, 구조 변경에 따른 영향도를 최소화 할 수 있음 Fact 데이터를 모두 저장하므로, 다양한 요구사항에 대응 가능
2. 빠른 속도 및 스키마 변경 수용 분산 아키텍처 기반으로 큰 규모의 데이터도 저장 가능하며, 빠른 속도로 결과 출력 가능 Dynamic 스키마 채용으로 스키마 변경 시에도 별도의 스키마 재정의가 필요치 않음
3. 실시간 처리 테이블을 원본 그대로 저장하므로 레코드 단위의 실시간 처리 가능


메타트론 디스커버리 개요
===================================

metatron Discovery는 OLAP, 시각화, 머신러닝 기술이 융합하여 비전문가도 데이터로부터 상위 레벨의 가치를 빠르고 손쉽게 얻을 수 있는 Intelligence 솔루션입니다.

.. figure:: /_static/img/discovery/part01/intro.png
   :align: center
   :alt: Metatron Discovery


metatron Discovery는 대용량 데이터에 대한 Preparation부터 시각화 기반 데이터 탐색, 고급분석까지 End-to-end로 지원하는 Single Solution for Data Discovery를 위해 솔루션입니다. 아래 그림은 metatron의 architecture와 주요 feature가 정의되어 있습니다.

.. figure:: /_static/img/discovery/part01/single_solution.png
   :align: center
   :alt: Single Solution for Data Discovery


