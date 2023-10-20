"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[2934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},l="How to use DOM events",s={unversionedId:"tutorial-basics/dom-handle",id:"tutorial-basics/dom-handle",title:"How to use DOM events",description:"Get value from page",source:"@site/docs/tutorial-basics/dom-handle.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/dom-handle",permalink:"/docs/tutorial-basics/dom-handle",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to customize style",permalink:"/docs/tutorial-basics/customized-style"},next:{title:"References",permalink:"/docs/category/references"}},c={},i=[{value:"Get value from page",id:"get-value-from-page",level:2},{value:"Get select text from page",id:"get-select-text-from-page",level:2},{value:"Set page value",id:"set-page-value",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-dom-events"},"How to use DOM events"),(0,a.kt)("h2",{id:"get-value-from-page"},"Get value from page"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onChange"),": The onchange event occurs when the value of an page is changed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export const test = () =>{\n    \nconst handleChange = (data) => {\n  console.log('test ->',data);\n\n}\n\nreturn ( \n        <DocumentEditor \n            onChange={handleChange} \n        />\n    )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get value from page",src:n(3471).Z,width:"1920",height:"932"})),(0,a.kt)("h2",{id:"get-select-text-from-page"},"Get select text from page"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"onSelect"),": The onchange event occurs when the value of an page is selected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"export const test = () =>{\n\nconst handleSelectedText = (text) => {\n  console.log(text);\n\n}\n    return ( \n        <DocumentEditor \n            onSelect={handleSelectedText}\n        />\n    )\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Get select text from page",src:n(8500).Z,width:"1440",height:"789"})),(0,a.kt)("h2",{id:"set-page-value"},"Set page value"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"value"),": The value attribute on an tag sets the value of the page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'export const test = () =>{\n        return ( \n        <DocumentEditor \n            value="Hello world"\n        />\n    )\n}\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"value",src:n(492).Z,width:"1440",height:"900"})))}d.isMDXComponent=!0},3471:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/onChange-b0328f0d3b7c6e1da2f0975c31029f64.png"},8500:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/onSelect-d079924ebb3107358f918217c4d6f896.png"},492:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/setValue-a2b453565e825d2359e2bfd706670fe0.png"}}]);