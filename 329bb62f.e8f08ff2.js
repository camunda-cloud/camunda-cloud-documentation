(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(662)),c={id:"selections-operations",title:"Selections and operations"},s={unversionedId:"product-manuals/operate/userguide/selections-operations",id:"product-manuals/operate/userguide/selections-operations",isDocsHomePage:!1,title:"Selections and operations",description:"In some cases, you\u2019ll need to retry or cancel many process instances at once. Operate also supports this type of operation.",source:"@site/docs/product-manuals/operate/userguide/selections-operations.md",slug:"/product-manuals/operate/userguide/selections-operations",permalink:"/docs/product-manuals/operate/userguide/selections-operations",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/operate/userguide/selections-operations.md",version:"current",sidebar:"Product Manuals",previous:{title:"Variables and incidents",permalink:"/docs/product-manuals/operate/userguide/resolve-incidents-update-variables"},next:{title:"Giving feedback and asking questions",permalink:"/docs/product-manuals/operate/userguide/operate-feedback-and-questions"}},i=[],u={rightToc:i};function p(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In some cases, you\u2019ll need to retry or cancel many process instances at once. Operate also supports this type of operation."),Object(o.b)("p",null,"Imagine a case where many process instances have an incident caused by the same issue. At some point, the underlying problem will have been resolved (for example, maybe a microservice was down for an extended period of time then was brought back up). "),Object(o.b)("p",null,"But even though the underlying problem was resolved, the affected process instances are stuck until they are \u201cretried\u201d."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(917).default})),Object(o.b)("p",null,"Let's create a ",Object(o.b)("em",{parentName:"p"},"selection")," in Operate. A selection is simply a set of process instances on which you can carry out a batch retry or batch cancellation. To create a selection, check the box next to the process instances you'd like to include, then click on the blue ",Object(o.b)("inlineCode",{parentName:"p"},"Apply Operation on N Instances")," button. "),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(918).default})),Object(o.b)("p",null,"Then select the operation you want to apply."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(919).default})),Object(o.b)("p",null,"After confirmation you can see the ",Object(o.b)("em",{parentName:"p"},"Operations")," panel with current status of all operations."),Object(o.b)("p",null,Object(o.b)("img",{alt:"operate-batch-retry",src:n(920).default})))}p.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(n),b=r,f=l["".concat(c,".").concat(b)]||l[b]||d[b]||o;return n?a.a.createElement(f,s(s({ref:t},u),{},{components:n})):a.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},917:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-many-instances-with-incident_light-0b36349ef01b64f7daa47ab5259972bc.png"},918:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-create-selection_light-12197a95eb90c1d6a867bd6d535c2ef5.png"},919:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-select-operation_light-63ed49ca5cb30fbb77fed40630161824.png"},920:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-operations-panel_light-506c85645f8810759564aef85cdfaa2d.png"}}]);