"use strict";(self.webpackChunkcarefree_drawboard_doc=self.webpackChunkcarefree_drawboard_doc||[]).push([[2376],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6873:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function a(e){let{type:t,defaultValue:n,required:a,appendix:l}=e;const i=r.createElement(r.Fragment,null,l&&r.createElement(r.Fragment,null," ","- ",r.createElement("code",null,l)));return r.createElement("p",null,"[ ",r.createElement("strong",null,t),a?r.createElement(r.Fragment,null,r.createElement("em",null,", required"),i):n?r.createElement(r.Fragment,null,r.createElement("em",null,", default"),": ",r.createElement("code",null,n),i):""," ","]")}},1007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),l=n(6873);const i={id:"Global-Functions",title:"Global Functions"},o=void 0,c={unversionedId:"api-reference/Global-Functions",id:"api-reference/Global-Functions",title:"Global Functions",description:"Functions in this page can be directly used in your code after",source:"@site/docs/api-reference/Global-Functions.md",sourceDirName:"api-reference",slug:"/api-reference/Global-Functions",permalink:"/carefree-drawboard-doc/docs/api-reference/Global-Functions",draft:!1,tags:[],version:"current",lastUpdatedAt:1686045254,formattedLastUpdatedAt:"Jun 6, 2023",frontMatter:{id:"Global-Functions",title:"Global Functions"},sidebar:"docs",previous:{title:"Config",permalink:"/carefree-drawboard-doc/docs/api-reference/Config"},next:{title:"Built-in Methods",permalink:"/carefree-drawboard-doc/docs/api-reference/Built-in-Methods"}},p={},s=[{value:"<code>register_plugin</code>",id:"register_plugin",level:2},{value:"<code>identifier</code>",id:"identifier",level:3},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:3},{value:"<code>cache_resource</code>",id:"cache_resource",level:2},{value:"<code>fn</code>",id:"fn",level:3},{value:"Returns",id:"returns-1",level:3},{value:"Examples",id:"examples",level:3},{value:"For AI models",id:"for-ai-models",level:4},{value:"For HTTP client",id:"for-http-client",level:4},{value:"Source Codes",id:"source-codes",level:3}],u={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Functions in this page can be directly used in your code after"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from cfdraw import *\n")),(0,a.kt)("p",{parentName:"admonition"},"is added.")),(0,a.kt)("h2",{id:"register_plugin"},(0,a.kt)("inlineCode",{parentName:"h2"},"register_plugin")),(0,a.kt)("p",null,"This method is used to register a plugin."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/__init__.py"',title:'"cfdraw/__init__.py"'},"register_plugin = PluginFactory.register\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/plugins/factory.py"',title:'"cfdraw/plugins/factory.py"'},"class PluginFactory:\n    @classmethod\n    def register(cls, identifier: str) -> Callable[[TPlugin], TPlugin]:\n        ...\n")),(0,a.kt)("h3",{id:"identifier"},(0,a.kt)("inlineCode",{parentName:"h3"},"identifier")),(0,a.kt)(l.Z,{type:"str",required:!0,mdxType:"Badget"}),(0,a.kt)("p",null,"The identifier of the plugin."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It should be unique across all registered plugins."),(0,a.kt)("li",{parentName:"ul"},"It is recommended to keep it self-explanatory.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)(l.Z,{type:"Callable[[TPlugin], TPlugin]",mdxType:"Badget"}),(0,a.kt)("p",null,"The decorator function to register the plugin."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"However, to make your code more decoupled and extensible, it is preferred to use a 'chained' way to register the plugin, see ",(0,a.kt)("a",{parentName:"p",href:"#example"},"Example")," below.")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="plugins.py"',title:'"plugins.py"'},"from cfdraw import *\n\nclass GrayScalePlugin(IFieldsPlugin):\n    ...\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from cfdraw import *\nfrom plugins import GrayScalePlugin\n\n# highlight-next-line\nregister_plugin("gray_scale")(GrayScalePlugin)\napp = App()\n')),(0,a.kt)("h2",{id:"cache_resource"},(0,a.kt)("inlineCode",{parentName:"h2"},"cache_resource")),(0,a.kt)("p",null,"This function is a decorator which helps you achieve the Singleton pattern. It is commonly used to decorate the initialization of resources that should be initialized only once, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AI models."),(0,a.kt)("li",{parentName:"ul"},"Database connections."),(0,a.kt)("li",{parentName:"ul"},"SDK / API / HTTP clients."),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="cfdraw/utils/cache.py"',title:'"cfdraw/utils/cache.py"'},"def cache_resource(fn: callable) -> callable:\n    ...\n")),(0,a.kt)("h3",{id:"fn"},(0,a.kt)("inlineCode",{parentName:"h3"},"fn")),(0,a.kt)(l.Z,{type:"callable",required:!0,mdxType:"Badget"}),(0,a.kt)("p",null,"The function to be cached."),(0,a.kt)("h3",{id:"returns-1"},"Returns"),(0,a.kt)(l.Z,{type:"callable",mdxType:"Badget"}),(0,a.kt)("p",null,"The decorated function, which can cache the result of ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," and return it directly if ",(0,a.kt)("inlineCode",{parentName:"p"},"fn")," is called again (with the same input arguments)."),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"for-ai-models"},"For AI models"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initialization")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from cfdraw import *\n\n\n# highlight-next-line\n@cache_resource\ndef get_model():\n    import torch\n    from diffusers import StableDiffusionPipeline\n    from diffusers import StableDiffusionImg2ImgPipeline\n\n    tag = "runwayml/stable-diffusion-v1-5"\n    m = StableDiffusionPipeline.from_pretrained(tag, torch_dtype=torch.float16)\n    m.to("cuda")\n    return m\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"class TextToImagePlugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        ...\n\n    async def process(self, data: ISocketRequest):\n        # highlight-next-line\n        model = get_model()\n        # use model to generate images below\n        ...\n")),(0,a.kt)("h4",{id:"for-http-client"},"For HTTP client"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Initialization")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},'from cfdraw import *\n\n\n# highlight-next-line\n@cache_resource\ndef get_client():\n    SECRET_ID = os.getenv("SECRET_ID")\n    SECRET_KEY = os.getenv("SECRET_KEY")\n    client = YourHttpClient(SECRET_ID, SECRET_KEY)\n    return client\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Usage")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="app.py"',title:'"app.py"'},"class Plugin(IFieldsPlugin):\n    @property\n    def settings(self) -> IPluginSettings:\n        ...\n\n    async def process(self, data: ISocketRequest):\n        # highlight-next-line\n        client = get_client()\n        # use client to send requests below\n        ...\n")),(0,a.kt)("h3",{id:"source-codes"},"Source Codes"),(0,a.kt)("p",null,"It may help you to understand ",(0,a.kt)("inlineCode",{parentName:"p"},"cache_resource")," better by reading its source codes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from typing import Any\nfrom typing import Dict\nfrom typing import Generic\nfrom typing import TypeVar\nfrom typing import Protocol\n\n\nTResource = TypeVar("TResource", bound="Any", covariant=True)\n\n\nclass IResourceFn(Generic[TResource], Protocol):\n    def __call__(self, *args: Any, **kwargs: Any) -> TResource:\n        pass\n\n\ndef cache_resource(fn: IResourceFn[TResource]) -> IResourceFn[TResource]:\n    class Cache:\n        def __init__(self) -> None:\n            self._cache: Dict[Any, Any] = {}\n\n        def __call__(self, *args: Any, **kwargs: Any) -> TResource:\n            key = (args, tuple(kwargs.items()))\n            cached = self._cache.get(key)\n            if cached is None:\n                cached = self._cache[key] = fn(*args, **kwargs)\n            return self._cache[key]\n\n    return Cache()\n')))}m.isMDXComponent=!0}}]);