import{r as je,t as vt,g as qe}from"./unicode.f652bd91.js";import{z as ht,u as bt,j as ze}from"./chunk-GVI7HDAH.a5d67801.js";import{w as gt}from"./chunk-WN72JIRK.a98c42cd.js";import{x as xt}from"./chunk-4SMRMVPX.9956fd00.js";import{N as yt}from"./chunk-AMOVWUCP.62a50458.js";import{bB as Je,bA as Qe,a2 as u,aK as K,aL as N,aI as xe,aC as k,cb as wt,aO as Le,aG as Nt,aH as oe,aF as Ze,bH as Ie,b9 as St,aP as he,aS as Et,b0 as It,br as kt,b8 as Ct,b1 as _t,bn as He,bw as Ue,bx as Ke,dn as Re,b_ as Dt,dp as Rt,a0 as Ft,bO as Vt,a1 as Mt,aj as $t,aa as be,al as et,a3 as d,ac as Tt,ai as At,dq as Bt,bX as ke,ak as We}from"./index.fbf0f355.js";import{u as Ot}from"./useRequest.5a6d3e71.js";import{u as tt}from"./useTranslation.88a96d8a.js";import{F as W,v as _e}from"./index.338a4e26.js";import{c as nt}from"./DownOutlined.38f2da23.js";import{H as Pt}from"./UpOutlined.f1203c91.js";import{c as jt}from"./colors.5dd5d985.js";import{g as Ce,c as qt}from"./TextArea.4a47a176.js";import"./chunk-IKGID5DT.12097f68.js";import"./chunk-QNAXMJIS.3ce008d2.js";import"./throttle.73ef307f.js";import"./index.9705f4c9.js";function De(){return typeof BigInt=="function"}function G(e){var n=e.trim(),t=n.startsWith("-");t&&(n=n.slice(1)),n=n.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),n.startsWith(".")&&(n="0".concat(n));var i=n||"0",r=i.split("."),o=r[0]||"0",b=r[1]||"0";o==="0"&&b==="0"&&(t=!1);var l=t?"-":"";return{negative:t,negativeStr:l,trimStr:i,integerStr:o,decimalStr:b,fullStr:"".concat(l).concat(i)}}function Fe(e){var n=String(e);return!Number.isNaN(Number(n))&&n.includes("e")}function ue(e){var n=String(e);if(Fe(e)){var t=Number(n.slice(n.indexOf("e-")+2)),i=n.match(/\.(\d+)/);return i?.[1]&&(t+=i[1].length),t}return n.includes(".")&&Ve(n)?n.length-n.indexOf(".")-1:0}function ye(e){var n=String(e);if(Fe(e)){if(e>Number.MAX_SAFE_INTEGER)return String(De()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(De()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);n=e.toFixed(ue(n))}return G(n).fullStr}function Ve(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}function Ge(e){var n=typeof e=="number"?ye(e):G(e).fullStr,t=n.includes(".");return t?G(n.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}var zt=function(){function e(n){if(Qe(this,e),this.origin="",this.number=void 0,this.empty=void 0,!n&&n!==0||!String(n).trim()){this.empty=!0;return}this.origin=String(n),this.number=Number(n)}return Je(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var i=Number(t);if(Number.isNaN(i))return this;var r=this.number+i;if(r>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(r<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(ue(this.number),ue(i));return new e(r.toFixed(o))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===t?.toNumber()}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":ye(this.number):this.origin}}]),e}(),Lt=function(){function e(n){if(Qe(this,e),this.origin="",this.negative=void 0,this.integer=void 0,this.decimal=void 0,this.decimalLen=void 0,this.empty=void 0,this.nan=void 0,!n&&n!==0||!String(n).trim()){this.empty=!0;return}if(this.origin=String(n),n==="-"){this.nan=!0;return}var t=n;if(Fe(t)&&(t=Number(t)),t=typeof t=="string"?t:ye(t),Ve(t)){var i=G(t);this.negative=i.negative;var r=i.trimStr.split(".");this.integer=BigInt(r[0]);var o=r[1]||"0";this.decimal=BigInt(o),this.decimalLen=o.length}else this.nan=!0}return Je(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var i="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(i)}},{key:"negate",value:function(){var t=new e(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new e(t);var i=new e(t);if(i.isInvalidate())return this;var r=Math.max(this.getDecimalStr().length,i.getDecimalStr().length),o=this.alignDecimal(r),b=i.alignDecimal(r),l=(o+b).toString(),h=G(l),w=h.negativeStr,p=h.trimStr,g="".concat(w).concat(p.padStart(r+1,"0"));return new e("".concat(g.slice(0,-r),".").concat(g.slice(-r)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===t?.toString()}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":G("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}();function T(e){return De()?new Lt(e):new zt(e)}function ge(e,n,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var r=G(e),o=r.negativeStr,b=r.integerStr,l=r.decimalStr,h="".concat(n).concat(l),w="".concat(o).concat(b);if(t>=0){var p=Number(l[t]);if(p>=5&&!i){var g=T(e).add("".concat(o,"0.").concat("0".repeat(t)).concat(10-p));return ge(g.toString(),n,t,i)}return t===0?w:"".concat(w).concat(n).concat(l.padEnd(t,"0").slice(0,t))}return h===".0"?w:"".concat(w).concat(h)}var Ht=200,Ut=600;function Kt(e){var n=e.prefixCls,t=e.upNode,i=e.downNode,r=e.upDisabled,o=e.downDisabled,b=e.onStep,l=u.exports.useRef(),h=u.exports.useRef();h.current=b;var w=function(_,E){_.preventDefault(),h.current(E);function I(){h.current(E),l.current=setTimeout(I,Ht)}l.current=setTimeout(I,Ut)},p=function(){clearTimeout(l.current)};if(u.exports.useEffect(function(){return p},[]),jt())return null;var g="".concat(n,"-handler"),S=K(g,"".concat(g,"-up"),N({},"".concat(g,"-up-disabled"),r)),C=K(g,"".concat(g,"-down"),N({},"".concat(g,"-down-disabled"),o)),a={unselectable:"on",role:"button",onMouseUp:p,onMouseLeave:p};return xe("div",{className:"".concat(g,"-wrap"),children:[k("span",{...a,onMouseDown:function(_){w(_,!0)},"aria-label":"Increase Value","aria-disabled":r,className:S,children:t||k("span",{unselectable:"on",className:"".concat(n,"-handler-up-inner")})}),k("span",{...a,onMouseDown:function(_){w(_,!1)},"aria-label":"Decrease Value","aria-disabled":o,className:C,children:i||k("span",{unselectable:"on",className:"".concat(n,"-handler-down-inner")})})]})}function Wt(e,n){var t=u.exports.useRef(null);function i(){try{var o=e.selectionStart,b=e.selectionEnd,l=e.value,h=l.substring(0,o),w=l.substring(b);t.current={start:o,end:b,value:l,beforeTxt:h,afterTxt:w}}catch{}}function r(){if(e&&t.current&&n)try{var o=e.value,b=t.current,l=b.beforeTxt,h=b.afterTxt,w=b.start,p=o.length;if(o.endsWith(h))p=o.length-t.current.afterTxt.length;else if(o.startsWith(l))p=l.length;else{var g=l[w-1],S=o.indexOf(g,w-1);S!==-1&&(p=S+1)}e.setSelectionRange(p,p)}catch(C){wt(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(C.message))}}return[i,r]}const Gt=function(){var e=u.exports.useRef(0),n=function(){Le.cancel(e.current)};return u.exports.useEffect(function(){return n},[]),function(t){n(),e.current=Le(function(){t()})}};var Xt=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],Xe=function(n,t){return n||t.isEmpty()?t.toString():t.toNumber()},Ye=function(n){var t=T(n);return t.isInvalidate()?null:t},rt=u.exports.forwardRef(function(e,n){var t,i=e.prefixCls,r=i===void 0?"rc-input-number":i,o=e.className,b=e.style,l=e.min,h=e.max,w=e.step,p=w===void 0?1:w,g=e.defaultValue,S=e.value,C=e.disabled,a=e.readOnly,f=e.upHandler,_=e.downHandler,E=e.keyboard,I=e.controls,R=I===void 0?!0:I,V=e.stringMode,O=e.parser,D=e.formatter,$=e.precision,s=e.decimalSeparator,F=e.onChange,P=e.onInput,j=e.onPressEnter,H=e.onStep,ee=Nt(e,Xt),ce="".concat(r,"-input"),q=u.exports.useRef(null),X=u.exports.useState(!1),le=oe(X,2),se=le[0],pe=le[1],M=u.exports.useRef(!1),L=u.exports.useRef(!1),U=u.exports.useRef(!1),de=u.exports.useState(function(){return T(S??g)}),me=oe(de,2),x=me[0],fe=me[1];function te(m){S===void 0&&fe(m)}var Y=u.exports.useCallback(function(m,c){if(!c)return $>=0?$:Math.max(ue(m),ue(p))},[$,p]),J=u.exports.useCallback(function(m){var c=String(m);if(O)return O(c);var y=c;return s&&(y=y.replace(s,".")),y.replace(/[^\w.-]+/g,"")},[O,s]),ne=u.exports.useRef(""),ve=u.exports.useCallback(function(m,c){if(D)return D(m,{userTyping:c,input:String(ne.current)});var y=typeof m=="number"?ye(m):m;if(!c){var v=Y(y,c);if(Ve(y)&&(s||v>=0)){var B=s||".";y=ge(y,B,v)}}return y},[D,Y,s]),we=u.exports.useState(function(){var m=g??S;return x.isInvalidate()&&["string","number"].includes(Ze(m))?Number.isNaN(m)?"":m:ve(x.toString(),!1)}),re=oe(we,2),z=re[0],A=re[1];ne.current=z;function ae(m,c){A(ve(m.isInvalidate()?m.toString(!1):m.toString(!c),c))}var Q=u.exports.useMemo(function(){return Ye(h)},[h,$]),Z=u.exports.useMemo(function(){return Ye(l)},[l,$]),Me=u.exports.useMemo(function(){return!Q||!x||x.isInvalidate()?!1:Q.lessEquals(x)},[Q,x]),$e=u.exports.useMemo(function(){return!Z||!x||x.isInvalidate()?!1:x.lessEquals(Z)},[Z,x]),at=Wt(q.current,se),Te=oe(at,2),it=Te[0],ot=Te[1],Ae=function(c){return Q&&!c.lessEquals(Q)?Q:Z&&!Z.lessEquals(c)?Z:null},Ne=function(c){return!Ae(c)},Se=function(c,y){var v=c,B=Ne(v)||v.isEmpty();if(!v.isEmpty()&&!y&&(v=Ae(v)||v,B=!0),!a&&!C&&B){var ie=v.toString(),Ee=Y(ie,y);return Ee>=0&&(v=T(ge(ie,".",Ee)),Ne(v)||(v=T(ge(ie,".",Ee,!0)))),v.equals(x)||(te(v),F?.(v.isEmpty()?null:Xe(V,v)),S===void 0&&ae(v,y)),v}return x},ut=Gt(),Be=function m(c){if(it(),A(c),!L.current){var y=J(c),v=T(y);v.isNaN()||Se(v,!0)}P?.(c),ut(function(){var B=c;O||(B=c.replace(/。/g,".")),B!==c&&m(B)})},ct=function(){L.current=!0},lt=function(){L.current=!1,Be(q.current.value)},st=function(c){Be(c.target.value)},Oe=function(c){var y;if(!(c&&Me||!c&&$e)){M.current=!1;var v=T(U.current?Ge(p):p);c||(v=v.negate());var B=(x||T(0)).add(v.toString()),ie=Se(B,!1);H?.(Xe(V,ie),{offset:U.current?Ge(p):p,type:c?"up":"down"}),(y=q.current)===null||y===void 0||y.focus()}},Pe=function(c){var y=T(J(z)),v=y;y.isNaN()?v=x:v=Se(y,c),S!==void 0?ae(x,!1):v.isNaN()||ae(v,!1)},pt=function(){M.current=!0},dt=function(c){var y=c.which,v=c.shiftKey;M.current=!0,v?U.current=!0:U.current=!1,y===he.ENTER&&(L.current||(M.current=!1),Pe(!1),j?.(c)),E!==!1&&!L.current&&[he.UP,he.DOWN].includes(y)&&(Oe(he.UP===y),c.preventDefault())},mt=function(){M.current=!1,U.current=!1},ft=function(){Pe(!1),pe(!1),M.current=!1};return Ie(function(){x.isInvalidate()||ae(x,!1)},[$]),Ie(function(){var m=T(S);fe(m);var c=T(J(z));(!m.equals(c)||!M.current||D)&&ae(m,M.current)},[S]),Ie(function(){D&&ot()},[z]),xe("div",{className:K(r,o,(t={},N(t,"".concat(r,"-focused"),se),N(t,"".concat(r,"-disabled"),C),N(t,"".concat(r,"-readonly"),a),N(t,"".concat(r,"-not-a-number"),x.isNaN()),N(t,"".concat(r,"-out-of-range"),!x.isInvalidate()&&!Ne(x)),t)),style:b,onFocus:function(){pe(!0)},onBlur:ft,onKeyDown:dt,onKeyUp:mt,onCompositionStart:ct,onCompositionEnd:lt,onBeforeInput:pt,children:[R&&k(Kt,{prefixCls:r,upNode:f,downNode:_,upDisabled:Me,downDisabled:$e,onStep:Oe}),k("div",{className:"".concat(ce,"-wrap"),children:k("input",{autoComplete:"off",role:"spinbutton","aria-valuemin":l,"aria-valuemax":h,"aria-valuenow":x.isInvalidate()?null:x.toString(),step:p,...ee,ref:St(q,n),className:ce,value:z,onChange:st,disabled:C,readOnly:a})})]})});rt.displayName="InputNumber";var Yt=globalThis&&globalThis.__rest||function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)n.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(t[i[r]]=e[i[r]]);return t},Jt=u.exports.forwardRef(function(e,n){var t=u.exports.useContext(Et),i=t.getPrefixCls,r=t.direction,o=u.exports.useContext(It),b=u.exports.useState(!1),l=oe(b,2),h=l[0],w=l[1],p=u.exports.useRef(null);u.exports.useImperativeHandle(n,function(){return p.current});var g=e.className,S=e.size,C=e.disabled,a=e.prefixCls,f=e.addonBefore,_=e.addonAfter,E=e.prefix,I=e.bordered,R=I===void 0?!0:I,V=e.readOnly,O=e.status,D=e.controls,$=Yt(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),s=i("input-number",a),F=kt(s,r),P=F.compactSize,j=F.compactItemClassnames,H=k(Pt,{className:"".concat(s,"-handler-up-inner")}),ee=k(nt,{className:"".concat(s,"-handler-down-inner")}),ce=typeof D=="boolean"?D:void 0;Ze(D)==="object"&&(H=typeof D.upIcon>"u"?H:k("span",{className:"".concat(s,"-handler-up-inner"),children:D.upIcon}),ee=typeof D.downIcon>"u"?ee:k("span",{className:"".concat(s,"-handler-down-inner"),children:D.downIcon}));var q=u.exports.useContext(Ct),X=q.hasFeedback,le=q.status,se=q.isFormItemInput,pe=q.feedbackIcon,M=qt(le,O),L=P||S||o,U=u.exports.useContext(_t),de=C??U,me=K(N(N(N(N(N({},"".concat(s,"-lg"),L==="large"),"".concat(s,"-sm"),L==="small"),"".concat(s,"-rtl"),r==="rtl"),"".concat(s,"-borderless"),!R),"".concat(s,"-in-form-item"),se),Ce(s,M),j,g),x=k(rt,{ref:p,disabled:de,className:me,upHandler:H,downHandler:ee,prefixCls:s,readOnly:V,controls:ce,...$});if(E!=null||X){var fe=K("".concat(s,"-affix-wrapper"),Ce("".concat(s,"-affix-wrapper"),M,X),N(N(N(N(N(N(N(N({},"".concat(s,"-affix-wrapper-focused"),h),"".concat(s,"-affix-wrapper-disabled"),e.disabled),"".concat(s,"-affix-wrapper-sm"),o==="small"),"".concat(s,"-affix-wrapper-lg"),o==="large"),"".concat(s,"-affix-wrapper-rtl"),r==="rtl"),"".concat(s,"-affix-wrapper-readonly"),V),"".concat(s,"-affix-wrapper-borderless"),!R),"".concat(g),!(f||_)&&g));x=xe("div",{className:fe,style:e.style,onMouseUp:function(){return p.current.focus()},children:[E&&k("span",{className:"".concat(s,"-prefix"),children:E}),He(x,{style:null,value:e.value,onFocus:function(z){var A;w(!0),(A=e.onFocus)===null||A===void 0||A.call(e,z)},onBlur:function(z){var A;w(!1),(A=e.onBlur)===null||A===void 0||A.call(e,z)}}),X&&k("span",{className:"".concat(s,"-suffix"),children:pe})]})}if(f!=null||_!=null){var te="".concat(s,"-group"),Y="".concat(te,"-addon"),J=f?k("div",{className:Y,children:f}):null,ne=_?k("div",{className:Y,children:_}):null,ve=K("".concat(s,"-wrapper"),te,N({},"".concat(te,"-rtl"),r==="rtl")),we=K("".concat(s,"-group-wrapper"),N(N(N({},"".concat(s,"-group-wrapper-sm"),o==="small"),"".concat(s,"-group-wrapper-lg"),o==="large"),"".concat(s,"-group-wrapper-rtl"),r==="rtl"),Ce("".concat(s,"-group-wrapper"),M,X),g);x=k("div",{className:we,style:e.style,children:xe("div",{className:ve,children:[J&&k(Ue,{children:k(Ke,{status:!0,override:!0,children:J})}),He(x,{style:null,disabled:de}),ne&&k(Ue,{children:k(Ke,{status:!0,override:!0,children:ne})})]})})}return x});const Qt=Jt;var Zt=function(e){return e.every(function(n){var t=Re(n);if(!t)return!1;if(t.getRootNode()instanceof ShadowRoot)return!0})},en=function(e){return e?e.getRootNode():document},tn=function(e){if(!e||!document.getRootNode)return document;var n=Array.isArray(e)?e:[e];return Zt(n)?en(Re(n[0])):document};const nn=tn;function rn(e,n,t){t===void 0&&(t="click");var i=Dt(e);Rt(function(){var r=function(l){var h=Array.isArray(n)?n:[n];h.some(function(w){var p=Re(w);return!p||p.contains(l.target)})||i.current(l)},o=nn(n),b=Array.isArray(t)?t:[t];return b.forEach(function(l){return o.addEventListener(l,r)}),function(){b.forEach(function(l){return o.removeEventListener(l,r)})}},Array.isArray(t)?t:[t],n)}var an=`.phone-input-item-container {
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: initial;
}
.phone-input-item-container .ant-input-affix-wrapper,
.phone-input-item-container .ant-input-number-group-wrapper {
  width: 100%;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  background: var(--input-background-color) !important;
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-group-addon,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-group-addon {
  position: initial;
  border: none;
  background-color: var(--input-background-color);
  border-end-start-radius: var(--primary-btn-border-radius);
  border-start-start-radius: var(--primary-btn-border-radius);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(.ant-input-number-disabled, .ant-input-number-borderless).ant-input-number,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-status-error:not(
                .ant-input-number-disabled,
                .ant-input-number-borderless
            ).ant-input-number:hover {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number {
  border: none;
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-focused,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-focused {
  box-shadow: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-disabled,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-disabled {
  background: none;
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input {
  height: 47px;
  border: none !important;
  border-radius: 0;
  line-height: 47px;
  color: var(--text-color);
}
.phone-input-item-container .ant-input-affix-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input:hover,
.phone-input-item-container .ant-input-affix-wrapper .ant-input-number-input:hover,
.phone-input-item-container .ant-input-number-group-wrapper .ant-input-number-input:hover {
  border: none !important;
}
.phone-input-item-container .ant-input-affix-wrapper[data-focus='true'],
.phone-input-item-container .ant-input-number-group-wrapper[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.phone-input-item-container .ant-input[disabled] {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box {
  position: initial;
  cursor: pointer;
}
.phone-input-item-container .country-box .prefix-wrap {
  display: flex;
  color: var(--text-color);
  gap: 4px;
}
.phone-input-item-container .country-box .account-select-country-list {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 0%;
  width: 100%;
  height: 350px;
  border-radius: var(--card-border-radius) !important;
  overflow: hidden auto;
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list::-webkit-scrollbar {
  display: none;
  width: 0;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input:focus {
  border: none !important;
  box-shadow: none !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item {
  padding-right: 13px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover {
  background: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap.account-select-country-item:hover.search-input-wrap {
  background: none;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-clear-icon {
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-affix-wrapper {
  border-color: var(--keyword-border-color) !important;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .ant-input-suffix {
  position: relative;
  right: 10px;
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input {
  width: 100%;
  height: 32px;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.phone-input-item-container .country-box .account-select-country-list .search-input-wrap .search-input .ant-input {
  width: 100%;
  height: auto;
  padding-top: 4px;
  padding-bottom: 4px;
  line-height: initial;
}
.phone-input-item-container .country-box .account-select-country-list .no-data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 160px;
  color: var(--text-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--keyword-border-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item:hover {
  background-color: var(--keyword-border-color);
}
.phone-input-item-container .country-box .account-select-country-list .account-select-country-item div {
  display: flex;
  max-width: 80%;
  margin-right: 13px;
}
.phone-input-item-container .country-box input[type='number']::-webkit-inner-spin-button,
.phone-input-item-container .country-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.phone-input-item-container .country-box.phone {
  display: flex;
  align-items: center;
}
.phone-input-item-container .country-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 100%;
  padding-right: 4px;
  padding-left: 4px;
  cursor: pointer;
}
.phone-input-item-container .country-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.phone-input-item-container .country-box .account-select-opt .down-more {
  margin-left: 6px;
  font-size: 10px;
}
.phone-input-item-container .country-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.phone-input-item-container .country-box .country-name {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.phone-input-item-container .country-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  padding: 0 15px;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  line-height: 45px;
  color: var(--text-color);
  background-color: transparent;
}
`,on=e=>{let n=e.form,t=W.useWatch(e.name,n),[i,r]=u.exports.useState(["United States","us","1"]),{t:o}=tt(),[b,l]=u.exports.useState(!1),h=u.exports.useRef(),w=u.exports.useRef(),[p,g]=u.exports.useState(""),S=u.exports.useRef(),C=u.exports.useMemo(()=>je.filter(a=>a.join("+").toLowerCase().includes(p.toLowerCase())),[p]);return rn(()=>{l(!1)},h),u.exports.useEffect(()=>{b&&g("")},[b]),u.exports.useEffect(()=>{if(t!=null&&t.includes("*"))return;let a=`+${i[2]}`,f=(t||"").replace(/^\+\d+/,"").trim();n.setFieldsValue({[e.name]:`${a} ${f}`}),f&&n.validateFields(["_phone"])},[i,t]),u.exports.useEffect(()=>{var a;try{if((a=t?.includes)!=null&&a.call(t,"*"))n.setFieldsValue({_phone:t});else if(t){if(We(t)){let f=et(t),_=f.nationalNumber;n.setFieldsValue({_phone:_});let E=f.countryCallingCode.toString(),I=f.country;if(E&&I){let R=je.filter(V=>V[2].toString()===E&&V[1].toLowerCase()===I.toLowerCase());R&&R.length>0&&r(R[R.length-1])}}}else{let f=vt();f&&r(f)}}catch{}},[t]),d.createElement(d.Fragment,null,d.createElement("style",null,an),d.createElement("div",{className:"phone-input-item-container"},d.createElement(W.Item,{className:!e.disabled||e.disabled&&e.previewMode!=="input"?"hidden":"",extra:e.extra,name:e.name},d.createElement(_e,{disabled:e.disabled})),d.createElement(W.Item,{name:"_phone",className:e.disabled&&e.previewMode=="input"?"hidden":"",extra:e.extra,rules:[{required:!0,validator:(a,f)=>{try{if(f)try{if(f=`+${i[2]} ${f}`,!We(f))return Promise.reject(o("login.phone_format_error"))}catch{return Promise.reject(o("login.phone_format_error"))}else return Promise.reject(o("login.input_phone_holder"))}catch{return Promise.reject(o("login.phone_format_error"))}return Promise.resolve()}}]},d.createElement(Qt,{placeholder:o("account.mobile"),disabled:e.disabled,controls:!1,onChange:a=>{n.setFieldsValue({[e.name]:`+${i[2]} ${a}`})},onFocus:()=>{var a;(a=document.querySelector(".ant-input-number-group-wrapper"))==null||a.setAttribute("data-focus","true")},onBlur:()=>{var a;(a=document.querySelector(".ant-input-number-group-wrapper"))==null||a.setAttribute("data-focus","false")},addonBefore:d.createElement("div",{className:"country-box phone",ref:w},d.createElement("div",{className:"prefix-wrap",onClick:()=>{e.disabled||(l(!b),setTimeout(()=>{var a;(a=S.current)==null||a.focus()}))},ref:h},d.createElement("div",{className:"account-select-opt"},d.createElement("div",{className:"account-select-icon"},qe(`${i[1]}`)),d.createElement(nt,{className:"down-more"})),d.createElement("span",null,"+",i[2])),b&&d.createElement("div",{className:"account-select-country-list "},d.createElement("div",{className:"account-select-country-item search-input-wrap",onClick:a=>{a.stopPropagation()}},d.createElement(_e,{ref:S,className:"search-input",type:"text",placeholder:o("login.search_country_holder"),allowClear:!0,onChange:a=>{var f;let _=((f=a?.target)==null?void 0:f.value)||"";g(_)}})),C&&!!C.length?d.createElement("div",{className:"p-country-list"},C.map((a,f)=>d.createElement("div",{key:`${a[0]}-${a[1]}-${a[2]}`,className:"account-select-country-item",onClick:()=>{r(a),l(!1)}},d.createElement("div",{className:"country-box"},d.createElement("div",{className:"country-flag"},qe(`${a[1]}`)),d.createElement("span",{className:"country-name"},a[0])),d.createElement("div",{className:"country-code"},"+"+a[2])))):d.createElement("div",{className:"no-data"},"No data")))}))))},un=on,cn=`.login-account-bind {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.login-account-bind .ant-input-status-error:not(.ant-input-disabled, .ant-input-borderless).ant-input {
  background-color: var(--input-background-color);
}
.login-account-bind .ant-spin-spinning {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 20vh;
}
.login-account-bind .account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-bind .account-bind-form {
  width: 100%;
  padding: 0 18px;
  margin-top: 34px;
}
.login-account-bind .account-bind-form .account-input {
  width: 100%;
  height: 47px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.login-account-bind .account-bind-form .link-account-hint {
  align-self: flex-start;
  padding-top: 6px;
  font-size: 12px;
  color: var(--secondary-text-color);
}
.login-account-bind .account-bind-form .link-btn {
  margin-top: 15px;
  margin-bottom: 30px;
}
.login-account-bind .account-bind-form .unlink-btn {
  margin-top: 15px;
  margin-bottom: 30px;
  color: #fff;
  background: #ea4335;
}
.login-account-bind .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media screen and (max-height: 350px) {
  .login-account-bind .footer-box {
    position: unset;
    bottom: 0;
    margin-bottom: 10px;
  }
}
`,ln=e=>{let n=e,t=n?.authType||"",i=n?.verifyToken||"",{t:r}=tt(),[o]=W.useForm(),b=Ft(),l=xt(),{userInfo:h}=Vt();Mt();let[w,p]=u.exports.useState(!1),{runAsync:g}=Ot(Bt,{manual:!0}),{authCoreModal:S}=$t(),C=u.exports.useMemo(()=>ht({userInfo:h,t:r}),[h]),a=u.exports.useMemo(()=>{var E;return((E=C?.find)==null?void 0:E.call(C,I=>I.type===t))||{}},[C,t]),f=u.exports.useMemo(()=>!a.value&&!a.id,[a]);u.exports.useMemo(()=>!a.isOriginal&&!f,[a]);let _=()=>{o.validateFields().then(E=>{var I,R,V,O,D,$,s;let F=((O=(V=(R=(I=o.getFieldsValue())==null?void 0:I.inputValue)==null?void 0:R.replace(/\s/g,""))==null?void 0:V.trim)==null?void 0:O.call(V))||"";if(p(!0),t==="phone"&&((D=h?.security_account)==null?void 0:D.phone)===F){ke.error({title:r("new.duplicate_phonel_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>S.rootBody}),p(!1);return}else if(t==="email"&&((s=($=h?.security_account)==null?void 0:$.email)==null?void 0:s.toLowerCase())===F?.toLowerCase()){ke.error({title:r("new.duplicate_email_bindings"),wrapClassName:"auth-core-modal-error",getContainer:()=>S.rootBody}),p(!1);return}let P={};t===be.phone?P.phone=F:P.email=F,g(P).then(j=>{b("/account/verify",{state:{account:F,authType:t,verifyToken:i,pageType:"bind_login_account"}}),p(!1)}).catch(j=>{p(!1),j.error_code===20109?ke.error({title:t===be.phone?r("error.server_phone_20109"):r("error.server_email_20109"),wrapClassName:"auth-core-modal-error",getContainer:()=>S.rootBody}):l.error(j.message)})})};return bt(E=>{b("/account/verify",{state:{account:E.account,authType:t,unbindAccount:o.getFieldValue("inputValue"),pageType:"unbind_login_account"}})},{wait:3e3}),u.exports.useEffect(()=>{if(a?.value||a?.id)if(t===be.phone){let E=et(a?.value.replace(/\s/g,"")),I=E.countryCallingCode,R=E.nationalNumber;o.setFieldsValue({inputValue:ze(`+${I} ${R}`)})}else o.setFieldsValue({inputValue:ze(a?.value||a?.id||"")})},[a?.value,a?.id,t]),d.createElement("div",{className:"login-account-bind "},d.createElement("style",null,cn),d.createElement(gt,{displayBackBtn:!0},a.name),d.createElement(W,{className:"account-bind-form",layout:"vertical",form:o,onFinish:_},t===be.phone?d.createElement(un,{name:"inputValue",form:o,disabled:!f,previewMode:"input",extra:d.createElement("div",{className:"link-account-hint"},r("new.link_account_hint").format(a.name))}):d.createElement(W.Item,{name:"inputValue",validateTrigger:"onBlur",extra:d.createElement("div",{className:"link-account-hint"},r("new.link_account_hint").format(a.name)),rules:[{required:!0,validator:async(E,I)=>{if(I){if(!Tt.test(I))return Promise.reject(r("login.email_format_error"))}else return Promise.reject(r("account.input_vaild_email"));return Promise.resolve()}}]},d.createElement(_e,{className:"account-input",placeholder:a.name,disabled:!f,onChange:E=>o.setFields([{name:"email",value:E.target.value,errors:[]}])})),d.createElement(W.Item,null,f?d.createElement(At,{className:"primary-antd-btn link-btn",loading:w,htmlType:"submit"},r("account.link")):d.createElement(d.Fragment,null))),d.createElement(yt,null))},Cn=ln;export{Cn as default};
