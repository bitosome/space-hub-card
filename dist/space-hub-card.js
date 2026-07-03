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
function i(i,e,t,a){var n,o=arguments.length,r=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(i,e,t,a);else for(var c=i.length-1;c>=0;c--)(n=i[c])&&(r=(o<3?n(r):o>3?n(e,t,r):n(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),n=new WeakMap;class o{constructor(i,e,t){if(this._$cssResult$=!0,t!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=e}get styleSheet(){let i=this.o;const e=this.t;if(t&&void 0===i){const t=void 0!==e&&1===e.length;t&&(i=n.get(e)),void 0===i&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(e,i))}return i}toString(){return this.cssText}}const r=(i,...e)=>{const t=1===i.length?i[0]:e.reduce(((e,t,a)=>e+(i=>{if(!0===i._$cssResult$)return i.cssText;if("number"==typeof i)return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+i[a+1]),i[0]);return new o(t,i,a)},c=t?i=>i:i=>i instanceof CSSStyleSheet?(i=>{let e="";for(const t of i.cssRules)e+=t.cssText;return(i=>new o("string"==typeof i?i:i+"",void 0,a))(e)})(i):i
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var s;const l=window,M=l.trustedTypes,g=M?M.emptyScript:"",d=l.reactiveElementPolyfillSupport,N={toAttribute(i,e){switch(e){case Boolean:i=i?g:null;break;case Object:case Array:i=null==i?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=null!==i;break;case Number:t=null===i?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch(i){t=null}}return t}},I=(i,e)=>e!==i&&(e==e||i==i),u={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:I},h="finalized";class D extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(i){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach(((e,t)=>{const a=this._$Ep(t,e);void 0!==a&&(this._$Ev.set(a,t),i.push(a))})),i}static createProperty(i,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(i,e),!e.noAccessor&&!this.prototype.hasOwnProperty(i)){const t="symbol"==typeof i?Symbol():"__"+i,a=this.getPropertyDescriptor(i,t,e);void 0!==a&&Object.defineProperty(this.prototype,i,a)}}static getPropertyDescriptor(i,e,t){return{get(){return this[e]},set(a){const n=this[i];this[e]=a,this.requestUpdate(i,n,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||u}static finalize(){if(this.hasOwnProperty(h))return!1;this[h]=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),void 0!==i.h&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,e=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const t of e)this.createProperty(t,i[t])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const e=[];if(Array.isArray(i)){const t=new Set(i.flat(1/0).reverse());for(const i of t)e.unshift(c(i))}else void 0!==i&&e.push(c(i));return e}static _$Ep(i,e){const t=e.attribute;return!1===t?void 0:"string"==typeof t?t:"string"==typeof i?i.toLowerCase():void 0}_$Eu(){var i;this._$E_=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(i=this.constructor.h)||void 0===i||i.forEach((i=>i(this)))}addController(i){var e,t;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(i),void 0!==this.renderRoot&&this.isConnected&&(null===(t=i.hostConnected)||void 0===t||t.call(i))}removeController(i){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((i,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const a=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,a)=>{t?i.adoptedStyleSheets=a.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet)):a.forEach((t=>{const a=document.createElement("style"),n=e.litNonce;void 0!==n&&a.setAttribute("nonce",n),a.textContent=t.cssText,i.appendChild(a)}))})(a,this.constructor.elementStyles),a}connectedCallback(){var i;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(i=this._$ES)||void 0===i||i.forEach((i=>{var e;return null===(e=i.hostConnected)||void 0===e?void 0:e.call(i)}))}enableUpdating(i){}disconnectedCallback(){var i;null===(i=this._$ES)||void 0===i||i.forEach((i=>{var e;return null===(e=i.hostDisconnected)||void 0===e?void 0:e.call(i)}))}attributeChangedCallback(i,e,t){this._$AK(i,t)}_$EO(i,e,t=u){var a;const n=this.constructor._$Ep(i,t);if(void 0!==n&&!0===t.reflect){const o=(void 0!==(null===(a=t.converter)||void 0===a?void 0:a.toAttribute)?t.converter:N).toAttribute(e,t.type);this._$El=i,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(i,e){var t;const a=this.constructor,n=a._$Ev.get(i);if(void 0!==n&&this._$El!==n){const i=a.getPropertyOptions(n),o="function"==typeof i.converter?{fromAttribute:i.converter}:void 0!==(null===(t=i.converter)||void 0===t?void 0:t.fromAttribute)?i.converter:N;this._$El=n,this[n]=o.fromAttribute(e,i.type),this._$El=null}}requestUpdate(i,e,t){let a=!0;void 0!==i&&(((t=t||this.constructor.getPropertyOptions(i)).hasChanged||I)(this[i],e)?(this._$AL.has(i)||this._$AL.set(i,e),!0===t.reflect&&this._$El!==i&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(i,t))):a=!1),!this.isUpdatePending&&a&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const i=this.scheduleUpdate();return null!=i&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((i,e)=>this[e]=i)),this._$Ei=void 0);let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),null===(i=this._$ES)||void 0===i||i.forEach((i=>{var e;return null===(e=i.hostUpdate)||void 0===e?void 0:e.call(i)})),this.update(t)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(t)}willUpdate(i){}_$AE(i){var e;null===(e=this._$ES)||void 0===e||e.forEach((i=>{var e;return null===(e=i.hostUpdated)||void 0===e?void 0:e.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){void 0!==this._$EC&&(this._$EC.forEach(((i,e)=>this._$EO(e,this[e],i))),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var j;D[h]=!0,D.elementProperties=new Map,D.elementStyles=[],D.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:D}),(null!==(s=l.reactiveElementVersions)&&void 0!==s?s:l.reactiveElementVersions=[]).push("1.6.3");const y=window,z=y.trustedTypes,p=z?z.createPolicy("lit-html",{createHTML:i=>i}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,A="?"+m,b=`<${A}>`,w=document,T=()=>w.createComment(""),O=i=>null===i||"object"!=typeof i&&"function"!=typeof i,x=Array.isArray,v="[ \t\n\f\r]",S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,L=/-->/g,k=/>/g,C=RegExp(`>|${v}(?:([^\\s"'>=/]+)(${v}*=${v}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,f=/"/g,Y=/^(?:script|style|textarea|title)$/i,Q=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),E=Q(1),U=Q(2),Z=Symbol.for("lit-noChange"),G=Symbol.for("lit-nothing"),W=new WeakMap,P=w.createTreeWalker(w,129,null,!1);function $(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==p?p.createHTML(e):e}class R{constructor({strings:i,_$litType$:e},t){let a;this.parts=[];let n=0,o=0;const r=i.length-1,c=this.parts,[s,l]=((i,e)=>{const t=i.length-1,a=[];let n,o=2===e?"<svg>":"",r=S;for(let e=0;e<t;e++){const t=i[e];let c,s,l=-1,M=0;for(;M<t.length&&(r.lastIndex=M,s=r.exec(t),null!==s);)M=r.lastIndex,r===S?"!--"===s[1]?r=L:void 0!==s[1]?r=k:void 0!==s[2]?(Y.test(s[2])&&(n=RegExp("</"+s[2],"g")),r=C):void 0!==s[3]&&(r=C):r===C?">"===s[0]?(r=null!=n?n:S,l=-1):void 0===s[1]?l=-2:(l=r.lastIndex-s[2].length,c=s[1],r=void 0===s[3]?C:'"'===s[3]?f:_):r===f||r===_?r=C:r===L||r===k?r=S:(r=C,n=void 0);const g=r===C&&i[e+1].startsWith("/>")?" ":"";o+=r===S?t+b:l>=0?(a.push(c),t.slice(0,l)+"$lit$"+t.slice(l)+m+g):t+m+(-2===l?(a.push(void 0),e):g)}return[$(i,o+(i[t]||"<?>")+(2===e?"</svg>":"")),a]})(i,e);if(this.el=R.createElement(s,t),P.currentNode=this.el.content,2===e){const i=this.el.content,e=i.firstChild;e.remove(),i.append(...e.childNodes)}for(;null!==(a=P.nextNode())&&c.length<r;){if(1===a.nodeType){if(a.hasAttributes()){const i=[];for(const e of a.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const t=l[o++];if(i.push(e),void 0!==t){const i=a.getAttribute(t.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(t);c.push({type:1,index:n,name:e[2],strings:i,ctor:"."===e[1]?J:"?"===e[1]?K:"@"===e[1]?q:H})}else c.push({type:6,index:n})}for(const e of i)a.removeAttribute(e)}if(Y.test(a.tagName)){const i=a.textContent.split(m),e=i.length-1;if(e>0){a.textContent=z?z.emptyScript:"";for(let t=0;t<e;t++)a.append(i[t],T()),P.nextNode(),c.push({type:2,index:++n});a.append(i[e],T())}}}else if(8===a.nodeType)if(a.data===A)c.push({type:2,index:n});else{let i=-1;for(;-1!==(i=a.data.indexOf(m,i+1));)c.push({type:7,index:n}),i+=m.length-1}n++}}static createElement(i,e){const t=w.createElement("template");return t.innerHTML=i,t}}function V(i,e,t=i,a){var n,o,r,c;if(e===Z)return e;let s=void 0!==a?null===(n=t._$Co)||void 0===n?void 0:n[a]:t._$Cl;const l=O(e)?void 0:e._$litDirective$;return(null==s?void 0:s.constructor)!==l&&(null===(o=null==s?void 0:s._$AO)||void 0===o||o.call(s,!1),void 0===l?s=void 0:(s=new l(i),s._$AT(i,t,a)),void 0!==a?(null!==(r=(c=t)._$Co)&&void 0!==r?r:c._$Co=[])[a]=s:t._$Cl=s),void 0!==s&&(e=V(i,s._$AS(i,e.values),s,a)),e}class F{constructor(i,e){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var e;const{el:{content:t},parts:a}=this._$AD,n=(null!==(e=null==i?void 0:i.creationScope)&&void 0!==e?e:w).importNode(t,!0);P.currentNode=n;let o=P.nextNode(),r=0,c=0,s=a[0];for(;void 0!==s;){if(r===s.index){let e;2===s.type?e=new B(o,o.nextSibling,this,i):1===s.type?e=new s.ctor(o,s.name,s.strings,this,i):6===s.type&&(e=new ii(o,this,i)),this._$AV.push(e),s=a[++c]}r!==(null==s?void 0:s.index)&&(o=P.nextNode(),r++)}return P.currentNode=w,n}v(i){let e=0;for(const t of this._$AV)void 0!==t&&(void 0!==t.strings?(t._$AI(i,t,e),e+=t.strings.length-2):t._$AI(i[e])),e++}}class B{constructor(i,e,t,a){var n;this.type=2,this._$AH=G,this._$AN=void 0,this._$AA=i,this._$AB=e,this._$AM=t,this.options=a,this._$Cp=null===(n=null==a?void 0:a.isConnected)||void 0===n||n}get _$AU(){var i,e;return null!==(e=null===(i=this._$AM)||void 0===i?void 0:i._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let i=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==i?void 0:i.nodeType)&&(i=e.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,e=this){i=V(this,i,e),O(i)?i===G||null==i||""===i?(this._$AH!==G&&this._$AR(),this._$AH=G):i!==this._$AH&&i!==Z&&this._(i):void 0!==i._$litType$?this.g(i):void 0!==i.nodeType?this.$(i):(i=>x(i)||"function"==typeof(null==i?void 0:i[Symbol.iterator]))(i)?this.T(i):this._(i)}k(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}$(i){this._$AH!==i&&(this._$AR(),this._$AH=this.k(i))}_(i){this._$AH!==G&&O(this._$AH)?this._$AA.nextSibling.data=i:this.$(w.createTextNode(i)),this._$AH=i}g(i){var e;const{values:t,_$litType$:a}=i,n="number"==typeof a?this._$AC(i):(void 0===a.el&&(a.el=R.createElement($(a.h,a.h[0]),this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(t);else{const i=new F(n,this),e=i.u(this.options);i.v(t),this.$(e),this._$AH=i}}_$AC(i){let e=W.get(i.strings);return void 0===e&&W.set(i.strings,e=new R(i)),e}T(i){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let t,a=0;for(const n of i)a===e.length?e.push(t=new B(this.k(T()),this.k(T()),this,this.options)):t=e[a],t._$AI(n),a++;a<e.length&&(this._$AR(t&&t._$AB.nextSibling,a),e.length=a)}_$AR(i=this._$AA.nextSibling,e){var t;for(null===(t=this._$AP)||void 0===t||t.call(this,!1,!0,e);i&&i!==this._$AB;){const e=i.nextSibling;i.remove(),i=e}}setConnected(i){var e;void 0===this._$AM&&(this._$Cp=i,null===(e=this._$AP)||void 0===e||e.call(this,i))}}class H{constructor(i,e,t,a,n){this.type=1,this._$AH=G,this._$AN=void 0,this.element=i,this.name=e,this._$AM=a,this.options=n,t.length>2||""!==t[0]||""!==t[1]?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=G}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,e=this,t,a){const n=this.strings;let o=!1;if(void 0===n)i=V(this,i,e,0),o=!O(i)||i!==this._$AH&&i!==Z,o&&(this._$AH=i);else{const a=i;let r,c;for(i=n[0],r=0;r<n.length-1;r++)c=V(this,a[t+r],e,r),c===Z&&(c=this._$AH[r]),o||(o=!O(c)||c!==this._$AH[r]),c===G?i=G:i!==G&&(i+=(null!=c?c:"")+n[r+1]),this._$AH[r]=c}o&&!a&&this.j(i)}j(i){i===G?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=i?i:"")}}class J extends H{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===G?void 0:i}}const X=z?z.emptyScript:"";class K extends H{constructor(){super(...arguments),this.type=4}j(i){i&&i!==G?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class q extends H{constructor(i,e,t,a,n){super(i,e,t,a,n),this.type=5}_$AI(i,e=this){var t;if((i=null!==(t=V(this,i,e,0))&&void 0!==t?t:G)===Z)return;const a=this._$AH,n=i===G&&a!==G||i.capture!==a.capture||i.once!==a.once||i.passive!==a.passive,o=i!==G&&(a===G||n);n&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var e,t;"function"==typeof this._$AH?this._$AH.call(null!==(t=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==t?t:this.element,i):this._$AH.handleEvent(i)}}class ii{constructor(i,e,t){this.element=i,this.type=6,this._$AN=void 0,this._$AM=e,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(i){V(this,i)}}const ei=y.litHtmlPolyfillSupport;null==ei||ei(R,B),(null!==(j=y.litHtmlVersions)&&void 0!==j?j:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ti,ai;class ni extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,e;const t=super.createRenderRoot();return null!==(i=(e=this.renderOptions).renderBefore)&&void 0!==i||(e.renderBefore=t.firstChild),t}update(i){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=((i,e,t)=>{var a,n;const o=null!==(a=null==t?void 0:t.renderBefore)&&void 0!==a?a:e;let r=o._$litPart$;if(void 0===r){const i=null!==(n=null==t?void 0:t.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new B(e.insertBefore(T(),i),i,void 0,null!=t?t:{})}return r._$AI(i),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),null===(i=this._$Do)||void 0===i||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),null===(i=this._$Do)||void 0===i||i.setConnected(!1)}render(){return Z}}ni.finalized=!0,ni._$litElement$=!0,null===(ti=globalThis.litElementHydrateSupport)||void 0===ti||ti.call(globalThis,{LitElement:ni});const oi=globalThis.litElementPolyfillSupport;null==oi||oi({LitElement:ni}),(null!==(ai=globalThis.litElementVersions)&&void 0!==ai?ai:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ri=2,ci=i=>(...e)=>({_$litDirective$:i,values:e});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class si{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,e,t){this._$Ct=i,this._$AM=e,this._$Ci=t}_$AS(i,e){return this.update(i,e)}update(i,e){return this.render(...e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=(i,e)=>{var t,a;const n=i._$AN;if(void 0===n)return!1;for(const i of n)null===(a=(t=i)._$AO)||void 0===a||a.call(t,e,!1),li(i,e);return!0},Mi=i=>{let e,t;do{if(void 0===(e=i._$AM))break;t=e._$AN,t.delete(i),i=e}while(0===(null==t?void 0:t.size))},gi=i=>{for(let e;e=i._$AM;i=e){let t=e._$AN;if(void 0===t)e._$AN=t=new Set;else if(t.has(i))break;t.add(i),Ii(e)}};function di(i){void 0!==this._$AN?(Mi(this),this._$AM=i,gi(this)):this._$AM=i}function Ni(i,e=!1,t=0){const a=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(a))for(let i=t;i<a.length;i++)li(a[i],!1),Mi(a[i]);else null!=a&&(li(a,!1),Mi(a));else li(this,i)}const Ii=i=>{var e,t,a,n;i.type==ri&&(null!==(e=(a=i)._$AP)&&void 0!==e||(a._$AP=Ni),null!==(t=(n=i)._$AQ)&&void 0!==t||(n._$AQ=di))};class ui extends si{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,t){super._$AT(i,e,t),gi(this),this.isConnected=i._$AU}_$AO(i,e=!0){var t,a;i!==this.isConnected&&(this.isConnected=i,i?null===(t=this.reconnected)||void 0===t||t.call(this):null===(a=this.disconnected)||void 0===a||a.call(this)),e&&(li(this,i),Mi(this))}setValue(i){if((i=>void 0===i.strings)(this._$Ct))this._$Ct._$AI(i,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hi{constructor(i){this.G=i}disconnect(){this.G=void 0}reconnect(i){this.G=i}deref(){return this.G}}class Di{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var i;null!==(i=this.Y)&&void 0!==i||(this.Y=new Promise((i=>this.Z=i)))}resume(){var i;null===(i=this.Z)||void 0===i||i.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ji=i=>!(i=>null===i||"object"!=typeof i&&"function"!=typeof i)(i)&&"function"==typeof i.then,yi=1073741823;const zi=ci(class extends ui{constructor(){super(...arguments),this._$C_t=yi,this._$Cwt=[],this._$Cq=new hi(this),this._$CK=new Di}render(...i){var e;return null!==(e=i.find((i=>!ji(i))))&&void 0!==e?e:Z}update(i,e){const t=this._$Cwt;let a=t.length;this._$Cwt=e;const n=this._$Cq,o=this._$CK;this.isConnected||this.disconnected();for(let i=0;i<e.length&&!(i>this._$C_t);i++){const r=e[i];if(!ji(r))return this._$C_t=i,r;i<a&&r===t[i]||(this._$C_t=yi,a=0,Promise.resolve(r).then((async i=>{for(;o.get();)await o.get();const e=n.deref();if(void 0!==e){const t=e._$Cwt.indexOf(r);t>-1&&t<e._$C_t&&(e._$C_t=t,e.setValue(i))}})))}return Z}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),pi=i=>e=>"function"==typeof e?((i,e)=>(customElements.define(i,e),e))(i,e):((i,e)=>{const{kind:t,elements:a}=e;return{kind:t,elements:a,finisher(e){customElements.define(i,e)}}})(i,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,mi=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ai(i){return(e,t)=>void 0!==t?((i,e,t)=>{e.constructor.createProperty(t,i)})(i,e,t):mi(i,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function bi(i){return Ai({...i,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var wi;null===(wi=window.HTMLSlotElement)||void 0===wi||wi.prototype.assignedElements;var Ti="[^\\s]+";function Oi(i,e){for(var t=[],a=0,n=i.length;a<n;a++)t.push(i[a].substr(0,e));return t}var xi=function(i){return function(e,t){var a=t[i].map((function(i){return i.toLowerCase()})),n=a.indexOf(e.toLowerCase());return n>-1?n:null}};function vi(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var a=0,n=e;a<n.length;a++){var o=n[a];for(var r in o)i[r]=o[r]}return i}var Si=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Li=["January","February","March","April","May","June","July","August","September","October","November","December"],ki=Oi(Li,3),Ci={dayNamesShort:Oi(Si,3),dayNames:Si,monthNamesShort:ki,monthNames:Li,amPm:["am","pm"],DoFn:function(i){return i+["th","st","nd","rd"][i%10>3?0:(i-i%10!=10?1:0)*i%10]}},_i=(vi({},Ci),function(i){return+i-1}),fi=[null,"[1-9]\\d?"],Yi=[null,Ti],Qi=["isPm",Ti,function(i,e){var t=i.toLowerCase();return t===e.amPm[0]?0:t===e.amPm[1]?1:null}],Ei=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(i){var e=(i+"").match(/([+-]|\d\d)/gi);if(e){var t=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?t:-t}return 0}];xi("monthNamesShort"),xi("monthNames");var Ui,Zi;!function(){try{(new Date).toLocaleDateString("i")}catch(i){return"RangeError"===i.name}}(),function(){try{(new Date).toLocaleString("i")}catch(i){return"RangeError"===i.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(i){return"RangeError"===i.name}}(),function(i){i.language="language",i.system="system",i.comma_decimal="comma_decimal",i.decimal_comma="decimal_comma",i.space_comma="space_comma",i.none="none"}(Ui||(Ui={})),function(i){i.language="language",i.system="system",i.am_pm="12",i.twenty_four="24"}(Zi||(Zi={}));var Gi=function(i,e,t,a){a=a||{},t=null==t?{}:t;var n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return n.detail=t,i.dispatchEvent(n),n},Wi=new Set(["call-service","divider","section","weblink","cast","select"]),Pi={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},$i=function(i,e){void 0===e&&(e=!1);var t=function(i,e){return a("hui-error-card",{type:"error",error:i,config:e})},a=function(i,e){var a=window.document.createElement(i);try{a.setConfig(e)}catch(a){return console.error(i,a),t(a.message,e)}return a};if(!i||"object"!=typeof i||!e&&!i.type)return t("No type defined",i);var n=i.type;if(n&&n.startsWith("custom:"))n=n.substr("custom:".length);else if(e)if(Wi.has(n))n="hui-"+n+"-row";else{if(!i.entity)return t("Invalid config given.",i);var o=i.entity.split(".",1)[0];n="hui-"+(Pi[o]||"text")+"-entity-row"}else n="hui-"+n+"-card";if(customElements.get(n))return a(n,i);var r=t("Custom element doesn't exist: "+i.type+".",i);r.style.display="None";var c=setTimeout((function(){r.style.display=""}),2e3);return customElements.whenDefined(i.type).then((function(){clearTimeout(c),Gi(r,"ll-rebuild",{},r)})),r};function Ri(i){return JSON.parse(JSON.stringify(i))}const Vi=new Set(["more-info","toggle","perform-action","navigate","url","assist","none","fire-dom-event","call-service"]),Fi=i=>!!i&&"object"==typeof i&&!Array.isArray(i),Bi=i=>!!((null==i?void 0:i.tap_action)||(null==i?void 0:i.hold_action)||(null==i?void 0:i.double_tap_action)),Hi=i=>{if(null==i||!1===i)return;if(!0===i)return!0;if("string"==typeof i){const e=i.trim();return!e||{text:e}}if(!Fi(i))return;const e={};if("string"==typeof i.text&&i.text.trim()&&(e.text=i.text),"string"==typeof i.title&&i.title.trim()&&(e.title=i.title),"string"==typeof i.confirm_text&&i.confirm_text.trim()&&(e.confirm_text=i.confirm_text),"string"==typeof i.dismiss_text&&i.dismiss_text.trim()&&(e.dismiss_text=i.dismiss_text),Array.isArray(i.exemptions)){const t=i.exemptions.filter((i=>!!i&&"object"==typeof i&&"string"==typeof i.user)).map((i=>({user:i.user})));t.length&&(e.exemptions=t)}return!Object.keys(e).length||e},Ji=i=>{if(Fi(i)&&"string"==typeof i.action&&Vi.has(i.action)){if("call-service"===i.action||"perform-action"===i.action){return Object.assign(Object.assign({},i),{action:"perform-action",perform_action:"string"==typeof i.perform_action?i.perform_action:"string"==typeof i.service?i.service:void 0,data:Fi(i.data)?i.data:Fi(i.service_data)?i.service_data:void 0,target:Fi(i.target)?i.target:void 0,confirmation:Hi(i.confirmation)})}return Object.assign(Object.assign({},i),{confirmation:Hi(i.confirmation)})}},Xi=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],Ki=["switch","smart_plug","lock"],qi=["static","pulse","none"],ie=["more-info","toggle","perform-action","navigate","url","assist","none"],ee="M4,12L5.41,13.41L11,7.83V20H13V7.83L18.59,13.42L20,12L12,4L4,12Z",te="M4,12L5.41,10.59L11,16.17V4H13V16.17L18.59,10.58L20,12L12,20L4,12Z",ae="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";let ne=class extends ni{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.type="text",this.disabled=!1}_onInput(i){i.stopPropagation(),this.disabled||(this.value=i.currentTarget.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}render(){return E`
      <label>
        <span>${this.label}</span>
        <input
          type=${this.type||"text"}
          aria-label=${this.label}
          .value=${this.value||""}
          placeholder=${this.placeholder||""}
          step=${this.step||G}
          min=${this.min||G}
          max=${this.max||G}
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
    `}};i([Ai()],ne.prototype,"label",void 0),i([Ai()],ne.prototype,"value",void 0),i([Ai()],ne.prototype,"placeholder",void 0),i([Ai()],ne.prototype,"type",void 0),i([Ai()],ne.prototype,"step",void 0),i([Ai()],ne.prototype,"min",void 0),i([Ai()],ne.prototype,"max",void 0),i([Ai({type:Boolean,reflect:!0})],ne.prototype,"disabled",void 0),ne=i([pi("space-hub-textfield")],ne);let oe=class extends ni{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(i){this._config=Ri(i)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var i,e,t;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const a=await(null===(e=(i=window).loadCardHelpers)||void 0===e?void 0:e.call(i));a&&await(null===(t=a.createCardElement)||void 0===t?void 0:t.call(a,{type:"entities",entities:[]}))}catch(i){}const a=["ha-form","ha-formfield","ha-icon-picker","ha-switch","space-hub-textfield","ha-expansion-panel","ha-yaml-editor"],n=i=>Promise.race([customElements.whenDefined(i),new Promise((i=>setTimeout(i,1500)))]);try{await Promise.all(a.map(n))}catch(i){}this.requestUpdate()}_fireConfigChanged(){Gi(this,"config-changed",{config:Ri(this._config)}),this.requestUpdate()}_valueChanged(i,e){const t=i.split(".");let a=this._config;for(let i=0;i<t.length-1;i++){const e=t[i],n=Number(e);if(Number.isFinite(n)){if(!Array.isArray(a))return;a[n]||(a[n]={}),a=a[n]}else void 0===a[e]&&(a[e]={}),a=a[e]}const n=t[t.length-1];""===e||null==e?delete a[n]:a[n]=e,this._fireConfigChanged()}_getNestedValue(i){const e=i.split(".");let t=this._config;for(const i of e){if(null==t)return;const e=Number(i);t=Number.isFinite(e)?t[e]:t[i]}return t}_checkedFromEvent(i){var e;return!!(null===(e=i.currentTarget)||void 0===e?void 0:e.checked)}_clampIndex(i,e){return e<=0?0:Math.min(Math.max(i,0),e-1)}_moveArrayItem(i,e,t){const a=this._getNestedValue(i);if(!Array.isArray(a))return!1;const n=e+t;if(n<0||n>=a.length)return!1;const o=[...a],[r]=o.splice(e,1);return o.splice(n,0,r),this._valueChanged(i,o),!0}_moveSwitchRow(i,e){const t=this._config.switch_rows;if(!Array.isArray(t))return;const a=i+e;if(a<0||a>=t.length)return;const n=[...t],[o]=n.splice(i,1);n.splice(a,0,o),this._selectedSwitchRowIndex=a,this._valueChanged("switch_rows",n)}_moveHeader(i,e){const t=this._config.headers;if(!Array.isArray(t))return;const a=i+e;if(a<0||a>=t.length)return;const n=[...t],[o]=n.splice(i,1);n.splice(a,0,o),this._selectedHeaderIndex=a,this._valueChanged("headers",n)}_handleSelectChanged(i,e){const t=i.split("."),a=t[t.length-1],n=t[t.length-2];"action"===a&&["tap_action","hold_action","double_tap_action"].includes(n)?this._handleActionTypeChanged(t.slice(0,-1).join("."),e):this._valueChanged(i,e)}_handleActionTypeChanged(i,e){if(!e)return void this._valueChanged(i,void 0);const t=Ji(this._getNestedValue(i)),a=t?Object.assign({},t):{};a.action=e,"more-info"!==e&&delete a.entity,"navigate"!==e&&(delete a.navigation_path,delete a.navigation_replace),"url"!==e&&delete a.url_path,"perform-action"!==e&&(delete a.perform_action,delete a.data,delete a.target,delete a.service,delete a.service_data),"assist"!==e&&(delete a.pipeline_id,delete a.start_listening),"perform-action"!==e||a.perform_action||(a.perform_action=""),"navigate"!==e||a.navigation_path||(a.navigation_path=""),"url"!==e||a.url_path||(a.url_path=""),"assist"===e&&void 0===a.start_listening&&(a.start_listening=!1),this._valueChanged(i,a)}_setActionConfirmation(i,e){const t=Ji(this._getNestedValue(i));if(!t)return;const a=Object.assign({},t);if(e){const i=Hi(a.confirmation);a.confirmation=i&&"object"==typeof i?i:{title:"Please confirm",text:"Are you sure?"}}else delete a.confirmation;this._valueChanged(i,a)}_setActionConfirmationField(i,e,t){const a=Ji(this._getNestedValue(i));if(!a)return;const n=Object.assign({},a),o=Hi(n.confirmation),r=o&&"object"==typeof o?Object.assign({},o):{};t.trim()?r[e]=t:delete r[e],n.confirmation=!Object.keys(r).length||r,this._valueChanged(i,n)}_setSwitchConfirmation(i,e){if(!e)return void this._valueChanged(i,void 0);const t=Hi(this._getNestedValue(i));this._valueChanged(i,t&&"object"==typeof t?t:{title:"Please confirm",text:"Are you sure?"})}_setSwitchConfirmationField(i,e,t){const a=Hi(this._getNestedValue(i)),n=a&&"object"==typeof a?Object.assign({},a):{};t.trim()?n[e]=t:delete n[e],this._valueChanged(i,!Object.keys(n).length||n)}_setSwitchInactiveIcon(i,e){const t=this._getNestedValue(i),a=t&&"object"==typeof t?Object.assign({},t):{},n="string"==typeof e?e.trim():"";n?a.icon=n:delete a.icon,delete a.icon_inactive,delete a.icon_off,delete a["icon-inactive"],delete a["icon-off"],this._valueChanged(i,a)}_renderSelectField(i,e,t,a){const n=t||a[0]||"",o=n&&!a.includes(n)?[n,...a]:[...a],r=o.includes(t||"")?t||"":n;return E`
      <ha-form
        .hass=${this.hass}
        .data=${{selection:r}}
        .schema=${[{name:"selection",selector:{select:{mode:"dropdown",options:o.map((i=>({value:i,label:i})))}}}]}
        .computeLabel=${e=>"selection"===e.name?i:void 0}
        @value-changed=${i=>{var t;i.stopPropagation(),this._handleSelectChanged(e,null===(t=i.detail.value)||void 0===t?void 0:t.selection)}}
      ></ha-form>
    `}_renderEntityField(i,e,t,a={}){return E`
      <ha-form
        .hass=${this.hass}
        .data=${{entity:t||""}}
        .schema=${[{name:"entity",selector:{entity:a}}]}
        .computeLabel=${e=>"entity"===e.name?i:void 0}
        @value-changed=${i=>{var t;i.stopPropagation(),this._valueChanged(e,null===(t=i.detail.value)||void 0===t?void 0:t.entity)}}
      ></ha-form>
    `}_friendlyEntityName(i){var e,t,a;return i&&(null===(t=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===t?void 0:t[i])&&(null===(a=this.hass.states[i].attributes)||void 0===a?void 0:a.friendly_name)||""}_entitySummary(i){if(!i)return"No entity selected";const e=this._friendlyEntityName(i);return e&&e!==i?`${e} • ${i}`:i}render(){return this.hass&&this._config?E`
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
    `:E``}_renderYamlEditor(){return E`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?E`<div class="yaml-error">${this._yamlError}</div>`:G}
    `}_yamlChanged(i){i.stopPropagation();const e=i.detail.value;e&&"object"==typeof e?(this._yamlError="",this._config=Ri(e),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return E`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var i,e,t,a,n;return E`
      <ha-expansion-panel outlined .header=${"Appearance"}>
        <div class="section-content">
          <div class="side-by-side">
            <space-hub-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(null!==(i=this._config.tile_height)&&void 0!==i?i:"")}
              @input=${i=>{const e=Number(i.target.value);this._valueChanged("tile_height",Number.isFinite(e)&&e>0?e:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(null!==(e=this._config.main_icon_size)&&void 0!==e?e:"")}
              @input=${i=>{const e=Number(i.target.value);this._valueChanged("main_icon_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(null!==(t=this._config.chip_icon_size)&&void 0!==t?t:"")}
              @input=${i=>{const e=Number(i.target.value);this._valueChanged("chip_icon_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(null!==(a=this._config.chip_font_size)&&void 0!==a?a:"")}
              @input=${i=>{const e=Number(i.target.value);this._valueChanged("chip_font_size",Number.isFinite(e)&&e>0?e:void 0)}}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Shadow Color"
              .value=${this._config.card_shadow_color||""}
              @input=${i=>this._valueChanged("card_shadow_color",i.target.value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Shadow Intensity (0-1)"
              type="number"
              step="0.05"
              min="0"
              max="1"
              .value=${String(null!==(n=this._config.card_shadow_intensity)&&void 0!==n?n:"")}
              @input=${i=>{const e=Number(i.target.value);this._valueChanged("card_shadow_intensity",Number.isFinite(e)?e:void 0)}}
            ></space-hub-textfield>
          </div>
          <space-hub-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color||""}
            @input=${i=>this._valueChanged("unavailable_pulse_color",i.target.value)}
          ></space-hub-textfield>
        </div>
      </ha-expansion-panel>
    `}_renderHeadersSection(){const i=this._config.headers||[],e=this._clampIndex(this._selectedHeaderIndex,i.length);return E`
      <ha-expansion-panel outlined .header=${`Headers (${i.length})`}>
        <div class="section-content">
          ${i.length>1?E`
            <div class="tab-bar">
              ${i.map(((i,t)=>E`<button class="tab-btn${e===t?" active":""}" @click=${()=>{this._selectedHeaderIndex=t,this.requestUpdate()}}>Header ${t+1}</button>`))}
            </div>
          `:G}
          ${i.length?this._renderHeader(i[e],e):E`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${i.length>0?E`
              <button
                class="editor-btn"
                .disabled=${e<=0}
                @click=${()=>this._moveHeader(e,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Header Up
              </button>
              <button
                class="editor-btn"
                .disabled=${e>=i.length-1}
                @click=${()=>this._moveHeader(e,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Header Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeHeader(e)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${e+1}
              </button>
            `:G}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(i){this._config.headers&&(this._config.headers.splice(i,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(i,e){const t=`headers.${e}`;return E`
      ${this._renderWeatherConfig(i.weather,`${t}.weather`)}
      ${this._renderMainTileConfig(i.main,`${t}.main`)}
      ${this._renderACConfig(i.ac,`${t}.ac`)}
      ${this._renderThermostatConfig(i.thermostat,`${t}.thermostat`)}
    `}_renderWeatherConfig(i,e){var t,a,n,o,r,c,s,l,M,g,d,N,I,u,h,D,j,y;const z=i||{};return E`
      <ha-expansion-panel outlined .header=${"Weather Tile"}>
        <div class="section-content">
          ${!!i?E`
            <div class="side-by-side">
              ${this._renderEntityField("Weather Entity",`${e}.entity`,z.entity,{domain:"weather"})}
            </div>
            ${this._renderForecastSourcesConfig(z,e)}
            <div class="side-by-side">
              ${this._renderSelectField("Weather Icon Set",`${e}.icon_set`,z.icon_set,["meteocons","custom"])}
            </div>
            ${"custom"===String(z.icon_set||"").toLowerCase()?E`
              <div class="side-by-side">
                <space-hub-textfield
                  label="Custom Icon Base Path"
                  placeholder="/local/weather-icons"
                  .value=${String(null!==(n=null!==(a=null===(t=z.icon_pack)||void 0===t?void 0:t.base_path)&&void 0!==a?a:z.icon_base_path)&&void 0!==n?n:"")}
                  @input=${i=>{this._valueChanged(`${e}.icon_pack.base_path`,i.target.value)}}
                ></space-hub-textfield>
                <space-hub-textfield
                  label="Custom Icon Extension"
                  placeholder="svg"
                  .value=${String(null!==(c=null!==(r=null===(o=z.icon_pack)||void 0===o?void 0:o.extension)&&void 0!==r?r:z.icon_extension)&&void 0!==c?c:"")}
                  @input=${i=>{this._valueChanged(`${e}.icon_pack.extension`,i.target.value)}}
                ></space-hub-textfield>
              </div>
            `:G}
            <div class="side-by-side">
              <space-hub-textfield
                label="Temperature Size (px)"
                type="number"
                min="18"
                max="56"
                .value=${String(null!==(s=z.temp_size)&&void 0!==s?s:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.temp_size`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Icon Size (px)"
                type="number"
                min="28"
                max="160"
                .value=${String(null!==(l=z.icon_size)&&void 0!==l?l:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.icon_size`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Icon Offset X (px)"
                type="number"
                .value=${String(null!==(M=z.icon_offset_x)&&void 0!==M?M:"")}
                @input=${i=>{const t=i.target.value,a=Number(t);this._valueChanged(`${e}.icon_offset_x`,""!==t&&Number.isFinite(a)?a:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Icon Offset Y (px)"
                type="number"
                .value=${String(null!==(g=z.icon_offset_y)&&void 0!==g?g:"")}
                @input=${i=>{const t=i.target.value,a=Number(t);this._valueChanged(`${e}.icon_offset_y`,""!==t&&Number.isFinite(a)?a:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <ha-formfield label="Sync forecast graphs">
                <ha-switch
                  .checked=${!1!==z.sync_graphs}
                  @change=${i=>{this._valueChanged(`${e}.sync_graphs`,!!this._checkedFromEvent(i)&&void 0)}}
                ></ha-switch>
              </ha-formfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Stale Glow After (min)"
                type="number"
                min="0"
                .value=${String(null!==(d=z.stale_minutes)&&void 0!==d?d:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.stale_minutes`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Graph Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(null!==(N=z.conditions_icon_size)&&void 0!==N?N:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.conditions_icon_size`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Temperature Icon Count"
                type="number"
                min="0"
                max="72"
                .value=${String(null!==(I=z.temperature_icon_count)&&void 0!==I?I:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.temperature_icon_count`,Number.isFinite(t)&&t>=0?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Daily Forecast Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(null!==(u=z.daily_icon_size)&&void 0!==u?u:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.daily_icon_size`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Sensor Grid Columns"
                type="number"
                min="1"
                max="4"
                .value=${String(null!==(h=z.metric_columns)&&void 0!==h?h:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.metric_columns`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Forecast Graph Hours"
                type="number"
                min="1"
                max="72"
                .value=${String(null!==(D=z.forecast_slots)&&void 0!==D?D:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.forecast_slots`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Graph Height (px)"
                type="number"
                min="82"
                max="260"
                .value=${String(null!==(j=z.graph_height)&&void 0!==j?j:"")}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.graph_height`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Horizontal Grid Lines"
                type="number"
                min="2"
                max="9"
                .value=${String(null!==(y=z.graph_horizontal_lines)&&void 0!==y?y:5)}
                @input=${i=>{const t=Number(i.target.value);this._valueChanged(`${e}.graph_horizontal_lines`,Number.isFinite(t)&&t>0?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${e}.temp_sensor`,z.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${e}.humidity_sensor`,z.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderEntityField("Feels Like Sensor",`${e}.feels_like_sensor`,z.feels_like_sensor,{domain:"sensor"})}
            ${this._renderMetricsConfig(z.metrics&&z.metrics.length?z.metrics:this._defaultWeatherMetrics(z),e)}
            ${this._renderChipsConfig(z.chips||[],e)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Weather Tile
            </button>
          `:E`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{name:"Weather"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Weather Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderForecastSourcesConfig(i,e){const t=`${e}.forecast_sources`,a=Array.isArray(i.forecast_sources)?i.forecast_sources:[],n=(i,e)=>{const n=[...this._getNestedValue(t)||a],o=n[i],r="string"==typeof o?{entity:o}:Object.assign({},o||{});n[i]=Object.assign(Object.assign({},r),e),this._valueChanged(t,n)};return E`
      <div class="metrics-section">
        <div class="metrics-section-title">Additional Forecast Sources (${a.length})</div>
        <div class="empty-hint">Primary forecast comes from Weather Entity. Add other weather entities to switch the forecast location in the tile.</div>
        <div class="metrics-list">
          ${a.map(((i,e)=>{const o="string"==typeof i?{entity:i}:i||{};return E`
              <div class="sub-item">
                <div class="sub-item-header">
                  <div class="sub-item-heading">
                    <span class="sub-item-title">${((i,e)=>(null==i?void 0:i.name)||(null==i?void 0:i.entity)||("string"==typeof i?i:"")||`Source ${e+1}`)(o,e)}</span>
                    <span class="sub-item-meta">${o.entity||"No entity selected"}</span>
                  </div>
                  <ha-icon-button
                    .path=${ae}
                    .label=${"Remove forecast source"}
                    @click=${()=>{const i=[...this._getNestedValue(t)||a];i.splice(e,1),this._valueChanged(t,i)}}
                  ></ha-icon-button>
                </div>
                <ha-form
                  .hass=${this.hass}
                  .data=${{entity:o.entity||""}}
                  .schema=${[{name:"entity",selector:{entity:{domain:"weather"}}}]}
                  .computeLabel=${i=>"entity"===i.name?"Weather Entity":void 0}
                  @value-changed=${i=>{var t;i.stopPropagation(),n(e,{entity:(null===(t=i.detail.value)||void 0===t?void 0:t.entity)||void 0})}}
                ></ha-form>
                <space-hub-textfield
                  label="Display Name (optional)"
                  .value=${o.name||""}
                  @input=${i=>n(e,{name:i.target.value||void 0})}
                ></space-hub-textfield>
              </div>
            `}))}
        </div>
        <button class="editor-btn" @click=${()=>{const i=[...this._getNestedValue(t)||a];i.push({entity:"",name:""}),this._valueChanged(t,i)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Forecast Source
        </button>
      </div>
    `}_renderMainTileConfig(i,e){const t=i||{};return E`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!i?E`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${t.main_name||""}
                @input=${i=>this._valueChanged(`${e}.main_name`,i.target.value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${t.main_icon||""}
                @value-changed=${i=>this._valueChanged(`${e}.main_icon`,i.detail.value)}
              ></ha-icon-picker>
            </div>
            ${this._renderEntityField("Light Group Entity (tap toggles)",`${e}.light_group_entity`,t.light_group_entity)}
            <div class="side-by-side">
              ${this._renderEntityField("Tap Entity",`${e}.tap_entity`,t.tap_entity)}
              ${this._renderEntityField("Hold Entity (more-info)",`${e}.hold_entity`,t.hold_entity)}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${e}.temp_sensor`,t.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${e}.humidity_sensor`,t.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,qi)}
            ${this._renderChipsConfig(t.chips||[],e)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${e}.double_tap_action`,t.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:E`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(i,e){const t=`${e}.chips`;return E`
      <ha-expansion-panel outlined .header=${`Chips (${i.length})`}>
        <div class="section-content">
          ${i.map(((i,e)=>this._renderSingleChip(i,`${t}.${e}`,e,t)))}
          <button class="editor-btn" @click=${()=>{const i=this._getNestedValue(t)||[];i.push({type:"custom",entity:""}),this._valueChanged(t,i)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(i,e,t,a){return E`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Chip ${t+1}: ${i.type||"custom"}</span>
            <span class="sub-item-meta">${this._entitySummary(i.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=this._getNestedValue(a)||[];i.splice(t,1),this._valueChanged(a,[...i])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${e}.type`,i.type,Xi)}
          ${this._renderEntityField("Entity",`${e}.entity`,i.entity)}
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${i.icon||""}
            @value-changed=${i=>this._valueChanged(`${e}.icon`,i.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${i.icon_active||""}
            @value-changed=${i=>this._valueChanged(`${e}.icon_active`,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${i.icon_inactive||""}
            @value-changed=${i=>this._valueChanged(`${e}.icon_inactive`,i.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${i.icon_unavailable||""}
            @value-changed=${i=>this._valueChanged(`${e}.icon_unavailable`,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Background (Active)"
            .value=${i.background_active||""}
            @input=${i=>this._valueChanged(`${e}.background_active`,i.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Background (Unavailable)"
            .value=${i.background_unavailable||""}
            @input=${i=>this._valueChanged(`${e}.background_unavailable`,i.target.value)}
          ></space-hub-textfield>
        </div>
        <space-hub-textfield
          label="Icon Color (Unavailable)"
          .value=${i.icon_color_unavailable||""}
          @input=${i=>this._valueChanged(`${e}.icon_color_unavailable`,i.target.value)}
        ></space-hub-textfield>
      </div>
    `}_defaultWeatherMetrics(i){const e=[{entity:i.wind_speed_sensor,name:"Wind"},{entity:i.wind_gust_sensor,name:"Gust"},{entity:i.temp_min_24h_sensor,name:"24h Min"},{entity:i.temp_max_24h_sensor,name:"24h Max"},{entity:i.uv_sensor,name:"UV"},{entity:i.solar_lux_sensor,name:"Solar"},{entity:i.pressure_sensor,name:"Pressure"}].filter((i=>i.entity));return(i.rain_state_sensor||i.rain_rate_sensor)&&e.splice(4,0,{type:"rain",name:"Rain",rain_state_sensor:i.rain_state_sensor,rain_rate_sensor:i.rain_rate_sensor,rain_rate_threshold:i.rain_rate_threshold}),e}_renderMetricItem(i,e,t,a){var n;const o=i=>{const n=[...this._getNestedValue(e)||t];n[a]=Object.assign(Object.assign({},n[a]),i),this._valueChanged(e,n)},r="rain"===i.type,c=r?this._entitySummary(i.rain_state_sensor||i.rain_rate_sensor):this._entitySummary(i.entity);return E`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="drag-handle" title="Drag to reorder">
            <ha-svg-icon
              .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}
            ></ha-svg-icon>
          </div>
          <div class="sub-item-heading">
            <span class="sub-item-title">${r?"Rain":"Metric"} ${a+1}</span>
            <span class="sub-item-meta">${c}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=[...this._getNestedValue(e)||t];i.splice(a,1),this._valueChanged(e,i)}}
          ></ha-icon-button>
        </div>
        ${r?E`
          <div class="empty-hint">Shows "No rain" / "Raining" with intensity. A wet sensor with no rate above the threshold counts as no rain.</div>
          ${this._renderEntityField("Rain State Sensor",`${e}.${a}.rain_state_sensor`,i.rain_state_sensor,{domain:"binary_sensor"})}
          ${this._renderEntityField("Rain Rate Sensor",`${e}.${a}.rain_rate_sensor`,i.rain_rate_sensor,{domain:"sensor"})}
          <div class="side-by-side">
            <space-hub-textfield
              label="Rain Rate Threshold"
              type="number"
              min="0"
              step="0.1"
              .value=${String(null!==(n=i.rain_rate_threshold)&&void 0!==n?n:0)}
              @input=${i=>{const e=Number(i.target.value);o({rain_rate_threshold:Number.isFinite(e)&&e>=0?e:void 0})}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Label (optional)"
              .value=${i.name||""}
              @input=${i=>o({name:i.target.value||void 0})}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (Raining)"
              .value=${i.icon_active||""}
              @value-changed=${i=>o({icon_active:i.detail.value||void 0})}
            ></ha-icon-picker>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (No Rain)"
              .value=${i.icon_inactive||""}
              @value-changed=${i=>o({icon_inactive:i.detail.value||void 0})}
            ></ha-icon-picker>
          </div>
        `:E`
          ${this._renderEntityField("Entity",`${e}.${a}.entity`,i.entity,{domain:"sensor"})}
          <div class="side-by-side">
            <space-hub-textfield
              label="Label (optional)"
              .value=${i.name||""}
              @input=${i=>o({name:i.target.value||void 0})}
            ></space-hub-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (optional, native if empty)"
              .value=${i.icon||""}
              @value-changed=${i=>o({icon:i.detail.value||void 0})}
            ></ha-icon-picker>
          </div>
        `}
      </div>
    `}_renderMetricsConfig(i,e){const t=`${e}.metrics`,a=(e,a)=>{const n=[...this._getNestedValue(t)||i];if(e<0||e>=n.length||a<0||a>=n.length)return;const[o]=n.splice(e,1);n.splice(a,0,o),this._valueChanged(t,n)};return E`
      <div class="metrics-section">
        <div class="metrics-section-title">Grid Metrics (${i.length})</div>
        <div class="empty-hint">Drag the handle to reorder. Edit, remove, or add your own entities.</div>
        <ha-sortable
          handle-selector=".drag-handle"
          @item-moved=${i=>{i.stopPropagation();const{oldIndex:e,newIndex:t}=i.detail;a(e,t)}}
        >
          <div class="metrics-list">
            ${i.map(((e,a)=>this._renderMetricItem(e,t,i,a)))}
          </div>
        </ha-sortable>
        <div class="side-by-side">
          <button class="editor-btn" @click=${()=>{const e=[...this._getNestedValue(t)||i];e.push({entity:""}),this._valueChanged(t,e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Metric
          </button>
          <button class="editor-btn" @click=${()=>{const e=[...this._getNestedValue(t)||i];e.push({type:"rain",name:"Rain",icon_active:"mdi:weather-rainy",icon_inactive:"mdi:water-off-outline"}),this._valueChanged(t,e)}}>
            <ha-icon icon="mdi:weather-rainy"></ha-icon> Add Rain
          </button>
        </div>
      </div>
    `}_renderACConfig(i,e){const t=i||{};return E`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!i?E`
            ${this._renderEntityField("Climate Entity",`${e}.entity`,t.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,qi)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:E`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(i,e){const t=i||{};return E`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!i?E`
            ${this._renderEntityField("Climate Entity",`${e}.entity`,t.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,t.glow_mode,qi)}
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,t.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,t.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:E`
            <button class="editor-btn" @click=${()=>{this._valueChanged(e,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const i=this._config.switch_rows||[],e=this._clampIndex(this._selectedSwitchRowIndex,i.length);return E`
      <ha-expansion-panel outlined .header=${`Switch Rows (${i.length})`}>
        <div class="section-content">
          ${i.length>1?E`
            <div class="tab-bar">
              ${i.map(((i,t)=>E`<button class="tab-btn${e===t?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=t,this.requestUpdate()}}>Row ${t+1}</button>`))}
            </div>
          `:G}
          ${i.length?this._renderSwitchRow(i[e],e):E`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${i.length>0?E`
              <button
                class="editor-btn"
                .disabled=${e<=0}
                @click=${()=>this._moveSwitchRow(e,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Row Up
              </button>
              <button
                class="editor-btn"
                .disabled=${e>=i.length-1}
                @click=${()=>this._moveSwitchRow(e,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Row Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(e)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${e+1}
              </button>
            `:G}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(i){this._config.switch_rows&&(this._config.switch_rows.splice(i,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(i,e){const t=Array.isArray(i)?i:Array.isArray(null==i?void 0:i.row)?i.row:[],a=`switch_rows.${e}`,n=Array.isArray(i)?a:`${a}.row`;return E`
      <div class="section-content">
        ${t.map(((i,e)=>this._renderSwitchItem(i,`${n}.${e}`,e,n,t.length)))}
        <button class="editor-btn" @click=${()=>{const i=this._getNestedValue(n)||[];i.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(n,[...i])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(i,e,t,a,n){const o=Hi(null==i?void 0:i.confirmation),r=void 0!==o,c=o&&"object"==typeof o&&o.title||"",s=o&&"object"==typeof o&&o.text||"",l=o&&"object"==typeof o&&o.confirm_text||"",M=o&&"object"==typeof o&&o.dismiss_text||"",g=`${e}.confirmation`;return E`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${i.name||this._friendlyEntityName(i.entity)||`Switch ${t+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(i.entity)}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${ee}
              .label=${"Move switch up"}
              .disabled=${t<=0}
              @click=${()=>this._moveArrayItem(a,t,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${te}
              .label=${"Move switch down"}
              .disabled=${t>=n-1}
              @click=${()=>this._moveArrayItem(a,t,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ae}
              .label=${"Remove switch"}
              @click=${()=>{const i=this._getNestedValue(a)||[];i.splice(t,1),this._valueChanged(a,[...i])}}
            ></ha-icon-button>
          </div>
        </div>
        ${this._renderEntityField("Controlled Entity",`${e}.entity`,i.entity)}
        <div class="side-by-side">
          <space-hub-textfield
            label="Name"
            .value=${i.name||""}
            @input=${i=>this._valueChanged(`${e}.name`,i.target.value)}
          ></space-hub-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Inactive State Icon"
            .value=${i.icon_inactive||i.icon_off||i["icon-inactive"]||i["icon-off"]||i.icon||""}
            @value-changed=${i=>this._setSwitchInactiveIcon(e,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Active State Icon"
            .value=${i.icon_active||""}
            @value-changed=${i=>this._valueChanged(`${e}.icon_active`,i.detail.value)}
          ></ha-icon-picker>
          <space-hub-textfield
            label="Icon Size"
            .value=${i.icon_size||""}
            @input=${i=>this._valueChanged(`${e}.icon_size`,i.target.value)}
          ></space-hub-textfield>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${e}.type`,i.type,Ki)}
          ${this._renderSelectField("Glow Mode",`${e}.glow_mode`,i.glow_mode,qi)}
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Font Size"
            .value=${i.font_size||i["font-size"]||""}
            @input=${i=>this._valueChanged(`${e}.font_size`,i.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Font Weight"
            .value=${i.font_weight||i["font-weight"]||""}
            @input=${i=>this._valueChanged(`${e}.font_weight`,i.target.value)}
          ></space-hub-textfield>
        </div>
        ${this._renderEntityField("Hold Entity (more-info on hold)",`${e}.hold_entity`,i.hold_entity)}

        <div class="confirmation-settings">
          <ha-formfield label="Require confirmation on tap">
            <ha-switch
              .checked=${r}
              @change=${i=>{this._setSwitchConfirmation(g,this._checkedFromEvent(i))}}
            ></ha-switch>
          </ha-formfield>
          <div class="confirmation-fields">
            <space-hub-textfield
              label="Confirmation Title"
              .value=${c}
              placeholder="Please confirm"
              .disabled=${!r}
              @input=${i=>this._setSwitchConfirmationField(g,"title",i.target.value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Confirmation Message"
              .value=${s}
              placeholder="Are you sure?"
              .disabled=${!r}
              @input=${i=>this._setSwitchConfirmationField(g,"text",i.target.value)}
            ></space-hub-textfield>
            <div class="side-by-side">
              <space-hub-textfield
                label="Confirm Button Text"
                .value=${l}
                placeholder="OK"
                .disabled=${!r}
                @input=${i=>this._setSwitchConfirmationField(g,"confirm_text",i.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Dismiss Button Text"
                .value=${M}
                placeholder="Cancel"
                .disabled=${!r}
                @input=${i=>this._setSwitchConfirmationField(g,"dismiss_text",i.target.value)}
              ></space-hub-textfield>
            </div>
          </div>
        </div>

        <ha-expansion-panel outlined .header=${"Actions"}>
          <div class="section-content">
            ${this._renderActionConfig("Tap Action",`${e}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${e}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${e}.double_tap_action`,i.double_tap_action)}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Info Templates"}>
          <div class="section-content">
            ${this._renderInfoTemplates(i,e)}
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderInfoTemplates(i,e){const t=Array.isArray(i.info_templates)?i.info_templates:i.info_template?[i.info_template]:[];return E`
      ${t.map(((i,a)=>E`
        <div class="side-by-side">
          <space-hub-textfield
            label="Template ${a+1}"
            .value=${i||""}
            @input=${i=>{const n=[...t];n[a]=i.target.value,this._valueChanged(`${e}.info_templates`,n)}}
          ></space-hub-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=[...t];i.splice(a,1),this._valueChanged(`${e}.info_templates`,i.length?i:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${t.length<2?E`
        <button class="editor-btn" @click=${()=>{const i=[...t,""];this._valueChanged(`${e}.info_templates`,i)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:G}
    `}_renderCardsSection(){const i=this._config.cards||[];return E`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${i.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${i.map(((e,t)=>this._renderEmbeddedCardItem(e,t,i.length)))}
          <button class="editor-btn" @click=${()=>{const e=[...i,{type:"tile",entity:""}];this._valueChanged("cards",e)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(i,e,t){return E`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Card ${e+1}: ${i.type||"unknown"}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${ee}
              .label=${"Move card up"}
              .disabled=${e<=0}
              @click=${()=>this._moveArrayItem("cards",e,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${te}
              .label=${"Move card down"}
              .disabled=${e>=t-1}
              @click=${()=>this._moveArrayItem("cards",e,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${ae}
              .label=${"Remove card"}
              @click=${()=>{const i=[...this._config.cards||[]];i.splice(e,1),this._valueChanged("cards",i.length?i:void 0)}}
            ></ha-icon-button>
          </div>
        </div>
        <ha-yaml-editor
          .defaultValue=${i}
          @value-changed=${i=>{i.stopPropagation();const t=[...this._config.cards||[]];t[e]=i.detail.value,this._valueChanged("cards",t)}}
        ></ha-yaml-editor>
      </div>
    `}_renderActionConfig(i,e,t){const a=Ji(t),n=!!a,o=Hi(null==a?void 0:a.confirmation),r=void 0!==o,c=o&&"object"==typeof o&&o.title||"",s=o&&"object"==typeof o&&o.text||"",l=o&&"object"==typeof o&&o.confirm_text||"",M=o&&"object"==typeof o&&o.dismiss_text||"";return E`
      <ha-expansion-panel outlined .header=${i}>
        <div class="section-content">
          ${n?E`
            ${this._renderSelectField("Action",`${e}.action`,null==a?void 0:a.action,ie)}
            ${"more-info"===(null==a?void 0:a.action)?E`
              ${this._renderEntityField("More Info Entity",`${e}.entity`,a.entity)}
            `:G}
            ${"navigate"===(null==a?void 0:a.action)?E`
              <space-hub-textfield
                label="Navigation Path"
                .value=${a.navigation_path||""}
                @input=${i=>this._valueChanged(`${e}.navigation_path`,i.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Replace current path">
                <ha-switch
                  .checked=${!!a.navigation_replace}
                  @change=${i=>this._valueChanged(`${e}.navigation_replace`,this._checkedFromEvent(i)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:G}
            ${"url"===(null==a?void 0:a.action)?E`
              <space-hub-textfield
                label="URL"
                .value=${a.url_path||""}
                @input=${i=>this._valueChanged(`${e}.url_path`,i.target.value)}
              ></space-hub-textfield>
            `:G}
            ${"perform-action"===(null==a?void 0:a.action)?E`
              <space-hub-textfield
                label="Action"
                .value=${a.perform_action||""}
                @input=${i=>this._valueChanged(`${e}.perform_action`,i.target.value)}
              ></space-hub-textfield>
              <ha-yaml-editor
                label="Target"
                .defaultValue=${a.target||{}}
                @value-changed=${i=>{i.stopPropagation(),this._valueChanged(`${e}.target`,i.detail.value)}}
              ></ha-yaml-editor>
              <ha-yaml-editor
                label="Data"
                .defaultValue=${a.data||{}}
                @value-changed=${i=>{i.stopPropagation(),this._valueChanged(`${e}.data`,i.detail.value)}}
              ></ha-yaml-editor>
            `:G}
            ${"assist"===(null==a?void 0:a.action)?E`
              <space-hub-textfield
                label="Pipeline ID"
                .value=${a.pipeline_id||""}
                @input=${i=>this._valueChanged(`${e}.pipeline_id`,i.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Start listening immediately">
                <ha-switch
                  .checked=${!!a.start_listening}
                  @change=${i=>this._valueChanged(`${e}.start_listening`,this._checkedFromEvent(i)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:G}
            <ha-formfield label="Require confirmation">
              <ha-switch
                .checked=${r}
                @change=${i=>this._setActionConfirmation(e,this._checkedFromEvent(i))}
              ></ha-switch>
            </ha-formfield>
            ${r?E`
              <space-hub-textfield
                label="Confirmation Title"
                .value=${c}
                placeholder="Please confirm"
                @input=${i=>this._setActionConfirmationField(e,"title",i.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Confirmation Message"
                .value=${s}
                placeholder="Are you sure?"
                @input=${i=>this._setActionConfirmationField(e,"text",i.target.value)}
              ></space-hub-textfield>
              <div class="side-by-side">
                <space-hub-textfield
                  label="Confirm Button Text"
                  .value=${l}
                  placeholder="OK"
                  @input=${i=>this._setActionConfirmationField(e,"confirm_text",i.target.value)}
                ></space-hub-textfield>
                <space-hub-textfield
                  label="Dismiss Button Text"
                  .value=${M}
                  placeholder="Cancel"
                  @input=${i=>this._setActionConfirmationField(e,"dismiss_text",i.target.value)}
                ></space-hub-textfield>
              </div>
            `:G}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(e,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:E`
            <button class="editor-btn" @click=${()=>this._valueChanged(e,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${i}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};oe.styles=r`
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
    .metrics-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .metrics-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 4px;
      padding-top: 10px;
      border-top: 1px solid var(--divider-color, rgba(255, 255, 255, 0.12));
    }
    .metrics-section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--primary-text-color);
    }
    .drag-handle {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: grab;
      color: var(--secondary-text-color);
      touch-action: none;
      flex-shrink: 0;
      --mdc-icon-size: 22px;
    }
    .drag-handle:active {
      cursor: grabbing;
    }
    .sub-item-heading {
      display: flex;
      flex-direction: column;
      gap: 2px;
      min-width: 0;
      flex: 1;
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
  `,i([Ai({attribute:!1})],oe.prototype,"hass",void 0),i([bi()],oe.prototype,"_config",void 0),i([bi()],oe.prototype,"_selectedHeaderIndex",void 0),i([bi()],oe.prototype,"_selectedSwitchRowIndex",void 0),i([bi()],oe.prototype,"_yamlMode",void 0),i([bi()],oe.prototype,"_yamlError",void 0),oe=i([pi("space-hub-card-editor")],oe);const re=new WeakMap,ce=i=>{void 0!==i.holdTimer&&(window.clearTimeout(i.holdTimer),i.holdTimer=void 0)},se=(i,e)=>{const t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={action:e},i.dispatchEvent(t)},le=(i,e={})=>{const t=re.get(i);if(t)return void(t.options=e);const a={options:e,held:!1,startX:0,startY:0,pointerActive:!1};re.set(i,a),i.addEventListener("contextmenu",(i=>{i.preventDefault(),i.stopPropagation()})),i.addEventListener("pointerdown",(e=>{if(0===e.button&&(a.pointerActive=!0,a.held=!1,a.startX=e.clientX,a.startY=e.clientY,ce(a),a.options.hasHold&&(a.holdTimer=window.setTimeout((()=>{a.holdTimer=void 0,a.held=!0}),500),"function"==typeof i.setPointerCapture)))try{i.setPointerCapture(e.pointerId)}catch(i){}}),{passive:!0}),i.addEventListener("pointermove",(i=>{if(!a.pointerActive||void 0===a.holdTimer)return;const e=Math.abs(i.clientX-a.startX),t=Math.abs(i.clientY-a.startY);(e>10||t>10)&&(ce(a),a.held=!1)}),{passive:!0});const n=()=>{a.pointerActive=!1,a.held=!1,ce(a)};i.addEventListener("pointercancel",n),i.addEventListener("pointerleave",n),i.addEventListener("blur",n),i.addEventListener("pointerup",(e=>{if(a.pointerActive){if(a.pointerActive=!1,ce(a),"function"==typeof i.releasePointerCapture)try{i.releasePointerCapture(e.pointerId)}catch(i){}if(a.held)return a.held=!1,void se(i,"hold");if(a.options.hasDoubleClick)return void 0!==a.doubleTapTimer?((i=>{void 0!==i.doubleTapTimer&&(window.clearTimeout(i.doubleTapTimer),i.doubleTapTimer=void 0)})(a),void se(i,"double_tap")):void(a.doubleTapTimer=window.setTimeout((()=>{a.doubleTapTimer=void 0,se(i,"tap")}),250));se(i,"tap")}})),i.addEventListener("keyup",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),se(i,"tap"))}))},Me=ci(class extends si{update(i,[e]){return le(i.element,e),Z}render(i){}});function ge(i,e,t){var a,n,o,r;return e?{bg:null!==(n=null!==(a=t?e.background_active:e.background_inactive)&&void 0!==a?a:e.background)&&void 0!==n?n:i.bg,iconColor:null!==(r=null!==(o=t?e.icon_color_active:e.icon_color_inactive)&&void 0!==o?o:e.icon_color)&&void 0!==r?r:i.iconColor}:i}function de(i,e){var t;return"lock"===i||null!==(t=null==e?void 0:e.startsWith("lock."))&&void 0!==t&&t}function Ne(i,e){var t;const a=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),n=String((null==e?void 0:e.type)||"").toLowerCase(),o=a&&(null==i?void 0:i.hass)?i.hass.states[a]:void 0,r=((null==o?void 0:o.state)||"").toLowerCase(),c=!o||"unavailable"===r||"unknown"===r||""===r,s=!c&&function(i,e,t){var a;return!!e&&("lock"===t||null!==(a=null==i?void 0:i.startsWith("lock."))&&void 0!==a&&a?"locked"===e:"on"===e||"open"===e||"opening"===e)}(a,r,n),l=function(i,e,t,a,n,o){var r,c,s;return o?null!==(s=null!==(c=null!==(r=null==a?void 0:a.icon_unavailable)&&void 0!==r?r:null==a?void 0:a.icon_inactive)&&void 0!==c?c:null==a?void 0:a.icon)&&void 0!==s?s:"mdi:alert-circle-outline":n&&(null==a?void 0:a.icon_active)?a.icon_active:!n&&(null==a?void 0:a.icon_inactive)?a.icon_inactive:(null==a?void 0:a.icon)?a.icon:de(i,e)?n?"mdi:lock":"mdi:lock-open-variant":"door"===i?n?"mdi:door-open":"mdi:door":"presence"===i?"on"===t?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===i?"on"===t?"mdi:power-plug":t&&"off"!==t?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===i?n?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===i?n?"mdi:gate-open":"mdi:gate":n?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(n,a,r,e,s,c),{bg:M,iconColor:g}=function(i,e,t,a,n,o){if(o)return function(i){var e,t,a,n,o,r;return{bg:null!==(a=null!==(t=null!==(e=null==i?void 0:i.background_unavailable)&&void 0!==e?e:null==i?void 0:i.background_inactive)&&void 0!==t?t:null==i?void 0:i.background)&&void 0!==a?a:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(r=null!==(o=null!==(n=null==i?void 0:i.icon_color_unavailable)&&void 0!==n?n:null==i?void 0:i.icon_color_inactive)&&void 0!==o?o:null==i?void 0:i.icon_color)&&void 0!==r?r:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(a);if(de(i,e))return ge(n?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,n);if("door"===i||"sliding_gate"===i||"gate"===i)return ge(n?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},a,n);if("presence"===i){const i="on"===t;return ge(i?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,i)}if("smart_plug"===i)return ge(n?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,n);return ge(n?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},a,n)}(n,a,r,e,s,c),d="chip"+(c?" chip-unavailable":""),N=c?"icon-unavailable":"",I=null!==(t=null==o?void 0:o.state)&&void 0!==t?t:"unavailable";return E`
    <div
      class=${d}
      style=${`background:${M}`}
      title=${I}
      data-state=${r||"unavailable"}
      role="img"
      aria-label=${n?`${n} ${I}`:I}
    >
      <ha-icon .icon=${l} class=${N} style=${`color:${g}`}></ha-icon>
    </div>
  `}const Ie={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},ue={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"},he={weak:"rgba(229,57,53,0.16)",strong:"rgba(229,57,53,0.30)"};const De={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function je(i,e="static",t=!1){if(!i||"none"===e||!t)return{style:"",overlay:G};return{style:`${`--pulse-weak: ${i.weak}; --pulse-strong: ${i.strong};`} ${"pulse"===e?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${i.strong}), 0 6px 18px var(--pulse-weak, ${i.weak});`}`,overlay:E`<div class="glow-overlay" aria-hidden="true"></div>`}}function ye(i,e){var t;const a=(null==e?void 0:e.icon)||"mdi:sofa-outline",n=(null==e?void 0:e.name)||"",o="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(null==e?void 0:e.temp_sensor,2,"°"):"—°",r="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(null==e?void 0:e.humidity_sensor,2,"%"):"—%",c=!(!(null==e?void 0:e.double_tap_action)&&!(null===(t=null==i?void 0:i._config)||void 0===t?void 0:t.double_tap_action)),s=!!(null==e?void 0:e.light_group_entity),l=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),M=s&&"function"==typeof(null==i?void 0:i._isOn)&&i._isOn(l),g=(null==e?void 0:e.light_group_entity)||(null==e?void 0:e.tap_entity)||(null==e?void 0:e.entity),d=(null==e?void 0:e.glow_mode)||"static",N=!!(null==e?void 0:e.light_group_entity)&&M&&"none"!==d,I=Ie,{style:u,overlay:h}=je(I,d,N),D="chip main-light-chip "+(M?"on":"off"),j=Array.isArray(null==e?void 0:e.chips)?e.chips:[],y=j.find((i=>"illuminance"===String((null==i?void 0:i.type)||"").toLowerCase())),z=j.filter((i=>"illuminance"!==String((null==i?void 0:i.type)||"").toLowerCase())).map((e=>Ne(i,e))),p=y?function(i,e){const t=(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity),a=(null==e?void 0:e.icon)||"mdi:brightness-5",n="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(t,0," lx"):"— lx";return E`
    <div class="illuminance-chip">
      <ha-icon .icon=${a}></ha-icon>
      <span class="illuminance-value">${n}</span>
    </div>
  `}(i,y):G;return E`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${u}>${h}</div>
      <ha-control-button
        class="main-tile ${M?"on":""}"
        @hass-action=${t=>{"function"==typeof(null==i?void 0:i._onMainAction)&&i._onMainAction(t,e,null==e?void 0:e.tap_entity,null==e?void 0:e.hold_entity,g)}}
        .actionHandler=${Me({hasHold:!0,hasDoubleClick:c})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${a}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${o}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${r}</span>
        </div>
        ${p}
        <div class="main-chips-bottom-right" data-role="chips">
          ${s?E`<div class=${D}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:G}
          ${z.length?E`${z}`:G}
        </div>
        <div class="main-name">${n}</div>
  </ha-control-button>
    </div>
  `}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ze extends si{constructor(i){if(super(i),this.et=G,i.type!==ri)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===G||null==i)return this.ft=void 0,this.et=i;if(i===Z)return i;if("string"!=typeof i)throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.et)return this.ft;this.et=i;const e=[i];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ze.directiveName="unsafeHTML",ze.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class pe extends ze{}pe.directiveName="unsafeSVG",pe.resultType=2;const me=ci(pe),Ae={barometer:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImJhcm9tZXRlciI+CjxnIGlkPSJCYXJvbWV0ZXIiPgo8Y2lyY2xlIGlkPSJIb3VzaW5nIiBjeD0iNjQiIGN5PSI2NCIgcj0iMzkuNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NDNfODA5MykiIHN0cm9rZT0iIzFFMjkzQiIvPgo8ZyBpZD0iTGluZXMiPgo8cGF0aCBpZD0iTGluZSAxIiBkPSJNNjQgMzNWNDIiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgNyIgZD0iTTQyLjA3OTcgNDIuMDc5N0w0OC40NDM2IDQ4LjQ0MzYiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgNSIgZD0iTTg1LjkyMDMgNDIuMDc5N0w3OS41NTY0IDQ4LjQ0MzYiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgMyIgZD0iTTk1IDY0TDg2IDY0IiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDgiIGQ9Ik03OS41NTY0IDc5LjU1NjRMODUuOTIwMyA4NS45MjAzIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDYiIGQ9Ik00OC40NDM2IDc5LjU1NjRMNDIuMDc5NyA4NS45MjAzIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDQiIGQ9Ik00MiA2NEwzMyA2NCIgc3Ryb2tlPSIjNjQ3NDhCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjwvZz4KPGcgaWQ9IkJhcm9tZXRlcl8yIj4KPGcgaWQ9IlBvaW50ZXIiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODQzXzgwOTMpIj4KPGNpcmNsZSBpZD0iTmVlZGxlIE1vdW50IiBjeD0iNjQiIGN5PSI2NCIgcj0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNjQgNjQpIiBmaWxsPSIjRUY0NDQ0Ii8+CjxyZWN0IGlkPSJOZWVkbGUiIHg9Ijc5LjU1NjQiIHk9IjQ1LjYxNTIiIHdpZHRoPSI0IiBoZWlnaHQ9IjMzIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNzkuNTU2NCA0NS42MTUyKSIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGlkPSJIb2xkZXIiIGN4PSI2NCIgY3k9IjY0IiByPSIyLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDY0IDY0KSIgZmlsbD0iIzQ3NTU2OSIgc3Ryb2tlPSIjMjkzNjQ5Ii8+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9Ii02IDY0IDY0OzYgNjQgNjQ7LTYgNjQgNjQiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg0M184MDkzIiB4MT0iNjQiIHkxPSIyNCIgeDI9IjY0IiB5Mj0iMTA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzMzQxNTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUUyOTNCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg0M184MDkzIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjQ4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcuNDM1IDQzLjQ5MzkpIHJvdGF0ZSg0NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","clear-day":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsZWFyLWRheSI+CjxnIGlkPSJTdW4iPgo8Y2lyY2xlIGlkPSJDb3JlIiBjeD0iNjQiIGN5PSI2My45OTk5IiByPSIxOS41IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTgwMl81MTg2KSIgc3Ryb2tlPSIjRjhBRjE4Ii8+CjxnIGlkPSJSYXlzIj4KPHBhdGggZD0iTTYxIDE5QzYxIDE3LjM0MzEgNjIuMzQzMSAxNiA2NCAxNkM2NS42NTY4IDE2IDY3IDE3LjM0MzEgNjcgMTlWMzNDNjcgMzQuNjU2OSA2NS42NTY4IDM2IDY0IDM2QzYyLjM0MzEgMzYgNjEgMzQuNjU2OSA2MSAzM1YxOVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTkzLjY5ODUgMzAuMDU4OUM5NC44NyAyOC44ODczIDk2Ljc2OTYgMjguODg3MyA5Ny45NDExIDMwLjA1ODlDOTkuMTEyNyAzMS4yMzA0IDk5LjExMjcgMzMuMTI5OSA5Ny45NDExIDM0LjMwMTVMODguMDQxNiA0NC4yMDFDODYuODcwMSA0NS4zNzI2IDg0Ljk3MDYgNDUuMzcyNiA4My43OTkgNDQuMjAxQzgyLjYyNzQgNDMuMDI5NCA4Mi42Mjc0IDQxLjEyOTkgODMuNzk5IDM5Ljk1ODRMOTMuNjk4NSAzMC4wNTg5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMTA5IDYxQzExMC42NTcgNjEgMTEyIDYyLjM0MzIgMTEyIDY0QzExMiA2NS42NTY5IDExMC42NTcgNjcgMTA5IDY3SDk1QzkzLjM0MzEgNjcgOTIgNjUuNjU2OSA5MiA2NEM5MiA2Mi4zNDMyIDkzLjM0MzEgNjEgOTUgNjFIMTA5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNOTcuOTQxMSA5My42OTg1Qzk5LjExMjcgOTQuODcwMSA5OS4xMTI3IDk2Ljc2OTYgOTcuOTQxMSA5Ny45NDExQzk2Ljc2OTYgOTkuMTEyNyA5NC44NzAxIDk5LjExMjcgOTMuNjk4NSA5Ny45NDExTDgzLjc5OSA4OC4wNDE2QzgyLjYyNzQgODYuODcwMSA4Mi42Mjc0IDg0Ljk3MDYgODMuNzk5IDgzLjc5OUM4NC45NzA2IDgyLjYyNzQgODYuODcwMSA4Mi42Mjc0IDg4LjA0MTYgODMuNzk5TDk3Ljk0MTEgOTMuNjk4NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTYxIDk1QzYxIDkzLjM0MzEgNjIuMzQzMSA5MiA2NCA5MkM2NS42NTY4IDkyIDY3IDkzLjM0MzEgNjcgOTVWMTA5QzY3IDExMC42NTcgNjUuNjU2OCAxMTIgNjQgMTEyQzYyLjM0MzEgMTEyIDYxIDExMC42NTcgNjEgMTA5Vjk1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzkuOTU4NCA4My43OTlDNDEuMTI5OSA4Mi42Mjc0IDQzLjAyOTQgODIuNjI3NCA0NC4yMDEgODMuNzk5QzQ1LjM3MjYgODQuOTcwNiA0NS4zNzI2IDg2Ljg3MDEgNDQuMjAxIDg4LjA0MTZMMzQuMzAxNSA5Ny45NDExQzMzLjEyOTkgOTkuMTEyNyAzMS4yMzA0IDk5LjExMjcgMzAuMDU4OSA5Ny45NDExQzI4Ljg4NzMgOTYuNzY5NiAyOC44ODczIDk0Ljg3IDMwLjA1ODkgOTMuNjk4NUwzOS45NTg0IDgzLjc5OVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTMzIDYxQzM0LjY1NjkgNjEgMzYgNjIuMzQzMSAzNiA2NEMzNiA2NS42NTY4IDM0LjY1NjkgNjcgMzMgNjdIMTlDMTcuMzQzMSA2NyAxNiA2NS42NTY4IDE2IDY0QzE2IDYyLjM0MzEgMTcuMzQzMSA2MSAxOSA2MUgzM1oiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTQ0LjIwMSAzOS45NTg0QzQ1LjM3MjYgNDEuMTI5OSA0NS4zNzI2IDQzLjAyOTQgNDQuMjAxIDQ0LjIwMUM0My4wMjk0IDQ1LjM3MjYgNDEuMTI5OSA0NS4zNzI2IDM5Ljk1ODQgNDQuMjAxTDMwLjA1ODkgMzQuMzAxNUMyOC44ODczIDMzLjEyOTkgMjguODg3MyAzMS4yMzA1IDMwLjA1ODkgMzAuMDU4OUMzMS4yMzA1IDI4Ljg4NzMgMzMuMTI5OSAyOC44ODczIDM0LjMwMTUgMzAuMDU4OUw0NC4yMDEgMzkuOTU4NFoiIGZpbGw9IiNGOEFGMTgiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA2NC4wIDY0LjA7MzYwIDY0LjAgNjQuMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTgwMl81MTg2IiB4MT0iNjQiIHkxPSI0My45OTk5IiB4Mj0iNjQiIHkyPSI4My45OTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQkJGMjQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjhBRjE4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+","clear-night":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsZWFyLW5pZ2h0Ij4KPGcgaWQ9Ik1vb24iPgo8cGF0aCBpZD0iTW9vbl8yIiBkPSJNNjAuMzAxOCAzMi41ODJDNTUuMjgxNyA1My42OTk5IDczLjYwMDEgNzQuMzQ3NyA5NS4zMjUyIDcyLjUxNDZDOTEuNTE5MyA4NS43NzAyIDc5LjE5ODYgOTUuNDk5OCA2NC41MzYxIDk1LjVDNDYuODM3NSA5NS41IDMyLjUwMDEgODEuMzQ0NCAzMi41IDYzLjg5ODRDMzIuNSA0Ny44Njg4IDQ0LjYwNjYgMzQuNjI3OCA2MC4zMDE4IDMyLjU4MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODM3XzUwODApIiBzdHJva2U9IiM3MkI5RDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSItNiA2My45IDY0LjA7NiA2My45IDY0LjA7LTYgNjMuOSA2NC4wIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODM3XzUwODAiIHgxPSI2NCIgeTE9IjMyIiB4Mj0iNjQiIHkyPSI5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODZDM0RCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcyQjlENSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==",cloudy:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsb3VkeSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfODE0NCkiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyMyA0OC40NzQ2QzYwLjEyMjcgNDAuNjExMSA3MC4yOTc1IDM3LjM4IDc4LjgxNTEgNDAuOTQzNEM4Ny4zMjE0IDQ0LjUwMjMgOTIuMTM4IDU0LjAwMjYgODkuOTAzIDYyLjk2NDhMODkuNzQxOCA2My42MTQzTDkwLjQxMDggNjMuNTg1Qzk3LjQyMDMgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE3IDg4LjQ5OTcgOTAuOTc3MiA4OC41SDM3Ljk1MzdDMzEuMTI3NSA4OC41MDE4IDI1LjIwMjkgODMuMTcwOSAyNC41NTkyIDc2LjM2MDRDMjMuOTE1OCA2OS41NTE4IDI4LjczNjkgNjMuMjEyNCAzNS40NDMgNjEuOTQ1M0wzNS45MjY0IDYxLjg1MzVMMzUuODQyNCA2MS4zNjkxQzM1LjAyNTYgNTYuNjIzOSAzNy4xMjU4IDUxLjcxNjggNDEuMTA1MSA0OS4wMTI3QzQ1LjA5NTEgNDYuMzAxNCA1MC40NDU5IDQ2LjE1MzcgNTQuNTc5NyA0OC42Mzk2TDU1LjAwMjYgNDguODk0NUw1NS4yNjIzIDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF84MTQ0KSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF84MTQ0IiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MTQ0Ij4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",drizzle:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImRyaXp6bGUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg1MTIpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODUxMikiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iUmFpbmRyb3BzIj4KPHBhdGggaWQ9IlJhaW5kcm9wIDEiIGQ9Ik01MiA4N1Y5MCIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAyIiBkPSJNNjQgODdWOTAiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDMiIGQ9Ik03NiA4N1Y5MCIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODUxMiIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODUxMiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",fog:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImZvZyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfOTM3NCkiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyMyA0OC40NzQ2QzYwLjEyMjcgNDAuNjExMSA3MC4yOTc1IDM3LjM4IDc4LjgxNTEgNDAuOTQzNEM4Ny4zMjE0IDQ0LjUwMjMgOTIuMTM4IDU0LjAwMjYgODkuOTAzIDYyLjk2NDhMODkuNzQxOCA2My42MTQzTDkwLjQxMDggNjMuNTg1Qzk3LjQyMDMgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE3IDg4LjQ5OTcgOTAuOTc3MiA4OC41SDM3Ljk1MzdDMzEuMTI3NSA4OC41MDE4IDI1LjIwMjkgODMuMTcwOSAyNC41NTkyIDc2LjM2MDRDMjMuOTE1OCA2OS41NTE4IDI4LjczNjkgNjMuMjEyNCAzNS40NDMgNjEuOTQ1M0wzNS45MjY0IDYxLjg1MzVMMzUuODQyNCA2MS4zNjkxQzM1LjAyNTYgNTYuNjIzOSAzNy4xMjU4IDUxLjcxNjggNDEuMTA1MSA0OS4wMTI3QzQ1LjA5NTEgNDYuMzAxNCA1MC40NDU5IDQ2LjE1MzcgNTQuNTc5NyA0OC42Mzk2TDU1LjAwMjYgNDguODk0NUw1NS4yNjIzIDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF85Mzc0KSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iUHJlY2lwaXRhdGlvbiI+CjxwYXRoIGlkPSJMaW5lIDIiIGQ9Ik00MCA5NUg4OCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MyAwOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iTGluZSAxIiBkPSJNNDAgMTAzSDg4IiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDszIDA7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85Mzc0IiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85Mzc0Ij4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",hail:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImhhaWwiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg3MTgpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODcxOCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iSWNlIGJhbGxzIj4KPHBhdGggaWQ9IkljZSBCYWxsIDEiIGQ9Ik01MiA4NkM1MS40MDY3IDg2IDUwLjgyNjYgODYuMTc1OSA1MC4zMzMzIDg2LjUwNTZDNDkuODM5OSA4Ni44MzUyIDQ5LjQ1NTQgODcuMzAzOCA0OS4yMjgzIDg3Ljg1MkM0OS4wMDEzIDg4LjQwMDEgNDguOTQxOSA4OS4wMDMzIDQ5LjA1NzcgODkuNTg1M0M0OS4xNzM0IDkwLjE2NzIgNDkuNDU5MSA5MC43MDE4IDQ5Ljg3ODcgOTEuMTIxM0M1MC4yOTgzIDkxLjU0MDkgNTAuODMyOSA5MS44MjY2IDUxLjQxNDggOTEuOTQyNEM1MS45OTY4IDkyLjA1ODEgNTIuNTk5OCA5MS45OTg3IDUzLjE0OCA5MS43NzE2QzUzLjY5NjEgOTEuNTQ0NiA1NC4xNjQ3IDkxLjE2MDEgNTQuNDk0NCA5MC42NjY3QzU0LjgyNCA5MC4xNzM0IDU1IDg5LjU5MzMgNTUgODlDNTUgODguMjA0NCA1NC42ODM5IDg3LjQ0MTMgNTQuMTIxMyA4Ni44Nzg3QzUzLjU1ODcgODYuMzE2MSA1Mi43OTU3IDg2IDUyIDg2WiIgZmlsbD0iIzg2QzNEQiI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJJY2UgQmFsbCAyIiBkPSJNNjQgODZDNjMuNDA2NyA4NiA2Mi44MjY2IDg2LjE3NTkgNjIuMzMzMyA4Ni41MDU2QzYxLjgzOTkgODYuODM1MiA2MS40NTU0IDg3LjMwMzggNjEuMjI4MyA4Ny44NTJDNjEuMDAxMyA4OC40MDAxIDYwLjk0MTkgODkuMDAzMyA2MS4wNTc3IDg5LjU4NTNDNjEuMTczNCA5MC4xNjcyIDYxLjQ1OTEgOTAuNzAxOCA2MS44Nzg3IDkxLjEyMTNDNjIuMjk4MyA5MS41NDA5IDYyLjgzMjkgOTEuODI2NiA2My40MTQ4IDkxLjk0MjRDNjMuOTk2OCA5Mi4wNTgxIDY0LjU5OTggOTEuOTk4NyA2NS4xNDggOTEuNzcxNkM2NS42OTYxIDkxLjU0NDYgNjYuMTY0NyA5MS4xNjAxIDY2LjQ5NDQgOTAuNjY2N0M2Ni44MjQgOTAuMTczNCA2NyA4OS41OTMzIDY3IDg5QzY3IDg4LjIwNDQgNjYuNjgzOSA4Ny40NDEzIDY2LjEyMTMgODYuODc4N0M2NS41NTg3IDg2LjMxNjEgNjQuNzk1NyA4NiA2NCA4NloiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IkljZSBCYWxsIDMiIGQ9Ik03NiA4NkM3NS40MDY3IDg2IDc0LjgyNjYgODYuMTc1OSA3NC4zMzMzIDg2LjUwNTZDNzMuODM5OSA4Ni44MzUyIDczLjQ1NTQgODcuMzAzOCA3My4yMjgzIDg3Ljg1MkM3My4wMDEzIDg4LjQwMDEgNzIuOTQxOSA4OS4wMDMzIDczLjA1NzcgODkuNTg1M0M3My4xNzM0IDkwLjE2NzIgNzMuNDU5MSA5MC43MDE4IDczLjg3ODcgOTEuMTIxM0M3NC4yOTgzIDkxLjU0MDkgNzQuODMyOSA5MS44MjY2IDc1LjQxNDggOTEuOTQyNEM3NS45OTY4IDkyLjA1ODEgNzYuNTk5OCA5MS45OTg3IDc3LjE0OCA5MS43NzE2Qzc3LjY5NjEgOTEuNTQ0NiA3OC4xNjQ3IDkxLjE2MDEgNzguNDk0NCA5MC42NjY3Qzc4LjgyNCA5MC4xNzM0IDc5IDg5LjU5MzMgNzkgODlDNzkgODguMjA0NCA3OC42ODM5IDg3LjQ0MTMgNzguMTIxMyA4Ni44Nzg3Qzc3LjU1ODcgODYuMzE2MSA3Ni43OTU3IDg2IDc2IDg2WiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODcxOCIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODcxOCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==","not-available":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Im5vdC1hdmFpbGFibGUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzc1MzYpIj4KPGcgaWQ9IlRleHQiIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODU4Xzc1MzYpIj4KPHBhdGggaWQ9IlRleHRfMiIgZD0iTTQ2Ljg1MzEgNjYuMTY2VjUyLjUwNEg1Mi45MjUyVjc2SDQ2Ljc1NDFMMzguNjAzMSA2Mi40MDRWNzZIMzIuNDk4MVY1Mi41MDRIMzguNjAzMUw0Ni44NTMxIDY2LjE2NlpNNjEuOTM4OCA3Nkg1NS45OTg4TDY1Ljc2NjggNTIuNTA0SDcxLjcwNjhMNjEuOTM4OCA3NlpNOTYuODkwMiA3Nkg5MC4zODkyTDg5LjA2OTIgNzEuOTc0SDgxLjE0OTJMNzkuODI5MiA3Nkg3My4zNjEyTDgxLjk0MTIgNTIuNTA0SDg4LjQ0MjJMOTYuODkwMiA3NlpNODMuNjkwMiA2NC4yNTJMODIuNjM0MiA2Ny40NTNIODcuNjE3Mkw4Ni41NjEyIDY0LjI1Mkw4NS4xMDkyIDU5LjMzNUw4My42OTAyIDY0LjI1MloiIGZpbGw9IiMyMDI5MzkiLz4KPC9nPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfNzUzNiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXAxXzE4NThfNzUzNiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=","partly-cloudy-day":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBhcnRseS1jbG91ZHktZGF5IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg1OF84MjQxKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjM5IiBjeT0iNTEiIHI9IjguNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODI0MSkiIHN0cm9rZT0iI0Y4QUYxOCIvPgo8ZyBpZD0iUmF5cyI+CjxwYXRoIGQ9Ik0zNy42ODc1IDMxLjMxMjVDMzcuNjg3NSAzMC41ODc2IDM4LjI3NTEgMzAgMzkgMzBDMzkuNzI0OSAzMCA0MC4zMTI1IDMwLjU4NzYgNDAuMzEyNSAzMS4zMTI1VjM3LjQzNzVDNDAuMzEyNSAzOC4xNjI0IDM5LjcyNDkgMzguNzUgMzkgMzguNzVDMzguMjc1MSAzOC43NSAzNy42ODc1IDM4LjE2MjQgMzcuNjg3NSAzNy40Mzc1VjMxLjMxMjVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik01MS45OTMxIDM2LjE1MDhDNTIuNTA1NiAzNS42MzgyIDUzLjMzNjcgMzUuNjM4MiA1My44NDkyIDM2LjE1MDhDNTQuMzYxOCAzNi42NjMzIDU0LjM2MTggMzcuNDk0MyA1My44NDkyIDM4LjAwNjlMNDkuNTE4MiA0Mi4zMzc5QzQ5LjAwNTYgNDIuODUwNSA0OC4xNzQ2IDQyLjg1MDUgNDcuNjYyMSA0Mi4zMzc5QzQ3LjE0OTUgNDEuODI1NCA0Ny4xNDk1IDQwLjk5NDQgNDcuNjYyMSA0MC40ODE4TDUxLjk5MzEgMzYuMTUwOFoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTU4LjY4NzUgNDkuNjg3NUM1OS40MTI0IDQ5LjY4NzUgNjAgNTAuMjc1MSA2MCA1MUM2MCA1MS43MjQ5IDU5LjQxMjQgNTIuMzEyNSA1OC42ODc1IDUyLjMxMjVINTIuNTYyNUM1MS44Mzc2IDUyLjMxMjUgNTEuMjUgNTEuNzI0OSA1MS4yNSA1MUM1MS4yNSA1MC4yNzUxIDUxLjgzNzYgNDkuNjg3NSA1Mi41NjI1IDQ5LjY4NzVINTguNjg3NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTUzLjg0OTIgNjMuOTkzMUM1NC4zNjE4IDY0LjUwNTcgNTQuMzYxOCA2NS4zMzY3IDUzLjg0OTIgNjUuODQ5MkM1My4zMzY3IDY2LjM2MTggNTIuNTA1NiA2Ni4zNjE4IDUxLjk5MzEgNjUuODQ5Mkw0Ny42NjIxIDYxLjUxODJDNDcuMTQ5NSA2MS4wMDU3IDQ3LjE0OTUgNjAuMTc0NiA0Ny42NjIxIDU5LjY2MjFDNDguMTc0NiA1OS4xNDk1IDQ5LjAwNTcgNTkuMTQ5NSA0OS41MTgyIDU5LjY2MjFMNTMuODQ5MiA2My45OTMxWiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzcuNjg3NSA2NC41NjI1QzM3LjY4NzUgNjMuODM3NiAzOC4yNzUxIDYzLjI1IDM5IDYzLjI1QzM5LjcyNDkgNjMuMjUgNDAuMzEyNSA2My44Mzc2IDQwLjMxMjUgNjQuNTYyNVY3MC42ODc1QzQwLjMxMjUgNzEuNDEyNCAzOS43MjQ5IDcyIDM5IDcyQzM4LjI3NTEgNzIgMzcuNjg3NSA3MS40MTI0IDM3LjY4NzUgNzAuNjg3NVY2NC41NjI1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMjguNDgxOCA1OS42NjIxQzI4Ljk5NDMgNTkuMTQ5NSAyOS44MjU0IDU5LjE0OTUgMzAuMzM3OSA1OS42NjIxQzMwLjg1MDUgNjAuMTc0NiAzMC44NTA1IDYxLjAwNTYgMzAuMzM3OSA2MS41MTgyTDI2LjAwNjkgNjUuODQ5MkMyNS40OTQzIDY2LjM2MTggMjQuNjYzMyA2Ni4zNjE4IDI0LjE1MDggNjUuODQ5MkMyMy42MzgyIDY1LjMzNjcgMjMuNjM4MiA2NC41MDU2IDI0LjE1MDggNjMuOTkzMUwyOC40ODE4IDU5LjY2MjFaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0yNS40Mzc1IDQ5LjY4NzVDMjYuMTYyNCA0OS42ODc1IDI2Ljc1IDUwLjI3NTEgMjYuNzUgNTFDMjYuNzUgNTEuNzI0OSAyNi4xNjI0IDUyLjMxMjUgMjUuNDM3NSA1Mi4zMTI1SDE5LjMxMjVDMTguNTg3NiA1Mi4zMTI1IDE4IDUxLjcyNDkgMTggNTFDMTggNTAuMjc1MSAxOC41ODc2IDQ5LjY4NzUgMTkuMzEyNSA0OS42ODc1SDI1LjQzNzVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zMC4zMzc5IDQwLjQ4MThDMzAuODUwNSA0MC45OTQ0IDMwLjg1MDUgNDEuODI1NCAzMC4zMzc5IDQyLjMzNzlDMjkuODI1NCA0Mi44NTA1IDI4Ljk5NDQgNDIuODUwNSAyOC40ODE4IDQyLjMzNzlMMjQuMTUwOCAzOC4wMDY5QzIzLjYzODIgMzcuNDk0NCAyMy42MzgyIDM2LjY2MzMgMjQuMTUwOCAzNi4xNTA4QzI0LjY2MzMgMzUuNjM4MiAyNS40OTQ0IDM1LjYzODIgMjYuMDA2OSAzNi4xNTA4TDMwLjMzNzkgNDAuNDgxOFoiIGZpbGw9IiNGOEFGMTgiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCAzOS4wIDUxLjA7MzYwIDM5LjAgNTEuMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvZz4KPC9nPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4XzgyNDEpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzgyNDEiIHgxPSIzOSIgeTE9IjQyIiB4Mj0iMzkiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4QUYxOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF84MjQxIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MjQxIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","partly-cloudy-night":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBhcnRseS1jbG91ZHktbmlnaHQiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4XzgyNTIpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJNb29uIj4KPHBhdGggaWQ9Ik1vb25fMiIgZD0iTTM1LjExNTIgMzQuNTk0N0MzMy4zNzc3IDQzLjE2MjUgNDAuNzUzMiA1MS4yMTQxIDQ5LjMxMzUgNTAuNzgzMkM0Ny42NzMyIDU1LjgzMzggNDIuODg5MSA1OS40OTk5IDM3LjIxNzggNTkuNUMzMC4xODggNTkuNSAyNC41MDAyIDUzLjg3ODYgMjQuNSA0Ni45NTlDMjQuNSA0MC43NDUxIDI5LjA4NzkgMzUuNTgzOCAzNS4xMTUyIDM0LjU5NDdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF84MjUyKSIgc3Ryb2tlPSIjNzJCOUQ1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iLTYgMzYuOSA0Ny4wOzYgMzYuOSA0Ny4wOy02IDM2LjkgNDcuMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4XzgyNTIpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzgyNTIiIHgxPSIzNyIgeTE9IjM0IiB4Mj0iMzciIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODZDM0RCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcyQjlENSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF84MjUyIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MjUyIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","pressure-high":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InByZXNzdXJlLWhpZ2giPgo8ZyBpZD0iQXJyb3dzIj4KPHBhdGggaWQ9IkFycm93IDMiIGQ9Ik03MC42Njc4IDc2Ljk5NzRDNzAuMzE3NSA3Ni45OTkxIDY5Ljk4IDc2Ljg1OTkgNjkuNzI1MyA3Ni42MDg2TDY0LjAwMTIgNzAuOTE2Mkw1OC4yNzYxIDc2LjYxMTRDNTguMDIwNCA3Ni44NjEyIDU3LjY4MzQgNzcuMDAwMiA1Ny4zMzMzIDc3LjAwMDJDNTYuOTgzMiA3Ny4wMDAyIDU2LjY0NjIgNzYuODYxMiA1Ni4zOTA1IDc2LjYxMTRDNTYuMjY3MyA3Ni40OTE0IDU2LjE2OSA3Ni4zNDYzIDU2LjEwMTkgNzYuMTg0OUM1Ni4wMzQ3IDc2LjAyMzYgNTYgNzUuODQ5NSA1NiA3NS42NzM1QzU2IDc1LjQ5NzYgNTYuMDM0NyA3NS4zMjM1IDU2LjEwMTkgNzUuMTYyMkM1Ni4xNjkgNzUuMDAwOCA1Ni4yNjczIDc0Ljg1NTYgNTYuMzkwNSA3NC43MzU3TDYzLjA1NzEgNjguMTAzMkM2My4zMTI4IDY3Ljg1MzQgNjMuNjQ5OSA2Ny43MTQ0IDY0IDY3LjcxNDRDNjQuMzUwMSA2Ny43MTQ0IDY0LjY4NzEgNjcuODUzNCA2NC45NDI4IDY4LjEwMzJMNzEuNjA5NCA3NC43MzU3QzcxLjczMjcgNzQuODU1NiA3MS44MzA5IDc1LjAwMDggNzEuODk4MSA3NS4xNjIyQzcxLjk2NTMgNzUuMzIzNSA3MS45OTk5IDc1LjQ5NzYgNzEuOTk5OSA3NS42NzM1QzcxLjk5OTkgNzUuODQ5NSA3MS45NjUzIDc2LjAyMzYgNzEuODk4MSA3Ni4xODQ5QzcxLjgzMDkgNzYuMzQ2MyA3MS43MzI3IDc2LjQ5MTQgNzEuNjA5NCA3Ni42MTE0QzcxLjM1NDYgNzYuODYxNSA3MS4wMTc1IDc2Ljk5OTYgNzAuNjY3OCA3Ni45OTc0WiIgZmlsbD0iI0VGNDQ0NCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTQ7MCAwIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAyIiBkPSJNNzAuNjY3OCA2OC42NDAyQzcwLjMxNzUgNjguNjQyIDY5Ljk4IDY4LjUwMjcgNjkuNzI1MyA2OC4yNTE0TDY0LjAwMTIgNjIuNTU5TDU4LjI3NjEgNjguMjU0MkM1OC4wMjA0IDY4LjUwNDEgNTcuNjgzNCA2OC42NDMxIDU3LjMzMzMgNjguNjQzMUM1Ni45ODMyIDY4LjY0MzEgNTYuNjQ2MiA2OC41MDQxIDU2LjM5MDUgNjguMjU0MkM1Ni4yNjczIDY4LjEzNDIgNTYuMTY5IDY3Ljk4OTEgNTYuMTAxOSA2Ny44Mjc3QzU2LjAzNDcgNjcuNjY2NCA1NiA2Ny40OTIzIDU2IDY3LjMxNjRDNTYgNjcuMTQwNCA1Ni4wMzQ3IDY2Ljk2NjMgNTYuMTAxOSA2Ni44MDVDNTYuMTY5IDY2LjY0MzcgNTYuMjY3MyA2Ni40OTg1IDU2LjM5MDUgNjYuMzc4NUw2My4wNTcxIDU5Ljc0NkM2My4zMTI4IDU5LjQ5NjIgNjMuNjQ5OSA1OS4zNTcyIDY0IDU5LjM1NzJDNjQuMzUwMSA1OS4zNTcyIDY0LjY4NzEgNTkuNDk2MiA2NC45NDI4IDU5Ljc0Nkw3MS42MDk0IDY2LjM3ODVDNzEuNzMyNyA2Ni40OTg1IDcxLjgzMDkgNjYuNjQzNyA3MS44OTgxIDY2LjgwNUM3MS45NjUzIDY2Ljk2NjMgNzEuOTk5OSA2Ny4xNDA0IDcxLjk5OTkgNjcuMzE2NEM3MS45OTk5IDY3LjQ5MjMgNzEuOTY1MyA2Ny42NjY0IDcxLjg5ODEgNjcuODI3N0M3MS44MzA5IDY3Ljk4OTEgNzEuNzMyNyA2OC4xMzQyIDcxLjYwOTQgNjguMjU0MkM3MS4zNTQ2IDY4LjUwNDMgNzEuMDE3NSA2OC42NDI1IDcwLjY2NzggNjguNjQwMloiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAxIiBkPSJNNzAuNjY3OCA2MC4yODNDNzAuMzE3NSA2MC4yODQ4IDY5Ljk4IDYwLjE0NTYgNjkuNzI1MyA1OS44OTQzTDY0LjAwMTIgNTQuMjAxOEw1OC4yNzYxIDU5Ljg5N0M1OC4wMjA0IDYwLjE0NjkgNTcuNjgzNCA2MC4yODU5IDU3LjMzMzMgNjAuMjg1OUM1Ni45ODMyIDYwLjI4NTkgNTYuNjQ2MiA2MC4xNDY5IDU2LjM5MDUgNTkuODk3QzU2LjI2NzMgNTkuNzc3MSA1Ni4xNjkgNTkuNjMxOSA1Ni4xMDE5IDU5LjQ3MDZDNTYuMDM0NyA1OS4zMDkyIDU2IDU5LjEzNTEgNTYgNTguOTU5MkM1NiA1OC43ODMyIDU2LjAzNDcgNTguNjA5MiA1Ni4xMDE5IDU4LjQ0NzhDNTYuMTY5IDU4LjI4NjUgNTYuMjY3MyA1OC4xNDEzIDU2LjM5MDUgNTguMDIxM0w2My4wNTcxIDUxLjM4ODlDNjMuMzEyOCA1MS4xMzkgNjMuNjQ5OSA1MSA2NCA1MUM2NC4zNTAxIDUxIDY0LjY4NzEgNTEuMTM5IDY0Ljk0MjggNTEuMzg4OUw3MS42MDk0IDU4LjAyMTNDNzEuNzMyNyA1OC4xNDEzIDcxLjgzMDkgNTguMjg2NSA3MS44OTgxIDU4LjQ0NzhDNzEuOTY1MyA1OC42MDkyIDcxLjk5OTkgNTguNzgzMiA3MS45OTk5IDU4Ljk1OTJDNzEuOTk5OSA1OS4xMzUxIDcxLjk2NTMgNTkuMzA5MiA3MS44OTgxIDU5LjQ3MDZDNzEuODMwOSA1OS42MzE5IDcxLjczMjcgNTkuNzc3MSA3MS42MDk0IDU5Ljg5N0M3MS4zNTQ2IDYwLjE0NzEgNzEuMDE3NSA2MC4yODUzIDcwLjY2NzggNjAuMjgzWiIgZmlsbD0iI0VGNDQ0NCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTQ7MCAwIiBkdXI9IjJzIiBiZWdpbj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvcGF0aD4KPC9nPgo8L2c+Cjwvc3ZnPg==",rain:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW4iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4XzgzNzApIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODM3MCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iUmFpbmRyb3BzIj4KPHBhdGggaWQ9IlJhaW5kcm9wIDEiIGQ9Ik01MiA4M1Y5NSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAyIiBkPSJNNjQgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDMiIGQ9Ik03NiA4M1Y5NSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODM3MCIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODM3MCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",raindrop:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW5kcm9wIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuNSw2NC4yKSI+PGcgaWQ9IlJhaW5kcm9wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQuNSwtNjQuMikiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNNjQuNSAzNC45MDcyQzcwLjI1MTggNDMuNjE0MiA3NC45NjEzIDUwLjcwNDYgNzguMjU4OCA1Ni45NTUxQzgxLjYzMzkgNjMuMzUyNyA4My41IDY4LjgxNzggODMuNSA3NC4xNzQ4QzgzLjUgODQuODU2NSA3NC45ODk4IDkzLjUgNjQuNSA5My41QzU0LjAxMDYgOTMuNSA0NS41IDg0LjgzMiA0NS41IDc0LjE3NDhDNDUuNSA2OC44MzA1IDQ3LjM2NiA2My4zNzE1IDUwLjc0MTIgNTYuOTczNkM1NC4wMzg4IDUwLjcyMyA1OC43NDgxIDQzLjYyNjMgNjQuNSAzNC45MDcyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfMjM0KSIgc3Ryb2tlPSIjMUQ0RUQ4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIHZhbHVlcz0iMSAxOzEuMSAxLjE7MSAxIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiIGFkZGl0aXZlPSJzdW0iLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzIzNCIgeDE9IjY0LjUiIHkxPSIzNCIgeDI9IjY0LjUiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMjU2M0VCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFENEVEOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==",raindrops:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW5kcm9wcyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjUsNjQuMikiPjxnIGlkPSJSYWluZHJvcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0LjUsLTY0LjIpIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTU0LjUgMzQuOTA3MkM2MC4yNTE4IDQzLjYxNDIgNjQuOTYxMyA1MC43MDQ2IDY4LjI1ODggNTYuOTU1MUM3MS42MzM5IDYzLjM1MjcgNzMuNSA2OC44MTc4IDczLjUgNzQuMTc0OEM3My41IDg0Ljg1NjUgNjQuOTg5OCA5My41IDU0LjUgOTMuNUM0NC4wMTA2IDkzLjUgMzUuNSA4NC44MzIgMzUuNSA3NC4xNzQ4QzM1LjUgNjguODMwNSAzNy4zNjYgNjMuMzcxNSA0MC43NDEyIDU2Ljk3MzZDNDQuMDM4OCA1MC43MjMgNDguNzQ4MSA0My42MjYzIDU0LjUgMzQuOTA3MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4XzI1NCkiIHN0cm9rZT0iIzFENEVEOCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiB2YWx1ZXM9IjEgMTsxLjEgMS4xOzEgMSIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIiBhZGRpdGl2ZT0ic3VtIi8+PC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NC41LDY0LjIpIj48ZyBpZD0iUmFpbmRyb3BfMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0LjUsLTY0LjIpIj4KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNNzQuNSAzNC45MDcyQzgwLjI1MTggNDMuNjE0MiA4NC45NjEzIDUwLjcwNDYgODguMjU4OCA1Ni45NTUxQzkxLjYzMzkgNjMuMzUyNyA5My41IDY4LjgxNzggOTMuNSA3NC4xNzQ4QzkzLjUgODQuODU2NSA4NC45ODk4IDkzLjUgNzQuNSA5My41QzY0LjAxMDYgOTMuNSA1NS41IDg0LjgzMiA1NS41IDc0LjE3NDhDNTUuNSA2OC44MzA1IDU3LjM2NiA2My4zNzE1IDYwLjc0MTIgNTYuOTczNkM2NC4wMzg4IDUwLjcyMyA2OC43NDgxIDQzLjYyNjMgNzQuNSAzNC45MDcyWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE4NThfMjU0KSIgc3Ryb2tlPSIjMUQ0RUQ4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIHZhbHVlcz0iMSAxOzEuMSAxLjE7MSAxIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiIGFkZGl0aXZlPSJzdW0iLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzI1NCIgeDE9IjU0LjUiIHkxPSIzNCIgeDI9IjU0LjUiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMjU2M0VCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFENEVEOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF8yNTQiIHgxPSI3NC41IiB5MT0iMzQiIHgyPSI3NC41IiB5Mj0iOTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI1NjNFQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRDRFRDgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=",sleet:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InNsZWV0IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg1OF85MDkwKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4XzkwOTApIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjxnIGlkPSJQcmVjaXBpdGF0aW9uIj4KPGcgaWQ9IlNub3dmbGFrZXMiPgo8cGF0aCBpZD0iU25vd2ZsYWtlIDEiIGQ9Ik01Mi41NzgxIDkwLjM2Nkw1MS4zNzM1IDg5LjY3NzVDNTEuNDc5NCA4OS4yMzI2IDUxLjQ3ODYgODguNzY4NyA1MS4zNzA4IDg4LjMyNDFMNTIuNTc4MSA4Ny42MzQ1QzUyLjY3MzggODcuNTgwNSA1Mi43NTc3IDg3LjUwNzkgNTIuODI1MiA4Ny40MjFDNTIuODkyNiA4Ny4zMzQyIDUyLjk0MjMgODcuMjM0NyA1Mi45NzExIDg3LjEyODRDNTIuOTk5OCA4Ny4wMjIxIDUzLjAwNzEgODYuOTExMiA1Mi45OTI2IDg2LjgwMkM1Mi45NzgyIDg2LjY5MjggNTIuOTQyMiA4Ni41ODc2IDUyLjg4NjggODYuNDkyNkM1Mi43NzMyIDg2LjI5OTggNTIuNTg4NiA4Ni4xNTk3IDUyLjM3MjggODYuMTAyNUM1Mi4xNTcgODYuMDQ1MiA1MS45Mjc2IDg2LjA3NTQgNTEuNzMzOSA4Ni4xODY2TDUwLjUyNzggODYuODc2M0M1MC4xOTMxIDg2LjU1ODYgNDkuNzg2OCA4Ni4zMjY0IDQ5LjM0MzcgODYuMTk5NVY4NC44MjAyQzQ5LjMzNjggODQuNjAwMyA0OS4yNDUgODQuMzkxOCA0OS4wODc1IDg0LjIzODdDNDguOTMgODQuMDg1NiA0OC43MTkyIDg0IDQ4LjQ5OTggODRDNDguMjgwNSA4NCA0OC4wNjk5IDg0LjA4NTYgNDcuOTEyNCA4NC4yMzg3QzQ3Ljc1NDggODQuMzkxOCA0Ny42NjI4IDg0LjYwMDMgNDcuNjU2IDg0LjgyMDJWODYuMTk5NUM0Ny4yMTQgODYuMzI4OSA0Ni44MDgxIDg2LjU1OTggNDYuNDcwNiA4Ni44NzRMNDUuMjY2MiA4Ni4xODUzQzQ1LjA3MjQgODYuMDc0MiA0NC44NDI4IDg2LjA0NCA0NC42MjcgODYuMTAxM0M0NC40MTEzIDg2LjE1ODUgNDQuMjI2NyA4Ni4yOTg2IDQ0LjExMyA4Ni40OTEzQzQ0LjA1NzYgODYuNTg2NCA0NC4wMjE3IDg2LjY5MTYgNDQuMDA3MiA4Ni44MDA3QzQzLjk5MjggODYuOTA5OSA0NCA4Ny4wMjA5IDQ0LjAyODggODcuMTI3MUM0NC4wNTc1IDg3LjIzMzQgNDQuMTA3MiA4Ny4zMzI5IDQ0LjE3NDcgODcuNDE5OEM0NC4yNDIxIDg3LjUwNjcgNDQuMzI2IDg3LjU3OTIgNDQuNDIxNyA4Ny42MzMyTDQ1LjYyNjQgODguMzIxNkM0NS41MjA0IDg4Ljc2NjYgNDUuNTIxMyA4OS4yMzA1IDQ1LjYyOSA4OS42NzVMNDQuNDIxNyA5MC4zNjQ3QzQ0LjMyNiA5MC40MTg3IDQ0LjI0MjEgOTAuNDkxMiA0NC4xNzQ3IDkwLjU3ODFDNDQuMTA3MiA5MC42NjUgNDQuMDU3NSA5MC43NjQ1IDQ0LjAyODggOTAuODcwOEM0NCA5MC45NzcxIDQzLjk5MjggOTEuMDg4IDQ0LjAwNzIgOTEuMTk3MkM0NC4wMjE3IDkxLjMwNjMgNDQuMDU3NiA5MS40MTE1IDQ0LjExMyA5MS41MDY2QzQ0LjIyNjcgOTEuNjk5MiA0NC40MTEzIDkxLjgzOTIgNDQuNjI3IDkxLjg5NjVDNDQuODQyOCA5MS45NTM3IDQ1LjA3MjQgOTEuOTIzNiA0NS4yNjYyIDkxLjgxMjZMNDYuNDcyMSA5MS4xMjI5QzQ2LjgwNjMgOTEuNDQwOSA0Ny4yMTI4IDkxLjY3MjYgNDcuNjU2MiA5MS43OTc5VjkzLjE3OThDNDcuNjYzMSA5My4zOTk3IDQ3Ljc1NSA5My42MDgyIDQ3LjkxMjYgOTMuNzYxM0M0OC4wNzAxIDkzLjkxNDQgNDguMjgwNyA5NCA0OC41IDk0QzQ4LjcxOTQgOTQgNDguOTMwMiA5My45MTQ0IDQ5LjA4NzcgOTMuNzYxM0M0OS4yNDUyIDkzLjYwODIgNDkuMzM3IDkzLjM5OTcgNDkuMzQzOSA5My4xNzk4VjkxLjc5NzVDNDkuNzg1MyA5MS42NjgzIDUwLjE5MDcgOTEuNDM3OCA1MC41Mjc4IDkxLjEyNDJMNTEuNzM0MSA5MS44MTM4QzUxLjkyNzggOTEuOTI0OCA1Mi4xNTczIDkxLjk1NSA1Mi4zNzMgOTEuODk3N0M1Mi41ODg4IDkxLjg0MDUgNTIuNzczMyA5MS43MDA1IDUyLjg4NyA5MS41MDc5QzUyLjk0MjQgOTEuNDEyOCA1Mi45Nzg0IDkxLjMwNzYgNTIuOTkyOCA5MS4xOTg0QzUzLjAwNzMgOTEuMDg5MiA1Mi45OTk4IDkwLjk3ODMgNTIuOTcxMSA5MC44NzJDNTIuOTQyMyA5MC43NjU3IDUyLjg5MjkgOTAuNjY2MiA1Mi44MjU0IDkwLjU3OTNDNTIuNzU3OSA5MC40OTI1IDUyLjY3MzggOTAuNDE5OSA1Mi41NzgxIDkwLjM2NlpNNDcuODY2NCA5MC4wODYxQzQ3LjcyMjkgOTAuMDA1IDQ3LjU5NjggODkuODk2MSA0Ny40OTU2IDg5Ljc2NTdDNDcuMzk0NCA4OS42MzUzIDQ3LjMyMDIgODkuNDg2IDQ3LjI3NzEgODkuMzI2NkM0Ny4yMzM5IDg5LjE2NzEgNDcuMjIyOCA4OS4wMDA3IDQ3LjI0NDMgODguODM2OUM0Ny4yNjU4IDg4LjY3MzEgNDcuMzE5NyA4OC41MTUyIDQ3LjQwMjYgODguMzcyNEM0Ny41NzM1IDg4LjA4NCA0Ny44NTAzIDg3Ljg3NDMgNDguMTczNiA4Ny43ODgzQzQ4LjQ5NyA4Ny43MDIzIDQ4Ljg0MTEgODcuNzQ3IDQ5LjEzMjEgODcuOTEyNkM0OS4yNzU2IDg3Ljk5MzggNDkuNDAxNiA4OC4xMDI3IDQ5LjUwMjggODguMjMzMUM0OS42MDQgODguMzYzNSA0OS42NzgyIDg4LjUxMjcgNDkuNzIxNCA4OC42NzIyQzQ5Ljc2NDUgODguODMxNiA0OS43NzU3IDg4Ljk5ODEgNDkuNzU0MSA4OS4xNjE5QzQ5LjczMjYgODkuMzI1NyA0OS42Nzg3IDg5LjQ4MzYgNDkuNTk1OCA4OS42MjYzQzQ5LjQyNSA4OS45MTQ5IDQ5LjE0ODIgOTAuMTI0NyA0OC44MjQ4IDkwLjIxMDhDNDguNTAxNCA5MC4yOTY5IDQ4LjE1NzQgOTAuMjUyMyA0Ny44NjY0IDkwLjA4NjdWOTAuMDg2MVoiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlNub3dmbGFrZSAyIiBkPSJNNjcuNTc4MSA5MC4zNjZMNjYuMzczNSA4OS42Nzc1QzY2LjQ3OTQgODkuMjMyNiA2Ni40Nzg2IDg4Ljc2ODcgNjYuMzcwOCA4OC4zMjQxTDY3LjU3ODEgODcuNjM0NUM2Ny42NzM4IDg3LjU4MDUgNjcuNzU3NyA4Ny41MDc5IDY3LjgyNTIgODcuNDIxQzY3Ljg5MjYgODcuMzM0MiA2Ny45NDIzIDg3LjIzNDcgNjcuOTcxMSA4Ny4xMjg0QzY3Ljk5OTggODcuMDIyMSA2OC4wMDcxIDg2LjkxMTIgNjcuOTkyNiA4Ni44MDJDNjcuOTc4MiA4Ni42OTI4IDY3Ljk0MjIgODYuNTg3NiA2Ny44ODY4IDg2LjQ5MjZDNjcuNzczMiA4Ni4yOTk4IDY3LjU4ODYgODYuMTU5NyA2Ny4zNzI4IDg2LjEwMjVDNjcuMTU3IDg2LjA0NTIgNjYuOTI3NiA4Ni4wNzU0IDY2LjczMzkgODYuMTg2Nkw2NS41Mjc4IDg2Ljg3NjNDNjUuMTkzMSA4Ni41NTg2IDY0Ljc4NjggODYuMzI2NCA2NC4zNDM3IDg2LjE5OTVWODQuODIwMkM2NC4zMzY4IDg0LjYwMDMgNjQuMjQ1IDg0LjM5MTggNjQuMDg3NSA4NC4yMzg3QzYzLjkzIDg0LjA4NTYgNjMuNzE5MiA4NCA2My40OTk4IDg0QzYzLjI4MDUgODQgNjMuMDY5OSA4NC4wODU2IDYyLjkxMjQgODQuMjM4N0M2Mi43NTQ4IDg0LjM5MTggNjIuNjYyOCA4NC42MDAzIDYyLjY1NiA4NC44MjAyVjg2LjE5OTVDNjIuMjE0IDg2LjMyODkgNjEuODA4MSA4Ni41NTk4IDYxLjQ3MDYgODYuODc0TDYwLjI2NjIgODYuMTg1M0M2MC4wNzI0IDg2LjA3NDIgNTkuODQyOCA4Ni4wNDQgNTkuNjI3IDg2LjEwMTNDNTkuNDExMyA4Ni4xNTg1IDU5LjIyNjcgODYuMjk4NiA1OS4xMTMgODYuNDkxM0M1OS4wNTc2IDg2LjU4NjQgNTkuMDIxNyA4Ni42OTE2IDU5LjAwNzIgODYuODAwN0M1OC45OTI4IDg2LjkwOTkgNTkgODcuMDIwOSA1OS4wMjg4IDg3LjEyNzFDNTkuMDU3NSA4Ny4yMzM0IDU5LjEwNzIgODcuMzMyOSA1OS4xNzQ3IDg3LjQxOThDNTkuMjQyMSA4Ny41MDY3IDU5LjMyNiA4Ny41NzkyIDU5LjQyMTcgODcuNjMzMkw2MC42MjY0IDg4LjMyMTZDNjAuNTIwNCA4OC43NjY2IDYwLjUyMTMgODkuMjMwNSA2MC42MjkgODkuNjc1TDU5LjQyMTcgOTAuMzY0N0M1OS4zMjYgOTAuNDE4NyA1OS4yNDIxIDkwLjQ5MTIgNTkuMTc0NyA5MC41NzgxQzU5LjEwNzIgOTAuNjY1IDU5LjA1NzUgOTAuNzY0NSA1OS4wMjg4IDkwLjg3MDhDNTkgOTAuOTc3MSA1OC45OTI4IDkxLjA4OCA1OS4wMDcyIDkxLjE5NzJDNTkuMDIxNyA5MS4zMDYzIDU5LjA1NzYgOTEuNDExNSA1OS4xMTMgOTEuNTA2NkM1OS4yMjY3IDkxLjY5OTIgNTkuNDExMyA5MS44MzkyIDU5LjYyNyA5MS44OTY1QzU5Ljg0MjggOTEuOTUzNyA2MC4wNzI0IDkxLjkyMzYgNjAuMjY2MiA5MS44MTI2TDYxLjQ3MjEgOTEuMTIyOUM2MS44MDYzIDkxLjQ0MDkgNjIuMjEyOCA5MS42NzI2IDYyLjY1NjIgOTEuNzk3OVY5My4xNzk4QzYyLjY2MzEgOTMuMzk5NyA2Mi43NTUgOTMuNjA4MiA2Mi45MTI2IDkzLjc2MTNDNjMuMDcwMSA5My45MTQ0IDYzLjI4MDcgOTQgNjMuNSA5NEM2My43MTk0IDk0IDYzLjkzMDIgOTMuOTE0NCA2NC4wODc3IDkzLjc2MTNDNjQuMjQ1MiA5My42MDgyIDY0LjMzNyA5My4zOTk3IDY0LjM0MzkgOTMuMTc5OFY5MS43OTc1QzY0Ljc4NTMgOTEuNjY4MyA2NS4xOTA3IDkxLjQzNzggNjUuNTI3OCA5MS4xMjQyTDY2LjczNDEgOTEuODEzOEM2Ni45Mjc4IDkxLjkyNDggNjcuMTU3MyA5MS45NTUgNjcuMzczIDkxLjg5NzdDNjcuNTg4OCA5MS44NDA1IDY3Ljc3MzMgOTEuNzAwNSA2Ny44ODcgOTEuNTA3OUM2Ny45NDI0IDkxLjQxMjggNjcuOTc4NCA5MS4zMDc2IDY3Ljk5MjggOTEuMTk4NEM2OC4wMDczIDkxLjA4OTIgNjcuOTk5OCA5MC45NzgzIDY3Ljk3MTEgOTAuODcyQzY3Ljk0MjMgOTAuNzY1NyA2Ny44OTI5IDkwLjY2NjIgNjcuODI1NCA5MC41NzkzQzY3Ljc1NzkgOTAuNDkyNSA2Ny42NzM4IDkwLjQxOTkgNjcuNTc4MSA5MC4zNjZaTTYyLjg2NjQgOTAuMDg2MUM2Mi43MjI5IDkwLjAwNSA2Mi41OTY4IDg5Ljg5NjEgNjIuNDk1NiA4OS43NjU3QzYyLjM5NDQgODkuNjM1MyA2Mi4zMjAyIDg5LjQ4NiA2Mi4yNzcxIDg5LjMyNjZDNjIuMjMzOSA4OS4xNjcxIDYyLjIyMjggODkuMDAwNyA2Mi4yNDQzIDg4LjgzNjlDNjIuMjY1OCA4OC42NzMxIDYyLjMxOTcgODguNTE1MiA2Mi40MDI2IDg4LjM3MjRDNjIuNTczNSA4OC4wODQgNjIuODUwMyA4Ny44NzQzIDYzLjE3MzYgODcuNzg4M0M2My40OTcgODcuNzAyMyA2My44NDExIDg3Ljc0NyA2NC4xMzIxIDg3LjkxMjZDNjQuMjc1NiA4Ny45OTM4IDY0LjQwMTYgODguMTAyNyA2NC41MDI4IDg4LjIzMzFDNjQuNjA0IDg4LjM2MzUgNjQuNjc4MiA4OC41MTI3IDY0LjcyMTQgODguNjcyMkM2NC43NjQ1IDg4LjgzMTYgNjQuNzc1NyA4OC45OTgxIDY0Ljc1NDEgODkuMTYxOUM2NC43MzI2IDg5LjMyNTcgNjQuNjc4NyA4OS40ODM2IDY0LjU5NTggODkuNjI2M0M2NC40MjUgODkuOTE0OSA2NC4xNDgyIDkwLjEyNDcgNjMuODI0OCA5MC4yMTA4QzYzLjUwMTQgOTAuMjk2OSA2My4xNTc0IDkwLjI1MjMgNjIuODY2NCA5MC4wODY3VjkwLjA4NjFaIiBmaWxsPSIjODZDM0RCIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuN3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJTbm93Zmxha2UgMyIgZD0iTTgyLjU3ODEgOTAuMzY2TDgxLjM3MzUgODkuNjc3NUM4MS40Nzk0IDg5LjIzMjYgODEuNDc4NiA4OC43Njg3IDgxLjM3MDggODguMzI0MUw4Mi41NzgxIDg3LjYzNDVDODIuNjczOCA4Ny41ODA1IDgyLjc1NzcgODcuNTA3OSA4Mi44MjUyIDg3LjQyMUM4Mi44OTI2IDg3LjMzNDIgODIuOTQyMyA4Ny4yMzQ3IDgyLjk3MTEgODcuMTI4NEM4Mi45OTk4IDg3LjAyMjEgODMuMDA3MSA4Ni45MTEyIDgyLjk5MjYgODYuODAyQzgyLjk3ODIgODYuNjkyOCA4Mi45NDIyIDg2LjU4NzYgODIuODg2OCA4Ni40OTI2QzgyLjc3MzIgODYuMjk5OCA4Mi41ODg2IDg2LjE1OTcgODIuMzcyOCA4Ni4xMDI1QzgyLjE1NyA4Ni4wNDUyIDgxLjkyNzYgODYuMDc1NCA4MS43MzM5IDg2LjE4NjZMODAuNTI3OCA4Ni44NzYzQzgwLjE5MzEgODYuNTU4NiA3OS43ODY4IDg2LjMyNjQgNzkuMzQzNyA4Ni4xOTk1Vjg0LjgyMDJDNzkuMzM2OCA4NC42MDAzIDc5LjI0NSA4NC4zOTE4IDc5LjA4NzUgODQuMjM4N0M3OC45MyA4NC4wODU2IDc4LjcxOTIgODQgNzguNDk5OCA4NEM3OC4yODA1IDg0IDc4LjA2OTkgODQuMDg1NiA3Ny45MTI0IDg0LjIzODdDNzcuNzU0OCA4NC4zOTE4IDc3LjY2MjggODQuNjAwMyA3Ny42NTYgODQuODIwMlY4Ni4xOTk1Qzc3LjIxNCA4Ni4zMjg5IDc2LjgwODEgODYuNTU5OCA3Ni40NzA2IDg2Ljg3NEw3NS4yNjYyIDg2LjE4NTNDNzUuMDcyNCA4Ni4wNzQyIDc0Ljg0MjggODYuMDQ0IDc0LjYyNyA4Ni4xMDEzQzc0LjQxMTMgODYuMTU4NSA3NC4yMjY3IDg2LjI5ODYgNzQuMTEzIDg2LjQ5MTNDNzQuMDU3NiA4Ni41ODY0IDc0LjAyMTcgODYuNjkxNiA3NC4wMDcyIDg2LjgwMDdDNzMuOTkyOCA4Ni45MDk5IDc0IDg3LjAyMDkgNzQuMDI4OCA4Ny4xMjcxQzc0LjA1NzUgODcuMjMzNCA3NC4xMDcyIDg3LjMzMjkgNzQuMTc0NyA4Ny40MTk4Qzc0LjI0MjEgODcuNTA2NyA3NC4zMjYgODcuNTc5MiA3NC40MjE3IDg3LjYzMzJMNzUuNjI2NCA4OC4zMjE2Qzc1LjUyMDQgODguNzY2NiA3NS41MjEzIDg5LjIzMDUgNzUuNjI5IDg5LjY3NUw3NC40MjE3IDkwLjM2NDdDNzQuMzI2IDkwLjQxODcgNzQuMjQyMSA5MC40OTEyIDc0LjE3NDcgOTAuNTc4MUM3NC4xMDcyIDkwLjY2NSA3NC4wNTc1IDkwLjc2NDUgNzQuMDI4OCA5MC44NzA4Qzc0IDkwLjk3NzEgNzMuOTkyOCA5MS4wODggNzQuMDA3MiA5MS4xOTcyQzc0LjAyMTcgOTEuMzA2MyA3NC4wNTc2IDkxLjQxMTUgNzQuMTEzIDkxLjUwNjZDNzQuMjI2NyA5MS42OTkyIDc0LjQxMTMgOTEuODM5MiA3NC42MjcgOTEuODk2NUM3NC44NDI4IDkxLjk1MzcgNzUuMDcyNCA5MS45MjM2IDc1LjI2NjIgOTEuODEyNkw3Ni40NzIxIDkxLjEyMjlDNzYuODA2MyA5MS40NDA5IDc3LjIxMjggOTEuNjcyNiA3Ny42NTYyIDkxLjc5NzlWOTMuMTc5OEM3Ny42NjMxIDkzLjM5OTcgNzcuNzU1IDkzLjYwODIgNzcuOTEyNiA5My43NjEzQzc4LjA3MDEgOTMuOTE0NCA3OC4yODA3IDk0IDc4LjUgOTRDNzguNzE5NCA5NCA3OC45MzAyIDkzLjkxNDQgNzkuMDg3NyA5My43NjEzQzc5LjI0NTIgOTMuNjA4MiA3OS4zMzcgOTMuMzk5NyA3OS4zNDM5IDkzLjE3OThWOTEuNzk3NUM3OS43ODUzIDkxLjY2ODMgODAuMTkwNyA5MS40Mzc4IDgwLjUyNzggOTEuMTI0Mkw4MS43MzQxIDkxLjgxMzhDODEuOTI3OCA5MS45MjQ4IDgyLjE1NzMgOTEuOTU1IDgyLjM3MyA5MS44OTc3QzgyLjU4ODggOTEuODQwNSA4Mi43NzMzIDkxLjcwMDUgODIuODg3IDkxLjUwNzlDODIuOTQyNCA5MS40MTI4IDgyLjk3ODQgOTEuMzA3NiA4Mi45OTI4IDkxLjE5ODRDODMuMDA3MyA5MS4wODkyIDgyLjk5OTggOTAuOTc4MyA4Mi45NzExIDkwLjg3MkM4Mi45NDIzIDkwLjc2NTcgODIuODkyOSA5MC42NjYyIDgyLjgyNTQgOTAuNTc5M0M4Mi43NTc5IDkwLjQ5MjUgODIuNjczOCA5MC40MTk5IDgyLjU3ODEgOTAuMzY2Wk03Ny44NjY0IDkwLjA4NjFDNzcuNzIyOSA5MC4wMDUgNzcuNTk2OCA4OS44OTYxIDc3LjQ5NTYgODkuNzY1N0M3Ny4zOTQ0IDg5LjYzNTMgNzcuMzIwMiA4OS40ODYgNzcuMjc3MSA4OS4zMjY2Qzc3LjIzMzkgODkuMTY3MSA3Ny4yMjI4IDg5LjAwMDcgNzcuMjQ0MyA4OC44MzY5Qzc3LjI2NTggODguNjczMSA3Ny4zMTk3IDg4LjUxNTIgNzcuNDAyNiA4OC4zNzI0Qzc3LjU3MzUgODguMDg0IDc3Ljg1MDMgODcuODc0MyA3OC4xNzM2IDg3Ljc4ODNDNzguNDk3IDg3LjcwMjMgNzguODQxMSA4Ny43NDcgNzkuMTMyMSA4Ny45MTI2Qzc5LjI3NTYgODcuOTkzOCA3OS40MDE2IDg4LjEwMjcgNzkuNTAyOCA4OC4yMzMxQzc5LjYwNCA4OC4zNjM1IDc5LjY3ODIgODguNTEyNyA3OS43MjE0IDg4LjY3MjJDNzkuNzY0NSA4OC44MzE2IDc5Ljc3NTcgODguOTk4MSA3OS43NTQxIDg5LjE2MTlDNzkuNzMyNiA4OS4zMjU3IDc5LjY3ODcgODkuNDgzNiA3OS41OTU4IDg5LjYyNjNDNzkuNDI1IDg5LjkxNDkgNzkuMTQ4MiA5MC4xMjQ3IDc4LjgyNDggOTAuMjEwOEM3OC41MDE0IDkwLjI5NjkgNzguMTU3NCA5MC4yNTIzIDc3Ljg2NjQgOTAuMDg2N1Y5MC4wODYxWiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjxnIGlkPSJSYWluZHJvcHMiPgo8cGF0aCBpZD0iUmFpbmRyb3AgMSIgZD0iTTUyIDg4VjkxIiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDIiIGQ9Ik02NCA4OFY5MSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iUmFpbmRyb3AgMyIgZD0iTTc2IDg4VjkxIiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85MDkwIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85MDkwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",snow:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InNub3ciIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg4NjApIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODg2MCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iU25vd2ZsYWtlcyI+CjxwYXRoIGlkPSJTbm93Zmxha2UgMSIgZD0iTTUyLjU3ODEgOTAuMzY2TDUxLjM3MzUgODkuNjc3NUM1MS40Nzk0IDg5LjIzMjYgNTEuNDc4NiA4OC43Njg3IDUxLjM3MDggODguMzI0MUw1Mi41NzgxIDg3LjYzNDVDNTIuNjczOCA4Ny41ODA1IDUyLjc1NzcgODcuNTA3OSA1Mi44MjUyIDg3LjQyMUM1Mi44OTI2IDg3LjMzNDIgNTIuOTQyMyA4Ny4yMzQ3IDUyLjk3MTEgODcuMTI4NEM1Mi45OTk4IDg3LjAyMjEgNTMuMDA3MSA4Ni45MTEyIDUyLjk5MjYgODYuODAyQzUyLjk3ODIgODYuNjkyOCA1Mi45NDIyIDg2LjU4NzYgNTIuODg2OCA4Ni40OTI2QzUyLjc3MzIgODYuMjk5OCA1Mi41ODg2IDg2LjE1OTcgNTIuMzcyOCA4Ni4xMDI1QzUyLjE1NyA4Ni4wNDUyIDUxLjkyNzYgODYuMDc1NCA1MS43MzM5IDg2LjE4NjZMNTAuNTI3OCA4Ni44NzYzQzUwLjE5MzEgODYuNTU4NiA0OS43ODY4IDg2LjMyNjQgNDkuMzQzNyA4Ni4xOTk1Vjg0LjgyMDJDNDkuMzM2OCA4NC42MDAzIDQ5LjI0NSA4NC4zOTE4IDQ5LjA4NzUgODQuMjM4N0M0OC45MyA4NC4wODU2IDQ4LjcxOTIgODQgNDguNDk5OCA4NEM0OC4yODA1IDg0IDQ4LjA2OTkgODQuMDg1NiA0Ny45MTI0IDg0LjIzODdDNDcuNzU0OCA4NC4zOTE4IDQ3LjY2MjggODQuNjAwMyA0Ny42NTYgODQuODIwMlY4Ni4xOTk1QzQ3LjIxNCA4Ni4zMjg5IDQ2LjgwODEgODYuNTU5OCA0Ni40NzA2IDg2Ljg3NEw0NS4yNjYyIDg2LjE4NTNDNDUuMDcyNCA4Ni4wNzQyIDQ0Ljg0MjggODYuMDQ0IDQ0LjYyNyA4Ni4xMDEzQzQ0LjQxMTMgODYuMTU4NSA0NC4yMjY3IDg2LjI5ODYgNDQuMTEzIDg2LjQ5MTNDNDQuMDU3NiA4Ni41ODY0IDQ0LjAyMTcgODYuNjkxNiA0NC4wMDcyIDg2LjgwMDdDNDMuOTkyOCA4Ni45MDk5IDQ0IDg3LjAyMDkgNDQuMDI4OCA4Ny4xMjcxQzQ0LjA1NzUgODcuMjMzNCA0NC4xMDcyIDg3LjMzMjkgNDQuMTc0NyA4Ny40MTk4QzQ0LjI0MjEgODcuNTA2NyA0NC4zMjYgODcuNTc5MiA0NC40MjE3IDg3LjYzMzJMNDUuNjI2NCA4OC4zMjE2QzQ1LjUyMDQgODguNzY2NiA0NS41MjEzIDg5LjIzMDUgNDUuNjI5IDg5LjY3NUw0NC40MjE3IDkwLjM2NDdDNDQuMzI2IDkwLjQxODcgNDQuMjQyMSA5MC40OTEyIDQ0LjE3NDcgOTAuNTc4MUM0NC4xMDcyIDkwLjY2NSA0NC4wNTc1IDkwLjc2NDUgNDQuMDI4OCA5MC44NzA4QzQ0IDkwLjk3NzEgNDMuOTkyOCA5MS4wODggNDQuMDA3MiA5MS4xOTcyQzQ0LjAyMTcgOTEuMzA2MyA0NC4wNTc2IDkxLjQxMTUgNDQuMTEzIDkxLjUwNjZDNDQuMjI2NyA5MS42OTkyIDQ0LjQxMTMgOTEuODM5MiA0NC42MjcgOTEuODk2NUM0NC44NDI4IDkxLjk1MzcgNDUuMDcyNCA5MS45MjM2IDQ1LjI2NjIgOTEuODEyNkw0Ni40NzIxIDkxLjEyMjlDNDYuODA2MyA5MS40NDA5IDQ3LjIxMjggOTEuNjcyNiA0Ny42NTYyIDkxLjc5NzlWOTMuMTc5OEM0Ny42NjMxIDkzLjM5OTcgNDcuNzU1IDkzLjYwODIgNDcuOTEyNiA5My43NjEzQzQ4LjA3MDEgOTMuOTE0NCA0OC4yODA3IDk0IDQ4LjUgOTRDNDguNzE5NCA5NCA0OC45MzAyIDkzLjkxNDQgNDkuMDg3NyA5My43NjEzQzQ5LjI0NTIgOTMuNjA4MiA0OS4zMzcgOTMuMzk5NyA0OS4zNDM5IDkzLjE3OThWOTEuNzk3NUM0OS43ODUzIDkxLjY2ODMgNTAuMTkwNyA5MS40Mzc4IDUwLjUyNzggOTEuMTI0Mkw1MS43MzQxIDkxLjgxMzhDNTEuOTI3OCA5MS45MjQ4IDUyLjE1NzMgOTEuOTU1IDUyLjM3MyA5MS44OTc3QzUyLjU4ODggOTEuODQwNSA1Mi43NzMzIDkxLjcwMDUgNTIuODg3IDkxLjUwNzlDNTIuOTQyNCA5MS40MTI4IDUyLjk3ODQgOTEuMzA3NiA1Mi45OTI4IDkxLjE5ODRDNTMuMDA3MyA5MS4wODkyIDUyLjk5OTggOTAuOTc4MyA1Mi45NzExIDkwLjg3MkM1Mi45NDIzIDkwLjc2NTcgNTIuODkyOSA5MC42NjYyIDUyLjgyNTQgOTAuNTc5M0M1Mi43NTc5IDkwLjQ5MjUgNTIuNjczOCA5MC40MTk5IDUyLjU3ODEgOTAuMzY2Wk00Ny44NjY0IDkwLjA4NjFDNDcuNzIyOSA5MC4wMDUgNDcuNTk2OCA4OS44OTYxIDQ3LjQ5NTYgODkuNzY1N0M0Ny4zOTQ0IDg5LjYzNTMgNDcuMzIwMiA4OS40ODYgNDcuMjc3MSA4OS4zMjY2QzQ3LjIzMzkgODkuMTY3MSA0Ny4yMjI4IDg5LjAwMDcgNDcuMjQ0MyA4OC44MzY5QzQ3LjI2NTggODguNjczMSA0Ny4zMTk3IDg4LjUxNTIgNDcuNDAyNiA4OC4zNzI0QzQ3LjU3MzUgODguMDg0IDQ3Ljg1MDMgODcuODc0MyA0OC4xNzM2IDg3Ljc4ODNDNDguNDk3IDg3LjcwMjMgNDguODQxMSA4Ny43NDcgNDkuMTMyMSA4Ny45MTI2QzQ5LjI3NTYgODcuOTkzOCA0OS40MDE2IDg4LjEwMjcgNDkuNTAyOCA4OC4yMzMxQzQ5LjYwNCA4OC4zNjM1IDQ5LjY3ODIgODguNTEyNyA0OS43MjE0IDg4LjY3MjJDNDkuNzY0NSA4OC44MzE2IDQ5Ljc3NTcgODguOTk4MSA0OS43NTQxIDg5LjE2MTlDNDkuNzMyNiA4OS4zMjU3IDQ5LjY3ODcgODkuNDgzNiA0OS41OTU4IDg5LjYyNjNDNDkuNDI1IDg5LjkxNDkgNDkuMTQ4MiA5MC4xMjQ3IDQ4LjgyNDggOTAuMjEwOEM0OC41MDE0IDkwLjI5NjkgNDguMTU3NCA5MC4yNTIzIDQ3Ljg2NjQgOTAuMDg2N1Y5MC4wODYxWiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iU25vd2ZsYWtlIDIiIGQ9Ik02Ny41NzgxIDkwLjM2Nkw2Ni4zNzM1IDg5LjY3NzVDNjYuNDc5NCA4OS4yMzI2IDY2LjQ3ODYgODguNzY4NyA2Ni4zNzA4IDg4LjMyNDFMNjcuNTc4MSA4Ny42MzQ1QzY3LjY3MzggODcuNTgwNSA2Ny43NTc3IDg3LjUwNzkgNjcuODI1MiA4Ny40MjFDNjcuODkyNiA4Ny4zMzQyIDY3Ljk0MjMgODcuMjM0NyA2Ny45NzExIDg3LjEyODRDNjcuOTk5OCA4Ny4wMjIxIDY4LjAwNzEgODYuOTExMiA2Ny45OTI2IDg2LjgwMkM2Ny45NzgyIDg2LjY5MjggNjcuOTQyMiA4Ni41ODc2IDY3Ljg4NjggODYuNDkyNkM2Ny43NzMyIDg2LjI5OTggNjcuNTg4NiA4Ni4xNTk3IDY3LjM3MjggODYuMTAyNUM2Ny4xNTcgODYuMDQ1MiA2Ni45Mjc2IDg2LjA3NTQgNjYuNzMzOSA4Ni4xODY2TDY1LjUyNzggODYuODc2M0M2NS4xOTMxIDg2LjU1ODYgNjQuNzg2OCA4Ni4zMjY0IDY0LjM0MzcgODYuMTk5NVY4NC44MjAyQzY0LjMzNjggODQuNjAwMyA2NC4yNDUgODQuMzkxOCA2NC4wODc1IDg0LjIzODdDNjMuOTMgODQuMDg1NiA2My43MTkyIDg0IDYzLjQ5OTggODRDNjMuMjgwNSA4NCA2My4wNjk5IDg0LjA4NTYgNjIuOTEyNCA4NC4yMzg3QzYyLjc1NDggODQuMzkxOCA2Mi42NjI4IDg0LjYwMDMgNjIuNjU2IDg0LjgyMDJWODYuMTk5NUM2Mi4yMTQgODYuMzI4OSA2MS44MDgxIDg2LjU1OTggNjEuNDcwNiA4Ni44NzRMNjAuMjY2MiA4Ni4xODUzQzYwLjA3MjQgODYuMDc0MiA1OS44NDI4IDg2LjA0NCA1OS42MjcgODYuMTAxM0M1OS40MTEzIDg2LjE1ODUgNTkuMjI2NyA4Ni4yOTg2IDU5LjExMyA4Ni40OTEzQzU5LjA1NzYgODYuNTg2NCA1OS4wMjE3IDg2LjY5MTYgNTkuMDA3MiA4Ni44MDA3QzU4Ljk5MjggODYuOTA5OSA1OSA4Ny4wMjA5IDU5LjAyODggODcuMTI3MUM1OS4wNTc1IDg3LjIzMzQgNTkuMTA3MiA4Ny4zMzI5IDU5LjE3NDcgODcuNDE5OEM1OS4yNDIxIDg3LjUwNjcgNTkuMzI2IDg3LjU3OTIgNTkuNDIxNyA4Ny42MzMyTDYwLjYyNjQgODguMzIxNkM2MC41MjA0IDg4Ljc2NjYgNjAuNTIxMyA4OS4yMzA1IDYwLjYyOSA4OS42NzVMNTkuNDIxNyA5MC4zNjQ3QzU5LjMyNiA5MC40MTg3IDU5LjI0MjEgOTAuNDkxMiA1OS4xNzQ3IDkwLjU3ODFDNTkuMTA3MiA5MC42NjUgNTkuMDU3NSA5MC43NjQ1IDU5LjAyODggOTAuODcwOEM1OSA5MC45NzcxIDU4Ljk5MjggOTEuMDg4IDU5LjAwNzIgOTEuMTk3MkM1OS4wMjE3IDkxLjMwNjMgNTkuMDU3NiA5MS40MTE1IDU5LjExMyA5MS41MDY2QzU5LjIyNjcgOTEuNjk5MiA1OS40MTEzIDkxLjgzOTIgNTkuNjI3IDkxLjg5NjVDNTkuODQyOCA5MS45NTM3IDYwLjA3MjQgOTEuOTIzNiA2MC4yNjYyIDkxLjgxMjZMNjEuNDcyMSA5MS4xMjI5QzYxLjgwNjMgOTEuNDQwOSA2Mi4yMTI4IDkxLjY3MjYgNjIuNjU2MiA5MS43OTc5VjkzLjE3OThDNjIuNjYzMSA5My4zOTk3IDYyLjc1NSA5My42MDgyIDYyLjkxMjYgOTMuNzYxM0M2My4wNzAxIDkzLjkxNDQgNjMuMjgwNyA5NCA2My41IDk0QzYzLjcxOTQgOTQgNjMuOTMwMiA5My45MTQ0IDY0LjA4NzcgOTMuNzYxM0M2NC4yNDUyIDkzLjYwODIgNjQuMzM3IDkzLjM5OTcgNjQuMzQzOSA5My4xNzk4VjkxLjc5NzVDNjQuNzg1MyA5MS42NjgzIDY1LjE5MDcgOTEuNDM3OCA2NS41Mjc4IDkxLjEyNDJMNjYuNzM0MSA5MS44MTM4QzY2LjkyNzggOTEuOTI0OCA2Ny4xNTczIDkxLjk1NSA2Ny4zNzMgOTEuODk3N0M2Ny41ODg4IDkxLjg0MDUgNjcuNzczMyA5MS43MDA1IDY3Ljg4NyA5MS41MDc5QzY3Ljk0MjQgOTEuNDEyOCA2Ny45Nzg0IDkxLjMwNzYgNjcuOTkyOCA5MS4xOTg0QzY4LjAwNzMgOTEuMDg5MiA2Ny45OTk4IDkwLjk3ODMgNjcuOTcxMSA5MC44NzJDNjcuOTQyMyA5MC43NjU3IDY3Ljg5MjkgOTAuNjY2MiA2Ny44MjU0IDkwLjU3OTNDNjcuNzU3OSA5MC40OTI1IDY3LjY3MzggOTAuNDE5OSA2Ny41NzgxIDkwLjM2NlpNNjIuODY2NCA5MC4wODYxQzYyLjcyMjkgOTAuMDA1IDYyLjU5NjggODkuODk2MSA2Mi40OTU2IDg5Ljc2NTdDNjIuMzk0NCA4OS42MzUzIDYyLjMyMDIgODkuNDg2IDYyLjI3NzEgODkuMzI2NkM2Mi4yMzM5IDg5LjE2NzEgNjIuMjIyOCA4OS4wMDA3IDYyLjI0NDMgODguODM2OUM2Mi4yNjU4IDg4LjY3MzEgNjIuMzE5NyA4OC41MTUyIDYyLjQwMjYgODguMzcyNEM2Mi41NzM1IDg4LjA4NCA2Mi44NTAzIDg3Ljg3NDMgNjMuMTczNiA4Ny43ODgzQzYzLjQ5NyA4Ny43MDIzIDYzLjg0MTEgODcuNzQ3IDY0LjEzMjEgODcuOTEyNkM2NC4yNzU2IDg3Ljk5MzggNjQuNDAxNiA4OC4xMDI3IDY0LjUwMjggODguMjMzMUM2NC42MDQgODguMzYzNSA2NC42NzgyIDg4LjUxMjcgNjQuNzIxNCA4OC42NzIyQzY0Ljc2NDUgODguODMxNiA2NC43NzU3IDg4Ljk5ODEgNjQuNzU0MSA4OS4xNjE5QzY0LjczMjYgODkuMzI1NyA2NC42Nzg3IDg5LjQ4MzYgNjQuNTk1OCA4OS42MjYzQzY0LjQyNSA4OS45MTQ5IDY0LjE0ODIgOTAuMTI0NyA2My44MjQ4IDkwLjIxMDhDNjMuNTAxNCA5MC4yOTY5IDYzLjE1NzQgOTAuMjUyMyA2Mi44NjY0IDkwLjA4NjdWOTAuMDg2MVoiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC43cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuN3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlNub3dmbGFrZSAzIiBkPSJNODIuNTc4MSA5MC4zNjZMODEuMzczNSA4OS42Nzc1QzgxLjQ3OTQgODkuMjMyNiA4MS40Nzg2IDg4Ljc2ODcgODEuMzcwOCA4OC4zMjQxTDgyLjU3ODEgODcuNjM0NUM4Mi42NzM4IDg3LjU4MDUgODIuNzU3NyA4Ny41MDc5IDgyLjgyNTIgODcuNDIxQzgyLjg5MjYgODcuMzM0MiA4Mi45NDIzIDg3LjIzNDcgODIuOTcxMSA4Ny4xMjg0QzgyLjk5OTggODcuMDIyMSA4My4wMDcxIDg2LjkxMTIgODIuOTkyNiA4Ni44MDJDODIuOTc4MiA4Ni42OTI4IDgyLjk0MjIgODYuNTg3NiA4Mi44ODY4IDg2LjQ5MjZDODIuNzczMiA4Ni4yOTk4IDgyLjU4ODYgODYuMTU5NyA4Mi4zNzI4IDg2LjEwMjVDODIuMTU3IDg2LjA0NTIgODEuOTI3NiA4Ni4wNzU0IDgxLjczMzkgODYuMTg2Nkw4MC41Mjc4IDg2Ljg3NjNDODAuMTkzMSA4Ni41NTg2IDc5Ljc4NjggODYuMzI2NCA3OS4zNDM3IDg2LjE5OTVWODQuODIwMkM3OS4zMzY4IDg0LjYwMDMgNzkuMjQ1IDg0LjM5MTggNzkuMDg3NSA4NC4yMzg3Qzc4LjkzIDg0LjA4NTYgNzguNzE5MiA4NCA3OC40OTk4IDg0Qzc4LjI4MDUgODQgNzguMDY5OSA4NC4wODU2IDc3LjkxMjQgODQuMjM4N0M3Ny43NTQ4IDg0LjM5MTggNzcuNjYyOCA4NC42MDAzIDc3LjY1NiA4NC44MjAyVjg2LjE5OTVDNzcuMjE0IDg2LjMyODkgNzYuODA4MSA4Ni41NTk4IDc2LjQ3MDYgODYuODc0TDc1LjI2NjIgODYuMTg1M0M3NS4wNzI0IDg2LjA3NDIgNzQuODQyOCA4Ni4wNDQgNzQuNjI3IDg2LjEwMTNDNzQuNDExMyA4Ni4xNTg1IDc0LjIyNjcgODYuMjk4NiA3NC4xMTMgODYuNDkxM0M3NC4wNTc2IDg2LjU4NjQgNzQuMDIxNyA4Ni42OTE2IDc0LjAwNzIgODYuODAwN0M3My45OTI4IDg2LjkwOTkgNzQgODcuMDIwOSA3NC4wMjg4IDg3LjEyNzFDNzQuMDU3NSA4Ny4yMzM0IDc0LjEwNzIgODcuMzMyOSA3NC4xNzQ3IDg3LjQxOThDNzQuMjQyMSA4Ny41MDY3IDc0LjMyNiA4Ny41NzkyIDc0LjQyMTcgODcuNjMzMkw3NS42MjY0IDg4LjMyMTZDNzUuNTIwNCA4OC43NjY2IDc1LjUyMTMgODkuMjMwNSA3NS42MjkgODkuNjc1TDc0LjQyMTcgOTAuMzY0N0M3NC4zMjYgOTAuNDE4NyA3NC4yNDIxIDkwLjQ5MTIgNzQuMTc0NyA5MC41NzgxQzc0LjEwNzIgOTAuNjY1IDc0LjA1NzUgOTAuNzY0NSA3NC4wMjg4IDkwLjg3MDhDNzQgOTAuOTc3MSA3My45OTI4IDkxLjA4OCA3NC4wMDcyIDkxLjE5NzJDNzQuMDIxNyA5MS4zMDYzIDc0LjA1NzYgOTEuNDExNSA3NC4xMTMgOTEuNTA2NkM3NC4yMjY3IDkxLjY5OTIgNzQuNDExMyA5MS44MzkyIDc0LjYyNyA5MS44OTY1Qzc0Ljg0MjggOTEuOTUzNyA3NS4wNzI0IDkxLjkyMzYgNzUuMjY2MiA5MS44MTI2TDc2LjQ3MjEgOTEuMTIyOUM3Ni44MDYzIDkxLjQ0MDkgNzcuMjEyOCA5MS42NzI2IDc3LjY1NjIgOTEuNzk3OVY5My4xNzk4Qzc3LjY2MzEgOTMuMzk5NyA3Ny43NTUgOTMuNjA4MiA3Ny45MTI2IDkzLjc2MTNDNzguMDcwMSA5My45MTQ0IDc4LjI4MDcgOTQgNzguNSA5NEM3OC43MTk0IDk0IDc4LjkzMDIgOTMuOTE0NCA3OS4wODc3IDkzLjc2MTNDNzkuMjQ1MiA5My42MDgyIDc5LjMzNyA5My4zOTk3IDc5LjM0MzkgOTMuMTc5OFY5MS43OTc1Qzc5Ljc4NTMgOTEuNjY4MyA4MC4xOTA3IDkxLjQzNzggODAuNTI3OCA5MS4xMjQyTDgxLjczNDEgOTEuODEzOEM4MS45Mjc4IDkxLjkyNDggODIuMTU3MyA5MS45NTUgODIuMzczIDkxLjg5NzdDODIuNTg4OCA5MS44NDA1IDgyLjc3MzMgOTEuNzAwNSA4Mi44ODcgOTEuNTA3OUM4Mi45NDI0IDkxLjQxMjggODIuOTc4NCA5MS4zMDc2IDgyLjk5MjggOTEuMTk4NEM4My4wMDczIDkxLjA4OTIgODIuOTk5OCA5MC45NzgzIDgyLjk3MTEgOTAuODcyQzgyLjk0MjMgOTAuNzY1NyA4Mi44OTI5IDkwLjY2NjIgODIuODI1NCA5MC41NzkzQzgyLjc1NzkgOTAuNDkyNSA4Mi42NzM4IDkwLjQxOTkgODIuNTc4MSA5MC4zNjZaTTc3Ljg2NjQgOTAuMDg2MUM3Ny43MjI5IDkwLjAwNSA3Ny41OTY4IDg5Ljg5NjEgNzcuNDk1NiA4OS43NjU3Qzc3LjM5NDQgODkuNjM1MyA3Ny4zMjAyIDg5LjQ4NiA3Ny4yNzcxIDg5LjMyNjZDNzcuMjMzOSA4OS4xNjcxIDc3LjIyMjggODkuMDAwNyA3Ny4yNDQzIDg4LjgzNjlDNzcuMjY1OCA4OC42NzMxIDc3LjMxOTcgODguNTE1MiA3Ny40MDI2IDg4LjM3MjRDNzcuNTczNSA4OC4wODQgNzcuODUwMyA4Ny44NzQzIDc4LjE3MzYgODcuNzg4M0M3OC40OTcgODcuNzAyMyA3OC44NDExIDg3Ljc0NyA3OS4xMzIxIDg3LjkxMjZDNzkuMjc1NiA4Ny45OTM4IDc5LjQwMTYgODguMTAyNyA3OS41MDI4IDg4LjIzMzFDNzkuNjA0IDg4LjM2MzUgNzkuNjc4MiA4OC41MTI3IDc5LjcyMTQgODguNjcyMkM3OS43NjQ1IDg4LjgzMTYgNzkuNzc1NyA4OC45OTgxIDc5Ljc1NDEgODkuMTYxOUM3OS43MzI2IDg5LjMyNTcgNzkuNjc4NyA4OS40ODM2IDc5LjU5NTggODkuNjI2M0M3OS40MjUgODkuOTE0OSA3OS4xNDgyIDkwLjEyNDcgNzguODI0OCA5MC4yMTA4Qzc4LjUwMTQgOTAuMjk2OSA3OC4xNTc0IDkwLjI1MjMgNzcuODY2NCA5MC4wODY3VjkwLjA4NjFaIiBmaWxsPSIjODZDM0RCIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjEuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF84ODYwIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84ODYwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","sun-hot":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InN1bi1ob3QiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODc4XzQ2NzMpIj4KPGcgaWQ9Ik1hc2sgZ3JvdXAiPgo8bWFzayBpZD0ibWFzazBfMTg3OF80NjczIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+CjxwYXRoIGlkPSJNYXNrIiBkPSJNMCAwSDEyOEwwIDEyOFYwWiIgZmlsbD0iYmxhY2siLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4NzhfNDY3MykiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjY0IiBjeT0iNjQiIHI9IjE5LjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODc4XzQ2NzMpIiBzdHJva2U9IiNGOEFGMTgiLz4KPGcgaWQ9IlJheXMiPgo8cGF0aCBkPSJNNjEgMTlDNjEgMTcuMzQzMSA2Mi4zNDMxIDE2IDY0IDE2QzY1LjY1NjggMTYgNjcgMTcuMzQzMSA2NyAxOVYzM0M2NyAzNC42NTY5IDY1LjY1NjggMzYgNjQgMzZDNjIuMzQzMSAzNiA2MSAzNC42NTY5IDYxIDMzVjE5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNOTMuNjk4NSAzMC4wNTg5Qzk0Ljg3IDI4Ljg4NzMgOTYuNzY5NiAyOC44ODczIDk3Ljk0MTEgMzAuMDU4OUM5OS4xMTI3IDMxLjIzMDQgOTkuMTEyNyAzMy4xMjk5IDk3Ljk0MTEgMzQuMzAxNUw4OC4wNDE2IDQ0LjIwMUM4Ni44NzAxIDQ1LjM3MjYgODQuOTcwNiA0NS4zNzI2IDgzLjc5OSA0NC4yMDFDODIuNjI3NCA0My4wMjk0IDgyLjYyNzQgNDEuMTI5OSA4My43OTkgMzkuOTU4NEw5My42OTg1IDMwLjA1ODlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0xMDkgNjFDMTEwLjY1NyA2MSAxMTIgNjIuMzQzMiAxMTIgNjRDMTEyIDY1LjY1NjkgMTEwLjY1NyA2NyAxMDkgNjdIOTVDOTMuMzQzMSA2NyA5MiA2NS42NTY5IDkyIDY0QzkyIDYyLjM0MzIgOTMuMzQzMSA2MSA5NSA2MUgxMDlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik05Ny45NDExIDkzLjY5ODVDOTkuMTEyNyA5NC44NzAxIDk5LjExMjcgOTYuNzY5NiA5Ny45NDExIDk3Ljk0MTFDOTYuNzY5NiA5OS4xMTI3IDk0Ljg3MDEgOTkuMTEyNyA5My42OTg1IDk3Ljk0MTFMODMuNzk5IDg4LjA0MTZDODIuNjI3NCA4Ni44NzAxIDgyLjYyNzQgODQuOTcwNiA4My43OTkgODMuNzk5Qzg0Ljk3MDYgODIuNjI3NCA4Ni44NzAxIDgyLjYyNzQgODguMDQxNiA4My43OTlMOTcuOTQxMSA5My42OTg1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNNjEgOTVDNjEgOTMuMzQzMSA2Mi4zNDMxIDkyIDY0IDkyQzY1LjY1NjggOTIgNjcgOTMuMzQzMSA2NyA5NVYxMDlDNjcgMTEwLjY1NyA2NS42NTY4IDExMiA2NCAxMTJDNjIuMzQzMSAxMTIgNjEgMTEwLjY1NyA2MSAxMDlWOTVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zOS45NTg0IDgzLjc5OUM0MS4xMjk5IDgyLjYyNzQgNDMuMDI5NCA4Mi42Mjc0IDQ0LjIwMSA4My43OTlDNDUuMzcyNiA4NC45NzA2IDQ1LjM3MjYgODYuODcwMSA0NC4yMDEgODguMDQxNkwzNC4zMDE1IDk3Ljk0MTFDMzMuMTI5OSA5OS4xMTI3IDMxLjIzMDQgOTkuMTEyNyAzMC4wNTg5IDk3Ljk0MTFDMjguODg3MyA5Ni43Njk2IDI4Ljg4NzMgOTQuODcgMzAuMDU4OSA5My42OTg1TDM5Ljk1ODQgODMuNzk5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzMgNjFDMzQuNjU2OSA2MSAzNiA2Mi4zNDMxIDM2IDY0QzM2IDY1LjY1NjggMzQuNjU2OSA2NyAzMyA2N0gxOUMxNy4zNDMxIDY3IDE2IDY1LjY1NjggMTYgNjRDMTYgNjIuMzQzMSAxNy4zNDMxIDYxIDE5IDYxSDMzWiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNNDQuMjAxIDM5Ljk1ODRDNDUuMzcyNiA0MS4xMjk5IDQ1LjM3MjYgNDMuMDI5NCA0NC4yMDEgNDQuMjAxQzQzLjAyOTQgNDUuMzcyNiA0MS4xMjk5IDQ1LjM3MjYgMzkuOTU4NCA0NC4yMDFMMzAuMDU4OSAzNC4zMDE1QzI4Ljg4NzMgMzMuMTI5OSAyOC44ODczIDMxLjIzMDUgMzAuMDU4OSAzMC4wNTg5QzMxLjIzMDUgMjguODg3MyAzMy4xMjk5IDI4Ljg4NzMgMzQuMzAxNSAzMC4wNTg5TDQ0LjIwMSAzOS45NTg0WiIgZmlsbD0iI0Y4QUYxOCIvPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0LjAgNjQuMDszNjAgNjQuMCA2NC4wIiBkdXI9IjZzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9nPgo8L2c+CjwvZz4KPC9nPgo8cGF0aCBpZD0icGF0aCIgZD0iTTQ3LjEwNDggOTYuMzk1MkM0NS42MzE3IDkyLjIxMTUgNDYuOTg3IDkwLjg1NjIgNTEuMTcwNyA5Mi4zMjk0QzU1LjM1NDQgOTMuODAyNSA1Ni43MDk3IDkyLjQ0NzIgNTUuMjM2NSA4OC4yNjM1QzUzLjc2MzQgODQuMDc5OCA1NS4xMTg3IDgyLjcyNDUgNTkuMzAyNCA4NC4xOTc3QzYzLjQ4NjEgODUuNjcwOCA2NC44NDE0IDg0LjMxNTUgNjMuMzY4MyA4MC4xMzE4QzYxLjg5NTEgNzUuOTQ4MSA2My4yNTA0IDc0LjU5MjggNjcuNDM0MSA3Ni4wNjU5QzcxLjYxNzkgNzcuNTM5MSA3Mi45NzMxIDc2LjE4MzggNzEuNSA3Mi4wMDAxQzcwLjAyNjkgNjcuODE2MyA3MS4zODIyIDY2LjQ2MTEgNzUuNTY1OSA2Ny45MzQyQzc5Ljc0OTYgNjkuNDA3MyA4MS4xMDQ5IDY4LjA1MiA3OS42MzE3IDYzLjg2ODNDNzguMTU4NiA1OS42ODQ2IDc5LjUxMzkgNTguMzI5MyA4My42OTc2IDU5LjgwMjVDODcuODgxMyA2MS4yNzU2IDg5LjIzNjYgNTkuOTIwMyA4Ny43NjM1IDU1LjczNjZDODYuMjkwMyA1MS41NTI5IDg3LjY0NTYgNTAuMTk3NiA5MS44MjkzIDUxLjY3MDdDOTYuMDEzIDUzLjE0MzkgOTcuMzY4MyA1MS43ODg2IDk1Ljg5NTIgNDcuNjA0OSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBpZD0icGF0aF8yIiBkPSJNNjIuMTA0OCA5Ni4zOTUyQzYwLjYzMTcgOTIuMjExNSA2MS45ODcgOTAuODU2MiA2Ni4xNzA3IDkyLjMyOTRDNzAuMzU0NCA5My44MDI1IDcxLjcwOTcgOTIuNDQ3MiA3MC4yMzY1IDg4LjI2MzVDNjguNzYzNCA4NC4wNzk4IDcwLjExODcgODIuNzI0NSA3NC4zMDI0IDg0LjE5NzdDNzguNDg2MSA4NS42NzA4IDc5Ljg0MTQgODQuMzE1NSA3OC4zNjgzIDgwLjEzMThDNzYuODk1MSA3NS45NDgxIDc4LjI1MDQgNzQuNTkyOCA4Mi40MzQxIDc2LjA2NTlDODYuNjE3OSA3Ny41MzkxIDg3Ljk3MzEgNzYuMTgzOCA4Ni41IDcyLjAwMDFDODUuMDI2OSA2Ny44MTYzIDg2LjM4MjIgNjYuNDYxMSA5MC41NjU5IDY3LjkzNDJDOTQuNzQ5NiA2OS40MDczIDk2LjEwNDkgNjguMDUyIDk0LjYzMTcgNjMuODY4M0M5My4xNTg2IDU5LjY4NDYgOTQuNTEzOSA1OC4zMjkzIDk4LjY5NzYgNTkuODAyNUMxMDIuODgxIDYxLjI3NTYgMTA0LjIzNyA1OS45MjAzIDEwMi43NjMgNTUuNzM2NkMxMDEuMjkgNTEuNTUyOSAxMDIuNjQ2IDUwLjE5NzYgMTA2LjgyOSA1MS42NzA3QzExMS4wMTMgNTMuMTQzOSAxMTIuMzY4IDUxLjc4ODYgMTEwLjg5NSA0Ny42MDQ5IiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODc4XzQ2NzMiIHgxPSI2NCIgeTE9IjQ0IiB4Mj0iNjQiIHkyPSI4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4QUYxOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NzhfNDY3MyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==","thermometer-colder":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRoZXJtb21ldGVyLWNvbGRlciIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NDRfMTU2NzMpIj4KPGcgaWQ9IlRoZXJtb21ldGVyIE1lcmN1cnkiPgo8Y2lyY2xlIGlkPSJSZXNlcnZvaXIiIGN4PSI2NCIgY3k9IjgzIiByPSI5IiBmaWxsPSIjMjU2M0VCIi8+CjxyZWN0IGlkPSJWYWx1ZSIgeD0iNjEiIHk9IjUwIiB3aWR0aD0iNiIgaGVpZ2h0PSIyOSIgcng9IjMiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0yOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9yZWN0Pgo8L2c+CjxnIGlkPSJUaGVybW9tZXRlciBHbGFzcyI+CjxwYXRoIGlkPSJHbGFzcyIgZD0iTTUwLjUgODMuMTkxNEM1MC40OTUyIDgxLjA1NjYgNTEuMDE3NSA3OC45NTEgNTIuMDIzNCA3Ny4wNTE4QzUzLjAyOTQgNzUuMTUyNSA1NC40OTAxIDczLjUxNCA1Ni4yODQxIDcyLjI3NTRDNTYuNDE5MiA3Mi4xODIxIDU2LjQ5OTkgNzIuMDI4NCA1Ni41IDcxLjg2NDNWMzguNzc5M0M1Ni41IDM2Ljg1MzQgNTcuMjg2NCAzNS4wMDI5IDU4LjY5MTQgMzMuNjM2N0M2MC4wOTY5IDMyLjI3IDYyLjAwNjQgMzEuNSA2NCAzMS41QzY1Ljk5MzUgMzEuNSA2Ny45MDMgMzIuMjcgNjkuMzA4NiAzMy42MzY3QzcwLjcxMzYgMzUuMDAyOSA3MS41IDM2Ljg1MzQgNzEuNSAzOC43NzkzVjQyLjA0NjlINjVDNjQuNzIzOSA0Mi4wNDY5IDY0LjUgNDIuMjcwOCA2NC41IDQyLjU0NjlDNjQuNSA0Mi44MjMgNjQuNzIzOCA0My4wNDY5IDY1IDQzLjA0NjlINzEuNVY0OS44MjYySDY1QzY0LjcyMzggNDkuODI2MiA2NC41IDUwLjA1IDY0LjUgNTAuMzI2MkM2NC41MDAxIDUwLjYwMjIgNjQuNzIzOSA1MC44MjYyIDY1IDUwLjgyNjJINzEuNVY1Ny42MDQ1SDY1QzY0LjcyNCA1Ny42MDQ1IDY0LjUwMDIgNTcuODI4NiA2NC41IDU4LjEwNDVDNjQuNSA1OC4zODA2IDY0LjcyMzggNTguNjA0NSA2NSA1OC42MDQ1SDcxLjVWNzEuODM5OEM3MS41IDcyLjAwNCA3MS41ODA3IDcyLjE1NzYgNzEuNzE1OCA3Mi4yNTFDNzMuNTEzMiA3My40OTE5IDc0Ljk3NjMgNzUuMTM0NCA3NS45ODI0IDc3LjAzODFDNzYuOTg4NCA3OC45NDE2IDc3LjUwODYgODEuMDUxOCA3Ny41IDgzLjE5MDRWODMuMTkyNEM3Ny40OTk5IDkwLjU0MzEgNzEuNDgwMSA5Ni41IDY0IDk2LjVDNTYuNTE5OSA5Ni41IDUwLjUgOTAuNTQzMSA1MC41IDgzLjE5MjRWODMuMTkxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODQ0XzE1NjczKSIgc3Ryb2tlPSIjQkZEQkZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGcgaWQ9IkFycm93cyI+CjxwYXRoIGlkPSJBcnJvdyAzIiBkPSJNOTIuNjY3OCA0NS4wMDI5QzkyLjMxNzUgNDUuMDAxMSA5MS45OCA0NS4xNDAzIDkxLjcyNTMgNDUuMzkxNkw4Ni4wMDEyIDUxLjA4NDFMODAuMjc2MSA0NS4zODg5QzgwLjAyMDQgNDUuMTM5IDc5LjY4MzQgNDUgNzkuMzMzMyA0NUM3OC45ODMyIDQ1IDc4LjY0NjIgNDUuMTM5IDc4LjM5MDUgNDUuMzg4OUM3OC4yNjczIDQ1LjUwODggNzguMTY5IDQ1LjY1NCA3OC4xMDE5IDQ1LjgxNTNDNzguMDM0NyA0NS45NzY3IDc4IDQ2LjE1MDcgNzggNDYuMzI2N0M3OCA0Ni41MDI2IDc4LjAzNDcgNDYuNjc2NyA3OC4xMDE5IDQ2LjgzODFDNzguMTY5IDQ2Ljk5OTQgNzguMjY3MyA0Ny4xNDQ2IDc4LjM5MDUgNDcuMjY0Nkw4NS4wNTcxIDUzLjg5N0M4NS4zMTI4IDU0LjE0NjkgODUuNjQ5OSA1NC4yODU5IDg2IDU0LjI4NTlDODYuMzUwMSA1NC4yODU5IDg2LjY4NzEgNTQuMTQ2OSA4Ni45NDI4IDUzLjg5N0w5My42MDk0IDQ3LjI2NDZDOTMuNzMyNyA0Ny4xNDQ2IDkzLjgzMDkgNDYuOTk5NCA5My44OTgxIDQ2LjgzODFDOTMuOTY1MyA0Ni42NzY3IDkzLjk5OTkgNDYuNTAyNiA5My45OTk5IDQ2LjMyNjdDOTMuOTk5OSA0Ni4xNTA3IDkzLjk2NTMgNDUuOTc2NyA5My44OTgxIDQ1LjgxNTNDOTMuODMwOSA0NS42NTQgOTMuNzMyNyA0NS41MDg4IDkzLjYwOTQgNDUuMzg4OUM5My4zNTQ2IDQ1LjEzODggOTMuMDE3NSA0NS4wMDA2IDkyLjY2NzggNDUuMDAyOVoiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMiIgZD0iTTkyLjY2NzggNTMuMzZDOTIuMzE3NSA1My4zNTgzIDkxLjk4IDUzLjQ5NzUgOTEuNzI1MyA1My43NDg4TDg2LjAwMTIgNTkuNDQxM0w4MC4yNzYxIDUzLjc0NkM4MC4wMjA0IDUzLjQ5NjIgNzkuNjgzNCA1My4zNTcyIDc5LjMzMzMgNTMuMzU3MkM3OC45ODMyIDUzLjM1NzIgNzguNjQ2MiA1My40OTYyIDc4LjM5MDUgNTMuNzQ2Qzc4LjI2NzMgNTMuODY2IDc4LjE2OSA1NC4wMTEyIDc4LjEwMTkgNTQuMTcyNUM3OC4wMzQ3IDU0LjMzMzkgNzggNTQuNTA3OSA3OCA1NC42ODM5Qzc4IDU0Ljg1OTggNzguMDM0NyA1NS4wMzM5IDc4LjEwMTkgNTUuMTk1MkM3OC4xNjkgNTUuMzU2NiA3OC4yNjczIDU1LjUwMTggNzguMzkwNSA1NS42MjE3TDg1LjA1NzEgNjIuMjU0MkM4NS4zMTI4IDYyLjUwNDEgODUuNjQ5OSA2Mi42NDMxIDg2IDYyLjY0MzFDODYuMzUwMSA2Mi42NDMxIDg2LjY4NzEgNjIuNTA0MSA4Ni45NDI4IDYyLjI1NDJMOTMuNjA5NCA1NS42MjE3QzkzLjczMjcgNTUuNTAxOCA5My44MzA5IDU1LjM1NjYgOTMuODk4MSA1NS4xOTUyQzkzLjk2NTMgNTUuMDMzOSA5My45OTk5IDU0Ljg1OTggOTMuOTk5OSA1NC42ODM5QzkzLjk5OTkgNTQuNTA3OSA5My45NjUzIDU0LjMzMzkgOTMuODk4MSA1NC4xNzI1QzkzLjgzMDkgNTQuMDExMiA5My43MzI3IDUzLjg2NiA5My42MDk0IDUzLjc0NkM5My4zNTQ2IDUzLjQ5NiA5My4wMTc1IDUzLjM1NzggOTIuNjY3OCA1My4zNloiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAxIiBkPSJNOTIuNjY3OCA2MS43MTcyQzkyLjMxNzUgNjEuNzE1NSA5MS45OCA2MS44NTQ3IDkxLjcyNTMgNjIuMTA2TDg2LjAwMTIgNjcuNzk4NEw4MC4yNzYxIDYyLjEwMzJDODAuMDIwNCA2MS44NTM0IDc5LjY4MzQgNjEuNzE0NCA3OS4zMzMzIDYxLjcxNDRDNzguOTgzMiA2MS43MTQ0IDc4LjY0NjIgNjEuODUzNCA3OC4zOTA1IDYyLjEwMzJDNzguMjY3MyA2Mi4yMjMyIDc4LjE2OSA2Mi4zNjgzIDc4LjEwMTkgNjIuNTI5N0M3OC4wMzQ3IDYyLjY5MSA3OCA2Mi44NjUxIDc4IDYzLjA0MTFDNzggNjMuMjE3IDc4LjAzNDcgNjMuMzkxMSA3OC4xMDE5IDYzLjU1MjRDNzguMTY5IDYzLjcxMzggNzguMjY3MyA2My44NTkgNzguMzkwNSA2My45Nzg5TDg1LjA1NzEgNzAuNjExNEM4NS4zMTI4IDcwLjg2MTIgODUuNjQ5OSA3MS4wMDAyIDg2IDcxLjAwMDJDODYuMzUwMSA3MS4wMDAyIDg2LjY4NzEgNzAuODYxMiA4Ni45NDI4IDcwLjYxMTRMOTMuNjA5NCA2My45Nzg5QzkzLjczMjcgNjMuODU5IDkzLjgzMDkgNjMuNzEzOCA5My44OTgxIDYzLjU1MjRDOTMuOTY1MyA2My4zOTExIDkzLjk5OTkgNjMuMjE3IDkzLjk5OTkgNjMuMDQxMUM5My45OTk5IDYyLjg2NTEgOTMuOTY1MyA2Mi42OTEgOTMuODk4MSA2Mi41Mjk3QzkzLjgzMDkgNjIuMzY4MyA5My43MzI3IDYyLjIyMzIgOTMuNjA5NCA2Mi4xMDMyQzkzLjM1NDYgNjEuODUzMSA5My4wMTc1IDYxLjcxNSA5Mi42Njc4IDYxLjcxNzJaIiBmaWxsPSIjMjU2M0VCIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtNDswIDAiIGR1cj0iMnMiIGJlZ2luPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NDRfMTU2NzMiIHgxPSI2NCIgeTE9IjMxIiB4Mj0iNjQiIHkyPSI5Ny4xMjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNEQkVBRkUiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCRkRCRkUiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NDRfMTU2NzMiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","thermometer-warmer":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRoZXJtb21ldGVyLXdhcm1lciIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NDRfMTU2ODYpIj4KPGcgaWQ9IlRoZXJtb21ldGVyIE1lcmN1cnkiPgo8Y2lyY2xlIGlkPSJSZXNlcnZvaXIiIGN4PSI2NCIgY3k9IjgzIiByPSI5IiBmaWxsPSIjREMyNjI2Ii8+CjxyZWN0IGlkPSJWYWx1ZSIgeD0iNjEiIHk9IjUwIiB3aWR0aD0iNiIgaGVpZ2h0PSIyOSIgcng9IjMiIGZpbGw9IiNEQzI2MjYiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0yOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9yZWN0Pgo8L2c+CjxnIGlkPSJUaGVybW9tZXRlciBHbGFzcyI+CjxwYXRoIGlkPSJHbGFzcyIgZD0iTTUwLjUgODMuMTkxNEM1MC40OTUyIDgxLjA1NjYgNTEuMDE3NSA3OC45NTEgNTIuMDIzNCA3Ny4wNTE4QzUzLjAyOTQgNzUuMTUyNSA1NC40OTAxIDczLjUxNCA1Ni4yODQxIDcyLjI3NTRDNTYuNDE5MiA3Mi4xODIxIDU2LjQ5OTkgNzIuMDI4NCA1Ni41IDcxLjg2NDNWMzguNzc5M0M1Ni41IDM2Ljg1MzQgNTcuMjg2NCAzNS4wMDI5IDU4LjY5MTQgMzMuNjM2N0M2MC4wOTY5IDMyLjI3IDYyLjAwNjQgMzEuNSA2NCAzMS41QzY1Ljk5MzUgMzEuNSA2Ny45MDMgMzIuMjcgNjkuMzA4NiAzMy42MzY3QzcwLjcxMzYgMzUuMDAyOSA3MS41IDM2Ljg1MzQgNzEuNSAzOC43NzkzVjQyLjA0NjlINjVDNjQuNzIzOSA0Mi4wNDY5IDY0LjUgNDIuMjcwOCA2NC41IDQyLjU0NjlDNjQuNSA0Mi44MjMgNjQuNzIzOCA0My4wNDY5IDY1IDQzLjA0NjlINzEuNVY0OS44MjYySDY1QzY0LjcyMzggNDkuODI2MiA2NC41IDUwLjA1IDY0LjUgNTAuMzI2MkM2NC41MDAxIDUwLjYwMjIgNjQuNzIzOSA1MC44MjYyIDY1IDUwLjgyNjJINzEuNVY1Ny42MDQ1SDY1QzY0LjcyNCA1Ny42MDQ1IDY0LjUwMDIgNTcuODI4NiA2NC41IDU4LjEwNDVDNjQuNSA1OC4zODA2IDY0LjcyMzggNTguNjA0NSA2NSA1OC42MDQ1SDcxLjVWNzEuODM5OEM3MS41IDcyLjAwNCA3MS41ODA3IDcyLjE1NzYgNzEuNzE1OCA3Mi4yNTFDNzMuNTEzMiA3My40OTE5IDc0Ljk3NjMgNzUuMTM0NCA3NS45ODI0IDc3LjAzODFDNzYuOTg4NCA3OC45NDE2IDc3LjUwODYgODEuMDUxOCA3Ny41IDgzLjE5MDRWODMuMTkyNEM3Ny40OTk5IDkwLjU0MzEgNzEuNDgwMSA5Ni41IDY0IDk2LjVDNTYuNTE5OSA5Ni41IDUwLjUgOTAuNTQzMSA1MC41IDgzLjE5MjRWODMuMTkxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODQ0XzE1Njg2KSIgc3Ryb2tlPSIjQkZEQkZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGcgaWQ9IkFycm93cyI+CjxwYXRoIGlkPSJBcnJvdyAzIiBkPSJNOTIuNjY3OCA3MC45OTc0QzkyLjMxNzUgNzAuOTk5MSA5MS45OCA3MC44NTk5IDkxLjcyNTMgNzAuNjA4Nkw4Ni4wMDEyIDY0LjkxNjJMODAuMjc2MSA3MC42MTE0QzgwLjAyMDQgNzAuODYxMiA3OS42ODM0IDcxLjAwMDIgNzkuMzMzMyA3MS4wMDAyQzc4Ljk4MzIgNzEuMDAwMiA3OC42NDYyIDcwLjg2MTIgNzguMzkwNSA3MC42MTE0Qzc4LjI2NzMgNzAuNDkxNCA3OC4xNjkgNzAuMzQ2MyA3OC4xMDE5IDcwLjE4NDlDNzguMDM0NyA3MC4wMjM2IDc4IDY5Ljg0OTUgNzggNjkuNjczNUM3OCA2OS40OTc2IDc4LjAzNDcgNjkuMzIzNSA3OC4xMDE5IDY5LjE2MjJDNzguMTY5IDY5LjAwMDggNzguMjY3MyA2OC44NTU2IDc4LjM5MDUgNjguNzM1N0w4NS4wNTcxIDYyLjEwMzJDODUuMzEyOCA2MS44NTM0IDg1LjY0OTkgNjEuNzE0NCA4NiA2MS43MTQ0Qzg2LjM1MDEgNjEuNzE0NCA4Ni42ODcxIDYxLjg1MzQgODYuOTQyOCA2Mi4xMDMyTDkzLjYwOTQgNjguNzM1N0M5My43MzI3IDY4Ljg1NTYgOTMuODMwOSA2OS4wMDA4IDkzLjg5ODEgNjkuMTYyMkM5My45NjUzIDY5LjMyMzUgOTMuOTk5OSA2OS40OTc2IDkzLjk5OTkgNjkuNjczNUM5My45OTk5IDY5Ljg0OTUgOTMuOTY1MyA3MC4wMjM2IDkzLjg5ODEgNzAuMTg0OUM5My44MzA5IDcwLjM0NjMgOTMuNzMyNyA3MC40OTE0IDkzLjYwOTQgNzAuNjExNEM5My4zNTQ2IDcwLjg2MTUgOTMuMDE3NSA3MC45OTk2IDkyLjY2NzggNzAuOTk3NFoiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMiIgZD0iTTkyLjY2NzggNjIuNjQwMkM5Mi4zMTc1IDYyLjY0MiA5MS45OCA2Mi41MDI3IDkxLjcyNTMgNjIuMjUxNEw4Ni4wMDEyIDU2LjU1OUw4MC4yNzYxIDYyLjI1NDJDODAuMDIwNCA2Mi41MDQxIDc5LjY4MzQgNjIuNjQzMSA3OS4zMzMzIDYyLjY0MzFDNzguOTgzMiA2Mi42NDMxIDc4LjY0NjIgNjIuNTA0MSA3OC4zOTA1IDYyLjI1NDJDNzguMjY3MyA2Mi4xMzQyIDc4LjE2OSA2MS45ODkxIDc4LjEwMTkgNjEuODI3N0M3OC4wMzQ3IDYxLjY2NjQgNzggNjEuNDkyMyA3OCA2MS4zMTY0Qzc4IDYxLjE0MDQgNzguMDM0NyA2MC45NjYzIDc4LjEwMTkgNjAuODA1Qzc4LjE2OSA2MC42NDM3IDc4LjI2NzMgNjAuNDk4NSA3OC4zOTA1IDYwLjM3ODVMODUuMDU3MSA1My43NDZDODUuMzEyOCA1My40OTYyIDg1LjY0OTkgNTMuMzU3MiA4NiA1My4zNTcyQzg2LjM1MDEgNTMuMzU3MiA4Ni42ODcxIDUzLjQ5NjIgODYuOTQyOCA1My43NDZMOTMuNjA5NCA2MC4zNzg1QzkzLjczMjcgNjAuNDk4NSA5My44MzA5IDYwLjY0MzcgOTMuODk4MSA2MC44MDVDOTMuOTY1MyA2MC45NjYzIDkzLjk5OTkgNjEuMTQwNCA5My45OTk5IDYxLjMxNjRDOTMuOTk5OSA2MS40OTIzIDkzLjk2NTMgNjEuNjY2NCA5My44OTgxIDYxLjgyNzdDOTMuODMwOSA2MS45ODkxIDkzLjczMjcgNjIuMTM0MiA5My42MDk0IDYyLjI1NDJDOTMuMzU0NiA2Mi41MDQzIDkzLjAxNzUgNjIuNjQyNSA5Mi42Njc4IDYyLjY0MDJaIiBmaWxsPSIjRUY0NDQ0Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtNDswIDAiIGR1cj0iMnMiIGJlZ2luPSIwLjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMSIgZD0iTTkyLjY2NzggNTQuMjgzQzkyLjMxNzUgNTQuMjg0OCA5MS45OCA1NC4xNDU2IDkxLjcyNTMgNTMuODk0M0w4Ni4wMDEyIDQ4LjIwMThMODAuMjc2MSA1My44OTdDODAuMDIwNCA1NC4xNDY5IDc5LjY4MzQgNTQuMjg1OSA3OS4zMzMzIDU0LjI4NTlDNzguOTgzMiA1NC4yODU5IDc4LjY0NjIgNTQuMTQ2OSA3OC4zOTA1IDUzLjg5N0M3OC4yNjczIDUzLjc3NzEgNzguMTY5IDUzLjYzMTkgNzguMTAxOSA1My40NzA2Qzc4LjAzNDcgNTMuMzA5MiA3OCA1My4xMzUxIDc4IDUyLjk1OTJDNzggNTIuNzgzMiA3OC4wMzQ3IDUyLjYwOTIgNzguMTAxOSA1Mi40NDc4Qzc4LjE2OSA1Mi4yODY1IDc4LjI2NzMgNTIuMTQxMyA3OC4zOTA1IDUyLjAyMTNMODUuMDU3MSA0NS4zODg5Qzg1LjMxMjggNDUuMTM5IDg1LjY0OTkgNDUgODYgNDVDODYuMzUwMSA0NSA4Ni42ODcxIDQ1LjEzOSA4Ni45NDI4IDQ1LjM4ODlMOTMuNjA5NCA1Mi4wMjEzQzkzLjczMjcgNTIuMTQxMyA5My44MzA5IDUyLjI4NjUgOTMuODk4MSA1Mi40NDc4QzkzLjk2NTMgNTIuNjA5MiA5My45OTk5IDUyLjc4MzIgOTMuOTk5OSA1Mi45NTkyQzkzLjk5OTkgNTMuMTM1MSA5My45NjUzIDUzLjMwOTIgOTMuODk4MSA1My40NzA2QzkzLjgzMDkgNTMuNjMxOSA5My43MzI3IDUzLjc3NzEgOTMuNjA5NCA1My44OTdDOTMuMzU0NiA1NC4xNDcxIDkzLjAxNzUgNTQuMjg1MyA5Mi42Njc4IDU0LjI4M1oiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg0NF8xNTY4NiIgeDE9IjY0IiB5MT0iMzEiIHgyPSI2NCIgeTI9Ijk3LjEyMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0RCRUFGRSIgc3RvcC1vcGFjaXR5PSIwLjI1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JGREJGRSIgc3RvcC1vcGFjaXR5PSIwLjI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg0NF8xNTY4NiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",thunderstorms:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRodW5kZXJzdG9ybXMiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzk5MTEpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjUgNDguNDc0NkM2MC4xMjI4IDQwLjYxMTEgNzAuMjk3NiAzNy4zOCA3OC44MTUyIDQwLjk0MzRDODcuMzIxNSA0NC41MDIzIDkyLjEzODEgNTQuMDAyNiA4OS45MDMxIDYyLjk2NDhMODkuNzQxOSA2My42MTQzTDkwLjQxMDkgNjMuNTg1Qzk3LjQyMDUgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE5IDg4LjQ5OTcgOTAuOTc3MyA4OC41SDM3Ljk1MzlDMzEuMTI3NiA4OC41MDE4IDI1LjIwMyA4My4xNzA5IDI0LjU1OTMgNzYuMzYwNEMyMy45MTU5IDY5LjU1MTggMjguNzM3MSA2My4yMTI0IDM1LjQ0MzEgNjEuOTQ1M0wzNS45MjY1IDYxLjg1MzVMMzUuODQyNSA2MS4zNjkxQzM1LjAyNTggNTYuNjIzOSAzNy4xMjU5IDUxLjcxNjggNDEuMTA1MiA0OS4wMTI3QzQ1LjA5NTIgNDYuMzAxNCA1MC40NDYxIDQ2LjE1MzcgNTQuNTc5OCA0OC42Mzk2TDU1LjAwMjcgNDguODk0NUw1NS4yNjI1IDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF85OTExKSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iTGlnaHRuaW5nIj4KPHBhdGggaWQ9IkxpZ2h0bmluZyBCb2x0IiBkPSJNNzEuMTcyOSA2OC41TDYzLjU1NjYgODMuMDQxTDYzLjE3MjkgODMuNzcyNUg3NS4wMDJMNTYuOTUyMSAxMDcuODkyTDYwLjQ4OTMgOTEuMDExN0w2MC42MTYyIDkwLjQwOTJINTIuNzA0MUw2MC4zNTU1IDY4LjVINzEuMTcyOVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4Xzk5MTEpIiBzdHJva2U9IiNGNkE4MjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzE7MDsxOzA7MTswOzE7MSIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4yNTswLjMzOzAuNDI7MC41OzAuNTc7MC42MzswLjY3OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfOTkxMSIgeDE9IjY0LjAwMDkiIHkxPSIzOSIgeDI9IjY0LjAwMDkiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF85OTExIiB4MT0iNjQuNTI4IiB5MT0iNjYuMDM3NyIgeDI9Ijg0LjQxNDQiIHkyPSI3Ny40NTcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGN0IyM0IiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjZBODIzIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85OTExIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","thunderstorms-rain":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRodW5kZXJzdG9ybXMtcmFpbiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfOTkzMykiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyNSA0OC40NzQ2QzYwLjEyMjggNDAuNjExMSA3MC4yOTc2IDM3LjM4IDc4LjgxNTIgNDAuOTQzNEM4Ny4zMjE1IDQ0LjUwMjMgOTIuMTM4MSA1NC4wMDI2IDg5LjkwMzEgNjIuOTY0OEw4OS43NDE5IDYzLjYxNDNMOTAuNDEwOSA2My41ODVDOTcuNDIwNSA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTkgODguNDk5NyA5MC45NzczIDg4LjVIMzcuOTUzOUMzMS4xMjc2IDg4LjUwMTggMjUuMjAzIDgzLjE3MDkgMjQuNTU5MyA3Ni4zNjA0QzIzLjkxNTkgNjkuNTUxOCAyOC43MzcxIDYzLjIxMjQgMzUuNDQzMSA2MS45NDUzTDM1LjkyNjUgNjEuODUzNUwzNS44NDI1IDYxLjM2OTFDMzUuMDI1OCA1Ni42MjM5IDM3LjEyNTkgNTEuNzE2OCA0MS4xMDUyIDQ5LjAxMjdDNDUuMDk1MiA0Ni4zMDE0IDUwLjQ0NjEgNDYuMTUzNyA1NC41Nzk4IDQ4LjYzOTZMNTUuMDAyNyA0OC44OTQ1TDU1LjI2MjUgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4Xzk5MzMpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjxnIGlkPSJQcmVjaXBpdGF0aW9uIj4KPGcgaWQ9IlJhaW5kcm9wcyI+CjxwYXRoIGlkPSJSYWluZHJvcCAxIiBkPSJNNTIgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iUmFpbmRyb3AgMiIgZD0iTTY0IDgzVjk1IiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAzIiBkPSJNNzYgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxnIGlkPSJMaWdodG5pbmciPgo8cGF0aCBpZD0iTGlnaHRuaW5nIEJvbHQiIGQ9Ik03MS4xNzI5IDY4LjVMNjMuNTU2NiA4My4wNDFMNjMuMTcyOSA4My43NzI1SDc1LjAwMkw1Ni45NTIxIDEwNy44OTJMNjAuNDg5MyA5MS4wMTE3TDYwLjYxNjIgOTAuNDA5Mkg1Mi43MDQxTDYwLjM1NTUgNjguNUg3MS4xNzI5WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE4NThfOTkzMykiIHN0cm9rZT0iI0Y2QTgyMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MTswOzE7MDsxOzA7MTsxIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI1OzAuMzM7MC40MjswLjU7MC41NzswLjYzOzAuNjc7MSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85OTMzIiB4MT0iNjQuMDAwOSIgeTE9IjM5IiB4Mj0iNjQuMDAwOSIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xODU4Xzk5MzMiIHgxPSI2NC41MjgiIHkxPSI2Ni4wMzc3IiB4Mj0iODQuNDE0NCIgeTI9Ijc3LjQ1NzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3QjIzQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNkE4MjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODU4Xzk5MzMiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","uv-index":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InV2LWluZGV4IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTgzN180OTMwKSI+CjxnIGlkPSJVViBTdW4iPgo8bWFzayBpZD0ibWFzazBfMTgzN180OTMwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+CjxwYXRoIGlkPSJDdXRvdXQiIGQ9Ik0xMjggMEgwVjEyOEg2NFY4NUM2NCA3My40MDIgNzMuNDAyIDY0IDg1IDY0SDEyOFYwWiIgZmlsbD0iYmxhY2siLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4MzdfNDkzMCkiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjY0IiBjeT0iNjMuOTk5OSIgcj0iMTkuNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4MzdfNDkzMCkiIHN0cm9rZT0iI0Y4QUYxOCIvPgo8ZyBpZD0iUmF5cyI+CjxwYXRoIGQ9Ik02MSAxOUM2MSAxNy4zNDMxIDYyLjM0MzEgMTYgNjQgMTZDNjUuNjU2OCAxNiA2NyAxNy4zNDMxIDY3IDE5VjMzQzY3IDM0LjY1NjkgNjUuNjU2OCAzNiA2NCAzNkM2Mi4zNDMxIDM2IDYxIDM0LjY1NjkgNjEgMzNWMTlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik05My42OTg1IDMwLjA1ODlDOTQuODcgMjguODg3MyA5Ni43Njk2IDI4Ljg4NzMgOTcuOTQxMSAzMC4wNTg5Qzk5LjExMjcgMzEuMjMwNCA5OS4xMTI3IDMzLjEyOTkgOTcuOTQxMSAzNC4zMDE1TDg4LjA0MTYgNDQuMjAxQzg2Ljg3MDEgNDUuMzcyNiA4NC45NzA2IDQ1LjM3MjYgODMuNzk5IDQ0LjIwMUM4Mi42Mjc0IDQzLjAyOTQgODIuNjI3NCA0MS4xMjk5IDgzLjc5OSAzOS45NTg0TDkzLjY5ODUgMzAuMDU4OVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTEwOSA2MUMxMTAuNjU3IDYxIDExMiA2Mi4zNDMyIDExMiA2NEMxMTIgNjUuNjU2OSAxMTAuNjU3IDY3IDEwOSA2N0g5NUM5My4zNDMxIDY3IDkyIDY1LjY1NjkgOTIgNjRDOTIgNjIuMzQzMiA5My4zNDMxIDYxIDk1IDYxSDEwOVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTk3Ljk0MTEgOTMuNjk4NUM5OS4xMTI3IDk0Ljg3MDEgOTkuMTEyNyA5Ni43Njk2IDk3Ljk0MTEgOTcuOTQxMUM5Ni43Njk2IDk5LjExMjcgOTQuODcwMSA5OS4xMTI3IDkzLjY5ODUgOTcuOTQxMUw4My43OTkgODguMDQxNkM4Mi42Mjc0IDg2Ljg3MDEgODIuNjI3NCA4NC45NzA2IDgzLjc5OSA4My43OTlDODQuOTcwNiA4Mi42Mjc0IDg2Ljg3MDEgODIuNjI3NCA4OC4wNDE2IDgzLjc5OUw5Ny45NDExIDkzLjY5ODVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik02MSA5NUM2MSA5My4zNDMxIDYyLjM0MzEgOTIgNjQgOTJDNjUuNjU2OCA5MiA2NyA5My4zNDMxIDY3IDk1VjEwOUM2NyAxMTAuNjU3IDY1LjY1NjggMTEyIDY0IDExMkM2Mi4zNDMxIDExMiA2MSAxMTAuNjU3IDYxIDEwOVY5NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTM5Ljk1ODQgODMuNzk5QzQxLjEyOTkgODIuNjI3NCA0My4wMjk0IDgyLjYyNzQgNDQuMjAxIDgzLjc5OUM0NS4zNzI2IDg0Ljk3MDYgNDUuMzcyNiA4Ni44NzAxIDQ0LjIwMSA4OC4wNDE2TDM0LjMwMTUgOTcuOTQxMUMzMy4xMjk5IDk5LjExMjcgMzEuMjMwNCA5OS4xMTI3IDMwLjA1ODkgOTcuOTQxMUMyOC44ODczIDk2Ljc2OTYgMjguODg3MyA5NC44NyAzMC4wNTg5IDkzLjY5ODVMMzkuOTU4NCA4My43OTlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zMyA2MUMzNC42NTY5IDYxIDM2IDYyLjM0MzEgMzYgNjRDMzYgNjUuNjU2OCAzNC42NTY5IDY3IDMzIDY3SDE5QzE3LjM0MzEgNjcgMTYgNjUuNjU2OCAxNiA2NEMxNiA2Mi4zNDMxIDE3LjM0MzEgNjEgMTkgNjFIMzNaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik00NC4yMDEgMzkuOTU4NEM0NS4zNzI2IDQxLjEyOTkgNDUuMzcyNiA0My4wMjk0IDQ0LjIwMSA0NC4yMDFDNDMuMDI5NCA0NS4zNzI2IDQxLjEyOTkgNDUuMzcyNiAzOS45NTg0IDQ0LjIwMUwzMC4wNTg5IDM0LjMwMTVDMjguODg3MyAzMy4xMjk5IDI4Ljg4NzMgMzEuMjMwNSAzMC4wNTg5IDMwLjA1ODlDMzEuMjMwNSAyOC44ODczIDMzLjEyOTkgMjguODg3MyAzNC4zMDE1IDMwLjA1ODlMNDQuMjAxIDM5Ljk1ODRaIiBmaWxsPSIjRjhBRjE4Ii8+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNjQuMCA2NC4wOzM2MCA2NC4wIDY0LjAiIGR1cj0iNnMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2c+CjwvZz4KPHBhdGggaWQ9IkZpeCIgZD0iTTYzLjUgODMuNUM2NC4wMzU5IDcyLjAzMDUgNzEuNzU2NCA2My44MzEyIDgzLjUgNjMuNTAwMSIgc3Ryb2tlPSIjRjhBRjE4Ii8+CjwvZz4KPC9nPgo8cGF0aCBpZD0iVVYiIGQ9Ik04Ny42MDYgOTcuNDE0Qzg1Ljg0MiA5Ny40MTQgODQuNDg2IDk3IDgzLjUzOCA5Ni4xNzJDODIuNTkgOTUuMzQ0IDgyLjExNiA5NC4xNTYgODIuMTE2IDkyLjYwOFY4NC4xODRIODUuNDgyVjkyLjYyNkM4NS40ODIgOTMuOTgyIDg2LjE5NiA5NC42NiA4Ny42MjQgOTQuNjZDODkuMDQgOTQuNjYgODkuNzQ4IDkzLjk4MiA4OS43NDggOTIuNjI2Vjg0LjE4NEg5My4xMTRWOTIuNjA4QzkzLjExNCA5NC4xNjggOTIuNjQgOTUuMzYyIDkxLjY5MiA5Ni4xOUM5MC43NDQgOTcuMDA2IDg5LjM4MiA5Ny40MTQgODcuNjA2IDk3LjQxNFpNMTAxLjUyNiA4OS40MjJMMTAzLjAyIDg0LjE4NEgxMDYuNDRMMTAyLjMgOTdIOTguNzM2M0w5NC41OTYzIDg0LjE4NEg5OC4wNTIzTDk5LjU2NDMgODkuNDA0TDEwMC41NTQgOTMuNDM2TDEwMS41MjYgODkuNDIyWiIgZmlsbD0iIzIwMjkzOSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTgzN180OTMwIiB4MT0iNjQiIHkxPSI0My45OTk5IiB4Mj0iNjQiIHkyPSI4My45OTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQkJGMjQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjhBRjE4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTgzN180OTMwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","weather-alarm":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndlYXRoZXItYWxhcm0iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xOTA1XzE5MDcwKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xOTA1XzE5MDcwKSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iQWxlcnQiPgo8cGF0aCBpZD0iRXhjbGFtYXRpb24iIGQ9Ik04OS44MzUgNjguNzVDOTAuNzk3MiA2Ny4wODMzIDkzLjIwMjggNjcuMDgzMyA5NC4xNjUgNjguNzVMMTA2LjI4OSA4OS43NUMxMDcuMjUxIDkxLjQxNjcgMTA2LjA0OSA5My41IDEwNC4xMjQgOTMuNUg3OS44NzZDNzguMDExNSA5My41IDc2LjgyNDMgOTEuNTQ0NyA3Ny42MjcgODkuOTA3Mkw3Ny43MTA5IDg5Ljc1TDg5LjgzNSA2OC43NVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xOTA1XzE5MDcwKSIgc3Ryb2tlPSIjMjAyOTM5Ii8+CjxwYXRoIGlkPSJFeGNsYW1hdGlvbk1hcmsiIGQ9Ik05Mi43NTgyIDg0LjU5SDkxLjI2NDJMOTAuNDE4MiA3OS41NjhWNzYuMTg0SDkzLjU4NjJWNzkuNTY4TDkyLjc1ODIgODQuNTlaTTkzLjYwNDIgODlIOTAuNDAwMlY4NS45OTRIOTMuNjA0MlY4OVoiIGZpbGw9IndoaXRlIi8+CjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTsxOzA7MDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI5NDswLjU7MC43OTQ7MSIvPjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE5MDVfMTkwNzAiIHgxPSI2NC4wMDA4IiB5MT0iMzkiIHgyPSI2NC4wMDA4IiB5Mj0iODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0YzRjdGRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFNkVGRkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE5MDVfMTkwNzAiIHgxPSI5MiIgeTE9IjY3IiB4Mj0iOTIiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzY0RDZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwMjkzOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE5MDVfMTkwNzAiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=",wind:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndpbmQiPgo8ZyBpZD0iV2luZCI+CjxwYXRoIGlkPSJXaW5kIExpbmUgMSIgZD0iTTg3Ljc5IDQwLjEzNTJDOTMuOTc1NiAzMy4zNDcgMTA1IDM4LjQwNDkgMTA1IDQ3LjQ0NjNDMTA1IDUzLjI3NDYgMTAwLjUyMiA1OCA5NSA1OEgyNCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI1MCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIHZhbHVlcz0iMDsxMDAwIiBkdXI9IjZzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPgo8cGF0aCBpZD0iV2luZCBMaW5lIDFfMiIgZD0iTTYwLjEyODEgODcuODY4QzY2LjQyMDIgOTQuNTE4NiA3OCA4OS44NzE3IDc4IDgwLjU1NTZDNzggNzQuNzI2MyA3My4zNTAzIDcwIDY3LjYxNTQgNzBDNjEuODgwNSA3MCAyNCA3MCAyNCA3MCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI1MCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIHZhbHVlcz0iMDsxMDAwIiBkdXI9IjZzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+CjwvZz4KPC9nPgo8L3N2Zz4=","wind-alert":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndpbmQtYWxlcnQiPgo8ZyBpZD0iQWxlcnQiPgo8cGF0aCBpZD0iRXhjbGFtYXRpb24iIGQ9Ik05OC44MzUgNzAuNzVDOTkuNzk3MiA2OS4wODMzIDEwMi4yMDMgNjkuMDgzMyAxMDMuMTY1IDcwLjc1TDExNS4yODkgOTEuNzVDMTE2LjI1MSA5My40MTY3IDExNS4wNDkgOTUuNSAxMTMuMTI0IDk1LjVIODguODc2Qzg3LjAxMTUgOTUuNSA4NS44MjQzIDkzLjU0NDcgODYuNjI3IDkxLjkwNzJMODYuNzEwOSA5MS43NUw5OC44MzUgNzAuNzVaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg2OF80Mzc0KSIgc3Ryb2tlPSIjMjAyOTM5Ii8+CjxwYXRoIGlkPSJFeGNsYW1hdGlvbk1hcmsiIGQ9Ik0xMDEuNzU4IDg2LjU5SDEwMC4yNjRMOTkuNDE4MiA4MS41NjhWNzguMTg0SDEwMi41ODZWODEuNTY4TDEwMS43NTggODYuNTlaTTEwMi42MDQgOTFIOTkuNDAwMlY4Ny45OTRIMTAyLjYwNFY5MVoiIGZpbGw9IndoaXRlIi8+CjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTsxOzA7MDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI5NDswLjU7MC43OTQ7MSIvPjwvZz4KPGcgaWQ9IldpbmQiPgo8cGF0aCBpZD0iV2luZCBMaW5lIDEiIGQ9Ik04Ny43OSA0MC4xMzUyQzkzLjk3NTYgMzMuMzQ3IDEwNSAzOC40MDQ5IDEwNSA0Ny40NDYzQzEwNSA1My4yNzQ2IDEwMC41MjIgNTggOTUgNThIMjQiIHN0cm9rZT0iI0UyRThGMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNTAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiB2YWx1ZXM9IjA7MTAwMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD4KPHBhdGggaWQ9IldpbmQgTGluZSAxXzIiIGQ9Ik02MC4xMjgxIDg3Ljg2OEM2Ni40MjAyIDk0LjUxODYgNzggODkuODcxNyA3OCA4MC41NTU2Qzc4IDc0LjcyNjMgNzMuMzUwMyA3MCA2Ny42MTU0IDcwQzYxLjg4MDUgNzAgMjQgNzAgMjQgNzAiIHN0cm9rZT0iI0UyRThGMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNTAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiB2YWx1ZXM9IjA7MTAwMCIgZHVyPSI2cyIgYmVnaW49IjAuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODY4XzQzNzQiIHgxPSIxMDEiIHkxPSI2OSIgeDI9IjEwMSIgeTI9Ijk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzNjRENkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjAyOTM5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+"},be=new Set(["","unknown","unavailable"]),we=["temperature","precipitation_probability"],Te=new Set(["meteocons","custom"]),Oe={temp:"temperature",temperature:"temperature",rain_chance:"precipitation_probability",precipitation_probability:"precipitation_probability",precip_probability:"precipitation_probability",probability:"precipitation_probability",pop:"precipitation_probability",rain:"precipitation",precipitation:"precipitation",humidity:"humidity",hum:"humidity",wind:"wind_speed",wind_speed:"wind_speed",gust:"wind_gust_speed",wind_gust:"wind_gust_speed",wind_gust_speed:"wind_gust_speed",uv:"uv_index",uv_index:"uv_index",cloud:"cloud_coverage",clouds:"cloud_coverage",cloud_coverage:"cloud_coverage"},xe={"clear-night":"clear-night",cloudy:"cloudy",exceptional:"weather-alarm",fog:"fog",hail:"hail",lightning:"thunderstorms","lightning-rainy":"thunderstorms-rain",partlycloudy:"partly-cloudy-day",pouring:"rain",rainy:"rain",snowy:"snow","snowy-rainy":"sleet",sunny:"clear-day",windy:"wind","windy-variant":"wind-alert"},ve=new Map;function Se(i){return i<=0?"#3aa7ff":i<=8?"#50c5d8":i<=15?"#9bd57b":i<=22?"#ffd34a":i<=28?"#ff9d24":"#ff5d38"}function Le(i,e){var t;if(e&&(null==i?void 0:i.hass))return null===(t=i.hass.states)||void 0===t?void 0:t[e]}function ke(i){const e=void 0===(null==i?void 0:i.state)||null===(null==i?void 0:i.state)?"":String(i.state);return be.has(e.toLowerCase())?"":e}function Ce(i,e){const t=ke(Le(i,e));if(!t)return;const a=Number(t);return Number.isFinite(a)?a:void 0}function _e(i,e,t=!1){if(null==i||""===i)return"—";const a=Number(i);return Number.isFinite(a)?t&&Math.abs(a)>=1e3?`${(a/1e3).toFixed(1)}k`:a.toFixed(e):String(i)}function fe(i,e){var t;const a=Le(i,e),n=ke(a);if(!n)return"—";const o=(null===(t=null==a?void 0:a.attributes)||void 0===t?void 0:t.unit_of_measurement)||"",r=Number(n);if(!Number.isFinite(r))return o?`${n} ${o}`:n;const c=_e(r,Number.isInteger(r)?0:1);return o?`${c} ${o}`:c}function Ye(i,e){const t=Ce(i,e);return void 0===t?"—°":`${t.toFixed(1)}°`}function Qe(i,e,t){const a=Number(i);if(Number.isFinite(a)&&!(a<=0))return Math.max(e,Math.min(t,a))}function Ee(i){if(!i)return"Weather";const e={"clear-night":"Clear night",partlycloudy:"Partly cloudy","lightning-rainy":"Storm rain","snowy-rainy":"Sleet","windy-variant":"Windy"};return e[i]?e[i]:i.replace(/[-_]/g," ").replace(/\b\w/g,(i=>i.toUpperCase()))}function Ue(i){return(i||"unknown").replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function Ze(i){return xe[i]||"partly-cloudy-day"}function Ge(i){return Ae[i]}function We(i,e){const t=i.replace(/\/+$/,""),a=e.replace(/^\/+/,"");return t?`${t}/${a}`:a}function Pe(i,e,t,a,n="img"){const o="string"==typeof i?void 0:i,r=o?function(i){const e=String(i.icon_set||"").trim().toLowerCase();return Te.has(e)?e:"meteocons"}(o):i,c=o&&"custom"===r?function(i,e){const t=i.icon_pack||{},a=(t.icons||i.icon_map||{})[e],n=String(t.base_path||i.icon_base_path||"").trim();if(a){const i=String(a).trim();return i?function(i){return/^(data:|https?:\/\/|\/\/|\/)/i.test(i)}(i)||!n?i:We(n,i):""}return n?We(n,`${e}.${String(t.extension||i.icon_extension||"svg").trim().replace(/^\./,"")||"svg"}`):""}(o,e):"";if(c)return E`
      <img
        class=${t}
        src=${c}
        alt=${a}
        draggable="false"
      />
    `;const s=Ge(e);if("inline"===n){const i=function(i){const e=ve.get(i);if(void 0!==e)return e;const[,t]=String(Ge(i)||"").split("base64,");let a="";if(t&&"function"==typeof atob)try{a=atob(t)}catch(i){a=""}return ve.set(i,a),a}(e);return i?E`
        <span class=${t} role="img" aria-label=${a}>
          ${me(i)}
        </span>
      `:E`
      <img
        class=${t}
        src=${s}
        alt=${a}
        draggable="false"
      />
    `}return E`
    <img
      class=${t}
      src=${s}
      alt=${a}
      draggable="false"
    />
  `}function $e(i,e){return i&&i.includes(":")?i:e}function Re(i,e){const t=function(i,e){const t=Number.isFinite(Number(e.rain_rate_threshold))?Number(e.rain_rate_threshold):0,a=Ce(i,e.rain_rate_sensor);return void 0!==a?a>t:"on"===ke(Le(i,e.rain_state_sensor)).toLowerCase()}(i,e),a=e.name||"Rain",n=e.rain_state_sensor||e.rain_rate_sensor,o=t?$e(e.icon_active||e.icon,"mdi:weather-rainy"):$e(e.icon_inactive||e.icon,"mdi:water-off-outline");let r;if(t){const t=function(i,e,t,a=!1){var n;const o=Le(i,e),r=ke(o);if(!r)return"—";const c=(null===(n=null==o?void 0:o.attributes)||void 0===n?void 0:n.unit_of_measurement)||"",s=_e(r,t,a);return c?`${s} ${c}`:s}(i,e.rain_rate_sensor,1);r="—"===t?"Raining":t}else r="No rain";return{label:a,value:r,entity:n,stateEntity:n,active:t,mdi:o}}function Ve(i){return Array.isArray(i)?i.filter((i=>!!i&&"object"==typeof i)).map((i=>({condition:"string"==typeof i.condition?i.condition:void 0,datetime:"string"==typeof i.datetime?i.datetime:void 0,temperature:i.temperature,precipitation_probability:i.precipitation_probability,precipitation:i.precipitation,humidity:i.humidity,wind_speed:i.wind_speed,wind_gust_speed:i.wind_gust_speed,uv_index:i.uv_index,cloud_coverage:i.cloud_coverage,templow:i.templow}))):[]}function Fe(i,e){if(!e.datetime)return"";const t=new Date(e.datetime);if(Number.isNaN(t.getTime()))return"";const{locale:a,options:n}=function(i){var e;const t=null===(e=null==i?void 0:i.hass)||void 0===e?void 0:e.locale,a=String((null==t?void 0:t.time_format)||"").toLowerCase(),n={hour:"2-digit",minute:"2-digit"};return"12"===a&&(n.hour12=!0),"24"===a&&(n.hour12=!1),{locale:null==t?void 0:t.language,options:n}}(i);return new Intl.DateTimeFormat(a,n).format(t)}function Be(i,e){const t=tt(i,e.datetime),a=Fe(i,e);return t?a?`${t} ${a}`:t:a}function He(i,e){const t=Number(i[e]);return Number.isFinite(t)?t:void 0}function Je(i,e,t){const a=i.reduce(((i,t,a)=>{const n=He(t,e);if(void 0===n)return i;const o=function(i){if(!i.datetime)return;const e=new Date(i.datetime).getTime();return Number.isFinite(e)?e:void 0}(t),r={item:t,index:a,value:n};return void 0!==o&&(r.timestamp=o),i.push(r),i}),[]);if(!a.length)return{points:[],min:0,max:1};const n=a.every((i=>Number.isFinite(i.timestamp))),o=n?[...a].sort(((i,e)=>Number(i.timestamp)-Number(e.timestamp))):a,r=n?Number(o[0].timestamp):0,c=(n?Number(o[o.length-1].timestamp):0)-r,s=a.map((i=>i.value)),{min:l,max:M}=function(i,e){if("precipitation_probability"===i)return{min:0,max:100};let t=Math.min(...e),a=Math.max(...e);if("temperature"===i)t=5*Math.floor((t-2)/5),a=5*Math.ceil((a+2)/5);else{const i=Math.max(.18*(a-t),1);t=Math.max(0,t-i),a+=i}return a<=t&&(a=t+1),{min:t,max:a}}(e,s),g=t.width-t.left-t.right,d=t.height-t.top-t.bottom,N=o.map(((i,e)=>{const a=n&&c>0?t.left+(Number(i.timestamp)-r)/c*g:1===o.length?t.left+g/2:t.left+e/(o.length-1)*g,s=t.top+(M-i.value)/(M-l)*d;return Object.assign(Object.assign({},i),{x:a,y:s})}));return{points:N,min:l,max:M}}function Xe(i){return i<=0?[]:Array.from(new Set([0,Math.floor((i-1)/3),Math.floor(2*(i-1)/3),i-1])).filter((e=>e>=0&&e<i))}function Ke(i){return i.replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function qe(i){if(!i.length)return"";if(1===i.length)return`M ${i[0].x.toFixed(2)} ${i[0].y.toFixed(2)}`;let e=`M ${i[0].x.toFixed(2)} ${i[0].y.toFixed(2)}`;for(let t=0;t<i.length-1;t+=1){const a=i[t],n=i[t+1],o=i[t-1]||a,r=i[t+2]||n,c=a.x+(n.x-o.x)/6,s=a.y+(n.y-o.y)/6,l=n.x-(r.x-a.x)/6,M=n.y-(r.y-a.y)/6;e+=` C ${c.toFixed(2)} ${s.toFixed(2)}, ${l.toFixed(2)} ${M.toFixed(2)}, ${n.x.toFixed(2)} ${n.y.toFixed(2)}`}return e}function it(i,e){if(!i.length)return"";const t=i[0],a=i[i.length-1];return`${qe(i)} L ${a.x.toFixed(2)} ${e.toFixed(2)} L ${t.x.toFixed(2)} ${e.toFixed(2)} Z`}function et(i){if(!i)return"";const e=new Date(i);if(Number.isNaN(e.getTime()))return"";return`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,"0")}-${`${e.getDate()}`.padStart(2,"0")}`}function tt(i,e){var t,a;if(!e)return"";const n=new Date(e);return Number.isNaN(n.getTime())?"":new Intl.DateTimeFormat(null===(a=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.locale)||void 0===a?void 0:a.language,{day:"numeric",month:"long"}).format(n)}function at(i,e){const t=Number(i[e]);return Number.isFinite(t)?t:void 0}function nt(i,e,t){return Math.max(0,Math.min(100,(i-e)/(t-e)*100))}function ot(i){return Qe(i.graph_height,82,260)||118}function rt(i){return Qe(i.graph_horizontal_lines,2,9)||5}function ct(i,e,t,a){const n=t.slice(0,7);if(!n.length)return G;const o=function(i){const e=new Map;return i.forEach(((i,t)=>{const a=et(i.datetime),n=He(i,"temperature");if(!a||void 0===n)return;const o={item:i,value:n,x:0,y:0,index:t},r=e.get(a)||{};(!r.low||n<r.low.value)&&(r.low=o),(!r.high||n>r.high.value)&&(r.high=o),e.set(a,r)})),e}(a),{min:r,max:c}=function(i,e){const t=[];if(i.forEach((i=>{const e=at(i,"templow"),a=at(i,"temperature");void 0!==e&&t.push(e),void 0!==a&&t.push(a)})),e.forEach((i=>{const e=He(i,"temperature");void 0!==e&&t.push(e)})),!t.length)return{min:0,max:1};const a=5*Math.floor((Math.min(...t)-2)/5);let n=5*Math.ceil((Math.max(...t)+2)/5);return n<=a&&(n=a+1),{min:a,max:n}}(n,a),s=et((new Date).toISOString()),l=function(i,e){return Ce(i,e.temp_sensor)}(i,e);return E`
    <section class="weather-daily-forecast">
      <div class="weather-daily-forecast-heading">
        <span>Daily Forecast</span>
      </div>
      ${n.map((t=>{var a,n,M,g;const d=et(t.datetime),N=o.get(d),I=null!==(a=at(t,"templow"))&&void 0!==a?a:null===(n=null==N?void 0:N.low)||void 0===n?void 0:n.value,u=null!==(M=at(t,"temperature"))&&void 0!==M?M:null===(g=null==N?void 0:N.high)||void 0===g?void 0:g.value;if(void 0===I||void 0===u)return G;const h=nt(I,r,c),D=nt(u,r,c),j=Math.max(4,D-h),y=String(t.condition||""),z=Number(t.precipitation_probability),p=Number.isFinite(z)?`Rain ${Math.round(z)}%`:"",m=d===s&&void 0!==l?nt(l,r,c):void 0;return E`
          <div class="weather-daily-row">
            <div class="weather-daily-day">
              <span class="weather-daily-day-name">${function(i,e){var t,a;if(!e)return"";const n=new Date(e);if(Number.isNaN(n.getTime()))return"";const o=et((new Date).toISOString()),r=new Date;r.setDate(r.getDate()+1);const c=et(e);return c===o?"Today":c===et(r.toISOString())?"Tomorrow":new Intl.DateTimeFormat(null===(a=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.locale)||void 0===a?void 0:a.language,{weekday:"long"}).format(n)}(i,t.datetime)}</span>
              <span class="weather-daily-date">${tt(i,t.datetime)}</span>
            </div>
            <div class="weather-daily-condition">
              ${Pe(e,Ze(y),`weather-daily-icon weather-condition-${Ue(y)}`,Ee(y))}
              ${p?E`<span title="Chance of precipitation">${p}</span>`:G}
            </div>
            <div class="weather-daily-low">
              <span>${I.toFixed(0)}°</span>
              ${(null==N?void 0:N.low)?E`<small>${Fe(i,N.low.item)}</small>`:G}
            </div>
            <div class="weather-daily-range">
              <div class="weather-daily-track"></div>
              <div
                class="weather-daily-segment"
                style=${`left:${h.toFixed(1)}%;width:${j.toFixed(1)}%;background:linear-gradient(90deg, ${Se(I)}, ${Se(u)});`}
              ></div>
              ${void 0!==m?E`
                <span class="weather-daily-current-dot" style=${`left:${m.toFixed(1)}%;`}></span>
              `:G}
            </div>
            <div class="weather-daily-high">
              <span>${u.toFixed(0)}°</span>
              ${(null==N?void 0:N.high)?E`<small>${Fe(i,N.high.item)}</small>`:G}
            </div>
          </div>
        `}))}
    </section>
  `}function st(i){i.stopPropagation()}function lt(i){var e;i.preventDefault(),i.stopPropagation();const t=i.currentTarget;try{(null===(e=null==t?void 0:t.hasPointerCapture)||void 0===e?void 0:e.call(t,i.pointerId))&&t.releasePointerCapture(i.pointerId)}catch(i){}}function Mt(i,e,t){e.preventDefault(),e.stopPropagation(),t&&"function"==typeof(null==i?void 0:i._openMoreInfo)&&i._openMoreInfo(t)}function gt(i,e,t){"Enter"!==e.key&&" "!==e.key||Mt(i,e,t)}function dt(i,e,t,a){e.preventDefault(),e.stopPropagation(),t&&a&&"function"==typeof(null==i?void 0:i._setWeatherForecastSourceSelection)&&i._setWeatherForecastSourceSelection(t,a)}function Nt(i,e,t,a,n){var o;if(e.preventDefault(),e.stopPropagation(),"pointermove"===e.type&&"mouse"!==e.pointerType&&0===e.buttons)return;if(!a.length||"function"!=typeof(null==i?void 0:i._setWeatherForecastGraphSelection))return;const r=e.currentTarget;if("pointerdown"===e.type)try{null===(o=null==r?void 0:r.setPointerCapture)||void 0===o||o.call(r,e.pointerId)}catch(i){}const c=e.currentTarget.getBoundingClientRect();if(!c.width)return;const s=(e.clientX-c.left)/c.width,l=Math.max(0,Math.min(n.width,s*n.width)),M=a.reduce(((i,e,t)=>{const n=a[i];return Math.abs(e.x-l)<Math.abs(n.x-l)?t:i}),0);t.forEach((e=>i._setWeatherForecastGraphSelection(e,M)))}function It(i,e,t){const a="function"==typeof(null==i?void 0:i._getWeatherForecastGraphSelection)?i._getWeatherForecastGraphSelection(e):void 0,n=function(i){const e=Date.now();let t=0,a=Number.POSITIVE_INFINITY;return i.forEach(((i,n)=>{const o=i.item.datetime?new Date(i.item.datetime).getTime():Number.NaN;if(!Number.isFinite(o))return;const r=Math.abs(o-e);r<a&&(a=r,t=n)})),t}(t);return t[Math.max(0,Math.min(t.length-1,Number.isFinite(Number(a))?Number(a):n))]||t[0]}function ut(i,e,t,a,n){const o=e.height-e.bottom,r=Math.max(2,n);return[...Array.from({length:r},((i,t)=>{const a=e.top+t/(r-1)*(o-e.top);return U`<line class="weather-conditions-grid-line" x1=${e.left} x2=${e.width-e.right} y1=${a} y2=${a}></line>`})),...t.map((t=>{const n=a[t],r=0===t?" weather-conditions-time-label-start":t===a.length-1?" weather-conditions-time-label-end":"";return U`
        <line class="weather-conditions-time-line" x1=${n.x} x2=${n.x} y1=${e.top} y2=${o}></line>
        <text class=${`weather-conditions-time-label${r}`} x=${n.x} y=${e.height-6}>${Be(i,n.item)}</text>
      `}))]}function ht(i,e,t){const a=i.height-i.bottom,n=Math.max(2,e);return Array.from({length:n},((e,o)=>{const r=1-o/(n-1),c=i.top+o/(n-1)*(a-i.top);return U`<text class="weather-conditions-axis" x=${i.width-2} y=${c}>${t(r)}</text>`}))}function Dt(i,e,t,a,n){const o={width:360,height:ot(e),left:8,right:24,top:15,bottom:24},{points:r,min:c,max:s}=Je(t,"temperature",o);if(r.length<2)return G;const l=o.height-o.bottom,M=It(i,a,r),g=r.reduce(((i,e)=>e.value<i.value?e:i),r[0]),d=r.reduce(((i,e)=>e.value>i.value?e:i),r[0]),N=Xe(r.length),I=function(i,e){if(e<=0||!i.length)return[];if(i.length<=e)return i.map((i=>({point:i,x:i.x})));const t=Math.min(e,i.length),a=i[0].x,n=i[i.length-1].x-a;if(!Number.isFinite(n)||n<=0)return[];const o=e=>i.reduce(((i,t)=>Math.abs(t.x-e)<Math.abs(i.x-e)?t:i),i[0]);if(1===t){const i=a+n/2;return[{point:o(i),x:i}]}return Array.from({length:t},((i,e)=>{const r=a+e/(t-1)*n;return{point:o(r),x:r}}))}(r,function(i){const e=Number(i.temperature_icon_count);return Number.isFinite(e)?Math.max(0,Math.min(72,Math.floor(e))):8}(e)),u=rt(e),h=qe(r),D=it(r,l),j=Ke(a),y=`weather-conditions-temp-line-${j}`,z=`weather-conditions-temp-fill-${j}`;return E`
    <section class="weather-conditions-card weather-conditions-temp">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Temperature</span>
        </div>
        <div class="weather-conditions-selected">
          <span>${Be(i,M.item)}</span>
          <strong>${M.value.toFixed(0)}°</strong>
        </div>
      </div>

      ${I.length?E`
        <div class="weather-conditions-icons">
          ${I.map((i=>{const t=String(i.point.item.condition||""),a=i.x/o.width*100;return E`
              <span class="weather-conditions-icon-slot" style=${`left:${a.toFixed(2)}%;`}>
                ${Pe(e,Ze(t),`weather-conditions-icon weather-condition-${Ue(t)}`,Ee(t))}
              </span>
            `}))}
        </div>
      `:G}

      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${o.width} ${o.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Temperature forecast graph"
          @pointerdown=${e=>Nt(i,e,n,r,o)}
          @pointermove=${e=>Nt(i,e,n,r,o)}
          @pointerup=${lt}
          @pointercancel=${lt}
        >
          <defs>
            <linearGradient id=${z} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(255, 179, 28, 0.66)"></stop>
              <stop offset="52%" stop-color="rgba(255, 179, 28, 0.24)"></stop>
              <stop offset="100%" stop-color="rgba(47, 185, 221, 0.38)"></stop>
            </linearGradient>
            <linearGradient id=${y} x1=${o.left} x2=${o.width-o.right} y1="0" y2="0" gradientUnits="userSpaceOnUse">
              ${r.map(((i,e)=>U`
                <stop offset=${e/(r.length-1)*100+"%"} stop-color=${Se(i.value)}></stop>
              `))}
            </linearGradient>
          </defs>
          ${ut(i,o,N,r,u)}
          <path class="weather-conditions-area" d=${D} fill=${`url(#${z})`}></path>
          <path class="weather-conditions-line-shadow" d=${h}></path>
          <path class="weather-conditions-temp-line" d=${h} stroke=${`url(#${y})`}></path>
          <text class="weather-conditions-extreme" x=${g.x} y=${Math.max(12,g.y-9)}>L</text>
          <text class="weather-conditions-extreme" x=${d.x} y=${Math.max(12,d.y-9)}>H</text>
          <line class="weather-conditions-selected-line" x1=${M.x} x2=${M.x} y1=${o.top} y2=${l}></line>
          ${ht(o,u,(i=>`${(c+(s-c)*i).toFixed(0)}°`))}
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${(M.x/o.width*100).toFixed(2)}%;top:${(M.y/o.height*100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `}function jt(i,e,t,a,n,o){if(t.length<2)return G;const r=`${n}-temperature`,c=`${n}-precipitation`,s=o?[r,c]:null,l=a.includes("temperature")?Dt(i,e,t,r,s||[r]):G,M=a.includes("precipitation_probability")?function(i,e,t,a,n){const o={width:360,height:ot(e),left:8,right:24,top:15,bottom:24},{points:r}=Je(t,"precipitation_probability",o);if(r.length<2)return G;const c=o.height-o.bottom,s=It(i,a,r),l=Xe(r.length),M=rt(e),g=qe(r),d=it(r,c),N=`weather-conditions-rain-fill-${Ke(a)}`;return E`
    <section class="weather-conditions-card weather-conditions-rain">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Chance of Precipitation</span>
        </div>
        <div class="weather-conditions-selected">
          <span>${Be(i,s.item)}</span>
          <strong>${Math.round(s.value)}%</strong>
        </div>
      </div>
      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${o.width} ${o.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Chance of precipitation forecast graph"
          @pointerdown=${e=>Nt(i,e,n,r,o)}
          @pointermove=${e=>Nt(i,e,n,r,o)}
          @pointerup=${lt}
          @pointercancel=${lt}
        >
          <defs>
            <linearGradient id=${N} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(56, 199, 243, 0.48)"></stop>
              <stop offset="100%" stop-color="rgba(56, 199, 243, 0.10)"></stop>
            </linearGradient>
          </defs>
          ${ut(i,o,l,r,M)}
          <path class="weather-conditions-rain-area" d=${d} fill=${`url(#${N})`}></path>
          <path class="weather-conditions-line-shadow" d=${g}></path>
          <path class="weather-conditions-rain-line" d=${g}></path>
          <line class="weather-conditions-selected-line" x1=${s.x} x2=${s.x} y1=${o.top} y2=${c}></line>
          ${ht(o,M,(i=>`${Math.round(100*i)}%`))}
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${(s.x/o.width*100).toFixed(2)}%;top:${(s.y/o.height*100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `}(i,e,t,c,s||[c]):G;return l===G&&M===G?G:E`
    <div class="weather-conditions-panel">
      ${l}
      ${M}
    </div>
  `}function yt(i,e){var t,a;const n=Array.isArray(e.forecast_sources)?e.forecast_sources.filter((i=>null==i?void 0:i.entity)):[],o=e.selected_forecast_entity||e.forecast_entity||e.entity,r=ke(Le(i,o)).toLowerCase(),c=e.name||"Weather",s=Ye(i,e.temp_sensor),l=function(i,e){const t=Ce(i,e);return void 0===t?"—%":`${t.toFixed(0)}%`}(i,e.humidity_sensor),M=Ye(i,e.feels_like_sensor),g=function(i,e){const t=Array.isArray(e.metrics)&&e.metrics.length?e.metrics:function(i){const e=[{entity:i.wind_speed_sensor,name:"Wind"},{entity:i.wind_gust_sensor,name:"Gust"},{entity:i.temp_min_24h_sensor,name:"24h Min"},{entity:i.temp_max_24h_sensor,name:"24h Max"},{entity:i.uv_sensor,name:"UV"},{entity:i.solar_lux_sensor,name:"Solar"},{entity:i.pressure_sensor,name:"Pressure"}].filter((i=>i.entity));return(i.rain_state_sensor||i.rain_rate_sensor)&&e.splice(4,0,{type:"rain",name:"Rain",rain_state_sensor:i.rain_state_sensor,rain_rate_sensor:i.rain_rate_sensor,rain_rate_threshold:i.rain_rate_threshold}),e}(e);return t.filter((i=>i&&("rain"===i.type?i.rain_state_sensor||i.rain_rate_sensor:i.entity))).map((e=>{var t;if("rain"===e.type)return Re(i,e);const a=Le(i,e.entity);return{label:e.name||(null===(t=null==a?void 0:a.attributes)||void 0===t?void 0:t.friendly_name)||e.entity||"",value:fe(i,e.entity),entity:e.entity,mdi:e.icon||void 0,stateEntity:e.entity}}))}(i,e),d=!1===e.show_forecast?[]:Ve(e.forecast),N=!1===e.show_forecast?[]:Ve(e.daily_forecast),I=!1!==e.show_forecast&&n.length>1,u=Number(e.forecast_slots),h=Number.isFinite(u)&&u>0?Math.min(Math.floor(u),72):8,D=function(i){const e=Array.isArray(i)?i:"string"==typeof i?i.split(","):we,t=[];return e.forEach((i=>{const e=Oe[String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_")];e&&!t.includes(e)&&t.push(e)})),t.length?t:we}(e.forecast_fields),j=d.slice(0,h),y=String((null===(t=d[0])||void 0===t?void 0:t.condition)||r||"").toLowerCase()||r,z=`weather-icon weather-condition-${Ue(y)}`,p=e.forecast_graph_key||`weather-${e.entity||c}`,m=!1!==e.sync_graphs,A=jt(i,e,j,D,p,m),b=ct(i,e,N,d),w=Array.isArray(e.chips)?e.chips:[],T=Qe(null!==(a=e.temp_size)&&void 0!==a?a:e.temperature_size,18,56),O=Qe(e.icon_size,28,160),x=Qe(e.graph_height,82,260),v=Number(e.icon_offset_x),S=Number(e.icon_offset_y),L=Qe(e.conditions_icon_size,8,48),k=Qe(e.daily_icon_size,8,48),C=Number(e.metric_columns),_=Number.isFinite(C)&&C>0?Math.max(1,Math.min(4,Math.round(C))):3,f=function(i,e){const t=Number(e.stale_minutes);if(!Number.isFinite(t)||t<=0)return!1;const a=[e.entity,e.temp_sensor,e.humidity_sensor,e.feels_like_sensor].filter(Boolean);let n=0;return a.forEach((e=>{const t=Le(i,e),a=(null==t?void 0:t.last_updated)?Date.parse(t.last_updated):NaN;Number.isFinite(a)&&(n=Math.max(n,a))})),!!n&&Date.now()-n>6e4*t}(i,e),Y=[T?`--weather-temp-size:${T}px;`:"",O?`--weather-icon-size:${O}px;--weather-icon-bg-size:${O+16}px;`:"",Number.isFinite(v)?`--weather-icon-x:${v}px;`:"",Number.isFinite(S)?`--weather-icon-y:${S}px;`:"",L?`--weather-conditions-icon-size:${L}px;`:"",k?`--weather-daily-icon-size:${k}px;`:"",x?`--weather-graph-height:${x}px;`:"",`--weather-metric-columns:${_};`].filter(Boolean).join(""),Q=I?E`
    <div class="weather-source-picker weather-forecast-source-picker" role="tablist" aria-label="Weather forecast source">
      ${n.map((t=>{const a=t.entity===o,n=t.name||function(i,e){var t,a;const n=Le(i,e),o=null===(t=null==n?void 0:n.attributes)||void 0===t?void 0:t.friendly_name;return"string"==typeof o&&o.trim()?o.trim():(null===(a=String(e||"").split(".").pop())||void 0===a?void 0:a.replace(/_/g," ").replace(/\b\w/g,(i=>i.toUpperCase())))||"Forecast"}(i,t.entity);return E`
          <button
            class=${"weather-source-option"+(a?" active":"")}
            type="button"
            role="tab"
            aria-selected=${a?"true":"false"}
            title=${`Use ${n} forecast`}
            @pointerdown=${st}
            @click=${a=>dt(i,a,e.forecast_source_key,t.entity)}
            @keyup=${a=>function(i,e,t,a){"Enter"!==e.key&&" "!==e.key||dt(i,e,t,a)}(i,a,e.forecast_source_key,t.entity)}
          >${n}</button>
        `}))}
    </div>
  `:G;return E`
    <div class=${"tile-wrap weather-tile-wrap"+(f?" weather-tile-stale":"")} style=${Y}>
      <div class="weather-tile">
        <div class="weather-content">
          <div class="weather-top">
            <div class="weather-heading">
              <div class="weather-primary">
                <span
                  class="weather-temp weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor temperature details"
                  @pointerdown=${st}
                  @pointerup=${st}
                  @click=${t=>Mt(i,t,e.temp_sensor)}
                  @keyup=${t=>gt(i,t,e.temp_sensor)}
                >${s}</span>
                <span
                  class="weather-humidity weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor humidity details"
                  @pointerdown=${st}
                  @pointerup=${st}
                  @click=${t=>Mt(i,t,e.humidity_sensor)}
                  @keyup=${t=>gt(i,t,e.humidity_sensor)}
                >${l}</span>
              </div>
              <div
                class="weather-feels weather-clickable"
                role="button"
                tabindex="0"
                aria-label="Open feels like temperature details"
                @pointerdown=${st}
                @pointerup=${st}
                @click=${t=>Mt(i,t,e.feels_like_sensor)}
                @keyup=${t=>gt(i,t,e.feels_like_sensor)}
              >Feels like ${M}</div>
            </div>
            <div class="weather-icon-wrap" aria-hidden="true">
              ${e.icon?E`<ha-icon class=${z} .icon=${e.icon}></ha-icon>`:Pe(e,Ze(y),z,Ee(y),"inline")}
            </div>
          </div>

          <div class="weather-grid">
            ${g.map((e=>E`
              <div
                class=${"weather-metric weather-clickable"+(e.active?" active":"")}
                title=${e.entity||e.label}
                role="button"
                tabindex="0"
                aria-label=${`Open ${e.label} details`}
                @pointerdown=${st}
                @pointerup=${st}
                @click=${t=>Mt(i,t,e.entity)}
                @keyup=${t=>gt(i,t,e.entity)}
              >
                ${e.mdi?E`<ha-icon class="weather-metric-icon" .icon=${e.mdi}></ha-icon>`:e.icon?Pe("meteocons",e.icon,"weather-metric-icon",e.label):function(i,e){const t=Le(i,e.stateEntity);return(null==i?void 0:i.hass)&&t?E`<ha-state-icon class="weather-metric-icon" .hass=${i.hass} .stateObj=${t}></ha-state-icon>`:E`<ha-icon class="weather-metric-icon" icon="mdi:gauge"></ha-icon>`}(i,e)}
                <span class="weather-metric-label">${e.label}</span>
                <span class="weather-metric-value">${e.value}</span>
              </div>
            `))}
          </div>

          ${Q}
          ${A}
          ${b}
        </div>

        ${w.length?E`<div class="weather-chips-bottom-right">
              ${w.map((e=>E`
                <div
                  class="weather-chip-hit weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label=${`Open ${(null==e?void 0:e.entity)||"chip"} details`}
                  @pointerdown=${st}
                  @pointerup=${st}
                  @click=${t=>Mt(i,t,(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity))}
                  @keyup=${t=>gt(i,t,(null==e?void 0:e.entity)||(null==e?void 0:e.tap_entity))}
                >
                  ${Ne(i,e)}
                </div>
              `))}
            </div>`:G}
      </div>
    </div>
  `}const zt=(...i)=>i.filter(Boolean).join(" ");function pt(i,e){return e&&e.length?E`${e.map(((e,t)=>function(i,e,t){const a=e,n=Array.isArray(e)?e:Array.isArray(null==a?void 0:a.row)?a.row:[];let o=Array.isArray(null==a?void 0:a.cards)?a.cards:Array.isArray(null==a?void 0:a.extra_cards)?a.extra_cards:[];if(!Array.isArray(o)||!o.length){const i=(null==a?void 0:a.card)||(null==a?void 0:a.extra_card);i&&"object"==typeof i&&(o=[i])}const r=Math.max(1,n.length||1),c=Array.isArray(o)&&o.length&&"function"==typeof(null==i?void 0:i._renderEmbeddedRowCard)?E`<div class="switch-row-cards">
        ${o.map(((e,a)=>i._renderEmbeddedRowCard(e,`switch-row-${t}-card-${a}`)))}
      </div>`:G;return E`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${r}`}>${n.map((e=>function(i,e){var t,a,n,o,r,c,s;const l="string"==typeof(null==e?void 0:e.entity)?e.entity:"",M=(null==e?void 0:e.icon)||"",g=(null==e?void 0:e.name)||"",d=(null===(o=null===(n=null===(a=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.states)||void 0===a?void 0:a[l])||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.friendly_name)||"",N=g||d||l,I=String((null==e?void 0:e.type)||"switch").toLowerCase(),u="smart_plug"===I,h="lock"===I||l.startsWith("lock."),D="function"==typeof(null==i?void 0:i._isSwitchActive)?i._isSwitchActive(l,I):h?"unlocked"===((null===(s=null===(c=null===(r=null==i?void 0:i.hass)||void 0===r?void 0:r.states)||void 0===c?void 0:c[l])||void 0===s?void 0:s.state)||"").toLowerCase():"function"==typeof(null==i?void 0:i._isOn)&&i._isOn(l),j=(null==e?void 0:e.icon_size)||(null==e?void 0:e["icon-size"]),y=(null==e?void 0:e.font_weight)||(null==e?void 0:e["font-weight"]),z=(null==e?void 0:e.font_size)||(null==e?void 0:e["font-size"]),p=(null==e?void 0:e.icon_active)||(null==e?void 0:e.icon_on)||(null==e?void 0:e["icon-active"])||(null==e?void 0:e["icon-on"]),m=(null==e?void 0:e.icon_inactive)||(null==e?void 0:e.icon_off)||(null==e?void 0:e["icon-inactive"])||(null==e?void 0:e["icon-off"]),A=D?p||M||m:m||M,b=i=>{if(null==i||""===i)return"";const e=String(i).trim();return e?/^-?\d+(\.\d+)?$/.test(e)?`${e}px`:e:""},w=b(j),T=b(z),O=w?`--switch-icon-size:${w};width:${w};height:${w};--mdc-icon-size:${w};`:"",x=`${y?`font-weight:${y};`:""}${T?`font-size:${T};`:""}`,v=`${w?`--switch-icon-size:${w};`:""}${y?`font-weight:${y};`:""}${T?`--chip-text-font-size:${T};font-size:${T};`:""}`,S="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),L="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),k=u?"smart":h?"lock":"",C=D?"on":"off",_=zt("switch-chip",k,C),f=zt("switch-icon",k,C),Y=zt("name","switch-name",k,C),Q="function"==typeof(null==i?void 0:i._resolveSwitchTemplates)?i._resolveSwitchTemplates(e):[],U=Array.isArray(Q)?Q.map((i=>i&&"object"==typeof i?i.value:i)).slice(0,2):[],Z=((i,e)=>{if(!Array.isArray(i)||!i.length)return G;const t=i.map((i=>{const e=null==i?"":String(i);return{text:e,trimmed:e.trim()}})).filter((i=>i.trimmed.length>0)).slice(0,2);return t.length?E`
    <div class=${e}>
      ${t.map((i=>E`<span>${i.text}</span>`))}
    </div>
  `:G})(U,zt("switch-info",k,C)),W="function"==typeof(null==i?void 0:i._isSwitchPending)&&i._isSwitchPending(l),P=W?E`<span class=${zt("switch-pending-spinner",k,C)} aria-hidden="true"></span>`:G,$=zt("switch-tile",k,C,W&&"pending"),R=t=>{"function"==typeof(null==i?void 0:i._onSwitchAction)&&i._onSwitchAction(t,e)},V=(null==e?void 0:e.glow_mode)||"static",F=h?he:u?ue:Ie,{style:B,overlay:H}=je(F,V,D&&"none"!==V);if(L){const i=zt("switch-tile-btn",k,D?"on":"off",W&&"pending");return E`
      <div class="tile-wrap">
        <div class="glow-under" style=${B}>${H}</div>
        ${Z}
        ${P}
        <ha-control-button
          class=${i}
          @hass-action=${R}
          .actionHandler=${Me({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
          role="button" tabindex="0" aria-busy=${W?"true":"false"}
        >
          <div class="tile-inner">
            ${S?E`<ha-chip class=${_} style=${v||G}>
                  ${A?E`<ha-icon class=${f} .icon=${A} style=${O||G}></ha-icon>`:G}
                  ${N}
                </ha-chip>`:E`
                  ${A?E`<ha-icon class=${f} .icon=${A} style=${O||G}></ha-icon>`:G}
                  ${N?E`<div class=${Y} style=${x}>${N}</div>`:G}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return E`
    <div class="tile-wrap ${$}"
         @hass-action=${R}
         .actionHandler=${Me({hasHold:!0,hasDoubleClick:!!(null==e?void 0:e.double_tap_action)})}
         role="button" tabindex="0" aria-busy=${W?"true":"false"}>
      <div class="glow-under" style=${B}>${H}</div>
      ${Z}
      ${P}
      <div class="tile-inner">
        ${S?E`<ha-chip class=${_} style=${v||G}>
              ${A?E`<ha-icon class=${f} .icon=${A} style=${O||G}></ha-icon>`:G}
              ${N}
            </ha-chip>`:E`
              ${A?E`<ha-icon class=${f} .icon=${A} style=${O||G}></ha-icon>`:G}
              ${N?E`<div class=${Y} style=${x}>${N}</div>`:G}
            `}
      </div>
    </div>
  `}(i,e)))}</div>
      ${c}
    </div>
  `}(i,e,t)))}`:G}const mt=r`
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
  .header-row.weather-row > * { height: auto; }
  .header-row.weather-row { align-items: start; }

  .clickable { cursor: pointer; }
`,At=r`
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
`,bt=r`
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
`,wt=r`
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
`,Tt=r`
  .weather-tile-wrap {
    height: auto;
    align-self: start;
    border-radius: var(--tile-border-radius);
    background: var(--space-hub-tile-background, rgba(255, 255, 255, 0.04));
    background: var(
      --space-hub-tile-background,
      color-mix(in srgb, var(--ha-card-background, var(--card-background-color)) 96%, var(--primary-text-color) 4%)
    );
    backdrop-filter: blur(10px);
    box-shadow: var(--tile-shadow-default);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
    -webkit-mask-image: -webkit-radial-gradient(white, black);
    mask-image: radial-gradient(circle, white 99%, transparent 100%);
    --weather-temp-size: 31px;
    --weather-icon-size: 42px;
    --weather-icon-bg-size: 58px;
    --weather-graph-height: 118px;
    --control-button-border-radius: var(--tile-border-radius);
  }

  .weather-tile {
    position: relative;
    width: 100%;
    height: auto;
    border-radius: inherit;
    box-shadow: none;
    background: transparent;
    backdrop-filter: none;
    overflow: visible;
    clip-path: none;
    background-clip: border-box;
    --ha-ripple-color: transparent;
    --control-button-border-radius: inherit;
    transition: transform 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;
  }

  .weather-tile:hover,
  .weather-tile::part(button):hover {
    background: transparent;
    transform: none;
    filter: none;
  }

  .weather-tile-wrap.weather-tile-stale {
    box-shadow: var(--tile-shadow-default), 0 0 22px 4px rgba(244, 67, 54, 0.55);
  }

  .weather-tile::part(button) {
    width: 100%;
    height: auto;
    display: block;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border-radius: var(--tile-border-radius);
    overflow: hidden;
    clip-path: inset(0 round var(--tile-border-radius));
    background-clip: padding-box;
  }

  .weather-content {
    position: relative;
    padding: var(--tile-padding-large);
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
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
    position: relative;
    display: block;
    min-width: 0;
  }

  .weather-icon-wrap {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: grid;
    place-items: center;
    width: var(--weather-icon-bg-size);
    height: var(--weather-icon-bg-size);
    color: var(--state-weather-sunny-color, #f6a000);
    background: transparent;
    pointer-events: none;
    transform: translate(var(--weather-icon-x, 0px), var(--weather-icon-y, 0px));
  }

  .weather-icon {
    width: var(--weather-icon-size);
    height: var(--weather-icon-size);
    --mdc-icon-size: var(--weather-icon-size);
    color: inherit;
    transform-origin: 50% 50%;
    overflow: visible;
    border: 0;
    will-change: transform;
  }

  .weather-icon,
  .weather-conditions-icon,
  .weather-daily-icon,
  .weather-metric-icon {
    display: block;
    object-fit: contain;
    user-select: none;
    pointer-events: none;
  }

  .weather-icon > svg,
  .weather-conditions-icon > svg,
  .weather-daily-icon > svg,
  .weather-metric-icon > svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
    background: transparent;
  }

  .weather-heading {
    position: relative;
    z-index: 3;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    display: grid;
    gap: 3px;
    padding: 3px 4px;
    margin: -3px -4px;
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

  .weather-source-picker {
    width: fit-content;
    max-width: 100%;
    min-width: 0;
    display: inline-flex;
    align-items: center;
    gap: 3px;
    padding: 2px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.055);
    box-sizing: border-box;
    overflow: hidden;
  }

  .weather-forecast-source-picker {
    margin-top: 1px;
    margin-bottom: -1px;
  }

  .weather-source-option {
    min-width: 0;
    max-width: 92px;
    border: 0;
    border-radius: 6px;
    padding: 3px 7px;
    background: transparent;
    color: var(--secondary-text-color);
    font: inherit;
    font-size: 10px;
    line-height: 1.1;
    font-weight: 750;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }

  .weather-source-option:hover {
    background: rgba(3, 169, 244, 0.12);
  }

  .weather-source-option.active {
    background: rgba(3, 169, 244, 0.24);
    color: var(--primary-text-color);
    box-shadow: inset 0 0 0 1px rgba(3, 169, 244, 0.28);
  }

  .weather-source-option:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--primary-color, #03a9f4);
  }

  .weather-primary {
    display: inline-flex;
    align-items: baseline;
    justify-content: start;
    gap: 7px;
    white-space: nowrap;
    color: var(--primary-text-color);
    padding-top: 1px;
  }

  .weather-temp {
    font-size: var(--weather-temp-size);
    line-height: 1;
    font-weight: 700;
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-humidity {
    font-size: calc(var(--weather-temp-size) * 0.43);
    line-height: 1;
    font-weight: 700;
    color: var(--secondary-text-color);
    padding: 2px 3px;
    margin: -2px -3px;
  }

  .weather-feels {
    width: fit-content;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--secondary-text-color);
    font-size: 11px;
    line-height: 1.1;
    font-weight: 650;
    padding: 1px 3px;
    margin: -1px -3px 0;
  }

  .weather-grid {
    position: relative;
    z-index: 4;
    display: grid;
    grid-template-columns: repeat(var(--weather-metric-columns, 2), minmax(0, 1fr));
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
    min-height: calc(var(--weather-graph-height) + 54px);
  }

  .weather-conditions-rain {
    min-height: calc(var(--weather-graph-height) + 36px);
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
    max-width: min(58%, 172px);
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
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--weather-conditions-icon-size, 15px);
    box-sizing: border-box;
    color: var(--state-weather-sunny-color, #f6a000);
  }

  .weather-conditions-icon-slot {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .weather-conditions-icon {
    flex: 0 0 auto;
    width: var(--weather-conditions-icon-size, 15px);
    height: var(--weather-conditions-icon-size, 15px);
    --mdc-icon-size: var(--weather-conditions-icon-size, 15px);
    color: inherit;
    transform-origin: 50% 50%;
  }

  .weather-conditions-chart-frame {
    position: relative;
    width: 100%;
    min-width: 0;
    height: var(--weather-graph-height);
    overflow: visible;
  }

  .weather-conditions-chart {
    width: 100%;
    height: 100%;
    min-width: 0;
    display: block;
    cursor: pointer;
    touch-action: none;
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }

  .weather-conditions-chart text {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .weather-conditions-temp .weather-conditions-chart {
    height: 100%;
  }

  .weather-conditions-rain .weather-conditions-chart {
    height: 100%;
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

  .weather-conditions-selected-dot {
    position: absolute;
    z-index: 3;
    width: 15px;
    height: 15px;
    min-width: 15px;
    min-height: 15px;
    box-sizing: border-box;
    aspect-ratio: 1 / 1;
    border: 1px solid rgba(255, 255, 255, 0.54);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.28);
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.18);
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .weather-conditions-selected-dot::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: var(--primary-text-color);
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4);
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

  .weather-conditions-time-label {
    font-size: 7.6px;
  }

  .weather-conditions-time-label-start {
    text-anchor: start;
  }

  .weather-conditions-time-label-end {
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
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-width: 0;
    min-height: 18px;
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1.15;
    font-weight: 850;
    letter-spacing: 0;
  }

  .weather-daily-row {
    min-width: 0;
    min-height: 30px;
    display: grid;
    grid-template-columns: 88px 52px 40px minmax(84px, 1fr) 40px;
    align-items: center;
    gap: 5px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
  }

  .weather-daily-day {
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: left;
    gap: 1px;
  }

  .weather-daily-day-name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
  }

  .weather-daily-date {
    color: var(--secondary-text-color);
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
  }

  .weather-daily-day-name,
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
    font-size: 7.6px;
    line-height: 1;
    font-weight: 750;
  }

  .weather-daily-icon {
    width: var(--weather-daily-icon-size, 16px);
    height: var(--weather-daily-icon-size, 16px);
    --mdc-icon-size: var(--weather-daily-icon-size, 16px);
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
    background: rgba(33, 150, 243, 0.28);
    color: var(--primary-text-color);
    box-shadow: inset 0 0 0 1px rgba(56, 199, 243, 0.6), 0 0 10px rgba(56, 199, 243, 0.28);
  }

  .weather-metric.active .weather-metric-icon {
    color: #38c7f3;
  }

  .weather-metric.active .weather-metric-value {
    color: #d6f3ff;
  }

  .weather-metric ha-icon,
  .weather-metric .weather-metric-icon {
    grid-row: 1 / span 2;
    width: 22px;
    height: 22px;
    --mdc-icon-size: 22px;
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

`,Ot=r`
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
`,xt=r`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,vt=r`
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
`;var St;let Lt=St=class extends ni{constructor(){super(...arguments),this._visiblePendingSwitches=new Set,this._weatherForecastGraphSelections=new Map,this._weatherForecastSourceSelections=new Map,this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map,this._weatherForecastValues=new Map,this._pendingSwitches=new Map,this._switchPendingDelayMs=300,this._switchPendingTimeoutMs=1e4}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(i){if(!i)throw new Error("Configuration is required");this._validateConfig(i,{allowIncomplete:!0});const e=Ri(i||{});Array.isArray(e.headers)||(e.headers=[]),Array.isArray(e.switch_rows)||(e.switch_rows=[]),Array.isArray(e.cards)||(e.cards=[]),this._clearRowCardCache(),this._config=e,this._syncTemplateEntries(e.switch_rows),this._syncWeatherForecastEntries(e.headers)}_isValidEntityId(i){return"string"==typeof i&&i.includes(".")&&!i.includes(" ")}_validateConfig(i,e={}){const t=!!e.allowIncomplete,a=[];i.headers&&Array.isArray(i.headers)&&i.headers.forEach(((i,e)=>{if(i){if(i.ac&&(i.ac.entity?this._isValidEntityId(i.ac.entity)||a.push(`Header ${e+1}: AC entity '${i.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):t||a.push(`Header ${e+1}: AC tile requires an 'entity' field`)),i.thermostat&&(i.thermostat.entity?this._isValidEntityId(i.thermostat.entity)||a.push(`Header ${e+1}: Thermostat entity '${i.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):t||a.push(`Header ${e+1}: Thermostat tile requires an 'entity' field`)),i.main){const n=i.main;!!(n.main_name||n.main_icon||n.tap_entity||n.light_group_entity||n.temp_sensor||n.humidity_sensor||Array.isArray(n.chips)&&n.chips.length>0)||t||a.push(`Header ${e+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((i=>{const t=n[i];t&&!this._isValidEntityId(t)&&a.push(`Header ${e+1}: Main tile ${i} '${t}' must be a valid entity ID`)}))}if(i.weather){const n=i.weather;!!(n.name||n.icon||n.entity||void 0!==n.animated_icons||void 0!==n.show_forecast||n.icon_set||n.icon_pack||n.icon_base_path||n.icon_map||n.forecast_slots||n.forecast_fields||n.graph_horizontal_lines||Array.isArray(n.forecast_sources)&&n.forecast_sources.length>0||n.height||n.temp_size||n.temperature_size||n.icon_size||n.graph_height||n.temperature_icon_count||n.metric_columns||n.temp_sensor||n.temp_min_24h_sensor||n.temp_max_24h_sensor||n.humidity_sensor||n.feels_like_sensor||n.dewpoint_sensor||n.wind_speed_sensor||n.wind_gust_sensor||n.wind_direction_sensor||n.rain_state_sensor||n.rain_today_sensor||n.rain_rate_sensor||n.uv_sensor||n.solar_lux_sensor||n.pressure_sensor||Array.isArray(n.chips)&&n.chips.length>0)||t||a.push(`Header ${e+1}: Weather tile must have at least one weather entity, sensor, name, icon, or chip`);["entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor"].forEach((i=>{const t=n[i];t&&!this._isValidEntityId(t)&&a.push(`Header ${e+1}: Weather tile ${i} '${t}' must be a valid entity ID`)})),Array.isArray(n.forecast_sources)&&n.forecast_sources.forEach(((i,t)=>{const n="string"==typeof i?i:null==i?void 0:i.entity;n&&!this._isValidEntityId(n)&&a.push(`Header ${e+1}: Weather tile forecast_sources ${t+1} '${n}' must be a valid weather entity ID`)}));if(["height","temp_size","temperature_size","icon_size","graph_height"].forEach((i=>{const t=n[i];if(null!=t){const n=Number(t);(!Number.isFinite(n)||n<=0)&&a.push(`Header ${e+1}: Weather tile ${i} must be a positive number, got: ${t}`)}})),void 0!==n.temperature_icon_count&&null!==n.temperature_icon_count){const i=Number(n.temperature_icon_count);(!Number.isFinite(i)||i<0)&&a.push(`Header ${e+1}: Weather tile temperature_icon_count must be zero or a positive number, got: ${n.temperature_icon_count}`)}if(void 0!==n.graph_horizontal_lines&&null!==n.graph_horizontal_lines){const i=Number(n.graph_horizontal_lines);(!Number.isFinite(i)||i<2)&&a.push(`Header ${e+1}: Weather tile graph_horizontal_lines must be 2 or greater, got: ${n.graph_horizontal_lines}`)}if(void 0!==n.metric_columns&&null!==n.metric_columns){const i=Number(n.metric_columns);(!Number.isFinite(i)||i<1)&&a.push(`Header ${e+1}: Weather tile metric_columns must be a positive number, got: ${n.metric_columns}`)}if(void 0!==n.icon_set&&null!==n.icon_set){const i=String(n.icon_set).trim().toLowerCase();i&&"meteocons"!==i&&"custom"!==i&&a.push(`Header ${e+1}: Weather tile icon_set must be 'meteocons' or 'custom', got: ${n.icon_set}`)}if(void 0!==n.forecast_slots&&null!==n.forecast_slots){const i=Number(n.forecast_slots);(!Number.isFinite(i)||i<=0)&&a.push(`Header ${e+1}: Weather tile forecast graph hours must be a positive number, got: ${n.forecast_slots}`)}if(void 0!==n.forecast_fields&&null!==n.forecast_fields){const i=Array.isArray(n.forecast_fields)?n.forecast_fields:String(n.forecast_fields).split(","),t=new Set(["temp","temperature","rain_chance","precipitation_probability","precip_probability","probability","pop","rain","precipitation","hum","humidity","wind","wind_speed","gust","wind_gust","wind_gust_speed","uv","uv_index","cloud","clouds","cloud_coverage"]);i.forEach((i=>{const n=String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_");n&&!t.has(n)&&a.push(`Header ${e+1}: Weather tile forecast field '${i}' is not supported`)}))}}!i.ac&&!i.thermostat||i.main||t||a.push(`Header ${e+1}: AC and Thermostat tiles require a 'main' configuration block`)}else a.push(`Header ${e+1}: Header configuration cannot be empty`)})),i.switch_rows&&Array.isArray(i.switch_rows)&&i.switch_rows.forEach(((i,e)=>{if(!i)return void a.push(`Switch row ${e+1}: Switch row configuration cannot be empty`);const n=Array.isArray(i)?i:Array.isArray(i.row)?i.row:[];Array.isArray(n)&&0!==n.length||t?n.forEach(((i,n)=>{i&&i.entity?this._isValidEntityId(i.entity)||a.push(`Switch row ${e+1}, item ${n+1}: Switch entity '${i.entity}' must be a valid entity ID`):t||a.push(`Switch row ${e+1}, item ${n+1}: Switch item requires an 'entity' field`),(null==i?void 0:i.hold_entity)&&!this._isValidEntityId(i.hold_entity)&&a.push(`Switch row ${e+1}, item ${n+1}: hold_entity '${i.hold_entity}' must be a valid entity ID`)})):a.push(`Switch row ${e+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([e,t])=>{const n=i[e];if(null!=n){const i=Number(n);(!Number.isFinite(i)||i<0)&&a.push(`${t} must be a positive number, got: ${n}`)}})),void 0!==i.card_shadow_intensity&&null!==i.card_shadow_intensity){const e=Number(i.card_shadow_intensity);Number.isFinite(e)&&(e<0||e>1)&&a.push(`Card shadow intensity must be between 0 and 1, got: ${e}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((e=>{const t=i[e];if(t&&"string"==typeof t){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(t)||a.push(`${e.replace(/_/g," ")} '${t}' is not a valid color format`)}})),a.length>0)throw new Error(`Invalid space-hub-card configuration:\n${a.map((i=>`• ${i}`)).join("\n")}`)}getCardSize(){const i=this._config||{},e=St.getStubConfig(),t=this._positiveNumber(i.tile_height)||this._positiveNumber(e.tile_height)||80;let a=24;(Array.isArray(i.headers)?i.headers:[]).forEach((i=>{i&&"object"==typeof i&&(this._hasWeatherForCardSize(i.weather)&&(a+=this._weatherHeightForCardSize(i.weather||{},t)+12),this._hasMainForCardSize(i)&&(a+=t+12))}));const n=Array.isArray(i.switch_rows)?i.switch_rows.length:0;a+=n*(t+12);const o=Array.isArray(i.cards)?i.cards.length:0;return a+=120*o,Math.max(6,Math.ceil(a/50))}_positiveNumber(i){const e=Number(i);return Number.isFinite(e)&&e>0?e:void 0}_hasMainForCardSize(i){const e=i.main||{};return!(!e||!(e.main_name||e.name||e.light_group_entity||e.entity||e.main_icon||e.icon||e.temp_sensor||e.humidity_sensor||Array.isArray(e.chips)&&e.chips.length))}_hasWeatherForCardSize(i){return!(!i||!(i.name||i.main_name||i.icon||i.main_icon||void 0!==i.animated_icons||void 0!==i.show_forecast||i.icon_set||i.icon_pack||i.icon_base_path||i.icon_map||i.forecast_slots||i.forecast_fields||i.graph_horizontal_lines||Array.isArray(i.forecast_sources)&&i.forecast_sources.length>0||i.height||i.temp_size||i.temperature_size||i.icon_size||i.graph_height||i.temperature_icon_count||i.metric_columns||i.entity||i.temp_sensor||i.temp_min_24h_sensor||i.temp_max_24h_sensor||i.humidity_sensor||i.feels_like_sensor||i.dewpoint_sensor||i.wind_speed_sensor||i.wind_gust_sensor||i.wind_direction_sensor||i.rain_state_sensor||i.rain_today_sensor||i.rain_rate_sensor||i.uv_sensor||i.solar_lux_sensor||i.pressure_sensor||Array.isArray(i.chips)&&i.chips.length))}_weatherHeightForCardSize(i,e){const t=Math.max(82,Math.min(260,this._positiveNumber(i.graph_height)||118)),a=Math.max(1,Math.min(4,Math.round(this._positiveNumber(i.metric_columns)||3))),n=this._weatherMetricCountForCardSize(i),o=n>0?Math.ceil(n/a):0,r=!1!==i.show_forecast&&i.entity?this._weatherForecastFieldCountForCardSize(i):0,c=96+40*o+(o>1?5*(o-1):0)+(r>0?r*(t+64)+8*(r-1):0)+(r>0?250:0)+32;return Math.max(c,e)}_weatherMetricCountForCardSize(i){if(Array.isArray(i.metrics)&&i.metrics.length)return i.metrics.filter((i=>!!i&&("rain"===i.type?!(!i.rain_state_sensor&&!i.rain_rate_sensor):!!i.entity))).length;let e=[i.wind_speed_sensor,i.wind_gust_sensor,i.temp_min_24h_sensor,i.temp_max_24h_sensor,i.uv_sensor,i.solar_lux_sensor,i.pressure_sensor].filter(Boolean).length;return(i.rain_state_sensor||i.rain_rate_sensor)&&(e+=1),e}_weatherForecastFieldCountForCardSize(i){const e={temp:"temperature",temperature:"temperature",rain_chance:"precipitation_probability",precipitation_probability:"precipitation_probability",precip_probability:"precipitation_probability",probability:"precipitation_probability",pop:"precipitation_probability"},t=Array.isArray(i.forecast_fields)?i.forecast_fields:"string"==typeof i.forecast_fields?i.forecast_fields.split(","):["temperature","precipitation_probability"],a=new Set;return t.forEach((i=>{const t=e[String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_")];t&&a.add(t)})),a.size||2}render(){var i,e,t,a,n,o,r,c,s;if(!this._config)return G;const l=St.getStubConfig(),M=this._config||{},g={tile_height:null!==(i=M.tile_height)&&void 0!==i?i:l.tile_height,chip_icon_size:null!==(e=M.chip_icon_size)&&void 0!==e?e:l.chip_icon_size,main_icon_size:null!==(t=M.main_icon_size)&&void 0!==t?t:l.main_icon_size,chip_font_size:null!==(a=M.chip_font_size)&&void 0!==a?a:l.chip_font_size,card_shadow_color:null!==(n=M.card_shadow_color)&&void 0!==n?n:l.card_shadow_color,card_shadow_intensity:null!==(o=M.card_shadow_intensity)&&void 0!==o?o:l.card_shadow_intensity,unavailable_pulse_color:null!==(r=M.unavailable_pulse_color)&&void 0!==r?r:l.unavailable_pulse_color,headers:Array.isArray(M.headers)&&M.headers.length?M.headers:[],switch_rows:Array.isArray(M.switch_rows)?M.switch_rows:[],cards:Array.isArray(M.cards)?M.cards:[],tap_action:M.tap_action,hold_action:M.hold_action,double_tap_action:M.double_tap_action},d=Array.isArray(g.headers)&&g.headers.length?g.headers:[],N=Number(g.tile_height)||Number(l.tile_height)||80,I=Number(g.chip_icon_size)||Number(l.chip_icon_size)||14,u=Number(g.chip_font_size)||Number(l.chip_font_size)||12,h=Math.max(u+10,20),D=Math.round(.625*N),j=d[0]||{},y=Number(null!==(c=null==j?void 0:j.main_icon_size)&&void 0!==c?c:null==j?void 0:j.maicon_size),z=Number.isFinite(y)&&y>0?y:Number(g.main_icon_size)||Number(l.main_icon_size)||48,p=this._rgbaFromColor(g.card_shadow_color||l.card_shadow_color,null!==(s=g.card_shadow_intensity)&&void 0!==s?s:l.card_shadow_intensity),m=g.unavailable_pulse_color||l.unavailable_pulse_color||"#ff3b30",A=this._hasAnyUnavailable(g,d),b=this._rgbaFromColor(m,.18),w=this._rgbaFromColor(m,.36);return E`
      <ha-card class=${A?"unavailable":""}
               style=${`--panel-shadow-color:${A?b:p}; --unavail-weak:${b}; --unavail-strong:${w}`}>
        <div class="metrics" style=${`--tile-h:${N}px; --chip-size:${h}px; --chip-icon-size:${I}px; --main-icon-size:${z}px; --chip-font-size:${u}px; --ac-thermostat-icon:${D}px;`}>
          <div class="root">
            ${d.map(((i,e)=>this._renderHeaderRow(i,e)))}
            ${pt(this,g.switch_rows)}
            ${Array.isArray(g.cards)&&g.cards.length?E`
                  <div class="extra-cards">
                    ${g.cards.map(((i,e)=>this._renderEmbeddedRowCard(i,`standalone-card-${e}`)))}
                  </div>
                `:G}
          </div>
        </div>
      </ha-card>
    `}updated(i){super.updated(i),i.has("hass")&&(this._rowCardElements.forEach((i=>{i&&(i.hass=this.hass)})),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions(),this._syncPendingSwitches())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((i=>this._disposeTemplateEntry(i))),this._weatherForecastValues.forEach((i=>this._disposeWeatherForecastEntry(i))),this._clearAllPendingSwitches()}_renderHeaderRow(i,e){const t=i.main||{},a=i.weather||{},n={tap_entity:t.tap_entity,hold_entity:t.hold_entity||t.tap_entity,glow_mode:t.glow_mode,light_group_entity:t.light_group_entity,name:t.main_name||t.name,icon:t.main_icon||t.icon,temp_sensor:t.temp_sensor,humidity_sensor:t.humidity_sensor,chips:Array.isArray(t.chips)?t.chips:[],tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action},o=this._weatherForecastSources(a),r=`weather-${e}-forecast-source`,c=this._getWeatherForecastSourceSelection(r,o)||a.entity,s={entity:a.entity,forecast_entity:c,selected_forecast_entity:c,forecast_sources:o,forecast_source_key:r,name:a.name||a.main_name,icon:a.icon||a.main_icon,height:a.height,temp_size:a.temp_size,temperature_size:a.temperature_size,icon_size:a.icon_size,icon_offset_x:a.icon_offset_x,icon_offset_y:a.icon_offset_y,conditions_icon_size:a.conditions_icon_size,temperature_icon_count:a.temperature_icon_count,daily_icon_size:a.daily_icon_size,graph_height:a.graph_height,graph_horizontal_lines:a.graph_horizontal_lines,metric_columns:a.metric_columns,icon_set:a.icon_set,icon_pack:a.icon_pack,icon_base_path:a.icon_base_path,icon_extension:a.icon_extension,icon_map:a.icon_map,animated_icons:a.animated_icons,show_forecast:a.show_forecast,sync_graphs:a.sync_graphs,stale_minutes:a.stale_minutes,rain_rate_threshold:a.rain_rate_threshold,forecast_slots:a.forecast_slots,forecast_fields:a.forecast_fields,forecast_graph_key:`weather-${e}-${c||"default"}`,temp_sensor:a.temp_sensor,temp_min_24h_sensor:a.temp_min_24h_sensor,temp_max_24h_sensor:a.temp_max_24h_sensor,humidity_sensor:a.humidity_sensor,feels_like_sensor:a.feels_like_sensor,dewpoint_sensor:a.dewpoint_sensor,wind_speed_sensor:a.wind_speed_sensor,wind_gust_sensor:a.wind_gust_sensor,wind_direction_sensor:a.wind_direction_sensor,rain_state_sensor:a.rain_state_sensor,rain_today_sensor:a.rain_today_sensor,rain_rate_sensor:a.rain_rate_sensor,uv_sensor:a.uv_sensor,solar_lux_sensor:a.solar_lux_sensor,pressure_sensor:a.pressure_sensor,metrics:Array.isArray(a.metrics)?a.metrics:void 0,chips:Array.isArray(a.chips)?a.chips:[],tap_action:a.tap_action,hold_action:a.hold_action,double_tap_action:a.double_tap_action,forecast:!1===a.show_forecast?[]:this._getWeatherForecast(c,"hourly"),daily_forecast:!1===a.show_forecast?[]:this._getWeatherForecast(c,"daily")},l=i.ac||{},M=i.thermostat||{},g=!!(null==l?void 0:l.entity),d=!!(null==M?void 0:M.entity),N=!(!t||!(t.main_name||t.name||t.light_group_entity||t.entity||t.main_icon||t.icon||t.temp_sensor||t.humidity_sensor||Array.isArray(t.chips)&&t.chips.length)),I=!(!a||!(a.name||a.main_name||a.icon||a.main_icon||void 0!==a.animated_icons||void 0!==a.show_forecast||a.icon_set||a.icon_pack||a.icon_base_path||a.icon_map||a.forecast_slots||a.forecast_fields||a.graph_horizontal_lines||Array.isArray(a.forecast_sources)&&a.forecast_sources.length>0||a.height||a.temp_size||a.temperature_size||a.icon_size||a.graph_height||a.temperature_icon_count||a.metric_columns||a.entity||a.temp_sensor||a.temp_min_24h_sensor||a.temp_max_24h_sensor||a.humidity_sensor||a.feels_like_sensor||a.dewpoint_sensor||a.wind_speed_sensor||a.wind_gust_sensor||a.wind_direction_sensor||a.rain_state_sensor||a.rain_today_sensor||a.rain_rate_sensor||a.uv_sensor||a.solar_lux_sensor||a.pressure_sensor||Array.isArray(a.chips)&&a.chips.length)),u=N&&g,h=N&&d;N||!g&&!d||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const D=u||h?u&&h?"header-row":"header-row main-plus-one":"header-row only-main";return E`
      ${I?E`
        <div class="header-row weather-row">
          ${yt(this,s)}
        </div>
      `:G}
      ${N?E`<div class=${D}>
        ${N?ye(this,n):G}
        ${u?function(i,e){var t,a,n;const o=(null==e?void 0:e.entity)||"",r=null==e?void 0:e.glow_mode,c=((null===(n=null===(a=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.states)||void 0===a?void 0:a[o])||void 0===n?void 0:n.state)||"").toLowerCase(),s=!!c&&"off"!==c,l="function"==typeof(null==i?void 0:i._acChip)?i._acChip(c):{icon:"mdi:air-conditioner"},M=(null==l?void 0:l.icon)||"mdi:air-conditioner",g="ac-mode-"+((d=c)&&"off"!==d?d.includes("cool")?"cool":d.includes("heat")?"heat":d.includes("dry")?"dry":d.includes("fan")?"fan":d.includes("auto")?"auto":"default":"off");var d;const N=`chip chip-temperature-humidity ac-chip ${g}`,I=`ac-fan ${g}${s?" spinning":""}`,u=function(i){const e=(i||"").toLowerCase();return e&&"off"!==e?e.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:e.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:e.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:e.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:e.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(c),h=null!=r?r:"static",{style:D,overlay:j}=je(u,h,s);return E`
    <div class="tile-wrap">
      <div class="glow-under" style=${D}>${j}</div>
      <ha-control-button
        class="square ac-tile ${s?"on":""}"
        @hass-action=${t=>{"function"==typeof(null==i?void 0:i._onACAction)&&i._onACAction(t,e)}}
        .actionHandler=${Me({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${N}>
          <ha-icon .icon=${M}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${I} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,l):G}
        ${h?function(i,e){var t,a,n,o,r,c,s,l;const M=(null==e?void 0:e.entity)||"",g=null==e?void 0:e.glow_mode,d=null===(a=null===(t=null==i?void 0:i.hass)||void 0===t?void 0:t.states)||void 0===a?void 0:a[M],N="function"==typeof(null==i?void 0:i._fmtNumber)?i._fmtNumber.bind(i):i=>null==i?"—":String(i),I=N(null!==(c=null!==(o=null===(n=null==d?void 0:d.attributes)||void 0===n?void 0:n.temperature)&&void 0!==o?o:null===(r=null==d?void 0:d.attributes)||void 0===r?void 0:r.target_temp)&&void 0!==c?c:null===(s=null==d?void 0:d.attributes)||void 0===s?void 0:s.target_temperature,1)+"°",u="heating"===((null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.hvac_action)||"").toLowerCase(),h="off"===((null==d?void 0:d.state)||"").toLowerCase()?"off":u?"heating":"idle",D=`thermostat-chip ${h}`,j=`temperature-chip ${h}`,y=`thermostat-icon ${h}`,z="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),p=null!=g?g:"static",m=De,{style:A,overlay:b}=je(m,p,u);return E`
    <div class="tile-wrap">
      <div class="glow-under" style=${A}>${b}</div>
      <ha-control-button
        class="square thermostat-tile ${u?"on":""}"
        @hass-action=${t=>{"function"==typeof(null==i?void 0:i._onThermostatAction)&&i._onThermostatAction(t,e)}}
        .actionHandler=${Me({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${z?E`<ha-chip class=${D}>${I}</ha-chip>`:E`<div class=${j}><span class="thermostat-target">${I}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${y} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,M):G}
      </div>`:G}
    `}_getWeatherForecastGraphSelection(i){return i?this._weatherForecastGraphSelections.get(i):void 0}_setWeatherForecastGraphSelection(i,e){if(!i||!Number.isFinite(e))return;if(this._weatherForecastGraphSelections.get(i)===e)return;const t=new Map(this._weatherForecastGraphSelections);t.set(i,e),this._weatherForecastGraphSelections=t}_renderEmbeddedRowCard(i,e){if(!i||"object"!=typeof i)return G;this._rowCardConfigs.get(e)!==i&&(this._rowCardElements.delete(e),this._rowCardPromises.delete(e)),this._rowCardConfigs.set(e,i);const t=this._rowCardElements.get(e);if(t)return t.hass=this.hass,E`<div class="embedded-card">${t}</div>`;const a=this._createRowCardElement(e,i).then((i=>(i.hass=this.hass,E`${i}`))).catch((e=>{const t=e instanceof Error?e.message:String(e),a=this._createErrorCard(t,i);return a.hass=this.hass,E`${a}`}));return E`<div class="embedded-card">${zi(a,G)}</div>`}async _createRowCardElement(i,e){const t=this._rowCardPromises.get(i);if(t)return t;const a=(async()=>{const t=await this._getCardHelpers();let a;try{a=(null==t?void 0:t.createCardElement)?await t.createCardElement(e):$i(e)}catch(i){const t=i instanceof Error?i.message:String(i);a=this._createErrorCard(t,e)}return a.addEventListener("ll-rebuild",(t=>{t.stopPropagation(),this._rowCardElements.delete(i),this._rowCardPromises.delete(i);const a=this._rowCardConfigs.get(i)||e;this._createRowCardElement(i,a).then((()=>this.requestUpdate()))})),this._rowCardElements.set(i,a),this._rowCardPromises.delete(i),a})();return this._rowCardPromises.set(i,a),a}_createErrorCard(i,e){try{const t=document.createElement("hui-error-card");return t.setConfig({type:"error",error:i,origConfig:e}),t}catch(t){return $i({type:"hui-error-card",error:i,origConfig:e})}}async _getCardHelpers(){if(!this._helpersPromise){const i=window.loadCardHelpers;this._helpersPromise="function"==typeof i?i():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_dispatchNativeAction(i,e){const t=new Event("hass-action",{bubbles:!0,composed:!0});t.detail={action:i,config:e},this.dispatchEvent(t)}_withActionOverrides(i,e){const t=Object.assign({},i);"string"==typeof(null==e?void 0:e.entity)&&e.entity&&(t.entity=e.entity);const a=Ji(null==e?void 0:e.tap_action);a&&(t.tap_action=a);const n=Ji(null==e?void 0:e.hold_action);n&&(t.hold_action=n);const o=Ji(null==e?void 0:e.double_tap_action);return o&&(t.double_tap_action=o),t}_dispatchActionEnvelope(i,e){("double_tap"===i?e.double_tap_action:"hold"===i?e.hold_action:e.tap_action)&&this._dispatchNativeAction(i,e)}_selectedAction(i,e){return"double_tap"===i?e.double_tap_action:"hold"===i?e.hold_action:e.tap_action}_withoutSelectedActionConfirmation(i,e){const t=this._selectedAction(i,e);if(!t||void 0===Hi(t.confirmation))return e;const a=Object.assign({},e),n=Object.assign({},t);return delete n.confirmation,"double_tap"===i?a.double_tap_action=n:"hold"===i?a.hold_action=n:a.tap_action=n,a}_isConfirmationExempt(i){var e,t;if(!i||"object"!=typeof i||!Array.isArray(i.exemptions))return!1;const a=null===(t=null===(e=this.hass)||void 0===e?void 0:e.user)||void 0===t?void 0:t.id;return!!a&&i.exemptions.some((i=>i.user===a))}_confirmSwitchAction(i,e){if(void 0===i||this._isConfirmationExempt(i))return Promise.resolve(!0);const t=i&&"object"==typeof i?i:{},a="string"==typeof t.title&&t.title.trim()?t.title.trim():"Please confirm",n="string"==typeof t.text&&t.text.trim()?t.text.trim():`Are you sure you want to ${e.action}?`,o="string"==typeof t.confirm_text&&t.confirm_text.trim()?t.confirm_text.trim():"OK",r="string"==typeof t.dismiss_text&&t.dismiss_text.trim()?t.dismiss_text.trim():"Cancel";return new Promise((i=>{const e=document.createElement("div"),t=document.createElement("div"),c=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),M=document.createElement("button"),g=document.createElement("button");e.style.cssText=["position:fixed","inset:0","z-index:2147483647","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(0,0,0,0.32)","box-sizing:border-box"].join(";"),t.style.cssText=["width:min(420px,100%)","box-sizing:border-box","border-radius:12px","padding:20px","background:var(--ha-dialog-surface-background, var(--card-background-color, #fff))","color:var(--primary-text-color, #212121)","box-shadow:0 18px 48px rgba(0,0,0,0.32)","font-family:var(--paper-font-body1_-_font-family, Roboto, sans-serif)"].join(";"),c.style.cssText="font-size:20px;font-weight:500;line-height:1.3;margin-bottom:12px;",s.style.cssText="font-size:14px;line-height:1.45;color:var(--primary-text-color, #212121);white-space:pre-wrap;",l.style.cssText="display:flex;justify-content:flex-end;gap:8px;margin-top:24px;";const d=["border:0","border-radius:8px","padding:10px 14px","font:inherit","font-weight:500","cursor:pointer","background:transparent","color:var(--primary-color, #03a9f4)"].join(";");M.style.cssText=d,g.style.cssText=`${d};background:var(--primary-color, #03a9f4);color:var(--text-primary-color, #fff);`,c.textContent=a,s.textContent=n,M.textContent=r,g.textContent=o;const N=t=>{document.removeEventListener("keydown",I),e.remove(),i(t)},I=i=>{"Escape"===i.key&&N(!1)};e.addEventListener("click",(i=>{i.target===e&&N(!1)})),M.addEventListener("click",(()=>N(!1))),g.addEventListener("click",(()=>N(!0))),document.addEventListener("keydown",I),l.append(M,g),t.append(c,s,l),e.append(t),document.body.append(e),g.focus()}))}_isLockSwitch(i,e){return"lock"===String(i||"").toLowerCase()||!!(null==e?void 0:e.startsWith("lock."))}_buildDefaultSwitchTapAction(i,e,t){var a,n,o;if(i){if(this._isLockSwitch(e,i)){return{action:"perform-action",perform_action:"unlocked"===((null===(o=null===(n=null===(a=this.hass)||void 0===a?void 0:a.states)||void 0===n?void 0:n[i])||void 0===o?void 0:o.state)||"").toLowerCase()?"lock.lock":"lock.unlock",target:{entity_id:i},confirmation:t}}return{action:"toggle",confirmation:t}}}_applySwitchTapConfirmation(i,e){if(void 0===e||!i.tap_action)return i;return void 0!==Hi(i.tap_action.confirmation)?i:Object.assign(Object.assign({},i),{tap_action:Object.assign(Object.assign({},i.tap_action),{confirmation:e})})}_entityState(i){var e,t,a;const n=null===(a=null===(t=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===t?void 0:t[i])||void 0===a?void 0:a.state;return null==n?"":String(n)}_targetContainsEntity(i,e){if(!i||"object"!=typeof i)return!1;const t=i.entity_id;return Array.isArray(t)?t.includes(e):t===e}_actionCanChangeSwitchEntity(i,e,t){if(!e||"hold"===i)return!1;const a=this._selectedAction(i,t);return!!a&&("toggle"===a.action?t.entity===e:"perform-action"===a.action&&(this._targetContainsEntity(a.target,e)||this._targetContainsEntity(a.data,e)))}_setPendingSwitchVisible(i,e){if(this._visiblePendingSwitches.has(i)===e)return;const t=new Set(this._visiblePendingSwitches);e?t.add(i):t.delete(i),this._visiblePendingSwitches=t}_clearPendingSwitch(i){const e=this._pendingSwitches.get(i);e?(void 0!==e.showTimer&&window.clearTimeout(e.showTimer),void 0!==e.timeoutTimer&&window.clearTimeout(e.timeoutTimer),this._pendingSwitches.delete(i),this._setPendingSwitchVisible(i,!1)):this._setPendingSwitchVisible(i,!1)}_clearAllPendingSwitches(){[...this._pendingSwitches.keys()].forEach((i=>this._clearPendingSwitch(i)))}_trackPendingSwitch(i,e,t){if(!i||!this.hass||!this._actionCanChangeSwitchEntity(e,i,t))return;this._clearPendingSwitch(i);const a=this._entityState(i),n={initialState:a};n.showTimer=window.setTimeout((()=>{this._entityState(i)===a?this._setPendingSwitchVisible(i,!0):this._clearPendingSwitch(i)}),this._switchPendingDelayMs),n.timeoutTimer=window.setTimeout((()=>{this._clearPendingSwitch(i)}),this._switchPendingTimeoutMs),this._pendingSwitches.set(i,n)}_syncPendingSwitches(){this._pendingSwitches.forEach(((i,e)=>{this._entityState(e)!==i.initialState&&this._clearPendingSwitch(e)}))}_onMainAction(i,e,t,a,n){i.stopPropagation();const o=i.detail&&i.detail.action||"tap",r=n||t,c=a||t||n,s={entity:r,tap_action:r?{action:"toggle"}:void 0,hold_action:c?{action:"more-info",entity:c}:void 0},l=Bi(e)?e:Bi(this._config)?this._config:void 0;this._dispatchActionEnvelope(o,this._withActionOverrides(s,l))}_onWeatherAction(i,e){i.stopPropagation();const t=i.detail&&i.detail.action||"tap",a=(null==e?void 0:e.entity)||(null==e?void 0:e.temp_sensor)||(null==e?void 0:e.humidity_sensor),n={entity:a,tap_action:a?{action:"more-info",entity:a}:void 0,hold_action:a?{action:"more-info",entity:a}:void 0};this._dispatchActionEnvelope(t,this._withActionOverrides(n,e))}_onACAction(i,e){var t,a,n;i.stopPropagation();const o=i.detail&&i.detail.action||"tap",r=null==e?void 0:e.entity;if(!r)return;const c=((null===(n=null===(a=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===a?void 0:a[r])||void 0===n?void 0:n.state)||"").toLowerCase(),s={entity:r,tap_action:{action:"perform-action",perform_action:!!c&&"off"!==c?"climate.turn_off":"climate.turn_on",target:{entity_id:r}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(o,this._withActionOverrides(s,e))}_onThermostatAction(i,e){var t,a,n;i.stopPropagation();const o=i.detail&&i.detail.action||"tap",r=null==e?void 0:e.entity;if(!r)return;const c={entity:r,tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",target:{entity_id:r},data:{hvac_mode:"off"===((null===(n=null===(a=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===a?void 0:a[r])||void 0===n?void 0:n.state)||"").toLowerCase()?"heat":"off"}},hold_action:{action:"more-info",entity:r}};this._dispatchActionEnvelope(o,this._withActionOverrides(c,e))}async _onSwitchAction(i,e){i.stopPropagation();const t=i.detail&&i.detail.action||"tap",a="string"==typeof(null==e?void 0:e.entity)?e.entity:void 0,n="string"==typeof(null==e?void 0:e.hold_entity)?e.hold_entity:a,o=Hi(null==e?void 0:e.confirmation),r={entity:a,tap_action:this._buildDefaultSwitchTapAction(a,null==e?void 0:e.type,o),hold_action:n?{action:"more-info",entity:n}:void 0,double_tap_action:a?{action:"toggle"}:void 0},c=this._withActionOverrides(r,e);let s=this._applySwitchTapConfirmation(c,o);const l=this._selectedAction(t,s);if(!l)return;const M=Hi(l.confirmation);if(void 0!==M){if(!await this._confirmSwitchAction(M,l))return;s=this._withoutSelectedActionConfirmation(t,s)}this._trackPendingSwitch(a,t,s),this._dispatchActionEnvelope(t,s)}_resolveSwitchTemplates(i){const e=this._extractTemplatesFromSwitch(i);return e.length?e.map((i=>({template:i,value:this._getTemplateDisplayValue(i)}))):[]}_extractTemplatesFromSwitch(i){if(!i||"object"!=typeof i)return[];const e=i,t=((...i)=>{for(const t of i)if(t in e)return e[t]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==t)return[];const a=Array.isArray(t)?t:[t],n=[];return a.some((i=>{let e;"string"==typeof i?e=i:i&&"object"==typeof i&&(e=i.template||i.value||i.value_template||i.text);const t="string"==typeof e?e.trim():"";return t&&n.push(t),n.length>=2})),n.slice(0,2)}_syncTemplateEntries(i){const e=this._collectTemplatesFromRows(i);if(!e.size&&!this._switchTemplateValues.size)return;const t=[];this._switchTemplateValues.forEach(((i,a)=>{e.has(a)||t.push(a)})),t.forEach((i=>{const e=this._switchTemplateValues.get(i);e&&this._disposeTemplateEntry(e),this._switchTemplateValues.delete(i)})),e.forEach((i=>this._ensureTemplateEntry(i)))}_collectTemplatesFromRows(i){const e=new Set;return Array.isArray(i)?(i.forEach((i=>{const t=Array.isArray(i)?i:Array.isArray(null==i?void 0:i.row)?i.row:[];Array.isArray(t)&&t.forEach((i=>{this._extractTemplatesFromSwitch(i).forEach((i=>e.add(i)))}))})),e):e}_ensureTemplateEntry(i){const e=(i||"").trim();if(!e)return;let t=this._switchTemplateValues.get(e);return t||(t={value:"",ready:!1},this._switchTemplateValues.set(e,t)),this._startTemplateSubscription(e,t),t}_getTemplateDisplayValue(i){var e;const t=this._ensureTemplateEntry(i);return t?t.error?"!":t.ready?null!==(e=t.value)&&void 0!==e?e:"":"…":""}_startTemplateSubscription(i,e){var t;!(null===(t=this.hass)||void 0===t?void 0:t.connection)||e.unsub||e.pending||(e.pending=!0,this.hass.connection.subscribeMessage((i=>{e.ready=!0,e.error=void 0;const t=i&&"object"==typeof i&&"result"in i?i.result:i;e.value=null!=t?String(t):"",this.requestUpdate()}),{type:"render_template",template:i},{resubscribe:!0}).then((i=>{e.unsub=i})).catch((t=>{e.ready=!0,e.error=(null==t?void 0:t.message)||"error",e.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${i}":`,t),this.requestUpdate()})).finally((()=>{e.pending=!1})))}_disposeTemplateEntry(i){if(i.unsub){try{i.unsub()}catch(i){}i.unsub=void 0}i.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((i,e)=>this._startTemplateSubscription(e,i)))}_normalizeForecastType(i){return"daily"===String(i||"hourly")?"daily":"hourly"}_weatherForecastSources(i){const e=[],t=(i,t)=>{let a="",n="";if("string"==typeof i)a=i.trim();else if(i&&"object"==typeof i){const e=i;a="string"==typeof e.entity?e.entity.trim():"",n="string"==typeof e.name?e.name.trim():""}if(!a||e.some((i=>i.entity===a)))return;const o="string"==typeof t?t.trim():"";e.push({entity:a,name:n||o||void 0})};return t(null==i?void 0:i.entity,(null==i?void 0:i.name)||(null==i?void 0:i.main_name)),Array.isArray(null==i?void 0:i.forecast_sources)&&i.forecast_sources.forEach((i=>t(i))),e}_getWeatherForecastSourceSelection(i,e){if(!e.length)return;const t=i?this._weatherForecastSourceSelections.get(i):void 0;return t&&e.some((i=>i.entity===t))?t:e[0].entity}_setWeatherForecastSourceSelection(i,e){if(!i||!e)return;if(this._weatherForecastSourceSelections.get(i)===e)return;const t=new Map(this._weatherForecastSourceSelections);t.set(i,e),this._weatherForecastSourceSelections=t}_weatherForecastKey(i,e){const t="string"==typeof i?i.trim():"";return t?`${t}|${this._normalizeForecastType(e)}`:""}_collectWeatherForecastKeys(i){const e=new Set;return Array.isArray(i)?(i.forEach((i=>{const t=null==i?void 0:i.weather;t&&!1!==t.show_forecast&&this._weatherForecastSources(t).forEach((i=>{const t=this._weatherForecastKey(i.entity,"hourly");t&&e.add(t);const a=this._weatherForecastKey(i.entity,"daily");a&&e.add(a)}))})),e):e}_syncWeatherForecastEntries(i){const e=this._collectWeatherForecastKeys(i),t=[];this._weatherForecastValues.forEach(((i,a)=>{e.has(a)||t.push(a)})),t.forEach((i=>{const e=this._weatherForecastValues.get(i);e&&this._disposeWeatherForecastEntry(e),this._weatherForecastValues.delete(i)})),e.forEach((i=>this._ensureWeatherForecastEntry(i)))}_ensureWeatherForecastEntry(i){const e=(i||"").trim();if(!e)return;let t=this._weatherForecastValues.get(e);return t||(t={forecast:[],ready:!1},this._weatherForecastValues.set(e,t)),this._startWeatherForecastSubscription(e,t),t}_getWeatherForecast(i,e){const t=this._weatherForecastKey(i,e);if(!t)return[];const a=this._ensureWeatherForecastEntry(t);return a&&Array.isArray(a.forecast)?a.forecast:[]}_extractForecast(i){var e,t;if(!i||"object"!=typeof i)return[];const a=i;return Array.isArray(a.forecast)?a.forecast:Array.isArray(null===(e=a.event)||void 0===e?void 0:e.forecast)?a.event.forecast:Array.isArray(null===(t=a.result)||void 0===t?void 0:t.forecast)?a.result.forecast:[]}_startWeatherForecastSubscription(i,e){var t;if(!(null===(t=this.hass)||void 0===t?void 0:t.connection)||e.unsub||e.pending)return;const[a,n]=i.split("|"),o=this._normalizeForecastType(n);a&&(e.pending=!0,this.hass.connection.subscribeMessage((i=>{e.ready=!0,e.error=void 0,e.forecast=this._extractForecast(i),this.requestUpdate()}),{type:"weather/subscribe_forecast",entity_id:a,forecast_type:o},{resubscribe:!0}).then((i=>{e.unsub=i})).catch((t=>{e.ready=!0,e.error=(null==t?void 0:t.message)||"error",e.unsub=void 0,console.warn(`[space-hub-card] Weather forecast subscription failed for "${i}":`,t),this.requestUpdate()})).finally((()=>{e.pending=!1})))}_disposeWeatherForecastEntry(i){if(i.unsub)try{i.unsub()}catch(i){}i.unsub=void 0,i.pending=!1}_resumeWeatherForecastSubscriptions(){this.hass&&this._weatherForecastValues.forEach(((i,e)=>this._startWeatherForecastSubscription(e,i)))}_fmt2(i,e,t){if(!i||!this.hass)return"—"+(t||"");const a=this.hass.states[i];if(!a||""===a.state||"unknown"===a.state||"unavailable"===a.state)return"—"+(t||"");const n=Number(a.state);return Number.isFinite(n)?n.toFixed(e)+(t||""):String(a.state)+(t||"")}_fmtNumber(i,e){if(null==i||""===i||"unknown"===i||"unavailable"===i)return"—";const t=Number(i);return Number.isFinite(t)?t.toFixed(e):String(i)}_acChip(i){return i&&"off"!==i?i.includes("cool")?{icon:"mdi:snowflake"}:i.includes("heat")?{icon:"mdi:fire"}:i.includes("dry")?{icon:"mdi:water-percent"}:i.includes("fan")?{icon:"mdi:fan"}:i.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_acToggle(i){if(!i||!this.hass)return;const e=this.hass.states[i],t=((null==e?void 0:e.state)||"").toLowerCase(),a=!!t&&"off"!==t;this.hass.callService("climate",a?"turn_off":"turn_on",{entity_id:i})}_thermostatToggle(i){if(!i||!this.hass)return;const e=this.hass.states[i],t="off"===((null==e?void 0:e.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:i,hvac_mode:t})}_toggleGeneric(i){if(!i||!this.hass)return;const e=i.split(".")[0],t="switch"===e||"light"===e?`${e}.toggle`:"homeassistant.toggle",[a,n]=t.split(".");this.hass.callService(a,n,{entity_id:i})}_isOn(i){if(!i||!this.hass)return!1;const e=this.hass.states[i];return"on"===((null==e?void 0:e.state)||"").toLowerCase()}_isSwitchActive(i,e){if(!i||!this.hass)return!1;const t=this.hass.states[i];return this._isLockSwitch(e,i)?"unlocked"===((null==t?void 0:t.state)||"").toLowerCase():"on"===((null==t?void 0:t.state)||"").toLowerCase()}_isSwitchPending(i){return!!i&&this._visiblePendingSwitches.has(i)}_rgbaFromColor(i,e=.5){const t=Math.max(0,Math.min(1,Number(e)||0));if(!i||"string"!=typeof i)return`rgba(0,0,0,${t})`;const a=i.trim();if(a.startsWith("rgba(")||a.startsWith("rgb(")||a.startsWith("hsl(")||a.startsWith("var("))return a;const n=a.replace("#",""),o=i=>parseInt(i,16);if(3===n.length){return`rgba(${o(n[0]+n[0])},${o(n[1]+n[1])},${o(n[2]+n[2])},${t})`}if(n.length>=6){return`rgba(${o(n.slice(0,2))},${o(n.slice(2,4))},${o(n.slice(4,6))},${t})`}return`rgba(0,0,0,${t})`}_getAllCardEntities(i,e){const t=new Set,a=Array.isArray(e)?e:[e],n=new WeakSet,o=new Set(["entity","entity_id","tap_entity","hold_entity","double_tap_entity","light_group_entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor","camera_image"]),r=i=>{"string"==typeof i&&this._isValidEntityId(i)&&t.add(i)},c=i=>{"string"!=typeof i?Array.isArray(i)?i.forEach((i=>{"string"==typeof i?r(i):s(i)})):s(i):r(i)},s=i=>{if(!i||"object"!=typeof i)return;const e=i;n.has(e)||(n.add(e),Array.isArray(i)?i.forEach((i=>s(i))):Object.entries(i).forEach((([i,e])=>{o.has(i)?c(e):"target"!==i?Array.isArray(e)?e.forEach((i=>s(i))):e&&"object"==typeof e&&s(e):(i=>{if(!i||"object"!=typeof i)return;c(i.entity_id)})(e)})))};return s(a),s(i.switch_rows),s(i.cards),[...t]}_hasAnyUnavailable(i,e){if(!this.hass)return!1;const t=this._getAllCardEntities(i,e),a=new Set(["unavailable","unknown","offline"]);return t.some((i=>{var e,t;if(!i)return!1;const n=null===(t=null===(e=this.hass)||void 0===e?void 0:e.states)||void 0===t?void 0:t[i];if(!n)return!0;const o=(n.state||"").toLowerCase();return a.has(o)}))}};Lt.styles=[mt,At,bt,wt,Tt,Ot,xt,vt],i([Ai({attribute:!1})],Lt.prototype,"hass",void 0),i([bi()],Lt.prototype,"_config",void 0),i([bi()],Lt.prototype,"_visiblePendingSwitches",void 0),i([bi()],Lt.prototype,"_weatherForecastGraphSelections",void 0),i([bi()],Lt.prototype,"_weatherForecastSourceSelections",void 0),Lt=St=i([pi("space-hub-card")],Lt),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.54"});try{const i=window;if(!i.__SPACE_HUB_CARD_LOGGED__){const e="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",t="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.54",e,t),i.__SPACE_HUB_CARD_LOGGED__=!0}}catch(ze){}var kt=Lt;export{Lt as SpaceHubCard,kt as default};
