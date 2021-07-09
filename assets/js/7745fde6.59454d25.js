(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[16578],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),m=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,f=c["".concat(u,".").concat(p)]||c[p]||s[p]||i;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27059:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),l={id:"feel-built-in-functions-conversion",title:"Conversion Functions"},o={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-conversion",id:"version-1.0/reference/feel/builtin-functions/feel-built-in-functions-conversion",isDocsHomePage:!1,title:"Conversion Functions",description:"Convert a value into a different type.",source:"@site/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-conversion.md",sourceDirName:"reference/feel/builtin-functions",slug:"/reference/feel/builtin-functions/feel-built-in-functions-conversion",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-conversion",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/feel/builtin-functions/feel-built-in-functions-conversion.md",version:"1.0",frontMatter:{id:"feel-built-in-functions-conversion",title:"Conversion Functions"},sidebar:"version-1.0/Reference",previous:{title:"Expressions",permalink:"/docs/1.0/reference/feel/language-guide/feel-expression"},next:{title:"Boolean Functions",permalink:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-boolean"}},u=[{value:"date()",id:"date",children:[]},{value:"time()",id:"time",children:[]},{value:"date and time()",id:"date-and-time",children:[]},{value:"duration()",id:"duration",children:[]},{value:"years and months duration()",id:"years-and-months-duration",children:[]},{value:"number()",id:"number",children:[]},{value:"string()",id:"string",children:[]},{value:"context()",id:"context",children:[]}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Convert a value into a different type."),(0,i.kt)("h2",{id:"date"},"date()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": string / date-time"),(0,i.kt)("li",{parentName:"ul"},"or ",(0,i.kt)("inlineCode",{parentName:"li"},"year"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"month"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"day"),": number "))),(0,i.kt)("li",{parentName:"ul"},"result: date")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'date(birthday) \n// date("2018-04-29")\n\ndate(date and time("2012-12-25T11:00:00"))\n// date("2012-12-25")\n\ndate(2012, 12, 25)\n// date("2012-12-25")\n')),(0,i.kt)("h2",{id:"time"},"time()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": string / date-time"),(0,i.kt)("li",{parentName:"ul"},"or ",(0,i.kt)("inlineCode",{parentName:"li"},"hour"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"minute"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"second"),": number ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"offset"),": day-time-duration"))))),(0,i.kt)("li",{parentName:"ul"},"result: time")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'time(lunchTime) \n// time("12:00:00")\n\ntime(date and time("2012-12-25T11:00:00"))\n// time("11:00:00")\n\ntime(23, 59, 0)\n// time("23:59:00")\n\ntime(14, 30, 0, duration("PT1H"))\n// time("15:30:00")\n')),(0,i.kt)("h2",{id:"date-and-time"},"date and time()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"),": date / date-time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"time"),": time"),(0,i.kt)("li",{parentName:"ul"},"or ",(0,i.kt)("inlineCode",{parentName:"li"},"from"),": string "))),(0,i.kt)("li",{parentName:"ul"},"result: date-time")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'date and time(date("2012-12-24"),time("T23:59:00")) \n// date and time("2012-12-24T23:59:00")\n\ndate and time(date and time("2012-12-25T11:00:00"),time("T23:59:00"))\n// date and time("2012-12-25T23:59:00")\n\ndate and time(birthday) \n// date and time("2018-04-29T009:30:00")\n')),(0,i.kt)("h2",{id:"duration"},"duration()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: day-time-duration or year-month-duration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'duration(weekDays)\n// duration("P5D")\n\nduration(age)\n// duration("P32Y")\n')),(0,i.kt)("h2",{id:"years-and-months-duration"},"years and months duration()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": date"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to"),": date"))),(0,i.kt)("li",{parentName:"ul"},"result: year-month-duration")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'years and months duration(date("2011-12-22"), date("2013-08-24"))\n// duration("P1Y8M")\n')),(0,i.kt)("h2",{id:"number"},"number()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": string"))),(0,i.kt)("li",{parentName:"ul"},"result: number")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'number("1500.5") \n// 1500.5\n')),(0,i.kt)("h2",{id:"string"},"string()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": any"))),(0,i.kt)("li",{parentName:"ul"},"result: string")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'string(1.1) \n// "1.1"\n\nstring(date("2012-12-25"))\n// "2012-12-25"\n')),(0,i.kt)("h2",{id:"context"},"context()"),(0,i.kt)("p",null,"Constructs a context of the given list of key-value pairs. It is the reverse function to ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/reference/feel/builtin-functions/feel-built-in-functions-context#get-entries"},"get entries()"),"."),(0,i.kt)("p",null,"Each key-value pair must be a context with two entries: ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),". The entry with name ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," must have a value of the type ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",null,"It might override context entries if the keys are equal. The entries are overridden in the same order as the contexts in the given list.    "),(0,i.kt)("p",null,"Returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if one of the entries is not a context, or if a context doesn't contain the required entries."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entries"),": list of contexts "))),(0,i.kt)("li",{parentName:"ul"},"result: context  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'context([{"key":"a", "value":1}, {"key":"b", "value":2}])\n// {a:1, b:2}\n')))}d.isMDXComponent=!0}}]);