/*
 * Georgian Keyboard 1.0 ( 1 Mkhedruli , 2 Asomtavruli , 3 Nuskhuri )
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Tornike Nanobashvili
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

;(function(){"use strict";var e=window.GEOKEY=function(e){function a(e,t){return function(){return t.apply(e,arguments)}}function f(e,t,r,i){var s="",o=0;for(var a=0;a<e.length;a++){t!==0?o=u[4](t).indexOf(e[a]):o=u[r]["alphabet"].indexOf(e[a]);o===-1?s+=e[a]:s+=String.fromCharCode(u[r]["level"]+o)}i.call(n,s)}function l(e){console.log(e);alert(e)}function c(e){if(n.type(e)!=="object"||!e.hasOwnProperty("check")||!e.hasOwnProperty("field")||!e.hasOwnProperty("type")||n.type(e.check)!=="null"&&!e.hasOwnProperty("chbox")){l(t.config);return false}if(n.type(e.check)!=="boolean"){if(n.type(e.check)!=="null"){l(t.config);return false}}r=e.check;if(r!==null){if(n.type(e.chbox)!=="string"||n.type(e.field)!=="string"){l(t.config);return false}if(r&&document.getElementById(e.chbox)===null){l(t.invBoxID);return false}i=e.chbox}if(document.getElementById(e.field)===null){l(t.invFieldID);return false}s=e.field;if(n.type(e.type)!=="number"){l(t.config);return false}if(e.type<1||e.type>3){l(t.invTypeNum);return false}o=e.type;return true}function h(e){e=e||window.event;return e.which||e.keyCode}function p(e){var t=document.getElementById(s),n=0;t.focus();if(t.selectionStart){n=t.selectionStart}t.value=t.value.substr(0,n)+e+t.value.substr(t.selectionEnd);t.setSelectionRange(n+e.length,n+e.length)}function d(){var e=false;n.on(document.getElementById(s),"keydown",function(t){var n=h(t),s=String.fromCharCode(n),a=0,f=t.shiftKey?t.shiftKey:n===16?true:false,l=t.ctrlKey?t.ctrlKey:n===17?true:false;if(l){return}if(n===20){e?e=false:e=true}if(n===192){if(r){t.preventDefault();document.getElementById(i).checked?document.getElementById(i).checked=false:document.getElementById(i).checked=true}}if(r&&!document.getElementById(i).checked){return}f||e?s=s.toUpperCase():s=s.toLowerCase();if(u[o]["alphabet"].indexOf(s)===-1){return}a=u[o]["alphabet"].indexOf(s);if(n>=65&&n<=90){t.preventDefault();p(String.fromCharCode(u[o]["level"]+a))}return})}var t={config:'Initialization\n{\n"check" : true/false (boolean),\n"chbox" : checkboxID (string),\n"field" : fieldID (string),\n"type" : 1/2/3 (integer)\n}',invBoxID:"Invalid Checkbox ID Parameter ! !",invFieldID:"Invalid Field ID Parameter !",invTypeNum:"1 : Mkhedruli\n2 : Asomtavruli\n3 : Nuskhuri",TransConfig:"Text,0/1/2/3,1/2/3,Function(Results)\n\nWhere :\n\n0 : English\n1 : Mkhedruli\n2 : Asomtavruli\n3 : Nuskhuri",success:"Framework Has Been Successfully Loaded !"};var n=this,r=null,i=null,s=null,o=null,u={1:{title:"Mkhedruli",lang:"ka_mkhedruli",alphabet:["a","b","g","d","e","v","z","T","i","k","l","m","n","o","p","J","r","s","t","u","f","q","R","y","S","C","c","Z","w","W","x","j","h","E","I","V","Q","O","F","Y","U","G","A","P","N"],level:4304},2:{title:"Asomtavruli",lang:"ka_asomtavruli",alphabet:["a","b","g","d","e","v","z","T","i","k","l","m","n","o","p","J","r","s","t","u","f","q","R","y","S","C","c","Z","w","W","x","j","h","E","I","V","Q","O"],level:4256},3:{title:"Nuskhuri",lang:"ka_nuskhuri",alphabet:["a","b","g","d","e","v","z","T","i","k","l","m","n","o","p","J","r","s","t","u","f","q","R","y","S","C","c","Z","w","W","x","j","h","E","I","V","Q","O"],level:11520},4:function(e){var t=[];for(var n=0;n<38;n++){t.push(String.fromCharCode(u[e]["level"]+n))}return t}};this.type=function(){return/^.\w+\s(\w+).$/.exec(Object.prototype.toString.call(arguments[0]))[1].toLowerCase()};this.transcript=function(e,n,r,i){if(arguments.length!==4||this.type(e)!=="string"||this.type(n)!=="number"||n<0||n>3||this.type(r)!=="number"||r<1||r>3||this.type(i)!=="function"){l(t.TransConfig);return}switch(n){case 1:return f(e,1,r,i);break;case 2:return f(e,2,r,i);break;case 3:return f(e,3,r,i);default:return f(e,0,r,i)}};this.on=function(e,t,n){if(e.addEventListener){e.addEventListener(t,a(this,n),false)}else{e.attachEvent("on"+t,a(this,n))}};this.info=function(){return{title:u[o]["title"],lang:u[o]["lang"],type:o}};if(!c(e)){return}d()}})();
