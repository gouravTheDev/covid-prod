(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["client-chunk-products"],{"1b90":function(t,e,r){"use strict";var n=r("ffd2"),o=r.n(n);o.a},"2ab4":function(t,e,r){"use strict";var n=r("db7e"),o=r.n(n);o.a},"32e1":function(t,e,r){"use strict";var n=r("96b8"),o=r.n(n);o.a},"96b8":function(t,e,r){},aea3:function(t,e,r){"use strict";var n=r("af80"),o=r.n(n);o.a},af80:function(t,e,r){},db7e:function(t,e,r){},e6dc:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-wrapper"},[r("h1",{staticClass:"products-page-title"},[t._v("Products page")]),r("product-list",{staticClass:"product-list"}),t.networkOnLine?r("add-product"):t._e()],1)},o=[],c=r("2f62"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[null===t.products?r("p",{staticClass:"infos-label"},[t._v("Loading...")]):t._e(),t.products&&!t.products.length?r("p",{staticClass:"infos-label"},[t._v(" You don't have any product yet ")]):t._e(),t._l(t.products,(function(e,n){return r("product-item",{key:e.id,staticClass:"product-row",attrs:{index:n,"is-product-deletion-pending":t.isProductDeletionPending(e.id),"disable-actions":!t.networkOnLine,data:e},on:{deleteProduct:t.deleteUserProduct}})}))],2)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-item"},[r("router-link",{staticClass:"product-link",attrs:{to:{name:"product",params:{id:t.data.id}}}},[t._v(" #"+t._s(t.index)+" "+t._s(t.data.name)+" ")]),t.disableActions?t._e():r("div",{staticClass:"delete-btn",on:{click:function(e){return t.$emit("deleteProduct",t.data.id)}}},[t._v(" "+t._s(t.isProductDeletionPending?"delete in progress...":"delete")+" ")])],1)},u=[],d={props:{data:Object,index:Number,isProductDeletionPending:Boolean,disableActions:Boolean}},l=d,p=(r("aea3"),r("2877")),b=Object(p["a"])(l,s,u,!1,null,"b93f94d0",null),f=b.exports;function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(r,!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v={components:{ProductItem:f},computed:P({},Object(c["c"])("products",["isProductDeletionPending"]),{},Object(c["e"])("products",["products"]),{},Object(c["e"])("app",["networkOnLine"])),methods:Object(c["b"])("products",["deleteUserProduct"])},m=v,j=(r("1b90"),Object(p["a"])(m,i,a,!1,null,"65878744",null)),y=j.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-action-bar"},[r("input",{staticClass:"product-name-input",attrs:{placeholder:"product name...",type:"text"},domProps:{value:t.productNameToCreate},on:{input:function(e){return t.setProductNameToCreate(e.target.value)},keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.triggerAddProductAction(e)}}}),r("div",{staticClass:"create-product-btn",class:{disabled:t.productCreationPending},on:{click:t.triggerAddProductAction}},[t._v(" add product ")])])},_=[];function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(r,!0).forEach((function(e){C(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function C(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var D={computed:Object(c["e"])("products",["productNameToCreate","productCreationPending"]),methods:k({},Object(c["d"])("products",["setProductNameToCreate"]),{},Object(c["b"])("products",["triggerAddProductAction"]))},x=D,A=(r("2ab4"),Object(p["a"])(x,w,_,!1,null,"f640a2a0",null)),E=A.exports,L={components:{ProductList:y,AddProduct:E},computed:Object(c["e"])("app",["networkOnLine"])},N=L,$=(r("32e1"),Object(p["a"])(N,n,o,!1,null,"571756af",null));e["default"]=$.exports},ffd2:function(t,e,r){}}]);
//# sourceMappingURL=client-chunk-products.9796385b.js.map