(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[81569],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=c,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21597:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),c=n(19756),o=(n(67294),n(3905)),a={id:"index",sidebar_label:"Overview",title:"Technical concepts"},i={unversionedId:"product-manuals/zeebe/technical-concepts/index",id:"version-0.26/product-manuals/zeebe/technical-concepts/index",isDocsHomePage:!1,title:"Technical concepts",description:"This chapter gives an overview of Zeebe's underlying technical concepts:",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/technical-concepts/index.md",sourceDirName:"product-manuals/zeebe/technical-concepts",slug:"/product-manuals/zeebe/technical-concepts/index",permalink:"/docs/0.26/product-manuals/zeebe/technical-concepts/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/technical-concepts/index.md",version:"0.26",sidebar_label:"Overview",frontMatter:{id:"index",sidebar_label:"Overview",title:"Technical concepts"},sidebar:"version-0.26/Product Manuals",previous:{title:"Zeebe Engine",permalink:"/docs/0.26/product-manuals/zeebe/zeebe-overview"},next:{title:"Architecture",permalink:"/docs/0.26/product-manuals/zeebe/technical-concepts/architecture"}},l=[],s={toc:l};function u(e){var t=e.components,n=(0,c.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This chapter gives an overview of Zeebe's underlying technical concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/architecture"},"Architecture")," - introduces you to the internal components of Zeebe, as well as, interfaces for external systems to interact with Zeebe."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/clustering"},"Clustering")," - discusses the internal structure and propperties of a Zeebe cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/partitions"},"Partitions")," - sheds light on how Zeebe achives horizontal sclability"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/internal-processing"},"Internal processing")," - explains the basics of Zeebe's event processing"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/workflow-lifecycles"},"Workflow lifecycles")," - expands on the event processing concept and goes into more detail regarding the lifecycles of selected workflow elements"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/protocols"},"Protocols")," - explains how external clients communicate with Zeebe"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/0.26/product-manuals/zeebe/technical-concepts/exporters"},"Exporters")," - discusses the extension point to add additional processing logic for each record in the event stream")))}u.isMDXComponent=!0}}]);