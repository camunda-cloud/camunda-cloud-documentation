(window.webpackJsonp=window.webpackJsonp||[]).push([[201],{273:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"Tag",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(449)),i={id:"user",title:"User"},o={unversionedId:"reference/tasklist-api/objects/user",id:"reference/tasklist-api/objects/user",isDocsHomePage:!1,title:"User",description:"<span",source:"@site/docs/reference/tasklist-api/objects/user.mdx",slug:"/reference/tasklist-api/objects/user",permalink:"/docs/reference/tasklist-api/objects/user",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/objects/user.mdx",version:"current",sidebar:"Reference",previous:{title:"Task",permalink:"/docs/reference/tasklist-api/objects/task"},next:{title:"Variable",permalink:"/docs/reference/tasklist-api/objects/variable"}},s=[{value:"Fields",id:"fields",children:[]}],l=function(e){var t=e.children,r=e.color;return Object(c.b)("span",{style:{backgroundColor:r,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},t)},p={rightToc:s,Tag:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Describes the user"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"type User {\n  username: ID!\n  firstname: String\n  lastname: String\n}\n")),Object(c.b)("h3",{id:"fields"},"Fields"),Object(c.b)("h4",{id:"username-id"},Object(c.b)("inlineCode",{parentName:"h4"},"username")," (",Object(c.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/id"}),Object(c.b)("inlineCode",{parentName:"a"},"ID!")),")"),Object(c.b)("h4",{id:"firstname-string"},Object(c.b)("inlineCode",{parentName:"h4"},"firstname")," (",Object(c.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(c.b)("inlineCode",{parentName:"a"},"String")),")"),Object(c.b)("h4",{id:"lastname-string"},Object(c.b)("inlineCode",{parentName:"h4"},"lastname")," (",Object(c.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(c.b)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0},449:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(f,o(o({ref:t},l),{},{components:r})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);