(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{268:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(449)),o={id:"update-billing-reservations",title:"Update billing reservations"},s={unversionedId:"product-manuals/cloud-console/manage-organization/update-billing-reservations",id:"product-manuals/cloud-console/manage-organization/update-billing-reservations",isDocsHomePage:!1,title:"Update billing reservations",description:"This setting is only visible in the Professional Plan for owners and admins.",source:"@site/docs/product-manuals/cloud-console/manage-organization/update-billing-reservations.md",slug:"/product-manuals/cloud-console/manage-organization/update-billing-reservations",permalink:"/docs/product-manuals/cloud-console/manage-organization/update-billing-reservations",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/cloud-console/manage-organization/update-billing-reservations.md",version:"current",sidebar:"Product Manuals",previous:{title:"Manage cloud management API clients",permalink:"/docs/product-manuals/cloud-console/manage-organization/manage-cloud-management-api-clients"},next:{title:"Switch organization",permalink:"/docs/product-manuals/cloud-console/manage-organization/switch-organization"}},c=[{value:"Managing reservations",id:"managing-reservations",children:[{value:"Inspect active reservations",id:"inspect-active-reservations",children:[]},{value:"Edit reservations",id:"edit-reservations",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This setting is only visible in the Professional Plan for owners and admins."))),Object(i.b)("h2",{id:"managing-reservations"},"Managing reservations"),Object(i.b)("p",null,"Once signed up for the Professional Plan, you have access to the ",Object(i.b)("inlineCode",{parentName:"p"},"Cluster Reservations")," page."),Object(i.b)("p",null,"Cluster Reservations control how many clusters you can deploy. Increasing the number of reservations allows you to deploy more clusters, decreasing the number of reservations does the opposite."),Object(i.b)("p",null,"You can access the ",Object(i.b)("inlineCode",{parentName:"p"},"Cluster Reservations")," page by selecting the menu entry ",Object(i.b)("strong",{parentName:"p"},"Organization Settings")," from the Camunda Cloud Console navigation bar."),Object(i.b)("h3",{id:"inspect-active-reservations"},"Inspect active reservations"),Object(i.b)("p",null,"The page lists available cluster types along with their specification. A cluster type has the following parameters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type")," - name of the cluster type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Current usage")," - number of clusters currently deployed for a given cluster type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reserved")," - number of clusters currently reserved. This value is important for billing. Users in your organization cannot deploy more clusters per cluster configuration than specified by this value"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Partitions")," - the number of partitions specified in the cluster configuration"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Monthly price per unit")," - the monthly price of this cluster type. Indicates the price of this cluster in dollars if used for a full month")),Object(i.b)("p",null,Object(i.b)("img",{alt:"reserved-clusters-overview",src:n(736).default})),Object(i.b)("h3",{id:"edit-reservations"},"Edit reservations"),Object(i.b)("p",null,"The number of reserved clusters can be changed with the ",Object(i.b)("inlineCode",{parentName:"p"},"Edit")," button. The number of reserved clusters cannot exceed the maximum limit and cannot go below what is currently in use."),Object(i.b)("p",null,Object(i.b)("img",{alt:"reserved-clusters-overview",src:n(737).default})))}u.isMDXComponent=!0},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},736:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/early-access-reserved-clusters-overview-72b9c80b2084a8656d145ec625576e4d.png"},737:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/early-access-reserved-clusters-edit-fbf043568421fbc34364b6a33a8c89df.png"}}]);