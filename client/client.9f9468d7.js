function e(){}function t(e,t){for(const s in t)e[s]=t[s];return e}function s(e){return e()}function r(){return Object.create(null)}function n(e){e.forEach(s)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t,s){if(e){const r=l(e,t,s);return e[0](r)}}function l(e,s,r){return e[1]?t({},t(s.$$scope.ctx,e[1](r?r(s):{}))):s.$$scope.ctx}function c(e,s,r,n){return e[1]?t({},t(s.$$scope.changed||{},e[1](n?n(r):{}))):s.$$scope.changed||{}}function f(e,t){e.appendChild(t)}function u(e,t,s){e.insertBefore(t,s||null)}function h(e){e.parentNode.removeChild(e)}function d(e){for(;e.previousSibling;)e.parentNode.removeChild(e.previousSibling)}function p(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function m(e){return document.createElement(e)}function g(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function $(e){return document.createTextNode(e)}function v(){return $(" ")}function w(){return $("")}function b(e,t,s,r){return e.addEventListener(t,s,r),()=>e.removeEventListener(t,s,r)}function E(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)}function y(e,t,s){e.setAttributeNS("http://www.w3.org/1999/xlink",t,s)}function x(e){return Array.from(e.childNodes)}function k(e,t,s,r){for(let r=0;r<e.length;r+=1){const n=e[r];if(n.nodeName===t){for(let e=0;e<n.attributes.length;e+=1){const t=n.attributes[e];s[t.name]||n.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?g(t):m(t)}function _(e,t){for(let s=0;s<e.length;s+=1){const r=e[s];if(3===r.nodeType)return r.data=t,e.splice(s,1)[0]}return $(t)}function S(e,t){t=""+t,e.data!==t&&(e.data=t)}function C(e,t,s){e.style.setProperty(t,s)}function A(e,t,s){e.classList[s?"add":"remove"](t)}let N;function z(e){N=e}function R(){if(!N)throw new Error("Function called outside component initialization");return N}function q(e){R().$$.on_mount.push(e)}function P(e){R().$$.on_destroy.push(e)}const j=[],L=Promise.resolve();let D=!1;const W=[],I=[],O=[];function V(e){W.push(e)}function H(e){I.push(e)}function B(){const e=new Set;do{for(;j.length;){const e=j.shift();z(e),U(e.$$)}for(;W.length;)W.shift()();for(;I.length;){const t=I.pop();e.has(t)||(t(),e.add(t))}}while(j.length);for(;O.length;)O.pop()();D=!1}function U(e){e.fragment&&(e.update(e.dirty),n(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(H))}let M;function T(){M={remaining:0,callbacks:[]}}function F(){M.remaining||n(M.callbacks)}function G(e){M.callbacks.push(e)}function J(e,t){const s={},r={},n={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(r[e]=1);for(const e in i)n[e]||(s[e]=i[e],n[e]=1);e[o]=i}else for(const e in a)n[e]=1}for(const e in r)e in s||(s[e]=void 0);return s}function K(e,t,r){const{fragment:a,on_mount:i,on_destroy:l,after_render:c}=e.$$;a.m(t,r),H(()=>{const t=i.map(s).filter(o);l?l.push(...t):n(t),e.$$.on_mount=[]}),c.forEach(H)}function Y(e,t){e.$$.dirty||(j.push(e),D||(D=!0,L.then(B)),e.$$.dirty=r()),e.$$.dirty[t]=!0}function X(t,s,o,a,i,l){const c=N;z(t);const f=s.props||{},u=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(c?c.$$.context:[]),callbacks:r(),dirty:null};let h=!1;u.ctx=o?o(t,f,(e,s)=>{u.ctx&&i(u.ctx[e],u.ctx[e]=s)&&(u.bound[e]&&u.bound[e](s),h&&Y(t,e))}):f,u.update(),h=!0,n(u.before_render),u.fragment=a(u.ctx),s.target&&(s.hydrate?u.fragment.l(x(s.target)):u.fragment.c(),s.intro&&t.$$.fragment.i&&t.$$.fragment.i(),K(t,s.target,s.anchor),B()),z(c)}class Q{$destroy(){var t,s;s=!0,(t=this).$$&&(n(t.$$.on_destroy),t.$$.fragment.d(s),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e}$on(e,t){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(t),()=>{const e=s.indexOf(t);-1!==e&&s.splice(e,1)}}$set(){}}function Z(t,s=e){let r;const n=[];function o(e){if(a(t,e)){if(t=e,!r)return;n.forEach(e=>e[1]()),n.forEach(e=>e[0](t))}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return n.push(l),1===n.length&&(r=s(o)||e),a(t),()=>{const e=n.indexOf(l);-1!==e&&n.splice(e,1),0===n.length&&r()}}}}const ee={},te=()=>({});function se(t){var s,r,n,o,a,i,l,c,d,p,g,w,b,E,y,S;return{c(){s=m("nav"),r=m("a"),n=$("home"),a=v(),i=m("a"),l=$("about"),d=v(),p=m("a"),g=$("blog"),b=v(),E=m("a"),y=$("Experiencia\r\n    profesional"),this.h()},l(e){var t=x(s=k(e,"NAV",{class:!0},!1)),o=x(r=k(t,"A",{class:!0,href:!0},!1));n=_(o,"home"),o.forEach(h),a=_(t,"\r\n  ");var c=x(i=k(t,"A",{class:!0,href:!0},!1));l=_(c,"about"),c.forEach(h),d=_(t,"\r\n  ");var f=x(p=k(t,"A",{rel:!0,class:!0,href:!0},!1));g=_(f,"blog"),f.forEach(h),b=_(t,"\r\n  ");var u=x(E=k(t,"A",{rel:!0,class:!0,href:!0},!1));y=_(u,"Experiencia\r\n    profesional"),u.forEach(h),t.forEach(h),this.h()},h(){r.className=o=(void 0===t.segment?"selected":"")+" svelte-lqnt",r.href=".",i.className=c=("about"===t.segment?"selected":"")+" svelte-lqnt",i.href="about",p.rel="prefetch",p.className=w=("blog"===t.segment?"selected":"")+" svelte-lqnt",p.href="blog",E.rel="prefetch",E.className=S=("work-experience"===t.segment?"selected":"")+" svelte-lqnt",E.href="work-experience",s.className="svelte-lqnt"},m(e,t){u(e,s,t),f(s,r),f(r,n),f(s,a),f(s,i),f(i,l),f(s,d),f(s,p),f(p,g),f(s,b),f(s,E),f(E,y)},p(e,t){e.segment&&o!==(o=(void 0===t.segment?"selected":"")+" svelte-lqnt")&&(r.className=o),e.segment&&c!==(c=("about"===t.segment?"selected":"")+" svelte-lqnt")&&(i.className=c),e.segment&&w!==(w=("blog"===t.segment?"selected":"")+" svelte-lqnt")&&(p.className=w),e.segment&&S!==(S=("work-experience"===t.segment?"selected":"")+" svelte-lqnt")&&(E.className=S)},i:e,o:e,d(e){e&&h(s)}}}function re(e,t,s){let{segment:r}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment)},{segment:r}}class ne extends Q{constructor(e){super(),X(this,e,re,se,a,["segment"])}}function oe(t){var s,r,n;return{c(){s=g("svg"),r=g("path"),this.h()},l(e){var t=x(s=k(e,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},!0));x(r=k(t,"path",{d:!0},!0)).forEach(h),t.forEach(h),this.h()},h(){E(r,"d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"),E(s,"xmlns","http://www.w3.org/2000/svg"),E(s,"width",t.size),E(s,"height",t.size),E(s,"fill","none"),E(s,"viewBox","0 0 24 24"),E(s,"stroke","currentColor"),E(s,"stroke-width",t.strokeWidth),E(s,"stroke-linecap","round"),E(s,"stroke-linejoin","round"),E(s,"class",n="feather feather-github "+t.customClass)},m(e,t){u(e,s,t),f(s,r)},p(e,t){e.size&&(E(s,"width",t.size),E(s,"height",t.size)),e.strokeWidth&&E(s,"stroke-width",t.strokeWidth),e.customClass&&n!==(n="feather feather-github "+t.customClass)&&E(s,"class",n)},i:e,o:e,d(e){e&&h(s)}}}function ae(e,t,s){let{size:r="100%",strokeWidth:n=2,class:o=""}=t;return"100%"!==r&&s("size",r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),e.$set=e=>{"size"in e&&s("size",r=e.size),"strokeWidth"in e&&s("strokeWidth",n=e.strokeWidth),"class"in e&&s("customClass",o=e.class)},{size:r,strokeWidth:n,customClass:o}}class ie extends Q{constructor(e){super(),X(this,e,ae,oe,a,["size","strokeWidth","class"])}}function le(t){var s,r,n;return{c(){s=g("svg"),r=g("path"),this.h()},l(e){var t=x(s=k(e,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},!0));x(r=k(t,"path",{d:!0},!0)).forEach(h),t.forEach(h),this.h()},h(){E(r,"d","M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"),E(s,"xmlns","http://www.w3.org/2000/svg"),E(s,"width",t.size),E(s,"height",t.size),E(s,"fill","none"),E(s,"viewBox","0 0 24 24"),E(s,"stroke","currentColor"),E(s,"stroke-width",t.strokeWidth),E(s,"stroke-linecap","round"),E(s,"stroke-linejoin","round"),E(s,"class",n="feather feather-gitlab "+t.customClass)},m(e,t){u(e,s,t),f(s,r)},p(e,t){e.size&&(E(s,"width",t.size),E(s,"height",t.size)),e.strokeWidth&&E(s,"stroke-width",t.strokeWidth),e.customClass&&n!==(n="feather feather-gitlab "+t.customClass)&&E(s,"class",n)},i:e,o:e,d(e){e&&h(s)}}}function ce(e,t,s){let{size:r="100%",strokeWidth:n=2,class:o=""}=t;return"100%"!==r&&s("size",r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),e.$set=e=>{"size"in e&&s("size",r=e.size),"strokeWidth"in e&&s("strokeWidth",n=e.strokeWidth),"class"in e&&s("customClass",o=e.class)},{size:r,strokeWidth:n,customClass:o}}class fe extends Q{constructor(e){super(),X(this,e,ce,le,a,["size","strokeWidth","class"])}}function ue(t){var s,r,n;return{c(){s=g("svg"),r=g("path"),this.h()},l(e){var t=x(s=k(e,"svg",{xmlns:!0,width:!0,height:!0,fill:!0,viewBox:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0},!0));x(r=k(t,"path",{d:!0},!0)).forEach(h),t.forEach(h),this.h()},h(){E(r,"d","M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"),E(s,"xmlns","http://www.w3.org/2000/svg"),E(s,"width",t.size),E(s,"height",t.size),E(s,"fill","none"),E(s,"viewBox","0 0 24 24"),E(s,"stroke","currentColor"),E(s,"stroke-width",t.strokeWidth),E(s,"stroke-linecap","round"),E(s,"stroke-linejoin","round"),E(s,"class",n="feather feather-twitter "+t.customClass)},m(e,t){u(e,s,t),f(s,r)},p(e,t){e.size&&(E(s,"width",t.size),E(s,"height",t.size)),e.strokeWidth&&E(s,"stroke-width",t.strokeWidth),e.customClass&&n!==(n="feather feather-twitter "+t.customClass)&&E(s,"class",n)},i:e,o:e,d(e){e&&h(s)}}}function he(e,t,s){let{size:r="100%",strokeWidth:n=2,class:o=""}=t;return"100%"!==r&&s("size",r="x"===r.slice(-1)?r.slice(0,r.length-1)+"em":parseInt(r)+"px"),e.$set=e=>{"size"in e&&s("size",r=e.size),"strokeWidth"in e&&s("strokeWidth",n=e.strokeWidth),"class"in e&&s("customClass",o=e.class)},{size:r,strokeWidth:n,customClass:o}}class de extends Q{constructor(e){super(),X(this,e,he,ue,a,["size","strokeWidth","class"])}}function pe(t){var s,r,n,o,a,i,l,c=new de({props:{size:"24",class:"twitter-icon",currentColor:"yellow"}}),d=new ie({props:{size:"24",class:"Github-icon",currentColor:"yellow"}}),p=new fe({props:{size:"24",class:"Gitlab-icon",currentColor:"yellow"}});return{c(){s=m("div"),r=m("a"),c.$$.fragment.c(),n=v(),o=m("a"),d.$$.fragment.c(),a=v(),i=m("a"),p.$$.fragment.c(),this.h()},l(e){var t=x(s=k(e,"DIV",{class:!0,"wfd-id":!0},!1)),l=x(r=k(t,"A",{href:!0,target:!0,class:!0},!1));c.$$.fragment.l(l),l.forEach(h),n=_(t,"\r\n  ");var f=x(o=k(t,"A",{href:!0,target:!0,class:!0},!1));d.$$.fragment.l(f),f.forEach(h),a=_(t,"\r\n  ");var u=x(i=k(t,"A",{href:!0,target:!0,class:!0},!1));p.$$.fragment.l(u),u.forEach(h),t.forEach(h),this.h()},h(){r.href="https://twitter.com/Emarcia14",r.target="_blank",r.className="svelte-3asnh3",o.href="https://github.com/erickmarcia",o.target="_blank",o.className="svelte-3asnh3",i.href="https://gitlab.com/mar_cia14",i.target="_blank",i.className="svelte-3asnh3",s.className="social_icons my-5 svelte-3asnh3",E(s,"wfd-id","251")},m(e,t){u(e,s,t),f(s,r),K(c,r,null),f(s,n),f(s,o),K(d,o,null),f(s,a),f(s,i),K(p,i,null),l=!0},p:e,i(e){l||(c.$$.fragment.i(e),d.$$.fragment.i(e),p.$$.fragment.i(e),l=!0)},o(e){c.$$.fragment.o(e),d.$$.fragment.o(e),p.$$.fragment.o(e),l=!1},d(e){e&&h(s),c.$destroy(),d.$destroy(),p.$destroy()}}}class me extends Q{constructor(e){super(),X(this,e,null,pe,a,[])}}function ge(t){var s,r,n,o,a,i,l,c,d,p,g,w,b,y,S,C,A=new me({});return{c(){s=m("section"),r=m("div"),n=m("div"),o=m("div"),a=m("div"),i=m("div"),l=m("h3"),c=$("¡Hola!"),d=v(),p=m("h1"),g=$("Soy Erick Marcia"),w=v(),b=m("h5"),y=$("Diseñador & Desarrollador de\r\n              Software"),S=v(),A.$$.fragment.c(),this.h()},l(e){var t=x(s=k(e,"SECTION",{class:!0,"wfd-id":!0},!1)),f=x(r=k(t,"DIV",{class:!0,"wfd-id":!0},!1)),u=x(n=k(f,"DIV",{class:!0,"wfd-id":!0},!1)),m=x(o=k(u,"DIV",{class:!0,"wfd-id":!0},!1)),$=x(a=k(m,"DIV",{class:!0,"wfd-id":!0},!1)),v=x(i=k($,"DIV",{class:!0,"wfd-id":!0},!1)),E=x(l=k(v,"H3",{},!1));c=_(E,"¡Hola!"),E.forEach(h),d=_(v,"\r\n            ");var C=x(p=k(v,"H1",{},!1));g=_(C,"Soy Erick Marcia"),C.forEach(h),w=_(v,"\r\n            ");var N=x(b=k(v,"H5",{},!1));y=_(N,"Diseñador & Desarrollador de\r\n              Software"),N.forEach(h),S=_(v,"\r\n            "),A.$$.fragment.l(v),v.forEach(h),$.forEach(h),m.forEach(h),u.forEach(h),f.forEach(h),t.forEach(h),this.h()},h(){i.className="banner_content",E(i,"wfd-id","249"),a.className="col-lg-6",E(a,"wfd-id","248"),o.className="row align-items-center justify-content-between",E(o,"wfd-id","245"),n.className="container",E(n,"wfd-id","244"),r.className="banner_inner",E(r,"wfd-id","243"),s.className="home_banner_area",E(s,"wfd-id","242")},m(e,t){u(e,s,t),f(s,r),f(r,n),f(n,o),f(o,a),f(a,i),f(i,l),f(l,c),f(i,d),f(i,p),f(p,g),f(i,w),f(i,b),f(b,y),f(i,S),K(A,i,null),C=!0},p:e,i(e){C||(A.$$.fragment.i(e),C=!0)},o(e){A.$$.fragment.o(e),C=!1},d(e){e&&h(s),A.$destroy()}}}class $e extends Q{constructor(e){super(),X(this,e,null,ge,a,[])}}function ve(e){var t,s,r,n,o,a,i,l,c,d,p,$,w,b,S,C,A=new ne({props:{segment:e.segment}}),N=new $e({});return{c(){t=m("header"),s=m("div"),r=m("div"),A.$$.fragment.c(),n=v(),o=m("div"),N.$$.fragment.c(),a=v(),i=m("div"),l=g("svg"),c=g("defs"),d=g("path"),p=g("g"),$=g("use"),w=g("use"),b=g("use"),S=g("use"),this.h()},l(e){var f=x(t=k(e,"HEADER",{},!1)),u=x(s=k(f,"DIV",{class:!0},!1)),m=x(r=k(u,"DIV",{class:!0},!1));A.$$.fragment.l(m),m.forEach(h),n=_(u,"\r\n    \r\n    ");var g=x(o=k(u,"DIV",{class:!0},!1));N.$$.fragment.l(g),g.forEach(h),a=_(u,"\r\n    \r\n    ");var v=x(i=k(u,"DIV",{},!1)),E=x(l=k(v,"svg",{class:!0,xmlns:!0,"xmlns:xlink":!0,viewBox:!0,preserveAspectRatio:!0,"shape-rendering":!0},!0)),y=x(c=k(E,"defs",{},!0));x(d=k(y,"path",{id:!0,d:!0},!0)).forEach(h),y.forEach(h);var C=x(p=k(E,"g",{class:!0},!0));x($=k(C,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0},!0)).forEach(h),x(w=k(C,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0},!0)).forEach(h),x(b=k(C,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0},!0)).forEach(h),x(S=k(C,"use",{"xlink:href":!0,x:!0,y:!0,fill:!0,class:!0},!0)).forEach(h),C.forEach(h),E.forEach(h),v.forEach(h),u.forEach(h),f.forEach(h),this.h()},h(){r.className="nav",o.className="inner-header flex svelte-fic7qq",E(d,"id","gentle-wave"),E(d,"d","M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"),y($,"xlink:href","#gentle-wave"),E($,"x","48"),E($,"y","0"),E($,"fill","rgba(255,255,255,0.7"),E($,"class","svelte-fic7qq"),y(w,"xlink:href","#gentle-wave"),E(w,"x","48"),E(w,"y","3"),E(w,"fill","rgba(255,255,255,0.5)"),E(w,"class","svelte-fic7qq"),y(b,"xlink:href","#gentle-wave"),E(b,"x","48"),E(b,"y","5"),E(b,"fill","rgba(255,255,255,0.3)"),E(b,"class","svelte-fic7qq"),y(S,"xlink:href","#gentle-wave"),E(S,"x","48"),E(S,"y","7"),E(S,"fill","#fff"),E(S,"class","svelte-fic7qq"),E(p,"class","parallax svelte-fic7qq"),E(l,"class","waves svelte-fic7qq"),E(l,"xmlns","http://www.w3.org/2000/svg"),E(l,"xmlns:xlink","http://www.w3.org/1999/xlink"),E(l,"viewBox","0 24 150 28"),E(l,"preserveAspectRatio","none"),E(l,"shape-rendering","auto"),s.className="header svelte-fic7qq"},m(e,h){u(e,t,h),f(t,s),f(s,r),K(A,r,null),f(s,n),f(s,o),K(N,o,null),f(s,a),f(s,i),f(i,l),f(l,c),f(c,d),f(l,p),f(p,$),f(p,w),f(p,b),f(p,S),C=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),A.$set(s)},i(e){C||(A.$$.fragment.i(e),N.$$.fragment.i(e),C=!0)},o(e){A.$$.fragment.o(e),N.$$.fragment.o(e),C=!1},d(e){e&&h(t),A.$destroy(),N.$destroy()}}}function we(e,t,s){let{segment:r}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment)},{segment:r}}class be extends Q{constructor(e){super(),X(this,e,we,ve,a,["segment"])}}function Ee(e){var t,s,r,n,o,a,d,p,g,w,b,E,y,S,C,A,N=(new Date).getFullYear(),z=new be({props:{segment:e.segment}});const R=e.$$slots.default,q=i(R,e,null);return{c(){t=m("div"),z.$$.fragment.c(),s=v(),r=m("main"),q&&q.c(),n=v(),o=m("footer"),a=m("span"),d=$("© "),p=$(N),g=$(" Sitio en construcción.\r\n      Web Diseñada por "),w=m("a"),b=$("Erick Marcia"),E=$(".\r\n      usando"),y=m("a"),S=$("Sapper"),C=$("."),this.h()},l(e){var i=x(t=k(e,"DIV",{class:!0},!1));z.$$.fragment.l(i),s=_(i,"\r\n\r\n  ");var l=x(r=k(i,"MAIN",{class:!0},!1));q&&q.l(l),l.forEach(h),n=_(i,"\r\n\r\n  ");var c=x(o=k(i,"FOOTER",{class:!0},!1)),f=x(a=k(c,"SPAN",{},!1));d=_(f,"© "),p=_(f,N),g=_(f," Sitio en construcción.\r\n      Web Diseñada por ");var u=x(w=k(f,"A",{href:!0,target:!0},!1));b=_(u,"Erick Marcia"),u.forEach(h),E=_(f,".\r\n      usando");var m=x(y=k(f,"A",{href:!0,target:!0},!1));S=_(m,"Sapper"),m.forEach(h),C=_(f,"."),f.forEach(h),c.forEach(h),i.forEach(h),this.h()},h(){r.className="svelte-1eajn4l",w.href="https://www.twitter.com/Emarcia14",w.target="_blank",y.href="https://sapper.svelte.dev",y.target="_blank",o.className="svelte-1eajn4l",t.className="layout svelte-1eajn4l"},m(e,i){u(e,t,i),K(z,t,null),f(t,s),f(t,r),q&&q.m(r,null),f(t,n),f(t,o),f(o,a),f(a,d),f(a,p),f(a,g),f(a,w),f(w,b),f(a,E),f(a,y),f(y,S),f(a,C),A=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),z.$set(s),q&&q.p&&e.$$scope&&q.p(c(R,t,e,null),l(R,t,null))},i(e){A||(z.$$.fragment.i(e),q&&q.i&&q.i(e),A=!0)},o(e){z.$$.fragment.o(e),q&&q.o&&q.o(e),A=!1},d(e){e&&h(t),z.$destroy(),q&&q.d(e)}}}function ye(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:o}=t;return e.$set=e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",o=e.$$scope)},{segment:r,$$slots:n,$$scope:o}}class xe extends Q{constructor(e){super(),X(this,e,ye,Ee,a,["segment"])}}function ke(e){var t,s,r=e.error.stack;return{c(){t=m("pre"),s=$(r)},l(e){var n=x(t=k(e,"PRE",{},!1));s=_(n,r),n.forEach(h)},m(e,r){u(e,t,r),f(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&S(s,r)},d(e){e&&h(t)}}}function _e(t){var s,r,n,o,a,i,l,c,d,p=t.error.message;document.title=s=t.status;var g=t.dev&&t.error.stack&&ke(t);return{c(){r=v(),n=m("h1"),o=$(t.status),a=v(),i=m("p"),l=$(p),c=v(),g&&g.c(),d=w(),this.h()},l(e){r=_(e,"\r\n\r\n");var s=x(n=k(e,"H1",{class:!0},!1));o=_(s,t.status),s.forEach(h),a=_(e,"\r\n\r\n");var f=x(i=k(e,"P",{class:!0},!1));l=_(f,p),f.forEach(h),c=_(e,"\r\n\r\n"),g&&g.l(e),d=w(),this.h()},h(){n.className="svelte-13vgy2g",i.className="svelte-13vgy2g"},m(e,t){u(e,r,t),u(e,n,t),f(n,o),u(e,a,t),u(e,i,t),f(i,l),u(e,c,t),g&&g.m(e,t),u(e,d,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&S(o,t.status),e.error&&p!==(p=t.error.message)&&S(l,p),t.dev&&t.error.stack?g?g.p(e,t):((g=ke(t)).c(),g.m(d.parentNode,d)):g&&(g.d(1),g=null)},i:e,o:e,d(e){e&&(h(r),h(n),h(a),h(i),h(c)),g&&g.d(e),e&&h(d)}}}function Se(e,t,s){let{status:r,error:n}=t;return e.$set=e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)},{status:r,error:n,dev:false}}class Ce extends Q{constructor(e){super(),X(this,e,Se,_e,a,["status","error"])}}function Ae(e){var s,r,n=[e.level1.props],o=e.level1.component;function a(e){let s={};for(var r=0;r<n.length;r+=1)s=t(s,n[r]);return{props:s}}if(o)var i=new o(a());return{c(){i&&i.$$.fragment.c(),s=w()},l(e){i&&i.$$.fragment.l(e),s=w()},m(e,t){i&&K(i,e,t),u(e,s,t),r=!0},p(e,t){var r=e.level1?J(n,[t.level1.props]):{};if(o!==(o=t.level1.component)){if(i){T();const e=i;G(()=>{e.$destroy()}),e.$$.fragment.o(1),F()}o?((i=new o(a())).$$.fragment.c(),i.$$.fragment.i(1),K(i,s.parentNode,s)):i=null}else o&&i.$set(r)},i(e){r||(i&&i.$$.fragment.i(e),r=!0)},o(e){i&&i.$$.fragment.o(e),r=!1},d(e){e&&h(s),i&&i.$destroy(e)}}}function Ne(e){var t,s=new Ce({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){K(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function ze(e){var t,s,r,n,o=[Ne,Ae],a=[];function i(e){return e.error?0:1}return t=i(e),s=a[t]=o[t](e),{c(){s.c(),r=w()},l(e){s.l(e),r=w()},m(e,s){a[t].m(e,s),u(e,r,s),n=!0},p(e,n){var l=t;(t=i(n))===l?a[t].p(e,n):(T(),G(()=>{a[l].d(1),a[l]=null}),s.o(1),F(),(s=a[t])||(s=a[t]=o[t](n)).c(),s.i(1),s.m(r.parentNode,r))},i(e){n||(s&&s.i(),n=!0)},o(e){s&&s.o(),n=!1},d(e){a[t].d(e),e&&h(r)}}}function Re(e){var s,r=[{segment:e.segments[0]},e.level0.props];let n={$$slots:{default:[ze]},$$scope:{ctx:e}};for(var o=0;o<r.length;o+=1)n=t(n,r[o]);var a=new xe({props:n});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,t){K(a,e,t),s=!0},p(e,t){var s=e.segments||e.level0?J(r,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(s.$$scope={changed:e,ctx:t}),a.$set(s)},i(e){s||(a.$$.fragment.i(e),s=!0)},o(e){a.$$.fragment.o(e),s=!1},d(e){a.$destroy(e)}}}function qe(e,t,s){let{stores:r,error:n,status:o,segments:a,level0:i,level1:l=null,notify:c}=t;var f,u,h;return f=c,R().$$.after_render.push(f),u=ee,h=r,R().$$.context.set(u,h),e.$set=e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",o=e.status),"segments"in e&&s("segments",a=e.segments),"level0"in e&&s("level0",i=e.level0),"level1"in e&&s("level1",l=e.level1),"notify"in e&&s("notify",c=e.notify)},{stores:r,error:n,status:o,segments:a,level0:i,level1:l,notify:c}}class Pe extends Q{constructor(e){super(),X(this,e,qe,Re,a,["stores","error","status","segments","level0","level1","notify"])}}const je=[/^\/blog\.json$/,/^\/blog\/posts\/xamarin-conectar-un-dispositivo-para-probar-apps\/?$/,/^\/blog\/posts\/Crear-una-Api-Rest-con-AspNet-MVC-y-CSharp\/?$/,/^\/blog\/posts\/php-xdebug-laragon-visual-studio-code\/?$/,/^\/blog\/posts\/base-de-datos-error-1115-laragon\/?$/,/^\/blog\/posts\/segundo-advientocsharp\/?$/,/^\/blog\/posts\/xamarin-forms-maui\/?$/,/^\/blog\/posts\/C-y-Devexpress\/?$/,/^\/blog\/([^\/]+?)\.json$/],Le=[{js:()=>import("./index.200e7281.js"),css:[]},{js:()=>import("./work-experience.83a09b93.js"),css:[]},{js:()=>import("./contact.45c1f1b4.js"),css:[]},{js:()=>import("./logros.e0b0e000.js"),css:[]},{js:()=>import("./about.b3c50dcd.js"),css:[]},{js:()=>import("./skill.39e2920e.js"),css:[]},{js:()=>import("./index.1b3e44bb.js"),css:[]},{js:()=>import("./[slug].5152ef10.js"),css:[]}],De=(We=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/work-experience\/?$/,parts:[{i:1}]},{pattern:/^\/contact\/?$/,parts:[{i:2}]},{pattern:/^\/logros\/?$/,parts:[{i:3}]},{pattern:/^\/about\/?$/,parts:[{i:4}]},{pattern:/^\/skill\/?$/,parts:[{i:5}]},{pattern:/^\/blog\/?$/,parts:[{i:6}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:7,params:e=>({slug:We(e[1])})}]}]);var We;function Ie(e,t={replaceState:!1}){const s=st(new URL(e,document.baseURI));return s?(Ze[t.replaceState?"replaceState":"pushState"]({id:Xe},"",e),nt(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}const Oe="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ve,He,Be,Ue=!1,Me=[],Te="{}";const Fe={page:function(e){const t=Z(e);let s=!0;return{notify:function(){s=!0,t.update(e=>e)},set:function(e){s=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||s&&t!==r)&&e(r=t)})}}}({}),preloading:Z(null),session:Z(Oe&&Oe.session)};let Ge,Je;Fe.session.subscribe(async e=>{if(Ge=e,!Ue)return;Je=!0;const t=st(new URL(location.href)),s=He={},{redirect:r,props:n,branch:o}=await at(t);s===He&&await ot(r,o,n,t.page)});let Ke,Ye=null;let Xe,Qe=1;const Ze="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},et={};function tt(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function st(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Oe.baseUrl))return null;let t=e.pathname.slice(Oe.baseUrl.length);if(""===t&&(t="/"),!je.some(e=>e.test(t)))for(let s=0;s<De.length;s+=1){const r=De[s],n=r.pattern.exec(t);if(n){const s=tt(e.search),o=r.parts[r.parts.length-1],a=o.params?o.params(n):{},i={host:location.host,path:t,query:s,params:a};return{href:e.href,route:r,match:n,page:i}}}}function rt(){return{x:pageXOffset,y:pageYOffset}}async function nt(e,t,s,r){if(t)Xe=t;else{const e=rt();et[Xe]=e,t=Xe=++Qe,et[Xe]=s?e:{x:0,y:0}}Xe=t,Ve&&Fe.preloading.set(!0);const n=Ye&&Ye.href===e.href?Ye.promise:at(e);Ye=null;const o=He={},{redirect:a,props:i,branch:l}=await n;if(o===He&&(await ot(a,l,i,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=et[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}et[Xe]=e,e&&scrollTo(e.x,e.y)}}async function ot(e,t,s,r){if(e)return Ie(e.location,{replaceState:!0});if(Fe.page.set(r),Fe.preloading.set(!1),Ve)Ve.$set(s);else{s.stores={page:{subscribe:Fe.page.subscribe},preloading:{subscribe:Fe.preloading.subscribe},session:Fe.session},s.level0={props:await Be},s.notify=Fe.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)lt(e.nextSibling);lt(e),lt(t)}Ve=new Pe({target:Ke,props:s,hydrate:!0})}Me=t,Te=JSON.stringify(r.query),Ue=!0,Je=!1}async function at(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};let i;Be||(Be=Oe.preloaded[0]||te.call(a,{host:s.host,path:s.path,query:s.query,params:{}},Ge));let l=1;try{const n=JSON.stringify(s.query),c=t.pattern.exec(s.path);let f=!1;i=await Promise.all(t.parts.map(async(t,i)=>{const u=r[i];if(function(e,t,s,r){if(r!==Te)return!0;const n=Me[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(i,u,c,n)&&(f=!0),o.segments[l]=r[i+1],!t)return{segment:u};const h=l++;if(!Je&&!f&&Me[i]&&Me[i].part===t.i)return Me[i];f=!1;const{default:d,preload:p}=await function(e){const t="string"==typeof e.css?[]:e.css.map(it);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Le[t.i]);let m;return m=Ue||!Oe.preloaded[i+1]?p?await p.call(a,{host:s.host,path:s.path,query:s.query,params:t.params?t.params(e.match):{}},Ge):{}:Oe.preloaded[i+1],o["level"+h]={component:d,props:m,segment:u,match:c,part:t.i}}))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:n,props:o,branch:i}}function it(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=s,document.head.appendChild(r)})}function lt(e){e.parentNode.removeChild(e)}function ct(e){const t=st(new URL(e,document.baseURI));if(t)return Ye&&e===Ye.href||function(e,t){Ye={href:e,promise:t}}(e,at(t)),Ye.promise}let ft;function ut(e){clearTimeout(ft),ft=setTimeout(()=>{ht(e)},20)}function ht(e){const t=pt(e.target);t&&"prefetch"===t.rel&&ct(t.href)}function dt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=pt(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const o=st(n);if(o){nt(o,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),Ze.pushState({id:Xe},"",n.href)}}function pt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function mt(e){if(et[Xe]=rt(),e.state){const t=st(new URL(location.href));t?nt(t,e.state.id):location.href=location.href}else Qe=Qe+1,function(e){Xe=e}(Qe),Ze.replaceState({id:Xe},"",location.href)}const gt=()=>{return e=ee,R().$$.context.get(e);var e};var $t;$t={target:document.querySelector("#sapper")},"scrollRestoration"in Ze&&(Ze.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Ze.scrollRestoration="auto"}),addEventListener("load",()=>{Ze.scrollRestoration="manual"}),function(e){Ke=e}($t.target),addEventListener("click",dt),addEventListener("popstate",mt),addEventListener("touchstart",ht),addEventListener("mousemove",ut),Promise.resolve().then(()=>{const{hash:e,href:t}=location;Ze.replaceState({id:Qe},"",t);const s=new URL(location.href);if(Oe.error)return function(e){const{host:t,pathname:s,search:r}=location,{session:n,preloaded:o,status:a,error:i}=Oe;Be||(Be=o&&o[0]),ot(null,[],{error:i,status:a,session:n,level0:{props:Be},level1:{props:{status:a,error:i},component:Ce},segments:o},{host:t,path:s,query:tt(r),params:{}})}();const r=st(s);return r?nt(r,Qe,!0,e):void 0});export{T as A,n as B,H as C,d as D,gt as E,q as F,P as G,V as H,Q as S,de as T,x as a,E as b,k as c,h as d,m as e,f,v as g,_ as h,X as i,u as j,S as k,p as l,g as m,e as n,i as o,A as p,b as q,c as r,a as s,$ as t,l as u,K as v,C as w,Ie as x,F as y,G as z};
