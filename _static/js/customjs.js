var userLang = navigator.language || navigator.userLanguage; 
if(userLang == "ko"){ 
	document.location.replace('../kor/index.html');
} else{
	document.location.replace('../eng/index.html');
}