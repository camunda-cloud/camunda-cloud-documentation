(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[30807],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return c}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(t),c=l,k=s["".concat(u,".").concat(c)]||s[c]||m[c]||i;return t?a.createElement(k,r(r({ref:n},d),{},{components:t})):a.createElement(k,r({ref:n},d))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=s;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},44663:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return r},metadata:function(){return o},toc:function(){return u},default:function(){return d}});var a=t(22122),l=t(19756),i=(t(67294),t(3905)),r={id:"feel-data-types",title:"Data Types"},o={unversionedId:"reference/feel/language-guide/feel-data-types",id:"version-1.0/reference/feel/language-guide/feel-data-types",isDocsHomePage:!1,title:"Data Types",description:"A value can have one of the following types.",source:"@site/versioned_docs/version-1.0/reference/feel/language-guide/feel-data-types.md",sourceDirName:"reference/feel/language-guide",slug:"/reference/feel/language-guide/feel-data-types",permalink:"/docs/1.0/reference/feel/language-guide/feel-data-types",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-1.0/reference/feel/language-guide/feel-data-types.md",version:"1.0",frontMatter:{id:"feel-data-types",title:"Data Types"},sidebar:"version-1.0/Reference",previous:{title:"What is FEEL?",permalink:"/docs/1.0/reference/feel/what-is-feel"},next:{title:"Unary-Tests",permalink:"/docs/1.0/reference/feel/language-guide/feel-unary-tests"}},u=[{value:"Null",id:"null",children:[]},{value:"Number",id:"number",children:[]},{value:"String",id:"string",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Date",id:"date",children:[]},{value:"Time",id:"time",children:[]},{value:"Date-Time",id:"date-time",children:[]},{value:"Day-Time-Duration",id:"day-time-duration",children:[]},{value:"Year-Month-Duration",id:"year-month-duration",children:[]},{value:"List",id:"list",children:[]},{value:"Context",id:"context",children:[]}],p={toc:u};function d(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A value can have one of the following types."),(0,i.kt)("h3",{id:"null"},"Null"),(0,i.kt)("p",null,"Nothing, null or nil (i.e. the value is not present)."),(0,i.kt)("p",null,"Some operations/functions return ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if an argument in not valid or types doesn't match."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"null"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"null\n")),(0,i.kt)("h3",{id:"number"},"Number"),(0,i.kt)("p",null,"A whole or floating point number."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"not-a-number (NaN), positive/negative infinity are represented as ",(0,i.kt)("inlineCode",{parentName:"li"},"null")),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.math.BigDecimal"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"1\n2.3\n.4\n")),(0,i.kt)("h3",{id:"string"},"String"),(0,i.kt)("p",null,"A sequence of characters enclosed in double quotes ",(0,i.kt)("inlineCode",{parentName:"p"},'"'),". The sequence can also contain escaped characters starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"\\")," (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"\\'"),", ",(0,i.kt)("inlineCode",{parentName:"p"},'\\"'),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\\\"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\n"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\r"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"\\t"),", unicode like ",(0,i.kt)("inlineCode",{parentName:"p"},"\\u269D")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"\\U101EF"),")."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.lang.String"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'"valid"\n')),(0,i.kt)("h3",{id:"boolean"},"Boolean"),(0,i.kt)("p",null,"A boolean value. It is either true or false. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.lang.Boolean"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"true\nfalse\n")),(0,i.kt)("h3",{id:"date"},"Date"),(0,i.kt)("p",null,"A date value without a time component."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd"),"."),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.LocalDate"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'date("2017-03-10")\n')),(0,i.kt)("h3",{id:"time"},"Time"),(0,i.kt)("p",null,"A local or zoned time. The time can have an offset or time zone id."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"HH:mm:ss")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"HH:mm:ss+/-HH:mm")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"HH:mm:ss@ZoneId")),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.LocalTime")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.OffsetTime"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'time("11:45:30") \ntime("13:30")\n\ntime("11:45:30+02:00")\n\ntime("10:31:10@Europe/Paris")\n')),(0,i.kt)("h3",{id:"date-time"},"Date-Time"),(0,i.kt)("p",null,"A date with a local or zoned time component. The time can have an offset or time zone id."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss+/-HH:mm")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"yyyy-MM-dd'T'HH:mm:ss@ZoneId")),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.LocalDateTime")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.DateTime"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'date and time("2015-09-18T10:31:10")\n\ndate and time("2015-09-18T10:31:10+01:00")\n\ndate and time("2015-09-18T10:31:10@Europe/Paris")\n')),(0,i.kt)("h3",{id:"day-time-duration"},"Day-Time-Duration"),(0,i.kt)("p",null,"A duration based on seconds. It can contain days, hours, minutes and seconds."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"PxDTxHxMxS")),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.Duration"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'duration("P4D")\nduration("PT2H")\nduration("PT30M")\nduration("P1DT6H")\n')),(0,i.kt)("h3",{id:"year-month-duration"},"Year-Month-Duration"),(0,i.kt)("p",null,"A duration based on the calendar. It can contain years and months."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Format: ",(0,i.kt)("inlineCode",{parentName:"li"},"PxYxM")),(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.time.Period"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'duration("P2Y")\nduration("P6M")\nduration("P1Y6M")\n')),(0,i.kt)("h3",{id:"list"},"List"),(0,i.kt)("p",null,"A list of elements. Can be empty."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.util.List"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'[]\n[1,2,3]\n["a","b"]\n\n[["list"], "of", [["lists"]]]\n')),(0,i.kt)("h3",{id:"context"},"Context"),(0,i.kt)("p",null,"A list of key-value-pairs. Can be empty."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Java Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"java.util.Map"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'{}\n{"a": 1}\n{"b": 2, "c": "valid"}\n\n{"nested": {"d": 3}}\n')))}d.isMDXComponent=!0}}]);