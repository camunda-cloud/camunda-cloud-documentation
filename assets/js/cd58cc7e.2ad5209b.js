(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[90915],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return p}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,b=d["".concat(u,".").concat(p)]||d[p]||f[p]||o;return t?r.createElement(b,l(l({ref:n},s),{},{components:t})):r.createElement(b,l({ref:n},s))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},71509:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u},default:function(){return s}});var r=t(22122),i=t(19756),o=(t(67294),t(3905)),l={id:"feel-built-in-functions-boolean",title:"Boolean Functions"},a={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-boolean",id:"version-1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean",isDocsHomePage:!1,title:"Boolean Functions",description:"not()",source:"@site/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-boolean",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean.md",version:"1.0",frontMatter:{id:"feel-built-in-functions-boolean",title:"Boolean Functions"},sidebar:"version-1.0/Reference",previous:{title:"Conversion Functions",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-conversion"},next:{title:"String Functions",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-string"}},u=[{value:"not()",id:"not",children:[]},{value:"is defined()",id:"is-defined",children:[]}],c={toc:u};function s(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"not"},"not()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"negand"),": boolean"))),(0,o.kt)("li",{parentName:"ul"},"result: boolean")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"not(true)\n// false\n")),(0,o.kt)("h2",{id:"is-defined"},"is defined()"),(0,o.kt)("p",null,"Checks if a given value is defined or not. A value is defined if it exists, and it is an instance of one of the FEEL data types including ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,o.kt)("p",null,"The function can be used to check if a variable, or a context entry (e.g. a property of a variable) exists. It allows differentiating between a variable that is ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and a value that doesn't exist.   "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"parameters:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value"),": any"))),(0,o.kt)("li",{parentName:"ul"},"result: boolean")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'is defined(1)\n// true\n\nis defined(null)\n// true\n\nis defined(x)\n// false - if no variable "x" exists\n\nis defined(x.y)\n// false - if no variable "x" exists or it doesn\'t have a property "y"\n')))}s.isMDXComponent=!0}}]);