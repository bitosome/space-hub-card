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
function t(t,e,i,o){var r,n=arguments.length,a=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(a=(n<3?r(a):n>3?r(e,i,a):r(e,i))||a);return n>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;class n{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new n(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},m="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const r=this[t];this[e]=o,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(m))return!1;this[m]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;const r=this.constructor._$Ep(t,i);if(void 0!==r&&!0===i.reflect){const n=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,r=o._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=o.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f[m]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,A=`<${x}>`,C=document,E=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,S=Array.isArray,z="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,H=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,I=/"/g,O=/^(?:script|style|textarea|title)$/i,R=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),D=new WeakMap,j=C.createTreeWalker(C,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}class q{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let r=0,n=0;const a=t.length-1,s=this.parts,[l,c]=((t,e)=>{const i=t.length-1,o=[];let r,n=2===e?"<svg>":"",a=T;for(let e=0;e<i;e++){const i=t[e];let s,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===T?"!--"===l[1]?a=P:void 0!==l[1]?a=N:void 0!==l[2]?(O.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=null!=r?r:T,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?H:'"'===l[3]?I:M):a===I||a===M?a=H:a===P||a===N?a=T:(a=H,r=void 0);const h=a===H&&t[e+1].startsWith("/>")?" ":"";n+=a===T?i+A:c>=0?(o.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(o.push(void 0),e):h)}return[B(t,n+(t[i]||"<?>")+(2===e?"</svg>":"")),o]})(t,e);if(this.el=q.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=j.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?Y:"?"===e[1]?Z:"@"===e[1]?J:V})}else s.push({type:6,index:r})}for(const e of t)o.removeAttribute(e)}if(O.test(o.tagName)){const t=o.textContent.split($),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),j.nextNode(),s.push({type:2,index:++r});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===x)s.push({type:2,index:r});else{let t=-1;for(;-1!==(t=o.data.indexOf($,t+1));)s.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,o){var r,n,a,s;if(e===L)return e;let l=void 0!==o?null===(r=i._$Co)||void 0===r?void 0:r[o]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,o)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);j.currentNode=r;let n=j.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new W(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Q(n,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(n=j.nextNode(),a++)}return j.currentNode=C,r}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,o){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(r=null==o?void 0:o.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),k(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>S(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==U&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,r="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=q.createElement(B(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(i);else{const t=new G(r,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=D.get(t.strings);return void 0===e&&D.set(t.strings,e=new q(t)),e}T(t){S(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const r of t)o===e.length?e.push(i=new W(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(r),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,o,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const r=this.strings;let n=!1;if(void 0===r)t=F(this,t,e,0),n=!k(t)||t!==this._$AH&&t!==L,n&&(this._$AH=t);else{const o=t;let a,s;for(t=r[0],a=0;a<r.length-1;a++)s=F(this,o[i+a],e,a),s===L&&(s=this._$AH[a]),n||(n=!k(s)||s!==this._$AH[a]),s===U?t=U:t!==U&&(t+=(null!=s?s:"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(t)}j(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Y extends V{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===U?void 0:t}}const K=y?y.emptyScript:"";class Z extends V{constructor(){super(...arguments),this.type=4}j(t){t&&t!==U?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class J extends V{constructor(t,e,i,o,r){super(t,e,i,o,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:U)===L)return;const o=this._$AH,r=t===U&&o!==U||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==U&&(o===U||r);r&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const X=b.litHtmlPolyfillSupport;null==X||X(q,W),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,et;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,r;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=n._$litPart$;if(void 0===a){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=a=new W(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:it}),(null!==(et=globalThis.litElementVersions)&&void 0!==et?et:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=2,nt=t=>(...e)=>({_$litDirective$:t,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=(t,e)=>{var i,o;const r=t._$AN;if(void 0===r)return!1;for(const t of r)null===(o=(i=t)._$AO)||void 0===o||o.call(i,e,!1),st(t,e);return!0},lt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ct=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ut(e)}};function dt(t){void 0!==this._$AN?(lt(this),this._$AM=t,ct(this)):this._$AM=t}function ht(t,e=!1,i=0){const o=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(e)if(Array.isArray(o))for(let t=i;t<o.length;t++)st(o[t],!1),lt(o[t]);else null!=o&&(st(o,!1),lt(o));else st(this,t)}const ut=t=>{var e,i,o,r;t.type==rt&&(null!==(e=(o=t)._$AP)&&void 0!==e||(o._$AP=ht),null!==(i=(r=t)._$AQ)&&void 0!==i||(r._$AQ=dt))};class pt extends at{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ct(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,o;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(o=this.disconnected)||void 0===o||o.call(this)),e&&(st(this,t),lt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class vt{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class gt{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=t=>!(t=>null===t||"object"!=typeof t&&"function"!=typeof t)(t)&&"function"==typeof t.then,ft=1073741823;const _t=nt(class extends pt{constructor(){super(...arguments),this._$C_t=ft,this._$Cwt=[],this._$Cq=new vt(this),this._$CK=new gt}render(...t){var e;return null!==(e=t.find((t=>!mt(t))))&&void 0!==e?e:L}update(t,e){const i=this._$Cwt;let o=i.length;this._$Cwt=e;const r=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const a=e[t];if(!mt(a))return this._$C_t=t,a;t<o&&a===i[t]||(this._$C_t=ft,o=0,Promise.resolve(a).then((async t=>{for(;n.get();)await n.get();const e=r.deref();if(void 0!==e){const i=e._$Cwt.indexOf(a);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return L}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),bt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):bt(t,e)
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
var wt;null===(wt=window.HTMLSlotElement)||void 0===wt||wt.prototype.assignedElements;var $t="[^\\s]+";function xt(t,e){for(var i=[],o=0,r=t.length;o<r;o++)i.push(t[o].substr(0,e));return i}var At=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),r=o.indexOf(e.toLowerCase());return r>-1?r:null}};function Ct(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,r=e;o<r.length;o++){var n=r[o];for(var a in n)t[a]=n[a]}return t}var Et=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],kt=["January","February","March","April","May","June","July","August","September","October","November","December"],St=xt(kt,3),zt={dayNamesShort:xt(Et,3),dayNames:Et,monthNamesShort:St,monthNames:kt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},Tt=(Ct({},zt),function(t){return+t-1}),Pt=[null,"[1-9]\\d?"],Nt=[null,$t],Ht=["isPm",$t,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],Mt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];At("monthNamesShort"),At("monthNames");var It,Ot;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(It||(It={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(Ot||(Ot={}));var Rt=["closed","locked","off"],Lt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var r=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return r.detail=i,t.dispatchEvent(r),r},Ut=new Set(["call-service","divider","section","weblink","cast","select"]),Dt={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},jt=function(t,e){void 0===e&&(e=!1);var i=function(t,e){return o("hui-error-card",{type:"error",error:t,config:e})},o=function(t,e){var o=window.document.createElement(t);try{o.setConfig(e)}catch(o){return console.error(t,o),i(o.message,e)}return o};if(!t||"object"!=typeof t||!e&&!t.type)return i("No type defined",t);var r=t.type;if(r&&r.startsWith("custom:"))r=r.substr("custom:".length);else if(e)if(Ut.has(r))r="hui-"+r+"-row";else{if(!t.entity)return i("Invalid config given.",t);var n=t.entity.split(".",1)[0];r="hui-"+(Dt[n]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return o(r,t);var a=i("Custom element doesn't exist: "+t.type+".",t);a.style.display="None";var s=setTimeout((function(){a.style.display=""}),2e3);return customElements.whenDefined(t.type).then((function(){clearTimeout(s),Lt(a,"ll-rebuild",{},a)})),a},Bt=function(t){Lt(window,"haptic",t)},qt=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(Bt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&Lt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),Lt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,r=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===r?"homeassistant":r;switch(r){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(n,o,{entity_id:e})})(t,e,Rt.includes(t.states[e].state))}(e,i.entity),Bt("success"));break;case"call-service":if(!o.service)return void Bt("failure");var r=o.service.split(".",2);e.callService(r[0],r[1],o.service_data),Bt("success");break;case"fire-dom-event":Lt(t,"ll-custom",o)}},Ft=function(t,e,i,o){var r;"double_tap"===o&&i.double_tap_action?r=i.double_tap_action:"hold"===o&&i.hold_action?r=i.hold_action:"tap"===o&&i.tap_action&&(r=i.tap_action),qt(t,e,i,r)};const Gt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class Wt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Gt?"100px":"50px",height:Gt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?Lt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Lt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Lt(t,"action",{action:"double_tap"})):Lt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",Wt);const Vt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},Yt=nt(class extends at{update(t,[e]){return Vt(t.element,e),L}render(t){}});function Kt(t,e,i){var o;return!!e&&("lock"===i||null!==(o=null==t?void 0:t.startsWith("lock."))&&void 0!==o&&o?"locked"===e:"on"===e||"open"===e||"opening"===e)}function Zt(t,e){const i=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),o=String((null==e?void 0:e.type)||"").toLowerCase(),r=null==e?void 0:e.icon,n=i&&(null==t?void 0:t.hass)?t.hass.states[i]:void 0,a=((null==n?void 0:n.state)||"").toLowerCase(),s=function(t,e,i,o){var r;if(o)return o;if("lock"===t||null!==(r=null==e?void 0:e.startsWith("lock."))&&void 0!==r&&r)return"locked"===i?"mdi:lock":"mdi:lock-open-variant";if("door"===t)return Kt(e,i,t)?"mdi:door-open":"mdi:door";if("presence"===t)return"on"===i?"mdi:human-greeting":"mdi:human-handsdown";if("smart_plug"===t)return"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off";if("sliding_gate"===t)return Kt(e,i,t)?"mdi:gate-open":"mdi:gate-arrow-left";if("gate"===t)return Kt(e,i,t)?"mdi:gate-open":"mdi:gate";return Kt(e,i,t)?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(o,i,a,r),{bg:l,iconColor:c}=function(t,e,i){var o;const r=Kt(e,i,t);if("lock"===t||null!==(o=null==e?void 0:e.startsWith("lock."))&&void 0!==o&&o)return r?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"};if("door"===t)return r?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"};if("presence"===t)return"on"===i?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"};return"smart_plug"===t?r?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"}:"sliding_gate"===t||"gate"===t?r?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"}:r?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"}}(o,i,a);return R`
    <div class="chip" style=${`background:${l}`}>
      <ha-icon .icon=${s} style=${`color:${c}`}></ha-icon>
    </div>
  `}const Jt={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},Qt={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const Xt={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function te(t,e="static",i=!1){if(!t||"none"===e||!i)return{style:"",overlay:U};return{style:`${`--pulse-weak: ${t.weak}; --pulse-strong: ${t.strong};`} ${"pulse"===e?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${t.strong}), 0 6px 18px var(--pulse-weak, ${t.weak});`}`,overlay:R`<div class="glow-overlay" aria-hidden="true"></div>`}}function ee(t,e){var i;const o=(null==e?void 0:e.icon)||"mdi:sofa-outline",r=(null==e?void 0:e.name)||"",n="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.temp_sensor,2,"°"):"—°",a="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.humidity_sensor,2,"%"):"—%",s=!(!(null==e?void 0:e.double_tap_action)&&!(null===(i=null==t?void 0:t._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==e?void 0:e.light_group_entity),c=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),d=l&&"function"==typeof(null==t?void 0:t._isOn)&&t._isOn(c),h=d?"linear-gradient(135deg,#ffcf57,#ffb200)":"rgba(0,0,0,0.06)",u=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),p=(null==e?void 0:e.glow_mode)||"static",v=!!(null==e?void 0:e.light_group_entity)&&d&&"none"!==p,g=Jt,{style:m,overlay:f}=te(g,p,v),_=Array.isArray(null==e?void 0:e.chips)?e.chips:[],b=_.find((t=>"illuminance"===String((null==t?void 0:t.type)||"").toLowerCase())),y=_.filter((t=>"illuminance"!==String((null==t?void 0:t.type)||"").toLowerCase())).map((e=>Zt(t,e))),w=b?function(t,e){const i=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),o=(null==e?void 0:e.icon)||"mdi:brightness-5",r="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(i,0," lx"):"— lx";return R`
    <div class="illuminance-chip">
      <ha-icon .icon=${o}></ha-icon>
      <span class="illuminance-value">${r}</span>
    </div>
  `}(t,b):U;return R`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${m}>${f}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onMainAction)&&t._onMainAction(i,e,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity,u)}}
        .actionHandler=${Yt({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${o}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${n}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${a}</span>
        </div>
        ${w}
        <div class="main-chips-bottom-right" data-role="chips">
          ${l?R`<div class="chip" style=${`background:${h}`}>
                <ha-icon .icon=${"mdi:lightbulb"} style=${"color:"+(d?"#ffffff":"var(--secondary-text-color)")}></ha-icon>
              </div>`:U}
          ${y.length?R`${y}`:U}
        </div>
        <div class="main-name">${r}</div>
  </ha-control-button>
    </div>
  `}function ie(t,e){return e&&e.length?R`${e.map(((e,i)=>function(t,e,i){const o=e,r=Array.isArray(e)?e:Array.isArray(null==o?void 0:o.row)?o.row:[];let n=Array.isArray(null==o?void 0:o.cards)?o.cards:Array.isArray(null==o?void 0:o.extra_cards)?o.extra_cards:[];if(!Array.isArray(n)||!n.length){const t=(null==o?void 0:o.card)||(null==o?void 0:o.extra_card);t&&"object"==typeof t&&(n=[t])}const a=Math.max(1,r.length||1),s=Array.isArray(n)&&n.length&&"function"==typeof(null==t?void 0:t._renderEmbeddedRowCard)?R`<div class="switch-row-cards">
        ${n.map(((e,o)=>t._renderEmbeddedRowCard(e,`switch-row-${i}-card-${o}`)))}
      </div>`:U;return R`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${a}`}>${r.map((e=>function(t,e){const i=(null==e?void 0:e.entity)||"",o=(null==e?void 0:e.icon)||"",r=(null==e?void 0:e.name)||"",n="smart_plug"===String((null==e?void 0:e.type)||"switch").toLowerCase(),a="function"==typeof(null==t?void 0:t._isOn)&&t._isOn(i),s=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"])||(null==e?void 0:e.icon_size),l=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),c=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),d=t=>null==t||""===t?"":String(t).match(/px|em|rem|%$/)?String(t):`${Number(t)}px`,h=d(s),u=h?`width:${h};height:${h};--mdc-icon-size:${h};`:"",p=`${l?`font-weight:${l};`:""}${c?`font-size:${d(c)};`:""}`,v=`switch-tile ${n?"smart":""} ${a?"on":""}`,g="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),m="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),f=n?"var(--switch-on-green, #00c853)":"var(--switch-on-yellow, #ffc107)",_="var(--chip-background-color, rgba(0,0,0,0.06))",b=a?f:"var(--secondary-text-color)",y=i=>{"function"==typeof(null==t?void 0:t._onSwitchAction)&&t._onSwitchAction(i,e)},w=(null==e?void 0:e.glow_mode)||"static",$=n?Qt:Jt,{style:x,overlay:A}=te($,w,a&&"none"!==w);if(m){return R`
      <div class="tile-wrap">
        <div class="glow-under" style=${x}>${A}</div>
        <ha-control-button
          class=${`switch-tile-btn ${n?"smart":""} ${a?"on":""}`}
          @action=${y}
          .actionHandler=${Yt({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
          role="button" tabindex="0"
        >
          <div class="tile-inner">
            ${g?R`<ha-chip style=${`--ha-chip-background-color:${_};--chip-background-color:${_};--ha-chip-text-color:${b};color:${b};font-weight:600;`}>
                  ${o?R`<ha-icon .icon=${o} style=${`margin-right:6px;${u}color:${b};`}></ha-icon>`:U}
                  ${r||i}
                </ha-chip>`:R`
                  ${o?R`<ha-icon class="switch-icon" .icon=${o} style=${`${u}${a?`color:${f};`:""}`}></ha-icon>`:U}
                  ${r?R`<div class="name" style=${`${p}${a?`color:${f};`:""}`}>${r}</div>`:U}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return R`
    <div class="tile-wrap ${v}"
         @action=${y}
         .actionHandler=${Yt({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under" style=${x}>${A}</div>
      <div class="tile-inner">
        ${g?R`<ha-chip style=${`--ha-chip-background-color:${_};--chip-background-color:${_};--ha-chip-text-color:${b};color:${b};font-weight:600;`}>
              ${o?R`<ha-icon .icon=${o} style=${`margin-right:6px;${u}color:${b};`}></ha-icon>`:U}
              ${r||i}
            </ha-chip>`:R`
              ${o?R`<ha-icon class="switch-icon" .icon=${o} style=${`${u}${a?`color:${f};`:""}`}></ha-icon>`:U}
              ${r?R`<div class="name" style=${`${p}${a?`color:${f};`:""}`}>${r}</div>`:U}
            `}
      </div>
    </div>
  `}(t,e)))}</div>
      ${s}
    </div>
  `}(t,e,i)))}`:U}const oe=a`
  :host { 
    display:block; 
    /* Chip styling variables */
    --chip-padding: 2px 2px;
    --chip-text-font-weight: 700;
    --chip-text-font-size: var(--chip-font-size, 12px);
    --chip-background-color: rgba(0,0,0,0.06);
    --chip-border-radius: var(--ha-badge-border-radius, 999px);
    --chip-gap: 6px;
    
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
      z-index: var(--glow-z-index); 
      display:block; 
      /* keep simple: no clipping here so glow can extend beyond the tile */
      border-radius: var(--tile-border-radius);
    }
    .tile-wrap .glow-under .glow-overlay { 
      position: absolute; 
      inset: -6px; 
      border-radius: inherit; 
      pointer-events: none; 
      mix-blend-mode: screen; 
      opacity: 0.95; 
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
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  
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

  /* Animations */
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes glowPulse { 0% { box-shadow: 0 10px 20px var(--pulse-weak); } 50% { box-shadow: 0 28px 56px var(--pulse-strong); } 100% { box-shadow: 0 10px 20px var(--pulse-weak); } }
  @keyframes cardPulse { 0% { box-shadow: 0 10px 30px var(--panel-shadow-color); } 50% { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); } 100% { box-shadow: 0 10px 30px var(--panel-shadow-color); } }

  .clickable { cursor: pointer; }
`,re=a`
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
    top: 24px; 
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
`,ne=a`
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

  .hover-lift:hover {

  .hover-scale:hover {
    /* Removed custom hover transforms to stick with native HA hover behavior */

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
`,ae=a`
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
  .main-name { 
    position: absolute; 
    left: var(--tile-padding-large); 
    bottom: var(--tile-padding); 
    font-weight: 500; 
    font-size: 14px; 
    color: var(--primary-text-color); 
  }

  .main-tile.on { border-radius: var(--tile-border-radius); box-shadow: var(--tile-shadow-active); }

  /* Container for main tile to allow rendering glow under / around the control */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  /* Generic tile-wrap used by main and switch tiles. Glow is rendered in the
    .glow-under sibling and therefore always sits beneath the tile control
    (which has higher z-index), but above the card background so it can
    overflow visually without floating over neighboring tiles. */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  .tile-wrap .glow-under { position: absolute; inset: 0; pointer-events: none; z-index: var(--glow-z-index); display:block; }
  .tile-wrap .glow-under .glow-overlay { position: absolute; inset: -6px; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }
  .tile-wrap > .main-tile,
  .tile-wrap > .switch-tile,
  .tile-wrap > .switch-tile-btn,
  .tile-wrap > ha-control-button { position: relative; z-index: var(--tile-z-index); }
`,se=a`
  .ac-tile.on { border-radius: var(--tile-border-radius); }
  .ac-tile::part(button) { border-radius: var(--tile-border-radius); }
  .ac-tile.on { box-shadow: var(--tile-shadow-active); }
  .ac-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }
`,le=a`
  .thermostat-tile.on { border-radius: var(--tile-border-radius); }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on { box-shadow: var(--tile-shadow-active); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }
  .temperature-chip-container { 
    position: absolute; 
    right: var(--tile-padding); 
    top: var(--tile-padding); 
    z-index: var(--chip-z-index); 
    display:inline-flex; 
    align-items:center; 
  }
  .temperature-chip-container ha-chip { font-size: var(--chip-text-font-size); }
`,ce=a`
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
  .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }
  .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }
`;var de;function he(t){try{Lt(window,"haptic",t)}catch(t){}}let ue=de=class extends it{constructor(){super(...arguments),this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map}static getStubConfig(){return{title:"Living room",tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(t){if(!t)throw new Error("Configuration is required");this._validateConfig(t);const e=(i=t||{},JSON.parse(JSON.stringify(i)));var i;Array.isArray(e.headers)||(e.headers=[]),Array.isArray(e.switch_rows)||(e.switch_rows=[]),Array.isArray(e.cards)||(e.cards=[]),this._clearRowCardCache(),this._config=e}_validateConfig(t){const e=[];t.headers&&Array.isArray(t.headers)&&t.headers.forEach(((t,i)=>{if(t){if(t.ac&&(t.ac.entity?"string"==typeof t.ac.entity&&t.ac.entity.includes(".")||e.push(`Header ${i+1}: AC entity '${t.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):e.push(`Header ${i+1}: AC tile requires an 'entity' field`)),t.thermostat&&(t.thermostat.entity?"string"==typeof t.thermostat.entity&&t.thermostat.entity.includes(".")||e.push(`Header ${i+1}: Thermostat entity '${t.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):e.push(`Header ${i+1}: Thermostat tile requires an 'entity' field`)),t.main){const o=t.main;!!(o.main_name||o.main_icon||o.tap_entity||o.light_group_entity||o.temp_sensor||o.humidity_sensor||Array.isArray(o.chips)&&o.chips.length>0)||e.push(`Header ${i+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((t=>{const r=o[t];!r||"string"==typeof r&&r.includes(".")||e.push(`Header ${i+1}: Main tile ${t} '${r}' must be a valid entity ID`)}))}!t.ac&&!t.thermostat||t.main||e.push(`Header ${i+1}: AC and Thermostat tiles require a 'main' configuration block`)}else e.push(`Header ${i+1}: Header configuration cannot be empty`)})),t.switch_rows&&Array.isArray(t.switch_rows)&&t.switch_rows.forEach(((t,i)=>{if(!t)return void e.push(`Switch row ${i+1}: Switch row configuration cannot be empty`);const o=Array.isArray(t)?t:Array.isArray(t.row)?t.row:[];Array.isArray(o)&&0!==o.length?o.forEach(((t,o)=>{t&&t.entity?"string"==typeof t.entity&&t.entity.includes(".")||e.push(`Switch row ${i+1}, item ${o+1}: Switch entity '${t.entity}' must be a valid entity ID`):e.push(`Switch row ${i+1}, item ${o+1}: Switch item requires an 'entity' field`)})):e.push(`Switch row ${i+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([i,o])=>{const r=t[i];if(null!=r){const t=Number(r);(!Number.isFinite(t)||t<0)&&e.push(`${o} must be a positive number, got: ${r}`)}})),void 0!==t.card_shadow_intensity&&null!==t.card_shadow_intensity){const i=Number(t.card_shadow_intensity);Number.isFinite(i)&&(i<0||i>1)&&e.push(`Card shadow intensity must be between 0 and 1, got: ${i}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((i=>{const o=t[i];if(o&&"string"==typeof o){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(o)||e.push(`${i.replace(/_/g," ")} '${o}' is not a valid color format`)}})),e.length>0)throw new Error(`Invalid space-hub-card configuration:\n${e.map((t=>`• ${t}`)).join("\n")}`)}getCardSize(){return 6}render(){var t,e,i,o,r,n,a,s,l,c,d;if(!this._config)return U;const h=de.getStubConfig(),u=this._config||{},p={title:null!==(t=u.title)&&void 0!==t?t:h.title,tile_height:null!==(e=u.tile_height)&&void 0!==e?e:h.tile_height,chip_icon_size:null!==(i=u.chip_icon_size)&&void 0!==i?i:h.chip_icon_size,main_icon_size:null!==(o=u.main_icon_size)&&void 0!==o?o:h.main_icon_size,chip_font_size:null!==(r=u.chip_font_size)&&void 0!==r?r:h.chip_font_size,card_shadow_color:null!==(n=u.card_shadow_color)&&void 0!==n?n:h.card_shadow_color,card_shadow_intensity:null!==(a=u.card_shadow_intensity)&&void 0!==a?a:h.card_shadow_intensity,unavailable_pulse_color:null!==(s=u.unavailable_pulse_color)&&void 0!==s?s:h.unavailable_pulse_color,headers:Array.isArray(u.headers)&&u.headers.length?u.headers:[],switch_rows:Array.isArray(u.switch_rows)?u.switch_rows:u.switch_rows||[],cards:Array.isArray(u.cards)?u.cards:[],tap_action:u.tap_action,hold_action:u.hold_action,double_tap_action:u.double_tap_action},v=Array.isArray(p.headers)&&p.headers.length?p.headers:[],g=Number(p.tile_height)||Number(h.tile_height)||80,m=Number(p.chip_icon_size)||Number(h.chip_icon_size)||14,f=Number(p.chip_font_size)||Number(h.chip_font_size)||12,_=Math.max(f+10,20),b=Math.round(.625*g),y=v[0]||{},w=Number(null!==(l=null==y?void 0:y.main_icon_size)&&void 0!==l?l:null==y?void 0:y.maicon_size),$=Number.isFinite(w)&&w>0?w:Number(p.main_icon_size)||Number(h.main_icon_size)||48,x=this._rgbaFromColor(p.card_shadow_color||h.card_shadow_color,null!==(c=p.card_shadow_intensity)&&void 0!==c?c:h.card_shadow_intensity),A=p.unavailable_pulse_color||h.unavailable_pulse_color||"#ff3b30",C=this._hasAnyUnavailable(p,v),E=this._rgbaFromColor(A,.18),k=this._rgbaFromColor(A,.36);return R`
      <ha-card class=${C?"unavailable":""}
               style=${`--panel-shadow-color:${C?E:x}; --unavail-weak:${E}; --unavail-strong:${k}`}
               .header=${(null===(d=this._config)||void 0===d?void 0:d.title)||void 0}>
        <div class="metrics" style=${`--tile-h:${g}px; --chip-size:${_}px; --chip-icon-size:${m}px; --main-icon-size:${$}px; --chip-font-size:${f}px; --ac-thermostat-icon:${b}px;`}>
          <div class="root">
            ${v.map((t=>this._renderHeaderRow(t)))}
            ${ie(this,p.switch_rows)}
            ${Array.isArray(p.cards)&&p.cards.length?R`
                  <div class="extra-cards">
                    ${p.cards.map(((t,e)=>this._renderEmbeddedRowCard(t,`standalone-card-${e}`)))}
                  </div>
                `:U}
          </div>
        </div>
      </ha-card>
    `}updated(t){super.updated(t),t.has("hass")&&this._rowCardElements.forEach((t=>{t&&(t.hass=this.hass)}))}_renderHeaderRow(t){const e=t.main||{},i={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,glow_mode:e.glow_mode,light_group_entity:e.light_group_entity,name:e.main_name||e.name,icon:e.main_icon||e.icon,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,chips:Array.isArray(e.chips)?e.chips:[],tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},o=t.ac||{},r=t.thermostat||{},n=!!(null==o?void 0:o.entity),a=!!(null==r?void 0:r.entity),s=!(!e||!(e.main_name||e.name||e.light_group_entity||e.entity||e.main_icon||e.icon||e.temp_sensor||e.humidity_sensor||Array.isArray(e.chips)&&e.chips.length)),l=s&&n,c=s&&a;s||!n&&!a||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const d=R`
      <div class=${s?l||c?l&&c?"header-row":"header-row main-plus-one":"header-row only-main":l&&c?"header-row main-plus-one":"header-row only-main"}>
        ${s?ee(this,i):U}
        ${l?function(t,e,i){var o,r,n;const a=((null===(n=null===(r=null===(o=null==t?void 0:t.hass)||void 0===o?void 0:o.states)||void 0===r?void 0:r[e])||void 0===n?void 0:n.state)||"").toLowerCase(),s=!!a&&"off"!==a,{bg:l,icon:c}="function"==typeof(null==t?void 0:t._acChip)?t._acChip(a):{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"},d=`color:${"function"==typeof(null==t?void 0:t._acModeColor)?t._acModeColor(a):"gray"}; ${s?"animation:spin 1.5s linear infinite;":""}`,h=function(t){const e=(t||"").toLowerCase();return e&&"off"!==e?e.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:e.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:e.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:e.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:e.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(a),u=null!=i?i:"static",{style:p,overlay:v}=te(h,u,s);return R`
    <div class="tile-wrap">
      <div class="glow-under" style=${p}>${v}</div>
      <ha-control-button
        class="square ac-tile ${s?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onACAction)&&t._onACAction(i,e)}}
        .actionHandler=${Yt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class="chip chip-temperature-humidity" style=${`background:${l}`}> 
          <ha-icon .icon=${c} style="color:#fff"></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class="ac-fan" icon="mdi:fan" style=${d}></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,o.entity,o.glow_mode):U}
        ${c?function(t,e,i){var o,r,n,a,s,l,c,d;const h=null===(r=null===(o=null==t?void 0:t.hass)||void 0===o?void 0:o.states)||void 0===r?void 0:r[e],u="function"==typeof(null==t?void 0:t._fmtNumber)?t._fmtNumber.bind(t):t=>null==t?"—":String(t),p=u(null!==(l=null!==(a=null===(n=null==h?void 0:h.attributes)||void 0===n?void 0:n.temperature)&&void 0!==a?a:null===(s=null==h?void 0:h.attributes)||void 0===s?void 0:s.target_temp)&&void 0!==l?l:null===(c=null==h?void 0:h.attributes)||void 0===c?void 0:c.target_temperature,1)+"°",v=((null===(d=null==h?void 0:h.attributes)||void 0===d?void 0:d.hvac_action)||"").toLowerCase(),g=((null==h?void 0:h.state)||"").toLowerCase(),m="off"===g?"gray":"heating"===v||"heating"===g?"#ff7043":"#66bb6a",f="heating"===v,_=f?"var(--state-climate-heat-color, #ff7043)":"var(--chip-background-color, rgba(0,0,0,0.06))",b=f?"var(--primary-background-color, #fff)":"var(--secondary-text-color)",y="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),w=null!=i?i:"static",{style:$,overlay:x}=te(Xt,w,f);return R`
    <div class="tile-wrap">
      <div class="glow-under" style=${$}>${x}</div>
      <ha-control-button
        class="square thermostat-tile ${f?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onThermostatAction)&&t._onThermostatAction(i,e)}}
        .actionHandler=${Yt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${y?R`<ha-chip style=${`--ha-chip-background-color:${_};--chip-background-color:${_};--ha-chip-text-color:${b};color:${b};font-weight:700;`}>${p}</ha-chip>`:R`<div class="temperature-chip" style=${`background:${_};color:${b};`}><span class="thermostat-target">${p}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class="thermostat-icon" icon="mdi:thermostat" style=${`color:${m}`}></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,r.entity,r.glow_mode):U}
      </div>
    `;return d}_renderEmbeddedRowCard(t,e){if(!t||"object"!=typeof t)return U;this._rowCardConfigs.get(e)!==t&&(this._rowCardElements.delete(e),this._rowCardPromises.delete(e)),this._rowCardConfigs.set(e,t);const i=this._rowCardElements.get(e);if(i)return i.hass=this.hass,R`<div class="embedded-card">${i}</div>`;const o=this._createRowCardElement(e,t).then((t=>(t.hass=this.hass,R`${t}`))).catch((e=>{const i=e instanceof Error?e.message:String(e),o=this._createErrorCard(i,t);return o.hass=this.hass,R`${o}`}));return R`<div class="embedded-card">${_t(o,U)}</div>`}async _createRowCardElement(t,e){const i=this._rowCardPromises.get(t);if(i)return i;const o=(async()=>{const i=await this._getCardHelpers();let o;try{o=(null==i?void 0:i.createCardElement)?await i.createCardElement(e):jt(e)}catch(t){const i=t instanceof Error?t.message:String(t);o=this._createErrorCard(i,e)}return o.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(t),this._rowCardPromises.delete(t);const o=this._rowCardConfigs.get(t)||e;this._createRowCardElement(t,o).then((()=>this.requestUpdate()))})),this._rowCardElements.set(t,o),this._rowCardPromises.delete(t),o})();return this._rowCardPromises.set(t,o),o}_createErrorCard(t,e){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:t,origConfig:e}),i}catch(i){return jt({type:"hui-error-card",error:t,origConfig:e})}}async _getCardHelpers(){if(!this._helpersPromise){const t=window.loadCardHelpers;this._helpersPromise="function"==typeof t?t():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_toggleByDomain(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=t.split(".")[0],o=((null==e?void 0:e.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(t);else{const e="open"===o||"opening"===o?"close_cover":"open_cover";this.hass.callService("cover",e,{entity_id:t})}else{const e="locked"===o?"unlock":"lock";this.hass.callService("lock",e,{entity_id:t})}}_onMainAction(t,e,i,o,r){const n=t.detail&&t.detail.action||"tap";this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action)?Ft(this,this.hass,e,n):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?Ft(this,this.hass,this._config,n):"hold"===n?(he("medium"),this._openMoreInfo(o||i)):this._toggleGeneric(r||i)}_onACAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(he("medium"),this._openMoreInfo(e)):(he("success"),this._acToggle(e))}_onThermostatAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(he("medium"),this._openMoreInfo(e)):(he("success"),this._thermostatToggle(e))}_onSwitchAction(t,e){const i=t.detail&&t.detail.action||"tap";if(this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action))return void Ft(this,this.hass,e,i);const o=null==e?void 0:e.entity,r=(null==e?void 0:e.hold_entity)||o;"hold"===i?(he("medium"),this._openMoreInfo(r||o)):this._toggleGeneric(o)}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const o=this.hass.states[t];if(!o||""===o.state||"unknown"===o.state||"unavailable"===o.state)return"—"+(i||"");const r=Number(o.state);return Number.isFinite(r)?r.toFixed(e)+(i||""):String(o.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acModeColor(t){return t&&"off"!==t?t.includes("cool")?"#00aaff":t.includes("heat")?"#ff7043":t.includes("dry")?"#ffca28":t.includes("fan")?"#66bb6a":t.includes("auto")?"#26c6da":"var(--paper-item-icon-color)":"gray"}_acChip(t){return t&&"off"!==t?t.includes("cool")?{bg:"#00aaff",icon:"mdi:snowflake"}:t.includes("heat")?{bg:"#ff7043",icon:"mdi:fire"}:t.includes("dry")?{bg:"#ffca28",icon:"mdi:water-percent"}:t.includes("fan")?{bg:"#66bb6a",icon:"mdi:fan"}:t.includes("auto")?{bg:"#26c6da",icon:"mdi:autorenew"}:{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"}:{bg:"rgba(158,158,158,0.95)",icon:"mdi:power"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),o=!!i&&"off"!==i;this.hass.callService("climate",o?"turn_off":"turn_on",{entity_id:t})}_thermostatToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[o,r]=i.split(".");this.hass.callService(o,r,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const o=t.trim();if(o.startsWith("rgba(")||o.startsWith("rgb(")||o.startsWith("hsl(")||o.startsWith("var("))return o;const r=o.replace("#",""),n=t=>parseInt(t,16);if(3===r.length){return`rgba(${n(r[0]+r[0])},${n(r[1]+r[1])},${n(r[2]+r[2])},${i})`}if(r.length>=6){return`rgba(${n(r.slice(0,2))},${n(r.slice(2,4))},${n(r.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(t,e){const i=[],o=Array.isArray(e)?e:[e],r=t=>{t&&("string"==typeof t?i.push(t):Array.isArray(t)&&t.forEach((t=>r(t))))},n=t=>{t&&"object"==typeof t&&(r(t.entity),r(t.entity_id),r(t.entities),r(t.tap_entity),r(t.hold_entity),r(t.double_tap_entity),Array.isArray(t.cards)&&t.cards.forEach(n),Array.isArray(t.rows)&&t.rows.forEach(n),Array.isArray(t.columns)&&t.columns.forEach(n),Array.isArray(t.sections)&&t.sections.forEach(n),Array.isArray(t.widgets)&&t.widgets.forEach(n),Array.isArray(t.items)&&t.items.forEach(n),Array.isArray(t.elements)&&t.elements.forEach(n),t.card&&n(t.card),t.header&&n(t.header),t.footer&&n(t.footer))};o.forEach((t=>{const e=(null==t?void 0:t.main)||{},o={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,light_group_entity:e.light_group_entity,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,chips:Array.isArray(e.chips)?e.chips:[]},r=(null==t?void 0:t.ac)||{},n=(null==t?void 0:t.thermostat)||{};i.push(null==o?void 0:o.tap_entity,null==o?void 0:o.hold_entity,null==o?void 0:o.light_group_entity,null==o?void 0:o.temp_sensor,null==o?void 0:o.humidity_sensor),i.push(null==r?void 0:r.entity,null==n?void 0:n.entity),o.chips.forEach((t=>{i.push(null==t?void 0:t.entity,null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity)}))}));return(t.switch_rows||[]).forEach((t=>{var e;(Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[]).forEach((t=>{i.push(null==t?void 0:t.entity,null==t?void 0:t.hold_entity)}))})),Array.isArray(t.cards)&&t.cards.forEach((t=>n(t))),i}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=this._getAllCardEntities(t,e),o=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const r=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t];if(!r)return!0;const n=(r.state||"").toLowerCase();return o.has(n)}))}};ue.styles=[oe,re,ne,ae,se,le,ce],t([yt({attribute:!1})],ue.prototype,"hass",void 0),t([function(t){return yt({...t,state:!0})}()],ue.prototype,"_config",void 0),ue=de=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */)("space-hub-card")],ue),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"1.1.0"});try{const t=window;if(!t.__SPACE_HUB_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v1.1.0",e,i),t.__SPACE_HUB_CARD_LOGGED__=!0}}catch(t){}var pe=ue;export{ue as SpaceHubCard,pe as default};
