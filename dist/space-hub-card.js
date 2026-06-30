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
function i(i,I,g,t){var e,a=arguments.length,A=a<3?I:null===t?t=Object.getOwnPropertyDescriptor(I,g):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)A=Reflect.decorate(i,I,g,t);else for(var C=i.length-1;C>=0;C--)(e=i[C])&&(A=(a<3?e(A):a>3?e(I,g,A):e(I,g))||A);return a>3&&A&&Object.defineProperty(I,g,A),A
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const I=window,g=I.ShadowRoot&&(void 0===I.ShadyCSS||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),e=new WeakMap;class a{constructor(i,I,g){if(this._$cssResult$=!0,g!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=I}get styleSheet(){let i=this.o;const I=this.t;if(g&&void 0===i){const g=void 0!==I&&1===I.length;g&&(i=e.get(I)),void 0===i&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),g&&e.set(I,i))}return i}toString(){return this.cssText}}const A=(i,...I)=>{const g=1===i.length?i[0]:I.reduce(((I,g,t)=>I+(i=>{if(!0===i._$cssResult$)return i.cssText;if("number"==typeof i)return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(g)+i[t+1]),i[0]);return new a(g,i,t)},C=g?i=>i:i=>i instanceof CSSStyleSheet?(i=>{let I="";for(const g of i.cssRules)I+=g.cssText;return(i=>new a("string"==typeof i?i:i+"",void 0,t))(I)})(i):i
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var c;const l=window,o=l.trustedTypes,n=o?o.emptyScript:"",d=l.reactiveElementPolyfillSupport,s={toAttribute(i,I){switch(I){case Boolean:i=i?n:null;break;case Object:case Array:i=null==i?i:JSON.stringify(i)}return i},fromAttribute(i,I){let g=i;switch(I){case Boolean:g=null!==i;break;case Number:g=null===i?null:Number(i);break;case Object:case Array:try{g=JSON.parse(i)}catch(i){g=null}}return g}},M=(i,I)=>I!==i&&(I==I||i==i),r={attribute:!0,type:String,converter:s,reflect:!1,hasChanged:M},u="finalized";class b extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(i){var I;this.finalize(),(null!==(I=this.h)&&void 0!==I?I:this.h=[]).push(i)}static get observedAttributes(){this.finalize();const i=[];return this.elementProperties.forEach(((I,g)=>{const t=this._$Ep(g,I);void 0!==t&&(this._$Ev.set(t,g),i.push(t))})),i}static createProperty(i,I=r){if(I.state&&(I.attribute=!1),this.finalize(),this.elementProperties.set(i,I),!I.noAccessor&&!this.prototype.hasOwnProperty(i)){const g="symbol"==typeof i?Symbol():"__"+i,t=this.getPropertyDescriptor(i,g,I);void 0!==t&&Object.defineProperty(this.prototype,i,t)}}static getPropertyDescriptor(i,I,g){return{get(){return this[I]},set(t){const e=this[i];this[I]=t,this.requestUpdate(i,e,g)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)||r}static finalize(){if(this.hasOwnProperty(u))return!1;this[u]=!0;const i=Object.getPrototypeOf(this);if(i.finalize(),void 0!==i.h&&(this.h=[...i.h]),this.elementProperties=new Map(i.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const i=this.properties,I=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(const g of I)this.createProperty(g,i[g])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const I=[];if(Array.isArray(i)){const g=new Set(i.flat(1/0).reverse());for(const i of g)I.unshift(C(i))}else void 0!==i&&I.push(C(i));return I}static _$Ep(i,I){const g=I.attribute;return!1===g?void 0:"string"==typeof g?g:"string"==typeof i?i.toLowerCase():void 0}_$Eu(){var i;this._$E_=new Promise((i=>this.enableUpdating=i)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(i=this.constructor.h)||void 0===i||i.forEach((i=>i(this)))}addController(i){var I,g;(null!==(I=this._$ES)&&void 0!==I?I:this._$ES=[]).push(i),void 0!==this.renderRoot&&this.isConnected&&(null===(g=i.hostConnected)||void 0===g||g.call(i))}removeController(i){var I;null===(I=this._$ES)||void 0===I||I.splice(this._$ES.indexOf(i)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((i,I)=>{this.hasOwnProperty(I)&&(this._$Ei.set(I,this[I]),delete this[I])}))}createRenderRoot(){var i;const t=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,t)=>{g?i.adoptedStyleSheets=t.map((i=>i instanceof CSSStyleSheet?i:i.styleSheet)):t.forEach((g=>{const t=document.createElement("style"),e=I.litNonce;void 0!==e&&t.setAttribute("nonce",e),t.textContent=g.cssText,i.appendChild(t)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var i;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(i=this._$ES)||void 0===i||i.forEach((i=>{var I;return null===(I=i.hostConnected)||void 0===I?void 0:I.call(i)}))}enableUpdating(i){}disconnectedCallback(){var i;null===(i=this._$ES)||void 0===i||i.forEach((i=>{var I;return null===(I=i.hostDisconnected)||void 0===I?void 0:I.call(i)}))}attributeChangedCallback(i,I,g){this._$AK(i,g)}_$EO(i,I,g=r){var t;const e=this.constructor._$Ep(i,g);if(void 0!==e&&!0===g.reflect){const a=(void 0!==(null===(t=g.converter)||void 0===t?void 0:t.toAttribute)?g.converter:s).toAttribute(I,g.type);this._$El=i,null==a?this.removeAttribute(e):this.setAttribute(e,a),this._$El=null}}_$AK(i,I){var g;const t=this.constructor,e=t._$Ev.get(i);if(void 0!==e&&this._$El!==e){const i=t.getPropertyOptions(e),a="function"==typeof i.converter?{fromAttribute:i.converter}:void 0!==(null===(g=i.converter)||void 0===g?void 0:g.fromAttribute)?i.converter:s;this._$El=e,this[e]=a.fromAttribute(I,i.type),this._$El=null}}requestUpdate(i,I,g){let t=!0;void 0!==i&&(((g=g||this.constructor.getPropertyOptions(i)).hasChanged||M)(this[i],I)?(this._$AL.has(i)||this._$AL.set(i,I),!0===g.reflect&&this._$El!==i&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(i,g))):t=!1),!this.isUpdatePending&&t&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}const i=this.scheduleUpdate();return null!=i&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((i,I)=>this[I]=i)),this._$Ei=void 0);let I=!1;const g=this._$AL;try{I=this.shouldUpdate(g),I?(this.willUpdate(g),null===(i=this._$ES)||void 0===i||i.forEach((i=>{var I;return null===(I=i.hostUpdate)||void 0===I?void 0:I.call(i)})),this.update(g)):this._$Ek()}catch(i){throw I=!1,this._$Ek(),i}I&&this._$AE(g)}willUpdate(i){}_$AE(i){var I;null===(I=this._$ES)||void 0===I||I.forEach((i=>{var I;return null===(I=i.hostUpdated)||void 0===I?void 0:I.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(i){return!0}update(i){void 0!==this._$EC&&(this._$EC.forEach(((i,I)=>this._$EO(I,this[I],i))),this._$EC=void 0),this._$Ek()}updated(i){}firstUpdated(i){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var N;b[u]=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:b}),(null!==(c=l.reactiveElementVersions)&&void 0!==c?c:l.reactiveElementVersions=[]).push("1.6.3");const h=window,m=h.trustedTypes,y=m?m.createPolicy("lit-html",{createHTML:i=>i}):void 0,D=`lit$${(Math.random()+"").slice(9)}$`,j="?"+D,W=`<${j}>`,p=document,z=()=>p.createComment(""),L=i=>null===i||"object"!=typeof i&&"function"!=typeof i,w=Array.isArray,Y="[ \t\n\f\r]",Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,T=/-->/g,v=/>/g,O=RegExp(`>|${Y}(?:([^\\s"'>=/]+)(${Y}*=${Y}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),x=/'/g,G=/"/g,S=/^(?:script|style|textarea|title)$/i,X=i=>(I,...g)=>({_$litType$:i,strings:I,values:g}),R=X(1),k=X(2),F=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),U=new WeakMap,B=p.createTreeWalker(p,129,null,!1);function Q(i,I){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(I):I}class V{constructor({strings:i,_$litType$:I},g){let t;this.parts=[];let e=0,a=0;const A=i.length-1,C=this.parts,[c,l]=((i,I)=>{const g=i.length-1,t=[];let e,a=2===I?"<svg>":"",A=Z;for(let I=0;I<g;I++){const g=i[I];let C,c,l=-1,o=0;for(;o<g.length&&(A.lastIndex=o,c=A.exec(g),null!==c);)o=A.lastIndex,A===Z?"!--"===c[1]?A=T:void 0!==c[1]?A=v:void 0!==c[2]?(S.test(c[2])&&(e=RegExp("</"+c[2],"g")),A=O):void 0!==c[3]&&(A=O):A===O?">"===c[0]?(A=null!=e?e:Z,l=-1):void 0===c[1]?l=-2:(l=A.lastIndex-c[2].length,C=c[1],A=void 0===c[3]?O:'"'===c[3]?G:x):A===G||A===x?A=O:A===T||A===v?A=Z:(A=O,e=void 0);const n=A===O&&i[I+1].startsWith("/>")?" ":"";a+=A===Z?g+W:l>=0?(t.push(C),g.slice(0,l)+"$lit$"+g.slice(l)+D+n):g+D+(-2===l?(t.push(void 0),I):n)}return[Q(i,a+(i[g]||"<?>")+(2===I?"</svg>":"")),t]})(i,I);if(this.el=V.createElement(c,g),B.currentNode=this.el.content,2===I){const i=this.el.content,I=i.firstChild;I.remove(),i.append(...I.childNodes)}for(;null!==(t=B.nextNode())&&C.length<A;){if(1===t.nodeType){if(t.hasAttributes()){const i=[];for(const I of t.getAttributeNames())if(I.endsWith("$lit$")||I.startsWith(D)){const g=l[a++];if(i.push(I),void 0!==g){const i=t.getAttribute(g.toLowerCase()+"$lit$").split(D),I=/([.?@])?(.*)/.exec(g);C.push({type:1,index:e,name:I[2],strings:i,ctor:"."===I[1]?P:"?"===I[1]?$:"@"===I[1]?q:E})}else C.push({type:6,index:e})}for(const I of i)t.removeAttribute(I)}if(S.test(t.tagName)){const i=t.textContent.split(D),I=i.length-1;if(I>0){t.textContent=m?m.emptyScript:"";for(let g=0;g<I;g++)t.append(i[g],z()),B.nextNode(),C.push({type:2,index:++e});t.append(i[I],z())}}}else if(8===t.nodeType)if(t.data===j)C.push({type:2,index:e});else{let i=-1;for(;-1!==(i=t.data.indexOf(D,i+1));)C.push({type:7,index:e}),i+=D.length-1}e++}}static createElement(i,I){const g=p.createElement("template");return g.innerHTML=i,g}}function J(i,I,g=i,t){var e,a,A,C;if(I===F)return I;let c=void 0!==t?null===(e=g._$Co)||void 0===e?void 0:e[t]:g._$Cl;const l=L(I)?void 0:I._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(a=null==c?void 0:c._$AO)||void 0===a||a.call(c,!1),void 0===l?c=void 0:(c=new l(i),c._$AT(i,g,t)),void 0!==t?(null!==(A=(C=g)._$Co)&&void 0!==A?A:C._$Co=[])[t]=c:g._$Cl=c),void 0!==c&&(I=J(i,c._$AS(i,I.values),c,t)),I}class _{constructor(i,I){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=I}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){var I;const{el:{content:g},parts:t}=this._$AD,e=(null!==(I=null==i?void 0:i.creationScope)&&void 0!==I?I:p).importNode(g,!0);B.currentNode=e;let a=B.nextNode(),A=0,C=0,c=t[0];for(;void 0!==c;){if(A===c.index){let I;2===c.type?I=new f(a,a.nextSibling,this,i):1===c.type?I=new c.ctor(a,c.name,c.strings,this,i):6===c.type&&(I=new ii(a,this,i)),this._$AV.push(I),c=t[++C]}A!==(null==c?void 0:c.index)&&(a=B.nextNode(),A++)}return B.currentNode=p,e}v(i){let I=0;for(const g of this._$AV)void 0!==g&&(void 0!==g.strings?(g._$AI(i,g,I),I+=g.strings.length-2):g._$AI(i[I])),I++}}class f{constructor(i,I,g,t){var e;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=i,this._$AB=I,this._$AM=g,this.options=t,this._$Cp=null===(e=null==t?void 0:t.isConnected)||void 0===e||e}get _$AU(){var i,I;return null!==(I=null===(i=this._$AM)||void 0===i?void 0:i._$AU)&&void 0!==I?I:this._$Cp}get parentNode(){let i=this._$AA.parentNode;const I=this._$AM;return void 0!==I&&11===(null==i?void 0:i.nodeType)&&(i=I.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,I=this){i=J(this,i,I),L(i)?i===H||null==i||""===i?(this._$AH!==H&&this._$AR(),this._$AH=H):i!==this._$AH&&i!==F&&this._(i):void 0!==i._$litType$?this.g(i):void 0!==i.nodeType?this.$(i):(i=>w(i)||"function"==typeof(null==i?void 0:i[Symbol.iterator]))(i)?this.T(i):this._(i)}k(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}$(i){this._$AH!==i&&(this._$AR(),this._$AH=this.k(i))}_(i){this._$AH!==H&&L(this._$AH)?this._$AA.nextSibling.data=i:this.$(p.createTextNode(i)),this._$AH=i}g(i){var I;const{values:g,_$litType$:t}=i,e="number"==typeof t?this._$AC(i):(void 0===t.el&&(t.el=V.createElement(Q(t.h,t.h[0]),this.options)),t);if((null===(I=this._$AH)||void 0===I?void 0:I._$AD)===e)this._$AH.v(g);else{const i=new _(e,this),I=i.u(this.options);i.v(g),this.$(I),this._$AH=i}}_$AC(i){let I=U.get(i.strings);return void 0===I&&U.set(i.strings,I=new V(i)),I}T(i){w(this._$AH)||(this._$AH=[],this._$AR());const I=this._$AH;let g,t=0;for(const e of i)t===I.length?I.push(g=new f(this.k(z()),this.k(z()),this,this.options)):g=I[t],g._$AI(e),t++;t<I.length&&(this._$AR(g&&g._$AB.nextSibling,t),I.length=t)}_$AR(i=this._$AA.nextSibling,I){var g;for(null===(g=this._$AP)||void 0===g||g.call(this,!1,!0,I);i&&i!==this._$AB;){const I=i.nextSibling;i.remove(),i=I}}setConnected(i){var I;void 0===this._$AM&&(this._$Cp=i,null===(I=this._$AP)||void 0===I||I.call(this,i))}}class E{constructor(i,I,g,t,e){this.type=1,this._$AH=H,this._$AN=void 0,this.element=i,this.name=I,this._$AM=t,this.options=e,g.length>2||""!==g[0]||""!==g[1]?(this._$AH=Array(g.length-1).fill(new String),this.strings=g):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(i,I=this,g,t){const e=this.strings;let a=!1;if(void 0===e)i=J(this,i,I,0),a=!L(i)||i!==this._$AH&&i!==F,a&&(this._$AH=i);else{const t=i;let A,C;for(i=e[0],A=0;A<e.length-1;A++)C=J(this,t[g+A],I,A),C===F&&(C=this._$AH[A]),a||(a=!L(C)||C!==this._$AH[A]),C===H?i=H:i!==H&&(i+=(null!=C?C:"")+e[A+1]),this._$AH[A]=C}a&&!t&&this.j(i)}j(i){i===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=i?i:"")}}class P extends E{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===H?void 0:i}}const K=m?m.emptyScript:"";class $ extends E{constructor(){super(...arguments),this.type=4}j(i){i&&i!==H?this.element.setAttribute(this.name,K):this.element.removeAttribute(this.name)}}class q extends E{constructor(i,I,g,t,e){super(i,I,g,t,e),this.type=5}_$AI(i,I=this){var g;if((i=null!==(g=J(this,i,I,0))&&void 0!==g?g:H)===F)return;const t=this._$AH,e=i===H&&t!==H||i.capture!==t.capture||i.once!==t.once||i.passive!==t.passive,a=i!==H&&(t===H||e);e&&this.element.removeEventListener(this.name,this,t),a&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var I,g;"function"==typeof this._$AH?this._$AH.call(null!==(g=null===(I=this.options)||void 0===I?void 0:I.host)&&void 0!==g?g:this.element,i):this._$AH.handleEvent(i)}}class ii{constructor(i,I,g){this.element=i,this.type=6,this._$AN=void 0,this._$AM=I,this.options=g}get _$AU(){return this._$AM._$AU}_$AI(i){J(this,i)}}const Ii=h.litHtmlPolyfillSupport;null==Ii||Ii(V,f),(null!==(N=h.litHtmlVersions)&&void 0!==N?N:h.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var gi,ti;class ei extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i,I;const g=super.createRenderRoot();return null!==(i=(I=this.renderOptions).renderBefore)&&void 0!==i||(I.renderBefore=g.firstChild),g}update(i){const I=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=((i,I,g)=>{var t,e;const a=null!==(t=null==g?void 0:g.renderBefore)&&void 0!==t?t:I;let A=a._$litPart$;if(void 0===A){const i=null!==(e=null==g?void 0:g.renderBefore)&&void 0!==e?e:null;a._$litPart$=A=new f(I.insertBefore(z(),i),i,void 0,null!=g?g:{})}return A._$AI(i),A})(I,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),null===(i=this._$Do)||void 0===i||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),null===(i=this._$Do)||void 0===i||i.setConnected(!1)}render(){return F}}ei.finalized=!0,ei._$litElement$=!0,null===(gi=globalThis.litElementHydrateSupport)||void 0===gi||gi.call(globalThis,{LitElement:ei});const ai=globalThis.litElementPolyfillSupport;null==ai||ai({LitElement:ei}),(null!==(ti=globalThis.litElementVersions)&&void 0!==ti?ti:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ai=2,Ci=i=>(...I)=>({_$litDirective$:i,values:I});
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ci{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,I,g){this._$Ct=i,this._$AM=I,this._$Ci=g}_$AS(i,I){return this.update(i,I)}update(i,I){return this.render(...I)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const li=(i,I)=>{var g,t;const e=i._$AN;if(void 0===e)return!1;for(const i of e)null===(t=(g=i)._$AO)||void 0===t||t.call(g,I,!1),li(i,I);return!0},oi=i=>{let I,g;do{if(void 0===(I=i._$AM))break;g=I._$AN,g.delete(i),i=I}while(0===(null==g?void 0:g.size))},ni=i=>{for(let I;I=i._$AM;i=I){let g=I._$AN;if(void 0===g)I._$AN=g=new Set;else if(g.has(i))break;g.add(i),Mi(I)}};function di(i){void 0!==this._$AN?(oi(this),this._$AM=i,ni(this)):this._$AM=i}function si(i,I=!1,g=0){const t=this._$AH,e=this._$AN;if(void 0!==e&&0!==e.size)if(I)if(Array.isArray(t))for(let i=g;i<t.length;i++)li(t[i],!1),oi(t[i]);else null!=t&&(li(t,!1),oi(t));else li(this,i)}const Mi=i=>{var I,g,t,e;i.type==Ai&&(null!==(I=(t=i)._$AP)&&void 0!==I||(t._$AP=si),null!==(g=(e=i)._$AQ)&&void 0!==g||(e._$AQ=di))};class ri extends ci{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,I,g){super._$AT(i,I,g),ni(this),this.isConnected=i._$AU}_$AO(i,I=!0){var g,t;i!==this.isConnected&&(this.isConnected=i,i?null===(g=this.reconnected)||void 0===g||g.call(this):null===(t=this.disconnected)||void 0===t||t.call(this)),I&&(li(this,i),oi(this))}setValue(i){if((i=>void 0===i.strings)(this._$Ct))this._$Ct._$AI(i,this);else{const I=[...this._$Ct._$AH];I[this._$Ci]=i,this._$Ct._$AI(I,this,0)}}disconnected(){}reconnected(){}}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ui{constructor(i){this.G=i}disconnect(){this.G=void 0}reconnect(i){this.G=i}deref(){return this.G}}class bi{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var i;null!==(i=this.Y)&&void 0!==i||(this.Y=new Promise((i=>this.Z=i)))}resume(){var i;null===(i=this.Z)||void 0===i||i.call(this),this.Y=this.Z=void 0}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=i=>!(i=>null===i||"object"!=typeof i&&"function"!=typeof i)(i)&&"function"==typeof i.then,hi=1073741823;const mi=Ci(class extends ri{constructor(){super(...arguments),this._$C_t=hi,this._$Cwt=[],this._$Cq=new ui(this),this._$CK=new bi}render(...i){var I;return null!==(I=i.find((i=>!Ni(i))))&&void 0!==I?I:F}update(i,I){const g=this._$Cwt;let t=g.length;this._$Cwt=I;const e=this._$Cq,a=this._$CK;this.isConnected||this.disconnected();for(let i=0;i<I.length&&!(i>this._$C_t);i++){const A=I[i];if(!Ni(A))return this._$C_t=i,A;i<t&&A===g[i]||(this._$C_t=hi,t=0,Promise.resolve(A).then((async i=>{for(;a.get();)await a.get();const I=e.deref();if(void 0!==I){const g=I._$Cwt.indexOf(A);g>-1&&g<I._$C_t&&(I._$C_t=g,I.setValue(i))}})))}return F}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),yi=i=>I=>"function"==typeof I?((i,I)=>(customElements.define(i,I),I))(i,I):((i,I)=>{const{kind:g,elements:t}=I;return{kind:g,elements:t,finisher(I){customElements.define(i,I)}}})(i,I)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Di=(i,I)=>"method"===I.kind&&I.descriptor&&!("value"in I.descriptor)?{...I,finisher(g){g.createProperty(I.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:I.key,initializer(){"function"==typeof I.initializer&&(this[I.key]=I.initializer.call(this))},finisher(g){g.createProperty(I.key,i)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ji(i){return(I,g)=>void 0!==g?((i,I,g)=>{I.constructor.createProperty(g,i)})(i,I,g):Di(i,I)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function Wi(i){return ji({...i,state:!0})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pi;null===(pi=window.HTMLSlotElement)||void 0===pi||pi.prototype.assignedElements;var zi="[^\\s]+";function Li(i,I){for(var g=[],t=0,e=i.length;t<e;t++)g.push(i[t].substr(0,I));return g}var wi=function(i){return function(I,g){var t=g[i].map((function(i){return i.toLowerCase()})),e=t.indexOf(I.toLowerCase());return e>-1?e:null}};function Yi(i){for(var I=[],g=1;g<arguments.length;g++)I[g-1]=arguments[g];for(var t=0,e=I;t<e.length;t++){var a=e[t];for(var A in a)i[A]=a[A]}return i}var Zi=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ti=["January","February","March","April","May","June","July","August","September","October","November","December"],vi=Li(Ti,3),Oi={dayNamesShort:Li(Zi,3),dayNames:Zi,monthNamesShort:vi,monthNames:Ti,amPm:["am","pm"],DoFn:function(i){return i+["th","st","nd","rd"][i%10>3?0:(i-i%10!=10?1:0)*i%10]}},xi=(Yi({},Oi),function(i){return+i-1}),Gi=[null,"[1-9]\\d?"],Si=[null,zi],Xi=["isPm",zi,function(i,I){var g=i.toLowerCase();return g===I.amPm[0]?0:g===I.amPm[1]?1:null}],Ri=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(i){var I=(i+"").match(/([+-]|\d\d)/gi);if(I){var g=60*+I[1]+parseInt(I[2],10);return"+"===I[0]?g:-g}return 0}];wi("monthNamesShort"),wi("monthNames");var ki,Fi;!function(){try{(new Date).toLocaleDateString("i")}catch(i){return"RangeError"===i.name}}(),function(){try{(new Date).toLocaleString("i")}catch(i){return"RangeError"===i.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(i){return"RangeError"===i.name}}(),function(i){i.language="language",i.system="system",i.comma_decimal="comma_decimal",i.decimal_comma="decimal_comma",i.space_comma="space_comma",i.none="none"}(ki||(ki={})),function(i){i.language="language",i.system="system",i.am_pm="12",i.twenty_four="24"}(Fi||(Fi={}));var Hi=function(i,I,g,t){t=t||{},g=null==g?{}:g;var e=new Event(I,{bubbles:void 0===t.bubbles||t.bubbles,cancelable:Boolean(t.cancelable),composed:void 0===t.composed||t.composed});return e.detail=g,i.dispatchEvent(e),e},Ui=new Set(["call-service","divider","section","weblink","cast","select"]),Bi={alert:"toggle",automation:"toggle",climate:"climate",cover:"cover",fan:"toggle",group:"group",input_boolean:"toggle",input_number:"input-number",input_select:"input-select",input_text:"input-text",light:"toggle",lock:"lock",media_player:"media-player",remote:"toggle",scene:"scene",script:"script",sensor:"sensor",timer:"timer",switch:"toggle",vacuum:"toggle",water_heater:"climate",input_datetime:"input-datetime"},Qi=function(i,I){void 0===I&&(I=!1);var g=function(i,I){return t("hui-error-card",{type:"error",error:i,config:I})},t=function(i,I){var t=window.document.createElement(i);try{t.setConfig(I)}catch(t){return console.error(i,t),g(t.message,I)}return t};if(!i||"object"!=typeof i||!I&&!i.type)return g("No type defined",i);var e=i.type;if(e&&e.startsWith("custom:"))e=e.substr("custom:".length);else if(I)if(Ui.has(e))e="hui-"+e+"-row";else{if(!i.entity)return g("Invalid config given.",i);var a=i.entity.split(".",1)[0];e="hui-"+(Bi[a]||"text")+"-entity-row"}else e="hui-"+e+"-card";if(customElements.get(e))return t(e,i);var A=g("Custom element doesn't exist: "+i.type+".",i);A.style.display="None";var C=setTimeout((function(){A.style.display=""}),2e3);return customElements.whenDefined(i.type).then((function(){clearTimeout(C),Hi(A,"ll-rebuild",{},A)})),A};function Vi(i){return JSON.parse(JSON.stringify(i))}const Ji=new Set(["more-info","toggle","perform-action","navigate","url","assist","none","fire-dom-event","call-service"]),_i=i=>!!i&&"object"==typeof i&&!Array.isArray(i),fi=i=>!!((null==i?void 0:i.tap_action)||(null==i?void 0:i.hold_action)||(null==i?void 0:i.double_tap_action)),Ei=i=>{if(null==i||!1===i)return;if(!0===i)return!0;if("string"==typeof i){const I=i.trim();return!I||{text:I}}if(!_i(i))return;const I={};if("string"==typeof i.text&&i.text.trim()&&(I.text=i.text),"string"==typeof i.title&&i.title.trim()&&(I.title=i.title),"string"==typeof i.confirm_text&&i.confirm_text.trim()&&(I.confirm_text=i.confirm_text),"string"==typeof i.dismiss_text&&i.dismiss_text.trim()&&(I.dismiss_text=i.dismiss_text),Array.isArray(i.exemptions)){const g=i.exemptions.filter((i=>!!i&&"object"==typeof i&&"string"==typeof i.user)).map((i=>({user:i.user})));g.length&&(I.exemptions=g)}return!Object.keys(I).length||I},Pi=i=>{if(_i(i)&&"string"==typeof i.action&&Ji.has(i.action)){if("call-service"===i.action||"perform-action"===i.action){return Object.assign(Object.assign({},i),{action:"perform-action",perform_action:"string"==typeof i.perform_action?i.perform_action:"string"==typeof i.service?i.service:void 0,data:_i(i.data)?i.data:_i(i.service_data)?i.service_data:void 0,target:_i(i.target)?i.target:void 0,confirmation:Ei(i.confirmation)})}return Object.assign(Object.assign({},i),{confirmation:Ei(i.confirmation)})}},Ki=["lock","door","presence","illuminance","gate","sliding_gate","smart_plug","custom"],$i=["switch","smart_plug","lock"],qi=["static","pulse","none"],iI=["more-info","toggle","perform-action","navigate","url","assist","none"],II="M4,12L5.41,13.41L11,7.83V20H13V7.83L18.59,13.42L20,12L12,4L4,12Z",gI="M4,12L5.41,10.59L11,16.17V4H13V16.17L18.59,10.58L20,12L12,20L4,12Z",tI="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";let eI=class extends ei{constructor(){super(...arguments),this.label="",this.value="",this.placeholder="",this.type="text",this.disabled=!1}_onInput(i){i.stopPropagation(),this.disabled||(this.value=i.currentTarget.value,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})))}render(){return R`
      <label>
        <span>${this.label}</span>
        <input
          type=${this.type||"text"}
          aria-label=${this.label}
          .value=${this.value||""}
          placeholder=${this.placeholder||""}
          step=${this.step||H}
          min=${this.min||H}
          max=${this.max||H}
          ?disabled=${this.disabled}
          @input=${this._onInput}
        />
      </label>
    `}static get styles(){return A`
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
    `}};i([ji()],eI.prototype,"label",void 0),i([ji()],eI.prototype,"value",void 0),i([ji()],eI.prototype,"placeholder",void 0),i([ji()],eI.prototype,"type",void 0),i([ji()],eI.prototype,"step",void 0),i([ji()],eI.prototype,"min",void 0),i([ji()],eI.prototype,"max",void 0),i([ji({type:Boolean,reflect:!0})],eI.prototype,"disabled",void 0),eI=i([yi("space-hub-textfield")],eI);let aI=class extends ei{constructor(){super(...arguments),this._selectedHeaderIndex=0,this._selectedSwitchRowIndex=0,this._yamlMode=!1,this._yamlError="",this._haElementsRequested=!1}setConfig(i){this._config=Vi(i)}connectedCallback(){super.connectedCallback(),this._loadHAElements()}async _loadHAElements(){var i,I,g;if(this._haElementsRequested)return;this._haElementsRequested=!0;try{const t=await(null===(I=(i=window).loadCardHelpers)||void 0===I?void 0:I.call(i));t&&await(null===(g=t.createCardElement)||void 0===g?void 0:g.call(t,{type:"entities",entities:[]}))}catch(i){}const t=["ha-form","ha-formfield","ha-icon-picker","ha-switch","space-hub-textfield","ha-expansion-panel","ha-yaml-editor"],e=i=>Promise.race([customElements.whenDefined(i),new Promise((i=>setTimeout(i,1500)))]);try{await Promise.all(t.map(e))}catch(i){}this.requestUpdate()}_fireConfigChanged(){Hi(this,"config-changed",{config:Vi(this._config)}),this.requestUpdate()}_valueChanged(i,I){const g=i.split(".");let t=this._config;for(let i=0;i<g.length-1;i++){const I=g[i],e=Number(I);if(Number.isFinite(e)){if(!Array.isArray(t))return;t[e]||(t[e]={}),t=t[e]}else void 0===t[I]&&(t[I]={}),t=t[I]}const e=g[g.length-1];""===I||null==I?delete t[e]:t[e]=I,this._fireConfigChanged()}_getNestedValue(i){const I=i.split(".");let g=this._config;for(const i of I){if(null==g)return;const I=Number(i);g=Number.isFinite(I)?g[I]:g[i]}return g}_checkedFromEvent(i){var I;return!!(null===(I=i.currentTarget)||void 0===I?void 0:I.checked)}_clampIndex(i,I){return I<=0?0:Math.min(Math.max(i,0),I-1)}_moveArrayItem(i,I,g){const t=this._getNestedValue(i);if(!Array.isArray(t))return!1;const e=I+g;if(e<0||e>=t.length)return!1;const a=[...t],[A]=a.splice(I,1);return a.splice(e,0,A),this._valueChanged(i,a),!0}_moveSwitchRow(i,I){const g=this._config.switch_rows;if(!Array.isArray(g))return;const t=i+I;if(t<0||t>=g.length)return;const e=[...g],[a]=e.splice(i,1);e.splice(t,0,a),this._selectedSwitchRowIndex=t,this._valueChanged("switch_rows",e)}_moveHeader(i,I){const g=this._config.headers;if(!Array.isArray(g))return;const t=i+I;if(t<0||t>=g.length)return;const e=[...g],[a]=e.splice(i,1);e.splice(t,0,a),this._selectedHeaderIndex=t,this._valueChanged("headers",e)}_handleSelectChanged(i,I){const g=i.split("."),t=g[g.length-1],e=g[g.length-2];"action"===t&&["tap_action","hold_action","double_tap_action"].includes(e)?this._handleActionTypeChanged(g.slice(0,-1).join("."),I):this._valueChanged(i,I)}_handleActionTypeChanged(i,I){if(!I)return void this._valueChanged(i,void 0);const g=Pi(this._getNestedValue(i)),t=g?Object.assign({},g):{};t.action=I,"more-info"!==I&&delete t.entity,"navigate"!==I&&(delete t.navigation_path,delete t.navigation_replace),"url"!==I&&delete t.url_path,"perform-action"!==I&&(delete t.perform_action,delete t.data,delete t.target,delete t.service,delete t.service_data),"assist"!==I&&(delete t.pipeline_id,delete t.start_listening),"perform-action"!==I||t.perform_action||(t.perform_action=""),"navigate"!==I||t.navigation_path||(t.navigation_path=""),"url"!==I||t.url_path||(t.url_path=""),"assist"===I&&void 0===t.start_listening&&(t.start_listening=!1),this._valueChanged(i,t)}_setActionConfirmation(i,I){const g=Pi(this._getNestedValue(i));if(!g)return;const t=Object.assign({},g);if(I){const i=Ei(t.confirmation);t.confirmation=i&&"object"==typeof i?i:{title:"Please confirm",text:"Are you sure?"}}else delete t.confirmation;this._valueChanged(i,t)}_setActionConfirmationField(i,I,g){const t=Pi(this._getNestedValue(i));if(!t)return;const e=Object.assign({},t),a=Ei(e.confirmation),A=a&&"object"==typeof a?Object.assign({},a):{};g.trim()?A[I]=g:delete A[I],e.confirmation=!Object.keys(A).length||A,this._valueChanged(i,e)}_setSwitchConfirmation(i,I){if(!I)return void this._valueChanged(i,void 0);const g=Ei(this._getNestedValue(i));this._valueChanged(i,g&&"object"==typeof g?g:{title:"Please confirm",text:"Are you sure?"})}_setSwitchConfirmationField(i,I,g){const t=Ei(this._getNestedValue(i)),e=t&&"object"==typeof t?Object.assign({},t):{};g.trim()?e[I]=g:delete e[I],this._valueChanged(i,!Object.keys(e).length||e)}_setSwitchInactiveIcon(i,I){const g=this._getNestedValue(i),t=g&&"object"==typeof g?Object.assign({},g):{},e="string"==typeof I?I.trim():"";e?t.icon=e:delete t.icon,delete t.icon_inactive,delete t.icon_off,delete t["icon-inactive"],delete t["icon-off"],this._valueChanged(i,t)}_renderSelectField(i,I,g,t){const e=g||t[0]||"",a=e&&!t.includes(e)?[e,...t]:[...t],A=a.includes(g||"")?g||"":e;return R`
      <ha-form
        .hass=${this.hass}
        .data=${{selection:A}}
        .schema=${[{name:"selection",selector:{select:{mode:"dropdown",options:a.map((i=>({value:i,label:i})))}}}]}
        .computeLabel=${I=>"selection"===I.name?i:void 0}
        @value-changed=${i=>{var g;i.stopPropagation(),this._handleSelectChanged(I,null===(g=i.detail.value)||void 0===g?void 0:g.selection)}}
      ></ha-form>
    `}_renderEntityField(i,I,g,t={}){return R`
      <ha-form
        .hass=${this.hass}
        .data=${{entity:g||""}}
        .schema=${[{name:"entity",selector:{entity:t}}]}
        .computeLabel=${I=>"entity"===I.name?i:void 0}
        @value-changed=${i=>{var g;i.stopPropagation(),this._valueChanged(I,null===(g=i.detail.value)||void 0===g?void 0:g.entity)}}
      ></ha-form>
    `}_friendlyEntityName(i){var I,g,t;return i&&(null===(g=null===(I=this.hass)||void 0===I?void 0:I.states)||void 0===g?void 0:g[i])&&(null===(t=this.hass.states[i].attributes)||void 0===t?void 0:t.friendly_name)||""}_entitySummary(i){if(!i)return"No entity selected";const I=this._friendlyEntityName(i);return I&&I!==i?`${I} • ${i}`:i}render(){return this.hass&&this._config?R`
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
    `:R``}_renderYamlEditor(){return R`
      <ha-yaml-editor
        .defaultValue=${this._config}
        @value-changed=${this._yamlChanged}
      ></ha-yaml-editor>
      ${this._yamlError?R`<div class="yaml-error">${this._yamlError}</div>`:H}
    `}_yamlChanged(i){i.stopPropagation();const I=i.detail.value;I&&"object"==typeof I?(this._yamlError="",this._config=Vi(I),this._fireConfigChanged()):this._yamlError="Invalid YAML"}_renderVisualEditor(){return R`
      ${this._renderAppearanceSection()}
      ${this._renderHeadersSection()}
      ${this._renderSwitchRowsSection()}
      ${this._renderCardsSection()}
    `}_renderAppearanceSection(){var i,I,g,t,e;return R`
      <ha-expansion-panel outlined .header=${"Appearance"}>
        <div class="section-content">
          <div class="side-by-side">
            <space-hub-textfield
              label="Tile Height (px)"
              type="number"
              .value=${String(null!==(i=this._config.tile_height)&&void 0!==i?i:"")}
              @input=${i=>{const I=Number(i.target.value);this._valueChanged("tile_height",Number.isFinite(I)&&I>0?I:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Main Icon Size (px)"
              type="number"
              .value=${String(null!==(I=this._config.main_icon_size)&&void 0!==I?I:"")}
              @input=${i=>{const I=Number(i.target.value);this._valueChanged("main_icon_size",Number.isFinite(I)&&I>0?I:void 0)}}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <space-hub-textfield
              label="Chip Icon Size (px)"
              type="number"
              .value=${String(null!==(g=this._config.chip_icon_size)&&void 0!==g?g:"")}
              @input=${i=>{const I=Number(i.target.value);this._valueChanged("chip_icon_size",Number.isFinite(I)&&I>0?I:void 0)}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Chip Font Size (px)"
              type="number"
              .value=${String(null!==(t=this._config.chip_font_size)&&void 0!==t?t:"")}
              @input=${i=>{const I=Number(i.target.value);this._valueChanged("chip_font_size",Number.isFinite(I)&&I>0?I:void 0)}}
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
              .value=${String(null!==(e=this._config.card_shadow_intensity)&&void 0!==e?e:"")}
              @input=${i=>{const I=Number(i.target.value);this._valueChanged("card_shadow_intensity",Number.isFinite(I)?I:void 0)}}
            ></space-hub-textfield>
          </div>
          <space-hub-textfield
            label="Unavailable Pulse Color"
            .value=${this._config.unavailable_pulse_color||""}
            @input=${i=>this._valueChanged("unavailable_pulse_color",i.target.value)}
          ></space-hub-textfield>
        </div>
      </ha-expansion-panel>
    `}_renderHeadersSection(){const i=this._config.headers||[],I=this._clampIndex(this._selectedHeaderIndex,i.length);return R`
      <ha-expansion-panel outlined .header=${`Headers (${i.length})`}>
        <div class="section-content">
          ${i.length>1?R`
            <div class="tab-bar">
              ${i.map(((i,g)=>R`<button class="tab-btn${I===g?" active":""}" @click=${()=>{this._selectedHeaderIndex=g,this.requestUpdate()}}>Header ${g+1}</button>`))}
            </div>
          `:H}
          ${i.length?this._renderHeader(i[I],I):R`<div class="empty-hint">No headers configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addHeader}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Header
            </button>
            ${i.length>0?R`
              <button
                class="editor-btn"
                .disabled=${I<=0}
                @click=${()=>this._moveHeader(I,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Header Up
              </button>
              <button
                class="editor-btn"
                .disabled=${I>=i.length-1}
                @click=${()=>this._moveHeader(I,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Header Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeHeader(I)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Header ${I+1}
              </button>
            `:H}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addHeader(){this._config.headers||(this._config.headers=[]),this._config.headers.push({main:{main_name:"New Room"}}),this._selectedHeaderIndex=this._config.headers.length-1,this._fireConfigChanged()}_removeHeader(i){this._config.headers&&(this._config.headers.splice(i,1),this._selectedHeaderIndex>=this._config.headers.length&&(this._selectedHeaderIndex=Math.max(0,this._config.headers.length-1)),this._fireConfigChanged())}_renderHeader(i,I){const g=`headers.${I}`;return R`
      ${this._renderWeatherConfig(i.weather,`${g}.weather`)}
      ${this._renderMainTileConfig(i.main,`${g}.main`)}
      ${this._renderACConfig(i.ac,`${g}.ac`)}
      ${this._renderThermostatConfig(i.thermostat,`${g}.thermostat`)}
    `}_renderWeatherConfig(i,I){var g,t,e,a,A,C,c,l,o,n,d;const s=i||{};return R`
      <ha-expansion-panel outlined .header=${"Weather Tile"}>
        <div class="section-content">
          ${!!i?R`
            <div class="side-by-side">
              ${this._renderEntityField("Weather Entity",`${I}.entity`,s.entity,{domain:"weather"})}
            </div>
            <div class="side-by-side">
              ${this._renderSelectField("Weather Icon Set",`${I}.icon_set`,s.icon_set,["meteocons","realistic"])}
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Temperature Size (px)"
                type="number"
                min="18"
                max="56"
                .value=${String(null!==(g=s.temp_size)&&void 0!==g?g:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.temp_size`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Icon Size (px)"
                type="number"
                min="28"
                max="160"
                .value=${String(null!==(t=s.icon_size)&&void 0!==t?t:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.icon_size`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Icon Offset X (px)"
                type="number"
                .value=${String(null!==(e=s.icon_offset_x)&&void 0!==e?e:"")}
                @input=${i=>{const g=i.target.value,t=Number(g);this._valueChanged(`${I}.icon_offset_x`,""!==g&&Number.isFinite(t)?t:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Icon Offset Y (px)"
                type="number"
                .value=${String(null!==(a=s.icon_offset_y)&&void 0!==a?a:"")}
                @input=${i=>{const g=i.target.value,t=Number(g);this._valueChanged(`${I}.icon_offset_y`,""!==g&&Number.isFinite(t)?t:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <ha-formfield label="Sync forecast graphs">
                <ha-switch
                  .checked=${!1!==s.sync_graphs}
                  @change=${i=>{this._valueChanged(`${I}.sync_graphs`,!!this._checkedFromEvent(i)&&void 0)}}
                ></ha-switch>
              </ha-formfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Stale Glow After (min)"
                type="number"
                min="0"
                .value=${String(null!==(A=s.stale_minutes)&&void 0!==A?A:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.stale_minutes`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Graph Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(null!==(C=s.conditions_icon_size)&&void 0!==C?C:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.conditions_icon_size`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Temperature Icon Count"
                type="number"
                min="0"
                max="72"
                .value=${String(null!==(c=s.temperature_icon_count)&&void 0!==c?c:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.temperature_icon_count`,Number.isFinite(g)&&g>=0?g:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Daily Forecast Icon Size (px)"
                type="number"
                min="8"
                max="48"
                .value=${String(null!==(l=s.daily_icon_size)&&void 0!==l?l:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.daily_icon_size`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Sensor Grid Columns"
                type="number"
                min="1"
                max="4"
                .value=${String(null!==(o=s.metric_columns)&&void 0!==o?o:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.metric_columns`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              <space-hub-textfield
                label="Forecast Graph Hours"
                type="number"
                min="1"
                max="72"
                .value=${String(null!==(n=s.forecast_slots)&&void 0!==n?n:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.forecast_slots`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Graph Height (px)"
                type="number"
                min="82"
                max="260"
                .value=${String(null!==(d=s.graph_height)&&void 0!==d?d:"")}
                @input=${i=>{const g=Number(i.target.value);this._valueChanged(`${I}.graph_height`,Number.isFinite(g)&&g>0?g:void 0)}}
              ></space-hub-textfield>
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${I}.temp_sensor`,s.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${I}.humidity_sensor`,s.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderEntityField("Feels Like Sensor",`${I}.feels_like_sensor`,s.feels_like_sensor,{domain:"sensor"})}
            ${this._renderMetricsConfig(s.metrics&&s.metrics.length?s.metrics:this._defaultWeatherMetrics(s),I)}
            ${this._renderChipsConfig(s.chips||[],I)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(I,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Weather Tile
            </button>
          `:R`
            <button class="editor-btn" @click=${()=>{this._valueChanged(I,{name:"Weather"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Weather Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderMainTileConfig(i,I){const g=i||{};return R`
      <ha-expansion-panel outlined .header=${"Main Tile"}>
        <div class="section-content">
          ${!!i?R`
            <div class="side-by-side">
              <space-hub-textfield
                label="Name"
                .value=${g.main_name||""}
                @input=${i=>this._valueChanged(`${I}.main_name`,i.target.value)}
              ></space-hub-textfield>
              <ha-icon-picker
                .hass=${this.hass}
                label="Icon"
                .value=${g.main_icon||""}
                @value-changed=${i=>this._valueChanged(`${I}.main_icon`,i.detail.value)}
              ></ha-icon-picker>
            </div>
            ${this._renderEntityField("Light Group Entity (tap toggles)",`${I}.light_group_entity`,g.light_group_entity)}
            <div class="side-by-side">
              ${this._renderEntityField("Tap Entity",`${I}.tap_entity`,g.tap_entity)}
              ${this._renderEntityField("Hold Entity (more-info)",`${I}.hold_entity`,g.hold_entity)}
            </div>
            <div class="side-by-side">
              ${this._renderEntityField("Temperature Sensor",`${I}.temp_sensor`,g.temp_sensor,{domain:"sensor"})}
              ${this._renderEntityField("Humidity Sensor",`${I}.humidity_sensor`,g.humidity_sensor,{domain:"sensor"})}
            </div>
            ${this._renderSelectField("Glow Mode",`${I}.glow_mode`,g.glow_mode,qi)}
            ${this._renderChipsConfig(g.chips||[],I)}
            ${this._renderActionConfig("Tap Action",`${I}.tap_action`,g.tap_action)}
            ${this._renderActionConfig("Hold Action",`${I}.hold_action`,g.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${I}.double_tap_action`,g.double_tap_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(I,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Main Tile
            </button>
          `:R`
            <button class="editor-btn" @click=${()=>{this._valueChanged(I,{main_name:"Room"})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Main Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderChipsConfig(i,I){const g=`${I}.chips`;return R`
      <ha-expansion-panel outlined .header=${`Chips (${i.length})`}>
        <div class="section-content">
          ${i.map(((i,I)=>this._renderSingleChip(i,`${g}.${I}`,I,g)))}
          <button class="editor-btn" @click=${()=>{const i=this._getNestedValue(g)||[];i.push({type:"custom",entity:""}),this._valueChanged(g,i)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Chip
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderSingleChip(i,I,g,t){return R`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Chip ${g+1}: ${i.type||"custom"}</span>
            <span class="sub-item-meta">${this._entitySummary(i.entity)}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=this._getNestedValue(t)||[];i.splice(g,1),this._valueChanged(t,[...i])}}
          ></ha-icon-button>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${I}.type`,i.type,Ki)}
          ${this._renderEntityField("Entity",`${I}.entity`,i.entity)}
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon"
            .value=${i.icon||""}
            @value-changed=${i=>this._valueChanged(`${I}.icon`,i.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Active)"
            .value=${i.icon_active||""}
            @value-changed=${i=>this._valueChanged(`${I}.icon_active`,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Inactive)"
            .value=${i.icon_inactive||""}
            @value-changed=${i=>this._valueChanged(`${I}.icon_inactive`,i.detail.value)}
          ></ha-icon-picker>
          <ha-icon-picker
            .hass=${this.hass}
            label="Icon (Unavailable)"
            .value=${i.icon_unavailable||""}
            @value-changed=${i=>this._valueChanged(`${I}.icon_unavailable`,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Background (Active)"
            .value=${i.background_active||""}
            @input=${i=>this._valueChanged(`${I}.background_active`,i.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Background (Unavailable)"
            .value=${i.background_unavailable||""}
            @input=${i=>this._valueChanged(`${I}.background_unavailable`,i.target.value)}
          ></space-hub-textfield>
        </div>
        <space-hub-textfield
          label="Icon Color (Unavailable)"
          .value=${i.icon_color_unavailable||""}
          @input=${i=>this._valueChanged(`${I}.icon_color_unavailable`,i.target.value)}
        ></space-hub-textfield>
      </div>
    `}_defaultWeatherMetrics(i){const I=[{entity:i.wind_speed_sensor,name:"Wind"},{entity:i.wind_gust_sensor,name:"Gust"},{entity:i.temp_min_24h_sensor,name:"24h Min"},{entity:i.temp_max_24h_sensor,name:"24h Max"},{entity:i.uv_sensor,name:"UV"},{entity:i.solar_lux_sensor,name:"Solar"},{entity:i.pressure_sensor,name:"Pressure"}].filter((i=>i.entity));return(i.rain_state_sensor||i.rain_rate_sensor)&&I.splice(4,0,{type:"rain",name:"Rain",rain_state_sensor:i.rain_state_sensor,rain_rate_sensor:i.rain_rate_sensor,rain_rate_threshold:i.rain_rate_threshold}),I}_renderMetricItem(i,I,g,t){var e;const a=i=>{const e=[...this._getNestedValue(I)||g];e[t]=Object.assign(Object.assign({},e[t]),i),this._valueChanged(I,e)},A="rain"===i.type,C=A?this._entitySummary(i.rain_state_sensor||i.rain_rate_sensor):this._entitySummary(i.entity);return R`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="drag-handle" title="Drag to reorder">
            <ha-svg-icon
              .path=${"M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"}
            ></ha-svg-icon>
          </div>
          <div class="sub-item-heading">
            <span class="sub-item-title">${A?"Rain":"Metric"} ${t+1}</span>
            <span class="sub-item-meta">${C}</span>
          </div>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=[...this._getNestedValue(I)||g];i.splice(t,1),this._valueChanged(I,i)}}
          ></ha-icon-button>
        </div>
        ${A?R`
          <div class="empty-hint">Shows "No rain" / "Raining" with intensity. A wet sensor with no rate above the threshold counts as no rain.</div>
          ${this._renderEntityField("Rain State Sensor",`${I}.${t}.rain_state_sensor`,i.rain_state_sensor,{domain:"binary_sensor"})}
          ${this._renderEntityField("Rain Rate Sensor",`${I}.${t}.rain_rate_sensor`,i.rain_rate_sensor,{domain:"sensor"})}
          <div class="side-by-side">
            <space-hub-textfield
              label="Rain Rate Threshold"
              type="number"
              min="0"
              step="0.1"
              .value=${String(null!==(e=i.rain_rate_threshold)&&void 0!==e?e:0)}
              @input=${i=>{const I=Number(i.target.value);a({rain_rate_threshold:Number.isFinite(I)&&I>=0?I:void 0})}}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Label (optional)"
              .value=${i.name||""}
              @input=${i=>a({name:i.target.value||void 0})}
            ></space-hub-textfield>
          </div>
          <div class="side-by-side">
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (Raining)"
              .value=${i.icon_active||""}
              @value-changed=${i=>a({icon_active:i.detail.value||void 0})}
            ></ha-icon-picker>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (No Rain)"
              .value=${i.icon_inactive||""}
              @value-changed=${i=>a({icon_inactive:i.detail.value||void 0})}
            ></ha-icon-picker>
          </div>
        `:R`
          ${this._renderEntityField("Entity",`${I}.${t}.entity`,i.entity,{domain:"sensor"})}
          <div class="side-by-side">
            <space-hub-textfield
              label="Label (optional)"
              .value=${i.name||""}
              @input=${i=>a({name:i.target.value||void 0})}
            ></space-hub-textfield>
            <ha-icon-picker
              .hass=${this.hass}
              label="Icon (optional, native if empty)"
              .value=${i.icon||""}
              @value-changed=${i=>a({icon:i.detail.value||void 0})}
            ></ha-icon-picker>
          </div>
        `}
      </div>
    `}_renderMetricsConfig(i,I){const g=`${I}.metrics`,t=(I,t)=>{const e=[...this._getNestedValue(g)||i];if(I<0||I>=e.length||t<0||t>=e.length)return;const[a]=e.splice(I,1);e.splice(t,0,a),this._valueChanged(g,e)};return R`
      <div class="metrics-section">
        <div class="metrics-section-title">Grid Metrics (${i.length})</div>
        <div class="empty-hint">Drag the handle to reorder. Edit, remove, or add your own entities.</div>
        <ha-sortable
          handle-selector=".drag-handle"
          @item-moved=${i=>{i.stopPropagation();const{oldIndex:I,newIndex:g}=i.detail;t(I,g)}}
        >
          <div class="metrics-list">
            ${i.map(((I,t)=>this._renderMetricItem(I,g,i,t)))}
          </div>
        </ha-sortable>
        <div class="side-by-side">
          <button class="editor-btn" @click=${()=>{const I=[...this._getNestedValue(g)||i];I.push({entity:""}),this._valueChanged(g,I)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Metric
          </button>
          <button class="editor-btn" @click=${()=>{const I=[...this._getNestedValue(g)||i];I.push({type:"rain",name:"Rain",icon_active:"mdi:weather-rainy",icon_inactive:"mdi:water-off-outline"}),this._valueChanged(g,I)}}>
            <ha-icon icon="mdi:weather-rainy"></ha-icon> Add Rain
          </button>
        </div>
      </div>
    `}_renderACConfig(i,I){const g=i||{};return R`
      <ha-expansion-panel outlined .header=${"AC Tile"}>
        <div class="section-content">
          ${!!i?R`
            ${this._renderEntityField("Climate Entity",`${I}.entity`,g.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${I}.glow_mode`,g.glow_mode,qi)}
            ${this._renderActionConfig("Tap Action",`${I}.tap_action`,g.tap_action)}
            ${this._renderActionConfig("Hold Action",`${I}.hold_action`,g.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(I,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove AC Tile
            </button>
          `:R`
            <button class="editor-btn" @click=${()=>{this._valueChanged(I,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add AC Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderThermostatConfig(i,I){const g=i||{};return R`
      <ha-expansion-panel outlined .header=${"Thermostat Tile"}>
        <div class="section-content">
          ${!!i?R`
            ${this._renderEntityField("Climate Entity",`${I}.entity`,g.entity,{domain:"climate"})}
            ${this._renderSelectField("Glow Mode",`${I}.glow_mode`,g.glow_mode,qi)}
            ${this._renderActionConfig("Tap Action",`${I}.tap_action`,g.tap_action)}
            ${this._renderActionConfig("Hold Action",`${I}.hold_action`,g.hold_action)}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(I,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove Thermostat Tile
            </button>
          `:R`
            <button class="editor-btn" @click=${()=>{this._valueChanged(I,{entity:""})}}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Thermostat Tile
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}_renderSwitchRowsSection(){const i=this._config.switch_rows||[],I=this._clampIndex(this._selectedSwitchRowIndex,i.length);return R`
      <ha-expansion-panel outlined .header=${`Switch Rows (${i.length})`}>
        <div class="section-content">
          ${i.length>1?R`
            <div class="tab-bar">
              ${i.map(((i,g)=>R`<button class="tab-btn${I===g?" active":""}" @click=${()=>{this._selectedSwitchRowIndex=g,this.requestUpdate()}}>Row ${g+1}</button>`))}
            </div>
          `:H}
          ${i.length?this._renderSwitchRow(i[I],I):R`<div class="empty-hint">No switch rows configured.</div>`}
          <div class="action-row">
            <button class="editor-btn" @click=${this._addSwitchRow}>
              <ha-icon icon="mdi:plus"></ha-icon> Add Switch Row
            </button>
            ${i.length>0?R`
              <button
                class="editor-btn"
                .disabled=${I<=0}
                @click=${()=>this._moveSwitchRow(I,-1)}
              >
                <ha-icon icon="mdi:arrow-up"></ha-icon> Move Row Up
              </button>
              <button
                class="editor-btn"
                .disabled=${I>=i.length-1}
                @click=${()=>this._moveSwitchRow(I,1)}
              >
                <ha-icon icon="mdi:arrow-down"></ha-icon> Move Row Down
              </button>
              <button class="editor-btn danger" @click=${()=>this._removeSwitchRow(I)}>
                <ha-icon icon="mdi:delete"></ha-icon> Remove Row ${I+1}
              </button>
            `:H}
          </div>
        </div>
      </ha-expansion-panel>
    `}_addSwitchRow(){this._config.switch_rows||(this._config.switch_rows=[]),this._config.switch_rows.push({row:[{entity:"",name:"",icon:"mdi:toggle-switch"}]}),this._selectedSwitchRowIndex=this._config.switch_rows.length-1,this._fireConfigChanged()}_removeSwitchRow(i){this._config.switch_rows&&(this._config.switch_rows.splice(i,1),this._selectedSwitchRowIndex>=this._config.switch_rows.length&&(this._selectedSwitchRowIndex=Math.max(0,this._config.switch_rows.length-1)),this._fireConfigChanged())}_renderSwitchRow(i,I){const g=Array.isArray(i)?i:Array.isArray(null==i?void 0:i.row)?i.row:[],t=`switch_rows.${I}`,e=Array.isArray(i)?t:`${t}.row`;return R`
      <div class="section-content">
        ${g.map(((i,I)=>this._renderSwitchItem(i,`${e}.${I}`,I,e,g.length)))}
        <button class="editor-btn" @click=${()=>{const i=this._getNestedValue(e)||[];i.push({entity:"",name:"",icon:"mdi:toggle-switch"}),this._valueChanged(e,[...i])}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Switch
        </button>
      </div>
    `}_renderSwitchItem(i,I,g,t,e){const a=Ei(null==i?void 0:i.confirmation),A=void 0!==a,C=a&&"object"==typeof a&&a.title||"",c=a&&"object"==typeof a&&a.text||"",l=a&&"object"==typeof a&&a.confirm_text||"",o=a&&"object"==typeof a&&a.dismiss_text||"",n=`${I}.confirmation`;return R`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">${i.name||this._friendlyEntityName(i.entity)||`Switch ${g+1}`}</span>
            <span class="sub-item-meta">${this._entitySummary(i.entity)}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${II}
              .label=${"Move switch up"}
              .disabled=${g<=0}
              @click=${()=>this._moveArrayItem(t,g,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${gI}
              .label=${"Move switch down"}
              .disabled=${g>=e-1}
              @click=${()=>this._moveArrayItem(t,g,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${tI}
              .label=${"Remove switch"}
              @click=${()=>{const i=this._getNestedValue(t)||[];i.splice(g,1),this._valueChanged(t,[...i])}}
            ></ha-icon-button>
          </div>
        </div>
        ${this._renderEntityField("Controlled Entity",`${I}.entity`,i.entity)}
        <div class="side-by-side">
          <space-hub-textfield
            label="Name"
            .value=${i.name||""}
            @input=${i=>this._valueChanged(`${I}.name`,i.target.value)}
          ></space-hub-textfield>
          <ha-icon-picker
            .hass=${this.hass}
            label="Inactive State Icon"
            .value=${i.icon_inactive||i.icon_off||i["icon-inactive"]||i["icon-off"]||i.icon||""}
            @value-changed=${i=>this._setSwitchInactiveIcon(I,i.detail.value)}
          ></ha-icon-picker>
        </div>
        <div class="side-by-side">
          <ha-icon-picker
            .hass=${this.hass}
            label="Active State Icon"
            .value=${i.icon_active||""}
            @value-changed=${i=>this._valueChanged(`${I}.icon_active`,i.detail.value)}
          ></ha-icon-picker>
          <space-hub-textfield
            label="Icon Size"
            .value=${i.icon_size||""}
            @input=${i=>this._valueChanged(`${I}.icon_size`,i.target.value)}
          ></space-hub-textfield>
        </div>
        <div class="side-by-side">
          ${this._renderSelectField("Type",`${I}.type`,i.type,$i)}
          ${this._renderSelectField("Glow Mode",`${I}.glow_mode`,i.glow_mode,qi)}
        </div>
        <div class="side-by-side">
          <space-hub-textfield
            label="Font Size"
            .value=${i.font_size||i["font-size"]||""}
            @input=${i=>this._valueChanged(`${I}.font_size`,i.target.value)}
          ></space-hub-textfield>
          <space-hub-textfield
            label="Font Weight"
            .value=${i.font_weight||i["font-weight"]||""}
            @input=${i=>this._valueChanged(`${I}.font_weight`,i.target.value)}
          ></space-hub-textfield>
        </div>
        ${this._renderEntityField("Hold Entity (more-info on hold)",`${I}.hold_entity`,i.hold_entity)}

        <div class="confirmation-settings">
          <ha-formfield label="Require confirmation on tap">
            <ha-switch
              .checked=${A}
              @change=${i=>{this._setSwitchConfirmation(n,this._checkedFromEvent(i))}}
            ></ha-switch>
          </ha-formfield>
          <div class="confirmation-fields">
            <space-hub-textfield
              label="Confirmation Title"
              .value=${C}
              placeholder="Please confirm"
              .disabled=${!A}
              @input=${i=>this._setSwitchConfirmationField(n,"title",i.target.value)}
            ></space-hub-textfield>
            <space-hub-textfield
              label="Confirmation Message"
              .value=${c}
              placeholder="Are you sure?"
              .disabled=${!A}
              @input=${i=>this._setSwitchConfirmationField(n,"text",i.target.value)}
            ></space-hub-textfield>
            <div class="side-by-side">
              <space-hub-textfield
                label="Confirm Button Text"
                .value=${l}
                placeholder="OK"
                .disabled=${!A}
                @input=${i=>this._setSwitchConfirmationField(n,"confirm_text",i.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Dismiss Button Text"
                .value=${o}
                placeholder="Cancel"
                .disabled=${!A}
                @input=${i=>this._setSwitchConfirmationField(n,"dismiss_text",i.target.value)}
              ></space-hub-textfield>
            </div>
          </div>
        </div>

        <ha-expansion-panel outlined .header=${"Actions"}>
          <div class="section-content">
            ${this._renderActionConfig("Tap Action",`${I}.tap_action`,i.tap_action)}
            ${this._renderActionConfig("Hold Action",`${I}.hold_action`,i.hold_action)}
            ${this._renderActionConfig("Double Tap Action",`${I}.double_tap_action`,i.double_tap_action)}
          </div>
        </ha-expansion-panel>

        <ha-expansion-panel outlined .header=${"Info Templates"}>
          <div class="section-content">
            ${this._renderInfoTemplates(i,I)}
          </div>
        </ha-expansion-panel>
      </div>
    `}_renderInfoTemplates(i,I){const g=Array.isArray(i.info_templates)?i.info_templates:i.info_template?[i.info_template]:[];return R`
      ${g.map(((i,t)=>R`
        <div class="side-by-side">
          <space-hub-textfield
            label="Template ${t+1}"
            .value=${i||""}
            @input=${i=>{const e=[...g];e[t]=i.target.value,this._valueChanged(`${I}.info_templates`,e)}}
          ></space-hub-textfield>
          <ha-icon-button
            .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
            @click=${()=>{const i=[...g];i.splice(t,1),this._valueChanged(`${I}.info_templates`,i.length?i:void 0)}}
          ></ha-icon-button>
        </div>
      `))}
      ${g.length<2?R`
        <button class="editor-btn" @click=${()=>{const i=[...g,""];this._valueChanged(`${I}.info_templates`,i)}}>
          <ha-icon icon="mdi:plus"></ha-icon> Add Template
        </button>
      `:H}
    `}_renderCardsSection(){const i=this._config.cards||[];return R`
      <ha-expansion-panel outlined .header=${`Embedded Cards (${i.length})`}>
        <div class="section-content">
          <div class="empty-hint">
            Add extra Home Assistant cards below the switch rows. Each card is a standard HA card config in YAML.
          </div>
          ${i.map(((I,g)=>this._renderEmbeddedCardItem(I,g,i.length)))}
          <button class="editor-btn" @click=${()=>{const I=[...i,{type:"tile",entity:""}];this._valueChanged("cards",I)}}>
            <ha-icon icon="mdi:plus"></ha-icon> Add Card
          </button>
        </div>
      </ha-expansion-panel>
    `}_renderEmbeddedCardItem(i,I,g){return R`
      <div class="sub-item">
        <div class="sub-item-header">
          <div class="sub-item-heading">
            <span class="sub-item-title">Card ${I+1}: ${i.type||"unknown"}</span>
          </div>
          <div class="header-actions">
            <ha-icon-button
              .path=${II}
              .label=${"Move card up"}
              .disabled=${I<=0}
              @click=${()=>this._moveArrayItem("cards",I,-1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${gI}
              .label=${"Move card down"}
              .disabled=${I>=g-1}
              @click=${()=>this._moveArrayItem("cards",I,1)}
            ></ha-icon-button>
            <ha-icon-button
              .path=${tI}
              .label=${"Remove card"}
              @click=${()=>{const i=[...this._config.cards||[]];i.splice(I,1),this._valueChanged("cards",i.length?i:void 0)}}
            ></ha-icon-button>
          </div>
        </div>
        <ha-yaml-editor
          .defaultValue=${i}
          @value-changed=${i=>{i.stopPropagation();const g=[...this._config.cards||[]];g[I]=i.detail.value,this._valueChanged("cards",g)}}
        ></ha-yaml-editor>
      </div>
    `}_renderActionConfig(i,I,g){const t=Pi(g),e=!!t,a=Ei(null==t?void 0:t.confirmation),A=void 0!==a,C=a&&"object"==typeof a&&a.title||"",c=a&&"object"==typeof a&&a.text||"",l=a&&"object"==typeof a&&a.confirm_text||"",o=a&&"object"==typeof a&&a.dismiss_text||"";return R`
      <ha-expansion-panel outlined .header=${i}>
        <div class="section-content">
          ${e?R`
            ${this._renderSelectField("Action",`${I}.action`,null==t?void 0:t.action,iI)}
            ${"more-info"===(null==t?void 0:t.action)?R`
              ${this._renderEntityField("More Info Entity",`${I}.entity`,t.entity)}
            `:H}
            ${"navigate"===(null==t?void 0:t.action)?R`
              <space-hub-textfield
                label="Navigation Path"
                .value=${t.navigation_path||""}
                @input=${i=>this._valueChanged(`${I}.navigation_path`,i.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Replace current path">
                <ha-switch
                  .checked=${!!t.navigation_replace}
                  @change=${i=>this._valueChanged(`${I}.navigation_replace`,this._checkedFromEvent(i)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:H}
            ${"url"===(null==t?void 0:t.action)?R`
              <space-hub-textfield
                label="URL"
                .value=${t.url_path||""}
                @input=${i=>this._valueChanged(`${I}.url_path`,i.target.value)}
              ></space-hub-textfield>
            `:H}
            ${"perform-action"===(null==t?void 0:t.action)?R`
              <space-hub-textfield
                label="Action"
                .value=${t.perform_action||""}
                @input=${i=>this._valueChanged(`${I}.perform_action`,i.target.value)}
              ></space-hub-textfield>
              <ha-yaml-editor
                label="Target"
                .defaultValue=${t.target||{}}
                @value-changed=${i=>{i.stopPropagation(),this._valueChanged(`${I}.target`,i.detail.value)}}
              ></ha-yaml-editor>
              <ha-yaml-editor
                label="Data"
                .defaultValue=${t.data||{}}
                @value-changed=${i=>{i.stopPropagation(),this._valueChanged(`${I}.data`,i.detail.value)}}
              ></ha-yaml-editor>
            `:H}
            ${"assist"===(null==t?void 0:t.action)?R`
              <space-hub-textfield
                label="Pipeline ID"
                .value=${t.pipeline_id||""}
                @input=${i=>this._valueChanged(`${I}.pipeline_id`,i.target.value)}
              ></space-hub-textfield>
              <ha-formfield label="Start listening immediately">
                <ha-switch
                  .checked=${!!t.start_listening}
                  @change=${i=>this._valueChanged(`${I}.start_listening`,this._checkedFromEvent(i)||void 0)}
                ></ha-switch>
              </ha-formfield>
            `:H}
            <ha-formfield label="Require confirmation">
              <ha-switch
                .checked=${A}
                @change=${i=>this._setActionConfirmation(I,this._checkedFromEvent(i))}
              ></ha-switch>
            </ha-formfield>
            ${A?R`
              <space-hub-textfield
                label="Confirmation Title"
                .value=${C}
                placeholder="Please confirm"
                @input=${i=>this._setActionConfirmationField(I,"title",i.target.value)}
              ></space-hub-textfield>
              <space-hub-textfield
                label="Confirmation Message"
                .value=${c}
                placeholder="Are you sure?"
                @input=${i=>this._setActionConfirmationField(I,"text",i.target.value)}
              ></space-hub-textfield>
              <div class="side-by-side">
                <space-hub-textfield
                  label="Confirm Button Text"
                  .value=${l}
                  placeholder="OK"
                  @input=${i=>this._setActionConfirmationField(I,"confirm_text",i.target.value)}
                ></space-hub-textfield>
                <space-hub-textfield
                  label="Dismiss Button Text"
                  .value=${o}
                  placeholder="Cancel"
                  @input=${i=>this._setActionConfirmationField(I,"dismiss_text",i.target.value)}
                ></space-hub-textfield>
              </div>
            `:H}
            <button class="editor-btn danger" @click=${()=>this._valueChanged(I,void 0)}>
              <ha-icon icon="mdi:delete"></ha-icon> Remove
            </button>
          `:R`
            <button class="editor-btn" @click=${()=>this._valueChanged(I,{action:"more-info"})}>
              <ha-icon icon="mdi:plus"></ha-icon> Configure ${i}
            </button>
          `}
        </div>
      </ha-expansion-panel>
    `}};aI.styles=A`
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
  `,i([ji({attribute:!1})],aI.prototype,"hass",void 0),i([Wi()],aI.prototype,"_config",void 0),i([Wi()],aI.prototype,"_selectedHeaderIndex",void 0),i([Wi()],aI.prototype,"_selectedSwitchRowIndex",void 0),i([Wi()],aI.prototype,"_yamlMode",void 0),i([Wi()],aI.prototype,"_yamlError",void 0),aI=i([yi("space-hub-card-editor")],aI);const AI=new WeakMap,CI=i=>{void 0!==i.holdTimer&&(window.clearTimeout(i.holdTimer),i.holdTimer=void 0)},cI=(i,I)=>{const g=new Event("hass-action",{bubbles:!0,composed:!0});g.detail={action:I},i.dispatchEvent(g)},lI=(i,I={})=>{const g=AI.get(i);if(g)return void(g.options=I);const t={options:I,held:!1,startX:0,startY:0,pointerActive:!1};AI.set(i,t),i.addEventListener("contextmenu",(i=>{i.preventDefault(),i.stopPropagation()})),i.addEventListener("pointerdown",(I=>{if(0===I.button&&(t.pointerActive=!0,t.held=!1,t.startX=I.clientX,t.startY=I.clientY,CI(t),t.options.hasHold&&(t.holdTimer=window.setTimeout((()=>{t.holdTimer=void 0,t.held=!0}),500),"function"==typeof i.setPointerCapture)))try{i.setPointerCapture(I.pointerId)}catch(i){}}),{passive:!0}),i.addEventListener("pointermove",(i=>{if(!t.pointerActive||void 0===t.holdTimer)return;const I=Math.abs(i.clientX-t.startX),g=Math.abs(i.clientY-t.startY);(I>10||g>10)&&(CI(t),t.held=!1)}),{passive:!0});const e=()=>{t.pointerActive=!1,t.held=!1,CI(t)};i.addEventListener("pointercancel",e),i.addEventListener("pointerleave",e),i.addEventListener("blur",e),i.addEventListener("pointerup",(I=>{if(t.pointerActive){if(t.pointerActive=!1,CI(t),"function"==typeof i.releasePointerCapture)try{i.releasePointerCapture(I.pointerId)}catch(i){}if(t.held)return t.held=!1,void cI(i,"hold");if(t.options.hasDoubleClick)return void 0!==t.doubleTapTimer?((i=>{void 0!==i.doubleTapTimer&&(window.clearTimeout(i.doubleTapTimer),i.doubleTapTimer=void 0)})(t),void cI(i,"double_tap")):void(t.doubleTapTimer=window.setTimeout((()=>{t.doubleTapTimer=void 0,cI(i,"tap")}),250));cI(i,"tap")}})),i.addEventListener("keyup",(I=>{"Enter"!==I.key&&" "!==I.key||(I.preventDefault(),cI(i,"tap"))}))},oI=Ci(class extends ci{update(i,[I]){return lI(i.element,I),F}render(i){}});function nI(i,I,g){var t,e,a,A;return I?{bg:null!==(e=null!==(t=g?I.background_active:I.background_inactive)&&void 0!==t?t:I.background)&&void 0!==e?e:i.bg,iconColor:null!==(A=null!==(a=g?I.icon_color_active:I.icon_color_inactive)&&void 0!==a?a:I.icon_color)&&void 0!==A?A:i.iconColor}:i}function dI(i,I){var g;return"lock"===i||null!==(g=null==I?void 0:I.startsWith("lock."))&&void 0!==g&&g}function sI(i,I){var g;const t=(null==I?void 0:I.entity)||(null==I?void 0:I.tap_entity),e=String((null==I?void 0:I.type)||"").toLowerCase(),a=t&&(null==i?void 0:i.hass)?i.hass.states[t]:void 0,A=((null==a?void 0:a.state)||"").toLowerCase(),C=!a||"unavailable"===A||"unknown"===A||""===A,c=!C&&function(i,I,g){var t;return!!I&&("lock"===g||null!==(t=null==i?void 0:i.startsWith("lock."))&&void 0!==t&&t?"locked"===I:"on"===I||"open"===I||"opening"===I)}(t,A,e),l=function(i,I,g,t,e,a){var A,C,c;return a?null!==(c=null!==(C=null!==(A=null==t?void 0:t.icon_unavailable)&&void 0!==A?A:null==t?void 0:t.icon_inactive)&&void 0!==C?C:null==t?void 0:t.icon)&&void 0!==c?c:"mdi:alert-circle-outline":e&&(null==t?void 0:t.icon_active)?t.icon_active:!e&&(null==t?void 0:t.icon_inactive)?t.icon_inactive:(null==t?void 0:t.icon)?t.icon:dI(i,I)?e?"mdi:lock":"mdi:lock-open-variant":"door"===i?e?"mdi:door-open":"mdi:door":"presence"===i?"on"===g?"mdi:human-greeting":"mdi:human-handsdown":"smart_plug"===i?"on"===g?"mdi:power-plug":g&&"off"!==g?"mdi:power-plug-outline":"mdi:power-plug-off":"sliding_gate"===i?e?"mdi:gate-open":"mdi:gate-arrow-left":"gate"===i?e?"mdi:gate-open":"mdi:gate":e?"mdi:check-circle":"mdi:checkbox-blank-circle-outline"}(e,t,A,I,c,C),{bg:o,iconColor:n}=function(i,I,g,t,e,a){if(a)return function(i){var I,g,t,e,a,A;return{bg:null!==(t=null!==(g=null!==(I=null==i?void 0:i.background_unavailable)&&void 0!==I?I:null==i?void 0:i.background_inactive)&&void 0!==g?g:null==i?void 0:i.background)&&void 0!==t?t:"var(--chip-unavailable-background, rgba(0,0,0,0.12))",iconColor:null!==(A=null!==(a=null!==(e=null==i?void 0:i.icon_color_unavailable)&&void 0!==e?e:null==i?void 0:i.icon_color_inactive)&&void 0!==a?a:null==i?void 0:i.icon_color)&&void 0!==A?A:"var(--state-unavailable-color, var(--disabled-text-color, var(--secondary-text-color)))"}}(t);if(dI(i,I))return nI(e?{bg:"#66bb6a",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},t,e);if("door"===i||"sliding_gate"===i||"gate"===i)return nI(e?{bg:"#e53935",iconColor:"#ffffff"}:{bg:"#66bb6a",iconColor:"#ffffff"},t,e);if("presence"===i){const i="on"===g;return nI(i?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},t,i)}if("smart_plug"===i)return nI(e?{bg:"#ff9800",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},t,e);return nI(e?{bg:"#42a5f5",iconColor:"#ffffff"}:{bg:"var(--chip-background-color)",iconColor:"var(--secondary-text-color)"},t,e)}(e,t,A,I,c,C),d="chip"+(C?" chip-unavailable":""),s=C?"icon-unavailable":"",M=null!==(g=null==a?void 0:a.state)&&void 0!==g?g:"unavailable";return R`
    <div
      class=${d}
      style=${`background:${o}`}
      title=${M}
      data-state=${A||"unavailable"}
      role="img"
      aria-label=${e?`${e} ${M}`:M}
    >
      <ha-icon .icon=${l} class=${s} style=${`color:${n}`}></ha-icon>
    </div>
  `}const MI={weak:"rgba(255,193,7,0.16)",strong:"rgba(255,193,7,0.30)"},rI={weak:"rgba(0,200,83,0.16)",strong:"rgba(0,200,83,0.30)"},uI={weak:"rgba(229,57,53,0.16)",strong:"rgba(229,57,53,0.30)"};const bI={weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"};function NI(i,I="static",g=!1){if(!i||"none"===I||!g)return{style:"",overlay:H};return{style:`${`--pulse-weak: ${i.weak}; --pulse-strong: ${i.strong};`} ${"pulse"===I?"animation: glowPulse 2.4s ease-in-out infinite;":""} ${`box-shadow: 0 18px 40px var(--pulse-strong, ${i.strong}), 0 6px 18px var(--pulse-weak, ${i.weak});`}`,overlay:R`<div class="glow-overlay" aria-hidden="true"></div>`}}function hI(i,I){var g;const t=(null==I?void 0:I.icon)||"mdi:sofa-outline",e=(null==I?void 0:I.name)||"",a="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(null==I?void 0:I.temp_sensor,2,"°"):"—°",A="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(null==I?void 0:I.humidity_sensor,2,"%"):"—%",C=!(!(null==I?void 0:I.double_tap_action)&&!(null===(g=null==i?void 0:i._config)||void 0===g?void 0:g.double_tap_action)),c=!!(null==I?void 0:I.light_group_entity),l=(null==I?void 0:I.light_group_entity)||(null==I?void 0:I.tap_entity)||(null==I?void 0:I.entity),o=c&&"function"==typeof(null==i?void 0:i._isOn)&&i._isOn(l),n=(null==I?void 0:I.light_group_entity)||(null==I?void 0:I.tap_entity)||(null==I?void 0:I.entity),d=(null==I?void 0:I.glow_mode)||"static",s=!!(null==I?void 0:I.light_group_entity)&&o&&"none"!==d,M=MI,{style:r,overlay:u}=NI(M,d,s),b="chip main-light-chip "+(o?"on":"off"),N=Array.isArray(null==I?void 0:I.chips)?I.chips:[],h=N.find((i=>"illuminance"===String((null==i?void 0:i.type)||"").toLowerCase())),m=N.filter((i=>"illuminance"!==String((null==i?void 0:i.type)||"").toLowerCase())).map((I=>sI(i,I))),y=h?function(i,I){const g=(null==I?void 0:I.entity)||(null==I?void 0:I.tap_entity),t=(null==I?void 0:I.icon)||"mdi:brightness-5",e="function"==typeof(null==i?void 0:i._fmt2)?i._fmt2(g,0," lx"):"— lx";return R`
    <div class="illuminance-chip">
      <ha-icon .icon=${t}></ha-icon>
      <span class="illuminance-value">${e}</span>
    </div>
  `}(i,h):H;return R`
    <div class="tile-wrap">
      <!-- glow rendered as a sibling so it can appear under/around the tile -->
      <div class="glow-under" style=${r}>${u}</div>
      <ha-control-button
        class="main-tile ${o?"on":""}"
        @hass-action=${g=>{"function"==typeof(null==i?void 0:i._onMainAction)&&i._onMainAction(g,I,null==I?void 0:I.tap_entity,null==I?void 0:I.hold_entity,n)}}
        .actionHandler=${oI({hasHold:!0,hasDoubleClick:C})}
        role="button" tabindex="0"
      >
        <ha-icon class="main-icon" .icon=${t}></ha-icon>
        <div class="chip-temperature-humidity" data-role="chip">
          <ha-icon icon="mdi:thermometer" class="chip-ico"></ha-icon>
          <span class="temperature-value">${a}</span>
          <span style="opacity:.6;">|</span>
          <ha-icon icon="mdi:water-percent" class="chip-ico"></ha-icon>
          <span class="humidity-value">${A}</span>
        </div>
        ${y}
        <div class="main-chips-bottom-right" data-role="chips">
          ${c?R`<div class=${b}>
                <ha-icon .icon=${"mdi:lightbulb"}></ha-icon>
              </div>`:H}
          ${m.length?R`${m}`:H}
        </div>
        <div class="main-name">${e}</div>
  </ha-control-button>
    </div>
  `}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class mI extends ci{constructor(i){if(super(i),this.et=H,i.type!==Ai)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===H||null==i)return this.ft=void 0,this.et=i;if(i===F)return i;if("string"!=typeof i)throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.et)return this.ft;this.et=i;const I=[i];return I.raw=I,this.ft={_$litType$:this.constructor.resultType,strings:I,values:[]}}}mI.directiveName="unsafeHTML",mI.resultType=1;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yI extends mI{}yI.directiveName="unsafeSVG",yI.resultType=2;const DI=Ci(yI),jI={barometer:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImJhcm9tZXRlciI+CjxnIGlkPSJCYXJvbWV0ZXIiPgo8Y2lyY2xlIGlkPSJIb3VzaW5nIiBjeD0iNjQiIGN5PSI2NCIgcj0iMzkuNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NDNfODA5MykiIHN0cm9rZT0iIzFFMjkzQiIvPgo8ZyBpZD0iTGluZXMiPgo8cGF0aCBpZD0iTGluZSAxIiBkPSJNNjQgMzNWNDIiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgNyIgZD0iTTQyLjA3OTcgNDIuMDc5N0w0OC40NDM2IDQ4LjQ0MzYiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgNSIgZD0iTTg1LjkyMDMgNDIuMDc5N0w3OS41NTY0IDQ4LjQ0MzYiIHN0cm9rZT0iIzY0NzQ4QiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggaWQ9IkxpbmUgMyIgZD0iTTk1IDY0TDg2IDY0IiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDgiIGQ9Ik03OS41NTY0IDc5LjU1NjRMODUuOTIwMyA4NS45MjAzIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDYiIGQ9Ik00OC40NDM2IDc5LjU1NjRMNDIuMDc5NyA4NS45MjAzIiBzdHJva2U9IiM2NDc0OEIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxwYXRoIGlkPSJMaW5lIDQiIGQ9Ik00MiA2NEwzMyA2NCIgc3Ryb2tlPSIjNjQ3NDhCIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjwvZz4KPGcgaWQ9IkJhcm9tZXRlcl8yIj4KPGcgaWQ9IlBvaW50ZXIiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODQzXzgwOTMpIj4KPGNpcmNsZSBpZD0iTmVlZGxlIE1vdW50IiBjeD0iNjQiIGN5PSI2NCIgcj0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNjQgNjQpIiBmaWxsPSIjRUY0NDQ0Ii8+CjxyZWN0IGlkPSJOZWVkbGUiIHg9Ijc5LjU1NjQiIHk9IjQ1LjYxNTIiIHdpZHRoPSI0IiBoZWlnaHQ9IjMzIiByeD0iMiIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgNzkuNTU2NCA0NS42MTUyKSIgZmlsbD0iI0VGNDQ0NCIvPgo8Y2lyY2xlIGlkPSJIb2xkZXIiIGN4PSI2NCIgY3k9IjY0IiByPSIyLjUiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDY0IDY0KSIgZmlsbD0iIzQ3NTU2OSIgc3Ryb2tlPSIjMjkzNjQ5Ii8+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9Ii02IDY0IDY0OzYgNjQgNjQ7LTYgNjQgNjQiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg0M184MDkzIiB4MT0iNjQiIHkxPSIyNCIgeDI9IjY0IiB5Mj0iMTA0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzMzQxNTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMUUyOTNCIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg0M184MDkzIj4KPHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjQ4IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcuNDM1IDQzLjQ5MzkpIHJvdGF0ZSg0NSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","clear-day":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsZWFyLWRheSI+CjxnIGlkPSJTdW4iPgo8Y2lyY2xlIGlkPSJDb3JlIiBjeD0iNjQiIGN5PSI2My45OTk5IiByPSIxOS41IiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTgwMl81MTg2KSIgc3Ryb2tlPSIjRjhBRjE4Ii8+CjxnIGlkPSJSYXlzIj4KPHBhdGggZD0iTTYxIDE5QzYxIDE3LjM0MzEgNjIuMzQzMSAxNiA2NCAxNkM2NS42NTY4IDE2IDY3IDE3LjM0MzEgNjcgMTlWMzNDNjcgMzQuNjU2OSA2NS42NTY4IDM2IDY0IDM2QzYyLjM0MzEgMzYgNjEgMzQuNjU2OSA2MSAzM1YxOVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTkzLjY5ODUgMzAuMDU4OUM5NC44NyAyOC44ODczIDk2Ljc2OTYgMjguODg3MyA5Ny45NDExIDMwLjA1ODlDOTkuMTEyNyAzMS4yMzA0IDk5LjExMjcgMzMuMTI5OSA5Ny45NDExIDM0LjMwMTVMODguMDQxNiA0NC4yMDFDODYuODcwMSA0NS4zNzI2IDg0Ljk3MDYgNDUuMzcyNiA4My43OTkgNDQuMjAxQzgyLjYyNzQgNDMuMDI5NCA4Mi42Mjc0IDQxLjEyOTkgODMuNzk5IDM5Ljk1ODRMOTMuNjk4NSAzMC4wNTg5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMTA5IDYxQzExMC42NTcgNjEgMTEyIDYyLjM0MzIgMTEyIDY0QzExMiA2NS42NTY5IDExMC42NTcgNjcgMTA5IDY3SDk1QzkzLjM0MzEgNjcgOTIgNjUuNjU2OSA5MiA2NEM5MiA2Mi4zNDMyIDkzLjM0MzEgNjEgOTUgNjFIMTA5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNOTcuOTQxMSA5My42OTg1Qzk5LjExMjcgOTQuODcwMSA5OS4xMTI3IDk2Ljc2OTYgOTcuOTQxMSA5Ny45NDExQzk2Ljc2OTYgOTkuMTEyNyA5NC44NzAxIDk5LjExMjcgOTMuNjk4NSA5Ny45NDExTDgzLjc5OSA4OC4wNDE2QzgyLjYyNzQgODYuODcwMSA4Mi42Mjc0IDg0Ljk3MDYgODMuNzk5IDgzLjc5OUM4NC45NzA2IDgyLjYyNzQgODYuODcwMSA4Mi42Mjc0IDg4LjA0MTYgODMuNzk5TDk3Ljk0MTEgOTMuNjk4NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTYxIDk1QzYxIDkzLjM0MzEgNjIuMzQzMSA5MiA2NCA5MkM2NS42NTY4IDkyIDY3IDkzLjM0MzEgNjcgOTVWMTA5QzY3IDExMC42NTcgNjUuNjU2OCAxMTIgNjQgMTEyQzYyLjM0MzEgMTEyIDYxIDExMC42NTcgNjEgMTA5Vjk1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzkuOTU4NCA4My43OTlDNDEuMTI5OSA4Mi42Mjc0IDQzLjAyOTQgODIuNjI3NCA0NC4yMDEgODMuNzk5QzQ1LjM3MjYgODQuOTcwNiA0NS4zNzI2IDg2Ljg3MDEgNDQuMjAxIDg4LjA0MTZMMzQuMzAxNSA5Ny45NDExQzMzLjEyOTkgOTkuMTEyNyAzMS4yMzA0IDk5LjExMjcgMzAuMDU4OSA5Ny45NDExQzI4Ljg4NzMgOTYuNzY5NiAyOC44ODczIDk0Ljg3IDMwLjA1ODkgOTMuNjk4NUwzOS45NTg0IDgzLjc5OVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTMzIDYxQzM0LjY1NjkgNjEgMzYgNjIuMzQzMSAzNiA2NEMzNiA2NS42NTY4IDM0LjY1NjkgNjcgMzMgNjdIMTlDMTcuMzQzMSA2NyAxNiA2NS42NTY4IDE2IDY0QzE2IDYyLjM0MzEgMTcuMzQzMSA2MSAxOSA2MUgzM1oiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTQ0LjIwMSAzOS45NTg0QzQ1LjM3MjYgNDEuMTI5OSA0NS4zNzI2IDQzLjAyOTQgNDQuMjAxIDQ0LjIwMUM0My4wMjk0IDQ1LjM3MjYgNDEuMTI5OSA0NS4zNzI2IDM5Ljk1ODQgNDQuMjAxTDMwLjA1ODkgMzQuMzAxNUMyOC44ODczIDMzLjEyOTkgMjguODg3MyAzMS4yMzA1IDMwLjA1ODkgMzAuMDU4OUMzMS4yMzA1IDI4Ljg4NzMgMzMuMTI5OSAyOC44ODczIDM0LjMwMTUgMzAuMDU4OUw0NC4yMDEgMzkuOTU4NFoiIGZpbGw9IiNGOEFGMTgiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCA2NC4wIDY0LjA7MzYwIDY0LjAgNjQuMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTgwMl81MTg2IiB4MT0iNjQiIHkxPSI0My45OTk5IiB4Mj0iNjQiIHkyPSI4My45OTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQkJGMjQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjhBRjE4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+","clear-night":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsZWFyLW5pZ2h0Ij4KPGcgaWQ9Ik1vb24iPgo8cGF0aCBpZD0iTW9vbl8yIiBkPSJNNjAuMzAxOCAzMi41ODJDNTUuMjgxNyA1My42OTk5IDczLjYwMDEgNzQuMzQ3NyA5NS4zMjUyIDcyLjUxNDZDOTEuNTE5MyA4NS43NzAyIDc5LjE5ODYgOTUuNDk5OCA2NC41MzYxIDk1LjVDNDYuODM3NSA5NS41IDMyLjUwMDEgODEuMzQ0NCAzMi41IDYzLjg5ODRDMzIuNSA0Ny44Njg4IDQ0LjYwNjYgMzQuNjI3OCA2MC4zMDE4IDMyLjU4MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODM3XzUwODApIiBzdHJva2U9IiM3MkI5RDUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSItNiA2My45IDY0LjA7NiA2My45IDY0LjA7LTYgNjMuOSA2NC4wIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODM3XzUwODAiIHgxPSI2NCIgeTE9IjMyIiB4Mj0iNjQiIHkyPSI5NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODZDM0RCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcyQjlENSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==",cloudy:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImNsb3VkeSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfODE0NCkiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyMyA0OC40NzQ2QzYwLjEyMjcgNDAuNjExMSA3MC4yOTc1IDM3LjM4IDc4LjgxNTEgNDAuOTQzNEM4Ny4zMjE0IDQ0LjUwMjMgOTIuMTM4IDU0LjAwMjYgODkuOTAzIDYyLjk2NDhMODkuNzQxOCA2My42MTQzTDkwLjQxMDggNjMuNTg1Qzk3LjQyMDMgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE3IDg4LjQ5OTcgOTAuOTc3MiA4OC41SDM3Ljk1MzdDMzEuMTI3NSA4OC41MDE4IDI1LjIwMjkgODMuMTcwOSAyNC41NTkyIDc2LjM2MDRDMjMuOTE1OCA2OS41NTE4IDI4LjczNjkgNjMuMjEyNCAzNS40NDMgNjEuOTQ1M0wzNS45MjY0IDYxLjg1MzVMMzUuODQyNCA2MS4zNjkxQzM1LjAyNTYgNTYuNjIzOSAzNy4xMjU4IDUxLjcxNjggNDEuMTA1MSA0OS4wMTI3QzQ1LjA5NTEgNDYuMzAxNCA1MC40NDU5IDQ2LjE1MzcgNTQuNTc5NyA0OC42Mzk2TDU1LjAwMjYgNDguODk0NUw1NS4yNjIzIDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF84MTQ0KSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF84MTQ0IiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MTQ0Ij4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",drizzle:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImRyaXp6bGUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg1MTIpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODUxMikiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iUmFpbmRyb3BzIj4KPHBhdGggaWQ9IlJhaW5kcm9wIDEiIGQ9Ik01MiA4N1Y5MCIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAyIiBkPSJNNjQgODdWOTAiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDMiIGQ9Ik03NiA4N1Y5MCIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODUxMiIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODUxMiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",fog:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImZvZyIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfOTM3NCkiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyMyA0OC40NzQ2QzYwLjEyMjcgNDAuNjExMSA3MC4yOTc1IDM3LjM4IDc4LjgxNTEgNDAuOTQzNEM4Ny4zMjE0IDQ0LjUwMjMgOTIuMTM4IDU0LjAwMjYgODkuOTAzIDYyLjk2NDhMODkuNzQxOCA2My42MTQzTDkwLjQxMDggNjMuNTg1Qzk3LjQyMDMgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE3IDg4LjQ5OTcgOTAuOTc3MiA4OC41SDM3Ljk1MzdDMzEuMTI3NSA4OC41MDE4IDI1LjIwMjkgODMuMTcwOSAyNC41NTkyIDc2LjM2MDRDMjMuOTE1OCA2OS41NTE4IDI4LjczNjkgNjMuMjEyNCAzNS40NDMgNjEuOTQ1M0wzNS45MjY0IDYxLjg1MzVMMzUuODQyNCA2MS4zNjkxQzM1LjAyNTYgNTYuNjIzOSAzNy4xMjU4IDUxLjcxNjggNDEuMTA1MSA0OS4wMTI3QzQ1LjA5NTEgNDYuMzAxNCA1MC40NDU5IDQ2LjE1MzcgNTQuNTc5NyA0OC42Mzk2TDU1LjAwMjYgNDguODk0NUw1NS4yNjIzIDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF85Mzc0KSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iUHJlY2lwaXRhdGlvbiI+CjxwYXRoIGlkPSJMaW5lIDIiIGQ9Ik00MCA5NUg4OCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MyAwOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iTGluZSAxIiBkPSJNNDAgMTAzSDg4IiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDszIDA7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85Mzc0IiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85Mzc0Ij4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",hail:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9ImhhaWwiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg3MTgpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODcxOCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iSWNlIGJhbGxzIj4KPHBhdGggaWQ9IkljZSBCYWxsIDEiIGQ9Ik01MiA4NkM1MS40MDY3IDg2IDUwLjgyNjYgODYuMTc1OSA1MC4zMzMzIDg2LjUwNTZDNDkuODM5OSA4Ni44MzUyIDQ5LjQ1NTQgODcuMzAzOCA0OS4yMjgzIDg3Ljg1MkM0OS4wMDEzIDg4LjQwMDEgNDguOTQxOSA4OS4wMDMzIDQ5LjA1NzcgODkuNTg1M0M0OS4xNzM0IDkwLjE2NzIgNDkuNDU5MSA5MC43MDE4IDQ5Ljg3ODcgOTEuMTIxM0M1MC4yOTgzIDkxLjU0MDkgNTAuODMyOSA5MS44MjY2IDUxLjQxNDggOTEuOTQyNEM1MS45OTY4IDkyLjA1ODEgNTIuNTk5OCA5MS45OTg3IDUzLjE0OCA5MS43NzE2QzUzLjY5NjEgOTEuNTQ0NiA1NC4xNjQ3IDkxLjE2MDEgNTQuNDk0NCA5MC42NjY3QzU0LjgyNCA5MC4xNzM0IDU1IDg5LjU5MzMgNTUgODlDNTUgODguMjA0NCA1NC42ODM5IDg3LjQ0MTMgNTQuMTIxMyA4Ni44Nzg3QzUzLjU1ODcgODYuMzE2MSA1Mi43OTU3IDg2IDUyIDg2WiIgZmlsbD0iIzg2QzNEQiI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJJY2UgQmFsbCAyIiBkPSJNNjQgODZDNjMuNDA2NyA4NiA2Mi44MjY2IDg2LjE3NTkgNjIuMzMzMyA4Ni41MDU2QzYxLjgzOTkgODYuODM1MiA2MS40NTU0IDg3LjMwMzggNjEuMjI4MyA4Ny44NTJDNjEuMDAxMyA4OC40MDAxIDYwLjk0MTkgODkuMDAzMyA2MS4wNTc3IDg5LjU4NTNDNjEuMTczNCA5MC4xNjcyIDYxLjQ1OTEgOTAuNzAxOCA2MS44Nzg3IDkxLjEyMTNDNjIuMjk4MyA5MS41NDA5IDYyLjgzMjkgOTEuODI2NiA2My40MTQ4IDkxLjk0MjRDNjMuOTk2OCA5Mi4wNTgxIDY0LjU5OTggOTEuOTk4NyA2NS4xNDggOTEuNzcxNkM2NS42OTYxIDkxLjU0NDYgNjYuMTY0NyA5MS4xNjAxIDY2LjQ5NDQgOTAuNjY2N0M2Ni44MjQgOTAuMTczNCA2NyA4OS41OTMzIDY3IDg5QzY3IDg4LjIwNDQgNjYuNjgzOSA4Ny40NDEzIDY2LjEyMTMgODYuODc4N0M2NS41NTg3IDg2LjMxNjEgNjQuNzk1NyA4NiA2NCA4NloiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IkljZSBCYWxsIDMiIGQ9Ik03NiA4NkM3NS40MDY3IDg2IDc0LjgyNjYgODYuMTc1OSA3NC4zMzMzIDg2LjUwNTZDNzMuODM5OSA4Ni44MzUyIDczLjQ1NTQgODcuMzAzOCA3My4yMjgzIDg3Ljg1MkM3My4wMDEzIDg4LjQwMDEgNzIuOTQxOSA4OS4wMDMzIDczLjA1NzcgODkuNTg1M0M3My4xNzM0IDkwLjE2NzIgNzMuNDU5MSA5MC43MDE4IDczLjg3ODcgOTEuMTIxM0M3NC4yOTgzIDkxLjU0MDkgNzQuODMyOSA5MS44MjY2IDc1LjQxNDggOTEuOTQyNEM3NS45OTY4IDkyLjA1ODEgNzYuNTk5OCA5MS45OTg3IDc3LjE0OCA5MS43NzE2Qzc3LjY5NjEgOTEuNTQ0NiA3OC4xNjQ3IDkxLjE2MDEgNzguNDk0NCA5MC42NjY3Qzc4LjgyNCA5MC4xNzM0IDc5IDg5LjU5MzMgNzkgODlDNzkgODguMjA0NCA3OC42ODM5IDg3LjQ0MTMgNzguMTIxMyA4Ni44Nzg3Qzc3LjU1ODcgODYuMzE2MSA3Ni43OTU3IDg2IDc2IDg2WiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODcxOCIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODcxOCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==","not-available":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9Im5vdC1hdmFpbGFibGUiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzc1MzYpIj4KPGcgaWQ9IlRleHQiIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODU4Xzc1MzYpIj4KPHBhdGggaWQ9IlRleHRfMiIgZD0iTTQ2Ljg1MzEgNjYuMTY2VjUyLjUwNEg1Mi45MjUyVjc2SDQ2Ljc1NDFMMzguNjAzMSA2Mi40MDRWNzZIMzIuNDk4MVY1Mi41MDRIMzguNjAzMUw0Ni44NTMxIDY2LjE2NlpNNjEuOTM4OCA3Nkg1NS45OTg4TDY1Ljc2NjggNTIuNTA0SDcxLjcwNjhMNjEuOTM4OCA3NlpNOTYuODkwMiA3Nkg5MC4zODkyTDg5LjA2OTIgNzEuOTc0SDgxLjE0OTJMNzkuODI5MiA3Nkg3My4zNjEyTDgxLjk0MTIgNTIuNTA0SDg4LjQ0MjJMOTYuODkwMiA3NlpNODMuNjkwMiA2NC4yNTJMODIuNjM0MiA2Ny40NTNIODcuNjE3Mkw4Ni41NjEyIDY0LjI1Mkw4NS4xMDkyIDU5LjMzNUw4My42OTAyIDY0LjI1MloiIGZpbGw9IiMyMDI5MzkiLz4KPC9nPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfNzUzNiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8Y2xpcFBhdGggaWQ9ImNsaXAxXzE4NThfNzUzNiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=","partly-cloudy-day":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBhcnRseS1jbG91ZHktZGF5IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg1OF84MjQxKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjM5IiBjeT0iNTEiIHI9IjguNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODI0MSkiIHN0cm9rZT0iI0Y4QUYxOCIvPgo8ZyBpZD0iUmF5cyI+CjxwYXRoIGQ9Ik0zNy42ODc1IDMxLjMxMjVDMzcuNjg3NSAzMC41ODc2IDM4LjI3NTEgMzAgMzkgMzBDMzkuNzI0OSAzMCA0MC4zMTI1IDMwLjU4NzYgNDAuMzEyNSAzMS4zMTI1VjM3LjQzNzVDNDAuMzEyNSAzOC4xNjI0IDM5LjcyNDkgMzguNzUgMzkgMzguNzVDMzguMjc1MSAzOC43NSAzNy42ODc1IDM4LjE2MjQgMzcuNjg3NSAzNy40Mzc1VjMxLjMxMjVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik01MS45OTMxIDM2LjE1MDhDNTIuNTA1NiAzNS42MzgyIDUzLjMzNjcgMzUuNjM4MiA1My44NDkyIDM2LjE1MDhDNTQuMzYxOCAzNi42NjMzIDU0LjM2MTggMzcuNDk0MyA1My44NDkyIDM4LjAwNjlMNDkuNTE4MiA0Mi4zMzc5QzQ5LjAwNTYgNDIuODUwNSA0OC4xNzQ2IDQyLjg1MDUgNDcuNjYyMSA0Mi4zMzc5QzQ3LjE0OTUgNDEuODI1NCA0Ny4xNDk1IDQwLjk5NDQgNDcuNjYyMSA0MC40ODE4TDUxLjk5MzEgMzYuMTUwOFoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTU4LjY4NzUgNDkuNjg3NUM1OS40MTI0IDQ5LjY4NzUgNjAgNTAuMjc1MSA2MCA1MUM2MCA1MS43MjQ5IDU5LjQxMjQgNTIuMzEyNSA1OC42ODc1IDUyLjMxMjVINTIuNTYyNUM1MS44Mzc2IDUyLjMxMjUgNTEuMjUgNTEuNzI0OSA1MS4yNSA1MUM1MS4yNSA1MC4yNzUxIDUxLjgzNzYgNDkuNjg3NSA1Mi41NjI1IDQ5LjY4NzVINTguNjg3NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTUzLjg0OTIgNjMuOTkzMUM1NC4zNjE4IDY0LjUwNTcgNTQuMzYxOCA2NS4zMzY3IDUzLjg0OTIgNjUuODQ5MkM1My4zMzY3IDY2LjM2MTggNTIuNTA1NiA2Ni4zNjE4IDUxLjk5MzEgNjUuODQ5Mkw0Ny42NjIxIDYxLjUxODJDNDcuMTQ5NSA2MS4wMDU3IDQ3LjE0OTUgNjAuMTc0NiA0Ny42NjIxIDU5LjY2MjFDNDguMTc0NiA1OS4xNDk1IDQ5LjAwNTcgNTkuMTQ5NSA0OS41MTgyIDU5LjY2MjFMNTMuODQ5MiA2My45OTMxWiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzcuNjg3NSA2NC41NjI1QzM3LjY4NzUgNjMuODM3NiAzOC4yNzUxIDYzLjI1IDM5IDYzLjI1QzM5LjcyNDkgNjMuMjUgNDAuMzEyNSA2My44Mzc2IDQwLjMxMjUgNjQuNTYyNVY3MC42ODc1QzQwLjMxMjUgNzEuNDEyNCAzOS43MjQ5IDcyIDM5IDcyQzM4LjI3NTEgNzIgMzcuNjg3NSA3MS40MTI0IDM3LjY4NzUgNzAuNjg3NVY2NC41NjI1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMjguNDgxOCA1OS42NjIxQzI4Ljk5NDMgNTkuMTQ5NSAyOS44MjU0IDU5LjE0OTUgMzAuMzM3OSA1OS42NjIxQzMwLjg1MDUgNjAuMTc0NiAzMC44NTA1IDYxLjAwNTYgMzAuMzM3OSA2MS41MTgyTDI2LjAwNjkgNjUuODQ5MkMyNS40OTQzIDY2LjM2MTggMjQuNjYzMyA2Ni4zNjE4IDI0LjE1MDggNjUuODQ5MkMyMy42MzgyIDY1LjMzNjcgMjMuNjM4MiA2NC41MDU2IDI0LjE1MDggNjMuOTkzMUwyOC40ODE4IDU5LjY2MjFaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0yNS40Mzc1IDQ5LjY4NzVDMjYuMTYyNCA0OS42ODc1IDI2Ljc1IDUwLjI3NTEgMjYuNzUgNTFDMjYuNzUgNTEuNzI0OSAyNi4xNjI0IDUyLjMxMjUgMjUuNDM3NSA1Mi4zMTI1SDE5LjMxMjVDMTguNTg3NiA1Mi4zMTI1IDE4IDUxLjcyNDkgMTggNTFDMTggNTAuMjc1MSAxOC41ODc2IDQ5LjY4NzUgMTkuMzEyNSA0OS42ODc1SDI1LjQzNzVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zMC4zMzc5IDQwLjQ4MThDMzAuODUwNSA0MC45OTQ0IDMwLjg1MDUgNDEuODI1NCAzMC4zMzc5IDQyLjMzNzlDMjkuODI1NCA0Mi44NTA1IDI4Ljk5NDQgNDIuODUwNSAyOC40ODE4IDQyLjMzNzlMMjQuMTUwOCAzOC4wMDY5QzIzLjYzODIgMzcuNDk0NCAyMy42MzgyIDM2LjY2MzMgMjQuMTUwOCAzNi4xNTA4QzI0LjY2MzMgMzUuNjM4MiAyNS40OTQ0IDM1LjYzODIgMjYuMDA2OSAzNi4xNTA4TDMwLjMzNzkgNDAuNDgxOFoiIGZpbGw9IiNGOEFGMTgiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iMCAzOS4wIDUxLjA7MzYwIDM5LjAgNTEuMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvZz4KPC9nPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4XzgyNDEpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzgyNDEiIHgxPSIzOSIgeTE9IjQyIiB4Mj0iMzkiIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4QUYxOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF84MjQxIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MjQxIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","partly-cloudy-night":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InBhcnRseS1jbG91ZHktbmlnaHQiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4XzgyNTIpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJNb29uIj4KPHBhdGggaWQ9Ik1vb25fMiIgZD0iTTM1LjExNTIgMzQuNTk0N0MzMy4zNzc3IDQzLjE2MjUgNDAuNzUzMiA1MS4yMTQxIDQ5LjMxMzUgNTAuNzgzMkM0Ny42NzMyIDU1LjgzMzggNDIuODg5MSA1OS40OTk5IDM3LjIxNzggNTkuNUMzMC4xODggNTkuNSAyNC41MDAyIDUzLjg3ODYgMjQuNSA0Ni45NTlDMjQuNSA0MC43NDUxIDI5LjA4NzkgMzUuNTgzOCAzNS4xMTUyIDM0LjU5NDdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF84MjUyKSIgc3Ryb2tlPSIjNzJCOUQ1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHZhbHVlcz0iLTYgMzYuOSA0Ny4wOzYgMzYuOSA0Ny4wOy02IDM2LjkgNDcuMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4XzgyNTIpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzgyNTIiIHgxPSIzNyIgeTE9IjM0IiB4Mj0iMzciIHkyPSI2MCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjODZDM0RCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzcyQjlENSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF84MjUyIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84MjUyIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","pressure-high":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InByZXNzdXJlLWhpZ2giPgo8ZyBpZD0iQXJyb3dzIj4KPHBhdGggaWQ9IkFycm93IDMiIGQ9Ik03MC42Njc4IDc2Ljk5NzRDNzAuMzE3NSA3Ni45OTkxIDY5Ljk4IDc2Ljg1OTkgNjkuNzI1MyA3Ni42MDg2TDY0LjAwMTIgNzAuOTE2Mkw1OC4yNzYxIDc2LjYxMTRDNTguMDIwNCA3Ni44NjEyIDU3LjY4MzQgNzcuMDAwMiA1Ny4zMzMzIDc3LjAwMDJDNTYuOTgzMiA3Ny4wMDAyIDU2LjY0NjIgNzYuODYxMiA1Ni4zOTA1IDc2LjYxMTRDNTYuMjY3MyA3Ni40OTE0IDU2LjE2OSA3Ni4zNDYzIDU2LjEwMTkgNzYuMTg0OUM1Ni4wMzQ3IDc2LjAyMzYgNTYgNzUuODQ5NSA1NiA3NS42NzM1QzU2IDc1LjQ5NzYgNTYuMDM0NyA3NS4zMjM1IDU2LjEwMTkgNzUuMTYyMkM1Ni4xNjkgNzUuMDAwOCA1Ni4yNjczIDc0Ljg1NTYgNTYuMzkwNSA3NC43MzU3TDYzLjA1NzEgNjguMTAzMkM2My4zMTI4IDY3Ljg1MzQgNjMuNjQ5OSA2Ny43MTQ0IDY0IDY3LjcxNDRDNjQuMzUwMSA2Ny43MTQ0IDY0LjY4NzEgNjcuODUzNCA2NC45NDI4IDY4LjEwMzJMNzEuNjA5NCA3NC43MzU3QzcxLjczMjcgNzQuODU1NiA3MS44MzA5IDc1LjAwMDggNzEuODk4MSA3NS4xNjIyQzcxLjk2NTMgNzUuMzIzNSA3MS45OTk5IDc1LjQ5NzYgNzEuOTk5OSA3NS42NzM1QzcxLjk5OTkgNzUuODQ5NSA3MS45NjUzIDc2LjAyMzYgNzEuODk4MSA3Ni4xODQ5QzcxLjgzMDkgNzYuMzQ2MyA3MS43MzI3IDc2LjQ5MTQgNzEuNjA5NCA3Ni42MTE0QzcxLjM1NDYgNzYuODYxNSA3MS4wMTc1IDc2Ljk5OTYgNzAuNjY3OCA3Ni45OTc0WiIgZmlsbD0iI0VGNDQ0NCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTQ7MCAwIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAyIiBkPSJNNzAuNjY3OCA2OC42NDAyQzcwLjMxNzUgNjguNjQyIDY5Ljk4IDY4LjUwMjcgNjkuNzI1MyA2OC4yNTE0TDY0LjAwMTIgNjIuNTU5TDU4LjI3NjEgNjguMjU0MkM1OC4wMjA0IDY4LjUwNDEgNTcuNjgzNCA2OC42NDMxIDU3LjMzMzMgNjguNjQzMUM1Ni45ODMyIDY4LjY0MzEgNTYuNjQ2MiA2OC41MDQxIDU2LjM5MDUgNjguMjU0MkM1Ni4yNjczIDY4LjEzNDIgNTYuMTY5IDY3Ljk4OTEgNTYuMTAxOSA2Ny44Mjc3QzU2LjAzNDcgNjcuNjY2NCA1NiA2Ny40OTIzIDU2IDY3LjMxNjRDNTYgNjcuMTQwNCA1Ni4wMzQ3IDY2Ljk2NjMgNTYuMTAxOSA2Ni44MDVDNTYuMTY5IDY2LjY0MzcgNTYuMjY3MyA2Ni40OTg1IDU2LjM5MDUgNjYuMzc4NUw2My4wNTcxIDU5Ljc0NkM2My4zMTI4IDU5LjQ5NjIgNjMuNjQ5OSA1OS4zNTcyIDY0IDU5LjM1NzJDNjQuMzUwMSA1OS4zNTcyIDY0LjY4NzEgNTkuNDk2MiA2NC45NDI4IDU5Ljc0Nkw3MS42MDk0IDY2LjM3ODVDNzEuNzMyNyA2Ni40OTg1IDcxLjgzMDkgNjYuNjQzNyA3MS44OTgxIDY2LjgwNUM3MS45NjUzIDY2Ljk2NjMgNzEuOTk5OSA2Ny4xNDA0IDcxLjk5OTkgNjcuMzE2NEM3MS45OTk5IDY3LjQ5MjMgNzEuOTY1MyA2Ny42NjY0IDcxLjg5ODEgNjcuODI3N0M3MS44MzA5IDY3Ljk4OTEgNzEuNzMyNyA2OC4xMzQyIDcxLjYwOTQgNjguMjU0MkM3MS4zNTQ2IDY4LjUwNDMgNzEuMDE3NSA2OC42NDI1IDcwLjY2NzggNjguNjQwMloiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAxIiBkPSJNNzAuNjY3OCA2MC4yODNDNzAuMzE3NSA2MC4yODQ4IDY5Ljk4IDYwLjE0NTYgNjkuNzI1MyA1OS44OTQzTDY0LjAwMTIgNTQuMjAxOEw1OC4yNzYxIDU5Ljg5N0M1OC4wMjA0IDYwLjE0NjkgNTcuNjgzNCA2MC4yODU5IDU3LjMzMzMgNjAuMjg1OUM1Ni45ODMyIDYwLjI4NTkgNTYuNjQ2MiA2MC4xNDY5IDU2LjM5MDUgNTkuODk3QzU2LjI2NzMgNTkuNzc3MSA1Ni4xNjkgNTkuNjMxOSA1Ni4xMDE5IDU5LjQ3MDZDNTYuMDM0NyA1OS4zMDkyIDU2IDU5LjEzNTEgNTYgNTguOTU5MkM1NiA1OC43ODMyIDU2LjAzNDcgNTguNjA5MiA1Ni4xMDE5IDU4LjQ0NzhDNTYuMTY5IDU4LjI4NjUgNTYuMjY3MyA1OC4xNDEzIDU2LjM5MDUgNTguMDIxM0w2My4wNTcxIDUxLjM4ODlDNjMuMzEyOCA1MS4xMzkgNjMuNjQ5OSA1MSA2NCA1MUM2NC4zNTAxIDUxIDY0LjY4NzEgNTEuMTM5IDY0Ljk0MjggNTEuMzg4OUw3MS42MDk0IDU4LjAyMTNDNzEuNzMyNyA1OC4xNDEzIDcxLjgzMDkgNTguMjg2NSA3MS44OTgxIDU4LjQ0NzhDNzEuOTY1MyA1OC42MDkyIDcxLjk5OTkgNTguNzgzMiA3MS45OTk5IDU4Ljk1OTJDNzEuOTk5OSA1OS4xMzUxIDcxLjk2NTMgNTkuMzA5MiA3MS44OTgxIDU5LjQ3MDZDNzEuODMwOSA1OS42MzE5IDcxLjczMjcgNTkuNzc3MSA3MS42MDk0IDU5Ljg5N0M3MS4zNTQ2IDYwLjE0NzEgNzEuMDE3NSA2MC4yODUzIDcwLjY2NzggNjAuMjgzWiIgZmlsbD0iI0VGNDQ0NCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTQ7MCAwIiBkdXI9IjJzIiBiZWdpbj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvcGF0aD4KPC9nPgo8L2c+Cjwvc3ZnPg==",rain:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW4iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4XzgzNzApIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODM3MCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iUmFpbmRyb3BzIj4KPHBhdGggaWQ9IlJhaW5kcm9wIDEiIGQ9Ik01MiA4M1Y5NSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAyIiBkPSJNNjQgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDMiIGQ9Ik03NiA4M1Y5NSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfODM3MCIgeDE9IjY0LjAwMDgiIHkxPSIzOSIgeDI9IjY0LjAwMDgiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NThfODM3MCI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",raindrop:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW5kcm9wIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuNSw2NC4yKSI+PGcgaWQ9IlJhaW5kcm9wIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjQuNSwtNjQuMikiPgo8cGF0aCBpZD0iVmVjdG9yIiBkPSJNNjQuNSAzNC45MDcyQzcwLjI1MTggNDMuNjE0MiA3NC45NjEzIDUwLjcwNDYgNzguMjU4OCA1Ni45NTUxQzgxLjYzMzkgNjMuMzUyNyA4My41IDY4LjgxNzggODMuNSA3NC4xNzQ4QzgzLjUgODQuODU2NSA3NC45ODk4IDkzLjUgNjQuNSA5My41QzU0LjAxMDYgOTMuNSA0NS41IDg0LjgzMiA0NS41IDc0LjE3NDhDNDUuNSA2OC44MzA1IDQ3LjM2NiA2My4zNzE1IDUwLjc0MTIgNTYuOTczNkM1NC4wMzg4IDUwLjcyMyA1OC43NDgxIDQzLjYyNjMgNjQuNSAzNC45MDcyWiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfMjM0KSIgc3Ryb2tlPSIjMUQ0RUQ4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIHZhbHVlcz0iMSAxOzEuMSAxLjE7MSAxIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiIGFkZGl0aXZlPSJzdW0iLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzIzNCIgeDE9IjY0LjUiIHkxPSIzNCIgeDI9IjY0LjUiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMjU2M0VCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFENEVEOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==",raindrops:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InJhaW5kcm9wcyI+CjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU0LjUsNjQuMikiPjxnIGlkPSJSYWluZHJvcCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU0LjUsLTY0LjIpIj4KPHBhdGggaWQ9IlZlY3RvciIgZD0iTTU0LjUgMzQuOTA3MkM2MC4yNTE4IDQzLjYxNDIgNjQuOTYxMyA1MC43MDQ2IDY4LjI1ODggNTYuOTU1MUM3MS42MzM5IDYzLjM1MjcgNzMuNSA2OC44MTc4IDczLjUgNzQuMTc0OEM3My41IDg0Ljg1NjUgNjQuOTg5OCA5My41IDU0LjUgOTMuNUM0NC4wMTA2IDkzLjUgMzUuNSA4NC44MzIgMzUuNSA3NC4xNzQ4QzM1LjUgNjguODMwNSAzNy4zNjYgNjMuMzcxNSA0MC43NDEyIDU2Ljk3MzZDNDQuMDM4OCA1MC43MjMgNDguNzQ4MSA0My42MjYzIDU0LjUgMzQuOTA3MloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4XzI1NCkiIHN0cm9rZT0iIzFENEVEOCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InNjYWxlIiB2YWx1ZXM9IjEgMTsxLjEgMS4xOzEgMSIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIiBhZGRpdGl2ZT0ic3VtIi8+PC9nPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NC41LDY0LjIpIj48ZyBpZD0iUmFpbmRyb3BfMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTc0LjUsLTY0LjIpIj4KPHBhdGggaWQ9IlZlY3Rvcl8yIiBkPSJNNzQuNSAzNC45MDcyQzgwLjI1MTggNDMuNjE0MiA4NC45NjEzIDUwLjcwNDYgODguMjU4OCA1Ni45NTUxQzkxLjYzMzkgNjMuMzUyNyA5My41IDY4LjgxNzggOTMuNSA3NC4xNzQ4QzkzLjUgODQuODU2NSA4NC45ODk4IDkzLjUgNzQuNSA5My41QzY0LjAxMDYgOTMuNSA1NS41IDg0LjgzMiA1NS41IDc0LjE3NDhDNTUuNSA2OC44MzA1IDU3LjM2NiA2My4zNzE1IDYwLjc0MTIgNTYuOTczNkM2NC4wMzg4IDUwLjcyMyA2OC43NDgxIDQzLjYyNjMgNzQuNSAzNC45MDcyWiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE4NThfMjU0KSIgc3Ryb2tlPSIjMUQ0RUQ4IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIHZhbHVlcz0iMSAxOzEuMSAxLjE7MSAxIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiIGFkZGl0aXZlPSJzdW0iLz48L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODU4XzI1NCIgeDE9IjU0LjUiIHkxPSIzNCIgeDI9IjU0LjUiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMjU2M0VCIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzFENEVEOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF8yNTQiIHgxPSI3NC41IiB5MT0iMzQiIHgyPSI3NC41IiB5Mj0iOTQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzI1NjNFQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxRDRFRDgiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4=",sleet:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InNsZWV0IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTg1OF85MDkwKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4XzkwOTApIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjxnIGlkPSJQcmVjaXBpdGF0aW9uIj4KPGcgaWQ9IlNub3dmbGFrZXMiPgo8cGF0aCBpZD0iU25vd2ZsYWtlIDEiIGQ9Ik01Mi41NzgxIDkwLjM2Nkw1MS4zNzM1IDg5LjY3NzVDNTEuNDc5NCA4OS4yMzI2IDUxLjQ3ODYgODguNzY4NyA1MS4zNzA4IDg4LjMyNDFMNTIuNTc4MSA4Ny42MzQ1QzUyLjY3MzggODcuNTgwNSA1Mi43NTc3IDg3LjUwNzkgNTIuODI1MiA4Ny40MjFDNTIuODkyNiA4Ny4zMzQyIDUyLjk0MjMgODcuMjM0NyA1Mi45NzExIDg3LjEyODRDNTIuOTk5OCA4Ny4wMjIxIDUzLjAwNzEgODYuOTExMiA1Mi45OTI2IDg2LjgwMkM1Mi45NzgyIDg2LjY5MjggNTIuOTQyMiA4Ni41ODc2IDUyLjg4NjggODYuNDkyNkM1Mi43NzMyIDg2LjI5OTggNTIuNTg4NiA4Ni4xNTk3IDUyLjM3MjggODYuMTAyNUM1Mi4xNTcgODYuMDQ1MiA1MS45Mjc2IDg2LjA3NTQgNTEuNzMzOSA4Ni4xODY2TDUwLjUyNzggODYuODc2M0M1MC4xOTMxIDg2LjU1ODYgNDkuNzg2OCA4Ni4zMjY0IDQ5LjM0MzcgODYuMTk5NVY4NC44MjAyQzQ5LjMzNjggODQuNjAwMyA0OS4yNDUgODQuMzkxOCA0OS4wODc1IDg0LjIzODdDNDguOTMgODQuMDg1NiA0OC43MTkyIDg0IDQ4LjQ5OTggODRDNDguMjgwNSA4NCA0OC4wNjk5IDg0LjA4NTYgNDcuOTEyNCA4NC4yMzg3QzQ3Ljc1NDggODQuMzkxOCA0Ny42NjI4IDg0LjYwMDMgNDcuNjU2IDg0LjgyMDJWODYuMTk5NUM0Ny4yMTQgODYuMzI4OSA0Ni44MDgxIDg2LjU1OTggNDYuNDcwNiA4Ni44NzRMNDUuMjY2MiA4Ni4xODUzQzQ1LjA3MjQgODYuMDc0MiA0NC44NDI4IDg2LjA0NCA0NC42MjcgODYuMTAxM0M0NC40MTEzIDg2LjE1ODUgNDQuMjI2NyA4Ni4yOTg2IDQ0LjExMyA4Ni40OTEzQzQ0LjA1NzYgODYuNTg2NCA0NC4wMjE3IDg2LjY5MTYgNDQuMDA3MiA4Ni44MDA3QzQzLjk5MjggODYuOTA5OSA0NCA4Ny4wMjA5IDQ0LjAyODggODcuMTI3MUM0NC4wNTc1IDg3LjIzMzQgNDQuMTA3MiA4Ny4zMzI5IDQ0LjE3NDcgODcuNDE5OEM0NC4yNDIxIDg3LjUwNjcgNDQuMzI2IDg3LjU3OTIgNDQuNDIxNyA4Ny42MzMyTDQ1LjYyNjQgODguMzIxNkM0NS41MjA0IDg4Ljc2NjYgNDUuNTIxMyA4OS4yMzA1IDQ1LjYyOSA4OS42NzVMNDQuNDIxNyA5MC4zNjQ3QzQ0LjMyNiA5MC40MTg3IDQ0LjI0MjEgOTAuNDkxMiA0NC4xNzQ3IDkwLjU3ODFDNDQuMTA3MiA5MC42NjUgNDQuMDU3NSA5MC43NjQ1IDQ0LjAyODggOTAuODcwOEM0NCA5MC45NzcxIDQzLjk5MjggOTEuMDg4IDQ0LjAwNzIgOTEuMTk3MkM0NC4wMjE3IDkxLjMwNjMgNDQuMDU3NiA5MS40MTE1IDQ0LjExMyA5MS41MDY2QzQ0LjIyNjcgOTEuNjk5MiA0NC40MTEzIDkxLjgzOTIgNDQuNjI3IDkxLjg5NjVDNDQuODQyOCA5MS45NTM3IDQ1LjA3MjQgOTEuOTIzNiA0NS4yNjYyIDkxLjgxMjZMNDYuNDcyMSA5MS4xMjI5QzQ2LjgwNjMgOTEuNDQwOSA0Ny4yMTI4IDkxLjY3MjYgNDcuNjU2MiA5MS43OTc5VjkzLjE3OThDNDcuNjYzMSA5My4zOTk3IDQ3Ljc1NSA5My42MDgyIDQ3LjkxMjYgOTMuNzYxM0M0OC4wNzAxIDkzLjkxNDQgNDguMjgwNyA5NCA0OC41IDk0QzQ4LjcxOTQgOTQgNDguOTMwMiA5My45MTQ0IDQ5LjA4NzcgOTMuNzYxM0M0OS4yNDUyIDkzLjYwODIgNDkuMzM3IDkzLjM5OTcgNDkuMzQzOSA5My4xNzk4VjkxLjc5NzVDNDkuNzg1MyA5MS42NjgzIDUwLjE5MDcgOTEuNDM3OCA1MC41Mjc4IDkxLjEyNDJMNTEuNzM0MSA5MS44MTM4QzUxLjkyNzggOTEuOTI0OCA1Mi4xNTczIDkxLjk1NSA1Mi4zNzMgOTEuODk3N0M1Mi41ODg4IDkxLjg0MDUgNTIuNzczMyA5MS43MDA1IDUyLjg4NyA5MS41MDc5QzUyLjk0MjQgOTEuNDEyOCA1Mi45Nzg0IDkxLjMwNzYgNTIuOTkyOCA5MS4xOTg0QzUzLjAwNzMgOTEuMDg5MiA1Mi45OTk4IDkwLjk3ODMgNTIuOTcxMSA5MC44NzJDNTIuOTQyMyA5MC43NjU3IDUyLjg5MjkgOTAuNjY2MiA1Mi44MjU0IDkwLjU3OTNDNTIuNzU3OSA5MC40OTI1IDUyLjY3MzggOTAuNDE5OSA1Mi41NzgxIDkwLjM2NlpNNDcuODY2NCA5MC4wODYxQzQ3LjcyMjkgOTAuMDA1IDQ3LjU5NjggODkuODk2MSA0Ny40OTU2IDg5Ljc2NTdDNDcuMzk0NCA4OS42MzUzIDQ3LjMyMDIgODkuNDg2IDQ3LjI3NzEgODkuMzI2NkM0Ny4yMzM5IDg5LjE2NzEgNDcuMjIyOCA4OS4wMDA3IDQ3LjI0NDMgODguODM2OUM0Ny4yNjU4IDg4LjY3MzEgNDcuMzE5NyA4OC41MTUyIDQ3LjQwMjYgODguMzcyNEM0Ny41NzM1IDg4LjA4NCA0Ny44NTAzIDg3Ljg3NDMgNDguMTczNiA4Ny43ODgzQzQ4LjQ5NyA4Ny43MDIzIDQ4Ljg0MTEgODcuNzQ3IDQ5LjEzMjEgODcuOTEyNkM0OS4yNzU2IDg3Ljk5MzggNDkuNDAxNiA4OC4xMDI3IDQ5LjUwMjggODguMjMzMUM0OS42MDQgODguMzYzNSA0OS42NzgyIDg4LjUxMjcgNDkuNzIxNCA4OC42NzIyQzQ5Ljc2NDUgODguODMxNiA0OS43NzU3IDg4Ljk5ODEgNDkuNzU0MSA4OS4xNjE5QzQ5LjczMjYgODkuMzI1NyA0OS42Nzg3IDg5LjQ4MzYgNDkuNTk1OCA4OS42MjYzQzQ5LjQyNSA4OS45MTQ5IDQ5LjE0ODIgOTAuMTI0NyA0OC44MjQ4IDkwLjIxMDhDNDguNTAxNCA5MC4yOTY5IDQ4LjE1NzQgOTAuMjUyMyA0Ny44NjY0IDkwLjA4NjdWOTAuMDg2MVoiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlNub3dmbGFrZSAyIiBkPSJNNjcuNTc4MSA5MC4zNjZMNjYuMzczNSA4OS42Nzc1QzY2LjQ3OTQgODkuMjMyNiA2Ni40Nzg2IDg4Ljc2ODcgNjYuMzcwOCA4OC4zMjQxTDY3LjU3ODEgODcuNjM0NUM2Ny42NzM4IDg3LjU4MDUgNjcuNzU3NyA4Ny41MDc5IDY3LjgyNTIgODcuNDIxQzY3Ljg5MjYgODcuMzM0MiA2Ny45NDIzIDg3LjIzNDcgNjcuOTcxMSA4Ny4xMjg0QzY3Ljk5OTggODcuMDIyMSA2OC4wMDcxIDg2LjkxMTIgNjcuOTkyNiA4Ni44MDJDNjcuOTc4MiA4Ni42OTI4IDY3Ljk0MjIgODYuNTg3NiA2Ny44ODY4IDg2LjQ5MjZDNjcuNzczMiA4Ni4yOTk4IDY3LjU4ODYgODYuMTU5NyA2Ny4zNzI4IDg2LjEwMjVDNjcuMTU3IDg2LjA0NTIgNjYuOTI3NiA4Ni4wNzU0IDY2LjczMzkgODYuMTg2Nkw2NS41Mjc4IDg2Ljg3NjNDNjUuMTkzMSA4Ni41NTg2IDY0Ljc4NjggODYuMzI2NCA2NC4zNDM3IDg2LjE5OTVWODQuODIwMkM2NC4zMzY4IDg0LjYwMDMgNjQuMjQ1IDg0LjM5MTggNjQuMDg3NSA4NC4yMzg3QzYzLjkzIDg0LjA4NTYgNjMuNzE5MiA4NCA2My40OTk4IDg0QzYzLjI4MDUgODQgNjMuMDY5OSA4NC4wODU2IDYyLjkxMjQgODQuMjM4N0M2Mi43NTQ4IDg0LjM5MTggNjIuNjYyOCA4NC42MDAzIDYyLjY1NiA4NC44MjAyVjg2LjE5OTVDNjIuMjE0IDg2LjMyODkgNjEuODA4MSA4Ni41NTk4IDYxLjQ3MDYgODYuODc0TDYwLjI2NjIgODYuMTg1M0M2MC4wNzI0IDg2LjA3NDIgNTkuODQyOCA4Ni4wNDQgNTkuNjI3IDg2LjEwMTNDNTkuNDExMyA4Ni4xNTg1IDU5LjIyNjcgODYuMjk4NiA1OS4xMTMgODYuNDkxM0M1OS4wNTc2IDg2LjU4NjQgNTkuMDIxNyA4Ni42OTE2IDU5LjAwNzIgODYuODAwN0M1OC45OTI4IDg2LjkwOTkgNTkgODcuMDIwOSA1OS4wMjg4IDg3LjEyNzFDNTkuMDU3NSA4Ny4yMzM0IDU5LjEwNzIgODcuMzMyOSA1OS4xNzQ3IDg3LjQxOThDNTkuMjQyMSA4Ny41MDY3IDU5LjMyNiA4Ny41NzkyIDU5LjQyMTcgODcuNjMzMkw2MC42MjY0IDg4LjMyMTZDNjAuNTIwNCA4OC43NjY2IDYwLjUyMTMgODkuMjMwNSA2MC42MjkgODkuNjc1TDU5LjQyMTcgOTAuMzY0N0M1OS4zMjYgOTAuNDE4NyA1OS4yNDIxIDkwLjQ5MTIgNTkuMTc0NyA5MC41NzgxQzU5LjEwNzIgOTAuNjY1IDU5LjA1NzUgOTAuNzY0NSA1OS4wMjg4IDkwLjg3MDhDNTkgOTAuOTc3MSA1OC45OTI4IDkxLjA4OCA1OS4wMDcyIDkxLjE5NzJDNTkuMDIxNyA5MS4zMDYzIDU5LjA1NzYgOTEuNDExNSA1OS4xMTMgOTEuNTA2NkM1OS4yMjY3IDkxLjY5OTIgNTkuNDExMyA5MS44MzkyIDU5LjYyNyA5MS44OTY1QzU5Ljg0MjggOTEuOTUzNyA2MC4wNzI0IDkxLjkyMzYgNjAuMjY2MiA5MS44MTI2TDYxLjQ3MjEgOTEuMTIyOUM2MS44MDYzIDkxLjQ0MDkgNjIuMjEyOCA5MS42NzI2IDYyLjY1NjIgOTEuNzk3OVY5My4xNzk4QzYyLjY2MzEgOTMuMzk5NyA2Mi43NTUgOTMuNjA4MiA2Mi45MTI2IDkzLjc2MTNDNjMuMDcwMSA5My45MTQ0IDYzLjI4MDcgOTQgNjMuNSA5NEM2My43MTk0IDk0IDYzLjkzMDIgOTMuOTE0NCA2NC4wODc3IDkzLjc2MTNDNjQuMjQ1MiA5My42MDgyIDY0LjMzNyA5My4zOTk3IDY0LjM0MzkgOTMuMTc5OFY5MS43OTc1QzY0Ljc4NTMgOTEuNjY4MyA2NS4xOTA3IDkxLjQzNzggNjUuNTI3OCA5MS4xMjQyTDY2LjczNDEgOTEuODEzOEM2Ni45Mjc4IDkxLjkyNDggNjcuMTU3MyA5MS45NTUgNjcuMzczIDkxLjg5NzdDNjcuNTg4OCA5MS44NDA1IDY3Ljc3MzMgOTEuNzAwNSA2Ny44ODcgOTEuNTA3OUM2Ny45NDI0IDkxLjQxMjggNjcuOTc4NCA5MS4zMDc2IDY3Ljk5MjggOTEuMTk4NEM2OC4wMDczIDkxLjA4OTIgNjcuOTk5OCA5MC45NzgzIDY3Ljk3MTEgOTAuODcyQzY3Ljk0MjMgOTAuNzY1NyA2Ny44OTI5IDkwLjY2NjIgNjcuODI1NCA5MC41NzkzQzY3Ljc1NzkgOTAuNDkyNSA2Ny42NzM4IDkwLjQxOTkgNjcuNTc4MSA5MC4zNjZaTTYyLjg2NjQgOTAuMDg2MUM2Mi43MjI5IDkwLjAwNSA2Mi41OTY4IDg5Ljg5NjEgNjIuNDk1NiA4OS43NjU3QzYyLjM5NDQgODkuNjM1MyA2Mi4zMjAyIDg5LjQ4NiA2Mi4yNzcxIDg5LjMyNjZDNjIuMjMzOSA4OS4xNjcxIDYyLjIyMjggODkuMDAwNyA2Mi4yNDQzIDg4LjgzNjlDNjIuMjY1OCA4OC42NzMxIDYyLjMxOTcgODguNTE1MiA2Mi40MDI2IDg4LjM3MjRDNjIuNTczNSA4OC4wODQgNjIuODUwMyA4Ny44NzQzIDYzLjE3MzYgODcuNzg4M0M2My40OTcgODcuNzAyMyA2My44NDExIDg3Ljc0NyA2NC4xMzIxIDg3LjkxMjZDNjQuMjc1NiA4Ny45OTM4IDY0LjQwMTYgODguMTAyNyA2NC41MDI4IDg4LjIzMzFDNjQuNjA0IDg4LjM2MzUgNjQuNjc4MiA4OC41MTI3IDY0LjcyMTQgODguNjcyMkM2NC43NjQ1IDg4LjgzMTYgNjQuNzc1NyA4OC45OTgxIDY0Ljc1NDEgODkuMTYxOUM2NC43MzI2IDg5LjMyNTcgNjQuNjc4NyA4OS40ODM2IDY0LjU5NTggODkuNjI2M0M2NC40MjUgODkuOTE0OSA2NC4xNDgyIDkwLjEyNDcgNjMuODI0OCA5MC4yMTA4QzYzLjUwMTQgOTAuMjk2OSA2My4xNTc0IDkwLjI1MjMgNjIuODY2NCA5MC4wODY3VjkwLjA4NjFaIiBmaWxsPSIjODZDM0RCIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuN3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJTbm93Zmxha2UgMyIgZD0iTTgyLjU3ODEgOTAuMzY2TDgxLjM3MzUgODkuNjc3NUM4MS40Nzk0IDg5LjIzMjYgODEuNDc4NiA4OC43Njg3IDgxLjM3MDggODguMzI0MUw4Mi41NzgxIDg3LjYzNDVDODIuNjczOCA4Ny41ODA1IDgyLjc1NzcgODcuNTA3OSA4Mi44MjUyIDg3LjQyMUM4Mi44OTI2IDg3LjMzNDIgODIuOTQyMyA4Ny4yMzQ3IDgyLjk3MTEgODcuMTI4NEM4Mi45OTk4IDg3LjAyMjEgODMuMDA3MSA4Ni45MTEyIDgyLjk5MjYgODYuODAyQzgyLjk3ODIgODYuNjkyOCA4Mi45NDIyIDg2LjU4NzYgODIuODg2OCA4Ni40OTI2QzgyLjc3MzIgODYuMjk5OCA4Mi41ODg2IDg2LjE1OTcgODIuMzcyOCA4Ni4xMDI1QzgyLjE1NyA4Ni4wNDUyIDgxLjkyNzYgODYuMDc1NCA4MS43MzM5IDg2LjE4NjZMODAuNTI3OCA4Ni44NzYzQzgwLjE5MzEgODYuNTU4NiA3OS43ODY4IDg2LjMyNjQgNzkuMzQzNyA4Ni4xOTk1Vjg0LjgyMDJDNzkuMzM2OCA4NC42MDAzIDc5LjI0NSA4NC4zOTE4IDc5LjA4NzUgODQuMjM4N0M3OC45MyA4NC4wODU2IDc4LjcxOTIgODQgNzguNDk5OCA4NEM3OC4yODA1IDg0IDc4LjA2OTkgODQuMDg1NiA3Ny45MTI0IDg0LjIzODdDNzcuNzU0OCA4NC4zOTE4IDc3LjY2MjggODQuNjAwMyA3Ny42NTYgODQuODIwMlY4Ni4xOTk1Qzc3LjIxNCA4Ni4zMjg5IDc2LjgwODEgODYuNTU5OCA3Ni40NzA2IDg2Ljg3NEw3NS4yNjYyIDg2LjE4NTNDNzUuMDcyNCA4Ni4wNzQyIDc0Ljg0MjggODYuMDQ0IDc0LjYyNyA4Ni4xMDEzQzc0LjQxMTMgODYuMTU4NSA3NC4yMjY3IDg2LjI5ODYgNzQuMTEzIDg2LjQ5MTNDNzQuMDU3NiA4Ni41ODY0IDc0LjAyMTcgODYuNjkxNiA3NC4wMDcyIDg2LjgwMDdDNzMuOTkyOCA4Ni45MDk5IDc0IDg3LjAyMDkgNzQuMDI4OCA4Ny4xMjcxQzc0LjA1NzUgODcuMjMzNCA3NC4xMDcyIDg3LjMzMjkgNzQuMTc0NyA4Ny40MTk4Qzc0LjI0MjEgODcuNTA2NyA3NC4zMjYgODcuNTc5MiA3NC40MjE3IDg3LjYzMzJMNzUuNjI2NCA4OC4zMjE2Qzc1LjUyMDQgODguNzY2NiA3NS41MjEzIDg5LjIzMDUgNzUuNjI5IDg5LjY3NUw3NC40MjE3IDkwLjM2NDdDNzQuMzI2IDkwLjQxODcgNzQuMjQyMSA5MC40OTEyIDc0LjE3NDcgOTAuNTc4MUM3NC4xMDcyIDkwLjY2NSA3NC4wNTc1IDkwLjc2NDUgNzQuMDI4OCA5MC44NzA4Qzc0IDkwLjk3NzEgNzMuOTkyOCA5MS4wODggNzQuMDA3MiA5MS4xOTcyQzc0LjAyMTcgOTEuMzA2MyA3NC4wNTc2IDkxLjQxMTUgNzQuMTEzIDkxLjUwNjZDNzQuMjI2NyA5MS42OTkyIDc0LjQxMTMgOTEuODM5MiA3NC42MjcgOTEuODk2NUM3NC44NDI4IDkxLjk1MzcgNzUuMDcyNCA5MS45MjM2IDc1LjI2NjIgOTEuODEyNkw3Ni40NzIxIDkxLjEyMjlDNzYuODA2MyA5MS40NDA5IDc3LjIxMjggOTEuNjcyNiA3Ny42NTYyIDkxLjc5NzlWOTMuMTc5OEM3Ny42NjMxIDkzLjM5OTcgNzcuNzU1IDkzLjYwODIgNzcuOTEyNiA5My43NjEzQzc4LjA3MDEgOTMuOTE0NCA3OC4yODA3IDk0IDc4LjUgOTRDNzguNzE5NCA5NCA3OC45MzAyIDkzLjkxNDQgNzkuMDg3NyA5My43NjEzQzc5LjI0NTIgOTMuNjA4MiA3OS4zMzcgOTMuMzk5NyA3OS4zNDM5IDkzLjE3OThWOTEuNzk3NUM3OS43ODUzIDkxLjY2ODMgODAuMTkwNyA5MS40Mzc4IDgwLjUyNzggOTEuMTI0Mkw4MS43MzQxIDkxLjgxMzhDODEuOTI3OCA5MS45MjQ4IDgyLjE1NzMgOTEuOTU1IDgyLjM3MyA5MS44OTc3QzgyLjU4ODggOTEuODQwNSA4Mi43NzMzIDkxLjcwMDUgODIuODg3IDkxLjUwNzlDODIuOTQyNCA5MS40MTI4IDgyLjk3ODQgOTEuMzA3NiA4Mi45OTI4IDkxLjE5ODRDODMuMDA3MyA5MS4wODkyIDgyLjk5OTggOTAuOTc4MyA4Mi45NzExIDkwLjg3MkM4Mi45NDIzIDkwLjc2NTcgODIuODkyOSA5MC42NjYyIDgyLjgyNTQgOTAuNTc5M0M4Mi43NTc5IDkwLjQ5MjUgODIuNjczOCA5MC40MTk5IDgyLjU3ODEgOTAuMzY2Wk03Ny44NjY0IDkwLjA4NjFDNzcuNzIyOSA5MC4wMDUgNzcuNTk2OCA4OS44OTYxIDc3LjQ5NTYgODkuNzY1N0M3Ny4zOTQ0IDg5LjYzNTMgNzcuMzIwMiA4OS40ODYgNzcuMjc3MSA4OS4zMjY2Qzc3LjIzMzkgODkuMTY3MSA3Ny4yMjI4IDg5LjAwMDcgNzcuMjQ0MyA4OC44MzY5Qzc3LjI2NTggODguNjczMSA3Ny4zMTk3IDg4LjUxNTIgNzcuNDAyNiA4OC4zNzI0Qzc3LjU3MzUgODguMDg0IDc3Ljg1MDMgODcuODc0MyA3OC4xNzM2IDg3Ljc4ODNDNzguNDk3IDg3LjcwMjMgNzguODQxMSA4Ny43NDcgNzkuMTMyMSA4Ny45MTI2Qzc5LjI3NTYgODcuOTkzOCA3OS40MDE2IDg4LjEwMjcgNzkuNTAyOCA4OC4yMzMxQzc5LjYwNCA4OC4zNjM1IDc5LjY3ODIgODguNTEyNyA3OS43MjE0IDg4LjY3MjJDNzkuNzY0NSA4OC44MzE2IDc5Ljc3NTcgODguOTk4MSA3OS43NTQxIDg5LjE2MTlDNzkuNzMyNiA4OS4zMjU3IDc5LjY3ODcgODkuNDgzNiA3OS41OTU4IDg5LjYyNjNDNzkuNDI1IDg5LjkxNDkgNzkuMTQ4MiA5MC4xMjQ3IDc4LjgyNDggOTAuMjEwOEM3OC41MDE0IDkwLjI5NjkgNzguMTU3NCA5MC4yNTIzIDc3Ljg2NjQgOTAuMDg2N1Y5MC4wODYxWiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMS4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8L2c+CjxnIGlkPSJSYWluZHJvcHMiPgo8cGF0aCBpZD0iUmFpbmRyb3AgMSIgZD0iTTUyIDg4VjkxIiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlJhaW5kcm9wIDIiIGQ9Ik02NCA4OFY5MSIgc3Ryb2tlPSIjMEE1QUQ0IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC40cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iUmFpbmRyb3AgMyIgZD0iTTc2IDg4VjkxIiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjhzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85MDkwIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85MDkwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+",snow:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InNub3ciIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzg4NjApIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjMgNDguNDc0NkM2MC4xMjI3IDQwLjYxMTEgNzAuMjk3NSAzNy4zOCA3OC44MTUxIDQwLjk0MzRDODcuMzIxNCA0NC41MDIzIDkyLjEzOCA1NC4wMDI2IDg5LjkwMyA2Mi45NjQ4TDg5Ljc0MTggNjMuNjE0M0w5MC40MTA4IDYzLjU4NUM5Ny40MjAzIDYzLjI3OTEgMTAzLjUgNjguOTkxNyAxMDMuNSA3Ni4wMjgzQzEwMy41IDgyLjgzOTUgOTcuNzcxNyA4OC40OTk3IDkwLjk3NzIgODguNUgzNy45NTM3QzMxLjEyNzUgODguNTAxOCAyNS4yMDI5IDgzLjE3MDkgMjQuNTU5MiA3Ni4zNjA0QzIzLjkxNTggNjkuNTUxOCAyOC43MzY5IDYzLjIxMjQgMzUuNDQzIDYxLjk0NTNMMzUuOTI2NCA2MS44NTM1TDM1Ljg0MjQgNjEuMzY5MUMzNS4wMjU2IDU2LjYyMzkgMzcuMTI1OCA1MS43MTY4IDQxLjEwNTEgNDkuMDEyN0M0NS4wOTUxIDQ2LjMwMTQgNTAuNDQ1OSA0Ni4xNTM3IDU0LjU3OTcgNDguNjM5Nkw1NS4wMDI2IDQ4Ljg5NDVMNTUuMjYyMyA0OC40NzQ2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4NThfODg2MCkiIHN0cm9rZT0iI0U2RUZGQyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+CjwvZz4KPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgLTM7MCAwIiBkdXI9IjNzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L2c+CjwvZz4KPGcgaWQ9IlByZWNpcGl0YXRpb24iPgo8ZyBpZD0iU25vd2ZsYWtlcyI+CjxwYXRoIGlkPSJTbm93Zmxha2UgMSIgZD0iTTUyLjU3ODEgOTAuMzY2TDUxLjM3MzUgODkuNjc3NUM1MS40Nzk0IDg5LjIzMjYgNTEuNDc4NiA4OC43Njg3IDUxLjM3MDggODguMzI0MUw1Mi41NzgxIDg3LjYzNDVDNTIuNjczOCA4Ny41ODA1IDUyLjc1NzcgODcuNTA3OSA1Mi44MjUyIDg3LjQyMUM1Mi44OTI2IDg3LjMzNDIgNTIuOTQyMyA4Ny4yMzQ3IDUyLjk3MTEgODcuMTI4NEM1Mi45OTk4IDg3LjAyMjEgNTMuMDA3MSA4Ni45MTEyIDUyLjk5MjYgODYuODAyQzUyLjk3ODIgODYuNjkyOCA1Mi45NDIyIDg2LjU4NzYgNTIuODg2OCA4Ni40OTI2QzUyLjc3MzIgODYuMjk5OCA1Mi41ODg2IDg2LjE1OTcgNTIuMzcyOCA4Ni4xMDI1QzUyLjE1NyA4Ni4wNDUyIDUxLjkyNzYgODYuMDc1NCA1MS43MzM5IDg2LjE4NjZMNTAuNTI3OCA4Ni44NzYzQzUwLjE5MzEgODYuNTU4NiA0OS43ODY4IDg2LjMyNjQgNDkuMzQzNyA4Ni4xOTk1Vjg0LjgyMDJDNDkuMzM2OCA4NC42MDAzIDQ5LjI0NSA4NC4zOTE4IDQ5LjA4NzUgODQuMjM4N0M0OC45MyA4NC4wODU2IDQ4LjcxOTIgODQgNDguNDk5OCA4NEM0OC4yODA1IDg0IDQ4LjA2OTkgODQuMDg1NiA0Ny45MTI0IDg0LjIzODdDNDcuNzU0OCA4NC4zOTE4IDQ3LjY2MjggODQuNjAwMyA0Ny42NTYgODQuODIwMlY4Ni4xOTk1QzQ3LjIxNCA4Ni4zMjg5IDQ2LjgwODEgODYuNTU5OCA0Ni40NzA2IDg2Ljg3NEw0NS4yNjYyIDg2LjE4NTNDNDUuMDcyNCA4Ni4wNzQyIDQ0Ljg0MjggODYuMDQ0IDQ0LjYyNyA4Ni4xMDEzQzQ0LjQxMTMgODYuMTU4NSA0NC4yMjY3IDg2LjI5ODYgNDQuMTEzIDg2LjQ5MTNDNDQuMDU3NiA4Ni41ODY0IDQ0LjAyMTcgODYuNjkxNiA0NC4wMDcyIDg2LjgwMDdDNDMuOTkyOCA4Ni45MDk5IDQ0IDg3LjAyMDkgNDQuMDI4OCA4Ny4xMjcxQzQ0LjA1NzUgODcuMjMzNCA0NC4xMDcyIDg3LjMzMjkgNDQuMTc0NyA4Ny40MTk4QzQ0LjI0MjEgODcuNTA2NyA0NC4zMjYgODcuNTc5MiA0NC40MjE3IDg3LjYzMzJMNDUuNjI2NCA4OC4zMjE2QzQ1LjUyMDQgODguNzY2NiA0NS41MjEzIDg5LjIzMDUgNDUuNjI5IDg5LjY3NUw0NC40MjE3IDkwLjM2NDdDNDQuMzI2IDkwLjQxODcgNDQuMjQyMSA5MC40OTEyIDQ0LjE3NDcgOTAuNTc4MUM0NC4xMDcyIDkwLjY2NSA0NC4wNTc1IDkwLjc2NDUgNDQuMDI4OCA5MC44NzA4QzQ0IDkwLjk3NzEgNDMuOTkyOCA5MS4wODggNDQuMDA3MiA5MS4xOTcyQzQ0LjAyMTcgOTEuMzA2MyA0NC4wNTc2IDkxLjQxMTUgNDQuMTEzIDkxLjUwNjZDNDQuMjI2NyA5MS42OTkyIDQ0LjQxMTMgOTEuODM5MiA0NC42MjcgOTEuODk2NUM0NC44NDI4IDkxLjk1MzcgNDUuMDcyNCA5MS45MjM2IDQ1LjI2NjIgOTEuODEyNkw0Ni40NzIxIDkxLjEyMjlDNDYuODA2MyA5MS40NDA5IDQ3LjIxMjggOTEuNjcyNiA0Ny42NTYyIDkxLjc5NzlWOTMuMTc5OEM0Ny42NjMxIDkzLjM5OTcgNDcuNzU1IDkzLjYwODIgNDcuOTEyNiA5My43NjEzQzQ4LjA3MDEgOTMuOTE0NCA0OC4yODA3IDk0IDQ4LjUgOTRDNDguNzE5NCA5NCA0OC45MzAyIDkzLjkxNDQgNDkuMDg3NyA5My43NjEzQzQ5LjI0NTIgOTMuNjA4MiA0OS4zMzcgOTMuMzk5NyA0OS4zNDM5IDkzLjE3OThWOTEuNzk3NUM0OS43ODUzIDkxLjY2ODMgNTAuMTkwNyA5MS40Mzc4IDUwLjUyNzggOTEuMTI0Mkw1MS43MzQxIDkxLjgxMzhDNTEuOTI3OCA5MS45MjQ4IDUyLjE1NzMgOTEuOTU1IDUyLjM3MyA5MS44OTc3QzUyLjU4ODggOTEuODQwNSA1Mi43NzMzIDkxLjcwMDUgNTIuODg3IDkxLjUwNzlDNTIuOTQyNCA5MS40MTI4IDUyLjk3ODQgOTEuMzA3NiA1Mi45OTI4IDkxLjE5ODRDNTMuMDA3MyA5MS4wODkyIDUyLjk5OTggOTAuOTc4MyA1Mi45NzExIDkwLjg3MkM1Mi45NDIzIDkwLjc2NTcgNTIuODkyOSA5MC42NjYyIDUyLjgyNTQgOTAuNTc5M0M1Mi43NTc5IDkwLjQ5MjUgNTIuNjczOCA5MC40MTk5IDUyLjU3ODEgOTAuMzY2Wk00Ny44NjY0IDkwLjA4NjFDNDcuNzIyOSA5MC4wMDUgNDcuNTk2OCA4OS44OTYxIDQ3LjQ5NTYgODkuNzY1N0M0Ny4zOTQ0IDg5LjYzNTMgNDcuMzIwMiA4OS40ODYgNDcuMjc3MSA4OS4zMjY2QzQ3LjIzMzkgODkuMTY3MSA0Ny4yMjI4IDg5LjAwMDcgNDcuMjQ0MyA4OC44MzY5QzQ3LjI2NTggODguNjczMSA0Ny4zMTk3IDg4LjUxNTIgNDcuNDAyNiA4OC4zNzI0QzQ3LjU3MzUgODguMDg0IDQ3Ljg1MDMgODcuODc0MyA0OC4xNzM2IDg3Ljc4ODNDNDguNDk3IDg3LjcwMjMgNDguODQxMSA4Ny43NDcgNDkuMTMyMSA4Ny45MTI2QzQ5LjI3NTYgODcuOTkzOCA0OS40MDE2IDg4LjEwMjcgNDkuNTAyOCA4OC4yMzMxQzQ5LjYwNCA4OC4zNjM1IDQ5LjY3ODIgODguNTEyNyA0OS43MjE0IDg4LjY3MjJDNDkuNzY0NSA4OC44MzE2IDQ5Ljc3NTcgODguOTk4MSA0OS43NTQxIDg5LjE2MTlDNDkuNzMyNiA4OS4zMjU3IDQ5LjY3ODcgODkuNDgzNiA0OS41OTU4IDg5LjYyNjNDNDkuNDI1IDg5LjkxNDkgNDkuMTQ4MiA5MC4xMjQ3IDQ4LjgyNDggOTAuMjEwOEM0OC41MDE0IDkwLjI5NjkgNDguMTU3NCA5MC4yNTIzIDQ3Ljg2NjQgOTAuMDg2N1Y5MC4wODYxWiIgZmlsbD0iIzg2QzNEQiIgb3BhY2l0eT0iMCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJ0cmFuc2xhdGUiIHZhbHVlcz0iMCAwOzAgMjAiIGR1cj0iMXMiIGJlZ2luPSIwLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgMSAxIi8+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIwOzE7MTswIiBkdXI9IjFzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iU25vd2ZsYWtlIDIiIGQ9Ik02Ny41NzgxIDkwLjM2Nkw2Ni4zNzM1IDg5LjY3NzVDNjYuNDc5NCA4OS4yMzI2IDY2LjQ3ODYgODguNzY4NyA2Ni4zNzA4IDg4LjMyNDFMNjcuNTc4MSA4Ny42MzQ1QzY3LjY3MzggODcuNTgwNSA2Ny43NTc3IDg3LjUwNzkgNjcuODI1MiA4Ny40MjFDNjcuODkyNiA4Ny4zMzQyIDY3Ljk0MjMgODcuMjM0NyA2Ny45NzExIDg3LjEyODRDNjcuOTk5OCA4Ny4wMjIxIDY4LjAwNzEgODYuOTExMiA2Ny45OTI2IDg2LjgwMkM2Ny45NzgyIDg2LjY5MjggNjcuOTQyMiA4Ni41ODc2IDY3Ljg4NjggODYuNDkyNkM2Ny43NzMyIDg2LjI5OTggNjcuNTg4NiA4Ni4xNTk3IDY3LjM3MjggODYuMTAyNUM2Ny4xNTcgODYuMDQ1MiA2Ni45Mjc2IDg2LjA3NTQgNjYuNzMzOSA4Ni4xODY2TDY1LjUyNzggODYuODc2M0M2NS4xOTMxIDg2LjU1ODYgNjQuNzg2OCA4Ni4zMjY0IDY0LjM0MzcgODYuMTk5NVY4NC44MjAyQzY0LjMzNjggODQuNjAwMyA2NC4yNDUgODQuMzkxOCA2NC4wODc1IDg0LjIzODdDNjMuOTMgODQuMDg1NiA2My43MTkyIDg0IDYzLjQ5OTggODRDNjMuMjgwNSA4NCA2My4wNjk5IDg0LjA4NTYgNjIuOTEyNCA4NC4yMzg3QzYyLjc1NDggODQuMzkxOCA2Mi42NjI4IDg0LjYwMDMgNjIuNjU2IDg0LjgyMDJWODYuMTk5NUM2Mi4yMTQgODYuMzI4OSA2MS44MDgxIDg2LjU1OTggNjEuNDcwNiA4Ni44NzRMNjAuMjY2MiA4Ni4xODUzQzYwLjA3MjQgODYuMDc0MiA1OS44NDI4IDg2LjA0NCA1OS42MjcgODYuMTAxM0M1OS40MTEzIDg2LjE1ODUgNTkuMjI2NyA4Ni4yOTg2IDU5LjExMyA4Ni40OTEzQzU5LjA1NzYgODYuNTg2NCA1OS4wMjE3IDg2LjY5MTYgNTkuMDA3MiA4Ni44MDA3QzU4Ljk5MjggODYuOTA5OSA1OSA4Ny4wMjA5IDU5LjAyODggODcuMTI3MUM1OS4wNTc1IDg3LjIzMzQgNTkuMTA3MiA4Ny4zMzI5IDU5LjE3NDcgODcuNDE5OEM1OS4yNDIxIDg3LjUwNjcgNTkuMzI2IDg3LjU3OTIgNTkuNDIxNyA4Ny42MzMyTDYwLjYyNjQgODguMzIxNkM2MC41MjA0IDg4Ljc2NjYgNjAuNTIxMyA4OS4yMzA1IDYwLjYyOSA4OS42NzVMNTkuNDIxNyA5MC4zNjQ3QzU5LjMyNiA5MC40MTg3IDU5LjI0MjEgOTAuNDkxMiA1OS4xNzQ3IDkwLjU3ODFDNTkuMTA3MiA5MC42NjUgNTkuMDU3NSA5MC43NjQ1IDU5LjAyODggOTAuODcwOEM1OSA5MC45NzcxIDU4Ljk5MjggOTEuMDg4IDU5LjAwNzIgOTEuMTk3MkM1OS4wMjE3IDkxLjMwNjMgNTkuMDU3NiA5MS40MTE1IDU5LjExMyA5MS41MDY2QzU5LjIyNjcgOTEuNjk5MiA1OS40MTEzIDkxLjgzOTIgNTkuNjI3IDkxLjg5NjVDNTkuODQyOCA5MS45NTM3IDYwLjA3MjQgOTEuOTIzNiA2MC4yNjYyIDkxLjgxMjZMNjEuNDcyMSA5MS4xMjI5QzYxLjgwNjMgOTEuNDQwOSA2Mi4yMTI4IDkxLjY3MjYgNjIuNjU2MiA5MS43OTc5VjkzLjE3OThDNjIuNjYzMSA5My4zOTk3IDYyLjc1NSA5My42MDgyIDYyLjkxMjYgOTMuNzYxM0M2My4wNzAxIDkzLjkxNDQgNjMuMjgwNyA5NCA2My41IDk0QzYzLjcxOTQgOTQgNjMuOTMwMiA5My45MTQ0IDY0LjA4NzcgOTMuNzYxM0M2NC4yNDUyIDkzLjYwODIgNjQuMzM3IDkzLjM5OTcgNjQuMzQzOSA5My4xNzk4VjkxLjc5NzVDNjQuNzg1MyA5MS42NjgzIDY1LjE5MDcgOTEuNDM3OCA2NS41Mjc4IDkxLjEyNDJMNjYuNzM0MSA5MS44MTM4QzY2LjkyNzggOTEuOTI0OCA2Ny4xNTczIDkxLjk1NSA2Ny4zNzMgOTEuODk3N0M2Ny41ODg4IDkxLjg0MDUgNjcuNzczMyA5MS43MDA1IDY3Ljg4NyA5MS41MDc5QzY3Ljk0MjQgOTEuNDEyOCA2Ny45Nzg0IDkxLjMwNzYgNjcuOTkyOCA5MS4xOTg0QzY4LjAwNzMgOTEuMDg5MiA2Ny45OTk4IDkwLjk3ODMgNjcuOTcxMSA5MC44NzJDNjcuOTQyMyA5MC43NjU3IDY3Ljg5MjkgOTAuNjY2MiA2Ny44MjU0IDkwLjU3OTNDNjcuNzU3OSA5MC40OTI1IDY3LjY3MzggOTAuNDE5OSA2Ny41NzgxIDkwLjM2NlpNNjIuODY2NCA5MC4wODYxQzYyLjcyMjkgOTAuMDA1IDYyLjU5NjggODkuODk2MSA2Mi40OTU2IDg5Ljc2NTdDNjIuMzk0NCA4OS42MzUzIDYyLjMyMDIgODkuNDg2IDYyLjI3NzEgODkuMzI2NkM2Mi4yMzM5IDg5LjE2NzEgNjIuMjIyOCA4OS4wMDA3IDYyLjI0NDMgODguODM2OUM2Mi4yNjU4IDg4LjY3MzEgNjIuMzE5NyA4OC41MTUyIDYyLjQwMjYgODguMzcyNEM2Mi41NzM1IDg4LjA4NCA2Mi44NTAzIDg3Ljg3NDMgNjMuMTczNiA4Ny43ODgzQzYzLjQ5NyA4Ny43MDIzIDYzLjg0MTEgODcuNzQ3IDY0LjEzMjEgODcuOTEyNkM2NC4yNzU2IDg3Ljk5MzggNjQuNDAxNiA4OC4xMDI3IDY0LjUwMjggODguMjMzMUM2NC42MDQgODguMzYzNSA2NC42NzgyIDg4LjUxMjcgNjQuNzIxNCA4OC42NzIyQzY0Ljc2NDUgODguODMxNiA2NC43NzU3IDg4Ljk5ODEgNjQuNzU0MSA4OS4xNjE5QzY0LjczMjYgODkuMzI1NyA2NC42Nzg3IDg5LjQ4MzYgNjQuNTk1OCA4OS42MjYzQzY0LjQyNSA4OS45MTQ5IDY0LjE0ODIgOTAuMTI0NyA2My44MjQ4IDkwLjIxMDhDNjMuNTAxNCA5MC4yOTY5IDYzLjE1NzQgOTAuMjUyMyA2Mi44NjY0IDkwLjA4NjdWOTAuMDg2MVoiIGZpbGw9IiM4NkMzREIiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC43cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuN3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPHBhdGggaWQ9IlNub3dmbGFrZSAzIiBkPSJNODIuNTc4MSA5MC4zNjZMODEuMzczNSA4OS42Nzc1QzgxLjQ3OTQgODkuMjMyNiA4MS40Nzg2IDg4Ljc2ODcgODEuMzcwOCA4OC4zMjQxTDgyLjU3ODEgODcuNjM0NUM4Mi42NzM4IDg3LjU4MDUgODIuNzU3NyA4Ny41MDc5IDgyLjgyNTIgODcuNDIxQzgyLjg5MjYgODcuMzM0MiA4Mi45NDIzIDg3LjIzNDcgODIuOTcxMSA4Ny4xMjg0QzgyLjk5OTggODcuMDIyMSA4My4wMDcxIDg2LjkxMTIgODIuOTkyNiA4Ni44MDJDODIuOTc4MiA4Ni42OTI4IDgyLjk0MjIgODYuNTg3NiA4Mi44ODY4IDg2LjQ5MjZDODIuNzczMiA4Ni4yOTk4IDgyLjU4ODYgODYuMTU5NyA4Mi4zNzI4IDg2LjEwMjVDODIuMTU3IDg2LjA0NTIgODEuOTI3NiA4Ni4wNzU0IDgxLjczMzkgODYuMTg2Nkw4MC41Mjc4IDg2Ljg3NjNDODAuMTkzMSA4Ni41NTg2IDc5Ljc4NjggODYuMzI2NCA3OS4zNDM3IDg2LjE5OTVWODQuODIwMkM3OS4zMzY4IDg0LjYwMDMgNzkuMjQ1IDg0LjM5MTggNzkuMDg3NSA4NC4yMzg3Qzc4LjkzIDg0LjA4NTYgNzguNzE5MiA4NCA3OC40OTk4IDg0Qzc4LjI4MDUgODQgNzguMDY5OSA4NC4wODU2IDc3LjkxMjQgODQuMjM4N0M3Ny43NTQ4IDg0LjM5MTggNzcuNjYyOCA4NC42MDAzIDc3LjY1NiA4NC44MjAyVjg2LjE5OTVDNzcuMjE0IDg2LjMyODkgNzYuODA4MSA4Ni41NTk4IDc2LjQ3MDYgODYuODc0TDc1LjI2NjIgODYuMTg1M0M3NS4wNzI0IDg2LjA3NDIgNzQuODQyOCA4Ni4wNDQgNzQuNjI3IDg2LjEwMTNDNzQuNDExMyA4Ni4xNTg1IDc0LjIyNjcgODYuMjk4NiA3NC4xMTMgODYuNDkxM0M3NC4wNTc2IDg2LjU4NjQgNzQuMDIxNyA4Ni42OTE2IDc0LjAwNzIgODYuODAwN0M3My45OTI4IDg2LjkwOTkgNzQgODcuMDIwOSA3NC4wMjg4IDg3LjEyNzFDNzQuMDU3NSA4Ny4yMzM0IDc0LjEwNzIgODcuMzMyOSA3NC4xNzQ3IDg3LjQxOThDNzQuMjQyMSA4Ny41MDY3IDc0LjMyNiA4Ny41NzkyIDc0LjQyMTcgODcuNjMzMkw3NS42MjY0IDg4LjMyMTZDNzUuNTIwNCA4OC43NjY2IDc1LjUyMTMgODkuMjMwNSA3NS42MjkgODkuNjc1TDc0LjQyMTcgOTAuMzY0N0M3NC4zMjYgOTAuNDE4NyA3NC4yNDIxIDkwLjQ5MTIgNzQuMTc0NyA5MC41NzgxQzc0LjEwNzIgOTAuNjY1IDc0LjA1NzUgOTAuNzY0NSA3NC4wMjg4IDkwLjg3MDhDNzQgOTAuOTc3MSA3My45OTI4IDkxLjA4OCA3NC4wMDcyIDkxLjE5NzJDNzQuMDIxNyA5MS4zMDYzIDc0LjA1NzYgOTEuNDExNSA3NC4xMTMgOTEuNTA2NkM3NC4yMjY3IDkxLjY5OTIgNzQuNDExMyA5MS44MzkyIDc0LjYyNyA5MS44OTY1Qzc0Ljg0MjggOTEuOTUzNyA3NS4wNzI0IDkxLjkyMzYgNzUuMjY2MiA5MS44MTI2TDc2LjQ3MjEgOTEuMTIyOUM3Ni44MDYzIDkxLjQ0MDkgNzcuMjEyOCA5MS42NzI2IDc3LjY1NjIgOTEuNzk3OVY5My4xNzk4Qzc3LjY2MzEgOTMuMzk5NyA3Ny43NTUgOTMuNjA4MiA3Ny45MTI2IDkzLjc2MTNDNzguMDcwMSA5My45MTQ0IDc4LjI4MDcgOTQgNzguNSA5NEM3OC43MTk0IDk0IDc4LjkzMDIgOTMuOTE0NCA3OS4wODc3IDkzLjc2MTNDNzkuMjQ1MiA5My42MDgyIDc5LjMzNyA5My4zOTk3IDc5LjM0MzkgOTMuMTc5OFY5MS43OTc1Qzc5Ljc4NTMgOTEuNjY4MyA4MC4xOTA3IDkxLjQzNzggODAuNTI3OCA5MS4xMjQyTDgxLjczNDEgOTEuODEzOEM4MS45Mjc4IDkxLjkyNDggODIuMTU3MyA5MS45NTUgODIuMzczIDkxLjg5NzdDODIuNTg4OCA5MS44NDA1IDgyLjc3MzMgOTEuNzAwNSA4Mi44ODcgOTEuNTA3OUM4Mi45NDI0IDkxLjQxMjggODIuOTc4NCA5MS4zMDc2IDgyLjk5MjggOTEuMTk4NEM4My4wMDczIDkxLjA4OTIgODIuOTk5OCA5MC45NzgzIDgyLjk3MTEgOTAuODcyQzgyLjk0MjMgOTAuNzY1NyA4Mi44OTI5IDkwLjY2NjIgODIuODI1NCA5MC41NzkzQzgyLjc1NzkgOTAuNDkyNSA4Mi42NzM4IDkwLjQxOTkgODIuNTc4MSA5MC4zNjZaTTc3Ljg2NjQgOTAuMDg2MUM3Ny43MjI5IDkwLjAwNSA3Ny41OTY4IDg5Ljg5NjEgNzcuNDk1NiA4OS43NjU3Qzc3LjM5NDQgODkuNjM1MyA3Ny4zMjAyIDg5LjQ4NiA3Ny4yNzcxIDg5LjMyNjZDNzcuMjMzOSA4OS4xNjcxIDc3LjIyMjggODkuMDAwNyA3Ny4yNDQzIDg4LjgzNjlDNzcuMjY1OCA4OC42NzMxIDc3LjMxOTcgODguNTE1MiA3Ny40MDI2IDg4LjM3MjRDNzcuNTczNSA4OC4wODQgNzcuODUwMyA4Ny44NzQzIDc4LjE3MzYgODcuNzg4M0M3OC40OTcgODcuNzAyMyA3OC44NDExIDg3Ljc0NyA3OS4xMzIxIDg3LjkxMjZDNzkuMjc1NiA4Ny45OTM4IDc5LjQwMTYgODguMTAyNyA3OS41MDI4IDg4LjIzMzFDNzkuNjA0IDg4LjM2MzUgNzkuNjc4MiA4OC41MTI3IDc5LjcyMTQgODguNjcyMkM3OS43NjQ1IDg4LjgzMTYgNzkuNzc1NyA4OC45OTgxIDc5Ljc1NDEgODkuMTYxOUM3OS43MzI2IDg5LjMyNTcgNzkuNjc4NyA4OS40ODM2IDc5LjU5NTggODkuNjI2M0M3OS40MjUgODkuOTE0OSA3OS4xNDgyIDkwLjEyNDcgNzguODI0OCA5MC4yMTA4Qzc4LjUwMTQgOTAuMjk2OSA3OC4xNTc0IDkwLjI1MjMgNzcuODY2NCA5MC4wODY3VjkwLjA4NjFaIiBmaWxsPSIjODZDM0RCIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjEuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIxLjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF84ODYwIiB4MT0iNjQuMDAwOCIgeTE9IjM5IiB4Mj0iNjQuMDAwOCIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF84ODYwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","sun-hot":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InN1bi1ob3QiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODc4XzQ2NzMpIj4KPGcgaWQ9Ik1hc2sgZ3JvdXAiPgo8bWFzayBpZD0ibWFzazBfMTg3OF80NjczIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+CjxwYXRoIGlkPSJNYXNrIiBkPSJNMCAwSDEyOEwwIDEyOFYwWiIgZmlsbD0iYmxhY2siLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4NzhfNDY3MykiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjY0IiBjeT0iNjQiIHI9IjE5LjUiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODc4XzQ2NzMpIiBzdHJva2U9IiNGOEFGMTgiLz4KPGcgaWQ9IlJheXMiPgo8cGF0aCBkPSJNNjEgMTlDNjEgMTcuMzQzMSA2Mi4zNDMxIDE2IDY0IDE2QzY1LjY1NjggMTYgNjcgMTcuMzQzMSA2NyAxOVYzM0M2NyAzNC42NTY5IDY1LjY1NjggMzYgNjQgMzZDNjIuMzQzMSAzNiA2MSAzNC42NTY5IDYxIDMzVjE5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNOTMuNjk4NSAzMC4wNTg5Qzk0Ljg3IDI4Ljg4NzMgOTYuNzY5NiAyOC44ODczIDk3Ljk0MTEgMzAuMDU4OUM5OS4xMTI3IDMxLjIzMDQgOTkuMTEyNyAzMy4xMjk5IDk3Ljk0MTEgMzQuMzAxNUw4OC4wNDE2IDQ0LjIwMUM4Ni44NzAxIDQ1LjM3MjYgODQuOTcwNiA0NS4zNzI2IDgzLjc5OSA0NC4yMDFDODIuNjI3NCA0My4wMjk0IDgyLjYyNzQgNDEuMTI5OSA4My43OTkgMzkuOTU4NEw5My42OTg1IDMwLjA1ODlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0xMDkgNjFDMTEwLjY1NyA2MSAxMTIgNjIuMzQzMiAxMTIgNjRDMTEyIDY1LjY1NjkgMTEwLjY1NyA2NyAxMDkgNjdIOTVDOTMuMzQzMSA2NyA5MiA2NS42NTY5IDkyIDY0QzkyIDYyLjM0MzIgOTMuMzQzMSA2MSA5NSA2MUgxMDlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik05Ny45NDExIDkzLjY5ODVDOTkuMTEyNyA5NC44NzAxIDk5LjExMjcgOTYuNzY5NiA5Ny45NDExIDk3Ljk0MTFDOTYuNzY5NiA5OS4xMTI3IDk0Ljg3MDEgOTkuMTEyNyA5My42OTg1IDk3Ljk0MTFMODMuNzk5IDg4LjA0MTZDODIuNjI3NCA4Ni44NzAxIDgyLjYyNzQgODQuOTcwNiA4My43OTkgODMuNzk5Qzg0Ljk3MDYgODIuNjI3NCA4Ni44NzAxIDgyLjYyNzQgODguMDQxNiA4My43OTlMOTcuOTQxMSA5My42OTg1WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNNjEgOTVDNjEgOTMuMzQzMSA2Mi4zNDMxIDkyIDY0IDkyQzY1LjY1NjggOTIgNjcgOTMuMzQzMSA2NyA5NVYxMDlDNjcgMTEwLjY1NyA2NS42NTY4IDExMiA2NCAxMTJDNjIuMzQzMSAxMTIgNjEgMTEwLjY1NyA2MSAxMDlWOTVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zOS45NTg0IDgzLjc5OUM0MS4xMjk5IDgyLjYyNzQgNDMuMDI5NCA4Mi42Mjc0IDQ0LjIwMSA4My43OTlDNDUuMzcyNiA4NC45NzA2IDQ1LjM3MjYgODYuODcwMSA0NC4yMDEgODguMDQxNkwzNC4zMDE1IDk3Ljk0MTFDMzMuMTI5OSA5OS4xMTI3IDMxLjIzMDQgOTkuMTEyNyAzMC4wNTg5IDk3Ljk0MTFDMjguODg3MyA5Ni43Njk2IDI4Ljg4NzMgOTQuODcgMzAuMDU4OSA5My42OTg1TDM5Ljk1ODQgODMuNzk5WiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNMzMgNjFDMzQuNjU2OSA2MSAzNiA2Mi4zNDMxIDM2IDY0QzM2IDY1LjY1NjggMzQuNjU2OSA2NyAzMyA2N0gxOUMxNy4zNDMxIDY3IDE2IDY1LjY1NjggMTYgNjRDMTYgNjIuMzQzMSAxNy4zNDMxIDYxIDE5IDYxSDMzWiIgZmlsbD0iI0Y4QUYxOCIvPgo8cGF0aCBkPSJNNDQuMjAxIDM5Ljk1ODRDNDUuMzcyNiA0MS4xMjk5IDQ1LjM3MjYgNDMuMDI5NCA0NC4yMDEgNDQuMjAxQzQzLjAyOTQgNDUuMzcyNiA0MS4xMjk5IDQ1LjM3MjYgMzkuOTU4NCA0NC4yMDFMMzAuMDU4OSAzNC4zMDE1QzI4Ljg4NzMgMzMuMTI5OSAyOC44ODczIDMxLjIzMDUgMzAuMDU4OSAzMC4wNTg5QzMxLjIzMDUgMjguODg3MyAzMy4xMjk5IDI4Ljg4NzMgMzQuMzAxNSAzMC4wNTg5TDQ0LjIwMSAzOS45NTg0WiIgZmlsbD0iI0Y4QUYxOCIvPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InJvdGF0ZSIgdmFsdWVzPSIwIDY0LjAgNjQuMDszNjAgNjQuMCA2NC4wIiBkdXI9IjZzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9nPgo8L2c+CjwvZz4KPC9nPgo8cGF0aCBpZD0icGF0aCIgZD0iTTQ3LjEwNDggOTYuMzk1MkM0NS42MzE3IDkyLjIxMTUgNDYuOTg3IDkwLjg1NjIgNTEuMTcwNyA5Mi4zMjk0QzU1LjM1NDQgOTMuODAyNSA1Ni43MDk3IDkyLjQ0NzIgNTUuMjM2NSA4OC4yNjM1QzUzLjc2MzQgODQuMDc5OCA1NS4xMTg3IDgyLjcyNDUgNTkuMzAyNCA4NC4xOTc3QzYzLjQ4NjEgODUuNjcwOCA2NC44NDE0IDg0LjMxNTUgNjMuMzY4MyA4MC4xMzE4QzYxLjg5NTEgNzUuOTQ4MSA2My4yNTA0IDc0LjU5MjggNjcuNDM0MSA3Ni4wNjU5QzcxLjYxNzkgNzcuNTM5MSA3Mi45NzMxIDc2LjE4MzggNzEuNSA3Mi4wMDAxQzcwLjAyNjkgNjcuODE2MyA3MS4zODIyIDY2LjQ2MTEgNzUuNTY1OSA2Ny45MzQyQzc5Ljc0OTYgNjkuNDA3MyA4MS4xMDQ5IDY4LjA1MiA3OS42MzE3IDYzLjg2ODNDNzguMTU4NiA1OS42ODQ2IDc5LjUxMzkgNTguMzI5MyA4My42OTc2IDU5LjgwMjVDODcuODgxMyA2MS4yNzU2IDg5LjIzNjYgNTkuOTIwMyA4Ny43NjM1IDU1LjczNjZDODYuMjkwMyA1MS41NTI5IDg3LjY0NTYgNTAuMTk3NiA5MS44MjkzIDUxLjY3MDdDOTYuMDEzIDUzLjE0MzkgOTcuMzY4MyA1MS43ODg2IDk1Ljg5NTIgNDcuNjA0OSIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8cGF0aCBpZD0icGF0aF8yIiBkPSJNNjIuMTA0OCA5Ni4zOTUyQzYwLjYzMTcgOTIuMjExNSA2MS45ODcgOTAuODU2MiA2Ni4xNzA3IDkyLjMyOTRDNzAuMzU0NCA5My44MDI1IDcxLjcwOTcgOTIuNDQ3MiA3MC4yMzY1IDg4LjI2MzVDNjguNzYzNCA4NC4wNzk4IDcwLjExODcgODIuNzI0NSA3NC4zMDI0IDg0LjE5NzdDNzguNDg2MSA4NS42NzA4IDc5Ljg0MTQgODQuMzE1NSA3OC4zNjgzIDgwLjEzMThDNzYuODk1MSA3NS45NDgxIDc4LjI1MDQgNzQuNTkyOCA4Mi40MzQxIDc2LjA2NTlDODYuNjE3OSA3Ny41MzkxIDg3Ljk3MzEgNzYuMTgzOCA4Ni41IDcyLjAwMDFDODUuMDI2OSA2Ny44MTYzIDg2LjM4MjIgNjYuNDYxMSA5MC41NjU5IDY3LjkzNDJDOTQuNzQ5NiA2OS40MDczIDk2LjEwNDkgNjguMDUyIDk0LjYzMTcgNjMuODY4M0M5My4xNTg2IDU5LjY4NDYgOTQuNTEzOSA1OC4zMjkzIDk4LjY5NzYgNTkuODAyNUMxMDIuODgxIDYxLjI3NTYgMTA0LjIzNyA1OS45MjAzIDEwMi43NjMgNTUuNzM2NkMxMDEuMjkgNTEuNTUyOSAxMDIuNjQ2IDUwLjE5NzYgMTA2LjgyOSA1MS42NzA3QzExMS4wMTMgNTMuMTQzOSAxMTIuMzY4IDUxLjc4ODYgMTEwLjg5NSA0Ny42MDQ5IiBzdHJva2U9IiNFMkU4RjAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODc4XzQ2NzMiIHgxPSI2NCIgeTE9IjQ0IiB4Mj0iNjQiIHkyPSI4NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRkJCRjI0Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0Y4QUYxOCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NzhfNDY3MyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==","thermometer-colder":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRoZXJtb21ldGVyLWNvbGRlciIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NDRfMTU2NzMpIj4KPGcgaWQ9IlRoZXJtb21ldGVyIE1lcmN1cnkiPgo8Y2lyY2xlIGlkPSJSZXNlcnZvaXIiIGN4PSI2NCIgY3k9IjgzIiByPSI5IiBmaWxsPSIjMjU2M0VCIi8+CjxyZWN0IGlkPSJWYWx1ZSIgeD0iNjEiIHk9IjUwIiB3aWR0aD0iNiIgaGVpZ2h0PSIyOSIgcng9IjMiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0yOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9yZWN0Pgo8L2c+CjxnIGlkPSJUaGVybW9tZXRlciBHbGFzcyI+CjxwYXRoIGlkPSJHbGFzcyIgZD0iTTUwLjUgODMuMTkxNEM1MC40OTUyIDgxLjA1NjYgNTEuMDE3NSA3OC45NTEgNTIuMDIzNCA3Ny4wNTE4QzUzLjAyOTQgNzUuMTUyNSA1NC40OTAxIDczLjUxNCA1Ni4yODQxIDcyLjI3NTRDNTYuNDE5MiA3Mi4xODIxIDU2LjQ5OTkgNzIuMDI4NCA1Ni41IDcxLjg2NDNWMzguNzc5M0M1Ni41IDM2Ljg1MzQgNTcuMjg2NCAzNS4wMDI5IDU4LjY5MTQgMzMuNjM2N0M2MC4wOTY5IDMyLjI3IDYyLjAwNjQgMzEuNSA2NCAzMS41QzY1Ljk5MzUgMzEuNSA2Ny45MDMgMzIuMjcgNjkuMzA4NiAzMy42MzY3QzcwLjcxMzYgMzUuMDAyOSA3MS41IDM2Ljg1MzQgNzEuNSAzOC43NzkzVjQyLjA0NjlINjVDNjQuNzIzOSA0Mi4wNDY5IDY0LjUgNDIuMjcwOCA2NC41IDQyLjU0NjlDNjQuNSA0Mi44MjMgNjQuNzIzOCA0My4wNDY5IDY1IDQzLjA0NjlINzEuNVY0OS44MjYySDY1QzY0LjcyMzggNDkuODI2MiA2NC41IDUwLjA1IDY0LjUgNTAuMzI2MkM2NC41MDAxIDUwLjYwMjIgNjQuNzIzOSA1MC44MjYyIDY1IDUwLjgyNjJINzEuNVY1Ny42MDQ1SDY1QzY0LjcyNCA1Ny42MDQ1IDY0LjUwMDIgNTcuODI4NiA2NC41IDU4LjEwNDVDNjQuNSA1OC4zODA2IDY0LjcyMzggNTguNjA0NSA2NSA1OC42MDQ1SDcxLjVWNzEuODM5OEM3MS41IDcyLjAwNCA3MS41ODA3IDcyLjE1NzYgNzEuNzE1OCA3Mi4yNTFDNzMuNTEzMiA3My40OTE5IDc0Ljk3NjMgNzUuMTM0NCA3NS45ODI0IDc3LjAzODFDNzYuOTg4NCA3OC45NDE2IDc3LjUwODYgODEuMDUxOCA3Ny41IDgzLjE5MDRWODMuMTkyNEM3Ny40OTk5IDkwLjU0MzEgNzEuNDgwMSA5Ni41IDY0IDk2LjVDNTYuNTE5OSA5Ni41IDUwLjUgOTAuNTQzMSA1MC41IDgzLjE5MjRWODMuMTkxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODQ0XzE1NjczKSIgc3Ryb2tlPSIjQkZEQkZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGcgaWQ9IkFycm93cyI+CjxwYXRoIGlkPSJBcnJvdyAzIiBkPSJNOTIuNjY3OCA0NS4wMDI5QzkyLjMxNzUgNDUuMDAxMSA5MS45OCA0NS4xNDAzIDkxLjcyNTMgNDUuMzkxNkw4Ni4wMDEyIDUxLjA4NDFMODAuMjc2MSA0NS4zODg5QzgwLjAyMDQgNDUuMTM5IDc5LjY4MzQgNDUgNzkuMzMzMyA0NUM3OC45ODMyIDQ1IDc4LjY0NjIgNDUuMTM5IDc4LjM5MDUgNDUuMzg4OUM3OC4yNjczIDQ1LjUwODggNzguMTY5IDQ1LjY1NCA3OC4xMDE5IDQ1LjgxNTNDNzguMDM0NyA0NS45NzY3IDc4IDQ2LjE1MDcgNzggNDYuMzI2N0M3OCA0Ni41MDI2IDc4LjAzNDcgNDYuNjc2NyA3OC4xMDE5IDQ2LjgzODFDNzguMTY5IDQ2Ljk5OTQgNzguMjY3MyA0Ny4xNDQ2IDc4LjM5MDUgNDcuMjY0Nkw4NS4wNTcxIDUzLjg5N0M4NS4zMTI4IDU0LjE0NjkgODUuNjQ5OSA1NC4yODU5IDg2IDU0LjI4NTlDODYuMzUwMSA1NC4yODU5IDg2LjY4NzEgNTQuMTQ2OSA4Ni45NDI4IDUzLjg5N0w5My42MDk0IDQ3LjI2NDZDOTMuNzMyNyA0Ny4xNDQ2IDkzLjgzMDkgNDYuOTk5NCA5My44OTgxIDQ2LjgzODFDOTMuOTY1MyA0Ni42NzY3IDkzLjk5OTkgNDYuNTAyNiA5My45OTk5IDQ2LjMyNjdDOTMuOTk5OSA0Ni4xNTA3IDkzLjk2NTMgNDUuOTc2NyA5My44OTgxIDQ1LjgxNTNDOTMuODMwOSA0NS42NTQgOTMuNzMyNyA0NS41MDg4IDkzLjYwOTQgNDUuMzg4OUM5My4zNTQ2IDQ1LjEzODggOTMuMDE3NSA0NS4wMDA2IDkyLjY2NzggNDUuMDAyOVoiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMiIgZD0iTTkyLjY2NzggNTMuMzZDOTIuMzE3NSA1My4zNTgzIDkxLjk4IDUzLjQ5NzUgOTEuNzI1MyA1My43NDg4TDg2LjAwMTIgNTkuNDQxM0w4MC4yNzYxIDUzLjc0NkM4MC4wMjA0IDUzLjQ5NjIgNzkuNjgzNCA1My4zNTcyIDc5LjMzMzMgNTMuMzU3MkM3OC45ODMyIDUzLjM1NzIgNzguNjQ2MiA1My40OTYyIDc4LjM5MDUgNTMuNzQ2Qzc4LjI2NzMgNTMuODY2IDc4LjE2OSA1NC4wMTEyIDc4LjEwMTkgNTQuMTcyNUM3OC4wMzQ3IDU0LjMzMzkgNzggNTQuNTA3OSA3OCA1NC42ODM5Qzc4IDU0Ljg1OTggNzguMDM0NyA1NS4wMzM5IDc4LjEwMTkgNTUuMTk1MkM3OC4xNjkgNTUuMzU2NiA3OC4yNjczIDU1LjUwMTggNzguMzkwNSA1NS42MjE3TDg1LjA1NzEgNjIuMjU0MkM4NS4zMTI4IDYyLjUwNDEgODUuNjQ5OSA2Mi42NDMxIDg2IDYyLjY0MzFDODYuMzUwMSA2Mi42NDMxIDg2LjY4NzEgNjIuNTA0MSA4Ni45NDI4IDYyLjI1NDJMOTMuNjA5NCA1NS42MjE3QzkzLjczMjcgNTUuNTAxOCA5My44MzA5IDU1LjM1NjYgOTMuODk4MSA1NS4xOTUyQzkzLjk2NTMgNTUuMDMzOSA5My45OTk5IDU0Ljg1OTggOTMuOTk5OSA1NC42ODM5QzkzLjk5OTkgNTQuNTA3OSA5My45NjUzIDU0LjMzMzkgOTMuODk4MSA1NC4xNzI1QzkzLjgzMDkgNTQuMDExMiA5My43MzI3IDUzLjg2NiA5My42MDk0IDUzLjc0NkM5My4zNTQ2IDUzLjQ5NiA5My4wMTc1IDUzLjM1NzggOTIuNjY3OCA1My4zNloiIGZpbGw9IiMyNTYzRUIiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuM3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjxwYXRoIGlkPSJBcnJvdyAxIiBkPSJNOTIuNjY3OCA2MS43MTcyQzkyLjMxNzUgNjEuNzE1NSA5MS45OCA2MS44NTQ3IDkxLjcyNTMgNjIuMTA2TDg2LjAwMTIgNjcuNzk4NEw4MC4yNzYxIDYyLjEwMzJDODAuMDIwNCA2MS44NTM0IDc5LjY4MzQgNjEuNzE0NCA3OS4zMzMzIDYxLjcxNDRDNzguOTgzMiA2MS43MTQ0IDc4LjY0NjIgNjEuODUzNCA3OC4zOTA1IDYyLjEwMzJDNzguMjY3MyA2Mi4yMjMyIDc4LjE2OSA2Mi4zNjgzIDc4LjEwMTkgNjIuNTI5N0M3OC4wMzQ3IDYyLjY5MSA3OCA2Mi44NjUxIDc4IDYzLjA0MTFDNzggNjMuMjE3IDc4LjAzNDcgNjMuMzkxMSA3OC4xMDE5IDYzLjU1MjRDNzguMTY5IDYzLjcxMzggNzguMjY3MyA2My44NTkgNzguMzkwNSA2My45Nzg5TDg1LjA1NzEgNzAuNjExNEM4NS4zMTI4IDcwLjg2MTIgODUuNjQ5OSA3MS4wMDAyIDg2IDcxLjAwMDJDODYuMzUwMSA3MS4wMDAyIDg2LjY4NzEgNzAuODYxMiA4Ni45NDI4IDcwLjYxMTRMOTMuNjA5NCA2My45Nzg5QzkzLjczMjcgNjMuODU5IDkzLjgzMDkgNjMuNzEzOCA5My44OTgxIDYzLjU1MjRDOTMuOTY1MyA2My4zOTExIDkzLjk5OTkgNjMuMjE3IDkzLjk5OTkgNjMuMDQxMUM5My45OTk5IDYyLjg2NTEgOTMuOTY1MyA2Mi42OTEgOTMuODk4MSA2Mi41Mjk3QzkzLjgzMDkgNjIuMzY4MyA5My43MzI3IDYyLjIyMzIgOTMuNjA5NCA2Mi4xMDMyQzkzLjM1NDYgNjEuODUzMSA5My4wMTc1IDYxLjcxNSA5Mi42Njc4IDYxLjcxNzJaIiBmaWxsPSIjMjU2M0VCIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtNDswIDAiIGR1cj0iMnMiIGJlZ2luPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8L2c+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NDRfMTU2NzMiIHgxPSI2NCIgeTE9IjMxIiB4Mj0iNjQiIHkyPSI5Ny4xMjE1IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNEQkVBRkUiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNCRkRCRkUiIHN0b3Atb3BhY2l0eT0iMC4yNSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE4NDRfMTU2NzMiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","thermometer-warmer":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRoZXJtb21ldGVyLXdhcm1lciIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NDRfMTU2ODYpIj4KPGcgaWQ9IlRoZXJtb21ldGVyIE1lcmN1cnkiPgo8Y2lyY2xlIGlkPSJSZXNlcnZvaXIiIGN4PSI2NCIgY3k9IjgzIiByPSI5IiBmaWxsPSIjREMyNjI2Ii8+CjxyZWN0IGlkPSJWYWx1ZSIgeD0iNjEiIHk9IjUwIiB3aWR0aD0iNiIgaGVpZ2h0PSIyOSIgcng9IjMiIGZpbGw9IiNEQzI2MjYiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0yOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9yZWN0Pgo8L2c+CjxnIGlkPSJUaGVybW9tZXRlciBHbGFzcyI+CjxwYXRoIGlkPSJHbGFzcyIgZD0iTTUwLjUgODMuMTkxNEM1MC40OTUyIDgxLjA1NjYgNTEuMDE3NSA3OC45NTEgNTIuMDIzNCA3Ny4wNTE4QzUzLjAyOTQgNzUuMTUyNSA1NC40OTAxIDczLjUxNCA1Ni4yODQxIDcyLjI3NTRDNTYuNDE5MiA3Mi4xODIxIDU2LjQ5OTkgNzIuMDI4NCA1Ni41IDcxLjg2NDNWMzguNzc5M0M1Ni41IDM2Ljg1MzQgNTcuMjg2NCAzNS4wMDI5IDU4LjY5MTQgMzMuNjM2N0M2MC4wOTY5IDMyLjI3IDYyLjAwNjQgMzEuNSA2NCAzMS41QzY1Ljk5MzUgMzEuNSA2Ny45MDMgMzIuMjcgNjkuMzA4NiAzMy42MzY3QzcwLjcxMzYgMzUuMDAyOSA3MS41IDM2Ljg1MzQgNzEuNSAzOC43NzkzVjQyLjA0NjlINjVDNjQuNzIzOSA0Mi4wNDY5IDY0LjUgNDIuMjcwOCA2NC41IDQyLjU0NjlDNjQuNSA0Mi44MjMgNjQuNzIzOCA0My4wNDY5IDY1IDQzLjA0NjlINzEuNVY0OS44MjYySDY1QzY0LjcyMzggNDkuODI2MiA2NC41IDUwLjA1IDY0LjUgNTAuMzI2MkM2NC41MDAxIDUwLjYwMjIgNjQuNzIzOSA1MC44MjYyIDY1IDUwLjgyNjJINzEuNVY1Ny42MDQ1SDY1QzY0LjcyNCA1Ny42MDQ1IDY0LjUwMDIgNTcuODI4NiA2NC41IDU4LjEwNDVDNjQuNSA1OC4zODA2IDY0LjcyMzggNTguNjA0NSA2NSA1OC42MDQ1SDcxLjVWNzEuODM5OEM3MS41IDcyLjAwNCA3MS41ODA3IDcyLjE1NzYgNzEuNzE1OCA3Mi4yNTFDNzMuNTEzMiA3My40OTE5IDc0Ljk3NjMgNzUuMTM0NCA3NS45ODI0IDc3LjAzODFDNzYuOTg4NCA3OC45NDE2IDc3LjUwODYgODEuMDUxOCA3Ny41IDgzLjE5MDRWODMuMTkyNEM3Ny40OTk5IDkwLjU0MzEgNzEuNDgwMSA5Ni41IDY0IDk2LjVDNTYuNTE5OSA5Ni41IDUwLjUgOTAuNTQzMSA1MC41IDgzLjE5MjRWODMuMTkxNFoiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODQ0XzE1Njg2KSIgc3Ryb2tlPSIjQkZEQkZFIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPGcgaWQ9IkFycm93cyI+CjxwYXRoIGlkPSJBcnJvdyAzIiBkPSJNOTIuNjY3OCA3MC45OTc0QzkyLjMxNzUgNzAuOTk5MSA5MS45OCA3MC44NTk5IDkxLjcyNTMgNzAuNjA4Nkw4Ni4wMDEyIDY0LjkxNjJMODAuMjc2MSA3MC42MTE0QzgwLjAyMDQgNzAuODYxMiA3OS42ODM0IDcxLjAwMDIgNzkuMzMzMyA3MS4wMDAyQzc4Ljk4MzIgNzEuMDAwMiA3OC42NDYyIDcwLjg2MTIgNzguMzkwNSA3MC42MTE0Qzc4LjI2NzMgNzAuNDkxNCA3OC4xNjkgNzAuMzQ2MyA3OC4xMDE5IDcwLjE4NDlDNzguMDM0NyA3MC4wMjM2IDc4IDY5Ljg0OTUgNzggNjkuNjczNUM3OCA2OS40OTc2IDc4LjAzNDcgNjkuMzIzNSA3OC4xMDE5IDY5LjE2MjJDNzguMTY5IDY5LjAwMDggNzguMjY3MyA2OC44NTU2IDc4LjM5MDUgNjguNzM1N0w4NS4wNTcxIDYyLjEwMzJDODUuMzEyOCA2MS44NTM0IDg1LjY0OTkgNjEuNzE0NCA4NiA2MS43MTQ0Qzg2LjM1MDEgNjEuNzE0NCA4Ni42ODcxIDYxLjg1MzQgODYuOTQyOCA2Mi4xMDMyTDkzLjYwOTQgNjguNzM1N0M5My43MzI3IDY4Ljg1NTYgOTMuODMwOSA2OS4wMDA4IDkzLjg5ODEgNjkuMTYyMkM5My45NjUzIDY5LjMyMzUgOTMuOTk5OSA2OS40OTc2IDkzLjk5OTkgNjkuNjczNUM5My45OTk5IDY5Ljg0OTUgOTMuOTY1MyA3MC4wMjM2IDkzLjg5ODEgNzAuMTg0OUM5My44MzA5IDcwLjM0NjMgOTMuNzMyNyA3MC40OTE0IDkzLjYwOTQgNzAuNjExNEM5My4zNTQ2IDcwLjg2MTUgOTMuMDE3NSA3MC45OTk2IDkyLjY2NzggNzAuOTk3NFoiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMiIgZD0iTTkyLjY2NzggNjIuNjQwMkM5Mi4zMTc1IDYyLjY0MiA5MS45OCA2Mi41MDI3IDkxLjcyNTMgNjIuMjUxNEw4Ni4wMDEyIDU2LjU1OUw4MC4yNzYxIDYyLjI1NDJDODAuMDIwNCA2Mi41MDQxIDc5LjY4MzQgNjIuNjQzMSA3OS4zMzMzIDYyLjY0MzFDNzguOTgzMiA2Mi42NDMxIDc4LjY0NjIgNjIuNTA0MSA3OC4zOTA1IDYyLjI1NDJDNzguMjY3MyA2Mi4xMzQyIDc4LjE2OSA2MS45ODkxIDc4LjEwMTkgNjEuODI3N0M3OC4wMzQ3IDYxLjY2NjQgNzggNjEuNDkyMyA3OCA2MS4zMTY0Qzc4IDYxLjE0MDQgNzguMDM0NyA2MC45NjYzIDc4LjEwMTkgNjAuODA1Qzc4LjE2OSA2MC42NDM3IDc4LjI2NzMgNjAuNDk4NSA3OC4zOTA1IDYwLjM3ODVMODUuMDU3MSA1My43NDZDODUuMzEyOCA1My40OTYyIDg1LjY0OTkgNTMuMzU3MiA4NiA1My4zNTcyQzg2LjM1MDEgNTMuMzU3MiA4Ni42ODcxIDUzLjQ5NjIgODYuOTQyOCA1My43NDZMOTMuNjA5NCA2MC4zNzg1QzkzLjczMjcgNjAuNDk4NSA5My44MzA5IDYwLjY0MzcgOTMuODk4MSA2MC44MDVDOTMuOTY1MyA2MC45NjYzIDkzLjk5OTkgNjEuMTQwNCA5My45OTk5IDYxLjMxNjRDOTMuOTk5OSA2MS40OTIzIDkzLjk2NTMgNjEuNjY2NCA5My44OTgxIDYxLjgyNzdDOTMuODMwOSA2MS45ODkxIDkzLjczMjcgNjIuMTM0MiA5My42MDk0IDYyLjI1NDJDOTMuMzU0NiA2Mi41MDQzIDkzLjAxNzUgNjIuNjQyNSA5Mi42Njc4IDYyLjY0MDJaIiBmaWxsPSIjRUY0NDQ0Ij48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtNDswIDAiIGR1cj0iMnMiIGJlZ2luPSIwLjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9wYXRoPgo8cGF0aCBpZD0iQXJyb3cgMSIgZD0iTTkyLjY2NzggNTQuMjgzQzkyLjMxNzUgNTQuMjg0OCA5MS45OCA1NC4xNDU2IDkxLjcyNTMgNTMuODk0M0w4Ni4wMDEyIDQ4LjIwMThMODAuMjc2MSA1My44OTdDODAuMDIwNCA1NC4xNDY5IDc5LjY4MzQgNTQuMjg1OSA3OS4zMzMzIDU0LjI4NTlDNzguOTgzMiA1NC4yODU5IDc4LjY0NjIgNTQuMTQ2OSA3OC4zOTA1IDUzLjg5N0M3OC4yNjczIDUzLjc3NzEgNzguMTY5IDUzLjYzMTkgNzguMTAxOSA1My40NzA2Qzc4LjAzNDcgNTMuMzA5MiA3OCA1My4xMzUxIDc4IDUyLjk1OTJDNzggNTIuNzgzMiA3OC4wMzQ3IDUyLjYwOTIgNzguMTAxOSA1Mi40NDc4Qzc4LjE2OSA1Mi4yODY1IDc4LjI2NzMgNTIuMTQxMyA3OC4zOTA1IDUyLjAyMTNMODUuMDU3MSA0NS4zODg5Qzg1LjMxMjggNDUuMTM5IDg1LjY0OTkgNDUgODYgNDVDODYuMzUwMSA0NSA4Ni42ODcxIDQ1LjEzOSA4Ni45NDI4IDQ1LjM4ODlMOTMuNjA5NCA1Mi4wMjEzQzkzLjczMjcgNTIuMTQxMyA5My44MzA5IDUyLjI4NjUgOTMuODk4MSA1Mi40NDc4QzkzLjk2NTMgNTIuNjA5MiA5My45OTk5IDUyLjc4MzIgOTMuOTk5OSA1Mi45NTkyQzkzLjk5OTkgNTMuMTM1MSA5My45NjUzIDUzLjMwOTIgOTMuODk4MSA1My40NzA2QzkzLjgzMDkgNTMuNjMxOSA5My43MzI3IDUzLjc3NzEgOTMuNjA5NCA1My44OTdDOTMuMzU0NiA1NC4xNDcxIDkzLjAxNzUgNTQuMjg1MyA5Mi42Njc4IDU0LjI4M1oiIGZpbGw9IiNFRjQ0NDQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC00OzAgMCIgZHVyPSIycyIgYmVnaW49IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAuNTggMTsgLjQyIDAgLjU4IDEiLz48L3BhdGg+CjwvZz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg0NF8xNTY4NiIgeDE9IjY0IiB5MT0iMzEiIHgyPSI2NCIgeTI9Ijk3LjEyMTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0RCRUFGRSIgc3RvcC1vcGFjaXR5PSIwLjI1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0JGREJGRSIgc3RvcC1vcGFjaXR5PSIwLjI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg0NF8xNTY4NiI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==",thunderstorms:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRodW5kZXJzdG9ybXMiIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xODU4Xzk5MTEpIj4KPGcgaWQ9IlNreSI+CjxnIGlkPSJDbG91ZHMiPgo8ZyBpZD0iQ2xvdWQiPgo8cGF0aCBpZD0iQ2xvdWRfMiIgZD0iTTU1LjI2MjUgNDguNDc0NkM2MC4xMjI4IDQwLjYxMTEgNzAuMjk3NiAzNy4zOCA3OC44MTUyIDQwLjk0MzRDODcuMzIxNSA0NC41MDIzIDkyLjEzODEgNTQuMDAyNiA4OS45MDMxIDYyLjk2NDhMODkuNzQxOSA2My42MTQzTDkwLjQxMDkgNjMuNTg1Qzk3LjQyMDUgNjMuMjc5MSAxMDMuNSA2OC45OTE3IDEwMy41IDc2LjAyODNDMTAzLjUgODIuODM5NSA5Ny43NzE5IDg4LjQ5OTcgOTAuOTc3MyA4OC41SDM3Ljk1MzlDMzEuMTI3NiA4OC41MDE4IDI1LjIwMyA4My4xNzA5IDI0LjU1OTMgNzYuMzYwNEMyMy45MTU5IDY5LjU1MTggMjguNzM3MSA2My4yMTI0IDM1LjQ0MzEgNjEuOTQ1M0wzNS45MjY1IDYxLjg1MzVMMzUuODQyNSA2MS4zNjkxQzM1LjAyNTggNTYuNjIzOSAzNy4xMjU5IDUxLjcxNjggNDEuMTA1MiA0OS4wMTI3QzQ1LjA5NTIgNDYuMzAxNCA1MC40NDYxIDQ2LjE1MzcgNTQuNTc5OCA0OC42Mzk2TDU1LjAwMjcgNDguODk0NUw1NS4yNjI1IDQ4LjQ3NDZaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg1OF85OTExKSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iTGlnaHRuaW5nIj4KPHBhdGggaWQ9IkxpZ2h0bmluZyBCb2x0IiBkPSJNNzEuMTcyOSA2OC41TDYzLjU1NjYgODMuMDQxTDYzLjE3MjkgODMuNzcyNUg3NS4wMDJMNTYuOTUyMSAxMDcuODkyTDYwLjQ4OTMgOTEuMDExN0w2MC42MTYyIDkwLjQwOTJINTIuNzA0MUw2MC4zNTU1IDY4LjVINzEuMTcyOVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xODU4Xzk5MTEpIiBzdHJva2U9IiNGNkE4MjMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzE7MDsxOzA7MTswOzE7MSIgZHVyPSIycyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4yNTswLjMzOzAuNDI7MC41OzAuNTc7MC42MzswLjY3OzEiLz48L3BhdGg+CjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE4NThfOTkxMSIgeDE9IjY0LjAwMDkiIHkxPSIzOSIgeDI9IjY0LjAwMDkiIHkyPSI4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRjNGN0ZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0U2RUZGQyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXJfMTg1OF85OTExIiB4MT0iNjQuNTI4IiB5MT0iNjYuMDM3NyIgeDI9Ijg0LjQxNDQiIHkyPSI3Ny40NTcyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGN0IyM0IiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjZBODIzIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg1OF85OTExIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","thunderstorms-rain":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InRodW5kZXJzdG9ybXMtcmFpbiIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4NThfOTkzMykiPgo8ZyBpZD0iU2t5Ij4KPGcgaWQ9IkNsb3VkcyI+CjxnIGlkPSJDbG91ZCI+CjxwYXRoIGlkPSJDbG91ZF8yIiBkPSJNNTUuMjYyNSA0OC40NzQ2QzYwLjEyMjggNDAuNjExMSA3MC4yOTc2IDM3LjM4IDc4LjgxNTIgNDAuOTQzNEM4Ny4zMjE1IDQ0LjUwMjMgOTIuMTM4MSA1NC4wMDI2IDg5LjkwMzEgNjIuOTY0OEw4OS43NDE5IDYzLjYxNDNMOTAuNDEwOSA2My41ODVDOTcuNDIwNSA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTkgODguNDk5NyA5MC45NzczIDg4LjVIMzcuOTUzOUMzMS4xMjc2IDg4LjUwMTggMjUuMjAzIDgzLjE3MDkgMjQuNTU5MyA3Ni4zNjA0QzIzLjkxNTkgNjkuNTUxOCAyOC43MzcxIDYzLjIxMjQgMzUuNDQzMSA2MS45NDUzTDM1LjkyNjUgNjEuODUzNUwzNS44NDI1IDYxLjM2OTFDMzUuMDI1OCA1Ni42MjM5IDM3LjEyNTkgNTEuNzE2OCA0MS4xMDUyIDQ5LjAxMjdDNDUuMDk1MiA0Ni4zMDE0IDUwLjQ0NjEgNDYuMTUzNyA1NC41Nzk4IDQ4LjYzOTZMNTUuMDAyNyA0OC44OTQ1TDU1LjI2MjUgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xODU4Xzk5MzMpIiBzdHJva2U9IiNFNkVGRkMiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L2c+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIC0zOzAgMCIgZHVyPSIzcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iLjQyIDAgLjU4IDE7IC40MiAwIC41OCAxIi8+PC9nPgo8L2c+CjxnIGlkPSJQcmVjaXBpdGF0aW9uIj4KPGcgaWQ9IlJhaW5kcm9wcyI+CjxwYXRoIGlkPSJSYWluZHJvcCAxIiBkPSJNNTIgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGtleVRpbWVzPSIwOzAuMTU7MC44NTsxIi8+PC9wYXRoPgo8cGF0aCBpZD0iUmFpbmRyb3AgMiIgZD0iTTY0IDgzVjk1IiBzdHJva2U9IiMwQTVBRDQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBvcGFjaXR5PSIwIj48YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAyMCIgZHVyPSIxcyIgYmVnaW49IjAuNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIuNDIgMCAxIDEiLz48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjA7MTsxOzAiIGR1cj0iMXMiIGJlZ2luPSIwLjRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIga2V5VGltZXM9IjA7MC4xNTswLjg1OzEiLz48L3BhdGg+CjxwYXRoIGlkPSJSYWluZHJvcCAzIiBkPSJNNzYgODNWOTUiIHN0cm9rZT0iIzBBNUFENCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIG9wYWNpdHk9IjAiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0idHJhbnNsYXRlIiB2YWx1ZXM9IjAgMDswIDIwIiBkdXI9IjFzIiBiZWdpbj0iMC44cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIDEgMSIvPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMDsxOzE7MCIgZHVyPSIxcyIgYmVnaW49IjAuOHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjE1OzAuODU7MSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxnIGlkPSJMaWdodG5pbmciPgo8cGF0aCBpZD0iTGlnaHRuaW5nIEJvbHQiIGQ9Ik03MS4xNzI5IDY4LjVMNjMuNTU2NiA4My4wNDFMNjMuMTcyOSA4My43NzI1SDc1LjAwMkw1Ni45NTIxIDEwNy44OTJMNjAuNDg5MyA5MS4wMTE3TDYwLjYxNjIgOTAuNDA5Mkg1Mi43MDQxTDYwLjM1NTUgNjguNUg3MS4xNzI5WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE4NThfOTkzMykiIHN0cm9rZT0iI0Y2QTgyMyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MTswOzE7MDsxOzA7MTsxIiBkdXI9IjJzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI1OzAuMzM7MC40MjswLjU7MC41NzswLjYzOzAuNjc7MSIvPjwvcGF0aD4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTg1OF85OTMzIiB4MT0iNjQuMDAwOSIgeTE9IjM5IiB4Mj0iNjQuMDAwOSIgeTI9Ijg5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGM0Y3RkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRTZFRkZDIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xODU4Xzk5MzMiIHgxPSI2NC41MjgiIHkxPSI2Ni4wMzc3IiB4Mj0iODQuNDE0NCIgeTI9Ijc3LjQ1NzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0Y3QjIzQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGNkE4MjMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xODU4Xzk5MzMiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=","uv-index":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9InV2LWluZGV4IiBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTgzN180OTMwKSI+CjxnIGlkPSJVViBTdW4iPgo8bWFzayBpZD0ibWFzazBfMTgzN180OTMwIiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+CjxwYXRoIGlkPSJDdXRvdXQiIGQ9Ik0xMjggMEgwVjEyOEg2NFY4NUM2NCA3My40MDIgNzMuNDAyIDY0IDg1IDY0SDEyOFYwWiIgZmlsbD0iYmxhY2siLz4KPC9tYXNrPgo8ZyBtYXNrPSJ1cmwoI21hc2swXzE4MzdfNDkzMCkiPgo8ZyBpZD0iU3VuIj4KPGNpcmNsZSBpZD0iQ29yZSIgY3g9IjY0IiBjeT0iNjMuOTk5OSIgcj0iMTkuNSIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzE4MzdfNDkzMCkiIHN0cm9rZT0iI0Y4QUYxOCIvPgo8ZyBpZD0iUmF5cyI+CjxwYXRoIGQ9Ik02MSAxOUM2MSAxNy4zNDMxIDYyLjM0MzEgMTYgNjQgMTZDNjUuNjU2OCAxNiA2NyAxNy4zNDMxIDY3IDE5VjMzQzY3IDM0LjY1NjkgNjUuNjU2OCAzNiA2NCAzNkM2Mi4zNDMxIDM2IDYxIDM0LjY1NjkgNjEgMzNWMTlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik05My42OTg1IDMwLjA1ODlDOTQuODcgMjguODg3MyA5Ni43Njk2IDI4Ljg4NzMgOTcuOTQxMSAzMC4wNTg5Qzk5LjExMjcgMzEuMjMwNCA5OS4xMTI3IDMzLjEyOTkgOTcuOTQxMSAzNC4zMDE1TDg4LjA0MTYgNDQuMjAxQzg2Ljg3MDEgNDUuMzcyNiA4NC45NzA2IDQ1LjM3MjYgODMuNzk5IDQ0LjIwMUM4Mi42Mjc0IDQzLjAyOTQgODIuNjI3NCA0MS4xMjk5IDgzLjc5OSAzOS45NTg0TDkzLjY5ODUgMzAuMDU4OVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTEwOSA2MUMxMTAuNjU3IDYxIDExMiA2Mi4zNDMyIDExMiA2NEMxMTIgNjUuNjU2OSAxMTAuNjU3IDY3IDEwOSA2N0g5NUM5My4zNDMxIDY3IDkyIDY1LjY1NjkgOTIgNjRDOTIgNjIuMzQzMiA5My4zNDMxIDYxIDk1IDYxSDEwOVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTk3Ljk0MTEgOTMuNjk4NUM5OS4xMTI3IDk0Ljg3MDEgOTkuMTEyNyA5Ni43Njk2IDk3Ljk0MTEgOTcuOTQxMUM5Ni43Njk2IDk5LjExMjcgOTQuODcwMSA5OS4xMTI3IDkzLjY5ODUgOTcuOTQxMUw4My43OTkgODguMDQxNkM4Mi42Mjc0IDg2Ljg3MDEgODIuNjI3NCA4NC45NzA2IDgzLjc5OSA4My43OTlDODQuOTcwNiA4Mi42Mjc0IDg2Ljg3MDEgODIuNjI3NCA4OC4wNDE2IDgzLjc5OUw5Ny45NDExIDkzLjY5ODVaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik02MSA5NUM2MSA5My4zNDMxIDYyLjM0MzEgOTIgNjQgOTJDNjUuNjU2OCA5MiA2NyA5My4zNDMxIDY3IDk1VjEwOUM2NyAxMTAuNjU3IDY1LjY1NjggMTEyIDY0IDExMkM2Mi4zNDMxIDExMiA2MSAxMTAuNjU3IDYxIDEwOVY5NVoiIGZpbGw9IiNGOEFGMTgiLz4KPHBhdGggZD0iTTM5Ljk1ODQgODMuNzk5QzQxLjEyOTkgODIuNjI3NCA0My4wMjk0IDgyLjYyNzQgNDQuMjAxIDgzLjc5OUM0NS4zNzI2IDg0Ljk3MDYgNDUuMzcyNiA4Ni44NzAxIDQ0LjIwMSA4OC4wNDE2TDM0LjMwMTUgOTcuOTQxMUMzMy4xMjk5IDk5LjExMjcgMzEuMjMwNCA5OS4xMTI3IDMwLjA1ODkgOTcuOTQxMUMyOC44ODczIDk2Ljc2OTYgMjguODg3MyA5NC44NyAzMC4wNTg5IDkzLjY5ODVMMzkuOTU4NCA4My43OTlaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik0zMyA2MUMzNC42NTY5IDYxIDM2IDYyLjM0MzEgMzYgNjRDMzYgNjUuNjU2OCAzNC42NTY5IDY3IDMzIDY3SDE5QzE3LjM0MzEgNjcgMTYgNjUuNjU2OCAxNiA2NEMxNiA2Mi4zNDMxIDE3LjM0MzEgNjEgMTkgNjFIMzNaIiBmaWxsPSIjRjhBRjE4Ii8+CjxwYXRoIGQ9Ik00NC4yMDEgMzkuOTU4NEM0NS4zNzI2IDQxLjEyOTkgNDUuMzcyNiA0My4wMjk0IDQ0LjIwMSA0NC4yMDFDNDMuMDI5NCA0NS4zNzI2IDQxLjEyOTkgNDUuMzcyNiAzOS45NTg0IDQ0LjIwMUwzMC4wNTg5IDM0LjMwMTVDMjguODg3MyAzMy4xMjk5IDI4Ljg4NzMgMzEuMjMwNSAzMC4wNTg5IDMwLjA1ODlDMzEuMjMwNSAyOC44ODczIDMzLjEyOTkgMjguODg3MyAzNC4zMDE1IDMwLjA1ODlMNDQuMjAxIDM5Ljk1ODRaIiBmaWxsPSIjRjhBRjE4Ii8+CjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiB2YWx1ZXM9IjAgNjQuMCA2NC4wOzM2MCA2NC4wIDY0LjAiIGR1cj0iNnMiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L2c+CjwvZz4KPHBhdGggaWQ9IkZpeCIgZD0iTTYzLjUgODMuNUM2NC4wMzU5IDcyLjAzMDUgNzEuNzU2NCA2My44MzEyIDgzLjUgNjMuNTAwMSIgc3Ryb2tlPSIjRjhBRjE4Ii8+CjwvZz4KPC9nPgo8cGF0aCBpZD0iVVYiIGQ9Ik04Ny42MDYgOTcuNDE0Qzg1Ljg0MiA5Ny40MTQgODQuNDg2IDk3IDgzLjUzOCA5Ni4xNzJDODIuNTkgOTUuMzQ0IDgyLjExNiA5NC4xNTYgODIuMTE2IDkyLjYwOFY4NC4xODRIODUuNDgyVjkyLjYyNkM4NS40ODIgOTMuOTgyIDg2LjE5NiA5NC42NiA4Ny42MjQgOTQuNjZDODkuMDQgOTQuNjYgODkuNzQ4IDkzLjk4MiA4OS43NDggOTIuNjI2Vjg0LjE4NEg5My4xMTRWOTIuNjA4QzkzLjExNCA5NC4xNjggOTIuNjQgOTUuMzYyIDkxLjY5MiA5Ni4xOUM5MC43NDQgOTcuMDA2IDg5LjM4MiA5Ny40MTQgODcuNjA2IDk3LjQxNFpNMTAxLjUyNiA4OS40MjJMMTAzLjAyIDg0LjE4NEgxMDYuNDRMMTAyLjMgOTdIOTguNzM2M0w5NC41OTYzIDg0LjE4NEg5OC4wNTIzTDk5LjU2NDMgODkuNDA0TDEwMC41NTQgOTMuNDM2TDEwMS41MjYgODkuNDIyWiIgZmlsbD0iIzIwMjkzOSIvPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMTgzN180OTMwIiB4MT0iNjQiIHkxPSI0My45OTk5IiB4Mj0iNjQiIHkyPSI4My45OTk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiNGQkJGMjQiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjRjhBRjE4Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTgzN180OTMwIj4KPHJlY3Qgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+","weather-alarm":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndlYXRoZXItYWxhcm0iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xOTA1XzE5MDcwKSI+CjxnIGlkPSJTa3kiPgo8ZyBpZD0iQ2xvdWRzIj4KPGcgaWQ9IkNsb3VkIj4KPHBhdGggaWQ9IkNsb3VkXzIiIGQ9Ik01NS4yNjIzIDQ4LjQ3NDZDNjAuMTIyNyA0MC42MTExIDcwLjI5NzUgMzcuMzggNzguODE1MSA0MC45NDM0Qzg3LjMyMTQgNDQuNTAyMyA5Mi4xMzggNTQuMDAyNiA4OS45MDMgNjIuOTY0OEw4OS43NDE4IDYzLjYxNDNMOTAuNDEwOCA2My41ODVDOTcuNDIwMyA2My4yNzkxIDEwMy41IDY4Ljk5MTcgMTAzLjUgNzYuMDI4M0MxMDMuNSA4Mi44Mzk1IDk3Ljc3MTcgODguNDk5NyA5MC45NzcyIDg4LjVIMzcuOTUzN0MzMS4xMjc1IDg4LjUwMTggMjUuMjAyOSA4My4xNzA5IDI0LjU1OTIgNzYuMzYwNEMyMy45MTU4IDY5LjU1MTggMjguNzM2OSA2My4yMTI0IDM1LjQ0MyA2MS45NDUzTDM1LjkyNjQgNjEuODUzNUwzNS44NDI0IDYxLjM2OTFDMzUuMDI1NiA1Ni42MjM5IDM3LjEyNTggNTEuNzE2OCA0MS4xMDUxIDQ5LjAxMjdDNDUuMDk1MSA0Ni4zMDE0IDUwLjQ0NTkgNDYuMTUzNyA1NC41Nzk3IDQ4LjYzOTZMNTUuMDAyNiA0OC44OTQ1TDU1LjI2MjMgNDguNDc0NloiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xOTA1XzE5MDcwKSIgc3Ryb2tlPSIjRTZFRkZDIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9nPgo8YW5pbWF0ZVRyYW5zZm9ybSBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iIHR5cGU9InRyYW5zbGF0ZSIgdmFsdWVzPSIwIDA7MCAtMzswIDAiIGR1cj0iM3MiIGJlZ2luPSIwcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9Ii40MiAwIC41OCAxOyAuNDIgMCAuNTggMSIvPjwvZz4KPC9nPgo8ZyBpZD0iQWxlcnQiPgo8cGF0aCBpZD0iRXhjbGFtYXRpb24iIGQ9Ik04OS44MzUgNjguNzVDOTAuNzk3MiA2Ny4wODMzIDkzLjIwMjggNjcuMDgzMyA5NC4xNjUgNjguNzVMMTA2LjI4OSA4OS43NUMxMDcuMjUxIDkxLjQxNjcgMTA2LjA0OSA5My41IDEwNC4xMjQgOTMuNUg3OS44NzZDNzguMDExNSA5My41IDc2LjgyNDMgOTEuNTQ0NyA3Ny42MjcgODkuOTA3Mkw3Ny43MTA5IDg5Ljc1TDg5LjgzNSA2OC43NVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xOTA1XzE5MDcwKSIgc3Ryb2tlPSIjMjAyOTM5Ii8+CjxwYXRoIGlkPSJFeGNsYW1hdGlvbk1hcmsiIGQ9Ik05Mi43NTgyIDg0LjU5SDkxLjI2NDJMOTAuNDE4MiA3OS41NjhWNzYuMTg0SDkzLjU4NjJWNzkuNTY4TDkyLjc1ODIgODQuNTlaTTkzLjYwNDIgODlIOTAuNDAwMlY4NS45OTRIOTMuNjA0MlY4OVoiIGZpbGw9IndoaXRlIi8+CjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTsxOzA7MDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI5NDswLjU7MC43OTQ7MSIvPjwvZz4KPC9nPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzE5MDVfMTkwNzAiIHgxPSI2NC4wMDA4IiB5MT0iMzkiIHgyPSI2NC4wMDA4IiB5Mj0iODkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0YzRjdGRSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNFNkVGRkMiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE5MDVfMTkwNzAiIHgxPSI5MiIgeTE9IjY3IiB4Mj0iOTIiIHkyPSI5NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzY0RDZFIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzIwMjkzOSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE5MDVfMTkwNzAiPgo8cmVjdCB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4=",wind:"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndpbmQiPgo8ZyBpZD0iV2luZCI+CjxwYXRoIGlkPSJXaW5kIExpbmUgMSIgZD0iTTg3Ljc5IDQwLjEzNTJDOTMuOTc1NiAzMy4zNDcgMTA1IDM4LjQwNDkgMTA1IDQ3LjQ0NjNDMTA1IDUzLjI3NDYgMTAwLjUyMiA1OCA5NSA1OEgyNCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI1MCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIHZhbHVlcz0iMDsxMDAwIiBkdXI9IjZzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPgo8cGF0aCBpZD0iV2luZCBMaW5lIDFfMiIgZD0iTTYwLjEyODEgODcuODY4QzY2LjQyMDIgOTQuNTE4NiA3OCA4OS44NzE3IDc4IDgwLjU1NTZDNzggNzQuNzI2MyA3My4zNTAzIDcwIDY3LjYxNTQgNzBDNjEuODgwNSA3MCAyNCA3MCAyNCA3MCIgc3Ryb2tlPSIjRTJFOEYwIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtZGFzaGFycmF5PSI1MCI+PGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ic3Ryb2tlLWRhc2hvZmZzZXQiIHZhbHVlcz0iMDsxMDAwIiBkdXI9IjZzIiBiZWdpbj0iMC4ycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+CjwvZz4KPC9nPgo8L3N2Zz4=","wind-alert":"data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IndpbmQtYWxlcnQiPgo8ZyBpZD0iQWxlcnQiPgo8cGF0aCBpZD0iRXhjbGFtYXRpb24iIGQ9Ik05OC44MzUgNzAuNzVDOTkuNzk3MiA2OS4wODMzIDEwMi4yMDMgNjkuMDgzMyAxMDMuMTY1IDcwLjc1TDExNS4yODkgOTEuNzVDMTE2LjI1MSA5My40MTY3IDExNS4wNDkgOTUuNSAxMTMuMTI0IDk1LjVIODguODc2Qzg3LjAxMTUgOTUuNSA4NS44MjQzIDkzLjU0NDcgODYuNjI3IDkxLjkwNzJMODYuNzEwOSA5MS43NUw5OC44MzUgNzAuNzVaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTg2OF80Mzc0KSIgc3Ryb2tlPSIjMjAyOTM5Ii8+CjxwYXRoIGlkPSJFeGNsYW1hdGlvbk1hcmsiIGQ9Ik0xMDEuNzU4IDg2LjU5SDEwMC4yNjRMOTkuNDE4MiA4MS41NjhWNzguMTg0SDEwMi41ODZWODEuNTY4TDEwMS43NTggODYuNTlaTTEwMi42MDQgOTFIOTkuNDAwMlY4Ny45OTRIMTAyLjYwNFY5MVoiIGZpbGw9IndoaXRlIi8+CjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTsxOzA7MDsxIiBkdXI9IjFzIiBiZWdpbj0iMHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBrZXlUaW1lcz0iMDswLjI5NDswLjU7MC43OTQ7MSIvPjwvZz4KPGcgaWQ9IldpbmQiPgo8cGF0aCBpZD0iV2luZCBMaW5lIDEiIGQ9Ik04Ny43OSA0MC4xMzUyQzkzLjk3NTYgMzMuMzQ3IDEwNSAzOC40MDQ5IDEwNSA0Ny40NDYzQzEwNSA1My4yNzQ2IDEwMC41MjIgNTggOTUgNThIMjQiIHN0cm9rZT0iI0UyRThGMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNTAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiB2YWx1ZXM9IjA7MTAwMCIgZHVyPSI2cyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvcGF0aD4KPHBhdGggaWQ9IldpbmQgTGluZSAxXzIiIGQ9Ik02MC4xMjgxIDg3Ljg2OEM2Ni40MjAyIDk0LjUxODYgNzggODkuODcxNyA3OCA4MC41NTU2Qzc4IDc0LjcyNjMgNzMuMzUwMyA3MCA2Ny42MTU0IDcwQzYxLjg4MDUgNzAgMjQgNzAgMjQgNzAiIHN0cm9rZT0iI0UyRThGMCIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iNTAiPjxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiB2YWx1ZXM9IjA7MTAwMCIgZHVyPSI2cyIgYmVnaW49IjAuMnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPgo8L2c+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xODY4XzQzNzQiIHgxPSIxMDEiIHkxPSI2OSIgeDI9IjEwMSIgeTI9Ijk2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMzNjRENkUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjAyOTM5Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+"},WI={"clear-day":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjM0MTY3IiB5PSItLjM0MTY3IiB3aWR0aD0iMS42ODMzIiBoZWlnaHQ9IjEuODUiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgaW49IlNvdXJjZUFscGhhIiBzdGREZXZpYXRpb249IjMiIC8+CiAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjQiIHJlc3VsdD0ib2Zmc2V0Ymx1ciIgLz4KICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgICAgPGZlRnVuY0Egc2xvcGU9IjAuMDUiIHR5cGU9ImxpbmVhciIgLz4KICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICA8ZmVNZXJnZT4KICAgICAgICA8ZmVNZXJnZU5vZGUgLz4KICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiIC8+CiAgICAgIDwvZmVNZXJnZT4KICAgIDwvZmlsdGVyPgogICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgPCFbQ0RBVEFbCiAgICAgIC8qCioqIFNVTgoqLwogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3VuIHsKICAgICAgICAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsKICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1zdW4gewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuOwogICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuOwogICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA5czsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogOXM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogOXM7CiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA5czsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICB9CgogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3VuLXNoaW55IHsKICAgICAgICAwJSB7CiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzcHggMTBweDsKICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7CiAgICAgICAgfQoKICAgICAgICA1MCUgewogICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMC4xcHggMTBweDsKICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMXB4OwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAzcHggMTBweDsKICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwcHg7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1zdW4tc2hpbnkgbGluZSB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW4tc2hpbnk7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW4tc2hpbnk7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW4tc2hpbnk7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KICAgICAgXV0+CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwtMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDE2KSI+CiAgICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLXN1biIKICAgICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246OXM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zdW47LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWR1cmF0aW9uOjlzOy1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tcy1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXN1bjstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246OXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zdW47LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj4KICAgICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkyPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmE1MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDEzNSkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0ic2NhbGUoLTEpIj4KICAgICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkyPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmE1MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgyMjUpIj4KICAgICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkyPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmE1MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtOTApIj4KICAgICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkyPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmE1MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSgtNDUpIj4KICAgICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkyPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmE1MDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICAgIDwvZz4KICAgICAgICA8Y2lyY2xlIHI9IjUiIGZpbGw9IiNmZmE1MDAiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=","clear-night":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjMwMzgiIHk9Ii0uMzMxOCIgd2lkdGg9IjEuNjA3NiIgaGVpZ2h0PSIxLjg5NCI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIiAvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSAvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICA8IVtDREFUQVsKICAgICAgLyoKKiogTU9PTgoqLwogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItbW9vbiB7CiAgICAgICAgMCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsKICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLW1vb24gewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb247CiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb247CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNnM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEyLjVweCAxNS4xNXB4IDA7CiAgICAgICAgLyogVE9ETyBGRiBDRU5URVIgSVNTVUUgKi8KICAgICAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEyLjVweCAxNS4xNXB4IDA7CiAgICAgICAgLyogVE9ETyBGRiBDRU5URVIgSVNTVUUgKi8KICAgICAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMTIuNXB4IDE1LjE1cHggMDsKICAgICAgICAvKiBUT0RPIEZGIENFTlRFUiBJU1NVRSAqLwogICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDEyLjVweCAxNS4xNXB4IDA7CiAgICAgICAgLyogVE9ETyBGRiBDRU5URVIgSVNTVUUgKi8KICAgICAgfQoKICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLW1vb24tc3Rhci0xIHsKICAgICAgICAwJSB7CiAgICAgICAgICBvcGFjaXR5OiAwOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICBvcGFjaXR5OiAxOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmFtLXdlYXRoZXItbW9vbi1zdGFyLTEgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1tb29uLXN0YXItMTsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTE7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDNzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAzczsKICAgICAgICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAzczsKICAgICAgICBhbmltYXRpb24tZGVsYXk6IDNzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogNXM7CiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1czsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7CiAgICAgIH0KCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1tb29uLXN0YXItMiB7CiAgICAgICAgMCUgewogICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgb3BhY2l0eTogMTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLW1vb24tc3Rhci0yIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0yOwogICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItbW9vbi1zdGFyLTI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0yOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLW1vb24tc3Rhci0yOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA1czsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogNXM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kZWxheTogNXM7CiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA1czsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNHM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDRzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDRzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsKICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxOwogICAgICB9CiAgICAgIF1dPgogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPGcgaWQ9Im5pZ2h0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNCwtMTgpIiBmaWx0ZXI9InVybCgjYmx1cikiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLjggMCAwIC43ODUzNCAzNiAyMC4wMjIpIiBzdHJva2Utd2lkdGg9IjEuMjYxNiI+CiAgICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLW1vb24tc3Rhci0xIgogICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kZWxheTozczstbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo1czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItbW9vbi1zdGFyLTE7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWRlbGF5OjNzOy1tcy1hbmltYXRpb24tZHVyYXRpb246NXM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1tb29uLXN0YXItMTstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6M3M7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246NXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OjE7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLW1vb24tc3Rhci0xOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiPgogICAgICAgIDxwb2x5Z29uIHBvaW50cz0iNCAyLjcgNS4yIDMuMyA0IDQgMy4zIDUuMiAyLjcgNCAxLjUgMy4zIDIuNyAyLjcgMy4zIDEuNSIgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIgogICAgICAgICAgc3Ryb2tlLXdpZHRoPSIxLjQxMDUiIC8+CiAgICAgIDwvZz4KICAgICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItbW9vbi1zdGFyLTIiCiAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWRlbGF5OjVzOy1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjRzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1tb29uLXN0YXItMjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy1tcy1hbmltYXRpb24tZGVsYXk6NXM7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjo0czstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDoxOy1tcy1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLW1vb24tc3Rhci0yOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kZWxheTo1czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo0czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6MTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItbW9vbi1zdGFyLTI7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgICAgPHBvbHlnb24gdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsMTApIiBwb2ludHM9IjQgMi43IDUuMiAzLjMgNCA0IDMuMyA1LjIgMi43IDQgMS41IDMuMyAyLjcgMi43IDMuMyAxLjUiCiAgICAgICAgICBmaWxsPSIjZmZhNTAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMS40MTA1IiAvPgogICAgICA8L2c+CiAgICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLW1vb24iCiAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjZzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItbW9vbjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy1tb3otdHJhbnNmb3JtLW9yaWdpbjoxMi41cHggMTUuMTVweCAwOy1tcy1hbmltYXRpb24tZHVyYXRpb246NnM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1zLWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItbW9vbjstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LW1zLXRyYW5zZm9ybS1vcmlnaW46MTIuNXB4IDE1LjE1cHggMDstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo2czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLW1vb247LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MTIuNXB4IDE1LjE1cHggMCI+CiAgICAgICAgPHBhdGgKICAgICAgICAgIGQ9Im0xNC41IDEzLjJjMC0zLjcgMi02LjkgNS04LjctMS41LTAuOS0zLjItMS4zLTUtMS4zLTUuNSAwLTEwIDQuNS0xMCAxMHM0LjUgMTAgMTAgMTBjMS44IDAgMy41LTAuNSA1LTEuMy0zLTEuNy01LTUtNS04Ljd6IgogICAgICAgICAgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlPSIjZmZhNTAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIuNTIzMiIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",cloudy:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjI0Njg0IiB5PSItLjI3MDk3IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNjkzOSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIiAvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSAvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICA8IVtDREFUQVsKICAgICAgLyoKKiogQ0xPVURTCiovCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1jbG91ZC0xIHsKICAgICAgICAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgfQoKICAgICAgICA1MCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1jbG91ZC0xIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDdzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDdzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1jbG91ZC0yIHsKICAgICAgICAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1jbG91ZC0yIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0yOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KICAgICAgXV0+CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyBpZD0iY2xvdWR5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwtMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgICA8ZyBjbGFzcz0iYW0td2VhdGhlci1jbG91ZC0xIgogICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246N3M7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0xOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246N3M7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0xOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09Im1hdHJpeCguNiAwIDAgLjYgLTEwIC04KSIKICAgICAgICBkPSJtNDcuNyAzNS40YzAtNC42LTMuNy04LjItOC4yLTguMi0xIDAtMS45IDAuMi0yLjggMC41LTAuMy0zLjQtMy4xLTYuMi02LjYtNi4yLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAwLjggMC4yIDEuNiAwLjQgMi4zLTAuMy0wLjEtMC43LTAuMS0xLTAuMS0zLjcgMC02LjcgMy02LjcgNi43IDAgMy42IDIuOSA2LjYgNi41IDYuN2gxNy4yYzQuNC0wLjUgNy45LTQgNy45LTguNHoiCiAgICAgICAgZmlsbD0iIzkxYzBmOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgIDwvZz4KICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLWNsb3VkLTIiCiAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjozczstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTI7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjozczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTI7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIgogICAgICAgIGQ9Im00Ny43IDM1LjRjMC00LjYtMy43LTguMi04LjItOC4yLTEgMC0xLjkgMC4yLTIuOCAwLjUtMC4zLTMuNC0zLjEtNi4yLTYuNi02LjItMy43IDAtNi43IDMtNi43IDYuNyAwIDAuOCAwLjIgMS42IDAuNCAyLjMtMC4zLTAuMS0wLjctMC4xLTEtMC4xLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAzLjYgMi45IDYuNiA2LjUgNi43aDE3LjJjNC40LTAuNSA3LjktNCA3LjktOC40eiIKICAgICAgICBmaWxsPSIjNTdhMGVlIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+","weather-alarm":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+CjwhLS0gU2V2ZXJlIFRodW5kZXJzdG9ybSB8IENvbnRyaWJ1dGVkIGJ5IGhzb0o5NSBvbiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9oc29qOTUgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjE3NTcxIiB5PSItLjE5NTc1IiB3aWR0aD0iMS4zMzc5IiBoZWlnaHQ9IjEuNDk1OSI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICAgICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgICAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgLz4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgICAgICAgIDwhW0NEQVRBWwogICAgICAgICAgICAvKgoqKiBDTE9VRFMKKi8KICAgICAgICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgICAgICAgICAgMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA1MCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0zOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0zOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMzsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTEgewogICAgICAgICAgICAgICAgMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDUwJSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTEgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMTsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLyoKKiogU1RST0tFCiovCgogICAgICAgICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3Ryb2tlIHsKICAgICAgICAgICAgICAgIDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA0JSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDYlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LCAwLjRweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVweCwgMC40cHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVweCwgMC40cHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LCAwLjRweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxNCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxNiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMjQlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMjYlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA0MCUgewogICAgICAgICAgICAgICAgICAgIGZpbGw6IG9yYW5nZTsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgNjUlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgNS4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA2MSUgewogICAgICAgICAgICAgICAgICAgIGZpbGw6IG9yYW5nZTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLXN0cm9rZSB7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN0cm9rZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3Ryb2tlOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3Ryb2tlOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMTFzOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMTFzOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjExczsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBAa2V5ZnJhbWVzIGVycm9yIHsKICAgICAgICAgICAgICAgIDAlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiAjY2MwMDAwOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDUwJSB7CiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmMDAwMDsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiAjY2MwMDAwOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICAjU2hhcGUgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXJyb3I7CiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBlcnJvcjsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBlcnJvcjsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBdXT4KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsLTIpIiBmaWx0ZXI9InVybCgjYmx1cikiPgogICAgICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLWNsb3VkLTEiCiAgICAgICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo3czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTE7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo3czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTE7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgICAgICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC42IDAgMCAuNiAtMTAgLTYpIgogICAgICAgICAgICAgICAgZD0ibTQ3LjcgMzUuNGMwLTQuNi0zLjctOC4yLTguMi04LjItMSAwLTEuOSAwLjItMi44IDAuNS0wLjMtMy40LTMuMS02LjItNi42LTYuMi0zLjcgMC02LjcgMy02LjcgNi43IDAgMC44IDAuMiAxLjYgMC40IDIuMy0wLjMtMC4xLTAuNy0wLjEtMS0wLjEtMy43IDAtNi43IDMtNi43IDYuNyAwIDMuNiAyLjkgNi42IDYuNSA2LjdoMTcuMmM0LjQtMC41IDcuOS00IDcuOS04LjR6IgogICAgICAgICAgICAgICAgZmlsbD0iIzY2NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItY2xvdWQtMyI+CiAgICAgICAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIgogICAgICAgICAgICAgICAgZD0ibTQ3LjcgMzUuNGMwLTQuNi0zLjctOC4yLTguMi04LjItMSAwLTEuOSAwLjItMi44IDAuNS0wLjMtMy40LTMuMS02LjItNi42LTYuMi0zLjcgMC02LjcgMy02LjcgNi43IDAgMC44IDAuMiAxLjYgMC40IDIuMy0wLjMtMC4xLTAuNy0wLjEtMS0wLjEtMy43IDAtNi43IDMtNi43IDYuNyAwIDMuNiAyLjkgNi42IDYuNSA2LjdoMTcuMmM0LjQtMC41IDcuOS00IDcuOS04LjR6IgogICAgICAgICAgICAgICAgZmlsbD0iIzMzMyIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yLDAsMCwxLjIsLTQsMjgpIj4KICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9ImFtLXdlYXRoZXItc3Ryb2tlIgogICAgICAgICAgICAgICAgcG9pbnRzPSIxMS4xIDYuOSAxNC4zIC0yLjkgMjAuNSAtMi45IDE2LjQgNC4zIDIwLjMgNC4zIDExLjUgMTQuNiAxNC45IDYuOSIgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlPSIjZmZmIgogICAgICAgICAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjEuMTFzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItc3Ryb2tlOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4xMXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zdHJva2U7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgY2xhc3M9Indhcm5pbmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLDMwKSI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJtNy43NzkxIDIuOTA2LTUuOTkxMiAxMC4xMTdjLTAuNTYyODMgMC45NTA0Mi0wLjI0ODYyIDIuMTc3MiAwLjcwMTggMi43NCAwLjMwODUzIDAuMTgyNzEgMC42NjA1MSAwLjI3OTExIDEuMDE5MSAwLjI3OTExaDExLjk4MmMxLjEwNDYgMCAyLTAuODk1NDMgMi0yIDAtMC4zNTg1Ny0wLjA5NjQtMC43MTA1Ni0wLjI3OTExLTEuMDE5MWwtNS45OTEyLTEwLjExN2MtMC41NjI4My0wLjk1MDQyLTEuNzg5Ni0xLjI2NDYtMi43NC0wLjcwMTgtMC4yODkxOCAwLjE3MTI1LTAuNTMwNTUgMC40MTI2Mi0wLjcwMTggMC43MDE4eiIKICAgICAgICAgICAgICAgIGZpbGw9IiNjMDAiIC8+CiAgICAgICAgICAgIDxwYXRoIGQ9Im05LjUgMTAuNXYtNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSIxMyIgcj0iMSIgZmlsbD0iI2ZmZiIgLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==",fog:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjIwNjU1IiB5PSItLjIxMTIyIiB3aWR0aD0iMS40MDMiIGhlaWdodD0iMS40OTk3Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIiAvPgogICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiIC8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlIC8+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIiAvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgIDwhW0NEQVRBWwogICAgICAvKgoqKiBGT0cKKi8KICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWZvZy0xIHsKICAgICAgICAwJSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3cHgsIDBweCkKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpCiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1mb2ctMSB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWZvZy0xOwogICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMTsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMTsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQoKICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWZvZy0yIHsKICAgICAgICAwJSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkKICAgICAgICB9CgogICAgICAgIDIxLjA1JSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNnB4LCAwcHgpCiAgICAgICAgfQoKICAgICAgICA3OC45NSUgewogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoOXB4LCAwcHgpCiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KQogICAgICAgIH0KICAgICAgfQoKICAgICAgLmFtLXdlYXRoZXItZm9nLTIgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTI7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMjsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTI7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDIwczsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMjBzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDIwczsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDIwczsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICB9CgogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItZm9nLTMgewogICAgICAgIDAlIHsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KQogICAgICAgIH0KCiAgICAgICAgMjUlIHsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgMHB4KQogICAgICAgIH0KCiAgICAgICAgNzUlIHsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00cHgsIDBweCkKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpCiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1mb2ctMyB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMzsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWZvZy0zOwogICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMzsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctMzsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNnM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNnM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQoKICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWZvZy00IHsKICAgICAgICAwJSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCkKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNHB4LCAwcHgpCiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KQogICAgICAgIH0KICAgICAgfQoKICAgICAgLmFtLXdlYXRoZXItZm9nLTQgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTQ7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1mb2ctNDsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTQ7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItZm9nLTQ7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA2czsKICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA2czsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDZzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KICAgICAgXV0+CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwtMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgICA8ZyBjbGFzcz0iYW0td2VhdGhlci1mb2ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMCwyMCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2M2ZGVmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICBzdHJva2Utd2lkdGg9IjIiPgogICAgICA8bGluZSBjbGFzcz0iYW0td2VhdGhlci1mb2ctMSIgeTE9IjAiIHkyPSIwIiB4MT0iMSIgeDI9IjM3IiBzdHJva2UtZGFzaGFycmF5PSIzLCA1LCAxNywgNSwgNyIgLz4KICAgICAgPGxpbmUgY2xhc3M9ImFtLXdlYXRoZXItZm9nLTIiIHkxPSI1IiB5Mj0iNSIgeDE9IjkiIHgyPSIzMyIgc3Ryb2tlLWRhc2hhcnJheT0iMTEsIDcsIDE1IiAvPgogICAgICA8bGluZSBjbGFzcz0iYW0td2VhdGhlci1mb2ctMyIgeTE9IjEwIiB5Mj0iMTAiIHgxPSI1IiB4Mj0iNDAiIHN0cm9rZS1kYXNoYXJyYXk9IjExLCA3LCAzLCA1LCA5IiAvPgogICAgICA8bGluZSBjbGFzcz0iYW0td2VhdGhlci1mb2ctNCIgeTE9IjE1IiB5Mj0iMTUiIHgxPSI3IiB4Mj0iNDIiIHN0cm9rZS1kYXNoYXJyYXk9IjEzLCA1LCA5LCA1LCAzIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",hail:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgIDxkZWZzPgogICAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjI0Njg0IiB5PSItLjIyNzc2IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNTc1NiI+CiAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICAgICAgPGZlRnVuY0Egc2xvcGU9IjAuMDUiIHR5cGU9ImxpbmVhciIgLz4KICAgICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIC8+CiAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgICAgPC9mZU1lcmdlPgogICAgICA8L2ZpbHRlcj4KICAgICAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgICAgICAgPCFbQ0RBVEFbCiAgICAgICAgIC8qCiAgICAgIC8qCioqIENMT1VEUwoqLwogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItY2xvdWQgewogICAgICAgIDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgNTAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLWNsb3VkIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkOwogICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQ7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQ7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KCiAgICAgICAgIC8qCioqIFJBSU4KKi8KICAgICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLXJhaW4gewogICAgICAgICAgICAwJSB7CiAgICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwOwogICAgICAgICAgICB9CgogICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7CiAgICAgICAgICAgIH0KICAgICAgICAgfQoKICAgICAgICAgLmFtLXdlYXRoZXItcmFpbi0xIHsKICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA4czsKICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICB9CgogICAgICAgICAuYW0td2VhdGhlci1yYWluLTIgewogICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjsKICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDAuMjVzOwogICAgICAgICAgICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgfQogICAgICAgICBdXT4KICAgICAgPC9zdHlsZT4KICAgPC9kZWZzPgogICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwtMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgICA8ZyBjbGFzcz0iYW0td2VhdGhlci1jbG91ZCIKICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjNzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItY2xvdWQ7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjozczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAsLTExKSIKICAgICAgICBkPSJtNDcuNyAzNS40YzAtNC42LTMuNy04LjItOC4yLTguMi0xIDAtMS45IDAuMi0yLjggMC41LTAuMy0zLjQtMy4xLTYuMi02LjYtNi4yLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAwLjggMC4yIDEuNiAwLjQgMi4zLTAuMy0wLjEtMC43LTAuMS0xLTAuMS0zLjcgMC02LjcgMy02LjcgNi43IDAgMy42IDIuOSA2LjYgNi41IDYuN2gxNy4yYzQuNC0wLjUgNy45LTQgNy45LTguNHoiCiAgICAgICAgZmlsbD0iIzU3YTBlZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgIDwvZz4KICAgICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTAsLTI0Ny4zOSwyMDAuMTcpIHRyYW5zbGF0ZSgtMjAsLTYuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkxYzBmOCIKICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT0iMC4xLCA3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMyI+CiAgICAgICAgIDxsaW5lIGNsYXNzPSJhbS13ZWF0aGVyLXJhaW4tMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUsMSkiIHkyPSI4IgogICAgICAgICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246OHM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgICAgICAgPGxpbmUgY2xhc3M9ImFtLXdlYXRoZXItcmFpbi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKSIgeTI9IjgiCiAgICAgICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kZWxheTowLjI1czstbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWRlbGF5OjAuMjVzOy1tcy1hbmltYXRpb24tZHVyYXRpb246OHM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1zLWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItcmFpbjstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC4yNXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246OHM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiIC8+CiAgICAgICAgIDxsaW5lIGNsYXNzPSJhbS13ZWF0aGVyLXJhaW4tMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSkiIHkyPSI4IgogICAgICAgICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246OHM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgICAgPC9nPgogICA8L2c+Cjwvc3ZnPg==",thunderstorms:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjI0Njg0IiB5PSItLjE5NTc1IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNDk1OSI+CiAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIvPgogICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiLz4KICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIi8+CiAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgPGZlTWVyZ2U+CiAgICA8ZmVNZXJnZU5vZGUvPgogICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgIDwvZmVNZXJnZT4KICA8L2ZpbHRlcj4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwovKgoqKiBDTE9VRFMKKi8KQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTEgewogIDAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwwcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LDBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwwcHgpOwogIH0KCiAgNTAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwwcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LDBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwwcHgpOwogIH0KCiAgMTAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwwcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LDBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsMHB4KTsKICB9Cn0KCi5hbS13ZWF0aGVyLWNsb3VkLTEgewogIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMTsKICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTE7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogN3M7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDdzOwogIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwp9CgpAa2V5ZnJhbWVzIGFtLXdlYXRoZXItY2xvdWQtMiB7CiAgMCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICB9CgogIDUwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwwcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsMHB4KTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LDBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwwcHgpOwogIH0KCiAgMTAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpOwogIH0KfQoKLmFtLXdlYXRoZXItY2xvdWQtMiB7CiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0yOwogICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjsKICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7Cn0KCi8qCioqIFNUUk9LRQoqLwpAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3Ryb2tlIHsKICAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICB9CgogIDIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjNweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogIH0KCiAgNCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgfQoKICA2JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LDAuNHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC41cHgsMC40cHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVweCwwLjRweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LDAuNHB4KTsKICB9CgogIDglIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogIH0KCiAgMTAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjNweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogIH0KCiAgMTIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogIH0KCiAgMTQlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjNweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogIH0KCiAgMTYlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogIH0KCiAgMTglIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjNweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsMC4wcHgpOwogIH0KCiAgMjAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogIH0KCiAgMjIlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LDAuMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LDAuMHB4KTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LDAuMHB4KTsKICB9CgogIDI0JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICB9CgogIDI2JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LDAuMHB4KTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwwLjBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsMC4wcHgpOwoKICB9CgogIDI4JSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICB9CgogIDQwJSB7CiAgICBmaWxsOiBvcmFuZ2U7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICB9CgogIDY1JSB7CiAgICBmaWxsOiB3aGl0ZTsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCw1LjBweCk7CiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsNS4wcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXB4LDUuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCw1LjBweCk7CiAgfQogIDYxJSB7CiAgICBmaWxsOiBvcmFuZ2U7CiAgfQoKICAxMDAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwwLjBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LDAuMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsMC4wcHgpOwogIH0KfQoKLmFtLXdlYXRoZXItc3Ryb2tlIHsKICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN0cm9rZTsKICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN0cm9rZTsKICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN0cm9rZTsKICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMS4xMXM7CiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMTFzOwogICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjExczsKICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKfQogICAgICAgIF1dPjwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBpZD0idGh1bmRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQsLTEyKSIgZmlsdGVyPSJ1cmwoI2JsdXIpIj4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMCwxMCkiPgogICA8ZyBjbGFzcz0iYW0td2VhdGhlci1jbG91ZC0xIiBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246N3M7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0xOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246N3M7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0xOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiPgogICAgPHBhdGggdHJhbnNmb3JtPSJtYXRyaXgoLjYgMCAwIC42IC0xMCAtNikiIGQ9Im00Ny43IDM1LjRjMC00LjYtMy43LTguMi04LjItOC4yLTEgMC0xLjkgMC4yLTIuOCAwLjUtMC4zLTMuNC0zLjEtNi4yLTYuNi02LjItMy43IDAtNi43IDMtNi43IDYuNyAwIDAuOCAwLjIgMS42IDAuNCAyLjMtMC4zLTAuMS0wLjctMC4xLTEtMC4xLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAzLjYgMi45IDYuNiA2LjUgNi43aDE3LjJjNC40LTAuNSA3LjktNCA3LjktOC40eiIgZmlsbD0iIzkxYzBmOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICA8L2c+CiAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIiBkPSJtNDcuNyAzNS40YzAtNC42LTMuNy04LjItOC4yLTguMi0xIDAtMS45IDAuMi0yLjggMC41LTAuMy0zLjQtMy4xLTYuMi02LjYtNi4yLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAwLjggMC4yIDEuNiAwLjQgMi4zLTAuMy0wLjEtMC43LTAuMS0xLTAuMS0zLjcgMC02LjcgMy02LjcgNi43IDAgMy42IDIuOSA2LjYgNi41IDYuN2gxNy4yYzQuNC0wLjUgNy45LTQgNy45LTguNHoiIGZpbGw9IiM1N2EwZWUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yLDAsMCwxLjIsLTQsMjgpIj4KICAgIDxwb2x5Z29uIGNsYXNzPSJhbS13ZWF0aGVyLXN0cm9rZSIgcG9pbnRzPSIxMS4xIDYuOSAxNC4zIC0yLjkgMjAuNSAtMi45IDE2LjQgNC4zIDIwLjMgNC4zIDExLjUgMTQuNiAxNC45IDYuOSIgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlPSIjZmZmIiBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246MS4xMXM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zdHJva2U7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoxLjExczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXN0cm9rZTstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=","thunderstorms-rain":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+CjwhLS0gU2V2ZXJlIFRodW5kZXJzdG9ybSB8IENvbnRyaWJ1dGVkIGJ5IGhzb0o5NSBvbiBHaXRIdWI6IGh0dHBzOi8vZ2l0aHViLmNvbS9oc29qOTUgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjE3NTcxIiB5PSItLjE5NTc1IiB3aWR0aD0iMS4zMzc5IiBoZWlnaHQ9IjEuNDk1OSI+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICAgICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgICAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgLz4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgICAgICAgIDwhW0NEQVRBWwogICAgICAgICAgICAvKgoqKiBDTE9VRFMKKi8KICAgICAgICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgICAgICAgICAgMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA1MCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDEwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNXB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0zOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0zOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMzsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA3czsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogN3M7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTEgewogICAgICAgICAgICAgICAgMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDUwJSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMTAwJSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTEgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0xOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMTsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQoKICAgICAgICAgICAgLyoKKiogU1RST0tFCiovCgogICAgICAgICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc3Ryb2tlIHsKICAgICAgICAgICAgICAgIDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA0JSB7CiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDYlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LCAwLjRweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVweCwgMC40cHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjVweCwgMC40cHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuNXB4LCAwLjRweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxNCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxNiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuM3B4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4zcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyMCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyMiUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMjQlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgMjYlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAyOCUgewogICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMC4wcHgsIDAuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA0MCUgewogICAgICAgICAgICAgICAgICAgIGZpbGw6IG9yYW5nZTsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CgogICAgICAgICAgICAgICAgNjUlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiB3aGl0ZTsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgNS4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIDUuMHB4KTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICA2MSUgewogICAgICAgICAgICAgICAgICAgIGZpbGw6IG9yYW5nZTsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMC4wcHgpOwogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwLjBweCk7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0KCiAgICAgICAgICAgIC5hbS13ZWF0aGVyLXN0cm9rZSB7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN0cm9rZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3Ryb2tlOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3Ryb2tlOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEuMTFzOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDEuMTFzOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjExczsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgICB9CgogICAgICAgICAgICBAa2V5ZnJhbWVzIGVycm9yIHsKICAgICAgICAgICAgICAgIDAlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiAjY2MwMDAwOwogICAgICAgICAgICAgICAgfQoKICAgICAgICAgICAgICAgIDUwJSB7CiAgICAgICAgICAgICAgICAgICAgZmlsbDogI2ZmMDAwMDsKICAgICAgICAgICAgICAgIH0KCiAgICAgICAgICAgICAgICAxMDAlIHsKICAgICAgICAgICAgICAgICAgICBmaWxsOiAjY2MwMDAwOwogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9CgogICAgICAgICAgICAjU2hhcGUgewogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZXJyb3I7CiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBlcnJvcjsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBlcnJvcjsKICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAxczsKICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7CiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgICAgfQogICAgICAgICAgICBdXT4KICAgICAgICA8L3N0eWxlPgogICAgPC9kZWZzPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsLTIpIiBmaWx0ZXI9InVybCgjYmx1cikiPgogICAgICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLWNsb3VkLTEiCiAgICAgICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo3czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTE7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo3czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTE7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgICAgICAgIDxwYXRoIHRyYW5zZm9ybT0ibWF0cml4KC42IDAgMCAuNiAtMTAgLTYpIgogICAgICAgICAgICAgICAgZD0ibTQ3LjcgMzUuNGMwLTQuNi0zLjctOC4yLTguMi04LjItMSAwLTEuOSAwLjItMi44IDAuNS0wLjMtMy40LTMuMS02LjItNi42LTYuMi0zLjcgMC02LjcgMy02LjcgNi43IDAgMC44IDAuMiAxLjYgMC40IDIuMy0wLjMtMC4xLTAuNy0wLjEtMS0wLjEtMy43IDAtNi43IDMtNi43IDYuNyAwIDMuNiAyLjkgNi42IDYuNSA2LjdoMTcuMmM0LjQtMC41IDcuOS00IDcuOS04LjR6IgogICAgICAgICAgICAgICAgZmlsbD0iIzY2NiIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItY2xvdWQtMyI+CiAgICAgICAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIgogICAgICAgICAgICAgICAgZD0ibTQ3LjcgMzUuNGMwLTQuNi0zLjctOC4yLTguMi04LjItMSAwLTEuOSAwLjItMi44IDAuNS0wLjMtMy40LTMuMS02LjItNi42LTYuMi0zLjcgMC02LjcgMy02LjcgNi43IDAgMC44IDAuMiAxLjYgMC40IDIuMy0wLjMtMC4xLTAuNy0wLjEtMS0wLjEtMy43IDAtNi43IDMtNi43IDYuNyAwIDMuNiAyLjkgNi42IDYuNSA2LjdoMTcuMmM0LjQtMC41IDcuOS00IDcuOS04LjR6IgogICAgICAgICAgICAgICAgZmlsbD0iIzMzMyIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4yLDAsMCwxLjIsLTQsMjgpIj4KICAgICAgICAgICAgPHBvbHlnb24gY2xhc3M9ImFtLXdlYXRoZXItc3Ryb2tlIgogICAgICAgICAgICAgICAgcG9pbnRzPSIxMS4xIDYuOSAxNC4zIC0yLjkgMjAuNSAtMi45IDE2LjQgNC4zIDIwLjMgNC4zIDExLjUgMTQuNiAxNC45IDYuOSIgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlPSIjZmZmIgogICAgICAgICAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjEuMTFzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItc3Ryb2tlOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246MS4xMXM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zdHJva2U7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgY2xhc3M9Indhcm5pbmciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwLDMwKSI+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJtNy43NzkxIDIuOTA2LTUuOTkxMiAxMC4xMTdjLTAuNTYyODMgMC45NTA0Mi0wLjI0ODYyIDIuMTc3MiAwLjcwMTggMi43NCAwLjMwODUzIDAuMTgyNzEgMC42NjA1MSAwLjI3OTExIDEuMDE5MSAwLjI3OTExaDExLjk4MmMxLjEwNDYgMCAyLTAuODk1NDMgMi0yIDAtMC4zNTg1Ny0wLjA5NjQtMC43MTA1Ni0wLjI3OTExLTEuMDE5MWwtNS45OTEyLTEwLjExN2MtMC41NjI4My0wLjk1MDQyLTEuNzg5Ni0xLjI2NDYtMi43NC0wLjcwMTgtMC4yODkxOCAwLjE3MTI1LTAuNTMwNTUgMC40MTI2Mi0wLjcwMTggMC43MDE4eiIKICAgICAgICAgICAgICAgIGZpbGw9IiNjMDAiIC8+CiAgICAgICAgICAgIDxwYXRoIGQ9Im05LjUgMTAuNXYtNSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiAvPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI5LjUiIGN5PSIxMyIgcj0iMSIgZmlsbD0iI2ZmZiIgLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==","partly-cloudy-day":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjIwNjU1IiB5PSItLjI4NDcyIiB3aWR0aD0iMS40MDMiIGhlaWdodD0iMS42OTQ0Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIiAvPgogICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiIC8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlIC8+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIiAvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICAgIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAgIDwhW0NEQVRBWwogICAgICAvKgoqKiBDTE9VRFMKKi8KICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTIgewogICAgICAgIDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgNTAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTIgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQoKICAgICAgLyoKKiogU1VOCiovCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1zdW4gewogICAgICAgIDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOwogICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7CiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOwogICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLXN1biB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47CiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bjsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zdW47CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDlzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA5czsKICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA5czsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDlzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1zdW4tc2hpbnkgewogICAgICAgIDAlIHsKICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDNweCAxMHB4OwogICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAwLjFweCAxMHB4OwogICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xcHg7CiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDNweCAxMHB4OwogICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDBweDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLXN1bi1zaGlueSBsaW5lIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc3VuLXNoaW55OwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXN1bi1zaGlueTsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQogICAgICBdXT4KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LC0yKSIgZmlsdGVyPSJ1cmwoI2JsdXIpIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsMTYpIj4KICAgICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItc3VuIgogICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo5czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXN1bjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy1tcy1hbmltYXRpb24tZHVyYXRpb246OXM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1zLWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItc3VuOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo5czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXN1bjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyIj4KICAgICAgICA8bGluZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkpIiB5Mj0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZhNTAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InJvdGF0ZSg0NSkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDkwKSI+CiAgICAgICAgICA8bGluZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkpIiB5Mj0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZhNTAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgICAgICAgIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTM1KSI+CiAgICAgICAgICA8bGluZSB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDkpIiB5Mj0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZhNTAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgICAgICAgIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJzY2FsZSgtMSkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKDIyNSkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKC05MCkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKC00NSkiPgogICAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTI9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmYTUwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICAgICAgICBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgICAgPC9nPgogICAgICAgIDxjaXJjbGUgcj0iNSIgZmlsbD0iI2ZmYTUwMCIgc3Ryb2tlPSIjZmZhNTAwIiBzdHJva2Utd2lkdGg9IjIiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLWNsb3VkLTIiCiAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjozczstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTI7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjozczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTI7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIgogICAgICAgIGQ9Im00Ny43IDM1LjRjMC00LjYtMy43LTguMi04LjItOC4yLTEgMC0xLjkgMC4yLTIuOCAwLjUtMC4zLTMuNC0zLjEtNi4yLTYuNi02LjItMy43IDAtNi43IDMtNi43IDYuNyAwIDAuOCAwLjIgMS42IDAuNCAyLjMtMC4zLTAuMS0wLjctMC4xLTEtMC4xLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAzLjYgMi45IDYuNiA2LjUgNi43aDE3LjJjNC40LTAuNSA3LjktNCA3LjktOC40eiIKICAgICAgICBmaWxsPSIjYzZkZWZmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yIiAvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+",rain:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjI0Njg0IiB5PSItLjIzNDA5IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNTcwMiI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIiAvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSAvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICA8IVtDREFUQVsKICAgICAgLyoKKiogUkFJTgoqLwogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItcmFpbiB7CiAgICAgICAgMCUgewogICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7CiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTAwOwogICAgICAgIH0KICAgICAgfQoKICAgICAgLmFtLXdlYXRoZXItcmFpbi0xIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiA4czsKICAgICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiA4czsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLXJhaW4tMiB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC4yNXM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kZWxheTogMC4yNXM7CiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQoKICAgICAgLyoKKiogQ0xPVURTCiovCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1jbG91ZC0yIHsKICAgICAgICAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICB9CgogICAgICAgIDUwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwgMHB4KTsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1jbG91ZC0yIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0yOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgIH0KICAgICAgXV0+CiAgICA8L3N0eWxlPgogIDwvZGVmcz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwtMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgICA8ZyBjbGFzcz0iYW0td2VhdGhlci1jbG91ZC0zIgogICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246M3M7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0yOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246M3M7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1jbG91ZC0yOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiPgogICAgICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAsLTExKSIKICAgICAgICBkPSJtNDcuNyAzNS40YzAtNC42LTMuNy04LjItOC4yLTguMi0xIDAtMS45IDAuMi0yLjggMC41LTAuMy0zLjQtMy4xLTYuMi02LjYtNi4yLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAwLjggMC4yIDEuNiAwLjQgMi4zLTAuMy0wLjEtMC43LTAuMS0xLTAuMS0zLjcgMC02LjcgMy02LjcgNi43IDAgMy42IDIuOSA2LjYgNi41IDYuN2gxNy4yYzQuNC0wLjUgNy45LTQgNy45LTguNHoiCiAgICAgICAgZmlsbD0iIzU3YTBlZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTApIHJvdGF0ZSgxMCwtMjQ1Ljg5LDIxNy4zMSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkxYzBmOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCwgNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICBzdHJva2Utd2lkdGg9IjIiPgogICAgICA8bGluZSBjbGFzcz0iYW0td2VhdGhlci1yYWluLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LDEpIiB5Mj0iOCIKICAgICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246OHM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgICAgPGxpbmUgY2xhc3M9ImFtLXdlYXRoZXItcmFpbi0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC0xKSIgeTI9IjgiCiAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWRlbGF5OjAuMjVzOy1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjhzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItcmFpbjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy1tcy1hbmltYXRpb24tZGVsYXk6MC4yNXM7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kZWxheTowLjI1czstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciIgLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg==",snow:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+Cjxzdmcgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8ZmlsdGVyIGlkPSJibHVyIiB4PSItLjI0Njg0IiB5PSItLjI2ODk3IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNjc1OSI+CiAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIvPgogICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiLz4KICAgPGZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIi8+CiAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgPGZlTWVyZ2U+CiAgICA8ZmVNZXJnZU5vZGUvPgogICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgIDwvZmVNZXJnZT4KICA8L2ZpbHRlcj4KICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwovKgoqKiBDTE9VRFMKKi8KQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTIgewogIDAlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7CiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7CiAgfQoKICA1MCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LDBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDJweCwwcHgpOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsMHB4KTsKICB9CgogIDEwMCUgewogICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LDBweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwwcHgpOwogICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsMHB4KTsKICB9Cn0KCi5hbS13ZWF0aGVyLWNsb3VkLTIgewogIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMjsKICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTI7CiAgICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1jbG91ZC0yOwogIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzczsKICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDNzOwogIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwp9CgovKgoqKiBTTk9XCiovCkBrZXlmcmFtZXMgYW0td2VhdGhlci1zbm93IHsKICAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgwKTsKICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDApOwogIH0KCiAgMzMuMzMlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjJweCkgdHJhbnNsYXRlWSgycHgpOwogICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuMnB4KSB0cmFuc2xhdGVZKDJweCk7CiAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS4ycHgpIHRyYW5zbGF0ZVkoMnB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjJweCkgdHJhbnNsYXRlWSgycHgpOwogIH0KCiAgNjYuNjYlIHsKICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7CiAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxLjRweCkgdHJhbnNsYXRlWSg0cHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS40cHgpIHRyYW5zbGF0ZVkoNHB4KTsKICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEuNHB4KSB0cmFuc2xhdGVZKDRweCk7CiAgICBvcGFjaXR5OiAxOwogIH0KCiAgMTAwJSB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTsKICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xLjZweCkgdHJhbnNsYXRlWSg2cHgpOwogICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEuNnB4KSB0cmFuc2xhdGVZKDZweCk7CiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMS42cHgpIHRyYW5zbGF0ZVkoNnB4KTsKICAgIG9wYWNpdHk6IDA7CiAgfQp9CgouYW0td2VhdGhlci1zbm93LTEgewogIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdzsKICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7CiAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93OwogICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdzsKICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgICAtbXMtYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgIC1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAtbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKfQoKLmFtLXdlYXRoZXItc25vdy0yIHsKICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7CiAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93OwogICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdzsKICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXNub3c7CiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMnM7CiAgICAgLW1vei1hbmltYXRpb24tZGVsYXk6IDEuMnM7CiAgICAgIC1tcy1hbmltYXRpb24tZGVsYXk6IDEuMnM7CiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7CiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzOwogICAgIC1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOwogIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgIC1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7Cn0KCiAgICAgICAgXV0+PC9zdHlsZT4KIDwvZGVmcz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LC0xMikiIGZpbHRlcj0idXJsKCNibHVyKSI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAsMTApIj4KICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItY2xvdWQtMiIgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjNzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItY2xvdWQtMjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjNzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItY2xvdWQtMjstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyIj4KICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIiBkPSJtNDcuNyAzNS40YzAtNC42LTMuNy04LjItOC4yLTguMi0xIDAtMS45IDAuMi0yLjggMC41LTAuMy0zLjQtMy4xLTYuMi02LjYtNi4yLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAwLjggMC4yIDEuNiAwLjQgMi4zLTAuMy0wLjEtMC43LTAuMS0xLTAuMS0zLjcgMC02LjcgMy02LjcgNi43IDAgMy42IDIuOSA2LjYgNi41IDYuN2gxNy4yYzQuNC0wLjUgNy45LTQgNy45LTguNHoiIGZpbGw9IiM1N2EwZWUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxLjIiLz4KICAgPC9nPgogICA8ZyBjbGFzcz0iYW0td2VhdGhlci1zbm93LTEiIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoyczstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXNub3c7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWR1cmF0aW9uOjJzOy1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tcy1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXNub3c7LW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItc25vdzstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDcsMjgpIiBmaWxsPSJub25lIiBzdHJva2U9IiM1N2EwZWUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+CiAgICAgPGxpbmUgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCw5KSIgeTE9Ii0yLjUiIHkyPSIyLjUiIHN0cm9rZS13aWR0aD0iMS4yIi8+CiAgICAgPGxpbmUgdHJhbnNmb3JtPSJyb3RhdGUoNDUsLTEwLjg2NCw0LjUpIiB5MT0iLTIuNSIgeTI9IjIuNSIvPgogICAgIDxsaW5lIHRyYW5zZm9ybT0icm90YXRlKDkwLC00LjUsNC41KSIgeTE9Ii0yLjUiIHkyPSIyLjUiLz4KICAgICA8bGluZSB0cmFuc2Zvcm09InJvdGF0ZSgxMzUsLTEuODY0LDQuNSkiIHkxPSItMi41IiB5Mj0iMi41Ii8+CiAgICA8L2c+CiAgIDwvZz4KICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItc25vdy0yIiBzdHlsZT0iLW1vei1hbmltYXRpb24tZGVsYXk6MS4yczstbW96LWFuaW1hdGlvbi1kdXJhdGlvbjoyczstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXNub3c7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWRlbGF5OjEuMnM7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjoyczstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zbm93Oy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kZWxheToxLjJzOy13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjJzOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstd2Via2l0LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItc25vdzstd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyIj4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDI4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTdhMGVlIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkxPSItMi41IiB5Mj0iMi41IiBzdHJva2Utd2lkdGg9IjEuMiIvPgogICAgIDxsaW5lIHRyYW5zZm9ybT0icm90YXRlKDQ1LC0xMC44NjQsNC41KSIgeTE9Ii0yLjUiIHkyPSIyLjUiLz4KICAgICA8bGluZSB0cmFuc2Zvcm09InJvdGF0ZSg5MCwtNC41LDQuNSkiIHkxPSItMi41IiB5Mj0iMi41Ii8+CiAgICAgPGxpbmUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1LC0xLjg2NCw0LjUpIiB5MT0iLTIuNSIgeTI9IjIuNSIvPgogICAgPC9nPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K",sleet:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLSAoYykgYW1tYXAuY29tIHwgU1ZHIHdlYXRoZXIgaWNvbnMgLS0+CjwhLS0gTWl4IG9mIFJhaW4gYW5kIFNub3cgfCBDb250cmlidXRlZCBieSBoc29KOTUgb24gR2l0SHViOiBodHRwczovL2dpdGh1Yi5jb20vaHNvajk1IC0tPgo8c3ZnIHdpZHRoPSI1NiIgaGVpZ2h0PSI0OCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPGZpbHRlciBpZD0iYmx1ciIgeD0iLS4yNDY4NCIgeT0iLS4yMzQ1IiB3aWR0aD0iMS40OTM3IiBoZWlnaHQ9IjEuNTcxMiI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZERldmlhdGlvbj0iMyIgLz4KICAgICAgPGZlT2Zmc2V0IGR4PSIwIiBkeT0iNCIgcmVzdWx0PSJvZmZzZXRibHVyIiAvPgogICAgICA8ZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgICA8ZmVGdW5jQSBzbG9wZT0iMC4wNSIgdHlwZT0ibGluZWFyIiAvPgogICAgICA8L2ZlQ29tcG9uZW50VHJhbnNmZXI+CiAgICAgIDxmZU1lcmdlPgogICAgICAgIDxmZU1lcmdlTm9kZSAvPgogICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyIgLz4KICAgICAgPC9mZU1lcmdlPgogICAgPC9maWx0ZXI+CiAgICA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgogICAgICA8IVtDREFUQVsKICAgICAgLyoKKiogU05PVwoqLwogICAgICBAa2V5ZnJhbWVzIGFtLXdlYXRoZXItc25vdyB7CiAgICAgICAgMCUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAuMHB4LCAwKTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLjBweCwgMCk7CiAgICAgICAgfQoKICAgICAgICAzMy4zMyUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMS4ycHgsIDJweCk7CiAgICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjJweCwgMnB4KTsKICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMS4ycHgsIDJweCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMS4ycHgsIDJweCk7CiAgICAgICAgfQoKICAgICAgICA2Ni42NiUgewogICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgxLjRweCwgNHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMS40cHgsIDRweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMS40cHgsIDRweCk7CiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxLjRweCwgNHB4KTsKICAgICAgICAgIG9wYWNpdHk6IDE7CiAgICAgICAgfQoKICAgICAgICAxMDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNnB4LCA2cHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMS42cHgsIDZweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNnB4LCA2cHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNnB4LCA2cHgpOwogICAgICAgICAgb3BhY2l0eTogMDsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLXNub3ctMSB7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93OwogICAgICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdzsKICAgICAgICAtbXMtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItc25vdzsKICAgICAgICBhbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1zbm93OwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7CiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAyczsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICB9CgogICAgICAvKgoqKiBSQUlOCiovCiAgICAgIEBrZXlmcmFtZXMgYW0td2VhdGhlci1yYWluIHsKICAgICAgICAwJSB7CiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDsKICAgICAgICB9CgogICAgICAgIDEwMCUgewogICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMDA7CiAgICAgICAgfQogICAgICB9CgogICAgICAuYW0td2VhdGhlci1yYWluLTEgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgLW1zLWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItcmFpbjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIC1tcy1hbmltYXRpb24tZHVyYXRpb246IDhzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1zLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICAtbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tcy1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQoKICAgICAgLmFtLXdlYXRoZXItcmFpbi0yIHsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgLW1vei1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIC1tcy1hbmltYXRpb24tbmFtZTogYW0td2VhdGhlci1yYWluOwogICAgICAgIGFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLXJhaW47CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMjVzOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICAtbXMtYW5pbWF0aW9uLWRlbGF5OiAwLjI1czsKICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuMjVzOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiA4czsKICAgICAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1kdXJhdGlvbjogOHM7CiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4czsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOwogICAgICB9CgogICAgICAvKgoqKiBDTE9VRFMKKi8KICAgICAgQGtleWZyYW1lcyBhbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgIDAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgNTAlIHsKICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZSgycHgsIDBweCk7CiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMnB4LCAwcHgpOwogICAgICAgIH0KCiAgICAgICAgMTAwJSB7CiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAwcHgpOwogICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgMHB4KTsKICAgICAgICB9CiAgICAgIH0KCiAgICAgIC5hbS13ZWF0aGVyLWNsb3VkLTMgewogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMzsKICAgICAgICAtbW96LWFuaW1hdGlvbi1uYW1lOiBhbS13ZWF0aGVyLWNsb3VkLTM7CiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGFtLXdlYXRoZXItY2xvdWQtMzsKICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246IDNzOwogICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogM3M7CiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7CiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyOwogICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7CiAgICAgICAgLW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTsKICAgICAgfQogICAgICBdXT4KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LC0yKSIgZmlsdGVyPSJ1cmwoI2JsdXIpIj4KICAgIDxnIGNsYXNzPSJhbS13ZWF0aGVyLWNsb3VkLTMiCiAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kdXJhdGlvbjozczstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTM7LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjozczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLWNsb3VkLTM7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMCwtMTEpIgogICAgICAgIGQ9Im00Ny43IDM1LjRjMC00LjYtMy43LTguMi04LjItOC4yLTEgMC0xLjkgMC4yLTIuOCAwLjUtMC4zLTMuNC0zLjEtNi4yLTYuNi02LjItMy43IDAtNi43IDMtNi43IDYuNyAwIDAuOCAwLjIgMS42IDAuNCAyLjMtMC4zLTAuMS0wLjctMC4xLTEtMC4xLTMuNyAwLTYuNyAzLTYuNyA2LjcgMCAzLjYgMi45IDYuNiA2LjUgNi43aDE3LjJjNC40LTAuNSA3LjktNCA3LjktOC40eiIKICAgICAgICBmaWxsPSIjNTdhMGVlIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS4yIiAvPgogICAgPC9nPgogICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItc25vdy0xIgogICAgICBzdHlsZT0iLW1vei1hbmltYXRpb24tZHVyYXRpb246MnM7LW1vei1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy1tb3otYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zbm93Oy1tb3otYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LW1zLWFuaW1hdGlvbi1kdXJhdGlvbjoyczstbXMtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbXMtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1zbm93Oy1tcy1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjoyczstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LXdlYmtpdC1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXNub3c7LXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhciI+CiAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDExLDI4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTdhMGVlIiBzdHJva2UtbGluZWNhcD0icm91bmQiPgogICAgICAgIDxsaW5lIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsOSkiIHkxPSItMi41IiB5Mj0iMi41IiBzdHJva2Utd2lkdGg9IjEuMiIgLz4KICAgICAgICA8bGluZSB0cmFuc2Zvcm09InJvdGF0ZSg0NSwtMTAuODY0LDQuNSkiIHkxPSItMi41IiB5Mj0iMi41IiAvPgogICAgICAgIDxsaW5lIHRyYW5zZm9ybT0icm90YXRlKDkwLC00LjUsNC41KSIgeTE9Ii0yLjUiIHkyPSIyLjUiIC8+CiAgICAgICAgPGxpbmUgdHJhbnNmb3JtPSJyb3RhdGUoMTM1LC0xLjg2NCw0LjUpIiB5MT0iLTIuNSIgeTI9IjIuNSIgLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJyb3RhdGUoMTAsLTE5OC43NCw5OC4wMSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkxYzBmOCIgc3Ryb2tlLWRhc2hhcnJheT0iNCwgNyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogICAgICBzdHJva2Utd2lkdGg9IjIiPgogICAgICA8bGluZSBjbGFzcz0iYW0td2VhdGhlci1yYWluLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMCwxKSIgeTI9IjgiCiAgICAgICAgc3R5bGU9Ii1tb3otYW5pbWF0aW9uLWR1cmF0aW9uOjhzOy1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTstbW96LWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItcmFpbjstbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246bGluZWFyOy1tcy1hbmltYXRpb24tZHVyYXRpb246OHM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1zLWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItcmFpbjstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246OHM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiIC8+CiAgICAgIDxsaW5lIGNsYXNzPSJhbS13ZWF0aGVyLXJhaW4tMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNSwtMSkiIHkyPSI4IgogICAgICAgIHN0eWxlPSItbW96LWFuaW1hdGlvbi1kZWxheTowLjI1czstbW96LWFuaW1hdGlvbi1kdXJhdGlvbjo4czstbW96LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1vei1hbmltYXRpb24tbmFtZTphbS13ZWF0aGVyLXJhaW47LW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOmxpbmVhcjstbXMtYW5pbWF0aW9uLWRlbGF5OjAuMjVzOy1tcy1hbmltYXRpb24tZHVyYXRpb246OHM7LW1zLWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7LW1zLWFuaW1hdGlvbi1uYW1lOmFtLXdlYXRoZXItcmFpbjstbXMtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXI7LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6MC4yNXM7LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246OHM7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlOy13ZWJraXQtYW5pbWF0aW9uLW5hbWU6YW0td2VhdGhlci1yYWluOy13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjpsaW5lYXIiIC8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4=",wind:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImJsdXIiIHg9Ii0uMjQ2ODQiIHk9Ii0uMjcwOTciIHdpZHRoPSIxLjQ5MzciIGhlaWdodD0iMS42OTM5Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIiAvPgogICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiIC8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlIC8+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIiAvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgLTIpIiBmaWx0ZXI9InVybCgjYmx1cikiPgogICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItd2luZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LDEwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTdBMEVFIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgIDxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjE1MCAxMCIgZD0iTTI1LjUgNUE0IDQgMCAxIDEgMjkgMTFIMTAiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwcyIgLz4KICAgICAgPC9wYXRoPgogICAgICA8cGF0aCBzdHJva2UtZGFzaGFycmF5PSIxNDQgMTYiCiAgICAgICAgZD0iTTM5LjUgMTFBNCA0IDAgMSAxIDQzIDE3SDYiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwLjVzIiAvPgogICAgICA8L3BhdGg+CiAgICAgIDxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjE1MCAxMCIKICAgICAgICBkPSJNMjguNSAyOUE0IDQgMCAxIDAgMzIgMjNIMTUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwLjI1cyIgLz4KICAgICAgPC9wYXRoPgogICAgPC9nPgogIDwvZz4KPC9zdmc+","wind-alert":"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxmaWx0ZXIgaWQ9ImJsdXIiIHg9Ii0uMjQ2ODQiIHk9Ii0uMjcwOTciIHdpZHRoPSIxLjQ5MzciIGhlaWdodD0iMS42OTM5Ij4KICAgICAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIiAvPgogICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSI0IiByZXN1bHQ9Im9mZnNldGJsdXIiIC8+CiAgICAgIDxmZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgIDxmZUZ1bmNBIHNsb3BlPSIwLjA1IiB0eXBlPSJsaW5lYXIiIC8+CiAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj4KICAgICAgPGZlTWVyZ2U+CiAgICAgICAgPGZlTWVyZ2VOb2RlIC8+CiAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIiAvPgogICAgICA8L2ZlTWVyZ2U+CiAgICA8L2ZpbHRlcj4KICA8L2RlZnM+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgLTIpIiBmaWx0ZXI9InVybCgjYmx1cikiPgogICAgPGcgY2xhc3M9ImFtLXdlYXRoZXItd2luZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE2LDEwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTdBMEVFIiBzdHJva2UtbGluZWNhcD0icm91bmQiCiAgICAgIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgIDxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjE1MCAxMCIgZD0iTTI1LjUgNUE0IDQgMCAxIDEgMjkgMTFIMTAiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwcyIgLz4KICAgICAgPC9wYXRoPgogICAgICA8cGF0aCBzdHJva2UtZGFzaGFycmF5PSIxNDQgMTYiCiAgICAgICAgZD0iTTM5LjUgMTFBNCA0IDAgMSAxIDQzIDE3SDYiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwLjVzIiAvPgogICAgICA8L3BhdGg+CiAgICAgIDxwYXRoIHN0cm9rZS1kYXNoYXJyYXk9IjE1MCAxMCIKICAgICAgICBkPSJNMjguNSAyOUE0IDQgMCAxIDAgMzIgMjNIMTUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InN0cm9rZS1kYXNob2Zmc2V0IiBkdXI9IjNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIwOyAxNjAiIGJlZ2luPSIwLjI1cyIgLz4KICAgICAgPC9wYXRoPgogICAgPC9nPgogIDwvZz4KPC9zdmc+"},pI=new Set(["","unknown","unavailable"]),zI=["temperature","precipitation_probability"],LI=new Set(["meteocons","realistic"]),wI={temp:"temperature",temperature:"temperature",rain_chance:"precipitation_probability",precipitation_probability:"precipitation_probability",precip_probability:"precipitation_probability",probability:"precipitation_probability",pop:"precipitation_probability",rain:"precipitation",precipitation:"precipitation",humidity:"humidity",hum:"humidity",wind:"wind_speed",wind_speed:"wind_speed",gust:"wind_gust_speed",wind_gust:"wind_gust_speed",wind_gust_speed:"wind_gust_speed",uv:"uv_index",uv_index:"uv_index",cloud:"cloud_coverage",clouds:"cloud_coverage",cloud_coverage:"cloud_coverage"},YI={"clear-night":"clear-night",cloudy:"cloudy",exceptional:"weather-alarm",fog:"fog",hail:"hail",lightning:"thunderstorms","lightning-rainy":"thunderstorms-rain",partlycloudy:"partly-cloudy-day",pouring:"rain",rainy:"rain",snowy:"snow","snowy-rainy":"sleet",sunny:"clear-day",windy:"wind","windy-variant":"wind-alert"},ZI=new Map,TI=new Map;function vI(i){return i<=0?"#3aa7ff":i<=8?"#50c5d8":i<=15?"#9bd57b":i<=22?"#ffd34a":i<=28?"#ff9d24":"#ff5d38"}function OI(i,I){var g;if(I&&(null==i?void 0:i.hass))return null===(g=i.hass.states)||void 0===g?void 0:g[I]}function xI(i){const I=void 0===(null==i?void 0:i.state)||null===(null==i?void 0:i.state)?"":String(i.state);return pI.has(I.toLowerCase())?"":I}function GI(i,I){const g=xI(OI(i,I));if(!g)return;const t=Number(g);return Number.isFinite(t)?t:void 0}function SI(i,I,g=!1){if(null==i||""===i)return"—";const t=Number(i);return Number.isFinite(t)?g&&Math.abs(t)>=1e3?`${(t/1e3).toFixed(1)}k`:t.toFixed(I):String(i)}function XI(i,I){var g;const t=OI(i,I),e=xI(t);if(!e)return"—";const a=(null===(g=null==t?void 0:t.attributes)||void 0===g?void 0:g.unit_of_measurement)||"",A=Number(e);if(!Number.isFinite(A))return a?`${e} ${a}`:e;const C=SI(A,Number.isInteger(A)?0:1);return a?`${C} ${a}`:C}function RI(i,I){const g=GI(i,I);return void 0===g?"—°":`${g.toFixed(1)}°`}function kI(i,I,g){const t=Number(i);if(Number.isFinite(t)&&!(t<=0))return Math.max(I,Math.min(g,t))}function FI(i){if(!i)return"Weather";const I={"clear-night":"Clear night",partlycloudy:"Partly cloudy","lightning-rainy":"Storm rain","snowy-rainy":"Sleet","windy-variant":"Windy"};return I[i]?I[i]:i.replace(/[-_]/g," ").replace(/\b\w/g,(i=>i.toUpperCase()))}function HI(i){return(i||"unknown").replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function UI(i){return YI[i]||"partly-cloudy-day"}function BI(i){const I=String(i.icon_set||"").trim().toLowerCase();return LI.has(I)?I:"meteocons"}function QI(i,I){return"realistic"===i?WI[I]||WI["partly-cloudy-day"]:jI[I]}function VI(i,I,g,t,e="img"){const a=QI(i,I);if("inline"===e){const e=function(i,I){const g="realistic"===i?TI:ZI,t=g.get(I);if(void 0!==t)return t;const[,e]=String(QI(i,I)||"").split("base64,");let a="";if(e&&"function"==typeof atob)try{a=atob(e)}catch(i){a=""}return g.set(I,a),a}(i,I);return e?R`
        <span class=${g} role="img" aria-label=${t}>
          ${DI(e)}
        </span>
      `:R`
      <img
        class=${g}
        src=${a}
        alt=${t}
        draggable="false"
      />
    `}return R`
    <img
      class=${g}
      src=${a}
      alt=${t}
      draggable="false"
    />
  `}function JI(i,I){return i&&i.includes(":")?i:I}function _I(i,I){const g=function(i,I){const g=Number.isFinite(Number(I.rain_rate_threshold))?Number(I.rain_rate_threshold):0,t=GI(i,I.rain_rate_sensor);return void 0!==t?t>g:"on"===xI(OI(i,I.rain_state_sensor)).toLowerCase()}(i,I),t=I.name||"Rain",e=I.rain_state_sensor||I.rain_rate_sensor,a=g?JI(I.icon_active||I.icon,"mdi:weather-rainy"):JI(I.icon_inactive||I.icon,"mdi:water-off-outline");let A;if(g){const g=function(i,I,g,t=!1){var e;const a=OI(i,I),A=xI(a);if(!A)return"—";const C=(null===(e=null==a?void 0:a.attributes)||void 0===e?void 0:e.unit_of_measurement)||"",c=SI(A,g,t);return C?`${c} ${C}`:c}(i,I.rain_rate_sensor,1);A="—"===g?"Raining":g}else A="No rain";return{label:t,value:A,entity:e,stateEntity:e,active:g,mdi:a}}function fI(i){return Array.isArray(i)?i.filter((i=>!!i&&"object"==typeof i)).map((i=>({condition:"string"==typeof i.condition?i.condition:void 0,datetime:"string"==typeof i.datetime?i.datetime:void 0,temperature:i.temperature,precipitation_probability:i.precipitation_probability,precipitation:i.precipitation,humidity:i.humidity,wind_speed:i.wind_speed,wind_gust_speed:i.wind_gust_speed,uv_index:i.uv_index,cloud_coverage:i.cloud_coverage,templow:i.templow}))):[]}function EI(i,I){if(!I.datetime)return"";const g=new Date(I.datetime);if(Number.isNaN(g.getTime()))return"";const{locale:t,options:e}=function(i){var I;const g=null===(I=null==i?void 0:i.hass)||void 0===I?void 0:I.locale,t=String((null==g?void 0:g.time_format)||"").toLowerCase(),e={hour:"2-digit",minute:"2-digit"};return"12"===t&&(e.hour12=!0),"24"===t&&(e.hour12=!1),{locale:null==g?void 0:g.language,options:e}}(i);return new Intl.DateTimeFormat(t,e).format(g)}function PI(i,I){const g=eg(i,I.datetime),t=EI(i,I);return g?t?`${g} ${t}`:g:t}function KI(i,I){const g=Number(i[I]);return Number.isFinite(g)?g:void 0}function $I(i,I,g){const t=i.reduce(((i,g,t)=>{const e=KI(g,I);if(void 0===e)return i;const a=function(i){if(!i.datetime)return;const I=new Date(i.datetime).getTime();return Number.isFinite(I)?I:void 0}(g),A={item:g,index:t,value:e};return void 0!==a&&(A.timestamp=a),i.push(A),i}),[]);if(!t.length)return{points:[],min:0,max:1};const e=t.every((i=>Number.isFinite(i.timestamp))),a=e?[...t].sort(((i,I)=>Number(i.timestamp)-Number(I.timestamp))):t,A=e?Number(a[0].timestamp):0,C=(e?Number(a[a.length-1].timestamp):0)-A,c=t.map((i=>i.value)),{min:l,max:o}=function(i,I){if("precipitation_probability"===i)return{min:0,max:100};let g=Math.min(...I),t=Math.max(...I);if("temperature"===i)g=5*Math.floor((g-2)/5),t=5*Math.ceil((t+2)/5);else{const i=Math.max(.18*(t-g),1);g=Math.max(0,g-i),t+=i}return t<=g&&(t=g+1),{min:g,max:t}}(I,c),n=g.width-g.left-g.right,d=g.height-g.top-g.bottom,s=a.map(((i,I)=>{const t=e&&C>0?g.left+(Number(i.timestamp)-A)/C*n:1===a.length?g.left+n/2:g.left+I/(a.length-1)*n,c=g.top+(o-i.value)/(o-l)*d;return Object.assign(Object.assign({},i),{x:t,y:c})}));return{points:s,min:l,max:o}}function qI(i){return i<=0?[]:Array.from(new Set([0,Math.floor((i-1)/3),Math.floor(2*(i-1)/3),i-1])).filter((I=>I>=0&&I<i))}function ig(i){return i.replace(/[^a-z0-9_-]/gi,"-").toLowerCase()}function Ig(i){if(!i.length)return"";if(1===i.length)return`M ${i[0].x.toFixed(2)} ${i[0].y.toFixed(2)}`;let I=`M ${i[0].x.toFixed(2)} ${i[0].y.toFixed(2)}`;for(let g=0;g<i.length-1;g+=1){const t=i[g],e=i[g+1],a=i[g-1]||t,A=i[g+2]||e,C=t.x+(e.x-a.x)/6,c=t.y+(e.y-a.y)/6,l=e.x-(A.x-t.x)/6,o=e.y-(A.y-t.y)/6;I+=` C ${C.toFixed(2)} ${c.toFixed(2)}, ${l.toFixed(2)} ${o.toFixed(2)}, ${e.x.toFixed(2)} ${e.y.toFixed(2)}`}return I}function gg(i,I){if(!i.length)return"";const g=i[0],t=i[i.length-1];return`${Ig(i)} L ${t.x.toFixed(2)} ${I.toFixed(2)} L ${g.x.toFixed(2)} ${I.toFixed(2)} Z`}function tg(i){if(!i)return"";const I=new Date(i);if(Number.isNaN(I.getTime()))return"";return`${I.getFullYear()}-${`${I.getMonth()+1}`.padStart(2,"0")}-${`${I.getDate()}`.padStart(2,"0")}`}function eg(i,I){var g,t;if(!I)return"";const e=new Date(I);return Number.isNaN(e.getTime())?"":new Intl.DateTimeFormat(null===(t=null===(g=null==i?void 0:i.hass)||void 0===g?void 0:g.locale)||void 0===t?void 0:t.language,{day:"numeric",month:"long"}).format(e)}function ag(i,I){const g=Number(i[I]);return Number.isFinite(g)?g:void 0}function Ag(i,I,g){return Math.max(0,Math.min(100,(i-I)/(g-I)*100))}function Cg(i){return kI(i.graph_height,82,260)||118}function cg(i,I,g,t,e){const a=g.slice(0,7);if(!a.length)return H;const A=function(i){const I=new Map;return i.forEach(((i,g)=>{const t=tg(i.datetime),e=KI(i,"temperature");if(!t||void 0===e)return;const a={item:i,value:e,x:0,y:0,index:g},A=I.get(t)||{};(!A.low||e<A.low.value)&&(A.low=a),(!A.high||e>A.high.value)&&(A.high=a),I.set(t,A)})),I}(t),{min:C,max:c}=function(i,I){const g=[];if(i.forEach((i=>{const I=ag(i,"templow"),t=ag(i,"temperature");void 0!==I&&g.push(I),void 0!==t&&g.push(t)})),I.forEach((i=>{const I=KI(i,"temperature");void 0!==I&&g.push(I)})),!g.length)return{min:0,max:1};let t=5*Math.floor((Math.min(...g)-2)/5),e=5*Math.ceil((Math.max(...g)+2)/5);return e<=t&&(e=t+1),{min:t,max:e}}(a,t),l=tg((new Date).toISOString()),o=function(i,I){return GI(i,I.temp_sensor)}(i,I);return R`
    <section class="weather-daily-forecast">
      <div class="weather-daily-forecast-heading">
        <span>Daily Forecast</span>
        <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
      </div>
      ${a.map((I=>{var g,t,a,n;const d=tg(I.datetime),s=A.get(d),M=null!==(g=ag(I,"templow"))&&void 0!==g?g:null===(t=null==s?void 0:s.low)||void 0===t?void 0:t.value,r=null!==(a=ag(I,"temperature"))&&void 0!==a?a:null===(n=null==s?void 0:s.high)||void 0===n?void 0:n.value;if(void 0===M||void 0===r)return H;const u=Ag(M,C,c),b=Ag(r,C,c),N=Math.max(4,b-u),h=String(I.condition||""),m=Number(I.precipitation_probability),y=Number.isFinite(m)?`Rain ${Math.round(m)}%`:"",D=d===l&&void 0!==o?Ag(o,C,c):void 0;return R`
          <div class="weather-daily-row">
            <div class="weather-daily-day">
              <span class="weather-daily-day-name">${function(i,I){var g,t;if(!I)return"";const e=new Date(I);if(Number.isNaN(e.getTime()))return"";const a=tg((new Date).toISOString()),A=new Date;A.setDate(A.getDate()+1);const C=tg(I);return C===a?"Today":C===tg(A.toISOString())?"Tomorrow":new Intl.DateTimeFormat(null===(t=null===(g=null==i?void 0:i.hass)||void 0===g?void 0:g.locale)||void 0===t?void 0:t.language,{weekday:"long"}).format(e)}(i,I.datetime)}</span>
              <span class="weather-daily-date">${eg(i,I.datetime)}</span>
            </div>
            <div class="weather-daily-condition">
              ${VI(e,UI(h),`weather-daily-icon weather-condition-${HI(h)}`,FI(h))}
              ${y?R`<span title="Chance of precipitation">${y}</span>`:H}
            </div>
            <div class="weather-daily-low">
              <span>${M.toFixed(0)}°</span>
              ${(null==s?void 0:s.low)?R`<small>${EI(i,s.low.item)}</small>`:H}
            </div>
            <div class="weather-daily-range">
              <div class="weather-daily-track"></div>
              <div
                class="weather-daily-segment"
                style=${`left:${u.toFixed(1)}%;width:${N.toFixed(1)}%;background:linear-gradient(90deg, ${vI(M)}, ${vI(r)});`}
              ></div>
              ${void 0!==D?R`
                <span class="weather-daily-current-dot" style=${`left:${D.toFixed(1)}%;`}></span>
              `:H}
            </div>
            <div class="weather-daily-high">
              <span>${r.toFixed(0)}°</span>
              ${(null==s?void 0:s.high)?R`<small>${EI(i,s.high.item)}</small>`:H}
            </div>
          </div>
        `}))}
    </section>
  `}function lg(i,I){if(!I.length)return"";const g=I[0],t=I.slice(0,12).reduce(((i,I)=>{const g=Number(i.precipitation_probability)||0,t=Number(I.precipitation_probability)||0,e=Number(i.precipitation)||0,a=Number(I.precipitation)||0;return a>e||a===e&&t>g?I:i}),g),e=Number(t.precipitation_probability)||0,a=Number(t.precipitation)||0;if(e>=25||a>0){const I=t===g,A=EI(i,t);let C;C=e>=80||a>=2?"Rain likely":e>=50||a>=.5?"Showers possible":"Slight chance of rain";const c=I?"shortly":A?`around ${A}`:"";return`${c?`${C} ${c}`:C} (${e>0?`${Math.round(e)}% chance`:`${a.toFixed(1)} mm`})`}return`${FI(String(g.condition||""))}, ${A=g,`${SI(A.temperature,0)}°`}`;var A}function og(i){i.stopPropagation()}function ng(i,I,g){I.preventDefault(),I.stopPropagation(),g&&"function"==typeof(null==i?void 0:i._openMoreInfo)&&i._openMoreInfo(g)}function dg(i,I,g){"Enter"!==I.key&&" "!==I.key||ng(i,I,g)}function sg(i,I,g,t,e){if(I.stopPropagation(),!t.length||"function"!=typeof(null==i?void 0:i._setWeatherForecastGraphSelection))return;const a=I.currentTarget.getBoundingClientRect();if(!a.width)return;const A=(I.clientX-a.left)/a.width,C=Math.max(0,Math.min(e.width,A*e.width)),c=t.reduce(((i,I,g)=>{const e=t[i];return Math.abs(I.x-C)<Math.abs(e.x-C)?g:i}),0);g.forEach((I=>i._setWeatherForecastGraphSelection(I,c)))}function Mg(i,I,g){const t="function"==typeof(null==i?void 0:i._getWeatherForecastGraphSelection)?i._getWeatherForecastGraphSelection(I):void 0,e=function(i){const I=Date.now();let g=0,t=Number.POSITIVE_INFINITY;return i.forEach(((i,e)=>{const a=i.item.datetime?new Date(i.item.datetime).getTime():Number.NaN;if(!Number.isFinite(a))return;const A=Math.abs(a-I);A<t&&(t=A,g=e)})),g}(g);return g[Math.max(0,Math.min(g.length-1,Number.isFinite(Number(t))?Number(t):e))]||g[0]}function rg(i,I,g,t){const e=I.height-I.bottom;return[...[0,1,2].map((i=>{const g=I.top+i*((e-I.top)/2);return k`<line class="weather-conditions-grid-line" x1=${I.left} x2=${I.width-I.right} y1=${g} y2=${g}></line>`})),...g.map((g=>{const a=t[g],A=0===g?" weather-conditions-time-label-start":g===t.length-1?" weather-conditions-time-label-end":"";return k`
        <line class="weather-conditions-time-line" x1=${a.x} x2=${a.x} y1=${I.top} y2=${e}></line>
        <text class=${`weather-conditions-time-label${A}`} x=${a.x} y=${I.height-6}>${PI(i,a.item)}</text>
      `}))]}function ug(i,I,g,t,e){const a={width:360,height:Cg(I),left:14,right:30,top:15,bottom:24},{points:A,min:C,max:c}=$I(g,"temperature",a);if(A.length<2)return H;const l=a.height-a.bottom,o=Mg(i,t,A),n=A.reduce(((i,I)=>I.value<i.value?I:i),A[0]),d=A.reduce(((i,I)=>I.value>i.value?I:i),A[0]),s=qI(A.length),M=function(i,I){if(I<=0)return[];if(i.length<=I)return i;if(1===I)return[i[0]];const g=i.every((i=>Number.isFinite(i.timestamp))),t=g?Number(i[0].timestamp):0,e=(g?Number(i[i.length-1].timestamp):0)-t,a=[];let A=-1;for(let C=0;C<I;C+=1){const c=C/(I-1),l=t+e*c,o=g&&e>0?i.reduce(((I,g,t)=>{const e=i[I];return Math.abs(Number(g.timestamp)-l)<Math.abs(Number(e.timestamp)-l)?t:I}),0):Math.round(c*(i.length-1));o!==A&&(a.push(i[o]),A=o)}return a}(A,function(i){const I=Number(i.temperature_icon_count);return Number.isFinite(I)?Math.max(0,Math.min(72,Math.floor(I))):8}(I)),r=Ig(A),u=gg(A,l),b=ig(t),N=`weather-conditions-temp-line-${b}`,h=`weather-conditions-temp-fill-${b}`,m=(C+c)/2,y=BI(I);return R`
    <section class="weather-conditions-card weather-conditions-temp">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Temperature</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${PI(i,o.item)}</span>
          <strong>${o.value.toFixed(0)}°</strong>
        </div>
      </div>

      ${M.length?R`
        <div class="weather-conditions-icons">
          ${M.map((i=>{const I=String(i.item.condition||""),g=i.x/a.width*100;return R`
              <span class="weather-conditions-icon-slot" style=${`left:${g.toFixed(2)}%;`}>
                ${VI(y,UI(I),`weather-conditions-icon weather-condition-${HI(I)}`,FI(I))}
              </span>
            `}))}
        </div>
      `:H}

      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${a.width} ${a.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Temperature forecast graph"
          @pointerdown=${og}
          @pointermove=${I=>sg(i,I,e,A,a)}
          @click=${I=>sg(i,I,e,A,a)}
        >
          <defs>
            <linearGradient id=${h} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(255, 179, 28, 0.66)"></stop>
              <stop offset="52%" stop-color="rgba(255, 179, 28, 0.24)"></stop>
              <stop offset="100%" stop-color="rgba(47, 185, 221, 0.38)"></stop>
            </linearGradient>
            <linearGradient id=${N} x1=${a.left} x2=${a.width-a.right} y1="0" y2="0" gradientUnits="userSpaceOnUse">
              ${A.map(((i,I)=>k`
                <stop offset=${I/(A.length-1)*100+"%"} stop-color=${vI(i.value)}></stop>
              `))}
            </linearGradient>
          </defs>
          ${rg(i,a,s,A)}
          <path class="weather-conditions-area" d=${u} fill=${`url(#${h})`}></path>
          <path class="weather-conditions-line-shadow" d=${r}></path>
          <path class="weather-conditions-temp-line" d=${r} stroke=${`url(#${N})`}></path>
          <text class="weather-conditions-extreme" x=${n.x} y=${Math.max(12,n.y-9)}>L</text>
          <text class="weather-conditions-extreme" x=${d.x} y=${Math.max(12,d.y-9)}>H</text>
          <line class="weather-conditions-selected-line" x1=${o.x} x2=${o.x} y1=${a.top} y2=${l}></line>
          <text class="weather-conditions-axis" x=${a.width-5} y=${a.top+3}>${c.toFixed(0)}°</text>
          <text class="weather-conditions-axis" x=${a.width-5} y=${a.top+(l-a.top)/2}>${m.toFixed(0)}°</text>
          <text class="weather-conditions-axis" x=${a.width-5} y=${l}>${C.toFixed(0)}°</text>
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${(o.x/a.width*100).toFixed(2)}%;top:${(o.y/a.height*100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `}function bg(i,I,g,t,e,a){if(g.length<2)return H;const A=`${e}-temperature`,C=`${e}-precipitation`,c=a?[A,C]:null,l=t.includes("temperature")?ug(i,I,g,A,c||[A]):H,o=t.includes("precipitation_probability")?function(i,I,g,t,e){const a={width:360,height:Cg(I),left:14,right:30,top:10,bottom:22},{points:A}=$I(g,"precipitation_probability",a);if(A.length<2)return H;const C=a.height-a.bottom,c=Mg(i,t,A),l=A.reduce(((i,I)=>I.value>i.value?I:i),A[0]),o=qI(A.length),n=Ig(A),d=gg(A,C),s=`weather-conditions-rain-fill-${ig(t)}`;return R`
    <section class="weather-conditions-card weather-conditions-rain">
      <div class="weather-conditions-head">
        <div class="weather-conditions-title">
          <span>Chance of Precipitation</span>
          <span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>
        </div>
        <div class="weather-conditions-selected">
          <span>${PI(i,c.item)}</span>
          <strong>${Math.round(c.value)}%</strong>
        </div>
      </div>
      <div class="weather-conditions-subtitle">Today's chance: ${Math.round(l.value)}%</div>
      <div class="weather-conditions-chart-frame">
        <svg
          class="weather-conditions-chart"
          viewBox=${`0 0 ${a.width} ${a.height}`}
          preserveAspectRatio="none"
          role="img"
          aria-label="Chance of precipitation forecast graph"
          @pointerdown=${og}
          @pointermove=${I=>sg(i,I,e,A,a)}
          @click=${I=>sg(i,I,e,A,a)}
        >
          <defs>
            <linearGradient id=${s} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="rgba(56, 199, 243, 0.48)"></stop>
              <stop offset="100%" stop-color="rgba(56, 199, 243, 0.10)"></stop>
            </linearGradient>
          </defs>
          ${rg(i,a,o,A)}
          <path class="weather-conditions-rain-area" d=${d} fill=${`url(#${s})`}></path>
          <path class="weather-conditions-line-shadow" d=${n}></path>
          <path class="weather-conditions-rain-line" d=${n}></path>
          <line class="weather-conditions-selected-line" x1=${c.x} x2=${c.x} y1=${a.top} y2=${C}></line>
          <text class="weather-conditions-axis" x=${a.width-5} y=${a.top+4}>100%</text>
          <text class="weather-conditions-axis" x=${a.width-5} y=${a.top+(C-a.top)/2}>50%</text>
          <text class="weather-conditions-axis" x=${a.width-5} y=${C}>0%</text>
        </svg>
        <span
          class="weather-conditions-selected-dot"
          style=${`left:${(c.x/a.width*100).toFixed(2)}%;top:${(c.y/a.height*100).toFixed(2)}%;`}
        ></span>
      </div>
    </section>
  `}(i,I,g,C,c||[C]):H;return l===H&&o===H?H:R`
    <div class="weather-conditions-panel">
      ${l}
      ${o}
    </div>
  `}function Ng(i,I){var g,t;const e=xI(OI(i,I.entity)).toLowerCase(),a=I.name||"Weather",A=RI(i,I.temp_sensor),C=function(i,I){const g=GI(i,I);return void 0===g?"—%":`${g.toFixed(0)}%`}(i,I.humidity_sensor),c=RI(i,I.feels_like_sensor),l=function(i,I){const g=Array.isArray(I.metrics)&&I.metrics.length?I.metrics:function(i){const I=[{entity:i.wind_speed_sensor,name:"Wind"},{entity:i.wind_gust_sensor,name:"Gust"},{entity:i.temp_min_24h_sensor,name:"24h Min"},{entity:i.temp_max_24h_sensor,name:"24h Max"},{entity:i.uv_sensor,name:"UV"},{entity:i.solar_lux_sensor,name:"Solar"},{entity:i.pressure_sensor,name:"Pressure"}].filter((i=>i.entity));return(i.rain_state_sensor||i.rain_rate_sensor)&&I.splice(4,0,{type:"rain",name:"Rain",rain_state_sensor:i.rain_state_sensor,rain_rate_sensor:i.rain_rate_sensor,rain_rate_threshold:i.rain_rate_threshold}),I}(I);return g.filter((i=>i&&("rain"===i.type?i.rain_state_sensor||i.rain_rate_sensor:i.entity))).map((I=>{var g;if("rain"===I.type)return _I(i,I);const t=OI(i,I.entity);return{label:I.name||(null===(g=null==t?void 0:t.attributes)||void 0===g?void 0:g.friendly_name)||I.entity||"",value:XI(i,I.entity),entity:I.entity,mdi:I.icon||void 0,stateEntity:I.entity}}))}(i,I),o=!1===I.show_forecast?[]:fI(I.forecast),n=!1===I.show_forecast?[]:fI(I.daily_forecast),d=Number(I.forecast_slots),s=Number.isFinite(d)&&d>0?Math.min(Math.floor(d),72):8,M=function(i){const I=Array.isArray(i)?i:"string"==typeof i?i.split(","):zI,g=[];return I.forEach((i=>{const I=wI[String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_")];I&&!g.includes(I)&&g.push(I)})),g.length?g:zI}(I.forecast_fields),r=BI(I),u=o.slice(0,s),b=lg(i,o),N=String((null===(g=o[0])||void 0===g?void 0:g.condition)||e||"").toLowerCase(),h=N||e,m=`weather-icon weather-condition-${HI(h)}`,y=b||FI(N||e),D=R`<span class="weather-source-badge" title="Forecast data" aria-label="Forecast data"></span>`,j=I.forecast_graph_key||`weather-${I.entity||a}`,W=!1!==I.sync_graphs,p=bg(i,I,u,M,j,W),z=cg(i,I,n,o,r),L=Array.isArray(I.chips)?I.chips:[],w=kI(null!==(t=I.temp_size)&&void 0!==t?t:I.temperature_size,18,56),Y=kI(I.icon_size,28,160),Z=kI(I.graph_height,82,260),T=Number(I.icon_offset_x),v=Number(I.icon_offset_y),O=kI(I.conditions_icon_size,8,48),x=kI(I.daily_icon_size,8,48),G=Number(I.metric_columns),S=Number.isFinite(G)&&G>0?Math.max(1,Math.min(4,Math.round(G))):3,X=function(i,I){const g=Number(I.stale_minutes);if(!Number.isFinite(g)||g<=0)return!1;const t=[I.entity,I.temp_sensor,I.humidity_sensor,I.feels_like_sensor].filter(Boolean);let e=0;return t.forEach((I=>{const g=OI(i,I),t=(null==g?void 0:g.last_updated)?Date.parse(g.last_updated):NaN;Number.isFinite(t)&&(e=Math.max(e,t))})),!!e&&Date.now()-e>6e4*g}(i,I),k=[w?`--weather-temp-size:${w}px;`:"",Y?`--weather-icon-size:${Y}px;--weather-icon-bg-size:${Y+16}px;`:"",Number.isFinite(T)?`--weather-icon-x:${T}px;`:"",Number.isFinite(v)?`--weather-icon-y:${v}px;`:"",O?`--weather-conditions-icon-size:${O}px;`:"",x?`--weather-daily-icon-size:${x}px;`:"",Z?`--weather-graph-height:${Z}px;`:"",`--weather-metric-columns:${S};`].filter(Boolean).join("");return R`
    <div class=${"tile-wrap weather-tile-wrap"+(X?" weather-tile-stale":"")} style=${k}>
      <div class="weather-tile">
        <div class="weather-content">
          <div class="weather-top">
            <div class="weather-heading">
              <div
                class="weather-headline-row weather-clickable"
                role="button"
                tabindex="0"
                aria-label=${`Open ${a} weather forecast details`}
                @pointerdown=${og}
                @pointerup=${og}
                @click=${g=>ng(i,g,I.entity)}
                @keyup=${g=>dg(i,g,I.entity)}
              >
                <div class="weather-name">${y}</div>
                ${o.length?D:H}
              </div>
              <div class="weather-primary">
                <span
                  class="weather-temp weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor temperature details"
                  @pointerdown=${og}
                  @pointerup=${og}
                  @click=${g=>ng(i,g,I.temp_sensor)}
                  @keyup=${g=>dg(i,g,I.temp_sensor)}
                >${A}</span>
                <span
                  class="weather-humidity weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label="Open outdoor humidity details"
                  @pointerdown=${og}
                  @pointerup=${og}
                  @click=${g=>ng(i,g,I.humidity_sensor)}
                  @keyup=${g=>dg(i,g,I.humidity_sensor)}
                >${C}</span>
              </div>
              <div
                class="weather-feels weather-clickable"
                role="button"
                tabindex="0"
                aria-label="Open feels like temperature details"
                @pointerdown=${og}
                @pointerup=${og}
                @click=${g=>ng(i,g,I.feels_like_sensor)}
                @keyup=${g=>dg(i,g,I.feels_like_sensor)}
              >Feels like ${c}</div>
            </div>
            <div class="weather-icon-wrap" aria-hidden="true">
              ${I.icon?R`<ha-icon class=${m} .icon=${I.icon}></ha-icon>`:VI(r,UI(h),m,FI(h),"inline")}
            </div>
          </div>

          <div class="weather-grid">
            ${l.map((I=>R`
              <div
                class=${"weather-metric weather-clickable"+(I.active?" active":"")}
                title=${I.entity||I.label}
                role="button"
                tabindex="0"
                aria-label=${`Open ${I.label} details`}
                @pointerdown=${og}
                @pointerup=${og}
                @click=${g=>ng(i,g,I.entity)}
                @keyup=${g=>dg(i,g,I.entity)}
              >
                ${I.mdi?R`<ha-icon class="weather-metric-icon" .icon=${I.mdi}></ha-icon>`:I.icon?VI("meteocons",I.icon,"weather-metric-icon",I.label):function(i,I){const g=OI(i,I.stateEntity);return(null==i?void 0:i.hass)&&g?R`<ha-state-icon class="weather-metric-icon" .hass=${i.hass} .stateObj=${g}></ha-state-icon>`:R`<ha-icon class="weather-metric-icon" icon="mdi:gauge"></ha-icon>`}(i,I)}
                <span class="weather-metric-label">${I.label}</span>
                <span class="weather-metric-value">${I.value}</span>
              </div>
            `))}
          </div>

          ${p}
          ${z}
        </div>

        ${L.length?R`<div class="weather-chips-bottom-right">
              ${L.map((I=>R`
                <div
                  class="weather-chip-hit weather-clickable"
                  role="button"
                  tabindex="0"
                  aria-label=${`Open ${(null==I?void 0:I.entity)||"chip"} details`}
                  @pointerdown=${og}
                  @pointerup=${og}
                  @click=${g=>ng(i,g,(null==I?void 0:I.entity)||(null==I?void 0:I.tap_entity))}
                  @keyup=${g=>dg(i,g,(null==I?void 0:I.entity)||(null==I?void 0:I.tap_entity))}
                >
                  ${sI(i,I)}
                </div>
              `))}
            </div>`:H}
      </div>
    </div>
  `}const hg=(...i)=>i.filter(Boolean).join(" ");function mg(i,I){return I&&I.length?R`${I.map(((I,g)=>function(i,I,g){const t=I,e=Array.isArray(I)?I:Array.isArray(null==t?void 0:t.row)?t.row:[];let a=Array.isArray(null==t?void 0:t.cards)?t.cards:Array.isArray(null==t?void 0:t.extra_cards)?t.extra_cards:[];if(!Array.isArray(a)||!a.length){const i=(null==t?void 0:t.card)||(null==t?void 0:t.extra_card);i&&"object"==typeof i&&(a=[i])}const A=Math.max(1,e.length||1),C=Array.isArray(a)&&a.length&&"function"==typeof(null==i?void 0:i._renderEmbeddedRowCard)?R`<div class="switch-row-cards">
        ${a.map(((I,t)=>i._renderEmbeddedRowCard(I,`switch-row-${g}-card-${t}`)))}
      </div>`:H;return R`
    <div class="switch-row-wrap">
      <div class="switch-row" style=${`--cols:${A}`}>${e.map((I=>function(i,I){var g,t,e,a,A,C,c;const l="string"==typeof(null==I?void 0:I.entity)?I.entity:"",o=(null==I?void 0:I.icon)||"",n=(null==I?void 0:I.name)||"",d=(null===(a=null===(e=null===(t=null===(g=null==i?void 0:i.hass)||void 0===g?void 0:g.states)||void 0===t?void 0:t[l])||void 0===e?void 0:e.attributes)||void 0===a?void 0:a.friendly_name)||"",s=n||d||l,M=String((null==I?void 0:I.type)||"switch").toLowerCase(),r="smart_plug"===M,u="lock"===M||l.startsWith("lock."),b="function"==typeof(null==i?void 0:i._isSwitchActive)?i._isSwitchActive(l,M):u?"unlocked"===((null===(c=null===(C=null===(A=null==i?void 0:i.hass)||void 0===A?void 0:A.states)||void 0===C?void 0:C[l])||void 0===c?void 0:c.state)||"").toLowerCase():"function"==typeof(null==i?void 0:i._isOn)&&i._isOn(l),N=(null==I?void 0:I.icon_size)||(null==I?void 0:I["icon-size"]),h=(null==I?void 0:I.font_weight)||(null==I?void 0:I["font-weight"]),m=(null==I?void 0:I.font_size)||(null==I?void 0:I["font-size"]),y=(null==I?void 0:I.icon_active)||(null==I?void 0:I.icon_on)||(null==I?void 0:I["icon-active"])||(null==I?void 0:I["icon-on"]),D=(null==I?void 0:I.icon_inactive)||(null==I?void 0:I.icon_off)||(null==I?void 0:I["icon-inactive"])||(null==I?void 0:I["icon-off"]),j=b?y||o||D:D||o,W=i=>{if(null==i||""===i)return"";const I=String(i).trim();return I?/^-?\d+(\.\d+)?$/.test(I)?`${I}px`:I:""},p=W(N),z=W(m),L=p?`--switch-icon-size:${p};width:${p};height:${p};--mdc-icon-size:${p};`:"",w=`${h?`font-weight:${h};`:""}${z?`font-size:${z};`:""}`,Y=`${p?`--switch-icon-size:${p};`:""}${h?`font-weight:${h};`:""}${z?`--chip-text-font-size:${z};font-size:${z};`:""}`,Z="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),T="undefined"!=typeof customElements&&!!customElements.get("ha-control-button"),v=r?"smart":u?"lock":"",O=b?"on":"off",x=hg("switch-chip",v,O),G=hg("switch-icon",v,O),S=hg("name","switch-name",v,O),X="function"==typeof(null==i?void 0:i._resolveSwitchTemplates)?i._resolveSwitchTemplates(I):[],k=Array.isArray(X)?X.map((i=>i&&"object"==typeof i?i.value:i)).slice(0,2):[],F=((i,I)=>{if(!Array.isArray(i)||!i.length)return H;const g=i.map((i=>{const I=null==i?"":String(i);return{text:I,trimmed:I.trim()}})).filter((i=>i.trimmed.length>0)).slice(0,2);return g.length?R`
    <div class=${I}>
      ${g.map((i=>R`<span>${i.text}</span>`))}
    </div>
  `:H})(k,hg("switch-info",v,O)),U="function"==typeof(null==i?void 0:i._isSwitchPending)&&i._isSwitchPending(l),B=U?R`<span class=${hg("switch-pending-spinner",v,O)} aria-hidden="true"></span>`:H,Q=hg("switch-tile",v,O,U&&"pending"),V=g=>{"function"==typeof(null==i?void 0:i._onSwitchAction)&&i._onSwitchAction(g,I)},J=(null==I?void 0:I.glow_mode)||"static",_=u?uI:r?rI:MI,{style:f,overlay:E}=NI(_,J,b&&"none"!==J);if(T){const i=hg("switch-tile-btn",v,b?"on":"off",U&&"pending");return R`
      <div class="tile-wrap">
        <div class="glow-under" style=${f}>${E}</div>
        ${F}
        ${B}
        <ha-control-button
          class=${i}
          @hass-action=${V}
          .actionHandler=${oI({hasHold:!0,hasDoubleClick:!!(null==I?void 0:I.double_tap_action)})}
          role="button" tabindex="0" aria-busy=${U?"true":"false"}
        >
          <div class="tile-inner">
            ${Z?R`<ha-chip class=${x} style=${Y||H}>
                  ${j?R`<ha-icon class=${G} .icon=${j} style=${L||H}></ha-icon>`:H}
                  ${s}
                </ha-chip>`:R`
                  ${j?R`<ha-icon class=${G} .icon=${j} style=${L||H}></ha-icon>`:H}
                  ${s?R`<div class=${S} style=${w}>${s}</div>`:H}
                `}
          </div>
        </ha-control-button>
      </div>
    `}return R`
    <div class="tile-wrap ${Q}"
         @hass-action=${V}
         .actionHandler=${oI({hasHold:!0,hasDoubleClick:!!(null==I?void 0:I.double_tap_action)})}
         role="button" tabindex="0" aria-busy=${U?"true":"false"}>
      <div class="glow-under" style=${f}>${E}</div>
      ${F}
      ${B}
      <div class="tile-inner">
        ${Z?R`<ha-chip class=${x} style=${Y||H}>
              ${j?R`<ha-icon class=${G} .icon=${j} style=${L||H}></ha-icon>`:H}
              ${s}
            </ha-chip>`:R`
              ${j?R`<ha-icon class=${G} .icon=${j} style=${L||H}></ha-icon>`:H}
              ${s?R`<div class=${S} style=${w}>${s}</div>`:H}
            `}
      </div>
    </div>
  `}(i,I)))}</div>
      ${C}
    </div>
  `}(i,I,g)))}`:H}const yg=A`
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
`,Dg=A`
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
`,jg=A`
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
`,Wg=A`
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
`,pg=A`
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
    display: grid;
    gap: 3px;
    padding: 3px 4px;
    margin: -3px -4px;
  }

  .weather-headline-row {
    justify-self: start;
    min-width: 0;
    width: fit-content;
    max-width: calc(100% - var(--weather-icon-bg-size) - 8px);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 2px 3px;
    margin: -2px -3px;
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
    min-height: calc(var(--weather-graph-height) + 50px);
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

`,zg=A`
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
`,Lg=A`
  .thermostat-tile.on {
    border-radius: var(--tile-border-radius);
    box-shadow: var(--tile-shadow-active);
  }
  .thermostat-tile::part(button) { border-radius: var(--tile-border-radius); }
  .thermostat-tile.on::part(button) { box-shadow: var(--tile-shadow-active); }

  .thermostat-icon { color: var(--thermostat-idle-color); }
  .thermostat-icon.heating { color: var(--thermostat-heating-color); }
  .thermostat-icon.off { color: var(--thermostat-off-color); }
`,wg=A`
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
`;var Yg;let Zg=Yg=class extends ei{constructor(){super(...arguments),this._visiblePendingSwitches=new Set,this._weatherForecastGraphSelections=new Map,this._rowCardElements=new Map,this._rowCardConfigs=new Map,this._rowCardPromises=new Map,this._switchTemplateValues=new Map,this._weatherForecastValues=new Map,this._pendingSwitches=new Map,this._switchPendingDelayMs=300,this._switchPendingTimeoutMs=1e4}static getConfigElement(){return document.createElement("space-hub-card-editor")}static getStubConfig(){return{tile_height:80,chip_icon_size:14,main_icon_size:48,chip_font_size:12,card_shadow_color:"#000000",card_shadow_intensity:.5,unavailable_pulse_color:"#ff3b30",switch_rows:[],cards:[]}}setConfig(i){if(!i)throw new Error("Configuration is required");this._validateConfig(i,{allowIncomplete:!0});const I=Vi(i||{});Array.isArray(I.headers)||(I.headers=[]),Array.isArray(I.switch_rows)||(I.switch_rows=[]),Array.isArray(I.cards)||(I.cards=[]),this._clearRowCardCache(),this._config=I,this._syncTemplateEntries(I.switch_rows),this._syncWeatherForecastEntries(I.headers)}_isValidEntityId(i){return"string"==typeof i&&i.includes(".")&&!i.includes(" ")}_validateConfig(i,I={}){const g=!!I.allowIncomplete,t=[];i.headers&&Array.isArray(i.headers)&&i.headers.forEach(((i,I)=>{if(i){if(i.ac&&(i.ac.entity?this._isValidEntityId(i.ac.entity)||t.push(`Header ${I+1}: AC entity '${i.ac.entity}' must be a valid entity ID (e.g., 'climate.living_room')`):g||t.push(`Header ${I+1}: AC tile requires an 'entity' field`)),i.thermostat&&(i.thermostat.entity?this._isValidEntityId(i.thermostat.entity)||t.push(`Header ${I+1}: Thermostat entity '${i.thermostat.entity}' must be a valid entity ID (e.g., 'climate.bedroom')`):g||t.push(`Header ${I+1}: Thermostat tile requires an 'entity' field`)),i.main){const e=i.main;!!(e.main_name||e.main_icon||e.tap_entity||e.light_group_entity||e.temp_sensor||e.humidity_sensor||Array.isArray(e.chips)&&e.chips.length>0)||g||t.push(`Header ${I+1}: Main tile must have at least one of: main_name, main_icon, tap_entity, light_group_entity, temp_sensor, humidity_sensor, or chips`);["tap_entity","hold_entity","light_group_entity","temp_sensor","humidity_sensor"].forEach((i=>{const g=e[i];g&&!this._isValidEntityId(g)&&t.push(`Header ${I+1}: Main tile ${i} '${g}' must be a valid entity ID`)}))}if(i.weather){const e=i.weather;!!(e.name||e.icon||e.entity||void 0!==e.animated_icons||void 0!==e.show_forecast||e.icon_set||e.forecast_slots||e.forecast_fields||e.height||e.temp_size||e.temperature_size||e.icon_size||e.graph_height||e.temperature_icon_count||e.metric_columns||e.temp_sensor||e.temp_min_24h_sensor||e.temp_max_24h_sensor||e.humidity_sensor||e.feels_like_sensor||e.dewpoint_sensor||e.wind_speed_sensor||e.wind_gust_sensor||e.wind_direction_sensor||e.rain_state_sensor||e.rain_today_sensor||e.rain_rate_sensor||e.uv_sensor||e.solar_lux_sensor||e.pressure_sensor||Array.isArray(e.chips)&&e.chips.length>0)||g||t.push(`Header ${I+1}: Weather tile must have at least one weather entity, sensor, name, icon, or chip`);["entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor"].forEach((i=>{const g=e[i];g&&!this._isValidEntityId(g)&&t.push(`Header ${I+1}: Weather tile ${i} '${g}' must be a valid entity ID`)}));if(["height","temp_size","temperature_size","icon_size","graph_height"].forEach((i=>{const g=e[i];if(null!=g){const e=Number(g);(!Number.isFinite(e)||e<=0)&&t.push(`Header ${I+1}: Weather tile ${i} must be a positive number, got: ${g}`)}})),void 0!==e.temperature_icon_count&&null!==e.temperature_icon_count){const i=Number(e.temperature_icon_count);(!Number.isFinite(i)||i<0)&&t.push(`Header ${I+1}: Weather tile temperature_icon_count must be zero or a positive number, got: ${e.temperature_icon_count}`)}if(void 0!==e.metric_columns&&null!==e.metric_columns){const i=Number(e.metric_columns);(!Number.isFinite(i)||i<1)&&t.push(`Header ${I+1}: Weather tile metric_columns must be a positive number, got: ${e.metric_columns}`)}if(void 0!==e.icon_set&&null!==e.icon_set){const i=String(e.icon_set).trim().toLowerCase();i&&"meteocons"!==i&&"realistic"!==i&&t.push(`Header ${I+1}: Weather tile icon_set must be 'meteocons' or 'realistic', got: ${e.icon_set}`)}if(void 0!==e.forecast_slots&&null!==e.forecast_slots){const i=Number(e.forecast_slots);(!Number.isFinite(i)||i<=0)&&t.push(`Header ${I+1}: Weather tile forecast graph hours must be a positive number, got: ${e.forecast_slots}`)}if(void 0!==e.forecast_fields&&null!==e.forecast_fields){const i=Array.isArray(e.forecast_fields)?e.forecast_fields:String(e.forecast_fields).split(","),g=new Set(["temp","temperature","rain_chance","precipitation_probability","precip_probability","probability","pop","rain","precipitation","hum","humidity","wind","wind_speed","gust","wind_gust","wind_gust_speed","uv","uv_index","cloud","clouds","cloud_coverage"]);i.forEach((i=>{const e=String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_");e&&!g.has(e)&&t.push(`Header ${I+1}: Weather tile forecast field '${i}' is not supported`)}))}}!i.ac&&!i.thermostat||i.main||g||t.push(`Header ${I+1}: AC and Thermostat tiles require a 'main' configuration block`)}else t.push(`Header ${I+1}: Header configuration cannot be empty`)})),i.switch_rows&&Array.isArray(i.switch_rows)&&i.switch_rows.forEach(((i,I)=>{if(!i)return void t.push(`Switch row ${I+1}: Switch row configuration cannot be empty`);const e=Array.isArray(i)?i:Array.isArray(i.row)?i.row:[];Array.isArray(e)&&0!==e.length||g?e.forEach(((i,e)=>{i&&i.entity?this._isValidEntityId(i.entity)||t.push(`Switch row ${I+1}, item ${e+1}: Switch entity '${i.entity}' must be a valid entity ID`):g||t.push(`Switch row ${I+1}, item ${e+1}: Switch item requires an 'entity' field`),(null==i?void 0:i.hold_entity)&&!this._isValidEntityId(i.hold_entity)&&t.push(`Switch row ${I+1}, item ${e+1}: hold_entity '${i.hold_entity}' must be a valid entity ID`)})):t.push(`Switch row ${I+1}: Switch row must contain at least one switch item`)}));if(Object.entries({tile_height:"Tile height",chip_icon_size:"Chip icon size",main_icon_size:"Main icon size",chip_font_size:"Chip font size",card_shadow_intensity:"Card shadow intensity"}).forEach((([I,g])=>{const e=i[I];if(null!=e){const i=Number(e);(!Number.isFinite(i)||i<0)&&t.push(`${g} must be a positive number, got: ${e}`)}})),void 0!==i.card_shadow_intensity&&null!==i.card_shadow_intensity){const I=Number(i.card_shadow_intensity);Number.isFinite(I)&&(I<0||I>1)&&t.push(`Card shadow intensity must be between 0 and 1, got: ${I}`)}if(["card_shadow_color","unavailable_pulse_color"].forEach((I=>{const g=i[I];if(g&&"string"==typeof g){/^(#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(|hsla\(|[a-zA-Z]+).*$/.test(g)||t.push(`${I.replace(/_/g," ")} '${g}' is not a valid color format`)}})),t.length>0)throw new Error(`Invalid space-hub-card configuration:\n${t.map((i=>`• ${i}`)).join("\n")}`)}getCardSize(){const i=this._config||{},I=Yg.getStubConfig(),g=this._positiveNumber(i.tile_height)||this._positiveNumber(I.tile_height)||80;let t=24;(Array.isArray(i.headers)?i.headers:[]).forEach((i=>{i&&"object"==typeof i&&(this._hasWeatherForCardSize(i.weather)&&(t+=this._weatherHeightForCardSize(i.weather||{},g)+12),this._hasMainForCardSize(i)&&(t+=g+12))}));const e=Array.isArray(i.switch_rows)?i.switch_rows.length:0;t+=e*(g+12);const a=Array.isArray(i.cards)?i.cards.length:0;return t+=120*a,Math.max(6,Math.ceil(t/50))}_positiveNumber(i){const I=Number(i);return Number.isFinite(I)&&I>0?I:void 0}_hasMainForCardSize(i){const I=i.main||{};return!(!I||!(I.main_name||I.name||I.light_group_entity||I.entity||I.main_icon||I.icon||I.temp_sensor||I.humidity_sensor||Array.isArray(I.chips)&&I.chips.length))}_hasWeatherForCardSize(i){return!(!i||!(i.name||i.main_name||i.icon||i.main_icon||void 0!==i.animated_icons||void 0!==i.show_forecast||i.icon_set||i.forecast_slots||i.forecast_fields||i.height||i.temp_size||i.temperature_size||i.icon_size||i.graph_height||i.temperature_icon_count||i.metric_columns||i.entity||i.temp_sensor||i.temp_min_24h_sensor||i.temp_max_24h_sensor||i.humidity_sensor||i.feels_like_sensor||i.dewpoint_sensor||i.wind_speed_sensor||i.wind_gust_sensor||i.wind_direction_sensor||i.rain_state_sensor||i.rain_today_sensor||i.rain_rate_sensor||i.uv_sensor||i.solar_lux_sensor||i.pressure_sensor||Array.isArray(i.chips)&&i.chips.length))}_weatherHeightForCardSize(i,I){const g=Math.max(82,Math.min(260,this._positiveNumber(i.graph_height)||118)),t=Math.max(1,Math.min(4,Math.round(this._positiveNumber(i.metric_columns)||3))),e=this._weatherMetricCountForCardSize(i),a=e>0?Math.ceil(e/t):0,A=!1!==i.show_forecast&&i.entity?this._weatherForecastFieldCountForCardSize(i):0,C=78+40*a+(a>1?5*(a-1):0)+(A>0?A*(g+64)+8*(A-1):0)+(A>0?250:0)+32;return Math.max(C,I)}_weatherMetricCountForCardSize(i){if(Array.isArray(i.metrics)&&i.metrics.length)return i.metrics.filter((i=>!!i&&("rain"===i.type?!(!i.rain_state_sensor&&!i.rain_rate_sensor):!!i.entity))).length;let I=[i.wind_speed_sensor,i.wind_gust_sensor,i.temp_min_24h_sensor,i.temp_max_24h_sensor,i.uv_sensor,i.solar_lux_sensor,i.pressure_sensor].filter(Boolean).length;return(i.rain_state_sensor||i.rain_rate_sensor)&&(I+=1),I}_weatherForecastFieldCountForCardSize(i){const I={temp:"temperature",temperature:"temperature",rain_chance:"precipitation_probability",precipitation_probability:"precipitation_probability",precip_probability:"precipitation_probability",probability:"precipitation_probability",pop:"precipitation_probability"},g=Array.isArray(i.forecast_fields)?i.forecast_fields:"string"==typeof i.forecast_fields?i.forecast_fields.split(","):["temperature","precipitation_probability"],t=new Set;return g.forEach((i=>{const g=I[String(i||"").trim().toLowerCase().replace(/[-\s]/g,"_")];g&&t.add(g)})),t.size||2}render(){var i,I,g,t,e,a,A,C,c;if(!this._config)return H;const l=Yg.getStubConfig(),o=this._config||{},n={tile_height:null!==(i=o.tile_height)&&void 0!==i?i:l.tile_height,chip_icon_size:null!==(I=o.chip_icon_size)&&void 0!==I?I:l.chip_icon_size,main_icon_size:null!==(g=o.main_icon_size)&&void 0!==g?g:l.main_icon_size,chip_font_size:null!==(t=o.chip_font_size)&&void 0!==t?t:l.chip_font_size,card_shadow_color:null!==(e=o.card_shadow_color)&&void 0!==e?e:l.card_shadow_color,card_shadow_intensity:null!==(a=o.card_shadow_intensity)&&void 0!==a?a:l.card_shadow_intensity,unavailable_pulse_color:null!==(A=o.unavailable_pulse_color)&&void 0!==A?A:l.unavailable_pulse_color,headers:Array.isArray(o.headers)&&o.headers.length?o.headers:[],switch_rows:Array.isArray(o.switch_rows)?o.switch_rows:[],cards:Array.isArray(o.cards)?o.cards:[],tap_action:o.tap_action,hold_action:o.hold_action,double_tap_action:o.double_tap_action},d=Array.isArray(n.headers)&&n.headers.length?n.headers:[],s=Number(n.tile_height)||Number(l.tile_height)||80,M=Number(n.chip_icon_size)||Number(l.chip_icon_size)||14,r=Number(n.chip_font_size)||Number(l.chip_font_size)||12,u=Math.max(r+10,20),b=Math.round(.625*s),N=d[0]||{},h=Number(null!==(C=null==N?void 0:N.main_icon_size)&&void 0!==C?C:null==N?void 0:N.maicon_size),m=Number.isFinite(h)&&h>0?h:Number(n.main_icon_size)||Number(l.main_icon_size)||48,y=this._rgbaFromColor(n.card_shadow_color||l.card_shadow_color,null!==(c=n.card_shadow_intensity)&&void 0!==c?c:l.card_shadow_intensity),D=n.unavailable_pulse_color||l.unavailable_pulse_color||"#ff3b30",j=this._hasAnyUnavailable(n,d),W=this._rgbaFromColor(D,.18),p=this._rgbaFromColor(D,.36);return R`
      <ha-card class=${j?"unavailable":""}
               style=${`--panel-shadow-color:${j?W:y}; --unavail-weak:${W}; --unavail-strong:${p}`}>
        <div class="metrics" style=${`--tile-h:${s}px; --chip-size:${u}px; --chip-icon-size:${M}px; --main-icon-size:${m}px; --chip-font-size:${r}px; --ac-thermostat-icon:${b}px;`}>
          <div class="root">
            ${d.map(((i,I)=>this._renderHeaderRow(i,I)))}
            ${mg(this,n.switch_rows)}
            ${Array.isArray(n.cards)&&n.cards.length?R`
                  <div class="extra-cards">
                    ${n.cards.map(((i,I)=>this._renderEmbeddedRowCard(i,`standalone-card-${I}`)))}
                  </div>
                `:H}
          </div>
        </div>
      </ha-card>
    `}updated(i){super.updated(i),i.has("hass")&&(this._rowCardElements.forEach((i=>{i&&(i.hass=this.hass)})),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions(),this._syncPendingSwitches())}connectedCallback(){super.connectedCallback(),this._resumeTemplateSubscriptions(),this._resumeWeatherForecastSubscriptions()}disconnectedCallback(){super.disconnectedCallback(),this._switchTemplateValues.forEach((i=>this._disposeTemplateEntry(i))),this._weatherForecastValues.forEach((i=>this._disposeWeatherForecastEntry(i))),this._clearAllPendingSwitches()}_renderHeaderRow(i,I){const g=i.main||{},t=i.weather||{},e={tap_entity:g.tap_entity,hold_entity:g.hold_entity||g.tap_entity,glow_mode:g.glow_mode,light_group_entity:g.light_group_entity,name:g.main_name||g.name,icon:g.main_icon||g.icon,temp_sensor:g.temp_sensor,humidity_sensor:g.humidity_sensor,chips:Array.isArray(g.chips)?g.chips:[],tap_action:g.tap_action,hold_action:g.hold_action,double_tap_action:g.double_tap_action},a={entity:t.entity,name:t.name||t.main_name,icon:t.icon||t.main_icon,height:t.height,temp_size:t.temp_size,temperature_size:t.temperature_size,icon_size:t.icon_size,icon_offset_x:t.icon_offset_x,icon_offset_y:t.icon_offset_y,conditions_icon_size:t.conditions_icon_size,temperature_icon_count:t.temperature_icon_count,daily_icon_size:t.daily_icon_size,graph_height:t.graph_height,metric_columns:t.metric_columns,icon_set:t.icon_set,animated_icons:t.animated_icons,show_forecast:t.show_forecast,sync_graphs:t.sync_graphs,stale_minutes:t.stale_minutes,rain_rate_threshold:t.rain_rate_threshold,forecast_slots:t.forecast_slots,forecast_fields:t.forecast_fields,forecast_graph_key:`weather-${I}`,temp_sensor:t.temp_sensor,temp_min_24h_sensor:t.temp_min_24h_sensor,temp_max_24h_sensor:t.temp_max_24h_sensor,humidity_sensor:t.humidity_sensor,feels_like_sensor:t.feels_like_sensor,dewpoint_sensor:t.dewpoint_sensor,wind_speed_sensor:t.wind_speed_sensor,wind_gust_sensor:t.wind_gust_sensor,wind_direction_sensor:t.wind_direction_sensor,rain_state_sensor:t.rain_state_sensor,rain_today_sensor:t.rain_today_sensor,rain_rate_sensor:t.rain_rate_sensor,uv_sensor:t.uv_sensor,solar_lux_sensor:t.solar_lux_sensor,pressure_sensor:t.pressure_sensor,metrics:Array.isArray(t.metrics)?t.metrics:void 0,chips:Array.isArray(t.chips)?t.chips:[],tap_action:t.tap_action,hold_action:t.hold_action,double_tap_action:t.double_tap_action,forecast:!1===t.show_forecast?[]:this._getWeatherForecast(t.entity,"hourly"),daily_forecast:!1===t.show_forecast?[]:this._getWeatherForecast(t.entity,"daily")},A=i.ac||{},C=i.thermostat||{},c=!!(null==A?void 0:A.entity),l=!!(null==C?void 0:C.entity),o=!(!g||!(g.main_name||g.name||g.light_group_entity||g.entity||g.main_icon||g.icon||g.temp_sensor||g.humidity_sensor||Array.isArray(g.chips)&&g.chips.length)),n=!(!t||!(t.name||t.main_name||t.icon||t.main_icon||void 0!==t.animated_icons||void 0!==t.show_forecast||t.icon_set||t.forecast_slots||t.forecast_fields||t.height||t.temp_size||t.temperature_size||t.icon_size||t.graph_height||t.temperature_icon_count||t.metric_columns||t.entity||t.temp_sensor||t.temp_min_24h_sensor||t.temp_max_24h_sensor||t.humidity_sensor||t.feels_like_sensor||t.dewpoint_sensor||t.wind_speed_sensor||t.wind_gust_sensor||t.wind_direction_sensor||t.rain_state_sensor||t.rain_today_sensor||t.rain_rate_sensor||t.uv_sensor||t.solar_lux_sensor||t.pressure_sensor||Array.isArray(t.chips)&&t.chips.length)),d=o&&c,s=o&&l;o||!c&&!l||console.warn("space-hub-card: header contains `ac`/`thermostat` outside of `main` — ignoring per configured rules.");const M=d||s?d&&s?"header-row":"header-row main-plus-one":"header-row only-main";return R`
      ${n?R`
        <div class="header-row weather-row">
          ${Ng(this,a)}
        </div>
      `:H}
      ${o?R`<div class=${M}>
        ${o?hI(this,e):H}
        ${d?function(i,I){var g,t,e;const a=(null==I?void 0:I.entity)||"",A=null==I?void 0:I.glow_mode,C=((null===(e=null===(t=null===(g=null==i?void 0:i.hass)||void 0===g?void 0:g.states)||void 0===t?void 0:t[a])||void 0===e?void 0:e.state)||"").toLowerCase(),c=!!C&&"off"!==C,l="function"==typeof(null==i?void 0:i._acChip)?i._acChip(C):{icon:"mdi:air-conditioner"},o=(null==l?void 0:l.icon)||"mdi:air-conditioner",n="ac-mode-"+((d=C)&&"off"!==d?d.includes("cool")?"cool":d.includes("heat")?"heat":d.includes("dry")?"dry":d.includes("fan")?"fan":d.includes("auto")?"auto":"default":"off");var d;const s=`chip chip-temperature-humidity ac-chip ${n}`,M=`ac-fan ${n}${c?" spinning":""}`,r=function(i){const I=(i||"").toLowerCase();return I&&"off"!==I?I.includes("cool")?{weak:"rgba(0,170,255,0.12)",strong:"rgba(0,170,255,0.26)"}:I.includes("heat")?{weak:"rgba(255,112,67,0.12)",strong:"rgba(255,112,67,0.26)"}:I.includes("dry")?{weak:"rgba(255,202,40,0.12)",strong:"rgba(255,202,40,0.26)"}:I.includes("fan")?{weak:"rgba(102,187,106,0.12)",strong:"rgba(102,187,106,0.26)"}:I.includes("auto")?{weak:"rgba(38,198,218,0.12)",strong:"rgba(38,198,218,0.26)"}:{weak:"rgba(0,0,0,0.06)",strong:"rgba(0,0,0,0.12)"}:{weak:"rgba(0,0,0,0.00)",strong:"rgba(0,0,0,0.00)"}}(C),u=null!=A?A:"static",{style:b,overlay:N}=NI(r,u,c);return R`
    <div class="tile-wrap">
      <div class="glow-under" style=${b}>${N}</div>
      <ha-control-button
        class="square ac-tile ${c?"on":""}"
        @hass-action=${g=>{"function"==typeof(null==i?void 0:i._onACAction)&&i._onACAction(g,I)}}
        .actionHandler=${oI({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
        <div class=${s}>
          <ha-icon .icon=${o}></ha-icon>
        </div>
        <div class="center-xy">
          <ha-icon class=${M} icon="mdi:fan"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,A):H}
        ${s?function(i,I){var g,t,e,a,A,C,c,l;const o=(null==I?void 0:I.entity)||"",n=null==I?void 0:I.glow_mode,d=null===(t=null===(g=null==i?void 0:i.hass)||void 0===g?void 0:g.states)||void 0===t?void 0:t[o],s="function"==typeof(null==i?void 0:i._fmtNumber)?i._fmtNumber.bind(i):i=>null==i?"—":String(i),M=s(null!==(C=null!==(a=null===(e=null==d?void 0:d.attributes)||void 0===e?void 0:e.temperature)&&void 0!==a?a:null===(A=null==d?void 0:d.attributes)||void 0===A?void 0:A.target_temp)&&void 0!==C?C:null===(c=null==d?void 0:d.attributes)||void 0===c?void 0:c.target_temperature,1)+"°",r="heating"===((null===(l=null==d?void 0:d.attributes)||void 0===l?void 0:l.hvac_action)||"").toLowerCase(),u="off"===((null==d?void 0:d.state)||"").toLowerCase()?"off":r?"heating":"idle",b=`thermostat-chip ${u}`,N=`temperature-chip ${u}`,h=`thermostat-icon ${u}`,m="undefined"!=typeof customElements&&!!customElements.get("ha-chip"),y=null!=n?n:"static",D=bI,{style:j,overlay:W}=NI(D,y,r);return R`
    <div class="tile-wrap">
      <div class="glow-under" style=${j}>${W}</div>
      <ha-control-button
        class="square thermostat-tile ${r?"on":""}"
        @hass-action=${g=>{"function"==typeof(null==i?void 0:i._onThermostatAction)&&i._onThermostatAction(g,I)}}
        .actionHandler=${oI({hasHold:!0,hasDoubleClick:!1})}
        role="button" tabindex="0"
      >
      
        <div class="temperature-chip-container">
          ${m?R`<ha-chip class=${b}>${M}</ha-chip>`:R`<div class=${N}><span class="thermostat-target">${M}</span></div>`}
        </div>
        <div class="center-xy">
          <ha-icon class=${h} icon="mdi:thermostat"></ha-icon>
        </div>
      </ha-control-button>
    </div>
  `}(this,C):H}
      </div>`:H}
    `}_getWeatherForecastGraphSelection(i){return i?this._weatherForecastGraphSelections.get(i):void 0}_setWeatherForecastGraphSelection(i,I){if(!i||!Number.isFinite(I))return;if(this._weatherForecastGraphSelections.get(i)===I)return;const g=new Map(this._weatherForecastGraphSelections);g.set(i,I),this._weatherForecastGraphSelections=g}_renderEmbeddedRowCard(i,I){if(!i||"object"!=typeof i)return H;this._rowCardConfigs.get(I)!==i&&(this._rowCardElements.delete(I),this._rowCardPromises.delete(I)),this._rowCardConfigs.set(I,i);const g=this._rowCardElements.get(I);if(g)return g.hass=this.hass,R`<div class="embedded-card">${g}</div>`;const t=this._createRowCardElement(I,i).then((i=>(i.hass=this.hass,R`${i}`))).catch((I=>{const g=I instanceof Error?I.message:String(I),t=this._createErrorCard(g,i);return t.hass=this.hass,R`${t}`}));return R`<div class="embedded-card">${mi(t,H)}</div>`}async _createRowCardElement(i,I){const g=this._rowCardPromises.get(i);if(g)return g;const t=(async()=>{const g=await this._getCardHelpers();let t;try{t=(null==g?void 0:g.createCardElement)?await g.createCardElement(I):Qi(I)}catch(i){const g=i instanceof Error?i.message:String(i);t=this._createErrorCard(g,I)}return t.addEventListener("ll-rebuild",(g=>{g.stopPropagation(),this._rowCardElements.delete(i),this._rowCardPromises.delete(i);const t=this._rowCardConfigs.get(i)||I;this._createRowCardElement(i,t).then((()=>this.requestUpdate()))})),this._rowCardElements.set(i,t),this._rowCardPromises.delete(i),t})();return this._rowCardPromises.set(i,t),t}_createErrorCard(i,I){try{const g=document.createElement("hui-error-card");return g.setConfig({type:"error",error:i,origConfig:I}),g}catch(g){return Qi({type:"hui-error-card",error:i,origConfig:I})}}async _getCardHelpers(){if(!this._helpersPromise){const i=window.loadCardHelpers;this._helpersPromise="function"==typeof i?i():Promise.resolve(void 0)}return this._helpersPromise}_clearRowCardCache(){this._rowCardElements.clear(),this._rowCardConfigs.clear(),this._rowCardPromises.clear()}_dispatchNativeAction(i,I){const g=new Event("hass-action",{bubbles:!0,composed:!0});g.detail={action:i,config:I},this.dispatchEvent(g)}_withActionOverrides(i,I){const g=Object.assign({},i);"string"==typeof(null==I?void 0:I.entity)&&I.entity&&(g.entity=I.entity);const t=Pi(null==I?void 0:I.tap_action);t&&(g.tap_action=t);const e=Pi(null==I?void 0:I.hold_action);e&&(g.hold_action=e);const a=Pi(null==I?void 0:I.double_tap_action);return a&&(g.double_tap_action=a),g}_dispatchActionEnvelope(i,I){("double_tap"===i?I.double_tap_action:"hold"===i?I.hold_action:I.tap_action)&&this._dispatchNativeAction(i,I)}_selectedAction(i,I){return"double_tap"===i?I.double_tap_action:"hold"===i?I.hold_action:I.tap_action}_withoutSelectedActionConfirmation(i,I){const g=this._selectedAction(i,I);if(!g||void 0===Ei(g.confirmation))return I;const t=Object.assign({},I),e=Object.assign({},g);return delete e.confirmation,"double_tap"===i?t.double_tap_action=e:"hold"===i?t.hold_action=e:t.tap_action=e,t}_isConfirmationExempt(i){var I,g;if(!i||"object"!=typeof i||!Array.isArray(i.exemptions))return!1;const t=null===(g=null===(I=this.hass)||void 0===I?void 0:I.user)||void 0===g?void 0:g.id;return!!t&&i.exemptions.some((i=>i.user===t))}_confirmSwitchAction(i,I){if(void 0===i||this._isConfirmationExempt(i))return Promise.resolve(!0);const g=i&&"object"==typeof i?i:{},t="string"==typeof g.title&&g.title.trim()?g.title.trim():"Please confirm",e="string"==typeof g.text&&g.text.trim()?g.text.trim():`Are you sure you want to ${I.action}?`,a="string"==typeof g.confirm_text&&g.confirm_text.trim()?g.confirm_text.trim():"OK",A="string"==typeof g.dismiss_text&&g.dismiss_text.trim()?g.dismiss_text.trim():"Cancel";return new Promise((i=>{const I=document.createElement("div"),g=document.createElement("div"),C=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),o=document.createElement("button"),n=document.createElement("button");I.style.cssText=["position:fixed","inset:0","z-index:2147483647","display:flex","align-items:center","justify-content:center","padding:24px","background:rgba(0,0,0,0.32)","box-sizing:border-box"].join(";"),g.style.cssText=["width:min(420px,100%)","box-sizing:border-box","border-radius:12px","padding:20px","background:var(--ha-dialog-surface-background, var(--card-background-color, #fff))","color:var(--primary-text-color, #212121)","box-shadow:0 18px 48px rgba(0,0,0,0.32)","font-family:var(--paper-font-body1_-_font-family, Roboto, sans-serif)"].join(";"),C.style.cssText="font-size:20px;font-weight:500;line-height:1.3;margin-bottom:12px;",c.style.cssText="font-size:14px;line-height:1.45;color:var(--primary-text-color, #212121);white-space:pre-wrap;",l.style.cssText="display:flex;justify-content:flex-end;gap:8px;margin-top:24px;";const d=["border:0","border-radius:8px","padding:10px 14px","font:inherit","font-weight:500","cursor:pointer","background:transparent","color:var(--primary-color, #03a9f4)"].join(";");o.style.cssText=d,n.style.cssText=`${d};background:var(--primary-color, #03a9f4);color:var(--text-primary-color, #fff);`,C.textContent=t,c.textContent=e,o.textContent=A,n.textContent=a;const s=g=>{document.removeEventListener("keydown",M),I.remove(),i(g)},M=i=>{"Escape"===i.key&&s(!1)};I.addEventListener("click",(i=>{i.target===I&&s(!1)})),o.addEventListener("click",(()=>s(!1))),n.addEventListener("click",(()=>s(!0))),document.addEventListener("keydown",M),l.append(o,n),g.append(C,c,l),I.append(g),document.body.append(I),n.focus()}))}_isLockSwitch(i,I){return"lock"===String(i||"").toLowerCase()||!!(null==I?void 0:I.startsWith("lock."))}_buildDefaultSwitchTapAction(i,I,g){var t,e,a;if(i){if(this._isLockSwitch(I,i)){return{action:"perform-action",perform_action:"unlocked"===((null===(a=null===(e=null===(t=this.hass)||void 0===t?void 0:t.states)||void 0===e?void 0:e[i])||void 0===a?void 0:a.state)||"").toLowerCase()?"lock.lock":"lock.unlock",target:{entity_id:i},confirmation:g}}return{action:"toggle",confirmation:g}}}_applySwitchTapConfirmation(i,I){if(void 0===I||!i.tap_action)return i;return void 0!==Ei(i.tap_action.confirmation)?i:Object.assign(Object.assign({},i),{tap_action:Object.assign(Object.assign({},i.tap_action),{confirmation:I})})}_entityState(i){var I,g,t;const e=null===(t=null===(g=null===(I=this.hass)||void 0===I?void 0:I.states)||void 0===g?void 0:g[i])||void 0===t?void 0:t.state;return null==e?"":String(e)}_targetContainsEntity(i,I){if(!i||"object"!=typeof i)return!1;const g=i.entity_id;return Array.isArray(g)?g.includes(I):g===I}_actionCanChangeSwitchEntity(i,I,g){if(!I||"hold"===i)return!1;const t=this._selectedAction(i,g);return!!t&&("toggle"===t.action?g.entity===I:"perform-action"===t.action&&(this._targetContainsEntity(t.target,I)||this._targetContainsEntity(t.data,I)))}_setPendingSwitchVisible(i,I){if(this._visiblePendingSwitches.has(i)===I)return;const g=new Set(this._visiblePendingSwitches);I?g.add(i):g.delete(i),this._visiblePendingSwitches=g}_clearPendingSwitch(i){const I=this._pendingSwitches.get(i);I?(void 0!==I.showTimer&&window.clearTimeout(I.showTimer),void 0!==I.timeoutTimer&&window.clearTimeout(I.timeoutTimer),this._pendingSwitches.delete(i),this._setPendingSwitchVisible(i,!1)):this._setPendingSwitchVisible(i,!1)}_clearAllPendingSwitches(){[...this._pendingSwitches.keys()].forEach((i=>this._clearPendingSwitch(i)))}_trackPendingSwitch(i,I,g){if(!i||!this.hass||!this._actionCanChangeSwitchEntity(I,i,g))return;this._clearPendingSwitch(i);const t=this._entityState(i),e={initialState:t};e.showTimer=window.setTimeout((()=>{this._entityState(i)===t?this._setPendingSwitchVisible(i,!0):this._clearPendingSwitch(i)}),this._switchPendingDelayMs),e.timeoutTimer=window.setTimeout((()=>{this._clearPendingSwitch(i)}),this._switchPendingTimeoutMs),this._pendingSwitches.set(i,e)}_syncPendingSwitches(){this._pendingSwitches.forEach(((i,I)=>{this._entityState(I)!==i.initialState&&this._clearPendingSwitch(I)}))}_onMainAction(i,I,g,t,e){i.stopPropagation();const a=i.detail&&i.detail.action||"tap",A=e||g,C=t||g||e,c={entity:A,tap_action:A?{action:"toggle"}:void 0,hold_action:C?{action:"more-info",entity:C}:void 0},l=fi(I)?I:fi(this._config)?this._config:void 0;this._dispatchActionEnvelope(a,this._withActionOverrides(c,l))}_onWeatherAction(i,I){i.stopPropagation();const g=i.detail&&i.detail.action||"tap",t=(null==I?void 0:I.entity)||(null==I?void 0:I.temp_sensor)||(null==I?void 0:I.humidity_sensor),e={entity:t,tap_action:t?{action:"more-info",entity:t}:void 0,hold_action:t?{action:"more-info",entity:t}:void 0};this._dispatchActionEnvelope(g,this._withActionOverrides(e,I))}_onACAction(i,I){var g,t,e;i.stopPropagation();const a=i.detail&&i.detail.action||"tap",A=null==I?void 0:I.entity;if(!A)return;const C=((null===(e=null===(t=null===(g=this.hass)||void 0===g?void 0:g.states)||void 0===t?void 0:t[A])||void 0===e?void 0:e.state)||"").toLowerCase(),c={entity:A,tap_action:{action:"perform-action",perform_action:!!C&&"off"!==C?"climate.turn_off":"climate.turn_on",target:{entity_id:A}},hold_action:{action:"more-info",entity:A}};this._dispatchActionEnvelope(a,this._withActionOverrides(c,I))}_onThermostatAction(i,I){var g,t,e;i.stopPropagation();const a=i.detail&&i.detail.action||"tap",A=null==I?void 0:I.entity;if(!A)return;const C={entity:A,tap_action:{action:"perform-action",perform_action:"climate.set_hvac_mode",target:{entity_id:A},data:{hvac_mode:"off"===((null===(e=null===(t=null===(g=this.hass)||void 0===g?void 0:g.states)||void 0===t?void 0:t[A])||void 0===e?void 0:e.state)||"").toLowerCase()?"heat":"off"}},hold_action:{action:"more-info",entity:A}};this._dispatchActionEnvelope(a,this._withActionOverrides(C,I))}async _onSwitchAction(i,I){i.stopPropagation();const g=i.detail&&i.detail.action||"tap",t="string"==typeof(null==I?void 0:I.entity)?I.entity:void 0,e="string"==typeof(null==I?void 0:I.hold_entity)?I.hold_entity:t,a=Ei(null==I?void 0:I.confirmation),A={entity:t,tap_action:this._buildDefaultSwitchTapAction(t,null==I?void 0:I.type,a),hold_action:e?{action:"more-info",entity:e}:void 0,double_tap_action:t?{action:"toggle"}:void 0},C=this._withActionOverrides(A,I);let c=this._applySwitchTapConfirmation(C,a);const l=this._selectedAction(g,c);if(!l)return;const o=Ei(l.confirmation);if(void 0!==o){if(!await this._confirmSwitchAction(o,l))return;c=this._withoutSelectedActionConfirmation(g,c)}this._trackPendingSwitch(t,g,c),this._dispatchActionEnvelope(g,c)}_resolveSwitchTemplates(i){const I=this._extractTemplatesFromSwitch(i);return I.length?I.map((i=>({template:i,value:this._getTemplateDisplayValue(i)}))):[]}_extractTemplatesFromSwitch(i){if(!i||"object"!=typeof i)return[];const I=i,g=((...i)=>{for(const g of i)if(g in I)return I[g]})("info_templates","infoTemplates","info-templates","info_template","infoTemplate","info-template","top_right_templates","topRightTemplates","top-right-templates","top_right_template","topRightTemplate","top-right-template");if(null==g)return[];const t=Array.isArray(g)?g:[g],e=[];return t.some((i=>{let I;"string"==typeof i?I=i:i&&"object"==typeof i&&(I=i.template||i.value||i.value_template||i.text);const g="string"==typeof I?I.trim():"";return g&&e.push(g),e.length>=2})),e.slice(0,2)}_syncTemplateEntries(i){const I=this._collectTemplatesFromRows(i);if(!I.size&&!this._switchTemplateValues.size)return;const g=[];this._switchTemplateValues.forEach(((i,t)=>{I.has(t)||g.push(t)})),g.forEach((i=>{const I=this._switchTemplateValues.get(i);I&&this._disposeTemplateEntry(I),this._switchTemplateValues.delete(i)})),I.forEach((i=>this._ensureTemplateEntry(i)))}_collectTemplatesFromRows(i){const I=new Set;return Array.isArray(i)?(i.forEach((i=>{const g=Array.isArray(i)?i:Array.isArray(null==i?void 0:i.row)?i.row:[];Array.isArray(g)&&g.forEach((i=>{this._extractTemplatesFromSwitch(i).forEach((i=>I.add(i)))}))})),I):I}_ensureTemplateEntry(i){const I=(i||"").trim();if(!I)return;let g=this._switchTemplateValues.get(I);return g||(g={value:"",ready:!1},this._switchTemplateValues.set(I,g)),this._startTemplateSubscription(I,g),g}_getTemplateDisplayValue(i){var I;const g=this._ensureTemplateEntry(i);return g?g.error?"!":g.ready?null!==(I=g.value)&&void 0!==I?I:"":"…":""}_startTemplateSubscription(i,I){var g;!(null===(g=this.hass)||void 0===g?void 0:g.connection)||I.unsub||I.pending||(I.pending=!0,this.hass.connection.subscribeMessage((i=>{I.ready=!0,I.error=void 0;const g=i&&"object"==typeof i&&"result"in i?i.result:i;I.value=null!=g?String(g):"",this.requestUpdate()}),{type:"render_template",template:i},{resubscribe:!0}).then((i=>{I.unsub=i})).catch((g=>{I.ready=!0,I.error=(null==g?void 0:g.message)||"error",I.unsub=void 0,console.warn(`[space-hub-card] Template subscription failed for "${i}":`,g),this.requestUpdate()})).finally((()=>{I.pending=!1})))}_disposeTemplateEntry(i){if(i.unsub){try{i.unsub()}catch(i){}i.unsub=void 0}i.pending=!1}_resumeTemplateSubscriptions(){this.hass&&this._switchTemplateValues.forEach(((i,I)=>this._startTemplateSubscription(I,i)))}_normalizeForecastType(i){return"daily"===String(i||"hourly")?"daily":"hourly"}_weatherForecastKey(i,I){const g="string"==typeof i?i.trim():"";return g?`${g}|${this._normalizeForecastType(I)}`:""}_collectWeatherForecastKeys(i){const I=new Set;return Array.isArray(i)?(i.forEach((i=>{const g=null==i?void 0:i.weather;if(!g||!1===g.show_forecast)return;const t=this._weatherForecastKey(g.entity,"hourly");t&&I.add(t);const e=this._weatherForecastKey(g.entity,"daily");e&&I.add(e)})),I):I}_syncWeatherForecastEntries(i){const I=this._collectWeatherForecastKeys(i),g=[];this._weatherForecastValues.forEach(((i,t)=>{I.has(t)||g.push(t)})),g.forEach((i=>{const I=this._weatherForecastValues.get(i);I&&this._disposeWeatherForecastEntry(I),this._weatherForecastValues.delete(i)})),I.forEach((i=>this._ensureWeatherForecastEntry(i)))}_ensureWeatherForecastEntry(i){const I=(i||"").trim();if(!I)return;let g=this._weatherForecastValues.get(I);return g||(g={forecast:[],ready:!1},this._weatherForecastValues.set(I,g)),this._startWeatherForecastSubscription(I,g),g}_getWeatherForecast(i,I){const g=this._weatherForecastKey(i,I);if(!g)return[];const t=this._ensureWeatherForecastEntry(g);return t&&Array.isArray(t.forecast)?t.forecast:[]}_extractForecast(i){var I,g;if(!i||"object"!=typeof i)return[];const t=i;return Array.isArray(t.forecast)?t.forecast:Array.isArray(null===(I=t.event)||void 0===I?void 0:I.forecast)?t.event.forecast:Array.isArray(null===(g=t.result)||void 0===g?void 0:g.forecast)?t.result.forecast:[]}_startWeatherForecastSubscription(i,I){var g;if(!(null===(g=this.hass)||void 0===g?void 0:g.connection)||I.unsub||I.pending)return;const[t,e]=i.split("|"),a=this._normalizeForecastType(e);t&&(I.pending=!0,this.hass.connection.subscribeMessage((i=>{I.ready=!0,I.error=void 0,I.forecast=this._extractForecast(i),this.requestUpdate()}),{type:"weather/subscribe_forecast",entity_id:t,forecast_type:a},{resubscribe:!0}).then((i=>{I.unsub=i})).catch((g=>{I.ready=!0,I.error=(null==g?void 0:g.message)||"error",I.unsub=void 0,console.warn(`[space-hub-card] Weather forecast subscription failed for "${i}":`,g),this.requestUpdate()})).finally((()=>{I.pending=!1})))}_disposeWeatherForecastEntry(i){if(i.unsub)try{i.unsub()}catch(i){}i.unsub=void 0,i.pending=!1}_resumeWeatherForecastSubscriptions(){this.hass&&this._weatherForecastValues.forEach(((i,I)=>this._startWeatherForecastSubscription(I,i)))}_fmt2(i,I,g){if(!i||!this.hass)return"—"+(g||"");const t=this.hass.states[i];if(!t||""===t.state||"unknown"===t.state||"unavailable"===t.state)return"—"+(g||"");const e=Number(t.state);return Number.isFinite(e)?e.toFixed(I)+(g||""):String(t.state)+(g||"")}_fmtNumber(i,I){if(null==i||""===i||"unknown"===i||"unavailable"===i)return"—";const g=Number(i);return Number.isFinite(g)?g.toFixed(I):String(i)}_acChip(i){return i&&"off"!==i?i.includes("cool")?{icon:"mdi:snowflake"}:i.includes("heat")?{icon:"mdi:fire"}:i.includes("dry")?{icon:"mdi:water-percent"}:i.includes("fan")?{icon:"mdi:fan"}:i.includes("auto")?{icon:"mdi:autorenew"}:{icon:"mdi:air-conditioner"}:{icon:"mdi:power"}}_openMoreInfo(i){i&&this.dispatchEvent(new CustomEvent("hass-more-info",{detail:{entityId:i},bubbles:!0,composed:!0}))}_acToggle(i){if(!i||!this.hass)return;const I=this.hass.states[i],g=((null==I?void 0:I.state)||"").toLowerCase(),t=!!g&&"off"!==g;this.hass.callService("climate",t?"turn_off":"turn_on",{entity_id:i})}_thermostatToggle(i){if(!i||!this.hass)return;const I=this.hass.states[i],g="off"===((null==I?void 0:I.state)||"").toLowerCase()?"heat":"off";this.hass.callService("climate","set_hvac_mode",{entity_id:i,hvac_mode:g})}_toggleGeneric(i){if(!i||!this.hass)return;const I=i.split(".")[0],g="switch"===I||"light"===I?`${I}.toggle`:"homeassistant.toggle",[t,e]=g.split(".");this.hass.callService(t,e,{entity_id:i})}_isOn(i){if(!i||!this.hass)return!1;const I=this.hass.states[i];return"on"===((null==I?void 0:I.state)||"").toLowerCase()}_isSwitchActive(i,I){if(!i||!this.hass)return!1;const g=this.hass.states[i];return this._isLockSwitch(I,i)?"unlocked"===((null==g?void 0:g.state)||"").toLowerCase():"on"===((null==g?void 0:g.state)||"").toLowerCase()}_isSwitchPending(i){return!!i&&this._visiblePendingSwitches.has(i)}_rgbaFromColor(i,I=.5){const g=Math.max(0,Math.min(1,Number(I)||0));if(!i||"string"!=typeof i)return`rgba(0,0,0,${g})`;const t=i.trim();if(t.startsWith("rgba(")||t.startsWith("rgb(")||t.startsWith("hsl(")||t.startsWith("var("))return t;const e=t.replace("#",""),a=i=>parseInt(i,16);if(3===e.length){return`rgba(${a(e[0]+e[0])},${a(e[1]+e[1])},${a(e[2]+e[2])},${g})`}if(e.length>=6){return`rgba(${a(e.slice(0,2))},${a(e.slice(2,4))},${a(e.slice(4,6))},${g})`}return`rgba(0,0,0,${g})`}_getAllCardEntities(i,I){const g=new Set,t=Array.isArray(I)?I:[I],e=new WeakSet,a=new Set(["entity","entity_id","tap_entity","hold_entity","double_tap_entity","light_group_entity","temp_sensor","temp_min_24h_sensor","temp_max_24h_sensor","humidity_sensor","feels_like_sensor","dewpoint_sensor","wind_speed_sensor","wind_gust_sensor","wind_direction_sensor","rain_state_sensor","rain_today_sensor","rain_rate_sensor","uv_sensor","solar_lux_sensor","pressure_sensor","camera_image"]),A=i=>{"string"==typeof i&&this._isValidEntityId(i)&&g.add(i)},C=i=>{"string"!=typeof i?Array.isArray(i)?i.forEach((i=>{"string"==typeof i?A(i):c(i)})):c(i):A(i)},c=i=>{if(!i||"object"!=typeof i)return;const I=i;e.has(I)||(e.add(I),Array.isArray(i)?i.forEach((i=>c(i))):Object.entries(i).forEach((([i,I])=>{a.has(i)?C(I):"target"!==i?Array.isArray(I)?I.forEach((i=>c(i))):I&&"object"==typeof I&&c(I):(i=>{if(!i||"object"!=typeof i)return;C(i.entity_id)})(I)})))};return c(t),c(i.switch_rows),c(i.cards),[...g]}_hasAnyUnavailable(i,I){if(!this.hass)return!1;const g=this._getAllCardEntities(i,I),t=new Set(["unavailable","unknown","offline"]);return g.some((i=>{var I,g;if(!i)return!1;const e=null===(g=null===(I=this.hass)||void 0===I?void 0:I.states)||void 0===g?void 0:g[i];if(!e)return!0;const a=(e.state||"").toLowerCase();return t.has(a)}))}};Zg.styles=[yg,Dg,jg,Wg,pg,zg,Lg,wg],i([ji({attribute:!1})],Zg.prototype,"hass",void 0),i([Wi()],Zg.prototype,"_config",void 0),i([Wi()],Zg.prototype,"_visiblePendingSwitches",void 0),i([Wi()],Zg.prototype,"_weatherForecastGraphSelections",void 0),Zg=Yg=i([yi("space-hub-card")],Zg),window.customCards=window.customCards||[],window.customCards.push({type:"space-hub-card",name:"Space Hub Card",description:"Space control hub card",preview:!1,version:"2.0.39"});try{const i=window;if(!i.__SPACE_HUB_CARD_LOGGED__){const I="background:#3f51b5;color:#fff;padding:2px 6px;border-radius:4px 0 0 4px;font-weight:700",g="background:#e0e0e0;color:#111;padding:2px 6px;border-radius:0 4px 4px 0;";console.info("%c🚀 Space hub card%c v2.0.39",I,g),i.__SPACE_HUB_CARD_LOGGED__=!0}}catch(mI){}var Tg=Zg;export{Zg as SpaceHubCard,Tg as default};
