// ==UserScript==
// @name        CUCM combobox
// @namespace   Cisco Call Manager
// @match    https://192.0.0.1/*
// @autor    Lucians
// @version     1
// @require     https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js
// @require     http://kremer.pro/projects/scombobox/js/jquery.scombobox.js
// @resource    customCSS http://kremer.pro/projects/scombobox/css/jquery.scombobox.css
// @require     http://kremer.pro/projects/scombobox/js/jquery.easing.min.js
// @grant       GM_addStyle
// @grant       GM_getResourceText


// ==/UserScript==
// Simple combobox implementation on CUCM to filter dropdown boxes 
var newCSS = GM_getResourceText ("customCSS");
GM_addStyle (newCSS);

//pick target 'select' item by name
$fk_list = $('select[name=fkcallingsearchspace_sharedlineappear], '+
'[name=fkcallingsearchspace_cfurint], [name=fkcallingsearchspace_cfur], '+
'[name=fkcallingsearchspace_devicefailure], '+
'[name=fkcallingsearchspace_pff], '+
'[name=fkcallingsearchspace_pffint], '+
'[name=fkpickupgroup], '+
'[name=fkcallingsearchspace_cfapt], '+
'[name=fkdevicepool], [name=fkroutepartition], '+
'[name=fkmediaresourcelist], '+
'[name=fklocation], '+
'[name=fkcallingsearchspace_cfa], '+
'[name=fkCallingSearchSpace_Restrict], '+
'[name=fkroutegroup], '+
'[name=fkcallingsearchspace_cfbint], '+
'[name=fkcallingsearchspace_cfb], '+
'[name=fkcallingsearchspace_cfnaint], '+
'[name=fkdevice], '+
'[name=fkcallingsearchspace], '+
'[name=fkcallingsearchspace_cfna]');  

//deploy combobox on specified <select> items
//assing empty string to empty value
cucm_combobox($fk_list);
function cucm_combobox($argument) {
	$argument.prepend('<option class="emptyValue" value=" ">&lt; None &gt;</option>');
	$argument.scombobox({fullMatch: true});
	$('.emptyValue').val("");
}

//limits dropdown boxes maximum width to 314 px
$('.scombobox').attr('style','width: 314px');

//selects all the content inside a box with one click
$("input[type=text]").focus(function(){	   
      this.select();
    });
