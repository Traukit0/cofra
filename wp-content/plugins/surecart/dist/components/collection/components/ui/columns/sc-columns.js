import{Host,h}from"@stencil/core";export class ScColumns{constructor(){this.verticalAlignment=void 0,this.isStackedOnMobile=void 0,this.isFullHeight=void 0,this.isReversedOnMobile=void 0}render(){return h(Host,{class:{"sc-columns":!0,[`are-vertically-aligned-${this.verticalAlignment}`]:!!this.verticalAlignment,"is-not-stacked-on-mobile":!this.isStackedOnMobile,"is-full-height":!!this.isFullHeight,"is-reversed-on-mobile":!!this.isReversedOnMobile}},h("slot",null))}static get is(){return"sc-columns"}static get originalStyleUrls(){return{$:["sc-columns.scss"]}}static get styleUrls(){return{$:["sc-columns.css"]}}static get properties(){return{verticalAlignment:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:"The vertical alignment of the columns."},attribute:"vertical-alignment",reflect:!1},isStackedOnMobile:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this stacked on mobile"},attribute:"is-stacked-on-mobile",reflect:!1},isFullHeight:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this full vertical height"},attribute:"is-full-height",reflect:!1},isReversedOnMobile:{type:"boolean",mutable:!1,complexType:{original:"boolean",resolved:"boolean",references:{}},required:!1,optional:!1,docs:{tags:[],text:"Is this reverse ordered on mobile"},attribute:"is-reversed-on-mobile",reflect:!1}}}}