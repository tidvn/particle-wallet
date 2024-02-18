import{t as O,r as Q,g as V}from"./unicode.f652bd91.js";import{K as X}from"./chunk-6Y72V72Q.d3ce60d4.js";import{x as q}from"./chunk-4SMRMVPX.9956fd00.js";import{i as R}from"./chunk-QNAXMJIS.3ce008d2.js";import{N as D}from"./chunk-AMOVWUCP.62a50458.js";import{a0 as K,a2 as o,ah as M,aj as G,a3 as t,ai as U,d9 as P,ac as Y,am as Z,an as W,bT as ee,a4 as te,ap as L,da as ne}from"./index.fbf0f355.js";import{B as oe}from"./index.4896fbb2.js";import{u as F}from"./useRequest.5a6d3e71.js";import{t as ae}from"./throttle.73ef307f.js";import{u as H}from"./useTranslation.88a96d8a.js";import{c as re}from"./DownOutlined.38f2da23.js";import"./index.9705f4c9.js";var J=`.set-email-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.set-email-container .footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
@media (max-height: 500px) {
  .set-email-container .footer-box {
    display: none;
  }
}
.set-email-container .display-none {
  display: none;
}
.set-email-container .error-tip {
  width: 90%;
  height: 0;
  padding-left: 10px;
  margin-top: 6px;
  margin-bottom: 0;
  text-align: left;
  color: red;
  opacity: 0;
  transition: all 0.3s;
}
.set-email-container .error-tip.show {
  height: 30px;
  opacity: 1;
}
.set-email-container .set-email-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.set-email-container .patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .set-email-container .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.set-email-container .set-email-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: auto;
  padding-bottom: 20px;
}
.set-email-container .success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.set-email-container .set-email-desc-1 {
  box-sizing: border-box;
  padding: 0 18px;
  margin: 15px 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
.set-email-container .account-input-box {
  position: relative;
  z-index: 3;
  width: 90%;
  height: 47px;
  margin-top: 28px;
  border: 1px solid var(--input-border-color);
  border-radius: var(--primary-btn-border-radius);
  line-height: 47px;
  color: var(--text-color);
  background-color: var(--input-background-color);
  opacity: 1;
}
.set-email-container .account-input-box .account-select-country {
  position: absolute;
  z-index: 2;
  top: 54px;
  left: 2%;
  width: 96%;
  height: 210px;
  border-radius: var(--card-border-radius) !important;
  overflow-y: auto;
  background-color: var(--input-background-color);
}
.set-email-container .account-input-box .account-select-country::-webkit-scrollbar {
  display: none;
  width: 0;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 47px;
  padding: 5px 0 5px 13px;
  margin: 0;
  border-bottom: 1px solid var(--card-unclickable-background-color);
  font-size: 14px;
  color: var(--text-color);
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item:hover {
  background-color: var(--card-unclickable-background-color);
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div {
  display: flex;
  margin-right: 13px;
}
.set-email-container .account-input-box .account-select-country .account-select-country-item div .country-name {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.set-email-container .account-input-box input[type='number']::-webkit-inner-spin-button,
.set-email-container .account-input-box input[type='number']::-webkit-outer-spin-button {
  appearance: none;
  margin: 0;
}
.set-email-container .account-input-box.phone {
  display: flex;
  align-items: center;
  border: 1px solid var(--input-background-color);
  border-radius: var(--primary-btn-border-radius);
}
.set-email-container .account-input-box.phone[data-focus='true'] {
  border: 1px solid var(--accent-color) !important;
}
.set-email-container .account-input-box.phone input {
  border: none !important;
}
.set-email-container .account-input-box.phone input:focus {
  border: none !important;
}
.set-email-container .account-input-box .account-select-opt {
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100%;
  padding-left: 8px;
  cursor: pointer;
}
.set-email-container .account-input-box .account-select-opt .account-select-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 15px;
}
.set-email-container .account-input-box .account-select-opt .down-more {
  margin-left: 8px;
  font-size: 10px;
}
.set-email-container .account-input-box span {
  flex-shrink: 0;
  margin: 0;
  font-size: 15px;
}
.set-email-container .account-input-box input {
  flex-shrink: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  outline: none;
  font-weight: 400;
  font-size: 15px;
  color: var(--text-color);
  background-color: transparent;
}
.set-email-container .send-code-btn {
  margin-bottom: 0 !important;
}
.set-email-container .account-submit-btn {
  width: 90%;
  height: 47px;
  padding: 0;
  margin-top: 38px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: var(--primary-btn-font-size);
  line-height: 47px;
  text-align: center;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.set-email-container .account-submit-btn.bottom-margin {
  margin-bottom: 100px;
}
.set-email-container .account-submit-btn:hover {
  border: none;
  color: var(--primary-btn-color) !important;
  background: var(--primary-btn-background-color) !important;
  opacity: var(--hover-opacity);
}
.set-email-container .account-switch-item {
  margin-top: 40px;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: var(--accent-color);
  cursor: pointer;
}
.set-email-container .set-email-desc-2 {
  min-width: 116px;
  height: 23px;
  padding: 0 15px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 400;
  font-size: 12px;
  line-height: 23px;
  text-align: center;
  color: var(--secondary-text-color);
  background: var(--tag-background-color);
  opacity: 1;
}
.set-email-container .code-error {
  position: absolute;
  left: calc((100vw - 316px) / 2);
  margin-top: 220px;
  font-weight: 400;
  font-size: 12px;
  color: var(--error-color);
}
@media (min-width: 600px) {
  .set-email-container .code-error {
    left: calc((var(--vw) * 100 - 316px) / 2);
  }
}
.set-email-container .back {
  display: flex;
  align-items: center;
  height: 19px;
  margin-top: 90px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--accent-color);
  opacity: 1;
  cursor: pointer;
  gap: 8px;
}
.set-email-container .back svg {
  position: relative;
  top: 0;
  color: var(--accent-color);
}
.set-email-container .send-again {
  margin-top: 20px;
  border: none !important;
  outline: none !important;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: var(--text-color);
  background-color: transparent;
  box-shadow: none;
}
.set-email-container .send-again:hover {
  color: var(--text-color);
  background-color: transparent !important;
}
.set-email-container .send-again:disabled {
  opacity: 0.5;
}
`,ie=S=>{let{bindAccount:c,backToInputAccount:r,redirectUrl:a="",verifyToken:w=""}=S,T=q(),{t:l}=H(),{themeType:E,language:f}=M(),p=K(),[s,k]=o.exports.useState(""),[_,d]=o.exports.useState(1e3),[i,x]=o.exports.useState(60),[m,g]=o.exports.useState(),$=o.exports.useRef(null),{authCoreModal:A}=G();oe(()=>{if(i>0){let e=i-1;x(e),e===0&&d(void 0)}},_);let{loading:u,run:N}=F(ne,{manual:!0,onSuccess:e=>{ee(),a?p(a.split("?")[0],{replace:!0,back:!0,state:{...te.parse(a.split("?")[1]),verifyToken:e?.token,account:c}}):e.has_set_payment_password?p("/account/security",{replace:!0}):p("/account/set-password")},onError:e=>{e?.error_code===L.InvalidCode?g(l("login.invalid_code")):e?.error_code===L.ResendCode&&g(l("login.please_send_again"))}}),{loading:b,run:h}=F(P,{manual:!0,onSuccess:(e,n)=>{_||(x(60),d(1e3))},onError:e=>{x(0),d(void 0)}}),v=e=>{let n;c.includes("@")?n={email:c,code:e||s}:n={phone:c,code:e||s},w&&(n.token=w),N(n)},B=()=>{g(""),c.includes("@")?h({email:c}):W({theme:E,language:f,getContainer:()=>A.rootBody}).then(e=>{h({phone:c,cf_turnstile_response:e})}).catch(e=>{T.error(l("error.server_20112"))})},C=e=>{k(e),g(""),e.length===6&&y(e)},y=o.exports.useCallback(ae(e=>{v(e)},1e3,{leading:!0,trailing:!1}),[]);o.exports.useEffect(()=>{var e;let n=document.getElementsByClassName("react-input-code"),I=z=>z.preventDefault();return(e=n[0])==null||e.addEventListener("contextmenu",I),()=>{var z;(z=n[0])==null||z.removeEventListener("contextmenu",I)}},[]);let j=()=>{var e;(e=document.getElementsByClassName("input-code-item")[Math.min(s.length,5)])==null||e.focus()};return t.createElement("div",{className:"set-email-container"},t.createElement("style",null,J),t.createElement(R,{className:"icon-navigation-back",name:"circle_back",onClick:r}),t.createElement("h2",{className:"set-email-title"},l("account.enter_code")),t.createElement("p",{className:"set-email-desc-2",style:{margin:20}},c),t.createElement("div",{onClick:j},t.createElement(X,{containerClassName:"react-input-code",inputClassName:"input-code-item",allowedCharacters:"numeric",length:6,ref:$,placeholder:" ",onChange:C})),m&&t.createElement("div",{className:"code-error"},m),t.createElement(U,{disabled:s.length!==6,className:"account-submit-btn",loading:u,onClick:()=>v()},l("common.confirm")),t.createElement(U,{className:"send-again",onClick:B,disabled:i>0||b},i>0?`${l("login.send_again")} (${i}s)`:l("login.send_again")),t.createElement("div",{className:"back",onClick:r},t.createElement(R,{className:"arrow1-icon",name:"arrow1_icon"}),t.createElement("span",null,l("login.back"))),t.createElement(D,null))},ce=ie,le=S=>{let c=K(),{t:r}=H(),a=S,w=a?.redirectUrl,T=a?.verifyToken,l=q(),E=o.exports.useRef(),[f,p]=o.exports.useState(""),[s,k]=o.exports.useState(["United States","us","1"]),[_,d]=o.exports.useState(!1),i=o.exports.useRef(null),[x,m]=o.exports.useState(""),{themeType:g,language:$}=M(),{authCoreModal:A}=G(),[u,N]=o.exports.useState("email");o.exports.useEffect(()=>{if(u==="phone"||a?.showSwitch){let e=O();e&&k(e)}},[u,a?.showSwitch]);let[b,h]=o.exports.useState(!1);o.exports.useEffect(()=>{if(b)return document.addEventListener("click",v,!0),()=>{document.removeEventListener("click",v,!0)}},[b]);let v=e=>{setTimeout(()=>{var n;(n=E.current)!=null&&n.contains(e.target)||h(!1)})};o.exports.useEffect(()=>{let e=a?.accountType;e&&N(e)},[a]);let{loading:B,run:C}=F(P,{manual:!0,onSuccess:(e,n)=>{d(e)},onError:e=>{let n=e?.error_code||0;(n===50003||n===50004)&&(p(""),i.current.value="")}}),y=()=>{let e=i.current.value;if(u==="email")if(e){if(!Y.test(e))return m(r("login.email_format_error"))}else return m(r("account.input_vaild_email"));else{let n=s[1].toUpperCase();if(!e&&e!=="0")return m(r("account.input_vaild_mobile"));if(Z(e,n))e=`+${s[2]}${e}`;else return m(r("login.phone_format_error"))}p(e),e.includes("@")?C({email:e}):W({theme:g,language:$,getContainer:()=>A.rootBody}).then(n=>{C({phone:e,cf_turnstile_response:n})}).catch(n=>{l.error(r("error.server_20112"))})},j=()=>{N(u==="email"?"phone":"email"),p("")};return o.exports.useEffect(()=>{setTimeout(()=>{var e;(e=i.current)==null||e.focus()})},[]),_?t.createElement(ce,{bindAccount:f,redirectUrl:w||"",verifyToken:T,backToInputAccount:()=>{d(!1)}}):t.createElement("div",{className:"set-email-container"},t.createElement("style",null,J),t.createElement(R,{className:"icon-navigation-back",name:"circle_back",onClick:()=>c(-1)}),t.createElement("h2",{className:"set-email-title"},r(u==="email"?"account.set_your_email":"account.set_your_mobile")),t.createElement("p",{className:"set-email-desc-1"},r(u==="email"?"account.set_your_email_tip":"account.set_your_mobile_tip")),u==="email"?t.createElement(t.Fragment,null,t.createElement("div",{className:"account-input-box"},t.createElement("input",{onInput:()=>m(""),className:"input_email",type:"email",placeholder:r("account.place_email_address"),ref:i,defaultValue:f,onKeyDown:e=>{e.key==="Enter"&&y()}}))):t.createElement(t.Fragment,null,t.createElement("div",{className:"account-input-box phone",ref:E},b&&t.createElement("div",{className:"account-select-country"},Q.map((e,n)=>t.createElement("p",{key:n,className:"account-select-country-item",onClick:()=>{k(e),h(!1)}},t.createElement("div",{className:"country-box"},t.createElement("div",{className:"country-flag"},V(`${e[1]}`)),t.createElement("span",{className:"country-name"},e[0])),t.createElement("div",{className:"country-code"},"+"+e[2])))),t.createElement("div",{className:"account-select-opt",onClick:()=>h(!b)},t.createElement("div",{className:"account-select-icon"},V(`${s[1]}`)),t.createElement(re,{className:"down-more"})),t.createElement("span",null,"+",s[2]),t.createElement("input",{onInput:()=>{var e;m(""),i.current.value=((e=i.current.value.match(/^\d+/))==null?void 0:e[0])||""},type:"text",className:"no-number dd",placeholder:r("account.mobile"),ref:i,onWheel:e=>e.target.blur(),defaultValue:f.replace(`+${s[2]}`,""),onKeyDown:e=>{e.key==="Enter"&&y()},onFocus:()=>{var e;(e=document.querySelector(".account-input-box.phone"))==null||e.setAttribute("data-focus","true")},onBlur:()=>{var e;(e=document.querySelector(".account-input-box.phone"))==null||e.setAttribute("data-focus","false")}}))),t.createElement("p",{className:`error-tip ${x?"show":""}`},x),t.createElement(U,{className:"send-code-btn account-submit-btn bottom-margin",loading:B,onClick:y},r("login.get_captcha")),a?.showSwitch&&t.createElement("div",{className:"account-switch-item",onClick:j},r(u==="email"?"account.switch_text_mobile":"account.switch_text_email")),t.createElement(D,null))},we=le;export{we as default};
