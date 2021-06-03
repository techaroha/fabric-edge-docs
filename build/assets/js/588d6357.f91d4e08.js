(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,b=s["".concat(a,".").concat(m)]||s[m]||d[m]||c;return n?o.a.createElement(b,i(i({ref:t},u),{},{components:n})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var u=2;u<c;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),c=(n(0),n(101)),a={id:"other-modules",title:"Other modules"},i={unversionedId:"reference/modules/other-modules",id:"reference/modules/other-modules",isDocsHomePage:!1,title:"Other modules",description:"Crypto",source:"@site/docs/reference/modules/other-modules.md",slug:"/reference/modules/other-modules",permalink:"/docs/reference/modules/other-modules",editUrl:"https://github.com/0xPolygon/polygon-sdk-docs/docs/reference/modules/other-modules.md",version:"current",sidebar:"develop",previous:{title:"Types",permalink:"/docs/reference/modules/types"},next:{title:"State in Ethereum",permalink:"/docs/guides/ethereum-state"}},l=[{value:"Crypto",id:"crypto",children:[]},{value:"Chain",id:"chain",children:[]},{value:"Helper",id:"helper",children:[]},{value:"Command",id:"command",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"crypto"},"Crypto"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"Crypto")," module contains crypto utility functions."),Object(c.b)("h2",{id:"chain"},"Chain"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"Chain")," module contains chain parameters (active forks, consensus engine, etc.)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"chains")," - Predefined chain configurations (mainnet, goerli, ibft)")),Object(c.b)("h2",{id:"helper"},"Helper"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"Helper")," module contains helper packages."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"dao")," - Dao utils"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"enode")," - Enode encoding/decoding function"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"hex")," - Hex encoding/decoding functions"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"ipc")," - IPC connection functions"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"keccak")," - Keccak functions"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"rlputil")," - Rlp encoding/decoding helper function")),Object(c.b)("h2",{id:"command"},"Command"),Object(c.b)("p",null,"The ",Object(c.b)("strong",{parentName:"p"},"Command")," module contains interfaces for CLI commands."))}p.isMDXComponent=!0}}]);