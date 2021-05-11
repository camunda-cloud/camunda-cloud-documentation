(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),s=n(7),c=(n(0),n(662)),o={id:"event-subprocesses",title:"Event subprocess"},a={unversionedId:"reference/bpmn-processes/event-subprocesses/event-subprocesses",id:"reference/bpmn-processes/event-subprocesses/event-subprocesses",isDocsHomePage:!1,title:"Event subprocess",description:"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess.",source:"@site/docs/reference/bpmn-processes/event-subprocesses/event-subprocesses.md",slug:"/reference/bpmn-processes/event-subprocesses/event-subprocesses",permalink:"/docs/reference/bpmn-processes/event-subprocesses/event-subprocesses",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/bpmn-processes/event-subprocesses/event-subprocesses.md",version:"current",sidebar:"Reference",previous:{title:"Call activities",permalink:"/docs/reference/bpmn-processes/call-activities/call-activities"},next:{title:"Overview",permalink:"/docs/reference/bpmn-processes/markers"}},i=[{value:"Variables",id:"variables",children:[]},{value:"Additional resources",id:"additional-resources",children:[{value:"XML Representation",id:"xml-representation",children:[]},{value:"References",id:"references",children:[]}]}],p={rightToc:i};function b(e){var t=e.components,o=Object(s.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"An event subprocess is a subprocess that is triggered by an event. It can be added globally to the process or locally inside an embedded subprocess."),Object(c.b)("p",null,Object(c.b)("img",{alt:"event-subprocess",src:n(848).default})),Object(c.b)("p",null,"An event subprocess must have exactly one start event of one of the following types:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/timer-events/timer-events"}),"Timer")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/message-events/message-events"}),"Message")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/error-events/error-events"}),"Error"))),Object(c.b)("p",null,"An event subprocess behaves like a boundary event but is inside the scope instead of being attached to the scope. Like a boundary event, the event subprocess can be interrupting or non-interrupting (indicated in BPMN by a solid or dashed border of the start event). The start event of the event subprocess can be triggered when its containing scope is activated."),Object(c.b)("p",null,"A non-interrupting event subprocess can be triggered multiple times. An interrupting event subprocess can be triggered only once."),Object(c.b)("p",null,"When an interrupting event subprocess is triggered then ",Object(c.b)("strong",{parentName:"p"},"all active instances")," of its containing scope are terminated, including instances of other non-interrupting event subprocesses."),Object(c.b)("p",null,"If an event subprocess is triggered then its containing scope is not completed until the triggered instance is completed."),Object(c.b)("h2",{id:"variables"},"Variables"),Object(c.b)("p",null,"Unlike a boundary event, an event subprocess is inside the scope. So, it can access and modify ",Object(c.b)("strong",{parentName:"p"},"all local variables")," of its containing scope. This is not possible with a boundary event because a boundary event is outside of the scope."),Object(c.b)("p",null,"Input mappings can be used to create new local variables in the scope of the event subprocess. These variables are only visible within the event subprocess."),Object(c.b)("p",null,"By default, the local variables of the event subprocess are not propagated (i.e. they are removed with the scope). This behavior can be customized by defining output mappings at the event subprocess. The output mappings are applied on completing the event subprocess."),Object(c.b)("h2",{id:"additional-resources"},"Additional resources"),Object(c.b)("h3",{id:"xml-representation"},"XML Representation"),Object(c.b)("p",null,"An event subprocess with an interrupting timer start event:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),'<bpmn:subProcess id="compensate-subprocess" triggeredByEvent="true">\n  <bpmn:startEvent id="cancel-order" isInterrupting="true">\n    <bpmn:timerEventDefinition>\n      <bpmn:timeDuration>PT5M</bpmn:timeDuration>\n    </bpmn:timerEventDefinition>\n  ... other elements\n</bpmn:subProcess>\n')),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/embedded-subprocesses/embedded-subprocesses"}),"Embedded subprocess")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/variables#variable-scopes"}),"Variable scopes"))))}b.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),s=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=s.a.createContext({}),b=function(e){var t=s.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=b(e.components);return s.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||l[d]||c;return n?s.a.createElement(m,a(a({ref:t},p),{},{components:n})):s.a.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<c;p++)o[p]=n[p];return s.a.createElement.apply(null,o)}return s.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},848:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/event-subprocess-0cfa6f43ac303689b827b52124473329.png"}}]);