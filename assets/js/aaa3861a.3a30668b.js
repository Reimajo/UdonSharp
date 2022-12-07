"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[8619],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2125:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={slug:"release-1.0.0b12",title:"Release 1.0.0b12",date:new Date("2022-04-01T00:00:00.000Z"),authors:["merlin"],tags:["release beta"]},s=void 0,u={permalink:"/news/release-1.0.0b12",source:"@site/news/releases/release-1.0.0b12.md",title:"Release 1.0.0b12",description:"Changelog",date:"2022-04-01T00:00:00.000Z",formattedDate:"April 1, 2022",tags:[{label:"release beta",permalink:"/news/tags/release-beta"}],truncated:!1,authors:[{name:"Merlin",title:"VRChat Developer",url:"https://github.com/merlinvr",imageURL:"https://github.com/merlinvr.png",key:"merlin"}],frontMatter:{slug:"release-1.0.0b12",title:"Release 1.0.0b12",date:"2022-04-01T00:00:00.000Z",authors:["merlin"],tags:["release beta"]},prevItem:{title:"Release 1.1.1",permalink:"/news/release-1.1.1"},nextItem:{title:"Release 1.0.0b11",permalink:"/news/release-1.0.0b11"}},c={authorsImageUrls:[void 0]},p=[{value:"Changelog",id:"changelog",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"changelog"},"Changelog"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make UdonBehaviourSyncMode attribute affect inherited classes, requested by @BocuD"),(0,o.kt)("li",{parentName:"ul"},"Add UDONSHARP scripting define to check for presence of U# in project"),(0,o.kt)("li",{parentName:"ul"},"Make upgrade process with scene open more robust"),(0,o.kt)("li",{parentName:"ul"},"Add handling for ",(0,o.kt)("inlineCode",{parentName:"li"},"GetComponent(s)<UdonSharpBehaviour>()")," (the exact UdonSharpBehaviour type, types directly inherited from UdonSharpBehaviour were already handled)"),(0,o.kt)("li",{parentName:"ul"},"Add handling for ",(0,o.kt)("inlineCode",{parentName:"li"},"GetComponent(s)<T>()")," on UdonSharpBehaviour types using inheritance"),(0,o.kt)("li",{parentName:"ul"},"Add workaround handling for ",(0,o.kt)("inlineCode",{parentName:"li"},"GetComponent(s)<T>()")," on VRC component types"),(0,o.kt)("li",{parentName:"ul"},"Fix issue where generic methods could leak their type arguments to other uses with different type arguments"),(0,o.kt)("li",{parentName:"ul"},"Fix serialization on base class declared fields, reported by @kafeijao"),(0,o.kt)("li",{parentName:"ul"},"Add better error when declaring nested types")))}m.isMDXComponent=!0}}]);