import{a2 as v,aC as D,bC as ft,by as pt,bz as dt,bA as vt,bB as ht,bm as gt,bD as _t,aE as O,bE as ce,aF as mt,bF as Bt,bG as pe,bj as Pe,aH as H,bH as $e,bI as It,aM as De,aK as ve,a3 as R,bJ as fe,bb as Me,bK as Ft,b9 as wt,aO as K,bL as $t,bM as Xe,aG as Xt,aI as yt,aL as w,bN as b,aW as bt}from"./index.fbf0f355.js";var Se=v.exports.createContext(null);function Yt(e){var r=e.children,n=e.onBatchResize,o=v.exports.useRef(0),i=v.exports.useRef([]),s=v.exports.useContext(Se),t=v.exports.useCallback(function(u,a,l){o.current+=1;var f=o.current;i.current.push({size:u,element:a,data:l}),Promise.resolve().then(function(){f===o.current&&(n?.(i.current),i.current=[])}),s?.(u,a,l)},[n,s]);return D(Se.Provider,{value:t,children:r})}var X=new Map;function jt(e){e.forEach(function(r){var n,o=r.target;(n=X.get(o))===null||n===void 0||n.forEach(function(i){return i(o)})})}var xt=new ft(jt);function Ut(e,r){X.has(e)||(X.set(e,new Set),xt.observe(e)),X.get(e).add(r)}function qt(e,r){X.has(e)&&(X.get(e).delete(r),X.get(e).size||(xt.unobserve(e),X.delete(e)))}var Gt=function(e){pt(n,e);var r=dt(n);function n(){return vt(this,n),r.apply(this,arguments)}return ht(n,[{key:"render",value:function(){return this.props.children}}]),n}(v.exports.Component);function Kt(e,r){var n=e.children,o=e.disabled,i=v.exports.useRef(null),s=v.exports.useRef(null),t=v.exports.useContext(Se),u=typeof n=="function",a=u?n(i):n,l=v.exports.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),f=!u&&v.exports.isValidElement(a)&&gt(a),h=f?a.ref:null,d=_t(h,i),c=function(){var x;return ce(i.current)||(i.current&&mt(i.current)==="object"?ce((x=i.current)===null||x===void 0?void 0:x.nativeElement):null)||ce(s.current)};v.exports.useImperativeHandle(r,function(){return c()});var p=v.exports.useRef(e);p.current=e;var m=v.exports.useCallback(function(y){var x=p.current,C=x.onResize,T=x.data,P=y.getBoundingClientRect(),N=P.width,A=P.height,z=y.offsetWidth,k=y.offsetHeight,V=Math.floor(N),L=Math.floor(A);if(l.current.width!==V||l.current.height!==L||l.current.offsetWidth!==z||l.current.offsetHeight!==k){var M={width:V,height:L,offsetWidth:z,offsetHeight:k};l.current=M;var I=z===Math.round(N)?N:z,F=k===Math.round(A)?A:k,_=O(O({},M),{},{offsetWidth:I,offsetHeight:F});t?.(_,y,T),C&&Promise.resolve().then(function(){C(_,y)})}},[]);return v.exports.useEffect(function(){var y=c();return y&&!o&&Ut(y,m),function(){return qt(y,m)}},[i.current,o]),D(Gt,{ref:s,children:f?v.exports.cloneElement(a,{ref:d}):a})}var Jt=v.exports.forwardRef(Kt),Qt="rc-observer-key";function Zt(e,r){var n=e.children,o=typeof n=="function"?[n]:Bt(n);return o.map(function(i,s){var t=i?.key||"".concat(Qt,"-").concat(s);return v.exports.createElement(Jt,{...e,key:t,ref:s===0?r:void 0},i)})}var en=v.exports.forwardRef(Zt);en.Collection=Yt;function te(e,r,n,o){var i=pe.unstable_batchedUpdates?function(t){pe.unstable_batchedUpdates(n,t)}:n;return e!=null&&e.addEventListener&&e.addEventListener(r,i,o),{remove:function(){e!=null&&e.removeEventListener&&e.removeEventListener(r,i,o)}}}function Ye(e){var r=v.exports.useRef();r.current=e;var n=v.exports.useCallback(function(){for(var o,i=arguments.length,s=new Array(i),t=0;t<i;t++)s[t]=arguments[t];return(o=r.current)===null||o===void 0?void 0:o.call.apply(o,[r].concat(s))},[]);return n}function we(e){return e!==void 0}function qn(e,r){var n=r||{},o=n.defaultValue,i=n.value,s=n.onChange,t=n.postState,u=Pe(function(){return we(i)?i:we(o)?typeof o=="function"?o():o:typeof e=="function"?e():e}),a=H(u,2),l=a[0],f=a[1],h=i!==void 0?i:l,d=t?t(h):h,c=Ye(s),p=Pe([h]),m=H(p,2),y=m[0],x=m[1];$e(function(){var T=y[0];l!==T&&c(l,T)},[y]),$e(function(){we(i)||f(i)},[i]);var C=Ye(function(T,P){f(T,P),x([h],P)});return[d,C]}const tn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0,4))};var nn=v.exports.forwardRef(function(e,r){var n=e.didUpdate,o=e.getContainer,i=e.children,s=v.exports.useRef(),t=v.exports.useRef();v.exports.useImperativeHandle(r,function(){return{}});var u=v.exports.useRef(!1);return!u.current&&It()&&(t.current=o(),s.current=t.current.parentNode,u.current=!0),v.exports.useEffect(function(){n?.(e)}),v.exports.useEffect(function(){return t.current.parentNode===null&&s.current!==null&&s.current.appendChild(t.current),function(){var a;(a=t.current)===null||a===void 0||(a=a.parentNode)===null||a===void 0||a.removeChild(t.current)}},[]),t.current?pe.createPortal(i,t.current):null});function rn(e,r,n){return n?e[0]===r[0]:e[0]===r[0]&&e[1]===r[1]}function on(e,r,n){var o=e[r]||{};return O(O({},o),n)}function an(e,r,n,o){for(var i=n.points,s=Object.keys(e),t=0;t<s.length;t+=1){var u=s[t];if(rn(e[u].points,i,o))return"".concat(r,"-placement-").concat(u)}return""}function Ct(e){var r=e.prefixCls,n=e.motion,o=e.animation,i=e.transitionName;return n||(o?{motionName:"".concat(r,"-").concat(o)}:i?{motionName:i}:null)}function sn(e){var r=e.prefixCls,n=e.visible,o=e.zIndex,i=e.mask,s=e.maskMotion,t=e.maskAnimation,u=e.maskTransitionName;if(!i)return null;var a={};return(s||u||t)&&(a=O({motionAppear:!0},Ct({motion:s,prefixCls:r,transitionName:u,animation:t}))),D(De,{...a,visible:n,removeOnLeave:!0,children:function(l){var f=l.className;return D("div",{style:{zIndex:o},className:ve("".concat(r,"-mask"),f)})}})}function je(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,o)}return n}function Ue(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?je(Object(n),!0).forEach(function(o){un(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function Re(e){return Re=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Re(e)}function un(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}var ee,ln={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function de(){if(ee!==void 0)return ee;ee="";var e=document.createElement("p").style,r="Transform";for(var n in ln)n+r in e&&(ee=n);return ee}function Tt(){return de()?"".concat(de(),"TransitionProperty"):"transitionProperty"}function he(){return de()?"".concat(de(),"Transform"):"transform"}function qe(e,r){var n=Tt();n&&(e.style[n]=r,n!=="transitionProperty"&&(e.style.transitionProperty=r))}function ye(e,r){var n=he();n&&(e.style[n]=r,n!=="transform"&&(e.style.transform=r))}function cn(e){return e.style.transitionProperty||e.style[Tt()]}function fn(e){var r=window.getComputedStyle(e,null),n=r.getPropertyValue("transform")||r.getPropertyValue(he());if(n&&n!=="none"){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return{x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return{x:0,y:0}}var pn=/matrix\((.*)\)/,dn=/matrix3d\((.*)\)/;function vn(e,r){var n=window.getComputedStyle(e,null),o=n.getPropertyValue("transform")||n.getPropertyValue(he());if(o&&o!=="none"){var i,s=o.match(pn);if(s)s=s[1],i=s.split(",").map(function(u){return parseFloat(u,10)}),i[4]=r.x,i[5]=r.y,ye(e,"matrix(".concat(i.join(","),")"));else{var t=o.match(dn)[1];i=t.split(",").map(function(u){return parseFloat(u,10)}),i[12]=r.x,i[13]=r.y,ye(e,"matrix3d(".concat(i.join(","),")"))}}else ye(e,"translateX(".concat(r.x,"px) translateY(").concat(r.y,"px) translateZ(0)"))}var hn=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,oe;function Ge(e){var r=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=r}function J(e,r,n){var o=n;if(Re(r)==="object"){for(var i in r)r.hasOwnProperty(i)&&J(e,i,r[i]);return}if(typeof o<"u"){typeof o=="number"&&(o="".concat(o,"px")),e.style[r]=o;return}return oe(e,r)}function gn(e){var r,n,o,i=e.ownerDocument,s=i.body,t=i&&i.documentElement;return r=e.getBoundingClientRect(),n=Math.floor(r.left),o=Math.floor(r.top),n-=t.clientLeft||s.clientLeft||0,o-=t.clientTop||s.clientTop||0,{left:n,top:o}}function Pt(e,r){var n=e["page".concat(r?"Y":"X","Offset")],o="scroll".concat(r?"Top":"Left");if(typeof n!="number"){var i=e.document;n=i.documentElement[o],typeof n!="number"&&(n=i.body[o])}return n}function Mt(e){return Pt(e)}function St(e){return Pt(e,!0)}function re(e){var r=gn(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return r.left+=Mt(o),r.top+=St(o),r}function Ne(e){return e!=null&&e==e.window}function Rt(e){return Ne(e)?e.document:e.nodeType===9?e:e.ownerDocument}function mn(e,r,n){var o=n,i="",s=Rt(e);return o=o||s.defaultView.getComputedStyle(e,null),o&&(i=o.getPropertyValue(r)||o[r]),i}var wn=new RegExp("^(".concat(hn,")(?!px)[a-z%]+$"),"i"),yn=/^(top|right|bottom|left)$/,be="currentStyle",xe="runtimeStyle",U="left",bn="px";function xn(e,r){var n=e[be]&&e[be][r];if(wn.test(n)&&!yn.test(r)){var o=e.style,i=o[U],s=e[xe][U];e[xe][U]=e[be][U],o[U]=r==="fontSize"?"1em":n||0,n=o.pixelLeft+bn,o[U]=i,e[xe][U]=s}return n===""?"auto":n}typeof window<"u"&&(oe=window.getComputedStyle?mn:xn);function ae(e,r){return e==="left"?r.useCssRight?"right":e:r.useCssBottom?"bottom":e}function Ke(e){if(e==="left")return"right";if(e==="right")return"left";if(e==="top")return"bottom";if(e==="bottom")return"top"}function Je(e,r,n){J(e,"position")==="static"&&(e.style.position="relative");var o=-999,i=-999,s=ae("left",n),t=ae("top",n),u=Ke(s),a=Ke(t);s!=="left"&&(o=999),t!=="top"&&(i=999);var l="",f=re(e);("left"in r||"top"in r)&&(l=cn(e)||"",qe(e,"none")),"left"in r&&(e.style[u]="",e.style[s]="".concat(o,"px")),"top"in r&&(e.style[a]="",e.style[t]="".concat(i,"px")),Ge(e);var h=re(e),d={};for(var c in r)if(r.hasOwnProperty(c)){var p=ae(c,n),m=c==="left"?o:i,y=f[c]-h[c];p===c?d[p]=m+y:d[p]=m-y}J(e,d),Ge(e),("left"in r||"top"in r)&&qe(e,l);var x={};for(var C in r)if(r.hasOwnProperty(C)){var T=ae(C,n),P=r[C]-f[C];C===T?x[T]=d[T]+P:x[T]=d[T]-P}J(e,x)}function Cn(e,r){var n=re(e),o=fn(e),i={x:o.x,y:o.y};"left"in r&&(i.x=o.x+r.left-n.left),"top"in r&&(i.y=o.y+r.top-n.top),vn(e,i)}function Tn(e,r,n){if(n.ignoreShake){var o=re(e),i=o.left.toFixed(0),s=o.top.toFixed(0),t=r.left.toFixed(0),u=r.top.toFixed(0);if(i===t&&s===u)return}n.useCssRight||n.useCssBottom?Je(e,r,n):n.useCssTransform&&he()in document.body.style?Cn(e,r):Je(e,r,n)}function Ae(e,r){for(var n=0;n<e.length;n++)r(e[n])}function kt(e){return oe(e,"boxSizing")==="border-box"}var Pn=["margin","border","padding"],ke=-1,Mn=2,Ee=1,Sn=0;function Rn(e,r,n){var o={},i=e.style,s;for(s in r)r.hasOwnProperty(s)&&(o[s]=i[s],i[s]=r[s]);n.call(e);for(s in r)r.hasOwnProperty(s)&&(i[s]=o[s])}function ne(e,r,n){var o=0,i,s,t;for(s=0;s<r.length;s++)if(i=r[s],i)for(t=0;t<n.length;t++){var u=void 0;i==="border"?u="".concat(i).concat(n[t],"Width"):u=i+n[t],o+=parseFloat(oe(e,u))||0}return o}var B={getParent:function(r){var n=r;do n.nodeType===11&&n.host?n=n.host:n=n.parentNode;while(n&&n.nodeType!==1&&n.nodeType!==9);return n}};Ae(["Width","Height"],function(e){B["doc".concat(e)]=function(r){var n=r.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],B["viewport".concat(e)](n))},B["viewport".concat(e)]=function(r){var n="client".concat(e),o=r.document,i=o.body,s=o.documentElement,t=s[n];return o.compatMode==="CSS1Compat"&&t||i&&i[n]||t}});function Qe(e,r,n){var o=n;if(Ne(e))return r==="width"?B.viewportWidth(e):B.viewportHeight(e);if(e.nodeType===9)return r==="width"?B.docWidth(e):B.docHeight(e);var i=r==="width"?["Left","Right"]:["Top","Bottom"],s=Math.floor(r==="width"?e.getBoundingClientRect().width:e.getBoundingClientRect().height),t=kt(e),u=0;(s==null||s<=0)&&(s=void 0,u=oe(e,r),(u==null||Number(u)<0)&&(u=e.style[r]||0),u=Math.floor(parseFloat(u))||0),o===void 0&&(o=t?Ee:ke);var a=s!==void 0||t,l=s||u;return o===ke?a?l-ne(e,["border","padding"],i):u:a?o===Ee?l:l+(o===Mn?-ne(e,["border"],i):ne(e,["margin"],i)):u+ne(e,Pn.slice(o),i)}var kn={position:"absolute",visibility:"hidden",display:"block"};function Ze(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];var o,i=r[0];return i.offsetWidth!==0?o=Qe.apply(void 0,r):Rn(i,kn,function(){o=Qe.apply(void 0,r)}),o}Ae(["width","height"],function(e){var r=e.charAt(0).toUpperCase()+e.slice(1);B["outer".concat(r)]=function(o,i){return o&&Ze(o,e,i?Sn:Ee)};var n=e==="width"?["Left","Right"]:["Top","Bottom"];B[e]=function(o,i){var s=i;if(s!==void 0){if(o){var t=kt(o);return t&&(s+=ne(o,["padding","border"],n)),J(o,e,s)}return}return o&&Ze(o,e,ke)}});function Et(e,r){for(var n in r)r.hasOwnProperty(n)&&(e[n]=r[n]);return e}var g={getWindow:function(r){if(r&&r.document&&r.setTimeout)return r;var n=r.ownerDocument||r;return n.defaultView||n.parentWindow},getDocument:Rt,offset:function(r,n,o){if(typeof n<"u")Tn(r,n,o||{});else return re(r)},isWindow:Ne,each:Ae,css:J,clone:function(r){var n,o={};for(n in r)r.hasOwnProperty(n)&&(o[n]=r[n]);var i=r.overflow;if(i)for(n in r)r.hasOwnProperty(n)&&(o.overflow[n]=r.overflow[n]);return o},mix:Et,getWindowScrollLeft:function(r){return Mt(r)},getWindowScrollTop:function(r){return St(r)},merge:function(){for(var r={},n=0;n<arguments.length;n++)g.mix(r,n<0||arguments.length<=n?void 0:arguments[n]);return r},viewportWidth:0,viewportHeight:0};Et(g,B);var Ce=g.getParent;function Oe(e){if(g.isWindow(e)||e.nodeType===9)return null;var r=g.getDocument(e),n=r.body,o,i=g.css(e,"position"),s=i==="fixed"||i==="absolute";if(!s)return e.nodeName.toLowerCase()==="html"?null:Ce(e);for(o=Ce(e);o&&o!==n&&o.nodeType!==9;o=Ce(o))if(i=g.css(o,"position"),i!=="static")return o;return null}var et=g.getParent;function En(e){if(g.isWindow(e)||e.nodeType===9)return!1;var r=g.getDocument(e),n=r.body,o=null;for(o=et(e);o&&o!==n&&o!==r;o=et(o)){var i=g.css(o,"position");if(i==="fixed")return!0}return!1}function He(e,r){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=Oe(e),i=g.getDocument(e),s=i.defaultView||i.parentWindow,t=i.body,u=i.documentElement;o;){if((navigator.userAgent.indexOf("MSIE")===-1||o.clientWidth!==0)&&o!==t&&o!==u&&g.css(o,"overflow")!=="visible"){var a=g.offset(o);a.left+=o.clientLeft,a.top+=o.clientTop,n.top=Math.max(n.top,a.top),n.right=Math.min(n.right,a.left+o.clientWidth),n.bottom=Math.min(n.bottom,a.top+o.clientHeight),n.left=Math.max(n.left,a.left)}else if(o===t||o===u)break;o=Oe(o)}var l=null;if(!g.isWindow(e)&&e.nodeType!==9){l=e.style.position;var f=g.css(e,"position");f==="absolute"&&(e.style.position="fixed")}var h=g.getWindowScrollLeft(s),d=g.getWindowScrollTop(s),c=g.viewportWidth(s),p=g.viewportHeight(s),m=u.scrollWidth,y=u.scrollHeight,x=window.getComputedStyle(t);if(x.overflowX==="hidden"&&(m=s.innerWidth),x.overflowY==="hidden"&&(y=s.innerHeight),e.style&&(e.style.position=l),r||En(e))n.left=Math.max(n.left,h),n.top=Math.max(n.top,d),n.right=Math.min(n.right,h+c),n.bottom=Math.min(n.bottom,d+p);else{var C=Math.max(m,h+c);n.right=Math.min(n.right,C);var T=Math.max(y,d+p);n.bottom=Math.min(n.bottom,T)}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function On(e,r,n,o){var i=g.clone(e),s={width:r.width,height:r.height};return o.adjustX&&i.left<n.left&&(i.left=n.left),o.resizeWidth&&i.left>=n.left&&i.left+s.width>n.right&&(s.width-=i.left+s.width-n.right),o.adjustX&&i.left+s.width>n.right&&(i.left=Math.max(n.right-s.width,n.left)),o.adjustY&&i.top<n.top&&(i.top=n.top),o.resizeHeight&&i.top>=n.top&&i.top+s.height>n.bottom&&(s.height-=i.top+s.height-n.bottom),o.adjustY&&i.top+s.height>n.bottom&&(i.top=Math.max(n.bottom-s.height,n.top)),g.mix(i,s)}function Ve(e){var r,n,o;if(!g.isWindow(e)&&e.nodeType!==9)r=g.offset(e),n=g.outerWidth(e),o=g.outerHeight(e);else{var i=g.getWindow(e);r={left:g.getWindowScrollLeft(i),top:g.getWindowScrollTop(i)},n=g.viewportWidth(i),o=g.viewportHeight(i)}return r.width=n,r.height=o,r}function tt(e,r){var n=r.charAt(0),o=r.charAt(1),i=e.width,s=e.height,t=e.left,u=e.top;return n==="c"?u+=s/2:n==="b"&&(u+=s),o==="c"?t+=i/2:o==="r"&&(t+=i),{left:t,top:u}}function se(e,r,n,o,i){var s=tt(r,n[1]),t=tt(e,n[0]),u=[t.left-s.left,t.top-s.top];return{left:Math.round(e.left-u[0]+o[0]-i[0]),top:Math.round(e.top-u[1]+o[1]-i[1])}}function nt(e,r,n){return e.left<n.left||e.left+r.width>n.right}function rt(e,r,n){return e.top<n.top||e.top+r.height>n.bottom}function Dn(e,r,n){return e.left>n.right||e.left+r.width<n.left}function Nn(e,r,n){return e.top>n.bottom||e.top+r.height<n.top}function ue(e,r,n){var o=[];return g.each(e,function(i){o.push(i.replace(r,function(s){return n[s]}))}),o}function le(e,r){return e[r]=-e[r],e}function ot(e,r){var n;return/%$/.test(e)?n=parseInt(e.substring(0,e.length-1),10)/100*r:n=parseInt(e,10),n||0}function it(e,r){e[0]=ot(e[0],r.width),e[1]=ot(e[1],r.height)}function Ot(e,r,n,o){var i=n.points,s=n.offset||[0,0],t=n.targetOffset||[0,0],u=n.overflow,a=n.source||e;s=[].concat(s),t=[].concat(t),u=u||{};var l={},f=0,h=!!(u&&u.alwaysByViewport),d=He(a,h),c=Ve(a);it(s,c),it(t,r);var p=se(c,r,i,s,t),m=g.merge(c,p);if(d&&(u.adjustX||u.adjustY)&&o){if(u.adjustX&&nt(p,c,d)){var y=ue(i,/[lr]/gi,{l:"r",r:"l"}),x=le(s,0),C=le(t,0),T=se(c,r,y,x,C);Dn(T,c,d)||(f=1,i=y,s=x,t=C)}if(u.adjustY&&rt(p,c,d)){var P=ue(i,/[tb]/gi,{t:"b",b:"t"}),N=le(s,1),A=le(t,1),z=se(c,r,P,N,A);Nn(z,c,d)||(f=1,i=P,s=N,t=A)}f&&(p=se(c,r,i,s,t),g.mix(m,p));var k=nt(p,c,d),V=rt(p,c,d);if(k||V){var L=i;k&&(L=ue(i,/[lr]/gi,{l:"r",r:"l"})),V&&(L=ue(i,/[tb]/gi,{t:"b",b:"t"})),i=L,s=n.offset||[0,0],t=n.targetOffset||[0,0]}l.adjustX=u.adjustX&&k,l.adjustY=u.adjustY&&V,(l.adjustX||l.adjustY)&&(m=On(p,c,d,l))}return m.width!==c.width&&g.css(a,"width",g.width(a)+m.width-c.width),m.height!==c.height&&g.css(a,"height",g.height(a)+m.height-c.height),g.offset(a,{left:m.left,top:m.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:i,offset:s,targetOffset:t,overflow:l}}function An(e,r){var n=He(e,r),o=Ve(e);return!n||o.left+o.width<=n.left||o.top+o.height<=n.top||o.left>=n.right||o.top>=n.bottom}function We(e,r,n){var o=n.target||r,i=Ve(o),s=!An(o,n.overflow&&n.overflow.alwaysByViewport);return Ot(e,i,n,s)}We.__getOffsetParent=Oe;We.__getVisibleRectForElement=He;function Hn(e,r,n){var o,i,s=g.getDocument(e),t=s.defaultView||s.parentWindow,u=g.getWindowScrollLeft(t),a=g.getWindowScrollTop(t),l=g.viewportWidth(t),f=g.viewportHeight(t);"pageX"in r?o=r.pageX:o=u+r.clientX,"pageY"in r?i=r.pageY:i=a+r.clientY;var h={left:o,top:i,width:0,height:0},d=o>=0&&o<=u+l&&i>=0&&i<=a+f,c=[n.points[0],"cc"];return Ot(e,h,Ue(Ue({},n),{},{points:c}),d)}const Vn=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var r=e.getBBox(),n=r.width,o=r.height;if(n||o)return!0}if(e.getBoundingClientRect){var i=e.getBoundingClientRect(),s=i.width,t=i.height;if(s||t)return!0}}return!1},Wn=function(e,r){var n=R.useRef(!1),o=R.useRef(null);function i(){window.clearTimeout(o.current)}function s(t){if(i(),!n.current||t===!0){if(e(t)===!1)return;n.current=!0,o.current=window.setTimeout(function(){n.current=!1},r)}else o.current=window.setTimeout(function(){n.current=!1,s()},r)}return[s,function(){n.current=!1,i()}]};function zn(e,r){return e===r?!0:!e||!r?!1:"pageX"in r&&"pageY"in r?e.pageX===r.pageX&&e.pageY===r.pageY:"clientX"in r&&"clientY"in r?e.clientX===r.clientX&&e.clientY===r.clientY:!1}function Ln(e,r){e!==document.activeElement&&fe(r,e)&&typeof e.focus=="function"&&e.focus()}function at(e,r){var n=null,o=null;function i(t){var u=H(t,1),a=u[0].target;if(!!document.documentElement.contains(a)){var l=a.getBoundingClientRect(),f=l.width,h=l.height,d=Math.floor(f),c=Math.floor(h);(n!==d||o!==c)&&Promise.resolve().then(function(){r({width:d,height:c})}),n=d,o=c}}var s=new ft(i);return e&&s.observe(e),function(){s.disconnect()}}function st(e){return typeof e!="function"?null:e()}function ut(e){return mt(e)!=="object"||!e?null:e}var _n=function(r,n){var o=r.children,i=r.disabled,s=r.target,t=r.align,u=r.onAlign,a=r.monitorWindowResize,l=r.monitorBufferTime,f=l===void 0?0:l,h=R.useRef({}),d=R.useRef(),c=R.Children.only(o),p=R.useRef({});p.current.disabled=i,p.current.target=s,p.current.align=t,p.current.onAlign=u;var m=Wn(function(){var M=p.current,I=M.disabled,F=M.target,_=M.align,q=M.onAlign,W=d.current;if(!I&&F&&W){var Y,E=st(F),j=ut(F);h.current.element=E,h.current.point=j,h.current.align=_;var ge=document,ie=ge.activeElement;return E&&Vn(E)?Y=We(W,E,_):j&&(Y=Hn(W,j,_)),Ln(ie,W),q&&Y&&q(W,Y),!0}return!1},f),y=H(m,2),x=y[0],C=y[1],T=R.useState(),P=H(T,2),N=P[0],A=P[1],z=R.useState(),k=H(z,2),V=k[0],L=k[1];return Me(function(){A(st(s)),L(ut(s))}),R.useEffect(function(){(h.current.element!==N||!zn(h.current.point,V)||!Ft(h.current.align,t))&&x()}),R.useEffect(function(){var M=at(d.current,x);return M},[d.current]),R.useEffect(function(){var M=at(N,x);return M},[N]),R.useEffect(function(){i?C():x()},[i]),R.useEffect(function(){if(a){var M=te(window,"resize",x);return M.remove}},[a]),R.useEffect(function(){return function(){C()}},[]),R.useImperativeHandle(n,function(){return{forceAlign:function(){return x(!0)}}}),R.isValidElement(c)&&(c=R.cloneElement(c,{ref:wt(c.ref,d)})),c},Dt=R.forwardRef(_n);Dt.displayName="Align";var lt=["measure","alignPre","align",null,"motion"];const Bn=function(e,r){var n=Pe(null),o=H(n,2),i=o[0],s=o[1],t=v.exports.useRef();function u(f){s(f,!0)}function a(){K.cancel(t.current)}function l(f){a(),t.current=K(function(){u(function(h){switch(i){case"align":return"motion";case"motion":return"stable"}return h}),f?.()})}return v.exports.useEffect(function(){u("measure")},[e]),v.exports.useEffect(function(){switch(i){case"measure":r();break}i&&(t.current=K($t(Xe().mark(function f(){var h,d;return Xe().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:h=lt.indexOf(i),d=lt[h+1],d&&h!==-1&&u(d);case 3:case"end":return p.stop()}},f)}))))},[i]),v.exports.useEffect(function(){return function(){a()}},[]),[i,l]},In=function(e){var r=v.exports.useState({width:0,height:0}),n=H(r,2),o=n[0],i=n[1];function s(u){var a=u.offsetWidth,l=u.offsetHeight,f=u.getBoundingClientRect(),h=f.width,d=f.height;Math.abs(a-h)<1&&Math.abs(l-d)<1&&(a=h,l=d),i({width:a,height:l})}var t=v.exports.useMemo(function(){var u={};if(e){var a=o.width,l=o.height;e.indexOf("height")!==-1&&l?u.height=l:e.indexOf("minHeight")!==-1&&l&&(u.minHeight=l),e.indexOf("width")!==-1&&a?u.width=a:e.indexOf("minWidth")!==-1&&a&&(u.minWidth=a)}return u},[e,o]);return[t,s]};var Nt=v.exports.forwardRef(function(e,r){var n=e.visible,o=e.prefixCls,i=e.className,s=e.style,t=e.children,u=e.zIndex,a=e.stretch,l=e.destroyPopupOnHide,f=e.forceRender,h=e.align,d=e.point,c=e.getRootDomNode,p=e.getClassNameFromAlign,m=e.onAlign,y=e.onMouseEnter,x=e.onMouseLeave,C=e.onMouseDown,T=e.onTouchStart,P=e.onClick,N=v.exports.useRef(),A=v.exports.useRef(),z=v.exports.useState(),k=H(z,2),V=k[0],L=k[1],M=In(a),I=H(M,2),F=I[0],_=I[1];function q(){a&&_(c())}var W=Bn(n,q),Y=H(W,2),E=Y[0],j=Y[1],ge=v.exports.useState(0),ie=H(ge,2),ze=ie[0],Le=ie[1],me=v.exports.useRef();Me(function(){E==="alignPre"&&Le(0)},[E]);function Vt(){return d||c}function _e(){var S;(S=N.current)===null||S===void 0||S.forceAlign()}function Wt(S,$){var G=p($);V!==G&&L(G),Le(function(Z){return Z+1}),E==="align"&&m?.(S,$)}Me(function(){E==="align"&&(ze<3?_e():j(function(){var S;(S=me.current)===null||S===void 0||S.call(me)}))},[ze]);var Q=O({},Ct(e));["onAppearEnd","onEnterEnd","onLeaveEnd"].forEach(function(S){var $=Q[S];Q[S]=function(G,Z){return j(),$?.(G,Z)}});function Be(){return new Promise(function(S){me.current=S})}v.exports.useEffect(function(){!Q.motionName&&E==="motion"&&j()},[Q.motionName,E]),v.exports.useImperativeHandle(r,function(){return{forceAlign:_e,getElement:function(){return A.current}}});var zt=O(O({},F),{},{zIndex:u,opacity:E==="motion"||E==="stable"||!n?void 0:0,pointerEvents:!n&&E!=="stable"?"none":void 0},s),Ie=!0;h!=null&&h.points&&(E==="align"||E==="stable")&&(Ie=!1);var Fe=t;return v.exports.Children.count(t)>1&&(Fe=D("div",{className:"".concat(o,"-content"),children:t})),D(De,{visible:n,ref:A,leavedClassName:"".concat(o,"-hidden"),...Q,onAppearPrepare:Be,onEnterPrepare:Be,removeOnLeave:l,forceRender:f,children:function(S,$){var G=S.className,Z=S.style,Lt=ve(o,i,V,G);return D(Dt,{target:Vt(),ref:N,monitorWindowResize:!0,disabled:Ie,align:h,onAlign:Wt,children:D("div",{ref:$,className:Lt,onMouseEnter:y,onMouseLeave:x,onMouseDownCapture:C,onTouchStartCapture:T,onClick:P,style:O(O({},Z),zt),children:Fe})},"popup")}})});Nt.displayName="PopupInner";var At=v.exports.forwardRef(function(e,r){var n=e.prefixCls,o=e.visible,i=e.zIndex,s=e.children,t=e.mobile;t=t===void 0?{}:t;var u=t.popupClassName,a=t.popupStyle,l=t.popupMotion,f=l===void 0?{}:l,h=t.popupRender,d=e.onClick,c=v.exports.useRef();v.exports.useImperativeHandle(r,function(){return{forceAlign:function(){},getElement:function(){return c.current}}});var p=O({zIndex:i},a),m=s;return v.exports.Children.count(s)>1&&(m=D("div",{className:"".concat(n,"-content"),children:s})),h&&(m=h(m)),D(De,{visible:o,ref:c,removeOnLeave:!0,...f,children:function(y,x){var C=y.className,T=y.style,P=ve(n,u,C);return D("div",{ref:x,className:P,onClick:d,style:O(O({},T),p),children:m})}})});At.displayName="MobilePopupInner";var Fn=["visible","mobile"],Ht=v.exports.forwardRef(function(e,r){var n=e.visible,o=e.mobile,i=Xt(e,Fn),s=v.exports.useState(n),t=H(s,2),u=t[0],a=t[1],l=v.exports.useState(!1),f=H(l,2),h=f[0],d=f[1],c=O(O({},i),{},{visible:u});v.exports.useEffect(function(){a(n),n&&o&&d(tn())},[n,o]);var p=h?D(At,{...c,mobile:o,ref:r}):D(Nt,{...c,ref:r});return yt("div",{children:[D(sn,{...c}),p]})});Ht.displayName="Popup";var ct=v.exports.createContext(null);function Te(){}function $n(){return""}function Xn(e){return e?e.ownerDocument:window.document}var Yn=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];function jn(e){var r=function(n){pt(i,n);var o=dt(i);function i(s){var t;vt(this,i),t=o.call(this,s),w(b(t),"popupRef",v.exports.createRef()),w(b(t),"triggerRef",v.exports.createRef()),w(b(t),"portalContainer",void 0),w(b(t),"attachId",void 0),w(b(t),"clickOutsideHandler",void 0),w(b(t),"touchOutsideHandler",void 0),w(b(t),"contextMenuOutsideHandler1",void 0),w(b(t),"contextMenuOutsideHandler2",void 0),w(b(t),"mouseDownTimeout",void 0),w(b(t),"focusTime",void 0),w(b(t),"preClickTime",void 0),w(b(t),"preTouchTime",void 0),w(b(t),"delayTimer",void 0),w(b(t),"hasPopupMouseDown",void 0),w(b(t),"onMouseEnter",function(a){var l=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",a),t.delaySetPopupVisible(!0,l,l?null:a)}),w(b(t),"onMouseMove",function(a){t.fireEvents("onMouseMove",a),t.setPoint(a)}),w(b(t),"onMouseLeave",function(a){t.fireEvents("onMouseLeave",a),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)}),w(b(t),"onPopupMouseEnter",function(){t.clearDelayTimer()}),w(b(t),"onPopupMouseLeave",function(a){var l;a.relatedTarget&&!a.relatedTarget.setTimeout&&fe((l=t.popupRef.current)===null||l===void 0?void 0:l.getElement(),a.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay)}),w(b(t),"onFocus",function(a){t.fireEvents("onFocus",a),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay))}),w(b(t),"onMouseDown",function(a){t.fireEvents("onMouseDown",a),t.preClickTime=Date.now()}),w(b(t),"onTouchStart",function(a){t.fireEvents("onTouchStart",a),t.preTouchTime=Date.now()}),w(b(t),"onBlur",function(a){t.fireEvents("onBlur",a),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay)}),w(b(t),"onContextMenu",function(a){a.preventDefault(),t.fireEvents("onContextMenu",a),t.setPopupVisible(!0,a)}),w(b(t),"onContextMenuClose",function(){t.isContextMenuToShow()&&t.close()}),w(b(t),"onClick",function(a){if(t.fireEvents("onClick",a),t.focusTime){var l;if(t.preClickTime&&t.preTouchTime?l=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?l=t.preClickTime:t.preTouchTime&&(l=t.preTouchTime),Math.abs(l-t.focusTime)<20)return;t.focusTime=0}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&a&&a.preventDefault&&a.preventDefault();var f=!t.state.popupVisible;(t.isClickToHide()&&!f||f&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,a)}),w(b(t),"onPopupMouseDown",function(){if(t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=window.setTimeout(function(){t.hasPopupMouseDown=!1},0),t.context){var a;(a=t.context).onPopupMouseDown.apply(a,arguments)}}),w(b(t),"onDocumentClick",function(a){if(!(t.props.mask&&!t.props.maskClosable)){var l=a.target,f=t.getRootDomNode(),h=t.getPopupDomNode();(!fe(f,l)||t.isContextMenuOnly())&&!fe(h,l)&&!t.hasPopupMouseDown&&t.close()}}),w(b(t),"getRootDomNode",function(){var a=t.props.getTriggerDOMNode;if(a)return a(t.triggerRef.current);try{var l=ce(t.triggerRef.current);if(l)return l}catch{}return pe.findDOMNode(b(t))}),w(b(t),"getPopupClassNameFromAlign",function(a){var l=[],f=t.props,h=f.popupPlacement,d=f.builtinPlacements,c=f.prefixCls,p=f.alignPoint,m=f.getPopupClassNameFromAlign;return h&&d&&l.push(an(d,c,a,p)),m&&l.push(m(a)),l.join(" ")}),w(b(t),"getComponent",function(){var a=t.props,l=a.prefixCls,f=a.destroyPopupOnHide,h=a.popupClassName,d=a.onPopupAlign,c=a.popupMotion,p=a.popupAnimation,m=a.popupTransitionName,y=a.popupStyle,x=a.mask,C=a.maskAnimation,T=a.maskTransitionName,P=a.maskMotion,N=a.zIndex,A=a.popup,z=a.stretch,k=a.alignPoint,V=a.mobile,L=a.forceRender,M=a.onPopupClick,I=t.state,F=I.popupVisible,_=I.point,q=t.getPopupAlign(),W={};return t.isMouseEnterToShow()&&(W.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(W.onMouseLeave=t.onPopupMouseLeave),W.onMouseDown=t.onPopupMouseDown,W.onTouchStart=t.onPopupMouseDown,D(Ht,{prefixCls:l,destroyPopupOnHide:f,visible:F,point:k&&_,className:h,align:q,onAlign:d,animation:p,getClassNameFromAlign:t.getPopupClassNameFromAlign,...W,stretch:z,getRootDomNode:t.getRootDomNode,style:y,mask:x,zIndex:N,transitionName:m,maskAnimation:C,maskTransitionName:T,maskMotion:P,ref:t.popupRef,motion:c,mobile:V,forceRender:L,onClick:M,children:typeof A=="function"?A():A})}),w(b(t),"attachParent",function(a){K.cancel(t.attachId);var l=t.props,f=l.getPopupContainer,h=l.getDocument,d=t.getRootDomNode(),c;f?(d||f.length===0)&&(c=f(d)):c=h(t.getRootDomNode()).body,c?c.appendChild(a):t.attachId=K(function(){t.attachParent(a)})}),w(b(t),"getContainer",function(){if(!t.portalContainer){var a=t.props.getDocument,l=a(t.getRootDomNode()).createElement("div");l.style.position="absolute",l.style.top="0",l.style.left="0",l.style.width="100%",t.portalContainer=l}return t.attachParent(t.portalContainer),t.portalContainer}),w(b(t),"setPoint",function(a){var l=t.props.alignPoint;!l||!a||t.setState({point:{pageX:a.pageX,pageY:a.pageY}})}),w(b(t),"handlePortalUpdate",function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible)}),w(b(t),"triggerContextValue",{onPopupMouseDown:t.onPopupMouseDown});var u;return"popupVisible"in s?u=!!s.popupVisible:u=!!s.defaultPopupVisible,t.state={prevPopupVisible:u,popupVisible:u},Yn.forEach(function(a){t["fire".concat(a)]=function(l){t.fireEvents(a,l)}}),t}return ht(i,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var t=this.props,u=this.state;if(u.popupVisible){var a;!this.clickOutsideHandler&&(this.isClickToHide()||this.isContextMenuToShow())&&(a=t.getDocument(this.getRootDomNode()),this.clickOutsideHandler=te(a,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(a=a||t.getDocument(this.getRootDomNode()),this.touchOutsideHandler=te(a,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(a=a||t.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=te(a,"scroll",this.onContextMenuClose)),!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=te(window,"blur",this.onContextMenuClose));return}this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),K.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var t;return((t=this.popupRef.current)===null||t===void 0?void 0:t.getElement())||null}},{key:"getPopupAlign",value:function(){var t=this.props,u=t.popupPlacement,a=t.popupAlign,l=t.builtinPlacements;return u&&l?on(l,u,a):a}},{key:"setPopupVisible",value:function(t,u){var a=this.props.alignPoint,l=this.state.popupVisible;this.clearDelayTimer(),l!==t&&("popupVisible"in this.props||this.setState({popupVisible:t,prevPopupVisible:l}),this.props.onPopupVisibleChange(t)),a&&u&&t&&this.setPoint(u)}},{key:"delaySetPopupVisible",value:function(t,u,a){var l=this,f=u*1e3;if(this.clearDelayTimer(),f){var h=a?{pageX:a.pageX,pageY:a.pageY}:null;this.delayTimer=window.setTimeout(function(){l.setPopupVisible(t,h),l.clearDelayTimer()},f)}else this.setPopupVisible(t,a)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(t){var u=this.props.children.props,a=this.props;return u[t]&&a[t]?this["fire".concat(t)]:u[t]||a[t]}},{key:"isClickToShow",value:function(){var t=this.props,u=t.action,a=t.showAction;return u.indexOf("click")!==-1||a.indexOf("click")!==-1}},{key:"isContextMenuOnly",value:function(){var t=this.props.action;return t==="contextMenu"||t.length===1&&t[0]==="contextMenu"}},{key:"isContextMenuToShow",value:function(){var t=this.props,u=t.action,a=t.showAction;return u.indexOf("contextMenu")!==-1||a.indexOf("contextMenu")!==-1}},{key:"isClickToHide",value:function(){var t=this.props,u=t.action,a=t.hideAction;return u.indexOf("click")!==-1||a.indexOf("click")!==-1}},{key:"isMouseEnterToShow",value:function(){var t=this.props,u=t.action,a=t.showAction;return u.indexOf("hover")!==-1||a.indexOf("mouseEnter")!==-1}},{key:"isMouseLeaveToHide",value:function(){var t=this.props,u=t.action,a=t.hideAction;return u.indexOf("hover")!==-1||a.indexOf("mouseLeave")!==-1}},{key:"isFocusToShow",value:function(){var t=this.props,u=t.action,a=t.showAction;return u.indexOf("focus")!==-1||a.indexOf("focus")!==-1}},{key:"isBlurToHide",value:function(){var t=this.props,u=t.action,a=t.hideAction;return u.indexOf("focus")!==-1||a.indexOf("blur")!==-1}},{key:"forcePopupAlign",value:function(){if(this.state.popupVisible){var t;(t=this.popupRef.current)===null||t===void 0||t.forceAlign()}}},{key:"fireEvents",value:function(t,u){var a=this.props.children.props[t];a&&a(u);var l=this.props[t];l&&l(u)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var t=this.state.popupVisible,u=this.props,a=u.children,l=u.forceRender,f=u.alignPoint,h=u.className,d=u.autoDestroy,c=v.exports.Children.only(a),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,f&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var m=ve(c&&c.props&&c.props.className,h);m&&(p.className=m);var y=O({},p);gt(c)&&(y.ref=wt(this.triggerRef,c.ref));var x=v.exports.cloneElement(c,y),C;return(t||this.popupRef.current||l)&&(C=D(e,{getContainer:this.getContainer,didUpdate:this.handlePortalUpdate,children:this.getComponent()},"portal")),!t&&d&&(C=null),yt(ct.Provider,{value:this.triggerContextValue,children:[x,C]})}}],[{key:"getDerivedStateFromProps",value:function(t,u){var a=t.popupVisible,l={};return a!==void 0&&u.popupVisible!==a&&(l.popupVisible=a,l.prevPopupVisible=u.popupVisible),l}}]),i}(v.exports.Component);return w(r,"contextType",ct),w(r,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:$n,getDocument:Xn,onPopupVisibleChange:Te,afterPopupVisibleChange:Te,onPopupAlign:Te,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),r}const Gn=jn(nn);bt("success","processing","error","default","warning");var Kn=bt("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime");export{Kn as P,en as R,Gn as T,te as a,Ye as b,tn as c,Vn as i,qn as u};
