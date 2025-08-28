/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,i,o){var n,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(e,i,r):n(e,i))||r);return s>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class s{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,d=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p},m="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const s=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),s="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=s.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;g[m]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const f=window,b=f.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,x=`<${w}>`,A=document,E=()=>A.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,C="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,N=/>/g,P=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,M=/"/g,z=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),U=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),D=new WeakMap,I=A.createTreeWalker(A,129,null,!1);function j(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const B=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===T?"!--"===l[1]?r=O:void 0!==l[1]?r=N:void 0!==l[2]?(z.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=P):void 0!==l[3]&&(r=P):r===P?">"===l[0]?(r=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?P:'"'===l[3]?M:H):r===M||r===H?r=P:r===O||r===N?r=T:(r=P,n=void 0);const h=r===P&&t[e+1].startsWith("/>")?" ":"";s+=r===T?i+x:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(o.push(void 0),e):h)}return[j(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class F{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=B(t,e);if(this.el=F.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=I.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Z:G})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(z.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),I.nextNode(),a.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function V(t,e,i=t,o){var n,s,r,a;if(e===U)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=V(t,l._$AS(t,e.values),l,o)),e}class W{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);I.currentNode=n;let s=I.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new q(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=I.nextNode(),r++)}return I.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class q{constructor(t,e,i,o){var n;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),S(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==U&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==L&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=F.createElement(j(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new W(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new F(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new q(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,o,n){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=V(this,t,e,0),s=!S(t)||t!==this._$AH&&t!==U,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=V(this,o[i+r],e,r),a===U&&(a=this._$AH[r]),s||(s=!S(a)||a!==this._$AH[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const Y=b?b.emptyScript:"";class K extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Z extends G{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=V(this,t,e,0))&&void 0!==i?i:L)===U)return;const o=this._$AH,n=t===L&&o!==L||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==L&&(o===L||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const Q=f.litHtmlPolyfillSupport;null==Q||Q(F,q),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new q(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return U}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function st(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):nt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;var at="[^\\s]+";function lt(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var ct=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),n=o.indexOf(e.toLowerCase());return n>-1?n:null}};function dt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var s=n[o];for(var r in s)t[r]=s[r]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=lt(ut,3),vt={dayNamesShort:lt(ht,3),dayNames:ht,monthNamesShort:pt,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=(dt({},vt),function(t){return+t-1}),gt=[null,"[1-9]\\d?"],_t=[null,at],ft=["isPm",at,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];ct("monthNamesShort"),ct("monthNames");var yt,$t;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(yt||(yt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}($t||($t={}));var wt=["closed","locked","off"],xt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},At=function(t){xt(window,"haptic",t)},Et=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(At("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&xt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),xt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,wt.includes(t.states[e].state))}(e,i.entity),At("success"));break;case"call-service":if(!o.service)return void At("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data),At("success");break;case"fire-dom-event":xt(t,"ll-custom",o)}};const St="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class kt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:St?"100px":"50px",height:St?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?xt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,xt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,xt(t,"action",{action:"double_tap"})):xt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",kt);const Ct=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},Tt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return Ct(t.element,e),U}render(t){}});var Ot;let Nt=Ot=class extends it{static getStubConfig(){return{title:"Living room",tile_height:80,badge_size:22,badge_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",header:{main:{entity:"switch.living_room_light_group",name:"Living room",icon:"mdi:sofa-outline",temp_sensor:"sensor.kitchen_living_room_temparature_average",humidity_sensor:"sensor.kitchen_living_room_humidity_average",badges:[]},ac:{entity:"climate.living_room_ac"},thermostat:{entity:"climate.thermostat_5_7_group"}},switch_rows:[]}}setConfig(t){const e=(i=t||Ot.getStubConfig(),JSON.parse(JSON.stringify(i)));var i;e.header=e.header||{},Array.isArray(e.header.badges)||(e.header.badges=[]),Array.isArray(e.switch_rows)||(e.switch_rows=[]),this._config=e}getCardSize(){return 6}render(){var t;if(!this._config)return L;const e=Object.assign(Object.assign({},Ot.getStubConfig()),this._config),i=Object.assign(Object.assign({},Ot.getStubConfig().header),e.header||{}),o=Number(e.tile_height)||80,n=Number(e.badge_size)||22,s=Number(e.badge_icon_size)||14,r=Number(e.main_icon_size)||48,a=this._rgbaFromColor(e.card_shadow_color,e.card_shadow_intensity),l=Number(e.chip_font_size)||12,c=e.unavailable_pulse_color||"#ff3b30",d=this._hasAnyUnavailable(e,i),h=this._rgbaFromColor(c,.18),u=this._rgbaFromColor(c,.36);return R`
      <ha-card class=${d?"unavailable":""}
               style=${`--panel-shadow-color:${d?h:a}; --unavail-weak:${h}; --unavail-strong:${u}`}
               .header=${(null===(t=this._config)||void 0===t?void 0:t.title)||void 0}>
        <div class="metrics" style=${`--tile-h:${o}px; --badge:${n}px; --badge-icon:${s}px; --main-icon-size:${r}px; --chip-font-size:${l}px;`}>
          <div class="root">
            ${this._renderHeaderRow(i)}
            ${this._renderSwitchRows(e.switch_rows)}
          </div>
        </div>
      </ha-card>
    `}_renderHeaderRow(t){const e=t.main||{entity:t.main_entity,name:t.main_name,icon:t.main_icon,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,badges:t.badges},i=t.ac||{entity:t.ac_entity},o=t.thermostat||{entity:t.thermo_entity},n=!!(null==i?void 0:i.entity),s=!!(null==o?void 0:o.entity);return R`
      <div class=${n||s?n&&s?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${this._renderMainTile(e)}
        ${n?this._renderACTile(i.entity):L}
        ${s?this._renderThermoTile(o.entity):L}
      </div>
    `}_renderMainTile(t){var e,i;const o=t.icon||"mdi:sofa-outline",n=t.name||"",s=this._fmt2(t.temp_sensor,2,"°"),r=this._fmt2(t.humidity_sensor,2,"%"),a=!!(null===(e=this._config)||void 0===e?void 0:e.hold_action),l=!!(null===(i=this._config)||void 0===i?void 0:i.double_tap_action);return R`
      <div class="main-tile"
           @action=${e=>this._onMainAction(e,t.entity)}
           .actionHandler=${Tt({hasHold:a,hasDoubleClick:l})}
           role="button" tabindex="0">
        <ha-icon class="main-icon" .icon=${o}></ha-icon>
        <div class="chip-tr" data-role="chip">
          <ha-icon icon="mdi:thermometer"
                   class="chip-ico"
                   @action=${()=>this._openMoreInfo(t.temp_sensor)}
                   .actionHandler=${Tt({})}></ha-icon>
          <span class="tval"
                @action=${()=>this._openMoreInfo(t.temp_sensor)}
                .actionHandler=${Tt({})}>${s}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent"
                   class="chip-ico"
                   @action=${()=>this._openMoreInfo(t.humidity_sensor)}
                   .actionHandler=${Tt({})}></ha-icon>
          <span class="hval"
                @action=${()=>this._openMoreInfo(t.humidity_sensor)}
                .actionHandler=${Tt({})}>${r}</span>
        </div>
        <div class="main-badges-br" data-role="badges"></div>
        <div class="main-name">${n}</div>
      </div>
    `}_renderACTile(t){var e,i,o;const n=((null===(o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t])||void 0===o?void 0:o.state)||"").toLowerCase(),s=!!n&&"off"!==n,{bg:r,icon:a}=this._acBadge(n),l=`color:${this._acModeColor(n)}; ${s?"animation:spin 1.5s linear infinite;":""}`,c=this._acPulseColors(n),d=`${s?"animation:activePulse 2.4s ease-in-out infinite;":""} --pulse-weak:${c.weak}; --pulse-strong:${c.strong};`;return R`
      <div class="square ac-tile" style=${d}
           @action=${e=>this._onACAction(e,t)}
           .actionHandler=${Tt({hasHold:!0,hasDoubleClick:!1})}
           role="button" tabindex="0">
        <div class="badge badge-tr" style=${`background:${r}`}> 
          <ha-icon .icon=${a} style="color:#fff"></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class="ac-fan" icon="mdi:fan" style=${l}></ha-icon>
        </div>
      </div>
    `}_renderThermoTile(t){var e,i,o,n,s,r,a,l;const c=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t],d=null!==(r=null!==(n=null===(o=null==c?void 0:c.attributes)||void 0===o?void 0:o.temperature)&&void 0!==n?n:null===(s=null==c?void 0:c.attributes)||void 0===s?void 0:s.target_temp)&&void 0!==r?r:null===(a=null==c?void 0:c.attributes)||void 0===a?void 0:a.target_temperature,h=this._fmtNumber(d,1)+"°",u=((null===(l=null==c?void 0:c.attributes)||void 0===l?void 0:l.hvac_action)||"").toLowerCase(),p=((null==c?void 0:c.state)||"").toLowerCase(),v="off"===p?"gray":"heating"===u||"heating"===p?"#ff7043":"#66bb6a";return R`
      <div class="square thermo-tile" style=${""+("heating"===u||"heating"===p?"animation:heatingGlow 2.4s ease-in-out infinite;":"")}
           @action=${e=>this._onThermoAction(e,t)}
           .actionHandler=${Tt({hasHold:!0,hasDoubleClick:!1})}
           role="button" tabindex="0">
        <div class="temp-chip-tr">
          <div class="temp-pill"><span class="thermo-target">${h}</span></div>
        </div>
        <div class="center-xy">
          <ha-icon class="thermo-icon" icon="mdi:thermostat" style=${`color:${v}`}></ha-icon>
        </div>
      </div>
    `}_onMainAction(t,e){const i=t.detail&&t.detail.action||"tap";this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),Et(t,e,i,n)}(this,this.hass,this._config,i):e&&this._openMoreInfo(e)}_onACAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?this._openMoreInfo(e):this._acToggle(e)}_onThermoAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?this._openMoreInfo(e):this._thermoToggle(e)}_renderSwitchRows(t){return t&&t.length?R`${t.map((t=>{var e;const i=Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[],o=Math.max(1,i.length||1);return R`<div class="switch-row" style=${`--cols:${o}`}>${i.map((t=>this._renderSwitchTile(t)))}</div>`}))}`:L}_renderSwitchTile(t){const e=(null==t?void 0:t.tap_entity)||"",i=(null==t?void 0:t.hold_entity)||(null==t?void 0:t.tap_entity)||"",o=(null==t?void 0:t.icon)||"",n=(null==t?void 0:t.name)||"",s="smart_plug"===String((null==t?void 0:t.type)||"switch").toLowerCase(),r=this._isOn(e);return R`
      <div class=${`switch-tile ${s?"smart":""} ${r?"on":""}`}
           @action=${t=>this._onSwitchAction(t,e,i)}
           .actionHandler=${Tt({hasHold:!0,hasDoubleClick:!1})}
           role="button" tabindex="0">
        <div class="tile-inner">
          ${o?R`<ha-icon class="switch-icon" .icon=${o}></ha-icon>`:L}
          ${n?R`<div class="name">${n}</div>`:L}
        </div>
      </div>
    `}_onSwitchAction(t,e,i){"hold"===(t.detail&&t.detail.action||"tap")?this._openMoreInfo(i||e):this._toggleGeneric(e)}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const o=this.hass.states[t];if(!o||""===o.state||"unknown"===o.state||"unavailable"===o.state)return"—"+(i||"");const n=Number(o.state);return Number.isFinite(n)?n.toFixed(e)+(i||""):String(o.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acModeColor(t){return t&&"off"!==t?t.includes("cool")?"#00aaff":t.includes("heat")?"#ff7043":t.includes("dry")?"#ffca28":t.includes("fan")?"#66bb6a":t.includes("auto")?"#26c6da":"var(--paper-item-icon-color)":"gray"}_acBadge(t){return t&&"off"!==t?t.includes("cool")?{bg:"#00aaff",icon:"mdi:snowflake"}:t.includes("heat")?{bg:"#ff7043",icon:"mdi:fire"}:t.includes("dry")?{bg:"#ffca28",icon:"mdi:water-percent"}:t.includes("fan")?{bg:"#66bb6a",icon:"mdi:fan"}:t.includes("auto")?{bg:"#26c6da",icon:"mdi:autorenew"}:{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"}:{bg:"rgba(158,158,158,0.95)",icon:"mdi:power"}}_acPulseColors(t){return(null==t?void 0:t.includes("cool"))?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:(null==t?void 0:t.includes("heat"))?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:(null==t?void 0:t.includes("dry"))?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:(null==t?void 0:t.includes("fan"))?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:(null==t?void 0:t.includes("auto"))?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),o=!!i&&"off"!==i;this.hass.callService("climate",o?"turn_off":"turn_on",{entity_id:t})}_thermoToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[o,n]=i.split(".");this.hass.callService(o,n,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const o=t.trim();if(o.startsWith("rgba(")||o.startsWith("rgb(")||o.startsWith("hsl(")||o.startsWith("var("))return o;const n=o.replace("#",""),s=t=>parseInt(t,16);if(3===n.length){return`rgba(${s(n[0]+n[0])},${s(n[1]+n[1])},${s(n[2]+n[2])},${i})`}if(n.length>=6){return`rgba(${s(n.slice(0,2))},${s(n.slice(2,4))},${s(n.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=[],o=e.main||{entity:e.main_entity,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor},n=e.ac||{entity:e.ac_entity},s=e.thermostat||{entity:e.thermo_entity};i.push(null==o?void 0:o.entity,null==o?void 0:o.temp_sensor,null==o?void 0:o.humidity_sensor,null==n?void 0:n.entity,null==s?void 0:s.entity);(t.switch_rows||[]).forEach((t=>{var e;(Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[]).forEach((t=>i.push(null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity)))}));const r=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t],n=((null==o?void 0:o.state)||"").toLowerCase();return r.has(n)}))}};Nt.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)})`
    :host { display:block; }
    .metrics, .metrics * { box-sizing: border-box; }

    .metrics {
      --ac-therm-icon: 50px;
    }

    ha-card {
      border-radius: 16px;
      background: linear-gradient(
        180deg,
        rgba(var(--rgb-card-background-color, 255,255,255), 0.92),
        rgba(var(--rgb-card-background-color, 250,250,250), 0.85)
      );
      box-shadow: 0 10px 30px var(--panel-shadow-color);
      padding: 12px;
      color: var(--primary-text-color);
    }
    ha-card.unavailable {
      animation: cardPulse 2.8s ease-in-out infinite;
    }

    .root { display: grid; gap: 12px; }

    /* Header row */
    .header-row {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 12px;
      align-items: stretch;
    }
    .header-row.only-main { grid-template-columns: 1fr; }
    .header-row.main-plus-one { grid-template-columns: 1fr auto; }
    .header-row > * { height: var(--tile-h); }

    /* MAIN tile */
    .main-tile {
      position: relative;
      height: var(--tile-h);
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      background: var(--ha-card-background, var(--card-background-color));
      padding-left: 16px;
      overflow: hidden;
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
    }
    .main-icon {
      position: absolute; left: 12px; top: 8px;
      width: var(--main-icon-size, 48px); height: var(--main-icon-size, 48px); line-height: 0;
      --mdc-icon-size: var(--main-icon-size, 48px);
      color: var(--primary-text-color);
    }
    .chip-tr {
      position: absolute; right: 8px; top: 8px; z-index: 3;
      display: inline-flex; align-items: center; gap: 2px;
      padding: 2px 6px; border-radius: 999px;
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .chip-tr ha-icon { width: 10px; height: 10px; line-height:0; --mdc-icon-size:10px; }
    .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

    /* badge basics (bulb/lock/gate) */
    .badge {
      width: var(--badge); height: var(--badge);
      border-radius: 999px;
      display:flex; align-items:center; justify-content:center;
      line-height:0;
      background: rgba(0,0,0,0.06);
    }
    .badge ha-icon {
      --mdc-icon-size: var(--badge-icon);
      width: var(--badge-icon); height: var(--badge-icon);
      display:block; margin:0; padding:0; line-height:0;
      pointer-events:none;
      color: var(--secondary-text-color);
    }
    .main-badges-br {
      position: absolute; right: 8px; bottom: 8px; z-index: 3;
      display: inline-flex; align-items: center; justify-content: flex-end;
      gap: 6px; flex-wrap: wrap; max-width: calc(100% - 16px);
    }
    .main-name {
      position: absolute; left: 12px; bottom: 8px;
      font-weight: 500; font-size: 14px; color: var(--primary-text-color);
    }

    /* AC & THERMOSTAT squares — width == height == --tile-h */
    .square {
      position: relative;
      width: var(--tile-h); height: var(--tile-h);
      aspect-ratio: 1 / 1;
      border-radius: 12px;
      background: var(--card-background-color);
      backdrop-filter: blur(10px);
      transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease;
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      overflow: hidden;
      display: grid; place-items: center;
    }

    .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }
    .ac-fan, .thermo-icon {
      width: var(--ac-therm-icon);
      height: var(--ac-therm-icon);
      --mdc-icon-size: var(--ac-therm-icon);
      display: block; margin: 0; padding: 0; line-height: 0; transform-origin: 50% 50%; pointer-events: none;
    }

    /* AC mode badge (top-right) */
    .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }

    /* Thermostat temp chip (top-right) */
    .temp-chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display:inline-flex; align-items:center; }
    .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: 999px; background:#ff7043; font-size: var(--chip-font-size, 12px); color:#fff; line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--badge); }

    /* Animations */
    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    @keyframes activePulse {
      0%   { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); }
      45%  { box-shadow: 0 28px 56px var(--pulse-strong); transform: translateY(-1px) scale(1.02); }
      100% { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); }
    }
    @keyframes heatingGlow {
      0%   { box-shadow: 0 6px 18px rgba(0,0,0,0.10); }
      50%  { box-shadow: 0 0 30px rgba(255,112,67,0.32); }
      100% { box-shadow: 0 6px 18px rgba(0,0,0,0.10); }
    }
    @keyframes cardPulse {
      0%   { box-shadow: 0 10px 30px var(--panel-shadow-color); }
      50%  { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); }
      100% { box-shadow: 0 10px 30px var(--panel-shadow-color); }
    }

    /* Switch rows */
    .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
    .switch-tile {
      position: relative;
      height: var(--tile-h);
      border-radius: 12px;
      background: var(--card-background-color);
      box-shadow: 0 6px 18px rgba(0,0,0,0.10);
      transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
      display: grid; place-items: center;
      color: var(--secondary-text-color);
    }
    /* Native-like hover feedback */
    .main-tile:hover,
    .square:hover,
    .switch-tile:hover { filter: brightness(1.03); }
    .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
    .switch-tile .name { font-weight: 600; font-size: 12px; }
    .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }

    /* ON base style */
    .switch-tile.on {
      background: var(--primary-color);
      color: var(--primary-background-color);
      transform: translateY(2px);
      box-shadow:
        inset 0 6px 14px rgba(0,0,0,0.20),
        0 18px 40px rgba(255,193,7,0.30),
        0 6px 18px rgba(255,193,7,0.16);
      filter: drop-shadow(0 18px 32px rgba(255,193,7,0.22));
      z-index: 2;
    }
    .switch-tile.on .switch-icon { color: var(--primary-background-color); }

    /* Smart plug: animated band + GREEN glow (not yellow) */
    @keyframes chase {
      0%   { background-position: -150% 0, 0 0; }
      50%  { background-position: 50% 0, 0 0; }
      100% { background-position: 250% 0, 0 0; }
    }
    .switch-tile.smart.on {
      background:
        linear-gradient(90deg, rgba(0,200,83,0.00) 0%, rgba(0,200,83,0.45) 50%, rgba(0,200,83,0.00) 100%),
        var(--primary-color);
      background-size: 30% 100%, 100% 100%;
      background-repeat: no-repeat;
      animation: chase 2s linear infinite;

      /* Override the yellow base glow with GREEN */
      box-shadow:
        inset 0 6px 14px rgba(0,0,0,0.20),
        0 18px 40px rgba(0,200,83,0.30),
        0 6px 18px rgba(0,200,83,0.16);
      filter: drop-shadow(0 18px 32px rgba(0,200,83,0.22));
    }

    .clickable { cursor: pointer; }
  `,t([st({attribute:!1})],Nt.prototype,"hass",void 0),t([function(t){return st({...t,state:!0})}()],Nt.prototype,"_config",void 0),Nt=Ot=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("bitosome-room-card")],Nt),window.customCards=window.customCards||[],window.customCards.push({type:"bitosome-room-card",name:"Room card",description:"Room control card",preview:!1,version:"1.4.1"});try{const t=window;if(!t.__BITOSOME_ROOM_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%cbitosome-room-card%c v1.4.1 loaded",e,i),t.__BITOSOME_ROOM_CARD_LOGGED__=!0}}catch(t){}var Pt=Nt;export{Nt as BitosomeRoomCard,Pt as default};
