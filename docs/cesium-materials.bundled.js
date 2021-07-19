/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const n=globalThis.trustedTypes,o=n?n.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,h=`<${l}>`,a=document,c=(t="")=>a.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,g=/>/g,b=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,y=/"/g,w=/^(?:script|style|textarea)$/i,x=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),$=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),k=new WeakMap,C=a.createTreeWalker(a,129,null,!1),M=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":"",a=p;for(let i=0;i<s;i++){const s=t[i];let o,c,d=-1,u=0;for(;u<s.length&&(a.lastIndex=u,c=a.exec(s),null!==c);)u=a.lastIndex,a===p?"!--"===c[1]?a=f:void 0!==c[1]?a=g:void 0!==c[2]?(w.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=b):void 0!==c[3]&&(a=b):a===b?">"===c[0]?(a=null!=n?n:p,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,o=c[1],a=void 0===c[3]?b:'"'===c[3]?y:m):a===y||a===m?a=b:a===f||a===g?a=p:(a=b,n=void 0);const v=a===b&&t[i+1].startsWith("/>")?" ":"";l+=a===p?s+h:d>=0?(e.push(o),s.slice(0,d)+"$lit$"+s.slice(d)+r+v):s+r+(-2===d?(e.push(void 0),i):v)}const c=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==o?o.createHTML(c):c,e]};class z{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let o=0,h=0;const a=t.length-1,d=this.parts,[u,v]=M(t,i);if(this.el=z.createElement(u,s),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=C.nextNode())&&d.length<a;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=v[h++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:o,name:i[2],strings:t,ctor:"."===i[1]?A:"?"===i[1]?T:"@"===i[1]?H:E})}else d.push({type:6,index:o})}for(const i of t)e.removeAttribute(i)}if(w.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=n?n.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c()),C.nextNode(),d.push({type:2,index:++o});e.append(t[i],c())}}}else if(8===e.nodeType)if(e.data===l)d.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)d.push({type:7,index:o}),t+=r.length-1}o++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){var n,o,r,l;if(i===$)return i;let h=void 0!==e?null===(n=s.Σi)||void 0===n?void 0:n[e]:s.Σo;const a=d(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(o=null==h?void 0:h.O)||void 0===o||o.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,e)),void 0!==e?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=N(t,h.S(t,i.values),h,e)),i}class j{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,n=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);C.currentNode=n;let o=C.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new O(o,o.nextSibling,this,t):1===h.type?i=new h.ctor(o,h.name,h.strings,this,t):6===h.type&&(i=new U(o,this,t)),this.l.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(o=C.nextNode(),r++)}return n}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class O{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=N(this,t,i),d(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==$&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):v(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,n="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=z.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===n)this.H.v(s);else{const t=new j(n,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=k.get(t.strings);return void 0===i&&k.set(t.strings,i=new z(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const n of t)e===i.length?i.push(s=new O(this.k(c()),this.k(c()),this,this.options)):s=i[e],s.I(n),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class E{constructor(t,i,s,e,n){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(S),this.strings=s):this.H=S}get tagName(){return this.element.tagName}I(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=N(this,t,i,0),o=!d(t)||t!==this.H&&t!==$,o&&(this.H=t);else{const e=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=N(this,e[s+r],i,r),l===$&&(l=this.H[r]),o||(o=!d(l)||l!==this.H[r]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+n[r+1]),this.H[r]=l}o&&!e&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class A extends E{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class T extends E{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class H extends E{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=N(this,t,i,0))&&void 0!==s?s:S)===$)return;const e=this.H,n=t===S&&e!==S||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==S&&(e===S||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class U{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){N(this,t)}}const V={Z:"$lit$",U:r,Y:l,q:1,X:M,tt:j,it:v,st:N,et:O,ot:E,nt:T,rt:H,lt:A,ht:U};null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,z,O),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol();class I{constructor(t,i){if(i!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return B&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const P=new Map,R=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof I)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=P.get(s);return void 0===e&&P.set(s,e=new I(s,D)),e},K=B?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return(t=>new I(t+"",D))(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var L,_,F,W;const J={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},q=(t,i)=>i!==t&&(i==i||t==t),Z={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:q};class X extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=Z){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const n=this[t];this[i]=e,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Z}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(K(t))}else void 0!==t&&i.push(K(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{B?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=Z){var e,n;const o=this.constructor.Πp(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==n?n:J.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this.Πh=null}}K(t,i){var s,e,n;const o=this.constructor,r=o.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=o.getPropertyOptions(r),l=t.converter,h=null!==(n=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==n?n:J.fromAttribute;this.Πh=r,this[r]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||q)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Y,G,Q,tt,it,st;X.finalized=!0,X.shadowRootOptions={mode:"open"},null===(_=(L=globalThis).reactiveElementPlatformSupport)||void 0===_||_.call(L,{ReactiveElement:X}),(null!==(F=(W=globalThis).reactiveElementVersions)&&void 0!==F?F:W.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(Y=(st=globalThis).litElementVersions)&&void 0!==Y?Y:st.litElementVersions=[]).push("3.0.0-rc.1");class et extends X{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,n;const o=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new O(i.insertBefore(c(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return $}}et.finalized=!0,et._$litElement$=!0,null===(Q=(G=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(G,{LitElement:et}),null===(it=(tt=globalThis).litElementPlatformSupport)||void 0===it||it.call(tt,{LitElement:et});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ot=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?{...i,finisher(s){s.createProperty(i.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:i.key,initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function rt(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):ot(t,i)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const lt=1,ht=2,at=t=>(...i)=>({_$litDirective$:t,values:i});class ct{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{et:dt}=V,ut=()=>document.createComment(""),vt=(t,i,s)=>{var e;const n=t.A.parentNode,o=void 0===i?t.B:i.A;if(void 0===s){const i=n.insertBefore(ut(),o),e=n.insertBefore(ut(),o);s=new dt(i,e,t,t.options)}else{const i=s.B.nextSibling,r=s.M!==t;if(r&&(null===(e=s.Q)||void 0===e||e.call(s,t),s.M=t),i!==o||r){let t=s.A;for(;t!==i;){const i=t.nextSibling;n.insertBefore(t,o),t=i}}}return s},pt=(t,i,s=t)=>(t.I(i,s),t),ft={},gt=t=>{var i;null===(i=t.P)||void 0===i||i.call(t,!1,!0);let s=t.A;const e=t.B.nextSibling;for(;s!==e;){const t=s.nextSibling;s.remove(),s=t}},bt=(t,i,s)=>{const e=new Map;for(let n=i;n<=s;n++)e.set(t[n],n);return e},mt=at(class extends ct{constructor(t){if(super(t),t.type!==ht)throw Error("repeat() can only be used in text expressions")}Mt(t,i,s){let e;void 0===s?s=i:void 0!==i&&(e=i);const n=[],o=[];let r=0;for(const i of t)n[r]=e?e(i,r):r,o[r]=s(i,r),r++;return{values:o,keys:n}}render(t,i,s){return this.Mt(t,i,s).values}update(t,[i,s,e]){var n;const o=(t=>t.H)(t),{values:r,keys:l}=this.Mt(i,s,e);if(!o)return this.Pt=l,r;const h=null!==(n=this.Pt)&&void 0!==n?n:this.Pt=[],a=[];let c,d,u=0,v=o.length-1,p=0,f=r.length-1;for(;u<=v&&p<=f;)if(null===o[u])u++;else if(null===o[v])v--;else if(h[u]===l[p])a[p]=pt(o[u],r[p]),u++,p++;else if(h[v]===l[f])a[f]=pt(o[v],r[f]),v--,f--;else if(h[u]===l[f])a[f]=pt(o[u],r[f]),vt(t,a[f+1],o[u]),u++,f--;else if(h[v]===l[p])a[p]=pt(o[v],r[p]),vt(t,o[u],o[v]),v--,p++;else if(void 0===c&&(c=bt(l,p,f),d=bt(h,u,v)),c.has(h[u]))if(c.has(h[v])){const i=d.get(l[p]),s=void 0!==i?o[i]:null;if(null===s){const i=vt(t,o[u]);pt(i,r[p]),a[p]=i}else a[p]=pt(s,r[p]),vt(t,o[u],s),o[i]=null;p++}else gt(o[v]),v--;else gt(o[u]),u++;for(;p<=f;){const i=vt(t,a[f+1]);pt(i,r[p]),a[p++]=i}for(;u<=v;){const t=o[u++];null!==t&&gt(t)}return this.Pt=l,((t,i=ft)=>{t.H=i})(t,a),$}});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let wt=class extends et{constructor(){super(...arguments),this.btnBackgrouncColor="#FF444C",this.btnName="Delete",this.btnIcon="del"}renderBtnIcon(){switch(this.btnIcon){case"add":return x`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <g><rect fill="none" height="24" width="24" /></g>
            <g>
              <g><path d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z" /></g>
            </g>
          </svg>
        `;case"del":return x`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 0 24 24"
            width="20px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        `;default:return x``}}render(){return x`
      <button style="background-color: ${this.btnBackgrouncColor}">
        ${this.renderBtnIcon()}
        <span style="padding-right: ${this.btnIcon?"5px;":"0"}"
          >${this.btnName}</span
        >
      </button>
    `}};wt.styles=R`
    button {
      padding: 7px 10px;
      color: #fff;
      border: none;
      border-radius: 20px;
      min-width: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-family: 'Noto Sans';
    }

    svg {
      padding: 0 5px;
      fill: #fff;
      font-weight: 600;
    }

    span {
      font-size: 14px;
    }
  `,yt([rt({type:String})],wt.prototype,"btnBackgrouncColor",void 0),yt([rt({type:String})],wt.prototype,"btnName",void 0),yt([rt({type:String})],wt.prototype,"btnIcon",void 0),wt=yt([nt("cesium-button")],wt);const xt=R`
  .input-color-container {
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 40px;
    margin-top: 5px;
  }
  .input-color {
    position: absolute;
    right: -15px;
    top: -12px;
    width: 56px;
    height: 56px;
    border: none;
    background-color: transparent;
  }
`;var $t=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let St=class extends et{constructor(){super(...arguments),this.title="Name",this.id="input-text",this.type="color",this.fieldKey="name",this.value="0"}handleInput(t,i){const{value:s}=t.target;s&&this.dispatchEvent(new CustomEvent("on-cesium-input",{detail:{type:i,value:s},composed:!0,bubbles:!0}))}render(){return x`
      <div>
        <label class="label-${this.type}" for="${this.id}">
          ${this.title}
        </label>
        <div class="input-${this.type}-container">
          <input
            @input=${t=>this.handleInput(t,this.fieldKey)}
            class="input-${this.type}"
            id="${this.id}"
            value="${this.value}"
            type="${this.type}"
            min="0"
          />
        </div>
      </div>
    `}};St.styles=[R`
      label {
        font-weight: 700;
        font-family: 'Noto Sans';
        font-size: 14px;
        color: #fff;
      }
      input {
        margin-top: 4px;
        font-family: 'Noto Sans';
        padding: 0px 10px;
        width: 200px;
        border: none;
        border-radius: 5px;
        background-color: #353640;
        color: #fff;
        height: 32px;
      }

      input[type='date'] {
        position: relative;
      }

      input[type='date']::-webkit-calendar-picker-indicator {
        color: #fff;
        background-image: url('data:image/svg+xml;charset=utf8,%3Csvg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/%3E%3Cpath d="M0 0h24v24H0z" fill="none"/%3E%3C/svg%3E');
        z-index: 1;
      }
    `,xt],$t([rt({type:String})],St.prototype,"title",void 0),$t([rt({type:String})],St.prototype,"id",void 0),$t([rt({type:String})],St.prototype,"type",void 0),$t([rt({type:String})],St.prototype,"fieldKey",void 0),$t([rt({type:String})],St.prototype,"value",void 0),St=$t([nt("cesium-input")],St);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const kt=at(class extends ct{constructor(t){var i;if(super(t),t.type!==lt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const s=t.element.classList;this.bt.forEach((t=>{t in i||(s.remove(t),this.bt.delete(t))}));for(const t in i){const e=!!i[t];e!==this.bt.has(t)&&(e?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return $}});class Ct{constructor(){this.baseUrl="https://60f4e0fd2208920017f39e43.mockapi.io/api/v1/cesium-materials"}async getMaterials(){try{const t=await fetch(this.baseUrl);return{isValid:!0,data:(await t.json())[0].materials}}catch(t){return{isValid:!1,data:null}}}}var Mt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,l=t.length-1;l>=0;l--)(n=t[l])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let zt=class extends et{constructor(){super(...arguments),this.totalCost="0.00",this.materials=[],this.cesiumMaterialsService=new Ct,this.defaultMaterial={id:"",isActive:!1,materialsList:[{name:"Name",value:"New Material",type:"text",fieldKey:"name"},{name:"Color",value:"#44D7B6",type:"color",fieldKey:"color"},{name:"Volume (m3)",value:"0",type:"number",fieldKey:"volume"},{name:"Cost (USD per m3) ",value:"0.00",type:"number",fieldKey:"cost"},{name:"Delivery Date",value:"",type:"date",fieldKey:"date"}]}}async firstUpdated(){const t=await this.cesiumMaterialsService.getMaterials();t.isValid&&(this.materials=t.data.map(((i,s)=>{let e;return e=s+1===t.data.length?{...i,isActive:!0}:{...i,isActive:!1},e})),this.addTotalCost(this.materials))}renderLeftPane(t,i,s){const e=t.find((t=>"color"===t.fieldKey.toLowerCase())),n=t.find((t=>"name"===t.fieldKey.toLowerCase())),o=t.find((t=>"volume"===t.fieldKey.toLowerCase()));return x`
      <div
        class="left-pane-tab ${kt({"left-pane-tab-active":s})}"
        @click=${()=>this.onClickLeftPane(i)}
      >
        <div
          class="color-container"
          style="background-color: ${null==e?void 0:e.value}"
        ></div>
        <div class="material-info-container">
          <div class="material-title">${null==n?void 0:n.value}</div>
          <div class="material-volume">${null==o?void 0:o.value} m3</div>
        </div>
      </div>
    `}renderRightPane(t,i,s){return x`
      <div
        class="right-tab-container ${kt({"hide-right-pane":!s})}"
        @on-cesium-input=${t=>this.onRightPaneChange(t,i)}
      >
        ${t.map(((t,s)=>x`
            <cesium-input
              .type=${t.type}
              .fieldKey=${t.fieldKey}
              .title=${t.name}
              .value=${t.value}
              .id="input-${i}-${s}"
            ></cesium-input>
          `))})
        }
      </div>
    `}updateMaterial(t,i,s){this.materials=this.materials.map((e=>(e.id===t&&e.materialsList.map((t=>(t.fieldKey===i&&(t.value=s),t))),e)))}onClickLeftPane(t){this.materials=this.materials.map((i=>(i.id===t?i.isActive=!0:i.isActive=!1,i)))}onRightPaneChange(t,i){const{detail:s}=t;"name"===s.type?this.updateMaterial(i,"name",s.value):"color"===s.type?this.updateMaterial(i,"color",s.value):"volume"===s.type?this.updateMaterial(i,"volume",s.value):"cost"===s.type&&(this.updateMaterial(i,"cost",s.value),this.addTotalCost(this.materials))}addTotalCost(t){const i=t.reduce(((t,i)=>{const s=i.materialsList.find((t=>"cost"===t.fieldKey));return t+parseFloat(s.value)}),0);this.totalCost=`${i}`}addMaterial(){this.materials.forEach((t=>{t.isActive=!1}));const t=JSON.parse(JSON.stringify({...this.defaultMaterial,id:this.makeId(),isActive:!0}));this.materials=[...this.materials,t]}deleteMaterial(){const t=this.materials.reduce(((t,i)=>{if(i.isActive){const s=i.materialsList.find((t=>"cost"===t.fieldKey));t=parseFloat(this.totalCost)-parseFloat(s.value)}return t}),0);this.totalCost=`${t||"0.00"}`,this.materials=this.materials.filter((t=>!t.isActive)),this.materials.length&&(this.materials[this.materials.length-1].isActive=!0)}makeId(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}render(){return x`
      <div class="materials">
        <p class="header-text">Materials</p>
        <div class="btn-container">
          <cesium-button
            btnName="Add"
            btnIcon="add"
            btnBackgrouncColor="#0075DB"
            @click=${this.addMaterial}
          ></cesium-button>
          <cesium-button
            btnName="Delete"
            btnIcon="del"
            btnBackgrouncColor="${this.materials.length?"#FF444C":"#737373"}"
            @click=${this.deleteMaterial}
          ></cesium-button>
        </div>
        <div class="pane-container">
          <div class="left-pane">
            <!-- When empty -->
            ${0===this.materials.length?x`<div class="no-material">No Materials</div>`:S}

            <!-- When with data -->
            ${mt(this.materials,(t=>t.id),(t=>this.renderLeftPane(t.materialsList,t.id,t.isActive)))}
          </div>
          <div class="right-pane">
            ${mt(this.materials,(t=>t.id),(t=>this.renderRightPane(t.materialsList,t.id,t.isActive)))}
          </div>
        </div>
        <div class="total-amount-container">
          <div>Total Cost:</div>
          <div>$${this.totalCost}</div>
        </div>
      </div>
    `}};zt.styles=[R`
      .materials {
        font-family: 'Noto Sans', sans-serif;
      }
      .header-text {
        font-size: 30px;
        font-weight: 700;
        color: #ffffff;
      }

      .btn-container {
        display: flex;
      }

      cesium-button {
        margin-right: 10px;
      }

      .pane-container {
        margin: 20px 0;
        display: flex;
      }

      .left-pane {
        width: 250px;
        border: 1px solid #565664;
        height: 290px;
        overflow-y: scroll;
        background-color: #17171a;
        margin-right: 20px;
      }

      .right-pane {
        background-color: #17171a;
        border-radius: 5px;
        width: 540px;
        box-sizing: border-box;
        padding: 30px;
      }

      .right-tab-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
      }

      .left-pane-tab {
        padding: 10px;
        background-color: transparent;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #565664;
        cursor: pointer;
      }

      .left-pane-tab-active {
        background-color: #000344;
      }

      .color-container {
        margin-right: 10px;
        height: 24px;
        width: 24px;
        border-radius: 50%;
      }

      .material-info-container {
        color: #ffffff;
        font-size: 14px;
        opacity: 0.7;
      }

      .material-title {
        width: 170px;
        overflow: scroll;
      }

      input[type='text'],
      input[type='text']:focus {
        background: transparent;
        border: none;
        outline-width: 0;
        color: #ffffff;
      }

      .hide-right-pane {
        position: absolute;
        left: -99999px;
      }

      .no-material {
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 14px;
        font-style: italic;
        opacity: 0.7;
      }

      .total-amount-container {
        color: #ffffff;
        opacity: 0.85;
        width: 200px;
        display: flex;
        justify-content: space-between;
      }
    `,xt],Mt([function(t){return rt({...t,state:!0,attribute:!1})}()],zt.prototype,"totalCost",void 0),Mt([rt({type:Array})],zt.prototype,"materials",void 0),zt=Mt([nt("cesium-materials")],zt);export{zt as CesiumMaterials};
