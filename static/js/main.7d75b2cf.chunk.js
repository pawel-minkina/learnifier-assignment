(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(e,a,t){e.exports=t(81)},64:function(e,a,t){},74:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(18),c=t.n(l),o=t(93),s=t(94),i=t(95),m=t(86),u=t(16),d=t(6),E=t(8),p=t(87),g=t(85),v=t(23),f=t(96),b=t(13),h=t.n(b),N=t(17),I=t(83);var O=Object.freeze({combineStyles:function(...e){return e.filter(e=>!!e).join(" ")}});function y(e=[]){return[...e]}var A=Object.freeze({copyOrEmpty:y,sortByField:function(e,a,t){const n=y(e);return a&&t?n.sort((e,n)=>t(e[a],n[a])):n}});var S=Object.freeze({stringCompare:function(e="",a=""){return e.localeCompare(a)},numberCompare:function(e=0,a=0){return e-a}});function k(){var e;return"development"===(null===(e=Object({NODE_ENV:"production",PUBLIC_URL:"/learnifier-assignment"}))||void 0===e?void 0:e.NODE_ENV)}function _(){return!k()}var C=Object.freeze({isDevelopment:k,isProduction:_});var j=Object.freeze({localLink:function(e){return _()?"".concat("/learnifier-assignment","/#/").concat(e):e}});t(64);var D=function(e){const a=e.className,t=e.loading,n=e.children;return r.a.createElement("div",{className:O.combineStyles("LoadingContainer",a)},t?r.a.createElement(I.a,{color:"primary"}):null===n||void 0===n?void 0:n())},P=t(84);function w(e){const a=e.message,t=e.onReload,n=e.error;return r.a.createElement(P.a,{color:"danger"},r.a.createElement("p",null,a),t&&r.a.createElement("p",null,"Click ",r.a.createElement(g.a,{color:"link",className:"alert-link p-0",onClick:t},"here")," to try again."),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("p",{className:"mb-0"},"Error details: ",n)))}w.defaultProps={message:"Error while fetching data :("};var x=w;t(74);var L=function(e){const a=e.className,t=e.source,n=e.details,l=r.a.useState(!1),c=Object(E.a)(l,2),o=c[0],s=c[1],i=r.a.useState(""),m=Object(E.a)(i,2),u=m[0],d=m[1],p=r.a.useState(""),g=Object(E.a)(p,2),v=g[0],f=g[1],b=r.a.useState(!1),I=Object(E.a)(b,2),y=I[0],A=I[1],S=r.a.useCallback(()=>{d(null),f(null),s(!0);const e=h.a.CancelToken.source();return h.a.get(t,{responseType:"blob",cancelToken:e.token}).then(e=>{d(URL.createObjectURL(e.data))}).catch(e=>{h.a.isCancel(e)||f((null===e||void 0===e?void 0:e.message)||e)}).finally(()=>{s(!1)}),()=>{e.cancel("cancelled")}},[t]);return r.a.useEffect(S,[S]),r.a.useEffect(()=>()=>{u&&URL.revokeObjectURL(u)},[u]),r.a.createElement("div",{className:O.combineStyles("ImagePreview",a),onMouseEnter:()=>A(!0),onMouseLeave:()=>A(!1)},r.a.createElement(D,{className:"ImagePreview-LoadingContainer",loading:o},()=>{if(v)return r.a.createElement(x,{message:"Could not load the image :(",onReload:S,error:v});const e=r.a.createElement("img",{className:"ImagePreview-Image",alt:t,src:u});return(null===n||void 0===n?void 0:n.url)||(null===n||void 0===n?void 0:n.download_url)?r.a.createElement("a",{className:"ImagePreview-Image",href:n.url||n.download_url,target:"_blank",rel:"noopener noreferrer"},e):e}),n&&r.a.createElement(N.a,{className:"ImagePreview-Details p-2 m-1",mountOnEnter:!0,unmountOnExit:!0,in:y},r.a.createElement("div",{className:"text-light"},n.author&&r.a.createElement("p",{className:"mb-0"},n.id&&r.a.createElement("span",null,"#",n.id,". "),n.author),n.width&&n.height&&r.a.createElement("p",{className:"mb-0"},n.width," x ",n.height))))};var G=Object.freeze({IMAGES_PAGE_SIZE:20,IMAGE_DEFAULT_WIDTH:320,IMAGE_DEFAULT_HEIGHT:240});const T="https://picsum.photos";var M=Object.freeze({BASE_URL:T,RANDOM_IMAGE:(e=Date.now(),a=G.IMAGE_DEFAULT_WIDTH,t=G.IMAGE_DEFAULT_HEIGHT)=>"".concat(T,"/seed/").concat(e,"/").concat(a,"/").concat(t),LIST_IMAGES:(e=0,a=G.IMAGES_PAGE_SIZE)=>"".concat(T,"/v2/list?page=").concat(e,"&limit=").concat(a),GET_IMAGE:(e,a=G.IMAGE_DEFAULT_WIDTH,t=G.IMAGE_DEFAULT_HEIGHT)=>"".concat(T,"/id/").concat(e,"/").concat(a,"/").concat(t)});function U(e){const a=e.count,t=r.a.useState([]),n=Object(E.a)(t,2),l=n[0],c=n[1];return r.a.useEffect(()=>{c([...Array(a)].map((e,a)=>({key:"".concat(a,"-").concat(Date.now()),seed:Object(f.a)(),content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et velit at turpis hendrerit rutrum. Sed pellentesque nec leo non dictum. Vestibulum aliquam lorem quam, at volutpat nulla tincidunt at. Nulla quis ante mauris. Proin ornare purus in ipsum hendrerit, at faucibus neque aliquet. Pellentesque elit ante, suscipit ut luctus sed, sagittis id lacus. Curabitur scelerisque ultrices purus rutrum mattis. Vestibulum viverra scelerisque neque a egestas."})))},[a]),r.a.createElement(m.a,{className:"pt-5"},l.map((e,a)=>{const t=(a+1)%2,n=t?"text-md-left":"text-md-right";return r.a.createElement(p.a,{key:e.key,className:"mb-5"},r.a.createElement(v.a,{md:{size:5,order:a%2}},r.a.createElement(L,{source:M.RANDOM_IMAGE(e.seed)})),r.a.createElement(v.a,{className:"mt-sm-3 mt-md-0",md:{size:7,order:t}},r.a.createElement("p",{className:O.combineStyles("text-sm-center",n)},e.content)))}),r.a.createElement(m.a,{className:"mb-5",fluid:!0},r.a.createElement(u.c,{to:"images"},r.a.createElement(g.a,{color:"primary"},"Show more"))))}U.defaultProps={count:5};var R=U,q=t(91),z=t(92);const F=r.a.createContext(null),H={id:S.stringCompare,author:S.stringCompare,width:S.numberCompare,height:S.numberCompare,url:S.stringCompare,download_url:S.stringCompare};function B(e){const a=e.page,t=e.children,n=r.a.useState(!1),l=Object(E.a)(n,2),c=l[0],o=l[1],s=r.a.useState(null),i=Object(E.a)(s,2),m=i[0],u=i[1],d=r.a.useState(null),p=Object(E.a)(d,2),g=p[0],v=p[1],f=r.a.useCallback(()=>{o(!0),u(null),v(null);const e=h.a.CancelToken.source();return h.a.get(M.LIST_IMAGES(a+1),{cancelToken:e.token}).then(e=>{var a,t,n,r;const l=-1!==(null===(a=e.headers)||void 0===a?void 0:null===(t=a.link)||void 0===t?void 0:t.indexOf("prev")),c=-1!==(null===(n=e.headers)||void 0===n?void 0:null===(r=n.link)||void 0===r?void 0:r.indexOf("next"));u({hasPrevious:l,hasNext:c,data:e.data})}).catch(e=>{v((null===e||void 0===e?void 0:e.message)||e)}).finally(()=>{o(!1)}),()=>{e.cancel("cancelled")}},[a]);return r.a.useEffect(f,[f]),r.a.createElement(F.Provider,{value:Object.freeze({loading:c,error:g,reload:f,hasPreviousPage:()=>null===m||void 0===m?void 0:m.hasPrevious,hasNextPage:()=>null===m||void 0===m?void 0:m.hasNext,getData:()=>A.copyOrEmpty(null===m||void 0===m?void 0:m.data),getSortedData:e=>A.sortByField(null===m||void 0===m?void 0:m.data,e,H[e])})},t)}function V(e){const a=e.render;return r.a.createElement(F.Consumer,null,e=>a(e))}B.defaultProps={page:0};var W=t(88),J=t(89),Z=t(90);t(77);var K=function(e){const a=e.className,t=e.image;return r.a.createElement(W.a,{className:O.combineStyles("ImageDetails",a)},r.a.createElement(L,{source:M.GET_IMAGE(t.id),details:t}),r.a.createElement(J.a,null,r.a.createElement(Z.a,{className:O.combineStyles("ImageDetails-Author","text-center")},t.author||"Author not known")))};t(78);const Q={ID:e=>e.getData(),Author:e=>e.getSortedData("author")};var X=function(){const e=r.a.useState(0),a=Object(E.a)(e,2),t=a[0],n=a[1],l=r.a.useState("Author"),c=Object(E.a)(l,2),o=c[0],s=c[1];return r.a.createElement(B,{page:t},r.a.createElement(V,{render:e=>r.a.createElement(D,{className:"pt-5",loading:e.loading},()=>e.error?r.a.createElement(x,{message:"Could not load the image list :(",onReload:e.reload,error:e.error}):r.a.createElement(m.a,null,r.a.createElement(p.a,{className:"mb-5"},r.a.createElement(v.a,{className:"text-left",md:3},r.a.createElement(q.a,null,"Sort by:"),r.a.createElement(z.a,{id:"sort",type:"select",value:o,onChange:e=>{s(e.target.value)}},Object.keys(Q).map(e=>r.a.createElement("option",{key:e},e))))),r.a.createElement(p.a,null,Q[o](e).map((e,a)=>r.a.createElement(v.a,{key:"".concat(e.id,"-").concat(a),className:"mb-4",sm:12,md:6,lg:4,xl:3},r.a.createElement(K,{image:e})))),r.a.createElement(p.a,{className:"mt-5 mb-5"},r.a.createElement(v.a,null,r.a.createElement(g.a,{color:"primary",disabled:!e.hasPreviousPage(),onClick:()=>n(e=>Math.max(0,e-1))},"Previous page")),r.a.createElement(v.a,{className:"align-items-center justify-content-center d-flex"},r.a.createElement("span",null,t+1)),r.a.createElement(v.a,null,r.a.createElement(g.a,{color:"primary",disabled:!e.hasNextPage(),onClick:()=>n(e=>e+1)},"Next page")))))}))};t(79),t(80);const Y=C.isDevelopment()?u.a:u.b;var $=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{color:"light"},r.a.createElement(s.a,{href:j.localLink("/")},"Images"),r.a.createElement(i.a,{href:j.localLink("/images")},"See all images")),r.a.createElement(m.a,null,r.a.createElement(Y,{basename:"/learnifier-assignment"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:R}),r.a.createElement(d.b,{path:"/images",component:X}),r.a.createElement(d.a,{to:"/"})))))};const ee=document.getElementById("root");c.a.render(r.a.createElement($,null),ee)}},[[42,1,2]]]);
//# sourceMappingURL=main.7d75b2cf.chunk.js.map