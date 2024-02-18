import{t as R,i as W,H as X,o as Y,E as q,T as J,U as K}from"./chunk-EGL2DVBU.6bae04af.js";import{v as Z,$ as ee,T as te,G as ae,l as z}from"./chunk-IKGID5DT.12097f68.js";import{w as C}from"./chunk-WN72JIRK.a98c42cd.js";import{x as oe}from"./chunk-4SMRMVPX.9956fd00.js";import{i as p}from"./chunk-QNAXMJIS.3ce008d2.js";import{N as ce}from"./chunk-AMOVWUCP.62a50458.js";import{a0 as ne,a2 as l,a1 as re,bO as ie,bP as le,bQ as se,bR as ue,aa as T,bS as $,bT as P,a3 as e,bU as me,bV as de,bW as pe,aj as ve,bX as be,bY as he,ai as M}from"./index.fbf0f355.js";import{u as j}from"./useTranslation.88a96d8a.js";var ye=`.bind-security-account-prompt .ant-modal-content {
  padding: 18px;
}
.bind-security-account-prompt .bind-hint-content {
  margin: 30px 0;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: var(--text-color);
}
.bind-security-account-prompt .prompt-bottom-btn-box {
  display: flex;
  gap: 16px;
}
`,ge=v=>{let{visible:b,setVisible:m,onBind:h}=v,{t:s}=j(),{authCoreModal:a}=ve(),n=()=>{m(!1)};return e.createElement(e.Fragment,null,e.createElement("style",null,ye),e.createElement(be,{className:"bind-security-account-prompt",open:b,maskClosable:!1,onCancel:n,closeIcon:e.createElement(he,null),centered:!0,getContainer:()=>a.rootBody},e.createElement("div",{className:"bind-hint-content"},s("account.security_account_bind_hint")),e.createElement("div",{className:"prompt-bottom-btn-box"},e.createElement(M,{className:"primary-antd-btn secondary particle-cancel-button",onClick:n},s("common.cancel")),e.createElement(M,{className:"primary-antd-btn",onClick:()=>{m(!1),h()}},s("common.bind")))))},xe=ge,we=`.account-and-security {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
}
.account-and-security .scroll-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 0;
  overflow-y: auto;
}
.account-and-security .scroll-content .category-title {
  align-self: flex-start;
  margin-top: 8px;
  margin-left: calc(5% + 12px);
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.account-and-security .hover {
  cursor: pointer;
}
.account-and-security .hover:hover {
  opacity: var(--hover-opacity);
}
.account-and-security .label-item-switch {
  box-shadow: none !important;
  transform: scale(0.98);
}
.account-and-security .label-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
}
.account-and-security .label-item .arrow-right-icon {
  color: var(--text-color);
}
.account-and-security .label-item .arrow-right-icon svg {
  width: 11px;
  height: 11px;
}
.account-and-security .label-item .label-item-name {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.account-and-security .label-item .label-item-btn {
  min-width: 44px;
  height: 22px;
  padding: 0 13px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
  cursor: pointer;
}
.account-and-security .label-item .label-item-btn:hover {
  opacity: var(--hover-opacity);
}
.account-and-security .footer-tips {
  position: absolute;
  bottom: 50px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: var(--text-color);
}
.account-and-security .title {
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100vw;
  padding-top: 18px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  color: var(--text-color);
  background: var(--theme-background-color);
  background-color: var(--bg-color);
}
@media (min-width: 600px) {
  .account-and-security .title {
    width: calc(100 * var(--vw));
  }
}
.account-and-security .payment-security {
  box-sizing: border-box;
  width: 90%;
  padding: 14px;
  margin-top: 18px;
  margin-bottom: 0;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.account-and-security .payment-security h3 {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.account-and-security .payment-security p {
  box-sizing: border-box;
  padding-right: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  opacity: 1;
}
.account-and-security .authorization-item {
  margin-bottom: 20px;
}
.account-and-security .authorization-item .label-item {
  height: 36px;
  margin: 0;
}
.account-and-security .master-password-item {
  width: 90%;
  padding: 14px;
  margin-top: 18px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.account-and-security .master-password-item .mp-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}
.account-and-security .master-password-item .mp-header .mp-title {
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.account-and-security .master-password-item .mp-header .mp-learn-more {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: var(--accent-color);
  cursor: pointer;
}
.account-and-security .master-password-item .mp-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.account-and-security .master-password-item .mp-content .mp-desc {
  flex-shrink: 1;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  opacity: 1;
}
.account-and-security .master-password-item .mp-content .mp-set {
  flex-shrink: 0;
  min-width: 44px;
  height: 22px;
  padding: 0 13px;
  margin-left: 16px;
  border-radius: var(--primary-btn-border-radius);
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
  opacity: 1;
  cursor: pointer;
}
.account-and-security .master-password-item .mp-content .mp-set:hover {
  opacity: var(--hover-opacity);
}
.account-and-security .verification-security {
  box-sizing: border-box;
  width: 90%;
  padding: 14px;
  margin-top: 18px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.account-and-security .verification-security h3 {
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: var(--text-color);
}
.account-and-security .verification-security p {
  box-sizing: border-box;
  padding-right: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary-text-color);
  opacity: 1;
}
.account-and-security .account-box {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  padding: 22px 12px;
  margin-top: 18px;
  border-radius: var(--card-border-radius);
  background-color: var(--card-unclickable-background-color);
}
.account-and-security .account-box .account-avatar {
  width: 20px;
  height: 20px;
  margin-right: 11px;
  border-radius: 50%;
  background-color: #efefef;
}
.account-and-security .account-box .account {
  flex-grow: 1;
  margin-right: 10px;
  overflow: hidden;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
}
.account-and-security .account-box .more-account {
  font-weight: 500;
  font-size: 14px;
  text-align: end;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--accent-color);
  cursor: pointer;
}
`,fe=()=>{var v,b,m,h,s;let{t:a}=j(),n=ne(),[B,y]=l.exports.useState(!1),{setPaymentVerify:S,showSelectSecurityAccount:U,setPaymentPassword:V}=re(),{userInfo:t}=ie(),{modalOptions:A}=le(),g=oe(),x=l.exports.useMemo(()=>se(),[t]),w=c=>{var o;return((o=t?.thirdparty_user_info)==null?void 0:o.provider)===T.jwt?c?.replace(`${A.projectId}:`,""):c},F={email:Z,phone:ee,facebook:te,google:ae,apple:R,twitter:z,twitterv1:z,discord:W,github:X,twitch:Y,microsoft:q,linkedin:J,jwt:K},u=l.exports.useMemo(()=>{var c;let o=ue();return o||(o=((c=t?.thirdparty_user_info)==null?void 0:c.provider)||"email"),o==="twitterv1"&&(o=T.twitter),o},[t]),I=l.exports.useMemo(()=>{var c,o,r,i;let d="";return u&&t&&(d=t[`${u}`]||t[`${u}_email`]||$(w(t[`${u}_id`]))),d||t?.email||t?.phone||((o=(c=t?.thirdparty_user_info)==null?void 0:c.user_info)==null?void 0:o.email)||$(w(((i=(r=t?.thirdparty_user_info)==null?void 0:r.user_info)==null?void 0:i.id)||""))},[u,t]),f=c=>{var o,r,i,d,N,k;((o=t?.security_account)==null?void 0:o.email)&&!((r=t?.security_account)!=null&&r.phone)||!((i=t?.security_account)!=null&&i.email)&&((d=t?.security_account)==null?void 0:d.phone)?n("/account/verify",{state:{account:((N=t?.security_account)==null?void 0:N.email)||((k=t.security_account)==null?void 0:k.phone),authType:c,redirectUrl:"/account/security",pageType:"verify_security_account_set_security_account"}}):n("/account/bind",{state:{accountType:c,redirectUrl:"/account/security"}})},L=()=>{var c,o,r,i;((c=t?.security_account)==null?void 0:c.email)&&((o=t?.security_account)==null?void 0:o.phone)?U(!0):n("/account/set-password",{state:{account:((r=t?.security_account)==null?void 0:r.email)||((i=t?.security_account)==null?void 0:i.phone)}})},O=()=>{S({visible:!0,type:"close",onVerifyCompleted:c=>{pe(c).then(o=>{g.success(a("account.close_success")),P()}).catch(o=>{o.message&&g.error(o.message)})}})},_=l.exports.useMemo(()=>!0,[]),D=()=>{n(-1)},G=()=>{n("/account/master-password/change")},H=()=>{n("/account/master-password")},Q=()=>{n("/account/master-password/description")},E=l.exports.useMemo(()=>{var c,o;return((c=t?.security_account)==null?void 0:c.email)||((o=t?.security_account)==null?void 0:o.phone)},[(v=t?.security_account)==null?void 0:v.email,(b=t?.security_account)==null?void 0:b.phone]);return l.exports.useEffect(()=>{P().catch(c=>{})},[]),e.createElement("div",{className:"account-and-security"},e.createElement("style",null,we),_&&e.createElement(C,{onBack:D},a("account.account_and_security")),!_&&e.createElement(C,null,a("account.account_and_security")),e.createElement("div",{className:"scroll-content"},e.createElement("div",{className:"category-title"},a("account.account")),e.createElement("div",{className:"account-box"},e.createElement("img",{className:"account-avatar",src:F[u]}),e.createElement("div",{className:"account"},I),e.createElement("div",{className:"more-account",onClick:()=>{E?n("/login-account"):y(!0)}},a("account.more_login_account"))),e.createElement("div",{className:"payment-security authorization-item"},e.createElement("div",{className:"label-item hover",onClick:()=>{n("/manageDevices/deviceList")}},e.createElement("div",{className:"label-item-name"},a("new.authorization")),e.createElement(p,{className:"arrow-right-icon",name:"arrow_right_icon"}))),e.createElement("div",{className:"category-title"},a("account.security")),e.createElement("div",{className:"master-password-item"},e.createElement("div",{className:"mp-header"},e.createElement("div",{className:"mp-title"},a("account.master_password")),e.createElement("div",{className:"mp-learn-more",onClick:Q},a("account.learn_more"))),e.createElement("div",{className:"mp-content"},e.createElement("div",{className:"mp-desc"},a("account.master_password_tip")),!x&&e.createElement("div",{className:"mp-set",onClick:H},a("account.set"))),x&&e.createElement("div",{className:"label-item hover",onClick:G},e.createElement("div",{className:"label-item-name"},a("account.change_master_password")),e.createElement(p,{className:"arrow-right-icon",name:"arrow_right_icon"}))),e.createElement("div",{className:"verification-security"},e.createElement("h3",null,a("account.verification_security")),e.createElement("p",null,a("account.verification_security_tip")),e.createElement("div",{className:"label-item"},e.createElement("div",{className:"label-item-name"},a("account.email")),me(((m=t?.security_account)==null?void 0:m.email)||"")||e.createElement("div",{className:"label-item-btn",onClick:()=>f("email")},a("account.set"))),e.createElement("div",{className:"label-item"},e.createElement("div",{className:"label-item-name"},a("account.mobile")),de(((h=t?.security_account)==null?void 0:h.phone)||"")||e.createElement("div",{className:"label-item-btn",onClick:()=>f("phone")},a("account.set")))),e.createElement("div",{className:"payment-security"},e.createElement("h3",null,a("account.payment_security")),e.createElement("p",null,a("account.payment_password_hint")),(s=t?.security_account)!=null&&s.has_set_payment_password?e.createElement(e.Fragment,null,e.createElement("div",{className:"label-item hover",onClick:()=>n("/account/change-password")},e.createElement("div",{className:"label-item-name"},a("account.change_payment_password")),e.createElement(p,{className:"arrow-right-icon",name:"arrow_right_icon"})),e.createElement("div",{className:"label-item hover",onClick:L},e.createElement("div",{className:"label-item-name"},a("account.forgot_payment_password")),e.createElement(p,{className:"arrow-right-icon",name:"arrow_right_icon"})),e.createElement("div",{className:"label-item hover",onClick:O},e.createElement("div",{className:"label-item-name"},a("account.close_payment_password")),e.createElement(p,{className:"arrow-right-icon",name:"arrow_right_icon"}))):e.createElement("div",{className:"label-item"},e.createElement("div",{className:"label-item-name"},a("account.payment_password")),e.createElement("div",{className:"label-item-btn",onClick:()=>{E?V():y(!0)}},a("account.set"))))),e.createElement(ce,{className:"footer-box-v2"}),e.createElement(xe,{visible:B,setVisible:y,onBind:()=>{n("/account/bind",{state:{accountType:t!=null&&t.email?"phone":"email",showSwitch:!0,redirectUrl:"/account/security"}})}}))},Pe=fe;export{Pe as default};
