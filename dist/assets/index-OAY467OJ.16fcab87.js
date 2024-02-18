import{$ as N,a0 as C,a1 as P,a2 as k,a3 as h,a4 as m,a5 as L,a6 as o,a7 as y,a8 as O}from"./index.fbf0f355.js";var $=`.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
`,j=()=>{let{connect:w}=N(),f=C(),{setConnectionStatus:a,socialConnectCallback:t}=P(),v=async()=>{var r;try{let e=m.parse(L()?"":window.location.search,{ignoreQueryPrefix:!0}),c=e?.particleThirdpartyParams;if(!c){o()||a("disconnected");return}delete e.particleThirdpartyParams;let l=(window.location.origin+window.location.pathname+"?"+m.stringify(e)).replace(/\?$/,"");window.history.replaceState({},document.title,l),document.title=document.title||l;let g=JSON.parse(y.decode(c)),{code:s,nonce:n,appState:d,error:i}=g,T=d?JSON.parse(y.decode(d)):{},{authorization:x,chain:E,purpose:p,verifyToken:S}=T;if(i){o()||a("disconnected"),p?O.error(i):(r=t?.onError)==null||r.call(t,new Error(i));return}let u=n.split("@")[0];p==="bindLoginAccount"?f("/login-account/bind-loading",{state:{authType:u,verifyToken:S,code:s,nonce:n},replace:!0}):(await new Promise(b=>{setTimeout(()=>{b(!0)},20)}),await w({socialType:u,code:s,nonce:n,authorization:x,chain:E}))}catch{o()||a("disconnected")}};return k.exports.useEffect(()=>{v()},[]),h.createElement("div",{className:"index-container"},h.createElement("style",null,$))},J=j;export{J as default};
