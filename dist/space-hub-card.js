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
var e=function(t,i){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])},e(t,i)};var t=function(){return t=Object.assign||function(e){for(var t,i=1,a=arguments.length;i<a;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},t.apply(this,arguments)};function i(e,t,i,a){var r,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}function a(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],a=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&a>=e.length&&(e=void 0),{value:e&&e[a++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const r=window,o=r.ShadowRoot&&(void 0===r.ShadyCSS||r.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class c{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(o&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new c(i,e,n)},d=o?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new c("string"==typeof e?e:e+"",void 0,n))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var p;const h=window,u=h.trustedTypes,m=u?u.emptyScript:"",v=h.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},g=(e,t)=>t!==e&&(t==t||e==e),y={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:g},_="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const a=this._$Ep(i,t);void 0!==a&&(this._$Ev.set(a,i),e.push(a))})),e}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const r=this[e];this[t]=a,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||y}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{o?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),a=r.litNonce;void 0!==a&&i.setAttribute("nonce",a),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=y){var a;const r=this.constructor._$Ep(e,i);if(void 0!==r&&!0===i.reflect){const o=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:f).toAttribute(t,i.type);this._$El=e,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const a=this.constructor,r=a._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=a.getPropertyOptions(r),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:f;this._$El=r,this[r]=o.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||g)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var w;b[_]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==v||v({ReactiveElement:b}),(null!==(p=h.reactiveElementVersions)&&void 0!==p?p:h.reactiveElementVersions=[]).push("1.6.3");const $=window,x=$.trustedTypes,A=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,C=`lit$${(Math.random()+"").slice(9)}$`,k="?"+C,E=`<${k}>`,S=document,T=()=>S.createComment(""),H=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,R="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,M=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),O=/'/g,L=/"/g,D=/^(?:script|style|textarea|title)$/i,F=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),U=Symbol.for("lit-noChange"),V=Symbol.for("lit-nothing"),j=new WeakMap,B=S.createTreeWalker(S,129,null,!1);function q(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}class G{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let r=0,o=0;const n=e.length-1,s=this.parts,[c,l]=((e,t)=>{const i=e.length-1,a=[];let r,o=2===t?"<svg>":"",n=I;for(let t=0;t<i;t++){const i=e[t];let s,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===I?"!--"===c[1]?n=N:void 0!==c[1]?n=P:void 0!==c[2]?(D.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=M):void 0!==c[3]&&(n=M):n===M?">"===c[0]?(n=null!=r?r:I,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?M:'"'===c[3]?L:O):n===L||n===O?n=M:n===N||n===P?n=I:(n=M,r=void 0);const p=n===M&&e[t+1].startsWith("/>")?" ":"";o+=n===I?i+E:l>=0?(a.push(s),i.slice(0,l)+"$lit$"+i.slice(l)+C+p):i+C+(-2===l?(a.push(void 0),t):p)}return[q(e,o+(e[i]||"<?>")+(2===t?"</svg>":"")),a]})(e,t);if(this.el=G.createElement(c,i),B.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=B.nextNode())&&s.length<n;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(C)){const i=l[o++];if(e.push(t),void 0!==i){const e=a.getAttribute(i.toLowerCase()+"$lit$").split(C),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?K:"?"===t[1]?Q:"@"===t[1]?ee:Z})}else s.push({type:6,index:r})}for(const t of e)a.removeAttribute(t)}if(D.test(a.tagName)){const e=a.textContent.split(C),t=e.length-1;if(t>0){a.textContent=x?x.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],T()),B.nextNode(),s.push({type:2,index:++r});a.append(e[t],T())}}}else if(8===a.nodeType)if(a.data===k)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=a.data.indexOf(C,e+1));)s.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const i=S.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,a){var r,o,n,s;if(t===U)return t;let c=void 0!==a?null===(r=i._$Co)||void 0===r?void 0:r[a]:i._$Cl;const l=H(t)?void 0:t._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(e),c._$AT(e,i,a)),void 0!==a?(null!==(n=(s=i)._$Co)&&void 0!==n?n:s._$Co=[])[a]=c:i._$Cl=c),void 0!==c&&(t=Y(e,c._$AS(e,t.values),c,a)),t}class W{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:a}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:S).importNode(i,!0);B.currentNode=r;let o=B.nextNode(),n=0,s=0,c=a[0];for(;void 0!==c;){if(n===c.index){let t;2===c.type?t=new X(o,o.nextSibling,this,e):1===c.type?t=new c.ctor(o,c.name,c.strings,this,e):6===c.type&&(t=new te(o,this,e)),this._$AV.push(t),c=a[++s]}n!==(null==c?void 0:c.index)&&(o=B.nextNode(),n++)}return B.currentNode=S,r}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{constructor(e,t,i,a){var r;this.type=2,this._$AH=V,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cp=null===(r=null==a?void 0:a.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),H(e)?e===V||null==e||""===e?(this._$AH!==V&&this._$AR(),this._$AH=V):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>z(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==V&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(S.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:a}=e,r="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=G.createElement(q(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.v(i);else{const e=new W(r,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=j.get(e.strings);return void 0===t&&j.set(e.strings,t=new G(e)),t}T(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const r of e)a===t.length?t.push(i=new X(this.k(T()),this.k(T()),this,this.options)):i=t[a],i._$AI(r),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,i,a,r){this.type=1,this._$AH=V,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=V}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const r=this.strings;let o=!1;if(void 0===r)e=Y(this,e,t,0),o=!H(e)||e!==this._$AH&&e!==U,o&&(this._$AH=e);else{const a=e;let n,s;for(e=r[0],n=0;n<r.length-1;n++)s=Y(this,a[i+n],t,n),s===U&&(s=this._$AH[n]),o||(o=!H(s)||s!==this._$AH[n]),s===V?e=V:e!==V&&(e+=(null!=s?s:"")+r[n+1]),this._$AH[n]=s}o&&!a&&this.j(e)}j(e){e===V?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class K extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===V?void 0:e}}const J=x?x.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==V?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class ee extends Z{constructor(e,t,i,a,r){super(e,t,i,a,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=Y(this,e,t,0))&&void 0!==i?i:V)===U)return;const a=this._$AH,r=e===V&&a!==V||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==V&&(a===V||r);r&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class te{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const ie=$.litHtmlPolyfillSupport;null==ie||ie(G,X),(null!==(w=$.litHtmlVersions)&&void 0!==w?w:$.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ae,re;class oe extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var a,r;const o=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t;let n=o._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new X(t.insertBefore(T(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return U}}oe.finalized=!0,oe._$litElement$=!0,null===(ae=globalThis.litElementHydrateSupport)||void 0===ae||ae.call(globalThis,{LitElement:oe});const ne=globalThis.litElementPolyfillSupport;null==ne||ne({LitElement:oe}),(null!==(re=globalThis.litElementVersions)&&void 0!==re?re:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const se=1,ce=2,le=e=>(...t)=>({_$litDirective$:e,values:t});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class de{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pe=(e,t)=>{var i,a;const r=e._$AN;if(void 0===r)return!1;for(const e of r)null===(a=(i=e)._$AO)||void 0===a||a.call(i,t,!1),pe(e,t);return!0},he=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},ue=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),fe(t)}};function me(e){void 0!==this._$AN?(he(this),this._$AM=e,ue(this)):this._$AM=e}function ve(e,t=!1,i=0){const a=this._$AH,r=this._$AN;if(void 0!==r&&0!==r.size)if(t)if(Array.isArray(a))for(let e=i;e<a.length;e++)pe(a[e],!1),he(a[e]);else null!=a&&(pe(a,!1),he(a));else pe(this,e)}const fe=e=>{var t,i,a,r;e.type==ce&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=ve),null!==(i=(r=e)._$AQ)&&void 0!==i||(r._$AQ=me))};class ge extends de{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ue(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,a;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),t&&(pe(this,e),he(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ye{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class _e{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const be=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,we=1073741823;const $e=le(class extends ge{constructor(){super(...arguments),this._$C_t=we,this._$Cwt=[],this._$Cq=new ye(this),this._$CK=new _e}render(...e){var t;return null!==(t=e.find((e=>!be(e))))&&void 0!==t?t:U}update(e,t){const i=this._$Cwt;let a=i.length;this._$Cwt=t;const r=this._$Cq,o=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const n=t[e];if(!be(n))return this._$C_t=e,n;e<a&&n===i[e]||(this._$C_t=we,a=0,Promise.resolve(n).then((async e=>{for(;o.get();)await o.get();const t=r.deref();if(void 0!==t){const i=t._$Cwt.indexOf(n);i>-1&&i<t._$C_t&&(t._$C_t=i,t.setValue(e))}})))}return U}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),xe=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Ae=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ce(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Ae(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function ke(e){return Ce({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=({finisher:e,descriptor:t})=>(i,a)=>{var r;if(void 0===a){const a=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=t?{kind:"method",placement:"prototype",key:a,descriptor:t(i.key)}:{...i,key:a};return null!=e&&(o.finisher=function(t){e(t,a)}),o}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,a,t(a)),null==e||e(r,a)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Se(e,t){return Ee({descriptor:i=>{const a={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;a.get=function(){var i,a;return void 0===this[t]&&(this[t]=null!==(a=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==a?a:null),this[t]}}return a}})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Te;null===(Te=window.HTMLSlotElement)||void 0===Te||Te.prototype.assignedElements;var He="[^\\s]+";function ze(e,t){for(var i=[],a=0,r=e.length;a<r;a++)i.push(e[a].substr(0,t));return i}var Re=function(e){return function(t,i){var a=i[e].map((function(e){return e.toLowerCase()})),r=a.indexOf(t.toLowerCase());return r>-1?r:null}};function Ie(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var a=0,r=t;a<r.length;a++){var o=r[a];for(var n in o)e[n]=o[n]}return e}var Ne=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Pe=["January","February","March","April","May","June","July","August","September","October","November","December"],Me=ze(Pe,3),Oe={dayNamesShort:ze(Ne,3),dayNames:Ne,monthNamesShort:Me,monthNames:Pe,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},Le=(Ie({},Oe),function(e){return+e-1}),De=[null,"[1-9]\\d?"],Fe=[null,He],Ue=["isPm",He,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],Ve=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}];Re("monthNamesShort"),Re("monthNames");var je,Be;!function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(je||(je={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Be||(Be={}));var qe=["closed","locked","off"],Ge=function(e,t,i,a){a=a||{},i=null==i?{}:i;var r=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return r.detail=i,e.dispatchEvent(r),r},Ye=new Set(["call-service","divider","section","weblink","cast","select"]),We={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Xe=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return a("hui-error-card",{type:"error",error:e,config:t})},a=function(e,t){var a=window.document.createElement(e);try{a.setConfig(t)}catch(a){return console.error(e,a),i(a.message,t)}return a};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var r=e.type;if(r&&r.startsWith("custom:"))r=r.substr("custom:".length);else if(t)if(Ye.has(r))r="hui-"+r+"-row";else{if(!e.entity)return i("Invalid config given.",e);var o=e.entity.split(".",1)[0];r="hui-"+(We[o]||"text")+"-entity-row"}else r="hui-"+r+"-card";if(customElements.get(r))return a(r,e);var n=i("Custom element doesn't exist: "+e.type+".",e);n.style.display="None";var s=setTimeout((function(){n.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),Ge(n,"ll-rebuild",{},n)})),n},Ze=function(e){Ge(window,"haptic",e)},Ke=function(e,t,i,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(Ze("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&Ge(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),Ge(window,"location-changed",{replace:i})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var a,r=function(e){return e.substr(0,e.indexOf("."))}(t),o="group"===r?"homeassistant":r;switch(r){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}e.callService(o,a,{entity_id:t})})(e,t,qe.includes(e.states[t].state))}(t,i.entity),Ze("success"));break;case"call-service":if(!a.service)return void Ze("failure");var r=a.service.split(".",2);t.callService(r[0],r[1],a.service_data),Ze("success");break;case"fire-dom-event":Ge(e,"ll-custom",a)}},Je=function(e,t,i,a){var r;"double_tap"===a&&i.double_tap_action?r=i.double_tap_action:"hold"===a&&i.hold_action?r=i.hold_action:"tap"===a&&i.tap_action&&(r=i.tap_action),Ke(e,t,i,r)};function Qe(e){return JSON.parse(JSON.stringify(e))}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const et=()=>{},tt={get passive(){return!1}};document.addEventListener("x",et,tt),document.removeEventListener("x",et);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class it extends oe{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var at=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),rt={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},ot={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},nt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var st=["touchstart","pointerdown","mousedown","keydown"],ct=["touchend","pointerup","mouseup","contextmenu"],lt=[],dt=function(i){function r(e){var a=i.call(this,t(t({},r.defaultAdapter),e))||this;return a.activationAnimationHasEnded=!1,a.activationTimer=0,a.fgDeactivationRemovalTimer=0,a.fgScale="0",a.frame={width:0,height:0},a.initialSize=0,a.layoutFrame=0,a.maxRadius=0,a.unboundedCoords={left:0,top:0},a.activationState=a.defaultActivationState(),a.activationTimerCallback=function(){a.activationAnimationHasEnded=!0,a.runDeactivationUXLogicIfReady()},a.activateHandler=function(e){a.activateImpl(e)},a.deactivateHandler=function(){a.deactivateImpl()},a.focusHandler=function(){a.handleFocus()},a.blurHandler=function(){a.handleBlur()},a.resizeHandler=function(){a.layout()},a}return function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Class extends value "+String(i)+" is not a constructor or null");function a(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(a.prototype=i.prototype,new a)}(r,i),Object.defineProperty(r,"cssClasses",{get:function(){return rt},enumerable:!1,configurable:!0}),Object.defineProperty(r,"strings",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(r,"numbers",{get:function(){return nt},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!1,configurable:!0}),r.prototype.init=function(){var e=this,t=this.supportsPressRipple();if(this.registerRootHandlers(t),t){var i=r.cssClasses,a=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(a),e.adapter.isUnbounded()&&(e.adapter.addClass(o),e.layoutInternal())}))}},r.prototype.destroy=function(){var e=this;if(this.supportsPressRipple()){this.activationTimer&&(clearTimeout(this.activationTimer),this.activationTimer=0,this.adapter.removeClass(r.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer&&(clearTimeout(this.fgDeactivationRemovalTimer),this.fgDeactivationRemovalTimer=0,this.adapter.removeClass(r.cssClasses.FG_DEACTIVATION));var t=r.cssClasses,i=t.ROOT,a=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(i),e.adapter.removeClass(a),e.removeCssVars()}))}this.deregisterRootHandlers(),this.deregisterDeactivationHandlers()},r.prototype.activate=function(e){this.activateImpl(e)},r.prototype.deactivate=function(){this.deactivateImpl()},r.prototype.layout=function(){var e=this;this.layoutFrame&&cancelAnimationFrame(this.layoutFrame),this.layoutFrame=requestAnimationFrame((function(){e.layoutInternal(),e.layoutFrame=0}))},r.prototype.setUnbounded=function(e){var t=r.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},r.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(r.cssClasses.BG_FOCUSED)}))},r.prototype.supportsPressRipple=function(){return this.adapter.browserSupportsCssVars()},r.prototype.defaultActivationState=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},r.prototype.registerRootHandlers=function(e){var t,i;if(e){try{for(var r=a(st),o=r.next();!o.done;o=r.next()){var n=o.value;this.adapter.registerInteractionHandler(n,this.activateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler)}this.adapter.registerInteractionHandler("focus",this.focusHandler),this.adapter.registerInteractionHandler("blur",this.blurHandler)},r.prototype.registerDeactivationHandlers=function(e){var t,i;if("keydown"===e.type)this.adapter.registerInteractionHandler("keyup",this.deactivateHandler);else try{for(var r=a(ct),o=r.next();!o.done;o=r.next()){var n=o.value;this.adapter.registerDocumentInteractionHandler(n,this.deactivateHandler)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}},r.prototype.deregisterRootHandlers=function(){var e,t;try{for(var i=a(st),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterInteractionHandler(o,this.activateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}this.adapter.deregisterInteractionHandler("focus",this.focusHandler),this.adapter.deregisterInteractionHandler("blur",this.blurHandler),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler)},r.prototype.deregisterDeactivationHandlers=function(){var e,t;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler);try{for(var i=a(ct),r=i.next();!r.done;r=i.next()){var o=r.value;this.adapter.deregisterDocumentInteractionHandler(o,this.deactivateHandler)}}catch(t){e={error:t}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}},r.prototype.removeCssVars=function(){var e=this,t=r.strings;Object.keys(t).forEach((function(i){0===i.indexOf("VAR_")&&e.adapter.updateCssVariable(t[i],null)}))},r.prototype.activateImpl=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState;if(!i.isActivated){var a=this.previousActivationEvent;if(!(a&&void 0!==e&&a.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&lt.length>0&&lt.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState():(void 0!==e&&(lt.push(e.target),this.registerDeactivationHandlers(e)),i.wasElementMadeActive=this.checkElementMadeActive(e),i.wasElementMadeActive&&this.animateActivation(),requestAnimationFrame((function(){lt=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive(e),i.wasElementMadeActive&&t.animateActivation()),i.wasElementMadeActive||(t.activationState=t.defaultActivationState())})))}}},r.prototype.checkElementMadeActive=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},r.prototype.animateActivation=function(){var e=this,t=r.strings,i=t.VAR_FG_TRANSLATE_START,a=t.VAR_FG_TRANSLATE_END,o=r.cssClasses,n=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,c=r.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal();var l="",d="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates(),h=p.startPoint,u=p.endPoint;l=h.x+"px, "+h.y+"px",d=u.x+"px, "+u.y+"px"}this.adapter.updateCssVariable(i,l),this.adapter.updateCssVariable(a,d),clearTimeout(this.activationTimer),clearTimeout(this.fgDeactivationRemovalTimer),this.rmBoundedActivationClasses(),this.adapter.removeClass(n),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer=setTimeout((function(){e.activationTimerCallback()}),c)},r.prototype.getFgTranslationCoordinates=function(){var e,t=this.activationState,i=t.activationEvent;return e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var a,r,o=t.x,n=t.y,s=o+i.left,c=n+i.top;if("touchstart"===e.type){var l=e;a=l.changedTouches[0].pageX-s,r=l.changedTouches[0].pageY-c}else{var d=e;a=d.pageX-s,r=d.pageY-c}return{x:a,y:r}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame.width/2,y:this.frame.height/2},{startPoint:e={x:e.x-this.initialSize/2,y:e.y-this.initialSize/2},endPoint:{x:this.frame.width/2-this.initialSize/2,y:this.frame.height/2-this.initialSize/2}}},r.prototype.runDeactivationUXLogicIfReady=function(){var e=this,t=r.cssClasses.FG_DEACTIVATION,i=this.activationState,a=i.hasDeactivationUXRun,o=i.isActivated;(a||!o)&&this.activationAnimationHasEnded&&(this.rmBoundedActivationClasses(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer=setTimeout((function(){e.adapter.removeClass(t)}),nt.FG_DEACTIVATION_MS))},r.prototype.rmBoundedActivationClasses=function(){var e=r.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded=!1,this.adapter.computeBoundingRect()},r.prototype.resetActivationState=function(){var e=this;this.previousActivationEvent=this.activationState.activationEvent,this.activationState=this.defaultActivationState(),setTimeout((function(){return e.previousActivationEvent=void 0}),r.numbers.TAP_DELAY_MS)},r.prototype.deactivateImpl=function(){var e=this,i=this.activationState;if(i.isActivated){var a=t({},i);i.isProgrammatic?(requestAnimationFrame((function(){e.animateDeactivation(a)})),this.resetActivationState()):(this.deregisterDeactivationHandlers(),requestAnimationFrame((function(){e.activationState.hasDeactivationUXRun=!0,e.animateDeactivation(a),e.resetActivationState()})))}},r.prototype.animateDeactivation=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady()},r.prototype.layoutInternal=function(){var e=this;this.frame=this.adapter.computeBoundingRect();var t=Math.max(this.frame.height,this.frame.width);this.maxRadius=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(e.frame.width,2)+Math.pow(e.frame.height,2))+r.numbers.PADDING;var i=Math.floor(t*r.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize=i-1:this.initialSize=i,this.fgScale=""+this.maxRadius/this.initialSize,this.updateLayoutCssVars()},r.prototype.updateLayoutCssVars=function(){var e=r.strings,t=e.VAR_FG_SIZE,i=e.VAR_LEFT,a=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize+"px"),this.adapter.updateCssVariable(o,this.fgScale),this.adapter.isUnbounded()&&(this.unboundedCoords={left:Math.round(this.frame.width/2-this.initialSize/2),top:Math.round(this.frame.height/2-this.initialSize/2)},this.adapter.updateCssVariable(i,this.unboundedCoords.left+"px"),this.adapter.updateCssVariable(a,this.unboundedCoords.top+"px"))},r}(at),pt=dt;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht=le(class extends de{constructor(e){var t;if(super(e),e.type!==se||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,a;if(void 0===this.it){this.it=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.nt)||void 0===i?void 0:i.has(e))&&this.it.add(e);return this.render(t)}const r=e.element.classList;this.it.forEach((e=>{e in t||(r.remove(e),this.it.delete(e))}));for(const e in t){const i=!!t[e];i===this.it.has(e)||(null===(a=this.nt)||void 0===a?void 0:a.has(e))||(i?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return U}}),ut="important",mt=le(class extends de{constructor(e){var t;if(super(e),e.type!==se||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const a=e[i];return null==a?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${a};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ht){this.ht=new Set;for(const e in t)this.ht.add(e);return this.render(t)}this.ht.forEach((e=>{null==t[e]&&(this.ht.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const a=t[e];if(null!=a){this.ht.add(e);const t="string"==typeof a&&a.endsWith(" !important");e.includes("-")||t?i.setProperty(e,t?a.slice(0,-11):a,t?ut:""):i[e]=a}}return U}});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
class vt extends it{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.internalUseStateLayerCustomProperties=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=pt}get isActive(){return e=this.parentElement||this,t=":active",(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t);var e,t}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation((()=>{this.mdcFoundation.activate(e)}))}endPress(){this.waitForFoundation((()=>{this.mdcFoundation.deactivate()}))}startFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleFocus()}))}endFocus(){this.waitForFoundation((()=>{this.mdcFoundation.handleBlur()}))}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}update(e){e.has("disabled")&&this.disabled&&this.endHover(),super.update(e)}render(){const e=this.activated&&(this.primary||!this.accent),t=this.selected&&(this.primary||!this.accent),i={"mdc-ripple-surface--accent":this.accent,"mdc-ripple-surface--primary--activated":e,"mdc-ripple-surface--accent--activated":this.accent&&this.activated,"mdc-ripple-surface--primary--selected":t,"mdc-ripple-surface--accent--selected":this.accent&&this.selected,"mdc-ripple-surface--disabled":this.disabled,"mdc-ripple-surface--hover":this.hovering,"mdc-ripple-surface--primary":this.primary,"mdc-ripple-surface--selected":this.selected,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-surface--internal-use-state-layer-custom-properties":this.internalUseStateLayerCustomProperties};return F`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${ht(i)}"
          style="${mt({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}i([Se(".mdc-ripple-surface")],vt.prototype,"mdcRoot",void 0),i([Ce({type:Boolean})],vt.prototype,"primary",void 0),i([Ce({type:Boolean})],vt.prototype,"accent",void 0),i([Ce({type:Boolean})],vt.prototype,"unbounded",void 0),i([Ce({type:Boolean})],vt.prototype,"disabled",void 0),i([Ce({type:Boolean})],vt.prototype,"activated",void 0),i([Ce({type:Boolean})],vt.prototype,"selected",void 0),i([Ce({type:Boolean})],vt.prototype,"internalUseStateLayerCustomProperties",void 0),i([ke()],vt.prototype,"hovering",void 0),i([ke()],vt.prototype,"bgFocused",void 0),i([ke()],vt.prototype,"fgActivation",void 0),i([ke()],vt.prototype,"fgDeactivation",void 0),i([ke()],vt.prototype,"fgScale",void 0),i([ke()],vt.prototype,"fgSize",void 0),i([ke()],vt.prototype,"translateStart",void 0),i([ke()],vt.prototype,"translateEnd",void 0),i([ke()],vt.prototype,"leftPos",void 0),i([ke()],vt.prototype,"topPos",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const ft=l`.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1;z-index:var(--mdc-ripple-z-index, 1)}.mdc-ripple-surface::after{z-index:0;z-index:var(--mdc-ripple-z-index, 0)}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded],.mdc-ripple-upgraded--unbounded{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after,.mdc-ripple-upgraded--unbounded::before,.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after,.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-ripple-surface:hover::before,.mdc-ripple-surface.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;display:block}:host .mdc-ripple-surface{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;will-change:unset}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary:hover::before,.mdc-ripple-surface--primary.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--primary--activated::before,.mdc-ripple-surface--primary--activated::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--activated:hover::before,.mdc-ripple-surface--primary--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--primary--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--primary--selected::before,.mdc-ripple-surface--primary--selected::after{background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-ripple-surface--primary--selected:hover::before,.mdc-ripple-surface--primary--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--primary--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent:hover::before,.mdc-ripple-surface--accent.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}.mdc-ripple-surface--accent--activated::before,.mdc-ripple-surface--accent--activated::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--activated:hover::before,.mdc-ripple-surface--accent--activated.mdc-ripple-surface--hover::before{opacity:0.16;opacity:var(--mdc-ripple-hover-opacity, 0.16)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-focus-opacity, 0.24)}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--activated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.24;opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.24)}.mdc-ripple-surface--accent--selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}.mdc-ripple-surface--accent--selected::before,.mdc-ripple-surface--accent--selected::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-ripple-surface--accent--selected:hover::before,.mdc-ripple-surface--accent--selected.mdc-ripple-surface--hover::before{opacity:0.12;opacity:var(--mdc-ripple-hover-opacity, 0.12)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-focus-opacity, 0.2)}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent--selected:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.2;opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--accent--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.2)}.mdc-ripple-surface--disabled{opacity:0}.mdc-ripple-surface--internal-use-state-layer-custom-properties::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties::after{background-color:#000;background-color:var(--mdc-ripple-hover-state-layer-color, #000)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:hover::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-surface--hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-state-layer-opacity, 0.04)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded--background-focused::before,.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--internal-use-state-layer-custom-properties:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}.mdc-ripple-surface--internal-use-state-layer-custom-properties.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-pressed-state-layer-opacity, 0.12)}`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let gt=class extends vt{};gt.styles=[ft],gt=i([xe("mwc-ripple")],gt);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const yt=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach(((e,i)=>t.constructor._observers.set(i,e)))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach(((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)}))}}t.constructor._observers.set(i,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;class _t{constructor(e){this.startPress=t=>{e().then((e=>{e&&e.startPress(t)}))},this.endPress=()=>{e().then((e=>{e&&e.endPress()}))},this.startFocus=()=>{e().then((e=>{e&&e.startFocus()}))},this.endFocus=()=>{e().then((e=>{e&&e.endFocus()}))},this.startHover=()=>{e().then((e=>{e&&e.startHover()}))},this.endHover=()=>{e().then((e=>{e&&e.endHover()}))}}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bt extends oe{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new _t((()=>(this.shouldRenderRipple=!0,this.ripple))),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():F``,i=this.hasMeta?this.renderMeta():F``;return F`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`}renderRipple(){return this.shouldRenderRipple?F`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?F`<div class="fake-activated-ripple"></div>`:""}renderGraphic(){const e={multi:this.multipleGraphics};return F`
      <span class="mdc-deprecated-list-item__graphic material-icons ${ht(e)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return F`
      <span class="mdc-deprecated-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return F`
      <span class="mdc-deprecated-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return F`<slot></slot>`}renderTwoline(){return F`
      <span class="mdc-deprecated-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-deprecated-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&(this._managingList.debouncedLayout?this._managingList.debouncedLayout(!0):this._managingList.layout(!0))}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}i([Se("slot")],bt.prototype,"slotElement",void 0),i([function(e){return Ee({descriptor:t=>({async get(){var t;return await this.updateComplete,null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e)},enumerable:!0,configurable:!0})})}("mwc-ripple")],bt.prototype,"ripple",void 0),i([Ce({type:String})],bt.prototype,"value",void 0),i([Ce({type:String,reflect:!0})],bt.prototype,"group",void 0),i([Ce({type:Number,reflect:!0})],bt.prototype,"tabindex",void 0),i([Ce({type:Boolean,reflect:!0}),yt((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],bt.prototype,"disabled",void 0),i([Ce({type:Boolean,reflect:!0})],bt.prototype,"twoline",void 0),i([Ce({type:Boolean,reflect:!0})],bt.prototype,"activated",void 0),i([Ce({type:String,reflect:!0})],bt.prototype,"graphic",void 0),i([Ce({type:Boolean})],bt.prototype,"multipleGraphics",void 0),i([Ce({type:Boolean})],bt.prototype,"hasMeta",void 0),i([Ce({type:Boolean,reflect:!0}),yt((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],bt.prototype,"noninteractive",void 0),i([Ce({type:Boolean,reflect:!0}),yt((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],bt.prototype,"selected",void 0),i([ke()],bt.prototype,"shouldRenderRipple",void 0),i([ke()],bt.prototype,"_managingList",void 0);
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const wt=l`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var( --mdc-theme-primary, #6200ee )}:host([activated]) .mdc-deprecated-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-deprecated-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-deprecated-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-deprecated-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-item__meta.multi{width:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-deprecated-list-item__meta ::slotted(.material-icons),.mdc-deprecated-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-deprecated-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}[dir=rtl] .mdc-deprecated-list-item__meta,.mdc-deprecated-list-item__meta[dir=rtl]{margin-left:0;margin-right:auto}.mdc-deprecated-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-deprecated-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-deprecated-list-item__text ::slotted([for]),.mdc-deprecated-list-item__text[for]{pointer-events:none}.mdc-deprecated-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-deprecated-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-deprecated-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-deprecated-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-deprecated-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-deprecated-list--dense .mdc-deprecated-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-deprecated-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-deprecated-list-item__text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-deprecated-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-deprecated-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-deprecated-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-deprecated-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar]) .mdc-deprecated-list-item__graphic,:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic,:host([graphic=control]) .mdc-deprecated-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}[dir=rtl] :host([graphic=avatar]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=medium]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=large]) .mdc-deprecated-list-item__graphic,[dir=rtl] :host([graphic=control]) .mdc-deprecated-list-item__graphic,:host([graphic=avatar]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=medium]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=large]) .mdc-deprecated-list-item__graphic[dir=rtl],:host([graphic=control]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}[dir=rtl] :host([graphic=icon]) .mdc-deprecated-list-item__graphic,:host([graphic=icon]) .mdc-deprecated-list-item__graphic[dir=rtl]{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-deprecated-list-item__graphic,:host([graphic=large]) .mdc-deprecated-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic.multi,:host([graphic=large]) .mdc-deprecated-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-deprecated-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */;let $t=class extends bt{};$t.styles=[wt],$t=i([xe("mwc-list-item")],$t);const xt=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],At=["switch","smart_plug"],Ct=["static","pulse","none"],kt=["more-info","toggle","call-service","perform-action","navigate","url","none"];let Et=class extends oe{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(e){this._config=Qe(e)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var e,t,i;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const a=await(null===(t=(e=window).loadCardHelpers)||void 0===t?void 0:t.call(e));a&&await(null===(i=a.createCardElement)||void 0===i?void 0:i.call(a,{type:"entities",entities:[]}))}catch(e){}const a=["ha-entity-picker","ha-icon-picker","ha-select","ha-textfield","ha-expansion-panel"],r=e=>Promise.race([customElements.whenDefined(e),new Promise((e=>setTimeout(e,1500)))]);try{await Promise.all(a.map(r))}catch(e){}this.requestUpdate()}_fireConfigChanged(){Ge(this,"config-changed",{config:Qe(this._config)}),this.requestUpdate()}_valueChanged(e,t){const i=e.split(".");let a=this._config;for(let e=0;e<i.length-1;e++){const t=i[e],r=Number(t);if(Number.isFinite(r)){if(!Array.isArray(a))return;a[r]||(a[r]={}),a=a[r]}else void 0===a[t]&&(a[t]={}),a=a[t]}const r=i[i.length-1];""===t||null==t?delete a[r]:a[r]=t,this._fireConfigChanged()}_getNestedValue(e){const t=e.split(".");let i=this._config;for(const e of t){if(null==i)return;const t=Number(e);i=Number.isFinite(t)?i[t]:i[e]}return i}_handleSelectChanged(e,t){const i=t.currentTarget;this._valueChanged(e,null==i?void 0:i.value)}_renderSelectField(e,t,i,a){const r=i||a[0]||"";return F`
      <ha-select
        label=${e}
        .value=${r}
        @selected=${e=>this._handleSelectChanged(t,e)}
        @closed=${e=>e.stopPropagation()}
        fixedMenuPosition
        naturalMenuWidth
      >
        ${a.map((e=>F`
          <mwc-list-item .value=${e} ?selected=${e===r}>${e}</mwc-list-item>
        `))}
      </ha-select>
    `}_friendlyEntityName(e){var t,i,a;return e&&(null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e])&&(null===(a=this.hass.states[e].attributes)||void 0===a?void 0:a.friendly_name)||""}_entitySummary(e){if(!e)return"No entity selected";const t=this._friendlyEntityName(e);return t&&t!==e?`${t} • ${e}`:e}render(){return this.hass&&this._config?F`
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
    `:F``}_renderYamlEditor(){return F`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?F`<div class="yaml-error">${this._yamlError}</div>`:V}
    `}_yamlChanged(e){e.stopPropagation();const t=e.detail.value;t&&"object"==typeof t?(this._yamlError="",this._config=Qe(t),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return F`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var e,t,i,a,r;return F`
      <ha-expansion-panel outlined .header=${"Appearance"}>
        <div class="section-content">
          <div class="side-by-side">
            <ha-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(null!==(e=this._config.tile_height)&&void 0!==e?e:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("tile_height",Number.isFinite(t)&&t>0?t:void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(null!==(t=this._config.main_icon_size)&&void 0!==t?t:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("main_icon_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(null!==(i=this._config.chip_icon_size)&&void 0!==i?i:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("chip_icon_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></ha-textfield>
            <ha-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(null!==(a=this._config.chip_font_size)&&void 0!==a?a:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("chip_font_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></ha-textfield>
          </div>
          <div class="side-by-side">
            <ha-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color||""}
              @input=${e=>this._valueChanged("card_shadow_color",e.target.value)}
            ></ha-textfield>
            <ha-textfield
              label="Shadow Intensity (0-1)"
              type="number"
              step="0.05"
              min="0"
              max="1"
              .value=${String(null!==(r=this._config.card_shadow_intensity)&&void 0!==r?r:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("card_shadow_intensity",Number.isFinite(t)?t:void 0)}}
            ></ha-textfield>
          </div>
          <ha-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color||""}
            @input=${e=>this._valueChanged("unavailable_pulse_color",e.target.value)}
          ></ha-textfield>
        </div>
      </ha-expansion-panel>
    `}_renderHeadersSection(){const e=this._config.headers||[];return F`
      <ha-expansion-panel outlined .header=${`Headers (${e.length})`}>
        <div class="section-content">
          ${e.length>1?F`
            <div class="tab-bar">
              ${e.map(((e,t)=>F`<button class="tab-btn${this._selectedHeaderIndex===t?" active":""}" @click=${()=>{this._selectedHeaderIndex=t,this.requestUpdate()}}>Header ${t+1}</button>`))}
            </div>
          `:V}
          ${e.length?this._renderHeader(e[this._selectedHeaderIndex]||e[0],this._selectedHeaderIndex):F`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${e.length>0?F`
              <button class="editor-btn danger" @click=${()=>this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex+1}
              </button>
            `:V}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(e){this._config.headers&&(this._config.headers.splice(e,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(e,t){const i=`headers.${t}`;return F`
      ${this._renderMainTileConfig(e.main,`${i}.main`)}
      ${this._renderACConfig(e.ac,`${i}.ac`)}
      ${this._renderThermostatConfig(e.thermostat,`${i}.thermostat`)}
    `}_renderMainTileConfig(e,t){const i=e||{};return F`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!e?F`
            <div class="side-by-side">
              <ha-textfield
                label="Name"
                .value=${i.main_name||""}
                @input=${e=>this._valueChanged(`${t}.main_name`,e.target.value)}
              ></ha-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${i.main_icon||""}
                @value-changed=${e=>this._valueChanged(`${t}.main_icon`,e.detail.value)}
              ></ha-icon-picker>
            </div>
            <ha-entity-picker
              .hass=${this.hass}
              label="Light Group Entity (tap toggles)"
              .value=${i.light_group_entity||""}
              allow-custom-entity
              @value-changed=${e=>this._valueChanged(`${t}.light_group_entity`,e.detail.value)}
            ></ha-entity-picker>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Tap Entity"
                .value=${i.tap_entity||""}
                allow-custom-entity
                @value-changed=${e=>this._valueChanged(`${t}.tap_entity`,e.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Hold Entity (more-info)"
                .value=${i.hold_entity||""}
                allow-custom-entity
                @value-changed=${e=>this._valueChanged(`${t}.hold_entity`,e.detail.value)}
              ></ha-entity-picker>
            </div>
            <div class="side-by-side">
              <ha-entity-picker
                .hass=${this.hass}
                label="Temperature Sensor"
                .value=${i.temp_sensor||""}
                .includeDomains=${["sensor"]}
                allow-custom-entity
                @value-changed=${e=>this._valueChanged(`${t}.temp_sensor`,e.detail.value)}
              ></ha-entity-picker>
              <ha-entity-picker
                .hass=${this.hass}
                label="Humidity Sensor"
                .value=${i.humidity_sensor||""}
                .includeDomains=${["sensor"]}
                allow-custom-entity
                @value-changed=${e=>this._valueChanged(`${t}.humidity_sensor`,e.detail.value)}
              ></ha-entity-picker>
            </div>
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,i.glow_mode,Ct)}
            ${this._renderChipsConfig(i.chips||[],t)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${t}.double_tap_action`,i.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:F`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(e,t){const i=`${t}.chips`;return F`
      <ha-expansion-panel outlined .header=${`Chips (${e.length})`}>
        <div class="section-content">
          ${e.map(((e,t)=>this._renderSingleChip(e,`${i}.${t}`,t,i)))}
          <button class="editor-btn" @click=${()=>{const e=this._getNestedValue(i)||[];e.push({type:"custom",entity:""}),this._valueChanged(i,e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(e,t,i,a){return F`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Chip ${i+1}: ${e.type||"custom"}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=this._getNestedValue(a)||[];e.splice(i,1),this._valueChanged(a,[...e])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${t}.type`,e.type,xt)}
          <ha-entity-picker
            .hass=${this.hass}
            label="Entity"
            .value=${e.entity||""}
            allow-custom-entity
            @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
          ></ha-entity-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${e.icon||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon`,e.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${e.icon_active||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon_active`,e.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${e.icon_inactive||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon_inactive`,e.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${e.icon_unavailable||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon_unavailable`,e.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-textfield
            label="Background (Active)"
            .value=${e.background_active||""}
            @input=${e=>this._valueChanged(`${t}.background_active`,e.target.value)}
          ></ha-textfield>
          <ha-textfield
            label="Background (Unavailable)"
            .value=${e.background_unavailable||""}
            @input=${e=>this._valueChanged(`${t}.background_unavailable`,e.target.value)}
          ></ha-textfield>
        </div>
        <ha-textfield
          label="Icon Color (Unavailable)"
          .value=${e.icon_color_unavailable||""}
          @input=${e=>this._valueChanged(`${t}.icon_color_unavailable`,e.target.value)}
        ></ha-textfield>
      </div>
    `}_renderACConfig(e,t){return F`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!e?F`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${e.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
            ></ha-entity-picker>
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,e.glow_mode,Ct)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,e.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,e.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:F`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(e,t){return F`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!e?F`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${e.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
            ></ha-entity-picker>
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,e.glow_mode,Ct)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,e.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,e.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:F`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const e=this._config.switch_rows||[];return F`
      <ha-expansion-panel outlined .header=${`Switch Rows (${e.length})`}>
        <div class="section-content">
          ${e.length>1?F`
            <div class="tab-bar">
              ${e.map(((e,t)=>F`<button class="tab-btn${this._selectedSwitchRowIndex===t?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=t,this.requestUpdate()}}>Row ${t+1}</button>`))}
            </div>
          `:V}
          ${e.length?this._renderSwitchRow(e[this._selectedSwitchRowIndex]||e[0],this._selectedSwitchRowIndex):F`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${e.length>0?F`
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex+1}
              </button>
            `:V}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(e){this._config.switch_rows&&(this._config.switch_rows.splice(e,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(e,t){const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[],a=`switch_rows.${t}`,r=Array.isArray(e)?a:`${a}.row`;return F`
      <div class="section-content">
        ${i.map(((e,t)=>this._renderSwitchItem(e,`${r}.${t}`,t,r)))}
        <button class="editor-btn" @click=${()=>{const e=this._getNestedValue(r)||[];e.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(r,[...e])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(e,t,i,a){var r;return F`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${e.name||this._friendlyEntityName(e.entity)||`Switch ${i+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(e.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=this._getNestedValue(a)||[];e.splice(i,1),this._valueChanged(a,[...e])}}
          ></ha-icon-button>
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Controlled Entity"
          .value=${e.entity||""}
          allow-custom-entity
          @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
        ></ha-entity-picker>
        <div class="side-by-side">
          <ha-textfield
            label="Name"
            .value=${e.name||""}
            @input=${e=>this._valueChanged(`${t}.name`,e.target.value)}
          ></ha-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${e.icon||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon`,e.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${t}.type`,e.type,At)}
          ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,e.glow_mode,Ct)}
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Hold Entity (more-info on hold)"
          .value=${e.hold_entity||""}
          allow-custom-entity
          @value-changed=${e=>this._valueChanged(`${t}.hold_entity`,e.detail.value)}
        ></ha-entity-picker>

        <ha-expansion-panel outlined .header=${"Styling"}>
          <div class="section-content">
            <div class="side-by-side">
              <ha-textfield
                label="Icon Size"
                .value=${e.icon_size||""}
                @input=${e=>this._valueChanged(`${t}.icon_size`,e.target.value)}
              ></ha-textfield>
              <ha-textfield
                label="Font Size"
                .value=${e.font_size||e["font-size"]||""}
                @input=${e=>this._valueChanged(`${t}.font_size`,e.target.value)}
              ></ha-textfield>
            </div>
            <ha-textfield
              label="Font Weight"
              .value=${e.font_weight||e["font-weight"]||""}
              @input=${e=>this._valueChanged(`${t}.font_weight`,e.target.value)}
            ></ha-textfield>
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Confirmation"}>
          <div class="section-content">
            <ha-formfield label="Require confirmation on tap">
              <ha-switch
                .checked=${!!e.confirmation}
                @change=${e=>{const i=e.target.checked;this._valueChanged(`${t}.confirmation`,i?"Are you sure?":void 0)}}
              ></ha-switch>
            </ha-formfield>
            ${e.confirmation?F`
              <ha-textfield
                label="Confirmation Text"
                .value=${"string"==typeof e.confirmation?e.confirmation:(null===(r=e.confirmation)||void 0===r?void 0:r.text)||"Are you sure?"}
                @input=${e=>this._valueChanged(`${t}.confirmation`,e.target.value)}
              ></ha-textfield>
            `:V}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Actions"}>
          <div class="section-content">
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,e.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,e.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${t}.double_tap_action`,e.double_tap_action)}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Info Templates"}>
          <div class="section-content">
            ${this._renderInfoTemplates(e,t)}
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderInfoTemplates(e,t){const i=Array.isArray(e.info_templates)?e.info_templates:e.info_template?[e.info_template]:[];return F`
      ${i.map(((e,a)=>F`
        <div class="side-by-side">
          <ha-textfield
            label="Template ${a+1}"
            .value=${e||""}
            @input=${e=>{const r=[...i];r[a]=e.target.value,this._valueChanged(`${t}.info_templates`,r)}}
          ></ha-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=[...i];e.splice(a,1),this._valueChanged(`${t}.info_templates`,e.length?e:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${i.length<2?F`
        <button class="editor-btn" @click=${()=>{const e=[...i,""];this._valueChanged(`${t}.info_templates`,e)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:V}
    `}_renderCardsSection(){const e=this._config.cards||[];return F`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${e.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${e.map(((e,t)=>this._renderEmbeddedCardItem(e,t)))}
          <button class="editor-btn" @click=${()=>{const t=[...e,{type:"tile",entity:""}];this._valueChanged("cards",t)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(e,t){return F`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Card ${t+1}: ${e.type||"unknown"}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=[...this._config.cards||[]];e.splice(t,1),this._valueChanged("cards",e.length?e:void 0)}}
          ></ha-icon-button>
        </div>
        <ha-yaml-editor
          .defaultValue=${e}
          @value-changed=${e=>{e.stopPropagation();const i=[...this._config.cards||[]];i[t]=e.detail.value,this._valueChanged("cards",i)}}
        ></ha-yaml-editor>
      </div>
    `}_renderActionConfig(e,t,i){return F`
      <ha-expansion-panel outlined .header=${e}>
        <div class="section-content">
          ${!!i?F`
            ${this._renderSelectField("Action",`${t}.action`,null==i?void 0:i.action,kt)}
            ${"navigate"===(null==i?void 0:i.action)?F`
              <ha-textfield
                label="Navigation Path"
                .value=${i.navigation_path||""}
                @input=${e=>this._valueChanged(`${t}.navigation_path`,e.target.value)}
              ></ha-textfield>
            `:V}
            ${"url"===(null==i?void 0:i.action)?F`
              <ha-textfield
                label="URL"
                .value=${i.url_path||""}
                @input=${e=>this._valueChanged(`${t}.url_path`,e.target.value)}
              ></ha-textfield>
            `:V}
            ${"call-service"===(null==i?void 0:i.action)||"perform-action"===(null==i?void 0:i.action)?F`
              <ha-textfield
                label="Service"
                .value=${i.service||""}
                @input=${e=>this._valueChanged(`${t}.service`,e.target.value)}
              ></ha-textfield>
              <ha-yaml-editor
                label="Service Data"
                .defaultValue=${i.service_data||{}}
                @value-changed=${e=>{e.stopPropagation(),this._valueChanged(`${t}.service_data`,e.detail.value)}}
              ></ha-yaml-editor>
            `:V}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:F`
            <button class="editor-btn" @click=${()=>this._valueChanged(t,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${e}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};Et.styles=l`
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
  `,i([Ce({attribute:!1})],Et.prototype,"hass",void 0),i([ke()],Et.prototype,"_config",void 0),i([ke()],Et.prototype,"_selectedHeaderIndex",void 0),i([ke()],Et.prototype,"_selectedSwitchRowIndex",void 0),i([ke()],Et.prototype,"_yamlMode",void 0),i([ke()],Et.prototype,"_yamlError",void 0),Et=i([xe("space-hub-card-editor")],Et);const St="ontouchstart"in window||navigator.maxTouchPoints>0;class Tt extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.startX=0,this.startY=0,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:St?"100px":"50px",height:St?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})})),document.addEventListener("touchmove",(e=>{var t;if(void 0===this.timer&&!this.held)return;const i=null===(t=e.touches)||void 0===t?void 0:t[0];if(i){const e=Math.abs(i.pageX-this.startX),t=Math.abs(i.pageY-this.startY);(e>Tt.HOLD_MOVE_THRESHOLD||t>Tt.HOLD_MOVE_THRESHOLD)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held=!1)}}),{passive:!0})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",(e=>(e.preventDefault(),e.stopPropagation(),!1)));const i=e=>{let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.startX=t,this.startY=i,this.timer=window.setTimeout((()=>{this.startAnimation(t,i),this.held=!0}),this.holdTime)},a=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer&&!this.held||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?(this.held=!1,Ge(e,"action",{action:"hold"})):t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,Ge(e,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,Ge(e,"action",{action:"double_tap"})):Ge(e,"action",{action:"tap"}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",(e=>{"Enter"===e.key&&a(e)}))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}Tt.HOLD_MOVE_THRESHOLD=10,customElements.define("action-handler-space-hub",Tt);const Ht=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-space-hub"))return e.querySelector("action-handler-space-hub");const t=document.createElement("action-handler-space-hub");return e.appendChild(t),t})();i&&i.bind(e,t||{})},zt=le(class extends de{update(e,[t]){return Ht(e.element,t),U}render(e){}});function Rt(e,t,i){var a,r,o,n;return t?{bg:null!==(r=null!==(a=i?t.background_active:t.background_inactive)&&void 0!==a?a:t.background)&&void 0!==r?r:e.bg,iconColor:null!==(n=null!==(o=i?t.icon_color_active:t.icon_color_inactive)&&void 0!==o?o:t.icon_color)&&void 0!==n?n:e.iconColor}:e}function It(e,t){var i;return"lock"===e||null!==(i=null==t?void 0:t.startsWith("lock."))&&void 0!==i&&i}function Nt(e,t){var i;const a=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),r=String((null==t?void 0:t.type)||"").toLowerCase(),o=a&&(null==e?void 0:e.hass)?e.hass.states[a]:void 0,n=((null==o?void 0:o.state)||"").toLowerCase(),s=!o||"unavailable"===n||"unknown"===n||""===n,c=!s&&function(e,t,i){var a;return!!t&&("lock"===i||null!==(a=null==e?void 0:e.startsWith("lock."))&&void 0!==a&&a?"locked"===t:"on"===t||"open"===t||"opening"===t)}(a,n,r),l=function(e,t,i,a,r,o){var n,s,c;return o?null!==(c=null!==(s=null!==(n=null==a?void 0:a.icon_unavailable)&&void 0!==n?n:null==a?void 0:a.icon_inactive)&&void 0!==s?s:null==a?void 0:a.icon)&&void 0!==c?c:"mdi:alert-circle-outline":r&&(null==a?void 0:a.icon_active)?a.icon_active:!r&&(null==a?void 0:a.icon_inactive)?a.icon_inactive:(null==a?void 0:a.icon)?a.icon:It(e,t)?r?"mdi:lock":"mdi:lock-open-variant":"door"===e?r?"mdi:door-open":"mdi:door":"presence"===e?"on"===i?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===e?"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===e?r?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===e?r?"mdi:gate-open":"mdi:gate":r?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(r,a,n,t,c,s),{bg:d,iconColor:p}=function(e,t,i,a,r,o){if(o)return function(e){var t,i,a,r,o,n;return{bg:null!==(a=null!==(i=null!==(t=null==e?void 0:e.background_unavailable)&&void 0!==t?t:null==e?void 0:e.background_inactive)&&void 0!==i?i:null==e?void 0:e.background)&&void 0!==a?a:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(n=null!==(o=null!==(r=null==e?void 0:e.icon_color_unavailable)&&void 0!==r?r:null==e?void 0:e.icon_color_inactive)&&void 0!==o?o:null==e?void 0:e.icon_color)&&void 0!==n?n:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(a);if(It(e,t))return Rt(r?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,r);if("door"===e||"sliding_gate"===e||"gate"===e)return Rt(r?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},a,r);if("presence"===e){const e="on"===i;return Rt(e?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,e)}if("smart_plug"===e)return Rt(r?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,r);return Rt(r?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,r)}(r,a,n,t,c,s),h="chip"+(s?" chip-unavailable":""),u=s?"icon-unavailable":"",m=null!==(i=null==o?void 0:o.state)&&void 0!==i?i:"unavailable";return F`
    <div
      class=${h}
      style=${`background:${d}`}
      title=${m}
      data-state=${n||"unavailable"}
      role="img"
      aria-label=${r?`${r} ${m}`:m}
    >
      <ha-icon .icon=${l} class=${u} style=${`color:${p}`}></ha-icon>
    </div>
  `}const Pt={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},Mt={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const Ot={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function Lt(e,t="static",i=!1){if(!e||"none"===t||!i)return{style:"",overlay:V};return{style:`${`--pulse-weak: ${e.weak}; --pulse-strong: ${e.strong};`} ${"pulse"===t?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${e.strong}), 0 6px 18px var(--pulse-weak, ${e.weak});`}`,overlay:F`<div class="glow-overlay" aria-hidden="true"></div>`}}function Dt(e,t){var i;const a=(null==t?void 0:t.icon)||"mdi:sofa-outline",r=(null==t?void 0:t.name)||"",o="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.temp_sensor,2,"°"):"—°",n="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.humidity_sensor,2,"%"):"—%",s=!(!(null==t?void 0:t.double_tap_action)&&!(null===(i=null==e?void 0:e._config)||void 0===i?void 0:i.double_tap_action)),c=!!(null==t?void 0:t.light_group_entity),l=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),d=c&&"function"==typeof(null==e?void 0:e._isOn)&&e._isOn(l),p=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),h=(null==t?void 0:t.glow_mode)||"static",u=!!(null==t?void 0:t.light_group_entity)&&d&&"none"!==h,m=Pt,{style:v,overlay:f}=Lt(m,h,u),g="chip main-light-chip "+(d?"on":"off"),y=Array.isArray(null==t?void 0:t.chips)?t.chips:[],_=y.find((e=>"illuminance"===String((null==e?void 0:e.type)||"").toLowerCase())),b=y.filter((e=>"illuminance"!==String((null==e?void 0:e.type)||"").toLowerCase())).map((t=>Nt(e,t))),w=_?function(e,t){const i=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),a=(null==t?void 0:t.icon)||"mdi:brightness-5",r="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(i,0," lx"):"— lx";return F`
    <div class="illuminance-chip">
      <ha-icon .icon=${a}></ha-icon>
      <span class="illuminance-value">${r}</span>
    </div>
  `}(e,_):V;return F`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${v}>${f}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onMainAction)&&e._onMainAction(i,t,null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity,p)}}
        .actionHandler=${zt({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${a}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${o}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${n}</span>
        </div>
        ${w}
        <div class="main-chips-bottom-right" data-role="chips">
          ${c?F`<div class=${g}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:V}
          ${b.length?F`${b}`:V}
        </div>
        <div class="main-name">${r}</div>
  </ha-control-button>
    </div>
  `}const Ft=(...e)=>e.filter(Boolean).join(" ");function Ut(e,t){return t&&t.length?F`${t.map(((t,i)=>function(e,t,i){const a=t,r=Array.isArray(t)?t:Array.isArray(null==a?void 0:a.row)?a.row:[];let o=Array.isArray(null==a?void 0:a.cards)?a.cards:Array.isArray(null==a?void 0:a.extra_cards)?a.extra_cards:[];if(!Array.isArray(o)||!o.length){const e=(null==a?void 0:a.card)||(null==a?void 0:a.extra_card);e&&"object"==typeof e&&(o=[e])}const n=Math.max(1,r.length||1),s=Array.isArray(o)&&o.length&&"function"==typeof(null==e?void 0:e._renderEmbeddedRowCard)?F`<div class="switch-row-cards">
        ${o.map(((t,a)=>e._renderEmbeddedRowCard(t,`switch-row-${i}-card-${a}`)))}
      </div>`:V;return F`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${n}`}>${r.map((t=>function(e,t){var i,a,r,o;const n=(null==t?void 0:t.entity)||"",s=(null==t?void 0:t.icon)||"",c=(null==t?void 0:t.name)||"",l=(null===(o=null===(r=null===(a=null===(i=null==e?void 0:e.hass)||void 0===i?void 0:i.states)||void 0===a?void 0:a[n])||void 0===r?void 0:r.attributes)||void 0===o?void 0:o.friendly_name)||"",d=c||l||n,p="smart_plug"===String((null==t?void 0:t.type)||"switch").toLowerCase(),h="function"==typeof(null==e?void 0:e._isOn)&&e._isOn(n),u=(null==t?void 0:t.icon_size)||(null==t?void 0:t["icon-size"]),m=(null==t?void 0:t.font_weight)||(null==t?void 0:t["font-weight"]),v=(null==t?void 0:t.font_size)||(null==t?void 0:t["font-size"]),f=e=>null==e||""===e?"":String(e).match(/px|em|rem|%$/)?String(e):`${Number(e)}px`,g=f(u),y=g?`width:${g};height:${g};--mdc-icon-size:${g};`:"",_=`${m?`font-weight:${m};`:""}${v?`font-size:${f(v)};`:""}`,b=`switch-tile ${p?"smart":""} ${h?"on":""}`,w="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),$="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),x=p?"smart":"",A=h?"on":"off",C=Ft("switch-chip",x,A),k=Ft("switch-icon",x,A),E=Ft("name","switch-name",x,A),S="function"==typeof(null==e?void 0:e._resolveSwitchTemplates)?e._resolveSwitchTemplates(t):[],T=Array.isArray(S)?S.map((e=>e&&"object"==typeof e?e.value:e)).slice(0,2):[],H=((e,t)=>{if(!Array.isArray(e)||!e.length)return V;const i=e.map((e=>{const t=null==e?"":String(e);return{text:t,trimmed:t.trim()}})).filter((e=>e.trimmed.length>0)).slice(0,2);return i.length?F`
    <div class=${t}>
      ${i.map((e=>F`<span>${e.text}</span>`))}
    </div>
  `:V})(T,Ft("switch-info",x,A)),z=i=>{"function"==typeof(null==e?void 0:e._onSwitchAction)&&e._onSwitchAction(i,t)},R=(null==t?void 0:t.glow_mode)||"static",I=p?Mt:Pt,{style:N,overlay:P}=Lt(I,R,h&&"none"!==R);if($){return F`
      <div class="tile-wrap">
      <div class="glow-under" style=${N}>${P}</div>
      ${H}
      <ha-control-button
        class=${`switch-tile-btn ${p?"smart":""} ${h?"on":""}`}
        @action=${z}
        .actionHandler=${zt({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
        role="button" tabindex="0"
      >
          <div class="tile-inner">
            ${w?F`<ha-chip class=${C}>
                  ${s?F`<ha-icon class=${k} .icon=${s} style=${y||V}></ha-icon>`:V}
                  ${d}
                </ha-chip>`:F`
                  ${s?F`<ha-icon class=${k} .icon=${s} style=${y||V}></ha-icon>`:V}
                  ${d?F`<div class=${E} style=${_}>${d}</div>`:V}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return F`
    <div class="tile-wrap ${b}"
         @action=${z}
         .actionHandler=${zt({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under" style=${N}>${P}</div>
      ${H}
      <div class="tile-inner">
        ${w?F`<ha-chip class=${C}>
              ${s?F`<ha-icon class=${k} .icon=${s} style=${y||V}></ha-icon>`:V}
              ${d}
            </ha-chip>`:F`
              ${s?F`<ha-icon class=${k} .icon=${s} style=${y||V}></ha-icon>`:V}
              ${d?F`<div class=${E} style=${_}>${d}</div>`:V}
            `}
      </div>
    </div>
  `}(e,t)))}</div>
      ${s}
    </div>
  `}(e,t,i)))}`:V}const Vt=l`
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
`,jt=l`
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
`,Bt=l`
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
`,qt=l`
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
`,Gt=l`
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
`,Yt=l`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,Wt=l`
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
`;var Xt;function Zt(e){try{Ge(window,"haptic",e)}catch(e){}}let Kt=Xt=class extends oe{constructor(){super(...arguments),this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(e){if(!e)throw new Error("Configuration is required");this._validateConfig(e);const t=Qe(e||{});Array.isArray(t.headers)||(t.headers=[]),Array.isArray(t.switch_rows)||(t.switch_rows=[]),Array.isArray(t.cards)||(t.cards=[]),this._clearRowCardCache(),this._config=t,this._syncTemplateEntries(t.switch_rows)}_validateConfig(e){const t=[];e.headers&&Array.isArray(e.headers)&&e.headers.forEach(((e,i)=>{if(e){if(e.ac&&(e.ac.entity?"string"==typeof e.ac.entity&&e.ac.entity.includes(".")||t.push(`Header ${i+1}: AC entity '${e.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):t.push(`Header ${i+1}: AC tile requires an 'entity' field`)),e.thermostat&&(e.thermostat.entity?"string"==typeof e.thermostat.entity&&e.thermostat.entity.includes(".")||t.push(`Header ${i+1}: Thermostat entity '${e.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):t.push(`Header ${i+1}: Thermostat tile requires an 'entity' field`)),e.main){const a=e.main;!!(a.main_name||a.main_icon||a.tap_entity||a.light_group_entity||a.temp_sensor||a.humidity_sensor||Array.isArray(a.chips)&&a.chips.length>0)||t.push(`Header ${i+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((e=>{const r=a[e];!r||"string"==typeof r&&r.includes(".")||t.push(`Header ${i+1}: Main tile ${e} '${r}' must be a valid entity ID`)}))}!e.ac&&!e.thermostat||e.main||t.push(`Header ${i+1}: AC and Thermostat tiles require a 'main' configuration block`)}else t.push(`Header ${i+1}: Header configuration cannot be empty`)})),e.switch_rows&&Array.isArray(e.switch_rows)&&e.switch_rows.forEach(((e,i)=>{if(!e)return void t.push(`Switch row ${i+1}: Switch row configuration cannot be empty`);const a=Array.isArray(e)?e:Array.isArray(e.row)?e.row:[];Array.isArray(a)&&0!==a.length?a.forEach(((e,a)=>{e&&e.entity?"string"==typeof e.entity&&e.entity.includes(".")||t.push(`Switch row ${i+1}, item ${a+1}: Switch entity '${e.entity}' must be a valid entity ID`):t.push(`Switch row ${i+1}, item ${a+1}: Switch item requires an 'entity' field`),!(null==e?void 0:e.hold_entity)||"string"==typeof e.hold_entity&&e.hold_entity.includes(".")||t.push(`Switch row ${i+1}, item ${a+1}: hold_entity '${e.hold_entity}' must be a valid entity ID`)})):t.push(`Switch row ${i+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([i,a])=>{const r=e[i];if(null!=r){const e=Number(r);(!Number.isFinite(e)||e<0)&&t.push(`${a} must be a positive number, got: ${r}`)}})),void 0!==e.card_shadow_intensity&&null!==e.card_shadow_intensity){const i=Number(e.card_shadow_intensity);Number.isFinite(i)&&(i<0||i>1)&&t.push(`Card shadow intensity must be between 0 and 1, got: ${i}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((i=>{const a=e[i];if(a&&"string"==typeof a){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(a)||t.push(`${i.replace(/_/g," ")} '${a}' is not a valid color format`)}})),t.length>0)throw new Error(`Invalid space-hub-card configuration:\n${t.map((e=>`• ${e}`)).join("\n")}`)}getCardSize(){return 6}render(){var e,t,i,a,r,o,n,s,c;if(!this._config)return V;const l=Xt.getStubConfig(),d=this._config||{},p={tile_height:null!==(e=d.tile_height)&&void 0!==e?e:l.tile_height,chip_icon_size:null!==(t=d.chip_icon_size)&&void 0!==t?t:l.chip_icon_size,main_icon_size:null!==(i=d.main_icon_size)&&void 0!==i?i:l.main_icon_size,chip_font_size:null!==(a=d.chip_font_size)&&void 0!==a?a:l.chip_font_size,card_shadow_color:null!==(r=d.card_shadow_color)&&void 0!==r?r:l.card_shadow_color,card_shadow_intensity:null!==(o=d.card_shadow_intensity)&&void 0!==o?o:l.card_shadow_intensity,unavailable_pulse_color:null!==(n=d.unavailable_pulse_color)&&void 0!==n?n:l.unavailable_pulse_color,headers:Array.isArray(d.headers)&&d.headers.length?d.headers:[],switch_rows:Array.isArray(d.switch_rows)?d.switch_rows:[],cards:Array.isArray(d.cards)?d.cards:[],tap_action:d.tap_action,hold_action:d.hold_action,double_tap_action:d.double_tap_action},h=Array.isArray(p.headers)&&p.headers.length?p.headers:[],u=Number(p.tile_height)||Number(l.tile_height)||80,m=Number(p.chip_icon_size)||Number(l.chip_icon_size)||14,v=Number(p.chip_font_size)||Number(l.chip_font_size)||12,f=Math.max(v+10,20),g=Math.round(.625*u),y=h[0]||{},_=Number(null!==(s=null==y?void 0:y.main_icon_size)&&void 0!==s?s:null==y?void 0:y.maicon_size),b=Number.isFinite(_)&&_>0?_:Number(p.main_icon_size)||Number(l.main_icon_size)||48,w=this._rgbaFromColor(p.card_shadow_color||l.card_shadow_color,null!==(c=p.card_shadow_intensity)&&void 0!==c?c:l.card_shadow_intensity),$=p.unavailable_pulse_color||l.unavailable_pulse_color||"#ff3b30",x=this._hasAnyUnavailable(p,h),A=this._rgbaFromColor($,.18),C=this._rgbaFromColor($,.36);return F`
      <ha-card class=${x?"unavailable":""}
               style=${`--panel-shadow-color:${x?A:w}; --unavail-weak:${A}; --unavail-strong:${C}`}>
        <div class="metrics" style=${`--tile-h:${u}px; --chip-size:${f}px; --chip-icon-size:${m}px; --main-icon-size:${b}px; --chip-font-size:${v}px; --ac-thermostat-icon:${g}px;`}>
          <div class="root">
            ${h.map((e=>this._renderHeaderRow(e)))}
            ${Ut(this,p.switch_rows)}
            ${Array.isArray(p.cards)&&p.cards.length?F`
                  <div class="extra-cards">
                    ${p.cards.map(((e,t)=>this._renderEmbeddedRowCard(e,`standalone-card-${t}`)))}
                  </div>
                `:V}
          </div>
        </div>
      </ha-card>
    `}updated(e){super.updated(e),e.has("hass")&&(this._rowCardElements.forEach((e=>{e&&(e.hass=this.hass)})),this._resumeTemplateSubscriptions())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((e=>this._disposeTemplateEntry(e)))}_renderHeaderRow(e){const t=e.main||{},i={tap_entity:t.tap_entity,hold_entity:t.hold_entity||t.tap_entity,glow_mode:t.glow_mode,light_group_entity:t.light_group_entity,name:t.main_name||t.name,icon:t.main_icon||t.icon,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,chips:Array.isArray(t.chips)?t.chips:[],tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},a=e.ac||{},r=e.thermostat||{},o=!!(null==a?void 0:a.entity),n=!!(null==r?void 0:r.entity),s=!(!t||!(t.main_name||t.name||t.light_group_entity||t.entity||t.main_icon||t.icon||t.temp_sensor||t.humidity_sensor||Array.isArray(t.chips)&&t.chips.length)),c=s&&o,l=s&&n;s||!o&&!n||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const d=F`
      <div class=${c||l?c&&l?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${s?Dt(this,i):V}
        ${c?function(e,t,i){var a,r,o;const n=((null===(o=null===(r=null===(a=null==e?void 0:e.hass)||void 0===a?void 0:a.states)||void 0===r?void 0:r[t])||void 0===o?void 0:o.state)||"").toLowerCase(),s=!!n&&"off"!==n,c="function"==typeof(null==e?void 0:e._acChip)?e._acChip(n):{icon:"mdi:air-conditioner"},l=(null==c?void 0:c.icon)||"mdi:air-conditioner",d="ac-mode-"+((p=n)&&"off"!==p?p.includes("cool")?"cool":p.includes("heat")?"heat":p.includes("dry")?"dry":p.includes("fan")?"fan":p.includes("auto")?"auto":"default":"off");var p;const h=`chip chip-temperature-humidity ac-chip ${d}`,u=`ac-fan ${d}${s?" spinning":""}`,m=function(e){const t=(e||"").toLowerCase();return t&&"off"!==t?t.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:t.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:t.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:t.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:t.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(n),v=null!=i?i:"static",{style:f,overlay:g}=Lt(m,v,s);return F`
    <div class="tile-wrap">
      <div class="glow-under" style=${f}>${g}</div>
      <ha-control-button
        class="square ac-tile ${s?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onACAction)&&e._onACAction(i,t)}}
        .actionHandler=${zt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${h}>
          <ha-icon .icon=${l}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${u} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,a.entity,a.glow_mode):V}
        ${l?function(e,t,i){var a,r,o,n,s,c,l,d;const p=null===(r=null===(a=null==e?void 0:e.hass)||void 0===a?void 0:a.states)||void 0===r?void 0:r[t],h="function"==typeof(null==e?void 0:e._fmtNumber)?e._fmtNumber.bind(e):e=>null==e?"—":String(e),u=h(null!==(c=null!==(n=null===(o=null==p?void 0:p.attributes)||void 0===o?void 0:o.temperature)&&void 0!==n?n:null===(s=null==p?void 0:p.attributes)||void 0===s?void 0:s.target_temp)&&void 0!==c?c:null===(l=null==p?void 0:p.attributes)||void 0===l?void 0:l.target_temperature,1)+"°",m="heating"===((null===(d=null==p?void 0:p.attributes)||void 0===d?void 0:d.hvac_action)||"").toLowerCase(),v="off"===((null==p?void 0:p.state)||"").toLowerCase()?"off":m?"heating":"idle",f=`thermostat-chip ${v}`,g=`temperature-chip ${v}`,y=`thermostat-icon ${v}`,_="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),b=null!=i?i:"static",w=Ot,{style:$,overlay:x}=Lt(w,b,m);return F`
    <div class="tile-wrap">
      <div class="glow-under" style=${$}>${x}</div>
      <ha-control-button
        class="square thermostat-tile ${m?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onThermostatAction)&&e._onThermostatAction(i,t)}}
        .actionHandler=${zt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${_?F`<ha-chip class=${f}>${u}</ha-chip>`:F`<div class=${g}><span class="thermostat-target">${u}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${y} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,r.entity,r.glow_mode):V}
      </div>
    `;return d}_renderEmbeddedRowCard(e,t){if(!e||"object"!=typeof e)return V;this._rowCardConfigs.get(t)!==e&&(this._rowCardElements.delete(t),this._rowCardPromises.delete(t)),this._rowCardConfigs.set(t,e);const i=this._rowCardElements.get(t);if(i)return i.hass=this.hass,F`<div class="embedded-card">${i}</div>`;const a=this._createRowCardElement(t,e).then((e=>(e.hass=this.hass,F`${e}`))).catch((t=>{const i=t instanceof Error?t.message:String(t),a=this._createErrorCard(i,e);return a.hass=this.hass,F`${a}`}));return F`<div class="embedded-card">${$e(a,V)}</div>`}async _createRowCardElement(e,t){const i=this._rowCardPromises.get(e);if(i)return i;const a=(async()=>{const i=await this._getCardHelpers();let a;try{a=(null==i?void 0:i.createCardElement)?await i.createCardElement(t):Xe(t)}catch(e){const i=e instanceof Error?e.message:String(e);a=this._createErrorCard(i,t)}return a.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(e),this._rowCardPromises.delete(e);const a=this._rowCardConfigs.get(e)||t;this._createRowCardElement(e,a).then((()=>this.requestUpdate()))})),this._rowCardElements.set(e,a),this._rowCardPromises.delete(e),a})();return this._rowCardPromises.set(e,a),a}_createErrorCard(e,t){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:e,origConfig:t}),i}catch(i){return Xe({type:"hui-error-card",error:e,origConfig:t})}}async _getCardHelpers(){if(!this._helpersPromise){const e=window.loadCardHelpers;this._helpersPromise="function"==typeof e?e():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_toggleByDomain(e){if(!e||!this.hass)return;const t=this.hass.states[e],i=e.split(".")[0],a=((null==t?void 0:t.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(e);else{const t="open"===a||"opening"===a?"close_cover":"open_cover";this.hass.callService("cover",t,{entity_id:e})}else{const t="locked"===a?"unlock":"lock";this.hass.callService("lock",t,{entity_id:e})}}_onMainAction(e,t,i,a,r){const o=e.detail&&e.detail.action||"tap";this.hass&&t&&(t.tap_action||t.hold_action||t.double_tap_action)?Je(this,this.hass,t,o):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?Je(this,this.hass,this._config,o):"hold"===o?(Zt("medium"),this._openMoreInfo(a||i)):this._toggleGeneric(r||i)}_onACAction(e,t){this._onClimateTileAction(e,t,(()=>this._acToggle(t)))}_onThermostatAction(e,t){this._onClimateTileAction(e,t,(()=>this._thermostatToggle(t)))}_onClimateTileAction(e,t,i){"hold"===(e.detail&&e.detail.action||"tap")?(Zt("medium"),this._openMoreInfo(t)):(Zt("success"),i())}_onSwitchAction(e,t){const i=e.detail&&e.detail.action||"tap",a=null==t?void 0:t.entity,r=(null==t?void 0:t.hold_entity)||a,o=!!((null==t?void 0:t.tap_action)||(null==t?void 0:t.hold_action)||(null==t?void 0:t.double_tap_action));if("tap"===i||"double_tap"===i){const e=null==t?void 0:t.confirmation;if("tap"===i&&e){const e=()=>{this.hass&&o?Je(this,this.hass,t,i):this._toggleByDomain(a)};return void this._showConfirmation(t,e)}this.hass&&o?Je(this,this.hass,t,i):this._toggleByDomain(a)}else"hold"===i&&(Zt("medium"),this.hass&&o?Je(this,this.hass,t,i):this._openMoreInfo(r||a))}_showConfirmation(e,t){var i,a,r,o;const n=null==e?void 0:e.confirmation,s=("string"==typeof n?n:null==n?void 0:n.text)||"Are you sure?",c=(null==e?void 0:e.entity)||"",l=(null==e?void 0:e.name)||(null===(o=null===(r=null===(a=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===a?void 0:a[c])||void 0===r?void 0:r.attributes)||void 0===o?void 0:o.friendly_name)||c,d=document.createElement("div");d.className="sh-confirm-overlay";const p=document.createElement("div");p.className="sh-confirm-dialog",p.innerHTML=`\n      <div class="sh-confirm-title">${this._escapeHtml(l)}</div>\n      <div class="sh-confirm-text">${this._escapeHtml(s)}</div>\n      <div class="sh-confirm-actions">\n        <button class="sh-confirm-btn sh-cancel">Cancel</button>\n        <button class="sh-confirm-btn sh-ok">Confirm</button>\n      </div>\n    `,d.appendChild(p);const h=()=>{d.classList.add("sh-closing"),d.addEventListener("animationend",(()=>d.remove()),{once:!0}),setTimeout((()=>{d.parentNode&&d.remove()}),300)};d.addEventListener("click",(e=>{e.target===d&&h()})),p.querySelector(".sh-cancel").addEventListener("click",(()=>h())),p.querySelector(".sh-ok").addEventListener("click",(()=>{h(),Zt("success"),t()})),this.shadowRoot.appendChild(d)}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_resolveSwitchTemplates(e){const t=this._extractTemplatesFromSwitch(e);return t.length?t.map((e=>({template:e,value:this._getTemplateDisplayValue(e)}))):[]}_extractTemplatesFromSwitch(e){if(!e||"object"!=typeof e)return[];const t=e,i=((...e)=>{for(const i of e)if(i in t)return t[i]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==i)return[];const a=Array.isArray(i)?i:[i],r=[];return a.some((e=>{let t;"string"==typeof e?t=e:e&&"object"==typeof e&&(t=e.template||e.value||e.value_template||e.text);const i="string"==typeof t?t.trim():"";return i&&r.push(i),r.length>=2})),r.slice(0,2)}_syncTemplateEntries(e){const t=this._collectTemplatesFromRows(e);if(!t.size&&!this._switchTemplateValues.size)return;const i=[];this._switchTemplateValues.forEach(((e,a)=>{t.has(a)||i.push(a)})),i.forEach((e=>{const t=this._switchTemplateValues.get(e);t&&this._disposeTemplateEntry(t),this._switchTemplateValues.delete(e)})),t.forEach((e=>this._ensureTemplateEntry(e)))}_collectTemplatesFromRows(e){const t=new Set;return Array.isArray(e)?(e.forEach((e=>{const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[];Array.isArray(i)&&i.forEach((e=>{this._extractTemplatesFromSwitch(e).forEach((e=>t.add(e)))}))})),t):t}_ensureTemplateEntry(e){const t=(e||"").trim();if(!t)return;let i=this._switchTemplateValues.get(t);return i||(i={value:"",ready:!1},this._switchTemplateValues.set(t,i)),this._startTemplateSubscription(t,i),i}_getTemplateDisplayValue(e){var t;const i=this._ensureTemplateEntry(e);return i?i.error?"!":i.ready?null!==(t=i.value)&&void 0!==t?t:"":"…":""}_startTemplateSubscription(e,t){var i;!(null===(i=this.hass)||void 0===i?void 0:i.connection)||t.unsub||t.pending||(t.pending=!0,this.hass.connection.subscribeMessage((e=>{t.ready=!0,t.error=void 0;const i=e&&"object"==typeof e&&"result"in e?e.result:e;t.value=null!=i?String(i):"",this.requestUpdate()}),{type:"render_template",template:e},{resubscribe:!0}).then((e=>{t.unsub=e})).catch((i=>{t.ready=!0,t.error=(null==i?void 0:i.message)||"error",t.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${e}":`,i),this.requestUpdate()})).finally((()=>{t.pending=!1})))}_disposeTemplateEntry(e){if(e.unsub){try{e.unsub()}catch(e){}e.unsub=void 0}e.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((e,t)=>this._startTemplateSubscription(t,e)))}_fmt2(e,t,i){if(!e||!this.hass)return"—"+(i||"");const a=this.hass.states[e];if(!a||""===a.state||"unknown"===a.state||"unavailable"===a.state)return"—"+(i||"");const r=Number(a.state);return Number.isFinite(r)?r.toFixed(t)+(i||""):String(a.state)+(i||"")}_fmtNumber(e,t){if(null==e||""===e||"unknown"===e||"unavailable"===e)return"—";const i=Number(e);return Number.isFinite(i)?i.toFixed(t):String(e)}_acChip(e){return e&&"off"!==e?e.includes("cool")?{icon:"mdi:snowflake"}:e.includes("heat")?{icon:"mdi:fire"}:e.includes("dry")?{icon:"mdi:water-percent"}:e.includes("fan")?{icon:"mdi:fan"}:e.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_acToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i=((null==t?void 0:t.state)||"").toLowerCase(),a=!!i&&"off"!==i;this.hass.callService("climate",a?"turn_off":"turn_on",{entity_id:e})}_thermostatToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i="off"===((null==t?void 0:t.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:e,hvac_mode:i})}_toggleGeneric(e){if(!e||!this.hass)return;const t=e.split(".")[0],i="switch"===t||"light"===t?`${t}.toggle`:"homeassistant.toggle",[a,r]=i.split(".");this.hass.callService(a,r,{entity_id:e})}_isOn(e){if(!e||!this.hass)return!1;const t=this.hass.states[e];return"on"===((null==t?void 0:t.state)||"").toLowerCase()}_rgbaFromColor(e,t=.5){const i=Math.max(0,Math.min(1,Number(t)||0));if(!e||"string"!=typeof e)return`rgba(0,0,0,${i})`;const a=e.trim();if(a.startsWith("rgba(")||a.startsWith("rgb(")||a.startsWith("hsl(")||a.startsWith("var("))return a;const r=a.replace("#",""),o=e=>parseInt(e,16);if(3===r.length){return`rgba(${o(r[0]+r[0])},${o(r[1]+r[1])},${o(r[2]+r[2])},${i})`}if(r.length>=6){return`rgba(${o(r.slice(0,2))},${o(r.slice(2,4))},${o(r.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(e,t){const i=[],a=Array.isArray(t)?t:[t],r=e=>{e&&("string"==typeof e?i.push(e):Array.isArray(e)&&e.forEach((e=>r(e))))},o=e=>{e&&"object"==typeof e&&(r(e.entity),r(e.entity_id),r(e.entities),r(e.tap_entity),r(e.hold_entity),r(e.double_tap_entity),Array.isArray(e.cards)&&e.cards.forEach(o),Array.isArray(e.rows)&&e.rows.forEach(o),Array.isArray(e.columns)&&e.columns.forEach(o),Array.isArray(e.sections)&&e.sections.forEach(o),Array.isArray(e.widgets)&&e.widgets.forEach(o),Array.isArray(e.items)&&e.items.forEach(o),Array.isArray(e.elements)&&e.elements.forEach(o),e.card&&o(e.card),e.header&&o(e.header),e.footer&&o(e.footer))};a.forEach((e=>{const t=(null==e?void 0:e.main)||{},a={tap_entity:t.tap_entity,hold_entity:t.hold_entity||t.tap_entity,light_group_entity:t.light_group_entity,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,chips:Array.isArray(t.chips)?t.chips:[]},r=(null==e?void 0:e.ac)||{},o=(null==e?void 0:e.thermostat)||{};i.push(null==a?void 0:a.tap_entity,null==a?void 0:a.hold_entity,null==a?void 0:a.light_group_entity,null==a?void 0:a.temp_sensor,null==a?void 0:a.humidity_sensor),i.push(null==r?void 0:r.entity,null==o?void 0:o.entity),a.chips.forEach((e=>{i.push(null==e?void 0:e.entity,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity)}))}));return(e.switch_rows||[]).forEach((e=>{var t;(Array.isArray(e)?e:Array.isArray(null===(t=e)||void 0===t?void 0:t.row)?e.row:[]).forEach((e=>{i.push(null==e?void 0:e.entity,null==e?void 0:e.hold_entity)}))})),Array.isArray(e.cards)&&e.cards.forEach((e=>o(e))),i}_hasAnyUnavailable(e,t){if(!this.hass)return!1;const i=this._getAllCardEntities(e,t),a=new Set(["unavailable","unknown","offline"]);return i.some((e=>{var t,i;if(!e)return!1;const r=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e];if(!r)return!0;const o=(r.state||"").toLowerCase();return a.has(o)}))}};Kt.styles=[Vt,jt,Bt,qt,Gt,Yt,Wt],i([Ce({attribute:!1})],Kt.prototype,"hass",void 0),i([ke()],Kt.prototype,"_config",void 0),Kt=Xt=i([xe("space-hub-card")],Kt),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.0"});try{const e=window;if(!e.__SPACE_HUB_CARD_LOGGED__){const t="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.0",t,i),e.__SPACE_HUB_CARD_LOGGED__=!0}}catch(e){}var Jt=Kt;export{Kt as SpaceHubCard,Jt as default};
