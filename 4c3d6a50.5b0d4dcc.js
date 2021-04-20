(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(l,".").concat(b)]||d[b]||f[b]||r;return n?o.a.createElement(p,i(i({ref:t},c),{},{components:n})):o.a.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(109)),l={id:"ContentManagement",title:"Content Management"},i={unversionedId:"features/ContentManagement",id:"features/ContentManagement",isDocsHomePage:!1,title:"Content Management",description:"Nez includes it's own content management system that builds on the MonoGame ContentManager class. All content management goes through the NezContentManager which is a subclass of ContentManager. The debug console has a 'assets' command that will log all scene or global assets so you will always know what is still in memory.",source:"@site/docs\\features\\ContentManagement.md",slug:"/features/ContentManagement",permalink:"/Nez/docs/features/ContentManagement",editUrl:"https://github.com/prime31/Nez/edit/master/Nez.github.io/docs/features/ContentManagement.md",version:"current",sidebar:"someSidebar",previous:{title:"Nez Core",permalink:"/Nez/docs/features/Core"},next:{title:"Runtime Inspector",permalink:"/Nez/docs/features/RuntimeInspector"}},s=[{value:"Global Content",id:"global-content",children:[]},{value:"Scene Content",id:"scene-content",children:[]},{value:"Loading Effects",id:"loading-effects",children:[]},{value:"Auto Generating Content Paths",id:"auto-generating-content-paths",children:[]},{value:"Async Loading",id:"async-loading",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nez includes it's own content management system that builds on the MonoGame ContentManager class. All content management goes through the ",Object(r.b)("inlineCode",{parentName:"p"},"NezContentManager")," which is a subclass of ",Object(r.b)("inlineCode",{parentName:"p"},"ContentManager"),". The debug console has a 'assets' command that will log all scene or global assets so you will always know what is still in memory."),Object(r.b)("p",null,"Nez provides containers for global and per-scene content. You can also create your own ",Object(r.b)("inlineCode",{parentName:"p"},"NezContentManager")," at any time if you need to manage some short-lived assets. You can also unload assets at any time via the ",Object(r.b)("inlineCode",{parentName:"p"},"UnloadAsset<T>")," method. Note that Effects should be unloaded with ",Object(r.b)("inlineCode",{parentName:"p"},"UnloadEffect")," since they are a special case."),Object(r.b)("h2",{id:"global-content"},"Global Content"),Object(r.b)("p",null,"There is a global NezContentManager available via ",Object(r.b)("inlineCode",{parentName:"p"},"Core.Content"),". You can use this to load up assets that will survive the life of your application. Things like your fonts, shared atlases, shared sound effects, etc."),Object(r.b)("h2",{id:"scene-content"},"Scene Content"),Object(r.b)("p",null,"Each scene has it's own ",Object(r.b)("inlineCode",{parentName:"p"},"NezContentManager")," (Scene.Content) that you can use to load per-scene assets. When a new scene is set all of the assets from the previous scene will automatically be unloaded for you."),Object(r.b)("h2",{id:"loading-effects"},"Loading Effects"),Object(r.b)("p",null,"There are several ways to load Effects with Nez that are not present in MonoGame. These were added to make Effect management easier, especially when dealing with Effects that are subclasses of Effect (such as AlphaTestEffect and BasicEffect). All of the built-in Nez Effects can also be loaded easily. The available methods are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoadMonoGameEffect<T>:")," loads and manages any Effect that is built-in to MonoGame such as BasicEffect, AlphaTestEffect, etc"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoadEffect/LoadEffect<T>:")," loads an ogl/fxb effect directly from file and handles disposing of it when the ContentManager is disposed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoadEffect<T>( string name, byte[] effectCode ):")," loads an ogl/fxb effect directly from its bytes and handles disposing of it when the ContentManager is disposed"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LoadNezEffect:")," loads a built-in Nez effect. These are any of the ",Object(r.b)("inlineCode",{parentName:"li"},"Effect")," subclasses in the Nez/Graphics/Effects folder.")),Object(r.b)("h2",{id:"auto-generating-content-paths"},"Auto Generating Content Paths"),Object(r.b)("p",null,"Nez includes a T4 template that will generate a static ",Object(r.b)("inlineCode",{parentName:"p"},"Nez.Content")," class for you that contains the names of all of the files processed by the Pipeline Tool. This lets you change code like the following:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-csharp"},'// before using the ContentPathGenerator you have strings to represent your content\nvar tex = content.Load<Texture2D>( "Textures/Scene1/blueBird" );\n\n// after using the ContentPathGenerator you will have compile-tile safety for your content\nvar tex = content.Load<Texture2D>( Nez.Content.Textures.Scene1.blueBird );\n')),Object(r.b)("p",null,"The big advantage to using it is that you will never have a reference to content that doesnt actually exist in your project. You get compile-time checking of all your content. Setup is as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"copy the ContentPathGenerator.tt file into the root of your project (you could place it elsewhere and then modify the ",Object(r.b)("inlineCode",{parentName:"li"},"sourceFolder")," variable in the file. For example, if using only precompiled XNB files in an FNA project you would set ",Object(r.b)("inlineCode",{parentName:"li"},'sourceFolder = "Content/"'),")"),Object(r.b)("li",{parentName:"ul"},'in the properties pane for the file set the "Custom Tool" to "TextTemplatingFileGenerator"'),Object(r.b)("li",{parentName:"ul"},"right click the file and choose Tools -> Process T4 Template to generate the Content class")),Object(r.b)("h2",{id:"async-loading"},"Async Loading"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NezContentManager")," provides asynchronous loading of assets as well. You can load a single asset or an array of assets via the ",Object(r.b)("inlineCode",{parentName:"p"},"LoadAsync<T>")," method. It takes a callback Action that will be called once the assets are loaded."))}u.isMDXComponent=!0}}]);