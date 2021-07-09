(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[20098],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return i},kt:function(){return v}});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(t),v=l,k=p["".concat(u,".").concat(v)]||p[v]||c[v]||o;return t?r.createElement(k,a(a({ref:n},i),{},{components:t})):r.createElement(k,a({ref:n},i))}));function v(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,a=new Array(o);a[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:l,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},86552:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return i}});var r=t(22122),l=t(19756),o=(t(67294),t(3905)),a={id:"none-events",title:"None Events"},s={unversionedId:"product-manuals/zeebe/bpmn-workflows/none-events/none-events",id:"version-0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events",isDocsHomePage:!1,title:"None Events",description:"None events are unspecified events, also called \u2018blank\u2019 events.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events.md",sourceDirName:"product-manuals/zeebe/bpmn-workflows/none-events",slug:"/product-manuals/zeebe/bpmn-workflows/none-events/none-events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/bpmn-workflows/none-events/none-events.md",version:"0.25",frontMatter:{id:"none-events",title:"None Events"},sidebar:"version-0.25/Product Manuals",previous:{title:"Overview",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/events"},next:{title:"Message Events",permalink:"/docs/0.25/product-manuals/zeebe/bpmn-workflows/message-events/message-events"}},u=[{value:"None Start Events",id:"none-start-events",children:[]},{value:"None End Events",id:"none-end-events",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],d={toc:u};function i(e){var n=e.components,a=(0,l.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"None events are unspecified events, also called \u2018blank\u2019 events."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workflow",src:t(64362).Z})),(0,o.kt)("h2",{id:"none-start-events"},"None Start Events"),(0,o.kt)("p",null,"A workflow can have at most one none start event (besides other types of start events)."),(0,o.kt)("p",null,"A none start event is where the workflow instance or a subprocess starts when the workflow or the subprocess is activated."),(0,o.kt)("h2",{id:"none-end-events"},"None End Events"),(0,o.kt)("p",null,"A workflow or subprocess can have multiple none end events. When a none end event is entered then the current execution path ends. If the workflow instance or subprocess has no more active execution paths then it is completed."),(0,o.kt)("p",null,"If an activity has no outgoing sequence flow then it behaves the same as it would be connected to a none end event. When the activity is completed then the current execution path ends."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"XML representation"),(0,o.kt)("p",null,"A none start event:",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:startEvent id="order-placed" name="Order Placed" />\n')),(0,o.kt)("p",null,"A none end event:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'<bpmn:endEvent id="order-delivered" name="Order Delivered" />\n')))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Using the BPMN modeler"),(0,o.kt)("p",null,"Adding a none start event:",(0,o.kt)("p",null,(0,o.kt)("img",{alt:"start-event",src:t(16563).Z})," "),(0,o.kt)("p",null,"Adding a none end event:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"end-event",src:t(25899).Z})," "))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Workflow Lifecycle"),(0,o.kt)("p",null,"Workflow instance records of a none start event:",(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Intent"),(0,o.kt)("th",null,"Element Id"),(0,o.kt)("th",null,"Element Type")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATING"),(0,o.kt)("td",null,"order-placed"),(0,o.kt)("td",null,"START_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATED"),(0,o.kt)("td",null,"order-placed"),(0,o.kt)("td",null,"START_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETING"),(0,o.kt)("td",null,"order-placed"),(0,o.kt)("td",null,"START_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETED"),(0,o.kt)("td",null,"order-placed"),(0,o.kt)("td",null,"START_EVENT"))),(0,o.kt)("p",null,"Workflow instance records of a none end event: "),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Intent"),(0,o.kt)("th",null,"Element Id"),(0,o.kt)("th",null,"Element Type")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATING"),(0,o.kt)("td",null,"order-delivered"),(0,o.kt)("td",null,"END_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_ACTIVATED"),(0,o.kt)("td",null,"order-delivered"),(0,o.kt)("td",null,"END_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETING"),(0,o.kt)("td",null,"order-delivered"),(0,o.kt)("td",null,"END_EVENT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"ELEMENT_COMPLETED"),(0,o.kt)("td",null,"order-delivered"),(0,o.kt)("td",null,"END_EVENT"))))))}i.isMDXComponent=!0},25899:function(e,n,t){"use strict";n.Z=t.p+"assets/images/end-event-053e1a0753ef28edd55b88baba769afb.gif"},64362:function(e,n,t){"use strict";n.Z=t.p+"assets/images/none-events-d6a9ef4e683d8c8afa81bd0d7ff29f43.png"},16563:function(e,n,t){"use strict";n.Z=t.p+"assets/images/start-event-63f94ae0991f82347fb6ba2f35eaa121.gif"}}]);