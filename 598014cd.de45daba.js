(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(662)),c={id:"cloud-console-api-clients",title:"Console API clients"},i={unversionedId:"reference/cloud-console-api-clients",id:"version-0.26/reference/cloud-console-api-clients",isDocsHomePage:!1,title:"Console API clients",description:"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud API Clients.",source:"@site/versioned_docs/version-0.26/reference/cloud-console-api-clients.md",slug:"/reference/cloud-console-api-clients",permalink:"/docs/0.26/reference/cloud-console-api-clients",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/reference/cloud-console-api-clients.md",version:"0.26",sidebar:"version-0.26/Reference",previous:{title:"Overview",permalink:"/docs/0.26/reference/"},next:{title:"Console API (REST)",permalink:"/docs/0.26/reference/cloud-console-api-reference"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"To interact with Camunda Cloud programmatically, without using the Camunda Cloud UI, you can create Cloud API Clients."),Object(o.b)("p",null,"Cloud API clients are created for an organization, an therefore can access all Zeebe clusters of this organization."),Object(o.b)("p",null,"You can create Cloud API clients in the organization settings."),Object(o.b)("p",null,"A client can have one or multiple of the following permissions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Get Clusters")," - retrieve information of all clusters of the organization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Create Clusters")," - create a cluster for the organization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Delete Clusters")," - delete a cluster of the organization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Get Zeebe Clients")," - retieve all Zeebe clients of the organization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Create Zeebe Clients")," - create a Zeebe client for a cluster of the organization"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Delete Zeebe Clients")," - delete a Zeebe client of a cluster owned by the organization")),Object(o.b)("p",null,"After a Cloud API client is created, the ",Object(o.b)("inlineCode",{parentName:"p"},"Client Secret")," is only shown once! Please write it down somewhere save!"),Object(o.b)("p",null,"To retrieve a access token for the Cloud API client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl --header "Content-Type: application/json" \\\n    --request POST \\\n    --data \'{"grant_type":"client_credentials", "audience":"api.cloud.camunda.io", "client_id":"XXX", "client_secret":"YYY"}\' \\\n    https://login.cloud.camunda.io/oauth/token\n')),Object(o.b)("p",null,"Please note:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Access tokens have a validity period that can be found in the access token. After this time a new access token must be requested."),Object(o.b)("li",{parentName:"ul"},"The auth service has a built-in rate limiting. If too many token requests are executed in a short time, the client is blocked for a certain time. Since the access tokens have a certain validity period, they must be cached on the client side.")))}u.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?a.a.createElement(f,i(i({ref:t},s),{},{components:n})):a.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);