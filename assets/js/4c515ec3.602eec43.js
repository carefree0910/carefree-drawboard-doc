"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[474],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(r),f=a,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5852:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={id:"project-structure",title:"Project Structure"},i=void 0,c={unversionedId:"getting-started/project-structure",id:"getting-started/project-structure",title:"Project Structure",description:"Project structure in carefree-drawboard \ud83c\udfa8 is quite simple - one main file, and one config file.",source:"@site/docs/getting-started/project-structure.md",sourceDirName:"getting-started",slug:"/getting-started/project-structure",permalink:"/carefree-drawboard-doc/docs/getting-started/project-structure",draft:!1,tags:[],version:"current",lastUpdatedAt:1686554358,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"project-structure",title:"Project Structure"},sidebar:"docs",previous:{title:"Installation",permalink:"/carefree-drawboard-doc/docs/getting-started/installation"},next:{title:"Overview",permalink:"/carefree-drawboard-doc/docs/plugins/"}},p={},l=[{value:"Next Steps",id:"next-steps",level:2}],u={toc:l},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Project structure in ",(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 is quite simple - one main file, and one config file."),(0,a.kt)("p",null,"Let's create a new app called ",(0,a.kt)("inlineCode",{parentName:"p"},"my_app"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my_app\ncd my_app\ncfdraw init\n")),(0,a.kt)("p",null,"This will create a directory structure like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"my_app\n\u251c\u2500\u2500 app.py\n\u2514\u2500\u2500 cfconfig.py\n")),(0,a.kt)("p",null,"Pretty straightforward - ",(0,a.kt)("inlineCode",{parentName:"p"},"app.py")," is the main file, and ",(0,a.kt)("inlineCode",{parentName:"p"},"cfconfig.py")," is the config file."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 generates a default plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"GaussianBlur")," plugin) within the ",(0,a.kt)("inlineCode",{parentName:"p"},"app.py")," file. You can modify this file to customize your plugin.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"/docs/user-guides/configurations"},"Configurations")," for more details about ",(0,a.kt)("inlineCode",{parentName:"li"},"cfconfig.py"),"."))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Continue reading to see how to build your own plugins, in detail."))}d.isMDXComponent=!0}}]);