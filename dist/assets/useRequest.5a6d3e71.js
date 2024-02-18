import{a2 as p,c0 as g,c1 as b,c3 as J,c4 as y,b$ as _,ay as K,c5 as $,bs as U,bt as z,c6 as Q,c7 as X,c8 as G,b_ as Y}from"./index.fbf0f355.js";import{t as Z}from"./throttle.73ef307f.js";import{u as x}from"./index.9705f4c9.js";var I=function(e){return function(n,r){var t=p.exports.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}};const L=I(p.exports.useEffect);var V=function(e,n){var r=n.manual,t=n.ready,u=t===void 0?!0:t,a=n.defaultParams,o=a===void 0?[]:a,c=n.refreshDeps,s=c===void 0?[]:c,i=n.refreshDepsAction,v=p.exports.useRef(!1);return v.current=!1,L(function(){!r&&u&&(v.current=!0,e.run.apply(e,g([],b(o),!1)))},[u]),L(function(){v.current||r||(v.current=!0,i?i():e.refresh())},g([],b(s),!1)),{onBefore:function(){if(!u)return{stopNow:!0}}}};V.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};const k=V;function q(e,n){var r=p.exports.useRef({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!J(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}var D=new Map,ee=function(e,n,r){var t=D.get(e);t?.timer&&clearTimeout(t.timer);var u=void 0;n>-1&&(u=setTimeout(function(){D.delete(e)},n)),D.set(e,y(y({},r),{timer:u}))},ne=function(e){return D.get(e)},O=new Map,re=function(e){return O.get(e)},te=function(e,n){O.set(e,n),n.then(function(r){return O.delete(e),r}).catch(function(){O.delete(e)})},w={},ie=function(e,n){w[e]&&w[e].forEach(function(r){return r(n)})},W=function(e,n){return w[e]||(w[e]=[]),w[e].push(n),function(){var t=w[e].indexOf(n);w[e].splice(t,1)}},ue=function(e,n){var r=n.cacheKey,t=n.cacheTime,u=t===void 0?5*60*1e3:t,a=n.staleTime,o=a===void 0?0:a,c=n.setCache,s=n.getCache,i=p.exports.useRef(),v=p.exports.useRef(),d=function(f,l){c?c(l):ee(f,u,l),ie(f,l.data)},h=function(f,l){return l===void 0&&(l=[]),s?s(l):ne(f)};return q(function(){if(!!r){var f=h(r);f&&Object.hasOwnProperty.call(f,"data")&&(e.state.data=f.data,e.state.params=f.params,(o===-1||new Date().getTime()-f.time<=o)&&(e.state.loading=!1)),i.current=W(r,function(l){e.setState({data:l})})}},[]),_(function(){var f;(f=i.current)===null||f===void 0||f.call(i)}),r?{onBefore:function(f){var l=h(r,f);return!l||!Object.hasOwnProperty.call(l,"data")?{}:o===-1||new Date().getTime()-l.time<=o?{loading:!1,data:l?.data,error:void 0,returnNow:!0}:{data:l?.data,error:void 0}},onRequest:function(f,l){var m=re(r);return m&&m!==v.current?{servicePromise:m}:(m=f.apply(void 0,g([],b(l),!1)),v.current=m,te(r,m),{servicePromise:m})},onSuccess:function(f,l){var m;r&&((m=i.current)===null||m===void 0||m.call(i),d(r,{data:f,params:l,time:new Date().getTime()}),i.current=W(r,function(S){e.setState({data:S})}))},onMutate:function(f){var l;r&&((l=i.current)===null||l===void 0||l.call(i),d(r,{data:f,params:e.state.params,time:new Date().getTime()}),i.current=W(r,function(m){e.setState({data:m})}))}}:{}};const ae=ue;var oe=function(e,n){var r=n.debounceWait,t=n.debounceLeading,u=n.debounceTrailing,a=n.debounceMaxWait,o=p.exports.useRef(),c=p.exports.useMemo(function(){var s={};return t!==void 0&&(s.leading=t),u!==void 0&&(s.trailing=u),a!==void 0&&(s.maxWait=a),s},[t,u,a]);return p.exports.useEffect(function(){if(r){var s=e.runAsync.bind(e);return o.current=K(function(i){i()},r,c),e.runAsync=function(){for(var i=[],v=0;v<arguments.length;v++)i[v]=arguments[v];return new Promise(function(d,h){var f;(f=o.current)===null||f===void 0||f.call(o,function(){s.apply(void 0,g([],b(i),!1)).then(d).catch(h)})})},function(){var i;(i=o.current)===null||i===void 0||i.cancel(),e.runAsync=s}}},[r,c]),r?{onCancel:function(){var s;(s=o.current)===null||s===void 0||s.cancel()}}:{}};const se=oe;var ce=function(e,n){var r=n.loadingDelay,t=n.ready,u=p.exports.useRef();if(!r)return{};var a=function(){u.current&&clearTimeout(u.current)};return{onBefore:function(){return a(),t!==!1&&(u.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){a()},onCancel:function(){a()}}};const fe=ce;function B(){return $?document.visibilityState!=="hidden":!0}var T=[];function le(e){return T.push(e),function(){var r=T.indexOf(e);T.splice(r,1)}}if($){var de=function(){if(!!B())for(var e=0;e<T.length;e++){var n=T[e];n()}};window.addEventListener("visibilitychange",de,!1)}var ve=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,u=t===void 0?!0:t,a=n.pollingErrorRetryCount,o=a===void 0?-1:a,c=p.exports.useRef(),s=p.exports.useRef(),i=p.exports.useRef(0),v=function(){var d;c.current&&clearTimeout(c.current),(d=s.current)===null||d===void 0||d.call(s)};return L(function(){r||v()},[r]),r?{onBefore:function(){v()},onError:function(){i.current+=1},onSuccess:function(){i.current=0},onFinally:function(){o===-1||o!==-1&&i.current<=o?c.current=setTimeout(function(){!u&&!B()?s.current=le(function(){e.refresh()}):e.refresh()},r):i.current=0},onCancel:function(){v()}}:{}};const pe=ve;function he(e,n){var r=!1;return function(){for(var t=[],u=0;u<arguments.length;u++)t[u]=arguments[u];r||(r=!0,e.apply(void 0,g([],b(t),!1)),setTimeout(function(){r=!1},n))}}function me(){return $&&typeof navigator.onLine<"u"?navigator.onLine:!0}var A=[];function ge(e){return A.push(e),function(){var r=A.indexOf(e);r>-1&&A.splice(r,1)}}if($){var N=function(){if(!(!B()||!me()))for(var e=0;e<A.length;e++){var n=A[e];n()}};window.addEventListener("visibilitychange",N,!1),window.addEventListener("focus",N,!1)}var be=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,u=t===void 0?5e3:t,a=p.exports.useRef(),o=function(){var c;(c=a.current)===null||c===void 0||c.call(a)};return p.exports.useEffect(function(){if(r){var c=he(e.refresh.bind(e),u);a.current=ge(function(){c()})}return function(){o()}},[r,u]),_(function(){o()}),{}};const ye=be;var Pe=function(e,n){var r=n.retryInterval,t=n.retryCount,u=p.exports.useRef(),a=p.exports.useRef(0),o=p.exports.useRef(!1);return t?{onBefore:function(){o.current||(a.current=0),o.current=!1,u.current&&clearTimeout(u.current)},onSuccess:function(){a.current=0},onError:function(){if(a.current+=1,t===-1||a.current<=t){var c=r??Math.min(1e3*Math.pow(2,a.current),3e4);u.current=setTimeout(function(){o.current=!0,e.refresh()},c)}else a.current=0},onCancel:function(){a.current=0,u.current&&clearTimeout(u.current)}}:{}};const Re=Pe;var we=function(e,n){var r=n.throttleWait,t=n.throttleLeading,u=n.throttleTrailing,a=p.exports.useRef(),o={};return t!==void 0&&(o.leading=t),u!==void 0&&(o.trailing=u),p.exports.useEffect(function(){if(r){var c=e.runAsync.bind(e);return a.current=Z(function(s){s()},r,o),e.runAsync=function(){for(var s=[],i=0;i<arguments.length;i++)s[i]=arguments[i];return new Promise(function(v,d){var h;(h=a.current)===null||h===void 0||h.call(a,function(){c.apply(void 0,g([],b(s),!1)).then(v).catch(d)})})},function(){var s;e.runAsync=c,(s=a.current)===null||s===void 0||s.cancel()}}},[r,t,u]),r?{onCancel:function(){var c;(c=a.current)===null||c===void 0||c.cancel()}}:{}};const xe=we;var Ce=function(e){U&&(z(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),p.exports.useEffect(function(){e?.()},[])};const Te=Ce;var Ae=function(){var e=b(p.exports.useState({}),2),n=e[1];return p.exports.useCallback(function(){return n({})},[])};const Se=Ae;var Ee=function(){function e(n,r,t,u){u===void 0&&(u={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=u,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=y(y(y({},this.state),{loading:!r.manual}),u)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=y(y({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var u=this.pluginImpls.map(function(a){var o;return(o=a[n])===null||o===void 0?void 0:o.call.apply(o,g([a],b(r),!1))}).filter(Boolean);return Object.assign.apply(Object,g([{}],b(u),!1))},e.prototype.runAsync=function(){for(var n,r,t,u,a,o,c,s,i,v,d=[],h=0;h<arguments.length;h++)d[h]=arguments[h];return Q(this,void 0,void 0,function(){var f,l,m,S,F,H,M,E,P,R,j;return X(this,function(C){switch(C.label){case 0:if(this.count+=1,f=this.count,l=this.runPluginHandler("onBefore",d),m=l.stopNow,S=m===void 0?!1:m,F=l.returnNow,H=F===void 0?!1:F,M=G(l,["stopNow","returnNow"]),S)return[2,new Promise(function(){})];if(this.setState(y({loading:!0,params:d},M)),H)return[2,Promise.resolve(M.data)];(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,d),C.label=1;case 1:return C.trys.push([1,3,,4]),E=this.runPluginHandler("onRequest",this.serviceRef.current,d).servicePromise,E||(E=(j=this.serviceRef).current.apply(j,g([],b(d),!1))),[4,E];case 2:return P=C.sent(),f!==this.count?[2,new Promise(function(){})]:(this.setState({data:P,error:void 0,loading:!1}),(u=(t=this.options).onSuccess)===null||u===void 0||u.call(t,P,d),this.runPluginHandler("onSuccess",P,d),(o=(a=this.options).onFinally)===null||o===void 0||o.call(a,d,P,void 0),f===this.count&&this.runPluginHandler("onFinally",d,P,void 0),[2,P]);case 3:if(R=C.sent(),f!==this.count)return[2,new Promise(function(){})];throw this.setState({error:R,loading:!1}),(s=(c=this.options).onError)===null||s===void 0||s.call(c,R,d),this.runPluginHandler("onError",R,d),(v=(i=this.options).onFinally)===null||v===void 0||v.call(i,d,void 0,R),f===this.count&&this.runPluginHandler("onFinally",d,void 0,R),R;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,g([],b(r),!1)).catch(function(u){n.options.onError||console.error(u)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,g([],b(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,g([],b(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=z(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}();const De=Ee;function Oe(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,u=t===void 0?!1:t,a=G(n,["manual"]);U&&n.defaultParams&&!Array.isArray(n.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof n.defaultParams));var o=y({manual:u},a),c=Y(e),s=Se(),i=q(function(){var v=r.map(function(d){var h;return(h=d?.onInit)===null||h===void 0?void 0:h.call(d,o)}).filter(Boolean);return new De(c,o,s,Object.assign.apply(Object,g([{}],b(v),!1)))},[]);return i.options=o,i.pluginImpls=r.map(function(v){return v(i,o)}),Te(function(){if(!u){var v=i.state.params||n.defaultParams||[];i.run.apply(i,g([],b(v),!1))}}),_(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:x(i.cancel.bind(i)),refresh:x(i.refresh.bind(i)),refreshAsync:x(i.refreshAsync.bind(i)),run:x(i.run.bind(i)),runAsync:x(i.runAsync.bind(i)),mutate:x(i.mutate.bind(i))}}function We(e,n,r){return Oe(e,n,g(g([],b(r||[]),!1),[se,fe,pe,ye,xe,k,ae,Re],!1))}export{We as u};