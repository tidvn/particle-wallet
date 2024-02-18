import{w as E}from"./chunk-WN72JIRK.a98c42cd.js";import{x as N}from"./chunk-4SMRMVPX.9956fd00.js";import{i as w}from"./chunk-QNAXMJIS.3ce008d2.js";import{N as y}from"./chunk-AMOVWUCP.62a50458.js";import{a0 as _,aj as k,a2 as p,a3 as e,ai as n,bX as C,c9 as j}from"./index.fbf0f355.js";import{u as T}from"./useTranslation.88a96d8a.js";var z=`.device-details-wrapper {
  -webkit-overflow-scrolling: touch;
  height: 100%;
}
.device-details-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.device-details-container .scroll-wrapper {
  flex: 1;
  overflow: auto;
}
.device-details-container .details-list {
  padding: 0 18px;
  padding-bottom: 50px;
  margin-top: 20px;
}
.device-details-container .details-list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 58px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
}
.device-details-container .details-list .item .right {
  font-weight: 400;
  font-size: 12px;
}
.device-details-container .btns {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 18px;
  background: var(--theme-background-color);
}
.device-details-container .btns .confirm-delete-btn {
  width: 100%;
  max-width: 360px;
  height: 46px;
  padding: 0;
  line-height: 46px;
}
.delete-confirm-modal .ant-modal-confirm-btns,
.delete-confirm-modal .anticon-exclamation-circle {
  display: none;
}
.delete-confirm-modal .ant-modal-confirm-content {
  margin: 0 !important;
}
.delete-confirm-modal .ant-modal-body {
  position: relative;
  padding: 26px 18px;
}
.delete-confirm-modal .content-text {
  margin-top: 40px;
  margin-bottom: 34px;
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--text-color);
}
.delete-confirm-modal .close-btn {
  position: absolute;
  top: 10px;
  right: 16px;
  font-size: 30px;
}
.delete-confirm-modal .btns {
  display: flex;
  gap: 20px;
  justify-content: space-between;
}
.delete-confirm-modal .btns button {
  flex: 1;
  height: 46px;
}
.delete-confirm-modal .btns button.cancel-btn {
  color: var(--text-color);
  background: var(--secondary-btn-background-color);
}
@media (max-width: 767px) {
  .delete-confirm-modal .ant-modal {
    max-width: calc(100vw - 36px);
    margin: 8px auto;
  }
}
`,B=v=>{var c,o,r,m;let{loginDeviceInfo:t}=v,{t:a}=T(),f=_(),{authCoreModal:u}=k(),[g,s]=p.exports.useState(!1),[x,d]=p.exports.useState(!1),b=()=>{s(!0)},h=N(),l=()=>{s(!1)};return e.createElement("div",{className:"device-details-wrapper"},e.createElement("style",null,z),e.createElement("div",{className:"device-details-container"},e.createElement(E,{displayBackBtn:!0},a("new.details")),e.createElement("div",{className:"scroll-wrapper"},e.createElement("div",{className:"details-list"},e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.app")),e.createElement("div",{className:"right"},t.project_app_name||"-")),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.device")),e.createElement("div",{className:"right"},t.device||"-")),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.authorized_time")),e.createElement("div",{className:"right"},t.updated_at||"-")),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.login_method")),e.createElement("div",{className:"right"},(t.login_channel||"-").replace("Twitterv1","Twitter"))),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.ip")),e.createElement("div",{className:"right"},((c=t?.location)==null?void 0:c.ip)||"-")),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.country")),e.createElement("div",{className:"right"},((o=t?.location)==null?void 0:o.country_name)||((r=t?.location)==null?void 0:r.country_code)||"-")),e.createElement("div",{className:"item"},e.createElement("div",{className:"left"},a("new.city")),e.createElement("div",{className:"right"},((m=t?.location)==null?void 0:m.city)||"-")))),e.createElement("div",{className:"btns"},e.createElement(n,{className:"still-confirm confirm-delete-btn",disabled:t.isCurrent,onClick:()=>{b()}},a("new.delete_access"))),e.createElement(C,{className:"delete-confirm-modal",open:g,closable:!1,footer:null,centered:!0,getContainer:()=>u.rootBody},e.createElement("div",{className:"content-wrap"},e.createElement("div",{className:"close-btn",onClick:()=>{l()}},e.createElement(w,{className:"circle_close",name:"circle_close"})),e.createElement("div",{className:"content-text"},a("new.delete_access_to_n").format(t?.project_app_name,t?.device)),e.createElement("div",{className:"btns"},e.createElement(n,{className:"cancel-btn",onClick:()=>{l()}},a("common.cancel")),e.createElement(n,{className:"still-confirm delete-btn",loading:x,onClick:()=>{d(!0),setTimeout(()=>{j(t?.project_app_uuid).finally(()=>{d(!1)}).then(i=>{i&&(l(),setTimeout(()=>{f(-1)},500))}).catch(i=>{h.error(i.message)})},500)}},a("new.delete"))))),e.createElement(y,{className:"footer-box-v2"})))},O=B;export{O as default};
