"use strict";(self.webpackChunkclient_sim=self.webpackChunkclient_sim||[]).push([[4839],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2316:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={slug:"release-1.0.0b11",title:"Release 1.0.0b11",date:new Date("2022-03-23T00:00:00.000Z"),authors:["merlin"],tags:["release beta"]},s=void 0,p={permalink:"/news/release-1.0.0b11",source:"@site/news/releases/release-1.0.0b11.md",title:"Release 1.0.0b11",description:"Changelog",date:"2022-03-23T00:00:00.000Z",formattedDate:"March 23, 2022",tags:[{label:"release beta",permalink:"/news/tags/release-beta"}],truncated:!1,authors:[{name:"Merlin",title:"VRChat Developer",url:"https://github.com/merlinvr",imageURL:"https://github.com/merlinvr.png",key:"merlin"}],frontMatter:{slug:"release-1.0.0b11",title:"Release 1.0.0b11",date:"2022-03-23T00:00:00.000Z",authors:["merlin"],tags:["release beta"]},prevItem:{title:"Release 1.0.0b12",permalink:"/news/release-1.0.0b12"},nextItem:{title:"Release 1.0.0b10",permalink:"/news/release-1.0.0b10"}},c={authorsImageUrls:[void 0]},u=[{value:"Changelog",id:"changelog",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"changelog"},"Changelog"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Improve exposure tree scan speed a little"),(0,i.kt)("li",{parentName:"ul"},"Make GetUdonSharpComponent APIs just act like Unity equivalents instead of potentially erroring"),(0,i.kt)("li",{parentName:"ul"},"Add fallback drawing for jagged arrays"),(0,i.kt)("li",{parentName:"ul"},"Fix issue with local symbols getting incorrectly shared between different generic method type arguments, reported by @Miner28_3"),(0,i.kt)("li",{parentName:"ul"},"Fix U# behaviour enabled state not getting synced in the editor UI while in play mode properly, reported by @Fairplex"),(0,i.kt)("li",{parentName:"ul"},"Prevent editing script asset on UdonSharpProgramAssets once it has been set since it will not work now. Also add validation for out of sync assigned script types."),(0,i.kt)("li",{parentName:"ul"},"Missing source script warning is now an error"),(0,i.kt)("li",{parentName:"ul"},"Obsolete and no-op UpdateProxy and ApplyProxyModifications editor API calls since they aren't needed in editor-time now and could cause issues with the new way of doing things."),(0,i.kt)("li",{parentName:"ul"},"Fix multiply operation * on System.Decimal type, reported by @pnivek"),(0,i.kt)("li",{parentName:"ul"},"Fix integer -> user enum conversions when the underlying integer types don't match, reported by @GlitchyDev"),(0,i.kt)("li",{parentName:"ul"},"Fix script upgrader more, reported by @Phasedragon"),(0,i.kt)("li",{parentName:"ul"},"Make file change detection extend to all scripts that are linked by U# builds"),(0,i.kt)("li",{parentName:"ul"},"Fix AddUdonSharpComponent editor scripting APIs as they weren't actually working, reported by @BocuD"),(0,i.kt)("li",{parentName:"ul"},"Move UdonSharp menu items to be under the VRChat SDK top level menu")))}d.isMDXComponent=!0}}]);