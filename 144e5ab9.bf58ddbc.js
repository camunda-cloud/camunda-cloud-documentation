(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{116:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return s})),t.d(r,"Tag",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(3),a=t(7),i=(t(0),t(662)),c={id:"deprecated",title:"deprecated"},o={unversionedId:"reference/tasklist-api/directives/deprecated",id:"version-0.26/reference/tasklist-api/directives/deprecated",isDocsHomePage:!1,title:"deprecated",description:"<span",source:"@site/versioned_docs/version-0.26/reference/tasklist-api/directives/deprecated.mdx",slug:"/reference/tasklist-api/directives/deprecated",permalink:"/docs/0.26/reference/tasklist-api/directives/deprecated",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/tasklist-api/directives/deprecated.mdx",version:"0.26",sidebar:"version-0.26/Reference",previous:{title:"unclaimTask",permalink:"/docs/0.26/reference/tasklist-api/mutations/unclaim-task"},next:{title:"include",permalink:"/docs/0.26/reference/tasklist-api/directives/include"}},s=[{value:"Arguments",id:"arguments",children:[]}],p=function(e){var r=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},d={rightToc:s,Tag:p};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Marks an element of a GraphQL schema as no longer supported."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),'directive @deprecated(\n  reason: String = "No longer supported"\n)\n')),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"reason-string"},Object(i.b)("inlineCode",{parentName:"h4"},"reason")," (",Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(i.b)("inlineCode",{parentName:"a"},"String")),")"),Object(i.b)("p",null,"Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax, as specified by ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://commonmark.org/"}),"CommonMark"),"."))}l.isMDXComponent=!0},662:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),d=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=d(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(t),f=n,m=l["".concat(c,".").concat(f)]||l[f]||u[f]||i;return t?a.a.createElement(m,o(o({ref:r},p),{},{components:t})):a.a.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);