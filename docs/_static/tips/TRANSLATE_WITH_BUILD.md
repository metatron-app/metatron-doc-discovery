# 사용자문서 영문 번역 및 빌드 방법
1. 국문 rst 파일 수정 후 po 파일 갱신
	1.  `make gettext`
	2. `sphinx-intl update -p docs/gettext -l en`
	3. `locales/en/LC_MESSAGES/` 에 한글문서에 맞춰  `.po` 파일 갱신됨
2. 각 rst 문서별로 생긴 `.po` 파일 열어서 `msgstr`에 영문 번역
3. 영문 문서용 이미지 업로드
	* 이미지 파일명으로 끝에 `.en` 넣으면 영문 문서 이미지로 삽입됨
4. HTML로 빌드하기
	* 영문 및 국문 문서 동시 빌드하기
		1. `make all`
		2. 빌드된 HTML 문서 위치
			* 한글문서 `docs/`
			* 영문  `docs/en/`
	* (필요한 경우) 영문 문서만 빌드하기
		* `sphinx-build -b html -D language=en . docs/en`

