(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[46413],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=c,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:c,a[1]=o;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56909:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return o},toc:function(){return l},default:function(){return u}});var r=n(22122),c=n(19756),i=(n(67294),n(3905)),a={id:"setup-client-connection-credentials",title:"Setup client connection credentials"},o={unversionedId:"guides/getting-started/setup-client-connection-credentials",id:"version-0.26/guides/getting-started/setup-client-connection-credentials",isDocsHomePage:!1,title:"Setup client connection credentials",description:"To create a new client you have to navigate into the API tab:",source:"@site/versioned_docs/version-0.26/guides/getting-started/setup-client-connection-credentials.md",sourceDirName:"guides/getting-started",slug:"/guides/getting-started/setup-client-connection-credentials",permalink:"/docs/0.26/guides/getting-started/setup-client-connection-credentials",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/guides/getting-started/setup-client-connection-credentials.md",version:"0.26",frontMatter:{id:"setup-client-connection-credentials",title:"Setup client connection credentials"},sidebar:"version-0.26/Guides",previous:{title:"Create a cluster",permalink:"/docs/0.26/guides/getting-started/create-cluster"},next:{title:"Connect to your cluster",permalink:"/docs/0.26/guides/getting-started/connect-to-your-cluster"}},l=[],s={toc:l};function u(e){var t=e.components,a=(0,c.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To create a new client you have to navigate into the API tab:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cluster-details",src:n(1406).Z})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Create New Client")," to create a new client and name your client accordingly. Select ",(0,i.kt)("strong",{parentName:"p"},"Zeebe")," so the newly created client can access your Zeebe instance."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-client",src:n(48705).Z})),(0,i.kt)("p",null,"Make sure you keep the generated client credentials in a safe place - the ",(0,i.kt)("strong",{parentName:"p"},"Client Secret")," will not be shown again. For your convenience, you can also download the client information to your computer."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"created-client",src:n(15300).Z})),(0,i.kt)("p",null,"The downloaded file contains all necessary information to later on communicate with your zeebe instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_ADDRESS"),": Address where your cluster can be reached."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_ID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_SECRET"),": Credentials to request a new access token."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ZEEBE_AUTHORIZATION_SERVER_URL"),": A new token can be requested at this address, using the credentials.")))}u.isMDXComponent=!0},1406:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-detail-clients-bdb2b80afcebc558d49b1c8070f84f63.png"},48705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-details-create-client-912f9ada62c36da0d1d77de2a156d32d.png"},15300:function(e,t,n){"use strict";t.Z=n.p+"assets/images/cluster-details-created-client-9bff0c1e0e254e4c6e29b1f036d4d243.png"}}]);