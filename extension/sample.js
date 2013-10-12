// Copyright (c) 2010 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A generic onclick callback function.


  //console.log("item " + info.menuItemId + " was clicked");
  //console.log("info: " + JSON.stringify(info));
  //console.log("tab: " + JSON.stringify(tab));
  function OnClick(info) {

  //alert((/(\d)+/).test("%s"));
  // if ((/(\d)+/).test("%s")) {
 
  
   var formattedText = info.selectionText.replace(/[Zz][Ee][Rr][Oo]/g,"0");
   formattedText = formattedText.replace(/[Oo][Nn][Ee]/g,"1");
   formattedText = formattedText.replace(/[Tt][Ww][Oo]/g,"2");
   formattedText = formattedText.replace(/[Tt][Hh][Rr][Ee][Ee]/g,"3");
   formattedText = formattedText.replace(/[Ff][Oo][Uu][Rr]/g,"4");
   formattedText = formattedText.replace(/[Ff][Ii][Vv][Ee]/g,"5");
   formattedText = formattedText.replace(/[Ss][Ii][Xx]/g,"6");
   formattedText = formattedText.replace(/[Ss][Ee][Vv][Ee][Nn]/g,"7");
   formattedText = formattedText.replace(/[Ee][Ii][Gg][Hh][Tt]/g,"8");
   formattedText = formattedText.replace(/[Nn][Ii][Nn][Ee]/g,"9");
   var formattedText = formattedText.replace(/[^0-9]/g,"");
   if (!(/\d{10}/).test(formattedText)) {
	 alert("Only works on selections containing at least 10 digits, though the digits can be written" 
	 + "in text form (eg. \"One\",\"Two\",\"Three\",Etc.)");
	 }
	 else {
   formattedText = formattedText.replace(/(\d{3})(\d{3})(\d{4})(.)*/,"$1-$2-$3");
   chrome.tabs.create({'url': "http://google.com/?q=" + formattedText+ "#q="+formattedText});
   }
	return formattedText;
    // Tab opened. Wait until page loads, from here it is not working
   // jQuery(document).ready(function() {
     //   jQuery('#tsf').submit();
        
  

//}
}
 var title = "Phone number search: " + "%s";
  var id = chrome.contextMenus.create({"title": title, "contexts":["selection"],
                                       "onclick": OnClick});
//document.addEventListener('DOMContentLoaded', function () {
//document.addEventListener('mousedown',clickHandler);
//});
//document.addEventListener('onclick',lookup);





// Create one test item for each context type.
//var contexts = ["page","selection","link","editable","image","video",
 //               "audio"];
//for (var i = 0; i < contexts.length; i++) {


  
  
  
 // console.log("'" + context + "' item:" + id);
  
  
//}

/*
// Create a parent item and two children.
var parent = chrome.contextMenus.create({"title": "Test parent item"});
var child1 = chrome.contextMenus.create(
  {"title": "Child 1", "parentId": parent, "onclick": genericOnClick});
var child2 = chrome.contextMenus.create(
  {"title": "Child 2", "parentId": parent, "onclick": genericOnClick});
console.log("parent:" + parent + " child1:" + child1 + " child2:" + child2);
*/

/*// Create some radio items.
function radioOnClick(info, tab) {
  console.log("radio item " + info.menuItemId +
              " was clicked (previous checked state was "  +
              info.wasChecked + ")");
}
var radio1 = chrome.contextMenus.create({"title": "Radio 1", "type": "radio",
                                         "onclick":radioOnClick});
var radio2 = chrome.contextMenus.create({"title": "Radio 2", "type": "radio",
                                         "onclick":radioOnClick});
console.log("radio1:" + radio1 + " radio2:" + radio2);
*/

// Create some checkbox items.
/*function checkboxOnClick(info, tab) {
  console.log(JSON.stringify(info));
  console.log("checkbox item " + info.menuItemId +
              " was clicked, state is now: " + info.checked +
              "(previous state was " + info.wasChecked + ")");

}
var checkbox1 = chrome.contextMenus.create(
  {"title": "Checkbox1", "type": "checkbox", "onclick":checkboxOnClick});
var checkbox2 = chrome.contextMenus.create(
  {"title": "Checkbox2", "type": "checkbox", "onclick":checkboxOnClick});
console.log("checkbox1:" + checkbox1 + " checkbox2:" + checkbox2);
*/

// Intentionally create an invalid item, to show off error checking in the
// create callback.
/*console.log("About to try creating an invalid item - an error about " +
            "item 999 should show up");
chrome.contextMenus.create({"title": "Oops", "parentId":999}, function() {
  if (chrome.extension.lastError) {
    console.log("Got expected error: " + chrome.extension.lastError.message);
  }
});
*/