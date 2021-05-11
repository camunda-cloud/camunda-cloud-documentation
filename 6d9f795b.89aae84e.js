(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{343:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(662)),i={id:"index",title:"Kubernetes deployment",sidebar_label:"Overview"},c={unversionedId:"product-manuals/zeebe/deployment-guide/kubernetes/index",id:"product-manuals/zeebe/deployment-guide/kubernetes/index",isDocsHomePage:!1,title:"Kubernetes deployment",description:"We recommend that you use Kubernetes when deploying Zeebe to production.",source:"@site/docs/product-manuals/zeebe/deployment-guide/kubernetes/index.md",slug:"/product-manuals/zeebe/deployment-guide/kubernetes/index",permalink:"/docs/product-manuals/zeebe/deployment-guide/kubernetes/index",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/kubernetes/index.md",version:"current",sidebar_label:"Overview",sidebar:"Product Manuals",previous:{title:"Docker container",permalink:"/docs/product-manuals/zeebe/deployment-guide/docker/install"},next:{title:"Helm charts",permalink:"/docs/product-manuals/zeebe/deployment-guide/kubernetes/helm/index"}},l=[{value:"Deployment options",id:"deployment-options",children:[]},{value:"General information",id:"general-information",children:[{value:"Broker",id:"broker",children:[]},{value:"Gateway",id:"gateway",children:[]}]}],u={rightToc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We recommend that you use Kubernetes when deploying Zeebe to production."),Object(a.b)("h2",{id:"deployment-options"},"Deployment options"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Option"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comment"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/product-manuals/zeebe/deployment-guide/kubernetes/helm/index"}),"Helm")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Helm allows you to choose exactly what chart (set of components) do you want to install and how these components needs to be configured.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(a.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/product-manuals/zeebe/deployment-guide/kubernetes/operator/zeebe-operator"}),"Zeebe Operator (experimental)")),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"The objective of the Zeebe k8s Operator is to simplify and natively integrate Zeebe with k8s, to solve operational burden and facilitate the creation and maintenance of a set of clusters.")))),Object(a.b)("h2",{id:"general-information"},"General information"),Object(a.b)("h3",{id:"broker"},"Broker"),Object(a.b)("p",null,"Zeebe broker nodes need to be deployed as a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"}),"StatefulSet"),", in order to preserve the identity of cluster nodes. StatefulSets require persistent storage, which needs to be allocated in advance. Depending on your cloud provider, the persistent storage will differ, as it is provider-specific."),Object(a.b)("p",null,"In the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe-kubernetes"}),"zeebe-kubernetes")," repository you will find example Kubernetes manifests to configure a three broker cluster with the Elastic Search exporter and the Operate preview. Examples are provided for provisioning storage on Google Cloud Platform, and Microsoft Azure."),Object(a.b)("p",null,"There are many ways that you can provision and configure a Kubernetes cluster. And there are a number of architectural choices you need to make: will your workers run in the Kubernetes cluster or external to it?"),Object(a.b)("p",null,"You will need to configure your Kubernetes cluster and modify this to suit the architecture you are building."),Object(a.b)("h3",{id:"gateway"},"Gateway"),Object(a.b)("p",null,"Zeebe gateway is deployed as a stateless service."),Object(a.b)("p",null,"We support ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/health#gateway"}),"Kubernetes startup and liveness probes")," for Zeebe gateway."))}d.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),d=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||s[p]||a;return n?o.a.createElement(m,c(c({ref:t},u),{},{components:n})):o.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);