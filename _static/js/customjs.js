var userLang = navigator.language || navigator.userLanguage; 
if(userLang == "ko"){ 
	document.location.replace('https://metatron-app.github.io/metatron-doc-discovery/kor/index.html');
} else{
	document.location.replace('https://metatron-app.github.io/metatron-doc-discovery/eng/index.html');
}