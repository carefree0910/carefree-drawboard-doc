"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[3348],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=i,y=s["".concat(c,".").concat(u)]||s[u]||f[u]||a;return t?n.createElement(y,o(o({ref:r},d),{},{components:t})):n.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6120:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(7462),i=(t(7294),t(3905));const a={id:"Types",title:"Types"},o=void 0,l={unversionedId:"api-reference/Types",id:"api-reference/Types",title:"Types",description:"There are some special types which are widely used in carefree-drawboard \ud83c\udfa8.",source:"@site/docs/api-reference/Types.md",sourceDirName:"api-reference",slug:"/api-reference/Types",permalink:"/carefree-drawboard-doc/docs/api-reference/Types",draft:!1,tags:[],version:"current",lastUpdatedAt:1685946636,formattedLastUpdatedAt:"Jun 5, 2023",frontMatter:{id:"Types",title:"Types"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/carefree-drawboard-doc/docs/contributing-guides/code-of-conduct"},next:{title:"Config",permalink:"/carefree-drawboard-doc/docs/api-reference/Config"}},c={},p=[{value:"<code>IStr</code>",id:"istr",level:2},{value:"<code>IFieldDefinition</code>",id:"ifielddefinition",level:2}],d={toc:p},s="wrapper";function f(e){let{components:r,...t}=e;return(0,i.kt)(s,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are some special types which are widely used in ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8."),(0,i.kt)("h2",{id:"istr"},(0,i.kt)("inlineCode",{parentName:"h2"},"IStr")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/parsers/noli.py"',title:'"cfdraw/parsers/noli.py"'},'class I18N(BaseModel):\n    zh: str = Field(..., description="Chinese")\n    en: str = Field(..., description="English")\n\nIStr = Union[str, I18N]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IStr")," is used for i18n (internationalization). Whenever you see a property with type ",(0,i.kt)("inlineCode",{parentName:"p"},"IStr"),", it means that this property is i18n-able, and you can pass either an ",(0,i.kt)("inlineCode",{parentName:"p"},"str")," or an ",(0,i.kt)("inlineCode",{parentName:"p"},"I18N")," object to it based on your needs."),(0,i.kt)("h2",{id:"ifielddefinition"},(0,i.kt)("inlineCode",{parentName:"h2"},"IFieldDefinition")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/schema/fields.py"',title:'"cfdraw/schema/fields.py"'},"IFieldDefinition = Union[\n    ITextField,\n    IImageField,\n    INumberField,\n    ISelectField,\n    I18NSelectField,\n    ISelectLocalField,\n    IBooleanField,\n    IColorField,\n    IListField,\n    IObjectField,\n]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IFieldDefinition")," is a union of all ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/IPluginInfo#available-fields"},"Available Fields"),"."))}f.isMDXComponent=!0}}]);