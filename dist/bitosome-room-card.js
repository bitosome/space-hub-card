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
var _;g[m]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const f=window,b=f.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,x=`<${w}>`,A=document,E=()=>A.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,C="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,H=RegExp(`>|${C}(?:([^\\s"'>=/]+)(${C}*=${C}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,M=/"/g,P=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),D=new WeakMap,I=A.createTreeWalker(A,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const j=(t,e)=>{const i=t.length-1,o=[];let n,s=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===T?"!--"===l[1]?r=z:void 0!==l[1]?r=N:void 0!==l[2]?(P.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?H:'"'===l[3]?M:O):r===M||r===O?r=H:r===z||r===N?r=T:(r=H,n=void 0);const h=r===H&&t[e+1].startsWith("/>")?" ":"";s+=r===T?i+x:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(o.push(void 0),e):h)}return[B(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class W{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,s=0;const r=t.length-1,a=this.parts,[l,c]=j(t,e);if(this.el=W.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=I.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[s++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?Z:V})}else a.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(P.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),I.nextNode(),a.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===w)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)a.push({type:7,index:n}),t+=$.length-1}n++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var n,s,r,a;if(e===L)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,o)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);I.currentNode=n;let s=I.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new G(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new X(s,this,t)),this._$AV.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(s=I.nextNode(),r++)}return I.currentNode=A,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,o){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=W.createElement(B(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new F(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new W(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new G(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,o,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let s=!1;if(void 0===n)t=q(this,t,e,0),s=!k(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const o=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=q(this,o[i+r],e,r),a===L&&(a=this._$AH[r]),s||(s=!k(a)||a!==this._$AH[r]),a===U?t=U:t!==U&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}s&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const Y=b?b.emptyScript:"";class K extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Z extends V{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:U)===L)return;const o=this._$AH,n=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==U&&(o===U||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Q=f.litHtmlPolyfillSupport;null==Q||Q(W,G),(null!==(_=f.litHtmlVersions)&&void 0!==_?_:f.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const s=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=s._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=r=new G(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
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
var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;var at="[^\\s]+";function lt(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var ct=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),n=o.indexOf(e.toLowerCase());return n>-1?n:null}};function dt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var s=n[o];for(var r in s)t[r]=s[r]}return t}var ht=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ut=["January","February","March","April","May","June","July","August","September","October","November","December"],pt=lt(ut,3),vt={dayNamesShort:lt(ht,3),dayNames:ht,monthNamesShort:pt,monthNames:ut,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},mt=(dt({},vt),function(t){return+t-1}),gt=[null,"[1-9]\\d?"],_t=[null,at],ft=["isPm",at,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],bt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];ct("monthNamesShort"),ct("monthNames");var yt,$t;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(yt||(yt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}($t||($t={}));var wt=["closed","locked","off"],xt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},At=function(t){xt(window,"haptic",t)},Et=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(At("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&xt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),xt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),s="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(s,o,{entity_id:e})})(t,e,wt.includes(t.states[e].state))}(e,i.entity),At("success"));break;case"call-service":if(!o.service)return void At("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data),At("success");break;case"fire-dom-event":xt(t,"ll-custom",o)}},kt=function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),Et(t,e,i,n)};const St="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Ct extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:St?"100px":"50px",height:St?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?xt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,xt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,xt(t,"action",{action:"double_tap"})):xt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",Ct);const Tt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},zt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return Tt(t.element,e),L}render(t){}});var Nt;function Ht(t){try{xt(window,"haptic",t)}catch(t){}}let Ot=Nt=class extends it{static getStubConfig(){return{title:"Living room",tile_height:80,badge_size:22,badge_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",header:{main:{tap_entity:"switch.living_room_light_group",main_name:"Living room",main_icon:"mdi:sofa-outline",temp_sensor:"sensor.kitchen_living_room_temparature_average",humidity_sensor:"sensor.kitchen_living_room_humidity_average",badges:[]},ac:{entity:"climate.living_room_ac"},thermostat:{entity:"climate.thermostat_5_7_group"}},switch_rows:[]}}setConfig(t){const e=(i=t||Nt.getStubConfig(),JSON.parse(JSON.stringify(i)));var i;if(Array.isArray(e.headers)){const t=e.headers;e.header=t[0]||e.header||{}}else e.header=e.header||{},e.headers=e.header?[e.header]:[];Array.isArray(e.switch_rows)||(e.switch_rows=[]),this._config=e}getCardSize(){return 6}render(){var t,e;if(!this._config)return U;const i=Object.assign(Object.assign({},Nt.getStubConfig()),this._config),o=Array.isArray(i.headers)&&i.headers.length?i.headers:[i.header||{}],n=Number(i.tile_height)||80,s=Number(i.badge_size)||22,r=Number(i.badge_icon_size)||14,a=o[0]||{},l=Number(null!==(t=null==a?void 0:a.main_icon_size)&&void 0!==t?t:null==a?void 0:a.maicon_size),c=Number.isFinite(l)&&l>0?l:Number(i.main_icon_size)||48,d=this._rgbaFromColor(i.card_shadow_color,i.card_shadow_intensity),h=Number(i.chip_font_size)||12,u=i.unavailable_pulse_color||"#ff3b30",p=this._hasAnyUnavailable(i,o),v=this._rgbaFromColor(u,.18),m=this._rgbaFromColor(u,.36);return R`
      <ha-card class=${p?"unavailable":""}
               style=${`--panel-shadow-color:${p?v:d}; --unavail-weak:${v}; --unavail-strong:${m}`}
               .header=${(null===(e=this._config)||void 0===e?void 0:e.title)||void 0}>
        <div class="metrics" style=${`--tile-h:${n}px; --badge:${s}px; --badge-icon:${r}px; --main-icon-size:${c}px; --chip-font-size:${h}px;`}>
          <div class="root">
            ${o.map((t=>this._renderHeaderRow(t)))}
            ${this._renderSwitchRows(i.switch_rows)}
          </div>
        </div>
      </ha-card>
    `}_renderHeaderRow(t){const e=t.main||{},i={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,light_group_entity:e.light_group_entity,name:e.main_name||e.name,icon:e.main_icon||e.icon,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,badges:Array.isArray(e.badges)?e.badges:[],tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},o=t.ac||{},n=t.thermostat||{},s=!!(null==o?void 0:o.entity),r=!!(null==n?void 0:n.entity);return R`
      <div class=${s||r?s&&r?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${this._renderMainTile(i)}
        ${s?this._renderACTile(o.entity):U}
        ${r?this._renderThermostatTile(n.entity):U}
      </div>
    `}_renderMainTile(t){return function(t,e){var i;const o=e.icon||"mdi:sofa-outline",n=e.name||"",s=t._fmt2(e.temp_sensor,2,"°"),r=t._fmt2(e.humidity_sensor,2,"%"),a=!(!(null==e?void 0:e.double_tap_action)&&!(null===(i=t._config)||void 0===i?void 0:i.double_tap_action)),l=!!e.light_group_entity,c=e.light_group_entity||e.tap_entity||e.entity,d=l&&t._isOn(c),h=d?"linear-gradient(135deg,#ffcf57,#ffb200)":"rgba(0,0,0,0.06)",u=d?"#ffffff":"var(--secondary-text-color)",p=e.light_group_entity||e.tap_entity||e.entity,v=Array.isArray(null==e?void 0:e.badges)?e.badges.find((t=>"illuminance"===String((null==t?void 0:t.type)||"").toLowerCase())):void 0,m=v?t._renderIlluminanceBadge(v):U;return R`
    <ha-control-button
      class="main-tile"
      @action=${i=>t._onMainAction(i,e,e.tap_entity,e.hold_entity,p)}
      .actionHandler=${zt({hasHold:!0,hasDoubleClick:a})}
      role="button" tabindex="0"
    >
      <ha-icon class="main-icon" .icon=${o}></ha-icon>
      <div class="chip-tr" data-role="chip">
        <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
        <span class="tval">${s}</span>
        <span style="opacity:.6;">|</span>
        <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
        <span class="hval">${r}</span>
      </div>
      ${m}
      <div class="main-badges-br" data-role="badges">
        ${l?R`
          <div class="badge" style=${`background:${h}`}>
            <ha-icon .icon=${"mdi:lightbulb"} style=${`color:${u}`}></ha-icon>
          </div>`:U}
        ${Array.isArray(null==e?void 0:e.badges)&&e.badges.length?R`${e.badges.filter((t=>"illuminance"!==String((null==t?void 0:t.type)||"").toLowerCase())).map((e=>t._renderExtraBadge(e)))}`:U}
      </div>
      <div class="main-name">${n}</div>
    </ha-control-button>
  `}(this,t)}_renderIlluminanceBadge(t){const e=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),i=(null==t?void 0:t.icon)||"mdi:brightness-5",o=this._fmt2(e,0," lx"),n=!!((null==t?void 0:t.tap_action)||(null==t?void 0:t.hold_action)||(null==t?void 0:t.double_tap_action));return R`
      <div class="illum-badge"
           @action=${i=>{const o=i.detail&&i.detail.action||"tap";n?kt(this,this.hass,t,o):"hold"===o?(Ht("medium"),this._openMoreInfo(e)):this._openMoreInfo(e)}}
           .actionHandler=${zt({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
           role="button" tabindex="0">
        <ha-icon .icon=${i}></ha-icon>
        <span class="illum-val">${o}</span>
      </div>
    `}_renderExtraBadge(t){var e,i,o,n;const s=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),r=String((null==t?void 0:t.type)||"").toLowerCase(),a=null==t?void 0:t.icon,l=s&&this.hass?this.hass.states[s]:void 0,c=((null==l?void 0:l.state)||"").toLowerCase();let d="rgba(0,0,0,0.06)",h=a||"mdi:checkbox-blank-circle-outline",u="var(--secondary-text-color)";const p=(t=>{var e,i;return!!t&&("lock"===r||null!==(e=null==s?void 0:s.startsWith("lock."))&&void 0!==e&&e?"locked"===t:null!==(i=null==s?void 0:s.startsWith("cover."))&&void 0!==i&&i?"closed"!==t&&"closing"!==t:"on"===t||"open"===t||"opening"===t)})(c);if("lock"===r||null!==(e=null==s?void 0:s.startsWith("lock."))&&void 0!==e&&e)h=a||(p?"mdi:lock":"mdi:lock-open-variant"),p&&(d="#66bb6a",u="#ffffff");else if("gate"===r||null!==(i=null==s?void 0:s.startsWith("cover."))&&void 0!==i&&i||null!==(o=null==s?void 0:s.startsWith("binary_sensor."))&&void 0!==o&&o){const t=(s||"").split(".")[0],e=((null===(n=null==l?void 0:l.attributes)||void 0===n?void 0:n.device_class)||"").toLowerCase();if("gate"===r||"cover"===t||"binary_sensor"===t&&/(door|window|garage|opening|gate)/.test(e)){const e=c;let i=!1;i="cover"===t?"open"===e||"opening"===e||"closed"!==e&&"closing"!==e&&"unknown"!==e&&"unavailable"!==e:"binary_sensor"===t?"on"===e||"open"===e||"opening"===e:"open"===e||"opening"===e||"on"===e,h=a||(i?"mdi:gate-open":"mdi:gate"),i?(d="#e53935",u="#ffffff"):(d="#66bb6a",u="#ffffff")}}else h=a||(p?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"),p&&(d="#42a5f5",u="#ffffff");const v=!!(null==t?void 0:t.double_tap_action);return R`
      <div class="badge clickable"
           style=${`background:${d}`}
           @action=${e=>this._onBadgeAction(e,t)}
           .actionHandler=${zt({hasHold:!0,hasDoubleClick:v})}
           role="button" tabindex="0">
        <ha-icon .icon=${h} style=${`color:${u}`}></ha-icon>
      </div>
    `}_onBadgeAction(t,e){const i=t.detail&&t.detail.action||"tap";if(this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action))return void kt(this,this.hass,e,i);const o=(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),n=(null==e?void 0:e.hold_entity)||(null==e?void 0:e.entity);if("hold"===i)return Ht("medium"),void this._openMoreInfo(n||o);"lock"!==(o||"").split(".")[0]?this._toggleByDomain(o):this._openMoreInfo(n||o)}_toggleByDomain(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=t.split(".")[0],o=((null==e?void 0:e.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(t);else{const e="open"===o||"opening"===o?"close_cover":"open_cover";this.hass.callService("cover",e,{entity_id:t})}else{const e="locked"===o?"unlock":"lock";this.hass.callService("lock",e,{entity_id:t})}}_renderACTile(t){return function(t,e){var i,o,n;const s=((null===(n=null===(o=null===(i=t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[e])||void 0===n?void 0:n.state)||"").toLowerCase(),r=!!s&&"off"!==s,{bg:a,icon:l}=t._acBadge(s),c=`color:${t._acModeColor(s)}; ${r?"animation:spin 1.5s linear infinite;":""}`;return R`
    <ha-control-button
      class="square ac-tile ${r?"on":""}"
      @action=${i=>t._onACAction(i,e)}
      .actionHandler=${zt({hasHold:!0,hasDoubleClick:!1})}
      role="button" tabindex="0"
    >
      <div class="badge badge-tr" style=${`background:${a}`}> 
        <ha-icon .icon=${l} style="color:#fff"></ha-icon>
      </div>
      <div class="center-xy">
        <ha-icon class="ac-fan" icon="mdi:fan" style=${c}></ha-icon>
      </div>
    </ha-control-button>
  `}(this,t)}_renderThermostatTile(t){return function(t,e){var i,o,n,s,r,a,l,c;const d=null===(o=null===(i=t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[e],h=null!==(a=null!==(s=null===(n=null==d?void 0:d.attributes)||void 0===n?void 0:n.temperature)&&void 0!==s?s:null===(r=null==d?void 0:d.attributes)||void 0===r?void 0:r.target_temp)&&void 0!==a?a:null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.target_temperature,u=t._fmtNumber(h,1)+"°",p=((null===(c=null==d?void 0:d.attributes)||void 0===c?void 0:c.hvac_action)||"").toLowerCase(),v=((null==d?void 0:d.state)||"").toLowerCase(),m="off"===v?"gray":"heating"===p||"heating"===v?"#ff7043":"#66bb6a",g="heating"===p,_=g?"var(--state-climate-heat-color, #ff7043)":"var(--chip-background-color, rgba(0,0,0,0.06))",f=g?"var(--primary-background-color, #fff)":"var(--secondary-text-color)",b="undefined"!=typeof customElements&&!!customElements.get("ha-chip");return R`
    <ha-control-button
      class="square thermostat-tile ${g?"on":""}"
      @action=${i=>t._onThermoAction(i,e)}
      .actionHandler=${zt({hasHold:!0,hasDoubleClick:!1})}
      role="button" tabindex="0"
    >
      <div class="temp-chip-tr">
        ${b?R`<ha-chip style=${`--ha-chip-background-color:${_};--chip-background-color:${_};--ha-chip-text-color:${f};color:${f};font-weight:700;`}>${u}</ha-chip>`:R`<div class="temp-pill" style=${`background:${_};color:${f};`}><span class="thermostat-target">${u}</span></div>`}
      </div>
      <div class="center-xy">
        <ha-icon class="thermostat-icon" icon="mdi:thermostat" style=${`color:${m}`}></ha-icon>
      </div>
    </ha-control-button>
  `}(this,t)}_onMainAction(t,e,i,o,n){const s=t.detail&&t.detail.action||"tap";this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action)?kt(this,this.hass,e,s):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?kt(this,this.hass,this._config,s):"hold"===s?(Ht("medium"),this._openMoreInfo(o||i)):this._toggleGeneric(n||i)}_onACAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(Ht("medium"),this._openMoreInfo(e)):(Ht("success"),this._acToggle(e))}_onThermoAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(Ht("medium"),this._openMoreInfo(e)):(Ht("success"),this._thermoToggle(e))}_renderSwitchRows(t){return t&&t.length?R`${t.map((t=>{const e=t,i=Array.isArray(t)?t:Array.isArray(null==e?void 0:e.row)?e.row:[],o=Math.max(1,i.length||1);return R`<div class="switch-row" style=${`--cols:${o}`}>${i.map((t=>this._renderSwitchTile(t)))}</div>`}))}`:U}_renderSwitchTile(t){return function(t,e){const i=(null==e?void 0:e.entity)||"",o=(null==e?void 0:e.icon)||"",n=(null==e?void 0:e.name)||"",s="smart_plug"===String((null==e?void 0:e.type)||"switch").toLowerCase(),r=t._isOn(i),a=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"])||(null==e?void 0:e.icon_size),l=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),c=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),d=t=>null==t||""===t?"":String(t).match(/px|em|rem|%$/)?String(t):`${Number(t)}px`,h=d(a),u=h?`width:${h};height:${h};--mdc-icon-size:${h};`:"",p=`${l?`font-weight:${l};`:""}${c?`font-size:${d(c)};`:""}`,v="undefined"!=typeof customElements&&!!customElements.get("ha-chip");return R`
    <ha-control-button
      class=${`switch-tile-btn ${s?"smart":""} ${r?"on":""}`}
      @action=${i=>t._onSwitchAction(i,e)}
      .actionHandler=${zt({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
      role="button" tabindex="0"
    >
      <div class="tile-inner">
        ${v?R`<ha-chip>
              ${o?R`<ha-icon .icon=${o} style=${`margin-right:6px;${u}`}></ha-icon>`:U}
              ${n||i}
            </ha-chip>`:R`
              ${o?R`<ha-icon class="switch-icon" .icon=${o} style=${u}></ha-icon>`:U}
              ${n?R`<div class="name" style=${p}>${n}</div>`:U}
            `}
      </div>
    </ha-control-button>
  `}(this,t)}_onSwitchAction(t,e){const i=t.detail&&t.detail.action||"tap";if(this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action))return void kt(this,this.hass,e,i);const o=null==e?void 0:e.entity,n=(null==e?void 0:e.hold_entity)||o;"hold"===i?(Ht("medium"),this._openMoreInfo(n||o)):this._toggleGeneric(o)}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const o=this.hass.states[t];if(!o||""===o.state||"unknown"===o.state||"unavailable"===o.state)return"—"+(i||"");const n=Number(o.state);return Number.isFinite(n)?n.toFixed(e)+(i||""):String(o.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acModeColor(t){return t&&"off"!==t?t.includes("cool")?"#00aaff":t.includes("heat")?"#ff7043":t.includes("dry")?"#ffca28":t.includes("fan")?"#66bb6a":t.includes("auto")?"#26c6da":"var(--paper-item-icon-color)":"gray"}_acBadge(t){return t&&"off"!==t?t.includes("cool")?{bg:"#00aaff",icon:"mdi:snowflake"}:t.includes("heat")?{bg:"#ff7043",icon:"mdi:fire"}:t.includes("dry")?{bg:"#ffca28",icon:"mdi:water-percent"}:t.includes("fan")?{bg:"#66bb6a",icon:"mdi:fan"}:t.includes("auto")?{bg:"#26c6da",icon:"mdi:autorenew"}:{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"}:{bg:"rgba(158,158,158,0.95)",icon:"mdi:power"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),o=!!i&&"off"!==i;this.hass.callService("climate",o?"turn_off":"turn_on",{entity_id:t})}_thermoToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[o,n]=i.split(".");this.hass.callService(o,n,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const o=t.trim();if(o.startsWith("rgba(")||o.startsWith("rgb(")||o.startsWith("hsl(")||o.startsWith("var("))return o;const n=o.replace("#",""),s=t=>parseInt(t,16);if(3===n.length){return`rgba(${s(n[0]+n[0])},${s(n[1]+n[1])},${s(n[2]+n[2])},${i})`}if(n.length>=6){return`rgba(${s(n.slice(0,2))},${s(n.slice(2,4))},${s(n.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=[];(Array.isArray(e)?e:[e]).forEach((t=>{const e=(null==t?void 0:t.main)||{},o={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,light_group_entity:e.light_group_entity,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor},n=(null==t?void 0:t.ac)||{},s=(null==t?void 0:t.thermostat)||{};i.push(null==o?void 0:o.tap_entity,null==o?void 0:o.hold_entity,null==o?void 0:o.light_group_entity,null==o?void 0:o.temp_sensor,null==o?void 0:o.humidity_sensor,null==n?void 0:n.entity,null==s?void 0:s.entity)}));(t.switch_rows||[]).forEach((t=>{var e;(Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[]).forEach((t=>i.push(null==t?void 0:t.entity,null==t?void 0:t.hold_entity)))}));const o=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const n=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t],s=((null==n?void 0:n.state)||"").toLowerCase();return o.has(s)}))}};Ot.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(i,t,o)})`
    :host { display:block; }
    .metrics, .metrics * { box-sizing: border-box; }

    .metrics {
      --ac-therm-icon: 50px;
    }

    ha-card {
      border-radius: var(--ha-card-border-radius, 16px);
      background: var(--ha-card-background, var(--card-background-color));
      box-shadow: 0 10px 30px var(--panel-shadow-color);
      padding: 12px;
      color: var(--primary-text-color);
      transition: filter 0.12s ease, box-shadow 0.12s ease;
      position: relative;
      /* Allow pulsing glows to spill outside to neighboring cards */
      overflow: visible;
    }
    ha-card.unavailable {
      animation: cardPulse 2.8s ease-in-out infinite;
    }

    .root { display: grid; gap: 12px; }

    /* Removed surface wrapper to rely on ha-card styling */

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
      /* Ensure full-width layout even inside flex hosts like ha-control-button */
      width: 100%;
      height: var(--tile-h);
      border-radius: var(--ha-card-border-radius, 12px);
      overflow: hidden;
      transition: transform 0.12s ease, filter 0.12s ease;
      z-index: 0; /* establish stacking context */
    }
    /* Remove custom behind-layer glow; let HA handle shadows */
    /* Ensure the internal HA button element matches the tile size when main-tile is the host */
    .main-tile::part(button) {
      width: 100%;
      height: 100%;
      display: block;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
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
      padding: 2px 6px; border-radius: var(--ha-chip-border-radius, 999px);
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .chip-tr ha-icon { width: 10px; height: 10px; line-height:0; --mdc-icon-size:10px; }
    .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

    /* badge basics (bulb/lock/gate) */
    .badge {
      width: var(--badge); height: var(--badge);
      border-radius: var(--ha-badge-border-radius, 999px);
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

    /* Illuminance badge on main tile (right-center, same chip pattern) */
    .illum-badge {
      position: absolute; right: 8px; top: 50%; z-index: 3;
      transform: translateY(-50%);
      display: inline-flex; align-items: center; gap: 6px;
      padding: 2px 8px; border-radius: var(--ha-chip-border-radius, 999px);
      background: rgba(0,0,0,0.06);
      font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap;
    }
    .illum-badge ha-icon { width: 12px; height: 12px; line-height:0; --mdc-icon-size:12px; }

    /* AC & THERMOSTAT squares — width == height == --tile-h */
    .square {
      position: relative;
      width: var(--tile-h); height: var(--tile-h);
      aspect-ratio: 1 / 1;
      border-radius: var(--ha-card-border-radius, 12px);
      transition: transform 0.18s ease, filter 0.12s ease;
      overflow: visible;
      display: grid; place-items: center;
      z-index: 0; /* establish stacking context */
    }
    /* Make the native button inside ha-control-button stretch/take the tile radius when used with .square */
    .square::part(button) {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
    }
    /* Remove custom glows; rely on HA theme styling */

    .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }
    .ac-fan, .thermostat-icon {
      width: var(--ac-therm-icon);
      height: var(--ac-therm-icon);
      --mdc-icon-size: var(--ac-therm-icon);
      display: block; margin: 0; padding: 0; line-height: 0; transform-origin: 50% 50%; pointer-events: none;
    }

    /* AC mode badge (top-right) */
    .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }

    /* Thermostat temp chip (top-right) */
    .temp-chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display:inline-flex; align-items:center; }
    .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: var(--ha-chip-border-radius, 999px); background: var(--chip-background-color, rgba(0,0,0,0.06)); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--badge); }
    .temp-chip-tr ha-chip { font-size: var(--chip-font-size, 12px); }

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
    /* Pure glow (no movement/scale) */
    @keyframes glowPulse {
      0%   { box-shadow: 0 10px 20px var(--pulse-weak); }
      50%  { box-shadow: 0 28px 56px var(--pulse-strong); }
      100% { box-shadow: 0 10px 20px var(--pulse-weak); }
    }
    @keyframes cardPulse {
      0%   { box-shadow: 0 10px 30px var(--panel-shadow-color); }
      50%  { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); }
      100% { box-shadow: 0 10px 30px var(--panel-shadow-color); }
    }

    /* Switch rows */
    .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
    /* Native HA control button variant for switch tiles */
    .switch-tile-btn {
      height: var(--tile-h);
      width: 100%;
      display: grid; place-items: center;
      position: relative;
      overflow: hidden;
      color: var(--secondary-text-color);
      border-radius: var(--ha-card-border-radius, 12px);
      transition: filter 0.12s ease;
      z-index: 0; /* establish stacking context */
    }
    /* Ensure inner native button fully matches host size/radius */
    .switch-tile-btn::part(button) {
      width: 100%;
      height: 100%;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      border-radius: inherit;
      background: inherit;
    }
    /* Hover feedback handled by HA components */
    .switch-tile-btn:not(.on):hover { }
    .switch-tile-btn:not(.on):hover::after {}
    /* ON state for native HA button: persistent glow on same layer as hover (no brightness) */
    .switch-tile-btn.on {
      border-radius: var(--ha-card-border-radius, 12px);
      position: relative;
      will-change: filter;
    }
    .switch-tile-btn.on::after {}
    .switch-tile-btn.on:hover,
    .switch-tile-btn.on:hover > .tile-inner { border-radius: var(--ha-card-border-radius, 12px); }
    .switch-tile-btn.on:hover::after {}
    /* Smart plug ON: persistent green glow on same layer as hover (no brightness) */
    .switch-tile-btn.smart.on { will-change: filter; }
    .switch-tile-btn.smart.on::after {}
    .switch-tile-btn.smart.on:hover,
    .switch-tile-btn.smart.on:hover > .tile-inner {
      /* Ensure SMART ON hover keeps GREEN glow */
      border-radius: var(--ha-card-border-radius, 12px);
      transform: translateY(-1px);
      /* Use only box-shadow to ensure radius consistency */
    }
    .switch-tile-btn.smart.on:hover::after {}
    .switch-tile { }
    /* (Removed) embedded card styles */
    .main-tile:hover {}
    .square:hover {}
    .switch-tile:not(.on):hover {}
    .main-tile:hover::after {}
    .square:hover::after {}
    .switch-tile:not(.on):hover::after {}
    .switch-tile-btn:not(.on):hover { }
    /* (moved) Thermostat/AC glow states handled on .thermostat-tile.on / .ac-tile.on */
    .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
    .switch-tile .name { font-weight: 600; font-size: 12px; }
    .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }
    .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }

    /* Remove custom ON glow; theme controls appearance */
    .switch-tile.on {
      border-radius: var(--ha-card-border-radius, 12px);
    }
    .switch-tile.on::after {}
    .switch-tile.on:hover { border-radius: var(--ha-card-border-radius, 12px); }
    .switch-tile.on:hover::after {}

    /* Smart plug: animated band + GREEN glow (not yellow) */
    @keyframes chase {
      0%   { background-position: -150% 0, 0 0; }
      50%  { background-position: 50% 0, 0 0; }
      100% { background-position: 250% 0, 0 0; }
    }
    .switch-tile.smart.on { border-radius: var(--ha-card-border-radius, 12px); }
    .switch-tile.smart.on::after {}
    .switch-tile.smart.on:hover { border-radius: var(--ha-card-border-radius, 12px); }
    .switch-tile.smart.on:hover::after {}

    .clickable { cursor: pointer; }
  `,t([st({attribute:!1})],Ot.prototype,"hass",void 0),t([function(t){return st({...t,state:!0})}()],Ot.prototype,"_config",void 0),Ot=Nt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("bitosome-room-card")],Ot),window.customCards=window.customCards||[],window.customCards.push({type:"bitosome-room-card",name:"Room card",description:"Room control card",preview:!1,version:"1.5.0"});try{const t=window;if(!t.__BITOSOME_ROOM_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%cbitosome-room-card%c v1.5.0 loaded",e,i),t.__BITOSOME_ROOM_CARD_LOGGED__=!0}}catch(t){}var Mt=Ot;export{Ot as BitosomeRoomCard,Mt as default};
