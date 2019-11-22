# SPHINX pdf 빌드
1. TexLive 설치하기
	* Mac OS X 이상 설치 방법
		* 인터넷에서 MacTex 2015 이상 버전 설치
			* [MacTeX 설치 - KTUG Wiki](http://wiki.ktug.org/wiki/wiki.php/MacTeX%20%EC%84%A4%EC%B9%98)
		* ```$ sudo tlmgr update —all —self```

	* Naver 나눔글꼴 설치 - [네이버 한글한글아름답게](https://hangeul.naver.com/2017/nanum)
2. SPHINX 설정 추가
```python
# conf.py 파일
latex_toplevel_sectioning='part'
latex_engine = 'xelatex'
latex_elements = {
'fontpkg': r'''
\renewcommand{\baselinestretch}{1.4}
\usepackage[cjk]{kotex}
\setmainfont{NanumBarunGothic}[
        BoldFont       = *Bold,
]
\setsansfont{NanumBarunGothic}[
        BoldFont       = *Bold,
]
\setmonofont{NanumGothicCoding}[
        BoldFont       = *-Bold,
]
''',
'figure_align': 'H'
}
```
3. 한글 pdf 빌드
	* 빌드 명령어(문서 루트 디렉토리에서 실행)
	 ```sh
	 make latexpdf
	 ```
	* docs_latex_metatron-user-doc.pdf 로 생성됨
	* 이름을 metatron-user-doc_ko.pdf 로 변경
	 ```
	 mv docs/latex/metatron-user-doc.pdf docs/latex/metatron-user-doc_ko.pdf
	 ```
4. 영문 pdf 빌드
	* 빌드 명령어 (문서 루트 디렉토리에서 실행)
	```sh
	# Linux, MacOS
	make -e SPHINXOPTS="-D language='en'" latexpdf
	# Windows
	set SPHINXOPTS=-D language=en & make.bat latexpdf
	```
	* docs_latex_metatron-user-doc.pdf 로 생성됨
	* 이름을 metatron-user-doc_en.pdf 로 변경
	```sh
	mv docs/latex/metatron-user-doc.pdf docs/latex/metatron-user-doc_en.pdf
	```
