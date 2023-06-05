"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[2924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={id:"design-philosophy",title:"Design Philosophy"},o=void 0,l={unversionedId:"reference/design-philosophy",id:"reference/design-philosophy",title:"Design Philosophy",description:"carefree-drawboard \ud83c\udfa8 made assumptions that:",source:"@site/docs/reference/design-philosophy.md",sourceDirName:"reference",slug:"/reference/design-philosophy",permalink:"/carefree-drawboard-doc/docs/reference/design-philosophy",draft:!1,tags:[],version:"current",lastUpdatedAt:1685968430,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"design-philosophy",title:"Design Philosophy"},sidebar:"docs",previous:{title:"ISocketMessage",permalink:"/carefree-drawboard-doc/docs/api-reference/ISocketMessage"},next:{title:"Terminology",permalink:"/carefree-drawboard-doc/docs/reference/terminology"}},s={},d=[{value:"Plugins",id:"plugins",level:2},{value:"Extensibility",id:"extensibility",level:2},{value:"Design Details",id:"design-details",level:2},{value:"References",id:"references",level:2},{value:"Sync",id:"sync",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 made assumptions that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It is a painful process to spend time thinking and designing the layout of various UIs."),(0,r.kt)("li",{parentName:"ul"},'Most user interactions can be abstracted into "send something to server" & "receive something to server".'),(0,r.kt)("li",{parentName:"ul"},"A completely decoupled system is what we dreamed of, because it can be easily customized, extended and maintained."),(0,r.kt)("li",{parentName:"ul"},"An infinite drawboard is capable of building (almost) all the desired applications.")),(0,r.kt)("p",null,"So we derived the following design principles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Everything")," is a ",(0,r.kt)("strong",{parentName:"li"},"plugin")," on an ",(0,r.kt)("strong",{parentName:"li"},"Infinite Drawboard"),"."),(0,r.kt)("li",{parentName:"ul"},"Plugin Styles should be fully declarative and should contain a smart layout system (which should also be declarative)."),(0,r.kt)("li",{parentName:"ul"},"Plugin Logics should only have access to the data from:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Itself (e.g., some input fields declared by the Styles)."),(0,r.kt)("li",{parentName:"ul"},"The selecting ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/terminology#node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),"(s).")))),(0,r.kt)("p",null,"Under these principles, no matter what programming languages (even ",(0,r.kt)("strong",{parentName:"p"},"JSON"),", if your plugins contain no logics) you are using, you can easily extend the functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 by writing plugins (see ",(0,r.kt)("a",{parentName:"p",href:"#extensibility"},"Extensibility")," for more details)."),(0,r.kt)("p",null,"And since:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We love ",(0,r.kt)("inlineCode",{parentName:"li"},"Python"),".")),(0,r.kt)("p",null,"So (currently) we provide a python binding, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cfdraw")," package, for you to write plugins (both styles and logics) using ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),"."),(0,r.kt)("p",null,"We'll dive into the details of these principles in the following sections."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To see the design details of our plugins, see ",(0,r.kt)("a",{parentName:"p",href:"#design-details"},"Design Details"),".")),(0,r.kt)("p",null,"In order to achieve the principles, ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 designs a universal plugin paradigm which balanced functionality and flexibility. Specifically, our plugins will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use declarative way to build itself. More specificly, ",(0,r.kt)("strong",{parentName:"li"},"EVERY")," plugin should be able to be constructed from a ",(0,r.kt)("strong",{parentName:"li"},"JSON")," data.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this case, not only ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),", but also any programming languages can access to ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 (see ",(0,r.kt)("a",{parentName:"p",href:"#extensibility"},"Extensibility")," for more details)!")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Be presented on the drawboard \ud83c\udfa8 in the form of an icon button (or text button, if necessary). When we click on it, it will either trigger an event directly or expand a panel for further interactions.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Typically, the panel expanded here will be contain some input fields used to send some data to ",(0,r.kt)("inlineCode",{parentName:"p"},"Python"),".")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Control their own position and determine whether they need to be displayed based on ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/terminology#pivot"},(0,r.kt)("inlineCode",{parentName:"a"},"Pivot"))," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/terminology#node"},(0,r.kt)("inlineCode",{parentName:"a"},"Node")),". Here are two typical examples:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'For some "global" plugins (such as the "Settings" plugin), we will anchor it in a corner ',(0,r.kt)("a",{parentName:"li",href:"/docs/reference/terminology#pivot"},(0,r.kt)("inlineCode",{parentName:"a"},"Pivot"))," of the drawboard \ud83c\udfa8 (such as the upper right corner, ",(0,r.kt)("inlineCode",{parentName:"li"},"rt"),") and keep it displayed no matter what."),(0,r.kt)("li",{parentName:"ul"},'For some "specific" plugins (such as plugins that can perform image processing), we want it to be displayed only when an ',(0,r.kt)("inlineCode",{parentName:"li"},"ImageNode")," is selected, and we want it to ",(0,r.kt)("inlineCode",{parentName:"li"},"follow")," a corner of the ",(0,r.kt)("inlineCode",{parentName:"li"},"ImageNode")," (such as the upper right corner, ",(0,r.kt)("inlineCode",{parentName:"li"},"rt"),").")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/plugins#plugin-positioning"},"Plugin Positioning")," for more details.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Have a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/middleware"},"Middleware")," system that can facilitate our use. In short, ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/middleware"},"Middleware")," can convert our 'raw' results (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"str"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"PIL.Image"),", or list of them) into data structure we actually need.")),(0,r.kt)("h2",{id:"extensibility"},"Extensibility"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 is designed to be extensible. It should be easy to migrate from ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," to other (backend) programming languages, because all communications between frontend and backend are based on a static set of APIs."),(0,r.kt)("p",null,"In order to guide you to write your own plugins with your favorite programming languages, we'll first show you the design details of our plugins (see ",(0,r.kt)("a",{parentName:"p",href:"#design-details"},"Design Details"),"), and then we'll give you some references (see ",(0,r.kt)("a",{parentName:"p",href:"#references"},"References"),")."),(0,r.kt)("h2",{id:"design-details"},"Design Details"),(0,r.kt)("p",null,"In this section, we will introduce the design details of the plugin system, so you can know about why we can write plugins from backend side."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The backend should wrap the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/reference/terminology#styles"},"Styles"))," and ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"/docs/reference/terminology#logics"},"Logics"))," into a single ",(0,r.kt)("strong",{parentName:"li"},"class")," / ",(0,r.kt)("strong",{parentName:"li"},"struct"),".",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Styles")," should be ",(0,r.kt)("strong",{parentName:"li"},"JSON")," serializable."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("strong",{parentName:"li"},"Logics")," should be asynchronous functions that are responsible for sending intermediate progress / final results to the frontend."))),(0,r.kt)("li",{parentName:"ol"},"The backend should then '",(0,r.kt)("strong",{parentName:"li"},"register"),"' this class / struct to a global '",(0,r.kt)("strong",{parentName:"li"},"factory"),"' (e.g., our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-drawboard/blob/54c9821b13f25b124e465cbc2acd83c5bd1e607e/cfdraw/plugins/factory.py#L25"},(0,r.kt)("inlineCode",{parentName:"a"},"PluginFactory")),").",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"You should assign the class / struct itself, not an instance of it. Instances should be created on the fly, so we don't suffer from data sharing issues."),(0,r.kt)("li",{parentName:"ol"},"You should assign a unique ",(0,r.kt)("inlineCode",{parentName:"li"},"identifier")," when registering."))),(0,r.kt)("li",{parentName:"ol"},"The backend should launch a WebSocket server, and a long-lasting connection will be established from the frontend to the backend. This connection will do the following things:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"The frontend will send a one-time '",(0,r.kt)("strong",{parentName:"li"},"sync"),"' request to the backend, and the backend should use the '",(0,r.kt)("strong",{parentName:"li"},"factory"),"' to generate a JSON data (e.g., with our ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/carefree0910/carefree-drawboard/blob/ce2e6f82314b38d20fe245430c91029b12a9f795/cfdraw/schema/plugins.py#L258"},(0,r.kt)("inlineCode",{parentName:"a"},"to_react"))," method) which tells the frontend how to render the plugins on the drawboard \ud83c\udfa8."),(0,r.kt)("li",{parentName:"ol"},"The frontend will send a task request to the backend once users interact with the plugins. The task request is statically typed (",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"ISocketRequest")),") and will contain the ",(0,r.kt)("inlineCode",{parentName:"li"},"identifier")," of the plugin, so the backend knows which plugin's ",(0,r.kt)("strong",{parentName:"li"},"Logics")," should be executed."),(0,r.kt)("li",{parentName:"ol"},"During the execution, the backend will send intermediate progress / final results messages to the frontend. The messages should follow specific interface (",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"ISocketMessage")),"), so it might be better to:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Introduce a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/middleware"},"Middleware")," system."),(0,r.kt)("li",{parentName:"ol"},"Introduce some ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/Built-in-Methods"},"Built-in Methods"),"."))),(0,r.kt)("li",{parentName:"ol"},"The frontend will then render the progress / results on the drawboard \ud83c\udfa8.")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The OpenAPI specification can be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8123/openapi.json"),", if you start this project locally at ",(0,r.kt)("inlineCode",{parentName:"p"},"8123")," port.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/app/endpoints/websocket.py"},"websocket")," source codes and the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/blob/dev/cfdraw/plugins/_internal/sync.py"},(0,r.kt)("inlineCode",{parentName:"a"},"SyncSocketPlugin"))," source codes. You can also see ",(0,r.kt)("a",{parentName:"p",href:"#sync"},"Sync")," for a brief introduction of the underlying mechanism.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The plugins are designed to use:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketRequest"},(0,r.kt)("inlineCode",{parentName:"a"},"ISocketRequest"))," as input message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketMessage"},(0,r.kt)("inlineCode",{parentName:"a"},"ISocketMessage"))," as response message")),(0,r.kt)("p",{parentName:"li"},"to communicate between frontend and backend through an everlasting WebSocket connection, so once your backend can receive / send such (JSON) data structure from / to the frontend it should be all fine."))),(0,r.kt)("h2",{id:"sync"},"Sync"),(0,r.kt)("p",null,"One of the main difficulties of building ",(0,r.kt)("inlineCode",{parentName:"p"},"Python")," (or, other backend programming languages) based web frameworks is the communication between frontend and backend. ",(0,r.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 tackles this problem by using WebSocket to communicate:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The frontend will maintain a WebSocket connection to the backend, and poll for the settings. If the backend is dead, the frontend will also poll until the backend is alive again."),(0,r.kt)("li",{parentName:"ol"},"Once the settings are fetched, the frontend will check the hash of the settings. If the hash is different from the current one, the frontend will update the settings and re-render the drawboard \ud83c\udfa8.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I have to admit: Until 2023-04-15, I was using file system for the communication. It can start up fast but it was a terrible development experience.")))}u.isMDXComponent=!0}}]);