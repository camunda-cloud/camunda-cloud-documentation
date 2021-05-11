(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{164:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(7),o=(t(0),t(662)),i={id:"announcements",title:"Announcements"},c={unversionedId:"reference/announcements",id:"reference/announcements",isDocsHomePage:!1,title:"Announcements",description:"Deprecated in 0.26.0",source:"@site/docs/reference/announcements.md",slug:"/reference/announcements",permalink:"/docs/reference/announcements",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/announcements.md",version:"current",sidebar:"Reference",previous:{title:"Glossary",permalink:"/docs/reference/glossary"},next:{title:"Licenses",permalink:"/docs/reference/licenses"}},l=[{value:"Deprecated in 0.26.0",id:"deprecated-in-0260",children:[{value:"YAML workflows descriptions",id:"yaml-workflows-descriptions",children:[]}]},{value:"Deprecated in 0.23.0-alpha2",id:"deprecated-in-0230-alpha2",children:[]},{value:"Removed in 1.0",id:"removed-in-10",children:[]}],s={rightToc:l};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"deprecated-in-0260"},"Deprecated in 0.26.0"),Object(o.b)("h3",{id:"yaml-workflows-descriptions"},"YAML workflows descriptions"),Object(o.b)("p",null,"YAML workflows are an alternative way to specify simple workflows using a proprietary YAML description. This feature is deprecated and no longer advertised in the documentation. YAML workflows gained little traction with users and we do not intend to support them in the future."),Object(o.b)("p",null,"We recommend all users of YAML workflows to migrate to BPMN workflows as soon as possible. The feature will be removed completely at some point. The date when this happens has yet to be defined."),Object(o.b)("h2",{id:"deprecated-in-0230-alpha2"},"Deprecated in 0.23.0-alpha2"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TOML configuration - deprecated and removed in 0.23.0-alpha2"),Object(o.b)("li",{parentName:"ul"},"Legacy environment variables - deprecated in 0.23.0-alpha2, removed in 0.25.0")),Object(o.b)("p",null,"New configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"exporters:\n  elasticsearch:\n    className: io.camunda.zeebe.exporter.ElasticsearchExporter\n  debughttp:\n    className: io.camunda.zeebe.broker.exporter.debug.DebugHttpExporter\n")),Object(o.b)("p",null,"In terms of specifying values, there were two minor changes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Memory sizes are now specified like this: ",Object(o.b)("inlineCode",{parentName:"li"},"512MB")," (old way: ",Object(o.b)("inlineCode",{parentName:"li"},"512M"),")"),Object(o.b)("li",{parentName:"ul"},"Durations, e.g. timeouts, can now also be given in ISO-8601 Durations format. However you can still use the established way and specify a timeout of ",Object(o.b)("inlineCode",{parentName:"li"},"30s"))),Object(o.b)("h2",{id:"removed-in-10"},"Removed in 1.0"),Object(o.b)("p",null,"The support for yaml processes was removed as of release 1.0. The ",Object(o.b)("inlineCode",{parentName:"p"},"resourceType")," in Deployment record and Process grpc request are deprecated, they will always contain ",Object(o.b)("inlineCode",{parentName:"p"},"BPMN")," as value."))}p.isMDXComponent=!0},662:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),p=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},s),{},{components:t})):a.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);