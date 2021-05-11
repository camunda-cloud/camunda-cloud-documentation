(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{318:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(662)),c={id:"manage-users",title:"Manage users of your organization"},o={unversionedId:"product-manuals/cloud-console/manage-organization/manage-users",id:"version-0.26/product-manuals/cloud-console/manage-organization/manage-users",isDocsHomePage:!1,title:"Manage users of your organization",description:"General rights concept",source:"@site/versioned_docs/version-0.26/product-manuals/cloud-console/manage-organization/manage-users.md",slug:"/product-manuals/cloud-console/manage-organization/manage-users",permalink:"/docs/0.26/product-manuals/cloud-console/manage-organization/manage-users",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/cloud-console/manage-organization/manage-users.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Organization settings",permalink:"/docs/0.26/product-manuals/cloud-console/manage-organization/organization-settings"},next:{title:"View organization activity",permalink:"/docs/0.26/product-manuals/cloud-console/manage-organization/view-organization-activity"}},i=[{value:"General rights concept",id:"general-rights-concept",children:[]},{value:"Users",id:"users",children:[]}],b={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"general-rights-concept"},"General rights concept"),Object(l.b)("p",null,"When a user signs up to Camunda Cloud, they receive a personal organization. Clusters that the user creates in this organization are assigned to this organization."),Object(l.b)("p",null,"If several users need access to the same Zeebe cluster, all users can be assigned to the same organization."),Object(l.b)("h2",{id:"users"},"Users"),Object(l.b)("p",null,"Under this setting members of the current organization can be managed. A user can have one of the following roles:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Owner: Owner of the organization (currently limited to one user, cannot be changed by the user)"),Object(l.b)("li",{parentName:"ul"},"Admin: Restricted rights for user management"),Object(l.b)("li",{parentName:"ul"},"Member: Can manage Zeebe Clusters and Client and use Operate")),Object(l.b)("p",null,"The following table illustrates the rights of each role:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Owner"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Admin"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Member"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage Zeebe clusters"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Manage clients"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Use Operate"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Users: Manage members"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Billing: Manage reservations"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Billing: Request paid plan"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Users: Manage admins"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"X"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(l.b)("p",null,"Users are invited to a Camunda Cloud organization via their email address, which must be accepted by the user. As long as the invitation has not been accepted, the user remains in the 'Pending' state."),Object(l.b)("p",null,"People can also be invited to an organization that does not yet have a Camunda Cloud account. In this case the invited person must first create a Camunda Cloud account and then gain access to the organization."))}u.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=u(n),p=a,m=s["".concat(c,".").concat(p)]||s[p]||d[p]||l;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);