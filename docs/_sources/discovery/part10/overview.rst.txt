Overview
---------------------------------------------------

Druid Setting Configuration
=======================================
Druid 설치 정보를 알 수 있습니다. 우측 상단을 보면 information버튼이 있습니다. 해당 버튼을 클릭하면, 설치된 정보를 확인 가능합니다.

	.. figure:: /_static/img/discovery/part10/configuration.png

Druid 설치 설정을 Common, Historical Node, Broker Node, Coordinator Node, Middle Manager Node, Overlord Node로 각각 확인 가능합니다.

	.. figure:: /_static/img/discovery/part10/configuration01.png

Historical 사용량
=======================================
각 historical node 의 사용량 표시합니다. Coordinator의 servers 리스트에서 개별 서버 항목 추출하여 만들어집니다.


Cluster 전체 사용량
=======================================
Druid historical 모니터링기능을 제공합니다.

Cluster의 사용량 정보는 아래와 같습니다.

	* cluster 전체 사용량 확인 가능
	* 개별 historical 사용량 확인 가능

Coordinator의 servers 리스트를 이용하여 만들어진 KPI 입니다.

====================  ================================================  =========
Field                 Description                                       Example
====================  ================================================  =========
Node Count            historical node 수
MaxSize
currSize
Used
FreeSize
====================  ================================================  =========


Historical 사용량
=======================================
각 historical node 의 사용량 표시합니다. Coordinator의 servers 리스트에서 개별 서버 항목 추출하여 만들어집니다.