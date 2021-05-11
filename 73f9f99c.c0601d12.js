(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{1057:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-advanced-process-id-5eb4153cdfac8cc641ba997d139c9b2a.png"},1058:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-advanced-6b5bd0dd88f8aa9f4f2bf7e3955f5621.png"},1059:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/zeebe-modeler-advanced-sequence-flows-92ff55120b81cb2dcc7a14d28e3db800.png"},1060:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-pong-b16f917637acc912e6fcd0f0d8742d8b.png"},1061:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-other-28664877aec067064cf47d0d9647cbdd.png"},1062:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/operate-advanced-instances-ee0c07d9130b2cfbed34b0bc17ebfdc7.png"},358:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),c=n(7),r=(n(0),n(662)),s={id:"get-started",title:"CLI client - Getting started guide",sidebar_label:"Getting started guide"},l={unversionedId:"product-manuals/clients/cli-client/get-started",id:"product-manuals/clients/cli-client/get-started",isDocsHomePage:!1,title:"CLI client - Getting started guide",description:"In this tutorial, you will learn to use the CLI client zbctl to interact with Camunda Cloud.",source:"@site/docs/product-manuals/clients/cli-client/get-started.md",slug:"/product-manuals/clients/cli-client/get-started",permalink:"/docs/product-manuals/clients/cli-client/get-started",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/clients/cli-client/get-started.md",version:"current",sidebar_label:"Getting started guide",sidebar:"Product Manuals",previous:{title:"CLI client",permalink:"/docs/product-manuals/clients/cli-client/index"},next:{title:"Overview",permalink:"/docs/product-manuals/clients/other-clients/index"}},i=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Set up",id:"set-up",children:[{value:"Installation",id:"installation",children:[]},{value:"Connection settings",id:"connection-settings",children:[]},{value:"Test command",id:"test-command",children:[]}]},{value:"Advanced process",id:"advanced-process",children:[]},{value:"Deploy a Process",id:"deploy-a-process",children:[]},{value:"Register a worker",id:"register-a-worker",children:[]},{value:"Start a new instance",id:"start-a-new-instance",children:[]}],o={rightToc:i};function b(e){var t=e.components,s=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial, you will learn to use the CLI client ",Object(r.b)("inlineCode",{parentName:"p"},"zbctl")," to interact with Camunda Cloud."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/getting-started/"}),"Camunda Cloud account")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/getting-started/"}),"Cluster")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/getting-started/setup-client-connection-credentials"}),"Client credentials")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/getting-started/model-your-first-process"}),"Modeler")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"NPM environment"))),Object(r.b)("h2",{id:"set-up"},"Set up"),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,"An installation can be done quickly via the package manager ",Object(r.b)("inlineCode",{parentName:"p"},"npm"),". The corresponding package is ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/zbctl"}),"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i -g zbctl\n")),Object(r.b)("p",null,"You can also download a binary for your Operating System from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/releases"}),"Zeebe GitHub releases page"),"."),Object(r.b)("h3",{id:"connection-settings"},"Connection settings"),Object(r.b)("p",null,"To use ",Object(r.b)("inlineCode",{parentName:"p"},"zbctl")," it is recommended to define environment variables for the connection settings:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"export ZEEBE_ADDRESS='[Zeebe API]'\nexport ZEEBE_CLIENT_ID='[Client ID]'\nexport ZEEBE_CLIENT_SECRET='[Client Secret]'\nexport ZEEBE_AUTHORIZATION_SERVER_URL='[OAuth API]'\n")),Object(r.b)("p",null,"When you create client credentials in Camunda Cloud you have the option to download a file with above lines filled out for you."),Object(r.b)("p",null,"Alternatively, use the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/zbctl#usage"}),"described flags")," (",Object(r.b)("inlineCode",{parentName:"p"},"--address"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--clientId")," and ",Object(r.b)("inlineCode",{parentName:"p"},"--clientSecret"),"). with the zbctl commands."),Object(r.b)("h3",{id:"test-command"},"Test command"),Object(r.b)("p",null,"Use this command to verify that everything is set up correctly:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"zbctl status\n")),Object(r.b)("p",null,"As a result you will get a similar response:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"Cluster size: 1\nPartitions count: 2\nReplication factor: 1\nGateway version: unavailable\nBrokers:\n  Broker 0 - zeebe-0.zeebe-broker-service.456637ef-8832-428b-a2a4-82b531b25635-zeebe.svc.cluster.local:26501\n    Version: unavailable\n    Partition 1 : Leader\n    Partition 2 : Leader\n")),Object(r.b)("h2",{id:"advanced-process"},"Advanced process"),Object(r.b)("p",null,"Use ",Object(r.b)("a",{target:"_blank",href:n(753).default},"this process model")," for the tutorial."),Object(r.b)("p",null,Object(r.b)("img",{alt:"processId",src:n(1057).default})),Object(r.b)("p",null,"This process includes a service task and an XOR gateway. Select the service task and fill in the properties. Set the ",Object(r.b)("strong",{parentName:"p"},"Type")," to ",Object(r.b)("inlineCode",{parentName:"p"},"test-worker"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"process",src:n(1058).default})),Object(r.b)("p",null,"The worker will return a JSON object as a result, which is used to decide which path to take.\nNow, we can use the JSON object to route your process by filling in the condition expression on the two sequence flows after the XOR gateway."),Object(r.b)("p",null,'Use the following conditional expression for the "Pong" sequence flow:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'=return="Pong"\n')),Object(r.b)("p",null,"And for the else sequence flow:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'=return!="Pong"\n')),Object(r.b)("p",null,Object(r.b)("img",{alt:"sequenceflows",src:n(1059).default})),Object(r.b)("h2",{id:"deploy-a-process"},"Deploy a Process"),Object(r.b)("p",null,"Now you can deploy the ",Object(r.b)("a",{target:"_blank",href:n(753).default},"process"),". Navigate to the folder, where you saved your process."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"zbctl deploy gettingstarted_quickstart_advanced.bpmn\n")),Object(r.b)("p",null,"If the deployment is successful you'll get the following output:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'{\n  "key": 2251799813685493,\n  "processes": [\n    {\n      "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n      "version": 1,\n      "processKey": 2251799813685492,\n      "resourceName": "gettingstarted_quickstart_advanced.bpmn"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"Important here is the ",Object(r.b)("inlineCode",{parentName:"p"},"bpmnProcessId"),", which you'll need for creating a new instance."),Object(r.b)("h2",{id:"register-a-worker"},"Register a worker"),Object(r.b)("p",null,"The process uses the worker with the type ",Object(r.b)("inlineCode",{parentName:"p"},"test-worker"),". Register a new one by using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'zbctl create worker test-worker --handler "echo {\\"return\\":\\"Pong\\"}"\n')),Object(r.b)("h2",{id:"start-a-new-instance"},"Start a new instance"),Object(r.b)("p",null,"You can start a new instance with a single command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"zbctl create instance camunda-cloud-quick-start-advanced\n")),Object(r.b)("p",null,"As a result, you'll get the following output, which contains, among others, the ",Object(r.b)("inlineCode",{parentName:"p"},"processInstanceKey"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'{\n  "processKey": 2251799813685492,\n  "bpmnProcessId": "camunda-cloud-quick-start-advanced",\n  "version": 1,\n  "processInstanceKey": 2251799813685560\n}\n')),Object(r.b)("p",null,"Navigate to Operate to monitor the process instance."),Object(r.b)("p",null,Object(r.b)("img",{alt:"operate-instances",src:n(1060).default})),Object(r.b)("p",null,"Because the worker returns"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "return": "Pong"\n}\n')),Object(r.b)("p",null,"the process ends in the upper end event following the Ping sequence flow."),Object(r.b)("p",null,"Changing the worker to"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'zbctl create worker test-worker --handler "echo {\\"return\\":\\"...\\"}"\n')),Object(r.b)("p",null,"and creating a new instance leads to a second instance in Operate, which you'll see ending in the second end event following the else sequence flow:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"operate-instance",src:n(1061).default})),Object(r.b)("p",null,"As a next step you can now connect both workers in parallel and create more process instances:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"while true; do zbctl create instance camunda-cloud-quick-start-advanced; sleep 1; done\n")),Object(r.b)("p",null,"In Operate you will see instances ending in both end events depending on which worker picked up the job."),Object(r.b)("p",null,Object(r.b)("img",{alt:"operate-instances",src:n(1062).default})))}b.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),b=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||r;return n?c.a.createElement(m,l(l({ref:t},o),{},{components:n})):c.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return c.a.createElement.apply(null,s)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},753:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/files/gettingstarted_quickstart_advanced-7a135837ae0d1d31680feeea3013bc53.bpmn"}}]);