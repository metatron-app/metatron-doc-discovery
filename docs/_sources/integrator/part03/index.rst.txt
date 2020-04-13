.. _workflow_editor:

워크플로우 에디터
-------------------------------------------------

.. |unfold| image:: /_static/img/integrator/part03/icon_unfold.png
.. |play| image:: /_static/img/integrator/part03/icon_play.png
.. |do| image:: /_static/img/integrator/part03/icon_do.png

워크플로우 에디터는 선택한 Hadoop 워크플로우를 손쉽게 편집하고 실행을 스케줄링할 수 있는 GUI를 제공합니다. :ref:`workflow_list`\에 열거된 워크플로우 중 하나를 클릭하면 워크플로우 에디터로 이동하며, 화면 구성은 아래와 같습니다.

	.. figure:: /_static/img/integrator/part03/workflow_editor.png

	#. **워크플로우 노드 선택 영역:** 워크플로우에 추가할 노드들을 선택하는 영역입니다. |unfold| 버튼을 클릭하면 패널이 확장되어 각 노드의 명칭을 확인할 수 있습니다. 다음과 같은 두 종류의 노드로 구분됩니다.
	
		* **액션 노드(에디터에서 'Task'로 분류):** 원천 데이터를 Hadoop 클러스터에서 수집·가공·적재하기 위한 각각의 연산처리 작업을 정의합니다. 자세한 내용은 :ref:`action_nodes` 항목을 참조하십시오.
		* **제어 흐름 노드(에디터에서 'General'로 분류):** 워크플로우의 시작과 끝을 정의하고, 액션 노드들의 흐름 경로를 결정하는 역할을 합니다. 자세한 내용은 :ref:`control_flow_nodes` 항목을 참조하십시오.
	
	#. **워크플로우 차트 캔버스:** 추가한 노드들 간의 시퀀스를 정의하는 영역입니다. 아래 그림과 같이 노드 선택 영역에서 원하는 노드들을 캔버스로 드래그한 후, 원하는 시퀀스에 맞춰서 노드끼리 연결을 하면 워크플로우 차트가 간단하게 완성됩니다.
	
		.. figure:: /_static/img/integrator/part03/canvas.png
	
		영역 상단에 있는 |do| 버튼을 사용하여 undo와 redo가 가능하며, |play| 버튼을 클릭하면 현재 정의된 워크플로우가 실행됩니다. 또한 **Draft** 버튼을 클릭하면 현재까지 작업한 워크플로우가 저장되고, **Save** 버튼을 클릭하면 실제 워크플로우로서 반영이 됩니다.
	
	#. **워크플로우 노드 설정 영역:** 워크플로우 차트 캔버스에서 선택한 각 개별 노드의 상세 작업 내역을 설정하는 영역입니다. 자세한 설정 방식은 :ref:`action_nodes` 및 :ref:`control_flow_nodes`\에서 해당 노드 항목을 참조하십시오.
	#. **워크플로우 실행 내역 표시 영역:** 정의된 워크플로우의 실행 내역을 보여주는 영역입니다.
	
		* **Manual run 탭:** 에디터 좌측 상단에 있는 |play| 버튼을 클릭하여 수동으로 워크플로우를 실행한 내역을 보여줍니다.
		* **Scheduled run 탭:** 정해진 시간에 따라 워크플로우 실행을 예약하는 UI를 제공하고 예약된 내역을 보여줍니다. 자세한 내용은 :ref:`scheduled_run` 항목을 참조하십시오.

워크플로우 에디터 사용을 위해 보다 상세한 설명이 필요한 부분에 관해서는 아래와 같이 정리하였습니다.
		
.. toctree::
   :maxdepth: 2
   
   tasks
   control_flow
   scheduled_run