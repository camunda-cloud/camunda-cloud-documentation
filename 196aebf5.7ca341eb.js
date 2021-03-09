(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(7),r=(n(0),n(449)),i={id:"resource-planning",title:"Resoure Planning"},s={unversionedId:"product-manuals/zeebe/operations/resource-planning",id:"version-0.25/product-manuals/zeebe/operations/resource-planning",isDocsHomePage:!1,title:"Resoure Planning",description:"The short answer to \u201cwhat resources and configuration will I need to take Zeebe to production?\u201d is: it depends.",source:"@site/versioned_docs/version-0.25/product-manuals/zeebe/operations/resource-planning.md",slug:"/product-manuals/zeebe/operations/resource-planning",permalink:"/docs/0.25/product-manuals/zeebe/operations/resource-planning",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.25/product-manuals/zeebe/operations/resource-planning.md",version:"0.25",sidebar:"version-0.25/Product Manuals",previous:{title:"Configuration",permalink:"/docs/0.25/product-manuals/zeebe/operations/configuration"},next:{title:"Network Ports",permalink:"/docs/0.25/product-manuals/zeebe/operations/network-ports"}},l=[{value:"Disk Space",id:"disk-space",children:[{value:"Event Log",id:"event-log",children:[]},{value:"Snapshots",id:"snapshots",children:[]},{value:"RocksDB",id:"rocksdb",children:[]},{value:"Effect of exporters and external system failure",id:"effect-of-exporters-and-external-system-failure",children:[]},{value:"Effect on exporters of node failure",id:"effect-on-exporters-of-node-failure",children:[]},{value:"Effect of quorum loss",id:"effect-of-quorum-loss",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The short answer to \u201c",Object(r.b)("em",{parentName:"p"},"what resources and configuration will I need to take Zeebe to production?"),"\u201d is: it depends."),Object(r.b)("p",null,"While we cannot tell you exactly what you need - beyond ",Object(r.b)("em",{parentName:"p"},"it depends")," - we can explain what depends, what it depends on, and how it depends on it."),Object(r.b)("h2",{id:"disk-space"},"Disk Space"),Object(r.b)("p",null,"All Brokers in a partition use disk space to store:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The event log for each partition they participate in. By default, this is a minimum of ",Object(r.b)("em",{parentName:"li"},"512MB")," for each partition, incrementing in 512MB segments. The event log is truncated on a given broker when data has been processed and successfully exported by all loaded exporters."),Object(r.b)("li",{parentName:"ul"},"One periodic snapshots of the running state (in-flight data) of each partition (unbounded, based on in-flight work). ")),Object(r.b)("p",null,"Additionally, the leader of a partition also uses disk space to store:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A projection of the running state of the partition in RocksDB. (unbounded, based on in-flight work)")),Object(r.b)("p",null,'To calculate the required amount of disk space, the following "back of the envelope" formula can be used as a starting point: '),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"neededDiskSpace = replicatedState + localState\n\nreplicatedState = totalEventLogSize + totalSnapshotSize\n\ntotalEventLogSize = followerPartitionsPerNode * eventLogSize * reserveForPartialSystemFailure \n\ntotalSnapshotSize = partitionsPerNode * singleSnapshotSize * 2 \n// singleSnapshotSize * 2: \n//   the last snapshot (already replicated) +\n//   the next snapshot (in transit, while it is being replicated) \n\npartitionsPerNode = leaderPartitionsPerNde + followerPartitionsPerNode\n\nleaderPartitionsPerNode = partitionsCount / numberOfNodes \nfollowerPartitionsPerNode = partitionsCount * replicationFactor / numberOfNodes \n\nclusterSize = [number of broker nodes]\npartitionsCount = [number of partitions]\nreplicationFactor = [number of replicas per partition]\nreserveForPartialSystemFailure = [factor to account for partial system failure]  \nsingleSnapshotSize = [size of a single rocks DB snapshot]                  \neventLogSize = [event log size for duration of snapshotPeriod] \n")),Object(r.b)("p",null,"Some observations on the scaling of the factors above:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"eventLogSize"),": This factor scales with the throughput of your system "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"totalSnapshotSize"),": This factor scales with the number of in-flight workflows"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reserveForPartialSystemFailure"),": This factor is supposed to be a reserve to account for partial system failure (e.g. loss of quorum inside Zeebe cluster, or loss of connection to external system). See the remainder of this document for a further discussion on the effects of partial system failure on Zeebe cluster and disk space provisioning.")),Object(r.b)("p",null,"Many of the factors influencing above formula can be fine-tuned in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/appendix/broker-config-template"}),"configuration"),". The relevant configuration settings are:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"Config file\n    zeebe:\n      broker:\n        data:\n          logSegmentSize: 512MB\n          snapshotPeriod: 15m\n        cluster:\n          partitionsCount: 1\n          replicationFactor: 1\n          clusterSize: 1\n\nEnvironment Variables\n  ZEEBE_BROKER_DATA_LOGSEGMENTSIZE = 512MB\n  ZEEBE_BROKER_DATA_SNAPSHOTPERIOD = 15m\n  ZEEBE_BROKER_CLUSTER_PARTITIONSCOUNT = 1\n  ZEEBE_BROKER_CLUSTER_REPLICATIONFACTOR = 1\n  ZEEBE_BROKER_CLUSTER_CLUSTERSIZE = 1\n")),Object(r.b)("p",null,"Other factors can be observed in a production-like system with representative throughput."),Object(r.b)("p",null,"If you want to know where to look, by default this data is stored in "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"segments")," - the data of the log split into segments. The log is only appended - its data can be deleted when it becomes part of a new snapshot."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state")," - the active state. Deployed workflows, active workflow instances, etc. Completed workflow instances or jobs are removed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"snapshot")," - a state at a certain point in time")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Pitfalls")," "),Object(r.b)("p",{parentName:"blockquote"},"If you want to avoid exploding your disk space usage, here are a few pitfalls to avoid:"),Object(r.b)("ul",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ul"},"Do not create a high number of snapshots with a long period between them."),Object(r.b)("li",{parentName:"ul"},"Do not configure an exporter which does not not advance its record position (such as the Debug Exporter)"))),Object(r.b)("p",null,"If you do configure an exporter, make sure to monitor its availability and health, as well as the availability and health the exporter depends on.\nThis is the Achilles' heel of the cluster. If data cannot be exported, it cannot be removed from the cluster and will accumulate on disk. See ",Object(r.b)("em",{parentName:"p"},"Effect of exporters and external system failure")," further on in this document for an explanation and possible buffering strategies. "),Object(r.b)("h3",{id:"event-log"},"Event Log"),Object(r.b)("p",null,"The event log for each partition is segmented. By default, the segment size is 512MB. "),Object(r.b)("p",null,"The event log will grow over time, unless and until individual event log segments are deleted."),Object(r.b)("p",null,"An event log segment can be deleted once:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"all the events it contains have been processed by exporters, "),Object(r.b)("li",{parentName:"ul"},"all the events it contains have been replicated to other brokers, "),Object(r.b)("li",{parentName:"ul"},"all the events it contains have been processed, and"),Object(r.b)("li",{parentName:"ul"},"the maximum number of snapshots has been reached. ")),Object(r.b)("p",null,"The following conditions inhibit the automatic deletion of event log segments:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A cluster loses its quorum. In this case events are queued but not processed. Once a quorum is reestablished, events will be replicated and eventually event log segments will be deleted."),Object(r.b)("li",{parentName:"ul"},"The max number of snapshots has not been written. Log segment deletion will begin as soon as the max number of snapshots has been reached "),Object(r.b)("li",{parentName:"ul"},"An exporter does not advance its read position in the event log. In this case the event log will grow ad infinitum.")),Object(r.b)("p",null,"An event log segment is not deleted until all the events in it have been exported by all configured exporters. This means that exporters that rely on side-effects, perform intensive computation, or experience back pressure from external storage will cause disk usage to grow, as they delay the deletion of event log segments."),Object(r.b)("p",null,"Exporting is only performed on the partition leader, but the followers of the partition do not delete segments in their replica of the partition until the leader marks all events in it as unneeded by exporters."),Object(r.b)("p",null,"We make sure that event log segments are not deleted too early. No event log segment is deleted until a snapshot has been taken that includes that segment. When a snapshot has been taken, the event log is only deleted up to that point."),Object(r.b)("h3",{id:"snapshots"},"Snapshots"),Object(r.b)("p",null,"The running state of the partition is captured periodically on the leader in a snapshot. By default, this period is every 15 minutes. This can be changed in the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/0.25/product-manuals/zeebe/appendix/broker-config-template"}),"configuration"),"."),Object(r.b)("p",null,"A snapshot is a projection of all events that represent the current running state of the workflows running on the partition.  It contains all active data, for example, deployed workflows, active workflow instances, and not yet completed jobs."),Object(r.b)("p",null,"When the broker has written a new snapshot, it deletes all data on the log which was written before the latest snapshot."),Object(r.b)("h3",{id:"rocksdb"},"RocksDB"),Object(r.b)("p",null,"On the lead broker of a partition, the current running state is kept in memory, and on disk in RocksDB. In our experience this grows to 2GB under a heavy load of long-running processes. The snapshots that are replicated to followers are snapshots of RocksDB."),Object(r.b)("h3",{id:"effect-of-exporters-and-external-system-failure"},"Effect of exporters and external system failure"),Object(r.b)("p",null,"If an external system relied on by an exporter fails - for example, if you are exporting data to ElasticSearch and the connection to the ElasticSearch cluster fails - then the exporter will not advance its position in the event log, and brokers cannot truncate their logs. The broker event log will grow until the exporter is able to re-establish the connection and export the data.\nTo ensure that your brokers are resilient in the event of external system failure, give them sufficient disk space to continue operating without truncating the event log until the connection to the external system is restored."),Object(r.b)("h3",{id:"effect-on-exporters-of-node-failure"},"Effect on exporters of node failure"),Object(r.b)("p",null,"Only the leader of a partition exports events. Only committed events (events that have been replicated) are passed to exporters. The exporter will then update its read position. The exporter read position is only replicated between brokers in the snapshot. It is not itself written to the event log. This means that ",Object(r.b)("em",{parentName:"p"},"an exporter\u2019s current position cannot be reconstructed from the replicated event log, only from a snapshot"),"."),Object(r.b)("p",null,"When a partition fails over to a new leader, the new leader is able to construct the current partition state by projecting the event log from the point of the last snapshot. The position of exporters cannot be reconstructed from the event log, so it is set to the last snapshot. This means that an exporter can see the same events twice in the event of a fail-over."),Object(r.b)("p",null,"You should assign idempotent ids to events in your exporter if this is an issue for your system. The combination of record position and partition id is reliable as a unique id for an event."),Object(r.b)("h3",{id:"effect-of-quorum-loss"},"Effect of quorum loss"),Object(r.b)("p",null,"If a partition goes under quorum (for example: if two nodes in a three node cluster go down), then the leader of the partition will continue to accept requests, but these requests will not be replicated and will not be marked as committed. In this case, they cannot be truncated. This causes the event log to grow. The amount of disk space needed to continue operating in this scenario is a function of the broker throughput and the amount of time to quorum being restored. You should ensure that your nodes have sufficient disk space to handle this failure mode."))}p.isMDXComponent=!0},449:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=o,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return n?a.a.createElement(h,s(s({ref:t},c),{},{components:n})):a.a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);