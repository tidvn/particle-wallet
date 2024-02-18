import{$ as b,v as y,G as _,T as w,l as k}from"./chunk-IKGID5DT.12097f68.js";import{w as E}from"./chunk-WN72JIRK.a98c42cd.js";import{x as N}from"./chunk-4SMRMVPX.9956fd00.js";import{i as T}from"./chunk-QNAXMJIS.3ce008d2.js";import{N as $}from"./chunk-AMOVWUCP.62a50458.js";import{bs as F,bt as O,b_ as z,a2 as h,b$ as S,c0 as j,c1 as A,aa as s,al as C,a0 as I,a1 as B,a3 as i}from"./index.fbf0f355.js";import{t as M}from"./throttle.73ef307f.js";import{u as P}from"./useTranslation.88a96d8a.js";function D(a,e){var o;F&&(O(a)||console.error("useThrottleFn expected parameter is a function, got ".concat(typeof a)));var r=z(a),u=(o=e?.wait)!==null&&o!==void 0?o:1e3,t=h.exports.useMemo(function(){return M(function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return r.current.apply(r,j([],A(l),!1))},u,e)},[]);return S(function(){t.cancel()}),{run:t,cancel:t.cancel,flush:t.flush}}var G=`.login-account-box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  color: var(--text-color);
}
.login-account-box .login-account-title {
  font-weight: 500;
  font-size: 18px;
}
.login-account-box .login-account-description {
  margin: 32px 18px 40px;
  font-weight: 400;
  font-size: 13px;
  color: var(--secondary-text-color);
}
.login-account-box .account-list {
  width: 100%;
  padding: 0 18px;
}
.login-account-box .account-list .login-account-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 12px 0 14px;
  margin-bottom: 10px;
  border-radius: var(--card-border-radius);
  background: var(--card-unclickable-background-color);
  cursor: pointer;
}
.login-account-box .account-list .login-account-item img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: white;
}
.login-account-box .account-list .login-account-item .login-account-name {
  flex-grow: 1;
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
}
.login-account-box .account-list .login-account-item .login-account-value {
  flex-grow: 2;
  max-width: 180px;
  margin-right: 8px;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-color);
}
.login-account-box .account-list .login-account-item .login-account-value[data-no-linked='true'] {
  color: var(--secondary-text-color);
}
.login-account-box .account-list .login-account-item:hover {
  opacity: var(--hover-opacity);
}
.login-account-box .account-list .arrow-right-icon {
  color: var(--text-color);
}
.login-account-box .account-list .arrow-right-icon svg {
  width: 12px;
  height: 12px;
}
.login-account-box .footer-box {
  position: absolute;
  bottom: 0;
}
`,L=a=>{let{userInfo:e,t:o}=a;return[{type:s.phone,icon:b,name:o("account.mobile"),value:e.phone,id:void 0,isOriginal:!1},{type:s.email,icon:y,name:o("account.email"),value:e.email,id:void 0,isOriginal:!1},{type:s.google,icon:_,name:o("login.google"),value:e.google_email,id:e.google_id,isOriginal:!1},{type:s.facebook,icon:w,name:o("login.facebook"),value:e.facebook_email,id:e.facebook_id,isOriginal:!1},{type:s.twitter,icon:k,name:o("login.twitter"),value:e.twitter_email,id:e.twitter_id,isOriginal:!1}]},R=a=>{var e,o,r,u;let t=a?.replace(" ","");if(t)if((e=t?.includes)!=null&&e.call(t,"@"))t=`${t.split("@")[0].substr(0,3)}****@${t.split("@")[1]}`;else if((o=t?.includes)!=null&&o.call(t,"+")){let l=C(t),c=l.nationalNumber.toString();t=`+${l.countryCallingCode} ${(r=c?.substr)==null?void 0:r.call(c,0,3)}****${(u=c?.substr)==null?void 0:u.call(c,-4)}`}else t&&(t=`${t.substr(0,3)}****${t.substr(-4)}`);else return t;return t},d,U=()=>{let{t:a}=P(),e=I(),{userInfo:o,showSelectSecurityAccount:r}=B(),u=N(),{run:t}=D(n=>{e("/account/verify",{state:{account:n.account,authType:d,pageType:"verify_security_account_bind_login_account"}})},{wait:3e3}),l=h.exports.useMemo(()=>L({userInfo:o,t:a}),[o]),c=n=>{var g,m,p,v,f,x;n.value||n.id?e("/login-account/bind",{state:{authType:n.type}}):!((g=o?.security_account)!=null&&g.email)&&!((m=o?.security_account)!=null&&m.phone)?u.error("Please bind security account first."):((p=o?.security_account)==null?void 0:p.email)&&((v=o?.security_account)==null?void 0:v.phone)?r(!0,{authType:d,pageType:"verify_security_account_bind_login_account"}):t({account:((f=o?.security_account)==null?void 0:f.email)||((x=o?.security_account)==null?void 0:x.phone)})};return i.createElement("div",{className:"login-account-box"},i.createElement("style",null,G),i.createElement(E,{displayBackBtn:!0},a("account.login_account")),i.createElement("div",{className:"scroll-content"},i.createElement("div",{className:"login-account-description"},a("account.login_account_hint")),i.createElement("div",{className:"account-list"},l?.map((n,g)=>i.createElement("div",{className:"login-account-item",onClick:()=>{d=n.type,c(n)},key:g},i.createElement("img",{src:n.icon}),i.createElement("div",{className:"login-account-name"},n.name),i.createElement("div",{className:"login-account-value","data-no-linked":!(n.value||n.id)},R(n.value||n.id)||a("account.not_linked")),i.createElement(T,{className:"arrow-right-icon",name:"arrow_right_icon"}))))),i.createElement($,{className:"footer-box-v2"}))},Y=U;export{R as j,Y as t,D as u,L as z};
