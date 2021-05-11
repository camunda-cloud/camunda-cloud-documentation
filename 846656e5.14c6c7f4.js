(window.webpackJsonp=window.webpackJsonp||[]).push([[325],{394:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(662)),c={id:"glossary",title:"Glossary"},s={unversionedId:"reference/glossary",id:"reference/glossary",isDocsHomePage:!1,title:"Glossary",description:"This section defines commonly used terminology referenced within the documentation.",source:"@site/docs/reference/glossary.md",slug:"/reference/glossary",permalink:"/docs/reference/glossary",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/reference/glossary.md",version:"current",sidebar:"Reference",previous:{title:"Temporal Functions",permalink:"/docs/reference/feel/builtin-functions/feel-built-in-functions-temporal"},next:{title:"Announcements",permalink:"/docs/reference/announcements"}},i=[{value:"Bridge",id:"bridge",children:[]},{value:"Broker",id:"broker",children:[]},{value:"Client",id:"client",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Command",id:"command",children:[]},{value:"Connector",id:"connector",children:[]},{value:"Correlation",id:"correlation",children:[]},{value:"Correlation Key",id:"correlation-key",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Event",id:"event",children:[]},{value:"Exporter",id:"exporter",children:[]},{value:"Follower",id:"follower",children:[]},{value:"Gateway",id:"gateway",children:[]},{value:"Incident",id:"incident",children:[]},{value:"Job",id:"job",children:[]},{value:"Job activation timeout",id:"job-activation-timeout",children:[]},{value:"Job worker",id:"job-worker",children:[]},{value:"Leader",id:"leader",children:[]},{value:"Log",id:"log",children:[]},{value:"Message",id:"message",children:[]},{value:"Partition",id:"partition",children:[]},{value:"Process",id:"process",children:[]},{value:"Process instance",id:"process-instance",children:[]},{value:"Process instance variable",id:"process-instance-variable",children:[]},{value:"Record",id:"record",children:[]},{value:"Replication",id:"replication",children:[]},{value:"Replication factor",id:"replication-factor",children:[]},{value:"Request timeout",id:"request-timeout",children:[]},{value:"Snapshot",id:"snapshot",children:[]},{value:"Segment",id:"segment",children:[]},{value:"Worker",id:"worker",children:[]},{value:"Workflow",id:"workflow",children:[]},{value:"Workflow instance",id:"workflow-instance",children:[]},{value:"Workflow instance variable",id:"workflow-instance-variable",children:[]}],l={rightToc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section defines commonly used terminology referenced within the documentation."),Object(o.b)("h3",{id:"bridge"},"Bridge"),Object(o.b)("p",null,'Synonym to "',Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#connector"}),"connector"),'"'),Object(o.b)("h3",{id:"broker"},"Broker"),Object(o.b)("p",null,"A broker is an instance of a Zeebe installation which executes processes and manages process state. A single broker will be installed on a single machine."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/architecture#broker"}),"Architecture"))),Object(o.b)("h3",{id:"client"},"Client"),Object(o.b)("p",null,"A client interacts with the Zeebe broker on behalf of the business application. Clients poll for work from the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/architecture#client"}),"Architecture"))),Object(o.b)("h3",{id:"cluster"},"Cluster"),Object(o.b)("p",null,"A cluster represents a configuration of one or more brokers collaborating to execute processes. Each broker in a cluster acts as a leader or a follower."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/clustering"}),"Clustering"))),Object(o.b)("h3",{id:"command"},"Command"),Object(o.b)("p",null,"A command represents an action to be taken or executed. Example commands include: deploy a process, execute a process, etc."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/internal-processing#events-and-commands"}),"Internal processing"))),Object(o.b)("h3",{id:"connector"},"Connector"),Object(o.b)("p",null,"A piece of software that connects the workflow engine with some other system or infrastructure. The connector might be uni or bidirectional and possibly includes a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#job-worker"}),"job worker"),". The boundary between connectors and job workers can be fuzzy, but in general connectors connect to other active pieces of software. For example, a 'DMN connector' might connect to a managed DMN Engine, while a 'DMN worker' will use a DMN library to directly execute decisions."),Object(o.b)("h3",{id:"correlation"},"Correlation"),Object(o.b)("p",null,"Correlation refers to the act of matching a message with an inflight process instance."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/messages"}),"Message correlation"))),Object(o.b)("h3",{id:"correlation-key"},"Correlation Key"),Object(o.b)("p",null,"A correlation is an attribute within a message which is used to match this message against a certain variable within an inflight process instance. If the value of the correlation key matches the value of the variable within the process instance, the message is matched to this process instance."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/messages"}),"Message correlation"))),Object(o.b)("h3",{id:"deployment"},"Deployment"),Object(o.b)("p",null,"A process cannot execute unless it is known by the broker. Deployment is the process of pushing or deploying processes to the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/getting-started/deploy-a-process"}),"Getting started tutorial: Deploy a process"))),Object(o.b)("h3",{id:"event"},"Event"),Object(o.b)("p",null,"An event represents a state change associated with an aspect of an executing process instance. Events capture variable changes, state transition in process elements, etc. An event will be represented by a timestamp, the variable name and variable value. Events are stored in an append-only log."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/internal-processing#events-and-commands"}),"Internal processing"))),Object(o.b)("h3",{id:"exporter"},"Exporter"),Object(o.b)("p",null,"An exporter represents a sink to which Zeebe will submitted all records within the log. This gives users of Zeebe an opportunity to persist records with the log for future use as this data will not be available after log compaction."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/open-source/exporters"}),"Exporter"))),Object(o.b)("h3",{id:"follower"},"Follower"),Object(o.b)("p",null,"In a clustered environment, a broker which is not a leader is a follower of a given partition. A follower can become the new leader when the old leader is no longer reachable."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"gateway"},"Gateway"),Object(o.b)("p",null,"Clients communicate with the Zeebe cluster through a gateway. The gateway provides a gRPC API and forwards client commands to the cluster. Depending on the setup, a gateway can be embedded in the broker or can be configured to be standalone."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/architecture#gateway"}),"Architecture"))),Object(o.b)("h3",{id:"incident"},"Incident"),Object(o.b)("p",null,"An incident represents an error condition which prevents Zeebe from advancing an executing process instance. Zeebe will create an incident if there was an uncaught exception thrown in your code and the number of retries of the given step has been exceeded."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/incidents"}),"Incident"))),Object(o.b)("h3",{id:"job"},"Job"),Object(o.b)("p",null,"A job represents a distinct unit of work within a business process. Service tasks represent such\njobs in your process and are identified by a unique id. A job has a type to allow specific job\nworkers to find jobs that they can work on."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/job-workers#what-is-a-job"}),"Job workers"))),Object(o.b)("h3",{id:"job-activation-timeout"},"Job activation timeout"),Object(o.b)("p",null,"This is the amount of time the broker will wait for a complete or fail response from the job worker after a job has been submitted to the job worker for processing before it marks the job as available again for other job workers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/job-workers#requesting-jobs-from-the-broker"}),"Job workers"))),Object(o.b)("h3",{id:"job-worker"},"Job worker"),Object(o.b)("p",null,"A special type of client that polls for and executes available jobs. An uncompleted job prevents Zeebe from advancing process execution to the next step."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/job-workers"}),"Job workers"))),Object(o.b)("h3",{id:"leader"},"Leader"),Object(o.b)("p",null,"In a clustered environment, one broker, the leader, is responsible for process execution and housekeeping of data within a partition. Housekeeping includes, taking snapshots, replication and running exports."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"log"},"Log"),Object(o.b)("p",null,"The log comprises of an ordered sequence of records written to persistent storage. The log is appended-only and is stored on disk within the broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/partitions#partition-data-layout"}),"Partitions"))),Object(o.b)("h3",{id:"message"},"Message"),Object(o.b)("p",null,"A message contains information to be delivered to interested parties during execution of a process instance. Messages can be published via Kafka or Zeebe\u2019s internal messaging system. Messages are associated with timestamp and other constraints such as time-to-live (TTL)."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/messages"}),"Messages"))),Object(o.b)("h3",{id:"partition"},"Partition"),Object(o.b)("p",null,"A partition represents a logical grouping of data in a Zeebe broker. This data includes process instance variables stored in RocksDB, commands and events generated by Zeebe stored in the log. The number of partitions is defined by configuration."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/partitions"}),"Partitions"))),Object(o.b)("h3",{id:"process"},"Process"),Object(o.b)("p",null,"A process is a defined sequence of distinct steps representing your business logic. Examples of a\nprocess could be an e-commerce shopping experience, onboarding a new employee, etc. In Zeebe,\nprocess are identified by a unique process id. The process is usually also referred to as the\nBPMN model."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/processes"}),"Processes"))),Object(o.b)("h3",{id:"process-instance"},"Process instance"),Object(o.b)("p",null,"While a process represents a defined sequence of distinct steps representing your business logic, a process instance represents a currently executing or completed process. For a single process, there could be many associated ",Object(o.b)("em",{parentName:"p"},"process instances")," in various stages of their executing lifecycle. Process instances are identitied by process instance ids. Executing process instances are also sometimes referred to as inflight processes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/processes"}),"Processes"))),Object(o.b)("h3",{id:"process-instance-variable"},"Process instance variable"),Object(o.b)("p",null,"A process instance variable represents the execution state (i.e data) of a process instance. These variables capture business process parameters which are input and output of various stages of the process instance and which also influence process flow execution."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/variables"}),"Variables")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/bpmn-processes/data-flow"}),"Data flow"))),Object(o.b)("h3",{id:"record"},"Record"),Object(o.b)("p",null,"A record represents a command or an event. For example, a command to create a new process instance, or a state transition of an executing process instance representing an event at a given point in time would result to generation of a record. During the execution lifecycle of a process instance, numerous records will be generated to capture various commands and events generated. Records are stored in the log."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/internal-processing#events-and-commands"}),"Internal processing"))),Object(o.b)("h3",{id:"replication"},"Replication"),Object(o.b)("p",null,"Replication is the act of copying data in a partition from a leader to its followers within a clustered Zeebe installation. After ",Object(o.b)("em",{parentName:"p"},"replication"),", the leader and followers of a partition will have the exact same data. Replication allows the system to be resilient to brokers going down."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"replication-factor"},"Replication factor"),Object(o.b)("p",null,"This is the number of times data in a partition will be copied and this depends on the number of brokers in a cluster. A cluster with one leader and two followers will have a replication factor of three, as data in each partition needs to have three copies."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/technical-concepts/clustering#raft-consensus-and-replication-protocol"}),"Clustering"))),Object(o.b)("h3",{id:"request-timeout"},"Request timeout"),Object(o.b)("p",null,"This is how long a client will wait for a response from the broker after the client has submitted a request. If a response is not received within the client request timeout, the client can consider the broker unreachable."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/reference/grpc"}),"Zeebe API (gRPC)"))),Object(o.b)("h3",{id:"snapshot"},"Snapshot"),Object(o.b)("p",null,"The state of all active process instances, (these are also known as inflight process instances) are stored as records in an in-memory database called RocksDB. A snapshot represents a copy of all data within the in-memory database at any given point in time. Snapshots are binary images stored on disk and can be used to restore execution state of a process. The size of a snapshot is affected by the size of the data. Size of the data depends on several factors including complexity of the model or business process, the size and quantity of variables in each process instance as well as the total number of executing process instances in a broker."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/resource-planning#snapshots"}),"Resource planning"))),Object(o.b)("h3",{id:"segment"},"Segment"),Object(o.b)("p",null,"The log consists of one or more ",Object(o.b)("em",{parentName:"p"},"segments"),". Each ",Object(o.b)("em",{parentName:"p"},"segment")," is a file that contains an ordered sequence records. ",Object(o.b)("em",{parentName:"p"},"Segments")," are deleted when the log is compacted."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/zeebe/deployment-guide/operations/resource-planning#event-log"}),"Resource planning"))),Object(o.b)("h3",{id:"worker"},"Worker"),Object(o.b)("p",null,"A worker executes a job. In the Zeebe nomenclature, these are also referred to as job workers."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/product-manuals/concepts/job-workers"}),"Job workers"))),Object(o.b)("h3",{id:"workflow"},"Workflow"),Object(o.b)("p",null,"Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#process"}),"process"),"."),Object(o.b)("h3",{id:"workflow-instance"},"Workflow instance"),Object(o.b)("p",null,"Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#process-instance"}),"process instance"),"."),Object(o.b)("h3",{id:"workflow-instance-variable"},"Workflow instance variable"),Object(o.b)("p",null,"Please see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#process-instance-variable"}),"process instance variable"),"."))}b.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);