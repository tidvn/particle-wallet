import{a2 as a,ax as c}from"./index.fbf0f355.js";import{u as f}from"./index.9705f4c9.js";var m=function(n,r,e){e===void 0&&(e={});var u=f(n),t=a.exports.useRef(null),i=a.exports.useCallback(function(){t.current&&clearInterval(t.current)},[]);return a.exports.useEffect(function(){if(!(!c(r)||r<0))return e.immediate&&u(),t.current=setInterval(u,r),i},[r,e.immediate]),i};const o=m;export{o as B};