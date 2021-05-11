(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{391:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(662)),l={id:"feel-built-in-functions-conversion",title:"Conversion functions"},c={unversionedId:"reference/feel/builtin-functions/feel-built-in-functions-conversion",id:"version-0.26/reference/feel/builtin-functions/feel-built-in-functions-conversion",isDocsHomePage:!1,title:"Conversion functions",description:"Convert a value into a different type.",source:"@site/versioned_docs/version-0.26/reference/feel/builtin-functions/feel-built-in-functions-conversion.md",slug:"/reference/feel/builtin-functions/feel-built-in-functions-conversion",permalink:"/docs/0.26/reference/feel/builtin-functions/feel-built-in-functions-conversion",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/feel/builtin-functions/feel-built-in-functions-conversion.md",version:"0.26",sidebar:"version-0.26/Reference",previous:{title:"Expressions",permalink:"/docs/0.26/reference/feel/language-guide/feel-expression"},next:{title:"Boolean functions",permalink:"/docs/0.26/reference/feel/builtin-functions/feel-built-in-functions-boolean"}},o=[{value:"<code>date()</code>",id:"date",children:[]},{value:"<code>time()</code>",id:"time",children:[]},{value:"<code>date and time()</code>",id:"date-and-time",children:[]},{value:"<code>duration()</code>",id:"duration",children:[]},{value:"<code>years and months duration()</code>",id:"years-and-months-duration",children:[]},{value:"<code>number()</code>",id:"number",children:[]},{value:"<code>string()</code>",id:"string",children:[]}],b={rightToc:o};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Convert a value into a different type."),Object(i.b)("h2",{id:"date"},Object(i.b)("inlineCode",{parentName:"h2"},"date()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string / date-time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"year"),", ",Object(i.b)("inlineCode",{parentName:"li"},"month"),", ",Object(i.b)("inlineCode",{parentName:"li"},"day"),": number "))),Object(i.b)("li",{parentName:"ul"},"result: date")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date(birthday) \n// date("2018-04-29")\n\ndate(date and time("2012-12-25T11:00:00"))\n// date("2012-12-25")\n\ndate(2012, 12, 25)\n// date("2012-12-25")\n')),Object(i.b)("h2",{id:"time"},Object(i.b)("inlineCode",{parentName:"h2"},"time()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string / date-time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"hour"),", ",Object(i.b)("inlineCode",{parentName:"li"},"minute"),", ",Object(i.b)("inlineCode",{parentName:"li"},"second"),": number ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"(optional) ",Object(i.b)("inlineCode",{parentName:"li"},"offset"),": day-time-duration"))))),Object(i.b)("li",{parentName:"ul"},"result: time")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'time(lunchTime) \n// time("12:00:00")\n\ntime(date and time("2012-12-25T11:00:00"))\n// time("11:00:00")\n\ntime(23, 59, 0)\n// time("23:59:00")\n\ntime(14, 30, 0, duration("PT1H"))\n// time("15:30:00")\n')),Object(i.b)("h2",{id:"date-and-time"},Object(i.b)("inlineCode",{parentName:"h2"},"date and time()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"date"),": date / date-time"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"time"),": time"),Object(i.b)("li",{parentName:"ul"},"or ",Object(i.b)("inlineCode",{parentName:"li"},"from"),": string "))),Object(i.b)("li",{parentName:"ul"},"result: date-time")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'date and time(date("2012-12-24"),time("T23:59:00")) \n// date and time("2012-12-24T23:59:00")\n\ndate and time(date and time("2012-12-25T11:00:00"),time("T23:59:00"))\n// date and time("2012-12-25T23:59:00")\n\ndate and time(birthday) \n// date and time("2018-04-29T009:30:00")\n')),Object(i.b)("h2",{id:"duration"},Object(i.b)("inlineCode",{parentName:"h2"},"duration()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: day-time-duration or year-month-duration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'duration(weekDays)\n// duration("P5D")\n\nduration(age)\n// duration("P32Y")\n')),Object(i.b)("h2",{id:"years-and-months-duration"},Object(i.b)("inlineCode",{parentName:"h2"},"years and months duration()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": date"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"to"),": date"))),Object(i.b)("li",{parentName:"ul"},"result: year-month-duration")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'years and months duration(date("2011-12-22"), date("2013-08-24"))\n// duration("P1Y8M")\n')),Object(i.b)("h2",{id:"number"},Object(i.b)("inlineCode",{parentName:"h2"},"number()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": string"))),Object(i.b)("li",{parentName:"ul"},"result: number")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'number("1500.5") \n// 1500.5\n')),Object(i.b)("h2",{id:"string"},Object(i.b)("inlineCode",{parentName:"h2"},"string()")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"parameters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"from"),": any"))),Object(i.b)("li",{parentName:"ul"},"result: string")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'string(1.1) \n// "1.1"\n\nstring(date("2012-12-25"))\n// "2012-12-25"\n')))}u.isMDXComponent=!0},662:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return s}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),u=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,s=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return t?r.a.createElement(s,c(c({ref:n},b),{},{components:t})):r.a.createElement(s,c({ref:n},b))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=p;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=t[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);