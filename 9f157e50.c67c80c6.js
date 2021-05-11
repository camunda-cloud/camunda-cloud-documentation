(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{453:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(7),a=(n(0),n(662)),o={id:"authorization",title:"Authorization"},l={unversionedId:"product-manuals/zeebe/deployment-guide/security/authorization",id:"product-manuals/zeebe/deployment-guide/security/authorization",isDocsHomePage:!1,title:"Authorization",description:"Zeebe clients also provide a way for users to modify gRPC call headers, namely to contain access tokens. Note that the gateway doesn't provide any way of validating these headers, so users must implement a reverse proxy with a gRPC interceptor to validate them.",source:"@site/docs/product-manuals/zeebe/deployment-guide/security/authorization.md",slug:"/product-manuals/zeebe/deployment-guide/security/authorization",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/authorization",editUrl:"https://github.com/camunda-cloud/camunda-cloud-documentation/edit/master/docs/product-manuals/zeebe/deployment-guide/security/authorization.md",version:"current",sidebar:"Product Manuals",previous:{title:"Authentication",permalink:"/docs/product-manuals/zeebe/deployment-guide/security/authentication"},next:{title:"Operating Zeebe in Production",permalink:"/docs/product-manuals/zeebe/deployment-guide/operations/index"}},c=[{value:"Credentials provider",id:"credentials-provider",children:[{value:"Java",id:"java",children:[]},{value:"Go",id:"go",children:[]}]},{value:"OAuthCredentialsProvider",id:"oauthcredentialsprovider",children:[{value:"Java",id:"java-1",children:[]},{value:"Go",id:"go-1",children:[]},{value:"Environment variables",id:"environment-variables",children:[]}]}],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Zeebe clients also provide a way for users to modify gRPC call headers, namely to contain access tokens. Note that the gateway doesn't provide any way of validating these headers, so users must implement a reverse proxy with a gRPC interceptor to validate them."),Object(a.b)("p",null,"Users can modify gRPC headers using Zeebe's built-in ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider"),", which uses user-specified credentials to contact a OAuth authorization server. The authorization server should return an access token that is then appended to each gRPC request. Although, by default ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," is configured with to use a Camunda Cloud authorization server, it can be configured to use any user-defined server. Users can also write a custom ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/zeebe-io/zeebe/blob/develop/clients/java/src/main/java/io/zeebe/client/CredentialsProvider.java"}),"CredentialsProvider"),". In the following sections we will describe the ",Object(a.b)("inlineCode",{parentName:"p"},"CredentialsProvider")," interface as well as the built-in implementation."),Object(a.b)("h2",{id:"credentials-provider"},"Credentials provider"),Object(a.b)("p",null,"As previously mentioned, the ",Object(a.b)("inlineCode",{parentName:"p"},"CredentialProvider"),"'s purpose is to modify the gRPC headers with an authorization method such that a reverse proxy sitting in front of the gateway can validate them. The interface consists of an ",Object(a.b)("inlineCode",{parentName:"p"},"applyCredentials")," method and a ",Object(a.b)("inlineCode",{parentName:"p"},"shouldRetryRequest")," method. The first method is called for each gRPC call and takes a map of headers to which it should add credentials. The second method is called whenever a gRPC call fails and takes in the error that caused the failure which is then used to decide whether or not the request should be retried. The following sections implement simple custom provider in Java and Go."),Object(a.b)("h3",{id:"java"},"Java"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class MyCredentialsProvider implements CredentialsProvider {\n    /**\n     * Adds a token to the Authorization header of a gRPC call.\n    */\n    @Override\n    public void applyCredentials(final Metadata headers) {\n      final Key<String> authHeaderkey = Key.of("Authorization", Metadata.ASCII_STRING_MARSHALLER);\n      headers.put(authHeaderKey, "Bearer someToken");\n    }\n\n    /**\n    * Retries request if it failed with a timeout.\n    */\n    @Override\n    public boolean shouldRetryRequest(final Throwable throwable) {\n      return ((StatusRuntimeException) throwable).getStatus() == Status.DEADLINE_EXCEEDED;\n    }\n}\n')),Object(a.b)("p",null,"After implementing the ",Object(a.b)("inlineCode",{parentName:"p"},"CredentialsProvider"),", we can simply provide it when building a client:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"public class SecureClient {\n    public static void main(final String[] args) {\n      final ZeebeClient client = ZeebeClient.newClientBuilder().credentialsProvider(new MyCredentialsProvider()).build();\n\n      // continue...\n    }\n}\n")),Object(a.b)("h3",{id:"go"},"Go"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n    "google.golang.org/grpc/status"\n    "google.golang.org/grpc/codes"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\ntype MyCredentialsProvider struct {\n}\n\n// ApplyCredentials adds a token to the Authorization header of a gRPC call.\nfunc (p *MyCredentialsProvider) ApplyCredentials(ctx context.Context, headers map[string]string) error {\n    headers["Authorization"] = "someToken"\n    return nil\n}\n\n// ShouldRetryRequest returns true if the call failed with a deadline exceed error.\nfunc (p *MyCredentialsProvider) ShouldRetryRequest(ctx context.Context, err error) bool {\n    return status.Code(err) == codes.DeadlineExceeded\n}\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        CredentialsProvider:  &MyCredentialsProvider{},\n    })\n    if err != nil {\n      panic(err)\n    }\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n      panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),Object(a.b)("h2",{id:"oauthcredentialsprovider"},"OAuthCredentialsProvider"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," requires the specification of a client ID and a client secret. These are then used to request an access token from an OAuth 2.0 authorization server through a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc6749#section-4.4"}),"client credentials flow"),". By default, the authorization server is the one used by Camunda Cloud but any other can be used. Using the access token returned by the authorization server, the ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," will add it to the gRPC headers of each request as a bearer token. Requests which fail with an ",Object(a.b)("inlineCode",{parentName:"p"},"UNAUTHENTICATED")," gRPC code are seamlessly retried if and only if a new access token can be obtained."),Object(a.b)("h3",{id:"java-1"},"Java"),Object(a.b)("p",null,"To use the Zeebe client with Camunda Cloud, first an ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider")," has to be created and configured with the appropriate client credentials. The ",Object(a.b)("inlineCode",{parentName:"p"},"audience")," should be equivalent to the cluster endpoint without a port number."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class AuthorizedClient {\n    public void main(String[] args) {\n        final OAuthCredentialsProvider provider =\n          new OAuthCredentialsProviderBuilder()\n              .clientId("clientId")\n              .clientSecret("clientSecret")\n              .audience("cluster.endpoint.com")\n              .build();\n\n        final ZeebeClient client =\n            new ZeebeClientBuilderImpl()\n                .gatewayAddress("cluster.endpoint.com:443")\n                .credentialsProvider(provider)\n                .build();\n\n        System.out.println(client.newTopologyRequest().send().join().toString());\n    }\n}\n')),Object(a.b)("p",null,"For security reasons, client secrets should not be hardcoded. Therefore, the recommended way of passing client secrets into Zeebe is to use environment variables. Although several variables are supported, the ones required to set up a minimal client are ",Object(a.b)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_ID")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_SECRET"),". After setting these variables to the correct values, the following would be equivalent to the previous code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'public class AuthorizedClient {\n    public void main(final String[] args) {\n        final ZeebeClient client =\n            new ZeebeClientBuilderImpl()\n                .gatewayAddress("cluster.endpoint.com:443")\n                .build();\n\n        System.out.println(client.newTopologyRequest().send().join().toString());\n    }\n}\n')),Object(a.b)("p",null,"The client will create an ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialProvider")," with the credentials specified through the environment variables and the audience will be extracted from the address specified through the ",Object(a.b)("inlineCode",{parentName:"p"},"ZeebeClientBuilder"),"."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Zeebe's Java client will not prevent you from adding credentials to gRPC calls while using an insecure connection but you should be aware that doing so will expose your access token by transmiting it in plaintext.")),Object(a.b)("h3",{id:"go-1"},"Go"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\nfunc main() {\n    credsProvider, err := zbc.NewOAuthCredentialsProvider(&zbc.OAuthProviderConfig{\n        ClientID:     "clientId",\n        ClientSecret: "clientSecret",\n        Audience:     "cluster.endpoint.com",\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress:      "cluster.endpoint.com:443",\n        CredentialsProvider: credsProvider,\n    })\n    if err != nil {\n        panic(err)\n    }\n\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),Object(a.b)("p",null,"As was the case with the Java client, it's possible to make use of the ",Object(a.b)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_ID")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ZEEBE_CLIENT_SECRET")," environment variables to simplify the client configuration:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "context"\n    "fmt"\n    "github.com/zeebe-io/zeebe/clients/go/pkg/zbc"\n)\n\nfunc main() {\n    client, err := zbc.NewClient(&zbc.ClientConfig{\n        GatewayAddress: "cluster.endpoint.com:443",\n    })\n    if err != nil {\n        panic(err)\n    }\n\n    ctx := context.Background()\n    response, err := client.NewTopologyCommand().Send(ctx)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Println(response.String())\n}\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note:")," Like the Java client, the Go client will not prevent you from adding credentials to gRPC calls while using an insecure connection but doing so will expose your access token.")),Object(a.b)("h3",{id:"environment-variables"},"Environment variables"),Object(a.b)("p",null,"Since there are several environment variables that can be used to configure an ",Object(a.b)("inlineCode",{parentName:"p"},"OAuthCredentialsProvider"),", we list them here along with their uses:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_ID")," - the client ID used to request an access token from the authorization server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_SECRET")," - the client secret used to request an access token from the authorization server"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_TOKEN_AUDIENCE")," - the address for which the token should be valid"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_AUTHORIZATION_SERVER_URL")," - the URL of the authorization server from which the access token will be requested (by default, configured for Camunda Cloud)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"ZEEBE_CLIENT_CONFIG_PATH")," - the path to a cache file where the access tokens will be stored (by default, it's ",Object(a.b)("inlineCode",{parentName:"li"},"$HOME/.camunda/credentials"),")")))}d.isMDXComponent=!0},662:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||a;return n?i.a.createElement(h,l(l({ref:t},s),{},{components:n})):i.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);