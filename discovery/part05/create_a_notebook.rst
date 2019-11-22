신규 노트북 생성하기
------------------------------------------

노트북 서버 설정이 완료되면, 노트북을 생성할 수 있습니다. 노트북 생성 절차는 다음과 같습니다.

	#. 워크스페이스 하단에 있는 **+ 노트북** 버튼을 클릭하면 노트북을 생성할 수 있는 화면이 나타납니다.

		.. figure:: /_static/img/discovery/part05/create_a_notebook_00.png
		   :align: center
		   :alt: 노트북 생성 버튼

	#. 노트북에서 분석하고자 하는 데이터셋 타입을 선택합니다. Metatron Discovery에서 사용하는 데이터 단위인 **데이터 소스**, **대시보드**, **차트** 그리고 **선택하지 않음** 중에서 선택할 수 있습니다. Zeppelin으로 분석하기를 원한다면, **선택하지 않음**\을 선택하십시오.

		.. figure:: /_static/img/discovery/part05/create_a_notebook_01.png
		   :align: center
		   :alt: 노트북 새로 만들기 – 타입 선택

	#. **데이터 소스**, **대시보드**, **차트** 중 하나를 선택하면, 현재 Metatron Discovery에 등록된 데이터 목록을 조회할 수 있습니다. 분석 대상 데이터를 선택한 후 다음 버튼을 클릭합니다.

		.. figure:: /_static/img/discovery/part05/create_a_notebook_02.png
		   :align: center
		   :alt: 노트북 새로 만들기 – 데이터 소스 상세 정보

	#. 데이터를 분석하고자 하는 노트북 정보를 입력합니다. 초기 노트북 서버 설정에서 연결해 둔 노트북 서버에 한해서만 **서버 유형**\을 선택할 수 있습니다. **Jupyter** 선택 시 'R' 또는 'Python' 언어를, **Zeppelin** 선택 시 'Spark' (scala) 언어를 선택하여 분석할 수 있게 됩니다.

		.. figure:: /_static/img/discovery/part05/create_a_notebook_03.png
		   :align: center
		   :alt: 노트북 새로 만들기 - 설정 요약 및 생성

	#. 노트북 생성이 완료되면, 해당 워크스페이스 화면에서 다음과 같이 확인할 수 있습니다.

		.. figure:: /_static/img/discovery/part05/create_a_notebook_04.png
		   :align: center
		   :alt: 노트북 목록