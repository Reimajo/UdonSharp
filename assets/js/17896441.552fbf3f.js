"use strict";(self.webpackChunkudon_sharp=self.webpackChunkudon_sharp||[]).push([[918],{2179:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var n=a(7294),l=a(6010),s=a(7462),r=a(5999),i=a(1750);function o(e){var t=e.previous,a=e.next;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,(0,s.Z)({},t,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,(0,s.Z)({},a,{subLabel:n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var c=a(2263),d=a(9960),m=a(5551),u=a(5979);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function E(e){var t,a=e.className,s=e.versionMetadata,r=(0,c.Z)().siteConfig.title,i=(0,m.gA)({failfast:!0}).pluginId,o=(0,u.J)(i).savePreferredVersionName,d=(0,m.Jo)(i),v=d.latestDocSuggestion,E=d.latestVersionSuggestion,h=null!=v?v:(t=E).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(b,{siteTitle:r,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:E.label,to:h.path,onClick:function(){return o(E.name)}})))}function h(e){var t=e.className,a=(0,u.E6)();return a.banner?n.createElement(E,{className:t,versionMetadata:a}):null}function g(e){var t=e.className,a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function N(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function L(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(f,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(N,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(6753),Z=a(62),_="lastUpdated_foO9";function C(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,s=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",_)},(a||s)&&n.createElement(L,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:s})))}function T(e){var t=e.content.metadata,a=t.editUrl,s=t.lastUpdatedAt,r=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||s||i);return c||d?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(C,{tags:o}),d&&n.createElement(U,{editUrl:a,lastUpdatedAt:s,lastUpdatedBy:i,formattedLastUpdatedAt:r})):null}var y=a(1575),M="tocCollapsible_jdIR",A="tocCollapsibleButton_Fzxq",w="tocCollapsibleContent_MpvI",x="tocCollapsibleExpanded_laf4",H=a(5002);function B(e){var t=e.toc,a=e.className,s=e.minHeadingLevel,i=e.maxHeadingLevel,o=(0,u.uR)({initialState:!0}),c=o.collapsed,d=o.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(M,!c&&x,a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:d},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:w,collapsed:c},n.createElement(H.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var I=a(9649),S="docItemContainer_vinB",V="docItemCol_DM6M",D="tocMobile_TmEX",O={breadcrumbsContainer:"breadcrumbsContainer_Xlws"},P=a(4996);function F(e){var t=e.children,a=e.href,l="breadcrumbs__link";return a?n.createElement(d.Z,{className:l,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:l,itemProp:"item name"},t)}function R(e){var t=e.children,a=e.active,s=e.index;return n.createElement("li",{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem",className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t,n.createElement("meta",{itemProp:"position",content:String(s+1)}))}function z(){var e=(0,P.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(d.Z,{className:(0,l.Z)("breadcrumbs__link",O.breadcrumbsItemLink),href:e},"\ud83c\udfe0"))}function J(){var e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,O.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(z,null),e.map((function(t,a){return n.createElement(R,{key:a,active:a===e.length-1,index:a},n.createElement(F,{href:a<e.length-1?t.href:void 0},t.label))})))):null}var X=a(7459);function j(e){var t,a=e.content,l=a.metadata,s=a.frontMatter,r=a.assets,i=s.keywords,o=l.description,c=l.title,d=null!=(t=r.image)?t:s.image;return n.createElement(u.d,{title:c,description:o,keywords:i,image:d})}function q(e){var t=e.content,a=t.metadata,s=t.frontMatter,r=s.hide_title,i=s.hide_table_of_contents,c=s.toc_min_heading_level,d=s.toc_max_heading_level,m=a.title,v=!r&&void 0===t.contentTitle,b=(0,u.iP)(),p=!i&&t.toc&&t.toc.length>0,E=p&&("desktop"===b||"ssr"===b);return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",!i&&V)},n.createElement(h,null),n.createElement("div",{className:S},n.createElement("article",null,n.createElement(J,null),n.createElement(g,null),p&&n.createElement(B,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:(0,l.Z)(u.kM.docs.docTocMobile,D)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},v&&n.createElement("header",null,n.createElement(I.Z,{as:"h1"},m)),n.createElement(X.Z,null,n.createElement(t,null))),n.createElement(T,e)),n.createElement(o,{previous:a.previous,next:a.next}))),E&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:c,maxHeadingLevel:d,className:u.kM.docs.docTocDesktop})))}function G(e){var t="docs-doc-id-"+e.content.metadata.unversionedId;return n.createElement(u.FG,{className:t},n.createElement(j,e),n.createElement(q,e))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),s=a(7294),r=a(6010),i=a(5002),o="tableOfContents_cNA8",c=["className"];function d(e){var t=e.className,a=(0,l.Z)(e,c);return s.createElement("div",{className:(0,r.Z)(o,"thin-scrollbar",t)},s.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),s=a(7294),r=a(5979),i=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?s.createElement("ul",{className:l?void 0:a},t.map((function(e){return s.createElement("li",{key:e.id},s.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),s.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,p=e.maxHeadingLevel,E=(0,l.Z)(e,i),h=(0,r.LU)(),g=null!=b?b:h.tableOfContents.minHeadingLevel,f=null!=p?p:h.tableOfContents.maxHeadingLevel,N=(0,r.b9)({toc:t,minHeadingLevel:g,maxHeadingLevel:f}),L=(0,s.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:g,maxHeadingLevel:f}}),[m,v,g,f]);return(0,r.Si)(L),s.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},E))}}}]);