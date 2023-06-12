"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[3348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(t),u=i,m=s["".concat(p,".").concat(u)]||s[u]||f[u]||a;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=t(7462),i=(t(7294),t(3905));const a={id:"Types",title:"Types"},o=void 0,l={unversionedId:"api-reference/Types",id:"api-reference/Types",title:"Types",description:"There are some special types which are widely used in carefree-drawboard \ud83c\udfa8.",source:"@site/docs/api-reference/Types.md",sourceDirName:"api-reference",slug:"/api-reference/Types",permalink:"/carefree-drawboard-doc/docs/api-reference/Types",draft:!1,tags:[],version:"current",lastUpdatedAt:1686554358,formattedLastUpdatedAt:"Jun 12, 2023",frontMatter:{id:"Types",title:"Types"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/carefree-drawboard-doc/docs/contributing-guides/code-of-conduct"},next:{title:"Config",permalink:"/carefree-drawboard-doc/docs/api-reference/Config"}},p={},d=[{value:"<code>I18N</code>",id:"i18n",level:2},{value:"<code>IStr</code>",id:"istr",level:2},{value:"<code>IFieldDefinition</code>",id:"ifielddefinition",level:2},{value:"<code>IChakra</code>",id:"ichakra",level:2},{value:"<code>SingleNodeType</code>",id:"singlenodetype",level:2}],c={toc:d},s="wrapper";function f(e){let{components:n,...t}=e;return(0,i.kt)(s,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are some special types which are widely used in ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8."),(0,i.kt)("h2",{id:"i18n"},(0,i.kt)("inlineCode",{parentName:"h2"},"I18N")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/parsers/noli.py"',title:'"cfdraw/parsers/noli.py"'},'class I18N(BaseModel):\n    zh: str = Field(..., description="Chinese")\n    en: str = Field(..., description="English")\n')),(0,i.kt)("h2",{id:"istr"},(0,i.kt)("inlineCode",{parentName:"h2"},"IStr")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/parsers/noli.py"',title:'"cfdraw/parsers/noli.py"'},"IStr = Union[str, I18N]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IStr")," is used for i18n (internationalization). Whenever you see a property with type ",(0,i.kt)("inlineCode",{parentName:"p"},"IStr"),", it means that this property is i18n-able, and you can pass either an ",(0,i.kt)("inlineCode",{parentName:"p"},"str")," or an ",(0,i.kt)("a",{parentName:"p",href:"#i18n"},(0,i.kt)("inlineCode",{parentName:"a"},"I18N"))," object to it based on your needs."),(0,i.kt)("h2",{id:"ifielddefinition"},(0,i.kt)("inlineCode",{parentName:"h2"},"IFieldDefinition")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/schema/fields.py"',title:'"cfdraw/schema/fields.py"'},"IFieldDefinition = Union[\n    ITextField,\n    IImageField,\n    INumberField,\n    ISelectField,\n    I18NSelectField,\n    ISelectLocalField,\n    IBooleanField,\n    IColorField,\n    IListField,\n    IObjectField,\n]\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IFieldDefinition")," is a union of all ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/IPluginInfo#available-fields"},"Available Fields"),"."),(0,i.kt)("h2",{id:"ichakra"},(0,i.kt)("inlineCode",{parentName:"h2"},"IChakra")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"This class should (and will) eventually align with all the common ",(0,i.kt)("inlineCode",{parentName:"p"},"chakra")," props.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'class IChakra(BaseModel):\n    w: Optional[str] = Field(None, description="Width")\n    h: Optional[str] = Field(None, description="Height")\n    p: Optional[str] = Field(None, description="Padding")\n    bg: Optional[str] = Field(None, description="Background color")\n    textAlign: Optional[TextAlign] = Field(None, description="Text align")\n')),(0,i.kt)("h2",{id:"singlenodetype"},(0,i.kt)("inlineCode",{parentName:"h2"},"SingleNodeType")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/parsers/noli.py"',title:'"cfdraw/parsers/noli.py"'},'class SingleNodeType(str, Enum):\n    POLYGON = "polygon"\n    ELLIPSE = "ellipse"\n    RECTANGLE = "rectangle"\n    STAR = "star"\n    LINE = "line"\n    PATH = "path"\n    SVG = "svg"\n    TEXT = "text"\n    IMAGE = "image"\n    NOLI_FRAME = "noliFrame"\n    NOLI_TEXT_FRAME = "noliTextFrame"\n')))}f.isMDXComponent=!0}}]);