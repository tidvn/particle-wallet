import{a1 as F,a0 as N,aj as _,a2 as p,a3 as t,bX as k,bY as C,ai as v}from"./index.fbf0f355.js";import{B}from"./index.4896fbb2.js";import{u as M}from"./useTranslation.88a96d8a.js";import"./index.9705f4c9.js";var P=`.ant-modal-content .ant-modal-footer {
  display: none;
}
.wrong-password-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrong-password-content .modal-title {
  font-size: 22px;
  font-weight: bold;
  position: relative;
  top: 7px;
  margin-bottom: 12px;
}
.wrong-password-content .tip {
  padding-right: 10px;
  padding-left: 10px;
  margin-top: 16px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 17px;
  line-height: 1.3;
  text-align: center;
  color: var(--secondary-text-color);
}
.wrong-password-content .frozen-countdown {
  margin-top: 12px;
  margin-bottom: 22px;
  font-weight: bold;
  font-size: 24px;
  color: var(--text-color);
}
.wrong-password-content .btn {
  width: 100%;
  height: 47px;
  margin-top: 10px;
  border-radius: var(--primary-btn-border-radius);
  font-size: var(--primary-btn-font-size);
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
}
.wrong-password-content .close-icon {
  align-self: flex-end;
}
`,S=({info:e})=>{var d;let{t:l}=M(),{setWrongPassword:m,setPaymentVerify:f,userInfo:n,showSelectSecurityAccount:w}=F(),b=N(),x=()=>{m({visible:!1}),f({visible:!1}),h()},{authCoreModal:y}=_(),h=()=>{var o,a,r,c;((o=n?.security_account)==null?void 0:o.email)&&((a=n?.security_account)==null?void 0:a.phone)?w(!0):b("/account/set-password",{state:{account:((r=n?.security_account)==null?void 0:r.email)||((c=n?.security_account)==null?void 0:c.phone)}})},i=()=>{m({visible:!1})},[z,s]=p.exports.useState(),[u,g]=p.exports.useState(((d=e.accountFrozen)==null?void 0:d.seconds)||0);B(()=>{let o=u-1;g(o),o<=0&&(s(void 0),i())},z),p.exports.useEffect(()=>(e.accountFrozen&&(g(e.accountFrozen.seconds),s(1e3)),()=>{s(void 0)}),[e.accountFrozen]);let E=o=>{let a=Math.floor(o/60/60);a=a<10?"0"+a:a;let r=Math.floor(o/60%60);r=r<10?"0"+r:r;let c=Math.floor(o%60);return c=c<10?"0"+c:c,a+":"+r+":"+c};return t.createElement(t.Fragment,null,t.createElement("style",null,P),t.createElement(k,{open:e.visible,closable:!1,centered:!0,okButtonProps:{style:{display:"none"}},cancelButtonProps:{style:{display:"none"}},getContainer:()=>y.rootBody},t.createElement("div",{className:"wrong-password-content"},t.createElement(C,{className:"close-icon",onClick:i}),e.accountFrozen?t.createElement(t.Fragment,null,t.createElement("div",{className:"modal-title"},l("account.incorrect_payment_password")),t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip2"))):t.createElement("div",{className:"tip m-margin-top-20"},l("account.incorrect_tip1")),e.accountFrozen&&t.createElement("div",{className:"frozen-countdown"},E(u)),t.createElement(v,{className:"btn",onClick:x},l("account.forgot_password")),!e.accountFrozen&&t.createElement(v,{className:"btn",onClick:i},l("account.retry")))))},J=S;export{J as default};
