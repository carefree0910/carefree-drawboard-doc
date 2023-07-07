"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[8565],{7375:(t,e,n)=>{n.d(e,{Z:()=>s});var a=n(7294),i=n(2004);function s(t){let{url:e}=t;return a.createElement(a.Fragment,null,a.createElement("div",{align:"center"},a.createElement(i.Z,{playing:!0,controls:!0,url:e})),a.createElement("br",null))}},9473:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905)),s=n(7375);const l={id:"IChatPlugin",title:"IChatPlugin"},r=void 0,o={unversionedId:"plugins/IChatPlugin",id:"plugins/IChatPlugin",title:"IChatPlugin",description:"* IPluginInfo",source:"@site/docs/plugins/IChatPlugin.md",sourceDirName:"plugins",slug:"/plugins/IChatPlugin",permalink:"/carefree-drawboard-doc/docs/plugins/IChatPlugin",draft:!1,tags:[],version:"current",lastUpdatedAt:1688699959,formattedLastUpdatedAt:"Jul 7, 2023",frontMatter:{id:"IChatPlugin",title:"IChatPlugin"},sidebar:"docs",previous:{title:"IFieldsPlugin",permalink:"/carefree-drawboard-doc/docs/plugins/IFieldsPlugin"},next:{title:"IPluginGroup",permalink:"/carefree-drawboard-doc/docs/plugins/IPluginGroup"}},p={},u=[{value:"Imports",id:"imports",level:2},{value:"Notification",id:"notification",level:2},{value:"Styles",id:"styles",level:2},{value:"Logics",id:"logics",level:2},{value:"Run",id:"run",level:2}],c={toc:u},h="wrapper";function d(t){let{components:e,...l}=t;return(0,i.kt)(h,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"API reference",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/IPluginInfo"},"IPluginInfo"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/IChatPluginInfo"},"IChatPluginInfo")))))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IChatPlugin")," is a (very) simple plugin binding for you to interact with a chat API (e.g., ChatGPT API), but it is pretty out of the box to use."),(0,i.kt)("p",null,"We've provided a ",(0,i.kt)("inlineCode",{parentName:"p"},"test_chat.py")," file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tests")," folder, and here we will break it down for you to understand how ",(0,i.kt)("inlineCode",{parentName:"p"},"IChatPlugin")," works."),(0,i.kt)("p",null,"Here's the complete code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'showLineNumbers title="tests/test_chat.py"',showLineNumbers:!0,title:'"tests/test_chat.py"'},'import time\n\nfrom cfdraw import *\nfrom lorem_text import lorem\n\n\nclass ChatPlugin(IChatPlugin):\n    notification = "A plugin that generates lorem ipsum chat."\n\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            w=600,\n            h=400,\n            useModal=True,\n            tooltip="Pseudo Chat",\n            pivot=PivotType.RIGHT,\n            pluginInfo=IChatPluginInfo(\n                closeOnSubmit=False,\n                toastOnSubmit=False,\n            ),\n        )\n\n    async def process(self, data: ISocketRequest) -> str:\n        request = data.extraData\n        context = request["context"]\n        userInput = request["userInput"]\n        if context:\n            context += "\\n"\n        new_context = f"{context}\\nYou: {userInput}\\n\\nBot: "\n        text = lorem.words(20)\n        for char in text:\n            new_context += char\n            self.send_progress(textList=[new_context])\n            time.sleep(0.025)\n        return new_context\n\n\nregister_plugin("chat")(ChatPlugin)\napp = App()\n')),(0,i.kt)("h2",{id:"imports"},"Imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},"import time\n\nfrom cfdraw import *\nfrom lorem_text import lorem\n")),(0,i.kt)("p",null,"Nothing special, but notice that we import ",(0,i.kt)("inlineCode",{parentName:"p"},"lorem_text")," so we can generate some random text later."),(0,i.kt)("h2",{id:"notification"},"Notification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    # highlight-next-line\n    notification = "A plugin that generates lorem ipsum chat."\n')),(0,i.kt)("p",null,"By specifying the ",(0,i.kt)("inlineCode",{parentName:"p"},"notification")," property, a notification will be logged to the console when the plugin is loaded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Notification",src:n(94).Z,width:"1780",height:"446"})),(0,i.kt)("h2",{id:"styles"},"Styles"),(0,i.kt)("admonition",{title:"API reference",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/IPluginSettings"},"IPluginSettings")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            # highlight-start\n            w=600,\n            h=400,\n            useModal=True,\n            tooltip="Pseudo Chat",\n            pivot=PivotType.RIGHT,\n            # highlight-end\n            pluginInfo=IChatPluginInfo(\n                initialText="Bot: Hello, can I help you?",\n                closeOnSubmit=False,\n                toastOnSubmit=False,\n            ),\n        )\n')),(0,i.kt)("p",null,"These are common styles settings, and this line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            pluginInfo=IChatPluginInfo(\n                # highlight-next-line\n                initialText="Bot: Hello, can I help you?",\n                closeOnSubmit=False,\n                toastOnSubmit=False,\n            ),\n        )\n')),(0,i.kt)("p",null,"Specifies the initial text of the chat."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"We specified:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        return IPluginSettings(\n            ...,\n            pluginInfo=IChatPluginInfo(\n                initialText="Bot: Hello, can I help you?",\n                # highlight-start\n                closeOnSubmit=False,\n                toastOnSubmit=False,\n                # highlight-end\n            ),\n        )\n')),(0,i.kt)("p",{parentName:"admonition"},"Because we want users to be more engaged with the plugin, and don't want the plugin to be closed or toasted after the users submit their chats.")),(0,i.kt)("h2",{id:"logics"},"Logics"),(0,i.kt)("admonition",{title:"API reference",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/ISocketRequest"},"ISocketRequest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/built-in-methods"},"Built-in Methods"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/built-in-methods#send_progress"},"send_progress")))))),(0,i.kt)("p",null,"In order to interact with the chat API, we (at least) need to get two things:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"context"),": The previous context of the chat."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userInput"),": The latest user input.")),(0,i.kt)("p",null,"Therefore, ",(0,i.kt)("inlineCode",{parentName:"p"},"IChatPlugin")," injected them into the ",(0,i.kt)("inlineCode",{parentName:"p"},"extraData")," property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    ...\n\n    async def process(self, data: ISocketRequest) -> str:\n        # highlight-start\n        request = data.extraData\n        context = request["context"]\n        userInput = request["userInput"]\n        # highlight-end\n        if context:\n            context += "\\n"\n        new_context = f"{context}\\nYou: {userInput}\\n\\nBot: "\n        text = lorem.words(20)\n        for char in text:\n            new_context += char\n            self.send_progress(textList=[new_context])\n            time.sleep(0.025)\n        return new_context\n')),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"userInput"),", we should be able to send the corresponding data to the chat API and receive new responses. In this example, we simply generate some random text to mimic a chat API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    ...\n\n    async def process(self, data: ISocketRequest) -> str:\n        request = data.extraData\n        context = request["context"]\n        userInput = request["userInput"]\n        if context:\n            context += "\\n"\n        new_context = f"{context}\\nYou: {userInput}\\n\\nBot: "\n        # highlight-next-line\n        text = lorem.words(20)\n        for char in text:\n            new_context += char\n            self.send_progress(textList=[new_context])\n            time.sleep(0.025)\n        return new_context\n')),(0,i.kt)("p",null,"What's more, we even use ",(0,i.kt)("inlineCode",{parentName:"p"},"time.sleep")," to mimic the streaming process of the chat API. Also, we utilized the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"send_progress")," method to make sure that as long as the (pseudo) streaming chat API responses a char / word, we can send it immediately to the drawboard \ud83c\udfa8 and ask it to refresh the chat:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="tests/test_chat.py"',title:'"tests/test_chat.py"'},'class ChatPlugin(IChatPlugin):\n    ...\n\n    async def process(self, data: ISocketRequest) -> str:\n        request = data.extraData\n        context = request["context"]\n        userInput = request["userInput"]\n        if context:\n            context += "\\n"\n        new_context = f"{context}\\nYou: {userInput}\\n\\nBot: "\n        text = lorem.words(20)\n        # highlight-start\n        for char in text:\n            new_context += char\n            self.send_progress(textList=[new_context])\n            time.sleep(0.025)\n        # highlight-end\n        return new_context\n')),(0,i.kt)("h2",{id:"run"},"Run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="tests"',title:'"tests"'},"cfdraw run --module test_chat.py\n")),(0,i.kt)("p",null,"And here's a demo video of how this plugin works:"),(0,i.kt)(s.Z,{url:"https://github.com/carefree0910/carefree-drawboard/assets/15677328/4fb7f3e0-617c-4c5b-9a06-1c062b425e38",mdxType:"Video"}))}d.isMDXComponent=!0},94:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/screenshot_0-fc57e5428974e3b8d8ea15ece63e06d9.png"}}]);