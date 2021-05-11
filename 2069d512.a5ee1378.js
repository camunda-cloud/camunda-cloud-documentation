(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(3),o=t(7),a=(t(0),t(662)),i={id:"environment-variables",title:"Environment variables"},l={unversionedId:"product-manuals/zeebe/deployment-guide/configuration/environment-variables",id:"product-manuals/zeebe/deployment-guide/configuration/environment-variables",isDocsHomePage:!1,title:"Environment variables",description:"Environment variables for configuration",source:"@site/docs/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",slug:"/product-manuals/zeebe/deployment-guide/configuration/environment-variables",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/environment-variables",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/configuration/environment-variables.md",version:"current",sidebar:"Product Manuals",previous:{title:"Gateway health probes",permalink:"/docs/product-manuals/zeebe/deployment-guide/configuration/gateway-health-probes"},next:{title:"Security",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/security"}},c=[{value:"Environment variables for configuration",id:"environment-variables-for-configuration",children:[]},{value:"Environment variables for operators",id:"environment-variables-for-operators",children:[]},{value:"Environment variables for developers",id:"environment-variables-for-developers",children:[]}],u={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"environment-variables-for-configuration"},"Environment variables for configuration"),Object(a.b)("p",null,"The configuration can be provided as a file or through environment variables. Mixing both sources is also possible. In that case environment variables have precedence over the configuration settings in the configuration file."),Object(a.b)("p",null,"All available environment variables are documented in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"configuration/#configuration-file-templates"}),"configuration file templates"),"."),Object(a.b)("h2",{id:"environment-variables-for-operators"},"Environment variables for operators"),Object(a.b)("p",null,"The following environment variables are intended for operators:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_LOG_LEVEL"),": Sets the log level of the Zeebe Logger (default: ",Object(a.b)("inlineCode",{parentName:"li"},"info"),")."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_LOG_APPENDER"),": Sets the console log appender (default: ",Object(a.b)("inlineCode",{parentName:"li"},"Console"),"). We recommend using ",Object(a.b)("inlineCode",{parentName:"li"},"Stackdriver")," if Zeebe runs on Google Cloud Platform to output JSON formatted log messages")),Object(a.b)("h2",{id:"environment-variables-for-developers"},"Environment variables for developers"),Object(a.b)("p",null,"The following environment variables are intended for developers:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"SPRING_PROFILES_ACTIVE=dev"),": If this is set, the broker will start in a temporary folder and all data will be cleaned up upon exit"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_DEBUG=true/false"),": Activates a ",Object(a.b)("inlineCode",{parentName:"li"},"DebugLogExporter")," with default settings. The value of the environment variable toggles pretty printing")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: It is not recommended to use these settings in production.")))}s.isMDXComponent=!0},662:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=r,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return t?o.a.createElement(m,l(l({ref:n},u),{},{components:t})):o.a.createElement(m,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);