import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{s as state}from"./store3.js";import{s as state$1}from"./mutations2.js";import{d as defineCustomElement$3}from"./sc-format-number2.js";import{d as defineCustomElement$2}from"./sc-line-item2.js";import{d as defineCustomElement$1}from"./sc-skeleton2.js";const scLineItemShippingCss=":host{display:block}",ScLineItemShipping=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.label=void 0}render(){const{checkout:e}=state$1;return(null==e?void 0:e.selected_shipping_choice)?"loading"===state.formState.value?h("sc-line-item",null,h("sc-skeleton",{slot:"title",style:{width:"120px",display:"inline-block"}}),h("sc-skeleton",{slot:"price",style:{width:"70px",display:"inline-block","--border-radius":"6px"}})):h("sc-line-item",null,h("span",{slot:"description"},this.label||wp.i18n.__("Shipping","surecart")),h("span",{slot:"price"},(null==e?void 0:e.shipping_amount)?h("sc-format-number",{type:"currency",currency:null==e?void 0:e.currency,value:null==e?void 0:e.shipping_amount}):wp.i18n.__("Free","surecart"))):h(Host,{style:{display:"none"}})}static get style(){return scLineItemShippingCss}},[1,"sc-line-item-shipping",{label:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-line-item-shipping","sc-format-number","sc-line-item","sc-skeleton"].forEach((e=>{switch(e){case"sc-line-item-shipping":customElements.get(e)||customElements.define(e,ScLineItemShipping);break;case"sc-format-number":customElements.get(e)||defineCustomElement$3();break;case"sc-line-item":customElements.get(e)||defineCustomElement$2();break;case"sc-skeleton":customElements.get(e)||defineCustomElement$1()}}))}export{ScLineItemShipping as S,defineCustomElement as d};