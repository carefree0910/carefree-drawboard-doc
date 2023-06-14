"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[4794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6873:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);function r(e){let{type:t,defaultValue:n,required:r,appendix:o}=e;const l=a.createElement(a.Fragment,null,o&&a.createElement(a.Fragment,null," ","- ",a.createElement("code",null,o)));return a.createElement("p",null,"[ ",a.createElement("strong",null,t),r?a.createElement(a.Fragment,null,a.createElement("em",null,", required"),l):n?a.createElement(a.Fragment,null,a.createElement("em",null,", default"),": ",a.createElement("code",null,n),l):""," ","]")}},3140:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),o=n(6873);const l={id:"Config",title:"Config"},i=void 0,d={unversionedId:"api-reference/Config",id:"api-reference/Config",title:"Config",description:"entry",source:"@site/docs/api-reference/Config.md",sourceDirName:"api-reference",slug:"/api-reference/Config",permalink:"/carefree-drawboard-doc/docs/api-reference/Config",draft:!1,tags:[],version:"current",lastUpdatedAt:1686703769,formattedLastUpdatedAt:"Jun 14, 2023",frontMatter:{id:"Config",title:"Config"},sidebar:"docs",previous:{title:"Types",permalink:"/carefree-drawboard-doc/docs/api-reference/Types"},next:{title:"Global Functions",permalink:"/carefree-drawboard-doc/docs/api-reference/Global-Functions"}},p={},c=[{value:"<code>entry</code>",id:"entry",level:3},{value:"<code>frontend_port</code>",id:"frontend_port",level:3},{value:"<code>backend_port</code>",id:"backend_port",level:3},{value:"<code>backend_hosting_url</code>",id:"backend_hosting_url",level:3},{value:"<code>upload_root</code>",id:"upload_root",level:3},{value:"<code>board_settings</code>",id:"board_settings",level:3},{value:"<code>BoardOptions</code>",id:"boardoptions",level:4},{value:"<code>GlobalSettings</code>",id:"globalsettings",level:4},{value:"<code>extra_plugins</code>",id:"extra_plugins",level:3},{value:"<code>use_react_strict_mode</code>",id:"use_react_strict_mode",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"entry"},(0,r.kt)("inlineCode",{parentName:"h3"},"entry")),(0,r.kt)(o.Z,{type:"str",defaultValue:'"app"',mdxType:"Badget"}),(0,r.kt)("p",null,"Indicates the name of the main file."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"It is OK to use ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"app.py")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"./app.py"),", so you can safely use the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tab")," completion of your shell.")),(0,r.kt)("h3",{id:"frontend_port"},(0,r.kt)("inlineCode",{parentName:"h3"},"frontend_port")),(0,r.kt)(o.Z,{type:"str",defaultValue:'"5123"',mdxType:"Badget"}),(0,r.kt)("p",null,"The port of the frontend, will take no effect if ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guides/hosting#--unified"},(0,r.kt)("inlineCode",{parentName:"a"},"--unified"))," mode is used."),(0,r.kt)("h3",{id:"backend_port"},(0,r.kt)("inlineCode",{parentName:"h3"},"backend_port")),(0,r.kt)(o.Z,{type:"str",defaultValue:'"8123"',mdxType:"Badget"}),(0,r.kt)("p",null,"The port of the backend, will also be the port of the frontend if ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guides/hosting#--unified"},(0,r.kt)("inlineCode",{parentName:"a"},"--unified"))," mode is used."),(0,r.kt)("h3",{id:"backend_hosting_url"},(0,r.kt)("inlineCode",{parentName:"h3"},"backend_hosting_url")),(0,r.kt)(o.Z,{type:"str",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",null,"If provided, the frontend will post requests to this url."),(0,r.kt)("h3",{id:"upload_root"},(0,r.kt)("inlineCode",{parentName:"h3"},"upload_root")),(0,r.kt)(o.Z,{type:"str",defaultValue:'"~/.cache/carefree-draw"',mdxType:"Badget"}),(0,r.kt)("p",null,"The root folder where your uploaded stuffs will be stored."),(0,r.kt)("h3",{id:"board_settings"},(0,r.kt)("inlineCode",{parentName:"h3"},"board_settings")),(0,r.kt)(o.Z,{type:"BoardSettings",defaultValue:"BoardSettings()",mdxType:"Badget"}),(0,r.kt)("p",null,"The overall settings of the drawboard \ud83c\udfa8."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/schema/settings.py"',title:'"cfdraw/schema/settings.py"'},'class BoardSettings(BaseModel):\n    boardOptions: Optional[BoardOptions] = Field(None, description="board options")\n    globalSettings: Optional[GlobalSettings] = Field(None, description="global setting")\n')),(0,r.kt)("h4",{id:"boardoptions"},(0,r.kt)("inlineCode",{parentName:"h4"},"BoardOptions")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"minScale")),(0,r.kt)(o.Z,{type:"float",defaultValue:"0.02",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"Specify the minimum global scale of the drawboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"maxScale")),(0,r.kt)(o.Z,{type:"float",defaultValue:"256",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"Specify the maximum global scale of the drawboard."))),(0,r.kt)("h4",{id:"globalsettings"},(0,r.kt)("inlineCode",{parentName:"h4"},"GlobalSettings")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"defaultLang")),(0,r.kt)(o.Z,{type:"noli.Lang",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"The default language.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"defaultInfoTimeout")),(0,r.kt)(o.Z,{type:"int",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"The default timeout of the info message.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"excludeReactPlugins")),(0,r.kt)(o.Z,{type:"List[ReactPluginType]",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"React plugins to be excluded.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"iconLoadingPatience")),(0,r.kt)(o.Z,{type:"int",defaultValue:"None",mdxType:"Badget"}),(0,r.kt)("p",{parentName:"li"},"Show icon loading animation if the icon is not loaded after ",(0,r.kt)("inlineCode",{parentName:"p"},"{patience}")," ms."))),(0,r.kt)("h3",{id:"extra_plugins"},(0,r.kt)("inlineCode",{parentName:"h3"},"extra_plugins")),(0,r.kt)(o.Z,{type:"ExtraPlugins",defaultValue:"ExtraPlugins()",mdxType:"Badget"}),(0,r.kt)("p",null,"Extra plugins to be loaded."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/schema/settings.py"',title:'"cfdraw/schema/settings.py"'},'class ExtraPlugins(BaseModel):\n    logo: Optional[ILogoSettings] = Field(None, description="logo settings")\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ILogoSettings")," is just an inheritance of ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/IPluginSettings"},"IPluginSettings"),", but without the need to specify ",(0,r.kt)("inlineCode",{parentName:"li"},"w")," & ",(0,r.kt)("inlineCode",{parentName:"li"},"h"),". If it is provided, we will render a logo based on the settings."))),(0,r.kt)("h3",{id:"use_react_strict_mode"},(0,r.kt)("inlineCode",{parentName:"h3"},"use_react_strict_mode")),(0,r.kt)(o.Z,{type:"bool",defaultValue:"False",mdxType:"Badget"}),(0,r.kt)("p",null,"Whether use ",(0,r.kt)("a",{parentName:"p",href:"https://react.dev/reference/react/StrictMode"},"React.StrictMode")," or not."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If not for special purposes, just leave it as ",(0,r.kt)("inlineCode",{parentName:"p"},"False"),".")))}m.isMDXComponent=!0}}]);