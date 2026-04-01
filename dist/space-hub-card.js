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
function t(t,e,i,o){var n,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(r=(a<3?n(r):a>3?n(e,i,r):n(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class a{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new a(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new a("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},m="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),a="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=a.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,A=`<${x}>`,C=document,E=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,R=/"/g,M=/^(?:script|style|textarea|title)$/i,O=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),j=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function F(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}class D{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,a=0;const r=t.length-1,s=this.parts,[l,c]=((t,e)=>{const i=t.length-1,o=[];let n,a=2===e?"<svg>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=z:void 0!==l[1]?r=N:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=null!=n?n:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?I:'"'===l[3]?R:P):r===R||r===P?r=I:r===z||r===N?r=H:(r=I,n=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";a+=r===H?i+A:c>=0?(o.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+w+h):i+w+(-2===c?(o.push(void 0),e):h)}return[F(t,a+(t[i]||"<?>")+(2===e?"</svg>":"")),o]})(t,e);if(this.el=D.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=V.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=c[a++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?G:"?"===e[1]?K:"@"===e[1]?J:W})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(M.test(o.tagName)){const t=o.textContent.split(w),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),V.nextNode(),s.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===x)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(w,t+1));)s.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,o){var n,a,r,s;if(e===L)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,o)),e}class B{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);V.currentNode=n;let a=V.nextNode(),r=0,s=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Y(a,a.nextSibling,this,t):1===l.type?e=new l.ctor(a,l.name,l.strings,this,t):6===l.type&&(e=new X(a,this,t)),this._$AV.push(e),l=o[++s]}r!==(null==l?void 0:l.index)&&(a=V.nextNode(),r++)}return V.currentNode=C,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,o){var n;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),k(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=D.createElement(F(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new B(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new D(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new Y(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,o,n){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let a=!1;if(void 0===n)t=q(this,t,e,0),a=!k(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const o=t;let r,s;for(t=n[0],r=0;r<n.length-1;r++)s=q(this,o[i+r],e,r),s===L&&(s=this._$AH[r]),a||(a=!k(s)||s!==this._$AH[r]),s===U?t=U:t!==U&&(t+=(null!=s?s:"")+n[r+1]),this._$AH[r]=s}a&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class G extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const Z=y?y.emptyScript:"";class K extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends W{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:U)===L)return;const o=this._$AH,n=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==U&&(o===U||n);n&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(D,Y),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const a=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=a._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;a._$litPart$=r=new Y(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt=2,at=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(t,e)=>{var i,o;const n=t._$AN;if(void 0===n)return!1;for(const t of n)null===(o=(i=t)._$AO)||void 0===o||o.call(i,e,!1),st(t,e);return!0},lt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ct=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ut(e)}};function dt(t){void 0!==this._$AN?(lt(this),this._$AM=t,ct(this)):this._$AM=t}function ht(t,e=!1,i=0){const o=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)st(o[t],!1),lt(o[t]);else null!=o&&(st(o,!1),lt(o));else st(this,t)}const ut=t=>{var e,i,o,n;t.type==nt&&(null!==(e=(o=t)._$AP)&&void 0!==e||(o._$AP=ht),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=dt))};class pt extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),e&&(st(this,t),lt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class gt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,ft=1073741823;const _t=at(class extends pt{constructor(){super(...arguments),this._$C_t=ft,this._$Cwt=[],this._$Cq=new vt(this),this._$CK=new gt}render(...t){var e;return null!==(e=t.find((t=>!mt(t))))&&void 0!==e?e:L}update(t,e){const i=this._$Cwt;let o=i.length;this._$Cwt=e;const n=this._$Cq,a=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const r=e[t];if(!mt(r))return this._$C_t=t,r;t<o&&r===i[t]||(this._$C_t=ft,o=0,Promise.resolve(r).then((async t=>{for(;a.get();)await a.get();const e=n.deref();if(void 0!==e){const i=e._$Cwt.indexOf(r);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return L}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,yt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):yt(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function wt(t){return $t({...t,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xt;null===(xt=window.HTMLSlotElement)||void 0===xt||xt.prototype.assignedElements;var At="[^\\s]+";function Ct(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var Et=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),n=o.indexOf(e.toLowerCase());return n>-1?n:null}};function kt(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var a=n[o];for(var r in a)t[r]=a[r]}return t}var St=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Tt=["January","February","March","April","May","June","July","August","September","October","November","December"],Ht=Ct(Tt,3),zt={dayNamesShort:Ct(St,3),dayNames:St,monthNamesShort:Ht,monthNames:Tt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},Nt=(kt({},zt),function(t){return+t-1}),It=[null,"[1-9]\\d?"],Pt=[null,At],Rt=["isPm",At,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],Mt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];Et("monthNamesShort"),Et("monthNames");var Ot,Lt;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Ot||(Ot={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Lt||(Lt={}));var Ut=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},jt=new Set(["call-service","divider","section","weblink","cast","select"]),Vt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Ft=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return o("hui-error-card",{type:"error",error:t,config:e})},o=function(t,e){var o=window.document.createElement(t);try{o.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return o};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var n=t.type;if(n&&n.startsWith("custom:"))n=n.substr("custom:".length);else if(e)if(jt.has(n))n="hui-"+n+"-row";else{if(!t.entity)return i("Invalid config given.",t);var a=t.entity.split(".",1)[0];n="hui-"+(Vt[a]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return o(n,t);var r=i("Custom element doesn't exist: "+t.type+".",t);r.style.display="None";var s=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),Ut(r,"ll-rebuild",{},r)})),r};function Dt(t){return JSON.parse(JSON.stringify(t))}const qt=new Set(["more-info","toggle","perform-action","navigate","url","assist","none","fire-dom-event","call-service"]),Bt=t=>!!t&&"object"==typeof t&&!Array.isArray(t),Yt=t=>!!((null==t?void 0:t.tap_action)||(null==t?void 0:t.hold_action)||(null==t?void 0:t.double_tap_action)),Wt=t=>{if(null==t||!1===t)return;if(!0===t)return!0;if("string"==typeof t){const e=t.trim();return!e||{text:e}}if(!Bt(t))return;const e={};if("string"==typeof t.text&&t.text.trim()&&(e.text=t.text),"string"==typeof t.title&&t.title.trim()&&(e.title=t.title),"string"==typeof t.confirm_text&&t.confirm_text.trim()&&(e.confirm_text=t.confirm_text),"string"==typeof t.dismiss_text&&t.dismiss_text.trim()&&(e.dismiss_text=t.dismiss_text),Array.isArray(t.exemptions)){const i=t.exemptions.filter((t=>!!t&&"object"==typeof t&&"string"==typeof t.user)).map((t=>({user:t.user})));i.length&&(e.exemptions=i)}return!Object.keys(e).length||e},Gt=t=>{if(Bt(t)&&"string"==typeof t.action&&qt.has(t.action)){if("call-service"===t.action||"perform-action"===t.action){return Object.assign(Object.assign({},t),{action:"perform-action",perform_action:"string"==typeof t.perform_action?t.perform_action:"string"==typeof t.service?t.service:void 0,data:Bt(t.data)?t.data:Bt(t.service_data)?t.service_data:void 0,target:Bt(t.target)?t.target:void 0,confirmation:Wt(t.confirmation)})}return Object.assign(Object.assign({},t),{confirmation:Wt(t.confirmation)})}},Zt=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],Kt=["switch","smart_plug"],Jt=["static","pulse","none"],Xt=["more-info","toggle","perform-action","navigate","url","assist","none"];let Qt=class extends it{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(t){this._config=Dt(t)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var t,e,i;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const o=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));o&&await(null===(i=o.createCardElement)||void 0===i?void 0:i.call(o,{type:"entities",entities:[]}))}catch(t){}const o=["ha-form","ha-formfield","ha-icon-picker","ha-switch","ha-textfield","ha-expansion-panel","ha-yaml-editor"],n=t=>Promise.race([customElements.whenDefined(t),new Promise((t=>setTimeout(t,1500)))]);try{await Promise.all(o.map(n))}catch(t){}this.requestUpdate()}_fireConfigChanged(){Ut(this,"config-changed",{config:Dt(this._config)}),this.requestUpdate()}_valueChanged(t,e){const i=t.split(".");let o=this._config;for(let t=0;t<i.length-1;t++){const e=i[t],n=Number(e);if(Number.isFinite(n)){if(!Array.isArray(o))return;o[n]||(o[n]={}),o=o[n]}else void 0===o[e]&&(o[e]={}),o=o[e]}const n=i[i.length-1];""===e||null==e?delete o[n]:o[n]=e,this._fireConfigChanged()}_getNestedValue(t){const e=t.split(".");let i=this._config;for(const t of e){if(null==i)return;const e=Number(t);i=Number.isFinite(e)?i[e]:i[t]}return i}_handleSelectChanged(t,e){const i=t.split("."),o=i[i.length-1],n=i[i.length-2];"action"===o&&["tap_action","hold_action","double_tap_action"].includes(n)?this._handleActionTypeChanged(i.slice(0,-1).join("."),e):this._valueChanged(t,e)}_handleActionTypeChanged(t,e){if(!e)return void this._valueChanged(t,void 0);const i=Gt(this._getNestedValue(t)),o=i?Object.assign({},i):{};o.action=e,"more-info"!==e&&delete o.entity,"navigate"!==e&&(delete o.navigation_path,delete o.navigation_replace),"url"!==e&&delete o.url_path,"perform-action"!==e&&(delete o.perform_action,delete o.data,delete o.target,delete o.service,delete o.service_data),"assist"!==e&&(delete o.pipeline_id,delete o.start_listening),"perform-action"!==e||o.perform_action||(o.perform_action=""),"navigate"!==e||o.navigation_path||(o.navigation_path=""),"url"!==e||o.url_path||(o.url_path=""),"assist"===e&&void 0===o.start_listening&&(o.start_listening=!1),this._valueChanged(t,o)}_setActionConfirmation(t,e){var i;const o=Gt(this._getNestedValue(t));if(!o)return;const n=Object.assign({},o);e?n.confirmation=null===(i=n.confirmation)||void 0===i||i:delete n.confirmation,this._valueChanged(t,n)}_setActionConfirmationText(t,e){const i=Gt(this._getNestedValue(t));if(!i)return;const o=Object.assign({},i),n=e.trim();o.confirmation=!n||Object.assign(Object.assign({},"object"==typeof o.confirmation&&o.confirmation?o.confirmation:{}),{text:e}),this._valueChanged(t,o)}_renderSelectField(t,e,i,o){const n=i||o[0]||"",a=n&&!o.includes(n)?[n,...o]:[...o],r=a.includes(i||"")?i||"":n;return O`
      <ha-form
        .hass=${this.hass}
        .data=${{selection:r}}
        .schema=${[{name:"selection",selector:{select:{mode:"dropdown",options:a.map((t=>({value:t,label:t})))}}}]}
        .computeLabel=${e=>"selection"===e.name?t:void 0}
        @value-changed=${t=>{var i;t.stopPropagation(),this._handleSelectChanged(e,null===(i=t.detail.value)||void 0===i?void 0:i.selection)}}
      ></ha-form>
    `}_renderEntityField(t,e,i,o={}){return O`
      <ha-form
        .hass=${this.hass}
        .data=${{entity:i||""}}
        .schema=${[{name:"entity",selector:{entity:o}}]}
        .computeLabel=${e=>"entity"===e.name?t:void 0}
        @value-changed=${t=>{var i;t.stopPropagation(),this._valueChanged(e,null===(i=t.detail.value)||void 0===i?void 0:i.entity)}}
      ></ha-form>
    `}_friendlyEntityName(t){var e,i,o;return t&&(null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t])&&(null===(o=this.hass.states[t].attributes)||void 0===o?void 0:o.friendly_name)||""}_entitySummary(t){if(!t)return"No entity selected";const e=this._friendlyEntityName(t);return e&&e!==t?`${e} • ${t}`:t}render(){return this.hass&&this._config?O`
      <div class="editor-container">
        <div class="mode-toggle">
          <button
            class="editor-btn${this._yamlMode?"":" active"}"
            @click=${()=>{this._yamlMode=!1,this._yamlError=""}}
          >Visual Editor</button>
          <button
            class="editor-btn${this._yamlMode?" active":""}"
            @click=${()=>{this._yamlMode=!0}}
          >YAML</button>
        </div>
        ${this._yamlMode?this._renderYamlEditor():this._renderVisualEditor()}
      </div>
    `:O``}_renderYamlEditor(){return O`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?O`<div class="yaml-error">${this._yamlError}</div>`:U}
    `}_yamlChanged(t){t.stopPropagation();const e=t.detail.value;e&&"object"==typeof e?(this._yamlError="",this._config=Dt(e),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return O`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var t,e,i,o,n;return O`
      <ha-expansion-panel outlined .header=${"Appearance"}>
        <div class="section-content">
          <div class="side-by-side">
            <ha-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(null!==(t=this._config.tile_height)&&void 0!==t?t:"")}
              @input=${t=>{const e=Number(t.target.value);this._valueChanged("tile_height",Number.isFinite(e)&&e>0?e:void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(null!==(e=this._config.main_icon_size)&&void 0!==e?e:"")}
              @input=${t=>{const e=Number(t.target.value);this._valueChanged("main_icon_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(null!==(i=this._config.chip_icon_size)&&void 0!==i?i:"")}
              @input=${t=>{const e=Number(t.target.value);this._valueChanged("chip_icon_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(null!==(o=this._config.chip_font_size)&&void 0!==o?o:"")}
              @input=${t=>{const e=Number(t.target.value);this._valueChanged("chip_font_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color||""}
              @input=${t=>this._valueChanged("card_shadow_color",t.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="Shadow Intensity (0-1)"
              type="number"
              step="0.05"
              min="0"
              max="1"
              .value=${String(null!==(n=this._config.card_shadow_intensity)&&void 0!==n?n:"")}
              @input=${t=>{const e=Number(t.target.value);this._valueChanged("card_shadow_intensity",Number.isFinite(e)?e:void 0)}}
            ></ha-textfield>
          </div>
          <ha-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color||""}
            @input=${t=>this._valueChanged("unavailable_pulse_color",t.target.value)}
          ></ha-textfield>
        </div>
      </ha-expansion-panel>
    `}_renderHeadersSection(){const t=this._config.headers||[];return O`
      <ha-expansion-panel outlined .header=${`Headers (${t.length})`}>
        <div class="section-content">
          ${t.length>1?O`
            <div class="tab-bar">
              ${t.map(((t,e)=>O`<button class="tab-btn${this._selectedHeaderIndex===e?" active":""}" @click=${()=>{this._selectedHeaderIndex=e,this.requestUpdate()}}>Header ${e+1}</button>`))}
            </div>
          `:U}
          ${t.length?this._renderHeader(t[this._selectedHeaderIndex]||t[0],this._selectedHeaderIndex):O`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${t.length>0?O`
              <button class="editor-btn danger" @click=${()=>this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex+1}
              </button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(t){this._config.headers&&(this._config.headers.splice(t,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(t,e){const i=`headers.${e}`;return O`
      ${this._renderMainTileConfig(t.main,`${i}.main`)}
      ${this._renderACConfig(t.ac,`${i}.ac`)}
      ${this._renderThermostatConfig(t.thermostat,`${i}.thermostat`)}
    `}_renderMainTileConfig(t,e){const i=t||{};return O`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!t?O`
            <div class="side-by-side">
              <ha-textfield
                label="Name"
                .value=${i.main_name||""}
                @input=${t=>this._valueChanged(`${e}.main_name`,t.target.value)}
              ></ha-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${i.main_icon||""}
                @value-changed=${t=>this._valueChanged(`${e}.main_icon`,t.detail.value)}
              ></ha-icon-picker>
            </div>
            ${this._renderEntityField("Light Group Entity (tap toggles)",`${e}.light_group_entity`,i.light_group_entity)}
            <div class="side-by-side">
              ${this._renderEntityField("Tap Entity",`${e}.tap_entity`,i.tap_entity)}
              ${this._renderEntityField("Hold Entity (more-info)",`${e}.hold_entity`,i.hold_entity)}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${e}.temp_sensor`,i.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${e}.humidity_sensor`,i.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,i.glow_mode,Jt)}
            ${this._renderChipsConfig(i.chips||[],e)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${e}.double_tap_action`,i.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:O`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(t,e){const i=`${e}.chips`;return O`
      <ha-expansion-panel outlined .header=${`Chips (${t.length})`}>
        <div class="section-content">
          ${t.map(((t,e)=>this._renderSingleChip(t,`${i}.${e}`,e,i)))}
          <button class="editor-btn" @click=${()=>{const t=this._getNestedValue(i)||[];t.push({type:"custom",entity:""}),this._valueChanged(i,t)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(t,e,i,o){return O`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Chip ${i+1}: ${t.type||"custom"}</span>
            <span class="sub-item-meta">${this._entitySummary(t.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=this._getNestedValue(o)||[];t.splice(i,1),this._valueChanged(o,[...t])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${e}.type`,t.type,Zt)}
          ${this._renderEntityField("Entity",`${e}.entity`,t.entity)}
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${t.icon||""}
            @value-changed=${t=>this._valueChanged(`${e}.icon`,t.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${t.icon_active||""}
            @value-changed=${t=>this._valueChanged(`${e}.icon_active`,t.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${t.icon_inactive||""}
            @value-changed=${t=>this._valueChanged(`${e}.icon_inactive`,t.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${t.icon_unavailable||""}
            @value-changed=${t=>this._valueChanged(`${e}.icon_unavailable`,t.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-textfield
            label="Background (Active)"
            .value=${t.background_active||""}
            @input=${t=>this._valueChanged(`${e}.background_active`,t.target.value)}
          ></ha-textfield>
          <ha-textfield
            label="Background (Unavailable)"
            .value=${t.background_unavailable||""}
            @input=${t=>this._valueChanged(`${e}.background_unavailable`,t.target.value)}
          ></ha-textfield>
        </div>
        <ha-textfield
          label="Icon Color (Unavailable)"
          .value=${t.icon_color_unavailable||""}
          @input=${t=>this._valueChanged(`${e}.icon_color_unavailable`,t.target.value)}
        ></ha-textfield>
      </div>
    `}_renderACConfig(t,e){const i=t||{};return O`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!t?O`
            ${this._renderEntityField("Climate Entity",`${e}.entity`,i.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,i.glow_mode,Jt)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,i.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:O`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(t,e){const i=t||{};return O`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!t?O`
            ${this._renderEntityField("Climate Entity",`${e}.entity`,i.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,i.glow_mode,Jt)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,i.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:O`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const t=this._config.switch_rows||[];return O`
      <ha-expansion-panel outlined .header=${`Switch Rows (${t.length})`}>
        <div class="section-content">
          ${t.length>1?O`
            <div class="tab-bar">
              ${t.map(((t,e)=>O`<button class="tab-btn${this._selectedSwitchRowIndex===e?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=e,this.requestUpdate()}}>Row ${e+1}</button>`))}
            </div>
          `:U}
          ${t.length?this._renderSwitchRow(t[this._selectedSwitchRowIndex]||t[0],this._selectedSwitchRowIndex):O`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${t.length>0?O`
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex+1}
              </button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(t){this._config.switch_rows&&(this._config.switch_rows.splice(t,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(t,e){const i=Array.isArray(t)?t:Array.isArray(null==t?void 0:t.row)?t.row:[],o=`switch_rows.${e}`,n=Array.isArray(t)?o:`${o}.row`;return O`
      <div class="section-content">
        ${i.map(((t,e)=>this._renderSwitchItem(t,`${n}.${e}`,e,n)))}
        <button class="editor-btn" @click=${()=>{const t=this._getNestedValue(n)||[];t.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(n,[...t])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(t,e,i,o){var n;return O`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${t.name||this._friendlyEntityName(t.entity)||`Switch ${i+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(t.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=this._getNestedValue(o)||[];t.splice(i,1),this._valueChanged(o,[...t])}}
          ></ha-icon-button>
        </div>
        ${this._renderEntityField("Controlled Entity",`${e}.entity`,t.entity)}
        <div class="side-by-side">
          <ha-textfield
            label="Name"
            .value=${t.name||""}
            @input=${t=>this._valueChanged(`${e}.name`,t.target.value)}
          ></ha-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${t.icon||""}
            @value-changed=${t=>this._valueChanged(`${e}.icon`,t.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${e}.type`,t.type,Kt)}
          ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,Jt)}
        </div>
        ${this._renderEntityField("Hold Entity (more-info on hold)",`${e}.hold_entity`,t.hold_entity)}

        <ha-expansion-panel outlined .header=${"Styling"}>
          <div class="section-content">
            <div class="side-by-side">
              <ha-textfield
                label="Icon Size"
                .value=${t.icon_size||""}
                @input=${t=>this._valueChanged(`${e}.icon_size`,t.target.value)}
              ></ha-textfield>
              <ha-textfield
                label="Font Size"
                .value=${t.font_size||t["font-size"]||""}
                @input=${t=>this._valueChanged(`${e}.font_size`,t.target.value)}
              ></ha-textfield>
            </div>
            <ha-textfield
              label="Font Weight"
              .value=${t.font_weight||t["font-weight"]||""}
              @input=${t=>this._valueChanged(`${e}.font_weight`,t.target.value)}
            ></ha-textfield>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Confirmation"}>
          <div class="section-content">
            <ha-formfield label="Require confirmation on tap">
              <ha-switch
                .checked=${!!t.confirmation}
                @change=${t=>{const i=t.target.checked;this._valueChanged(`${e}.confirmation`,i?"Are you sure?":void 0)}}
              ></ha-switch>
            </ha-formfield>
            ${t.confirmation?O`
              <ha-textfield
                label="Confirmation Text"
                .value=${"string"==typeof t.confirmation?t.confirmation:(null===(n=t.confirmation)||void 0===n?void 0:n.text)||"Are you sure?"}
                @input=${t=>this._valueChanged(`${e}.confirmation`,t.target.value)}
              ></ha-textfield>
            `:U}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Actions"}>
          <div class="section-content">
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${e}.double_tap_action`,t.double_tap_action)}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Info Templates"}>
          <div class="section-content">
            ${this._renderInfoTemplates(t,e)}
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderInfoTemplates(t,e){const i=Array.isArray(t.info_templates)?t.info_templates:t.info_template?[t.info_template]:[];return O`
      ${i.map(((t,o)=>O`
        <div class="side-by-side">
          <ha-textfield
            label="Template ${o+1}"
            .value=${t||""}
            @input=${t=>{const n=[...i];n[o]=t.target.value,this._valueChanged(`${e}.info_templates`,n)}}
          ></ha-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=[...i];t.splice(o,1),this._valueChanged(`${e}.info_templates`,t.length?t:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${i.length<2?O`
        <button class="editor-btn" @click=${()=>{const t=[...i,""];this._valueChanged(`${e}.info_templates`,t)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:U}
    `}_renderCardsSection(){const t=this._config.cards||[];return O`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${t.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${t.map(((t,e)=>this._renderEmbeddedCardItem(t,e)))}
          <button class="editor-btn" @click=${()=>{const e=[...t,{type:"tile",entity:""}];this._valueChanged("cards",e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(t,e){return O`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Card ${e+1}: ${t.type||"unknown"}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=[...this._config.cards||[]];t.splice(e,1),this._valueChanged("cards",t.length?t:void 0)}}
          ></ha-icon-button>
        </div>
        <ha-yaml-editor
          .defaultValue=${t}
          @value-changed=${t=>{t.stopPropagation();const i=[...this._config.cards||[]];i[e]=t.detail.value,this._valueChanged("cards",i)}}
        ></ha-yaml-editor>
      </div>
    `}_renderActionConfig(t,e,i){const o=Gt(i),n=!!o,a=Wt(null==o?void 0:o.confirmation),r=void 0!==a,s=a&&"object"==typeof a&&a.text||"";return O`
      <ha-expansion-panel outlined .header=${t}>
        <div class="section-content">
          ${n?O`
            ${this._renderSelectField("Action",`${e}.action`,null==o?void 0:o.action,Xt)}
            ${"more-info"===(null==o?void 0:o.action)?O`
              ${this._renderEntityField("More Info Entity",`${e}.entity`,o.entity)}
            `:U}
            ${"navigate"===(null==o?void 0:o.action)?O`
              <ha-textfield
                label="Navigation Path"
                .value=${o.navigation_path||""}
                @input=${t=>this._valueChanged(`${e}.navigation_path`,t.target.value)}
              ></ha-textfield>
              <ha-formfield label="Replace current path">
                <ha-switch
                  .checked=${!!o.navigation_replace}
                  @change=${t=>this._valueChanged(`${e}.navigation_replace`,t.target.checked||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:U}
            ${"url"===(null==o?void 0:o.action)?O`
              <ha-textfield
                label="URL"
                .value=${o.url_path||""}
                @input=${t=>this._valueChanged(`${e}.url_path`,t.target.value)}
              ></ha-textfield>
            `:U}
            ${"perform-action"===(null==o?void 0:o.action)?O`
              <ha-textfield
                label="Action"
                .value=${o.perform_action||""}
                @input=${t=>this._valueChanged(`${e}.perform_action`,t.target.value)}
              ></ha-textfield>
              <ha-yaml-editor
                label="Target"
                .defaultValue=${o.target||{}}
                @value-changed=${t=>{t.stopPropagation(),this._valueChanged(`${e}.target`,t.detail.value)}}
              ></ha-yaml-editor>
              <ha-yaml-editor
                label="Data"
                .defaultValue=${o.data||{}}
                @value-changed=${t=>{t.stopPropagation(),this._valueChanged(`${e}.data`,t.detail.value)}}
              ></ha-yaml-editor>
            `:U}
            ${"assist"===(null==o?void 0:o.action)?O`
              <ha-textfield
                label="Pipeline ID"
                .value=${o.pipeline_id||""}
                @input=${t=>this._valueChanged(`${e}.pipeline_id`,t.target.value)}
              ></ha-textfield>
              <ha-formfield label="Start listening immediately">
                <ha-switch
                  .checked=${!!o.start_listening}
                  @change=${t=>this._valueChanged(`${e}.start_listening`,t.target.checked||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:U}
            <ha-formfield label="Require confirmation">
              <ha-switch
                .checked=${r}
                @change=${t=>this._setActionConfirmation(e,t.target.checked)}
              ></ha-switch>
            </ha-formfield>
            ${r?O`
              <ha-textfield
                label="Confirmation Text"
                .value=${s}
                @input=${t=>this._setActionConfirmationText(e,t.target.value)}
              ></ha-textfield>
            `:U}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:O`
            <button class="editor-btn" @click=${()=>this._valueChanged(e,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${t}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};Qt.styles=r`
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .mode-toggle {
      display: flex;
      gap: 8px;
      margin-bottom: 8px;
    }
    ha-expansion-panel {
      display: block;
      margin-bottom: 4px;
    }
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
    }
    .side-by-side {
      display: flex;
      gap: 8px;
    }
    .side-by-side > * {
      flex: 1;
      min-width: 0;
    }
    .tab-bar {
      display: flex;
      gap: 4px;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
      padding-bottom: 4px;
    }
    .tab-btn {
      background: none;
      border: none;
      border-bottom: 2px solid transparent;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
      font-family: inherit;
      color: var(--secondary-text-color);
      transition: color 0.2s, border-color 0.2s;
    }
    .tab-btn:hover {
      color: var(--primary-text-color);
    }
    .tab-btn.active {
      color: var(--primary-color);
      border-bottom-color: var(--primary-color);
      font-weight: 500;
    }
    .action-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 4px;
    }
    .editor-btn {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 8px 16px;
      border: 1px solid var(--divider-color, rgba(0,0,0,0.12));
      border-radius: 8px;
      background: none;
      color: var(--primary-color);
      font-size: 14px;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.2s;
    }
    .editor-btn:hover {
      background: var(--secondary-background-color, rgba(0,0,0,0.04));
    }
    .editor-btn.active {
      background: var(--primary-color);
      color: var(--text-primary-color, #fff);
      border-color: var(--primary-color);
    }
    .editor-btn.danger {
      color: var(--error-color, #db4437);
      border-color: var(--error-color, #db4437);
    }
    .editor-btn.danger:hover {
      background: rgba(219, 68, 55, 0.08);
    }
    .sub-item {
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 8px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .sub-item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
    }
    .sub-item-heading {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
    }
    .sub-item-title {
      font-weight: 500;
      overflow-wrap: anywhere;
    }
    .sub-item-meta {
      color: var(--secondary-text-color);
      font-size: 12px;
      overflow-wrap: anywhere;
    }
    .empty-hint {
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 8px 0;
    }
    ha-textfield, ha-form, ha-icon-picker {
      display: block;
      width: 100%;
    }
    .yaml-error {
      color: var(--error-color, #db4437);
      padding: 8px;
      font-size: 14px;
    }
    ha-formfield {
      display: flex;
      align-items: center;
      padding: 4px 0;
    }
  `,t([$t({attribute:!1})],Qt.prototype,"hass",void 0),t([wt()],Qt.prototype,"_config",void 0),t([wt()],Qt.prototype,"_selectedHeaderIndex",void 0),t([wt()],Qt.prototype,"_selectedSwitchRowIndex",void 0),t([wt()],Qt.prototype,"_yamlMode",void 0),t([wt()],Qt.prototype,"_yamlError",void 0),Qt=t([bt("space-hub-card-editor")],Qt);const te=new WeakMap,ee=t=>{void 0!==t.holdTimer&&(window.clearTimeout(t.holdTimer),t.holdTimer=void 0)},ie=(t,e)=>{const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={action:e},t.dispatchEvent(i)},oe=(t,e={})=>{const i=te.get(t);if(i)return void(i.options=e);const o={options:e,held:!1,startX:0,startY:0,pointerActive:!1};te.set(t,o),t.addEventListener("contextmenu",(t=>{t.preventDefault(),t.stopPropagation()})),t.addEventListener("pointerdown",(e=>{if(0===e.button&&(o.pointerActive=!0,o.held=!1,o.startX=e.clientX,o.startY=e.clientY,ee(o),o.options.hasHold&&(o.holdTimer=window.setTimeout((()=>{o.holdTimer=void 0,o.held=!0}),500),"function"==typeof t.setPointerCapture)))try{t.setPointerCapture(e.pointerId)}catch(t){}}),{passive:!0}),t.addEventListener("pointermove",(t=>{if(!o.pointerActive||void 0===o.holdTimer)return;const e=Math.abs(t.clientX-o.startX),i=Math.abs(t.clientY-o.startY);(e>10||i>10)&&(ee(o),o.held=!1)}),{passive:!0});const n=()=>{o.pointerActive=!1,o.held=!1,ee(o)};t.addEventListener("pointercancel",n),t.addEventListener("pointerleave",n),t.addEventListener("blur",n),t.addEventListener("pointerup",(e=>{if(o.pointerActive){if(o.pointerActive=!1,ee(o),"function"==typeof t.releasePointerCapture)try{t.releasePointerCapture(e.pointerId)}catch(t){}if(o.held)return o.held=!1,void ie(t,"hold");if(o.options.hasDoubleClick)return void 0!==o.doubleTapTimer?((t=>{void 0!==t.doubleTapTimer&&(window.clearTimeout(t.doubleTapTimer),t.doubleTapTimer=void 0)})(o),void ie(t,"double_tap")):void(o.doubleTapTimer=window.setTimeout((()=>{o.doubleTapTimer=void 0,ie(t,"tap")}),250));ie(t,"tap")}})),t.addEventListener("keyup",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),ie(t,"tap"))}))},ne=at(class extends rt{update(t,[e]){return oe(t.element,e),L}render(t){}});function ae(t,e,i){var o,n,a,r;return e?{bg:null!==(n=null!==(o=i?e.background_active:e.background_inactive)&&void 0!==o?o:e.background)&&void 0!==n?n:t.bg,iconColor:null!==(r=null!==(a=i?e.icon_color_active:e.icon_color_inactive)&&void 0!==a?a:e.icon_color)&&void 0!==r?r:t.iconColor}:t}function re(t,e){var i;return"lock"===t||null!==(i=null==e?void 0:e.startsWith("lock."))&&void 0!==i&&i}function se(t,e){var i;const o=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),n=String((null==e?void 0:e.type)||"").toLowerCase(),a=o&&(null==t?void 0:t.hass)?t.hass.states[o]:void 0,r=((null==a?void 0:a.state)||"").toLowerCase(),s=!a||"unavailable"===r||"unknown"===r||""===r,l=!s&&function(t,e,i){var o;return!!e&&("lock"===i||null!==(o=null==t?void 0:t.startsWith("lock."))&&void 0!==o&&o?"locked"===e:"on"===e||"open"===e||"opening"===e)}(o,r,n),c=function(t,e,i,o,n,a){var r,s,l;return a?null!==(l=null!==(s=null!==(r=null==o?void 0:o.icon_unavailable)&&void 0!==r?r:null==o?void 0:o.icon_inactive)&&void 0!==s?s:null==o?void 0:o.icon)&&void 0!==l?l:"mdi:alert-circle-outline":n&&(null==o?void 0:o.icon_active)?o.icon_active:!n&&(null==o?void 0:o.icon_inactive)?o.icon_inactive:(null==o?void 0:o.icon)?o.icon:re(t,e)?n?"mdi:lock":"mdi:lock-open-variant":"door"===t?n?"mdi:door-open":"mdi:door":"presence"===t?"on"===i?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===t?"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===t?n?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===t?n?"mdi:gate-open":"mdi:gate":n?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(n,o,r,e,l,s),{bg:d,iconColor:h}=function(t,e,i,o,n,a){if(a)return function(t){var e,i,o,n,a,r;return{bg:null!==(o=null!==(i=null!==(e=null==t?void 0:t.background_unavailable)&&void 0!==e?e:null==t?void 0:t.background_inactive)&&void 0!==i?i:null==t?void 0:t.background)&&void 0!==o?o:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(r=null!==(a=null!==(n=null==t?void 0:t.icon_color_unavailable)&&void 0!==n?n:null==t?void 0:t.icon_color_inactive)&&void 0!==a?a:null==t?void 0:t.icon_color)&&void 0!==r?r:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(o);if(re(t,e))return ae(n?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},o,n);if("door"===t||"sliding_gate"===t||"gate"===t)return ae(n?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},o,n);if("presence"===t){const t="on"===i;return ae(t?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},o,t)}if("smart_plug"===t)return ae(n?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},o,n);return ae(n?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},o,n)}(n,o,r,e,l,s),u="chip"+(s?" chip-unavailable":""),p=s?"icon-unavailable":"",v=null!==(i=null==a?void 0:a.state)&&void 0!==i?i:"unavailable";return O`
    <div
      class=${u}
      style=${`background:${d}`}
      title=${v}
      data-state=${r||"unavailable"}
      role="img"
      aria-label=${n?`${n} ${v}`:v}
    >
      <ha-icon .icon=${c} class=${p} style=${`color:${h}`}></ha-icon>
    </div>
  `}const le={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},ce={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const de={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function he(t,e="static",i=!1){if(!t||"none"===e||!i)return{style:"",overlay:U};return{style:`${`--pulse-weak: ${t.weak}; --pulse-strong: ${t.strong};`} ${"pulse"===e?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${t.strong}), 0 6px 18px var(--pulse-weak, ${t.weak});`}`,overlay:O`<div class="glow-overlay" aria-hidden="true"></div>`}}function ue(t,e){var i;const o=(null==e?void 0:e.icon)||"mdi:sofa-outline",n=(null==e?void 0:e.name)||"",a="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.temp_sensor,2,"°"):"—°",r="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.humidity_sensor,2,"%"):"—%",s=!(!(null==e?void 0:e.double_tap_action)&&!(null===(i=null==t?void 0:t._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==e?void 0:e.light_group_entity),c=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),d=l&&"function"==typeof(null==t?void 0:t._isOn)&&t._isOn(c),h=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),u=(null==e?void 0:e.glow_mode)||"static",p=!!(null==e?void 0:e.light_group_entity)&&d&&"none"!==u,v=le,{style:g,overlay:m}=he(v,u,p),f="chip main-light-chip "+(d?"on":"off"),_=Array.isArray(null==e?void 0:e.chips)?e.chips:[],b=_.find((t=>"illuminance"===String((null==t?void 0:t.type)||"").toLowerCase())),y=_.filter((t=>"illuminance"!==String((null==t?void 0:t.type)||"").toLowerCase())).map((e=>se(t,e))),$=b?function(t,e){const i=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),o=(null==e?void 0:e.icon)||"mdi:brightness-5",n="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(i,0," lx"):"— lx";return O`
    <div class="illuminance-chip">
      <ha-icon .icon=${o}></ha-icon>
      <span class="illuminance-value">${n}</span>
    </div>
  `}(t,b):U;return O`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${g}>${m}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==t?void 0:t._onMainAction)&&t._onMainAction(i,e,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity,h)}}
        .actionHandler=${ne({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${o}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${a}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${r}</span>
        </div>
        ${$}
        <div class="main-chips-bottom-right" data-role="chips">
          ${l?O`<div class=${f}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:U}
          ${y.length?O`${y}`:U}
        </div>
        <div class="main-name">${n}</div>
  </ha-control-button>
    </div>
  `}const pe=(...t)=>t.filter(Boolean).join(" ");function ve(t,e){return e&&e.length?O`${e.map(((e,i)=>function(t,e,i){const o=e,n=Array.isArray(e)?e:Array.isArray(null==o?void 0:o.row)?o.row:[];let a=Array.isArray(null==o?void 0:o.cards)?o.cards:Array.isArray(null==o?void 0:o.extra_cards)?o.extra_cards:[];if(!Array.isArray(a)||!a.length){const t=(null==o?void 0:o.card)||(null==o?void 0:o.extra_card);t&&"object"==typeof t&&(a=[t])}const r=Math.max(1,n.length||1),s=Array.isArray(a)&&a.length&&"function"==typeof(null==t?void 0:t._renderEmbeddedRowCard)?O`<div class="switch-row-cards">
        ${a.map(((e,o)=>t._renderEmbeddedRowCard(e,`switch-row-${i}-card-${o}`)))}
      </div>`:U;return O`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${r}`}>${n.map((e=>function(t,e){var i,o,n,a;const r=(null==e?void 0:e.entity)||"",s=(null==e?void 0:e.icon)||"",l=(null==e?void 0:e.name)||"",c=(null===(a=null===(n=null===(o=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[r])||void 0===n?void 0:n.attributes)||void 0===a?void 0:a.friendly_name)||"",d=l||c||r,h="smart_plug"===String((null==e?void 0:e.type)||"switch").toLowerCase(),u="function"==typeof(null==t?void 0:t._isOn)&&t._isOn(r),p=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"]),v=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),g=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),m=t=>null==t||""===t?"":String(t).match(/px|em|rem|%$/)?String(t):`${Number(t)}px`,f=m(p),_=f?`width:${f};height:${f};--mdc-icon-size:${f};`:"",b=`${v?`font-weight:${v};`:""}${g?`font-size:${m(g)};`:""}`,y=`switch-tile ${h?"smart":""} ${u?"on":""}`,$="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),w="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),x=h?"smart":"",A=u?"on":"off",C=pe("switch-chip",x,A),E=pe("switch-icon",x,A),k=pe("name","switch-name",x,A),S="function"==typeof(null==t?void 0:t._resolveSwitchTemplates)?t._resolveSwitchTemplates(e):[],T=Array.isArray(S)?S.map((t=>t&&"object"==typeof t?t.value:t)).slice(0,2):[],H=((t,e)=>{if(!Array.isArray(t)||!t.length)return U;const i=t.map((t=>{const e=null==t?"":String(t);return{text:e,trimmed:e.trim()}})).filter((t=>t.trimmed.length>0)).slice(0,2);return i.length?O`
    <div class=${e}>
      ${i.map((t=>O`<span>${t.text}</span>`))}
    </div>
  `:U})(T,pe("switch-info",x,A)),z=i=>{"function"==typeof(null==t?void 0:t._onSwitchAction)&&t._onSwitchAction(i,e)},N=(null==e?void 0:e.glow_mode)||"static",I=h?ce:le,{style:P,overlay:R}=he(I,N,u&&"none"!==N);if(w){return O`
      <div class="tile-wrap">
      <div class="glow-under" style=${P}>${R}</div>
      ${H}
      <ha-control-button
        class=${`switch-tile-btn ${h?"smart":""} ${u?"on":""}`}
        @hass-action=${z}
        .actionHandler=${ne({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
        role="button" tabindex="0"
      >
          <div class="tile-inner">
            ${$?O`<ha-chip class=${C}>
                  ${s?O`<ha-icon class=${E} .icon=${s} style=${_||U}></ha-icon>`:U}
                  ${d}
                </ha-chip>`:O`
                  ${s?O`<ha-icon class=${E} .icon=${s} style=${_||U}></ha-icon>`:U}
                  ${d?O`<div class=${k} style=${b}>${d}</div>`:U}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return O`
    <div class="tile-wrap ${y}"
         @hass-action=${z}
         .actionHandler=${ne({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under" style=${P}>${R}</div>
      ${H}
      <div class="tile-inner">
        ${$?O`<ha-chip class=${C}>
              ${s?O`<ha-icon class=${E} .icon=${s} style=${_||U}></ha-icon>`:U}
              ${d}
            </ha-chip>`:O`
              ${s?O`<ha-icon class=${E} .icon=${s} style=${_||U}></ha-icon>`:U}
              ${d?O`<div class=${k} style=${b}>${d}</div>`:U}
            `}
      </div>
    </div>
  `}(t,e)))}</div>
      ${s}
    </div>
  `}(t,e,i)))}`:U}const ge=r`
  :host { 
    display:block; 
    /* Chip styling variables */
    --chip-padding: 2px 2px;
    --chip-text-font-weight: 700;
    --chip-text-font-size: var(--chip-font-size, 12px);
    --chip-background-color: rgba(0,0,0,0.06);
    --chip-border-radius: var(--ha-badge-border-radius, 999px);
    --chip-gap: 6px;
    --main-light-on-bg: linear-gradient(135deg,#ffcf57,#ffb200);
    --main-light-off-bg: rgba(0,0,0,0.06);
    --main-light-icon-on-color: #ffffff;
    --main-light-icon-off-color: var(--secondary-text-color);
    --switch-on-color: var(--switch-on-yellow, #ffc107);
    --switch-smart-on-color: var(--switch-on-green, #00c853);
    --switch-chip-bg: var(--chip-background-color, rgba(0,0,0,0.06));
    --ac-chip-bg-off: rgba(158,158,158,0.95);
    --ac-chip-bg-cool: #00aaff;
    --ac-chip-bg-heat: #ff7043;
    --ac-chip-bg-dry: #ffca28;
    --ac-chip-bg-fan: #66bb6a;
    --ac-chip-bg-auto: #26c6da;
    --ac-chip-bg-default: rgba(0,0,0,0.06);
    --ac-chip-icon-color: #ffffff;
    --ac-chip-icon-off-color: #ffffff;
    --ac-fan-color-off: gray;
    --ac-fan-color-cool: #00aaff;
    --ac-fan-color-heat: #ff7043;
    --ac-fan-color-dry: #ffca28;
    --ac-fan-color-fan: #66bb6a;
    --ac-fan-color-auto: #26c6da;
    --ac-fan-color-default: var(--paper-item-icon-color);
    --thermostat-heating-color: #ff7043;
    --thermostat-idle-color: #66bb6a;
    --thermostat-off-color: gray;
    --thermostat-pill-heating-bg: var(--state-climate-heat-color, #ff7043);
    --thermostat-pill-heating-fg: var(--primary-background-color, #fff);
    --thermostat-pill-idle-bg: var(--chip-background-color, rgba(0,0,0,0.06));
    --thermostat-pill-idle-fg: var(--secondary-text-color);

    /* Positioning variables */
    --tile-padding: 8px;
    --tile-padding-large: 12px;
    --chip-z-index: 3;
    --tile-z-index: 2;
    --glow-z-index: 1;
    
  /* Tile shape control */
  --tile-border-radius: var(--ha-card-border-radius, 12px);
    
    /* Common gaps and spacing */
    --small-gap: 2px;
    --medium-gap: 6px;
    --large-gap: 12px;
    
    /* Shadow variables */
    --tile-shadow-default: 0 6px 18px rgba(0,0,0,0.10);
    --tile-shadow-hover: 0 12px 24px rgba(0,0,0,0.16);
    --tile-shadow-active: 0 18px 40px var(--pulse-strong, rgba(0,0,0,0.18)), 0 6px 18px var(--pulse-weak, rgba(0,0,0,0.10));
  }
  .metrics, .metrics * { box-sizing: border-box; }

    .tile-wrap .glow-under { 
      position: absolute; 
      inset: 0; 
      pointer-events: none; 
      z-index: 0; 
      display:block; 
      border-radius: var(--tile-border-radius);
    }
    .tile-wrap .glow-under .glow-overlay { 
      position: absolute; 
      inset: -10px -14px -18px -14px; 
      border-radius: inherit; 
      pointer-events: none; 
      mix-blend-mode: screen; 
      opacity: 0.9; 
      -webkit-mask-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18px, rgba(0,0,0,0.9) 44px, rgba(0,0,0,1) 100%);
      mask-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18px, rgba(0,0,0,0.9) 44px, rgba(0,0,0,1) 100%);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
  ha-card {
    border-radius: var(--ha-card-border-radius, 16px);
    background: var(--ha-card-background, var(--card-background-color));
    box-shadow: 0 10px 30px var(--panel-shadow-color);
    padding: var(--tile-padding-large);
    color: var(--primary-text-color);
    transition: filter 0.12s ease, box-shadow 0.12s ease;
    position: relative;
    overflow: visible;
  }
  ha-card.unavailable { animation: cardPulse 2.8s ease-in-out infinite; }

  .root { display: grid; gap: var(--large-gap); }

  /* ==============================================
   * TILE SYSTEM
   * ============================================== */

  .square { 
    position: relative; 
    width: var(--tile-h); 
    height: var(--tile-h); 
    aspect-ratio: 1/1; 
    border-radius: var(--tile-border-radius); 
    background: var(--ha-card-background, var(--card-background-color)); 
    backdrop-filter: blur(10px); 
    transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease; 
    box-shadow: var(--tile-shadow-default); 
    /* Clip any internal overlays to rounded corners */
    overflow: hidden; 
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
    display: grid; 
    place-items: center; 
    /* Propagate radius for HA internals */
    --control-button-border-radius: var(--tile-border-radius);
  }

  /* Base tile-wrap container so sibling glow-under can position reliably */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; isolation:isolate; }
  
  .square::part(button) { width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box; border-radius: var(--tile-border-radius); overflow: hidden; clip-path: inset(0 round var(--tile-border-radius)); background-clip: padding-box; }

  /* Ensure all tile containers share the same rounding & clipping */
  .main-tile,
  .switch-tile,
  .switch-tile-btn,
  .thermostat-tile,
  .ac-tile,
  .tile-wrap > ha-control-button {
    border-radius: var(--tile-border-radius);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
    --control-button-border-radius: var(--tile-border-radius);
    position: relative;
    z-index: 1;
  }
  .tile-wrap > ha-control-button::part(button) {
    width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box;
    border-radius: var(--tile-border-radius);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
  }

  .extra-cards {
    display: flex;
    flex-direction: column;
    gap: var(--large-gap);
    width: 100%;
  }

  .extra-cards .embedded-card,
  .extra-cards .embedded-card > * {
    width: 100%;
  }

  .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }

  .ac-fan, .thermostat-icon { 
    width: var(--ac-thermostat-icon); 
    height: var(--ac-thermostat-icon); 
    --mdc-icon-size: var(--ac-thermostat-icon); 
    display:block; 
    margin:0; 
    padding:0; 
    line-height:0; 
    transform-origin: 50% 50%; 
    pointer-events:none; 
  }

  /* Header row grid */
  .header-row { display:grid; grid-template-columns: 1fr auto auto; gap: var(--large-gap); align-items:stretch; }
  .header-row.only-main { grid-template-columns: 1fr; }
  .header-row.main-plus-one { grid-template-columns: 1fr auto; }
  .header-row > * { height: var(--tile-h); }

  .clickable { cursor: pointer; }
`,me=r`
  /* ==============================================
   * CHIP STYLING SYSTEM
   * ============================================== */

  /* Base chip styling - used by all chip types */
  .chip {
    padding: var(--chip-padding);
    border-radius: var(--chip-border-radius);
    display:flex; align-items:center; justify-content:center;
    line-height:0; 
    background: var(--chip-background-color);
    min-width: var(--chip-icon-size);
    min-height: var(--chip-icon-size);
  }

  .chip ha-icon { 
    --mdc-icon-size: var(--chip-icon-size); 
    width: var(--chip-icon-size); 
    height: var(--chip-icon-size); 
    display:flex; 
    align-items:center; 
    justify-content:center; 
    margin:0; 
    padding:0; 
    line-height:0; 
    pointer-events:none; 
    color: var(--secondary-text-color); 
  }

  .chip-unavailable {
    background: var(--chip-unavailable-background, rgba(0,0,0,0.12)) !important;
    opacity: 0.88;
  }

  .chip-unavailable ha-icon,
  ha-icon.icon-unavailable {
    color: var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color))) !important;
  }

  /* Ensure native HA elements pick up theme border radiuses */
  ha-chip, ha-badge { 
    border-radius: var(--chip-border-radius); 
  }

  /* ==============================================
   * TEMPERATURE/HUMIDITY CHIP
   * ============================================== */
  
  .chip-temperature-humidity { 
    position: absolute; 
    right: var(--tile-padding); 
    top: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    gap: var(--small-gap); 
    padding: var(--chip-padding); 
    border-radius: var(--chip-border-radius); 
    background: var(--chip-background-color); 
    font-size: var(--chip-text-font-size); 
    color: var(--secondary-text-color); 
    line-height: 1; 
    white-space: nowrap; 
  }

  .chip-temperature-humidity ha-icon { 
    width: var(--chip-icon-size); 
    height: var(--chip-icon-size); 
    display:flex; 
    align-items:center; 
    justify-content:center; 
    line-height:0; 
    --mdc-icon-size: var(--chip-icon-size); 
  }

  .chip-temperature-humidity .temperature-value, 
  .chip-temperature-humidity .humidity-value { 
    font-weight: var(--chip-text-font-weight); 
    font-size: var(--chip-text-font-size);
  }

  /* ==============================================
   * ILLUMINANCE CHIP
   * ============================================== */
   
  .illuminance-chip { 
    position: absolute; 
    right: var(--tile-padding); 
    top: calc(var(--tile-padding) + var(--chip-size, 28px) + var(--small-gap, 2px)); 
    z-index: var(--chip-z-index); 
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    gap: var(--chip-gap); 
    padding: var(--chip-padding); 
    border-radius: var(--chip-border-radius); 
    background: var(--chip-background-color); 
    font-size: var(--chip-text-font-size); 
    color: var(--secondary-text-color); 
    line-height: 1; 
    white-space: nowrap; 
  }

  .illuminance-chip ha-icon { 
    width: var(--chip-icon-size, 14px); 
    height: var(--chip-icon-size, 14px); 
    display:flex; 
    align-items:center; 
    justify-content:center; 
    line-height:0; 
    --mdc-icon-size: var(--chip-icon-size, 14px); 
  }

  .illuminance-chip .illuminance-value { 
    font-weight: var(--chip-text-font-weight); 
    font-size: var(--chip-text-font-size);
  }

  /* ==============================================
   * TEMPERATURE CHIP (THERMOSTAT)
   * ============================================== */
   
  .temperature-chip-container { 
    position: absolute; 
    right: var(--tile-padding); 
    top: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display:inline-flex; 
    align-items:center; 
  }

  .temperature-chip { 
    display:inline-flex; 
    align-items:center; 
    justify-content:center; 
    padding: var(--chip-padding); 
    border-radius: var(--chip-border-radius); 
    background: var(--chip-background-color); 
    font-size: var(--chip-text-font-size); 
    color: var(--secondary-text-color); 
    line-height:1; 
    white-space:nowrap; 
    font-weight: var(--chip-text-font-weight); 
    max-width: calc(var(--tile-h) - 16px); 
  }

  .temperature-chip-container ha-chip { 
    font-size: var(--chip-text-font-size); 
  }

  .temperature-chip.heating { 
    background: var(--thermostat-pill-heating-bg); 
    color: var(--thermostat-pill-heating-fg); 
  }
  .temperature-chip.idle,
  .temperature-chip.off { 
    background: var(--thermostat-pill-idle-bg); 
    color: var(--thermostat-pill-idle-fg); 
  }

  .temperature-chip-container ha-chip.thermostat-chip { 
    --ha-chip-background-color: var(--thermostat-pill-idle-bg); 
    --chip-background-color: var(--thermostat-pill-idle-bg); 
    --ha-chip-text-color: var(--thermostat-pill-idle-fg); 
    color: var(--thermostat-pill-idle-fg); 
    font-weight: 700; 
  }
  .temperature-chip-container ha-chip.thermostat-chip.heating { 
    --ha-chip-background-color: var(--thermostat-pill-heating-bg); 
    --chip-background-color: var(--thermostat-pill-heating-bg); 
    --ha-chip-text-color: var(--thermostat-pill-heating-fg); 
    color: var(--thermostat-pill-heating-fg); 
  }
  .temperature-chip-container ha-chip.thermostat-chip.off { 
    --ha-chip-background-color: var(--thermostat-pill-idle-bg); 
    --chip-background-color: var(--thermostat-pill-idle-bg); 
    --ha-chip-text-color: var(--thermostat-pill-idle-fg); 
    color: var(--thermostat-pill-idle-fg); 
  }

  /* ==============================================
   * CHIP CONTAINERS
   * ============================================== */
   
  .main-chips-bottom-right { 
    position: absolute; 
    right: var(--tile-padding); 
    bottom: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display:inline-flex; 
    flex-direction: row-reverse;
    align-items:center; 
    justify-content:flex-start; 
    gap: var(--chip-gap); 
    flex-wrap:wrap; 
    max-width: calc(100% - 16px); 
  }

  /* ==============================================
   * SWITCH TILE CHIP INTEGRATION
   * ============================================== */
   
  .tile-inner ha-chip { 
    font-size: var(--chip-text-font-size); 
  }
  .tile-inner ha-chip.switch-chip { 
    --ha-chip-background-color: var(--switch-chip-bg); 
    --chip-background-color: var(--switch-chip-bg); 
    --ha-chip-text-color: var(--secondary-text-color); 
    color: var(--secondary-text-color); 
    font-weight: 600; 
  }
  .tile-inner ha-chip.switch-chip.on { 
    --ha-chip-text-color: var(--switch-on-color); 
    color: var(--switch-on-color); 
  }
  .tile-inner ha-chip.switch-chip.smart.on { 
    --ha-chip-text-color: var(--switch-smart-on-color); 
    color: var(--switch-smart-on-color); 
  }
  .tile-inner ha-chip.switch-chip ha-icon { margin-right: 6px; }
`,fe=r`
  /* ==============================================
   * ANIMATION KEYFRAMES
   * ============================================== */

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes glowPulse { 
    0% { box-shadow: 0 10px 20px var(--pulse-weak); } 
    50% { box-shadow: 0 28px 56px var(--pulse-strong); } 
    100% { box-shadow: 0 10px 20px var(--pulse-weak); } 
  }
  
  @keyframes cardPulse { 
    0% { box-shadow: 0 10px 30px var(--panel-shadow-color); } 
    50% { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); } 
    100% { box-shadow: 0 10px 30px var(--panel-shadow-color); } 
  }

  /* ==============================================
   * ANIMATION UTILITIES
   * ============================================== */

  .spinning {
    animation: spin 1.5s linear infinite;
  }

  .glow-pulse {
    animation: glowPulse 2.8s ease-in-out infinite;
  }

  .unavailable {
    animation: cardPulse 2.8s ease-in-out infinite;
  }

  /* ==============================================
   * TRANSFORM UTILITIES
   * ============================================== */

  /* ==============================================
   * TRANSITION UTILITIES
   * ============================================== */

  .transition-fast {
    transition: all 0.12s ease;
  }

  .transition-medium {
    transition: all 0.18s ease;
  }

  .transition-slow {
    transition: all 0.28s ease;
  }

  .transition-transform {
    transition: transform 0.12s ease;
  }

  .transition-shadow {
    transition: box-shadow 0.12s ease;
  }

  .transition-colors {
    transition: background-color 0.12s ease, color 0.12s ease;
  }
`,_e=r`
  .main-tile { 
    position: relative; 
    width: 100%; 
    height: var(--tile-h); 
    border-radius: var(--tile-border-radius); 
    box-shadow: var(--tile-shadow-default); 
    background: var(--ha-card-background, var(--card-background-color)); 
    overflow: hidden; 
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; 
  }
  .main-tile::part(button) { width: 100%; height: 100%; display:block; padding:0; margin:0; box-sizing:border-box; border-radius: var(--tile-border-radius); }

  .main-icon { 
    position: absolute; 
    left: var(--tile-padding-large); 
    top: var(--tile-padding); 
    width: var(--main-icon-size, 48px); 
    height: var(--main-icon-size, 48px); 
    line-height: 0; 
    --mdc-icon-size: var(--main-icon-size, 48px); 
    color: var(--primary-text-color); 
  }

  .main-name { 
    position: absolute; 
    left: var(--tile-padding-large); 
    bottom: var(--tile-padding); 
    font-weight: 500; 
    font-size: 14px; 
    color: var(--primary-text-color); 
  }

  .main-light-chip {
    background: var(--main-light-off-bg);
    color: var(--main-light-icon-off-color);
    transition: background 0.12s ease, color 0.12s ease;
  }
  .main-light-chip.on {
    background: var(--main-light-on-bg);
    color: var(--main-light-icon-on-color);
  }
  .main-light-chip ha-icon {
    color: inherit;
  }

  .main-tile.on { border-radius: var(--tile-border-radius); box-shadow: var(--tile-shadow-active); }
`,be=r`
  .ac-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .ac-tile::part(button) { border-radius: var(--tile-border-radius); }
  .ac-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .ac-chip { 
    background: var(--ac-chip-bg-default); 
    color: var(--ac-chip-icon-color); 
  }
  .ac-chip ha-icon { color: inherit; }
  .ac-chip.ac-mode-off { background: var(--ac-chip-bg-off); color: var(--ac-chip-icon-off-color); }
  .ac-chip.ac-mode-cool { background: var(--ac-chip-bg-cool); }
  .ac-chip.ac-mode-heat { background: var(--ac-chip-bg-heat); }
  .ac-chip.ac-mode-dry { background: var(--ac-chip-bg-dry); }
  .ac-chip.ac-mode-fan { background: var(--ac-chip-bg-fan); }
  .ac-chip.ac-mode-auto { background: var(--ac-chip-bg-auto); }
  .ac-chip.ac-mode-default { background: var(--ac-chip-bg-default); }

  .ac-fan { color: var(--ac-fan-color-default); }
  .ac-fan.ac-mode-off { color: var(--ac-fan-color-off); }
  .ac-fan.ac-mode-cool { color: var(--ac-fan-color-cool); }
  .ac-fan.ac-mode-heat { color: var(--ac-fan-color-heat); }
  .ac-fan.ac-mode-dry { color: var(--ac-fan-color-dry); }
  .ac-fan.ac-mode-fan { color: var(--ac-fan-color-fan); }
  .ac-fan.ac-mode-auto { color: var(--ac-fan-color-auto); }
  .ac-fan.ac-mode-default { color: var(--ac-fan-color-default); }
`,ye=r`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,$e=r`
  .switch-row-wrap { display:flex; flex-direction:column; gap: var(--large-gap); width:100%; }
  .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: var(--large-gap); }
  .switch-row-cards { display:flex; flex-direction:column; gap: var(--large-gap); width:100%; }
  .switch-row-cards .embedded-card { width:100%; }
  .switch-row-cards .embedded-card > * { width:100%; }
  .switch-tile-btn { 
    height: var(--tile-h); 
    width: 100%; 
    display: grid; 
    place-items: center; 
    position: relative; 
  /* Clip internal hover/ink overlays to the rounded corners */
    overflow: hidden; 
    color: var(--secondary-text-color); 
    background: var(--ha-card-background, var(--card-background-color)); 
    border-radius: var(--tile-border-radius); 
  /* Enforce rounded clipping for all internal layers */
  clip-path: inset(0 round var(--tile-border-radius));
    box-shadow: var(--tile-shadow-default); 
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; 
    /* Propagate radius to HA control button internals (focus/hover overlays) */
  --control-button-border-radius: var(--tile-border-radius);
    /* Improve sub-pixel rounding on some browsers */
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(circle, white 99%, transparent 100%);
    background-clip: padding-box;
  }
  .switch-tile-btn::part(button) { 
    width: 100%; 
    height: 100%; 
    padding: 0; 
    margin: 0; 
    box-sizing: border-box; 
  border-radius: var(--tile-border-radius); 
    background: inherit; 
    overflow: hidden; 
    background-clip: padding-box; 
  clip-path: inset(0 round var(--tile-border-radius));
    outline: none; 
  }
  .switch-tile-btn::part(button):focus,
  .switch-tile-btn::part(button):focus-visible { outline: none; }
  /* Ensure any pseudo overlays inherit the rounding */
  .switch-tile-btn::before,
  .switch-tile-btn::after,
  .switch-tile-btn::part(button)::before,
  .switch-tile-btn::part(button)::after { border-radius: inherit; }
  /* Preserve stronger active shadow when ON (no custom hover transform) */
  .switch-tile-btn.on { box-shadow: var(--tile-shadow-active); }
  .switch-tile-btn.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .switch-tile { 
    position: relative; 
    height: var(--tile-h); 
    border-radius: var(--tile-border-radius); 
  clip-path: inset(0 round var(--tile-border-radius));
    background: var(--ha-card-background, var(--card-background-color)); 
    box-shadow: var(--tile-shadow-default); 
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; 
    display:grid; 
    place-items:center; 
    color: var(--secondary-text-color); 
  /* Ensure any internal overlay respects radius */
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  mask-image: radial-gradient(circle, white 99%, transparent 100%);
  background-clip: padding-box;
  }
  .switch-tile.on { box-shadow: var(--tile-shadow-active); }
  .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
  .switch-tile .name { font-weight: 600; font-size: 12px; }
  .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; transition: color 0.12s ease; }
  .switch-icon.on { color: var(--switch-on-color); }
  .switch-icon.smart.on { color: var(--switch-smart-on-color); }
  .switch-name { color: var(--secondary-text-color); transition: color 0.12s ease; }
  .switch-name.on { color: var(--switch-on-color); }
  .switch-name.smart.on { color: var(--switch-smart-on-color); }
  .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }
  .switch-info {
    position: absolute;
    top: 6px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--secondary-text-color);
    pointer-events: none;
    z-index: 2;
    text-shadow: 0 1px 2px rgba(0,0,0,0.35);
  }
  .switch-info span {
    line-height: 1.1;
    white-space: nowrap;
  }
  .switch-info.on { color: var(--switch-on-color); }
  .switch-info.smart.on { color: var(--switch-smart-on-color); }
`;var we;let xe=we=class extends it{constructor(){super(...arguments),this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(t){if(!t)throw new Error("Configuration is required");this._validateConfig(t,{allowIncomplete:!0});const e=Dt(t||{});Array.isArray(e.headers)||(e.headers=[]),Array.isArray(e.switch_rows)||(e.switch_rows=[]),Array.isArray(e.cards)||(e.cards=[]),this._clearRowCardCache(),this._config=e,this._syncTemplateEntries(e.switch_rows)}_isValidEntityId(t){return"string"==typeof t&&t.includes(".")&&!t.includes(" ")}_validateConfig(t,e={}){const i=!!e.allowIncomplete,o=[];t.headers&&Array.isArray(t.headers)&&t.headers.forEach(((t,e)=>{if(t){if(t.ac&&(t.ac.entity?this._isValidEntityId(t.ac.entity)||o.push(`Header ${e+1}: AC entity '${t.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):i||o.push(`Header ${e+1}: AC tile requires an 'entity' field`)),t.thermostat&&(t.thermostat.entity?this._isValidEntityId(t.thermostat.entity)||o.push(`Header ${e+1}: Thermostat entity '${t.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):i||o.push(`Header ${e+1}: Thermostat tile requires an 'entity' field`)),t.main){const n=t.main;!!(n.main_name||n.main_icon||n.tap_entity||n.light_group_entity||n.temp_sensor||n.humidity_sensor||Array.isArray(n.chips)&&n.chips.length>0)||i||o.push(`Header ${e+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((t=>{const i=n[t];i&&!this._isValidEntityId(i)&&o.push(`Header ${e+1}: Main tile ${t} '${i}' must be a valid entity ID`)}))}!t.ac&&!t.thermostat||t.main||i||o.push(`Header ${e+1}: AC and Thermostat tiles require a 'main' configuration block`)}else o.push(`Header ${e+1}: Header configuration cannot be empty`)})),t.switch_rows&&Array.isArray(t.switch_rows)&&t.switch_rows.forEach(((t,e)=>{if(!t)return void o.push(`Switch row ${e+1}: Switch row configuration cannot be empty`);const n=Array.isArray(t)?t:Array.isArray(t.row)?t.row:[];Array.isArray(n)&&0!==n.length||i?n.forEach(((t,n)=>{t&&t.entity?this._isValidEntityId(t.entity)||o.push(`Switch row ${e+1}, item ${n+1}: Switch entity '${t.entity}' must be a valid entity ID`):i||o.push(`Switch row ${e+1}, item ${n+1}: Switch item requires an 'entity' field`),(null==t?void 0:t.hold_entity)&&!this._isValidEntityId(t.hold_entity)&&o.push(`Switch row ${e+1}, item ${n+1}: hold_entity '${t.hold_entity}' must be a valid entity ID`)})):o.push(`Switch row ${e+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([e,i])=>{const n=t[e];if(null!=n){const t=Number(n);(!Number.isFinite(t)||t<0)&&o.push(`${i} must be a positive number, got: ${n}`)}})),void 0!==t.card_shadow_intensity&&null!==t.card_shadow_intensity){const e=Number(t.card_shadow_intensity);Number.isFinite(e)&&(e<0||e>1)&&o.push(`Card shadow intensity must be between 0 and 1, got: ${e}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((e=>{const i=t[e];if(i&&"string"==typeof i){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(i)||o.push(`${e.replace(/_/g," ")} '${i}' is not a valid color format`)}})),o.length>0)throw new Error(`Invalid space-hub-card configuration:\n${o.map((t=>`• ${t}`)).join("\n")}`)}getCardSize(){return 6}render(){var t,e,i,o,n,a,r,s,l;if(!this._config)return U;const c=we.getStubConfig(),d=this._config||{},h={tile_height:null!==(t=d.tile_height)&&void 0!==t?t:c.tile_height,chip_icon_size:null!==(e=d.chip_icon_size)&&void 0!==e?e:c.chip_icon_size,main_icon_size:null!==(i=d.main_icon_size)&&void 0!==i?i:c.main_icon_size,chip_font_size:null!==(o=d.chip_font_size)&&void 0!==o?o:c.chip_font_size,card_shadow_color:null!==(n=d.card_shadow_color)&&void 0!==n?n:c.card_shadow_color,card_shadow_intensity:null!==(a=d.card_shadow_intensity)&&void 0!==a?a:c.card_shadow_intensity,unavailable_pulse_color:null!==(r=d.unavailable_pulse_color)&&void 0!==r?r:c.unavailable_pulse_color,headers:Array.isArray(d.headers)&&d.headers.length?d.headers:[],switch_rows:Array.isArray(d.switch_rows)?d.switch_rows:[],cards:Array.isArray(d.cards)?d.cards:[],tap_action:d.tap_action,hold_action:d.hold_action,double_tap_action:d.double_tap_action},u=Array.isArray(h.headers)&&h.headers.length?h.headers:[],p=Number(h.tile_height)||Number(c.tile_height)||80,v=Number(h.chip_icon_size)||Number(c.chip_icon_size)||14,g=Number(h.chip_font_size)||Number(c.chip_font_size)||12,m=Math.max(g+10,20),f=Math.round(.625*p),_=u[0]||{},b=Number(null!==(s=null==_?void 0:_.main_icon_size)&&void 0!==s?s:null==_?void 0:_.maicon_size),y=Number.isFinite(b)&&b>0?b:Number(h.main_icon_size)||Number(c.main_icon_size)||48,$=this._rgbaFromColor(h.card_shadow_color||c.card_shadow_color,null!==(l=h.card_shadow_intensity)&&void 0!==l?l:c.card_shadow_intensity),w=h.unavailable_pulse_color||c.unavailable_pulse_color||"#ff3b30",x=this._hasAnyUnavailable(h,u),A=this._rgbaFromColor(w,.18),C=this._rgbaFromColor(w,.36);return O`
      <ha-card class=${x?"unavailable":""}
               style=${`--panel-shadow-color:${x?A:$}; --unavail-weak:${A}; --unavail-strong:${C}`}>
        <div class="metrics" style=${`--tile-h:${p}px; --chip-size:${m}px; --chip-icon-size:${v}px; --main-icon-size:${y}px; --chip-font-size:${g}px; --ac-thermostat-icon:${f}px;`}>
          <div class="root">
            ${u.map((t=>this._renderHeaderRow(t)))}
            ${ve(this,h.switch_rows)}
            ${Array.isArray(h.cards)&&h.cards.length?O`
                  <div class="extra-cards">
                    ${h.cards.map(((t,e)=>this._renderEmbeddedRowCard(t,`standalone-card-${e}`)))}
                  </div>
                `:U}
          </div>
        </div>
      </ha-card>
    `}updated(t){super.updated(t),t.has("hass")&&(this._rowCardElements.forEach((t=>{t&&(t.hass=this.hass)})),this._resumeTemplateSubscriptions())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((t=>this._disposeTemplateEntry(t)))}_renderHeaderRow(t){const e=t.main||{},i={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,glow_mode:e.glow_mode,light_group_entity:e.light_group_entity,name:e.main_name||e.name,icon:e.main_icon||e.icon,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,chips:Array.isArray(e.chips)?e.chips:[],tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},o=t.ac||{},n=t.thermostat||{},a=!!(null==o?void 0:o.entity),r=!!(null==n?void 0:n.entity),s=!(!e||!(e.main_name||e.name||e.light_group_entity||e.entity||e.main_icon||e.icon||e.temp_sensor||e.humidity_sensor||Array.isArray(e.chips)&&e.chips.length)),l=s&&a,c=s&&r;s||!a&&!r||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const d=O`
      <div class=${l||c?l&&c?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${s?ue(this,i):U}
        ${l?function(t,e){var i,o,n;const a=(null==e?void 0:e.entity)||"",r=null==e?void 0:e.glow_mode,s=((null===(n=null===(o=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[a])||void 0===n?void 0:n.state)||"").toLowerCase(),l=!!s&&"off"!==s,c="function"==typeof(null==t?void 0:t._acChip)?t._acChip(s):{icon:"mdi:air-conditioner"},d=(null==c?void 0:c.icon)||"mdi:air-conditioner",h="ac-mode-"+((u=s)&&"off"!==u?u.includes("cool")?"cool":u.includes("heat")?"heat":u.includes("dry")?"dry":u.includes("fan")?"fan":u.includes("auto")?"auto":"default":"off");var u;const p=`chip chip-temperature-humidity ac-chip ${h}`,v=`ac-fan ${h}${l?" spinning":""}`,g=function(t){const e=(t||"").toLowerCase();return e&&"off"!==e?e.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:e.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:e.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:e.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:e.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(s),m=null!=r?r:"static",{style:f,overlay:_}=he(g,m,l);return O`
    <div class="tile-wrap">
      <div class="glow-under" style=${f}>${_}</div>
      <ha-control-button
        class="square ac-tile ${l?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==t?void 0:t._onACAction)&&t._onACAction(i,e)}}
        .actionHandler=${ne({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${p}>
          <ha-icon .icon=${d}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${v} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,o):U}
        ${c?function(t,e){var i,o,n,a,r,s,l,c;const d=(null==e?void 0:e.entity)||"",h=null==e?void 0:e.glow_mode,u=null===(o=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[d],p="function"==typeof(null==t?void 0:t._fmtNumber)?t._fmtNumber.bind(t):t=>null==t?"—":String(t),v=p(null!==(s=null!==(a=null===(n=null==u?void 0:u.attributes)||void 0===n?void 0:n.temperature)&&void 0!==a?a:null===(r=null==u?void 0:u.attributes)||void 0===r?void 0:r.target_temp)&&void 0!==s?s:null===(l=null==u?void 0:u.attributes)||void 0===l?void 0:l.target_temperature,1)+"°",g="heating"===((null===(c=null==u?void 0:u.attributes)||void 0===c?void 0:c.hvac_action)||"").toLowerCase(),m="off"===((null==u?void 0:u.state)||"").toLowerCase()?"off":g?"heating":"idle",f=`thermostat-chip ${m}`,_=`temperature-chip ${m}`,b=`thermostat-icon ${m}`,y="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),$=null!=h?h:"static",w=de,{style:x,overlay:A}=he(w,$,g);return O`
    <div class="tile-wrap">
      <div class="glow-under" style=${x}>${A}</div>
      <ha-control-button
        class="square thermostat-tile ${g?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==t?void 0:t._onThermostatAction)&&t._onThermostatAction(i,e)}}
        .actionHandler=${ne({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${y?O`<ha-chip class=${f}>${v}</ha-chip>`:O`<div class=${_}><span class="thermostat-target">${v}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${b} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,n):U}
      </div>
    `;return d}_renderEmbeddedRowCard(t,e){if(!t||"object"!=typeof t)return U;this._rowCardConfigs.get(e)!==t&&(this._rowCardElements.delete(e),this._rowCardPromises.delete(e)),this._rowCardConfigs.set(e,t);const i=this._rowCardElements.get(e);if(i)return i.hass=this.hass,O`<div class="embedded-card">${i}</div>`;const o=this._createRowCardElement(e,t).then((t=>(t.hass=this.hass,O`${t}`))).catch((e=>{const i=e instanceof Error?e.message:String(e),o=this._createErrorCard(i,t);return o.hass=this.hass,O`${o}`}));return O`<div class="embedded-card">${_t(o,U)}</div>`}async _createRowCardElement(t,e){const i=this._rowCardPromises.get(t);if(i)return i;const o=(async()=>{const i=await this._getCardHelpers();let o;try{o=(null==i?void 0:i.createCardElement)?await i.createCardElement(e):Ft(e)}catch(t){const i=t instanceof Error?t.message:String(t);o=this._createErrorCard(i,e)}return o.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(t),this._rowCardPromises.delete(t);const o=this._rowCardConfigs.get(t)||e;this._createRowCardElement(t,o).then((()=>this.requestUpdate()))})),this._rowCardElements.set(t,o),this._rowCardPromises.delete(t),o})();return this._rowCardPromises.set(t,o),o}_createErrorCard(t,e){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),i}catch(i){return Ft({type:"hui-error-card",error:t,origConfig:e})}}async _getCardHelpers(){if(!this._helpersPromise){const t=window.loadCardHelpers;this._helpersPromise="function"==typeof t?t():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_dispatchNativeAction(t,e){const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={action:t,config:e},this.dispatchEvent(i)}_withActionOverrides(t,e){const i=Object.assign({},t);"string"==typeof(null==e?void 0:e.entity)&&e.entity&&(i.entity=e.entity);const o=Gt(null==e?void 0:e.tap_action);o&&(i.tap_action=o);const n=Gt(null==e?void 0:e.hold_action);n&&(i.hold_action=n);const a=Gt(null==e?void 0:e.double_tap_action);return a&&(i.double_tap_action=a),i}_dispatchActionEnvelope(t,e){("double_tap"===t?e.double_tap_action:"hold"===t?e.hold_action:e.tap_action)&&this._dispatchNativeAction(t,e)}_onMainAction(t,e,i,o,n){t.stopPropagation();const a=t.detail&&t.detail.action||"tap",r=n||i,s=o||i||n,l={entity:r,tap_action:r?{action:"toggle"}:void 0,hold_action:s?{action:"more-info",entity:s}:void 0},c=Yt(e)?e:Yt(this._config)?this._config:void 0;this._dispatchActionEnvelope(a,this._withActionOverrides(l,c))}_onACAction(t,e){var i,o,n;t.stopPropagation();const a=t.detail&&t.detail.action||"tap",r=null==e?void 0:e.entity;if(!r)return;const s=((null===(n=null===(o=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[r])||void 0===n?void 0:n.state)||"").toLowerCase(),l={entity:r,tap_action:{action:"perform-action",perform_action:!!s&&"off"!==s?"climate.turn_off":"climate.turn_on",target:{entity_id:r}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(a,this._withActionOverrides(l,e))}_onThermostatAction(t,e){var i,o,n;t.stopPropagation();const a=t.detail&&t.detail.action||"tap",r=null==e?void 0:e.entity;if(!r)return;const s={entity:r,tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",target:{entity_id:r},data:{hvac_mode:"off"===((null===(n=null===(o=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[r])||void 0===n?void 0:n.state)||"").toLowerCase()?"heat":"off"}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(a,this._withActionOverrides(s,e))}_onSwitchAction(t,e){t.stopPropagation();const i=t.detail&&t.detail.action||"tap",o=null==e?void 0:e.entity,n=(null==e?void 0:e.hold_entity)||o,a=Wt(null==e?void 0:e.confirmation),r={entity:o,tap_action:o?{action:"toggle",confirmation:a}:void 0,hold_action:n?{action:"more-info",entity:n}:void 0,double_tap_action:o?{action:"toggle"}:void 0};this._dispatchActionEnvelope(i,this._withActionOverrides(r,e))}_resolveSwitchTemplates(t){const e=this._extractTemplatesFromSwitch(t);return e.length?e.map((t=>({template:t,value:this._getTemplateDisplayValue(t)}))):[]}_extractTemplatesFromSwitch(t){if(!t||"object"!=typeof t)return[];const e=t,i=((...t)=>{for(const i of t)if(i in e)return e[i]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==i)return[];const o=Array.isArray(i)?i:[i],n=[];return o.some((t=>{let e;"string"==typeof t?e=t:t&&"object"==typeof t&&(e=t.template||t.value||t.value_template||t.text);const i="string"==typeof e?e.trim():"";return i&&n.push(i),n.length>=2})),n.slice(0,2)}_syncTemplateEntries(t){const e=this._collectTemplatesFromRows(t);if(!e.size&&!this._switchTemplateValues.size)return;const i=[];this._switchTemplateValues.forEach(((t,o)=>{e.has(o)||i.push(o)})),i.forEach((t=>{const e=this._switchTemplateValues.get(t);e&&this._disposeTemplateEntry(e),this._switchTemplateValues.delete(t)})),e.forEach((t=>this._ensureTemplateEntry(t)))}_collectTemplatesFromRows(t){const e=new Set;return Array.isArray(t)?(t.forEach((t=>{const i=Array.isArray(t)?t:Array.isArray(null==t?void 0:t.row)?t.row:[];Array.isArray(i)&&i.forEach((t=>{this._extractTemplatesFromSwitch(t).forEach((t=>e.add(t)))}))})),e):e}_ensureTemplateEntry(t){const e=(t||"").trim();if(!e)return;let i=this._switchTemplateValues.get(e);return i||(i={value:"",ready:!1},this._switchTemplateValues.set(e,i)),this._startTemplateSubscription(e,i),i}_getTemplateDisplayValue(t){var e;const i=this._ensureTemplateEntry(t);return i?i.error?"!":i.ready?null!==(e=i.value)&&void 0!==e?e:"":"…":""}_startTemplateSubscription(t,e){var i;!(null===(i=this.hass)||void 0===i?void 0:i.connection)||e.unsub||e.pending||(e.pending=!0,this.hass.connection.subscribeMessage((t=>{e.ready=!0,e.error=void 0;const i=t&&"object"==typeof t&&"result"in t?t.result:t;e.value=null!=i?String(i):"",this.requestUpdate()}),{type:"render_template",template:t},{resubscribe:!0}).then((t=>{e.unsub=t})).catch((i=>{e.ready=!0,e.error=(null==i?void 0:i.message)||"error",e.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${t}":`,i),this.requestUpdate()})).finally((()=>{e.pending=!1})))}_disposeTemplateEntry(t){if(t.unsub){try{t.unsub()}catch(t){}t.unsub=void 0}t.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((t,e)=>this._startTemplateSubscription(e,t)))}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const o=this.hass.states[t];if(!o||""===o.state||"unknown"===o.state||"unavailable"===o.state)return"—"+(i||"");const n=Number(o.state);return Number.isFinite(n)?n.toFixed(e)+(i||""):String(o.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acChip(t){return t&&"off"!==t?t.includes("cool")?{icon:"mdi:snowflake"}:t.includes("heat")?{icon:"mdi:fire"}:t.includes("dry")?{icon:"mdi:water-percent"}:t.includes("fan")?{icon:"mdi:fan"}:t.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),o=!!i&&"off"!==i;this.hass.callService("climate",o?"turn_off":"turn_on",{entity_id:t})}_thermostatToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[o,n]=i.split(".");this.hass.callService(o,n,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const o=t.trim();if(o.startsWith("rgba(")||o.startsWith("rgb(")||o.startsWith("hsl(")||o.startsWith("var("))return o;const n=o.replace("#",""),a=t=>parseInt(t,16);if(3===n.length){return`rgba(${a(n[0]+n[0])},${a(n[1]+n[1])},${a(n[2]+n[2])},${i})`}if(n.length>=6){return`rgba(${a(n.slice(0,2))},${a(n.slice(2,4))},${a(n.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(t,e){const i=new Set,o=Array.isArray(e)?e:[e],n=new WeakSet,a=new Set(["entity","entity_id","tap_entity","hold_entity","double_tap_entity","light_group_entity","temp_sensor","humidity_sensor","camera_image"]),r=t=>{"string"==typeof t&&this._isValidEntityId(t)&&i.add(t)},s=t=>{"string"!=typeof t?Array.isArray(t)?t.forEach((t=>{"string"==typeof t?r(t):l(t)})):l(t):r(t)},l=t=>{if(!t||"object"!=typeof t)return;const e=t;n.has(e)||(n.add(e),Array.isArray(t)?t.forEach((t=>l(t))):Object.entries(t).forEach((([t,e])=>{a.has(t)?s(e):"target"!==t?Array.isArray(e)?e.forEach((t=>l(t))):e&&"object"==typeof e&&l(e):(t=>{if(!t||"object"!=typeof t)return;s(t.entity_id)})(e)})))};return l(o),l(t.switch_rows),l(t.cards),[...i]}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=this._getAllCardEntities(t,e),o=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const n=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];if(!n)return!0;const a=(n.state||"").toLowerCase();return o.has(a)}))}};xe.styles=[ge,me,fe,_e,be,ye,$e],t([$t({attribute:!1})],xe.prototype,"hass",void 0),t([wt()],xe.prototype,"_config",void 0),xe=we=t([bt("space-hub-card")],xe),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.0"});try{const t=window;if(!t.__SPACE_HUB_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.0",e,i),t.__SPACE_HUB_CARD_LOGGED__=!0}}catch(t){}var Ae=xe;export{xe as SpaceHubCard,Ae as default};
