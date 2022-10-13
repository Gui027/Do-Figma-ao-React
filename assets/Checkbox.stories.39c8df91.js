var W=Object.defineProperty;var a=(e,t)=>W(e,"name",{value:t,configurable:!0});import{r}from"./index.141a1def.js";import{$ as F,a as M}from"./index.module.25c063db.js";import{r as K}from"./index.620e17a1.js";import{j as b,F as k,a as q}from"./jsx-runtime.d3b1da19.js";import{I as X,r as Y}from"./IconBase.esm.3ace4e1f.js";import{T as H}from"./Text.56840d11.js";import"./iframe.8ac37f09.js";import"./clsx.m.256e9345.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}a(y,"_extends$1");function Z(e,t){const n=r.exports.createContext(t);function o(c){const{children:d,...f}=c,i=r.exports.useMemo(()=>f,Object.values(f));return r.exports.createElement(n.Provider,{value:i},d)}a(o,"Provider");function s(c){const d=r.exports.useContext(n);if(d)return d;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return a(s,"useContext"),o.displayName=e+"Provider",[o,s]}a(Z,"$c512c27ab02ef895$export$fd42f52fd3ae1109");function G(e,t=[]){let n=[];function o(c,d){const f=r.exports.createContext(d),i=n.length;n=[...n,d];function u(l){const{scope:p,children:x,...m}=l,S=(p==null?void 0:p[e][i])||f,E=r.exports.useMemo(()=>m,Object.values(m));return r.exports.createElement(S.Provider,{value:E},x)}a(u,"Provider");function h(l,p){const x=(p==null?void 0:p[e][i])||f,m=r.exports.useContext(x);if(m)return m;if(d!==void 0)return d;throw new Error(`\`${l}\` must be used within \`${c}\``)}return a(h,"useContext"),u.displayName=c+"Provider",[u,h]}a(o,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const s=a(()=>{const c=n.map(d=>r.exports.createContext(d));return a(function(f){const i=(f==null?void 0:f[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...f,[e]:i}}),[f,i])},"useScope")},"createScope");return s.scopeName=e,[o,J(s,...t)]}a(G,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function J(...e){const t=e[0];if(e.length===1)return t;const n=a(()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return a(function(c){const d=o.reduce((f,{useScope:i,scopeName:u})=>{const l=i(c)[`__scope${u}`];return{...f,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:d}),[d])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}a(J,"$c512c27ab02ef895$var$composeContextScopes");function L(e,t,{checkForDefaultPrevented:n=!0}={}){return a(function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)},"handleEvent")}a(L,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function T(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}a(T,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");function Q({prop:e,defaultProp:t,onChange:n=a(()=>{},"onChange")}){const[o,s]=V({defaultProp:t,onChange:n}),c=e!==void 0,d=c?e:o,f=T(n),i=r.exports.useCallback(u=>{if(c){const l=typeof u=="function"?u(e):u;l!==e&&f(l)}else s(u)},[c,e,s,f]);return[d,i]}a(Q,"$71cd76cc60e0454e$export$6f32135080cb4c3");function V({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=T(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}a(V,"$71cd76cc60e0454e$var$useUncontrolledState");function ee(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}a(ee,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");const O=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function te(e){const[t,n]=r.exports.useState(void 0);return O(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let d,f;if("borderBoxSize"in c){const i=c.borderBoxSize,u=Array.isArray(i)?i[0]:i;d=u.inlineSize,f=u.blockSize}else d=e.offsetWidth,f=e.offsetHeight;n({width:d,height:f})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}a(te,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}a(A,"_extends");const ne=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],I=ne.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...d}=o,f=c?F:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(f,A({},d,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),oe="Label",[_e,re]=Z(oe,{id:void 0,controlRef:{current:null}}),se=a(e=>{const t=re("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id},"$b73a6c6685e72184$export$feddbbf47baabdb9");function ce(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}a(ce,"$fe963b355347cc68$export$3e6543de14f8614f");const j=a(e=>{const{present:t,children:n}=e,o=ae(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=M(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");j.displayName="Presence";function ae(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),d=e?"mounted":"unmounted",[f,i]=ce(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const u=N(o.current);c.current=f==="mounted"?u:"none"},[f]),O(()=>{const u=o.current,h=s.current;if(h!==e){const p=c.current,x=N(u);e?i("MOUNT"):x==="none"||(u==null?void 0:u.display)==="none"?i("UNMOUNT"):i(h&&p!==x?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,i]),O(()=>{if(t){const u=a(l=>{const x=N(o.current).includes(l.animationName);l.target===t&&x&&K.exports.flushSync(()=>i("ANIMATION_END"))},"handleAnimationEnd"),h=a(l=>{l.target===t&&(c.current=N(o.current))},"handleAnimationStart");return t.addEventListener("animationstart",h),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",h),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(f),ref:r.exports.useCallback(u=>{u&&(o.current=getComputedStyle(u)),n(u)},[])}}a(ae,"$921a889cee6df7e8$var$usePresence");function N(e){return(e==null?void 0:e.animationName)||"none"}a(N,"$921a889cee6df7e8$var$getAnimationName");const B="Checkbox",[ie,Oe]=G(B),[ue,de]=ie(B),fe=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:s,checked:c,defaultChecked:d,required:f,disabled:i,value:u="on",onCheckedChange:h,...l}=e,[p,x]=r.exports.useState(null),m=M(t,$=>x($)),S=se(p),E=o||S,_=r.exports.useRef(!1),R=p?Boolean(p.closest("form")):!0,[g=!1,z]=Q({prop:c,defaultProp:d,onChange:h});return r.exports.createElement(ue,{scope:n,state:g,disabled:i},r.exports.createElement(I.button,y({type:"button",role:"checkbox","aria-checked":v(g)?"mixed":g,"aria-labelledby":E,"aria-required":f,"data-state":D(g),"data-disabled":i?"":void 0,disabled:i,value:u},l,{ref:m,onKeyDown:L(e.onKeyDown,$=>{$.key==="Enter"&&$.preventDefault()}),onClick:L(e.onClick,$=>{z(w=>v(w)?!0:!w),R&&(_.current=$.isPropagationStopped(),_.current||$.stopPropagation())})})),R&&r.exports.createElement(be,{control:p,bubbles:!_.current,name:s,value:u,checked:g,required:f,disabled:i,style:{transform:"translateX(-100%)"}}))}),le="CheckboxIndicator",pe=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=de(le,n);return r.exports.createElement(j,{present:o||v(c.state)||c.state===!0},r.exports.createElement(I.span,y({"data-state":D(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),be=a(e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),d=ee(n),f=te(t);return r.exports.useEffect(()=>{const i=c.current,u=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(u,"checked").set;if(d!==n&&l){const p=new Event("click",{bubbles:o});i.indeterminate=v(n),l.call(i,v(n)?!1:n),i.dispatchEvent(p)}},[d,n,o]),r.exports.createElement("input",y({type:"checkbox","aria-hidden":!0,defaultChecked:v(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function v(e){return e==="indeterminate"}a(v,"$e698a72e93240346$var$isIndeterminate");function D(e){return v(e)?"indeterminate":e?"checked":"unchecked"}a(D,"$e698a72e93240346$var$getState");const he=fe,xe=pe;var C=new Map;C.set("bold",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});C.set("duotone",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});C.set("fill",function(){return b(k,{children:b("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});C.set("light",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});C.set("thin",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});C.set("regular",function(e){return b(k,{children:b("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var me=a(function(t,n){return Y(t,n,C)},"renderPath"),U=r.exports.forwardRef(function(e,t){return b(X,{...Object.assign({ref:t},e,{renderPath:me})})});U.displayName="Check";const $e=U;function P({}){return b(he,{className:"w-6 h-6 p-[2px] bg-gray-800 rounded",children:b(xe,{asChild:!0,children:b($e,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}a(P,"Checkbox");try{P.displayName="Checkbox",P.__docgenInfo={description:"",displayName:"Checkbox",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:P.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Ae={title:"Components/Checkbox",component:P,args:{},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),b(H,{size:"sm",children:"Lembrar-me de mim por 30 dias"})]})]},Re={},we=["Default"];export{Re as Default,we as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Checkbox.stories.39c8df91.js.map
