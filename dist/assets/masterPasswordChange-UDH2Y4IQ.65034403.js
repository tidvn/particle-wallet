import{B as v}from"./chunk-3KXEBSWP.352b18b6.js";import{w as y}from"./chunk-WN72JIRK.a98c42cd.js";import{x as N}from"./chunk-4SMRMVPX.9956fd00.js";import{N as b}from"./chunk-AMOVWUCP.62a50458.js";import{a0 as _,a2 as c,a3 as e,ai as k,dk as M}from"./index.fbf0f355.js";import{u as B}from"./useRequest.5a6d3e71.js";import{u as S}from"./useTranslation.88a96d8a.js";import{F as o}from"./index.338a4e26.js";import{T,S as $}from"./index.f1760f25.js";import"./chunk-QNAXMJIS.3ce008d2.js";import"./throttle.73ef307f.js";import"./index.9705f4c9.js";import"./TextArea.4a47a176.js";import"./colors.5dd5d985.js";import"./index.eac9e03e.js";var z=`.mp-change-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow: auto;
  font-size: 14px;
  color: var(--text-color);
}
.mp-change-container .wapper {
  flex: 1;
  width: 100%;
  padding: 0 18px;
}
.mp-change-container .ant-form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
}
.mp-change-container .ant-form .ant-form-item {
  margin-bottom: 0;
}
.mp-change-container .ant-form .scroll-content {
  flex: 1;
  width: 100%;
}
.mp-change-container .mp-change-title {
  margin-top: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: var(--text-color);
}
.mp-change-container .mp-input-name {
  align-self: flex-start;
  margin-top: 10px;
  font-weight: 400;
}
.mp-change-container .mp-input {
  margin-top: 6px;
}
.mp-change-container .mp-input-error {
  align-self: flex-start;
  margin-top: 8px;
  color: var(--error-color);
}
.mp-change-container .mp-tip-space {
  width: 100%;
  margin-top: 25px;
  margin-bottom: 110px;
  line-height: 20px;
}
.mp-change-container .mp-tip-space span {
  color: var(--text-color);
}
.mp-change-container .bottom-container .mp-next {
  width: 100%;
}
.mp-change-container .bottom-container .footer-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--footer-height);
  margin: 0;
}
.mp-change-container .bottom-container .footer-box .footer {
  margin: 0;
}
`,C=()=>{let m=_(),{t:a}=S(),{Text:i,Link:p}=$,[s,n]=c.exports.useState(!1),l=N(),[d,g]=c.exports.useState(!0),{run:u,loading:h}=B(t=>M(t).then(r=>{if(!r)throw new Error("Master password decryption error");return r}),{manual:!0,onSuccess:t=>{f()},onError:t=>{t?.message==="Master password decryption error"?n(!0):l.error(t?.message||"check master password error")}}),f=()=>{m("/account/master-password",{state:{setNewMasterPassword:!0}})},x=t=>{let{password:r}=t;r&&r.length>=6&&r.length<=20?u(r):n(!0)},w=t=>{n(!1);let{password:r}=t;g(!r)},E=()=>{m("/account/master-password/description")};return e.createElement("div",{className:"mp-change-container"},e.createElement("style",null,z),e.createElement(y,{displayBackBtn:!0},a("account.current_master_password")),e.createElement("div",{className:"wapper"},e.createElement(o,{onFinish:x,layout:"vertical",onValuesChange:w},e.createElement("div",{className:"scroll-content"},e.createElement("div",{className:"mp-input-name padding-top-16"},a("account.input_master_password")),e.createElement(o.Item,{name:"password"},e.createElement(v,{className:"mp-input"})),s&&e.createElement("div",{className:"mp-input-error"},a("account.password_error")),e.createElement(T,{direction:"vertical",className:"mp-tip-space"},e.createElement(i,null,a("account.mpc_tss_intro")),e.createElement(i,null,a("account.input_decrypt_hint")," ",e.createElement(p,{onClick:E,className:"more-text-btn"},a("account.learn_more_period"))))),e.createElement(o.Item,null,e.createElement("div",{className:"bottom-container"},e.createElement(k,{className:"primary-antd-btn mp-next",htmlType:"submit",loading:h,disabled:d},a("common.next")),e.createElement(b,null))))))},O=C;export{O as default};
