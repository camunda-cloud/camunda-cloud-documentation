(window.webpackJsonp=window.webpackJsonp||[]).push([[447],{514:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return s})),t.d(r,"Tag",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),a=t(7),i=(t(0),t(662)),c={id:"variables",title:"variables"},o={unversionedId:"reference/tasklist-api/queries/variables",id:"reference/tasklist-api/queries/variables",isDocsHomePage:!1,title:"variables",description:"<span",source:"@site/docs/reference/tasklist-api/queries/variables.mdx",slug:"/reference/tasklist-api/queries/variables",permalink:"/docs/reference/tasklist-api/queries/variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/tasklist-api/queries/variables.mdx",version:"current",sidebar:"Reference",previous:{title:"tasks",permalink:"/docs/reference/tasklist-api/queries/tasks"},next:{title:"claimTask",permalink:"/docs/reference/tasklist-api/mutations/claim-task"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l=function(e){var r=e.children,t=e.color;return Object(i.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},r)},u={rightToc:s,Tag:l};function b(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Get a collection of Variables by name"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-graphql"}),"variables(\n  taskId: String!\n  variableNames: [String!]!\n): [Variable!]!\n\n")),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"taskid-string"},Object(i.b)("inlineCode",{parentName:"h4"},"taskId")," (",Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(i.b)("inlineCode",{parentName:"a"},"String!")),")"),Object(i.b)("h4",{id:"variablenames-string"},Object(i.b)("inlineCode",{parentName:"h4"},"variableNames")," (",Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/scalars/string"}),Object(i.b)("inlineCode",{parentName:"a"},"[String!]!")),")"),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("h4",{id:"variable"},Object(i.b)("a",Object(n.a)({parentName:"h4"},{href:"/docs/reference/tasklist-api/objects/variable"}),Object(i.b)("inlineCode",{parentName:"a"},"Variable"))),Object(i.b)("p",null,"Variable used in task."))}b.isMDXComponent=!0},662:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(t),d=n,f=b["".concat(c,".").concat(d)]||b[d]||p[d]||i;return t?a.a.createElement(f,o(o({ref:r},l),{},{components:t})):a.a.createElement(f,o({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);