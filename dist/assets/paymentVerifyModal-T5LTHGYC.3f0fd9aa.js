import{Q as f}from"./chunk-4E5MO4OP.f891673f.js";import{a1 as b,a2 as m,aj as g,a3 as a,cQ as h,ap as c,dm as x}from"./index.fbf0f355.js";import{u as E}from"./useRequest.5a6d3e71.js";import{u as C}from"./useTranslation.88a96d8a.js";import"./chunk-QNAXMJIS.3ce008d2.js";import"./chunk-AMOVWUCP.62a50458.js";import"./throttle.73ef307f.js";import"./index.9705f4c9.js";var P=`.payment-password-drawer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-body {
  padding-right: 0;
  padding-left: 0;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-content-wrapper {
  width: 100% !important;
}
.payment-password-drawer .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header {
  display: none;
}
.payment-password-drawer .particle-pc-drawer .payment-verify-content {
  margin-top: 38px;
}
.payment-password-drawer .payment-verify-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 22px;
}
.payment-password-drawer .payment-verify-content .particle-keywords-map {
  position: absolute;
}
@media (min-width: 600px) {
  .payment-password-drawer {
    position: absolute;
  }
}
`,F=({props:r})=>{let{setPaymentVerify:n,setWrongPassword:s}=b(),{t}=C(),[i,o]=m.exports.useState(""),{authCoreModal:w}=g();m.exports.useEffect(()=>{r.visible&&o("")},[r.visible]);let{loading:l,run:y}=E(x,{manual:!0,onSuccess:(e,d)=>{var p;n({visible:!1}),(p=r.onVerifyCompleted)==null||p.call(r,i)},onError:e=>{if(o(""),e?.error_code===c.WrongPaymentPassword)s({visible:!0});else if(e?.error_code===c.SecurityAccountFrozen){let d=e.extra.seconds||0;s({visible:!0,accountFrozen:{seconds:d}})}}}),u=()=>{var e;if(l)return!1;n({visible:!1}),(e=r.onVerifyFailed)==null||e.call(r,t("common.cancel"))},v=e=>{o(e),e.length===6&&y(e)};return a.createElement(a.Fragment,null,a.createElement("style",null,P),a.createElement(h,{visible:r.visible,placement:"bottom",height:421,closable:!1,maskClosable:!1,onClose:u,className:"payment-password-drawer",title:r.type==="close"?t("account.close_payment_password"):t("account.payment_password"),forceRender:!0,getContainer:()=>w.rootBody},a.createElement("div",{className:"content payment-verify-content"},a.createElement(f,{onChange:v,value:i,keyboardInvisible:l}))))},Q=F;export{Q as default};
