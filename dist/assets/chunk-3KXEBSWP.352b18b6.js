import{i as r}from"./chunk-QNAXMJIS.3ce008d2.js";import{a3 as l,cN as i,aq as u}from"./index.fbf0f355.js";import{v as s}from"./index.338a4e26.js";var o=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,d=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_open"})),c=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_close"})),p=`.password-input {
  position: relative;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  background: none;
}
.password-input input {
  width: 100%;
  height: 45px;
  padding: 0 8px;
  padding-left: 16px !important;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.password-input .ant-input-suffix {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 14px;
  cursor: pointer;
}
`,m=e=>{let n=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,p),l.createElement(s.Password,{ref:n,className:"password-input"+(e!=null&&e.className?` ${e?.className}`:""),iconRender:t=>t?l.createElement("div",null,l.createElement(d,null)):l.createElement("div",null,l.createElement(c,null)),onChange:t=>{var a;e!=null&&e.onChange&&((a=e?.onChange)==null||a.call(e,t.target.value))},defaultValue:e?.defaultValue,maxLength:e?.maxLength||20,onPressEnter:t=>{var a;return(a=e?.onPressEnter)==null?void 0:a.call(e,t)},onBlur:t=>{var a;return(a=e?.onBlur)==null?void 0:a.call(e,t)},autoFocus:i(e?.autoFocus)&&u()?!0:e?.autoFocus}))},h=m;export{h as B};
