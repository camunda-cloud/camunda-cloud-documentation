(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{515:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(662)),i={id:"testing",title:"Writing tests"},s={unversionedId:"product-manuals/clients/java-client/testing",id:"version-0.26/product-manuals/clients/java-client/testing",isDocsHomePage:!1,title:"Writing tests",description:"You can use the zeebe-test module to write JUnit tests for your job worker and BPMN workflow. It provides a JUnit rule to bootstrap the broker and some basic assertions.",source:"@site/versioned_docs/version-0.26/product-manuals/clients/java-client/testing.md",slug:"/product-manuals/clients/java-client/testing",permalink:"/docs/0.26/product-manuals/clients/java-client/testing",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/versioned_docs/version-0.26/product-manuals/clients/java-client/testing.md",version:"0.26",sidebar:"version-0.26/Product Manuals",previous:{title:"Logging",permalink:"/docs/0.26/product-manuals/clients/java-client/logging"},next:{title:"Java examples",permalink:"/docs/0.26/product-manuals/clients/java-client-examples/index"}},c=[{value:"Usage in a Maven project",id:"usage-in-a-maven-project",children:[]},{value:"Bootstrap the broker",id:"bootstrap-the-broker",children:[]},{value:"Verify the Result",id:"verify-the-result",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-test")," module to write JUnit tests for your job worker and BPMN workflow. It provides a JUnit rule to bootstrap the broker and some basic assertions."),Object(o.b)("h2",{id:"usage-in-a-maven-project"},"Usage in a Maven project"),Object(o.b)("p",null,"Add ",Object(o.b)("inlineCode",{parentName:"p"},"zeebe-test")," as Maven test dependency to your project:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n  <groupId>io.zeebe</groupId>\n  <artifactId>zeebe-test</artifactId>\n  <scope>test</scope>\n</dependency>\n")),Object(o.b)("h2",{id:"bootstrap-the-broker"},"Bootstrap the broker"),Object(o.b)("p",null,"Use the ",Object(o.b)("inlineCode",{parentName:"p"},"ZeebeTestRule")," in your test case to start an embedded broker. It contains a client which can be used to deploy a BPMN workflow or create an instance."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'import io.zeebe.client.ZeebeClient;\nimport io.zeebe.client.api.response.WorkflowInstanceEvent;\nimport org.junit.Before;\nimport org.junit.Rule;\nimport org.junit.Test;\n\npublic class MyTest {\n\n  @Rule public final ZeebeTestRule testRule = new ZeebeTestRule();\n\n  private ZeebeClient client;\n\n  @Test\n  public void test() {\n    client = testRule.getClient();\n\n    client\n        .newDeployCommand()\n        .addResourceFromClasspath("process.bpmn")\n        .send()\n        .join();\n\n    final WorkflowInstanceEvent workflowInstance =\n        client\n            .newCreateInstanceCommand()\n            .bpmnProcessId("process")\n            .latestVersion()\n            .send()\n            .join();\n  }\n}\n')),Object(o.b)("h2",{id:"verify-the-result"},"Verify the Result"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ZeebeTestRule")," provides also some basic assertions in AssertJ style. The entry point of the assertions is ",Object(o.b)("inlineCode",{parentName:"p"},"ZeebeTestRule.assertThat(...)"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'final WorkflowInstanceEvent workflowInstance = ...\n\nZeebeTestRule.assertThat(workflowInstance)\n    .isEnded()\n    .hasPassed("start", "task", "end")\n    .hasVariable("result", 21.0);\n')))}u.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);