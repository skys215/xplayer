KISSY.add("kg/xplayer/3.0.0/lib/audioSwf",["base","./swfobject","./status"],function(t,s,e,a){"use strict";function i(t){var s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");t||(t=Math.floor(Math.random()*s.length));for(var e="",a=0;t>a;a++)e+=s[Math.floor(Math.random()*s.length)];return e}var n=s("base"),r=s("./swfobject"),o=s("./status"),u=window,l="//g.alicdn.com/kg/xplayer/3.0.0/xplayer.swf";-1!==window.location.href.indexOf("ks-debug")&&(l="../flash/xplayer.swf?v="+t.now());var d=n.extend({initializer:function(){var s=this,e=i(10),a="Xplayer_"+e,n="XP_"+a,d=document.createElement("DIV"),f=document.createElement("DIV");f.id=n+"_swf",d.appendChild(f),d.id=n,d.style.position="absolute",d.style.width="1px",d.style.height="1px",d.style.left="-1000px",d.style.top="-1000px",document.body.appendChild(d);s.status=o,s["interface"]=u[a]={open:function(){s.fire("open")},timeupdate:function(t){s.status.currentTime=t.currentTime,s.status.duration=t.duration,s.fire("timeupdate",t)},ended:function(t){s.status.isPlaying=!1,s.status.isPaused=!1,s.fire("ended",t)},progress:function(t){s.fire("progress",t)},error:function(){t.log("error"),s.fire("error")}},s.player=null;var p=document.getElementById(n+"_swf");r.embedSWF(l,p,1,1,9,"",{xplayerinterface:a},{allowScriptAccess:"always",wmode:"window"},{id:"J_xiamiPlayerSwf_"+e},function(t){s.player=t.ref})},load:function(t){var s=this;s.set("src",t),s.player.jsSrc(t)},play:function(){var s=this;t.log(s.status.isPlaying,"","是否正在播放"),s.status.isPlaying||(s.status.isPlaying=!0,s.status.isPaused=!1,s.player.jsPlay())},pause:function(){var t=this;t.status.isPaused||(t.status.isPlaying=!1,t.status.isPaused=!0,t.player.jsPause())},stop:function(){var t=this;t.status.isPlaying=!1,t.status.isPaused=!1,t.status.pausePosition=0,t.player.jsStop()},setPosition:function(t){var s=this;s.status.pausePosition=t,s.player.jsPosition(Number(t)),s.status.isPlaying||s.play()},setVolume:function(t){var s=this;s.status.volume=t,s.player.setVolume(Number(t))}},{ATTR:{volume:{value:1,setter:function(t){return this.audio.volume=t,t},validator:function(s){return 1>=s&&s>=0&&t.isNumber(s)?!0:!1}},src:{}}});a.exports=d});