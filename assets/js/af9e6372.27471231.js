"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[2987],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||r;return t?i.createElement(c,l(l({ref:n},p),{},{components:t})):i.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={id:"IFieldsPlugin",title:"IFieldsPlugin"},l=void 0,o={unversionedId:"plugins/IFieldsPlugin",id:"plugins/IFieldsPlugin",title:"IFieldsPlugin",description:"* IPluginInfo",source:"@site/docs/plugins/IFieldsPlugin.md",sourceDirName:"plugins",slug:"/plugins/IFieldsPlugin",permalink:"/carefree-drawboard-doc/docs/plugins/IFieldsPlugin",draft:!1,tags:[],version:"current",lastUpdatedAt:1686268845,formattedLastUpdatedAt:"Jun 9, 2023",frontMatter:{id:"IFieldsPlugin",title:"IFieldsPlugin"},sidebar:"docs",previous:{title:"Overview",permalink:"/carefree-drawboard-doc/docs/plugins/"},next:{title:"IChatPlugin",permalink:"/carefree-drawboard-doc/docs/plugins/IChatPlugin"}},s={},d=[{value:"Example",id:"example",level:2},{value:"Standalone Version",id:"standalone-version",level:3},{value:"Engaged Version",id:"engaged-version",level:3},{value:"Advanced Version",id:"advanced-version",level:3},{value:"Summary",id:"summary",level:2}],p={toc:d},u="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"API reference",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/IPluginInfo"},"IPluginInfo"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/IFieldsPluginInfo"},"IFieldsPluginInfo")))))),(0,a.kt)("p",null,"Currently, the most commonly used plugin binding should be the ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin"),". It assumes that:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After users click it, it pops up a panel (or a modal, depends on the ",(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/IPluginSettings#usemodal"},(0,a.kt)("inlineCode",{parentName:"a"},"useModal"))," argument) with several input fields."),(0,a.kt)("li",{parentName:"ul"},"Users only need to fill in the input fields, click the ",(0,a.kt)("inlineCode",{parentName:"li"},"Submit")," button, and wait for the results."),(0,a.kt)("li",{parentName:"ul"},"Each input field should be one of the pre-defined fields, so we can render some nice components for you with just a few setups.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This paradigm is already powerful enough to handle very complicated applications such as our ",(0,a.kt)("a",{parentName:"p",href:"https://drawboard-demo.nolibox.com/"},"Live Demo"),"!")),(0,a.kt)("p",null,"Under these assumptions, there are only three specific properties for ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin"),", and only one of them (",(0,a.kt)("inlineCode",{parentName:"p"},"definitions"),") is required:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'@property\ndef settings(self) -> IPluginSettings:\n    return IPluginSettings(\n        pluginInfo=IFieldsPluginInfo(\n            # highlight-start\n            header="My Fancy Header",\n            definitions=dict(...),\n            numColumns=2,\n            # highlight-end\n        ),\n    )\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"A typical workflow of building an ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin")," is:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Gather all the required parameters of your API, pick the ones that you want to expose to the users."),(0,a.kt)("li",{parentName:"ol"},"Define the ",(0,a.kt)("inlineCode",{parentName:"li"},"definitions")," based on these parameters' names and types."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("inlineCode",{parentName:"li"},"process")," method, use ",(0,a.kt)("inlineCode",{parentName:"li"},"data.extraData")," to get the user inputs, and call your API with them."))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"We've provided a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/blob/dev/tests/test_fields.py"},"test_fields.py")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"tests")," folder, which can well demonstrate the potentials of ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In this section, we will introduce a pseudo example to demonstrate how to build an ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin"),"."),(0,a.kt)("p",null,"Let's suppose we have an API, ",(0,a.kt)("inlineCode",{parentName:"p"},"FancyMultimodalFn"),", which receives the following parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"text")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"str")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"image")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," (url of the image)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mask")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"str")," (url of the image)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"strength")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"float"),", and should be within ",(0,a.kt)("inlineCode",{parentName:"li"},"[0.0, 1.0]"))),(0,a.kt)("p",null,"Then we will have two choices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make the plugin more 'standalone'."),(0,a.kt)("li",{parentName:"ul"},"Make the plugin more 'engaged'.")),(0,a.kt)("p",null,"We'll show you how to build both of them."),(0,a.kt)("h3",{id:"standalone-version"},"Standalone Version"),(0,a.kt)("p",null,"A 'standalone' plugin means that it doesn't need to interact with the drawboard \ud83c\udfa8, and every parameters should be filled by the user. In this case, we should define the ",(0,a.kt)("inlineCode",{parentName:"p"},"definitions")," to cover all the parameters:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'showLineNumbers title="app.py"',showLineNumbers:!0,title:'"app.py"'},"from cfdraw import *\n\ndefinitions = dict(\n    # highlight-start\n    text=ITextField(),\n    image=IImageField(),\n    mask=IImageField(),\n    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),\n    # highlight-end\n)\n\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            # highlight-next-line\n            pluginInfo=IFieldsPluginInfo(definitions=definitions),\n        )\n\n    async def process(self, data: ISocketRequest):\n        # highlight-next-line\n        return FancyMultimodalFn(**data.extraData)\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Notice that at L19, we directly call our API (",(0,a.kt)("inlineCode",{parentName:"p"},"FancyMultimodalFn"),") with ",(0,a.kt)("inlineCode",{parentName:"p"},"**data.extraData"),". This is typical for 'standalone' ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin"),"s, since the ",(0,a.kt)("inlineCode",{parentName:"p"},"definitions")," is self-contained.")),(0,a.kt)("h3",{id:"engaged-version"},"Engaged Version"),(0,a.kt)("p",null,"But what if we want to make the plugin more 'engaged'? For example, we may want to use the current selecting image in the drawboard \ud83c\udfa8 as the ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," parameter. In this case, we need to do two things."),(0,a.kt)("p",null,"First, ensure that this plugin only appears when the user has selected an image. We can do this by setting the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/IPluginSettings#nodeconstraint"},(0,a.kt)("inlineCode",{parentName:"a"},"nodeConstraint"))," to ",(0,a.kt)("inlineCode",{parentName:"p"},"NodeConstraints.IMAGE"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from cfdraw import *\n\ndefinitions = dict(\n    text=ITextField(),\n    image=IImageField(),\n    mask=IImageField(),\n    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),\n)\n\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            # highlight-next-line\n            nodeConstraint=NodeConstraints.IMAGE,\n            pluginInfo=IFieldsPluginInfo(definitions=definitions),\n        )\n\n    async def process(self, data: ISocketRequest):\n        return FancyMultimodalFn(**data.extraData)\n")),(0,a.kt)("p",null,"Second, remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," definition from the ",(0,a.kt)("inlineCode",{parentName:"p"},"definitions"),", and dynamically set ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," to the url of the current selecting image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from cfdraw import *\n\ndefinitions = dict(\n    text=ITextField(),\n    # highlight-next-line\n    # this line is removed!\n    mask=IImageField(),\n    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),\n)\n\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            nodeConstraint=NodeConstraints.IMAGE,\n            pluginInfo=IFieldsPluginInfo(definitions=definitions),\n        )\n\n    async def process(self, data: ISocketRequest):\n        # highlight-start\n        kw = data.extraData\n        kw["image"] = data.nodeData.src\n        return FancyMultimodalFn(**kw)\n        # highlight-end\n')),(0,a.kt)("h3",{id:"advanced-version"},"Advanced Version"),(0,a.kt)("p",null,"Now comes the hard part: what if we want to use something on the drawboard \ud83c\udfa8 as the ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," parameter too? This is complex because now we need to fetch two stuffs (",(0,a.kt)("inlineCode",{parentName:"p"},"image")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"mask"),") from the drawboard \ud83c\udfa8."),(0,a.kt)("p",null,"Similarly, we need to do two things. First, we need to ensure that this plugin only appears when the user has selected an image and a mask simultaneously. We can do this by setting the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/IPluginSettings#nodeconstraintrules"},(0,a.kt)("inlineCode",{parentName:"a"},"nodeConstraintRules")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'showLineNumbers title="app.py"',showLineNumbers:!0,title:'"app.py"'},"from cfdraw import *\n\ndefinitions = dict(\n    text=ITextField(),\n    image=IImageField(),\n    mask=IImageField(),\n    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),\n)\n\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            # highlight-start\n            nodeConstraintRules=NodeConstraintRules(\n                exactly=[NodeConstraints.IMAGE, NodeConstraints.PATH]\n            ),\n            # highlight-end\n            pluginInfo=IFieldsPluginInfo(definitions=definitions),\n        )\n\n    async def process(self, data: ISocketRequest):\n        return FancyMultimodalFn(**data.extraData)\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8, we often use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-guides/features#sketch"},"Brush")," plugin - which produces ",(0,a.kt)("inlineCode",{parentName:"p"},"PathNode")," - to draw masks. That's why we want 'exactly' one ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageNode")," and one ",(0,a.kt)("inlineCode",{parentName:"p"},"PathNode"),", as defined at L16.")),(0,a.kt)("p",null,"Second, remove ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," from the ",(0,a.kt)("inlineCode",{parentName:"p"},"definitions"),", and dynamically set ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," to the urls of the current selecting image and mask:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'showLineNumbers title="app.py"',showLineNumbers:!0,title:'"app.py"'},'from cfdraw import *\n\ndefinitions = dict(\n    text=ITextField(),\n    # highlight-start\n    # this line is removed!\n    # this line is removed!\n    # highlight-end\n    strength=INumberField(default=0.0, min=0.0, max=1.0, step=0.01),\n)\n\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            nodeConstraintRules=NodeConstraintRules(\n                exactly=[NodeConstraints.IMAGE, NodeConstraints.PATH]\n            ),\n            pluginInfo=IFieldsPluginInfo(definitions=definitions),\n        )\n\n    async def process(self, data: ISocketRequest):\n        # highlight-start\n        kw = data.extraData\n        kw["image"] = self.filter(data.nodeDataList, SingleNodeType.IMAGE)[0].src\n        kw["mask"] = self.filter(data.nodeDataList, SingleNodeType.PATH)[0].src\n        return FancyMultimodalFn(**kw)\n        # highlight-end\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Check ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/Built-in-Methods#filter"},"here")," for the API reference of the built-in method ",(0,a.kt)("inlineCode",{parentName:"p"},"filter")," used at L23 & L24.")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"Maybe you have already figured out - this pseudo example is actually a starter for the inpainting algorithms! In fact, many of the codes shown above can be found at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/carefree0910/carefree-drawboard/tree/dev/examples/stable_diffusion_inpainting"},"Stable Diffusion Inpainting")," example."),(0,a.kt)("p",null,"To our own experience, ",(0,a.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin")," is powerful & convenient enough for building complex, business ready web apps (e.g., the ",(0,a.kt)("a",{parentName:"p",href:"https://drawboard-demo.nolibox.com/"},"Live Demo"),") fast & easy. We hope you can enjoy it too!"))}m.isMDXComponent=!0}}]);