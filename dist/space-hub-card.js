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
function t(t,e,i,a){var o,n=arguments.length,r=n<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[a+1]),t[0]);return new n(i,t,a)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,a))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const a=this._$Ep(i,e);void 0!==a&&(this._$Ev.set(a,i),t.push(a))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,a=this.getPropertyDescriptor(t,i,e);void 0!==a&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(a){const o=this[t];this[e]=a,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const a=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,a)=>{i?t.adoptedStyleSheets=a.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):a.forEach((i=>{const a=document.createElement("style"),o=e.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=i.cssText,t.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var a;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,e){var i;const a=this.constructor,o=a._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=a.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=o,this[o]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let a=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f[g]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,A=`<${x}>`,C=document,k=()=>C.createComment(""),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,I=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,R=/"/g,P=/^(?:script|style|textarea|title)$/i,L=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),O=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),D=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function j(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(e):e}class F{constructor({strings:t,_$litType$:e},i){let a;this.parts=[];let o=0,n=0;const r=t.length-1,s=this.parts,[l,c]=((t,e)=>{const i=t.length-1,a=[];let o,n=2===e?"<svg>":"",r=H;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=z:void 0!==l[1]?r=N:void 0!==l[2]?(P.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=I):void 0!==l[3]&&(r=I):r===I?">"===l[0]?(r=null!=o?o:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?I:'"'===l[3]?R:M):r===R||r===M?r=I:r===z||r===N?r=H:(r=I,o=void 0);const h=r===I&&t[e+1].startsWith("/>")?" ":"";n+=r===H?i+A:c>=0?(a.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+w+h):i+w+(-2===c?(a.push(void 0),e):h)}return[j(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),a]})(t,e);if(this.el=F.createElement(l,i),V.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(a=V.nextNode())&&s.length<r;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const e of a.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(w)){const i=c[n++];if(t.push(e),void 0!==i){const t=a.getAttribute(i.toLowerCase()+"$lit$").split(w),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?W:"?"===e[1]?K:"@"===e[1]?J:G})}else s.push({type:6,index:o})}for(const e of t)a.removeAttribute(e)}if(P.test(a.tagName)){const t=a.textContent.split(w),e=t.length-1;if(e>0){a.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)a.append(t[i],k()),V.nextNode(),s.push({type:2,index:++o});a.append(t[e],k())}}}else if(8===a.nodeType)if(a.data===x)s.push({type:2,index:o});else{let t=-1;for(;-1!==(t=a.data.indexOf(w,t+1));)s.push({type:7,index:o}),t+=w.length-1}o++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function q(t,e,i=t,a){var o,n,r,s;if(e===O)return e;let l=void 0!==a?null===(o=i._$Co)||void 0===o?void 0:o[a]:i._$Cl;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,a)),void 0!==a?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[a]=l:i._$Cl=l),void 0!==l&&(e=q(t,l._$AS(t,e.values),l,a)),e}class Y{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:a}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);V.currentNode=o;let n=V.nextNode(),r=0,s=0,l=a[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new B(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new X(n,this,t)),this._$AV.push(e),l=a[++s]}r!==(null==l?void 0:l.index)&&(n=V.nextNode(),r++)}return V.currentNode=C,o}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,a){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=a,this._$Cp=null===(o=null==a?void 0:a.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),E(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==O&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:a}=t,o="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=F.createElement(j(a.h,a.h[0]),this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.v(i);else{const t=new Y(o,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new F(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,a=0;for(const o of t)a===e.length?e.push(i=new B(this.k(k()),this.k(k()),this,this.options)):i=e[a],i._$AI(o),a++;a<e.length&&(this._$AR(i&&i._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,i,a,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,a){const o=this.strings;let n=!1;if(void 0===o)t=q(this,t,e,0),n=!E(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const a=t;let r,s;for(t=o[0],r=0;r<o.length-1;r++)s=q(this,a[i+r],e,r),s===O&&(s=this._$AH[r]),n||(n=!E(s)||s!==this._$AH[r]),s===U?t=U:t!==U&&(t+=(null!=s?s:"")+o[r+1]),this._$AH[r]=s}n&&!a&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class W extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const Z=y?y.emptyScript:"";class K extends G{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends G{constructor(t,e,i,a,o){super(t,e,i,a,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=q(this,t,e,0))&&void 0!==i?i:U)===O)return;const a=this._$AH,o=t===U&&a!==U||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,n=t!==U&&(a===U||o);o&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(F,B),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var a,o;const n=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:e;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new B(e.insertBefore(k(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return O}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const at=globalThis.litElementPolyfillSupport;null==at||at({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class rt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(t,e)=>{var i,a;const o=t._$AN;if(void 0===o)return!1;for(const t of o)null===(a=(i=t)._$AO)||void 0===a||a.call(i,e,!1),st(t,e);return!0},lt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ct=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ut(e)}};function dt(t){void 0!==this._$AN?(lt(this),this._$AM=t,ct(this)):this._$AM=t}function ht(t,e=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(a))for(let t=i;t<a.length;t++)st(a[t],!1),lt(a[t]);else null!=a&&(st(a,!1),lt(a));else st(this,t)}const ut=t=>{var e,i,a,o;t.type==ot&&(null!==(e=(a=t)._$AP)&&void 0!==e||(a._$AP=ht),null!==(i=(o=t)._$AQ)&&void 0!==i||(o._$AQ=dt))};class pt extends rt{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,a;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),e&&(st(this,t),lt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class mt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,ft=1073741823;const _t=nt(class extends pt{constructor(){super(...arguments),this._$C_t=ft,this._$Cwt=[],this._$Cq=new vt(this),this._$CK=new mt}render(...t){var e;return null!==(e=t.find((t=>!gt(t))))&&void 0!==e?e:O}update(t,e){const i=this._$Cwt;let a=i.length;this._$Cwt=e;const o=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const r=e[t];if(!gt(r))return this._$C_t=t,r;t<a&&r===i[t]||(this._$C_t=ft,a=0,Promise.resolve(r).then((async t=>{for(;n.get();)await n.get();const e=o.deref();if(void 0!==e){const i=e._$Cwt.indexOf(r);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return O}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),bt=t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:a}=e;return{kind:i,elements:a,finisher(e){customElements.define(t,e)}}})(t,e)
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
 */var xt;null===(xt=window.HTMLSlotElement)||void 0===xt||xt.prototype.assignedElements;var At="[^\\s]+";function Ct(t,e){for(var i=[],a=0,o=t.length;a<o;a++)i.push(t[a].substr(0,e));return i}var kt=function(t){return function(e,i){var a=i[t].map((function(t){return t.toLowerCase()})),o=a.indexOf(e.toLowerCase());return o>-1?o:null}};function Et(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var a=0,o=e;a<o.length;a++){var n=o[a];for(var r in n)t[r]=n[r]}return t}var St=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Tt=["January","February","March","April","May","June","July","August","September","October","November","December"],Ht=Ct(Tt,3),zt={dayNamesShort:Ct(St,3),dayNames:St,monthNamesShort:Ht,monthNames:Tt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},Nt=(Et({},zt),function(t){return+t-1}),It=[null,"[1-9]\\d?"],Mt=[null,At],Rt=["isPm",At,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],Pt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];kt("monthNamesShort"),kt("monthNames");var Lt,Ot;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(Lt||(Lt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ot||(Ot={}));var Ut=["closed","locked","off"],Dt=function(t,e,i,a){a=a||{},i=null==i?{}:i;var o=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,t.dispatchEvent(o),o},Vt=new Set(["call-service","divider","section","weblink","cast","select"]),jt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Ft=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return a("hui-error-card",{type:"error",error:t,config:e})},a=function(t,e){var a=window.document.createElement(t);try{a.setConfig(e)}catch(a){return console.error(t,a),i(a.message,e)}return a};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var o=t.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(e)if(Vt.has(o))o="hui-"+o+"-row";else{if(!t.entity)return i("Invalid config given.",t);var n=t.entity.split(".",1)[0];o="hui-"+(jt[n]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return a(o,t);var r=i("Custom element doesn't exist: "+t.type+".",t);r.style.display="None";var s=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),Dt(r,"ll-rebuild",{},r)})),r},qt=function(t){Dt(window,"haptic",t)},Yt=function(t,e,i,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(qt("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&Dt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Dt(window,"location-changed",{replace:i})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var a,o=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===o?"homeassistant":o;switch(o){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}t.callService(n,a,{entity_id:e})})(t,e,Ut.includes(t.states[e].state))}(e,i.entity),qt("success"));break;case"call-service":if(!a.service)return void qt("failure");var o=a.service.split(".",2);e.callService(o[0],o[1],a.service_data),qt("success");break;case"fire-dom-event":Dt(t,"ll-custom",a)}},Bt=function(t,e,i,a){var o;"double_tap"===a&&i.double_tap_action?o=i.double_tap_action:"hold"===a&&i.hold_action?o=i.hold_action:"tap"===a&&i.tap_action&&(o=i.tap_action),Yt(t,e,i,o)};function Gt(t){return JSON.parse(JSON.stringify(t))}const Wt=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],Zt=["switch","smart_plug"],Kt=["static","pulse","none"],Jt=["more-info","toggle","call-service","perform-action","navigate","url","none"];let Xt=class extends it{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(t){this._config=Gt(t)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var t,e,i;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const a=await(null===(e=(t=window).loadCardHelpers)||void 0===e?void 0:e.call(t));a&&await(null===(i=a.createCardElement)||void 0===i?void 0:i.call(a,{type:"entities",entities:[]}))}catch(t){}const a=["ha-entity-picker","ha-icon-picker","ha-select","ha-textfield","ha-expansion-panel"],o=t=>Promise.race([customElements.whenDefined(t),new Promise((t=>setTimeout(t,1500)))]);try{await Promise.all(a.map(o))}catch(t){}this.requestUpdate()}_fireConfigChanged(){Dt(this,"config-changed",{config:Gt(this._config)}),this.requestUpdate()}_valueChanged(t,e){const i=t.split(".");let a=this._config;for(let t=0;t<i.length-1;t++){const e=i[t],o=Number(e);if(Number.isFinite(o)){if(!Array.isArray(a))return;a[o]||(a[o]={}),a=a[o]}else void 0===a[e]&&(a[e]={}),a=a[e]}const o=i[i.length-1];""===e||null==e?delete a[o]:a[o]=e,this._fireConfigChanged()}_getNestedValue(t){const e=t.split(".");let i=this._config;for(const t of e){if(null==i)return;const e=Number(t);i=Number.isFinite(e)?i[e]:i[t]}return i}_handleSelectChanged(t,e){const i=e.currentTarget;this._valueChanged(t,null==i?void 0:i.value)}_renderSelectField(t,e,i,a){const o=i||a[0]||"";return L`
      <ha-select
        label=${t}
        .value=${o}
        @selected=${t=>this._handleSelectChanged(e,t)}
        @closed=${t=>t.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
      >
        ${a.map((t=>L`
          <ha-list-item .value=${t} ?selected=${t===o}>${t}</ha-list-item>
        `))}
      </ha-select>
    `}_friendlyEntityName(t){var e,i,a;return t&&(null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t])&&(null===(a=this.hass.states[t].attributes)||void 0===a?void 0:a.friendly_name)||""}_entitySummary(t){if(!t)return"No entity selected";const e=this._friendlyEntityName(t);return e&&e!==t?`${e} • ${t}`:t}render(){return this.hass&&this._config?L`
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
    `:L``}_renderYamlEditor(){return L`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?L`<div class="yaml-error">${this._yamlError}</div>`:U}
    `}_yamlChanged(t){t.stopPropagation();const e=t.detail.value;e&&"object"==typeof e?(this._yamlError="",this._config=Gt(e),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return L`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var t,e,i,a,o;return L`
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
              .value=${String(null!==(a=this._config.chip_font_size)&&void 0!==a?a:"")}
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
              .value=${String(null!==(o=this._config.card_shadow_intensity)&&void 0!==o?o:"")}
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
    `}_renderHeadersSection(){const t=this._config.headers||[];return L`
      <ha-expansion-panel outlined .header=${`Headers (${t.length})`}>
        <div class="section-content">
          ${t.length>1?L`
            <div class="tab-bar">
              ${t.map(((t,e)=>L`<button class="tab-btn${this._selectedHeaderIndex===e?" active":""}" @click=${()=>{this._selectedHeaderIndex=e,this.requestUpdate()}}>Header ${e+1}</button>`))}
            </div>
          `:U}
          ${t.length?this._renderHeader(t[this._selectedHeaderIndex]||t[0],this._selectedHeaderIndex):L`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${t.length>0?L`
              <button class="editor-btn danger" @click=${()=>this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex+1}
              </button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(t){this._config.headers&&(this._config.headers.splice(t,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(t,e){const i=`headers.${e}`;return L`
      ${this._renderMainTileConfig(t.main,`${i}.main`)}
      ${this._renderACConfig(t.ac,`${i}.ac`)}
      ${this._renderThermostatConfig(t.thermostat,`${i}.thermostat`)}
    `}_renderMainTileConfig(t,e){const i=t||{};return L`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!t?L`
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
            <ha-entity-picker
              .hass=${this.hass}
              label="Light Group Entity (tap toggles)"
              .value=${i.light_group_entity||""}
              allow-custom-entity
              @value-changed=${t=>this._valueChanged(`${e}.light_group_entity`,t.detail.value)}
            ></ha-entity-picker>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Tap Entity"
                .value=${i.tap_entity||""}
                allow-custom-entity
                @value-changed=${t=>this._valueChanged(`${e}.tap_entity`,t.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Hold Entity (more-info)"
                .value=${i.hold_entity||""}
                allow-custom-entity
                @value-changed=${t=>this._valueChanged(`${e}.hold_entity`,t.detail.value)}
              ></ha-entity-picker>
            </div>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Temperature Sensor"
                .value=${i.temp_sensor||""}
                .includeDomains=${["sensor"]}
                allow-custom-entity
                @value-changed=${t=>this._valueChanged(`${e}.temp_sensor`,t.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Humidity Sensor"
                .value=${i.humidity_sensor||""}
                .includeDomains=${["sensor"]}
                allow-custom-entity
                @value-changed=${t=>this._valueChanged(`${e}.humidity_sensor`,t.detail.value)}
              ></ha-entity-picker>
            </div>
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,i.glow_mode,Kt)}
            ${this._renderChipsConfig(i.chips||[],e)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${e}.double_tap_action`,i.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(t,e){const i=`${e}.chips`;return L`
      <ha-expansion-panel outlined .header=${`Chips (${t.length})`}>
        <div class="section-content">
          ${t.map(((t,e)=>this._renderSingleChip(t,`${i}.${e}`,e,i)))}
          <button class="editor-btn" @click=${()=>{const t=this._getNestedValue(i)||[];t.push({type:"custom",entity:""}),this._valueChanged(i,t)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(t,e,i,a){return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Chip ${i+1}: ${t.type||"custom"}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=this._getNestedValue(a)||[];t.splice(i,1),this._valueChanged(a,[...t])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${e}.type`,t.type,Wt)}
          <ha-entity-picker
            .hass=${this.hass}
            label="Entity"
            .value=${t.entity||""}
            allow-custom-entity
            @value-changed=${t=>this._valueChanged(`${e}.entity`,t.detail.value)}
          ></ha-entity-picker>
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
    `}_renderACConfig(t,e){return L`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!t?L`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${t.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${t=>this._valueChanged(`${e}.entity`,t.detail.value)}
            ></ha-entity-picker>
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,Kt)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(t,e){return L`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!t?L`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${t.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${t=>this._valueChanged(`${e}.entity`,t.detail.value)}
            ></ha-entity-picker>
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,Kt)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const t=this._config.switch_rows||[];return L`
      <ha-expansion-panel outlined .header=${`Switch Rows (${t.length})`}>
        <div class="section-content">
          ${t.length>1?L`
            <div class="tab-bar">
              ${t.map(((t,e)=>L`<button class="tab-btn${this._selectedSwitchRowIndex===e?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=e,this.requestUpdate()}}>Row ${e+1}</button>`))}
            </div>
          `:U}
          ${t.length?this._renderSwitchRow(t[this._selectedSwitchRowIndex]||t[0],this._selectedSwitchRowIndex):L`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${t.length>0?L`
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex+1}
              </button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(t){this._config.switch_rows&&(this._config.switch_rows.splice(t,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(t,e){const i=Array.isArray(t)?t:Array.isArray(null==t?void 0:t.row)?t.row:[],a=`switch_rows.${e}`,o=Array.isArray(t)?a:`${a}.row`;return L`
      <div class="section-content">
        ${i.map(((t,e)=>this._renderSwitchItem(t,`${o}.${e}`,e,o)))}
        <button class="editor-btn" @click=${()=>{const t=this._getNestedValue(o)||[];t.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(o,[...t])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(t,e,i,a){var o;return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${t.name||this._friendlyEntityName(t.entity)||`Switch ${i+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(t.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=this._getNestedValue(a)||[];t.splice(i,1),this._valueChanged(a,[...t])}}
          ></ha-icon-button>
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Controlled Entity"
          .value=${t.entity||""}
          allow-custom-entity
          @value-changed=${t=>this._valueChanged(`${e}.entity`,t.detail.value)}
        ></ha-entity-picker>
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
          ${this._renderSelectField("Type",`${e}.type`,t.type,Zt)}
          ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,Kt)}
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Hold Entity (more-info on hold)"
          .value=${t.hold_entity||""}
          allow-custom-entity
          @value-changed=${t=>this._valueChanged(`${e}.hold_entity`,t.detail.value)}
        ></ha-entity-picker>

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
            ${t.confirmation?L`
              <ha-textfield
                label="Confirmation Text"
                .value=${"string"==typeof t.confirmation?t.confirmation:(null===(o=t.confirmation)||void 0===o?void 0:o.text)||"Are you sure?"}
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
    `}_renderInfoTemplates(t,e){const i=Array.isArray(t.info_templates)?t.info_templates:t.info_template?[t.info_template]:[];return L`
      ${i.map(((t,a)=>L`
        <div class="side-by-side">
          <ha-textfield
            label="Template ${a+1}"
            .value=${t||""}
            @input=${t=>{const o=[...i];o[a]=t.target.value,this._valueChanged(`${e}.info_templates`,o)}}
          ></ha-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const t=[...i];t.splice(a,1),this._valueChanged(`${e}.info_templates`,t.length?t:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${i.length<2?L`
        <button class="editor-btn" @click=${()=>{const t=[...i,""];this._valueChanged(`${e}.info_templates`,t)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:U}
    `}_renderCardsSection(){const t=this._config.cards||[];return L`
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
    `}_renderEmbeddedCardItem(t,e){return L`
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
    `}_renderActionConfig(t,e,i){return L`
      <ha-expansion-panel outlined .header=${t}>
        <div class="section-content">
          ${!!i?L`
            ${this._renderSelectField("Action",`${e}.action`,null==i?void 0:i.action,Jt)}
            ${"navigate"===(null==i?void 0:i.action)?L`
              <ha-textfield
                label="Navigation Path"
                .value=${i.navigation_path||""}
                @input=${t=>this._valueChanged(`${e}.navigation_path`,t.target.value)}
              ></ha-textfield>
            `:U}
            ${"url"===(null==i?void 0:i.action)?L`
              <ha-textfield
                label="URL"
                .value=${i.url_path||""}
                @input=${t=>this._valueChanged(`${e}.url_path`,t.target.value)}
              ></ha-textfield>
            `:U}
            ${"call-service"===(null==i?void 0:i.action)||"perform-action"===(null==i?void 0:i.action)?L`
              <ha-textfield
                label="Service"
                .value=${i.service||""}
                @input=${t=>this._valueChanged(`${e}.service`,t.target.value)}
              ></ha-textfield>
              <ha-yaml-editor
                label="Service Data"
                .defaultValue=${i.service_data||{}}
                @value-changed=${t=>{t.stopPropagation(),this._valueChanged(`${e}.service_data`,t.detail.value)}}
              ></ha-yaml-editor>
            `:U}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>this._valueChanged(e,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${t}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};Xt.styles=r`
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
    ha-textfield, ha-select, ha-entity-picker, ha-icon-picker {
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
  `,t([$t({attribute:!1})],Xt.prototype,"hass",void 0),t([wt()],Xt.prototype,"_config",void 0),t([wt()],Xt.prototype,"_selectedHeaderIndex",void 0),t([wt()],Xt.prototype,"_selectedSwitchRowIndex",void 0),t([wt()],Xt.prototype,"_yamlMode",void 0),t([wt()],Xt.prototype,"_yamlError",void 0),Xt=t([bt("space-hub-card-editor")],Xt);const Qt="ontouchstart"in window||navigator.maxTouchPoints>0;class te extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.startX=0,this.startY=0,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Qt?"100px":"50px",height:Qt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})})),document.addEventListener("touchmove",(t=>{var e;if(void 0===this.timer&&!this.held)return;const i=null===(e=t.touches)||void 0===e?void 0:e[0];if(i){const t=Math.abs(i.pageX-this.startX),e=Math.abs(i.pageY-this.startY);(t>te.HOLD_MOVE_THRESHOLD||e>te.HOLD_MOVE_THRESHOLD)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held=!1)}}),{passive:!0})}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>(t.preventDefault(),t.stopPropagation(),!1)));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.startX=e,this.startY=i,this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},a=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer&&!this.held||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?(this.held=!1,Dt(t,"action",{action:"hold"})):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Dt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Dt(t,"action",{action:"double_tap"})):Dt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",a),t.addEventListener("touchcancel",a),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",a),t.addEventListener("keyup",(t=>{"Enter"===t.key&&a(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}te.HOLD_MOVE_THRESHOLD=10,customElements.define("action-handler-space-hub",te);const ee=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-space-hub"))return t.querySelector("action-handler-space-hub");const e=document.createElement("action-handler-space-hub");return t.appendChild(e),e})();i&&i.bind(t,e||{})},ie=nt(class extends rt{update(t,[e]){return ee(t.element,e),O}render(t){}});function ae(t,e,i){var a,o,n,r;return e?{bg:null!==(o=null!==(a=i?e.background_active:e.background_inactive)&&void 0!==a?a:e.background)&&void 0!==o?o:t.bg,iconColor:null!==(r=null!==(n=i?e.icon_color_active:e.icon_color_inactive)&&void 0!==n?n:e.icon_color)&&void 0!==r?r:t.iconColor}:t}function oe(t,e){var i;return"lock"===t||null!==(i=null==e?void 0:e.startsWith("lock."))&&void 0!==i&&i}function ne(t,e){var i;const a=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),o=String((null==e?void 0:e.type)||"").toLowerCase(),n=a&&(null==t?void 0:t.hass)?t.hass.states[a]:void 0,r=((null==n?void 0:n.state)||"").toLowerCase(),s=!n||"unavailable"===r||"unknown"===r||""===r,l=!s&&function(t,e,i){var a;return!!e&&("lock"===i||null!==(a=null==t?void 0:t.startsWith("lock."))&&void 0!==a&&a?"locked"===e:"on"===e||"open"===e||"opening"===e)}(a,r,o),c=function(t,e,i,a,o,n){var r,s,l;return n?null!==(l=null!==(s=null!==(r=null==a?void 0:a.icon_unavailable)&&void 0!==r?r:null==a?void 0:a.icon_inactive)&&void 0!==s?s:null==a?void 0:a.icon)&&void 0!==l?l:"mdi:alert-circle-outline":o&&(null==a?void 0:a.icon_active)?a.icon_active:!o&&(null==a?void 0:a.icon_inactive)?a.icon_inactive:(null==a?void 0:a.icon)?a.icon:oe(t,e)?o?"mdi:lock":"mdi:lock-open-variant":"door"===t?o?"mdi:door-open":"mdi:door":"presence"===t?"on"===i?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===t?"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===t?o?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===t?o?"mdi:gate-open":"mdi:gate":o?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(o,a,r,e,l,s),{bg:d,iconColor:h}=function(t,e,i,a,o,n){if(n)return function(t){var e,i,a,o,n,r;return{bg:null!==(a=null!==(i=null!==(e=null==t?void 0:t.background_unavailable)&&void 0!==e?e:null==t?void 0:t.background_inactive)&&void 0!==i?i:null==t?void 0:t.background)&&void 0!==a?a:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(r=null!==(n=null!==(o=null==t?void 0:t.icon_color_unavailable)&&void 0!==o?o:null==t?void 0:t.icon_color_inactive)&&void 0!==n?n:null==t?void 0:t.icon_color)&&void 0!==r?r:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(a);if(oe(t,e))return ae(o?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o);if("door"===t||"sliding_gate"===t||"gate"===t)return ae(o?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},a,o);if("presence"===t){const t="on"===i;return ae(t?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,t)}if("smart_plug"===t)return ae(o?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o);return ae(o?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o)}(o,a,r,e,l,s),u="chip"+(s?" chip-unavailable":""),p=s?"icon-unavailable":"",v=null!==(i=null==n?void 0:n.state)&&void 0!==i?i:"unavailable";return L`
    <div
      class=${u}
      style=${`background:${d}`}
      title=${v}
      data-state=${r||"unavailable"}
      role="img"
      aria-label=${o?`${o} ${v}`:v}
    >
      <ha-icon .icon=${c} class=${p} style=${`color:${h}`}></ha-icon>
    </div>
  `}const re={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},se={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const le={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function ce(t,e="static",i=!1){if(!t||"none"===e||!i)return{style:"",overlay:U};return{style:`${`--pulse-weak: ${t.weak}; --pulse-strong: ${t.strong};`} ${"pulse"===e?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${t.strong}), 0 6px 18px var(--pulse-weak, ${t.weak});`}`,overlay:L`<div class="glow-overlay" aria-hidden="true"></div>`}}function de(t,e){var i;const a=(null==e?void 0:e.icon)||"mdi:sofa-outline",o=(null==e?void 0:e.name)||"",n="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.temp_sensor,2,"°"):"—°",r="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.humidity_sensor,2,"%"):"—%",s=!(!(null==e?void 0:e.double_tap_action)&&!(null===(i=null==t?void 0:t._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==e?void 0:e.light_group_entity),c=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),d=l&&"function"==typeof(null==t?void 0:t._isOn)&&t._isOn(c),h=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),u=(null==e?void 0:e.glow_mode)||"static",p=!!(null==e?void 0:e.light_group_entity)&&d&&"none"!==u,v=re,{style:m,overlay:g}=ce(v,u,p),f="chip main-light-chip "+(d?"on":"off"),_=Array.isArray(null==e?void 0:e.chips)?e.chips:[],b=_.find((t=>"illuminance"===String((null==t?void 0:t.type)||"").toLowerCase())),y=_.filter((t=>"illuminance"!==String((null==t?void 0:t.type)||"").toLowerCase())).map((e=>ne(t,e))),$=b?function(t,e){const i=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),a=(null==e?void 0:e.icon)||"mdi:brightness-5",o="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(i,0," lx"):"— lx";return L`
    <div class="illuminance-chip">
      <ha-icon .icon=${a}></ha-icon>
      <span class="illuminance-value">${o}</span>
    </div>
  `}(t,b):U;return L`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${m}>${g}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onMainAction)&&t._onMainAction(i,e,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity,h)}}
        .actionHandler=${ie({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${a}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${n}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${r}</span>
        </div>
        ${$}
        <div class="main-chips-bottom-right" data-role="chips">
          ${l?L`<div class=${f}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:U}
          ${y.length?L`${y}`:U}
        </div>
        <div class="main-name">${o}</div>
  </ha-control-button>
    </div>
  `}const he=(...t)=>t.filter(Boolean).join(" ");function ue(t,e){return e&&e.length?L`${e.map(((e,i)=>function(t,e,i){const a=e,o=Array.isArray(e)?e:Array.isArray(null==a?void 0:a.row)?a.row:[];let n=Array.isArray(null==a?void 0:a.cards)?a.cards:Array.isArray(null==a?void 0:a.extra_cards)?a.extra_cards:[];if(!Array.isArray(n)||!n.length){const t=(null==a?void 0:a.card)||(null==a?void 0:a.extra_card);t&&"object"==typeof t&&(n=[t])}const r=Math.max(1,o.length||1),s=Array.isArray(n)&&n.length&&"function"==typeof(null==t?void 0:t._renderEmbeddedRowCard)?L`<div class="switch-row-cards">
        ${n.map(((e,a)=>t._renderEmbeddedRowCard(e,`switch-row-${i}-card-${a}`)))}
      </div>`:U;return L`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${r}`}>${o.map((e=>function(t,e){var i,a,o,n;const r=(null==e?void 0:e.entity)||"",s=(null==e?void 0:e.icon)||"",l=(null==e?void 0:e.name)||"",c=(null===(n=null===(o=null===(a=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===a?void 0:a[r])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name)||"",d=l||c||r,h="smart_plug"===String((null==e?void 0:e.type)||"switch").toLowerCase(),u="function"==typeof(null==t?void 0:t._isOn)&&t._isOn(r),p=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"]),v=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),m=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),g=t=>null==t||""===t?"":String(t).match(/px|em|rem|%$/)?String(t):`${Number(t)}px`,f=g(p),_=f?`width:${f};height:${f};--mdc-icon-size:${f};`:"",b=`${v?`font-weight:${v};`:""}${m?`font-size:${g(m)};`:""}`,y=`switch-tile ${h?"smart":""} ${u?"on":""}`,$="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),w="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),x=h?"smart":"",A=u?"on":"off",C=he("switch-chip",x,A),k=he("switch-icon",x,A),E=he("name","switch-name",x,A),S="function"==typeof(null==t?void 0:t._resolveSwitchTemplates)?t._resolveSwitchTemplates(e):[],T=Array.isArray(S)?S.map((t=>t&&"object"==typeof t?t.value:t)).slice(0,2):[],H=((t,e)=>{if(!Array.isArray(t)||!t.length)return U;const i=t.map((t=>{const e=null==t?"":String(t);return{text:e,trimmed:e.trim()}})).filter((t=>t.trimmed.length>0)).slice(0,2);return i.length?L`
    <div class=${e}>
      ${i.map((t=>L`<span>${t.text}</span>`))}
    </div>
  `:U})(T,he("switch-info",x,A)),z=i=>{"function"==typeof(null==t?void 0:t._onSwitchAction)&&t._onSwitchAction(i,e)},N=(null==e?void 0:e.glow_mode)||"static",I=h?se:re,{style:M,overlay:R}=ce(I,N,u&&"none"!==N);if(w){return L`
      <div class="tile-wrap">
      <div class="glow-under" style=${M}>${R}</div>
      ${H}
      <ha-control-button
        class=${`switch-tile-btn ${h?"smart":""} ${u?"on":""}`}
        @action=${z}
        .actionHandler=${ie({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
        role="button" tabindex="0"
      >
          <div class="tile-inner">
            ${$?L`<ha-chip class=${C}>
                  ${s?L`<ha-icon class=${k} .icon=${s} style=${_||U}></ha-icon>`:U}
                  ${d}
                </ha-chip>`:L`
                  ${s?L`<ha-icon class=${k} .icon=${s} style=${_||U}></ha-icon>`:U}
                  ${d?L`<div class=${E} style=${b}>${d}</div>`:U}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return L`
    <div class="tile-wrap ${y}"
         @action=${z}
         .actionHandler=${ie({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under" style=${M}>${R}</div>
      ${H}
      <div class="tile-inner">
        ${$?L`<ha-chip class=${C}>
              ${s?L`<ha-icon class=${k} .icon=${s} style=${_||U}></ha-icon>`:U}
              ${d}
            </ha-chip>`:L`
              ${s?L`<ha-icon class=${k} .icon=${s} style=${_||U}></ha-icon>`:U}
              ${d?L`<div class=${E} style=${b}>${d}</div>`:U}
            `}
      </div>
    </div>
  `}(t,e)))}</div>
      ${s}
    </div>
  `}(t,e,i)))}`:U}const pe=r`
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

  /* ====== Confirmation dialog ====== */
  .sh-confirm-overlay {
    position: fixed;
    inset: 0;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    animation: shFadeIn 0.15s ease;
  }
  .sh-confirm-overlay.sh-closing {
    animation: shFadeOut 0.15s ease forwards;
  }
  .sh-confirm-dialog {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-text-color);
    border-radius: 16px;
    padding: 24px;
    min-width: 280px;
    max-width: 90vw;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    text-align: center;
    animation: shSlideUp 0.15s ease;
  }
  .sh-closing .sh-confirm-dialog {
    animation: shSlideDown 0.15s ease forwards;
  }
  .sh-confirm-title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
  }
  .sh-confirm-text {
    font-size: 14px;
    color: var(--secondary-text-color);
    margin-bottom: 20px;
  }
  .sh-confirm-actions {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  .sh-confirm-btn {
    flex: 1;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.12s ease;
  }
  .sh-confirm-btn:active { opacity: 0.7; }
  .sh-confirm-btn.sh-cancel {
    background: var(--chip-background-color, rgba(0,0,0,0.06));
    color: var(--primary-text-color);
  }
  .sh-confirm-btn.sh-ok {
    background: var(--primary-color, #3f51b5);
    color: #fff;
  }
  @keyframes shFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes shFadeOut { from { opacity: 1; } to { opacity: 0; } }
  @keyframes shSlideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
  @keyframes shSlideDown { from { transform: translateY(0); opacity: 1; } to { transform: translateY(20px); opacity: 0; } }
`,ve=r`
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
`,me=r`
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
`,ge=r`
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
`,fe=r`
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
`,_e=r`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,be=r`
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
`;var ye;function $e(t){try{Dt(window,"haptic",t)}catch(t){}}let we=ye=class extends it{constructor(){super(...arguments),this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(t){if(!t)throw new Error("Configuration is required");this._validateConfig(t);const e=Gt(t||{});Array.isArray(e.headers)||(e.headers=[]),Array.isArray(e.switch_rows)||(e.switch_rows=[]),Array.isArray(e.cards)||(e.cards=[]),this._clearRowCardCache(),this._config=e,this._syncTemplateEntries(e.switch_rows)}_validateConfig(t){const e=[];t.headers&&Array.isArray(t.headers)&&t.headers.forEach(((t,i)=>{if(t){if(t.ac&&(t.ac.entity?"string"==typeof t.ac.entity&&t.ac.entity.includes(".")||e.push(`Header ${i+1}: AC entity '${t.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):e.push(`Header ${i+1}: AC tile requires an 'entity' field`)),t.thermostat&&(t.thermostat.entity?"string"==typeof t.thermostat.entity&&t.thermostat.entity.includes(".")||e.push(`Header ${i+1}: Thermostat entity '${t.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):e.push(`Header ${i+1}: Thermostat tile requires an 'entity' field`)),t.main){const a=t.main;!!(a.main_name||a.main_icon||a.tap_entity||a.light_group_entity||a.temp_sensor||a.humidity_sensor||Array.isArray(a.chips)&&a.chips.length>0)||e.push(`Header ${i+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((t=>{const o=a[t];!o||"string"==typeof o&&o.includes(".")||e.push(`Header ${i+1}: Main tile ${t} '${o}' must be a valid entity ID`)}))}!t.ac&&!t.thermostat||t.main||e.push(`Header ${i+1}: AC and Thermostat tiles require a 'main' configuration block`)}else e.push(`Header ${i+1}: Header configuration cannot be empty`)})),t.switch_rows&&Array.isArray(t.switch_rows)&&t.switch_rows.forEach(((t,i)=>{if(!t)return void e.push(`Switch row ${i+1}: Switch row configuration cannot be empty`);const a=Array.isArray(t)?t:Array.isArray(t.row)?t.row:[];Array.isArray(a)&&0!==a.length?a.forEach(((t,a)=>{t&&t.entity?"string"==typeof t.entity&&t.entity.includes(".")||e.push(`Switch row ${i+1}, item ${a+1}: Switch entity '${t.entity}' must be a valid entity ID`):e.push(`Switch row ${i+1}, item ${a+1}: Switch item requires an 'entity' field`),!(null==t?void 0:t.hold_entity)||"string"==typeof t.hold_entity&&t.hold_entity.includes(".")||e.push(`Switch row ${i+1}, item ${a+1}: hold_entity '${t.hold_entity}' must be a valid entity ID`)})):e.push(`Switch row ${i+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([i,a])=>{const o=t[i];if(null!=o){const t=Number(o);(!Number.isFinite(t)||t<0)&&e.push(`${a} must be a positive number, got: ${o}`)}})),void 0!==t.card_shadow_intensity&&null!==t.card_shadow_intensity){const i=Number(t.card_shadow_intensity);Number.isFinite(i)&&(i<0||i>1)&&e.push(`Card shadow intensity must be between 0 and 1, got: ${i}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((i=>{const a=t[i];if(a&&"string"==typeof a){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(a)||e.push(`${i.replace(/_/g," ")} '${a}' is not a valid color format`)}})),e.length>0)throw new Error(`Invalid space-hub-card configuration:\n${e.map((t=>`• ${t}`)).join("\n")}`)}getCardSize(){return 6}render(){var t,e,i,a,o,n,r,s,l;if(!this._config)return U;const c=ye.getStubConfig(),d=this._config||{},h={tile_height:null!==(t=d.tile_height)&&void 0!==t?t:c.tile_height,chip_icon_size:null!==(e=d.chip_icon_size)&&void 0!==e?e:c.chip_icon_size,main_icon_size:null!==(i=d.main_icon_size)&&void 0!==i?i:c.main_icon_size,chip_font_size:null!==(a=d.chip_font_size)&&void 0!==a?a:c.chip_font_size,card_shadow_color:null!==(o=d.card_shadow_color)&&void 0!==o?o:c.card_shadow_color,card_shadow_intensity:null!==(n=d.card_shadow_intensity)&&void 0!==n?n:c.card_shadow_intensity,unavailable_pulse_color:null!==(r=d.unavailable_pulse_color)&&void 0!==r?r:c.unavailable_pulse_color,headers:Array.isArray(d.headers)&&d.headers.length?d.headers:[],switch_rows:Array.isArray(d.switch_rows)?d.switch_rows:[],cards:Array.isArray(d.cards)?d.cards:[],tap_action:d.tap_action,hold_action:d.hold_action,double_tap_action:d.double_tap_action},u=Array.isArray(h.headers)&&h.headers.length?h.headers:[],p=Number(h.tile_height)||Number(c.tile_height)||80,v=Number(h.chip_icon_size)||Number(c.chip_icon_size)||14,m=Number(h.chip_font_size)||Number(c.chip_font_size)||12,g=Math.max(m+10,20),f=Math.round(.625*p),_=u[0]||{},b=Number(null!==(s=null==_?void 0:_.main_icon_size)&&void 0!==s?s:null==_?void 0:_.maicon_size),y=Number.isFinite(b)&&b>0?b:Number(h.main_icon_size)||Number(c.main_icon_size)||48,$=this._rgbaFromColor(h.card_shadow_color||c.card_shadow_color,null!==(l=h.card_shadow_intensity)&&void 0!==l?l:c.card_shadow_intensity),w=h.unavailable_pulse_color||c.unavailable_pulse_color||"#ff3b30",x=this._hasAnyUnavailable(h,u),A=this._rgbaFromColor(w,.18),C=this._rgbaFromColor(w,.36);return L`
      <ha-card class=${x?"unavailable":""}
               style=${`--panel-shadow-color:${x?A:$}; --unavail-weak:${A}; --unavail-strong:${C}`}>
        <div class="metrics" style=${`--tile-h:${p}px; --chip-size:${g}px; --chip-icon-size:${v}px; --main-icon-size:${y}px; --chip-font-size:${m}px; --ac-thermostat-icon:${f}px;`}>
          <div class="root">
            ${u.map((t=>this._renderHeaderRow(t)))}
            ${ue(this,h.switch_rows)}
            ${Array.isArray(h.cards)&&h.cards.length?L`
                  <div class="extra-cards">
                    ${h.cards.map(((t,e)=>this._renderEmbeddedRowCard(t,`standalone-card-${e}`)))}
                  </div>
                `:U}
          </div>
        </div>
      </ha-card>
    `}updated(t){super.updated(t),t.has("hass")&&(this._rowCardElements.forEach((t=>{t&&(t.hass=this.hass)})),this._resumeTemplateSubscriptions())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((t=>this._disposeTemplateEntry(t)))}_renderHeaderRow(t){const e=t.main||{},i={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,glow_mode:e.glow_mode,light_group_entity:e.light_group_entity,name:e.main_name||e.name,icon:e.main_icon||e.icon,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,chips:Array.isArray(e.chips)?e.chips:[],tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},a=t.ac||{},o=t.thermostat||{},n=!!(null==a?void 0:a.entity),r=!!(null==o?void 0:o.entity),s=!(!e||!(e.main_name||e.name||e.light_group_entity||e.entity||e.main_icon||e.icon||e.temp_sensor||e.humidity_sensor||Array.isArray(e.chips)&&e.chips.length)),l=s&&n,c=s&&r;s||!n&&!r||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const d=L`
      <div class=${l||c?l&&c?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${s?de(this,i):U}
        ${l?function(t,e,i){var a,o,n;const r=((null===(n=null===(o=null===(a=null==t?void 0:t.hass)||void 0===a?void 0:a.states)||void 0===o?void 0:o[e])||void 0===n?void 0:n.state)||"").toLowerCase(),s=!!r&&"off"!==r,l="function"==typeof(null==t?void 0:t._acChip)?t._acChip(r):{icon:"mdi:air-conditioner"},c=(null==l?void 0:l.icon)||"mdi:air-conditioner",d="ac-mode-"+((h=r)&&"off"!==h?h.includes("cool")?"cool":h.includes("heat")?"heat":h.includes("dry")?"dry":h.includes("fan")?"fan":h.includes("auto")?"auto":"default":"off");var h;const u=`chip chip-temperature-humidity ac-chip ${d}`,p=`ac-fan ${d}${s?" spinning":""}`,v=function(t){const e=(t||"").toLowerCase();return e&&"off"!==e?e.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:e.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:e.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:e.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:e.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(r),m=null!=i?i:"static",{style:g,overlay:f}=ce(v,m,s);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${g}>${f}</div>
      <ha-control-button
        class="square ac-tile ${s?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onACAction)&&t._onACAction(i,e)}}
        .actionHandler=${ie({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${u}>
          <ha-icon .icon=${c}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${p} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,a.entity,a.glow_mode):U}
        ${c?function(t,e,i){var a,o,n,r,s,l,c,d;const h=null===(o=null===(a=null==t?void 0:t.hass)||void 0===a?void 0:a.states)||void 0===o?void 0:o[e],u="function"==typeof(null==t?void 0:t._fmtNumber)?t._fmtNumber.bind(t):t=>null==t?"—":String(t),p=u(null!==(l=null!==(r=null===(n=null==h?void 0:h.attributes)||void 0===n?void 0:n.temperature)&&void 0!==r?r:null===(s=null==h?void 0:h.attributes)||void 0===s?void 0:s.target_temp)&&void 0!==l?l:null===(c=null==h?void 0:h.attributes)||void 0===c?void 0:c.target_temperature,1)+"°",v="heating"===((null===(d=null==h?void 0:h.attributes)||void 0===d?void 0:d.hvac_action)||"").toLowerCase(),m="off"===((null==h?void 0:h.state)||"").toLowerCase()?"off":v?"heating":"idle",g=`thermostat-chip ${m}`,f=`temperature-chip ${m}`,_=`thermostat-icon ${m}`,b="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),y=null!=i?i:"static",$=le,{style:w,overlay:x}=ce($,y,v);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${w}>${x}</div>
      <ha-control-button
        class="square thermostat-tile ${v?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onThermostatAction)&&t._onThermostatAction(i,e)}}
        .actionHandler=${ie({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${b?L`<ha-chip class=${g}>${p}</ha-chip>`:L`<div class=${f}><span class="thermostat-target">${p}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${_} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,o.entity,o.glow_mode):U}
      </div>
    `;return d}_renderEmbeddedRowCard(t,e){if(!t||"object"!=typeof t)return U;this._rowCardConfigs.get(e)!==t&&(this._rowCardElements.delete(e),this._rowCardPromises.delete(e)),this._rowCardConfigs.set(e,t);const i=this._rowCardElements.get(e);if(i)return i.hass=this.hass,L`<div class="embedded-card">${i}</div>`;const a=this._createRowCardElement(e,t).then((t=>(t.hass=this.hass,L`${t}`))).catch((e=>{const i=e instanceof Error?e.message:String(e),a=this._createErrorCard(i,t);return a.hass=this.hass,L`${a}`}));return L`<div class="embedded-card">${_t(a,U)}</div>`}async _createRowCardElement(t,e){const i=this._rowCardPromises.get(t);if(i)return i;const a=(async()=>{const i=await this._getCardHelpers();let a;try{a=(null==i?void 0:i.createCardElement)?await i.createCardElement(e):Ft(e)}catch(t){const i=t instanceof Error?t.message:String(t);a=this._createErrorCard(i,e)}return a.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(t),this._rowCardPromises.delete(t);const a=this._rowCardConfigs.get(t)||e;this._createRowCardElement(t,a).then((()=>this.requestUpdate()))})),this._rowCardElements.set(t,a),this._rowCardPromises.delete(t),a})();return this._rowCardPromises.set(t,a),a}_createErrorCard(t,e){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),i}catch(i){return Ft({type:"hui-error-card",error:t,origConfig:e})}}async _getCardHelpers(){if(!this._helpersPromise){const t=window.loadCardHelpers;this._helpersPromise="function"==typeof t?t():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_toggleByDomain(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=t.split(".")[0],a=((null==e?void 0:e.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(t);else{const e="open"===a||"opening"===a?"close_cover":"open_cover";this.hass.callService("cover",e,{entity_id:t})}else{const e="locked"===a?"unlock":"lock";this.hass.callService("lock",e,{entity_id:t})}}_onMainAction(t,e,i,a,o){const n=t.detail&&t.detail.action||"tap";this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action)?Bt(this,this.hass,e,n):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?Bt(this,this.hass,this._config,n):"hold"===n?($e("medium"),this._openMoreInfo(a||i)):this._toggleGeneric(o||i)}_onACAction(t,e){this._onClimateTileAction(t,e,(()=>this._acToggle(e)))}_onThermostatAction(t,e){this._onClimateTileAction(t,e,(()=>this._thermostatToggle(e)))}_onClimateTileAction(t,e,i){"hold"===(t.detail&&t.detail.action||"tap")?($e("medium"),this._openMoreInfo(e)):($e("success"),i())}_onSwitchAction(t,e){const i=t.detail&&t.detail.action||"tap",a=null==e?void 0:e.entity,o=(null==e?void 0:e.hold_entity)||a,n=!!((null==e?void 0:e.tap_action)||(null==e?void 0:e.hold_action)||(null==e?void 0:e.double_tap_action));if("tap"===i||"double_tap"===i){const t=null==e?void 0:e.confirmation;if("tap"===i&&t){const t=()=>{this.hass&&n?Bt(this,this.hass,e,i):this._toggleByDomain(a)};return void this._showConfirmation(e,t)}this.hass&&n?Bt(this,this.hass,e,i):this._toggleByDomain(a)}else"hold"===i&&($e("medium"),this.hass&&n?Bt(this,this.hass,e,i):this._openMoreInfo(o||a))}_showConfirmation(t,e){var i,a,o,n;const r=null==t?void 0:t.confirmation,s=("string"==typeof r?r:null==r?void 0:r.text)||"Are you sure?",l=(null==t?void 0:t.entity)||"",c=(null==t?void 0:t.name)||(null===(n=null===(o=null===(a=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===a?void 0:a[l])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name)||l,d=document.createElement("div");d.className="sh-confirm-overlay";const h=document.createElement("div");h.className="sh-confirm-dialog",h.innerHTML=`\n      <div class="sh-confirm-title">${this._escapeHtml(c)}</div>\n      <div class="sh-confirm-text">${this._escapeHtml(s)}</div>\n      <div class="sh-confirm-actions">\n        <button class="sh-confirm-btn sh-cancel">Cancel</button>\n        <button class="sh-confirm-btn sh-ok">Confirm</button>\n      </div>\n    `,d.appendChild(h);const u=()=>{d.classList.add("sh-closing"),d.addEventListener("animationend",(()=>d.remove()),{once:!0}),setTimeout((()=>{d.parentNode&&d.remove()}),300)};d.addEventListener("click",(t=>{t.target===d&&u()})),h.querySelector(".sh-cancel").addEventListener("click",(()=>u())),h.querySelector(".sh-ok").addEventListener("click",(()=>{u(),$e("success"),e()})),this.shadowRoot.appendChild(d)}_escapeHtml(t){const e=document.createElement("div");return e.textContent=t,e.innerHTML}_resolveSwitchTemplates(t){const e=this._extractTemplatesFromSwitch(t);return e.length?e.map((t=>({template:t,value:this._getTemplateDisplayValue(t)}))):[]}_extractTemplatesFromSwitch(t){if(!t||"object"!=typeof t)return[];const e=t,i=((...t)=>{for(const i of t)if(i in e)return e[i]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==i)return[];const a=Array.isArray(i)?i:[i],o=[];return a.some((t=>{let e;"string"==typeof t?e=t:t&&"object"==typeof t&&(e=t.template||t.value||t.value_template||t.text);const i="string"==typeof e?e.trim():"";return i&&o.push(i),o.length>=2})),o.slice(0,2)}_syncTemplateEntries(t){const e=this._collectTemplatesFromRows(t);if(!e.size&&!this._switchTemplateValues.size)return;const i=[];this._switchTemplateValues.forEach(((t,a)=>{e.has(a)||i.push(a)})),i.forEach((t=>{const e=this._switchTemplateValues.get(t);e&&this._disposeTemplateEntry(e),this._switchTemplateValues.delete(t)})),e.forEach((t=>this._ensureTemplateEntry(t)))}_collectTemplatesFromRows(t){const e=new Set;return Array.isArray(t)?(t.forEach((t=>{const i=Array.isArray(t)?t:Array.isArray(null==t?void 0:t.row)?t.row:[];Array.isArray(i)&&i.forEach((t=>{this._extractTemplatesFromSwitch(t).forEach((t=>e.add(t)))}))})),e):e}_ensureTemplateEntry(t){const e=(t||"").trim();if(!e)return;let i=this._switchTemplateValues.get(e);return i||(i={value:"",ready:!1},this._switchTemplateValues.set(e,i)),this._startTemplateSubscription(e,i),i}_getTemplateDisplayValue(t){var e;const i=this._ensureTemplateEntry(t);return i?i.error?"!":i.ready?null!==(e=i.value)&&void 0!==e?e:"":"…":""}_startTemplateSubscription(t,e){var i;!(null===(i=this.hass)||void 0===i?void 0:i.connection)||e.unsub||e.pending||(e.pending=!0,this.hass.connection.subscribeMessage((t=>{e.ready=!0,e.error=void 0;const i=t&&"object"==typeof t&&"result"in t?t.result:t;e.value=null!=i?String(i):"",this.requestUpdate()}),{type:"render_template",template:t},{resubscribe:!0}).then((t=>{e.unsub=t})).catch((i=>{e.ready=!0,e.error=(null==i?void 0:i.message)||"error",e.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${t}":`,i),this.requestUpdate()})).finally((()=>{e.pending=!1})))}_disposeTemplateEntry(t){if(t.unsub){try{t.unsub()}catch(t){}t.unsub=void 0}t.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((t,e)=>this._startTemplateSubscription(e,t)))}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const a=this.hass.states[t];if(!a||""===a.state||"unknown"===a.state||"unavailable"===a.state)return"—"+(i||"");const o=Number(a.state);return Number.isFinite(o)?o.toFixed(e)+(i||""):String(a.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acChip(t){return t&&"off"!==t?t.includes("cool")?{icon:"mdi:snowflake"}:t.includes("heat")?{icon:"mdi:fire"}:t.includes("dry")?{icon:"mdi:water-percent"}:t.includes("fan")?{icon:"mdi:fan"}:t.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),a=!!i&&"off"!==i;this.hass.callService("climate",a?"turn_off":"turn_on",{entity_id:t})}_thermostatToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[a,o]=i.split(".");this.hass.callService(a,o,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const a=t.trim();if(a.startsWith("rgba(")||a.startsWith("rgb(")||a.startsWith("hsl(")||a.startsWith("var("))return a;const o=a.replace("#",""),n=t=>parseInt(t,16);if(3===o.length){return`rgba(${n(o[0]+o[0])},${n(o[1]+o[1])},${n(o[2]+o[2])},${i})`}if(o.length>=6){return`rgba(${n(o.slice(0,2))},${n(o.slice(2,4))},${n(o.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(t,e){const i=[],a=Array.isArray(e)?e:[e],o=t=>{t&&("string"==typeof t?i.push(t):Array.isArray(t)&&t.forEach((t=>o(t))))},n=t=>{t&&"object"==typeof t&&(o(t.entity),o(t.entity_id),o(t.entities),o(t.tap_entity),o(t.hold_entity),o(t.double_tap_entity),Array.isArray(t.cards)&&t.cards.forEach(n),Array.isArray(t.rows)&&t.rows.forEach(n),Array.isArray(t.columns)&&t.columns.forEach(n),Array.isArray(t.sections)&&t.sections.forEach(n),Array.isArray(t.widgets)&&t.widgets.forEach(n),Array.isArray(t.items)&&t.items.forEach(n),Array.isArray(t.elements)&&t.elements.forEach(n),t.card&&n(t.card),t.header&&n(t.header),t.footer&&n(t.footer))};a.forEach((t=>{const e=(null==t?void 0:t.main)||{},a={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,light_group_entity:e.light_group_entity,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,chips:Array.isArray(e.chips)?e.chips:[]},o=(null==t?void 0:t.ac)||{},n=(null==t?void 0:t.thermostat)||{};i.push(null==a?void 0:a.tap_entity,null==a?void 0:a.hold_entity,null==a?void 0:a.light_group_entity,null==a?void 0:a.temp_sensor,null==a?void 0:a.humidity_sensor),i.push(null==o?void 0:o.entity,null==n?void 0:n.entity),a.chips.forEach((t=>{i.push(null==t?void 0:t.entity,null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity)}))}));return(t.switch_rows||[]).forEach((t=>{var e;(Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[]).forEach((t=>{i.push(null==t?void 0:t.entity,null==t?void 0:t.hold_entity)}))})),Array.isArray(t.cards)&&t.cards.forEach((t=>n(t))),i}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=this._getAllCardEntities(t,e),a=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const o=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];if(!o)return!0;const n=(o.state||"").toLowerCase();return a.has(n)}))}};we.styles=[pe,ve,me,ge,fe,_e,be],t([$t({attribute:!1})],we.prototype,"hass",void 0),t([wt()],we.prototype,"_config",void 0),we=ye=t([bt("space-hub-card")],we),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.0"});try{const t=window;if(!t.__SPACE_HUB_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.0",e,i),t.__SPACE_HUB_CARD_LOGGED__=!0}}catch(t){}var xe=we;export{we as SpaceHubCard,xe as default};
