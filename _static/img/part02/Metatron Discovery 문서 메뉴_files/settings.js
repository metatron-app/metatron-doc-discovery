
var gHost = null;
var gHostPath = "/";
var glocalCookie = {};

function saveSetting(name, value, bPersistent)
{
	setCookie(name, value, bPersistent);
}
function readSetting(name, oCallbackFunc, arg1, arg2)
{
	var val="";
	val = getCookie(name);
	if(oCallbackFunc)
		oCallbackFunc(val, arg1, arg2);
	return true;
}

function initSettings(commonRootRelPath)
{
	if(commonRootRelPath == null || commonRootRelPath == "" || !rh._.isRelativeUrl(commonRootRelPath))
		return;
	var data = rh._.getHostData(commonRootRelPath);
	window.gHost = data.gHost;
	window.gHostPath = data.gHostPath;
}
function setCookie(name, value)
{
	glocalCookie[name] = value
}
function getCookie(name)
{
	return glocalCookie[name]
}


var gbIFrameLoaded = false;
var gbIFrameLoading = false;
function cookieSaveRequesObj(reqType, name, value, bPersistent)
{
	this.reqType = reqType;
	this.name = name;
	this.value = value;
	this.bPersistent = bPersistent;
}
function cookieReadRequesObj(reqType, name, oCallbackFunc, arg1, arg2)
{
	this.reqType = reqType;
	this.name = name;
	this.oCallbackFunc = oCallbackFunc;
	this.arg1 = arg1;
	this.arg2 = arg2;
}

