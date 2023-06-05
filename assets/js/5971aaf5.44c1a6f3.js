"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[7e3],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"known-issues",title:"Known Issues"},o=void 0,s={unversionedId:"about/known-issues",id:"about/known-issues",title:"Known Issues",description:"- [ ] carefree-drawboard \ud83c\udfa8 is not smartphone friendly.",source:"@site/docs/about/known-issues.md",sourceDirName:"about",slug:"/about/known-issues",permalink:"/carefree-drawboard-doc/docs/about/known-issues",draft:!1,tags:[],version:"current",lastUpdatedAt:1685968430,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"known-issues",title:"Known Issues"},sidebar:"docs",previous:{title:"Roadmap",permalink:"/carefree-drawboard-doc/docs/about/roadmap"},next:{title:"License",permalink:"/carefree-drawboard-doc/docs/about/license"}},l={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("inlineCode",{parentName:"li"},"carefree-drawboard")," \ud83c\udfa8 is not smartphone friendly.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"I think it's a bit too heavy for mobile devices, but if many people want it, I will try to support it.")),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","The item from a select box will blur under some combinations of system & hardware."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This seems to be a ",(0,r.kt)("inlineCode",{parentName:"li"},"chakra"),"/",(0,r.kt)("inlineCode",{parentName:"li"},"popover.js")," issue."))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Combining keyboard shortcuts and Undo/Redo may cause plugins not follow the selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),"s correctly.")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","Using keyboard shortcuts in sketch mode may cause unexpected behaviors.")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","On M1 Mac, anything related to the ",(0,r.kt)("inlineCode",{parentName:"p"},"input")," HTML tag with ",(0,r.kt)("inlineCode",{parentName:"p"},'type="file"')," may not work."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Therefore the ",(0,r.kt)("inlineCode",{parentName:"li"},"Upload Image")," button may not response. In this case, you can directly drag images to drawboard \ud83c\udfa8."))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","The interactions on the drawboard \ud83c\udfa8 will be interrupted if the mouse slipped pass any plugin (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/commit/be1b43389e5db24b1ade3d973c45b24a3d944d30"},"be1b433"),")."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This is intended, as we want the plugins' interactions to be prioritized."),(0,r.kt)("li",{parentName:"ul"},"But this will also lead to unexpected user experiences, so maybe it need to be somehow optimized in the future."))),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","The displayed ",(0,r.kt)("inlineCode",{parentName:"p"},"CURRENT VERSION")," in browser console is one version behind.")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ","When 'magnet effects' take place, the plugins cannot be dragged to the correct position."))))}u.isMDXComponent=!0}}]);