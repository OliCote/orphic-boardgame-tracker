"use strict";(self.webpackChunkorphic_boardgame_tracker=self.webpackChunkorphic_boardgame_tracker||[]).push([[22],{5022:function(e,r,t){t.r(r),t.d(r,{createSwipeBackGesture:function(){return u}});var n=t(1811),a=t(9507),i=t(7909),u=function(e,r,t,u,c){var o=e.ownerDocument.defaultView,f=(0,a.i)(e),s=function(e){return f?-e.deltaX:e.deltaX};return(0,i.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var r=e.startX;return f?r>=o.innerWidth-50:r<=50}(e)&&r()},onStart:t,onMove:function(e){var r=s(e)/o.innerWidth;u(r)},onEnd:function(e){var r=s(e),t=o.innerWidth,a=r/t,i=function(e){return f?-e.velocityX:e.velocityX}(e),u=i>=0&&(i>.2||r>t/2),h=(u?1-a:a)*t,d=0;if(h>5){var l=h/Math.abs(i);d=Math.min(l,540)}c(u,a<=0?.01:(0,n.j)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=22.564050d6.chunk.js.map