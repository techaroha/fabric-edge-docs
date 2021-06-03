(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,d=b["".concat(i,".").concat(m)]||b[m]||u[m]||a;return r?o.a.createElement(d,s(s({ref:t},l),{},{components:r})):o.a.createElement(d,s({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},84:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(101)),i={id:"networking",title:"Networking"},s={unversionedId:"reference/modules/networking",id:"reference/modules/networking",isDocsHomePage:!1,title:"Networking",description:"Overview",source:"@site/docs/reference/modules/networking.md",slug:"/reference/modules/networking",permalink:"/docs/reference/modules/networking",editUrl:"https://github.com/0xPolygon/polygon-sdk-docs/docs/reference/modules/networking.md",version:"current",sidebar:"develop",previous:{title:"Minimal",permalink:"/docs/reference/modules/minimal"},next:{title:"State",permalink:"/docs/reference/modules/state"}},c=[{value:"Overview",id:"overview",children:[]},{value:"GRPC",id:"grpc",children:[{value:"GRPC for Node Operators",id:"grpc-for-node-operators",children:[]},{value:"GRPC for Other Nodes",id:"grpc-for-other-nodes",children:[]}]},{value:"\ud83d\udcdc Resources",id:"-resources",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,"A node has to communicate with other nodes on the network, in order to exchange useful information.",Object(a.b)("br",null),"\nTo accomplish this task, the Polygon SDK leverages the battle-tested ",Object(a.b)("strong",{parentName:"p"},"libp2p")," framework."),Object(a.b)("p",null,"The choice to go with ",Object(a.b)("strong",{parentName:"p"},"libp2p")," is primarily focused on:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Speed")," - libp2p has a significant performance improvement over devp2p (used in GETH and other clients)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Extensibility")," - it serves as a great foundation for other features of the system"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Modularity")," - libp2p is modular by nature, just like the Polygon SDK. This gives greater flexibility, especially when parts of the Polygon SDK need to be swappable")),Object(a.b)("h2",{id:"grpc"},"GRPC"),Object(a.b)("p",null,"On top of ",Object(a.b)("strong",{parentName:"p"},"libp2p"),", the Polygon SDK uses the ",Object(a.b)("strong",{parentName:"p"},"GRPC")," protocol. ",Object(a.b)("br",null),"\nTechnically, the Polygon SDK uses several GRPC protocols, which will be covered later on."),Object(a.b)("p",null,"The GRPC layer helps abstract all the request / reply protocols and simplifies the streaming protocols needed for the SDK to function."),Object(a.b)("p",null,"GRPC relies on ",Object(a.b)("strong",{parentName:"p"},"Protocol Buffers")," to define ",Object(a.b)("em",{parentName:"p"},"services")," and ",Object(a.b)("em",{parentName:"p"},"message structures"),". ",Object(a.b)("br",null),"\nThe services and structures are defined in ",Object(a.b)("em",{parentName:"p"},".proto")," files, which are compiled and are language-agnostic."),Object(a.b)("p",null,"Earlier, we mentioned that the Polygon SDK leverages several GRPC protocols.",Object(a.b)("br",null),"\nThis was done in order to boost the overall UX for the node operator, something which often lags with clients like GETH and Parity."),Object(a.b)("p",null,"The node operator has a better overview of what is going on with the system by calling the GRPC service, instead of sifting through logs to find the information they're looking for."),Object(a.b)("h3",{id:"grpc-for-node-operators"},"GRPC for Node Operators"),Object(a.b)("p",null,"The following section might seem familiar, because it was briefly covered in the ",Object(a.b)("a",{parentName:"p",href:"/docs/cli-commands"},"CLI Commands")," section."),Object(a.b)("p",null,"The GRPC service that is intended to be used by ",Object(a.b)("strong",{parentName:"p"},"node operators")," is defined like so:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go",metastring:'title="minimal/proto/system.proto"',title:'"minimal/proto/system.proto"'},"service System {\n    // GetInfo returns info about the client\n    rpc GetStatus(google.protobuf.Empty) returns (ServerStatus);\n\n    // PeersAdd adds a new peer\n    rpc PeersAdd(PeersAddRequest) returns (google.protobuf.Empty);\n\n    // PeersList returns the list of peers\n    rpc PeersList(google.protobuf.Empty) returns (PeersListResponse);\n\n    // PeersInfo returns the info of a peer\n    rpc PeersStatus(PeersStatusRequest) returns (Peer);\n\n    // Subscribe subscribes to blockchain events\n    rpc Subscribe(google.protobuf.Empty) returns (stream BlockchainEvent);\n}\n")),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"The CLI commands actually call the implementations of these service methods. "),Object(a.b)("p",{parentName:"div"},"These methods are implemented in ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"minimal/system_service.go")),"."))),Object(a.b)("h3",{id:"grpc-for-other-nodes"},"GRPC for Other Nodes"),Object(a.b)("p",null,"The Polygon SDK also implements several service methods that are used by other nodes on the network. ",Object(a.b)("br",null),"\nThe mentioned service is described in the ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("a",{parentName:"strong",href:"/docs/reference/modules/protocol"},"Protocol"))," section."),Object(a.b)("h2",{id:"-resources"},"\ud83d\udcdc Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://developers.google.com/protocol-buffers"},"Protocol Buffers"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://libp2p.io/"},"libp2p"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},Object(a.b)("a",{parentName:"strong",href:"https://grpc.io/"},"gRPC")))))}p.isMDXComponent=!0}}]);