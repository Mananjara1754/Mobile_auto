"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[189],{189:(ee,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>E});var b=m(5861),P=m(2055),h=m(3577),y=m(3457),g=(()=>((g=g||{}).Body="body",g.Ionic="ionic",g.Native="native",g.None="none",g))();const k={getEngine(){var e;return(null===(e=null==y.w?void 0:y.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null==y.w?void 0:y.w.Capacitor.Plugins.Keyboard)},getResizeMode(){const e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},I=new WeakMap,C=(e,t,n,o=0,r=!1)=>{I.has(e)!==n&&(n?z(e,t,o,r):Z(e,t))},z=(e,t,n,o=!1)=>{const r=t.parentNode,s=t.cloneNode(!1);s.classList.add("cloned-input"),s.tabIndex=-1,o&&(s.disabled=!0),r.appendChild(s),I.set(e,s);const d="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${d}px,${n}px,0) scale(0)`},Z=(e,t)=>{const n=I.get(e);n&&(I.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},p="input, textarea, [no-blur], [contenteditable]",F="$ionPaddingTimer",T=(e,t,n)=>{const o=e[F];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[F]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()},120)},U=(e,t,n)=>{e.addEventListener("focusout",()=>{t&&T(t,0,n)},{once:!0})};let w=0;const B="data-ionic-skip-scroll-assist",Q=(e,t,n,o,r,s,a,d=!1)=>{const i=s&&(void 0===a||a.mode===g.None),S=function(){var u=(0,b.Z)(function*(){t.hasAttribute(B)?t.removeAttribute(B):X(e,t,n,o,r,i,d)});return function(){return u.apply(this,arguments)}}();return e.addEventListener("focusin",S,!0),()=>{e.removeEventListener("focusin",S,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},X=function(){var e=(0,b.Z)(function*(t,n,o,r,s,a,d=!1){if(!o&&!r)return;const i=((e,t,n)=>{var o;return((e,t,n,o)=>{const r=e.top,s=e.bottom,a=t.top,i=a+15,u=Math.min(t.bottom,o-n)-50-s,_=i-r,l=Math.round(u<0?-u:_>0?-_:0),v=Math.min(l,r-a),M=Math.abs(v)/.3;return{scrollAmount:v,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:n,inputSafeY:4-(r-i)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)})(t,o||r,s);if(o&&Math.abs(i.scrollAmount)<4)return x(n),void(a&&null!==o&&(T(o,w),U(n,o,()=>w=0)));if(C(t,n,!0,i.inputSafeY,d),x(n),(0,h.r)(()=>t.click()),a&&o&&(w=i.scrollPadding,T(o,w)),typeof window<"u"){let S;const u=function(){var l=(0,b.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",_),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,P.c)(o,0,i.scrollAmount,i.scrollDuration)),C(t,n,!1,i.inputSafeY),x(n),a&&U(n,o,()=>w=0)});return function(){return l.apply(this,arguments)}}(),_=()=>{window.removeEventListener("ionKeyboardDidShow",_),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,P.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===n.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",_)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(n,o,r,s,a,d){return e.apply(this,arguments)}}(),E=function(){var e=(0,b.Z)(function*(t,n){const o=document,r="ios"===n,s="android"===n,a=t.getNumber("keyboardHeight",290),d=t.getBoolean("scrollAssist",!0),i=t.getBoolean("hideCaretOnScroll",r),S=t.getBoolean("inputBlurring",r),u=t.getBoolean("scrollPadding",!0),_=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,v=new WeakMap,j=yield k.getResizeMode(),M=function(){var f=(0,b.Z)(function*(c){yield new Promise(D=>(0,h.c)(c,D));const R=c.shadowRoot||c,L=R.querySelector("input")||R.querySelector("textarea"),A=(0,P.f)(c),W=A?null:c.closest("ion-footer");if(L){if(A&&i&&!l.has(c)){const D=((e,t,n)=>{if(!n||!t)return()=>{};const o=d=>{(e=>e===e.getRootNode().activeElement)(t)&&C(e,t,d)},r=()=>C(e,t,!1),s=()=>o(!0),a=()=>o(!1);return(0,h.a)(n,"ionScrollStart",s),(0,h.a)(n,"ionScrollEnd",a),t.addEventListener("blur",r),()=>{(0,h.b)(n,"ionScrollStart",s),(0,h.b)(n,"ionScrollEnd",a),t.removeEventListener("blur",r)}})(c,L,A);l.set(c,D)}if("date"!==L.type&&"datetime-local"!==L.type&&(A||W)&&d&&!v.has(c)){const D=Q(c,L,A,W,a,u,j,s);v.set(c,D)}}});return function(R){return f.apply(this,arguments)}}();S&&(()=>{let e=!0,t=!1;const n=document;(0,h.a)(n,"ionScrollStart",()=>{t=!0}),n.addEventListener("focusin",()=>{e=!0},!0),n.addEventListener("touchend",a=>{if(t)return void(t=!1);const d=n.activeElement;if(!d||d.matches(p))return;const i=a.target;i!==d&&(i.matches(p)||i.closest(p)||(e=!1,setTimeout(()=>{e||d.blur()},50)))},!1)})();for(const f of _)M(f);o.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const c=l.get(f);c&&c(),l.delete(f)}if(d){const c=v.get(f);c&&c(),v.delete(f)}})(f.detail)})});return function(n,o){return e.apply(this,arguments)}}()}}]);