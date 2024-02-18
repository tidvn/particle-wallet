import{a2 as a,aC as p,aD as Vr,aE as K,aG as fe,aK as q,aO as Qe,aH as j,ca as Ur,a3 as $n,bb as si,aI as ye,aS as ft,aL as R,aT as we,bn as Wr,aF as In,aM as jt,cV as ai,bK as Gr,aY as nn,aP as ue,cb as Hr,bD as qr,by as fi,bz as li,bA as ci,bB as ui,bc as Yr,bF as Xr,aJ as gi,bH as pi,aU as di,b0 as mi,aR as vi,cW as lt,az as Vn,cX as tn,cY as Dt,cZ as Un,c_ as bi,c$ as xi,d0 as hi,a1 as Zr,af as _i,d1 as wi,d2 as yi,as as Ci,d3 as nr,a0 as Si,d4 as $i}from"./index.fbf0f355.js";import{R as rt,b as Jr,P as Pi,i as Ii,u as Pn,T as Qr,c as Ti}from"./colors.5dd5d985.js";import{D as Ni,i as Oi}from"./chunk-QNAXMJIS.3ce008d2.js";import{c as Ri}from"./index.eac9e03e.js";var Ei={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"};const Mi=Ei;var eo=function(n,t){return p(Vr,{...K(K({},n),{},{ref:t,icon:Mi})})};eo.displayName="EllipsisOutlined";const ki=a.exports.forwardRef(eo);var Ai={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const ji=Ai;var no=function(n,t){return p(Vr,{...K(K({},n),{},{ref:t,icon:ji})})};no.displayName="PlusOutlined";const Di=a.exports.forwardRef(no);var zi=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],hn=void 0;function Ki(e,n){var t=e.prefixCls,r=e.invalidate,o=e.item,i=e.renderItem,s=e.responsive,f=e.responsiveDisabled,l=e.registerSize,c=e.itemKey,g=e.className,u=e.style,d=e.children,v=e.display,m=e.order,_=e.component,x=_===void 0?"div":_,h=fe(e,zi),S=s&&!v;function w(I){l(c,I)}a.exports.useEffect(function(){return function(){w(null)}},[]);var C=i&&o!==hn?i(o):d,$;r||($={opacity:S?0:1,height:S?0:hn,overflowY:S?"hidden":hn,order:s?m:hn,pointerEvents:S?"none":hn,position:S?"absolute":hn});var b={};S&&(b["aria-hidden"]=!0);var E=p(x,{className:q(!r&&t,g),style:K(K({},$),u),...b,...h,ref:n,children:C});return s&&(E=p(rt,{onResize:function(O){var P=O.offsetWidth;w(P)},disabled:f,children:E})),E}var Ln=a.exports.forwardRef(Ki);Ln.displayName="Item";function Li(e){if(typeof MessageChannel>"u")Qe(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}function Fi(){var e=a.exports.useRef(null),n=function(r){e.current||(e.current=[],Li(function(){Ur.exports.unstable_batchedUpdates(function(){e.current.forEach(function(o){o()}),e.current=null})})),e.current.push(r)};return n}function jn(e,n){var t=a.exports.useState(n),r=j(t,2),o=r[0],i=r[1],s=Jr(function(f){e(function(){i(f)})});return[o,s]}var ot=$n.createContext(null),Bi=["component"],Vi=["className"],Ui=["className"],Wi=function(n,t){var r=a.exports.useContext(ot);if(!r){var o=n.component,i=o===void 0?"div":o,s=fe(n,Bi);return p(i,{...s,ref:t})}var f=r.className,l=fe(r,Vi),c=n.className,g=fe(n,Ui);return p(ot.Provider,{value:null,children:p(Ln,{ref:t,className:q(f,c),...l,...g})})},to=a.exports.forwardRef(Wi);to.displayName="RawItem";var Gi=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],ro="responsive",oo="invalidate";function Hi(e){return"+ ".concat(e.length," ...")}function qi(e,n){var t=e.prefixCls,r=t===void 0?"rc-overflow":t,o=e.data,i=o===void 0?[]:o,s=e.renderItem,f=e.renderRawItem,l=e.itemKey,c=e.itemWidth,g=c===void 0?10:c,u=e.ssr,d=e.style,v=e.className,m=e.maxCount,_=e.renderRest,x=e.renderRawRest,h=e.suffix,S=e.component,w=S===void 0?"div":S,C=e.itemComponent,$=e.onVisibleChange,b=fe(e,Gi),E=u==="full",I=Fi(),O=jn(I,null),P=j(O,2),y=P[0],k=P[1],M=y||0,A=jn(I,new Map),B=j(A,2),V=B[0],F=B[1],X=jn(I,0),Z=j(X,2),le=Z[0],ne=Z[1],T=jn(I,0),N=j(T,2),D=N[0],W=N[1],de=jn(I,0),ve=j(de,2),ie=ve[0],me=ve[1],se=a.exports.useState(null),G=j(se,2),Oe=G[0],Pe=G[1],Ie=a.exports.useState(null),Re=j(Ie,2),L=Re[0],Te=Re[1],be=a.exports.useMemo(function(){return L===null&&E?Number.MAX_SAFE_INTEGER:L||0},[L,y]),rn=a.exports.useState(!1),Ke=j(rn,2),Ce=Ke[0],Fe=Ke[1],Ae="".concat(r,"-item"),Ue=Math.max(le,D),We=m===ro,Q=i.length&&We,Ge=m===oo,Se=Q||typeof m=="number"&&i.length>m,ce=a.exports.useMemo(function(){var z=i;return Q?y===null&&E?z=i:z=i.slice(0,Math.min(i.length,M/g)):typeof m=="number"&&(z=i.slice(0,m)),z},[i,g,y,m,Q]),Ee=a.exports.useMemo(function(){return Q?i.slice(be+1):i.slice(ce.length)},[i,ce,Q,be]),ge=a.exports.useCallback(function(z,H){var re;return typeof l=="function"?l(z):(re=l&&z?.[l])!==null&&re!==void 0?re:H},[l]),He=a.exports.useCallback(s||function(z){return z},[s]);function Ne(z,H,re){L===z&&(H===void 0||H===Oe)||(Te(z),re||(Fe(z<i.length-1),$?.(z)),H!==void 0&&Pe(H))}function he(z,H){k(H.clientWidth)}function xe(z,H){F(function(re){var Me=new Map(re);return H===null?Me.delete(z):Me.set(z,H),Me})}function fn(z,H){W(H),ne(D)}function ln(z,H){me(H)}function Ze(z){return V.get(ge(ce[z],z))}si(function(){if(M&&typeof Ue=="number"&&ce){var z=ie,H=ce.length,re=H-1;if(!H){Ne(0,null);return}for(var Me=0;Me<H;Me+=1){var qe=Ze(Me);if(E&&(qe=qe||0),qe===void 0){Ne(Me-1,void 0,!0);break}if(z+=qe,re===0&&z<=M||Me===re-1&&z+Ze(re)<=M){Ne(re,null);break}else if(z+Ue>M){Ne(Me-1,z-qe-ie+D);break}}h&&Ze(0)+ie>M&&Pe(null)}},[M,V,D,ie,ge,ce]);var cn=Ce&&!!Ee.length,un={};Oe!==null&&Q&&(un={position:"absolute",left:Oe,top:0});var Le={prefixCls:Ae,responsive:Q,component:C,invalidate:Ge},on=f?function(z,H){var re=ge(z,H);return p(ot.Provider,{value:K(K({},Le),{},{order:H,item:z,itemKey:re,registerSize:xe,display:H<=be}),children:f(z,H)},re)}:function(z,H){var re=ge(z,H);return a.exports.createElement(Ln,{...Le,order:H,key:re,item:z,renderItem:He,itemKey:re,registerSize:xe,display:H<=be})},Be,gn={order:cn?be:Number.MAX_SAFE_INTEGER,className:"".concat(Ae,"-rest"),registerSize:fn,display:cn};if(x)x&&(Be=p(ot.Provider,{value:K(K({},Le),gn),children:x(Ee)}));else{var Je=_||Hi;Be=p(Ln,{...Le,...gn,children:typeof Je=="function"?Je(Ee):Je})}var $e=ye(w,{className:q(!Ge&&r,v),style:d,ref:n,...b,children:[ce.map(on),Se?Be:null,h&&p(Ln,{...Le,responsive:We,responsiveDisabled:!Q,order:be,className:"".concat(Ae,"-suffix"),registerSize:ln,display:!0,style:un,children:h})]});return We&&($e=p(rt,{onResize:he,disabled:!Q,children:$e})),$e}var en=a.exports.forwardRef(qi);en.displayName="Overflow";en.Item=to;en.RESPONSIVE=ro;en.INVALIDATE=oo;function Kn(e){return Pi.includes(e)}var Yi=function(n){var t=n.className,r=n.prefixCls,o=n.style,i=n.color,s=n.children,f=n.text,l=n.placement,c=l===void 0?"end":l,g=a.exports.useContext(ft),u=g.getPrefixCls,d=g.direction,v=u("ribbon",r),m=Kn(i),_=q(v,"".concat(v,"-placement-").concat(c),R(R({},"".concat(v,"-rtl"),d==="rtl"),"".concat(v,"-color-").concat(i),m),t),x={},h={};return i&&!m&&(x.background=i,h.color=i),ye("div",{className:"".concat(v,"-wrapper"),children:[s,ye("div",{className:_,style:we(we({},x),o),children:[p("span",{className:"".concat(v,"-text"),children:f}),p("div",{className:"".concat(v,"-corner"),style:h})]})]})};const Xi=Yi;function tr(e){var n=e.prefixCls,t=e.value,r=e.current,o=e.offset,i=o===void 0?0:o,s;return i&&(s={position:"absolute",top:"".concat(i,"00%"),left:0}),p("span",{style:s,className:q("".concat(n,"-only-unit"),{current:r}),children:t})}function Zi(e,n,t){for(var r=e,o=0;(r+10)%10!==n;)r+=t,o+=t;return o}function Ji(e){var n=e.prefixCls,t=e.count,r=e.value,o=Number(r),i=Math.abs(t),s=a.exports.useState(o),f=j(s,2),l=f[0],c=f[1],g=a.exports.useState(i),u=j(g,2),d=u[0],v=u[1],m=function(){c(o),v(i)};a.exports.useEffect(function(){var b=setTimeout(function(){m()},1e3);return function(){clearTimeout(b)}},[o]);var _,x;if(l===o||Number.isNaN(o)||Number.isNaN(l))_=[a.exports.createElement(tr,{...e,key:o,current:!0})],x={transition:"none"};else{_=[];for(var h=o+10,S=[],w=o;w<=h;w+=1)S.push(w);var C=S.findIndex(function(b){return b%10===l});_=S.map(function(b,E){var I=b%10;return a.exports.createElement(tr,{...e,key:b,value:I,offset:E-C,current:E===C})});var $=d<i?1:-1;x={transform:"translateY(".concat(-Zi(l,o,$),"00%)")}}return p("span",{className:"".concat(n,"-only"),style:x,onTransitionEnd:m,children:_})}var Qi=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},es=function(n){var t=n.prefixCls,r=n.count,o=n.className,i=n.motionClassName,s=n.style,f=n.title,l=n.show,c=n.component,g=c===void 0?"sup":c,u=n.children,d=Qi(n,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),v=a.exports.useContext(ft),m=v.getPrefixCls,_=m("scroll-number",t),x=we(we({},d),{"data-show":l,style:s,className:q(_,o,i),title:f}),h=r;if(r&&Number(r)%1===0){var S=String(r).split("");h=S.map(function(w,C){return p(Ji,{prefixCls:_,count:Number(r),value:w},S.length-C)})}return s&&s.borderColor&&(x.style=we(we({},s),{boxShadow:"0 0 0 1px ".concat(s.borderColor," inset")})),u?Wr(u,function(w){return{className:q("".concat(_,"-custom-component"),w?.className,i)}}):a.exports.createElement(g,x,h)};const ns=es;var ts=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t},io=function(n){var t=n.prefixCls,r=n.scrollNumberPrefixCls,o=n.children,i=n.status,s=n.text,f=n.color,l=n.count,c=l===void 0?null:l,g=n.overflowCount,u=g===void 0?99:g,d=n.dot,v=d===void 0?!1:d,m=n.size,_=m===void 0?"default":m,x=n.title,h=n.offset,S=n.style,w=n.className,C=n.showZero,$=C===void 0?!1:C,b=ts(n,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","showZero"]),E=a.exports.useContext(ft),I=E.getPrefixCls,O=E.direction,P=I("badge",t),y=c>u?"".concat(u,"+"):c,k=y==="0"||y===0,M=c===null||k&&!$,A=(i!=null||f!=null)&&M,B=v&&!k,V=B?"":y,F=a.exports.useMemo(function(){var G=V==null||V==="";return(G||k&&!$)&&!B},[V,k,$,B]),X=a.exports.useRef(c);F||(X.current=c);var Z=X.current,le=a.exports.useRef(V);F||(le.current=V);var ne=le.current,T=a.exports.useRef(B);F||(T.current=B);var N=a.exports.useMemo(function(){if(!h)return we({},S);var G={marginTop:h[1]};return O==="rtl"?G.left=parseInt(h[0],10):G.right=-parseInt(h[0],10),we(we({},G),S)},[O,h,S]),D=x??(typeof Z=="string"||typeof Z=="number"?Z:void 0),W=F||!s?null:p("span",{className:"".concat(P,"-status-text"),children:s}),de=!Z||In(Z)!=="object"?void 0:Wr(Z,function(G){return{style:we(we({},N),G.style)}}),ve=q(R(R(R({},"".concat(P,"-status-dot"),A),"".concat(P,"-status-").concat(i),!!i),"".concat(P,"-status-").concat(f),Kn(f))),ie={};f&&!Kn(f)&&(ie.background=f);var me=q(P,R(R(R({},"".concat(P,"-status"),A),"".concat(P,"-not-a-wrapper"),!o),"".concat(P,"-rtl"),O==="rtl"),w);if(!o&&A){var se=N.color;return ye("span",{...b,className:me,style:N,children:[p("span",{className:ve,style:ie}),s&&p("span",{style:{color:se},className:"".concat(P,"-status-text"),children:s})]})}return ye("span",{...b,className:me,children:[o,p(jt,{visible:!F,motionName:"".concat(P,"-zoom"),motionAppear:!1,motionDeadline:1e3,children:function(G){var Oe=G.className,Pe=I("scroll-number",r),Ie=T.current,Re=q(R(R(R(R(R(R({},"".concat(P,"-dot"),Ie),"".concat(P,"-count"),!Ie),"".concat(P,"-count-sm"),_==="small"),"".concat(P,"-multiple-words"),!Ie&&ne&&ne.toString().length>1),"".concat(P,"-status-").concat(i),!!i),"".concat(P,"-status-").concat(f),Kn(f))),L=we({},N);return f&&!Kn(f)&&(L=L||{},L.background=f),p(ns,{prefixCls:Pe,show:!F,motionClassName:Oe,className:Re,count:ne,title:D,style:L,children:de},"scrollNumber")}}),W]})};io.Ribbon=Xi;const rs=io;var so=a.exports.createContext(null);function zt(e,n){return e===void 0?null:"".concat(e,"-").concat(n)}function ao(e){var n=a.exports.useContext(so);return zt(n,e)}var os=["children","locked"],Ve=a.exports.createContext(null);function is(e,n){var t=K({},e);return Object.keys(n).forEach(function(r){var o=n[r];o!==void 0&&(t[r]=o)}),t}function Fn(e){var n=e.children,t=e.locked,r=fe(e,os),o=a.exports.useContext(Ve),i=ai(function(){return is(o,r)},[o,r],function(s,f){return!t&&(s[0]!==f[0]||!Gr(s[1],f[1],!0))});return p(Ve.Provider,{value:i,children:n})}var ss=[],fo=a.exports.createContext(null);function ct(){return a.exports.useContext(fo)}var lo=a.exports.createContext(ss);function Wn(e){var n=a.exports.useContext(lo);return a.exports.useMemo(function(){return e!==void 0?[].concat(nn(n),[e]):n},[n,e])}var co=a.exports.createContext(null),Kt=a.exports.createContext({});function rr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Ii(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||t==="a"&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),i=Number(o),s=null;return o&&!Number.isNaN(i)?s=i:r&&s===null&&(s=0),r&&e.disabled&&(s=null),s!==null&&(s>=0||n&&s<0)}return!1}function uo(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=nn(e.querySelectorAll("*")).filter(function(r){return rr(r,n)});return rr(e,n)&&t.unshift(e),t}var yt=ue.LEFT,Ct=ue.RIGHT,St=ue.UP,Qn=ue.DOWN,et=ue.ENTER,go=ue.ESC,Dn=ue.HOME,zn=ue.END,or=[St,Qn,yt,Ct];function as(e,n,t,r){var o,i,s,f,l="prev",c="next",g="children",u="parent";if(e==="inline"&&r===et)return{inlineTrigger:!0};var d=(o={},R(o,St,l),R(o,Qn,c),o),v=(i={},R(i,yt,t?c:l),R(i,Ct,t?l:c),R(i,Qn,g),R(i,et,g),i),m=(s={},R(s,St,l),R(s,Qn,c),R(s,et,g),R(s,go,u),R(s,yt,t?g:u),R(s,Ct,t?u:g),s),_={inline:d,horizontal:v,vertical:m,inlineSub:d,horizontalSub:m,verticalSub:m},x=(f=_["".concat(e).concat(n?"":"Sub")])===null||f===void 0?void 0:f[r];switch(x){case l:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case u:return{offset:-1,sibling:!1};case g:return{offset:1,sibling:!1};default:return null}}function fs(e){for(var n=e;n;){if(n.getAttribute("data-menu-list"))return n;n=n.parentElement}return null}function ls(e,n){for(var t=e||document.activeElement;t;){if(n.has(t))return t;t=t.parentElement}return null}function po(e,n){var t=uo(e,!0);return t.filter(function(r){return n.has(r)})}function ir(e,n,t){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!e)return null;var o=po(e,n),i=o.length,s=o.findIndex(function(f){return t===f});return r<0?s===-1?s=i-1:s-=1:r>0&&(s+=1),s=(s+i)%i,o[s]}function cs(e,n,t,r,o,i,s,f,l,c){var g=a.exports.useRef(),u=a.exports.useRef();u.current=n;var d=function(){Qe.cancel(g.current)};return a.exports.useEffect(function(){return function(){d()}},[]),function(v){var m=v.which;if([].concat(or,[et,go,Dn,zn]).includes(m)){var _,x,h,S=function(){_=new Set,x=new Map,h=new Map;var B=i();return B.forEach(function(V){var F=document.querySelector("[data-menu-id='".concat(zt(r,V),"']"));F&&(_.add(F),h.set(F,V),x.set(V,F))}),_};S();var w=x.get(n),C=ls(w,_),$=h.get(C),b=as(e,s($,!0).length===1,t,m);if(!b&&m!==Dn&&m!==zn)return;(or.includes(m)||[Dn,zn].includes(m))&&v.preventDefault();var E=function(B){if(B){var V=B,F=B.querySelector("a");F!=null&&F.getAttribute("href")&&(V=F);var X=h.get(B);f(X),d(),g.current=Qe(function(){u.current===X&&V.focus()})}};if([Dn,zn].includes(m)||b.sibling||!C){var I;!C||e==="inline"?I=o.current:I=fs(C);var O,P=po(I,_);m===Dn?O=P[0]:m===zn?O=P[P.length-1]:O=ir(I,_,C,b.offset),E(O)}else if(b.inlineTrigger)l($);else if(b.offset>0)l($,!0),d(),g.current=Qe(function(){S();var A=C.getAttribute("aria-controls"),B=document.getElementById(A),V=ir(B,_);E(V)},5);else if(b.offset<0){var y=s($,!0),k=y[y.length-2],M=x.get(k);l(k,!1),E(M)}}c?.(v)}}function us(e){Promise.resolve().then(e)}var Lt="__RC_UTIL_PATH_SPLIT__",sr=function(n){return n.join(Lt)},gs=function(n){return n.split(Lt)},$t="rc-menu-more";function ps(){var e=a.exports.useState({}),n=j(e,2),t=n[1],r=a.exports.useRef(new Map),o=a.exports.useRef(new Map),i=a.exports.useState([]),s=j(i,2),f=s[0],l=s[1],c=a.exports.useRef(0),g=a.exports.useRef(!1),u=function(){g.current||t({})},d=a.exports.useCallback(function(w,C){var $=sr(C);o.current.set($,w),r.current.set(w,$),c.current+=1;var b=c.current;us(function(){b===c.current&&u()})},[]),v=a.exports.useCallback(function(w,C){var $=sr(C);o.current.delete($),r.current.delete(w)},[]),m=a.exports.useCallback(function(w){l(w)},[]),_=a.exports.useCallback(function(w,C){var $=r.current.get(w)||"",b=gs($);return C&&f.includes(b[0])&&b.unshift($t),b},[f]),x=a.exports.useCallback(function(w,C){return w.some(function($){var b=_($,!0);return b.includes(C)})},[_]),h=function(){var C=nn(r.current.keys());return f.length&&C.push($t),C},S=a.exports.useCallback(function(w){var C="".concat(r.current.get(w)).concat(Lt),$=new Set;return nn(o.current.keys()).forEach(function(b){b.startsWith(C)&&$.add(o.current.get(b))}),$},[]);return a.exports.useEffect(function(){return function(){g.current=!0}},[]),{registerPath:d,unregisterPath:v,refreshOverflowKeys:m,isSubPathKey:x,getKeyPath:_,getKeys:h,getSubPathKeys:S}}function Sn(e){var n=a.exports.useRef(e);n.current=e;var t=a.exports.useCallback(function(){for(var r,o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return(r=n.current)===null||r===void 0?void 0:r.call.apply(r,[n].concat(i))},[]);return e?t:void 0}var ds=Math.random().toFixed(5).toString().slice(2),ar=0;function ms(e){var n=Pn(e,{value:e}),t=j(n,2),r=t[0],o=t[1];return a.exports.useEffect(function(){ar+=1;var i="".concat(ds,"-").concat(ar);o("rc-menu-uuid-".concat(i))},[]),r}function mo(e,n,t,r){var o=a.exports.useContext(Ve),i=o.activeKey,s=o.onActive,f=o.onInactive,l={active:i===e};return n||(l.onMouseEnter=function(c){t?.({key:e,domEvent:c}),s(e)},l.onMouseLeave=function(c){r?.({key:e,domEvent:c}),f(e)}),l}function vo(e){var n=a.exports.useContext(Ve),t=n.mode,r=n.rtl,o=n.inlineIndent;if(t!=="inline")return null;var i=e;return r?{paddingRight:i*o}:{paddingLeft:i*o}}function bo(e){var n=e.icon,t=e.props,r=e.children,o;return typeof n=="function"?o=a.exports.createElement(n,K({},t)):o=n,o||r||null}var vs=["item"];function it(e){var n=e.item,t=fe(e,vs);return Object.defineProperty(t,"item",{get:function(){return Hr(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),t}var bs=["title","attribute","elementRef"],xs=["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"],hs=["active"],_s=function(e){fi(t,e);var n=li(t);function t(){return ci(this,t),n.apply(this,arguments)}return ui(t,[{key:"render",value:function(){var o=this.props,i=o.title,s=o.attribute,f=o.elementRef,l=fe(o,bs),c=Yr(l,["eventKey","popupClassName","popupOffset","onTitleClick"]);return Hr(!s,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),p(en.Item,{...s,title:typeof i=="string"?i:void 0,...c,ref:f})}}]),t}(a.exports.Component),ws=a.exports.forwardRef(function(e,n){var t,r=e.style,o=e.className,i=e.eventKey;e.warnKey;var s=e.disabled,f=e.itemIcon,l=e.children,c=e.role,g=e.onMouseEnter,u=e.onMouseLeave,d=e.onClick,v=e.onKeyDown,m=e.onFocus,_=fe(e,xs),x=ao(i),h=a.exports.useContext(Ve),S=h.prefixCls,w=h.onItemClick,C=h.disabled,$=h.overflowDisabled,b=h.itemIcon,E=h.selectedKeys,I=h.onActive,O=a.exports.useContext(Kt),P=O._internalRenderMenuItem,y="".concat(S,"-item"),k=a.exports.useRef(),M=a.exports.useRef(),A=C||s,B=qr(n,M),V=Wn(i),F=function(se){return{key:i,keyPath:nn(V).reverse(),item:k.current,domEvent:se}},X=f||b,Z=mo(i,A,g,u),le=Z.active,ne=fe(Z,hs),T=E.includes(i),N=vo(V.length),D=function(se){if(!A){var G=F(se);d?.(it(G)),w(G)}},W=function(se){if(v?.(se),se.which===ue.ENTER){var G=F(se);d?.(it(G)),w(G)}},de=function(se){I(i),m?.(se)},ve={};e.role==="option"&&(ve["aria-selected"]=T);var ie=ye(_s,{ref:k,elementRef:B,role:c===null?"none":c||"menuitem",tabIndex:s?null:-1,"data-menu-id":$&&x?null:x,..._,...ne,...ve,component:"li","aria-disabled":s,style:K(K({},N),r),className:q(y,(t={},R(t,"".concat(y,"-active"),le),R(t,"".concat(y,"-selected"),T),R(t,"".concat(y,"-disabled"),A),t),o),onClick:D,onKeyDown:W,onFocus:de,children:[l,p(bo,{props:K(K({},e),{},{isSelected:T}),icon:X})]});return P&&(ie=P(ie,e,{selected:T})),ie});function ys(e,n){var t=e.eventKey,r=ct(),o=Wn(t);return a.exports.useEffect(function(){if(r)return r.registerPath(t,o),function(){r.unregisterPath(t,o)}},[o]),r?null:p(ws,{...e,ref:n})}const ut=a.exports.forwardRef(ys);var Cs=["className","children"],Ss=function(n,t){var r=n.className,o=n.children,i=fe(n,Cs),s=a.exports.useContext(Ve),f=s.prefixCls,l=s.mode,c=s.rtl;return p("ul",{className:q(f,c&&"".concat(f,"-rtl"),"".concat(f,"-sub"),"".concat(f,"-").concat(l==="inline"?"inline":"vertical"),r),role:"menu",...i,"data-menu-list":!0,ref:t,children:o})},Ft=a.exports.forwardRef(Ss);Ft.displayName="SubMenuList";var $s=["label","children","key","type"];function Bt(e,n){return Xr(e).map(function(t,r){if(a.exports.isValidElement(t)){var o,i,s=t.key,f=(o=(i=t.props)===null||i===void 0?void 0:i.eventKey)!==null&&o!==void 0?o:s,l=f==null;l&&(f="tmp_key-".concat([].concat(nn(n),[r]).join("-")));var c={key:f,eventKey:f};return a.exports.cloneElement(t,c)}return t})}function Pt(e){return(e||[]).map(function(n,t){if(n&&In(n)==="object"){var r=n,o=r.label,i=r.children,s=r.key,f=r.type,l=fe(r,$s),c=s??"tmp-".concat(t);return i||f==="group"?f==="group"?p(ho,{...l,title:o,children:Pt(i)},c):p(Vt,{...l,title:o,children:Pt(i)},c):f==="divider"?p(_o,{...l},c):p(ut,{...l,children:o},c)}return null}).filter(function(n){return n})}function Ps(e,n,t){var r=e;return n&&(r=Pt(n)),Bt(r,t)}var an={adjustX:1,adjustY:1},Is={topLeft:{points:["bl","tl"],overflow:an,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:an,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:an,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:an,offset:[4,0]}},Ts={topLeft:{points:["bl","tl"],overflow:an,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:an,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:an,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:an,offset:[4,0]}};function xo(e,n,t){if(n)return n;if(t)return t[e]||t.other}var Ns={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Os(e){var n=e.prefixCls,t=e.visible,r=e.children,o=e.popup,i=e.popupClassName,s=e.popupOffset,f=e.disabled,l=e.mode,c=e.onVisibleChange,g=a.exports.useContext(Ve),u=g.getPopupContainer,d=g.rtl,v=g.subMenuOpenDelay,m=g.subMenuCloseDelay,_=g.builtinPlacements,x=g.triggerSubMenuAction,h=g.forceSubMenuRender,S=g.rootClassName,w=g.motion,C=g.defaultMotions,$=a.exports.useState(!1),b=j($,2),E=b[0],I=b[1],O=d?K(K({},Ts),_):K(K({},Is),_),P=Ns[l],y=xo(l,w,C),k=a.exports.useRef(y);l!=="inline"&&(k.current=y);var M=K(K({},k.current),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),A=a.exports.useRef();return a.exports.useEffect(function(){return A.current=Qe(function(){I(t)}),function(){Qe.cancel(A.current)}},[t]),p(Qr,{prefixCls:n,popupClassName:q("".concat(n,"-popup"),R({},"".concat(n,"-rtl"),d),i,S),stretch:l==="horizontal"?"minWidth":null,getPopupContainer:u,builtinPlacements:O,popupPlacement:P,popupVisible:E,popup:o,popupAlign:s&&{offset:s},action:f?[]:[x],mouseEnterDelay:v,mouseLeaveDelay:m,onPopupVisibleChange:c,forceRender:h,popupMotion:M,children:r})}function Rs(e){var n=e.id,t=e.open,r=e.keyPath,o=e.children,i="inline",s=a.exports.useContext(Ve),f=s.prefixCls,l=s.forceSubMenuRender,c=s.motion,g=s.defaultMotions,u=s.mode,d=a.exports.useRef(!1);d.current=u===i;var v=a.exports.useState(!d.current),m=j(v,2),_=m[0],x=m[1],h=d.current?t:!1;a.exports.useEffect(function(){d.current&&x(!1)},[u]);var S=K({},xo(i,c,g));r.length>1&&(S.motionAppear=!1);var w=S.onVisibleChanged;return S.onVisibleChanged=function(C){return!d.current&&!C&&x(!0),w?.(C)},_?null:p(Fn,{mode:i,locked:!d.current,children:p(jt,{visible:h,...S,forceRender:l,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden"),children:function(C){var $=C.className,b=C.style;return p(Ft,{id:n,className:$,style:b,children:o})}})})}var Es=["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"],Ms=["active"],ks=function(n){var t,r=n.style,o=n.className,i=n.title,s=n.eventKey;n.warnKey;var f=n.disabled,l=n.internalPopupClose,c=n.children,g=n.itemIcon,u=n.expandIcon,d=n.popupClassName,v=n.popupOffset,m=n.onClick,_=n.onMouseEnter,x=n.onMouseLeave,h=n.onTitleClick,S=n.onTitleMouseEnter,w=n.onTitleMouseLeave,C=fe(n,Es),$=ao(s),b=a.exports.useContext(Ve),E=b.prefixCls,I=b.mode,O=b.openKeys,P=b.disabled,y=b.overflowDisabled,k=b.activeKey,M=b.selectedKeys,A=b.itemIcon,B=b.expandIcon,V=b.onItemClick,F=b.onOpenChange,X=b.onActive,Z=a.exports.useContext(Kt),le=Z._internalRenderSubMenuItem,ne=a.exports.useContext(co),T=ne.isSubPathKey,N=Wn(),D="".concat(E,"-submenu"),W=P||f,de=a.exports.useRef(),ve=a.exports.useRef(),ie=g||A,me=u||B,se=O.includes(s),G=!y&&se,Oe=T(M,s),Pe=mo(s,W,S,w),Ie=Pe.active,Re=fe(Pe,Ms),L=a.exports.useState(!1),Te=j(L,2),be=Te[0],rn=Te[1],Ke=function(xe){W||rn(xe)},Ce=function(xe){Ke(!0),_?.({key:s,domEvent:xe})},Fe=function(xe){Ke(!1),x?.({key:s,domEvent:xe})},Ae=a.exports.useMemo(function(){return Ie||(I!=="inline"?be||T([k],s):!1)},[I,Ie,k,be,s,T]),Ue=vo(N.length),We=function(xe){W||(h?.({key:s,domEvent:xe}),I==="inline"&&F(s,!se))},Q=Sn(function(he){m?.(it(he)),V(he)}),Ge=function(xe){I!=="inline"&&F(s,xe)},Se=function(){X(s)},ce=$&&"".concat($,"-popup"),Ee=ye("div",{role:"menuitem",style:Ue,className:"".concat(D,"-title"),tabIndex:W?null:-1,ref:de,title:typeof i=="string"?i:null,"data-menu-id":y&&$?null:$,"aria-expanded":G,"aria-haspopup":!0,"aria-controls":ce,"aria-disabled":W,onClick:We,onFocus:Se,...Re,children:[i,p(bo,{icon:I!=="horizontal"?me:null,props:K(K({},n),{},{isOpen:G,isSubMenu:!0}),children:p("i",{className:"".concat(D,"-arrow")})})]}),ge=a.exports.useRef(I);if(I!=="inline"&&N.length>1?ge.current="vertical":ge.current=I,!y){var He=ge.current;Ee=p(Os,{mode:He,prefixCls:D,visible:!l&&G&&I!=="inline",popupClassName:d,popupOffset:v,popup:p(Fn,{mode:He==="horizontal"?"vertical":He,children:p(Ft,{id:ce,ref:ve,children:c})}),disabled:W,onVisibleChange:Ge,children:Ee})}var Ne=ye(en.Item,{role:"none",...C,component:"li",style:r,className:q(D,"".concat(D,"-").concat(I),o,(t={},R(t,"".concat(D,"-open"),G),R(t,"".concat(D,"-active"),Ae),R(t,"".concat(D,"-selected"),Oe),R(t,"".concat(D,"-disabled"),W),t)),onMouseEnter:Ce,onMouseLeave:Fe,children:[Ee,!y&&p(Rs,{id:ce,open:G,keyPath:N,children:c})]});return le&&(Ne=le(Ne,n,{selected:Oe,active:Ae,open:G,disabled:W})),p(Fn,{onItemClick:Q,mode:I==="horizontal"?"vertical":I,itemIcon:ie,expandIcon:me,children:Ne})};function Vt(e){var n=e.eventKey,t=e.children,r=Wn(n),o=Bt(t,r),i=ct();a.exports.useEffect(function(){if(i)return i.registerPath(n,r),function(){i.unregisterPath(n,r)}},[r]);var s;return i?s=o:s=p(ks,{...e,children:o}),p(lo.Provider,{value:r,children:s})}var As=["prefixCls","rootClassName","style","className","tabIndex","items","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName","_internalRenderMenuItem","_internalRenderSubMenuItem"],_n=[],js=a.exports.forwardRef(function(e,n){var t,r,o=e,i=o.prefixCls,s=i===void 0?"rc-menu":i,f=o.rootClassName,l=o.style,c=o.className,g=o.tabIndex,u=g===void 0?0:g,d=o.items,v=o.children,m=o.direction,_=o.id,x=o.mode,h=x===void 0?"vertical":x,S=o.inlineCollapsed,w=o.disabled,C=o.disabledOverflow,$=o.subMenuOpenDelay,b=$===void 0?.1:$,E=o.subMenuCloseDelay,I=E===void 0?.1:E,O=o.forceSubMenuRender,P=o.defaultOpenKeys,y=o.openKeys,k=o.activeKey,M=o.defaultActiveFirst,A=o.selectable,B=A===void 0?!0:A,V=o.multiple,F=V===void 0?!1:V,X=o.defaultSelectedKeys,Z=o.selectedKeys,le=o.onSelect,ne=o.onDeselect,T=o.inlineIndent,N=T===void 0?24:T,D=o.motion,W=o.defaultMotions,de=o.triggerSubMenuAction,ve=de===void 0?"hover":de,ie=o.builtinPlacements,me=o.itemIcon,se=o.expandIcon,G=o.overflowedIndicator,Oe=G===void 0?"...":G,Pe=o.overflowedIndicatorPopupClassName,Ie=o.getPopupContainer,Re=o.onClick,L=o.onOpenChange,Te=o.onKeyDown;o.openAnimation,o.openTransitionName;var be=o._internalRenderMenuItem,rn=o._internalRenderSubMenuItem,Ke=fe(o,As),Ce=a.exports.useMemo(function(){return Ps(v,d,_n)},[v,d]),Fe=a.exports.useState(!1),Ae=j(Fe,2),Ue=Ae[0],We=Ae[1],Q=a.exports.useRef(),Ge=ms(_),Se=m==="rtl",ce=Pn(P,{value:y,postState:function(J){return J||_n}}),Ee=j(ce,2),ge=Ee[0],He=Ee[1],Ne=function(J){var oe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;function ke(){He(J),L?.(J)}oe?Ur.exports.flushSync(ke):ke()},he=a.exports.useState(ge),xe=j(he,2),fn=xe[0],ln=xe[1],Ze=a.exports.useRef(!1),cn=a.exports.useMemo(function(){return(h==="inline"||h==="vertical")&&S?["vertical",S]:[h,!1]},[h,S]),un=j(cn,2),Le=un[0],on=un[1],Be=Le==="inline",gn=a.exports.useState(Le),Je=j(gn,2),$e=Je[0],z=Je[1],H=a.exports.useState(on),re=j(H,2),Me=re[0],qe=re[1];a.exports.useEffect(function(){z(Le),qe(on),Ze.current&&(Be?He(fn):Ne(_n))},[Le,on]);var ht=a.exports.useState(0),Hn=j(ht,2),je=Hn[0],qn=Hn[1],bn=je>=Ce.length-1||$e!=="horizontal"||C;a.exports.useEffect(function(){Be&&ln(ge)},[ge]),a.exports.useEffect(function(){return Ze.current=!0,function(){Ze.current=!1}},[]);var Ye=ps(),sn=Ye.registerPath,xn=Ye.unregisterPath,Mn=Ye.refreshOverflowKeys,kn=Ye.isSubPathKey,Yn=Ye.getKeyPath,Y=Ye.getKeys,U=Ye.getSubPathKeys,pe=a.exports.useMemo(function(){return{registerPath:sn,unregisterPath:xn}},[sn,xn]),_e=a.exports.useMemo(function(){return{isSubPathKey:kn}},[kn]);a.exports.useEffect(function(){Mn(bn?_n:Ce.slice(je+1).map(function(ae){return ae.key}))},[je,bn]);var Xe=Pn(k||M&&((t=Ce[0])===null||t===void 0?void 0:t.key),{value:k}),De=j(Xe,2),pn=De[0],_t=De[1],Ho=Sn(function(ae){_t(ae)}),qo=Sn(function(){_t(void 0)});a.exports.useImperativeHandle(n,function(){return{list:Q.current,focus:function(J){var oe,ke=pn??((oe=Ce.find(function(ii){return!ii.props.disabled}))===null||oe===void 0?void 0:oe.key);if(ke){var ze,dn,An;(ze=Q.current)===null||ze===void 0||(dn=ze.querySelector("li[data-menu-id='".concat(zt(Ge,ke),"']")))===null||dn===void 0||(An=dn.focus)===null||An===void 0||An.call(dn,J)}}}});var Yo=Pn(X||[],{value:Z,postState:function(J){return Array.isArray(J)?J:J==null?_n:[J]}}),Qt=j(Yo,2),Xn=Qt[0],Xo=Qt[1],Zo=function(J){if(B){var oe=J.key,ke=Xn.includes(oe),ze;F?ke?ze=Xn.filter(function(An){return An!==oe}):ze=[].concat(nn(Xn),[oe]):ze=[oe],Xo(ze);var dn=K(K({},J),{},{selectedKeys:ze});ke?ne?.(dn):le?.(dn)}!F&&ge.length&&$e!=="inline"&&Ne(_n)},Jo=Sn(function(ae){Re?.(it(ae)),Zo(ae)}),er=Sn(function(ae,J){var oe=ge.filter(function(ze){return ze!==ae});if(J)oe.push(ae);else if($e!=="inline"){var ke=U(ae);oe=oe.filter(function(ze){return!ke.has(ze)})}Gr(ge,oe,!0)||Ne(oe,!0)}),Qo=Sn(Ie),ei=function(J,oe){var ke=oe??!ge.includes(J);er(J,ke)},ni=cs($e,pn,Se,Ge,Q,Y,Yn,_t,ei,Te);a.exports.useEffect(function(){We(!0)},[]);var ti=a.exports.useMemo(function(){return{_internalRenderMenuItem:be,_internalRenderSubMenuItem:rn}},[be,rn]),ri=$e!=="horizontal"||C?Ce:Ce.map(function(ae,J){return p(Fn,{overflowDisabled:J>je,children:ae},ae.key)}),oi=p(en,{id:_,ref:Q,prefixCls:"".concat(s,"-overflow"),component:"ul",itemComponent:ut,className:q(s,"".concat(s,"-root"),"".concat(s,"-").concat($e),c,(r={},R(r,"".concat(s,"-inline-collapsed"),Me),R(r,"".concat(s,"-rtl"),Se),r),f),dir:m,style:l,role:"menu",tabIndex:u,data:ri,renderRawItem:function(J){return J},renderRawRest:function(J){var oe=J.length,ke=oe?Ce.slice(-oe):null;return p(Vt,{eventKey:$t,title:Oe,disabled:bn,internalPopupClose:oe===0,popupClassName:Pe,children:ke})},maxCount:$e!=="horizontal"||C?en.INVALIDATE:en.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(J){qn(J)},onKeyDown:ni,...Ke});return p(Kt.Provider,{value:ti,children:p(so.Provider,{value:Ge,children:ye(Fn,{prefixCls:s,rootClassName:f,mode:$e,openKeys:ge,rtl:Se,disabled:w,motion:Ue?D:null,defaultMotions:Ue?W:null,activeKey:pn,onActive:Ho,onInactive:qo,selectedKeys:Xn,inlineIndent:N,subMenuOpenDelay:b,subMenuCloseDelay:I,forceSubMenuRender:O,builtinPlacements:ie,triggerSubMenuAction:ve,getPopupContainer:Qo,itemIcon:me,expandIcon:se,onItemClick:Jo,onOpenChange:er,children:[p(co.Provider,{value:_e,children:oi}),p("div",{style:{display:"none"},"aria-hidden":!0,children:p(fo.Provider,{value:pe,children:Ce})})]})})})}),Ds=["className","title","eventKey","children"],zs=["children"],Ks=function(n){var t=n.className,r=n.title;n.eventKey;var o=n.children,i=fe(n,Ds),s=a.exports.useContext(Ve),f=s.prefixCls,l="".concat(f,"-item-group");return ye("li",{role:"presentation",...i,onClick:function(g){return g.stopPropagation()},className:q(l,t),children:[p("div",{role:"presentation",className:"".concat(l,"-title"),title:typeof r=="string"?r:void 0,children:r}),p("ul",{role:"group",className:"".concat(l,"-list"),children:o})]})};function ho(e){var n=e.children,t=fe(e,zs),r=Wn(t.eventKey),o=Bt(n,r),i=ct();return i?o:p(Ks,{...Yr(t,["warnKey"]),children:o})}function _o(e){var n=e.className,t=e.style,r=a.exports.useContext(Ve),o=r.prefixCls,i=ct();return i?null:p("li",{className:q("".concat(o,"-item-divider"),n),style:t})}var Gn=js;Gn.Item=ut;Gn.SubMenu=Vt;Gn.ItemGroup=ho;Gn.Divider=_o;var wn={adjustX:1,adjustY:1},yn=[0,0],Ls={topLeft:{points:["bl","tl"],overflow:wn,offset:[0,-4],targetOffset:yn},topCenter:{points:["bc","tc"],overflow:wn,offset:[0,-4],targetOffset:yn},topRight:{points:["br","tr"],overflow:wn,offset:[0,-4],targetOffset:yn},bottomLeft:{points:["tl","bl"],overflow:wn,offset:[0,4],targetOffset:yn},bottomCenter:{points:["tc","bc"],overflow:wn,offset:[0,4],targetOffset:yn},bottomRight:{points:["tr","br"],overflow:wn,offset:[0,4],targetOffset:yn}},Fs=ue.ESC,Bs=ue.TAB;function Vs(e){var n=e.visible,t=e.setTriggerVisible,r=e.triggerRef,o=e.onVisibleChange,i=e.autoFocus,s=a.exports.useRef(!1),f=function(){if(n&&r.current){var u,d,v,m;(u=r.current)===null||u===void 0||(d=u.triggerRef)===null||d===void 0||(v=d.current)===null||v===void 0||(m=v.focus)===null||m===void 0||m.call(v),t(!1),typeof o=="function"&&o(!1)}},l=function(){var u,d,v,m,_=uo((u=r.current)===null||u===void 0||(d=u.popupRef)===null||d===void 0||(v=d.current)===null||v===void 0||(m=v.getElement)===null||m===void 0?void 0:m.call(v)),x=_[0];return x?.focus?(x.focus(),s.current=!0,!0):!1},c=function(u){switch(u.keyCode){case Fs:f();break;case Bs:{var d=!1;s.current||(d=l()),d?u.preventDefault():f();break}}};a.exports.useEffect(function(){return n?(window.addEventListener("keydown",c),i&&Qe(l,3),function(){window.removeEventListener("keydown",c),s.current=!1}):function(){s.current=!1}},[n])}var Us=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function Ws(e,n){var t=e.arrow,r=t===void 0?!1:t,o=e.prefixCls,i=o===void 0?"rc-dropdown":o,s=e.transitionName,f=e.animation,l=e.align,c=e.placement,g=c===void 0?"bottomLeft":c,u=e.placements,d=u===void 0?Ls:u,v=e.getPopupContainer,m=e.showAction,_=e.hideAction,x=e.overlayClassName,h=e.overlayStyle,S=e.visible,w=e.trigger,C=w===void 0?["hover"]:w,$=e.autoFocus,b=fe(e,Us),E=a.exports.useState(),I=j(E,2),O=I[0],P=I[1],y="visible"in e?S:O,k=a.exports.useRef(null);a.exports.useImperativeHandle(n,function(){return k.current}),Vs({visible:y,setTriggerVisible:P,triggerRef:k,onVisibleChange:e.onVisibleChange,autoFocus:$});var M=function(){var N=e.overlay,D;return typeof N=="function"?D=N():D=N,D},A=function(N){var D=e.onOverlayClick;P(!1),D&&D(N)},B=function(N){var D=e.onVisibleChange;P(N),typeof D=="function"&&D(N)},V=function(){var N=M();return ye(gi,{children:[r&&p("div",{className:"".concat(i,"-arrow")}),N]})},F=function(){var N=e.overlay;return typeof N=="function"?V:V()},X=function(){var N=e.minOverlayWidthMatchTrigger,D=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?N:!D},Z=function(){var N=e.openClassName;return N!==void 0?N:"".concat(i,"-open")},le=function(){var N=e.children,D=N.props?N.props:{},W=q(D.className,Z());return y&&N?a.exports.cloneElement(N,{className:W}):N},ne=_;return!ne&&C.indexOf("contextMenu")!==-1&&(ne=["click"]),p(Qr,{...K(K({builtinPlacements:d},b),{},{prefixCls:i,ref:k,popupClassName:q(x,R({},"".concat(i,"-show-arrow"),r)),popupStyle:h,action:C,showAction:m,hideAction:ne||[],popupPlacement:g,popupAlign:l,popupTransitionName:s,popupAnimation:f,popupVisible:y,stretch:X()?"minWidth":"",popup:F(),onPopupVisibleChange:B,onPopupClick:A,getPopupContainer:v}),children:le()})}const Gs=a.exports.forwardRef(Ws),gt=a.exports.createContext(null);var wo=a.exports.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,o=e.style,i=e.id,s=e.active,f=e.tabKey,l=e.children;return p("div",{id:i&&"".concat(i,"-panel-").concat(f),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(f),"aria-hidden":!s,style:o,className:q(t,s&&"".concat(t,"-active"),r),ref:n,children:l})}),Hs=["key","forceRender","style","className"];function qs(e){var n=e.id,t=e.activeKey,r=e.animated,o=e.tabPosition,i=e.destroyInactiveTabPane,s=a.exports.useContext(gt),f=s.prefixCls,l=s.tabs,c=r.tabPane,g="".concat(f,"-tabpane");return p("div",{className:q("".concat(f,"-content-holder")),children:p("div",{className:q("".concat(f,"-content"),"".concat(f,"-content-").concat(o),R({},"".concat(f,"-content-animated"),c)),children:l.map(function(u){var d=u.key,v=u.forceRender,m=u.style,_=u.className,x=fe(u,Hs),h=d===t;return p(jt,{visible:h,forceRender:v,removeOnLeave:!!i,leavedClassName:"".concat(g,"-hidden"),...r.tabPaneMotion,children:function(S,w){var C=S.style,$=S.className;return p(wo,{...x,prefixCls:g,id:n,tabKey:d,animated:c,active:h,style:K(K({},m),C),className:q(_,$),ref:w})}},d)})})})}var fr={width:0,height:0,left:0,top:0};function Ys(e,n,t){return a.exports.useMemo(function(){for(var r,o=new Map,i=n.get((r=e[0])===null||r===void 0?void 0:r.key)||fr,s=i.left+i.width,f=0;f<e.length;f+=1){var l=e[f].key,c=n.get(l);if(!c){var g;c=n.get((g=e[f-1])===null||g===void 0?void 0:g.key)||fr}var u=o.get(l)||K({},c);u.right=s-u.left-u.width,o.set(l,u)}return o},[e.map(function(r){return r.key}).join("_"),n,t])}function lr(e,n){var t=a.exports.useRef(e),r=a.exports.useState({}),o=j(r,2),i=o[1];function s(f){var l=typeof f=="function"?f(t.current):f;l!==t.current&&n(l,t.current),t.current=l,i({})}return[t.current,s]}var Xs=.1,cr=.01,nt=20,ur=Math.pow(.995,nt);function Zs(e,n){var t=a.exports.useState(),r=j(t,2),o=r[0],i=r[1],s=a.exports.useState(0),f=j(s,2),l=f[0],c=f[1],g=a.exports.useState(0),u=j(g,2),d=u[0],v=u[1],m=a.exports.useState(),_=j(m,2),x=_[0],h=_[1],S=a.exports.useRef();function w(O){var P=O.touches[0],y=P.screenX,k=P.screenY;i({x:y,y:k}),window.clearInterval(S.current)}function C(O){if(!!o){O.preventDefault();var P=O.touches[0],y=P.screenX,k=P.screenY;i({x:y,y:k});var M=y-o.x,A=k-o.y;n(M,A);var B=Date.now();c(B),v(B-l),h({x:M,y:A})}}function $(){if(!!o&&(i(null),h(null),x)){var O=x.x/d,P=x.y/d,y=Math.abs(O),k=Math.abs(P);if(Math.max(y,k)<Xs)return;var M=O,A=P;S.current=window.setInterval(function(){if(Math.abs(M)<cr&&Math.abs(A)<cr){window.clearInterval(S.current);return}M*=ur,A*=ur,n(M*nt,A*nt)},nt)}}var b=a.exports.useRef();function E(O){var P=O.deltaX,y=O.deltaY,k=0,M=Math.abs(P),A=Math.abs(y);M===A?k=b.current==="x"?P:y:M>A?(k=P,b.current="x"):(k=y,b.current="y"),n(-k,-k)&&O.preventDefault()}var I=a.exports.useRef(null);I.current={onTouchStart:w,onTouchMove:C,onTouchEnd:$,onWheel:E},a.exports.useEffect(function(){function O(M){I.current.onTouchStart(M)}function P(M){I.current.onTouchMove(M)}function y(M){I.current.onTouchEnd(M)}function k(M){I.current.onWheel(M)}return document.addEventListener("touchmove",P,{passive:!1}),document.addEventListener("touchend",y,{passive:!1}),e.current.addEventListener("touchstart",O,{passive:!1}),e.current.addEventListener("wheel",k),function(){document.removeEventListener("touchmove",P),document.removeEventListener("touchend",y)}},[])}function yo(e){var n=a.exports.useState(0),t=j(n,2),r=t[0],o=t[1],i=a.exports.useRef(0),s=a.exports.useRef();return s.current=e,pi(function(){var f;(f=s.current)===null||f===void 0||f.call(s)},[r]),function(){i.current===r&&(i.current+=1,o(i.current))}}function Js(e){var n=a.exports.useRef([]),t=a.exports.useState({}),r=j(t,2),o=r[1],i=a.exports.useRef(typeof e=="function"?e():e),s=yo(function(){var l=i.current;n.current.forEach(function(c){l=c(l)}),n.current=[],i.current=l,o({})});function f(l){n.current.push(l),s()}return[i.current,f]}var gr={width:0,height:0,left:0,top:0,right:0};function Qs(e,n,t,r,o,i,s){var f=s.tabs,l=s.tabPosition,c=s.rtl,g,u,d;return["top","bottom"].includes(l)?(g="width",u=c?"right":"left",d=Math.abs(t)):(g="height",u="top",d=-t),a.exports.useMemo(function(){if(!f.length)return[0,0];for(var v=f.length,m=v,_=0;_<v;_+=1){var x=e.get(f[_].key)||gr;if(x[u]+x[g]>d+n){m=_-1;break}}for(var h=0,S=v-1;S>=0;S-=1){var w=e.get(f[S].key)||gr;if(w[u]<d){h=S+1;break}}return[h,m]},[e,n,r,o,i,d,l,f.map(function(v){return v.key}).join("_"),c])}function pr(e){var n;return e instanceof Map?(n={},e.forEach(function(t,r){n[r]=t})):n=e,JSON.stringify(n)}var ea="TABS_DQ";function Co(e){return String(e).replace(/"/g,ea)}function na(e,n){var t=e.prefixCls,r=e.editable,o=e.locale,i=e.style;return!r||r.showAdd===!1?null:p("button",{ref:n,type:"button",className:"".concat(t,"-nav-add"),style:i,"aria-label":o?.addAriaLabel||"Add tab",onClick:function(f){r.onEdit("add",{event:f})},children:r.addIcon||"+"})}const So=a.exports.forwardRef(na);var dr=a.exports.forwardRef(function(e,n){var t=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i,s={};return In(o)==="object"&&!a.exports.isValidElement(o)?s=o:s.right=o,t==="right"&&(i=s.right),t==="left"&&(i=s.left),i?p("div",{className:"".concat(r,"-extra-content"),ref:n,children:i}):null});function ta(e,n){var t=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,s=e.mobile,f=e.moreIcon,l=f===void 0?"More":f,c=e.moreTransitionName,g=e.style,u=e.className,d=e.editable,v=e.tabBarGutter,m=e.rtl,_=e.removeAriaLabel,x=e.onTabClick,h=e.getPopupContainer,S=e.popupClassName,w=a.exports.useState(!1),C=j(w,2),$=C[0],b=C[1],E=a.exports.useState(null),I=j(E,2),O=I[0],P=I[1],y="".concat(r,"-more-popup"),k="".concat(t,"-dropdown"),M=O!==null?"".concat(y,"-").concat(O):null,A=i?.dropdownAriaLabel;function B(T,N){T.preventDefault(),T.stopPropagation(),d.onEdit("remove",{key:N,event:T})}var V=p(Gn,{onClick:function(N){var D=N.key,W=N.domEvent;x(D,W),b(!1)},prefixCls:"".concat(k,"-menu"),id:y,tabIndex:-1,role:"listbox","aria-activedescendant":M,selectedKeys:[O],"aria-label":A!==void 0?A:"expanded dropdown",children:o.map(function(T){var N=d&&T.closable!==!1&&!T.disabled;return ye(ut,{id:"".concat(y,"-").concat(T.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(T.key),disabled:T.disabled,children:[p("span",{children:T.label}),N&&p("button",{type:"button","aria-label":_||"remove",tabIndex:0,className:"".concat(k,"-menu-item-remove"),onClick:function(W){W.stopPropagation(),B(W,T.key)},children:T.closeIcon||d.removeIcon||"\xD7"})]},T.key)})});function F(T){for(var N=o.filter(function(ie){return!ie.disabled}),D=N.findIndex(function(ie){return ie.key===O})||0,W=N.length,de=0;de<W;de+=1){D=(D+T+W)%W;var ve=N[D];if(!ve.disabled){P(ve.key);return}}}function X(T){var N=T.which;if(!$){[ue.DOWN,ue.SPACE,ue.ENTER].includes(N)&&(b(!0),T.preventDefault());return}switch(N){case ue.UP:F(-1),T.preventDefault();break;case ue.DOWN:F(1),T.preventDefault();break;case ue.ESC:b(!1);break;case ue.SPACE:case ue.ENTER:O!==null&&x(O,T);break}}a.exports.useEffect(function(){var T=document.getElementById(M);T&&T.scrollIntoView&&T.scrollIntoView(!1)},[O]),a.exports.useEffect(function(){$||P(null)},[$]);var Z=R({},m?"marginRight":"marginLeft",v);o.length||(Z.visibility="hidden",Z.order=1);var le=q(R({},"".concat(k,"-rtl"),m)),ne=s?null:p(Gs,{prefixCls:k,overlay:V,trigger:["hover"],visible:o.length?$:!1,transitionName:c,onVisibleChange:b,overlayClassName:q(le,S),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:h,children:p("button",{type:"button",className:"".concat(t,"-nav-more"),style:Z,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":y,id:"".concat(r,"-more"),"aria-expanded":$,onKeyDown:X,children:l})});return ye("div",{className:q("".concat(t,"-nav-operations"),u),style:g,ref:n,children:[ne,p(So,{prefixCls:t,locale:i,editable:d})]})}const ra=a.exports.memo(a.exports.forwardRef(ta),function(e,n){return n.tabMoving});function oa(e){var n,t=e.prefixCls,r=e.id,o=e.active,i=e.tab,s=i.key,f=i.label,l=i.disabled,c=i.closeIcon,g=e.closable,u=e.renderWrapper,d=e.removeAriaLabel,v=e.editable,m=e.onClick,_=e.onFocus,x=e.style,h="".concat(t,"-tab"),S=v&&g!==!1&&!l;function w(b){l||m(b)}function C(b){b.preventDefault(),b.stopPropagation(),v.onEdit("remove",{key:s,event:b})}var $=ye("div",{"data-node-key":Co(s),className:q(h,(n={},R(n,"".concat(h,"-with-remove"),S),R(n,"".concat(h,"-active"),o),R(n,"".concat(h,"-disabled"),l),n)),style:x,onClick:w,children:[p("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(h,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":l,tabIndex:l?null:0,onClick:function(E){E.stopPropagation(),w(E)},onKeyDown:function(E){[ue.SPACE,ue.ENTER].includes(E.which)&&(E.preventDefault(),w(E))},onFocus:_,children:f}),S&&p("button",{type:"button","aria-label":d||"remove",tabIndex:0,className:"".concat(h,"-remove"),onClick:function(E){E.stopPropagation(),C(E)},children:c||v.removeIcon||"\xD7"})]},s);return u?u($):$}var Cn=function(n){var t=n.current||{},r=t.offsetWidth,o=r===void 0?0:r,i=t.offsetHeight,s=i===void 0?0:i;return[o,s]},Zn=function(n,t){return n[t?0:1]};function ia(e,n){var t,r=a.exports.useContext(gt),o=r.prefixCls,i=r.tabs,s=e.className,f=e.style,l=e.id,c=e.animated,g=e.activeKey,u=e.rtl,d=e.extra,v=e.editable,m=e.locale,_=e.tabPosition,x=e.tabBarGutter,h=e.children,S=e.onTabClick,w=e.onTabScroll,C=a.exports.useRef(),$=a.exports.useRef(),b=a.exports.useRef(),E=a.exports.useRef(),I=a.exports.useRef(),O=a.exports.useRef(),P=a.exports.useRef(),y=_==="top"||_==="bottom",k=lr(0,function(Y,U){y&&w&&w({direction:Y>U?"left":"right"})}),M=j(k,2),A=M[0],B=M[1],V=lr(0,function(Y,U){!y&&w&&w({direction:Y>U?"top":"bottom"})}),F=j(V,2),X=F[0],Z=F[1],le=a.exports.useState([0,0]),ne=j(le,2),T=ne[0],N=ne[1],D=a.exports.useState([0,0]),W=j(D,2),de=W[0],ve=W[1],ie=a.exports.useState([0,0]),me=j(ie,2),se=me[0],G=me[1],Oe=a.exports.useState([0,0]),Pe=j(Oe,2),Ie=Pe[0],Re=Pe[1],L=Js(new Map),Te=j(L,2),be=Te[0],rn=Te[1],Ke=Ys(i,be,de[0]),Ce=Zn(T,y),Fe=Zn(de,y),Ae=Zn(se,y),Ue=Zn(Ie,y),We=Ce<Fe+Ae,Q=We?Ce-Ue:Ce-Ae,Ge="".concat(o,"-nav-operations-hidden"),Se=0,ce=0;y&&u?(Se=0,ce=Math.max(0,Fe-Q)):(Se=Math.min(0,Q-Fe),ce=0);function Ee(Y){return Y<Se?Se:Y>ce?ce:Y}var ge=a.exports.useRef(),He=a.exports.useState(),Ne=j(He,2),he=Ne[0],xe=Ne[1];function fn(){xe(Date.now())}function ln(){window.clearTimeout(ge.current)}Zs(E,function(Y,U){function pe(_e,Xe){_e(function(De){var pn=Ee(De+Xe);return pn})}return We?(y?pe(B,Y):pe(Z,U),ln(),fn(),!0):!1}),a.exports.useEffect(function(){return ln(),he&&(ge.current=window.setTimeout(function(){xe(0)},100)),ln},[he]);var Ze=Qs(Ke,Q,y?A:X,Fe,Ae,Ue,K(K({},e),{},{tabs:i})),cn=j(Ze,2),un=cn[0],Le=cn[1],on=Jr(function(){var Y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,U=Ke.get(Y)||{width:0,height:0,left:0,right:0,top:0};if(y){var pe=A;u?U.right<A?pe=U.right:U.right+U.width>A+Q&&(pe=U.right+U.width-Q):U.left<-A?pe=-U.left:U.left+U.width>-A+Q&&(pe=-(U.left+U.width-Q)),Z(0),B(Ee(pe))}else{var _e=X;U.top<-X?_e=-U.top:U.top+U.height>-X+Q&&(_e=-(U.top+U.height-Q)),B(0),Z(Ee(_e))}}),Be={};_==="top"||_==="bottom"?Be[u?"marginRight":"marginLeft"]=x:Be.marginTop=x;var gn=i.map(function(Y,U){var pe=Y.key;return p(oa,{id:l,prefixCls:o,tab:Y,style:U===0?void 0:Be,closable:Y.closable,editable:v,active:pe===g,renderWrapper:h,removeAriaLabel:m?.removeAriaLabel,onClick:function(Xe){S(pe,Xe)},onFocus:function(){on(pe),fn(),E.current&&(u||(E.current.scrollLeft=0),E.current.scrollTop=0)}},pe)}),Je=function(){return rn(function(){var U=new Map;return i.forEach(function(pe){var _e,Xe=pe.key,De=(_e=I.current)===null||_e===void 0?void 0:_e.querySelector('[data-node-key="'.concat(Co(Xe),'"]'));De&&U.set(Xe,{width:De.offsetWidth,height:De.offsetHeight,left:De.offsetLeft,top:De.offsetTop})}),U})};a.exports.useEffect(function(){Je()},[i.map(function(Y){return Y.key}).join("_")]);var $e=yo(function(){var Y=Cn(C),U=Cn($),pe=Cn(b);N([Y[0]-U[0]-pe[0],Y[1]-U[1]-pe[1]]);var _e=Cn(P);G(_e);var Xe=Cn(O);Re(Xe);var De=Cn(I);ve([De[0]-_e[0],De[1]-_e[1]]),Je()}),z=i.slice(0,un),H=i.slice(Le+1),re=[].concat(nn(z),nn(H)),Me=a.exports.useState(),qe=j(Me,2),ht=qe[0],Hn=qe[1],je=Ke.get(g),qn=a.exports.useRef();function bn(){Qe.cancel(qn.current)}a.exports.useEffect(function(){var Y={};return je&&(y?(u?Y.right=je.right:Y.left=je.left,Y.width=je.width):(Y.top=je.top,Y.height=je.height)),bn(),qn.current=Qe(function(){Hn(Y)}),bn},[je,y,u]),a.exports.useEffect(function(){on()},[g,Se,ce,pr(je),pr(Ke),y]),a.exports.useEffect(function(){$e()},[u]);var Ye=!!re.length,sn="".concat(o,"-nav-wrap"),xn,Mn,kn,Yn;return y?u?(Mn=A>0,xn=A!==ce):(xn=A<0,Mn=A!==Se):(kn=X<0,Yn=X!==Se),p(rt,{onResize:$e,children:ye("div",{ref:qr(n,C),role:"tablist",className:q("".concat(o,"-nav"),s),style:f,onKeyDown:function(){fn()},children:[p(dr,{ref:$,position:"left",extra:d,prefixCls:o}),p("div",{className:q(sn,(t={},R(t,"".concat(sn,"-ping-left"),xn),R(t,"".concat(sn,"-ping-right"),Mn),R(t,"".concat(sn,"-ping-top"),kn),R(t,"".concat(sn,"-ping-bottom"),Yn),t)),ref:E,children:p(rt,{onResize:$e,children:ye("div",{ref:I,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(A,"px, ").concat(X,"px)"),transition:he?"none":void 0},children:[gn,p(So,{ref:P,prefixCls:o,locale:m,editable:v,style:K(K({},gn.length===0?void 0:Be),{},{visibility:Ye?"hidden":null})}),p("div",{className:q("".concat(o,"-ink-bar"),R({},"".concat(o,"-ink-bar-animated"),c.inkBar)),style:ht})]})})}),p(ra,{...e,removeAriaLabel:m?.removeAriaLabel,ref:O,prefixCls:o,tabs:re,className:!Ye&&Ge,tabMoving:!!he}),p(dr,{ref:b,position:"right",extra:d,prefixCls:o})]})})}const mr=a.exports.forwardRef(ia);var sa=["renderTabBar"],aa=["label","key"];function fa(e){var n=e.renderTabBar,t=fe(e,sa),r=a.exports.useContext(gt),o=r.tabs;if(n){var i=K(K({},t),{},{panes:o.map(function(s){var f=s.label,l=s.key,c=fe(s,aa);return p(wo,{tab:f,tabKey:l,...c},l)})});return n(i,mr)}return p(mr,{...t})}function la(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},n;return e===!1?n={inkBar:!1,tabPane:!1}:e===!0?n={inkBar:!0,tabPane:!1}:n=K({inkBar:!0},In(e)==="object"?e:{}),n.tabPaneMotion&&n.tabPane===void 0&&(n.tabPane=!0),!n.tabPaneMotion&&n.tabPane&&(n.tabPane=!1),n}var ca=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],vr=0;function ua(e,n){var t,r=e.id,o=e.prefixCls,i=o===void 0?"rc-tabs":o,s=e.className,f=e.items,l=e.direction,c=e.activeKey,g=e.defaultActiveKey,u=e.editable,d=e.animated,v=e.tabPosition,m=v===void 0?"top":v,_=e.tabBarGutter,x=e.tabBarStyle,h=e.tabBarExtraContent,S=e.locale,w=e.moreIcon,C=e.moreTransitionName,$=e.destroyInactiveTabPane,b=e.renderTabBar,E=e.onChange,I=e.onTabClick,O=e.onTabScroll,P=e.getPopupContainer,y=e.popupClassName,k=fe(e,ca),M=a.exports.useMemo(function(){return(f||[]).filter(function(L){return L&&In(L)==="object"&&"key"in L})},[f]),A=l==="rtl",B=la(d),V=a.exports.useState(!1),F=j(V,2),X=F[0],Z=F[1];a.exports.useEffect(function(){Z(Ti())},[]);var le=Pn(function(){var L;return(L=M[0])===null||L===void 0?void 0:L.key},{value:c,defaultValue:g}),ne=j(le,2),T=ne[0],N=ne[1],D=a.exports.useState(function(){return M.findIndex(function(L){return L.key===T})}),W=j(D,2),de=W[0],ve=W[1];a.exports.useEffect(function(){var L=M.findIndex(function(be){return be.key===T});if(L===-1){var Te;L=Math.max(0,Math.min(de,M.length-1)),N((Te=M[L])===null||Te===void 0?void 0:Te.key)}ve(L)},[M.map(function(L){return L.key}).join("_"),T,de]);var ie=Pn(null,{value:r}),me=j(ie,2),se=me[0],G=me[1];a.exports.useEffect(function(){r||(G("rc-tabs-".concat(vr)),vr+=1)},[]);function Oe(L,Te){I?.(L,Te);var be=L!==T;N(L),be&&E?.(L)}var Pe={id:se,activeKey:T,animated:B,tabPosition:m,rtl:A,mobile:X},Ie,Re=K(K({},Pe),{},{editable:u,locale:S,moreIcon:w,moreTransitionName:C,tabBarGutter:_,onTabClick:Oe,onTabScroll:O,extra:h,style:x,panes:null,getPopupContainer:P,popupClassName:y});return p(gt.Provider,{value:{tabs:M,prefixCls:i},children:ye("div",{ref:n,id:r,className:q(i,"".concat(i,"-").concat(m),(t={},R(t,"".concat(i,"-mobile"),X),R(t,"".concat(i,"-editable"),u),R(t,"".concat(i,"-rtl"),A),t),s),...k,children:[Ie,p(fa,{...Re,renderTabBar:b}),p(qs,{destroyInactiveTabPane:$,...Pe,animated:B})]})})}var ga=a.exports.forwardRef(ua),pa={motionAppear:!1,motionEnter:!0,motionLeave:!0};function da(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},t;return n===!1?t={inkBar:!1,tabPane:!1}:n===!0?t={inkBar:!0,tabPane:!0}:t=we({inkBar:!0},In(n)==="object"?n:{}),t.tabPane&&(t.tabPaneMotion=we(we({},pa),{motionName:di(e,"switch")})),t}var ma=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function va(e){return e.filter(function(n){return n})}function ba(e,n){if(e)return e;var t=Xr(n).map(function(r){if(a.exports.isValidElement(r)){var o=r.key,i=r.props,s=i||{},f=s.tab,l=ma(s,["tab"]),c=we(we({key:String(o)},l),{label:f});return c}return null});return va(t)}var xa=function(){return null};const ha=xa;var _a=globalThis&&globalThis.__rest||function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t};function wa(e){var n=e.type,t=e.className,r=e.size,o=e.onEdit,i=e.hideAdd,s=e.centered,f=e.addIcon,l=e.children,c=e.items,g=e.animated,u=_a(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),d=u.prefixCls,v=u.moreIcon,m=v===void 0?p(ki,{}):v,_=a.exports.useContext(ft),x=_.getPrefixCls,h=_.direction,S=_.getPopupContainer,w=x("tabs",d),C;n==="editable-card"&&(C={onEdit:function(O,P){var y=P.key,k=P.event;o?.(O==="add"?k:y,O)},removeIcon:p(vi,{}),addIcon:f||p(Di,{}),showAdd:i!==!0});var $=x(),b=ba(c,l),E=da(w,g);return p(mi.Consumer,{children:function(I){var O=r!==void 0?r:I;return p(ga,{direction:h,getPopupContainer:S,moreTransitionName:"".concat($,"-slide-up"),...u,items:b,className:q(R(R(R(R({},"".concat(w,"-").concat(O),O),"".concat(w,"-card"),["card","editable-card"].includes(n)),"".concat(w,"-editable-card"),n==="editable-card"),"".concat(w,"-centered"),s),t),editable:C,moreIcon:m,prefixCls:w,animated:E})}})}wa.TabPane=ha;function ya(){this.__data__=[],this.size=0}var Ca=ya;function Sa(e,n){return e===n||e!==e&&n!==n}var $o=Sa,$a=$o;function Pa(e,n){for(var t=e.length;t--;)if($a(e[t][0],n))return t;return-1}var pt=Pa,Ia=pt,Ta=Array.prototype,Na=Ta.splice;function Oa(e){var n=this.__data__,t=Ia(n,e);if(t<0)return!1;var r=n.length-1;return t==r?n.pop():Na.call(n,t,1),--this.size,!0}var Ra=Oa,Ea=pt;function Ma(e){var n=this.__data__,t=Ea(n,e);return t<0?void 0:n[t][1]}var ka=Ma,Aa=pt;function ja(e){return Aa(this.__data__,e)>-1}var Da=ja,za=pt;function Ka(e,n){var t=this.__data__,r=za(t,e);return r<0?(++this.size,t.push([e,n])):t[r][1]=n,this}var La=Ka,Fa=Ca,Ba=Ra,Va=ka,Ua=Da,Wa=La;function Tn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Tn.prototype.clear=Fa;Tn.prototype.delete=Ba;Tn.prototype.get=Va;Tn.prototype.has=Ua;Tn.prototype.set=Wa;var dt=Tn,Ga=dt;function Ha(){this.__data__=new Ga,this.size=0}var qa=Ha;function Ya(e){var n=this.__data__,t=n.delete(e);return this.size=n.size,t}var Xa=Ya;function Za(e){return this.__data__.get(e)}var Ja=Za;function Qa(e){return this.__data__.has(e)}var ef=Qa,nf=lt,tf=Vn,rf="[object AsyncFunction]",of="[object Function]",sf="[object GeneratorFunction]",af="[object Proxy]";function ff(e){if(!tf(e))return!1;var n=nf(e);return n==of||n==sf||n==rf||n==af}var Po=ff,lf=tn,cf=lf["__core-js_shared__"],uf=cf,wt=uf,br=function(){var e=/[^.]+$/.exec(wt&&wt.keys&&wt.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function gf(e){return!!br&&br in e}var pf=gf,df=Function.prototype,mf=df.toString;function vf(e){if(e!=null){try{return mf.call(e)}catch{}try{return e+""}catch{}}return""}var Io=vf,bf=Po,xf=pf,hf=Vn,_f=Io,wf=/[\\^$.*+?()[\]{}|]/g,yf=/^\[object .+?Constructor\]$/,Cf=Function.prototype,Sf=Object.prototype,$f=Cf.toString,Pf=Sf.hasOwnProperty,If=RegExp("^"+$f.call(Pf).replace(wf,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Tf(e){if(!hf(e)||xf(e))return!1;var n=bf(e)?If:yf;return n.test(_f(e))}var Nf=Tf;function Of(e,n){return e?.[n]}var Rf=Of,Ef=Nf,Mf=Rf;function kf(e,n){var t=Mf(e,n);return Ef(t)?t:void 0}var vn=kf,Af=vn,jf=tn,Df=Af(jf,"Map"),Ut=Df,zf=vn,Kf=zf(Object,"create"),mt=Kf,xr=mt;function Lf(){this.__data__=xr?xr(null):{},this.size=0}var Ff=Lf;function Bf(e){var n=this.has(e)&&delete this.__data__[e];return this.size-=n?1:0,n}var Vf=Bf,Uf=mt,Wf="__lodash_hash_undefined__",Gf=Object.prototype,Hf=Gf.hasOwnProperty;function qf(e){var n=this.__data__;if(Uf){var t=n[e];return t===Wf?void 0:t}return Hf.call(n,e)?n[e]:void 0}var Yf=qf,Xf=mt,Zf=Object.prototype,Jf=Zf.hasOwnProperty;function Qf(e){var n=this.__data__;return Xf?n[e]!==void 0:Jf.call(n,e)}var el=Qf,nl=mt,tl="__lodash_hash_undefined__";function rl(e,n){var t=this.__data__;return this.size+=this.has(e)?0:1,t[e]=nl&&n===void 0?tl:n,this}var ol=rl,il=Ff,sl=Vf,al=Yf,fl=el,ll=ol;function Nn(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}Nn.prototype.clear=il;Nn.prototype.delete=sl;Nn.prototype.get=al;Nn.prototype.has=fl;Nn.prototype.set=ll;var cl=Nn,hr=cl,ul=dt,gl=Ut;function pl(){this.size=0,this.__data__={hash:new hr,map:new(gl||ul),string:new hr}}var dl=pl;function ml(e){var n=typeof e;return n=="string"||n=="number"||n=="symbol"||n=="boolean"?e!=="__proto__":e===null}var vl=ml,bl=vl;function xl(e,n){var t=e.__data__;return bl(n)?t[typeof n=="string"?"string":"hash"]:t.map}var vt=xl,hl=vt;function _l(e){var n=hl(this,e).delete(e);return this.size-=n?1:0,n}var wl=_l,yl=vt;function Cl(e){return yl(this,e).get(e)}var Sl=Cl,$l=vt;function Pl(e){return $l(this,e).has(e)}var Il=Pl,Tl=vt;function Nl(e,n){var t=Tl(this,e),r=t.size;return t.set(e,n),this.size+=t.size==r?0:1,this}var Ol=Nl,Rl=dl,El=wl,Ml=Sl,kl=Il,Al=Ol;function On(e){var n=-1,t=e==null?0:e.length;for(this.clear();++n<t;){var r=e[n];this.set(r[0],r[1])}}On.prototype.clear=Rl;On.prototype.delete=El;On.prototype.get=Ml;On.prototype.has=kl;On.prototype.set=Al;var jl=On,Dl=dt,zl=Ut,Kl=jl,Ll=200;function Fl(e,n){var t=this.__data__;if(t instanceof Dl){var r=t.__data__;if(!zl||r.length<Ll-1)return r.push([e,n]),this.size=++t.size,this;t=this.__data__=new Kl(r)}return t.set(e,n),this.size=t.size,this}var Bl=Fl,Vl=dt,Ul=qa,Wl=Xa,Gl=Ja,Hl=ef,ql=Bl;function Rn(e){var n=this.__data__=new Vl(e);this.size=n.size}Rn.prototype.clear=Ul;Rn.prototype.delete=Wl;Rn.prototype.get=Gl;Rn.prototype.has=Hl;Rn.prototype.set=ql;var Yl=Rn,Xl=tn,Zl=Xl.Uint8Array,Jl=Zl;function Ql(e,n){for(var t=-1,r=n.length,o=e.length;++t<r;)e[o+t]=n[t];return e}var To=Ql,ec=To,nc=Dt;function tc(e,n,t){var r=n(e);return nc(e)?r:ec(r,t(e))}var No=tc;function rc(e,n){for(var t=-1,r=e==null?0:e.length,o=0,i=[];++t<r;){var s=e[t];n(s,t,e)&&(i[o++]=s)}return i}var oc=rc;function ic(){return[]}var Oo=ic,sc=oc,ac=Oo,fc=Object.prototype,lc=fc.propertyIsEnumerable,_r=Object.getOwnPropertySymbols,cc=_r?function(e){return e==null?[]:(e=Object(e),sc(_r(e),function(n){return lc.call(e,n)}))}:ac,Wt=cc;function uc(e,n){for(var t=-1,r=Array(e);++t<e;)r[t]=n(t);return r}var gc=uc,pc=lt,dc=Un,mc="[object Arguments]";function vc(e){return dc(e)&&pc(e)==mc}var bc=vc,wr=bc,xc=Un,Ro=Object.prototype,hc=Ro.hasOwnProperty,_c=Ro.propertyIsEnumerable,wc=wr(function(){return arguments}())?wr:function(e){return xc(e)&&hc.call(e,"callee")&&!_c.call(e,"callee")},yc=wc,st={exports:{}};function Cc(){return!1}var Sc=Cc;(function(e,n){var t=tn,r=Sc,o=n&&!n.nodeType&&n,i=o&&!0&&e&&!e.nodeType&&e,s=i&&i.exports===o,f=s?t.Buffer:void 0,l=f?f.isBuffer:void 0,c=l||r;e.exports=c})(st,st.exports);var $c=9007199254740991,Pc=/^(?:0|[1-9]\d*)$/;function Ic(e,n){var t=typeof e;return n=n??$c,!!n&&(t=="number"||t!="symbol"&&Pc.test(e))&&e>-1&&e%1==0&&e<n}var Tc=Ic,Nc=9007199254740991;function Oc(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=Nc}var Eo=Oc,Rc=lt,Ec=Eo,Mc=Un,kc="[object Arguments]",Ac="[object Array]",jc="[object Boolean]",Dc="[object Date]",zc="[object Error]",Kc="[object Function]",Lc="[object Map]",Fc="[object Number]",Bc="[object Object]",Vc="[object RegExp]",Uc="[object Set]",Wc="[object String]",Gc="[object WeakMap]",Hc="[object ArrayBuffer]",qc="[object DataView]",Yc="[object Float32Array]",Xc="[object Float64Array]",Zc="[object Int8Array]",Jc="[object Int16Array]",Qc="[object Int32Array]",eu="[object Uint8Array]",nu="[object Uint8ClampedArray]",tu="[object Uint16Array]",ru="[object Uint32Array]",te={};te[Yc]=te[Xc]=te[Zc]=te[Jc]=te[Qc]=te[eu]=te[nu]=te[tu]=te[ru]=!0;te[kc]=te[Ac]=te[Hc]=te[jc]=te[qc]=te[Dc]=te[zc]=te[Kc]=te[Lc]=te[Fc]=te[Bc]=te[Vc]=te[Uc]=te[Wc]=te[Gc]=!1;function ou(e){return Mc(e)&&Ec(e.length)&&!!te[Rc(e)]}var iu=ou;function su(e){return function(n){return e(n)}}var Gt=su,Bn={exports:{}};(function(e,n){var t=bi,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===r,s=i&&t.process,f=function(){try{var l=o&&o.require&&o.require("util").types;return l||s&&s.binding&&s.binding("util")}catch{}}();e.exports=f})(Bn,Bn.exports);var au=iu,fu=Gt,yr=Bn.exports,Cr=yr&&yr.isTypedArray,lu=Cr?fu(Cr):au,cu=lu,uu=gc,gu=yc,pu=Dt,du=st.exports,mu=Tc,vu=cu,bu=Object.prototype,xu=bu.hasOwnProperty;function hu(e,n){var t=pu(e),r=!t&&gu(e),o=!t&&!r&&du(e),i=!t&&!r&&!o&&vu(e),s=t||r||o||i,f=s?uu(e.length,String):[],l=f.length;for(var c in e)(n||xu.call(e,c))&&!(s&&(c=="length"||o&&(c=="offset"||c=="parent")||i&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||mu(c,l)))&&f.push(c);return f}var Mo=hu,_u=Object.prototype;function wu(e){var n=e&&e.constructor,t=typeof n=="function"&&n.prototype||_u;return e===t}var Ht=wu;function yu(e,n){return function(t){return e(n(t))}}var ko=yu,Cu=ko,Su=Cu(Object.keys,Object),$u=Su,Pu=Ht,Iu=$u,Tu=Object.prototype,Nu=Tu.hasOwnProperty;function Ou(e){if(!Pu(e))return Iu(e);var n=[];for(var t in Object(e))Nu.call(e,t)&&t!="constructor"&&n.push(t);return n}var Ru=Ou,Eu=Po,Mu=Eo;function ku(e){return e!=null&&Mu(e.length)&&!Eu(e)}var Ao=ku,Au=Mo,ju=Ru,Du=Ao;function zu(e){return Du(e)?Au(e):ju(e)}var qt=zu,Ku=No,Lu=Wt,Fu=qt;function Bu(e){return Ku(e,Fu,Lu)}var Vu=Bu,Uu=vn,Wu=tn,Gu=Uu(Wu,"DataView"),Hu=Gu,qu=vn,Yu=tn,Xu=qu(Yu,"Promise"),Zu=Xu,Ju=vn,Qu=tn,eg=Ju(Qu,"Set"),ng=eg,tg=vn,rg=tn,og=tg(rg,"WeakMap"),ig=og,It=Hu,Tt=Ut,Nt=Zu,Ot=ng,Rt=ig,jo=lt,En=Io,Sr="[object Map]",sg="[object Object]",$r="[object Promise]",Pr="[object Set]",Ir="[object WeakMap]",Tr="[object DataView]",ag=En(It),fg=En(Tt),lg=En(Nt),cg=En(Ot),ug=En(Rt),mn=jo;(It&&mn(new It(new ArrayBuffer(1)))!=Tr||Tt&&mn(new Tt)!=Sr||Nt&&mn(Nt.resolve())!=$r||Ot&&mn(new Ot)!=Pr||Rt&&mn(new Rt)!=Ir)&&(mn=function(e){var n=jo(e),t=n==sg?e.constructor:void 0,r=t?En(t):"";if(r)switch(r){case ag:return Tr;case fg:return Sr;case lg:return $r;case cg:return Pr;case ug:return Ir}return n});var Yt=mn,gg=ko,pg=gg(Object.getPrototypeOf,Object),Do=pg;function dg(e,n){for(var t=-1,r=e==null?0:e.length;++t<r&&n(e[t],t,e)!==!1;);return e}var mg=dg,vg=vn,bg=function(){try{var e=vg(Object,"defineProperty");return e({},"",{}),e}catch{}}(),xg=bg,Nr=xg;function hg(e,n,t){n=="__proto__"&&Nr?Nr(e,n,{configurable:!0,enumerable:!0,value:t,writable:!0}):e[n]=t}var zo=hg,_g=zo,wg=$o,yg=Object.prototype,Cg=yg.hasOwnProperty;function Sg(e,n,t){var r=e[n];(!(Cg.call(e,n)&&wg(r,t))||t===void 0&&!(n in e))&&_g(e,n,t)}var Ko=Sg,$g=Ko,Pg=zo;function Ig(e,n,t,r){var o=!t;t||(t={});for(var i=-1,s=n.length;++i<s;){var f=n[i],l=r?r(t[f],e[f],f,t,e):void 0;l===void 0&&(l=e[f]),o?Pg(t,f,l):$g(t,f,l)}return t}var bt=Ig,Tg=bt,Ng=qt;function Og(e,n){return e&&Tg(n,Ng(n),e)}var Rg=Og;function Eg(e){var n=[];if(e!=null)for(var t in Object(e))n.push(t);return n}var Mg=Eg,kg=Vn,Ag=Ht,jg=Mg,Dg=Object.prototype,zg=Dg.hasOwnProperty;function Kg(e){if(!kg(e))return jg(e);var n=Ag(e),t=[];for(var r in e)r=="constructor"&&(n||!zg.call(e,r))||t.push(r);return t}var Lg=Kg,Fg=Mo,Bg=Lg,Vg=Ao;function Ug(e){return Vg(e)?Fg(e,!0):Bg(e)}var Xt=Ug,Wg=bt,Gg=Xt;function Hg(e,n){return e&&Wg(n,Gg(n),e)}var qg=Hg,Et={exports:{}};(function(e,n){var t=tn,r=n&&!n.nodeType&&n,o=r&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===r,s=i?t.Buffer:void 0,f=s?s.allocUnsafe:void 0;function l(c,g){if(g)return c.slice();var u=c.length,d=f?f(u):new c.constructor(u);return c.copy(d),d}e.exports=l})(Et,Et.exports);function Yg(e,n){var t=-1,r=e.length;for(n||(n=Array(r));++t<r;)n[t]=e[t];return n}var Xg=Yg,Zg=bt,Jg=Wt;function Qg(e,n){return Zg(e,Jg(e),n)}var ep=Qg,np=To,tp=Do,rp=Wt,op=Oo,ip=Object.getOwnPropertySymbols,sp=ip?function(e){for(var n=[];e;)np(n,rp(e)),e=tp(e);return n}:op,Lo=sp,ap=bt,fp=Lo;function lp(e,n){return ap(e,fp(e),n)}var cp=lp,up=No,gp=Lo,pp=Xt;function dp(e){return up(e,pp,gp)}var mp=dp,vp=Object.prototype,bp=vp.hasOwnProperty;function xp(e){var n=e.length,t=new e.constructor(n);return n&&typeof e[0]=="string"&&bp.call(e,"index")&&(t.index=e.index,t.input=e.input),t}var hp=xp,Or=Jl;function _p(e){var n=new e.constructor(e.byteLength);return new Or(n).set(new Or(e)),n}var Zt=_p,wp=Zt;function yp(e,n){var t=n?wp(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.byteLength)}var Cp=yp,Sp=/\w*$/;function $p(e){var n=new e.constructor(e.source,Sp.exec(e));return n.lastIndex=e.lastIndex,n}var Pp=$p,Rr=xi,Er=Rr?Rr.prototype:void 0,Mr=Er?Er.valueOf:void 0;function Ip(e){return Mr?Object(Mr.call(e)):{}}var Tp=Ip,Np=Zt;function Op(e,n){var t=n?Np(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}var Rp=Op,Ep=Zt,Mp=Cp,kp=Pp,Ap=Tp,jp=Rp,Dp="[object Boolean]",zp="[object Date]",Kp="[object Map]",Lp="[object Number]",Fp="[object RegExp]",Bp="[object Set]",Vp="[object String]",Up="[object Symbol]",Wp="[object ArrayBuffer]",Gp="[object DataView]",Hp="[object Float32Array]",qp="[object Float64Array]",Yp="[object Int8Array]",Xp="[object Int16Array]",Zp="[object Int32Array]",Jp="[object Uint8Array]",Qp="[object Uint8ClampedArray]",ed="[object Uint16Array]",nd="[object Uint32Array]";function td(e,n,t){var r=e.constructor;switch(n){case Wp:return Ep(e);case Dp:case zp:return new r(+e);case Gp:return Mp(e,t);case Hp:case qp:case Yp:case Xp:case Zp:case Jp:case Qp:case ed:case nd:return jp(e,t);case Kp:return new r;case Lp:case Vp:return new r(e);case Fp:return kp(e);case Bp:return new r;case Up:return Ap(e)}}var rd=td,od=Vn,kr=Object.create,id=function(){function e(){}return function(n){if(!od(n))return{};if(kr)return kr(n);e.prototype=n;var t=new e;return e.prototype=void 0,t}}(),sd=id,ad=sd,fd=Do,ld=Ht;function cd(e){return typeof e.constructor=="function"&&!ld(e)?ad(fd(e)):{}}var ud=cd,gd=Yt,pd=Un,dd="[object Map]";function md(e){return pd(e)&&gd(e)==dd}var vd=md,bd=vd,xd=Gt,Ar=Bn.exports,jr=Ar&&Ar.isMap,hd=jr?xd(jr):bd,_d=hd,wd=Yt,yd=Un,Cd="[object Set]";function Sd(e){return yd(e)&&wd(e)==Cd}var $d=Sd,Pd=$d,Id=Gt,Dr=Bn.exports,zr=Dr&&Dr.isSet,Td=zr?Id(zr):Pd,Nd=Td,Od=Yl,Rd=mg,Ed=Ko,Md=Rg,kd=qg,Ad=Et.exports,jd=Xg,Dd=ep,zd=cp,Kd=Vu,Ld=mp,Fd=Yt,Bd=hp,Vd=rd,Ud=ud,Wd=Dt,Gd=st.exports,Hd=_d,qd=Vn,Yd=Nd,Xd=qt,Zd=Xt,Jd=1,Qd=2,em=4,Fo="[object Arguments]",nm="[object Array]",tm="[object Boolean]",rm="[object Date]",om="[object Error]",Bo="[object Function]",im="[object GeneratorFunction]",sm="[object Map]",am="[object Number]",Vo="[object Object]",fm="[object RegExp]",lm="[object Set]",cm="[object String]",um="[object Symbol]",gm="[object WeakMap]",pm="[object ArrayBuffer]",dm="[object DataView]",mm="[object Float32Array]",vm="[object Float64Array]",bm="[object Int8Array]",xm="[object Int16Array]",hm="[object Int32Array]",_m="[object Uint8Array]",wm="[object Uint8ClampedArray]",ym="[object Uint16Array]",Cm="[object Uint32Array]",ee={};ee[Fo]=ee[nm]=ee[pm]=ee[dm]=ee[tm]=ee[rm]=ee[mm]=ee[vm]=ee[bm]=ee[xm]=ee[hm]=ee[sm]=ee[am]=ee[Vo]=ee[fm]=ee[lm]=ee[cm]=ee[um]=ee[_m]=ee[wm]=ee[ym]=ee[Cm]=!0;ee[om]=ee[Bo]=ee[gm]=!1;function tt(e,n,t,r,o,i){var s,f=n&Jd,l=n&Qd,c=n&em;if(t&&(s=o?t(e,r,o,i):t(e)),s!==void 0)return s;if(!qd(e))return e;var g=Wd(e);if(g){if(s=Bd(e),!f)return jd(e,s)}else{var u=Fd(e),d=u==Bo||u==im;if(Gd(e))return Ad(e,f);if(u==Vo||u==Fo||d&&!o){if(s=l||d?{}:Ud(e),!f)return l?zd(e,kd(s,e)):Dd(e,Md(s,e))}else{if(!ee[u])return o?e:{};s=Vd(e,u,f)}}i||(i=new Od);var v=i.get(e);if(v)return v;i.set(e,s),Yd(e)?e.forEach(function(x){s.add(tt(x,n,t,x,e,i))}):Hd(e)&&e.forEach(function(x,h){s.set(h,tt(x,n,t,h,e,i))});var m=c?l?Ld:Kd:l?Zd:Xd,_=g?void 0:m(e);return Rd(_||e,function(x,h){_&&(h=x,x=e[h]),Ed(s,h,tt(x,n,t,h,e,i))}),s}var Sm=tt,$m=Sm,Pm=1,Im=4;function Tm(e){return $m(e,Pm|Im)}var Kr=Tm,Nm=({className:e="",...n})=>$n.createElement(Ci,{className:e,component:Ni,...n}),Gm=Nm,Hm=()=>{let[e,n]=a.exports.useState(hi()),{setPaymentPassword:t,userInfo:r,modalOptions:o,showAccountTipModal:i}=Zr();return a.exports.useEffect(()=>{var s;n(Boolean((s=r?.security_account)==null?void 0:s.has_set_payment_password))},[r]),{hasSetPaymentPassword:e,setPaymentPassword:t,showSetPaymentPasswordOrConfirm:s=>{var f,l,c,g;e?s():((f=o.promptSettingConfig)==null?void 0:f.promptPaymentPasswordSettingWhenSign)===2||((l=o.promptSettingConfig)==null?void 0:l.promptPaymentPasswordSettingWhenSign)===3?i({visible:!0,confirm:s}):(((c=o.promptSettingConfig)==null?void 0:c.promptPaymentPasswordSettingWhenSign)||_i((g=o.promptSettingConfig)==null?void 0:g.promptPaymentPasswordSettingWhenSign))&&!wi(nr.PN_OPEN_SET_PAYMENT_PASSWORD)?(yi(nr.PN_OPEN_SET_PAYMENT_PASSWORD,"1"),i({visible:!0,confirm:s})):s()}}},qm=`.info-sign {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 290px;
  height: 100%;
}
.info-sign .pending-warning-modal {
  top: 100px;
  display: block;
  margin: auto;
}
.info-sign .pending-warning-modal .ant-modal-body {
  padding: 18px;
}
.info-sign .pending-warning-modal .ant-modal-confirm-btns {
  display: none;
}
.info-sign .pending-warning-modal .content {
  margin-top: 26px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .pending-warning-modal .anticon-exclamation-circle {
  display: none;
}
.info-sign .pending-warning-modal .anticon-close {
  color: var(--secondary-text-color);
}
.info-sign .pending-warning-modal .footer-btns {
  column-gap: 18px;
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
}
.info-sign .pending-warning-modal .footer-btns .ant-btn {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 47px;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: var(--background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:first-child {
  color: var(--secondary-btn-color);
  background-color: var(--secondary-btn-background-color);
}
.info-sign .pending-warning-modal .footer-btns .ant-btn:hover,
.info-sign .pending-warning-modal .footer-btns .ant-btn:focus,
.info-sign .pending-warning-modal .footer-btns .ant-btn:active {
  color: var(--primary-btn-color);
  background-color: var(--primary-btn-background-color);
}
.info-sign .continue-btn:hover {
  color: var(--secondary-btn-color) !important;
  background-color: var(--secondary-btn-background-color) !important;
}
.info-sign .has-payment-password {
  z-index: 100;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: var(--set-payment-password-bar-height);
  padding: 0 16px;
  padding-right: 52px;
  background-color: var(--tips-background-color);
  opacity: 1;
}
.info-sign .has-payment-password .has-payment-password-icon {
  width: 18px;
  height: 18px;
  border: 1px solid #f7af5d;
  border-radius: 50%;
  overflow: hidden;
  background-image: var(--icon-warning);
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-color: white;
}
.info-sign .has-payment-password .has-payment-password-tip {
  flex: 1;
  margin: 0 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  color: var(--text-color);
}
@media screen and (max-width: 350px) {
  .info-sign .has-payment-password .has-payment-password-tip {
    letter-spacing: -1px;
  }
}
.info-sign .has-payment-password .has-payment-password-set {
  min-width: 44px;
  height: 22px;
  padding: 0 8px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  cursor: pointer;
}
.info-sign .has-payment-password .has-payment-password-set:hover {
  opacity: var(--hover-opacity);
}
@media (max-width: 600px) {
  .info-sign .has-payment-password {
    padding-right: 16px;
    margin-top: 15px;
  }
}
.info-sign .ant-tabs {
  width: calc(100% - 36px);
  min-width: 230px;
}
.info-sign .ant-tabs-nav .ant-tabs-tab {
  padding-bottom: 4px;
  color: var(--secondary-text-color);
}
.info-sign .ant-tabs-nav .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
  color: var(--text-color);
}
.info-sign .ant-tabs-nav::before {
  display: none;
}
.info-sign .ant-tabs-nav .ant-tabs-nav-wrap .ant-tabs-ink-bar {
  background: var(--text-color);
}
.info-sign .scroll-part {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 10px;
  margin: 0;
  overflow: auto;
}
.info-sign .scroll-part .top-menu-list {
  position: absolute;
  z-index: 99;
  top: 12px;
  left: 15px;
  column-gap: 5px;
  display: flex;
  justify-content: flex-start;
}
.info-sign .scroll-part .top-menu-list .item {
  cursor: pointer;
}
.info-sign .scroll-part .top-menu-list .item .anticon {
  font-size: 26px;
}
.info-sign .scroll-part .top-menu-list .item .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-entry {
  position: absolute;
  z-index: 99;
  top: 16px;
  left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .menu-icon {
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .wallet-entry {
  margin-left: 8px;
  font-size: 28px;
}
.info-sign .scroll-part .menu-entry .ant-popover {
  padding: 0;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-arrow {
  display: none;
}
.info-sign .scroll-part .menu-entry .ant-popover .ant-popover-inner {
  border-radius: var(--primary-btn-border-radius);
  background: var(--modal-background-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list {
  display: flex;
  flex-direction: column;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item {
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 2;
  white-space: nowrap;
  cursor: pointer;
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge {
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .menu-entry .ant-popover .menu-list .item .ant-badge .ant-badge-dot {
  top: -1px;
  right: -4px;
}
.info-sign .scroll-part .menu-entry .ant-badge {
  column-gap: 8px;
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .menu-entry .ant-badge .ant-badge-dot {
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border: none;
  box-shadow: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content {
  padding: 0;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list {
  padding-top: 6px;
  padding-bottom: 6px;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item {
  height: 45px;
  padding: 0 17px;
  border-bottom: 1px solid var(--keyword-border-color);
  font-weight: 500;
  font-size: 14px;
  line-height: 45px;
  color: #000;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item:last-child {
  border-bottom: none;
}
.info-sign .scroll-part .menu-popover-overlay .ant-popover-inner-content .menu-list .item .anticon {
  font-size: 26px;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title {
  height: 19px;
  padding-top: 0;
  margin-top: 10px;
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .info-title img {
  width: 13px;
  height: 13px;
  margin-right: 4px;
  margin-bottom: 3px;
}
.info-sign .scroll-part .info-address {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  height: 23px;
  padding: 0 5px 0 8px;
  margin-top: 5px;
  border-radius: var(--primary-btn-border-radius);
  font-size: 12px;
  line-height: 23px;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .info-address .copy-icon {
  position: relative;
  width: 14px;
  height: 100%;
  margin-left: 5px;
}
.info-sign .scroll-part .info-address .copy-icon .anticon {
  position: absolute;
  top: 5px;
}
.info-sign .scroll-part .info-request {
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  max-height: 20px;
  padding-top: 0;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
  gap: 6px;
}
.info-sign .scroll-part .info-request .aa-icon {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image {
  width: 22px;
  height: 22px;
}
.info-sign .scroll-part .info-request .aa-icon .ant-image img {
  position: absolute;
  left: 0;
  top: 0;
}
.info-sign .scroll-part .info-request .aa-tag {
  padding: 0 4px;
  margin-right: 5px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 12px;
  color: var(--background-color);
  background-color: var(--text-color);
}
.info-sign .scroll-part .info-des {
  max-width: 300px;
  margin: 9px 0;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .apart-line {
  display: none;
  width: 100%;
  border-top: 1px solid var(--card-unclickable-border-color);
}
.info-sign .scroll-part .balance-change {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  border: 1px solid var(--card-unclickable-border-color);
  border-width: 1px;
  border-style: solid;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .balance-change .title {
  padding-bottom: 1px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-sign .scroll-part .balance-change .change-body .change-title {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .balance-change .change-body .change-title .change-val {
  font-weight: 500;
  font-size: 14px;
  color: var(--green-color);
}
.info-sign .scroll-part .balance-change .change-body .mt20 {
  margin-top: 20px;
}
.info-sign .scroll-part .balance-change .change-body .message-text {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--text-color);
}
.info-sign .scroll-part .from-to {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border: none;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .from-to .address-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-sign .scroll-part .from-to .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .no-gas-fee {
  width: 100%;
  min-width: 230px;
  padding: 20px 12px;
  margin-top: 15px;
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
  background: rgba(234, 67, 53, 0.09);
}
.info-sign .scroll-part .no-gas-fee img {
  width: 18.5px;
  height: 18.5px;
  margin-top: 3px;
  margin-right: 10px;
}
.info-sign .scroll-part .no-gas-fee .no-title {
  font-weight: 500;
}
.info-sign .scroll-part .no-gas-fee .no-warning {
  display: flex;
  padding-bottom: 9px;
  margin-top: 10px;
  border-bottom: 1px solid var(--card-divider-color);
  line-height: 15px;
}
.info-sign .scroll-part .no-gas-fee .data-title {
  margin-top: 15px;
  font-weight: bold;
}
.info-sign .scroll-part .no-gas-fee .data-item {
  margin-top: 10px;
  line-height: 14px;
}
.info-sign .scroll-part .net-fee {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
  cursor: pointer;
}
.info-sign .scroll-part .net-fee .title {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .title .fee-val {
  font-weight: 400;
  font-size: 16px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee {
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title {
  font-weight: 500;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-title span {
  font-weight: 500;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row img {
  width: 9.19px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .approximately {
  font-weight: 400;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-standard {
  width: 70px;
  margin-right: 10px;
  font-weight: normal;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-time {
  width: 70px;
  margin-right: 19.19px;
  font-weight: 500;
  color: var(--green-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right {
  display: flex;
  align-items: center;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .row-right .right-icon {
  width: 9.19px;
  margin-left: 15px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right {
  display: flex;
  text-align: right;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon {
  color: var(--text-color);
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .fee-right .arrow-right-icon svg {
  width: 13px;
  height: 13px;
}
.info-sign .scroll-part .net-fee .evm-fee .fee-row .right-time {
  margin-right: 55px;
  font-weight: bold;
  font-size: 12px;
  color: var(--green-color);
}
.info-sign .scroll-part .total {
  width: 100%;
  min-width: 230px;
  padding: 15px 12px;
  margin-top: 15px;
  border: 1px solid var(--card-unclickable-border-color);
  border-radius: var(--card-border-radius);
  font-weight: 400;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .total .total-title {
  font-weight: bold;
}
.info-sign .scroll-part .total .mt8 {
  margin-top: 8px;
}
.info-sign .scroll-part .total .total-content span {
  font-weight: 400;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .show-btn {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
}
.info-sign .scroll-part .program-details {
  margin-top: 30px;
  font-weight: 500;
  text-align: center;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction {
  width: 100%;
  min-width: 230px;
  margin-bottom: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item {
  margin-top: 0;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item {
  padding: 13px 11px;
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: var(--card-unclickable-border-color) !important;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color) !important;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-0 {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  word-break: break-all;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt10 {
  margin-top: 10px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .mt15 {
  margin-top: 15px;
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 span {
  max-width: 220px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .inner-instruction .inner-content .content-item .item .item-1 .data {
  max-width: calc(85 * var(--vw));
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: left;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message {
  width: calc(100% - 36px);
  min-width: 230px;
  padding: 0;
  margin-top: 18px;
  border: none;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign .scroll-part .sign-message .s-row {
  display: flex;
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  line-height: 1.3;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row[data-index='0'] ::after {
  display: none;
}
.info-sign .scroll-part .sign-message .s-row [data-type='title'],
.info-sign .scroll-part .sign-message .s-row [data-type='index'],
.info-sign .scroll-part .sign-message .s-row .label[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .title[data-type='title'],
.info-sign .scroll-part .sign-message .s-row .value[data-type='index'] {
  position: relative;
  font-weight: bold;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign .scroll-part .sign-message .s-row .label {
  font-weight: 400;
  font-size: 14px;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .s-row .value {
  flex: 1;
  overflow: hidden;
  font-weight: 400;
  font-size: 14px;
  word-break: break-all;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message {
  position: relative;
  max-height: calc(var(--doc-height) - 300px);
  padding: 8px 12px;
  overflow: auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  word-wrap: break-word;
  color: var(--secondary-text-color);
}
.info-sign .scroll-part .sign-message .message .personal-message {
  position: relative;
}
.info-sign .scroll-part .sign-message .message pre {
  padding-bottom: 2px;
}
.info-sign .scroll-part .sign-message .message.no-password-tip {
  max-height: calc(var(--doc-height) - 300px - var(--set-payment-password-bar-height) - var(--risk-bar-height)) !important;
}
.info-sign .btn-box {
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 290px;
  height: var(--sign-bottom-menu-height);
  background: var(--theme-background-color);
  box-shadow: 0 -2px 3px 1px rgba(0, 0, 0, 0.08);
}
.info-sign .btn-box > div {
  display: flex;
  width: calc(100% - 36px);
  gap: 18px;
}
.info-sign .btn-box .footer-box {
  margin-top: 10px;
}
.info-sign .btn-box .btn-cancel {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 17px;
  text-align: center;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.info-sign .btn-box .btn-cancel:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-cancel span {
  font-weight: 500;
}
.info-sign .btn-box .btn-approve {
  flex: 1;
  max-width: calc(300 * var(--vw));
  height: 47px;
  padding: 0;
  margin-top: 10px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.info-sign .btn-box .btn-approve:hover {
  opacity: var(--hover-opacity);
}
.info-sign .btn-box .btn-approve img {
  width: 12.75px;
  height: 18.29px;
  margin-right: 12px;
}
.info-sign.info-sign-erc20_transfer .fee-row,
.info-sign.info-sign-erc1155_transfer .fee-row,
.info-sign.info-sign-erc20_approve .fee-row,
.info-sign.info-sign-native_transfer .fee-row,
.info-sign.info-sign-erc721_transfer .fee-row,
.info-sign.info-sign-seaport_cancel_order .fee-row,
.info-sign.info-sign-seaport_nft_listing .fee-row,
.info-sign.info-sign-seaport_fulfill_order .fee-row {
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row {
  flex-wrap: wrap;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .left,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .left,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .left {
  margin-bottom: 10px;
  font-weight: 500;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .right,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .right,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .right {
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning {
  display: flex;
  align-items: center;
  line-height: 1.3;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning span,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning span {
  line-height: 1.4;
}
.info-sign.info-sign-erc20_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc1155_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc20_approve .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-native_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-erc721_transfer .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_cancel_order .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_nft_listing .item4 .flex-sp-row .gas-warning img,
.info-sign.info-sign-seaport_fulfill_order .item4 .flex-sp-row .gas-warning img {
  flex: 1;
  align-self: flex-start;
  width: 19px;
  height: 19px;
  margin-top: 4px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .info-request,
.info-sign.info-sign-erc1155_transfer .info-request,
.info-sign.info-sign-erc20_approve .info-request,
.info-sign.info-sign-native_transfer .info-request,
.info-sign.info-sign-erc721_transfer .info-request,
.info-sign.info-sign-seaport_cancel_order .info-request,
.info-sign.info-sign-seaport_nft_listing .info-request,
.info-sign.info-sign-seaport_fulfill_order .info-request {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-title,
.info-sign.info-sign-erc1155_transfer .info-title,
.info-sign.info-sign-erc20_approve .info-title,
.info-sign.info-sign-native_transfer .info-title,
.info-sign.info-sign-erc721_transfer .info-title,
.info-sign.info-sign-seaport_cancel_order .info-title,
.info-sign.info-sign-seaport_nft_listing .info-title,
.info-sign.info-sign-seaport_fulfill_order .info-title {
  height: 20px;
  max-height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
}
.info-sign.info-sign-erc20_transfer .apart-line,
.info-sign.info-sign-erc1155_transfer .apart-line,
.info-sign.info-sign-erc20_approve .apart-line,
.info-sign.info-sign-native_transfer .apart-line,
.info-sign.info-sign-erc721_transfer .apart-line,
.info-sign.info-sign-seaport_cancel_order .apart-line,
.info-sign.info-sign-seaport_nft_listing .apart-line,
.info-sign.info-sign-seaport_fulfill_order .apart-line {
  display: none;
}
.info-sign.info-sign-erc20_transfer .info-address,
.info-sign.info-sign-erc1155_transfer .info-address,
.info-sign.info-sign-erc20_approve .info-address,
.info-sign.info-sign-native_transfer .info-address,
.info-sign.info-sign-erc721_transfer .info-address,
.info-sign.info-sign-seaport_cancel_order .info-address,
.info-sign.info-sign-seaport_nft_listing .info-address,
.info-sign.info-sign-seaport_fulfill_order .info-address {
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-sign.info-sign-erc20_transfer .info-des,
.info-sign.info-sign-erc1155_transfer .info-des,
.info-sign.info-sign-erc20_approve .info-des,
.info-sign.info-sign-native_transfer .info-des,
.info-sign.info-sign-erc721_transfer .info-des,
.info-sign.info-sign-seaport_cancel_order .info-des,
.info-sign.info-sign-seaport_nft_listing .info-des,
.info-sign.info-sign-seaport_fulfill_order .info-des {
  display: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content,
.info-sign.info-sign-erc1155_transfer .transfer-content,
.info-sign.info-sign-erc20_approve .transfer-content,
.info-sign.info-sign-native_transfer .transfer-content,
.info-sign.info-sign-erc721_transfer .transfer-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content {
  width: calc(100% - 36px);
  min-width: 230px;
  margin: auto;
  margin-top: 18px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc1155_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc20_approve .transfer-content .mg-bottom-15,
.info-sign.info-sign-native_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-erc721_transfer .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_cancel_order .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_nft_listing .transfer-content .mg-bottom-15,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .mg-bottom-15 {
  margin-bottom: 15px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .flex-sp-row {
  display: flex;
  justify-content: space-between;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box,
.info-sign.info-sign-erc20_approve .transfer-content .less-box,
.info-sign.info-sign-native_transfer .transfer-content .less-box,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box {
  padding: 13px;
  padding-bottom: 3px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .pn-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .pn-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .pn-row {
  width: 100%;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item {
  padding-top: 14px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--card-divider-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item:last-child,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item:last-child {
  border-bottom: none;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .left {
  font-weight: 800;
  font-size: 18px;
  line-height: 19px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row1 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row1 .right {
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .token-icon {
  width: 32px;
  min-width: 32px;
  height: 32px;
  margin-right: 6px;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac1 .amount {
  line-height: 1.2;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: var(--accent-color);
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac2 .icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row-erc20-approve-content .row-ac3 {
  margin-top: 14px;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.4;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 {
  align-items: flex-start;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left {
  display: flex;
  align-items: center;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon {
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 100%;
  overflow: hidden;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .left .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  object-fit: cover;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: var(--secondary-text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount {
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .change-val {
  margin-right: 4px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount .symbol {
  position: relative;
  margin-left: 2px;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  white-space: nowrap;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row2 .right .amount-usd {
  height: 32px;
  line-height: 32px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 {
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left {
  width: 32px;
  height: 32px;
  margin-right: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .left img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right {
  display: -webkit-box;
  flex: 1;
  overflow: hidden;
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-overflow: ellipsis;
  color: var(--text-color);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row3 .right .name,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row3 .right .name {
  line-height: 1.2;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row4,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row4 {
  margin-top: 10px;
  font-weight: 500;
  font-size: 14px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row5 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item1 .row6,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item1 .row6 {
  margin-top: 4px;
  font-weight: 500;
  font-size: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2-0,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2-0 {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 {
  padding-top: 24px;
  padding-bottom: 22px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .flex-sp-row,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .flex-sp-row {
  height: 44px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row1,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row1,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row1 {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .left .pn-row2,
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right .pn-row2 {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .right,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .right {
  text-align: right;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .pn-row2,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .pn-row2 {
  margin-top: 10px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle {
  position: relative;
  width: 34px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item2 .middle .icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item2 .middle .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 13px;
  transform: translate(-50%, -50%);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 {
  font-weight: 500;
  font-size: 14px;
  line-height: 30px;
  color: var(--text-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub {
  position: relative;
  padding-left: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc1155_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc20_approve .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-native_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-erc721_transfer .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_cancel_order .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_nft_listing .transfer-content .less-box .groups > .item.item5 .price-sub::before,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .less-box .groups > .item.item5 .price-sub::before {
  position: absolute;
  top: 50%;
  left: 4px;
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background: var(--accent-color);
  transform: translateY(-50%);
  content: '';
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content,
.info-sign.info-sign-native_transfer .transfer-content .fold-content,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin-top: 20px;
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 13px;
  line-height: 30px;
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content img,
.info-sign.info-sign-native_transfer .transfer-content .fold-content img,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content img,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content img,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content img,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content img {
  width: 10px;
  height: 6px;
  margin-left: 5px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .wrap > div,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .wrap > div {
  display: flex;
  align-items: center;
  gap: 6px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon {
  color: var(--accent-color);
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .arrow-icon svg,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .arrow-icon svg {
  width: 11px;
  height: 11px;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .fold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .fold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .fold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold {
  cursor: pointer;
}
.info-sign.info-sign-erc20_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc1155_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc20_approve .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-native_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-erc721_transfer .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_cancel_order .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_nft_listing .transfer-content .fold-content .unfold .arrow-icon,
.info-sign.info-sign-seaport_fulfill_order .transfer-content .fold-content .unfold .arrow-icon {
  transform: rotate(180deg);
}
.edit-approve-amount-modal .ant-modal-content {
  overflow: hidden;
  background-color: var(--modal-background-color) !important;
}
.edit-approve-amount-modal .ant-modal-header {
  border: none;
}
.edit-approve-amount-modal .ant-modal-header .ant-modal-title {
  text-align: center;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-body {
  padding-bottom: 16px;
}
.edit-approve-amount-modal .ant-form {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.edit-approve-amount-modal .ant-form .ant-row {
  flex: 1;
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input {
  height: 40px;
  border: 1px solid var(--input-border-color);
  color: var(--text-color);
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input,
.edit-approve-amount-modal .ant-form .ant-form-item-control-input-content .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input:hover {
  background: var(--input-background-color-3);
}
.edit-approve-amount-modal .ant-form .icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  margin: 0 8px;
  margin-top: 5px;
}
.edit-approve-amount-modal .ant-form .icon img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  overflow: hidden;
  object-fit: cover;
}
.edit-approve-amount-modal .ant-form .symbol {
  font-weight: 500;
  font-size: 14px;
  line-height: 40px;
  color: var(--text-color);
}
.edit-approve-amount-modal .ant-modal-footer {
  display: flex !important;
  justify-content: center;
  padding-bottom: 30px;
  border: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-default {
  display: none;
}
.edit-approve-amount-modal .ant-modal-footer .ant-btn-primary {
  width: 100%;
  max-width: 300px;
  height: 47px;
  margin-left: 0;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
`,Om=e=>{var n;let{userInfo:t}=e,r=Si(),{modalOptions:o}=Zr(),i=a.exports.useMemo(()=>{let c=`${o.appId}_${t?.uuid}`;return`account_security_${$i(c)}`},[o.appId,t?.uuid]),[s,f]=a.exports.useState({account:{name:"Account & Security",display:!0,badge:!1}});a.exports.useEffect(()=>{if(t?.security_account&&!!i&&!localStorage.getItem(i)){let{has_set_master_password:c,has_set_payment_password:g}=t?.security_account||{};!c||!g?s.account.badge=!0:s.account.badge=!1}else s.account.badge=!1;f(Kr(s))},[t?.security_account,i]);let l=$n.createElement("div",{className:"item",onClick:()=>{s.account.badge=!1,f(Kr(s)),r("/account/security"),localStorage.setItem(i,"true")}},$n.createElement(rs,{dot:!!s.account.badge},$n.createElement(Oi,{className:"wallet-icon",name:"security_icon"})));return $n.createElement("div",{className:"top-menu-list"},!!((n=s?.account)!=null&&n.display)&&l)},Ym=Om,xt={};function Mt(e){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Mt(e)}Object.defineProperty(xt,"__esModule",{value:!0});xt.CopyToClipboard=void 0;var Jn=Uo(a.exports),Rm=Uo(Ri),Em=["text","onCopy","options","children"];function Uo(e){return e&&e.__esModule?e:{default:e}}function Lr(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),t.push.apply(t,r)}return t}function Fr(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?Lr(Object(t),!0).forEach(function(r){Jt(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Lr(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function Mm(e,n){if(e==null)return{};var t=km(e,n),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(t[r]=e[r]))}return t}function km(e,n){if(e==null)return{};var t={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(n.indexOf(o)>=0)&&(t[o]=e[o]);return t}function Am(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function Br(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function jm(e,n,t){return n&&Br(e.prototype,n),t&&Br(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Dm(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&kt(e,n)}function kt(e,n){return kt=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},kt(e,n)}function zm(e){var n=Lm();return function(){var r=at(e),o;if(n){var i=at(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return Km(this,o)}}function Km(e,n){if(n&&(Mt(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Wo(e)}function Wo(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Lm(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function at(e){return at=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},at(e)}function Jt(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var Go=function(e){Dm(t,e);var n=zm(t);function t(){var r;Am(this,t);for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];return r=n.call.apply(n,[this].concat(i)),Jt(Wo(r),"onClick",function(f){var l=r.props,c=l.text,g=l.onCopy,u=l.children,d=l.options,v=Jn.default.Children.only(u),m=(0,Rm.default)(c,d);g&&g(c,m),v&&v.props&&typeof v.props.onClick=="function"&&v.props.onClick(f)}),r}return jm(t,[{key:"render",value:function(){var o=this.props;o.text,o.onCopy,o.options;var i=o.children,s=Mm(o,Em),f=Jn.default.Children.only(i);return Jn.default.cloneElement(f,Fr(Fr({},s),{},{onClick:this.onClick}))}}]),t}(Jn.default.PureComponent);xt.CopyToClipboard=Go;Jt(Go,"defaultProps",{onCopy:void 0,options:void 0});var Fm=xt,At=Fm.CopyToClipboard;At.CopyToClipboard=At;var Xm=At;export{Gm as D,qm as L,wa as T,Hm as V,Xm as l,Ym as n};
