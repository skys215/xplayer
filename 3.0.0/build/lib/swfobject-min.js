KISSY.add("kg/xplayer/3.0.0/lib/swfobject",[],function(e,t,n,i){var a=function(){function e(){if(!J&&document.getElementsByTagName("body")[0]){try{var e,t=g("span");t.style.display="none",e=P.getElementsByTagName("body")[0].appendChild(t),e.parentNode.removeChild(e),e=null,t=null}catch(n){return}J=!0;for(var i=H.length,a=0;i>a;a++)H[a]()}}function t(e){J?e():H[H.length]=e}function n(e){if(typeof V.addEventListener!==O)V.addEventListener("load",e,!1);else if(typeof P.addEventListener!==O)P.addEventListener("load",e,!1);else if(typeof V.attachEvent!==O)w(V,"onload",e);else if("function"==typeof V.onload){var t=V.onload;V.onload=function(){t(),e()}}else V.onload=e}function i(){var e=P.getElementsByTagName("body")[0],t=g(x);t.setAttribute("style","visibility: hidden;"),t.setAttribute("type",M);var n=e.appendChild(t);if(n){var i=0;!function a(){if(typeof n.GetVariable!==O)try{var o=n.GetVariable("$version");o&&(o=o.split(" ")[1].split(","),Q.pv=[b(o[0]),b(o[1]),b(o[2])])}catch(l){Q.pv=[8,0,0]}else if(10>i)return i++,void setTimeout(a,10);e.removeChild(t),n=null,r()}()}else r()}function r(){var e=W.length;if(e>0)for(var t=0;e>t;t++){var n=W[t].id,i=W[t].callbackFn,a={success:!1,id:n};if(Q.pv[0]>0){var r=m(n);if(r)if(!E(W[t].swfVersion)||Q.wk&&Q.wk<312)if(W[t].expressInstall&&l()){var c={};c.data=W[t].expressInstall,c.width=r.getAttribute("width")||"0",c.height=r.getAttribute("height")||"0",r.getAttribute("class")&&(c.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(c.align=r.getAttribute("align"));for(var f={},u=r.getElementsByTagName("param"),p=u.length,v=0;p>v;v++)"movie"!==u[v].getAttribute("name").toLowerCase()&&(f[u[v].getAttribute("name")]=u[v].getAttribute("value"));s(c,f,n,i)}else d(r),i&&i(a);else S(n,!0),i&&(a.success=!0,a.ref=o(n),a.id=n,i(a))}else if(S(n,!0),i){var y=o(n);y&&typeof y.SetVariable!==O&&(a.success=!0,a.ref=y,a.id=y.id),i(a)}}}function o(e){var t=null,n=m(e);return n&&"OBJECT"===n.nodeName.toUpperCase()&&(t=typeof n.SetVariable!==O?n:n.getElementsByTagName(x)[0]||n),t}function l(){return!z&&E("6.0.65")&&(Q.win||Q.mac)&&!(Q.wk&&Q.wk<312)}function s(e,t,n,i){var a=m(n);if(n=h(n),z=!0,k=i||null,I={success:!1,id:n},a){"OBJECT"===a.nodeName.toUpperCase()?(T=c(a),N=null):(T=a,N=n),e.id=j,(typeof e.width===O||!/%$/.test(e.width)&&b(e.width)<310)&&(e.width="310"),(typeof e.height===O||!/%$/.test(e.height)&&b(e.height)<137)&&(e.height="137");var r=Q.ie?"ActiveX":"PlugIn",o="MMredirectURL="+encodeURIComponent(V.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+r+"&MMdoctitle="+encodeURIComponent(P.title.slice(0,47)+" - Flash Player Installation");if(typeof t.flashvars!==O?t.flashvars+="&"+o:t.flashvars=o,Q.ie&&4!=a.readyState){var l=g("div");n+="SWFObjectNew",l.setAttribute("id",n),a.parentNode.insertBefore(l,a),a.style.display="none",v(a)}u(e,t,n)}}function d(e){if(Q.ie&&4!=e.readyState){e.style.display="none";var t=g("div");e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(c(e),t),v(e)}else e.parentNode.replaceChild(c(e),e)}function c(e){var t=g("div");if(Q.win&&Q.ie)t.innerHTML=e.innerHTML;else{var n=e.getElementsByTagName(x)[0];if(n){var i=n.childNodes;if(i)for(var a=i.length,r=0;a>r;r++)1==i[r].nodeType&&"PARAM"===i[r].nodeName||8==i[r].nodeType||t.appendChild(i[r].cloneNode(!0))}}return t}function f(e,t){var n=g("div");return n.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+e+"'>"+t+"</object>",n.firstChild}function u(e,t,n){var i,a=m(n);if(n=h(n),Q.wk&&Q.wk<312)return i;if(a){var r,o,l,s=g(Q.ie?"div":x);typeof e.id===O&&(e.id=n);for(l in t)t.hasOwnProperty(l)&&"movie"!==l.toLowerCase()&&p(s,l,t[l]);Q.ie&&(s=f(e.data,s.innerHTML));for(r in e)e.hasOwnProperty(r)&&(o=r.toLowerCase(),"styleclass"===o?s.setAttribute("class",e[r]):"classid"!==o&&"data"!==o&&s.setAttribute(r,e[r]));Q.ie?G[G.length]=e.id:(s.setAttribute("type",M),s.setAttribute("data",e.data)),a.parentNode.replaceChild(s,a),i=s}return i}function p(e,t,n){var i=g("param");i.setAttribute("name",t),i.setAttribute("value",n),e.appendChild(i)}function v(e){var t=m(e);t&&"OBJECT"===t.nodeName.toUpperCase()&&(Q.ie?(t.style.display="none",function n(){if(4==t.readyState){for(var e in t)"function"==typeof t[e]&&(t[e]=null);t.parentNode.removeChild(t)}else setTimeout(n,10)}()):t.parentNode.removeChild(t))}function y(e){return e&&e.nodeType&&1===e.nodeType}function h(e){return y(e)?e.id:e}function m(e){if(y(e))return e;var t=null;try{t=P.getElementById(e)}catch(n){}return t}function g(e){return P.createElement(e)}function b(e){return parseInt(e,10)}function w(e,t,n){e.attachEvent(t,n),X[X.length]=[e,t,n]}function E(e){e+="";var t=Q.pv,n=e.split(".");return n[0]=b(n[0]),n[1]=b(n[1])||0,n[2]=b(n[2])||0,t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1}function C(e,t,n,i){var a=P.getElementsByTagName("head")[0];if(a){var r="string"==typeof n?n:"screen";if(i&&(B=null,L=null),!B||L!=r){var o=g("style");o.setAttribute("type","text/css"),o.setAttribute("media",r),B=a.appendChild(o),Q.ie&&typeof P.styleSheets!==O&&P.styleSheets.length>0&&(B=P.styleSheets[P.styleSheets.length-1]),L=r}B&&(typeof B.addRule!==O?B.addRule(e,t):typeof P.createTextNode!==O&&B.appendChild(P.createTextNode(e+" {"+t+"}")))}}function S(e,t){if(Z){var n=t?"visible":"hidden",i=m(e);J&&i?i.style.visibility=n:"string"==typeof e&&C("#"+e,"visibility:"+n)}}function A(e){var t=/[\\\"<>\.;]/,n=null!==t.exec(e);return n&&typeof encodeURIComponent!==O?encodeURIComponent(e):e}{var T,N,k,I,B,L,O="undefined",x="object",$="Shockwave Flash",F="ShockwaveFlash.ShockwaveFlash",M="application/x-shockwave-flash",j="SWFObjectExprInst",U="onreadystatechange",V=window,P=document,R=navigator,D=!1,H=[],W=[],G=[],X=[],J=!1,z=!1,Z=!0,K=!1,Q=function(){var e=typeof P.getElementById!==O&&typeof P.getElementsByTagName!==O&&typeof P.createElement!==O,t=R.userAgent.toLowerCase(),n=R.platform.toLowerCase(),i=/win/.test(n?n:t),a=/mac/.test(n?n:t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o="Microsoft Internet Explorer"===R.appName,l=[0,0,0],s=null;if(typeof R.plugins!==O&&typeof R.plugins[$]===x)s=R.plugins[$].description,s&&typeof R.mimeTypes!==O&&R.mimeTypes[M]&&R.mimeTypes[M].enabledPlugin&&(D=!0,o=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=b(s.replace(/^(.*)\..*$/,"$1")),l[1]=b(s.replace(/^.*\.(.*)\s.*$/,"$1")),l[2]=/[a-zA-Z]/.test(s)?b(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0);else if(typeof V.ActiveXObject!==O)try{var d=new V.ActiveXObject(F);d&&(s=d.GetVariable("$version"),s&&(o=!0,s=s.split(" ")[1].split(","),l=[b(s[0]),b(s[1]),b(s[2])]))}catch(c){}else try{var d=new V.ActiveXObject(F);d&&(s=d.GetVariable("$version"),s&&(s=s.split(" ")[1].split(","),l=[b(s[0]),b(s[1]),b(s[2])]))}catch(c){}return{w3:e,pv:l,wk:r,ie:o,win:i,mac:a}}();!function(){Q.w3&&((typeof P.readyState!==O&&("complete"===P.readyState||"interactive"===P.readyState)||typeof P.readyState===O&&(P.getElementsByTagName("body")[0]||P.body))&&e(),J||(typeof P.addEventListener!==O&&P.addEventListener("DOMContentLoaded",e,!1),Q.ie&&(P.attachEvent(U,function t(){"complete"===P.readyState&&(P.detachEvent(U,t),e())}),V==top&&!function n(){if(!J){try{P.documentElement.doScroll("left")}catch(t){return void setTimeout(n,0)}e()}}()),Q.wk&&!function i(){return J?void 0:/loaded|complete/.test(P.readyState)?void e():void setTimeout(i,0)}()))}()}H[0]=function(){D?i():r()};!function(){Q.ie&&window.attachEvent("onunload",function(){for(var e=X.length,t=0;e>t;t++)X[t][0].detachEvent(X[t][1],X[t][2]);for(var n=G.length,i=0;n>i;i++)v(G[i]);for(var r in Q)Q[r]=null;Q=null;for(var o in a)a[o]=null;a=null})}();return{registerObject:function(e,t,n,i){if(Q.w3&&e&&t){var a={};a.id=e,a.swfVersion=t,a.expressInstall=n,a.callbackFn=i,W[W.length]=a,S(e,!1)}else i&&i({success:!1,id:e})},getObjectById:function(e){return Q.w3?o(e):void 0},embedSWF:function(e,n,i,a,r,o,d,c,f,p){var v=h(n),y={success:!1,id:v};Q.w3&&!(Q.wk&&Q.wk<312)&&e&&n&&i&&a&&r?(S(v,!1),t(function(){i+="",a+="";var t={};if(f&&typeof f===x)for(var h in f)t[h]=f[h];t.data=e,t.width=i,t.height=a;var m={};if(c&&typeof c===x)for(var g in c)m[g]=c[g];if(d&&typeof d===x)for(var b in d)if(d.hasOwnProperty(b)){var w=K?encodeURIComponent(b):b,C=K?encodeURIComponent(d[b]):d[b];typeof m.flashvars!==O?m.flashvars+="&"+w+"="+C:m.flashvars=w+"="+C}if(E(r)){var A=u(t,m,n);t.id==v&&S(v,!0),y.success=!0,y.ref=A,y.id=A.id}else{if(o&&l())return t.data=o,void s(t,m,n,p);S(v,!0)}p&&p(y)})):p&&p(y)},switchOffAutoHideShow:function(){Z=!1},enableUriEncoding:function(e){K=typeof e===O?!0:e},ua:Q,getFlashPlayerVersion:function(){return{major:Q.pv[0],minor:Q.pv[1],release:Q.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(e,t,n){return Q.w3?u(e,t,n):void 0},showExpressInstall:function(e,t,n,i){Q.w3&&l()&&s(e,t,n,i)},removeSWF:function(e){Q.w3&&v(e)},createCSS:function(e,t,n,i){Q.w3&&C(e,t,n,i)},addDomLoadEvent:t,addLoadEvent:n,getQueryParamValue:function(e){var t=P.location.search||P.location.hash;if(t){if(/\?/.test(t)&&(t=t.split("?")[1]),!e)return A(t);for(var n=t.split("&"),i=0;i<n.length;i++)if(n[i].substring(0,n[i].indexOf("="))==e)return A(n[i].substring(n[i].indexOf("=")+1))}return""},expressInstallCallback:function(){if(z){var e=m(j);e&&T&&(e.parentNode.replaceChild(T,e),N&&(S(N,!0),Q.ie&&(T.style.display="block")),k&&k(I)),z=!1}},version:"2.3"}}();i.exports=a});