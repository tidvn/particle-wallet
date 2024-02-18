import{Q as d}from"./chunk-4E5MO4OP.f891673f.js";import{w as x}from"./chunk-WN72JIRK.a98c42cd.js";import{a0 as g,a2 as u,a1 as y,a3 as t,ap as s,dm as w}from"./index.fbf0f355.js";import{u as f}from"./useRequest.5a6d3e71.js";import{u as v}from"./useTranslation.88a96d8a.js";import"./chunk-QNAXMJIS.3ce008d2.js";import"./chunk-AMOVWUCP.62a50458.js";import"./throttle.73ef307f.js";import"./index.9705f4c9.js";var h=`.payment-password-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  color: var(--text-color);
}
.payment-password-container > .wrapper {
  padding: 0 30px;
}
.payment-password-container .display-none {
  display: none;
}
.payment-password-container .page-title {
  margin-top: 0px;
  font-size: 22px;
  color: var(--text-color);
  text-align: center;
}
.payment-title {
  margin-top: 60px;
  font-size: 22px;
  color: var(--text-color);
}
.patment-tips1 {
  width: 80vw;
  margin-top: 30px;
  font-size: 14px;
  text-align: center;
  color: var(--text-color);
}
@media (min-width: 600px) {
  .patment-tips1 {
    width: calc(80 * var(--vw));
  }
}
.payment-buttons {
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
.success-icon {
  width: 50px;
  height: 50px;
  margin-top: 60px;
}
.payment-desc-1 {
  box-sizing: border-box;
  margin: 15px 0 75px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: var(--text-color);
}
`,b=E=>{let l=g(),{t:a}=v(),[o,n]=u.exports.useState(""),{setWrongPassword:r}=y(),{loading:p,run:c}=f(w,{manual:!0,onSuccess:(e,i)=>{l("/account/set-password",{state:{oldPassword:o},replace:!0})},onError:e=>{if(n(""),e?.error_code===s.WrongPaymentPassword)r({visible:!0});else if(e?.error_code===s.SecurityAccountFrozen){let i=e.extra.seconds||0;r({visible:!0,accountFrozen:{seconds:i}})}}}),m=e=>{n(e),e.length===6&&c(e)};return t.createElement(t.Fragment,null,t.createElement("style",null,h),t.createElement("div",{className:"payment-password-container"},t.createElement(x,{displayBackBtn:!0}),t.createElement("div",{className:"wrapper"},t.createElement("div",{className:"page-title"},a("account.change_payment_password")),t.createElement("p",{className:"payment-desc-1"},a("account.change_enter_payment")),t.createElement(d,{onChange:m,value:o,keyboardInvisible:p}))))},W=b;export{W as default};
