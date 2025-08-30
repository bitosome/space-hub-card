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
function t(t,e,i,o){var n,r=arguments.length,a=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(a=(r<3?n(a):r>3?n(e,i,a):n(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class r{constructor(t,e,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new r(i,t,o)},s=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,o))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const d=window,c=d.trustedTypes,h=c?c.emptyScript:"",u=d.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},v=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},b="finalized";class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Ep(i,e);void 0!==o&&(this._$Ev.set(o,i),t.push(o))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty(b))return!1;this[b]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(s(t))}else void 0!==t&&e.push(s(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const o=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,o)=>{i?t.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):o.forEach((i=>{const o=document.createElement("style"),n=e.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=i.cssText,t.appendChild(o)}))})(o,this.constructor.elementStyles),o}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=g){var o;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(o=i.converter)||void 0===o?void 0:o.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=o.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||v)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;m[b]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:m}),(null!==(l=d.reactiveElementVersions)&&void 0!==l?l:d.reactiveElementVersions=[]).push("1.6.3");const _=window,y=_.trustedTypes,w=y?y.createPolicy("lit-html",{createHTML:t=>t}):void 0,x=`lit$${(Math.random()+"").slice(9)}$`,$="?"+x,A=`<${$}>`,k=document,E=()=>k.createComment(""),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,C=Array.isArray,z="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,T=/>/g,H=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,M=/"/g,L=/^(?:script|style|textarea|title)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),R=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),j=new WeakMap,I=k.createTreeWalker(k,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const G=(t,e)=>{const i=t.length-1,o=[];let n,r=2===e?"<svg>":"",a=N;for(let e=0;e<i;e++){const i=t[e];let s,l,d=-1,c=0;for(;c<i.length&&(a.lastIndex=c,l=a.exec(i),null!==l);)c=a.lastIndex,a===N?"!--"===l[1]?a=P:void 0!==l[1]?a=T:void 0!==l[2]?(L.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=H):void 0!==l[3]&&(a=H):a===H?">"===l[0]?(a=null!=n?n:N,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?H:'"'===l[3]?M:O):a===M||a===O?a=H:a===P||a===T?a=N:(a=H,n=void 0);const h=a===H&&t[e+1].startsWith("/>")?" ":"";r+=a===N?i+A:d>=0?(o.push(s),i.slice(0,d)+"$lit$"+i.slice(d)+x+h):i+x+(-2===d?(o.push(void 0),e):h)}return[B(t,r+(t[i]||"<?>")+(2===e?"</svg>":"")),o]};class W{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const a=t.length-1,s=this.parts,[l,d]=G(t,e);if(this.el=W.createElement(l,i),I.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=I.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(x)){const i=d[r++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(x),e=/([.?@])?(.*)/.exec(i);s.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?X:q})}else s.push({type:6,index:n})}for(const e of t)o.removeAttribute(e)}if(L.test(o.tagName)){const t=o.textContent.split(x),e=t.length-1;if(e>0){o.textContent=y?y.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],E()),I.nextNode(),s.push({type:2,index:++n});o.append(t[e],E())}}}else if(8===o.nodeType)if(o.data===$)s.push({type:2,index:n});else{let t=-1;for(;-1!==(t=o.data.indexOf(x,t+1));)s.push({type:7,index:n}),t+=x.length-1}n++}}static createElement(t,e){const i=k.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,o){var n,r,a,s;if(e===R)return e;let l=void 0!==o?null===(n=i._$Co)||void 0===n?void 0:n[o]:i._$Cl;const d=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==d&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===d?l=void 0:(l=new d(t),l._$AT(t,i,o)),void 0!==o?(null!==(a=(s=i)._$Co)&&void 0!==a?a:s._$Co=[])[o]=l:i._$Cl=l),void 0!==l&&(e=Y(t,l._$AS(t,e.values),l,o)),e}class F{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:k).importNode(i,!0);I.currentNode=n;let r=I.nextNode(),a=0,s=0,l=o[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new V(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new Q(r,this,t)),this._$AV.push(e),l=o[++s]}a!==(null==l?void 0:l.index)&&(r=I.nextNode(),a++)}return I.currentNode=k,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class V{constructor(t,e,i,o){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=null===(n=null==o?void 0:o.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),S(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==R&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>C(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=W.createElement(B(o.h,o.h[0]),this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new F(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new W(t)),e}T(t){C(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new V(this.k(E()),this.k(E()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,i,o,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!S(t)||t!==this._$AH&&t!==R,r&&(this._$AH=t);else{const o=t;let a,s;for(t=n[0],a=0;a<n.length-1;a++)s=Y(this,o[i+a],e,a),s===R&&(s=this._$AH[a]),r||(r=!S(s)||s!==this._$AH[a]),s===D?t=D:t!==D&&(t+=(null!=s?s:"")+n[a+1]),this._$AH[a]=s}r&&!o&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const K=y?y.emptyScript:"";class Z extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class X extends q{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Y(this,t,e,0))&&void 0!==i?i:D)===R)return;const o=this._$AH,n=t===D&&o!==D||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==D&&(o===D||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Q{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const tt=_.litHtmlPolyfillSupport;null==tt||tt(W,V),(null!==(f=_.litHtmlVersions)&&void 0!==f?f:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;class ot extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var o,n;const r=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let a=r._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=a=new V(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}ot.finalized=!0,ot._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:ot});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:ot}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
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
var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;var lt="[^\\s]+";function dt(t,e){for(var i=[],o=0,n=t.length;o<n;o++)i.push(t[o].substr(0,e));return i}var ct=function(t){return function(e,i){var o=i[t].map((function(t){return t.toLowerCase()})),n=o.indexOf(e.toLowerCase());return n>-1?n:null}};function ht(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];for(var o=0,n=e;o<n.length;o++){var r=n[o];for(var a in r)t[a]=r[a]}return t}var ut=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pt=["January","February","March","April","May","June","July","August","September","October","November","December"],vt=dt(pt,3),gt={dayNamesShort:dt(ut,3),dayNames:ut,monthNamesShort:vt,monthNames:pt,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},bt=(ht({},gt),function(t){return+t-1}),mt=[null,"[1-9]\\d?"],ft=[null,lt],_t=["isPm",lt,function(t,e){var i=t.toLowerCase();return i===e.amPm[0]?0:i===e.amPm[1]?1:null}],yt=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var i=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?i:-i}return 0}];ct("monthNamesShort"),ct("monthNames");var wt,xt;!function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}(),function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(wt||(wt={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(xt||(xt={}));var $t=["closed","locked","off"],At=function(t,e,i,o){o=o||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return n.detail=i,t.dispatchEvent(n),n},kt=function(t){At(window,"haptic",t)},Et=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(kt("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&At(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),At(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,n=function(t){return t.substr(0,t.indexOf("."))}(e),r="group"===n?"homeassistant":n;switch(n){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(r,o,{entity_id:e})})(t,e,$t.includes(t.states[e].state))}(e,i.entity),kt("success"));break;case"call-service":if(!o.service)return void kt("failure");var n=o.service.split(".",2);e.callService(n[0],n[1],o.service_data),kt("success");break;case"fire-dom-event":At(t,"ll-custom",o)}},St=function(t,e,i,o){var n;"double_tap"===o&&i.double_tap_action?n=i.double_tap_action:"hold"===o&&i.hold_action?n=i.hold_action:"tap"===o&&i.tap_action&&(n=i.tap_action),Et(t,e,i,n)};const Ct="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class zt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ct?"100px":"50px",height:Ct?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?At(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,At(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,At(t,"action",{action:"double_tap"})):At(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-boilerplate",zt);const Nt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-boilerplate"))return t.querySelector("action-handler-boilerplate");const e=document.createElement("action-handler-boilerplate");return t.appendChild(e),e})();i&&i.bind(t,e)},Pt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{update(t,[e]){return Nt(t.element,e),R}render(t){}});const Tt={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},Ht={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const Ot={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function Mt(t,e="static",i=!1){if(!t||"none"===e||!i)return{style:"",overlay:D};return{style:`${`--pulse-weak: ${t.weak}; --pulse-strong: ${t.strong};`} ${"pulse"===e?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${t.strong}), 0 6px 18px var(--pulse-weak, ${t.weak});`}`,overlay:U`<div class="glow-overlay" aria-hidden="true"></div>`}}function Lt(t,e){var i;const o=(null==e?void 0:e.icon)||"mdi:sofa-outline",n=(null==e?void 0:e.name)||"",r="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.temp_sensor,2,"°"):"—°",a="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(null==e?void 0:e.humidity_sensor,2,"%"):"—%",s=!(!(null==e?void 0:e.double_tap_action)&&!(null===(i=null==t?void 0:t._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==e?void 0:e.light_group_entity),d=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),c=l&&"function"==typeof(null==t?void 0:t._isOn)&&t._isOn(d),h=c?"linear-gradient(135deg,#ffcf57,#ffb200)":"rgba(0,0,0,0.06)",u=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),p=(null==e?void 0:e.glow_mode)||(!1===(null==e?void 0:e.glow_effect)?"none":"static"),v=!!(null==e?void 0:e.light_group_entity)&&c&&"none"!==p,g=Tt,{style:b,overlay:m}=Mt(g,p,v),f=Array.isArray(null==e?void 0:e.badges)?e.badges.find((t=>"illuminance"===String((null==t?void 0:t.type)||"").toLowerCase())):void 0,_=f?function(t,e){const i=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),o=(null==e?void 0:e.icon)||"mdi:brightness-5",n="function"==typeof(null==t?void 0:t._fmt2)?t._fmt2(i,0," lx"):"— lx";return U`
  <div class="illum-badge">
      <ha-icon .icon=${o}></ha-icon>
      <span class="illum-val">${n}</span>
    </div>
  `}(t,f):D;return U`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${b}>${m}</div>
      <ha-control-button
        class="main-tile ${v?"on glow":c?"on":""}"
        @action=${i=>{"function"==typeof(null==t?void 0:t._onMainAction)&&t._onMainAction(i,e,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity,u)}}
        .actionHandler=${Pt({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${o}></ha-icon>
        <div class="chip-tr" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="tval">${r}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="hval">${a}</span>
        </div>
        ${_}
        <div class="main-badges-br" data-role="badges">
      ${l?U`<div class="badge" style=${`background:${h}`}>
                <ha-icon .icon=${"mdi:lightbulb"} style=${"color:"+(c?"#ffffff":"var(--secondary-text-color)")}></ha-icon>
              </div>`:D}
          ${Array.isArray(null==e?void 0:e.badges)&&e.badges.length?U`${e.badges.filter((t=>"illuminance"!==String((null==t?void 0:t.type)||"").toLowerCase())).map((e=>function(t,e){var i,o,n,r;const a=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),s=String((null==e?void 0:e.type)||"").toLowerCase(),l=null==e?void 0:e.icon,d=a&&(null==t?void 0:t.hass)?t.hass.states[a]:void 0,c=((null==d?void 0:d.state)||"").toLowerCase();let h="rgba(0,0,0,0.06)",u=l||"mdi:checkbox-blank-circle-outline",p="var(--secondary-text-color)";const v=(t=>{var e,i;return!!t&&("lock"===s||null!==(e=null==a?void 0:a.startsWith("lock."))&&void 0!==e&&e?"locked"===t:null!==(i=null==a?void 0:a.startsWith("cover."))&&void 0!==i&&i?"closed"!==t&&"closing"!==t:"on"===t||"open"===t||"opening"===t)})(c);if("lock"===s||null!==(i=null==a?void 0:a.startsWith("lock."))&&void 0!==i&&i)u=l||(v?"mdi:lock":"mdi:lock-open-variant"),v&&(h="#66bb6a",p="#ffffff");else if("gate"===s||null!==(o=null==a?void 0:a.startsWith("cover."))&&void 0!==o&&o||null!==(n=null==a?void 0:a.startsWith("binary_sensor."))&&void 0!==n&&n){const t=(a||"").split(".")[0],e=((null===(r=null==d?void 0:d.attributes)||void 0===r?void 0:r.device_class)||"").toLowerCase();if("gate"===s||"cover"===t||"binary_sensor"===t&&/(door|window|garage|opening|gate)/.test(e)){const e=c;let i=!1;i="cover"===t?"open"===e||"opening"===e||"closed"!==e&&"closing"!==e&&"unknown"!==e&&"unavailable"!==e:"binary_sensor"===t?"on"===e||"open"===e||"opening"===e:"open"===e||"opening"===e||"on"===e,u=l||(i?"mdi:gate-open":"mdi:gate"),i?(h="#e53935",p="#ffffff"):(h="#66bb6a",p="#ffffff")}}else u=l||(v?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"),v&&(h="#42a5f5",p="#ffffff");return U`
  <div class="badge"
         style=${`background:${h}`}
     >
      <ha-icon .icon=${u} style=${`color:${p}`}></ha-icon>
    </div>
  `}(t,e)))}`:D}
        </div>
        <div class="main-name">${n}</div>
  </ha-control-button>
    </div>
  `}function Ut(t,e){return e&&e.length?U`${e.map((e=>{const i=e,o=Array.isArray(e)?e:Array.isArray(null==i?void 0:i.row)?i.row:[],n=Math.max(1,o.length||1);return U`<div class="switch-row" style=${`--cols:${n}`}>${o.map((e=>function(t,e){const i=(null==e?void 0:e.entity)||"",o=(null==e?void 0:e.icon)||"",n=(null==e?void 0:e.name)||"",r="smart_plug"===String((null==e?void 0:e.type)||"switch").toLowerCase(),a="function"==typeof(null==t?void 0:t._isOn)&&t._isOn(i),s=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"])||(null==e?void 0:e.icon_size),l=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),d=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),c=t=>null==t||""===t?"":String(t).match(/px|em|rem|%$/)?String(t):`${Number(t)}px`,h=c(s),u=h?`width:${h};height:${h};--mdc-icon-size:${h};`:"",p=`${l?`font-weight:${l};`:""}${d?`font-size:${c(d)};`:""}`,v=`switch-tile ${r?"smart":""} ${a?"on":""}`,g="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),b="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),m=r?"var(--switch-on-green, #00c853)":"var(--switch-on-yellow, #ffc107)",f="var(--chip-background-color, rgba(0,0,0,0.06))",_=a?m:"var(--secondary-text-color)",y=i=>{"function"==typeof(null==t?void 0:t._onSwitchAction)&&t._onSwitchAction(i,e)},w=(null==e?void 0:e.glow_mode)||(!1===(null==e?void 0:e.glow_effect)?"none":"static"),x=r?Ht:Tt,{style:$,overlay:A}=Mt(x,w,a&&"none"!==w);if(b){return U`
      <div class="tile-wrap">
        <div class="glow-under" style=${$}>${A}</div>
        <ha-control-button
          class=${`switch-tile-btn ${r?"smart":""} ${a?"on":""}`}
          @action=${y}
          .actionHandler=${Pt({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
          role="button" tabindex="0"
        >
          <div class="tile-inner">
            ${g?U`<ha-chip style=${`--ha-chip-background-color:${f};--chip-background-color:${f};--ha-chip-text-color:${_};color:${_};font-weight:600;`}>
                  ${o?U`<ha-icon .icon=${o} style=${`margin-right:6px;${u}color:${_};`}></ha-icon>`:D}
                  ${n||i}
                </ha-chip>`:U`
                  ${o?U`<ha-icon class="switch-icon" .icon=${o} style=${`${u}${a?`color:${m};`:""}`}></ha-icon>`:D}
                  ${n?U`<div class="name" style=${`${p}${a?`color:${m};`:""}`}>${n}</div>`:D}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return U`
    <div class="tile-wrap ${v}"
         style=${$}
         @action=${y}
         .actionHandler=${Pt({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under">${A}</div>
      <div class="tile-inner">
        ${g?U`<ha-chip style=${`--ha-chip-background-color:${f};--chip-background-color:${f};--ha-chip-text-color:${_};color:${_};font-weight:600;`}>
              ${o?U`<ha-icon .icon=${o} style=${`margin-right:6px;${u}color:${_};`}></ha-icon>`:D}
              ${n||i}
            </ha-chip>`:U`
              ${o?U`<ha-icon class="switch-icon" .icon=${o} style=${`${u}${a?`color:${m};`:""}`}></ha-icon>`:D}
              ${n?U`<div class="name" style=${`${p}${a?`color:${m};`:""}`}>${n}</div>`:D}
            `}
      </div>
    </div>
  `}(t,e)))}</div>`}))}`:D}const Rt=a`
  :host { display:block; }
  .metrics, .metrics * { box-sizing: border-box; }

  .metrics { --ac-therm-icon: 50px; }

  ha-card {
    border-radius: var(--ha-card-border-radius, 16px);
    background: var(--ha-card-background, var(--card-background-color));
    box-shadow: 0 10px 30px var(--panel-shadow-color);
    padding: 12px;
    color: var(--primary-text-color);
    transition: filter 0.12s ease, box-shadow 0.12s ease;
    position: relative;
    overflow: visible;
  }
  ha-card.unavailable { animation: cardPulse 2.8s ease-in-out infinite; }

  .root { display: grid; gap: 12px; }

  /* Shared visual atoms */
  .badge {
    width: var(--badge); height: var(--badge);
    border-radius: var(--ha-badge-border-radius, 999px);
    display:flex; align-items:center; justify-content:center;
    line-height:0; background: rgba(0,0,0,0.06);
  }
  .badge ha-icon { --mdc-icon-size: var(--badge-icon); width: var(--badge-icon); height: var(--badge-icon); display:block; margin:0; padding:0; line-height:0; pointer-events:none; color: var(--secondary-text-color); }

  /* Ensure native HA elements pick up theme border radiuses */
  ha-chip, ha-badge { border-radius: var(--ha-chip-border-radius, 999px); }

  .chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display: inline-flex; align-items: center; gap: 2px; padding: 2px 6px; border-radius: var(--ha-chip-border-radius, 999px); background: rgba(0,0,0,0.06); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap; }
  .chip-tr ha-icon { width: 10px; height: 10px; line-height:0; --mdc-icon-size:10px; }
  .chip-tr .tval, .chip-tr .hval { font-weight: 700; }

  /* Shared tile container for AC/Thermostat */
  .square { position: relative; width: var(--tile-h); height: var(--tile-h); aspect-ratio: 1/1; border-radius: var(--ha-card-border-radius, 12px); background: var(--ha-card-background, var(--card-background-color)); backdrop-filter: blur(10px); transition: transform 0.18s ease, box-shadow 0.28s ease, filter 0.12s ease; box-shadow: 0 6px 18px rgba(0,0,0,0.10); overflow: visible; display: grid; place-items: center; }
  .square::part(button) { width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box; border-radius: var(--ha-card-border-radius, 12px); }
  .square:hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .center-xy { position: static; transform: none; display:flex; align-items:center; justify-content:center; pointer-events:none; user-select:none; line-height:0; }
  .ac-fan, .thermo-icon { width: var(--ac-therm-icon); height: var(--ac-therm-icon); --mdc-icon-size: var(--ac-therm-icon); display:block; margin:0; padding:0; line-height:0; transform-origin: 50% 50%; pointer-events:none; }

  /* Header row grid */
  .header-row { display:grid; grid-template-columns: 1fr auto auto; gap:12px; align-items:stretch; }
  .header-row.only-main { grid-template-columns: 1fr; }
  .header-row.main-plus-one { grid-template-columns: 1fr auto; }
  .header-row > * { height: var(--tile-h); }

  /* Animations */
  @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes activePulse { 0% { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); } 45% { box-shadow: 0 28px 56px var(--pulse-strong); transform: translateY(-1px) scale(1.02); } 100% { box-shadow: 0 10px 20px var(--pulse-weak); transform: translateY(0) scale(1); } }
  @keyframes heatingGlow { 0% { box-shadow: 0 6px 18px rgba(0,0,0,0.10); } 50% { box-shadow: 0 0 30px rgba(255,112,67,0.32); } 100% { box-shadow: 0 6px 18px rgba(0,0,0,0.10); } }
  @keyframes glowPulse { 0% { box-shadow: 0 10px 20px var(--pulse-weak); } 50% { box-shadow: 0 28px 56px var(--pulse-strong); } 100% { box-shadow: 0 10px 20px var(--pulse-weak); } }
  @keyframes cardPulse { 0% { box-shadow: 0 10px 30px var(--panel-shadow-color); } 50% { box-shadow: 0 10px 30px var(--panel-shadow-color), 0 0 36px var(--unavail-strong); } 100% { box-shadow: 0 10px 30px var(--panel-shadow-color); } }

  .clickable { cursor: pointer; }
`,Dt=a`
  .main-tile { position: relative; width: 100%; height: var(--tile-h); border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 6px 18px rgba(0,0,0,0.10); background: var(--ha-card-background, var(--card-background-color)); overflow: hidden; transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; }
  .main-tile::part(button) { width: 100%; height: 100%; display:block; padding:0; margin:0; box-sizing:border-box; border-radius: var(--ha-card-border-radius, 12px); }
  .main-tile:hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .main-icon { position: absolute; left: 12px; top: 8px; width: var(--main-icon-size, 48px); height: var(--main-icon-size, 48px); line-height: 0; --mdc-icon-size: var(--main-icon-size, 48px); color: var(--primary-text-color); }

  .main-badges-br { position: absolute; right: 8px; bottom: 8px; z-index: 3; display:inline-flex; align-items:center; justify-content:flex-end; gap:6px; flex-wrap:wrap; max-width: calc(100% - 16px); }
  .main-name { position: absolute; left: 12px; bottom: 8px; font-weight: 500; font-size: 14px; color: var(--primary-text-color); }

  /* Glow variant applies a subtle pulsing shadow when active. Pulse colors are
    provided by the tile via --pulse-weak / --pulse-strong variables (see
    src/tiles/*.ts which set these when appropriate). */
  .main-tile.on { border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 18px 40px var(--pulse-strong, rgba(0,0,0,0.18)), 0 6px 18px var(--pulse-weak, rgba(0,0,0,0.10)); }
  .main-tile.on.glow { animation: glowPulse 2.4s ease-in-out infinite; }

  /* Fallback overlay to ensure glow is visible even when box-shadow is clipped
    or overridden by the host environment. Uses the same pulse variables. */
  .main-tile .glow-overlay { position: absolute; inset: 0; pointer-events: none; border-radius: inherit; background: transparent; box-shadow: 0 18px 40px var(--pulse-strong, rgba(255,193,7,0.30)), 0 6px 18px var(--pulse-weak, rgba(255,193,7,0.16)); opacity: 0.95; mix-blend-mode: screen; }
  .main-tile.on.glow .glow-overlay { animation: glowPulse 2.4s ease-in-out infinite; }

  /* Generic container appended at the end of tile templates to render overlays
    such that the glow visually appears above the tile content but beneath
    badges and other controls with higher z-index. */
  .tile-end { position: absolute; inset: 0; pointer-events: none; z-index: 2; display: block; }
  .tile-end .glow-overlay { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }

  /* Container for main tile to allow rendering glow under / around the control */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  /* Generic tile-wrap used by main and switch tiles. Glow is rendered in the
    .glow-under sibling and therefore always sits beneath the tile control
    (which has higher z-index), but above the card background so it can
    overflow visually without floating over neighboring tiles. */
  .tile-wrap { position: relative; width: 100%; height: var(--tile-h); display:block; }
  .tile-wrap .glow-under { position: absolute; inset: 0; pointer-events: none; z-index: 1; display:block; }
  .tile-wrap .glow-under .glow-overlay { position: absolute; inset: -6px; border-radius: inherit; pointer-events: none; mix-blend-mode: screen; opacity: 0.95; }
  .tile-wrap > .main-tile,
  .tile-wrap > .switch-tile,
  .tile-wrap > .switch-tile-btn,
  .tile-wrap > ha-control-button { position: relative; z-index: 2; }

  /* place illuminance badge beneath the temp/humidity chip (moved closer) */
  .illum-badge { position: absolute; right: 8px; top: 24px; z-index: 3; display: inline-flex; align-items: center; gap: 6px; padding: 2px 8px; border-radius: var(--ha-chip-border-radius, 999px); background: rgba(0,0,0,0.06); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height: 1; white-space: nowrap; }
  .illum-badge ha-icon { width: 12px; height: 12px; line-height:0; --mdc-icon-size:12px; }
`,jt=a`
  .ac-tile.on { border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 18px 40px var(--pulse-strong, rgba(0,170,255,0.30)), 0 6px 18px var(--pulse-weak, rgba(0,170,255,0.16)); animation: glowPulse 2.4s ease-in-out infinite; }
  .ac-tile::part(button) { border-radius: var(--ha-card-border-radius, 12px); }
  .badge-tr { position: absolute; right: 8px; top: 8px; z-index: 3; }
`,It=a`
  .thermo-tile.on { border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 18px 40px var(--pulse-strong, rgba(255,112,67,0.30)), 0 6px 18px var(--pulse-weak, rgba(255,112,67,0.16)); animation: glowPulse 2.4s ease-in-out infinite; }
  .thermo-tile::part(button) { border-radius: var(--ha-card-border-radius, 12px); }
  .temp-chip-tr { position: absolute; right: 8px; top: 8px; z-index: 3; display:inline-flex; align-items:center; }
  .temp-pill { display:inline-flex; align-items:center; justify-content:center; padding: 0 6px; border-radius: var(--ha-chip-border-radius, 999px); background: var(--chip-background-color, rgba(0,0,0,0.06)); font-size: var(--chip-font-size, 12px); color: var(--secondary-text-color); line-height:1; white-space:nowrap; font-weight:700; max-width: calc(var(--tile-h) - 16px); min-height: var(--badge); }
  .temp-chip-tr ha-chip { font-size: var(--chip-font-size, 12px); }
`,Bt=a`
  .switch-row { display:grid; grid-template-columns: repeat(var(--cols,3), 1fr); gap: 12px; }
  .switch-tile-btn { height: var(--tile-h); width: 100%; display: grid; place-items: center; position: relative; overflow: visible; color: var(--secondary-text-color); background: var(--ha-card-background, var(--card-background-color)); border-radius: var(--ha-card-border-radius, 12px); box-shadow: 0 6px 18px rgba(0,0,0,0.10); transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; }
  .switch-tile-btn::part(button) { width: 100%; height: 100%; padding: 0; margin: 0; box-sizing: border-box; border-radius: var(--ha-card-border-radius, 12px); background: inherit; }
  .switch-tile-btn:not(.on):hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile-btn:not(.on):hover::part(button) { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }

  .switch-tile-btn.on { border-radius: var(--ha-card-border-radius, 12px); position: relative; --pulse-weak: rgba(255,193,7,0.16); --pulse-strong: rgba(255,193,7,0.30); box-shadow: 0 18px 40px rgba(255,193,7,0.30), 0 6px 18px rgba(255,193,7,0.16); will-change: box-shadow, filter; }
  .switch-tile-btn.on::part(button) { box-shadow: 0 18px 40px rgba(255,193,7,0.30), 0 6px 18px rgba(255,193,7,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile-btn.on:hover, .switch-tile-btn.on:hover > .tile-inner { border-radius: var(--ha-card-border-radius, 12px); transform: translateY(-1px); box-shadow: 0 18px 40px rgba(255,193,7,0.30) !important, 0 6px 18px rgba(255,193,7,0.16) !important; }
  .switch-tile-btn.on:hover::part(button) { border-radius: var(--ha-card-border-radius, 12px); transform: translateY(-1px); box-shadow: 0 18px 40px rgba(255,193,7,0.30) !important, 0 6px 18px rgba(255,193,7,0.16) !important; }

  .switch-tile-btn.smart.on { --pulse-weak: rgba(0,200,83,0.16); --pulse-strong: rgba(0,200,83,0.30); box-shadow: 0 18px 40px rgba(0,200,83,0.30), 0 6px 18px rgba(0,200,83,0.16); will-change: box-shadow, filter; }
  .switch-tile-btn.smart.on::part(button) { box-shadow: 0 18px 40px rgba(0,200,83,0.30), 0 6px 18px rgba(0,200,83,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile-btn.smart.on:hover, .switch-tile-btn.smart.on:hover > .tile-inner { border-radius: var(--ha-card-border-radius, 12px); transform: translateY(-1px); box-shadow: 0 18px 40px rgba(0,200,83,0.30) !important, 0 6px 18px rgba(0,200,83,0.16) !important; }
  .switch-tile-btn.smart.on:hover::part(button) { border-radius: var(--ha-card-border-radius, 12px); transform: translateY(-1px); box-shadow: 0 18px 40px rgba(0,200,83,0.30) !important, 0 6px 18px rgba(0,200,83,0.16) !important; }

  .switch-tile { position: relative; height: var(--tile-h); border-radius: var(--ha-card-border-radius, 12px); background: var(--ha-card-background, var(--card-background-color)); box-shadow: 0 6px 18px rgba(0,0,0,0.10); transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease; display:grid; place-items:center; color: var(--secondary-text-color); }
  .switch-tile:not(.on):hover { transform: translateY(-1px); box-shadow: 0 12px 24px rgba(0,0,0,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
  .switch-tile .name { font-weight: 600; font-size: 12px; }
  .switch-icon { width: 28px; height: 28px; color: var(--secondary-text-color); line-height:0; }
  .tile-inner ha-chip { font-size: var(--chip-font-size, 12px); }

  .switch-tile.on { --pulse-weak: rgba(255,193,7,0.16); --pulse-strong: rgba(255,193,7,0.30); box-shadow: 0 18px 40px rgba(255,193,7,0.30), 0 6px 18px rgba(255,193,7,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile.on:hover { transform: translateY(-1px); box-shadow: 0 18px 40px rgba(255,193,7,0.30) !important, 0 6px 18px rgba(255,193,7,0.16) !important; border-radius: var(--ha-card-border-radius, 12px); }

  @keyframes chase { 0% { background-position: -150% 0, 0 0; } 50% { background-position: 50% 0, 0 0; } 100% { background-position: 250% 0, 0 0; } }
  .switch-tile.smart.on { --pulse-weak: rgba(0,200,83,0.16); --pulse-strong: rgba(0,200,83,0.30); box-shadow: 0 18px 40px rgba(0,200,83,0.30), 0 6px 18px rgba(0,200,83,0.16); border-radius: var(--ha-card-border-radius, 12px); }
  .switch-tile.smart.on:hover { transform: translateY(-1px); box-shadow: 0 18px 40px rgba(0,200,83,0.30) !important, 0 6px 18px rgba(0,200,83,0.16) !important; border-radius: var(--ha-card-border-radius, 12px); }
`;var Gt;function Wt(t){try{At(window,"haptic",t)}catch(t){}}let Yt=Gt=class extends ot{static getStubConfig(){return{title:"Living room",tile_height:80,badge_size:22,badge_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[]}}setConfig(t){const e=(i=t||{},JSON.parse(JSON.stringify(i)));var i;if(Array.isArray(e.headers)){const t=e.headers;e.header=t[0]||e.header||{}}else e.header=e.header||{},e.headers=e.header?[e.header]:[];Array.isArray(e.switch_rows)||(e.switch_rows=[]),this._config=e}getCardSize(){return 6}render(){var t,e,i,o,n,r,a,s,l,d,c,h;if(!this._config)return D;const u=Gt.getStubConfig(),p=this._config||{},v={title:null!==(t=p.title)&&void 0!==t?t:u.title,tile_height:null!==(e=p.tile_height)&&void 0!==e?e:u.tile_height,badge_size:null!==(i=p.badge_size)&&void 0!==i?i:u.badge_size,badge_icon_size:null!==(o=p.badge_icon_size)&&void 0!==o?o:u.badge_icon_size,main_icon_size:null!==(n=p.main_icon_size)&&void 0!==n?n:u.main_icon_size,chip_font_size:null!==(r=p.chip_font_size)&&void 0!==r?r:u.chip_font_size,card_shadow_color:null!==(a=p.card_shadow_color)&&void 0!==a?a:u.card_shadow_color,card_shadow_intensity:null!==(s=p.card_shadow_intensity)&&void 0!==s?s:u.card_shadow_intensity,unavailable_pulse_color:null!==(l=p.unavailable_pulse_color)&&void 0!==l?l:u.unavailable_pulse_color,headers:Array.isArray(p.headers)&&p.headers.length?p.headers:p.header?[p.header]:[],switch_rows:Array.isArray(p.switch_rows)?p.switch_rows:p.switch_rows||[],tap_action:p.tap_action,hold_action:p.hold_action,double_tap_action:p.double_tap_action},g=Array.isArray(v.headers)&&v.headers.length?v.headers:[v.header||{}],b=Number(v.tile_height)||Number(u.tile_height)||80,m=Number(v.badge_size)||Number(u.badge_size)||22,f=Number(v.badge_icon_size)||Number(u.badge_icon_size)||14,_=g[0]||{},y=Number(null!==(d=null==_?void 0:_.main_icon_size)&&void 0!==d?d:null==_?void 0:_.maicon_size),w=Number.isFinite(y)&&y>0?y:Number(v.main_icon_size)||Number(u.main_icon_size)||48,x=this._rgbaFromColor(v.card_shadow_color||u.card_shadow_color,null!==(c=v.card_shadow_intensity)&&void 0!==c?c:u.card_shadow_intensity),$=Number(v.chip_font_size)||Number(u.chip_font_size)||12,A=v.unavailable_pulse_color||u.unavailable_pulse_color||"#ff3b30",k=this._hasAnyUnavailable(v,g),E=this._rgbaFromColor(A,.18),S=this._rgbaFromColor(A,.36);return U`
      <ha-card class=${k?"unavailable":""}
               style=${`--panel-shadow-color:${k?E:x}; --unavail-weak:${E}; --unavail-strong:${S}`}
               .header=${(null===(h=this._config)||void 0===h?void 0:h.title)||void 0}>
        <div class="metrics" style=${`--tile-h:${b}px; --badge:${m}px; --badge-icon:${f}px; --main-icon-size:${w}px; --chip-font-size:${$}px;`}>
          <div class="root">
            ${g.map((t=>this._renderHeaderRow(t)))}
            ${Ut(this,v.switch_rows)}
          </div>
        </div>
      </ha-card>
    `}_renderHeaderRow(t){const e=t.main||{},i={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,glow_mode:e.glow_mode,glow_effect:e.glow_effect,light_group_entity:e.light_group_entity,name:e.main_name||e.name,icon:e.main_icon||e.icon,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor,badges:Array.isArray(e.badges)?e.badges:[],tap_action:e.tap_action,hold_action:e.hold_action,double_tap_action:e.double_tap_action},o=t.ac||{},n=t.thermostat||{},r=!!(null==o?void 0:o.entity),a=!!(null==n?void 0:n.entity),s=!(!e||!(e.main_name||e.name||e.light_group_entity||e.entity||e.main_icon||e.icon||e.temp_sensor||e.humidity_sensor||Array.isArray(e.badges)&&e.badges.length)),l=s&&r,d=s&&a;s||!r&&!a||console.warn("bitosome-room-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const c=s?l||d?l&&d?"header-row":"header-row main-plus-one":"header-row only-main":l&&d?"header-row main-plus-one":"header-row only-main",h=e&&e.glow_mode||(e&&!1===e.glow_effect?"none":void 0);h&&(this._currentHeaderGlowMode=h);const u=U`
      <div class=${c}>
        ${s?Lt(this,i):D}
        ${l?function(t,e){var i,o,n;const r=((null===(n=null===(o=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[e])||void 0===n?void 0:n.state)||"").toLowerCase(),a=!!r&&"off"!==r,{bg:s,icon:l}="function"==typeof(null==t?void 0:t._acBadge)?t._acBadge(r):{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"},d=`color:${"function"==typeof(null==t?void 0:t._acModeColor)?t._acModeColor(r):"gray"}; ${a?"animation:spin 1.5s linear infinite;":""}`,c=function(t){const e=(t||"").toLowerCase();return e&&"off"!==e?e.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:e.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:e.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:e.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:e.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(r),h=(null==t?void 0:t._currentHeaderGlowMode)||"static",{style:u,overlay:p}=Mt(c,h,a);return U`
    <ha-control-button
      class="square ac-tile ${a?"on":""}"
      style=${u}
      @action=${i=>{"function"==typeof(null==t?void 0:t._onACAction)&&t._onACAction(i,e)}}
      .actionHandler=${Pt({hasHold:!0,hasDoubleClick:!1})}
      role="button" tabindex="0"
    >
      <div class="badge badge-tr" style=${`background:${s}`}> 
        <ha-icon .icon=${l} style="color:#fff"></ha-icon>
      </div>
      <div class="center-xy">
        <ha-icon class="ac-fan" icon="mdi:fan" style=${d}></ha-icon>
      </div>
  <div class="tile-end">${p}</div>
    </ha-control-button>
  `}(this,o.entity):D}
        ${d?function(t,e){var i,o,n,r,a,s,l,d;const c=null===(o=null===(i=null==t?void 0:t.hass)||void 0===i?void 0:i.states)||void 0===o?void 0:o[e],h="function"==typeof(null==t?void 0:t._fmtNumber)?t._fmtNumber.bind(t):t=>null==t?"—":String(t),u=h(null!==(s=null!==(r=null===(n=null==c?void 0:c.attributes)||void 0===n?void 0:n.temperature)&&void 0!==r?r:null===(a=null==c?void 0:c.attributes)||void 0===a?void 0:a.target_temp)&&void 0!==s?s:null===(l=null==c?void 0:c.attributes)||void 0===l?void 0:l.target_temperature,1)+"°",p=((null===(d=null==c?void 0:c.attributes)||void 0===d?void 0:d.hvac_action)||"").toLowerCase(),v=((null==c?void 0:c.state)||"").toLowerCase(),g="off"===v?"gray":"heating"===p||"heating"===v?"#ff7043":"#66bb6a",b="heating"===p,m=b?"var(--state-climate-heat-color, #ff7043)":"var(--chip-background-color, rgba(0,0,0,0.06))",f=b?"var(--primary-background-color, #fff)":"var(--secondary-text-color)",_="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),y=(null==t?void 0:t._currentHeaderGlowMode)||"static",{style:w,overlay:x}=Mt(Ot,y,b);return U`
    <ha-control-button
      class="square thermo-tile ${b?"on":""}"
      style=${w}
      @action=${i=>{"function"==typeof(null==t?void 0:t._onThermoAction)&&t._onThermoAction(i,e)}}
      .actionHandler=${Pt({hasHold:!0,hasDoubleClick:!1})}
      role="button" tabindex="0"
    >
    
      <div class="temp-chip-tr">
        ${_?U`<ha-chip style=${`--ha-chip-background-color:${m};--chip-background-color:${m};--ha-chip-text-color:${f};color:${f};font-weight:700;`}>${u}</ha-chip>`:U`<div class="temp-pill" style=${`background:${m};color:${f};`}><span class="thermo-target">${u}</span></div>`}
      </div>
      <div class="center-xy">
        <ha-icon class="thermo-icon" icon="mdi:thermostat" style=${`color:${g}`}></ha-icon>
      </div>
    <div class="tile-end">${x}</div>
    </ha-control-button>
  `}(this,n.entity):D}
      </div>
    `;return h&&(this._currentHeaderGlowMode=void 0),u}_toggleByDomain(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=t.split(".")[0],o=((null==e?void 0:e.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(t);else{const e="open"===o||"opening"===o?"close_cover":"open_cover";this.hass.callService("cover",e,{entity_id:t})}else{const e="locked"===o?"unlock":"lock";this.hass.callService("lock",e,{entity_id:t})}}_onMainAction(t,e,i,o,n){const r=t.detail&&t.detail.action||"tap";this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action)?St(this,this.hass,e,r):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?St(this,this.hass,this._config,r):"hold"===r?(Wt("medium"),this._openMoreInfo(o||i)):this._toggleGeneric(n||i)}_onACAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(Wt("medium"),this._openMoreInfo(e)):(Wt("success"),this._acToggle(e))}_onThermoAction(t,e){"hold"===(t.detail&&t.detail.action||"tap")?(Wt("medium"),this._openMoreInfo(e)):(Wt("success"),this._thermoToggle(e))}_onSwitchAction(t,e){const i=t.detail&&t.detail.action||"tap";if(this.hass&&e&&(e.tap_action||e.hold_action||e.double_tap_action))return void St(this,this.hass,e,i);const o=null==e?void 0:e.entity,n=(null==e?void 0:e.hold_entity)||o;"hold"===i?(Wt("medium"),this._openMoreInfo(n||o)):this._toggleGeneric(o)}_fmt2(t,e,i){if(!t||!this.hass)return"—"+(i||"");const o=this.hass.states[t];if(!o||""===o.state||"unknown"===o.state||"unavailable"===o.state)return"—"+(i||"");const n=Number(o.state);return Number.isFinite(n)?n.toFixed(e)+(i||""):String(o.state)+(i||"")}_fmtNumber(t,e){if(null==t||""===t||"unknown"===t||"unavailable"===t)return"—";const i=Number(t);return Number.isFinite(i)?i.toFixed(e):String(t)}_acModeColor(t){return t&&"off"!==t?t.includes("cool")?"#00aaff":t.includes("heat")?"#ff7043":t.includes("dry")?"#ffca28":t.includes("fan")?"#66bb6a":t.includes("auto")?"#26c6da":"var(--paper-item-icon-color)":"gray"}_acBadge(t){return t&&"off"!==t?t.includes("cool")?{bg:"#00aaff",icon:"mdi:snowflake"}:t.includes("heat")?{bg:"#ff7043",icon:"mdi:fire"}:t.includes("dry")?{bg:"#ffca28",icon:"mdi:water-percent"}:t.includes("fan")?{bg:"#66bb6a",icon:"mdi:fan"}:t.includes("auto")?{bg:"#26c6da",icon:"mdi:autorenew"}:{bg:"rgba(0,0,0,0.06)",icon:"mdi:air-conditioner"}:{bg:"rgba(158,158,158,0.95)",icon:"mdi:power"}}_openMoreInfo(t){t&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:t},bubbles:!0,composed:!0}))}_acToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i=((null==e?void 0:e.state)||"").toLowerCase(),o=!!i&&"off"!==i;this.hass.callService("climate",o?"turn_off":"turn_on",{entity_id:t})}_thermoToggle(t){if(!t||!this.hass)return;const e=this.hass.states[t],i="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:i})}_toggleGeneric(t){if(!t||!this.hass)return;const e=t.split(".")[0],i="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[o,n]=i.split(".");this.hass.callService(o,n,{entity_id:t})}_isOn(t){if(!t||!this.hass)return!1;const e=this.hass.states[t];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_rgbaFromColor(t,e=.5){const i=Math.max(0,Math.min(1,Number(e)||0));if(!t||"string"!=typeof t)return`rgba(0,0,0,${i})`;const o=t.trim();if(o.startsWith("rgba(")||o.startsWith("rgb(")||o.startsWith("hsl(")||o.startsWith("var("))return o;const n=o.replace("#",""),r=t=>parseInt(t,16);if(3===n.length){return`rgba(${r(n[0]+n[0])},${r(n[1]+n[1])},${r(n[2]+n[2])},${i})`}if(n.length>=6){return`rgba(${r(n.slice(0,2))},${r(n.slice(2,4))},${r(n.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_hasAnyUnavailable(t,e){if(!this.hass)return!1;const i=[];(Array.isArray(e)?e:[e]).forEach((t=>{const e=(null==t?void 0:t.main)||{},o={tap_entity:e.tap_entity,hold_entity:e.hold_entity||e.tap_entity,light_group_entity:e.light_group_entity,temp_sensor:e.temp_sensor,humidity_sensor:e.humidity_sensor},n=(null==t?void 0:t.ac)||{},r=(null==t?void 0:t.thermostat)||{};i.push(null==o?void 0:o.tap_entity,null==o?void 0:o.hold_entity,null==o?void 0:o.light_group_entity,null==o?void 0:o.temp_sensor,null==o?void 0:o.humidity_sensor,null==n?void 0:n.entity,null==r?void 0:r.entity)}));(t.switch_rows||[]).forEach((t=>{var e;(Array.isArray(t)?t:Array.isArray(null===(e=t)||void 0===e?void 0:e.row)?t.row:[]).forEach((t=>i.push(null==t?void 0:t.entity,null==t?void 0:t.hold_entity)))}));const o=new Set(["unavailable","unknown","offline"]);return i.some((t=>{var e,i;if(!t)return!1;const n=null===(i=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===i?void 0:i[t],r=((null==n?void 0:n.state)||"").toLowerCase();return o.has(r)}))}};Yt.styles=[Rt,Dt,jt,It,Bt],t([at({attribute:!1})],Yt.prototype,"hass",void 0),t([function(t){return at({...t,state:!0})}()],Yt.prototype,"_config",void 0),Yt=Gt=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){customElements.define(t,e)}}})(t,e))("bitosome-room-card")],Yt),window.customCards=window.customCards||[],window.customCards.push({type:"bitosome-room-card",name:"Room card",description:"Room control card",preview:!1,version:"1.0.10"});try{const t=window;if(!t.__BITOSOME_ROOM_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%cbitosome-room-card%c v1.0.10 loaded",e,i),t.__BITOSOME_ROOM_CARD_LOGGED__=!0}}catch(t){}var Ft=Yt;export{Yt as BitosomeRoomCard,Ft as default};
