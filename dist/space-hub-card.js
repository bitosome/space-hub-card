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
function e(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;class a{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new a(i,e,n)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,n))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",p=c.reactiveElementPolyfillSupport,u={toAttribute(e,t){switch(t){case Boolean:e=e?h:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},m=(e,t)=>t!==e&&(t==t||e==e),v={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:m},_="finalized";class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||v}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const n=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{i?e.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=v){var n;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:u).toAttribute(t,i.type);this._$El=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=n.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:u;this._$El=o,this[o]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g[_]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const b=window,w=b.trustedTypes,y=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,A=`<${x}>`,C=document,k=()=>C.createComment(""),S=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,T="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,N=/>/g,M=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),P=/'/g,H=/"/g,I=/^(?:script|style|textarea|title)$/i,R=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),L=R(1),O=R(2),j=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,D=C.createTreeWalker(C,129,null,!1);function U(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(t):t}class G{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const r=e.length-1,s=this.parts,[l,c]=((e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":"",r=F;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===F?"!--"===l[1]?r=z:void 0!==l[1]?r=N:void 0!==l[2]?(I.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=null!=o?o:F,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?M:'"'===l[3]?H:P):r===H||r===P?r=M:r===z||r===N?r=F:(r=M,o=void 0);const h=r===M&&e[t+1].startsWith("/>")?" ":"";a+=r===F?i+A:c>=0?(n.push(s),i.slice(0,c)+"$lit$"+i.slice(c)+$+h):i+$+(-2===c?(n.push(void 0),t):h)}return[U(e,a+(e[i]||"<?>")+(2===t?"</svg>":"")),n]})(e,t);if(this.el=G.createElement(l,i),D.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=D.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith($)){const i=c[a++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+"$lit$").split($),t=/([.?@])?(.*)/.exec(i);s.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?J:"@"===t[1]?Q:K})}else s.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(I.test(n.tagName)){const e=n.textContent.split($),t=e.length-1;if(t>0){n.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],k()),D.nextNode(),s.push({type:2,index:++o});n.append(e[t],k())}}}else if(8===n.nodeType)if(n.data===x)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf($,e+1));)s.push({type:7,index:o}),e+=$.length-1}o++}}static createElement(e,t){const i=C.createElement("template");return i.innerHTML=e,i}}function q(e,t,i=e,n){var o,a,r,s;if(t===j)return t;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=S(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(a=null==l?void 0:l._$AO)||void 0===a||a.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(r=(s=i)._$Co)&&void 0!==r?r:s._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=q(e,l._$AS(e,t.values),l,n)),t}class B{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:C).importNode(i,!0);D.currentNode=o;let a=D.nextNode(),r=0,s=0,l=n[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new Y(a,a.nextSibling,this,e):1===l.type?t=new l.ctor(a,l.name,l.strings,this,e):6===l.type&&(t=new ee(a,this,e)),this._$AV.push(t),l=n[++s]}r!==(null==l?void 0:l.index)&&(a=D.nextNode(),r++)}return D.currentNode=C,o}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{constructor(e,t,i,n){var o;this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=q(this,e,t),S(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==j&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>E(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==W&&S(this._$AH)?this._$AA.nextSibling.data=e:this.$(C.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=G.createElement(U(n.h,n.h[0]),this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(i);else{const e=new B(o,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new G(e)),t}T(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new Y(this.k(k()),this.k(k()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class K{constructor(e,t,i,n,o){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=q(this,e,t,0),a=!S(e)||e!==this._$AH&&e!==j,a&&(this._$AH=e);else{const n=e;let r,s;for(e=o[0],r=0;r<o.length-1;r++)s=q(this,n[i+r],t,r),s===j&&(s=this._$AH[r]),a||(a=!S(s)||s!==this._$AH[r]),s===W?e=W:e!==W&&(e+=(null!=s?s:"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends K{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}const X=w?w.emptyScript:"";class J extends K{constructor(){super(...arguments),this.type=4}j(e){e&&e!==W?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class Q extends K{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=q(this,e,t,0))&&void 0!==i?i:W)===j)return;const n=this._$AH,o=e===W&&n!==W||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==W&&(n===W||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){q(this,e)}}const te=b.litHtmlPolyfillSupport;null==te||te(G,Y),(null!==(f=b.litHtmlVersions)&&void 0!==f?f:b.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ie,ne;class oe extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,o;const a=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=a._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;a._$litPart$=r=new Y(t.insertBefore(k(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return j}}oe.finalized=!0,oe._$litElement$=!0,null===(ie=globalThis.litElementHydrateSupport)||void 0===ie||ie.call(globalThis,{LitElement:oe});const ae=globalThis.litElementPolyfillSupport;null==ae||ae({LitElement:oe}),(null!==(ne=globalThis.litElementVersions)&&void 0!==ne?ne:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const re=2,se=e=>(...t)=>({_$litDirective$:e,values:t});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class le{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ce=(e,t)=>{var i,n;const o=e._$AN;if(void 0===o)return!1;for(const e of o)null===(n=(i=e)._$AO)||void 0===n||n.call(i,t,!1),ce(e,t);return!0},de=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===(null==i?void 0:i.size))},he=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),me(t)}};function pe(e){void 0!==this._$AN?(de(this),this._$AM=e,he(this)):this._$AM=e}function ue(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(n))for(let e=i;e<n.length;e++)ce(n[e],!1),de(n[e]);else null!=n&&(ce(n,!1),de(n));else ce(this,e)}const me=e=>{var t,i,n,o;e.type==re&&(null!==(t=(n=e)._$AP)&&void 0!==t||(n._$AP=ue),null!==(i=(o=e)._$AQ)&&void 0!==i||(o._$AQ=pe))};class ve extends le{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),he(this),this.isConnected=e._$AU}_$AO(e,t=!0){var i,n;e!==this.isConnected&&(this.isConnected=e,e?null===(i=this.reconnected)||void 0===i||i.call(this):null===(n=this.disconnected)||void 0===n||n.call(this)),t&&(ce(this,e),de(this))}setValue(e){if((e=>void 0===e.strings)(this._$Ct))this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class _e{constructor(e){this.G=e}disconnect(){this.G=void 0}reconnect(e){this.G=e}deref(){return this.G}}class ge{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var e;null!==(e=this.Y)&&void 0!==e||(this.Y=new Promise((e=>this.Z=e)))}resume(){var e;null===(e=this.Z)||void 0===e||e.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fe=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,be=1073741823;const we=se(class extends ve{constructor(){super(...arguments),this._$C_t=be,this._$Cwt=[],this._$Cq=new _e(this),this._$CK=new ge}render(...e){var t;return null!==(t=e.find((e=>!fe(e))))&&void 0!==t?t:j}update(e,t){const i=this._$Cwt;let n=i.length;this._$Cwt=t;const o=this._$Cq,a=this._$CK;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$C_t);e++){const r=t[e];if(!fe(r))return this._$C_t=e,r;e<n&&r===i[e]||(this._$C_t=be,n=0,Promise.resolve(r).then((async e=>{for(;a.get();)await a.get();const t=o.deref();if(void 0!==t){const i=t._$Cwt.indexOf(r);i>-1&&i<t._$C_t&&(t._$C_t=i,t.setValue(e))}})))}return j}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),ye=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,$e=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xe(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):$e(e,t)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Ae(e){return xe({...e,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Ce;null===(Ce=window.HTMLSlotElement)||void 0===Ce||Ce.prototype.assignedElements;var ke="[^\\s]+";function Se(e,t){for(var i=[],n=0,o=e.length;n<o;n++)i.push(e[n].substr(0,t));return i}var Ee=function(e){return function(t,i){var n=i[e].map((function(e){return e.toLowerCase()})),o=n.indexOf(t.toLowerCase());return o>-1?o:null}};function Te(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];for(var n=0,o=t;n<o.length;n++){var a=o[n];for(var r in a)e[r]=a[r]}return e}var Fe=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ze=["January","February","March","April","May","June","July","August","September","October","November","December"],Ne=Se(ze,3),Me={dayNamesShort:Se(Fe,3),dayNames:Fe,monthNamesShort:Ne,monthNames:ze,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},Pe=(Te({},Me),function(e){return+e-1}),He=[null,"[1-9]\\d?"],Ie=[null,ke],Re=["isPm",ke,function(e,t){var i=e.toLowerCase();return i===t.amPm[0]?0:i===t.amPm[1]?1:null}],Le=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var i=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?i:-i}return 0}];Ee("monthNamesShort"),Ee("monthNames");var Oe,je;!function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}(),function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(Oe||(Oe={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(je||(je={}));var We=function(e,t,i,n){n=n||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o},Ve=new Set(["call-service","divider","section","weblink","cast","select"]),De={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Ue=function(e,t){void 0===t&&(t=!1);var i=function(e,t){return n("hui-error-card",{type:"error",error:e,config:t})},n=function(e,t){var n=window.document.createElement(e);try{n.setConfig(t)}catch(n){return console.error(e,n),i(n.message,t)}return n};if(!e||"object"!=typeof e||!t&&!e.type)return i("No type defined",e);var o=e.type;if(o&&o.startsWith("custom:"))o=o.substr("custom:".length);else if(t)if(Ve.has(o))o="hui-"+o+"-row";else{if(!e.entity)return i("Invalid config given.",e);var a=e.entity.split(".",1)[0];o="hui-"+(De[a]||"text")+"-entity-row"}else o="hui-"+o+"-card";if(customElements.get(o))return n(o,e);var r=i("Custom element doesn't exist: "+e.type+".",e);r.style.display="None";var s=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(e.type).then((function(){clearTimeout(s),We(r,"ll-rebuild",{},r)})),r};function Ge(e){return JSON.parse(JSON.stringify(e))}const qe=new Set(["more-info","toggle","perform-action","navigate","url","assist","none","fire-dom-event","call-service"]),Be=e=>!!e&&"object"==typeof e&&!Array.isArray(e),Ye=e=>!!((null==e?void 0:e.tap_action)||(null==e?void 0:e.hold_action)||(null==e?void 0:e.double_tap_action)),Ke=e=>{if(null==e||!1===e)return;if(!0===e)return!0;if("string"==typeof e){const t=e.trim();return!t||{text:t}}if(!Be(e))return;const t={};if("string"==typeof e.text&&e.text.trim()&&(t.text=e.text),"string"==typeof e.title&&e.title.trim()&&(t.title=e.title),"string"==typeof e.confirm_text&&e.confirm_text.trim()&&(t.confirm_text=e.confirm_text),"string"==typeof e.dismiss_text&&e.dismiss_text.trim()&&(t.dismiss_text=e.dismiss_text),Array.isArray(e.exemptions)){const i=e.exemptions.filter((e=>!!e&&"object"==typeof e&&"string"==typeof e.user)).map((e=>({user:e.user})));i.length&&(t.exemptions=i)}return!Object.keys(t).length||t},Ze=e=>{if(Be(e)&&"string"==typeof e.action&&qe.has(e.action)){if("call-service"===e.action||"perform-action"===e.action){return Object.assign(Object.assign({},e),{action:"perform-action",perform_action:"string"==typeof e.perform_action?e.perform_action:"string"==typeof e.service?e.service:void 0,data:Be(e.data)?e.data:Be(e.service_data)?e.service_data:void 0,target:Be(e.target)?e.target:void 0,confirmation:Ke(e.confirmation)})}return Object.assign(Object.assign({},e),{confirmation:Ke(e.confirmation)})}},Xe=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],Je=["switch","smart_plug","lock"],Qe=["static","pulse","none"],et=["hourly","daily","twice_daily"],tt=["24h","12h"],it=["more-info","toggle","perform-action","navigate","url","assist","none"],nt="M4,12L5.41,13.41L11,7.83V20H13V7.83L18.59,13.42L20,12L12,4L4,12Z",ot="M4,12L5.41,10.59L11,16.17V4H13V16.17L18.59,10.58L20,12L12,20L4,12Z",at="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";let rt=class extends oe{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.type="text",this.disabled=!1}_onInput(e){e.stopPropagation(),this.disabled||(this.value=e.currentTarget.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}render(){return L`
      <label>
        <span>${this.label}</span>
        <input
          type=${this.type||"text"}
          aria-label=${this.label}
          .value=${this.value||""}
          placeholder=${this.placeholder||""}
          step=${this.step||W}
          min=${this.min||W}
          max=${this.max||W}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        />
      </label>
    `}static get styles(){return r`
      :host {
        display: block;
        width: 100%;
      }
      :host([disabled]) {
        opacity: 0.64;
      }
      label {
        position: relative;
        display: block;
        width: 100%;
      }
      span {
        position: absolute;
        top: 7px;
        left: 12px;
        z-index: 1;
        color: var(--secondary-text-color);
        font-size: 11px;
        line-height: 1;
        pointer-events: none;
      }
      input {
        width: 100%;
        height: 56px;
        box-sizing: border-box;
        border: 0;
        border-bottom: 1px solid var(--input-idle-line-color, var(--secondary-text-color));
        border-radius: 4px 4px 0 0;
        outline: none;
        background: var(--input-fill-color, var(--secondary-background-color, rgba(0,0,0,0.06)));
        color: var(--primary-text-color);
        font: inherit;
        font-size: 14px;
        padding: 22px 12px 7px;
      }
      input:focus {
        border-bottom-color: var(--primary-color);
      }
      input:disabled {
        cursor: not-allowed;
        border-bottom-color: var(--disabled-text-color, var(--secondary-text-color));
        color: var(--disabled-text-color, var(--secondary-text-color));
      }
      input::placeholder {
        color: var(--secondary-text-color);
        opacity: 0.72;
      }
    `}};e([xe()],rt.prototype,"label",void 0),e([xe()],rt.prototype,"value",void 0),e([xe()],rt.prototype,"placeholder",void 0),e([xe()],rt.prototype,"type",void 0),e([xe()],rt.prototype,"step",void 0),e([xe()],rt.prototype,"min",void 0),e([xe()],rt.prototype,"max",void 0),e([xe({type:Boolean,reflect:!0})],rt.prototype,"disabled",void 0),rt=e([ye("space-hub-textfield")],rt);let st=class extends oe{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(e){this._config=Ge(e)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var e,t,i;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const n=await(null===(t=(e=window).loadCardHelpers)||void 0===t?void 0:t.call(e));n&&await(null===(i=n.createCardElement)||void 0===i?void 0:i.call(n,{type:"entities",entities:[]}))}catch(e){}const n=["ha-form","ha-formfield","ha-icon-picker","ha-switch","space-hub-textfield","ha-expansion-panel","ha-yaml-editor"],o=e=>Promise.race([customElements.whenDefined(e),new Promise((e=>setTimeout(e,1500)))]);try{await Promise.all(n.map(o))}catch(e){}this.requestUpdate()}_fireConfigChanged(){We(this,"config-changed",{config:Ge(this._config)}),this.requestUpdate()}_valueChanged(e,t){const i=e.split(".");let n=this._config;for(let e=0;e<i.length-1;e++){const t=i[e],o=Number(t);if(Number.isFinite(o)){if(!Array.isArray(n))return;n[o]||(n[o]={}),n=n[o]}else void 0===n[t]&&(n[t]={}),n=n[t]}const o=i[i.length-1];""===t||null==t?delete n[o]:n[o]=t,this._fireConfigChanged()}_getNestedValue(e){const t=e.split(".");let i=this._config;for(const e of t){if(null==i)return;const t=Number(e);i=Number.isFinite(t)?i[t]:i[e]}return i}_checkedFromEvent(e){var t;return!!(null===(t=e.currentTarget)||void 0===t?void 0:t.checked)}_clampIndex(e,t){return t<=0?0:Math.min(Math.max(e,0),t-1)}_moveArrayItem(e,t,i){const n=this._getNestedValue(e);if(!Array.isArray(n))return!1;const o=t+i;if(o<0||o>=n.length)return!1;const a=[...n],[r]=a.splice(t,1);return a.splice(o,0,r),this._valueChanged(e,a),!0}_moveSwitchRow(e,t){const i=this._config.switch_rows;if(!Array.isArray(i))return;const n=e+t;if(n<0||n>=i.length)return;const o=[...i],[a]=o.splice(e,1);o.splice(n,0,a),this._selectedSwitchRowIndex=n,this._valueChanged("switch_rows",o)}_moveHeader(e,t){const i=this._config.headers;if(!Array.isArray(i))return;const n=e+t;if(n<0||n>=i.length)return;const o=[...i],[a]=o.splice(e,1);o.splice(n,0,a),this._selectedHeaderIndex=n,this._valueChanged("headers",o)}_handleSelectChanged(e,t){const i=e.split("."),n=i[i.length-1],o=i[i.length-2];"action"===n&&["tap_action","hold_action","double_tap_action"].includes(o)?this._handleActionTypeChanged(i.slice(0,-1).join("."),t):this._valueChanged(e,t)}_handleActionTypeChanged(e,t){if(!t)return void this._valueChanged(e,void 0);const i=Ze(this._getNestedValue(e)),n=i?Object.assign({},i):{};n.action=t,"more-info"!==t&&delete n.entity,"navigate"!==t&&(delete n.navigation_path,delete n.navigation_replace),"url"!==t&&delete n.url_path,"perform-action"!==t&&(delete n.perform_action,delete n.data,delete n.target,delete n.service,delete n.service_data),"assist"!==t&&(delete n.pipeline_id,delete n.start_listening),"perform-action"!==t||n.perform_action||(n.perform_action=""),"navigate"!==t||n.navigation_path||(n.navigation_path=""),"url"!==t||n.url_path||(n.url_path=""),"assist"===t&&void 0===n.start_listening&&(n.start_listening=!1),this._valueChanged(e,n)}_setActionConfirmation(e,t){const i=Ze(this._getNestedValue(e));if(!i)return;const n=Object.assign({},i);if(t){const e=Ke(n.confirmation);n.confirmation=e&&"object"==typeof e?e:{title:"Please confirm",text:"Are you sure?"}}else delete n.confirmation;this._valueChanged(e,n)}_setActionConfirmationField(e,t,i){const n=Ze(this._getNestedValue(e));if(!n)return;const o=Object.assign({},n),a=Ke(o.confirmation),r=a&&"object"==typeof a?Object.assign({},a):{};i.trim()?r[t]=i:delete r[t],o.confirmation=!Object.keys(r).length||r,this._valueChanged(e,o)}_setSwitchConfirmation(e,t){if(!t)return void this._valueChanged(e,void 0);const i=Ke(this._getNestedValue(e));this._valueChanged(e,i&&"object"==typeof i?i:{title:"Please confirm",text:"Are you sure?"})}_setSwitchConfirmationField(e,t,i){const n=Ke(this._getNestedValue(e)),o=n&&"object"==typeof n?Object.assign({},n):{};i.trim()?o[t]=i:delete o[t],this._valueChanged(e,!Object.keys(o).length||o)}_setSwitchInactiveIcon(e,t){const i=this._getNestedValue(e),n=i&&"object"==typeof i?Object.assign({},i):{},o="string"==typeof t?t.trim():"";o?n.icon=o:delete n.icon,delete n.icon_inactive,delete n.icon_off,delete n["icon-inactive"],delete n["icon-off"],this._valueChanged(e,n)}_renderSelectField(e,t,i,n){const o=i||n[0]||"",a=o&&!n.includes(o)?[o,...n]:[...n],r=a.includes(i||"")?i||"":o;return L`
      <ha-form
        .hass=${this.hass}
        .data=${{selection:r}}
        .schema=${[{name:"selection",selector:{select:{mode:"dropdown",options:a.map((e=>({value:e,label:e})))}}}]}
        .computeLabel=${t=>"selection"===t.name?e:void 0}
        @value-changed=${e=>{var i;e.stopPropagation(),this._handleSelectChanged(t,null===(i=e.detail.value)||void 0===i?void 0:i.selection)}}
      ></ha-form>
    `}_renderEntityField(e,t,i,n={}){return L`
      <ha-form
        .hass=${this.hass}
        .data=${{entity:i||""}}
        .schema=${[{name:"entity",selector:{entity:n}}]}
        .computeLabel=${t=>"entity"===t.name?e:void 0}
        @value-changed=${e=>{var i;e.stopPropagation(),this._valueChanged(t,null===(i=e.detail.value)||void 0===i?void 0:i.entity)}}
      ></ha-form>
    `}_friendlyEntityName(e){var t,i,n;return e&&(null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e])&&(null===(n=this.hass.states[e].attributes)||void 0===n?void 0:n.friendly_name)||""}_entitySummary(e){if(!e)return"No entity selected";const t=this._friendlyEntityName(e);return t&&t!==e?`${t} • ${e}`:e}render(){return this.hass&&this._config?L`
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
      ${this._yamlError?L`<div class="yaml-error">${this._yamlError}</div>`:W}
    `}_yamlChanged(e){e.stopPropagation();const t=e.detail.value;t&&"object"==typeof t?(this._yamlError="",this._config=Ge(t),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return L`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var e,t,i,n,o;return L`
      <ha-expansion-panel outlined .header=${"Appearance"}>
        <div class="section-content">
          <div class="side-by-side">
            <space-hub-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(null!==(e=this._config.tile_height)&&void 0!==e?e:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("tile_height",Number.isFinite(t)&&t>0?t:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(null!==(t=this._config.main_icon_size)&&void 0!==t?t:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("main_icon_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(null!==(i=this._config.chip_icon_size)&&void 0!==i?i:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("chip_icon_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(null!==(n=this._config.chip_font_size)&&void 0!==n?n:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("chip_font_size",Number.isFinite(t)&&t>0?t:void 0)}}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color||""}
              @input=${e=>this._valueChanged("card_shadow_color",e.target.value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Shadow Intensity (0-1)"
              type="number"
              step="0.05"
              min="0"
              max="1"
              .value=${String(null!==(o=this._config.card_shadow_intensity)&&void 0!==o?o:"")}
              @input=${e=>{const t=Number(e.target.value);this._valueChanged("card_shadow_intensity",Number.isFinite(t)?t:void 0)}}
            ></space-hub-textfield>
          </div>
          <space-hub-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color||""}
            @input=${e=>this._valueChanged("unavailable_pulse_color",e.target.value)}
          ></space-hub-textfield>
        </div>
      </ha-expansion-panel>
    `}_renderHeadersSection(){const e=this._config.headers||[],t=this._clampIndex(this._selectedHeaderIndex,e.length);return L`
      <ha-expansion-panel outlined .header=${`Headers (${e.length})`}>
        <div class="section-content">
          ${e.length>1?L`
            <div class="tab-bar">
              ${e.map(((e,i)=>L`<button class="tab-btn${t===i?" active":""}" @click=${()=>{this._selectedHeaderIndex=i,this.requestUpdate()}}>Header ${i+1}</button>`))}
            </div>
          `:W}
          ${e.length?this._renderHeader(e[t],t):L`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${e.length>0?L`
              <button
                class="editor-btn"
                .disabled=${t<=0}
                @click=${()=>this._moveHeader(t,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Header Up
              </button>
              <button
                class="editor-btn"
                .disabled=${t>=e.length-1}
                @click=${()=>this._moveHeader(t,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Header Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeHeader(t)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${t+1}
              </button>
            `:W}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(e){this._config.headers&&(this._config.headers.splice(e,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(e,t){const i=`headers.${t}`;return L`
      ${this._renderWeatherConfig(e.weather,`${i}.weather`)}
      ${this._renderMainTileConfig(e.main,`${i}.main`)}
      ${this._renderACConfig(e.ac,`${i}.ac`)}
      ${this._renderThermostatConfig(e.thermostat,`${i}.thermostat`)}
    `}_renderWeatherConfig(e,t){var i,n;const o=e||{};return L`
      <ha-expansion-panel outlined .header=${"Weather Tile"}>
        <div class="section-content">
          ${!!e?L`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${o.name||""}
                @input=${e=>this._valueChanged(`${t}.name`,e.target.value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${o.icon||""}
                @value-changed=${e=>this._valueChanged(`${t}.icon`,e.detail.value)}
              ></ha-icon-picker>
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Weather Entity",`${t}.entity`,o.entity,{domain:"weather"})}
              <space-hub-textfield
                label="Tile Height (px)"
                type="number"
                .value=${String(null!==(i=o.height)&&void 0!==i?i:"")}
                @input=${e=>{const i=Number(e.target.value);this._valueChanged(`${t}.height`,Number.isFinite(i)&&i>0?i:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <ha-formfield label="Animated icons">
                <ha-switch
                  .checked=${!1!==o.animated_icons}
                  @change=${e=>{this._valueChanged(`${t}.animated_icons`,!!this._checkedFromEvent(e)&&void 0)}}
                ></ha-switch>
              </ha-formfield>
              <ha-formfield label="Show forecast">
                <ha-switch
                  .checked=${!1!==o.show_forecast}
                  @change=${e=>{this._valueChanged(`${t}.show_forecast`,!!this._checkedFromEvent(e)&&void 0)}}
                ></ha-switch>
              </ha-formfield>
            </div>
            <div class="side-by-side">
              ${this._renderSelectField("Forecast Type",`${t}.forecast_type`,o.forecast_type,et)}
              ${this._renderSelectField("Time Format",`${t}.time_format`,o.time_format,tt)}
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Forecast Slots"
                type="number"
                min="1"
                max="24"
                .value=${String(null!==(n=o.forecast_slots)&&void 0!==n?n:"")}
                @input=${e=>{const i=Number(e.target.value);this._valueChanged(`${t}.forecast_slots`,Number.isFinite(i)&&i>0?i:void 0)}}
              ></space-hub-textfield>
            </div>
            <space-hub-textfield
              label="Forecast Fields"
              placeholder="temperature, precipitation_probability"
              .value=${Array.isArray(o.forecast_fields)?o.forecast_fields.join(", "):o.forecast_fields||""}
              @input=${e=>{const i=e.target.value.split(",").map((e=>e.trim())).filter((e=>e));this._valueChanged(`${t}.forecast_fields`,i.length?i:void 0)}}
            ></space-hub-textfield>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${t}.temp_sensor`,o.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${t}.humidity_sensor`,o.humidity_sensor,{domain:"sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("24h Min Temperature Sensor",`${t}.temp_min_24h_sensor`,o.temp_min_24h_sensor,{domain:"sensor"})}
              ${this._renderEntityField("24h Max Temperature Sensor",`${t}.temp_max_24h_sensor`,o.temp_max_24h_sensor,{domain:"sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Feels Like Sensor",`${t}.feels_like_sensor`,o.feels_like_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Dew Point Sensor",`${t}.dewpoint_sensor`,o.dewpoint_sensor,{domain:"sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Wind Speed Sensor",`${t}.wind_speed_sensor`,o.wind_speed_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Wind Gust Sensor",`${t}.wind_gust_sensor`,o.wind_gust_sensor,{domain:"sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Wind Direction Sensor",`${t}.wind_direction_sensor`,o.wind_direction_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Rain State Sensor",`${t}.rain_state_sensor`,o.rain_state_sensor,{domain:"binary_sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Rain Today Sensor",`${t}.rain_today_sensor`,o.rain_today_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Rain Rate Sensor",`${t}.rain_rate_sensor`,o.rain_rate_sensor,{domain:"sensor"})}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("UV Sensor",`${t}.uv_sensor`,o.uv_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Solar Lux Sensor",`${t}.solar_lux_sensor`,o.solar_lux_sensor,{domain:"sensor"})}
            </div>
            ${this._renderEntityField("Pressure Sensor",`${t}.pressure_sensor`,o.pressure_sensor,{domain:"sensor"})}
            ${this._renderChipsConfig(o.chips||[],t)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,o.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,o.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${t}.double_tap_action`,o.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Weather Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{name:"Weather"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Weather Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderMainTileConfig(e,t){const i=e||{};return L`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!e?L`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${i.main_name||""}
                @input=${e=>this._valueChanged(`${t}.main_name`,e.target.value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${i.main_icon||""}
                @value-changed=${e=>this._valueChanged(`${t}.main_icon`,e.detail.value)}
              ></ha-icon-picker>
            </div>
            ${this._renderEntityField("Light Group Entity (tap toggles)",`${t}.light_group_entity`,i.light_group_entity)}
            <div class="side-by-side">
              ${this._renderEntityField("Tap Entity",`${t}.tap_entity`,i.tap_entity)}
              ${this._renderEntityField("Hold Entity (more-info)",`${t}.hold_entity`,i.hold_entity)}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${t}.temp_sensor`,i.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${t}.humidity_sensor`,i.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,i.glow_mode,Qe)}
            ${this._renderChipsConfig(i.chips||[],t)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${t}.double_tap_action`,i.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(e,t){const i=`${t}.chips`;return L`
      <ha-expansion-panel outlined .header=${`Chips (${e.length})`}>
        <div class="section-content">
          ${e.map(((e,t)=>this._renderSingleChip(e,`${i}.${t}`,t,i)))}
          <button class="editor-btn" @click=${()=>{const e=this._getNestedValue(i)||[];e.push({type:"custom",entity:""}),this._valueChanged(i,e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(e,t,i,n){return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Chip ${i+1}: ${e.type||"custom"}</span>
            <span class="sub-item-meta">${this._entitySummary(e.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=this._getNestedValue(n)||[];e.splice(i,1),this._valueChanged(n,[...e])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${t}.type`,e.type,Xe)}
          ${this._renderEntityField("Entity",`${t}.entity`,e.entity)}
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
          <space-hub-textfield
            label="Background (Active)"
            .value=${e.background_active||""}
            @input=${e=>this._valueChanged(`${t}.background_active`,e.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Background (Unavailable)"
            .value=${e.background_unavailable||""}
            @input=${e=>this._valueChanged(`${t}.background_unavailable`,e.target.value)}
          ></space-hub-textfield>
        </div>
        <space-hub-textfield
          label="Icon Color (Unavailable)"
          .value=${e.icon_color_unavailable||""}
          @input=${e=>this._valueChanged(`${t}.icon_color_unavailable`,e.target.value)}
        ></space-hub-textfield>
      </div>
    `}_renderACConfig(e,t){const i=e||{};return L`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!e?L`
            ${this._renderEntityField("Climate Entity",`${t}.entity`,i.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,i.glow_mode,Qe)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,i.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(e,t){const i=e||{};return L`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!e?L`
            ${this._renderEntityField("Climate Entity",`${t}.entity`,i.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,i.glow_mode,Qe)}
            ${this._renderActionConfig("Tap Action",`${t}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${t}.hold_action`,i.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>{this._valueChanged(t,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const e=this._config.switch_rows||[],t=this._clampIndex(this._selectedSwitchRowIndex,e.length);return L`
      <ha-expansion-panel outlined .header=${`Switch Rows (${e.length})`}>
        <div class="section-content">
          ${e.length>1?L`
            <div class="tab-bar">
              ${e.map(((e,i)=>L`<button class="tab-btn${t===i?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=i,this.requestUpdate()}}>Row ${i+1}</button>`))}
            </div>
          `:W}
          ${e.length?this._renderSwitchRow(e[t],t):L`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${e.length>0?L`
              <button
                class="editor-btn"
                .disabled=${t<=0}
                @click=${()=>this._moveSwitchRow(t,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Row Up
              </button>
              <button
                class="editor-btn"
                .disabled=${t>=e.length-1}
                @click=${()=>this._moveSwitchRow(t,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Row Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(t)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${t+1}
              </button>
            `:W}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(e){this._config.switch_rows&&(this._config.switch_rows.splice(e,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(e,t){const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[],n=`switch_rows.${t}`,o=Array.isArray(e)?n:`${n}.row`;return L`
      <div class="section-content">
        ${i.map(((e,t)=>this._renderSwitchItem(e,`${o}.${t}`,t,o,i.length)))}
        <button class="editor-btn" @click=${()=>{const e=this._getNestedValue(o)||[];e.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(o,[...e])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(e,t,i,n,o){const a=Ke(null==e?void 0:e.confirmation),r=void 0!==a,s=a&&"object"==typeof a&&a.title||"",l=a&&"object"==typeof a&&a.text||"",c=a&&"object"==typeof a&&a.confirm_text||"",d=a&&"object"==typeof a&&a.dismiss_text||"",h=`${t}.confirmation`;return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${e.name||this._friendlyEntityName(e.entity)||`Switch ${i+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(e.entity)}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${nt}
              .label=${"Move switch up"}
              .disabled=${i<=0}
              @click=${()=>this._moveArrayItem(n,i,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ot}
              .label=${"Move switch down"}
              .disabled=${i>=o-1}
              @click=${()=>this._moveArrayItem(n,i,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${at}
              .label=${"Remove switch"}
              @click=${()=>{const e=this._getNestedValue(n)||[];e.splice(i,1),this._valueChanged(n,[...e])}}
            ></ha-icon-button>
          </div>
        </div>
        ${this._renderEntityField("Controlled Entity",`${t}.entity`,e.entity)}
        <div class="side-by-side">
          <space-hub-textfield
            label="Name"
            .value=${e.name||""}
            @input=${e=>this._valueChanged(`${t}.name`,e.target.value)}
          ></space-hub-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Inactive State Icon"
            .value=${e.icon_inactive||e.icon_off||e["icon-inactive"]||e["icon-off"]||e.icon||""}
            @value-changed=${e=>this._setSwitchInactiveIcon(t,e.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Active State Icon"
            .value=${e.icon_active||""}
            @value-changed=${e=>this._valueChanged(`${t}.icon_active`,e.detail.value)}
          ></ha-icon-picker>
          <space-hub-textfield
            label="Icon Size"
            .value=${e.icon_size||""}
            @input=${e=>this._valueChanged(`${t}.icon_size`,e.target.value)}
          ></space-hub-textfield>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${t}.type`,e.type,Je)}
          ${this._renderSelectField("Glow Mode",`${t}.glow_mode`,e.glow_mode,Qe)}
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Font Size"
            .value=${e.font_size||e["font-size"]||""}
            @input=${e=>this._valueChanged(`${t}.font_size`,e.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Font Weight"
            .value=${e.font_weight||e["font-weight"]||""}
            @input=${e=>this._valueChanged(`${t}.font_weight`,e.target.value)}
          ></space-hub-textfield>
        </div>
        ${this._renderEntityField("Hold Entity (more-info on hold)",`${t}.hold_entity`,e.hold_entity)}

        <div class="confirmation-settings">
          <ha-formfield label="Require confirmation on tap">
            <ha-switch
              .checked=${r}
              @change=${e=>{this._setSwitchConfirmation(h,this._checkedFromEvent(e))}}
            ></ha-switch>
          </ha-formfield>
          <div class="confirmation-fields">
            <space-hub-textfield
              label="Confirmation Title"
              .value=${s}
              placeholder="Please confirm"
              .disabled=${!r}
              @input=${e=>this._setSwitchConfirmationField(h,"title",e.target.value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Confirmation Message"
              .value=${l}
              placeholder="Are you sure?"
              .disabled=${!r}
              @input=${e=>this._setSwitchConfirmationField(h,"text",e.target.value)}
            ></space-hub-textfield>
            <div class="side-by-side">
              <space-hub-textfield
                label="Confirm Button Text"
                .value=${c}
                placeholder="OK"
                .disabled=${!r}
                @input=${e=>this._setSwitchConfirmationField(h,"confirm_text",e.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Dismiss Button Text"
                .value=${d}
                placeholder="Cancel"
                .disabled=${!r}
                @input=${e=>this._setSwitchConfirmationField(h,"dismiss_text",e.target.value)}
              ></space-hub-textfield>
            </div>
          </div>
        </div>

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
      ${i.map(((e,n)=>L`
        <div class="side-by-side">
          <space-hub-textfield
            label="Template ${n+1}"
            .value=${e||""}
            @input=${e=>{const o=[...i];o[n]=e.target.value,this._valueChanged(`${t}.info_templates`,o)}}
          ></space-hub-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const e=[...i];e.splice(n,1),this._valueChanged(`${t}.info_templates`,e.length?e:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${i.length<2?L`
        <button class="editor-btn" @click=${()=>{const e=[...i,""];this._valueChanged(`${t}.info_templates`,e)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:W}
    `}_renderCardsSection(){const e=this._config.cards||[];return L`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${e.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${e.map(((t,i)=>this._renderEmbeddedCardItem(t,i,e.length)))}
          <button class="editor-btn" @click=${()=>{const t=[...e,{type:"tile",entity:""}];this._valueChanged("cards",t)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(e,t,i){return L`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Card ${t+1}: ${e.type||"unknown"}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${nt}
              .label=${"Move card up"}
              .disabled=${t<=0}
              @click=${()=>this._moveArrayItem("cards",t,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ot}
              .label=${"Move card down"}
              .disabled=${t>=i-1}
              @click=${()=>this._moveArrayItem("cards",t,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${at}
              .label=${"Remove card"}
              @click=${()=>{const e=[...this._config.cards||[]];e.splice(t,1),this._valueChanged("cards",e.length?e:void 0)}}
            ></ha-icon-button>
          </div>
        </div>
        <ha-yaml-editor
          .defaultValue=${e}
          @value-changed=${e=>{e.stopPropagation();const i=[...this._config.cards||[]];i[t]=e.detail.value,this._valueChanged("cards",i)}}
        ></ha-yaml-editor>
      </div>
    `}_renderActionConfig(e,t,i){const n=Ze(i),o=!!n,a=Ke(null==n?void 0:n.confirmation),r=void 0!==a,s=a&&"object"==typeof a&&a.title||"",l=a&&"object"==typeof a&&a.text||"",c=a&&"object"==typeof a&&a.confirm_text||"",d=a&&"object"==typeof a&&a.dismiss_text||"";return L`
      <ha-expansion-panel outlined .header=${e}>
        <div class="section-content">
          ${o?L`
            ${this._renderSelectField("Action",`${t}.action`,null==n?void 0:n.action,it)}
            ${"more-info"===(null==n?void 0:n.action)?L`
              ${this._renderEntityField("More Info Entity",`${t}.entity`,n.entity)}
            `:W}
            ${"navigate"===(null==n?void 0:n.action)?L`
              <space-hub-textfield
                label="Navigation Path"
                .value=${n.navigation_path||""}
                @input=${e=>this._valueChanged(`${t}.navigation_path`,e.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Replace current path">
                <ha-switch
                  .checked=${!!n.navigation_replace}
                  @change=${e=>this._valueChanged(`${t}.navigation_replace`,this._checkedFromEvent(e)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:W}
            ${"url"===(null==n?void 0:n.action)?L`
              <space-hub-textfield
                label="URL"
                .value=${n.url_path||""}
                @input=${e=>this._valueChanged(`${t}.url_path`,e.target.value)}
              ></space-hub-textfield>
            `:W}
            ${"perform-action"===(null==n?void 0:n.action)?L`
              <space-hub-textfield
                label="Action"
                .value=${n.perform_action||""}
                @input=${e=>this._valueChanged(`${t}.perform_action`,e.target.value)}
              ></space-hub-textfield>
              <ha-yaml-editor
                label="Target"
                .defaultValue=${n.target||{}}
                @value-changed=${e=>{e.stopPropagation(),this._valueChanged(`${t}.target`,e.detail.value)}}
              ></ha-yaml-editor>
              <ha-yaml-editor
                label="Data"
                .defaultValue=${n.data||{}}
                @value-changed=${e=>{e.stopPropagation(),this._valueChanged(`${t}.data`,e.detail.value)}}
              ></ha-yaml-editor>
            `:W}
            ${"assist"===(null==n?void 0:n.action)?L`
              <space-hub-textfield
                label="Pipeline ID"
                .value=${n.pipeline_id||""}
                @input=${e=>this._valueChanged(`${t}.pipeline_id`,e.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Start listening immediately">
                <ha-switch
                  .checked=${!!n.start_listening}
                  @change=${e=>this._valueChanged(`${t}.start_listening`,this._checkedFromEvent(e)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:W}
            <ha-formfield label="Require confirmation">
              <ha-switch
                .checked=${r}
                @change=${e=>this._setActionConfirmation(t,this._checkedFromEvent(e))}
              ></ha-switch>
            </ha-formfield>
            ${r?L`
              <space-hub-textfield
                label="Confirmation Title"
                .value=${s}
                placeholder="Please confirm"
                @input=${e=>this._setActionConfirmationField(t,"title",e.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Confirmation Message"
                .value=${l}
                placeholder="Are you sure?"
                @input=${e=>this._setActionConfirmationField(t,"text",e.target.value)}
              ></space-hub-textfield>
              <div class="side-by-side">
                <space-hub-textfield
                  label="Confirm Button Text"
                  .value=${c}
                  placeholder="OK"
                  @input=${e=>this._setActionConfirmationField(t,"confirm_text",e.target.value)}
                ></space-hub-textfield>
                <space-hub-textfield
                  label="Dismiss Button Text"
                  .value=${d}
                  placeholder="Cancel"
                  @input=${e=>this._setActionConfirmationField(t,"dismiss_text",e.target.value)}
                ></space-hub-textfield>
              </div>
            `:W}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(t,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:L`
            <button class="editor-btn" @click=${()=>this._valueChanged(t,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${e}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};st.styles=r`
    .editor-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .mode-toggle {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
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
      flex-wrap: wrap;
      align-items: flex-start;
    }
    .side-by-side > * {
      flex: 1 1 220px;
      min-width: 0;
    }
    .side-by-side > ha-icon-button {
      flex: 0 0 40px;
    }
    .tab-bar {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
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
    .editor-btn[disabled] {
      opacity: 0.45;
      cursor: not-allowed;
    }
    .editor-btn[disabled]:hover {
      background: none;
    }
    .confirmation-settings {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 8px 0;
      border-top: 1px solid var(--divider-color, rgba(0,0,0,0.12));
      border-bottom: 1px solid var(--divider-color, rgba(0,0,0,0.12));
    }
    .confirmation-fields {
      display: flex;
      flex-direction: column;
      gap: 8px;
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
    .header-actions {
      display: flex;
      align-items: center;
      gap: 2px;
      flex-shrink: 0;
    }
    .header-actions ha-icon-button[disabled] {
      opacity: 0.35;
      pointer-events: none;
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
    space-hub-textfield, ha-form, ha-icon-picker {
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
  `,e([xe({attribute:!1})],st.prototype,"hass",void 0),e([Ae()],st.prototype,"_config",void 0),e([Ae()],st.prototype,"_selectedHeaderIndex",void 0),e([Ae()],st.prototype,"_selectedSwitchRowIndex",void 0),e([Ae()],st.prototype,"_yamlMode",void 0),e([Ae()],st.prototype,"_yamlError",void 0),st=e([ye("space-hub-card-editor")],st);const lt=new WeakMap,ct=e=>{void 0!==e.holdTimer&&(window.clearTimeout(e.holdTimer),e.holdTimer=void 0)},dt=(e,t)=>{const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={action:t},e.dispatchEvent(i)},ht=(e,t={})=>{const i=lt.get(e);if(i)return void(i.options=t);const n={options:t,held:!1,startX:0,startY:0,pointerActive:!1};lt.set(e,n),e.addEventListener("contextmenu",(e=>{e.preventDefault(),e.stopPropagation()})),e.addEventListener("pointerdown",(t=>{if(0===t.button&&(n.pointerActive=!0,n.held=!1,n.startX=t.clientX,n.startY=t.clientY,ct(n),n.options.hasHold&&(n.holdTimer=window.setTimeout((()=>{n.holdTimer=void 0,n.held=!0}),500),"function"==typeof e.setPointerCapture)))try{e.setPointerCapture(t.pointerId)}catch(e){}}),{passive:!0}),e.addEventListener("pointermove",(e=>{if(!n.pointerActive||void 0===n.holdTimer)return;const t=Math.abs(e.clientX-n.startX),i=Math.abs(e.clientY-n.startY);(t>10||i>10)&&(ct(n),n.held=!1)}),{passive:!0});const o=()=>{n.pointerActive=!1,n.held=!1,ct(n)};e.addEventListener("pointercancel",o),e.addEventListener("pointerleave",o),e.addEventListener("blur",o),e.addEventListener("pointerup",(t=>{if(n.pointerActive){if(n.pointerActive=!1,ct(n),"function"==typeof e.releasePointerCapture)try{e.releasePointerCapture(t.pointerId)}catch(e){}if(n.held)return n.held=!1,void dt(e,"hold");if(n.options.hasDoubleClick)return void 0!==n.doubleTapTimer?((e=>{void 0!==e.doubleTapTimer&&(window.clearTimeout(e.doubleTapTimer),e.doubleTapTimer=void 0)})(n),void dt(e,"double_tap")):void(n.doubleTapTimer=window.setTimeout((()=>{n.doubleTapTimer=void 0,dt(e,"tap")}),250));dt(e,"tap")}})),e.addEventListener("keyup",(t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),dt(e,"tap"))}))},pt=se(class extends le{update(e,[t]){return ht(e.element,t),j}render(e){}});function ut(e,t,i){var n,o,a,r;return t?{bg:null!==(o=null!==(n=i?t.background_active:t.background_inactive)&&void 0!==n?n:t.background)&&void 0!==o?o:e.bg,iconColor:null!==(r=null!==(a=i?t.icon_color_active:t.icon_color_inactive)&&void 0!==a?a:t.icon_color)&&void 0!==r?r:e.iconColor}:e}function mt(e,t){var i;return"lock"===e||null!==(i=null==t?void 0:t.startsWith("lock."))&&void 0!==i&&i}function vt(e,t){var i;const n=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),o=String((null==t?void 0:t.type)||"").toLowerCase(),a=n&&(null==e?void 0:e.hass)?e.hass.states[n]:void 0,r=((null==a?void 0:a.state)||"").toLowerCase(),s=!a||"unavailable"===r||"unknown"===r||""===r,l=!s&&function(e,t,i){var n;return!!t&&("lock"===i||null!==(n=null==e?void 0:e.startsWith("lock."))&&void 0!==n&&n?"locked"===t:"on"===t||"open"===t||"opening"===t)}(n,r,o),c=function(e,t,i,n,o,a){var r,s,l;return a?null!==(l=null!==(s=null!==(r=null==n?void 0:n.icon_unavailable)&&void 0!==r?r:null==n?void 0:n.icon_inactive)&&void 0!==s?s:null==n?void 0:n.icon)&&void 0!==l?l:"mdi:alert-circle-outline":o&&(null==n?void 0:n.icon_active)?n.icon_active:!o&&(null==n?void 0:n.icon_inactive)?n.icon_inactive:(null==n?void 0:n.icon)?n.icon:mt(e,t)?o?"mdi:lock":"mdi:lock-open-variant":"door"===e?o?"mdi:door-open":"mdi:door":"presence"===e?"on"===i?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===e?"on"===i?"mdi:power-plug":i&&"off"!==i?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===e?o?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===e?o?"mdi:gate-open":"mdi:gate":o?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(o,n,r,t,l,s),{bg:d,iconColor:h}=function(e,t,i,n,o,a){if(a)return function(e){var t,i,n,o,a,r;return{bg:null!==(n=null!==(i=null!==(t=null==e?void 0:e.background_unavailable)&&void 0!==t?t:null==e?void 0:e.background_inactive)&&void 0!==i?i:null==e?void 0:e.background)&&void 0!==n?n:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(r=null!==(a=null!==(o=null==e?void 0:e.icon_color_unavailable)&&void 0!==o?o:null==e?void 0:e.icon_color_inactive)&&void 0!==a?a:null==e?void 0:e.icon_color)&&void 0!==r?r:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(n);if(mt(e,t))return ut(o?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},n,o);if("door"===e||"sliding_gate"===e||"gate"===e)return ut(o?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},n,o);if("presence"===e){const e="on"===i;return ut(e?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},n,e)}if("smart_plug"===e)return ut(o?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},n,o);return ut(o?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},n,o)}(o,n,r,t,l,s),p="chip"+(s?" chip-unavailable":""),u=s?"icon-unavailable":"",m=null!==(i=null==a?void 0:a.state)&&void 0!==i?i:"unavailable";return L`
    <div
      class=${p}
      style=${`background:${d}`}
      title=${m}
      data-state=${r||"unavailable"}
      role="img"
      aria-label=${o?`${o} ${m}`:m}
    >
      <ha-icon .icon=${c} class=${u} style=${`color:${h}`}></ha-icon>
    </div>
  `}const _t={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},gt={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"},ft={weak:"rgba(229,57,53,0.16)",strong:"rgba(229,57,53,0.30)"};const bt={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function wt(e,t="static",i=!1){if(!e||"none"===t||!i)return{style:"",overlay:W};return{style:`${`--pulse-weak: ${e.weak}; --pulse-strong: ${e.strong};`} ${"pulse"===t?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${e.strong}), 0 6px 18px var(--pulse-weak, ${e.weak});`}`,overlay:L`<div class="glow-overlay" aria-hidden="true"></div>`}}function yt(e,t){var i;const n=(null==t?void 0:t.icon)||"mdi:sofa-outline",o=(null==t?void 0:t.name)||"",a="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.temp_sensor,2,"°"):"—°",r="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(null==t?void 0:t.humidity_sensor,2,"%"):"—%",s=!(!(null==t?void 0:t.double_tap_action)&&!(null===(i=null==e?void 0:e._config)||void 0===i?void 0:i.double_tap_action)),l=!!(null==t?void 0:t.light_group_entity),c=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),d=l&&"function"==typeof(null==e?void 0:e._isOn)&&e._isOn(c),h=(null==t?void 0:t.light_group_entity)||(null==t?void 0:t.tap_entity)||(null==t?void 0:t.entity),p=(null==t?void 0:t.glow_mode)||"static",u=!!(null==t?void 0:t.light_group_entity)&&d&&"none"!==p,m=_t,{style:v,overlay:_}=wt(m,p,u),g="chip main-light-chip "+(d?"on":"off"),f=Array.isArray(null==t?void 0:t.chips)?t.chips:[],b=f.find((e=>"illuminance"===String((null==e?void 0:e.type)||"").toLowerCase())),w=f.filter((e=>"illuminance"!==String((null==e?void 0:e.type)||"").toLowerCase())).map((t=>vt(e,t))),y=b?function(e,t){const i=(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity),n=(null==t?void 0:t.icon)||"mdi:brightness-5",o="function"==typeof(null==e?void 0:e._fmt2)?e._fmt2(i,0," lx"):"— lx";return L`
    <div class="illuminance-chip">
      <ha-icon .icon=${n}></ha-icon>
      <span class="illuminance-value">${o}</span>
    </div>
  `}(e,b):W;return L`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${v}>${_}</div>
      <ha-control-button
        class="main-tile ${d?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==e?void 0:e._onMainAction)&&e._onMainAction(i,t,null==t?void 0:t.tap_entity,null==t?void 0:t.hold_entity,h)}}
        .actionHandler=${pt({hasHold:!0,hasDoubleClick:s})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${n}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${a}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${r}</span>
        </div>
        ${y}
        <div class="main-chips-bottom-right" data-role="chips">
          ${l?L`<div class=${g}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:W}
          ${w.length?L`${w}`:W}
        </div>
        <div class="main-name">${o}</div>
  </ha-control-button>
    </div>
  `}const $t=new Set(["","unknown","unavailable"]),xt=["temperature","precipitation_probability"],At={temp:"temperature",temperature:"temperature",rain_chance:"precipitation_probability",precipitation_probability:"precipitation_probability",precip_probability:"precipitation_probability",probability:"precipitation_probability",pop:"precipitation_probability",rain:"precipitation",precipitation:"precipitation",humidity:"humidity",hum:"humidity",wind:"wind_speed",wind_speed:"wind_speed",gust:"wind_gust_speed",wind_gust:"wind_gust_speed",wind_gust_speed:"wind_gust_speed",uv:"uv_index",uv_index:"uv_index",cloud:"cloud_coverage",clouds:"cloud_coverage",cloud_coverage:"cloud_coverage"},Ct={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"};function kt(e){return e<=0?"#3aa7ff":e<=8?"#50c5d8":e<=15?"#9bd57b":e<=22?"#ffd34a":e<=28?"#ff9d24":"#ff5d38"}function St(e,t){var i;if(t&&(null==e?void 0:e.hass))return null===(i=e.hass.states)||void 0===i?void 0:i[t]}function Et(e){const t=void 0===(null==e?void 0:e.state)||null===(null==e?void 0:e.state)?"":String(e.state);return $t.has(t.toLowerCase())?"":t}function Tt(e,t){const i=Et(St(e,t));if(!i)return;const n=Number(i);return Number.isFinite(n)?n:void 0}function Ft(e,t,i=!1){if(null==e||""===e)return"—";const n=Number(e);return Number.isFinite(n)?i&&Math.abs(n)>=1e3?`${(n/1e3).toFixed(1)}k`:n.toFixed(t):String(e)}function zt(e,t,i,n=!1){var o;const a=St(e,t),r=Et(a);if(!r)return"—";const s=(null===(o=null==a?void 0:a.attributes)||void 0===o?void 0:o.unit_of_measurement)||"",l=Ft(r,i,n);return s?`${l} ${s}`:l}function Nt(e,t){const i=Tt(e,t);return void 0===i?"—°":`${i.toFixed(1)}°`}function Mt(e,t,i){const n=zt(e,t,1),o=function(e,t){const i=Tt(e,t);if(void 0===i)return"";const n=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];return n[Math.round((i%360+360)%360/22.5)%n.length]}(e,i);return"—"===n?o||"—":o?`${n} ${o}`:n}function Pt(e){if(!e)return"Weather";const t={"clear-night":"Clear night",partlycloudy:"Partly cloudy","lightning-rainy":"Storm rain","snowy-rainy":"Sleet","windy-variant":"Windy"};return t[e]?t[e]:e.replace(/[-_]/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))}function Ht(e){return(e||"unknown").replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function It(e,t){const i=Et(St(e,t.rain_state_sensor)).toLowerCase();if("on"===i||"wet"===i)return!0;const n=Tt(e,t.rain_rate_sensor);return void 0!==n&&n>0}function Rt(e,t,i,n,o=!1){if(n||"—"!==i)return{icon:e,label:t,value:i,entity:n,active:o}}function Lt(e,t){const i=It(e,t),n=t.rain_state_sensor||t.rain_rate_sensor||t.rain_today_sensor,o=function(e,t){const i=It(e,t);if(!t.rain_state_sensor&&!t.rain_rate_sensor)return"";if(!i)return"No rain";const n=zt(e,t.rain_rate_sensor,1);return"—"===n||"0.0 mm/h"===n?"Raining":`Raining ${n}`}(e,t)||zt(e,t.rain_today_sensor,1);return[Rt("mdi:weather-windy","Wind",Mt(e,t.wind_speed_sensor,t.wind_direction_sensor),t.wind_speed_sensor),Rt("mdi:weather-tornado","Gust",zt(e,t.wind_gust_sensor,1),t.wind_gust_sensor),Rt(i?"mdi:weather-pouring":"mdi:water-outline","Rain",o,n,i),Rt("mdi:sun-wireless-outline","UV",zt(e,t.uv_sensor,0),t.uv_sensor),Rt("mdi:white-balance-sunny","Solar",zt(e,t.solar_lux_sensor,1,!0),t.solar_lux_sensor),Rt("mdi:gauge","Pressure",zt(e,t.pressure_sensor,0),t.pressure_sensor)].filter((e=>!!e))}function Ot(e){return Array.isArray(e)?e.filter((e=>!!e&&"object"==typeof e)).map((e=>({condition:"string"==typeof e.condition?e.condition:void 0,datetime:"string"==typeof e.datetime?e.datetime:void 0,temperature:e.temperature,precipitation_probability:e.precipitation_probability,precipitation:e.precipitation,humidity:e.humidity,wind_speed:e.wind_speed,wind_gust_speed:e.wind_gust_speed,uv_index:e.uv_index,cloud_coverage:e.cloud_coverage,templow:e.templow}))):[]}function jt(e,t){if(!e.datetime)return"";const i=new Date(e.datetime);if(Number.isNaN(i.getTime()))return"";const n=function(e){const t=String(e||"").trim().toLowerCase().replace(/[-_\s]/g,"");return["12","12h","12hour","12hours","ampm"].includes(t)?"12h":["24","24h","24hour","24hours"].includes(t)?"24h":void 0}(t),o={hour:"2-digit",minute:"2-digit"};return n&&(o.hour12="12h"===n),new Intl.DateTimeFormat(void 0,o).format(i)}function Wt(e,t){const i=Number(e[t]);return Number.isFinite(i)?i:void 0}function Vt(e,t,i){const n=e.map(((e,i)=>({item:e,index:i,value:Wt(e,t)}))).filter((e=>void 0!==e.value));if(!n.length)return{points:[],min:0,max:1};const o=n.map((e=>e.value)),{min:a,max:r}=function(e,t){if("precipitation_probability"===e)return{min:0,max:100};let i=Math.min(...t),n=Math.max(...t);if("temperature"===e)i=5*Math.floor((i-2)/5),n=5*Math.ceil((n+2)/5);else{const e=Math.max(.18*(n-i),1);i=Math.max(0,i-e),n+=e}return n<=i&&(n=i+1),{min:i,max:n}}(t,o),s=i.width-i.left-i.right,l=i.height-i.top-i.bottom,c=n.map(((e,t)=>{const o=1===n.length?i.left+s/2:i.left+t/(n.length-1)*s,c=i.top+(r-e.value)/(r-a)*l;return Object.assign(Object.assign({},e),{x:o,y:c})}));return{points:c,min:a,max:r}}function Dt(e){return e<=0?[]:Array.from(new Set([0,Math.floor((e-1)/3),Math.floor(2*(e-1)/3),e-1])).filter((t=>t>=0&&t<e))}function Ut(e){return e.replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function Gt(e){if(!e.length)return"";if(1===e.length)return`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;let t=`M ${e[0].x.toFixed(2)} ${e[0].y.toFixed(2)}`;for(let i=0;i<e.length-1;i+=1){const n=e[i],o=e[i+1],a=e[i-1]||n,r=e[i+2]||o,s=n.x+(o.x-a.x)/6,l=n.y+(o.y-a.y)/6,c=o.x-(r.x-n.x)/6,d=o.y-(r.y-n.y)/6;t+=` C ${s.toFixed(2)} ${l.toFixed(2)}, ${c.toFixed(2)} ${d.toFixed(2)}, ${o.x.toFixed(2)} ${o.y.toFixed(2)}`}return t}function qt(e,t){if(!e.length)return"";const i=e[0],n=e[e.length-1];return`${Gt(e)} L ${n.x.toFixed(2)} ${t.toFixed(2)} L ${i.x.toFixed(2)} ${t.toFixed(2)} Z`}function Bt(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return"";return`${t.getFullYear()}-${`${t.getMonth()+1}`.padStart(2,"0")}-${`${t.getDate()}`.padStart(2,"0")}`}function Yt(e,t){const i=Number(e[t]);return Number.isFinite(i)?i:void 0}function Kt(e,t,i){return Math.max(0,Math.min(100,(e-t)/(i-t)*100))}function Zt(e,t,i,n){const o=i.slice(0,7);if(!o.length)return W;const a=function(e){const t=new Map;return e.forEach(((e,i)=>{const n=Bt(e.datetime),o=Wt(e,"temperature");if(!n||void 0===o)return;const a={item:e,value:o,x:0,y:0,index:i},r=t.get(n)||{};(!r.low||o<r.low.value)&&(r.low=a),(!r.high||o>r.high.value)&&(r.high=a),t.set(n,r)})),t}(n),{min:r,max:s}=function(e,t){const i=[];if(e.forEach((e=>{const t=Yt(e,"templow"),n=Yt(e,"temperature");void 0!==t&&i.push(t),void 0!==n&&i.push(n)})),t.forEach((e=>{const t=Wt(e,"temperature");void 0!==t&&i.push(t)})),!i.length)return{min:0,max:1};let n=5*Math.floor((Math.min(...i)-2)/5),o=5*Math.ceil((Math.max(...i)+2)/5);return o<=n&&(o=n+1),{min:n,max:o}}(o,n),l=Bt((new Date).toISOString()),c=function(e,t){return Tt(e,t.temp_sensor)}(e,t);return L`
    <section class="weather-daily-forecast">
      <div class="weather-daily-forecast-heading">
        <ha-icon icon="mdi:calendar-range-outline"></ha-icon>
        <span>Daily Forecast</span>
        <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
      </div>
      ${o.map((e=>{var i,n,o,d;const h=Bt(e.datetime),p=a.get(h),u=null!==(i=Yt(e,"templow"))&&void 0!==i?i:null===(n=null==p?void 0:p.low)||void 0===n?void 0:n.value,m=null!==(o=Yt(e,"temperature"))&&void 0!==o?o:null===(d=null==p?void 0:p.high)||void 0===d?void 0:d.value;if(void 0===u||void 0===m)return W;const v=Kt(u,r,s),_=Kt(m,r,s),g=Math.max(4,_-v),f=String(e.condition||""),b=Number(e.precipitation_probability),w=h===l&&void 0!==c?Kt(c,r,s):void 0;return L`
          <div class="weather-daily-row">
            <div class="weather-daily-day">${function(e){if(!e)return"";const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const i=Bt((new Date).toISOString()),n=new Date;n.setDate(n.getDate()+1);const o=Bt(e);return o===i?"Today":o===Bt(n.toISOString())?"Tomorrow":new Intl.DateTimeFormat(void 0,{weekday:"short"}).format(t)}(e.datetime)}</div>
            <div class="weather-daily-condition">
              <ha-icon
                class=${`weather-daily-icon weather-condition-${Ht(f)}${!1===t.animated_icons?"":" animated"}`}
                .icon=${Ct[f]||"mdi:weather-partly-cloudy"}
              ></ha-icon>
              ${Number.isFinite(b)&&b>0?L`<span>${Math.round(b)}%</span>`:W}
            </div>
            <div class="weather-daily-low">
              <span>${u.toFixed(0)}°</span>
              ${(null==p?void 0:p.low)?L`<small>${jt(p.low.item,t.time_format)}</small>`:W}
            </div>
            <div class="weather-daily-range">
              <div class="weather-daily-track"></div>
              <div
                class="weather-daily-segment"
                style=${`left:${v.toFixed(1)}%;width:${g.toFixed(1)}%;background:linear-gradient(90deg, ${kt(u)}, ${kt(m)});`}
              ></div>
              ${void 0!==w?L`
                <span class="weather-daily-current-dot" style=${`left:${w.toFixed(1)}%;`}></span>
              `:W}
            </div>
            <div class="weather-daily-high">
              <span>${m.toFixed(0)}°</span>
              ${(null==p?void 0:p.high)?L`<small>${jt(p.high.item,t.time_format)}</small>`:W}
            </div>
          </div>
        `}))}
    </section>
  `}function Xt(e,t){if(!e.length)return"";const i=e[0],n=e.slice(0,12).reduce(((e,t)=>{const i=Number(e.precipitation_probability)||0,n=Number(t.precipitation_probability)||0,o=Number(e.precipitation)||0,a=Number(t.precipitation)||0;return a>o||a===o&&n>i?t:e}),i),o=Number(n.precipitation_probability)||0,a=Number(n.precipitation)||0;if(o>=25||a>0){const e=jt(n,t),i=o>0?`${Math.round(o)}%`:`${a.toFixed(1)} mm`;return e?`Rain ${i} at ${e}`:`Rain ${i}`}return`${Pt(String(i.condition||""))} ${r=i,`${Ft(r.temperature,0)}°`}`;var r}function Jt(e){e.stopPropagation()}function Qt(e,t,i){t.preventDefault(),t.stopPropagation(),i&&"function"==typeof(null==e?void 0:e._openMoreInfo)&&e._openMoreInfo(i)}function ei(e,t,i){"Enter"!==t.key&&" "!==t.key||Qt(e,t,i)}function ti(e,t,i,n){if(t.stopPropagation(),!n||"function"!=typeof(null==e?void 0:e._setWeatherForecastGraphSelection))return;const o=t.currentTarget.getBoundingClientRect(),a=o.width?Math.max(0,Math.min(1,(t.clientX-o.left)/o.width)):0;e._setWeatherForecastGraphSelection(i,Math.round(a*(n-1)))}function ii(e,t,i){const n="function"==typeof(null==e?void 0:e._getWeatherForecastGraphSelection)?e._getWeatherForecastGraphSelection(t):void 0,o=function(e){const t=Date.now();let i=0,n=Number.POSITIVE_INFINITY;return e.forEach(((e,o)=>{const a=e.item.datetime?new Date(e.item.datetime).getTime():Number.NaN;if(!Number.isFinite(a))return;const r=Math.abs(a-t);r<n&&(n=r,i=o)})),i}(i);return i[Math.max(0,Math.min(i.length-1,Number.isFinite(Number(n))?Number(n):o))]||i[0]}function ni(e,t,i,n){const o=e.height-e.bottom;return[...[0,1,2].map((t=>{const i=e.top+t*((o-e.top)/2);return O`<line class="weather-conditions-grid-line" x1=${e.left} x2=${e.width-e.right} y1=${i} y2=${i}></line>`})),...t.map((t=>{const a=i[t];return O`
        <line class="weather-conditions-time-line" x1=${a.x} x2=${a.x} y1=${e.top} y2=${o}></line>
        <text class="weather-conditions-time-label" x=${a.x} y=${e.height-6}>${jt(a.item,n)}</text>
      `}))]}function oi(e,t,i,n){const o={width:360,height:118,left:14,right:42,top:15,bottom:24},{points:a,min:r,max:s}=Vt(i,"temperature",o);if(a.length<2)return W;const l=o.height-o.bottom,c=ii(e,n,a),d=a.reduce(((e,t)=>t.value<e.value?t:e),a[0]),h=a.reduce(((e,t)=>t.value>e.value?t:e),a[0]),p=Dt(a.length),u=function(e){if(e.length<=7)return e;const t=Math.max(1,Math.ceil(e.length/7));return e.filter(((e,i)=>i%t==0)).slice(0,7)}(a),m=Gt(a),v=qt(a,l),_=Ut(n),g=`weather-conditions-temp-line-${_}`,f=`weather-conditions-temp-fill-${_}`,b=(r+s)/2;return L`
    <section class="weather-conditions-card weather-conditions-temp">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Temperature</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${jt(c.item,t.time_format)}</span>
          <strong>${c.value.toFixed(0)}°</strong>
        </div>
      </div>

      ${u.length?L`
        <div class="weather-conditions-icons">
          ${u.map((e=>{const i=String(e.item.condition||"");return L`
              <ha-icon
                class=${`weather-conditions-icon weather-condition-${Ht(i)}${!1===t.animated_icons?"":" animated"}`}
                .icon=${Ct[i]||"mdi:weather-partly-cloudy"}
              ></ha-icon>
            `}))}
        </div>
      `:W}

      <svg
        class="weather-conditions-chart"
        viewBox=${`0 0 ${o.width} ${o.height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Temperature forecast graph"
        @pointerdown=${Jt}
        @pointermove=${t=>ti(e,t,n,a.length)}
        @click=${t=>ti(e,t,n,a.length)}
      >
        <defs>
          <linearGradient id=${f} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgba(255, 179, 28, 0.66)"></stop>
            <stop offset="52%" stop-color="rgba(255, 179, 28, 0.24)"></stop>
            <stop offset="100%" stop-color="rgba(47, 185, 221, 0.38)"></stop>
          </linearGradient>
          <linearGradient id=${g} x1=${o.left} x2=${o.width-o.right} y1="0" y2="0" gradientUnits="userSpaceOnUse">
            ${a.map(((e,t)=>O`
              <stop offset=${t/(a.length-1)*100+"%"} stop-color=${kt(e.value)}></stop>
            `))}
          </linearGradient>
        </defs>
        ${ni(o,p,a,t.time_format)}
        <path class="weather-conditions-area" d=${v} fill=${`url(#${f})`}></path>
        <path class="weather-conditions-line-shadow" d=${m}></path>
        <path class="weather-conditions-temp-line" d=${m} stroke=${`url(#${g})`}></path>
        <text class="weather-conditions-extreme" x=${d.x} y=${Math.max(12,d.y-9)}>L</text>
        <text class="weather-conditions-extreme" x=${h.x} y=${Math.max(12,h.y-9)}>H</text>
        <line class="weather-conditions-selected-line" x1=${c.x} x2=${c.x} y1=${o.top} y2=${l}></line>
        <circle class="weather-conditions-dot" cx=${c.x} cy=${c.y} r="4.2"></circle>
        <circle class="weather-conditions-dot-ring" cx=${c.x} cy=${c.y} r="7.2"></circle>
        <text class="weather-conditions-axis" x=${o.width-5} y=${o.top+3}>${s.toFixed(0)}°</text>
        <text class="weather-conditions-axis" x=${o.width-5} y=${o.top+(l-o.top)/2}>${b.toFixed(0)}°</text>
        <text class="weather-conditions-axis" x=${o.width-5} y=${l}>${r.toFixed(0)}°</text>
      </svg>
    </section>
  `}function ai(e,t,i,n,o){if(i.length<2)return W;const a=n.includes("temperature")?oi(e,t,i,`${o}-temperature`):W,r=n.includes("precipitation_probability")?function(e,t,i,n){const o={width:360,height:92,left:14,right:42,top:10,bottom:22},{points:a}=Vt(i,"precipitation_probability",o);if(a.length<2)return W;const r=o.height-o.bottom,s=ii(e,n,a),l=a.reduce(((e,t)=>t.value>e.value?t:e),a[0]),c=Dt(a.length),d=Gt(a),h=qt(a,r),p=`weather-conditions-rain-fill-${Ut(n)}`;return L`
    <section class="weather-conditions-card weather-conditions-rain">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Chance of Precipitation</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${jt(s.item,t.time_format)}</span>
          <strong>${Math.round(s.value)}%</strong>
        </div>
      </div>
      <div class="weather-conditions-subtitle">Today's chance: ${Math.round(l.value)}%</div>
      <svg
        class="weather-conditions-chart"
        viewBox=${`0 0 ${o.width} ${o.height}`}
        preserveAspectRatio="none"
        role="img"
        aria-label="Chance of precipitation forecast graph"
        @pointerdown=${Jt}
        @pointermove=${t=>ti(e,t,n,a.length)}
        @click=${t=>ti(e,t,n,a.length)}
      >
        <defs>
          <linearGradient id=${p} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="rgba(56, 199, 243, 0.48)"></stop>
            <stop offset="100%" stop-color="rgba(56, 199, 243, 0.10)"></stop>
          </linearGradient>
        </defs>
        ${ni(o,c,a,t.time_format)}
        <path class="weather-conditions-rain-area" d=${h} fill=${`url(#${p})`}></path>
        <path class="weather-conditions-line-shadow" d=${d}></path>
        <path class="weather-conditions-rain-line" d=${d}></path>
        <line class="weather-conditions-selected-line" x1=${s.x} x2=${s.x} y1=${o.top} y2=${r}></line>
        <circle class="weather-conditions-dot" cx=${s.x} cy=${s.y} r="4.2"></circle>
        <circle class="weather-conditions-dot-ring" cx=${s.x} cy=${s.y} r="7.2"></circle>
        <text class="weather-conditions-axis" x=${o.width-5} y=${o.top+4}>100%</text>
        <text class="weather-conditions-axis" x=${o.width-5} y=${o.top+(r-o.top)/2}>50%</text>
        <text class="weather-conditions-axis" x=${o.width-5} y=${r}>0%</text>
      </svg>
    </section>
  `}(e,t,i,`${o}-precipitation`):W;return a===W&&r===W?W:L`
    <div class="weather-conditions-panel">
      ${a}
      ${r}
    </div>
  `}function ri(e,t){var i;const n=Et(St(e,t.entity)).toLowerCase(),o=t.name||"Weather",a=Nt(e,t.temp_sensor),r=Nt(e,t.temp_min_24h_sensor),s=Nt(e,t.temp_max_24h_sensor),l=function(e,t){const i=Tt(e,t);return void 0===i?"—%":`${i.toFixed(0)}%`}(e,t.humidity_sensor),c=Nt(e,t.feels_like_sensor),d=Nt(e,t.dewpoint_sensor),h=Lt(e,t),p=!1===t.show_forecast?[]:Ot(t.forecast),u=!1===t.show_forecast?[]:Ot(t.daily_forecast),m=Number(t.forecast_slots),v=Number.isFinite(m)&&m>0?Math.min(Math.floor(m),72):8,_=function(e){const t=Array.isArray(e)?e:"string"==typeof e?e.split(","):xt,i=[];return t.forEach((e=>{const t=At[String(e||"").trim().toLowerCase().replace(/[-\s]/g,"_")];t&&!i.includes(t)&&i.push(t)})),i.length?i:xt}(t.forecast_fields),g=Math.min(v,24),f=p.slice(0,g),b=Xt(p,t.time_format),w=String((null===(i=p[0])||void 0===i?void 0:i.condition)||n||"").toLowerCase(),y=t.icon||Ct[w]||Ct[n]||"mdi:weather-partly-cloudy",$=`weather-icon weather-condition-${Ht(w||n)}${!1===t.animated_icons?"":" animated"}`,x=b||Pt(w||n),A=L`<span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>`,C=t.forecast_graph_key||`weather-${t.entity||o}`,k=ai(e,t,f,_,C),S=Zt(e,t,u,p),E=Array.isArray(t.chips)?t.chips:[],T=!!t.double_tap_action,F=Number(t.height),z=Number.isFinite(F)&&F>0?`--weather-tile-h:${F}px;`:"";return L`
    <div class="tile-wrap weather-tile-wrap" style=${z}>
      <ha-control-button
        class="weather-tile"
        @hass-action=${i=>{"function"==typeof(null==e?void 0:e._onWeatherAction)&&e._onWeatherAction(i,t)}}
        .actionHandler=${pt({hasHold:!0,hasDoubleClick:T})}
        role="button" tabindex="0"
      >
        <div class="weather-content">
          <div class="weather-top">
            <div
              class="weather-heading weather-clickable"
              role="button"
              tabindex="0"
              aria-label=${`Open ${o} weather details`}
              @pointerdown=${Jt}
              @pointerup=${Jt}
              @click=${i=>Qt(e,i,t.entity)}
              @keyup=${i=>ei(e,i,t.entity)}
            >
              <div class="weather-headline-row">
                <div class="weather-name">${x}</div>
                ${p.length?A:W}
              </div>
              <div class="weather-secondary">
                <span
                  class="weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open feels like temperature details"
                  @pointerdown=${Jt}
                  @pointerup=${Jt}
                  @click=${i=>Qt(e,i,t.feels_like_sensor)}
                  @keyup=${i=>ei(e,i,t.feels_like_sensor)}
                >Feels ${c}</span>
                <span
                  class="weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open dew point details"
                  @pointerdown=${Jt}
                  @pointerup=${Jt}
                  @click=${i=>Qt(e,i,t.dewpoint_sensor)}
                  @keyup=${i=>ei(e,i,t.dewpoint_sensor)}
                >Dew ${d}</span>
                ${t.temp_min_24h_sensor?L`
                  <span
                    class="weather-clickable"
                    role="button"
                    tabindex="0"
                    aria-label="Open 24 hour minimum temperature details"
                    @pointerdown=${Jt}
                    @pointerup=${Jt}
                    @click=${i=>Qt(e,i,t.temp_min_24h_sensor)}
                    @keyup=${i=>ei(e,i,t.temp_min_24h_sensor)}
                  >24h Min ${r}</span>
                `:W}
                ${t.temp_max_24h_sensor?L`
                  <span
                    class="weather-clickable"
                    role="button"
                    tabindex="0"
                    aria-label="Open 24 hour maximum temperature details"
                    @pointerdown=${Jt}
                    @pointerup=${Jt}
                    @click=${i=>Qt(e,i,t.temp_max_24h_sensor)}
                    @keyup=${i=>ei(e,i,t.temp_max_24h_sensor)}
                  >24h Max ${s}</span>
                `:W}
              </div>
            </div>
            <div class="weather-primary">
              <span
                class="weather-temp weather-clickable"
                role="button"
                tabindex="0"
                aria-label="Open outdoor temperature details"
                @pointerdown=${Jt}
                @pointerup=${Jt}
                @click=${i=>Qt(e,i,t.temp_sensor)}
                @keyup=${i=>ei(e,i,t.temp_sensor)}
              >${a}</span>
              <span
                class="weather-humidity weather-clickable"
                role="button"
                tabindex="0"
                aria-label="Open outdoor humidity details"
                @pointerdown=${Jt}
                @pointerup=${Jt}
                @click=${i=>Qt(e,i,t.humidity_sensor)}
                @keyup=${i=>ei(e,i,t.humidity_sensor)}
              >${l}</span>
            </div>
            <div class="weather-icon-wrap weather-clickable"
              role="button"
              tabindex="0"
              aria-label=${`Open ${o} weather details`}
              @pointerdown=${Jt}
              @pointerup=${Jt}
              @click=${i=>Qt(e,i,t.entity)}
              @keyup=${i=>ei(e,i,t.entity)}
            >
              <ha-icon class=${$} .icon=${y}></ha-icon>
            </div>
          </div>

          <div class="weather-grid">
            ${h.map((t=>L`
              <div
                class=${"weather-metric weather-clickable"+(t.active?" active":"")}
                title=${t.entity||t.label}
                role="button"
                tabindex="0"
                aria-label=${`Open ${t.label} details`}
                @pointerdown=${Jt}
                @pointerup=${Jt}
                @click=${i=>Qt(e,i,t.entity)}
                @keyup=${i=>ei(e,i,t.entity)}
              >
                <ha-icon .icon=${t.icon}></ha-icon>
                <span class="weather-metric-label">${t.label}</span>
                <span class="weather-metric-value">${t.value}</span>
              </div>
            `))}
          </div>

          ${k}
          ${S}
        </div>

        ${E.length?L`<div class="weather-chips-bottom-right">
              ${E.map((t=>L`
                <div
                  class="weather-chip-hit weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label=${`Open ${(null==t?void 0:t.entity)||"chip"} details`}
                  @pointerdown=${Jt}
                  @pointerup=${Jt}
                  @click=${i=>Qt(e,i,(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity))}
                  @keyup=${i=>ei(e,i,(null==t?void 0:t.entity)||(null==t?void 0:t.tap_entity))}
                >
                  ${vt(e,t)}
                </div>
              `))}
            </div>`:W}
      </ha-control-button>
    </div>
  `}const si=(...e)=>e.filter(Boolean).join(" ");function li(e,t){return t&&t.length?L`${t.map(((t,i)=>function(e,t,i){const n=t,o=Array.isArray(t)?t:Array.isArray(null==n?void 0:n.row)?n.row:[];let a=Array.isArray(null==n?void 0:n.cards)?n.cards:Array.isArray(null==n?void 0:n.extra_cards)?n.extra_cards:[];if(!Array.isArray(a)||!a.length){const e=(null==n?void 0:n.card)||(null==n?void 0:n.extra_card);e&&"object"==typeof e&&(a=[e])}const r=Math.max(1,o.length||1),s=Array.isArray(a)&&a.length&&"function"==typeof(null==e?void 0:e._renderEmbeddedRowCard)?L`<div class="switch-row-cards">
        ${a.map(((t,n)=>e._renderEmbeddedRowCard(t,`switch-row-${i}-card-${n}`)))}
      </div>`:W;return L`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${r}`}>${o.map((t=>function(e,t){var i,n,o,a,r,s,l;const c="string"==typeof(null==t?void 0:t.entity)?t.entity:"",d=(null==t?void 0:t.icon)||"",h=(null==t?void 0:t.name)||"",p=(null===(a=null===(o=null===(n=null===(i=null==e?void 0:e.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[c])||void 0===o?void 0:o.attributes)||void 0===a?void 0:a.friendly_name)||"",u=h||p||c,m=String((null==t?void 0:t.type)||"switch").toLowerCase(),v="smart_plug"===m,_="lock"===m||c.startsWith("lock."),g="function"==typeof(null==e?void 0:e._isSwitchActive)?e._isSwitchActive(c,m):_?"unlocked"===((null===(l=null===(s=null===(r=null==e?void 0:e.hass)||void 0===r?void 0:r.states)||void 0===s?void 0:s[c])||void 0===l?void 0:l.state)||"").toLowerCase():"function"==typeof(null==e?void 0:e._isOn)&&e._isOn(c),f=(null==t?void 0:t.icon_size)||(null==t?void 0:t["icon-size"]),b=(null==t?void 0:t.font_weight)||(null==t?void 0:t["font-weight"]),w=(null==t?void 0:t.font_size)||(null==t?void 0:t["font-size"]),y=(null==t?void 0:t.icon_active)||(null==t?void 0:t.icon_on)||(null==t?void 0:t["icon-active"])||(null==t?void 0:t["icon-on"]),$=(null==t?void 0:t.icon_inactive)||(null==t?void 0:t.icon_off)||(null==t?void 0:t["icon-inactive"])||(null==t?void 0:t["icon-off"]),x=g?y||d||$:$||d,A=e=>{if(null==e||""===e)return"";const t=String(e).trim();return t?/^-?\d+(\.\d+)?$/.test(t)?`${t}px`:t:""},C=A(f),k=A(w),S=C?`--switch-icon-size:${C};width:${C};height:${C};--mdc-icon-size:${C};`:"",E=`${b?`font-weight:${b};`:""}${k?`font-size:${k};`:""}`,T=`${C?`--switch-icon-size:${C};`:""}${b?`font-weight:${b};`:""}${k?`--chip-text-font-size:${k};font-size:${k};`:""}`,F="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),z="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),N=v?"smart":_?"lock":"",M=g?"on":"off",P=si("switch-chip",N,M),H=si("switch-icon",N,M),I=si("name","switch-name",N,M),R="function"==typeof(null==e?void 0:e._resolveSwitchTemplates)?e._resolveSwitchTemplates(t):[],O=Array.isArray(R)?R.map((e=>e&&"object"==typeof e?e.value:e)).slice(0,2):[],j=((e,t)=>{if(!Array.isArray(e)||!e.length)return W;const i=e.map((e=>{const t=null==e?"":String(e);return{text:t,trimmed:t.trim()}})).filter((e=>e.trimmed.length>0)).slice(0,2);return i.length?L`
    <div class=${t}>
      ${i.map((e=>L`<span>${e.text}</span>`))}
    </div>
  `:W})(O,si("switch-info",N,M)),V="function"==typeof(null==e?void 0:e._isSwitchPending)&&e._isSwitchPending(c),D=V?L`<span class=${si("switch-pending-spinner",N,M)} aria-hidden="true"></span>`:W,U=si("switch-tile",N,M,V&&"pending"),G=i=>{"function"==typeof(null==e?void 0:e._onSwitchAction)&&e._onSwitchAction(i,t)},q=(null==t?void 0:t.glow_mode)||"static",B=_?ft:v?gt:_t,{style:Y,overlay:K}=wt(B,q,g&&"none"!==q);if(z){const e=si("switch-tile-btn",N,g?"on":"off",V&&"pending");return L`
      <div class="tile-wrap">
        <div class="glow-under" style=${Y}>${K}</div>
        ${j}
        ${D}
        <ha-control-button
          class=${e}
          @hass-action=${G}
          .actionHandler=${pt({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
          role="button" tabindex="0" aria-busy=${V?"true":"false"}
        >
          <div class="tile-inner">
            ${F?L`<ha-chip class=${P} style=${T||W}>
                  ${x?L`<ha-icon class=${H} .icon=${x} style=${S||W}></ha-icon>`:W}
                  ${u}
                </ha-chip>`:L`
                  ${x?L`<ha-icon class=${H} .icon=${x} style=${S||W}></ha-icon>`:W}
                  ${u?L`<div class=${I} style=${E}>${u}</div>`:W}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return L`
    <div class="tile-wrap ${U}"
         @hass-action=${G}
         .actionHandler=${pt({hasHold:!0,hasDoubleClick:!!(null==t?void 0:t.double_tap_action)})}
         role="button" tabindex="0" aria-busy=${V?"true":"false"}>
      <div class="glow-under" style=${Y}>${K}</div>
      ${j}
      ${D}
      <div class="tile-inner">
        ${F?L`<ha-chip class=${P} style=${T||W}>
              ${x?L`<ha-icon class=${H} .icon=${x} style=${S||W}></ha-icon>`:W}
              ${u}
            </ha-chip>`:L`
              ${x?L`<ha-icon class=${H} .icon=${x} style=${S||W}></ha-icon>`:W}
              ${u?L`<div class=${I} style=${E}>${u}</div>`:W}
            `}
      </div>
    </div>
  `}(e,t)))}</div>
      ${s}
    </div>
  `}(e,t,i)))}`:W}const ci=r`
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
    --switch-lock-unlocked-color: var(--switch-unlocked-red, #e53935);
    --switch-chip-bg: var(--chip-background-color, rgba(0,0,0,0.06));
    --switch-icon-size: 28px;
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
  .weather-tile,
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
  .header-row.weather-row { grid-template-columns: 1fr; }
  .header-row.weather-row > * { height: var(--weather-tile-h, calc(var(--tile-h) * 1.85)); }

  .clickable { cursor: pointer; }
`,di=r`
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
    --mdc-icon-size: var(--switch-icon-size, 28px);
    font-size: var(--chip-text-font-size);
    color: var(--secondary-text-color); 
    font-weight: 600; 
    line-height: 1;
  }
  .tile-inner ha-chip.switch-chip.on { 
    --ha-chip-text-color: var(--switch-on-color); 
    color: var(--switch-on-color); 
  }
  .tile-inner ha-chip.switch-chip.smart.on { 
    --ha-chip-text-color: var(--switch-smart-on-color); 
    color: var(--switch-smart-on-color); 
  }
  .tile-inner ha-chip.switch-chip.lock.on {
    --ha-chip-text-color: var(--switch-lock-unlocked-color);
    color: var(--switch-lock-unlocked-color);
  }
  .tile-inner ha-chip.switch-chip ha-icon {
    width: var(--switch-icon-size, 28px);
    height: var(--switch-icon-size, 28px);
    min-width: var(--switch-icon-size, 28px);
    min-height: var(--switch-icon-size, 28px);
    --mdc-icon-size: var(--switch-icon-size, 28px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
  }
`,hi=r`
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
`,pi=r`
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
`,ui=r`
  .weather-tile-wrap {
    --weather-tile-h: calc(var(--tile-h) * 8.75);
  }

  .weather-tile {
    position: relative;
    width: 100%;
    height: var(--weather-tile-h);
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-default);
    background: var(--ha-card-background, var(--card-background-color));
    overflow: hidden;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  }

  .weather-tile::part(button) {
    width: 100%;
    height: 100%;
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: var(--tile-border-radius);
  }

  .weather-content {
    position: absolute;
    inset: 10px 12px 9px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: var(--primary-text-color);
    pointer-events: auto;
  }

  .weather-clickable {
    pointer-events: auto;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.12s ease, box-shadow 0.12s ease, color 0.12s ease;
  }

  .weather-clickable:hover {
    background: rgba(3, 169, 244, 0.12);
  }

  .weather-clickable:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color, #03a9f4);
  }

  .weather-top {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto auto;
    gap: 10px;
    align-items: start;
    min-width: 0;
  }

  .weather-icon-wrap {
    display: grid;
    place-items: center;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: rgba(3, 169, 244, 0.14);
    color: var(--state-weather-sunny-color, #f6a000);
    margin-top: -2px;
  }

  .weather-icon {
    width: 42px;
    height: 42px;
    --mdc-icon-size: 42px;
    color: inherit;
    transform-origin: 50% 50%;
  }

  .weather-icon.animated.weather-condition-sunny,
  .weather-forecast-icon.animated.weather-condition-sunny {
    animation: weatherSunSpin 12s linear infinite;
  }

  .weather-icon.animated.weather-condition-clear-night,
  .weather-forecast-icon.animated.weather-condition-clear-night {
    animation: weatherNightPulse 3.6s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-cloudy,
  .weather-icon.animated.weather-condition-partlycloudy,
  .weather-forecast-icon.animated.weather-condition-cloudy,
  .weather-forecast-icon.animated.weather-condition-partlycloudy {
    animation: weatherCloudDrift 4.8s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-rainy,
  .weather-icon.animated.weather-condition-pouring,
  .weather-icon.animated.weather-condition-lightning-rainy,
  .weather-forecast-icon.animated.weather-condition-rainy,
  .weather-forecast-icon.animated.weather-condition-pouring,
  .weather-forecast-icon.animated.weather-condition-lightning-rainy {
    animation: weatherRainPulse 1.9s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-lightning,
  .weather-forecast-icon.animated.weather-condition-lightning {
    animation: weatherStormFlash 2.4s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-snowy,
  .weather-icon.animated.weather-condition-snowy-rainy,
  .weather-forecast-icon.animated.weather-condition-snowy,
  .weather-forecast-icon.animated.weather-condition-snowy-rainy {
    animation: weatherSnowFloat 3.4s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-windy,
  .weather-icon.animated.weather-condition-windy-variant,
  .weather-forecast-icon.animated.weather-condition-windy,
  .weather-forecast-icon.animated.weather-condition-windy-variant {
    animation: weatherWindFloat 1.8s ease-in-out infinite;
  }

  .weather-icon.animated.weather-condition-fog,
  .weather-forecast-icon.animated.weather-condition-fog {
    animation: weatherFogFade 4s ease-in-out infinite;
  }

  .weather-heading {
    min-width: 0;
    display: grid;
    gap: 4px;
    padding: 3px 4px;
    margin: -3px -4px;
  }

  .weather-headline-row {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .weather-name {
    flex: 0 1 auto;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.15;
    color: var(--primary-text-color);
  }

  .weather-source-badge {
    flex: 0 0 auto;
    display: inline-block;
    width: 7px;
    height: 7px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.38);
    border-radius: 50%;
    background: var(--primary-color, #03a9f4);
    box-shadow: 0 0 0 3px rgba(3, 169, 244, 0.14);
  }

  .weather-condition {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
    font-size: 11px;
    line-height: 1.2;
    color: var(--secondary-text-color);
  }

  .weather-primary {
    display: inline-flex;
    align-items: baseline;
    gap: 6px;
    white-space: nowrap;
    color: var(--primary-text-color);
    padding-top: 2px;
  }

  .weather-temp {
    font-size: 25px;
    line-height: 1;
    font-weight: 700;
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-humidity {
    font-size: 13px;
    line-height: 1;
    font-weight: 700;
    color: var(--secondary-text-color);
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-secondary {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3px 7px;
    min-width: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: var(--secondary-text-color);
    font-size: 10px;
    line-height: 1.08;
    font-weight: 600;
    white-space: normal;
    padding: 0;
  }

  .weather-secondary span {
    flex: 0 1 auto;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 3px;
    margin: 0;
  }

  .weather-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px;
    min-width: 0;
  }

  .weather-conditions-panel {
    width: 100%;
    min-width: 0;
    display: grid;
    gap: 8px;
    overflow: hidden;
    pointer-events: auto;
  }

  .weather-conditions-card {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    display: grid;
    align-content: start;
    gap: 5px;
    padding: 7px 8px 6px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: linear-gradient(180deg, rgba(3, 169, 244, 0.13), rgba(3, 169, 244, 0.055));
    color: var(--secondary-text-color);
    overflow: hidden;
    touch-action: pan-y;
  }

  .weather-conditions-temp {
    height: 158px;
  }

  .weather-conditions-rain {
    height: 118px;
  }

  .weather-conditions-head {
    min-width: 0;
    min-height: 18px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 8px;
  }

  .weather-conditions-title,
  .weather-conditions-selected,
  .weather-conditions-subtitle {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .weather-conditions-title {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 850;
  }

  .weather-conditions-selected {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: baseline;
    justify-content: end;
    gap: 5px;
    max-width: 112px;
    color: var(--secondary-text-color);
    font-size: 9px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-conditions-selected strong {
    color: var(--primary-text-color);
    font-size: 14px;
    line-height: 1;
    font-weight: 850;
  }

  .weather-conditions-subtitle {
    margin-top: -2px;
    font-size: 10px;
    line-height: 1.1;
    font-weight: 700;
    color: var(--secondary-text-color);
  }

  .weather-conditions-icons {
    width: 100%;
    min-width: 0;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    padding: 0 6px;
    box-sizing: border-box;
    color: var(--state-weather-sunny-color, #f6a000);
    overflow: hidden;
  }

  .weather-conditions-icon {
    flex: 0 0 auto;
    width: 15px;
    height: 15px;
    --mdc-icon-size: 15px;
    color: inherit;
    transform-origin: 50% 50%;
  }

  .weather-conditions-chart {
    width: 100%;
    min-width: 0;
    display: block;
    cursor: crosshair;
    touch-action: none;
    overflow: hidden;
  }

  .weather-conditions-temp .weather-conditions-chart {
    height: 104px;
  }

  .weather-conditions-rain .weather-conditions-chart {
    height: 76px;
  }

  .weather-conditions-grid-line,
  .weather-conditions-time-line {
    stroke: rgba(255, 255, 255, 0.13);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-time-line {
    stroke-dasharray: 3 3;
  }

  .weather-conditions-area,
  .weather-conditions-rain-area {
    opacity: 0.96;
  }

  .weather-conditions-line-shadow {
    fill: none;
    stroke: rgba(0, 0, 0, 0.24);
    stroke-width: 7;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-temp-line,
  .weather-conditions-rain-line {
    fill: none;
    stroke-width: 4.3;
    stroke-linecap: round;
    stroke-linejoin: round;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-rain-line {
    stroke: #38c7f3;
  }

  .weather-conditions-selected-line {
    stroke: rgba(255, 255, 255, 0.36);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-dot {
    fill: var(--primary-text-color);
    stroke: rgba(0, 0, 0, 0.48);
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-dot-ring {
    fill: transparent;
    stroke: rgba(255, 255, 255, 0.5);
    stroke-width: 1;
    vector-effect: non-scaling-stroke;
  }

  .weather-conditions-axis,
  .weather-conditions-time-label,
  .weather-conditions-extreme {
    fill: var(--secondary-text-color);
    font-size: 9px;
    font-weight: 750;
    text-anchor: middle;
    dominant-baseline: middle;
    pointer-events: none;
  }

  .weather-conditions-axis {
    text-anchor: end;
  }

  .weather-conditions-extreme {
    fill: var(--primary-text-color);
    font-size: 11px;
    font-weight: 850;
  }

  .weather-daily-forecast {
    min-width: 0;
    display: grid;
    gap: 1px;
    padding: 6px 8px 7px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: rgba(3, 169, 244, 0.08);
    color: var(--secondary-text-color);
    pointer-events: auto;
  }

  .weather-daily-forecast-heading {
    display: flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    height: 17px;
    color: var(--secondary-text-color);
    font-size: 10px;
    line-height: 1;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .weather-daily-forecast-heading ha-icon {
    width: 13px;
    height: 13px;
    --mdc-icon-size: 13px;
  }

  .weather-daily-row {
    min-width: 0;
    min-height: 30px;
    display: grid;
    grid-template-columns: minmax(54px, 0.7fr) 38px 40px minmax(92px, 1fr) 40px;
    align-items: center;
    gap: 6px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .weather-daily-day,
  .weather-daily-low span,
  .weather-daily-high span {
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1;
    font-weight: 800;
  }

  .weather-daily-condition,
  .weather-daily-low,
  .weather-daily-high {
    min-width: 0;
    display: grid;
    justify-items: center;
    gap: 1px;
  }

  .weather-daily-condition span,
  .weather-daily-low small,
  .weather-daily-high small {
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--secondary-text-color);
    font-size: 8px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-daily-icon {
    width: 16px;
    height: 16px;
    --mdc-icon-size: 16px;
    color: var(--state-weather-sunny-color, #f6a000);
  }

  .weather-daily-range {
    position: relative;
    height: 18px;
    min-width: 0;
  }

  .weather-daily-track,
  .weather-daily-segment {
    position: absolute;
    top: 7px;
    height: 4px;
    border-radius: 999px;
  }

  .weather-daily-track {
    inset-inline: 0;
    background: rgba(255, 255, 255, 0.12);
  }

  .weather-daily-segment {
    box-shadow: 0 0 8px rgba(255, 211, 74, 0.22);
  }

  .weather-daily-current-dot {
    position: absolute;
    top: 4px;
    width: 9px;
    height: 9px;
    border: 2px solid rgba(255, 255, 255, 0.82);
    border-radius: 50%;
    background: var(--primary-text-color);
    transform: translateX(-50%);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.26);
  }

  .weather-metric {
    min-width: 0;
    min-height: 29px;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 5px;
    row-gap: 1px;
    align-items: center;
    padding: 4px 6px;
    border-radius: calc(var(--tile-border-radius) - 4px);
    background: var(--chip-background-color);
    color: var(--secondary-text-color);
  }

  .weather-metric.weather-clickable:hover {
    background: rgba(3, 169, 244, 0.16);
  }

  .weather-metric.active {
    background: rgba(33, 150, 243, 0.18);
    color: var(--primary-text-color);
  }

  .weather-metric ha-icon {
    grid-row: 1 / span 2;
    width: 16px;
    height: 16px;
    --mdc-icon-size: 16px;
    color: currentColor;
  }

  .weather-metric-label,
  .weather-metric-value {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.05;
  }

  .weather-metric-label {
    font-size: 9px;
    font-weight: 600;
    color: var(--secondary-text-color);
  }

  .weather-metric-value {
    font-size: 11px;
    font-weight: 700;
    color: var(--primary-text-color);
  }

  .weather-chips-bottom-right {
    position: absolute;
    right: var(--tile-padding);
    bottom: var(--tile-padding);
    z-index: var(--chip-z-index);
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-start;
    gap: var(--chip-gap);
    flex-wrap: wrap;
    max-width: calc(100% - 16px);
  }

  .weather-chip-hit {
    display: inline-flex;
    line-height: 0;
    padding: 2px;
    margin: -2px;
  }

  @keyframes weatherSunSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes weatherNightPulse {
    0%, 100% { transform: scale(1); opacity: 0.88; }
    50% { transform: scale(1.08); opacity: 1; }
  }

  @keyframes weatherCloudDrift {
    0%, 100% { transform: translateX(-1px); }
    50% { transform: translateX(2px); }
  }

  @keyframes weatherRainPulse {
    0%, 100% { transform: translateY(-1px); opacity: 0.88; }
    50% { transform: translateY(2px); opacity: 1; }
  }

  @keyframes weatherStormFlash {
    0%, 72%, 100% { opacity: 0.88; transform: scale(1); }
    76%, 84% { opacity: 1; transform: scale(1.12); }
  }

  @keyframes weatherSnowFloat {
    0%, 100% { transform: translateY(-1px) rotate(-3deg); }
    50% { transform: translateY(2px) rotate(3deg); }
  }

  @keyframes weatherWindFloat {
    0%, 100% { transform: translateX(-2px); }
    50% { transform: translateX(3px); }
  }

  @keyframes weatherFogFade {
    0%, 100% { opacity: 0.65; transform: translateX(-1px); }
    50% { opacity: 1; transform: translateX(2px); }
  }
`,mi=r`
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
`,vi=r`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,_i=r`
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
  .switch-tile.pending,
  .switch-tile-btn.pending {
    filter: saturate(0.94);
  }
  .tile-inner { display:grid; gap:4px; place-items:center; justify-items:center; text-align:center; }
  .switch-tile .name { font-weight: 600; font-size: 12px; }
  .switch-icon {
    width: var(--switch-icon-size, 28px);
    height: var(--switch-icon-size, 28px);
    min-width: var(--switch-icon-size, 28px);
    min-height: var(--switch-icon-size, 28px);
    --mdc-icon-size: var(--switch-icon-size, 28px);
    color: var(--secondary-text-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    transition: color 0.12s ease;
  }
  .switch-icon.on { color: var(--switch-on-color); }
  .switch-icon.smart.on { color: var(--switch-smart-on-color); }
  .switch-icon.lock.on { color: var(--switch-lock-unlocked-color); }
  .switch-name { color: var(--secondary-text-color); transition: color 0.12s ease; }
  .switch-name.on { color: var(--switch-on-color); }
  .switch-name.smart.on { color: var(--switch-smart-on-color); }
  .switch-name.lock.on { color: var(--switch-lock-unlocked-color); }
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
  .switch-info.lock.on { color: var(--switch-lock-unlocked-color); }
  .switch-pending-spinner {
    position: absolute;
    right: 8px;
    bottom: 8px;
    width: 14px;
    height: 14px;
    border: 2px solid rgba(128, 128, 128, 0.32);
    border-top-color: currentColor;
    border-radius: 50%;
    box-sizing: border-box;
    color: var(--secondary-text-color);
    opacity: 0.82;
    pointer-events: none;
    z-index: 5;
    animation: switchPendingSpin 0.8s linear infinite;
  }
  .switch-pending-spinner.on { color: var(--switch-on-color); }
  .switch-pending-spinner.smart.on { color: var(--switch-smart-on-color); }
  .switch-pending-spinner.lock.on { color: var(--switch-lock-unlocked-color); }
  @keyframes switchPendingSpin {
    to { transform: rotate(360deg); }
  }
`;var gi;let fi=gi=class extends oe{constructor(){super(...arguments),this._visiblePendingSwitches=new Set,this._weatherForecastGraphSelections=new Map,this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map,this._weatherForecastValues=new Map,this._pendingSwitches=new Map,this._switchPendingDelayMs=300,this._switchPendingTimeoutMs=1e4}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(e){if(!e)throw new Error("Configuration is required");this._validateConfig(e,{allowIncomplete:!0});const t=Ge(e||{});Array.isArray(t.headers)||(t.headers=[]),Array.isArray(t.switch_rows)||(t.switch_rows=[]),Array.isArray(t.cards)||(t.cards=[]),this._clearRowCardCache(),this._config=t,this._syncTemplateEntries(t.switch_rows),this._syncWeatherForecastEntries(t.headers)}_isValidEntityId(e){return"string"==typeof e&&e.includes(".")&&!e.includes(" ")}_validateConfig(e,t={}){const i=!!t.allowIncomplete,n=[];e.headers&&Array.isArray(e.headers)&&e.headers.forEach(((e,t)=>{if(e){if(e.ac&&(e.ac.entity?this._isValidEntityId(e.ac.entity)||n.push(`Header ${t+1}: AC entity '${e.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):i||n.push(`Header ${t+1}: AC tile requires an 'entity' field`)),e.thermostat&&(e.thermostat.entity?this._isValidEntityId(e.thermostat.entity)||n.push(`Header ${t+1}: Thermostat entity '${e.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):i||n.push(`Header ${t+1}: Thermostat tile requires an 'entity' field`)),e.main){const o=e.main;!!(o.main_name||o.main_icon||o.tap_entity||o.light_group_entity||o.temp_sensor||o.humidity_sensor||Array.isArray(o.chips)&&o.chips.length>0)||i||n.push(`Header ${t+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((e=>{const i=o[e];i&&!this._isValidEntityId(i)&&n.push(`Header ${t+1}: Main tile ${e} '${i}' must be a valid entity ID`)}))}if(e.weather){const o=e.weather;!!(o.name||o.icon||o.entity||void 0!==o.animated_icons||void 0!==o.show_forecast||o.forecast_type||o.forecast_slots||o.forecast_fields||o.time_format||o.height||o.temp_sensor||o.temp_min_24h_sensor||o.temp_max_24h_sensor||o.humidity_sensor||o.feels_like_sensor||o.dewpoint_sensor||o.wind_speed_sensor||o.wind_gust_sensor||o.wind_direction_sensor||o.rain_state_sensor||o.rain_today_sensor||o.rain_rate_sensor||o.uv_sensor||o.solar_lux_sensor||o.pressure_sensor||Array.isArray(o.chips)&&o.chips.length>0)||i||n.push(`Header ${t+1}: Weather tile must have at least one weather entity, sensor, name, icon, or chip`);if(["entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor"].forEach((e=>{const i=o[e];i&&!this._isValidEntityId(i)&&n.push(`Header ${t+1}: Weather tile ${e} '${i}' must be a valid entity ID`)})),void 0!==o.height&&null!==o.height){const e=Number(o.height);(!Number.isFinite(e)||e<0)&&n.push(`Header ${t+1}: Weather tile height must be a positive number, got: ${o.height}`)}if(void 0!==o.forecast_slots&&null!==o.forecast_slots){const e=Number(o.forecast_slots);(!Number.isFinite(e)||e<0)&&n.push(`Header ${t+1}: Weather tile forecast_slots must be a positive number, got: ${o.forecast_slots}`)}if(o.forecast_type&&!["hourly","daily","twice_daily"].includes(String(o.forecast_type))&&n.push(`Header ${t+1}: Weather tile forecast_type must be one of: hourly, daily, twice_daily`),o.time_format&&!["12h","24h"].includes(String(o.time_format).toLowerCase())&&n.push(`Header ${t+1}: Weather tile time_format must be one of: 12h, 24h`),void 0!==o.forecast_fields&&null!==o.forecast_fields){const e=Array.isArray(o.forecast_fields)?o.forecast_fields:String(o.forecast_fields).split(","),i=new Set(["temp","temperature","rain_chance","precipitation_probability","precip_probability","probability","pop","rain","precipitation","hum","humidity","wind","wind_speed","gust","wind_gust","wind_gust_speed","uv","uv_index","cloud","clouds","cloud_coverage"]);e.forEach((e=>{const o=String(e||"").trim().toLowerCase().replace(/[-\s]/g,"_");o&&!i.has(o)&&n.push(`Header ${t+1}: Weather tile forecast field '${e}' is not supported`)}))}}!e.ac&&!e.thermostat||e.main||i||n.push(`Header ${t+1}: AC and Thermostat tiles require a 'main' configuration block`)}else n.push(`Header ${t+1}: Header configuration cannot be empty`)})),e.switch_rows&&Array.isArray(e.switch_rows)&&e.switch_rows.forEach(((e,t)=>{if(!e)return void n.push(`Switch row ${t+1}: Switch row configuration cannot be empty`);const o=Array.isArray(e)?e:Array.isArray(e.row)?e.row:[];Array.isArray(o)&&0!==o.length||i?o.forEach(((e,o)=>{e&&e.entity?this._isValidEntityId(e.entity)||n.push(`Switch row ${t+1}, item ${o+1}: Switch entity '${e.entity}' must be a valid entity ID`):i||n.push(`Switch row ${t+1}, item ${o+1}: Switch item requires an 'entity' field`),(null==e?void 0:e.hold_entity)&&!this._isValidEntityId(e.hold_entity)&&n.push(`Switch row ${t+1}, item ${o+1}: hold_entity '${e.hold_entity}' must be a valid entity ID`)})):n.push(`Switch row ${t+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([t,i])=>{const o=e[t];if(null!=o){const e=Number(o);(!Number.isFinite(e)||e<0)&&n.push(`${i} must be a positive number, got: ${o}`)}})),void 0!==e.card_shadow_intensity&&null!==e.card_shadow_intensity){const t=Number(e.card_shadow_intensity);Number.isFinite(t)&&(t<0||t>1)&&n.push(`Card shadow intensity must be between 0 and 1, got: ${t}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((t=>{const i=e[t];if(i&&"string"==typeof i){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(i)||n.push(`${t.replace(/_/g," ")} '${i}' is not a valid color format`)}})),n.length>0)throw new Error(`Invalid space-hub-card configuration:\n${n.map((e=>`• ${e}`)).join("\n")}`)}getCardSize(){return 6}render(){var e,t,i,n,o,a,r,s,l;if(!this._config)return W;const c=gi.getStubConfig(),d=this._config||{},h={tile_height:null!==(e=d.tile_height)&&void 0!==e?e:c.tile_height,chip_icon_size:null!==(t=d.chip_icon_size)&&void 0!==t?t:c.chip_icon_size,main_icon_size:null!==(i=d.main_icon_size)&&void 0!==i?i:c.main_icon_size,chip_font_size:null!==(n=d.chip_font_size)&&void 0!==n?n:c.chip_font_size,card_shadow_color:null!==(o=d.card_shadow_color)&&void 0!==o?o:c.card_shadow_color,card_shadow_intensity:null!==(a=d.card_shadow_intensity)&&void 0!==a?a:c.card_shadow_intensity,unavailable_pulse_color:null!==(r=d.unavailable_pulse_color)&&void 0!==r?r:c.unavailable_pulse_color,headers:Array.isArray(d.headers)&&d.headers.length?d.headers:[],switch_rows:Array.isArray(d.switch_rows)?d.switch_rows:[],cards:Array.isArray(d.cards)?d.cards:[],tap_action:d.tap_action,hold_action:d.hold_action,double_tap_action:d.double_tap_action},p=Array.isArray(h.headers)&&h.headers.length?h.headers:[],u=Number(h.tile_height)||Number(c.tile_height)||80,m=Number(h.chip_icon_size)||Number(c.chip_icon_size)||14,v=Number(h.chip_font_size)||Number(c.chip_font_size)||12,_=Math.max(v+10,20),g=Math.round(.625*u),f=p[0]||{},b=Number(null!==(s=null==f?void 0:f.main_icon_size)&&void 0!==s?s:null==f?void 0:f.maicon_size),w=Number.isFinite(b)&&b>0?b:Number(h.main_icon_size)||Number(c.main_icon_size)||48,y=this._rgbaFromColor(h.card_shadow_color||c.card_shadow_color,null!==(l=h.card_shadow_intensity)&&void 0!==l?l:c.card_shadow_intensity),$=h.unavailable_pulse_color||c.unavailable_pulse_color||"#ff3b30",x=this._hasAnyUnavailable(h,p),A=this._rgbaFromColor($,.18),C=this._rgbaFromColor($,.36);return L`
      <ha-card class=${x?"unavailable":""}
               style=${`--panel-shadow-color:${x?A:y}; --unavail-weak:${A}; --unavail-strong:${C}`}>
        <div class="metrics" style=${`--tile-h:${u}px; --chip-size:${_}px; --chip-icon-size:${m}px; --main-icon-size:${w}px; --chip-font-size:${v}px; --ac-thermostat-icon:${g}px;`}>
          <div class="root">
            ${p.map(((e,t)=>this._renderHeaderRow(e,t)))}
            ${li(this,h.switch_rows)}
            ${Array.isArray(h.cards)&&h.cards.length?L`
                  <div class="extra-cards">
                    ${h.cards.map(((e,t)=>this._renderEmbeddedRowCard(e,`standalone-card-${t}`)))}
                  </div>
                `:W}
          </div>
        </div>
      </ha-card>
    `}updated(e){super.updated(e),e.has("hass")&&(this._rowCardElements.forEach((e=>{e&&(e.hass=this.hass)})),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions(),this._syncPendingSwitches())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((e=>this._disposeTemplateEntry(e))),this._weatherForecastValues.forEach((e=>this._disposeWeatherForecastEntry(e))),this._clearAllPendingSwitches()}_renderHeaderRow(e,t){const i=e.main||{},n=e.weather||{},o={tap_entity:i.tap_entity,hold_entity:i.hold_entity||i.tap_entity,glow_mode:i.glow_mode,light_group_entity:i.light_group_entity,name:i.main_name||i.name,icon:i.main_icon||i.icon,temp_sensor:i.temp_sensor,humidity_sensor:i.humidity_sensor,chips:Array.isArray(i.chips)?i.chips:[],tap_action:i.tap_action,hold_action:i.hold_action,double_tap_action:i.double_tap_action},a={entity:n.entity,name:n.name||n.main_name,icon:n.icon||n.main_icon,height:n.height,animated_icons:n.animated_icons,show_forecast:n.show_forecast,forecast_type:n.forecast_type,forecast_slots:n.forecast_slots,forecast_fields:n.forecast_fields,time_format:n.time_format,forecast_graph_key:`weather-${t}`,temp_sensor:n.temp_sensor,temp_min_24h_sensor:n.temp_min_24h_sensor,temp_max_24h_sensor:n.temp_max_24h_sensor,humidity_sensor:n.humidity_sensor,feels_like_sensor:n.feels_like_sensor,dewpoint_sensor:n.dewpoint_sensor,wind_speed_sensor:n.wind_speed_sensor,wind_gust_sensor:n.wind_gust_sensor,wind_direction_sensor:n.wind_direction_sensor,rain_state_sensor:n.rain_state_sensor,rain_today_sensor:n.rain_today_sensor,rain_rate_sensor:n.rain_rate_sensor,uv_sensor:n.uv_sensor,solar_lux_sensor:n.solar_lux_sensor,pressure_sensor:n.pressure_sensor,chips:Array.isArray(n.chips)?n.chips:[],tap_action:n.tap_action,hold_action:n.hold_action,double_tap_action:n.double_tap_action,forecast:!1===n.show_forecast?[]:this._getWeatherForecast(n.entity,n.forecast_type),daily_forecast:!1===n.show_forecast?[]:this._getWeatherForecast(n.entity,"daily")},r=e.ac||{},s=e.thermostat||{},l=!!(null==r?void 0:r.entity),c=!!(null==s?void 0:s.entity),d=!(!i||!(i.main_name||i.name||i.light_group_entity||i.entity||i.main_icon||i.icon||i.temp_sensor||i.humidity_sensor||Array.isArray(i.chips)&&i.chips.length)),h=!(!n||!(n.name||n.main_name||n.icon||n.main_icon||void 0!==n.animated_icons||void 0!==n.show_forecast||n.forecast_type||n.forecast_slots||n.forecast_fields||n.time_format||n.height||n.entity||n.temp_sensor||n.temp_min_24h_sensor||n.temp_max_24h_sensor||n.humidity_sensor||n.feels_like_sensor||n.dewpoint_sensor||n.wind_speed_sensor||n.wind_gust_sensor||n.wind_direction_sensor||n.rain_state_sensor||n.rain_today_sensor||n.rain_rate_sensor||n.uv_sensor||n.solar_lux_sensor||n.pressure_sensor||Array.isArray(n.chips)&&n.chips.length)),p=d&&l,u=d&&c;d||!l&&!c||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const m=p||u?p&&u?"header-row":"header-row main-plus-one":"header-row only-main";return L`
      ${h?L`
        <div class="header-row weather-row">
          ${ri(this,a)}
        </div>
      `:W}
      ${d?L`<div class=${m}>
        ${d?yt(this,o):W}
        ${p?function(e,t){var i,n,o;const a=(null==t?void 0:t.entity)||"",r=null==t?void 0:t.glow_mode,s=((null===(o=null===(n=null===(i=null==e?void 0:e.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[a])||void 0===o?void 0:o.state)||"").toLowerCase(),l=!!s&&"off"!==s,c="function"==typeof(null==e?void 0:e._acChip)?e._acChip(s):{icon:"mdi:air-conditioner"},d=(null==c?void 0:c.icon)||"mdi:air-conditioner",h="ac-mode-"+((p=s)&&"off"!==p?p.includes("cool")?"cool":p.includes("heat")?"heat":p.includes("dry")?"dry":p.includes("fan")?"fan":p.includes("auto")?"auto":"default":"off");var p;const u=`chip chip-temperature-humidity ac-chip ${h}`,m=`ac-fan ${h}${l?" spinning":""}`,v=function(e){const t=(e||"").toLowerCase();return t&&"off"!==t?t.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:t.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:t.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:t.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:t.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(s),_=null!=r?r:"static",{style:g,overlay:f}=wt(v,_,l);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${g}>${f}</div>
      <ha-control-button
        class="square ac-tile ${l?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==e?void 0:e._onACAction)&&e._onACAction(i,t)}}
        .actionHandler=${pt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${u}>
          <ha-icon .icon=${d}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${m} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,r):W}
        ${u?function(e,t){var i,n,o,a,r,s,l,c;const d=(null==t?void 0:t.entity)||"",h=null==t?void 0:t.glow_mode,p=null===(n=null===(i=null==e?void 0:e.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[d],u="function"==typeof(null==e?void 0:e._fmtNumber)?e._fmtNumber.bind(e):e=>null==e?"—":String(e),m=u(null!==(s=null!==(a=null===(o=null==p?void 0:p.attributes)||void 0===o?void 0:o.temperature)&&void 0!==a?a:null===(r=null==p?void 0:p.attributes)||void 0===r?void 0:r.target_temp)&&void 0!==s?s:null===(l=null==p?void 0:p.attributes)||void 0===l?void 0:l.target_temperature,1)+"°",v="heating"===((null===(c=null==p?void 0:p.attributes)||void 0===c?void 0:c.hvac_action)||"").toLowerCase(),_="off"===((null==p?void 0:p.state)||"").toLowerCase()?"off":v?"heating":"idle",g=`thermostat-chip ${_}`,f=`temperature-chip ${_}`,b=`thermostat-icon ${_}`,w="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),y=null!=h?h:"static",$=bt,{style:x,overlay:A}=wt($,y,v);return L`
    <div class="tile-wrap">
      <div class="glow-under" style=${x}>${A}</div>
      <ha-control-button
        class="square thermostat-tile ${v?"on":""}"
        @hass-action=${i=>{"function"==typeof(null==e?void 0:e._onThermostatAction)&&e._onThermostatAction(i,t)}}
        .actionHandler=${pt({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${w?L`<ha-chip class=${g}>${m}</ha-chip>`:L`<div class=${f}><span class="thermostat-target">${m}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${b} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,s):W}
      </div>`:W}
    `}_getWeatherForecastGraphSelection(e){return e?this._weatherForecastGraphSelections.get(e):void 0}_setWeatherForecastGraphSelection(e,t){if(!e||!Number.isFinite(t))return;if(this._weatherForecastGraphSelections.get(e)===t)return;const i=new Map(this._weatherForecastGraphSelections);i.set(e,t),this._weatherForecastGraphSelections=i}_renderEmbeddedRowCard(e,t){if(!e||"object"!=typeof e)return W;this._rowCardConfigs.get(t)!==e&&(this._rowCardElements.delete(t),this._rowCardPromises.delete(t)),this._rowCardConfigs.set(t,e);const i=this._rowCardElements.get(t);if(i)return i.hass=this.hass,L`<div class="embedded-card">${i}</div>`;const n=this._createRowCardElement(t,e).then((e=>(e.hass=this.hass,L`${e}`))).catch((t=>{const i=t instanceof Error?t.message:String(t),n=this._createErrorCard(i,e);return n.hass=this.hass,L`${n}`}));return L`<div class="embedded-card">${we(n,W)}</div>`}async _createRowCardElement(e,t){const i=this._rowCardPromises.get(e);if(i)return i;const n=(async()=>{const i=await this._getCardHelpers();let n;try{n=(null==i?void 0:i.createCardElement)?await i.createCardElement(t):Ue(t)}catch(e){const i=e instanceof Error?e.message:String(e);n=this._createErrorCard(i,t)}return n.addEventListener("ll-rebuild",(i=>{i.stopPropagation(),this._rowCardElements.delete(e),this._rowCardPromises.delete(e);const n=this._rowCardConfigs.get(e)||t;this._createRowCardElement(e,n).then((()=>this.requestUpdate()))})),this._rowCardElements.set(e,n),this._rowCardPromises.delete(e),n})();return this._rowCardPromises.set(e,n),n}_createErrorCard(e,t){try{const i=document.createElement("hui-error-card");return i.setConfig({type:"error",error:e,origConfig:t}),i}catch(i){return Ue({type:"hui-error-card",error:e,origConfig:t})}}async _getCardHelpers(){if(!this._helpersPromise){const e=window.loadCardHelpers;this._helpersPromise="function"==typeof e?e():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_dispatchNativeAction(e,t){const i=new Event("hass-action",{bubbles:!0,composed:!0});i.detail={action:e,config:t},this.dispatchEvent(i)}_withActionOverrides(e,t){const i=Object.assign({},e);"string"==typeof(null==t?void 0:t.entity)&&t.entity&&(i.entity=t.entity);const n=Ze(null==t?void 0:t.tap_action);n&&(i.tap_action=n);const o=Ze(null==t?void 0:t.hold_action);o&&(i.hold_action=o);const a=Ze(null==t?void 0:t.double_tap_action);return a&&(i.double_tap_action=a),i}_dispatchActionEnvelope(e,t){("double_tap"===e?t.double_tap_action:"hold"===e?t.hold_action:t.tap_action)&&this._dispatchNativeAction(e,t)}_selectedAction(e,t){return"double_tap"===e?t.double_tap_action:"hold"===e?t.hold_action:t.tap_action}_withoutSelectedActionConfirmation(e,t){const i=this._selectedAction(e,t);if(!i||void 0===Ke(i.confirmation))return t;const n=Object.assign({},t),o=Object.assign({},i);return delete o.confirmation,"double_tap"===e?n.double_tap_action=o:"hold"===e?n.hold_action=o:n.tap_action=o,n}_isConfirmationExempt(e){var t,i;if(!e||"object"!=typeof e||!Array.isArray(e.exemptions))return!1;const n=null===(i=null===(t=this.hass)||void 0===t?void 0:t.user)||void 0===i?void 0:i.id;return!!n&&e.exemptions.some((e=>e.user===n))}_confirmSwitchAction(e,t){if(void 0===e||this._isConfirmationExempt(e))return Promise.resolve(!0);const i=e&&"object"==typeof e?e:{},n="string"==typeof i.title&&i.title.trim()?i.title.trim():"Please confirm",o="string"==typeof i.text&&i.text.trim()?i.text.trim():`Are you sure you want to ${t.action}?`,a="string"==typeof i.confirm_text&&i.confirm_text.trim()?i.confirm_text.trim():"OK",r="string"==typeof i.dismiss_text&&i.dismiss_text.trim()?i.dismiss_text.trim():"Cancel";return new Promise((e=>{const t=document.createElement("div"),i=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),c=document.createElement("div"),d=document.createElement("button"),h=document.createElement("button");t.style.cssText=["position:fixed","inset:0","z-index:2147483647","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(0,0,0,0.32)","box-sizing:border-box"].join(";"),i.style.cssText=["width:min(420px,100%)","box-sizing:border-box","border-radius:12px","padding:20px","background:var(--ha-dialog-surface-background, var(--card-background-color, #fff))","color:var(--primary-text-color, #212121)","box-shadow:0 18px 48px rgba(0,0,0,0.32)","font-family:var(--paper-font-body1_-_font-family, Roboto, sans-serif)"].join(";"),s.style.cssText="font-size:20px;font-weight:500;line-height:1.3;margin-bottom:12px;",l.style.cssText="font-size:14px;line-height:1.45;color:var(--primary-text-color, #212121);white-space:pre-wrap;",c.style.cssText="display:flex;justify-content:flex-end;gap:8px;margin-top:24px;";const p=["border:0","border-radius:8px","padding:10px 14px","font:inherit","font-weight:500","cursor:pointer","background:transparent","color:var(--primary-color, #03a9f4)"].join(";");d.style.cssText=p,h.style.cssText=`${p};background:var(--primary-color, #03a9f4);color:var(--text-primary-color, #fff);`,s.textContent=n,l.textContent=o,d.textContent=r,h.textContent=a;const u=i=>{document.removeEventListener("keydown",m),t.remove(),e(i)},m=e=>{"Escape"===e.key&&u(!1)};t.addEventListener("click",(e=>{e.target===t&&u(!1)})),d.addEventListener("click",(()=>u(!1))),h.addEventListener("click",(()=>u(!0))),document.addEventListener("keydown",m),c.append(d,h),i.append(s,l,c),t.append(i),document.body.append(t),h.focus()}))}_isLockSwitch(e,t){return"lock"===String(e||"").toLowerCase()||!!(null==t?void 0:t.startsWith("lock."))}_buildDefaultSwitchTapAction(e,t,i){var n,o,a;if(e){if(this._isLockSwitch(t,e)){return{action:"perform-action",perform_action:"unlocked"===((null===(a=null===(o=null===(n=this.hass)||void 0===n?void 0:n.states)||void 0===o?void 0:o[e])||void 0===a?void 0:a.state)||"").toLowerCase()?"lock.lock":"lock.unlock",target:{entity_id:e},confirmation:i}}return{action:"toggle",confirmation:i}}}_applySwitchTapConfirmation(e,t){if(void 0===t||!e.tap_action)return e;return void 0!==Ke(e.tap_action.confirmation)?e:Object.assign(Object.assign({},e),{tap_action:Object.assign(Object.assign({},e.tap_action),{confirmation:t})})}_entityState(e){var t,i,n;const o=null===(n=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e])||void 0===n?void 0:n.state;return null==o?"":String(o)}_targetContainsEntity(e,t){if(!e||"object"!=typeof e)return!1;const i=e.entity_id;return Array.isArray(i)?i.includes(t):i===t}_actionCanChangeSwitchEntity(e,t,i){if(!t||"hold"===e)return!1;const n=this._selectedAction(e,i);return!!n&&("toggle"===n.action?i.entity===t:"perform-action"===n.action&&(this._targetContainsEntity(n.target,t)||this._targetContainsEntity(n.data,t)))}_setPendingSwitchVisible(e,t){if(this._visiblePendingSwitches.has(e)===t)return;const i=new Set(this._visiblePendingSwitches);t?i.add(e):i.delete(e),this._visiblePendingSwitches=i}_clearPendingSwitch(e){const t=this._pendingSwitches.get(e);t?(void 0!==t.showTimer&&window.clearTimeout(t.showTimer),void 0!==t.timeoutTimer&&window.clearTimeout(t.timeoutTimer),this._pendingSwitches.delete(e),this._setPendingSwitchVisible(e,!1)):this._setPendingSwitchVisible(e,!1)}_clearAllPendingSwitches(){[...this._pendingSwitches.keys()].forEach((e=>this._clearPendingSwitch(e)))}_trackPendingSwitch(e,t,i){if(!e||!this.hass||!this._actionCanChangeSwitchEntity(t,e,i))return;this._clearPendingSwitch(e);const n=this._entityState(e),o={initialState:n};o.showTimer=window.setTimeout((()=>{this._entityState(e)===n?this._setPendingSwitchVisible(e,!0):this._clearPendingSwitch(e)}),this._switchPendingDelayMs),o.timeoutTimer=window.setTimeout((()=>{this._clearPendingSwitch(e)}),this._switchPendingTimeoutMs),this._pendingSwitches.set(e,o)}_syncPendingSwitches(){this._pendingSwitches.forEach(((e,t)=>{this._entityState(t)!==e.initialState&&this._clearPendingSwitch(t)}))}_onMainAction(e,t,i,n,o){e.stopPropagation();const a=e.detail&&e.detail.action||"tap",r=o||i,s=n||i||o,l={entity:r,tap_action:r?{action:"toggle"}:void 0,hold_action:s?{action:"more-info",entity:s}:void 0},c=Ye(t)?t:Ye(this._config)?this._config:void 0;this._dispatchActionEnvelope(a,this._withActionOverrides(l,c))}_onWeatherAction(e,t){e.stopPropagation();const i=e.detail&&e.detail.action||"tap",n=(null==t?void 0:t.entity)||(null==t?void 0:t.temp_sensor)||(null==t?void 0:t.humidity_sensor),o={entity:n,tap_action:n?{action:"more-info",entity:n}:void 0,hold_action:n?{action:"more-info",entity:n}:void 0};this._dispatchActionEnvelope(i,this._withActionOverrides(o,t))}_onACAction(e,t){var i,n,o;e.stopPropagation();const a=e.detail&&e.detail.action||"tap",r=null==t?void 0:t.entity;if(!r)return;const s=((null===(o=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[r])||void 0===o?void 0:o.state)||"").toLowerCase(),l={entity:r,tap_action:{action:"perform-action",perform_action:!!s&&"off"!==s?"climate.turn_off":"climate.turn_on",target:{entity_id:r}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(a,this._withActionOverrides(l,t))}_onThermostatAction(e,t){var i,n,o;e.stopPropagation();const a=e.detail&&e.detail.action||"tap",r=null==t?void 0:t.entity;if(!r)return;const s={entity:r,tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",target:{entity_id:r},data:{hvac_mode:"off"===((null===(o=null===(n=null===(i=this.hass)||void 0===i?void 0:i.states)||void 0===n?void 0:n[r])||void 0===o?void 0:o.state)||"").toLowerCase()?"heat":"off"}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(a,this._withActionOverrides(s,t))}async _onSwitchAction(e,t){e.stopPropagation();const i=e.detail&&e.detail.action||"tap",n="string"==typeof(null==t?void 0:t.entity)?t.entity:void 0,o="string"==typeof(null==t?void 0:t.hold_entity)?t.hold_entity:n,a=Ke(null==t?void 0:t.confirmation),r={entity:n,tap_action:this._buildDefaultSwitchTapAction(n,null==t?void 0:t.type,a),hold_action:o?{action:"more-info",entity:o}:void 0,double_tap_action:n?{action:"toggle"}:void 0},s=this._withActionOverrides(r,t);let l=this._applySwitchTapConfirmation(s,a);const c=this._selectedAction(i,l);if(!c)return;const d=Ke(c.confirmation);if(void 0!==d){if(!await this._confirmSwitchAction(d,c))return;l=this._withoutSelectedActionConfirmation(i,l)}this._trackPendingSwitch(n,i,l),this._dispatchActionEnvelope(i,l)}_resolveSwitchTemplates(e){const t=this._extractTemplatesFromSwitch(e);return t.length?t.map((e=>({template:e,value:this._getTemplateDisplayValue(e)}))):[]}_extractTemplatesFromSwitch(e){if(!e||"object"!=typeof e)return[];const t=e,i=((...e)=>{for(const i of e)if(i in t)return t[i]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==i)return[];const n=Array.isArray(i)?i:[i],o=[];return n.some((e=>{let t;"string"==typeof e?t=e:e&&"object"==typeof e&&(t=e.template||e.value||e.value_template||e.text);const i="string"==typeof t?t.trim():"";return i&&o.push(i),o.length>=2})),o.slice(0,2)}_syncTemplateEntries(e){const t=this._collectTemplatesFromRows(e);if(!t.size&&!this._switchTemplateValues.size)return;const i=[];this._switchTemplateValues.forEach(((e,n)=>{t.has(n)||i.push(n)})),i.forEach((e=>{const t=this._switchTemplateValues.get(e);t&&this._disposeTemplateEntry(t),this._switchTemplateValues.delete(e)})),t.forEach((e=>this._ensureTemplateEntry(e)))}_collectTemplatesFromRows(e){const t=new Set;return Array.isArray(e)?(e.forEach((e=>{const i=Array.isArray(e)?e:Array.isArray(null==e?void 0:e.row)?e.row:[];Array.isArray(i)&&i.forEach((e=>{this._extractTemplatesFromSwitch(e).forEach((e=>t.add(e)))}))})),t):t}_ensureTemplateEntry(e){const t=(e||"").trim();if(!t)return;let i=this._switchTemplateValues.get(t);return i||(i={value:"",ready:!1},this._switchTemplateValues.set(t,i)),this._startTemplateSubscription(t,i),i}_getTemplateDisplayValue(e){var t;const i=this._ensureTemplateEntry(e);return i?i.error?"!":i.ready?null!==(t=i.value)&&void 0!==t?t:"":"…":""}_startTemplateSubscription(e,t){var i;!(null===(i=this.hass)||void 0===i?void 0:i.connection)||t.unsub||t.pending||(t.pending=!0,this.hass.connection.subscribeMessage((e=>{t.ready=!0,t.error=void 0;const i=e&&"object"==typeof e&&"result"in e?e.result:e;t.value=null!=i?String(i):"",this.requestUpdate()}),{type:"render_template",template:e},{resubscribe:!0}).then((e=>{t.unsub=e})).catch((i=>{t.ready=!0,t.error=(null==i?void 0:i.message)||"error",t.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${e}":`,i),this.requestUpdate()})).finally((()=>{t.pending=!1})))}_disposeTemplateEntry(e){if(e.unsub){try{e.unsub()}catch(e){}e.unsub=void 0}e.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((e,t)=>this._startTemplateSubscription(t,e)))}_normalizeForecastType(e){const t=String(e||"hourly");return["hourly","daily","twice_daily"].includes(t)?t:"hourly"}_weatherForecastKey(e,t){const i="string"==typeof e?e.trim():"";return i?`${i}|${this._normalizeForecastType(t)}`:""}_collectWeatherForecastKeys(e){const t=new Set;return Array.isArray(e)?(e.forEach((e=>{const i=null==e?void 0:e.weather;if(!i||!1===i.show_forecast)return;const n=this._weatherForecastKey(i.entity,i.forecast_type);n&&t.add(n);const o=this._weatherForecastKey(i.entity,"daily");o&&t.add(o)})),t):t}_syncWeatherForecastEntries(e){const t=this._collectWeatherForecastKeys(e),i=[];this._weatherForecastValues.forEach(((e,n)=>{t.has(n)||i.push(n)})),i.forEach((e=>{const t=this._weatherForecastValues.get(e);t&&this._disposeWeatherForecastEntry(t),this._weatherForecastValues.delete(e)})),t.forEach((e=>this._ensureWeatherForecastEntry(e)))}_ensureWeatherForecastEntry(e){const t=(e||"").trim();if(!t)return;let i=this._weatherForecastValues.get(t);return i||(i={forecast:[],ready:!1},this._weatherForecastValues.set(t,i)),this._startWeatherForecastSubscription(t,i),i}_getWeatherForecast(e,t){const i=this._weatherForecastKey(e,t);if(!i)return[];const n=this._ensureWeatherForecastEntry(i);return n&&Array.isArray(n.forecast)?n.forecast:[]}_extractForecast(e){var t,i;if(!e||"object"!=typeof e)return[];const n=e;return Array.isArray(n.forecast)?n.forecast:Array.isArray(null===(t=n.event)||void 0===t?void 0:t.forecast)?n.event.forecast:Array.isArray(null===(i=n.result)||void 0===i?void 0:i.forecast)?n.result.forecast:[]}_startWeatherForecastSubscription(e,t){var i;if(!(null===(i=this.hass)||void 0===i?void 0:i.connection)||t.unsub||t.pending)return;const[n,o]=e.split("|"),a=this._normalizeForecastType(o);n&&(t.pending=!0,this.hass.connection.subscribeMessage((e=>{t.ready=!0,t.error=void 0,t.forecast=this._extractForecast(e),this.requestUpdate()}),{type:"weather/subscribe_forecast",entity_id:n,forecast_type:a},{resubscribe:!0}).then((e=>{t.unsub=e})).catch((i=>{t.ready=!0,t.error=(null==i?void 0:i.message)||"error",t.unsub=void 0,console.warn(`[space-hub-card] Weather forecast subscription failed for "${e}":`,i),this.requestUpdate()})).finally((()=>{t.pending=!1})))}_disposeWeatherForecastEntry(e){if(e.unsub)try{e.unsub()}catch(e){}e.unsub=void 0,e.pending=!1}_resumeWeatherForecastSubscriptions(){this.hass&&this._weatherForecastValues.forEach(((e,t)=>this._startWeatherForecastSubscription(t,e)))}_fmt2(e,t,i){if(!e||!this.hass)return"—"+(i||"");const n=this.hass.states[e];if(!n||""===n.state||"unknown"===n.state||"unavailable"===n.state)return"—"+(i||"");const o=Number(n.state);return Number.isFinite(o)?o.toFixed(t)+(i||""):String(n.state)+(i||"")}_fmtNumber(e,t){if(null==e||""===e||"unknown"===e||"unavailable"===e)return"—";const i=Number(e);return Number.isFinite(i)?i.toFixed(t):String(e)}_acChip(e){return e&&"off"!==e?e.includes("cool")?{icon:"mdi:snowflake"}:e.includes("heat")?{icon:"mdi:fire"}:e.includes("dry")?{icon:"mdi:water-percent"}:e.includes("fan")?{icon:"mdi:fan"}:e.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(e){e&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0}))}_acToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i=((null==t?void 0:t.state)||"").toLowerCase(),n=!!i&&"off"!==i;this.hass.callService("climate",n?"turn_off":"turn_on",{entity_id:e})}_thermostatToggle(e){if(!e||!this.hass)return;const t=this.hass.states[e],i="off"===((null==t?void 0:t.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:e,hvac_mode:i})}_toggleGeneric(e){if(!e||!this.hass)return;const t=e.split(".")[0],i="switch"===t||"light"===t?`${t}.toggle`:"homeassistant.toggle",[n,o]=i.split(".");this.hass.callService(n,o,{entity_id:e})}_isOn(e){if(!e||!this.hass)return!1;const t=this.hass.states[e];return"on"===((null==t?void 0:t.state)||"").toLowerCase()}_isSwitchActive(e,t){if(!e||!this.hass)return!1;const i=this.hass.states[e];return this._isLockSwitch(t,e)?"unlocked"===((null==i?void 0:i.state)||"").toLowerCase():"on"===((null==i?void 0:i.state)||"").toLowerCase()}_isSwitchPending(e){return!!e&&this._visiblePendingSwitches.has(e)}_rgbaFromColor(e,t=.5){const i=Math.max(0,Math.min(1,Number(t)||0));if(!e||"string"!=typeof e)return`rgba(0,0,0,${i})`;const n=e.trim();if(n.startsWith("rgba(")||n.startsWith("rgb(")||n.startsWith("hsl(")||n.startsWith("var("))return n;const o=n.replace("#",""),a=e=>parseInt(e,16);if(3===o.length){return`rgba(${a(o[0]+o[0])},${a(o[1]+o[1])},${a(o[2]+o[2])},${i})`}if(o.length>=6){return`rgba(${a(o.slice(0,2))},${a(o.slice(2,4))},${a(o.slice(4,6))},${i})`}return`rgba(0,0,0,${i})`}_getAllCardEntities(e,t){const i=new Set,n=Array.isArray(t)?t:[t],o=new WeakSet,a=new Set(["entity","entity_id","tap_entity","hold_entity","double_tap_entity","light_group_entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor","camera_image"]),r=e=>{"string"==typeof e&&this._isValidEntityId(e)&&i.add(e)},s=e=>{"string"!=typeof e?Array.isArray(e)?e.forEach((e=>{"string"==typeof e?r(e):l(e)})):l(e):r(e)},l=e=>{if(!e||"object"!=typeof e)return;const t=e;o.has(t)||(o.add(t),Array.isArray(e)?e.forEach((e=>l(e))):Object.entries(e).forEach((([e,t])=>{a.has(e)?s(t):"target"!==e?Array.isArray(t)?t.forEach((e=>l(e))):t&&"object"==typeof t&&l(t):(e=>{if(!e||"object"!=typeof e)return;s(e.entity_id)})(t)})))};return l(n),l(e.switch_rows),l(e.cards),[...i]}_hasAnyUnavailable(e,t){if(!this.hass)return!1;const i=this._getAllCardEntities(e,t),n=new Set(["unavailable","unknown","offline"]);return i.some((e=>{var t,i;if(!e)return!1;const o=null===(i=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===i?void 0:i[e];if(!o)return!0;const a=(o.state||"").toLowerCase();return n.has(a)}))}};fi.styles=[ci,di,hi,pi,ui,mi,vi,_i],e([xe({attribute:!1})],fi.prototype,"hass",void 0),e([Ae()],fi.prototype,"_config",void 0),e([Ae()],fi.prototype,"_visiblePendingSwitches",void 0),e([Ae()],fi.prototype,"_weatherForecastGraphSelections",void 0),fi=gi=e([ye("space-hub-card")],fi),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.19"});try{const e=window;if(!e.__SPACE_HUB_CARD_LOGGED__){const t="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",i="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.19",t,i),e.__SPACE_HUB_CARD_LOGGED__=!0}}catch(e){}var bi=fi;export{fi as SpaceHubCard,bi as default};
