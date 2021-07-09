(self.webpackChunkcamunda_cloud_documentation=self.webpackChunkcamunda_cloud_documentation||[]).push([[78987],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25971:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i={id:"quickstart",title:"Quickstart"},l={unversionedId:"product-manuals/zeebe/deployment-guide/local/quickstart",id:"version-0.26/product-manuals/zeebe/deployment-guide/local/quickstart",isDocsHomePage:!1,title:"Quickstart",description:"This quickstart guide introduces you the main concepts of Zeebe without",source:"@site/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/local/quickstart.md",sourceDirName:"product-manuals/zeebe/deployment-guide/local",slug:"/product-manuals/zeebe/deployment-guide/local/quickstart",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/local/quickstart",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/zeebe/deployment-guide/local/quickstart.md",version:"0.26",frontMatter:{id:"quickstart",title:"Quickstart"},sidebar:"version-0.26/Product Manuals",previous:{title:"Local installation",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/local/install"},next:{title:"Docker container",permalink:"/docs/0.26/product-manuals/zeebe/deployment-guide/docker/install"}},s=[{value:"Step 1: Download the Zeebe distribution",id:"step-1-download-the-zeebe-distribution",children:[]},{value:"Step 2: Start the Zeebe broker",id:"step-2-start-the-zeebe-broker",children:[]},{value:"Step 3: Deploy a workflow",id:"step-3-deploy-a-workflow",children:[]},{value:"Step 4: Create a workflow instance",id:"step-4-create-a-workflow-instance",children:[]},{value:"Step 5: Complete a workflow instance",id:"step-5-complete-a-workflow-instance",children:[]}],c={toc:s};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This quickstart guide introduces you the main concepts of Zeebe without\nthe need to write a single line of code in 5 steps."),(0,a.kt)("h2",{id:"step-1-download-the-zeebe-distribution"},"Step 1: Download the Zeebe distribution"),(0,a.kt)("p",null,"You can download the latest distribution from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe/releases"},"Zeebe release page"),"."),(0,a.kt)("p",null,"Extract the archive and enter the Zeebe directory."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tar -xzvf zeebe-distribution-X.Y.Z.tar.gz\ncd zeebe-broker-X.Y.Z/\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Some command examples might not work on Windows if you use cmd or\nPowershell. For Windows users we recommend to use a bash-like shell, i.e. Git\nBash, Cygwin or MinGW for this guide."),(0,a.kt)("p",null,"Inside the Zeebe directory you will find multiple directories."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tree -d\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},".\n\u251c\u2500\u2500 bin     - Binaries and start scripts of the distribution\n\u251c\u2500\u2500 conf    - Zeebe and logging configuration\n\u2514\u2500\u2500 lib     - Shared java libraries\n")),(0,a.kt)("h2",{id:"step-2-start-the-zeebe-broker"},"Step 2: Start the Zeebe broker"),(0,a.kt)("p",null,"To start a Zeebe broker use the ",(0,a.kt)("inlineCode",{parentName:"p"},"broker")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"broker.bat")," file located in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"bin/")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/broker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"23:39:13.246 [] [main] INFO  io.zeebe.broker.system - Scheduler configuration: Threads{cpu-bound: 2, io-bound: 2}.\n23:39:13.270 [] [main] INFO  io.zeebe.broker.system - Version: X.Y.Z\n23:39:13.273 [] [main] INFO  io.zeebe.broker.system - Starting broker with configuration {\n")),(0,a.kt)("p",null,"You will see some output which contains the version of the broker and\nconfiguration parameters like directory locations and API socket addresses."),(0,a.kt)("p",null,"To continue this guide open another terminal to execute commands using the\nZeebe CLI ",(0,a.kt)("inlineCode",{parentName:"p"},"zbctl"),"."),(0,a.kt)("p",null,"We can now check the status of the Zeebe broker."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," By default, the embedded gateway listens to a plaintext connection but the clients are configured to use TLS. Therefore, all ",(0,a.kt)("inlineCode",{parentName:"p"},"zbctl")," commands in the quickstart will specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"--insecure")," flag.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure status\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Cluster size: 1\nPartitions count: 1\nReplication factor: 1\nBrokers:\n  Broker 0 - 0.0.0.0:26501\n    Partition 1 : Leader\n")),(0,a.kt)("h2",{id:"step-3-deploy-a-workflow"},"Step 3: Deploy a workflow"),(0,a.kt)("p",null,"A ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/concepts/workflows"},"workflow")," is used to orchestrate loosely coupled job\nworkers and the flow of data between them."),(0,a.kt)("p",null,"In this guide we will use an example process ",(0,a.kt)("inlineCode",{parentName:"p"},"order-process.bpmn"),". You can\ndownload it with the following link:\n",(0,a.kt)("a",{target:"_blank",href:n(60562).Z},"order-process.bpmn"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"order-process",src:n(58132).Z})),(0,a.kt)("p",null,"The process describes a sequential flow of three tasks ",(0,a.kt)("em",{parentName:"p"},"Collect Money"),", ",(0,a.kt)("em",{parentName:"p"},"Fetch\nItems")," and ",(0,a.kt)("em",{parentName:"p"},"Ship Parcel"),". If you open the ",(0,a.kt)("inlineCode",{parentName:"p"},"order-process.bpmn")," file in a text\neditor you will see that every task has an attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," defined in the XML\nwhich is later used as job type."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'\x3c!-- [...] --\x3e\n<bpmn:serviceTask id="collect-money" name="Collect Money">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="payment-service" />\n  </bpmn:extensionElements>\n</bpmn:serviceTask>\n\x3c!-- [...] --\x3e\n<bpmn:serviceTask id="fetch-items" name="Fetch Items">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="inventory-service" />\n  </bpmn:extensionElements>\n</bpmn:serviceTask>\n\x3c!-- [...] --\x3e\n<bpmn:serviceTask id="ship-parcel" name="Ship Parcel">\n  <bpmn:extensionElements>\n    <zeebe:taskDefinition type="shipment-service" />\n  </bpmn:extensionElements>\n</bpmn:serviceTask>\n\x3c!-- [...] --\x3e\n')),(0,a.kt)("p",null,"To complete an instance of this workflow we would need to activate and complete one job for each of\nthe types ",(0,a.kt)("inlineCode",{parentName:"p"},"payment-service"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"inventory-service")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"shipment-service"),"."),(0,a.kt)("p",null,"But first let's deploy the workflow to the Zeebe broker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure deploy order-process.bpmn\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "key": 2251799813685250,\n  "workflows": [\n    {\n      "bpmnProcessId": "order-process",\n      "version": 1,\n      "workflowKey": 2251799813685249,\n      "resourceName": "order-process.bpmn"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"step-4-create-a-workflow-instance"},"Step 4: Create a workflow instance"),(0,a.kt)("p",null,"After the workflow is deployed we can create new instances of it. Every\ninstance of a workflow is a single execution of the workflow. To create a new\ninstance we have to specify the process ID from the BPMN file, in\nour case the ID is ",(0,a.kt)("inlineCode",{parentName:"p"},"order-process")," as defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"order-process.bpmn"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<bpmn:process id="order-process" isExecutable="true">\n')),(0,a.kt)("p",null,"Every instance of a workflow normally processes some kind of data. We can\nspecify the initial data of the instance as variables when we start the instance."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," Windows users who want to execute this command using cmd or Powershell\nhave to escape the variables differently."),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"cmd: ",(0,a.kt)("inlineCode",{parentName:"li"},'"{\\"orderId\\": 1234}"')),(0,a.kt)("li",{parentName:"ul"},"Powershell: ",(0,a.kt)("inlineCode",{parentName:"li"},'\'{"\\"orderId"\\": 1234}\'')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create instance order-process --variables '{\"orderId\": 1234}'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "workflowKey": 2251799813685249,\n  "bpmnProcessId": "order-process",\n  "version": 1,\n  "workflowInstanceKey": 2251799813685251\n}\n')),(0,a.kt)("h2",{id:"step-5-complete-a-workflow-instance"},"Step 5: Complete a workflow instance"),(0,a.kt)("p",null,"To complete the instance all three tasks have to be executed. In Zeebe a job is\ncreated for every task which is reached during workflow instance execution. In\norder to finish a job and thereby the corresponding task it has to be activated\nand completed by a ",(0,a.kt)("a",{parentName:"p",href:"/docs/0.26/product-manuals/concepts/job-workers"},"job worker"),". A job worker is a\nlong living process which repeatedly tries to activate jobs for a given job\ntype and completes them after executing its business logic. The ",(0,a.kt)("inlineCode",{parentName:"p"},"zbctl")," also\nprovides a command to spawn simple job workers using an external command or\nscript. The job worker will receive for every job the workflow instance variables as JSON object on\n",(0,a.kt)("inlineCode",{parentName:"p"},"stdin")," and has to return its result also as JSON object on ",(0,a.kt)("inlineCode",{parentName:"p"},"stdout")," if it\nhandled the job successfully."),(0,a.kt)("p",null,"In this example we use the unix command ",(0,a.kt)("inlineCode",{parentName:"p"},"cat")," which just outputs what it receives\non ",(0,a.kt)("inlineCode",{parentName:"p"},"stdin"),". To complete a workflow instance we now have to create a job worker for\neach of the three task types from the workflow definition: ",(0,a.kt)("inlineCode",{parentName:"p"},"payment-service"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"inventory-service")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"shipment-service"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," For Windows users this command does not work with cmd as the ",(0,a.kt)("inlineCode",{parentName:"p"},"cat"),"\ncommand does not exist. We recommend to use Powershell or a bash-like shell\nto execute this command.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create worker payment-service --handler cat &\n./bin/zbctl --insecure create worker inventory-service --handler cat &\n./bin/zbctl --insecure create worker shipment-service --handler cat &\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'2019/06/06 20:54:36 Handler completed job 2251799813685257 with variables\n{"orderId":1234}\n2019/06/06 20:54:36 Activated job 2251799813685264 with variables\n{"orderId":1234}\n2019/06/06 20:54:36 Handler completed job 2251799813685264 with variables\n{"orderId":1234}\n2019/06/06 20:54:36 Activated job 2251799813685271 with variables\n{"orderId":1234}\n2019/06/06 20:54:36 Handler completed job 2251799813685271 with variables\n{"orderId":1234}\n')),(0,a.kt)("p",null,"After the job workers are running in the background we can create more instances\nof our workflow to observe how the workers will complete them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./bin/zbctl --insecure create instance order-process --variables '{\"orderId\": 12345}'\n")),(0,a.kt)("p",null,"To close all job workers use the ",(0,a.kt)("inlineCode",{parentName:"p"},"kill")," command to stop the background processes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kill %1 %2 %3\n")),(0,a.kt)("p",null,"If you want to visualize the state of the workflow instances you can start the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zeebe-io/zeebe-simple-monitor"},"Zeebe simple monitor"),"."))}p.isMDXComponent=!0},60562:function(e,t,n){"use strict";t.Z=n.p+"assets/files/order-process-39e893672e53060d69ca6789982c15e3.bpmn"},58132:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtwAAABcCAAAAAB47T1EAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCxMJKwtMV8YnAAAO6UlEQVR42u2df1RUZRrHH5VCgRIEQUkEGQkFc2KBEFzRsCLF3bLE5GAdzbM7Ghkpq+5ZHcF0D24TWVKRzcHjbFkZJaBumEiaylqNhYmBQuKi/AgRgQbkhwzf/ePOIL+GEZlL93Lf5x/v3HvnPp/73o/Dc3+87yWwYDFEg1gTsGBys2DB5GbBgsnNgoXU5NYoowIdyMLhEBil1EiLUVygkpD7oJx4C/lB6TCKC1QSctdEE8mVmtwqS2+4KlejlBNF10iDUVygEpE7mqwS+dt6ohVFS4NRXKDSkPsgWZUAAFzH3fcGD9svsaKDUmAUF6hE5JZTIoDler1X5l/W4/B7lv+5IbkUGMUFKg25NSQHEDnFx9ruW8UYr+HOyTz899EMfUZxgUpEbiUpgdjJWJxa991Z7M5It+InxVBnFBeoROSOIg0A/7l43Vru433I1W6UxWtFDUUNfUZxgUpE7kDKBXRWX6qCLmF55nB3HmrFXAoc+oziApWI3A5UBTfP0RhTgMgpPvfYfKuwG2vhWrGKHIY+o7hAJSI3EeCekVc0icdakWjoM4oLVEJy20dFlNtxteK9cs9JhzDyJcHJLXRGcYFKSO73/jHs+hNv6ay+VPlfAg4MP+0tF5zcQmcUF6iE5Aac55+7x+l+2BcAwLtROVb2awUmt9AZxQUqJblP2n6MCRl5RRMBAIW+KFm/RmhyC5xRXKBSklttn2FvHRVRbgsAyA1smDNdcL/cAmcUF6ikypLUESq3kcOuh74FAEu27fb69IbgyhJhM4oLVFJyA8CDNuHnJq77On3BQvhuEdwJpdAZxQUqOblfsv4YFevCnkoCXnMrF6bcwmUUF6jk5FbbZ9iHZKAk3Cb4XfvzwpRbuIziApWc3EgdofqDw1cJdi8vHpUv0LJEuIziAr3D0G59OtjTxsYz+OmtWkvJXZC0MERmZycLWZhUMIhyA8CDz89ZDZyHUOU2MMYKjlFcoHcSxas8OndO9lhVPHC5WxJ8O2/TN6FlMOVWJazmPcfAGV8VHqO4QM1HTVzPzvdxNQOUe+d4Iqele08W1dcXndy71Ilo/M5BlFuQOcTAKC5Qs5Fq19vQEnapA5H7QiBRWHbnOdlhRIEXmNxM7sGUexMn86hn1Ccu1tVdPKF+ZhQ3Z+Pdy53lRPJ93Wfuk5NTFpObyT14OaKJiEiWqr89S58qIyIyO7SESboUokVNPWc3LSJKYXIzuQcrB+f2691nv34ndpuiyyJa1/uSdURZTG4m9+Dk2EhE5Hq054IcVyKiTXcj9wUnU24D68jpApObyT0YOVKJiGaW9LaoZCYRUepdyB1Ii0x/ZxFf/UKZ3EzuLnHdjohcS3pfWOJKRHY1/ZZ7J8mbTH+nSU47mdxMbv5zxBER5ZhaepSIKK6/creMp3195dxH41uY3ExuvnMU9Xou2e2ssrifcidQWN9ZwyiByc3k5jvHKiKS9bWCjIhW9VNuX8ruO2s2+TK5mdx85/Awd8aYSkQe/ZO7gJzMpXUiCz5FlWairX5es2DFqY5PLzX88lrX7zVWAUCt4h0A+EJRz+fxSOvr+4UKhUKhSDd+vGz4tzS+Y41/XDTQ8u5Mn6DQ74lcsKkKiK0HgNLOQ/39qFCsXL1LZ2q73RufR7mNu6AlolH6vtbUjyIibb/kTqKl5vIvpSSL7cvikVPTemurTKd/Hkke87Hx44jqk93+XIRnAcDVYQ7NAB6mSh7FMcVo+EM2Jjk5Ofm/hk//DTYeHO+ONdyPGWj5lrtvUGx6+KOM5yc1wrYSAC6v76zUA8nJb4bOajex4ZO+gyV3xy5sJaJn+l73GSLa2i+5F9JecwB7aaHFdiaeyJ7bnS5t1ex0AEBaANCcffg3o9wtxw//BuDi5/m4Mn3HdQBXR4RlAoWzqBL4NrMMqCgr3F8K4H8Z54Hz1UDD2QEfDxOMRrndjb9+mWVo3+l7Fu2n95dD611z4Duj3Fem77huoNc2HTiO8i8uAc1Hvqy2rDN9g2LqVwBCv4Zt6dHDrWjIQ8XVgnTuT0qaHIDO6ifUf/3ZL8D31Qd0uPh5vrEhB0/ujl14mojUfa+rJqKn+yV3CJ00B3CSQiy5M4bd6dJWR1wME1WTI5e5n+fkvuG3ZOXkImz3jJu2LX3cfC2AqyN2RQOb36PK9j+HvOz2CVQPz3nhvpPY5R0XuB7rVgHJyywhd2+M3eR+YdaayftvLXCO10fMXOuao3UI/IvbNoPc6ePmaw309z+5fNKS0OW2+a3yZbFjz1pa7j5AET3rq5sAYBvwwiOPQSuDatoTa5y1HXL/OuxywQOKlfcfgU2A/PvtnnHTthkaclDl5nYhmIhO9L3uCSIK7pfcMioyf5FGZtmdIbKfmtalrXY/YjxnXgvseJyTe0MM8H5kjc0VlEVhJleWjKge0wyfa1S5L0CPH0ffVPkBa1+pGV2BVvfzBY6tCDxuGbl7MhrlHu7o6OiDrOl6XHBpzw7CAV89Dm3XWlfgP3JjWTIzy0AP2/34zL4R0W9fcqnD4TOWl9skKHRxrvfOyQBs90M3vFYrg+rhdrw7HwDSXOLj47wikf4RsD4W1p+Ba2ZDQw6y3ET2U12I6GLf614kIs9+yW1HZs/N6nl6/1unFF9MMUzMyAIKHTi558gjImZ6fsMtMsqN8IwfngRV/n0DAJefVC8CqpXHR0VERIz9N2ZkXpjU3uV4WJDRKPeEysrKa0iYEBERMfxKdhC2rAQArReQN7mT3Bw9bK8i2w+IScQSm3kftPXmjKUbs/Plgu33ZcK2HBhdppVBFQf8NM4od+KBNui/WB0+NgbWpeCa2dCQJuTmO+r69rCOiGxEKHfFiDIAl911szKAPEdO7sf+VVhYWHzGE4D2Vofcu6PXa0CVylcBjM5XKQCV4pRbYWFhYS12PaeMB99yc2XJtmcLCwsLW7KD8MaLgO6c1hvIk3WSm6OHbSWy/YGYRKDk3emvDqLcVwKaAMSugm0lMPqqVgbVK8DpSR1lCQDlI/subo6BdTW4Zv6Ga8ihIrcwyhIsm3sNNXOfR/xTbYiJ5OTe/ngrXlvc6HwaPzi3zU43yF07dko9qPLYxBqkjb/Fya0bewzVbmdR7+JzCXyXJZzcp8f9im8mthyT43vXG0h6tqvcs9MN9Lfl/m56C96fP4hlSdvkNb+hcvoHneT21EHxUme5Z32ApgAFrKvBNXMd15BDpSwRxgklmv56n6ftsptoeFbmE1rByd281OMP0y/hsPsMjyPYMlLNyY0FzwJUiddcAyefAic3sj2CXLcCWBoKC8lt9oTyjfHBbodQNU6G7Q8Eyku7yr1lpNpA3yF3+4qJIQ9qB/OEsmDG8LE2a/Wd5PabOm329c5y73N+Mnjlo7CuhqGZuYYcKieUwrgUCKC1jHuERXft9rybvwJAe0UbAF33K/yt5Z3L68omAFi2xzJy93WFreOXsbwNwK1GoPXXnidzeiN9p3lVFr7ObRa0rrS580eV4lZ30pu3bxhwzWxoyKFxKVAgN3EsEnkxk5p4v4lj6eDvJk6PUCl+J9Df6yaOUG6/WyKubC+2yPFI4/V4WtCZfoKeOyU4ufm9/c4enBI5o7hATQcfD06xR16Z3ILIwcsjr6yzApNbCDl46azAupkxuQWRI46I6KippTl31c2MdRBmcgsiBy8dhNnQDkxuQeTgZWgHNigPk1sQOTYREbn20gH+qKv54QLZcGpMbkHn4GM4NTYQJpNbGDn4GAiTDWHM5BZEDm64wN6GMN6Eu5ebDT7P5BaC3LwMPo/f+7UhTG4mNwCeXhsC/K4vfGJyM7kNwccLnwY5mNxMbpPBx6v6mNxMbkHIfTd4TG4mN5Obyc3kFqncjaudXQK+7Jj96eauqwW4u8v+9BP+ZKIz8owbTG4mt2Dlnvf8DWjdDxtnq2O6rubyY+31JE/4m3h1+APVTG4mt1Dl/n5iG4DPZiDuzZBLpx6b93IMihaHJLQi7s2QSwBcioHmYfX++Xg7PGCjHp/PCU1DfWzwiiq0/C1483gmN5NbsHK/8xwA1IxoC4rKuTbuh2q/mJteOc2rExAUldMKwOX45YKND8E//1SIrtYv+4yspMLjl8jElk/mYPMLTanE5GZyDzDMFsYeU5ZfNq7rhzc+MLml/z3RVe63nwOA6mGtQTnIXAC8H3NclpKyWY4g7mlDl2n+wct/gX8+ao++4/3plnigse3e5JQUu1q/M8A4JjeTe4BhvjC++k+3Bu6DzhGlZSa3VOzbVe4Tk/UA/uOLoDx8GgnsjTn0kFqt3ougPG7T3B0h//xvPV7dE/7Jpn8BTQ33qtVqdd2UnwEvJjeTe2BxJ4UxHk9FVnjYXugc8eF+5Q/A389ztfGepD+mc1NlS0K3dpO7/Y8b9CidokFQHi5P0GFFTJnrdRyK7SH3mi3QPfhRRng7Zp3wPY7yubdeTELJPUxuJvfAwmxhXAxg4yvnvC9XhxzTOWKj6v1VuObWxtXGG6YdK+OmQnc1regmN2oWufpNfAcIygPe8p79WAx2e83zyesh9ymPRY8+tRUK/4CX8Z3Pk97/RkXA3LAJlpHbgar4PhxV5DD0GcUFeoeFcTGA+HUJ81JSlsTqHLFRVT+hdec6Q228QQluqvR+4EJ3uYHGso6RohsaAEBf1dv7UVo5jxt/A4BrrQBQbakdDKRcvo9H7kA7N4uBUVyg/SiM5+/+2yK1Wv21zhEbVYjOeORnQ228YQe4qaKxQHlPuQUQUaThO4WGooY+o7hA77gwbt/j0pAWpkfCh5zcObNmAFxtvGGHcUp2Bh8KUm4lKQWfQgyM4gK9w8LYwdE57BzaVz00+9FaTu52jxQYauMNO4xT33g98ZQg5daQnO8U8oH+nomBUVyg/SyMm7r3UuBq446pW7cfBRHWLSY5JfKbIHHgR1wMjOIC5e9ijqBoDpJVCZ/bL7Gig1JgFBeoRORGNFnx+HOTaGV2NIAhwiguUInIXRNNJFdqci1+ibYqV6OUE0XXSINRXKASkRs4KOfvvW/yg9JhFBeoROQGNMqoQAdLHwqHwCilRlqM4gKViNwsWDC5WbBgcrNgcrNgweRmwUIM8X/iYU67HUWdYwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0xMS0xOVQwOTo0MzoxMSswMDowMJ3Ezg8AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMTEtMTlUMDk6NDM6MTErMDA6MDDsmXazAAAAAElFTkSuQmCC"}}]);