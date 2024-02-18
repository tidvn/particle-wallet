import{N as m}from"./chunk-AMOVWUCP.62a50458.js";import{a0 as p,a1 as d,a2 as g,a3 as t,ai as r}from"./index.fbf0f355.js";import{u as x}from"./useTranslation.88a96d8a.js";var b=`.mp-modal-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
}
.mp-modal-container .particle-title {
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  line-height: 60px;
  text-align: center;
  color: var(--text-color);
}
.mp-modal-container .scroll-content {
  padding-right: 18px;
  padding-left: 18px;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}
.mp-modal-container .mp-set-desc {
  margin-top: 15px;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: var(--secondary-text-color);
}
.mp-modal-container .mp-set-img {
  width: 100%;
  height: 200px;
  background: var(--master_password_icon) center center no-repeat;
  flex: 1;
}
.mp-modal-container .mp-antd-bt {
  width: 100%;
  height: 47px;
  margin-bottom: 15px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.mp-modal-container .mp-antd-bt:hover {
  opacity: var(--hover-opacity);
}
.mp-modal-container .mp-set-now {
  max-width: 800px;
  margin-top: 15px;
}
.mp-modal-container .mp-set-later {
  max-width: 800px;
  margin-bottom: 0;
  color: var(--secondary-btn-color);
  background: var(--secondary-btn-background-color);
}
.mp-modal-container .btns {
  padding-right: 18px;
  padding-left: 18px;
  width: 100%;
}
.footer-box {
  position: absolute;
  bottom: 10px;
  margin: 0;
}
`,u=()=>{let{t:e}=x(),n=p(),{loginSuccessRedirectToApp:i,modalOptions:l,setAuthCoreModal:a}=d(),{promptSettingConfig:o}=l;g.exports.useEffect(()=>(a({closable:!1}),()=>{a({closable:!0})}),[]);let s=()=>{n("/account/master-password",{replace:!0,state:{loginSetMasterPassword:!0}})},c=()=>{i()};return t.createElement("div",{className:"mp-modal-container"},t.createElement("style",null,b),t.createElement("div",{className:"particle-title"},e("account.set_master_password")),t.createElement("div",{className:"scroll-content"},t.createElement("div",{className:"mp-set-desc"},e("account.set_master_password_tip")),t.createElement("div",{className:"mp-set-img"})),t.createElement("div",{className:"btns"},t.createElement(r,{className:"mp-set-now mp-antd-bt",onClick:s},e("account.set_master_password_now")),o?.promptMasterPasswordSettingWhenLogin!==3&&t.createElement(r,{className:"mp-set-later mp-antd-bt",onClick:c},e("account.later"))),t.createElement(m,{className:"footer-box-v2"}))},w=u;export{w as default};
