/*!build time : 2014-07-17 8:07:10 PM*/
KISSY.add("gallery/xplayer/1.1/plugin/status",function(){return{duration:0,currentTime:0,loadedTime:0,volume:1,isPaused:!0,isPlaying:!1,pausePosition:0,readyState:0}}),KISSY.add("gallery/xplayer/1.1/plugin/audio",function(a,b,c){var d=b.extend({initializer:function(){var a=this;a.audio=new Audio,a._addEvent(),a.status=c},_addEvent:function(){var a=this;a.audio.addEventListener("timeupdate",function(b){a.status.currentTime=this.currentTime,a.status.duration=this.duration,a.fire(b.type,a.status)}),a.audio.addEventListener("ended",function(b){a.status.isPlaying=!1,a.status.isPaused=!1,a.fire(b.type)}),a.audio.addEventListener("progress",function(b){if(null!=a.audio.buffered&&a.audio.buffered.length){var c=a.audio.buffered.end(a.audio.buffered.length-1);a.fire(b.type,{progress:1e3*c,duration:1e3*a.audio.duration})}}),a.audio.addEventListener("error",function(b){a.fire(b.type)})},load:function(a){var b=this;b.set("src",a),b.audio.src=a,b.audio.volume=b.get("volume"),b.audio.load()},play:function(){var b=this;a.log(b.status.isPlaying),b.status.isPlaying||(b.status.isPlaying=!0,b.status.isPaused=!1,b.audio.play())},pause:function(){var a=this;a.status.isPaused||(a.status.isPlaying=!1,a.status.isPaused=!0,a.status.pausePosition=a.audio.currentTime,a.audio.pause())},stop:function(){var a=this;a.status.isPlaying=!1,a.status.isPaused=!1,a.status.pausePosition=0;try{a.audio.currentTime=0}catch(b){}a.audio.pause()},setPosition:function(a){var b=this;b.audio.readyState>0&&(b.status.currentTime=a/1e3,b.audio.currentTime=b.status.currentTime,b.status.pausePosition=a),b.status.isPlaying||b.play()},setVolume:function(a){var b=this;b.status.volume=a,b.set("volume",a)}},{ATTRS:{volume:{value:.5,setter:function(a){return this.audio.volume=a,a},validator:function(b){return 1>=b&&b>=0&&a.isNumber(b)?!0:!1}},src:{}}});return d},{requires:["base","./status"]}),KISSY.add("gallery/xplayer/1.1/mini",function(a,b,c){"use strict";function d(b){var c=this;c.config=a.mix({autoplay:!1},b,!0),c._init()}{var e="";b.all}return d.prototype={_init:function(){var a=this;return a.player=new c,a.track=null,a},load:function(a){var b=this;if(!a.url||a.url==e)throw new Error("Can't find a URL parameter");return b.stop(),b.track=a,b.player.load(b.track.url),b.config.autoplay&&b.play(),b},on:function(a,b){var c=this;return c.player.on(a,b),c},play:function(b){var c=this;return(isNaN(b)||a.isUndefined(b))&&(b=0),c.player.play(b),c},stop:function(){var a=this;return a.player.stop(),a},pause:function(){var a=this;return a.player.pause(),a},setPosition:function(b){var c=this;return a.isUndefined(b)?c:(c.player.setPosition(b),c)},getTrack:function(){var a=this;return a.track},setVolume:function(a){var b=this;b.player.setVolume(a)}},d},{requires:["node","./plugin/audio"]});