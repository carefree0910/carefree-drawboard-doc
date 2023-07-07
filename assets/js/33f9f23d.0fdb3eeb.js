"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[4288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},1229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));n(5488),n(5162);const r={id:"contributing",title:"Contributing"},o=void 0,l={unversionedId:"contributing-guides/contributing",id:"contributing-guides/contributing",title:"Contributing",description:"Contributions are truly welcomed! Here's a brief guide to help you contribute to carefree-drawboard \ud83c\udfa8.",source:"@site/docs/contributing-guides/contributing.md",sourceDirName:"contributing-guides",slug:"/contributing-guides/contributing",permalink:"/carefree-drawboard-doc/docs/contributing-guides/contributing",draft:!1,tags:[],version:"current",lastUpdatedAt:1688699959,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"docs",previous:{title:"Production",permalink:"/carefree-drawboard-doc/docs/user-guides/production"},next:{title:"Code of Conduct",permalink:"/carefree-drawboard-doc/docs/contributing-guides/code-of-conduct"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"<code>Python</code> Developers",id:"python-developers",level:2},{value:"<code>React</code> Developers",id:"react-developers",level:2},{value:"Create plugins for <code>Python</code>",id:"create-plugins-for-python",level:3},{value:"Create plugins in <code>React</code>",id:"create-plugins-in-react",level:3},{value:"Style Guide",id:"style-guide",level:2}],d={toc:s},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Contributions are truly welcomed! Here's a brief guide to help you contribute to ",(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"It might be necessary to install ",(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 from source for development purposes. You can do this by cloning the repository and running ",(0,a.kt)("inlineCode",{parentName:"p"},"pip install -e .")," in the root directory of the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/carefree0910/carefree-drawboard.git\ncd carefree-drawboard\npip install -e .\n")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Well, in fact the followings are not actually 'prerequisites', but knowing them will help you understand the system better and improve your contribution experience:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/design-philosophy#design-details"},"Design Details")," of the plugins."),(0,a.kt)("li",{parentName:"ol"},"The overall ",(0,a.kt)("a",{parentName:"li",href:"/docs/reference/design-philosophy"},"Design Philosophy"),".")),(0,a.kt)("h2",{id:"python-developers"},(0,a.kt)("inlineCode",{parentName:"h2"},"Python")," Developers"),(0,a.kt)("admonition",{title:"User Guides",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/docs/plugins"},"Overview")," of the plugin system."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"/docs/plugins/IFieldsPlugin"},"IFieldsPlugin"),"."))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 abstracted out a powerful plugin paradigm that allows you to build plugins in a declarative way. So, if you are a ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," developer, the fastest way to contribute is to write specific plugins in a single file ",(0,a.kt)("inlineCode",{parentName:"p"},"app.py")," (e.g., some fancy ",(0,a.kt)("inlineCode",{parentName:"p"},"StableDiffusion")," plugins, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion"},"this"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/caption_and_diffusion"},"this"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_controlnet"},"this")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting"},"this"),")."),(0,a.kt)("p",null,"After you are satisfied with your plugins, (currently) you can publish them by submitting a PR to place your ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdraw/plugins/community")," folder. Notice that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You may need to change the name from ",(0,a.kt)("inlineCode",{parentName:"li"},"app.py")," to another name (your username might be a good choice so others can immediately recognize it's your work!)"),(0,a.kt)("li",{parentName:"ul"},"It's better to import your plugins with ",(0,a.kt)("inlineCode",{parentName:"li"},"from xxx import *")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/plugins/community/__init__.py"),", so others can use it conveniently.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Your plugin names should therefore be unique, otherwise it may suffer from import confliction!"))),(0,a.kt)("li",{parentName:"ul"},"Your submitted ",(0,a.kt)("inlineCode",{parentName:"li"},"Python")," file should ",(0,a.kt)("strong",{parentName:"li"},"NOT")," contain codes other than the plugin definitions. Typically, if you start your project with ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw init"),", you will get these lines at the bottom of ",(0,a.kt)("inlineCode",{parentName:"li"},"app.py"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'register_plugin("blur")(Plugin)\napp = App()\n')),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","Remove them before submitting a PR, otherwise unpredictable errors may occur."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It will be better to have a detailed docstring in your plugins to indicate what models do they use, what do they do, how to use them, why you build them, etc. The more you described them, the better other can understand them and make use of them!")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"In the future, we will implement a built-in marketplace for plugins, so that you can publish / download them easily!")),(0,a.kt)("blockquote",{parentName:"admonition"},(0,a.kt)("p",{parentName:"blockquote"},"And if the marketplace is ready, the ",(0,a.kt)("inlineCode",{parentName:"p"},"community")," folder will be deprecated - but don't worry, we'll publish all existing plugins to the marketplace before it is removed!")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Before the marketplace is ready, another way to share your plugins to others without submitting a PR is to simply share your ",(0,a.kt)("inlineCode",{parentName:"li"},"Python")," file to others, and they can use it by importing & registering the plugins. \ud83d\ude06"))),(0,a.kt)("h2",{id:"react-developers"},(0,a.kt)("inlineCode",{parentName:"h2"},"React")," Developers"),(0,a.kt)("p",null,"If you are familiar with ",(0,a.kt)("inlineCode",{parentName:"p"},"React"),", you can do something more fancy - creating brand new plugins!"),(0,a.kt)("h3",{id:"create-plugins-for-python"},"Create plugins for ",(0,a.kt)("inlineCode",{parentName:"h3"},"Python")),(0,a.kt)("p",null,"Although the ",(0,a.kt)("a",{parentName:"p",href:"/docs/plugins/IFieldsPlugin"},(0,a.kt)("inlineCode",{parentName:"a"},"IFieldsPlugin"))," can handle most of the situations, we may still need to customize some plugins for special needs. Here's a brief introduction on how you can build your own ",(0,a.kt)("inlineCode",{parentName:"p"},"Python")," accessible plugin:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define data interface. It is generally recommended to add it to the end of the ",(0,a.kt)("inlineCode",{parentName:"li"},"// plugin")," section in the ",(0,a.kt)("inlineCode",{parentName:"li"},"src/schema/_python.ts")," file, and the data interface must ",(0,a.kt)("inlineCode",{parentName:"li"},"extends IPythonPlugin"),", and only properties in ",(0,a.kt)("inlineCode",{parentName:"li"},"pluginInfo")," are allowed to be added. Taking ",(0,a.kt)("inlineCode",{parentName:"li"},"IPythonQAPlugin")," in that file as an example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/schema/_python.ts"',title:'"cfdraw/.web/src/schema/_python.ts"'},"export interface IPythonQAPlugin extends IPythonPlugin {\n  pluginInfo: IPythonPluginInfo & {\n    initialText: string;\n  };\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Complete the types in the ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/schema/plugins.ts")," file:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"allPythonPlugins"),", add the name of the new component ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}"),". Generally speaking, the ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}")," should be related to the data interface defined in step ",(0,a.kt)("strong",{parentName:"li"},"1"),", and it is better to have it start with ",(0,a.kt)("inlineCode",{parentName:"li"},"_python.")," (e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"_python.QA"),")."),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"IPluginProps"),", add a key-value pair, where the key is the ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}")," defined above, and the value is the data interface defined in step ",(0,a.kt)("strong",{parentName:"li"},"1"),". Here's an example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/schema/plugins.ts"',title:'"cfdraw/.web/src/schema/plugins.ts"'},'export const allPythonPlugins = [\n  ...,\n  // highlight-next-line\n  "_python.QA",\n] as const;\n\nexport interface IPluginProps {\n  ...;\n  // highlight-next-line\n  "_python.QA": IPythonQAPlugin;\n}\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a new file (",(0,a.kt)("inlineCode",{parentName:"li"},"{file}"),") in ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/plugins/_python")," to write the component. Once done, register it with the ",(0,a.kt)("inlineCode",{parentName:"li"},"factory"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/plugins/_python/{file}"',title:'"cfdraw/.web/src/plugins/_python/{file}"'},'import { observer } from "mobx-react-lite";\n\nconst MyPlugin = (props) => {...}\n\ndrawboardPluginFactory.registerPython({name}, true)(observer(MyPlugin));\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}")," here must match the ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}")," defined in step ",(0,a.kt)("strong",{parentName:"p"},"2"),".")),(0,a.kt)("p",null,"Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," the corresponding component in ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdraw/.web/src/plugins/index.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/plugins/index.tsx"',title:'"cfdraw/.web/src/plugins/index.tsx"'},'export * from "./_python/{file}";\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If not ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),"ed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," logic will not be triggered.")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Provide the Chinese and English names of the plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/lang/plugins.ts"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/lang/plugins.ts"',title:'"cfdraw/.web/src/lang/plugins.ts"'},'import { Dictionary, Lang } from "@carefree0910/core";\n\nimport { allReactPlugins, allPythonPlugins, AllPlugins } from "@/schema/plugins";\n\nconst _pluginsLangRecords: Record<Lang, Record<AllPlugins, string>> = {\n  zh: {\n    ...,\n    // highlight-next-line\n    "_python.QA": "Python \u95ee\u7b54",\n  },\n  en: {\n    ...,\n    // highlight-next-line\n    "_python.QA": "Python Q & A",\n  },\n};\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Feel free to use both Chinese / both English!")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/schema/plugins.py")," and:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add an enumeration item in the ",(0,a.kt)("inlineCode",{parentName:"li"},"PluginType")," at the beginning of the file, the value of the enumeration item should be the same as the ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}")," defined in step ",(0,a.kt)("strong",{parentName:"li"},"2"),"."),(0,a.kt)("li",{parentName:"ul"},"Define an interface that inherits from ",(0,a.kt)("inlineCode",{parentName:"li"},"IPluginInfo")," at the end of the file (better with a short comment) to align with the fields added in step ",(0,a.kt)("strong",{parentName:"li"},"1"),", and add it to ",(0,a.kt)("inlineCode",{parentName:"li"},"__all__"),". Here's an example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/schema/plugins.py"',title:'"cfdraw/schema/plugins.py"'},'class PluginType(str, Enum):\n    ...\n    # highlight-next-line\n    QA = "_python.QA"\n\n\n# highlight-start\nclass IQAPluginInfo(IPluginInfo):\n    initialText: str = Field(\n        ...,\n        description="The initial text to be displayed in the text area",\n    )\n# highlight-end\n\n\n__all__ = [\n    ...,\n    # highlight-next-line\n    "IQAPluginInfo",\n]\n')),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/plugins/bindings.py"),", define a binding that inherits the corresponding base at the end of the file, and add it to ",(0,a.kt)("inlineCode",{parentName:"li"},"__all__"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/plugins/bindings.py"',title:'"cfdraw/plugins/bindings.py"'},'# highlight-start\nclass IQAPlugin(ISocketPlugin):\n    @property\n    def type(self) -> PluginType:\n        return PluginType.QA\n# highlight-end\n\n\n__all__ = [\n    ...,\n    # highlight-next-line\n    "IQAPlugin",\n]\n')),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Now you can use a declarative way to apply the corresponding component to the drawboard \ud83c\udfa8 anywhere you like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from cfdraw import *\n\nclass HelloQAPlugin(ISocketPlugin):\n    @property\n    def type(self) -> PluginType:\n        return PluginType.QA\n\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            w=500,\n            h=200,\n            nodeConstraint=NodeConstraints.NONE,\n            pivot=PivotType.CENTER,\n            pluginInfo=IQAPluginInfo(initialText="Hello, world!"),\n        )\n\n    async def process(self, data: ISocketRequest) -> str:\n        return f"Hello, {data.extraData[\'text\']}!"\n')),(0,a.kt)("h3",{id:"create-plugins-in-react"},"Create plugins in ",(0,a.kt)("inlineCode",{parentName:"h3"},"React")),(0,a.kt)("p",null,"Sometimes we want more control on the drawboard \ud83c\udfa8, and that's where (internal) ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," plugins come to rescue. Here's a brief introduction on how you can build your own ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," plugin:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Define types. In ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/schema/plugins.ts"),":")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"allReactPlugins"),", add the name of the new component ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}"),"."),(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"IPluginProps"),", add the data interface corresponding to the new component. The data interface must ",(0,a.kt)("inlineCode",{parentName:"li"},"extends IPlugin"),", and only fields in ",(0,a.kt)("inlineCode",{parentName:"li"},"pluginInfo")," are allowed to be added.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Generally speaking, internal plugins in ",(0,a.kt)("inlineCode",{parentName:"p"},"React")," do not need additional data interfaces because these plugins usually do one specific thing. Therefore, it may be more reasonable to manage data directly using things like store.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Create a new file (",(0,a.kt)("inlineCode",{parentName:"li"},"{file}"),") in ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/plugins/_react")," to write the component. Once done, register it with the ",(0,a.kt)("inlineCode",{parentName:"li"},"factory"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/plugins/_react/{file}"',title:'"cfdraw/.web/src/plugins/_react/{file}"'},'import { observer } from "mobx-react-lite";\n\nconst MyPlugin = (props) => {...}\n\ndrawboardPluginFactory.registerPython({name}, true)(observer(MyPlugin));\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}")," here must match the ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}")," added in step ",(0,a.kt)("strong",{parentName:"p"},"1"),".")),(0,a.kt)("p",null,"Also, ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," the corresponding component in ",(0,a.kt)("inlineCode",{parentName:"p"},"cfdraw/.web/src/plugins/index.tsx"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'export * from "./_react/{file}";\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If not ",(0,a.kt)("inlineCode",{parentName:"p"},"export"),"ed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"register")," logic will not be triggered.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Provide the Chinese and English names of the plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/lang/plugins.ts"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Feel free to use both Chinese / both English!")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Use a declarative way to create the corresponding plugin in ",(0,a.kt)("inlineCode",{parentName:"li"},"reactPluginSettings")," (locates at ",(0,a.kt)("inlineCode",{parentName:"li"},"cfdraw/.web/src/_settings.ts"),"):")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="cfdraw/.web/src/_settings.ts"',title:'"cfdraw/.web/src/_settings.ts"'},"export const reactPluginSettings: IMakePlugin<ReactPlugins>[] = [\n  ...,\n  // highlight-start\n  {\n    type: $name,\n    props: {...},\n  },\n  // highlight-end\n]\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"p"},"$name")," here must match the ",(0,a.kt)("inlineCode",{parentName:"p"},"{name}")," added in step ",(0,a.kt)("strong",{parentName:"p"},"1"),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Although plugins can be created repeatedly, as mentioned earlier, internal plugins in ",(0,a.kt)("inlineCode",{parentName:"li"},"React")," usually do one specific thing. Therefore, there is generally no need to create them repeatedly."),(0,a.kt)("li",{parentName:"ul"},"However, in some special cases, such as using this drawboard-plugin \ud83c\udfa8 system to build a game, some repetitive logics (such as the NPC logics) can be managed in the corresponding plugins."))),(0,a.kt)("h2",{id:"style-guide"},"Style Guide"),(0,a.kt)("p",null,"If you are still interested: ",(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 adopted ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/psf/black"},(0,a.kt)("inlineCode",{parentName:"a"},"black"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/python/mypy"},(0,a.kt)("inlineCode",{parentName:"a"},"mypy"))," to stylize its codes, so you may need to check the format, coding style and type hint with them before your codes could actually be merged."))}c.isMDXComponent=!0}}]);