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
function e(e,t,i,a){var o,n=arguments.length,r=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(n<3?o(r):n>3?o(t,i,r):o(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class n{constructor(e,t,i){if(this._$cssResult$=!0,i!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,a)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[a+1]),e[0]);return new n(i,e,a)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,a))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},v=(e,t)=>t!==e&&(t==t||e==e),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:v},g="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const a=this._$Ep(i,t);void 0!==a&&(this._$Ev.set(a,i),e.push(a))})),e}static createProperty(e,t=m){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,a=this.getPropertyDescriptor(e,i,t);void 0!==a&&Object.defineProperty(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(a){const o=this[e];this[t]=a,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||m}static finalize(){if(this.hasOwnProperty(g))return!1;this[g]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const a=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,a)=>{i?e.adoptedStyleSheets=a.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):a.forEach((i=>{const a=document.createElement("style"),o=t.litNonce;void 0!==o&&a.setAttribute("nonce",o),a.textContent=i.cssText,e.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=m){var a;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(a=i.converter)||void 0===a?void 0:a.toAttribute)?i.converter:p).toAttribute(t,i.type);this._$El=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(e,t){var i;const a=this.constructor,o=a._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=a.getPropertyOptions(o),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:p;this._$El=o,this[o]=n.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let a=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||v)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _;f[g]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,y=b.trustedTypes,$=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,x="?"+w,A=`<${x}>`,C=document,k=()=>C.createComment(""),E=e=>null===e||"object"!=typeof e&&"function"!=typeof e,S=Array.isArray,T="[ \t\n\f\r]",H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,M=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,P=/"/g,R=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),O=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),D=new WeakMap,V=C.createTreeWalker(C,129,null,!1);function j(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==$?$.createHTML(t):t}class F{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,n=0;const r=e.length-1,s=this.parts,[l,c]=((e,t)=>{const i=e.length-1,a=[];let o,n=2===t?"<svg>":"",r=H;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===H?"!--"===l[1]?r=z:void 0!==l[1]?r=M:void 0!==l[2]?(R.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=null!=o?o:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?N:'"'===l[3]?P:I):r===P||r===I?r=N:r===z||r===M?r=H:(r=N,o=void 0);const h=r===N&&e[t+1].startsWith("/>")?" ":"";n+=r===H?i+A:c>=0?(a.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+w+h):i+w+(-2===c?(a.push(void 0),t):h)}return[j(e,n+(e[i]||"<?>")+(2===t?"</svg>":"")),a]})(e,t);if(this.el=F.createElement(l,i),V.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(a=V.nextNode())&&s.length<r;){if(1===a.nodeType){if(a.hasAttributes()){const e=[];for(const t of a.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const i=c[n++];if(e.push(t),void 0!==i){const e=a.getAttribute(i.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?G:"?"===t[1]?K:"@"===t[1]?J:W})}else s.push({type:6,index:o})}for(const t of e)a.removeAttribute(t)}if(R.test(a.tagName)){const e=a.textContent.split(w),t=e.length-1;if(t>0){a.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)a.append(e[i],k()),V.nextNode(),s.push({type:2,index:++o});a.append(e[t],k())}}}else if(8===a.nodeType)if(a.data===x)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=a.data.indexOf(w,e+1));)s.push({type:7,index:o}),e+=w.length-1}o++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,a){var o,n,r,s;if(t===O)return t;let l=void 0!==a?null===(o=i._$Co)||void 0===o?void 0:o[a]:i._$Cl;const c=E(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,a)),void 0!==a?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[a]=l:i._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,a)),t}class B{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:a}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);V.currentNode=o;let n=V.nextNode(),r=0,s=0,l=a[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new Y(n,n.nextSibling,this,e):1===l.type?t=new l.ctor(n,l.name,l.strings,this,e):6===l.type&&(t=new X(n,this,e)),this._$AV.push(t),l=a[++s]}r!==(null==l?void 0:l.index)&&(n=V.nextNode(),r++)}return V.currentNode=C,o}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,a){var o;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cp=null===(o=null==a?void 0:a.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),E(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==O&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>S(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&E(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:a}=e,o="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=F.createElement(j(a.h,a.h[0]),this.options)),a);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(i);else{const e=new B(o,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=D.get(e.strings);return void 0===t&&D.set(e.strings,t=new F(e)),t}T(e){S(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new Y(this.k(k()),this.k(k()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class W{constructor(e,t,i,a,o){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,a){const o=this.strings;let n=!1;if(void 0===o)e=q(this,e,t,0),n=!E(e)||e!==this._$AH&&e!==O,n&&(this._$AH=e);else{const a=e;let r,s;for(e=o[0],r=0;r<o.length-1;r++)s=q(this,a[i+r],t,r),s===O&&(s=this._$AH[r]),n||(n=!E(s)||s!==this._$AH[r]),s===U?e=U:e!==U&&(e+=(null!=s?s:"")+o[r+1]),this._$AH[r]=s}n&&!a&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class G extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}}const Z=y?y.emptyScript:"";class K extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class J extends W{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=q(this,e,t,0))&&void 0!==i?i:U)===O)return;const a=this._$AH,o=e===U&&a!==U||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==U&&(a===U||o);o&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const Q=b.litHtmlPolyfillSupport;null==Q||Q(F,Y),(null!==(_=b.litHtmlVersions)&&void 0!==_?_:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ee,te;class ie extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var a,o;const n=null!==(a=null==i?void 0:i.renderBefore)&&void 0!==a?a:t;let r=n._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new Y(t.insertBefore(k(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return O}}ie.finalized=!0,ie._$litElement$=!0,null===(ee=globalThis.litElementHydrateSupport)||void 0===ee||ee.call(globalThis,{LitElement:ie});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:ie}),(null!==(te=globalThis.litElementVersions)&&void 0!==te?te:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=2,ne=e=>(...t)=>({_$litDirective$:e,values:t});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=(e,t)=>{var i,a;const o=e._$AN;if(void 0===o)return!1;for(const e of o)null===(a=(i=e)._$AO)||void 0===a||a.call(i,t,!1),se(e,t);return!0},le=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},ce=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),ue(t)}};function de(e){void 0!==this._$AN?(le(this),this._$AM=e,ce(this)):this._$AM=e}function he(e,t=!1,i=0){const a=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(a))for(let e=i;e<a.length;e++)se(a[e],!1),le(a[e]);else null!=a&&(se(a,!1),le(a));else se(this,e)}const ue=e=>{var t,i,a,o;e.type==oe&&(null!==(t=(a=e)._$AP)&&void 0!==t||(a._$AP=he),null!==(i=(o=e)._$AQ)&&void 0!==i||(o._$AQ=de))};class pe extends re{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),ce(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,a;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),t&&(se(this,e),le(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ve{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class me{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,fe=1073741823;const _e=ne(class extends pe{constructor(){super(...arguments),this._$C_t=fe,this._$Cwt=[],this._$Cq=new ve(this),this._$CK=new me}render(...e){var t;return null!==(t=e.find((e=>!ge(e))))&&void 0!==t?t:O}update(e,t){const i=this._$Cwt;let a=i.length;this._$Cwt=t;const o=this._$Cq,n=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const r=t[e];if(!ge(r))return this._$C_t=e,r;e<a&&r===i[e]||(this._$C_t=fe,a=0,Promise.resolve(r).then((async e=>{for(;n.get();)await n.get();const t=o.deref();if(void 0!==t){const i=t._$Cwt.indexOf(r);i>-1&&i<t._$C_t&&(t._$C_t=i,t.setValue(e))}})))}return O}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),be=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:a}=t;return{kind:i,elements:a,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ye=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ye(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function we(e){return $e({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe;null===(xe=window.HTMLSlotElement)||void 0===xe||xe.prototype.assignedElements;var Ae="[^\\s]+";function Ce(e,t){for(var i=[],a=0,o=e.length;a<o;a++)i.push(e[a].substr(0,t));return i}var ke=function(e){return function(t,i){var a=i[e].map((function(e){return e.toLowerCase()})),o=a.indexOf(t.toLowerCase());return o>-1?o:null}};function Ee(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var a=0,o=t;a<o.length;a++){var n=o[a];for(var r in n)e[r]=n[r]}return e}var Se=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Te=["January","February","March","April","May","June","July","August","September","October","November","December"],He=Ce(Te,3),ze={dayNamesShort:Ce(Se,3),dayNames:Se,monthNamesShort:He,monthNames:Te,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},Me=(Ee({},ze),function(e){return+e-1}),Ne=[null,"[1-9]\\d?"],Ie=[null,Ae],Pe=["isPm",Ae,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],Re=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}];ke("monthNamesShort"),ke("monthNames");var Le,Oe;!function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Le||(Le={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Oe||(Oe={}));var Ue=["closed","locked","off"],De=function(e,t,i,a){a=a||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return o.detail=i,e.dispatchEvent(o),o},Ve=new Set(["call-service","divider","section","weblink","cast","select"]),je={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Fe=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return a("hui-error-card",{type:"error",error:e,config:t})},a=function(e,t){var a=window.document.createElement(e);try{a.setConfig(t)}catch(a){return console.error(e,a),i(a.message,t)}return a};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var o=e.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(t)if(Ve.has(o))o="hui-"+o+"-row";else{if(!e.entity)return i("Invalid config given.",e);var n=e.entity.split(".",1)[0];o="hui-"+(je[n]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return a(o,e);var r=i("Custom element doesn't exist: "+e.type+".",e);r.style.display="None";var s=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),De(r,"ll-rebuild",{},r)})),r},qe=function(e){De(window,"haptic",e)},Be=function(e,t,i,a){if(a||(a={action:"more-info"}),!a.confirmation||a.confirmation.exemptions&&a.confirmation.exemptions.some((function(e){return e.user===t.user.id}))||(qe("warning"),confirm(a.confirmation.text||"Are you sure you want to "+a.action+"?")))switch(a.action){case"more-info":(i.entity||i.camera_image)&&De(e,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":a.navigation_path&&function(e,t,i){void 0===i&&(i=!1),i?history.replaceState(null,"",t):history.pushState(null,"",t),De(window,"location-changed",{replace:i})}(0,a.navigation_path);break;case"url":a.url_path&&window.open(a.url_path);break;case"toggle":i.entity&&(function(e,t){(function(e,t,i){void 0===i&&(i=!0);var a,o=function(e){return e.substr(0,e.indexOf("."))}(t),n="group"===o?"homeassistant":o;switch(o){case"lock":a=i?"unlock":"lock";break;case"cover":a=i?"open_cover":"close_cover";break;default:a=i?"turn_on":"turn_off"}e.callService(n,a,{entity_id:t})})(e,t,Ue.includes(e.states[t].state))}(t,i.entity),qe("success"));break;case"call-service":if(!a.service)return void qe("failure");var o=a.service.split(".",2);t.callService(o[0],o[1],a.service_data),qe("success");break;case"fire-dom-event":De(e,"ll-custom",a)}},Ye=function(e,t,i,a){var o;"double_tap"===a&&i.double_tap_action?o=i.double_tap_action:"hold"===a&&i.hold_action?o=i.hold_action:"tap"===a&&i.tap_action&&(o=i.tap_action),Be(e,t,i,o)};function We(e){return JSON.parse(JSON.stringify(e))}const Ge=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],Ze=["switch","smart_plug"],Ke=["static","pulse","none"],Je=["more-info","toggle","call-service","perform-action","navigate","url","none"];let Xe=class extends ie{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._loadedElements=!1}setConfig(e){this._config=We(e)}async connectedCallback(){super.connectedCallback(),await this._loadHAElements()}async _loadHAElements(){var e,t,i;if(this._loadedElements)return;this._loadedElements=!0;const a=await(null===(t=(e=window).loadCardHelpers)||void 0===t?void 0:t.call(e));a&&await(null===(i=a.createCardElement)||void 0===i?void 0:i.call(a,{type:"entities",entities:[]}));await Promise.all(["ha-entity-picker","ha-icon-picker","ha-select","ha-textfield","ha-expansion-panel"].map((e=>Promise.race([customElements.whenDefined(e),new Promise((e=>setTimeout(e,3e3)))])))).catch((()=>{})),this.requestUpdate()}_fireConfigChanged(){De(this,"config-changed",{config:We(this._config)}),this.requestUpdate()}_valueChanged(e,t){const i=e.split(".");let a=this._config;for(let e=0;e<i.length-1;e++){const t=i[e],o=Number(t);if(Number.isFinite(o)){if(!Array.isArray(a))return;a[o]||(a[o]={}),a=a[o]}else void 0===a[t]&&(a[t]={}),a=a[t]}const o=i[i.length-1];""===t||null==t?delete a[o]:a[o]=t,this._fireConfigChanged()}_getNestedValue(e){const t=e.split(".");let i=this._config;for(const e of t){if(null==i)return;const t=Number(e);i=Number.isFinite(t)?i[t]:i[e]}return i}render(){return this.hass&&this._config?L`
      <div class="editor-container">
        <div class="mode-toggle">
          <mwc-button
            dense
            .outlined=${!this._yamlMode}
            @click=${()=>{this._yamlMode=!1,this._yamlError=""}}
          >Visual Editor</mwc-button>
          <mwc-button
            dense
            .outlined=${this._yamlMode}
            @click=${()=>{this._yamlMode=!0}}
          >YAML</mwc-button>
        </div>
        ${this._yamlMode?this._renderYamlEditor():this._renderVisualEditor()}
      </div>
    `:L``}_renderYamlEditor(){return L`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?L`<div class="yaml-error">${this._yamlError}</div>`:U}
    `}_yamlChanged(e){e.stopPropagation();const t=e.detail.value;t&&"object"==typeof t?(this._yamlError="",this._config=We(t),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return L`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var e,t,i,a,o;return L`
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
              .value=${String(null!==(o=this._config.card_shadow_intensity)&&void 0!==o?o:"")}
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
    `}_renderHeadersSection(){const e=this._config.headers||[];return L`
      <ha-expansion-panel outlined .header=${`Headers (${e.length})`}>
        <div class="section-content">
          ${e.length>1?L`
            <mwc-tab-bar
              .activeIndex=${this._selectedHeaderIndex}
              @MDCTabBar:activated=${e=>{this._selectedHeaderIndex=e.detail.index,this.requestUpdate()}}
            >
              ${e.map(((e,t)=>L`<mwc-tab label="Header ${t+1}"></mwc-tab>`))}
            </mwc-tab-bar>
          `:U}
          ${e.length?this._renderHeader(e[this._selectedHeaderIndex]||e[0],this._selectedHeaderIndex):L`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <mwc-button outlined @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </mwc-button>
            ${e.length>0?L`
              <mwc-button outlined class="danger" @click=${()=>this._removeHeader(this._selectedHeaderIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${this._selectedHeaderIndex+1}
              </mwc-button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(e){this._config.headers&&(this._config.headers.splice(e,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(e,t){const i=`headers.${t}`;return L`
      ${this._renderMainTileConfig(e.main,`${i}.main`)}
      ${this._renderACConfig(e.ac,`${i}.ac`)}
      ${this._renderThermostatConfig(e.thermostat,`${i}.thermostat`)}
    `}_renderMainTileConfig(e,t){const i=e||{};return L`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!e?L`
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
            <ha-select
              label="Glow Mode"
              .value=${i.glow_mode||"static"}
              @selected=${e=>this._valueChanged(`${t}.glow_mode`,e.target.value)}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${Ke.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
            </ha-select>
            ${this._renderChipsConfig(i.chips||[],t)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${t}.double_tap_action`,i.double_tap_action)}
            <mwc-button outlined class="danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </mwc-button>
          `:L`
            <mwc-button outlined @click=${()=>{this._valueChanged(t,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </mwc-button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(e,t){const i=`${t}.chips`;return L`
      <ha-expansion-panel outlined .header=${`Chips (${e.length})`}>
        <div class="section-content">
          ${e.map(((e,t)=>this._renderSingleChip(e,`${i}.${t}`,t,i)))}
          <mwc-button outlined @click=${()=>{const e=this._getNestedValue(i)||[];e.push({type:"custom",entity:""}),this._valueChanged(i,e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </mwc-button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(e,t,i,a){return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>Chip ${i+1}: ${e.type||"custom"}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=this._getNestedValue(a)||[];e.splice(i,1),this._valueChanged(a,[...e])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          <ha-select
            label="Type"
            .value=${e.type||"custom"}
            @selected=${e=>this._valueChanged(`${t}.type`,e.target.value)}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${Ge.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
          </ha-select>
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
    `}_renderACConfig(e,t){return L`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!e?L`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${e.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
            ></ha-entity-picker>
            <ha-select
              label="Glow Mode"
              .value=${e.glow_mode||"static"}
              @selected=${e=>this._valueChanged(`${t}.glow_mode`,e.target.value)}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${Ke.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
            </ha-select>
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,e.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,e.hold_action)}
            <mwc-button outlined class="danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </mwc-button>
          `:L`
            <mwc-button outlined @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </mwc-button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(e,t){return L`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!e?L`
            <ha-entity-picker
              .hass=${this.hass}
              label="Climate Entity"
              .value=${e.entity||""}
              .includeDomains=${["climate"]}
              allow-custom-entity
              @value-changed=${e=>this._valueChanged(`${t}.entity`,e.detail.value)}
            ></ha-entity-picker>
            <ha-select
              label="Glow Mode"
              .value=${e.glow_mode||"static"}
              @selected=${e=>this._valueChanged(`${t}.glow_mode`,e.target.value)}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${Ke.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
            </ha-select>
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,e.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,e.hold_action)}
            <mwc-button outlined class="danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </mwc-button>
          `:L`
            <mwc-button outlined @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </mwc-button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const e=this._config.switch_rows||[];return L`
      <ha-expansion-panel outlined .header=${`Switch Rows (${e.length})`}>
        <div class="section-content">
          ${e.length>1?L`
            <mwc-tab-bar
              .activeIndex=${this._selectedSwitchRowIndex}
              @MDCTabBar:activated=${e=>{this._selectedSwitchRowIndex=e.detail.index,this.requestUpdate()}}
            >
              ${e.map(((e,t)=>L`<mwc-tab label="Row ${t+1}"></mwc-tab>`))}
            </mwc-tab-bar>
          `:U}
          ${e.length?this._renderSwitchRow(e[this._selectedSwitchRowIndex]||e[0],this._selectedSwitchRowIndex):L`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <mwc-button outlined @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </mwc-button>
            ${e.length>0?L`
              <mwc-button outlined class="danger" @click=${()=>this._removeSwitchRow(this._selectedSwitchRowIndex)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${this._selectedSwitchRowIndex+1}
              </mwc-button>
            `:U}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"New Switch",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(e){this._config.switch_rows&&(this._config.switch_rows.splice(e,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(e,t){const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[],a=`switch_rows.${t}`,o=Array.isArray(e)?a:`${a}.row`;return L`
      <div class="section-content">
        ${i.map(((e,t)=>this._renderSwitchItem(e,`${o}.${t}`,t,o)))}
        <mwc-button outlined @click=${()=>{const e=this._getNestedValue(o)||[];e.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(o,[...e])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </mwc-button>
      </div>
    `}_renderSwitchItem(e,t,i,a){var o;return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <span>${e.name||e.entity||`Switch ${i+1}`}</span>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=this._getNestedValue(a)||[];e.splice(i,1),this._valueChanged(a,[...e])}}
          ></ha-icon-button>
        </div>
        <ha-entity-picker
          .hass=${this.hass}
          label="Entity"
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
          <ha-select
            label="Type"
            .value=${e.type||"switch"}
            @selected=${e=>this._valueChanged(`${t}.type`,e.target.value)}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${Ze.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
          </ha-select>
          <ha-select
            label="Glow Mode"
            .value=${e.glow_mode||"static"}
            @selected=${e=>this._valueChanged(`${t}.glow_mode`,e.target.value)}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            ${Ke.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
          </ha-select>
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
            ${e.confirmation?L`
              <ha-textfield
                label="Confirmation Text"
                .value=${"string"==typeof e.confirmation?e.confirmation:(null===(o=e.confirmation)||void 0===o?void 0:o.text)||"Are you sure?"}
                @input=${e=>this._valueChanged(`${t}.confirmation`,e.target.value)}
              ></ha-textfield>
            `:U}
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
    `}_renderInfoTemplates(e,t){const i=Array.isArray(e.info_templates)?e.info_templates:e.info_template?[e.info_template]:[];return L`
      ${i.map(((e,a)=>L`
        <div class="side-by-side">
          <ha-textfield
            label="Template ${a+1}"
            .value=${e||""}
            @input=${e=>{const o=[...i];o[a]=e.target.value,this._valueChanged(`${t}.info_templates`,o)}}
          ></ha-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=[...i];e.splice(a,1),this._valueChanged(`${t}.info_templates`,e.length?e:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${i.length<2?L`
        <mwc-button outlined @click=${()=>{const e=[...i,""];this._valueChanged(`${t}.info_templates`,e)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </mwc-button>
      `:U}
    `}_renderCardsSection(){const e=this._config.cards||[];return L`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${e.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${e.map(((e,t)=>this._renderEmbeddedCardItem(e,t)))}
          <mwc-button outlined @click=${()=>{const t=[...e,{type:"tile",entity:""}];this._valueChanged("cards",t)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </mwc-button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(e,t){return L`
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
    `}_renderActionConfig(e,t,i){return L`
      <ha-expansion-panel outlined .header=${e}>
        <div class="section-content">
          ${!!i?L`
            <ha-select
              label="Action"
              .value=${(null==i?void 0:i.action)||"more-info"}
              @selected=${e=>this._valueChanged(`${t}.action`,e.target.value)}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
            >
              ${Je.map((e=>L`<mwc-list-item .value=${e}>${e}</mwc-list-item>`))}
            </ha-select>
            ${"navigate"===(null==i?void 0:i.action)?L`
              <ha-textfield
                label="Navigation Path"
                .value=${i.navigation_path||""}
                @input=${e=>this._valueChanged(`${t}.navigation_path`,e.target.value)}
              ></ha-textfield>
            `:U}
            ${"url"===(null==i?void 0:i.action)?L`
              <ha-textfield
                label="URL"
                .value=${i.url_path||""}
                @input=${e=>this._valueChanged(`${t}.url_path`,e.target.value)}
              ></ha-textfield>
            `:U}
            ${"call-service"===(null==i?void 0:i.action)||"perform-action"===(null==i?void 0:i.action)?L`
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
            `:U}
            <mwc-button outlined class="danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </mwc-button>
          `:L`
            <mwc-button outlined @click=${()=>this._valueChanged(t,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${e}
            </mwc-button>
          `}
        </div>
      </ha-expansion-panel>
    `}};Xe.styles=r`
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
    .mode-toggle mwc-button[outlined] {
      --mdc-theme-primary: var(--primary-color);
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
    mwc-tab-bar {
      margin-bottom: 8px;
    }
    .action-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 4px;
    }
    .action-row mwc-button,
    .section-content > mwc-button,
    .sub-item > mwc-button,
    .section-content mwc-button[class="danger"] {
      cursor: pointer;
      --mdc-theme-primary: var(--primary-color);
      --mdc-shape-small: 8px;
      --mdc-button-outline-color: var(--divider-color, rgba(0,0,0,0.12));
    }
    mwc-button {
      cursor: pointer;
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
      align-items: center;
      font-weight: 500;
    }
    .empty-hint {
      color: var(--secondary-text-color);
      font-style: italic;
      padding: 8px 0;
    }
    .danger {
      --mdc-theme-primary: var(--error-color, #db4437);
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
  `,e([$e({attribute:!1})],Xe.prototype,"hass",void 0),e([we()],Xe.prototype,"_config",void 0),e([we()],Xe.prototype,"_selectedHeaderIndex",void 0),e([we()],Xe.prototype,"_selectedSwitchRowIndex",void 0),e([we()],Xe.prototype,"_yamlMode",void 0),e([we()],Xe.prototype,"_yamlError",void 0),Xe=e([be("space-hub-card-editor")],Xe);const Qe="ontouchstart"in window||navigator.maxTouchPoints>0;class et extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.startX=0,this.startY=0,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Qe?"100px":"50px",height:Qe?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","mousewheel","wheel","scroll"].forEach((e=>{document.addEventListener(e,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})})),document.addEventListener("touchmove",(e=>{var t;if(void 0===this.timer&&!this.held)return;const i=null===(t=e.touches)||void 0===t?void 0:t[0];if(i){const e=Math.abs(i.pageX-this.startX),t=Math.abs(i.pageY-this.startY);(e>et.HOLD_MOVE_THRESHOLD||t>et.HOLD_MOVE_THRESHOLD)&&(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held=!1)}}),{passive:!0})}bind(e,t){if(e.actionHandler)return;e.actionHandler=!0,e.addEventListener("contextmenu",(e=>(e.preventDefault(),e.stopPropagation(),!1)));const i=e=>{let t,i;this.held=!1,e.touches?(t=e.touches[0].pageX,i=e.touches[0].pageY):(t=e.pageX,i=e.pageY),this.startX=t,this.startY=i,this.timer=window.setTimeout((()=>{this.startAnimation(t,i),this.held=!0}),this.holdTime)},a=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer&&!this.held||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?(this.held=!1,De(e,"action",{action:"hold"})):t.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,De(e,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,De(e,"action",{action:"double_tap"})):De(e,"action",{action:"tap"}))};e.addEventListener("touchstart",i,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",i,{passive:!0}),e.addEventListener("click",a),e.addEventListener("keyup",(e=>{"Enter"===e.key&&a(e)}))}startAnimation(e,t){Object.assign(this.style,{left:`${e}px`,top:`${t}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}et.HOLD_MOVE_THRESHOLD=10,customElements.define("action-handler-space-hub",et);const tt=(e,t)=>{const i=(()=>{const e=document.body;if(e.querySelector("action-handler-space-hub"))return e.querySelector("action-handler-space-hub");const t=document.createElement("action-handler-space-hub");return e.appendChild(t),t})();i&&i.bind(e,t||{})},it=ne(class extends re{update(e,[t]){return tt(e.element,t),O}render(e){}});function at(e,t,i){var a,o,n,r;return t?{bg:null!==(o=null!==(a=i?t.background_active:t.background_inactive)&&void 0!==a?a:t.background)&&void 0!==o?o:e.bg,iconColor:null!==(r=null!==(n=i?t.icon_color_active:t.icon_color_inactive)&&void 0!==n?n:t.icon_color)&&void 0!==r?r:e.iconColor}:e}function ot(e,t){var i;return"lock"===e||null!==(i=null==t?void 0:t.startsWith("lock."))&&void 0!==i&&i}function nt(e,t){var i;const a=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),o=String((null==t?void 0:t.type)||"").toLowerCase(),n=a&&(null==e?void 0:e.hass)?e.hass.states[a]:void 0,r=((null==n?void 0:n.state)||"").toLowerCase(),s=!n||"unavailable"===r||"unknown"===r||""===r,l=!s&&function(e,t,i){var a;return!!t&&("lock"===i||null!==(a=null==e?void 0:e.startsWith("lock."))&&void 0!==a&&a?"locked"===t:"on"===t||"open"===t||"opening"===t)}(a,r,o),c=function(e,t,i,a,o,n){var r,s,l;return n?null!==(l=null!==(s=null!==(r=null==a?void 0:a.icon_unavailable)&&void 0!==r?r:null==a?void 0:a.icon_inactive)&&void 0!==s?s:null==a?void 0:a.icon)&&void 0!==l?l:"mdi:alert-circle-outline":o&&(null==a?void 0:a.icon_active)?a.icon_active:!o&&(null==a?void 0:a.icon_inactive)?a.icon_inactive:(null==a?void 0:a.icon)?a.icon:ot(e,t)?o?"mdi:lock":"mdi:lock-open-variant":"door"===e?o?"mdi:door-open":"mdi:door":"presence"===e?"on"===i?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===e?"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===e?o?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===e?o?"mdi:gate-open":"mdi:gate":o?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(o,a,r,t,l,s),{bg:d,iconColor:h}=function(e,t,i,a,o,n){if(n)return function(e){var t,i,a,o,n,r;return{bg:null!==(a=null!==(i=null!==(t=null==e?void 0:e.background_unavailable)&&void 0!==t?t:null==e?void 0:e.background_inactive)&&void 0!==i?i:null==e?void 0:e.background)&&void 0!==a?a:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(r=null!==(n=null!==(o=null==e?void 0:e.icon_color_unavailable)&&void 0!==o?o:null==e?void 0:e.icon_color_inactive)&&void 0!==n?n:null==e?void 0:e.icon_color)&&void 0!==r?r:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(a);if(ot(e,t))return at(o?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o);if("door"===e||"sliding_gate"===e||"gate"===e)return at(o?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},a,o);if("presence"===e){const e="on"===i;return at(e?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,e)}if("smart_plug"===e)return at(o?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o);return at(o?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,o)}(o,a,r,t,l,s),u="chip"+(s?" chip-unavailable":""),p=s?"icon-unavailable":"",v=null!==(i=null==n?void 0:n.state)&&void 0!==i?i:"unavailable";return L`
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
  `}const rt={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},st={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"};const lt={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function ct(e,t="static",i=!1){if(!e||"none"===t||!i)return{style:"",overlay:U};return{style:`${`--pulse-weak: ${e.weak}; --pulse-strong: ${e.strong};`} ${"pulse"===t?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${e.strong}), 0 6px 18px var(--pulse-weak, ${e.weak});`}`,overlay:L`<div class="glow-overlay" aria-hidden="true"></div>`}}function dt(e,t){var i;const a=(null==t?void 0:t.icon)||"mdi:sofa-outline",o=(null==t?void 0:t.name)||"",n="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.temp_sensor,2,"°"):"—°",r="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.humidity_sensor,2,"%"):"—%",s=!(!(null==t?void 0:t.double_tap_action)&&!(null===(i=null==e?void 0:e._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==t?void 0:t.light_group_entity),c=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),d=l&&"function"==typeof(null==e?void 0:e._isOn)&&e._isOn(c),h=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),u=(null==t?void 0:t.glow_mode)||"static",p=!!(null==t?void 0:t.light_group_entity)&&d&&"none"!==u,v=rt,{style:m,overlay:g}=ct(v,u,p),f="chip main-light-chip "+(d?"on":"off"),_=Array.isArray(null==t?void 0:t.chips)?t.chips:[],b=_.find((e=>"illuminance"===String((null==e?void 0:e.type)||"").toLowerCase())),y=_.filter((e=>"illuminance"!==String((null==e?void 0:e.type)||"").toLowerCase())).map((t=>nt(e,t))),$=b?function(e,t){const i=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),a=(null==t?void 0:t.icon)||"mdi:brightness-5",o="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(i,0," lx"):"— lx";return L`
    <div class="illuminance-chip">
      <ha-icon .icon=${a}></ha-icon>
      <span class="illuminance-value">${o}</span>
    </div>
  `}(e,b):U;return L`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${m}>${g}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onMainAction)&&e._onMainAction(i,t,null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity,h)}}
        .actionHandler=${it({hasHold:!0,hasDoubleClick:s})}
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
  `}const ht=(...e)=>e.filter(Boolean).join(" ");function ut(e,t){return t&&t.length?L`${t.map(((t,i)=>function(e,t,i){const a=t,o=Array.isArray(t)?t:Array.isArray(null==a?void 0:a.row)?a.row:[];let n=Array.isArray(null==a?void 0:a.cards)?a.cards:Array.isArray(null==a?void 0:a.extra_cards)?a.extra_cards:[];if(!Array.isArray(n)||!n.length){const e=(null==a?void 0:a.card)||(null==a?void 0:a.extra_card);e&&"object"==typeof e&&(n=[e])}const r=Math.max(1,o.length||1),s=Array.isArray(n)&&n.length&&"function"==typeof(null==e?void 0:e._renderEmbeddedRowCard)?L`<div class="switch-row-cards">
        ${n.map(((t,a)=>e._renderEmbeddedRowCard(t,`switch-row-${i}-card-${a}`)))}
      </div>`:U;return L`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${r}`}>${o.map((t=>function(e,t){const i=(null==t?void 0:t.entity)||"",a=(null==t?void 0:t.icon)||"",o=(null==t?void 0:t.name)||"",n="smart_plug"===String((null==t?void 0:t.type)||"switch").toLowerCase(),r="function"==typeof(null==e?void 0:e._isOn)&&e._isOn(i),s=(null==t?void 0:t.icon_size)||(null==t?void 0:t["icon-size"]),l=(null==t?void 0:t.font_weight)||(null==t?void 0:t["font-weight"]),c=(null==t?void 0:t.font_size)||(null==t?void 0:t["font-size"]),d=e=>null==e||""===e?"":String(e).match(/px|em|rem|%$/)?String(e):`${Number(e)}px`,h=d(s),u=h?`width:${h};height:${h};--mdc-icon-size:${h};`:"",p=`${l?`font-weight:${l};`:""}${c?`font-size:${d(c)};`:""}`,v=`switch-tile ${n?"smart":""} ${r?"on":""}`,m="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),g="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),f=n?"smart":"",_=r?"on":"off",b=ht("switch-chip",f,_),y=ht("switch-icon",f,_),$=ht("name","switch-name",f,_),w="function"==typeof(null==e?void 0:e._resolveSwitchTemplates)?e._resolveSwitchTemplates(t):[],x=Array.isArray(w)?w.map((e=>e&&"object"==typeof e?e.value:e)).slice(0,2):[],A=((e,t)=>{if(!Array.isArray(e)||!e.length)return U;const i=e.map((e=>{const t=null==e?"":String(e);return{text:t,trimmed:t.trim()}})).filter((e=>e.trimmed.length>0)).slice(0,2);return i.length?L`
    <div class=${t}>
      ${i.map((e=>L`<span>${e.text}</span>`))}
    </div>
  `:U})(x,ht("switch-info",f,_)),C=i=>{"function"==typeof(null==e?void 0:e._onSwitchAction)&&e._onSwitchAction(i,t)},k=(null==t?void 0:t.glow_mode)||"static",E=n?st:rt,{style:S,overlay:T}=ct(E,k,r&&"none"!==k);if(g){return L`
      <div class="tile-wrap">
      <div class="glow-under" style=${S}>${T}</div>
      ${A}
      <ha-control-button
        class=${`switch-tile-btn ${n?"smart":""} ${r?"on":""}`}
        @action=${C}
        .actionHandler=${it({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
        role="button" tabindex="0"
      >
          <div class="tile-inner">
            ${m?L`<ha-chip class=${b}>
                  ${a?L`<ha-icon class=${y} .icon=${a} style=${u||U}></ha-icon>`:U}
                  ${o||i}
                </ha-chip>`:L`
                  ${a?L`<ha-icon class=${y} .icon=${a} style=${u||U}></ha-icon>`:U}
                  ${o?L`<div class=${$} style=${p}>${o}</div>`:U}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return L`
    <div class="tile-wrap ${v}"
         @action=${C}
         .actionHandler=${it({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
         role="button" tabindex="0">
      <div class="glow-under" style=${S}>${T}</div>
      ${A}
      <div class="tile-inner">
        ${m?L`<ha-chip class=${b}>
              ${a?L`<ha-icon class=${y} .icon=${a} style=${u||U}></ha-icon>`:U}
              ${o||i}
            </ha-chip>`:L`
              ${a?L`<ha-icon class=${y} .icon=${a} style=${u||U}></ha-icon>`:U}
              ${o?L`<div class=${$} style=${p}>${o}</div>`:U}
            `}
      </div>
    </div>
  `}(e,t)))}</div>
      ${s}
    </div>
  `}(e,t,i)))}`:U}const pt=r`
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
`,vt=r`
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
`,mt=r`
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
`,gt=r`
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
`,ft=r`
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
`,_t=r`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,bt=r`
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
`;var yt;function $t(e){try{De(window,"haptic",e)}catch(e){}}let wt=yt=class extends ie{constructor(){super(...arguments),this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(e){if(!e)throw new Error("Configuration is required");this._validateConfig(e);const t=We(e||{});Array.isArray(t.headers)||(t.headers=[]),Array.isArray(t.switch_rows)||(t.switch_rows=[]),Array.isArray(t.cards)||(t.cards=[]),this._clearRowCardCache(),this._config=t,this._syncTemplateEntries(t.switch_rows)}_validateConfig(e){const t=[];e.headers&&Array.isArray(e.headers)&&e.headers.forEach(((e,i)=>{if(e){if(e.ac&&(e.ac.entity?"string"==typeof e.ac.entity&&e.ac.entity.includes(".")||t.push(`Header ${i+1}: AC entity '${e.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):t.push(`Header ${i+1}: AC tile requires an 'entity' field`)),e.thermostat&&(e.thermostat.entity?"string"==typeof e.thermostat.entity&&e.thermostat.entity.includes(".")||t.push(`Header ${i+1}: Thermostat entity '${e.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):t.push(`Header ${i+1}: Thermostat tile requires an 'entity' field`)),e.main){const a=e.main;!!(a.main_name||a.main_icon||a.tap_entity||a.light_group_entity||a.temp_sensor||a.humidity_sensor||Array.isArray(a.chips)&&a.chips.length>0)||t.push(`Header ${i+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((e=>{const o=a[e];!o||"string"==typeof o&&o.includes(".")||t.push(`Header ${i+1}: Main tile ${e} '${o}' must be a valid entity ID`)}))}!e.ac&&!e.thermostat||e.main||t.push(`Header ${i+1}: AC and Thermostat tiles require a 'main' configuration block`)}else t.push(`Header ${i+1}: Header configuration cannot be empty`)})),e.switch_rows&&Array.isArray(e.switch_rows)&&e.switch_rows.forEach(((e,i)=>{if(!e)return void t.push(`Switch row ${i+1}: Switch row configuration cannot be empty`);const a=Array.isArray(e)?e:Array.isArray(e.row)?e.row:[];Array.isArray(a)&&0!==a.length?a.forEach(((e,a)=>{e&&e.entity?"string"==typeof e.entity&&e.entity.includes(".")||t.push(`Switch row ${i+1}, item ${a+1}: Switch entity '${e.entity}' must be a valid entity ID`):t.push(`Switch row ${i+1}, item ${a+1}: Switch item requires an 'entity' field`),!(null==e?void 0:e.hold_entity)||"string"==typeof e.hold_entity&&e.hold_entity.includes(".")||t.push(`Switch row ${i+1}, item ${a+1}: hold_entity '${e.hold_entity}' must be a valid entity ID`)})):t.push(`Switch row ${i+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([i,a])=>{const o=e[i];if(null!=o){const e=Number(o);(!Number.isFinite(e)||e<0)&&t.push(`${a} must be a positive number, got: ${o}`)}})),void 0!==e.card_shadow_intensity&&null!==e.card_shadow_intensity){const i=Number(e.card_shadow_intensity);Number.isFinite(i)&&(i<0||i>1)&&t.push(`Card shadow intensity must be between 0 and 1, got: ${i}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((i=>{const a=e[i];if(a&&"string"==typeof a){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(a)||t.push(`${i.replace(/_/g," ")} '${a}' is not a valid color format`)}})),t.length>0)throw new Error(`Invalid space-hub-card configuration:\n${t.map((e=>`• ${e}`)).join("\n")}`)}getCardSize(){return 6}render(){var e,t,i,a,o,n,r,s,l;if(!this._config)return U;const c=yt.getStubConfig(),d=this._config||{},h={tile_height:null!==(e=d.tile_height)&&void 0!==e?e:c.tile_height,chip_icon_size:null!==(t=d.chip_icon_size)&&void 0!==t?t:c.chip_icon_size,main_icon_size:null!==(i=d.main_icon_size)&&void 0!==i?i:c.main_icon_size,chip_font_size:null!==(a=d.chip_font_size)&&void 0!==a?a:c.chip_font_size,card_shadow_color:null!==(o=d.card_shadow_color)&&void 0!==o?o:c.card_shadow_color,card_shadow_intensity:null!==(n=d.card_shadow_intensity)&&void 0!==n?n:c.card_shadow_intensity,unavailable_pulse_color:null!==(r=d.unavailable_pulse_color)&&void 0!==r?r:c.unavailable_pulse_color,headers:Array.isArray(d.headers)&&d.headers.length?d.headers:[],switch_rows:Array.isArray(d.switch_rows)?d.switch_rows:[],cards:Array.isArray(d.cards)?d.cards:[],tap_action:d.tap_action,hold_action:d.hold_action,double_tap_action:d.double_tap_action},u=Array.isArray(h.headers)&&h.headers.length?h.headers:[],p=Number(h.tile_height)||Number(c.tile_height)||80,v=Number(h.chip_icon_size)||Number(c.chip_icon_size)||14,m=Number(h.chip_font_size)||Number(c.chip_font_size)||12,g=Math.max(m+10,20),f=Math.round(.625*p),_=u[0]||{},b=Number(null!==(s=null==_?void 0:_.main_icon_size)&&void 0!==s?s:null==_?void 0:_.maicon_size),y=Number.isFinite(b)&&b>0?b:Number(h.main_icon_size)||Number(c.main_icon_size)||48,$=this._rgbaFromColor(h.card_shadow_color||c.card_shadow_color,null!==(l=h.card_shadow_intensity)&&void 0!==l?l:c.card_shadow_intensity),w=h.unavailable_pulse_color||c.unavailable_pulse_color||"#ff3b30",x=this._hasAnyUnavailable(h,u),A=this._rgbaFromColor(w,.18),C=this._rgbaFromColor(w,.36);return L`
      <ha-card class=${x?"unavailable":""}
               style=${`--panel-shadow-color:${x?A:$}; --unavail-weak:${A}; --unavail-strong:${C}`}>
        <div class="metrics" style=${`--tile-h:${p}px; --chip-size:${g}px; --chip-icon-size:${v}px; --main-icon-size:${y}px; --chip-font-size:${m}px; --ac-thermostat-icon:${f}px;`}>
          <div class="root">
            ${u.map((e=>this._renderHeaderRow(e)))}
            ${ut(this,h.switch_rows)}
            ${Array.isArray(h.cards)&&h.cards.length?L`
                  <div class="extra-cards">
                    ${h.cards.map(((e,t)=>this._renderEmbeddedRowCard(e,`standalone-card-${t}`)))}
                  </div>
                `:U}
          </div>
        </div>
      </ha-card>
    `}updated(e){super.updated(e),e.has("hass")&&(this._rowCardElements.forEach((e=>{e&&(e.hass=this.hass)})),this._resumeTemplateSubscriptions())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((e=>this._disposeTemplateEntry(e)))}_renderHeaderRow(e){const t=e.main||{},i={tap_entity:t.tap_entity,hold_entity:t.hold_entity||t.tap_entity,glow_mode:t.glow_mode,light_group_entity:t.light_group_entity,name:t.main_name||t.name,icon:t.main_icon||t.icon,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,chips:Array.isArray(t.chips)?t.chips:[],tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},a=e.ac||{},o=e.thermostat||{},n=!!(null==a?void 0:a.entity),r=!!(null==o?void 0:o.entity),s=!(!t||!(t.main_name||t.name||t.light_group_entity||t.entity||t.main_icon||t.icon||t.temp_sensor||t.humidity_sensor||Array.isArray(t.chips)&&t.chips.length)),l=s&&n,c=s&&r;s||!n&&!r||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const d=L`
      <div class=${l||c?l&&c?"header-row":"header-row main-plus-one":"header-row only-main"}>
        ${s?dt(this,i):U}
        ${l?function(e,t,i){var a,o,n;const r=((null===(n=null===(o=null===(a=null==e?void 0:e.hass)||void 0===a?void 0:a.states)||void 0===o?void 0:o[t])||void 0===n?void 0:n.state)||"").toLowerCase(),s=!!r&&"off"!==r,l="function"==typeof(null==e?void 0:e._acChip)?e._acChip(r):{icon:"mdi:air-conditioner"},c=(null==l?void 0:l.icon)||"mdi:air-conditioner",d="ac-mode-"+((h=r)&&"off"!==h?h.includes("cool")?"cool":h.includes("heat")?"heat":h.includes("dry")?"dry":h.includes("fan")?"fan":h.includes("auto")?"auto":"default":"off");var h;const u=`chip chip-temperature-humidity ac-chip ${d}`,p=`ac-fan ${d}${s?" spinning":""}`,v=function(e){const t=(e||"").toLowerCase();return t&&"off"!==t?t.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:t.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:t.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:t.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:t.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(r),m=null!=i?i:"static",{style:g,overlay:f}=ct(v,m,s);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${g}>${f}</div>
      <ha-control-button
        class="square ac-tile ${s?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onACAction)&&e._onACAction(i,t)}}
        .actionHandler=${it({hasHold:!0,hasDoubleClick:!1})}
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
        ${c?function(e,t,i){var a,o,n,r,s,l,c,d;const h=null===(o=null===(a=null==e?void 0:e.hass)||void 0===a?void 0:a.states)||void 0===o?void 0:o[t],u="function"==typeof(null==e?void 0:e._fmtNumber)?e._fmtNumber.bind(e):e=>null==e?"—":String(e),p=u(null!==(l=null!==(r=null===(n=null==h?void 0:h.attributes)||void 0===n?void 0:n.temperature)&&void 0!==r?r:null===(s=null==h?void 0:h.attributes)||void 0===s?void 0:s.target_temp)&&void 0!==l?l:null===(c=null==h?void 0:h.attributes)||void 0===c?void 0:c.target_temperature,1)+"°",v="heating"===((null===(d=null==h?void 0:h.attributes)||void 0===d?void 0:d.hvac_action)||"").toLowerCase(),m="off"===((null==h?void 0:h.state)||"").toLowerCase()?"off":v?"heating":"idle",g=`thermostat-chip ${m}`,f=`temperature-chip ${m}`,_=`thermostat-icon ${m}`,b="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),y=null!=i?i:"static",$=lt,{style:w,overlay:x}=ct($,y,v);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${w}>${x}</div>
      <ha-control-button
        class="square thermostat-tile ${v?"on":""}"
        @action=${i=>{"function"==typeof(null==e?void 0:e._onThermostatAction)&&e._onThermostatAction(i,t)}}
        .actionHandler=${it({hasHold:!0,hasDoubleClick:!1})}
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
    `;return d}_renderEmbeddedRowCard(e,t){if(!e||"object"!=typeof e)return U;this._rowCardConfigs.get(t)!==e&&(this._rowCardElements.delete(t),this._rowCardPromises.delete(t)),this._rowCardConfigs.set(t,e);const i=this._rowCardElements.get(t);if(i)return i.hass=this.hass,L`<div class="embedded-card">${i}</div>`;const a=this._createRowCardElement(t,e).then((e=>(e.hass=this.hass,L`${e}`))).catch((t=>{const i=t instanceof Error?t.message:String(t),a=this._createErrorCard(i,e);return a.hass=this.hass,L`${a}`}));return L`<div class="embedded-card">${_e(a,U)}</div>`}async _createRowCardElement(e,t){const i=this._rowCardPromises.get(e);if(i)return i;const a=(async()=>{const i=await this._getCardHelpers();let a;try{a=(null==i?void 0:i.createCardElement)?await i.createCardElement(t):Fe(t)}catch(e){const i=e instanceof Error?e.message:String(e);a=this._createErrorCard(i,t)}return a.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(e),this._rowCardPromises.delete(e);const a=this._rowCardConfigs.get(e)||t;this._createRowCardElement(e,a).then((()=>this.requestUpdate()))})),this._rowCardElements.set(e,a),this._rowCardPromises.delete(e),a})();return this._rowCardPromises.set(e,a),a}_createErrorCard(e,t){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:e,origConfig:t}),i}catch(i){return Fe({type:"hui-error-card",error:e,origConfig:t})}}async _getCardHelpers(){if(!this._helpersPromise){const e=window.loadCardHelpers;this._helpersPromise="function"==typeof e?e():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_toggleByDomain(e){if(!e||!this.hass)return;const t=this.hass.states[e],i=e.split(".")[0],a=((null==t?void 0:t.state)||"").toLowerCase();if("lock"!==i)if("cover"!==i)this._toggleGeneric(e);else{const t="open"===a||"opening"===a?"close_cover":"open_cover";this.hass.callService("cover",t,{entity_id:e})}else{const t="locked"===a?"unlock":"lock";this.hass.callService("lock",t,{entity_id:e})}}_onMainAction(e,t,i,a,o){const n=e.detail&&e.detail.action||"tap";this.hass&&t&&(t.tap_action||t.hold_action||t.double_tap_action)?Ye(this,this.hass,t,n):this.hass&&this._config&&(this._config.tap_action||this._config.hold_action||this._config.double_tap_action)?Ye(this,this.hass,this._config,n):"hold"===n?($t("medium"),this._openMoreInfo(a||i)):this._toggleGeneric(o||i)}_onACAction(e,t){this._onClimateTileAction(e,t,(()=>this._acToggle(t)))}_onThermostatAction(e,t){this._onClimateTileAction(e,t,(()=>this._thermostatToggle(t)))}_onClimateTileAction(e,t,i){"hold"===(e.detail&&e.detail.action||"tap")?($t("medium"),this._openMoreInfo(t)):($t("success"),i())}_onSwitchAction(e,t){const i=e.detail&&e.detail.action||"tap",a=null==t?void 0:t.entity,o=(null==t?void 0:t.hold_entity)||a,n=!!((null==t?void 0:t.tap_action)||(null==t?void 0:t.hold_action)||(null==t?void 0:t.double_tap_action));if("tap"===i||"double_tap"===i){const e=null==t?void 0:t.confirmation;if("tap"===i&&e){const e=()=>{this.hass&&n?Ye(this,this.hass,t,i):this._toggleByDomain(a)};return void this._showConfirmation(t,e)}this.hass&&n?Ye(this,this.hass,t,i):this._toggleByDomain(a)}else"hold"===i&&($t("medium"),this.hass&&n?Ye(this,this.hass,t,i):this._openMoreInfo(o||a))}_showConfirmation(e,t){var i,a,o,n;const r=null==e?void 0:e.confirmation,s=("string"==typeof r?r:null==r?void 0:r.text)||"Are you sure?",l=(null==e?void 0:e.entity)||"",c=(null==e?void 0:e.name)||(null===(n=null===(o=null===(a=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===a?void 0:a[l])||void 0===o?void 0:o.attributes)||void 0===n?void 0:n.friendly_name)||l,d=document.createElement("div");d.className="sh-confirm-overlay";const h=document.createElement("div");h.className="sh-confirm-dialog",h.innerHTML=`\n      <div class="sh-confirm-title">${this._escapeHtml(c)}</div>\n      <div class="sh-confirm-text">${this._escapeHtml(s)}</div>\n      <div class="sh-confirm-actions">\n        <button class="sh-confirm-btn sh-cancel">Cancel</button>\n        <button class="sh-confirm-btn sh-ok">Confirm</button>\n      </div>\n    `,d.appendChild(h);const u=()=>{d.classList.add("sh-closing"),d.addEventListener("animationend",(()=>d.remove()),{once:!0}),setTimeout((()=>{d.parentNode&&d.remove()}),300)};d.addEventListener("click",(e=>{e.target===d&&u()})),h.querySelector(".sh-cancel").addEventListener("click",(()=>u())),h.querySelector(".sh-ok").addEventListener("click",(()=>{u(),$t("success"),t()})),this.shadowRoot.appendChild(d)}_escapeHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_resolveSwitchTemplates(e){const t=this._extractTemplatesFromSwitch(e);return t.length?t.map((e=>({template:e,value:this._getTemplateDisplayValue(e)}))):[]}_extractTemplatesFromSwitch(e){if(!e||"object"!=typeof e)return[];const t=e,i=((...e)=>{for(const i of e)if(i in t)return t[i]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==i)return[];const a=Array.isArray(i)?i:[i],o=[];return a.some((e=>{let t;"string"==typeof e?t=e:e&&"object"==typeof e&&(t=e.template||e.value||e.value_template||e.text);const i="string"==typeof t?t.trim():"";return i&&o.push(i),o.length>=2})),o.slice(0,2)}_syncTemplateEntries(e){const t=this._collectTemplatesFromRows(e);if(!t.size&&!this._switchTemplateValues.size)return;const i=[];this._switchTemplateValues.forEach(((e,a)=>{t.has(a)||i.push(a)})),i.forEach((e=>{const t=this._switchTemplateValues.get(e);t&&this._disposeTemplateEntry(t),this._switchTemplateValues.delete(e)})),t.forEach((e=>this._ensureTemplateEntry(e)))}_collectTemplatesFromRows(e){const t=new Set;return Array.isArray(e)?(e.forEach((e=>{const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[];Array.isArray(i)&&i.forEach((e=>{this._extractTemplatesFromSwitch(e).forEach((e=>t.add(e)))}))})),t):t}_ensureTemplateEntry(e){const t=(e||"").trim();if(!t)return;let i=this._switchTemplateValues.get(t);return i||(i={value:"",ready:!1},this._switchTemplateValues.set(t,i)),this._startTemplateSubscription(t,i),i}_getTemplateDisplayValue(e){var t;const i=this._ensureTemplateEntry(e);return i?i.error?"!":i.ready?null!==(t=i.value)&&void 0!==t?t:"":"…":""}_startTemplateSubscription(e,t){var i;!(null===(i=this.hass)||void 0===i?void 0:i.connection)||t.unsub||t.pending||(t.pending=!0,this.hass.connection.subscribeMessage((e=>{t.ready=!0,t.error=void 0;const i=e&&"object"==typeof e&&"result"in e?e.result:e;t.value=null!=i?String(i):"",this.requestUpdate()}),{type:"render_template",template:e},{resubscribe:!0}).then((e=>{t.unsub=e})).catch((i=>{t.ready=!0,t.error=(null==i?void 0:i.message)||"error",t.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${e}":`,i),this.requestUpdate()})).finally((()=>{t.pending=!1})))}_disposeTemplateEntry(e){if(e.unsub){try{e.unsub()}catch(e){}e.unsub=void 0}e.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((e,t)=>this._startTemplateSubscription(t,e)))}_fmt2(e,t,i){if(!e||!this.hass)return"—"+(i||"");const a=this.hass.states[e];if(!a||""===a.state||"unknown"===a.state||"unavailable"===a.state)return"—"+(i||"");const o=Number(a.state);return Number.isFinite(o)?o.toFixed(t)+(i||""):String(a.state)+(i||"")}_fmtNumber(e,t){if(null==e||""===e||"unknown"===e||"unavailable"===e)return"—";const i=Number(e);return Number.isFinite(i)?i.toFixed(t):String(e)}_acChip(e){return e&&"off"!==e?e.includes("cool")?{icon:"mdi:snowflake"}:e.includes("heat")?{icon:"mdi:fire"}:e.includes("dry")?{icon:"mdi:water-percent"}:e.includes("fan")?{icon:"mdi:fan"}:e.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_acToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i=((null==t?void 0:t.state)||"").toLowerCase(),a=!!i&&"off"!==i;this.hass.callService("climate",a?"turn_off":"turn_on",{entity_id:e})}_thermostatToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i="off"===((null==t?void 0:t.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:e,hvac_mode:i})}_toggleGeneric(e){if(!e||!this.hass)return;const t=e.split(".")[0],i="switch"===t||"light"===t?`${t}.toggle`:"homeassistant.toggle",[a,o]=i.split(".");this.hass.callService(a,o,{entity_id:e})}_isOn(e){if(!e||!this.hass)return!1;const t=this.hass.states[e];return"on"===((null==t?void 0:t.state)||"").toLowerCase()}_rgbaFromColor(e,t=.5){const i=Math.max(0,Math.min(1,Number(t)||0));if(!e||"string"!=typeof e)return`rgba(0,0,0,${i})`;const a=e.trim();if(a.startsWith("rgba(")||a.startsWith("rgb(")||a.startsWith("hsl(")||a.startsWith("var("))return a;const o=a.replace("#",""),n=e=>parseInt(e,16);if(3===o.length){return`rgba(${n(o[0]+o[0])},${n(o[1]+o[1])},${n(o[2]+o[2])},${i})`}if(o.length>=6){return`rgba(${n(o.slice(0,2))},${n(o.slice(2,4))},${n(o.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(e,t){const i=[],a=Array.isArray(t)?t:[t],o=e=>{e&&("string"==typeof e?i.push(e):Array.isArray(e)&&e.forEach((e=>o(e))))},n=e=>{e&&"object"==typeof e&&(o(e.entity),o(e.entity_id),o(e.entities),o(e.tap_entity),o(e.hold_entity),o(e.double_tap_entity),Array.isArray(e.cards)&&e.cards.forEach(n),Array.isArray(e.rows)&&e.rows.forEach(n),Array.isArray(e.columns)&&e.columns.forEach(n),Array.isArray(e.sections)&&e.sections.forEach(n),Array.isArray(e.widgets)&&e.widgets.forEach(n),Array.isArray(e.items)&&e.items.forEach(n),Array.isArray(e.elements)&&e.elements.forEach(n),e.card&&n(e.card),e.header&&n(e.header),e.footer&&n(e.footer))};a.forEach((e=>{const t=(null==e?void 0:e.main)||{},a={tap_entity:t.tap_entity,hold_entity:t.hold_entity||t.tap_entity,light_group_entity:t.light_group_entity,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,chips:Array.isArray(t.chips)?t.chips:[]},o=(null==e?void 0:e.ac)||{},n=(null==e?void 0:e.thermostat)||{};i.push(null==a?void 0:a.tap_entity,null==a?void 0:a.hold_entity,null==a?void 0:a.light_group_entity,null==a?void 0:a.temp_sensor,null==a?void 0:a.humidity_sensor),i.push(null==o?void 0:o.entity,null==n?void 0:n.entity),a.chips.forEach((e=>{i.push(null==e?void 0:e.entity,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity)}))}));return(e.switch_rows||[]).forEach((e=>{var t;(Array.isArray(e)?e:Array.isArray(null===(t=e)||void 0===t?void 0:t.row)?e.row:[]).forEach((e=>{i.push(null==e?void 0:e.entity,null==e?void 0:e.hold_entity)}))})),Array.isArray(e.cards)&&e.cards.forEach((e=>n(e))),i}_hasAnyUnavailable(e,t){if(!this.hass)return!1;const i=this._getAllCardEntities(e,t),a=new Set(["unavailable","unknown","offline"]);return i.some((e=>{var t,i;if(!e)return!1;const o=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e];if(!o)return!0;const n=(o.state||"").toLowerCase();return a.has(n)}))}};wt.styles=[pt,vt,mt,gt,ft,_t,bt],e([$e({attribute:!1})],wt.prototype,"hass",void 0),e([we()],wt.prototype,"_config",void 0),wt=yt=e([be("space-hub-card")],wt),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.0"});try{const e=window;if(!e.__SPACE_HUB_CARD_LOGGED__){const t="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.0",t,i),e.__SPACE_HUB_CARD_LOGGED__=!0}}catch(e){}var xt=wt;export{wt as SpaceHubCard,xt as default};
