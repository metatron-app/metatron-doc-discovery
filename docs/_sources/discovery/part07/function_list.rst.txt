함수 목록
-------------------------------------

룰은 주요 기능을 이용하기 위해서 함수를 사용할 수 있습니다.

본 절에서는 각 함수를 다음과 같은 항목으로 구분하여 설명합니다.

	- 카테고리
	- 설명
	- 함수 형식
	- 입력값
	- 출력
	- 예시
	- 기타 사항

현재 데이터 프리퍼레이션에서 지원하는 함수 종류는 다음과 같습니다.

	- `length`_
	- `if`_
	- `isnull`_
	- `isnan`_
	- `upper`_
	- `lower`_
	- `trim`_
	- `ltrim`_
	- `rtrim`_
	- `substring`_
	- `concat`_
	- `concat_ws`_
	- `year`_
	- `month`_
	- `day`_
	- `hour`_
	- `minute`_
	- `second`_
	- `millisecond`_
	- `now`_
	- `add_time`_
	- `sum`_
	- `avg`_
	- `max`_
	- `min`_
	- `count`_
	- `math.abs`_
	- `math.acos`_
	- `math.asin`_
	- `math.atan`_
	- `math.cbrt`_
	- `math.ceil`_
	- `math.cos`_
	- `math.cosh`_
	- `math.exp`_
	- `math.expm1`_
	- `math.getExponent`_
	- `math.round`_
	- `math.signum`_
	- `math.sin`_
	- `math.sinh`_
	- `math.sqrt`_
	- `math.tan`_
	- `math.tanh`_
	- `time_diff`_
	- `timestamp`_
	- `row_number`_
	- `rolling_sum`_
	- `rolling_avg`_
	- `lag`_
	- `lead`_
	- `ismismatched`_
	- `contains`_
	- `startswith`_
	- `endswith`_

함수는 지속적으로 추가 보완될 수 있습니다.

length
====================================

카테고리

	- String Function

설명

	- 입력된 문자열의 길이를 반환합니다.

함수 형식

	- length(string_value)

입력값

	- string_value: 길이를 구하고자 하는 문자열.

출력

	- Integer

예시

	- length(first_name)

if
=======================================

카테고리

	- Logical Function

설명

	- 조건문을 검사하여 TRUE나 FALSE에 해당하는 값을 반환합니다.

함수 형식

	- if(condition)
	- if(condition, true_value, false_value)

입력값

	- condition: 참/거짓 여부를 검사하고자 하는 조건.
	- true_value: 조건문이 참일 경우 반환되는 값.
	- false_value:조건문이 거짓일 경우 반환되는 값.

출력

	- Any

예시

	- if(gender==‘male’) : TRUE
	- if(age<18, ‘kid’, ‘adult’) : ‘adult’

기타 사항

	- true_value/false_value가 없는 경우에는 Boolean type의 결과 TURE 혹은 FALSE를 반환합니다.
	- ture_value와 false_value의 데이터 타입은 동일해야 합니다.

isnull
=======================================

카테고리

	- Logical Function

설명

	- 입력된 컬럼의 값이 null 인지 판단합니다. null이면 TRUE, 아니면 FALSE를 반환합니다.

함수 형식

	- isnull(condition)

입력값

	- condition: null 여부를 판단하고자 하는 컬럼.

출력

	- Boolean

예시

	- isnull(telephone) : FALSE

isnan
=======================================

카테고리

	- Logical Function

설명

	- 입력된 값이 NaN(Not-a-Number) 인지 판단합니다. NaN이면 TRUE, 아니면 FALSE를 반환합니다.

함수 형식

	- isnan(condition)

입력값

	- condition: NaN 여부를 판단하고자 하는 컬럼 이나 수식.

출력

	- Boolean

예시

	- isnan(1000/ratio)

기타 사항

	- condition의 결과는 Double Value이어야 합니다.

upper
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열 내의 알파벳을 모두 대문자로 치환하여 반환합니다.

함수 형식

	- upper(string_value)

입력값

	- string_value: 대문자로 치환하고자 하는 문자열.

출력

	- String

예시

	- upper(last_name)
	- upper(‘Hello world’) : ’HELLO WORLD’
	
lower
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열 내의 알파벳을 모두 소문자로 치환하여 반환합니다.

함수 형식

	- lower(string_value)

입력값

	- string_value: 소문자로 치환하고자 하는 문자열.

출력

	- String

예시

	- lower(last_name)
	- lower(‘Hello WORLD’) : ’hello world’

trim
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열의 앞/뒤에 있는 공백을 제거하여 반환합니다.

함수 형식

	- trim(string_value)

입력값

	- string_value: 공백을 제거하고자 하는 문자열.

출력

	- String

예시

	- trim(comment)
	- trim(‘  .   Hi!   ‘) : ‘.   Hi!’

ltrim
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열의 앞(왼쪽)에 있는 공백을 제거하여 반환합니다.

함수 형식

	- ltrim(string_value)

입력값

	- string_value: 공백을 제거하고자 하는 문자열.

출력

	- String

예시

	- ltrim(comment)
	- ltrim(‘  .   Hi!   ‘) : ’.   Hi!   ‘

rtrim
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열의 뒤(오른쪽)에 있는 공백을 제거하여 반환합니다.

함수 형식

	- rtrim(string_value)

입력값

	- string_value: 공백을 제거하고자 하는 문자열.

출력

	- String

예시

	- rtrim(comment)
	- rtrim(‘  .   Hi!   ‘) :  ‘  .   Hi!’

substring
=======================================

카테고리

	- String Function

설명

	- 입력된 문자열의 일부를 반환합니다.

함수 형식

	- substring(string_value, begin_index, offset)
	- substring(string_value, begin_index)

입력값

	- string_value: 편집하고자 하는 문자열.
	- begin_index: 대상 문자열에서 추출하고자 하는 부분의 시작 index. 문자열의 처음은 0. 음수로 입력하면 문자열의 마지막 글자부터 거슬러 올라간다.
	- offset: 대상 문자열에서 추출하고자 하는 문자열의 길이. 입력하지 않으면 begine_index부터 문자열의 마지막까지 추출한다.

출력

	- String

예시

	- substring(user_id, 0, 5)
	- substring(‘hello world’, 1, 7) : ‘ello w’
	- substring('metatron', -2) : 'on'

concat
=======================================

카테고리

	- String Function

설명

	- 입력된 복수의 문자열을 연결하여 반환합니다.

함수 형식

	- concat(string_value1, string_value2, string_value3)

입력값

	- string_value(X): 연결하고자 하는 문자열. n개를 복수로 입력 가능.

출력

	- String

예시

	- concat(first_name, ‘-‘, last_name) : ‘Jane-Doe’
	- concat(‘1980’, ’02’) : ‘198002’

concat_ws
=======================================

카테고리

	- String Function

설명

	- 입력된 복수의 문자열을 연결하면서 문자열 사이에 Separator(구분자)를 넣어 반환합니다.

함수 형식

	- concat(separator, stirng_value1, string_value2)

입력값

	- separator: 연결할 문자열들 사이에 들어갈 구분자.
	- string_value(X): 연결하고자 하는 문자열. n개를 복수로 입력 가능.

출력

	- String

예시

	- concat_ws(‘, ’, first_name, last_name) : ‘Jane, Doe’
	- concat_ws(‘-‘, ‘010’, ‘1234’, ‘5678’) : ’010-1234-5678’

year
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 연도에 해당하는 값을 반환합니다.

함수 형식

	- year(timestamp_value)

입력값

	- timestamp_value: 연도를 추출하고자 하는 timestamp

출력

	- Integer

예시

	- year(birthday)

month
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 월에 해당하는 값을 반환합니다.

함수 형식

	- month(timestamp_value)

입력값

	- timestamp_value: 월을 추출하고자 하는 timestamp

출력

	- Integer

예시

	- month(birthday)

day
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 일에 해당하는 값을 반환합니다.

함수 형식

	- day(timestamp_value)

입력값

	- timestamp_value: 일을 추출하고자 하는 timestamp

출력

	- Integer

예시

	- day(birthday)

hour
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 시간에 해당하는 값을 반환합니다.

함수 형식

	- hour(timestamp_value)

입력값

	- timestamp_value: 시간을 추출하고자 하는 timestamp

출력

	- Integer

예시

	- hour(last_login)

minute
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 분에 해당하는 값을 반환합니다.

함수 형식

	- minute(timestamp_value)

입력값

	- timestamp_value: 분을 추출하고자 하는 timestamp

출력

	- Integer

예시

	- minute(last_login)

second
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 초에 해당하는 값을 반환합니다.

함수 형식

	- second(timestamp_value)

입력값

	- timestamp_value: 초를 추출하고자 하는 timestamp

출력

	- Integer

예시

	- second(last_login)

millisecond
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에서 밀리초(1/1000 초)에 해당하는 값을 반환합니다.

함수 형식

	- millisecond(timestamp_value)

입력값

	- timestamp_value: 밀리초를 추출하고자 하는 timestamp

출력

	- Integer

예시

	- millisecond(last_login)

now
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timezone 기준의 현재 시간을 반환합니다.

함수 형식

	- now()
	- now(timezone)

입력값

	- timzone: 현재시간을 구하고자 하는 Timezone의 fulll-name.

출력

	- Integer

예시

	- now()
	- now(‘Asia/Seoul’)
	
기타 사항

	- Timezone 값을 입력하지 않을 시 UTC 기준의 시간 반환.

add_time
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 Timestamp 값에 일정 Time unit 값을 더하거나 뺀 값을 반환합니다.

함수 형식

	- add_time(timestamp, delta, time_unit)

입력값

	- timestamp: 대상이되는 원본 timestamp 값
	- delta: 더하거나 빼고자 하는 날짜/시간 값
	- time_unit: 더하거나 빼고자 하는 날짜/시간의 단위(문자열로 입력). year, month, day, hour, minute, second, millisecond.

출력

	- Integer

예시

	- add_time(end_date, 10, ‘day’)
	- add_time(end_date, -1, ‘month’)

sum
=======================================

카테고리

	- Aggregation Function

설명

	- 대상 값들의 합을 반환합니다.

함수 형식

	- sum(target_col)

입력값

	- target_col: 합을 구하고자 하는 대상 컬럼

출력

	- Double

예시

	- sum(profit)

기타 사항

	- Aggregation과 Window 룰에서만 사용 가능.

avg
=======================================

카테고리

	- Aggregation Function

설명

	- 대상 값들의 평균을 반환합니다.

함수 형식

	- avg(target_col)

입력값

	- target_col: 평균을 구하고자 하는 대상 컬럼

출력

	- Double

예시

	- avg(profit)

기타 사항

	- Aggregation과 Window 룰에서만 사용 가능.

max
=======================================

카테고리

	- Aggregation Function

설명

	- 대상 값들 중 가장 큰 값을 반환합니다.

함수 형식

	- max(target_col)

입력값

	- target_col: 최대값을 구하고자 하는 대상 컬럼

출력

	- Double

예시

	- max(profit)

기타 사항

	- Aggregation과 Window 룰에서만 사용 가능.

min
=======================================

카테고리

	- Aggregation Function

설명

	- 대상 값들 중 가장 작은 값을 반환합니다.

함수 형식

	- min(target_col)

입력값

	- target_col: 최소값을 구하고자 하는 대상 컬럼

출력

	- Double

예시

	- min(profit)

기타 사항

	- Aggregation과 Window 룰에서만 사용 가능.

count
=======================================

카테고리

	- Aggregation Function

설명

	- 대상의 줄(row)수를 반환합니다.

함수 형식

	- count()

출력

	- Double

예시

	- count()

기타 사항

	- Aggregation과 Window 룰에서만 사용 가능.

math.abs
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 절대값을 반환합니다.

함수 형식

	- math.abs(value)

입력값

	- value: 절대값을 구하고자 하는 숫자.

출력

	- Double

예시

	- math.abs(-10) : 10

math.acos
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 아크코사인 값을 반환합니다.

함수 형식

	- math.acos(value)

입력값

	- value: 아크코사인 값을 구하고자 하는 코사인값으로 -1에서 1 사이의 값.

출력

	- Double

예시

	- math.acos(-1) : 3.141592653589793

math.asin
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 아크사인 값을 반환합니다.

함수 형식

	- math.asin(value)

입력값

	- value: 아크사인 값을 구하고자 하는 사인값으로 -1에서 1사이의 값.

출력

	- Double

예시

	- math.asin(-1) : -1.5707963267948966

math.atan
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 아크사인 값을 반환합니다.

함수 형식

	- math.atan(value)

입력값

	- value: 아크사인 값을 구하고자 하는 사인값으로 -1에서 1사이의 값.

출력

	- Double

예시

	- math.asin(-1) : -1.5707963267948966

math.cbrt
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 세제곱근 값을 반환합니다.

함수 형식

	- math.cbrt(value)

입력값

	- value: 세제곱근 값을 구하고자 하는 숫자.

출력

	- Double

예시

	- math.cbrt(5) : 1.709975946676697

math.ceil
=======================================

카테고리

	- Math Function

설명

	- 입력된 값을 일의 배수가 되도록 올림한 값을 반환합니다.

함수 형식

	- math.ceil(value)

입력값

	- value: 일의 자리로 올림 하고자 하는 숫자.

출력

	- Double

예시

	- math.ceil(15.142) : 16

math.cos
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 코사인 값을 반환합니다.

함수 형식

	- math.cos(value)

입력값

	- value: 코사인 값을 구하고자 하는 라디안 각도

출력

	- Double

예시

	- math.cos(45) : 0.5253219888177297

math.cosh
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 하이퍼볼릭 코사인 값을 반환합니다.

함수 형식

	- math.cosh(value)

입력값

	- value: 하이퍼볼릭 코사인 값을 구하고자 하는 숫자.

출력

	- Double

예시

	- math.cosh(9) : COSH(9) => 4051.5420254925943

math.exp
=======================================

카테고리

	- Math Function

설명

	- 자연 로그값 e를 입력된 값만큼 거듭제곱한 값을 반환합니다.

함수 형식

	- math.exp(value)

입력값

	- value: 자연 로그값 e를 거듭제곱 하고자 하는 횟수.

출력

	- Double

예시

	- math.exp(4) : 54.598150033144236

math.expm1
=======================================

카테고리

	- Math Function

설명

	- 자연 로그값 e를 입력된 값만큼 거듭제곱한 값에서 1을 뺀 값을 반환합니다.

함수 형식

	- math.expm1(value)

입력값

	- value: 자연 로그값 e를 거듭제곱 하고자 하는 횟수.

출력

	- Double

예시

	- math.expm1(4) : 53.598150033144236

math.getExponent
=======================================

카테고리

	- Math Function

설명

	- 입력된 값 N에 대하여 2exp <= N을 만족하는 exp 값 중 가장 큰 값을 반환합니다.

함수 형식

	- math.getExponent(value)

입력값

	- value: 2exp <= N를 만족하는 exp 값을 찾을 때 N에 해당하는 숫자.

출력

	- Double

예시

	- math.getExponent(9) : 3

math.round
=======================================

카테고리

	- Math Function

설명

	- 입력된 값을 일의 자리로 반올림 한 값을 반환합니다.

함수 형식

	- math.round(value)

입력값

	- value: 일의 자리로 반올림 하고자 하는 숫자

출력

	- Double

예시

	- math.round(14.2) : 14

math.signum
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 부호를 반환합니다.

함수 형식

	- math.signum(value)

입력값

	- value: 부호를 추출하고자 하는 숫자

출력

	- Double

예시

	- math.signum(-24) : -1

기타 사항

	- 입력된 숫자가 양수인 경우 1, 0인 경우 0, 음수인 경우 -1을 반환한다.

math.sin
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 사인 값을 반환합니다.

함수 형식

	- math.sin(value)

입력값

	- value: 사인 값을 구하고자 하는 라디안 각도

출력

	- Double

예시

	- math.sin(90) : 0.8939966636005579

math.sinh
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 하이퍼볼릭 사인 값을 반환합니다.

함수 형식

	- math.sinh(value)

입력값

	- value: 하이퍼볼릭 사인 값을 구하고자 하는 숫자

출력

	- Double

예시

	- math.sinh(1) : 1.1752011936438014

math.sqrt
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 제곱근을 반환합니다.

함수 형식

	- math.sqrt(value)

입력값

	- value: 제곱근 값을 구하고자 하는 숫자

출력

	- Double

예시

	- math.sqrt(4) : 2

math.tan
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 탄젠트 값을 반환합니다.

함수 형식

	- math.tan(value)

입력값

	- value: 탄젠트 값을구하고자 하는 라디안 각도

출력

	- Double

예시

	- math.tan(10) : 0.6483608274590866

math.tanh
=======================================

카테고리

	- Math Function

설명

	- 입력된 값의 하이퍼볼릭 탄젠트 값을 반환합니다.

함수 형식

	- math.tanh(value)

입력값

	- value: 하이퍼볼릭 탄젠트 값을 구하고자 하는 각도.

출력

	- Double

예시

	- math.tanh(4) : 0.999329299739067

time_diff
=======================================

카테고리

	- Timestamp Function

설명

	- 입력된 두 Timestamp 값의 차를 millisecond 단위로 계산하여 반환합니다.

함수 형식

	- time_diff(timestamp1, timestamp2)

입력값

	- timestamp1:C = B - A 에서 A에 해당하는 시간 값. 
	- timestamp2: C = B - A 에서 B에 해당하는 시간 값.

출력

	- Double

예시

	- time_diff(order_date, shipped_date)
	
기타 사항

	- 결과 값 = timestamp2 - timestamp1
	
timestamp
=======================================

카테고리

	- Timestamp Function

설명

	- 새로운 Timestamp 값을 생성합니다.

함수 형식

	- timestamp(value, format)

입력값

	- value: timestamp 값으로 생성하고자 하는 날짜/시간 값.
	- format: value 값의 시간 형식.

출력

	- Timestamp

예시

	- timestamp(‘2011-01-01’, ‘yyyy-MM-dd’) : 2011-01-01T00:00:00.000Z
	
row_number
=======================================

카테고리

	- Window Function

설명

	- Partition 내에서 Order 순으로 정렬한 Row의 일련번호를 생성합니다.

함수 형식

	- row_number()

출력

	- Long

예시

	- row_number()

기타 사항

	- Window Rule에서만 사용 가능.

rolling_sum
=======================================

카테고리

	- Window Function

설명

	- Partition 내에서 앞/뒤의 지정한 수의 Row의 값들의 합을 반환합니다.

함수 형식

	- rolling_sum(target_col, before, after)

입력값

	- target_col: 합을 구하고자 하는 대상 컬럼 명.
	- before: 합산하고자 하는 선행 row의 수.
	- after: 합산하고자 하는 후행 row의 수.

출력

	- Long/Double

예시

	- rolling_sum(profit, 3, 3) : 같은 partition 내의 앞뒤 3개 row를 포함해 총 7개 row의 profit을 합산.

기타 사항

	- Window Rule에서만 사용 가능.

rolling_avg
=======================================

카테고리

	- Window Function

설명

	- Partition 내에서 앞/뒤의 지정한 수의 Row의 값들의 평균값을 반환합니다.

함수 형식

	- rolling_avg(target_col, before, after)

입력값

	- target_col: 평균을 구하고자 하는 대상 컬럼 명.
	- before: 평균을 구하고자 하는 선행 row의 수.
	- after: 평균을 구하고자 하는 후행 row의 수.

출력

	- Long/Double

예시

	- rolling_avg(profit, 3, 3) : 같은 partition 내의 앞뒤 3개 row를 포함해 총 7개 row의 profit의 평균.

기타 사항

	- Window Rule에서만 사용 가능.

lag
=======================================

카테고리

	- Window Function

설명

	- Partition 내에서 지정한 수 만큼 앞선 Row의 값을 반환합니다.

함수 형식

	- lag(target_col, before)

입력값

	- target_col: 대상 컬럼 명.
	- before: 현재 row에서 얼만큼 앞선 row를 반환할지 지정하는 수.

출력

	- Long/Double

예시

	- lag(profit, 2) : 같은 partition 내 2 줄 위의 row의 profit 값을 반환합니다. 2 줄 위의 값이 없다면 null을 반환합니다.

기타 사항

	- Window Rule에서만 사용 가능.

lead
=======================================

카테고리

	- Window Function

설명

	- Partition 내에서 지정한 수 만큼 뒤에 있는 Row의 값을 반환합니다.

함수 형식

	- lead(target_col, after)

입력값

	- target_col: 대상 컬럼 명.
	- after: 현재 row에서 얼만큼 뒤에 있는 row를 반환할지 지정하는 수.

출력

	- Long/Double

예시

	- lead(profit, 2) : 같은 partition 내 2 줄 아래의 row의 profit 값을 반환합니다. 2 줄 아래의 값이 없다면 null을 반환합니다.

기타 사항

	- Window Rule에서만 사용 가능.

ismismatched
=======================================

카테고리

	- Logical Function

설명

	- 지정한 컬럼의 Value가 특정 Column Type과 일치하는지 여부를 반환합니다.

함수 형식

	- ismismatched(target_col, column_type)

입력값

	- target_col: type을 검사하고자 하는 컬럼 명.
	- column_type: 일치 여부를 확인하고자 하는 Type. (문자열로 입력) String, Boolean, Timestamp, Long, Double

출력

	- Boolean

예시

	- ismismatched(birth_date, timestamp) : 해당 row의 값이 timestamp인 경우엔 false, 아닌 경우엔 true.

contains
=======================================

카테고리

	- String Function

설명

	- 지정한 컬럼의 Value가 특정 문자열을 포함하는지 여부를 반환합니다.

함수 형식

	- contains(target_col, search_word)

입력값

	- target_col: 문자열을 검색하고자 하는 컬럼 명.
	- search_word: 컬럼에서 찾고자 하는 문자열.

출력

	- Boolean

예시

	- contains(name, 'son') : name에 son이 들어가는 경우 True. 'Micheal Jackson', 'Son Heung Min' 등

startswith
=======================================

카테고리

	- String Function

설명

	- 지정한 컬럼의 Value가 특정 문자열로 시작하는지 여부를 반환합니다.

함수 형식

	- startswith(target_col, search_word)

입력값

	- target_col: 문자열을 검색하고자 하는 컬럼 명.
	- search_word: 컬럼에서 찾고자 하는 문자열.

출력

	- Boolean

예시

	- startswith(name, '김') : name이 '김'으로 시작하는 경우 True. '김철수', '김수지' 등

endswith
=======================================

카테고리

	- String Function

설명

	- 지정한 컬럼의 Value가 특정 문자열을 끝나는지 여부를 반환합니다.

함수 형식

	- endswith(target_col, search_word)

입력값

	- target_col: 문자열을 검색하고자 하는 컬럼 명.
	- search_word: 컬럼에서 찾고자 하는 문자열.

출력

	- Boolean

예시

	- endswith(customer_code, 'M') : customer_code가 M으로 끝나는 경우 True. '1340M', '0020M' 등
