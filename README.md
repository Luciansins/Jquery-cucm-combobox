# Jquery-cucm-combobox
Implementation of ivkremer's simple-combobox for Cisco Unified Communications Manager (CallManager) meant to run on TamperMonkey or GreaseMonkey browser extensions.

Original project can be found on the following link:
https://github.com/ivkremer/jquery-simple-combobox

###Usage:

Modify the select item names on the fk_list to add or remove the dropdown-boxes you want to filter e.g:

```javascript
$fk_list = $('select[name=fkcallingsearchspace_sharedlineappear], '+
'[name=fkcallingsearchspace_cfurint], [name=fkcallingsearchspace_cfur], '+
'[name=fkcallingsearchspace_cfna]');  
``` 

####Fixes
A bug with cucm default empty value on dropdown-boxes caused the combobox to select the first next non-empty value on the list as default. The bug was correted by replacing the value with an empty string inside the script.

