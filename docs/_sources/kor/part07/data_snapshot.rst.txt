데이터 스냅샷 결과 보기
----------------------------------------

스냅샷의 생성 단계는 [성공, 실패, 처리중]의 3가지 경우가 있습니다.

* 성공 = SUCCEEDED
* 실패 = FAILED
* 처리중 = INITIALIZING, RUNNING, WRITING, TABLE_CREATING, CANCELING

스냅샷의 상세한 처리 결과는 다음 2가지 경로를 통해 확인할 수 있습니다.

* 'WORKSPACE - MANAGEMENT - 데이터 프리퍼레이션 - 데이터 스냅샷'의 스냅샷 목록을 통해서 상세 보기를 할 수 있습니다.

.. figure:: /_static/img/part07/data_snapshot_1.png

* '데이터플로우'의 우측 영역 '스냅샷 탭'을 통해서 상세 보기를 할 수 있습니다.

.. figure:: /_static/img/part07/data_snapshot_2.png

스냅샷 상세 보기 화면으로 들어가면 스냅샷의 처리 결과와 기타 정보를 확인할 수 있습니다.

* 생성 성공한 데이터 스냅샷의 예시

.. figure:: /_static/img/part07/data_snapshot_3.png

스냅샷의 각종 정보와 함께 데이터의 유효성 비율과 생성된 스냅샷의 그리드를 확인할 수 있고, 스냅샷 결과를 CSV 파일로 다운로드 할 수 있습니다. 

* 생성 실패한 데이터 스냅샷의 예시

.. figure:: /_static/img/part07/data_snapshot_4.png

유효한 데이터가 생성되지 못하였을 경우, 실패를 발생시킨 예외의 로그를 표시합니다.


메타트론 엔진으로 적재하기
========================================

(예정)


CSV파일로 다운로드 받기
========================================

.. figure:: /_static/img/part07/data_snapshot_5.png

생성에 성공한 스냅샷의 상세 보기에서는 'CSV로 다운로드'가 가능합니다.

.. figure:: /_static/img/part07/data_snapshot_6.png

다운로드한 파일은 표준 CSV 형식으로, 'comma'로 구분되고 'new line'으로 개행합니다. 

