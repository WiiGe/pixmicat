var previous_replyhlno=0,arrPresetFunc=[],arrSakuraTbl=[[63223,12353,82],[63306,12449,85],[63486,12535,4]],arrSakuraTblsp=[[63216,63219,63210,63211,63212,63213],[12293,12540,12541,12542,12445,14446]];function $g(a){return document.getElementById(a)}function getCookie(a){var d,b,e=0,g=0,f;d=" "+document.cookie+";";for(var h=d.length;e<h;){g=d.indexOf(";",e);b=d.substring(e+1,g);f=b.indexOf("=");if(b.substring(0,f)===a)return window.unescape(b.substring(f+1,g-e-1));e=g+1}return""}
function setCookie(a,d){var b=new Date;b.setTime(b.getTime()+6048E5);document.cookie=a+"="+window.escape(d)+"; expires="+b.toGMTString()}
function replace_sakura(a){for(var d=a.value,b=0,e=0,g=arrSakuraTbl.length,f,b=0;b<g;b++)for(f=arrSakuraTbl[b],e=0;e<=f[2];e++)d=d.replace(new RegExp(String.fromCharCode(f[0]+e),"g"),String.fromCharCode(f[1]+e));g=arrSakuraTblsp[0].legnth;for(b=0;b<g;b++)f=arrSakuraTblsp,d=d.replace(new RegExp(String.fromCharCode(f[0][b]),"g"),String.fromCharCode(f[1][b]));a.value=d}
function check_sakura(a){a=$g(a);null!==window.escape(a.value).toLowerCase().match(/%uf(6[ef]|7[0-9a-f]|80)[0-9a-f]/)&&(alert(msgs[2]),replace_sakura(a))}function l1(){var a=getCookie("namec"),d=getCookie("emailc"),b;if(b=$g("fname"))b.value=a;if(b=$g("femail"))b.value=d}function l2(){for(var a=getCookie("pwdc"),d=document,b=d.forms.length,e=0;e<b;e++)d.forms[e].pwd&&(d.forms[e].pwd.value=a)}
function c(){var a,d,b,e;try{if(!$g("fupfile"))return!0;a=$g("fupfile").value;if(!a&&!$g("fcom").value)return alert(msgs[0]),!1;if(a){b=0;e=ext.length;for(d=0;d<e;d++)if(a.substr(a.lastIndexOf(".")+1).toUpperCase()===ext[d]){b=1;break}if(!b)return alert(msgs[1]),!1}check_sakura("fcom");check_sakura("fname");check_sakura("fsub");window.clipboardData&&(document.forms[0].upfile_path.value=a);document.forms[0].sendbtn.disabled=!0}catch(g){}$g("fname").value&&setCookie("namec",$g("fname").value)}
function showform(){$g("postform").className="";$g("postform_tbl").className="";$g("hide").className="show";$g("show").className="hide"}function hideform(){$g("postform").className="hide_btn";$g("postform_tbl").className="hide";$g("hide").className="hide";$g("show").className="show"}function quote(a){try{$g("fcom").focus(),$g("fcom").value+=">>No."+a+"\r\n"}catch(d){}}
function replyhl(a,d){var b=$g("r"+a);b&&(d?b.className=b.className.replace(" reply_hl",""):(previous_replyhlno&&replyhl(previous_replyhlno,!0),previous_replyhlno=a,b.className+=" reply_hl"))}function hookPresetFunction(a){"function"===typeof a&&arrPresetFunc.push(a)}
function preset(){var a,d=arrPresetFunc.length,b;for(a=0;a<d;a++)b=arrPresetFunc[a],"function"===typeof b&&b();a=location.href;a.indexOf("?res=")&&(a.match(/#[rq]([0-9]+)$/)&&replyhl(RegExp.$1,!1),a.match(/#q([0-9]+)$/)&&quote(RegExp.$1))};