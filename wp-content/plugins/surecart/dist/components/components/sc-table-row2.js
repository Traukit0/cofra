import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";const scTableRowCss=":host{display:table-row;border:1px solid var(--sc-table-row-border-bottom-color, var(--sc-color-gray-200))}:host([href]){cursor:pointer}:host([href]:hover){background:var(--sc-color-gray-50)}",ScTableRow=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.href=void 0}render(){return h(Host,null,h("slot",null))}static get style(){return scTableRowCss}},[1,"sc-table-row",{href:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-table-row"].forEach((e=>{"sc-table-row"===e&&(customElements.get(e)||customElements.define(e,ScTableRow))}))}export{ScTableRow as S,defineCustomElement as d};