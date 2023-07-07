"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[6329],{7375:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),i=n(2004);function l(e){let{url:t}=e;return a.createElement(a.Fragment,null,a.createElement("div",{align:"center"},a.createElement(i.Z,{playing:!0,controls:!0,url:t})),a.createElement("br",null))}},5262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),l=n(7375);const r={id:"index",title:"Introduction"},o=void 0,p={unversionedId:"getting-started/index",id:"getting-started/index",title:"Introduction",description:"carefree-drawboard \ud83c\udfa8 is a full-stack Python framework for building Infinite Drawboard based web apps.",source:"@site/docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/carefree-drawboard-doc/docs/getting-started/",draft:!1,tags:[],version:"current",lastUpdatedAt:1688699959,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"index",title:"Introduction"},sidebar:"docs",next:{title:"Installation",permalink:"/carefree-drawboard-doc/docs/getting-started/installation"}},s={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Your first \ud83c\udfa8 App",id:"your-first--app",level:2},{value:"Import",id:"import",level:2},{value:"Inheritance",id:"inheritance",level:2},{value:"Styles",id:"styles",level:2},{value:"Plugin Positioning",id:"plugin-positioning",level:3},{value:"Plugin Behaviours",id:"plugin-behaviours",level:3},{value:"Reference",id:"reference",level:3},{value:"Logics",id:"logics",level:2},{value:"<code>nodeData</code>",id:"nodedata",level:3},{value:"<code>loadImage</code>",id:"loadimage",level:3},{value:"<code>extraData</code>",id:"extradata",level:3},{value:"Return",id:"return",level:3},{value:"Register",id:"register",level:2},{value:"Build",id:"build",level:2},{value:"Run",id:"run",level:2},{value:"Next Steps",id:"next-steps",level:2}],u={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 is a ",(0,i.kt)("strong",{parentName:"p"},"full-stack")," Python framework for building ",(0,i.kt)("strong",{parentName:"p"},"Infinite Drawboard")," based web apps."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 was created with the following goals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Pure Python")),(0,i.kt)("p",{parentName:"li"},"Python is all you need.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Easy to Learn")),(0,i.kt)("p",{parentName:"li"},"Everything are plugins, everything is declarative. Fully decoupled, fully extensible.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Business Ready")),(0,i.kt)("p",{parentName:"li"},"\ud83c\udfa8 is designed to be used in real world projects. ",(0,i.kt)("strong",{parentName:"p"},"Infinite Drawboard")," is capable of handling (almost) every complex scenario.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Modern AI Oriented")),(0,i.kt)("p",{parentName:"li"},"\ud83c\udfa8 is designed to work with modern AI technologies, such as Stable Diffusion, GPTs, and so on."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"That's why we also treat ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 as an 'AI operation system'. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/brainstorm#the-ai-operation-system"},"Brainstorm")," for more details.")),(0,i.kt)("h2",{id:"your-first--app"},"Your first \ud83c\udfa8 App"),(0,i.kt)("p",null,"Here's a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"GaussianBlur")," plugin that covers the basics of ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8:"),(0,i.kt)(l.Z,{url:"https://user-images.githubusercontent.com/15677328/234529497-8d7f5b61-9154-4211-8d99-ec09fca0dc2d.mp4",mdxType:"Video"}),(0,i.kt)("p",null,"Here's what this plugin does:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The plugin appears at the ",(0,i.kt)("inlineCode",{parentName:"li"},"rt")," (",(0,i.kt)("strong",{parentName:"li"},"r"),"ight ",(0,i.kt)("strong",{parentName:"li"},"t"),"op) corner of the selected image, and will 'follow' it if you drag it around."),(0,i.kt)("li",{parentName:"ul"},"When you hover over the plugin, it will show a tooltip saying 'Apply Gaussian Blur to the image'."),(0,i.kt)("li",{parentName:"ul"},"When you click the plugin, it will pop up a panel asking you to specify the size of the Gaussian kernel."),(0,i.kt)("li",{parentName:"ul"},"When you click the 'Submit' button in the panel, it will apply the Gaussian blur to the image, and place the blurred image at the center of the drawboard \ud83c\udfa8.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You will need to upload an image to see this plugin. You can do this either by dragging it directly to the drawboard \ud83c\udfa8, or by clicking the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plus")," button at the ",(0,i.kt)("inlineCode",{parentName:"p"},"rt")," (",(0,i.kt)("strong",{parentName:"p"},"r"),"ight ",(0,i.kt)("strong",{parentName:"p"},"t"),"op) corner and click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Upload Image")," icon.")),(0,i.kt)("p",null,"And this is the complete code to build the plugin, you may create a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"app.py")," and paste the codes into it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'showLineNumbers title="app.py"',showLineNumbers:!0,title:'"app.py"'},'from PIL import Image\nfrom PIL import ImageFilter\nfrom cfdraw import *\n\n# This will apply Gaussian Blur to the image\nclass Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            w=300,\n            h=180,\n            tooltip="Apply Gaussian Blur to the image",\n            nodeConstraint=NodeConstraints.IMAGE,\n            pivot=PivotType.RT,\n            follow=True,\n            pluginInfo=IFieldsPluginInfo(\n                definitions=dict(\n                    size=INumberField(\n                        default=3,\n                        min=1,\n                        max=10,\n                        step=1,\n                        isInt=True,\n                        label="Size",\n                    )\n                ),\n            ),\n        )\n\n    async def process(self, data: ISocketRequest) -> Image.Image:\n        from PIL import Image\n        from PIL import ImageFilter\n\n        image = await self.load_image(data.nodeData.src)\n        return image.filter(ImageFilter.GaussianBlur(data.extraData["size"]))\n\n\nregister_plugin("blur")(Plugin)\napp = App()\n')),(0,i.kt)("details",null,(0,i.kt)("summary",null,"You can also use our scaffold CLI to build it:"),(0,i.kt)("p",null,"Create a folder wherever you like, get into it, and run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cfdraw init\n")),(0,i.kt)("p",null,"This command will write two files to your folder - ",(0,i.kt)("inlineCode",{parentName:"p"},"app.py")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"cfconfig.py"),", and the ",(0,i.kt)("inlineCode",{parentName:"p"},"app.py")," will contain exactly the same codes as above.")),(0,i.kt)("p",null,"Let's break this down to see what's going on under the hood."),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"from PIL import Image\nfrom PIL import ImageFilter\n# highlight-next-line\nfrom cfdraw import *\n")),(0,i.kt)("p",null,"The highlighted line is a typical import line for every ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 app. It will import all the necessary stuffs for you to build your plugins."),(0,i.kt)("h2",{id:"inheritance"},"Inheritance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"# highlight-next-line\nclass Plugin(IFieldsPlugin):\n    ...\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin")," is the most commonly used base class for building plugins. In most cases, you can just inherit from it and go on."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugins"},"Plugins")," for an overview of the plugin system."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/IFieldsPlugin"},"IFieldsPlugin")," for more details about ",(0,i.kt)("inlineCode",{parentName:"li"},"IFieldsPlugin"),"."))),(0,i.kt)("h2",{id:"styles"},"Styles"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8, we specify styles in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," property."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Comments with ",(0,i.kt)("inlineCode",{parentName:"p"},"*")," at the beginning means they will be explained later.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'@property\n# highlight-next-line\ndef settings(self) -> IPluginSettings:\n    # highlight-next-line\n    return IPluginSettings(\n        # width of the expanded panel\n        w=300,\n        # height of the expanded panel\n        h=180,\n        # tooltip of the plugin\n        tooltip="Apply Gaussian Blur to the image",\n        # * controls when this plugin should be displayed\n        nodeConstraint=NodeConstraints.IMAGE,\n        # * controls whether the plugin should \'follow\' the selecting node\n        follow=True,\n        # * controls where this plugin should be displayed\n        pivot=PivotType.RT,\n        # * this is where you specify the behaviours of the expanded panel\n        pluginInfo=IFieldsPluginInfo(\n            # * this is a `dict` that defines the input fields\n            definitions=dict(\n                size=INumberField(\n                    default=3,\n                    min=1,\n                    max=10,\n                    step=1,\n                    isInt=True,\n                    label="Size",\n                )\n            ),\n        ),\n    )\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"As the highlighted lines show, we should return an instance of ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugins#ipluginsettings"},"IPluginSettings")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," property. We return a class instance instead of a ",(0,i.kt)("inlineCode",{parentName:"p"},"dict")," here because we want to utilize the auto-completion feature of IDEs.")),(0,i.kt)("h3",{id:"plugin-positioning"},"Plugin Positioning"),(0,i.kt)("p",null,"Since everything in ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 is a plugin, we need a way to control when / where they should be displayed. In this example, we specified:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeConstraint=NodeConstraints.IMAGE"),": this plugin will only occur when an ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageNode")," is selected."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"follow=True"),": this plugin will 'follow' the selecting node when you drag the selecting node around."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pivot=PivotType.RT"),": this plugin will be displayed at the ",(0,i.kt)("inlineCode",{parentName:"li"},"rt")," (",(0,i.kt)("strong",{parentName:"li"},"r"),"ight ",(0,i.kt)("strong",{parentName:"li"},"t"),"op) corner of the selecting node.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugins#plugin-positioning"},"Plugin Positioning")," for more details.")),(0,i.kt)("h3",{id:"plugin-behaviours"},"Plugin Behaviours"),(0,i.kt)("p",null,"Apart from styles, we can also specify some behaviours of the plugin with the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginInfo")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"settings"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Although we can also treat 'behaviours' as 'styles', we separate them for better understanding.")),(0,i.kt)("p",null,"Each plugin has some ",(0,i.kt)("strong",{parentName:"p"},"common")," properties & ",(0,i.kt)("strong",{parentName:"p"},"specific")," properties to be set. In this example, we specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"definitions=dict(...)\n")),(0,i.kt)("p",null,"This is the ",(0,i.kt)("strong",{parentName:"p"},"specific")," property that ",(0,i.kt)("inlineCode",{parentName:"p"},"IFieldsPlugin")," requires, it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"dict")," that defines the input fields."),(0,i.kt)("p",null,"And, by specifying:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"size=INumberField(...)\n")),(0,i.kt)("p",null,"in the ",(0,i.kt)("inlineCode",{parentName:"p"},"dict"),", it means that we want to have an input field named ",(0,i.kt)("inlineCode",{parentName:"p"},"size"),", and it is an ",(0,i.kt)("inlineCode",{parentName:"p"},"INumberField")," instance (which means the field should accept a number as its value)."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugins#iplugininfo"},"IPluginInfo")," for more details on the common properties."),(0,i.kt)("li",{parentName:"ul"},"See ",(0,i.kt)("a",{parentName:"li",href:"/docs/plugins/IFieldsPlugin"},"here")," for more details on ",(0,i.kt)("inlineCode",{parentName:"li"},"IFieldsPlugin"),"."))),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Apart from these, you may want to assign a nice looking icon to your plugin."),(0,i.kt)("p",null,"We can achieve this by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," property of the ",(0,i.kt)("inlineCode",{parentName:"p"},"IPluginSettings"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'@property\ndef settings(self) -> IPluginSettings:\n    return IPluginSettings(\n        src="...",\n        ...\n')),(0,i.kt)("p",null,"And the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," should be the url of the desired image/svg."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you don't have one in hand, you may try using ",(0,i.kt)("a",{parentName:"p",href:"https://ailab-huawei-cdn.nolibox.com/upload/images/c60613dcaf514975a211a75535a5b81b.png"},"this one"),".")),(0,i.kt)("p",null,"After saving the modification, you should be able to see the icon of your plugin changes, cool!")),(0,i.kt)("h2",{id:"logics"},"Logics"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8, we specify logics in the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'async def process(self, data: ISocketRequest) -> Image.Image:\n    url = data.nodeData.src\n    image = await self.load_image(url)\n    kernel_size = data.extraData["size"]\n    return image.filter(ImageFilter.GaussianBlur(kernel_size))\n')),(0,i.kt)("p",null,"It is simple - only four lines of codes, but they contain pretty much information. Let's break it down."),(0,i.kt)("h3",{id:"nodedata"},(0,i.kt)("inlineCode",{parentName:"h3"},"nodeData")),(0,i.kt)("p",null,"Let's look at ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeData")," first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'async def process(self, data: ISocketRequest) -> Image.Image:\n    # highlight-next-line\n    url = data.nodeData.src\n    image = await self.load_image(url)\n    kernel_size = data.extraData["size"]\n    return image.filter(ImageFilter.GaussianBlur(kernel_size))\n')),(0,i.kt)("p",null,"By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeData.src")," property of ",(0,i.kt)("inlineCode",{parentName:"p"},"ISocketRequest"),", we implicitly assume that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There's only one selecting node."),(0,i.kt)("li",{parentName:"ul"},"The selecting node is an ",(0,i.kt)("inlineCode",{parentName:"li"},"ImageNode"),".")),(0,i.kt)("p",null,"If these assumptions are met, the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeData.src")," will be the url of the selecting image."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are ",(0,i.kt)("strong",{parentName:"p"},"MANY")," handy properties in ",(0,i.kt)("inlineCode",{parentName:"p"},"nodeData"),", check ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/ISocketRequest#inodedata"},"INodeData")," for the API reference.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Along with ",(0,i.kt)("code",null,"nodeData"),", there are three common properties in ",(0,i.kt)("code",null,"ISocketRequest")," that you may need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeData"),", it is an ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketRequest#inodedata"},"INodeData")," instance.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If no nodes are selected, this property will be empty."),(0,i.kt)("li",{parentName:"ul"},"If multiple nodes are selected, this property will be empty and please use ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeDataList")," instead."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeDataList"),", it is a list of ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketRequest#inodedata"},"INodeData")," instance.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If no nodes are selected, this property will be empty."),(0,i.kt)("li",{parentName:"ul"},"If only one node is selected, this property will be empty and please use ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeData")," instead."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extraData"),", it is a ",(0,i.kt)("inlineCode",{parentName:"li"},"dict")," that aligns to the ",(0,i.kt)("inlineCode",{parentName:"li"},"definitions")," property defined above."))),(0,i.kt)("h3",{id:"loadimage"},(0,i.kt)("inlineCode",{parentName:"h3"},"loadImage")),(0,i.kt)("p",null,"Then, let's look at the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"load_image")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'async def process(self, data: ISocketRequest) -> Image.Image:\n    url = data.nodeData.src\n    # highlight-next-line\n    image = await self.load_image(url)\n    kernel_size = data.extraData["size"]\n    return image.filter(ImageFilter.GaussianBlur(kernel_size))\n')),(0,i.kt)("p",null,"It is pretty straightforward - downloads the image from the given url and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"PIL.Image")," instance."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Notice that this method is ",(0,i.kt)("inlineCode",{parentName:"p"},"async"),", which makes the whole system more responsive (i.e., other requests can still be processed while downloading the image).")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There are various built-in methods for different purposes, check ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/Built-in-Methods"},"Built-in Methods")," for the API reference.")),(0,i.kt)("h3",{id:"extradata"},(0,i.kt)("inlineCode",{parentName:"h3"},"extraData")),(0,i.kt)("p",null,"Since we defined"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"definitions=dict(\n    size=INumberField(...)\n)\n")),(0,i.kt)("p",null,"the ",(0,i.kt)("inlineCode",{parentName:"p"},"extraData")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},'{"size": ...}'),". Therefore, this line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'async def process(self, data: ISocketRequest) -> Image.Image:\n    url = data.nodeData.src\n    image = await self.load_image(url)\n    # highlight-next-line\n    kernel_size = data.extraData["size"]\n    return image.filter(ImageFilter.GaussianBlur(kernel_size))\n')),(0,i.kt)("p",null,"can extract the user-given ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," value from ",(0,i.kt)("inlineCode",{parentName:"p"},"extraData"),", and treat it as the ",(0,i.kt)("inlineCode",{parentName:"p"},"kernel_size")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"ImageFilter.GaussianBlur"),"."),(0,i.kt)("h3",{id:"return"},"Return"),(0,i.kt)("p",null,"As these two lines indicate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'# highlight-next-line\nasync def process(self, data: ISocketRequest) -> Image.Image:\n    url = data.nodeData.src\n    image = await self.load_image(url)\n    kernel_size = data.extraData["size"]\n    # highlight-next-line\n    return image.filter(ImageFilter.GaussianBlur(kernel_size))\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method can directly return a ",(0,i.kt)("inlineCode",{parentName:"p"},"PIL.Image")," instance. This is because some ",(0,i.kt)("inlineCode",{parentName:"p"},"Middleware")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 will convert it to the data structure we actually need."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In fact, the ",(0,i.kt)("inlineCode",{parentName:"p"},"process")," method can directly return an ",(0,i.kt)("inlineCode",{parentName:"p"},"str"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"PIL.Image"),", or even a ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," of them.")),(0,i.kt)("h2",{id:"register"},"Register"),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8, plugins need to be registered to take effect. We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"register_plugin")," to register a plugin easily:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'register_plugin("blur")(Plugin)\n')),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The register mechanism is important to make the whole system:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("strong",{parentName:"li"},"decoupled"),". You can now build plugins freely without worrying about any side effects."),(0,i.kt)("li",{parentName:"ul"},"More ",(0,i.kt)("strong",{parentName:"li"},"extensible"),". If you want to use plugins implemented by others, you can simply import & register them.")),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/plugins#register-mechanism"},"Register Mechanism")," for more details.")),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"After defining & registering the plugin, building the app is easy:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"app = App()\n")),(0,i.kt)("p",null,"Now we are ready to run the app."),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cfdraw run\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When you run this command for the first time and have not called ",(0,i.kt)("inlineCode",{parentName:"p"},"cfdraw install")," before, we will use ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn")," to install the JavaScript dependencies for you, which may take a while!")),(0,i.kt)("p",null,"This command will run the app in development mode, after which you should see your app running at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:5123"),", with the ",(0,i.kt)("inlineCode",{parentName:"p"},"GaussianBlur")," plugin integrated. Now you can: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Upload an image and play with the plugin."),(0,i.kt)("li",{parentName:"ol"},"Modify the generated ",(0,i.kt)("inlineCode",{parentName:"li"},"app.py")," file and see warm reload (yeah, not hot enough because we rely on the ",(0,i.kt)("inlineCode",{parentName:"li"},"reload")," provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"uvicorn")," \ud83e\udd23).")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"And that's it! We've created a fully functional plugin with less than 40 lines of code, and this plugin is ready to be reused, extended, and shared."),(0,i.kt)("p",null,"Keep reading the docs to learn how to try ",(0,i.kt)("inlineCode",{parentName:"p"},"carefree-drawboard")," \ud83c\udfa8 yourself!"))}g.isMDXComponent=!0}}]);