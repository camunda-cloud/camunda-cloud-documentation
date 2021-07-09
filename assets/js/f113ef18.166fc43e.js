(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[53110],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=c(n),m=i,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||l;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=f;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},63272:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u},default:function(){return s}});var r=n(22122),i=n(19756),l=(n(67294),n(3905)),a={id:"feel-built-in-functions-context",title:"Context Functions"},o={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-context",id:"reference/feel/builtin-functions/feel-built-in-functions-context",isDocsHomePage:!1,title:"Context Functions",description:"get value()",source:"@site/docs/reference/feel/builtin-functions/feel-built-in-functions-context.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-context",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-context",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/feel/builtin-functions/feel-built-in-functions-context.md",version:"current",frontMatter:{id:"feel-built-in-functions-context",title:"Context Functions"},sidebar:"Reference",previous:{title:"List Functions",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-list"},next:{title:"Temporal Functions",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-temporal"}},u=[{value:"get value()",id:"get-value",children:[]},{value:"get entries()",id:"get-entries",children:[]},{value:"put()",id:"put",children:[]},{value:"put all()",id:"put-all",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"get-value"},"get value()"),(0,l.kt)("p",null,"Returns the value of the context entry with the given key."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context"),": context"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key"),": string"))),(0,l.kt)("li",{parentName:"ul"},"result: any")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'get value({foo: 123}, "foo") \n// 123\n')),(0,l.kt)("h2",{id:"get-entries"},"get entries()"),(0,l.kt)("p",null,"Returns the entries of the context as list of key-value-pairs."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context"),": context"))),(0,l.kt)("li",{parentName:"ul"},'result: list of context which contains two entries for "key" and "value"')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'get entries({foo: 123})\n// [{key: "foo", value: 123}]\n')),(0,l.kt)("h2",{id:"put"},"put()"),(0,l.kt)("p",null,"Add the given key and value to a context. Returns a new context that includes the entry. It might override an existing entry of the context.  "),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if the value is not defined."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"context"),": context"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key"),": string"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value"),": any"))),(0,l.kt)("li",{parentName:"ul"},"result: context  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'put({x:1}, "y", 2)\n// {x:1, y:2}\n')),(0,l.kt)("h2",{id:"put-all"},"put all()"),(0,l.kt)("p",null,"Union the given contexts (two or more). Returns a new context that includes all entries of the given contexts. It might override context entries if the keys are equal. The entries are overridden in the same order as the contexts are passed in the method.    "),(0,l.kt)("p",null,"Returns ",(0,l.kt)("inlineCode",{parentName:"p"},"null")," if one of the values is not a context."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contexts"),": contexts as varargs"))),(0,l.kt)("li",{parentName:"ul"},"result: context  ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"put all({x:1}, {y:2})\n// {x:1, y:2}\n")))}s.isMDXComponent=!0}}]);