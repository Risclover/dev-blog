"use strict";(self.webpackChunkdev_blog=self.webpackChunkdev_blog||[]).push([[6103],{9058:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(7294),l=n(6010),i=n(7961),r=n(7524),s=n(9960),o=n(5999);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",{className:(0,l.Z)(c.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(c.sidebarItemTitle,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(c.sidebarItemList,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:c.sidebarItem},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var d=n(3102);function u(e){let{sidebar:t}=e;return a.createElement("ul",{className:"menu__list"},t.items.map((e=>a.createElement("li",{key:e.permalink,className:"menu__list-item"},a.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function v(e){return a.createElement(d.Zo,{component:u,props:e})}function g(e){let{sidebar:t}=e;const n=(0,r.i)();return t?.items.length?"mobile"===n?a.createElement(v,{sidebar:t}):a.createElement(m,{sidebar:t}):null}function b(e){const{sidebar:t,toc:n,children:r,...s}=e,o=t&&t.items.length>0;return a.createElement(i.Z,s,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement(g,{sidebar:t}),a.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},r),n&&a.createElement("div",{className:"col col--2"},n))))}},5203:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var a=n(7294),l=n(6010),i=n(1944),r=n(5281),s=n(9460),o=n(9058),c=n(390),m=n(7462),d=n(5999),u=n(2244);function v(e){const{nextItem:t,prevItem:n}=e;return a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}function g(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:l,date:r,tags:o,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(i.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:r}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&a.createElement("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")}))}var b=n(9407);function f(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:i}=(0,s.C)(),{nextItem:r,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:f}=d;return a.createElement(o.Z,{sidebar:t,toc:!u&&i.length>0?a.createElement(b.Z,{toc:i,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(c.Z,null,n),(r||m)&&a.createElement(v,{nextItem:r,prevItem:m}))}function p(e){const t=e.content;return a.createElement(s.n,{content:e.content,isBlogPostPage:!0},a.createElement(i.FG,{className:(0,l.Z)(r.k.wrapper.blogPages,r.k.page.blogPostPage)},a.createElement(g,null),a.createElement(f,{sidebar:e.sidebar},a.createElement(t,null))))}},9407:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),l=n(7294),i=n(6010),r=n(3743);const s={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},o="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...n}=e;return l.createElement("div",{className:(0,i.Z)(s.tableOfContents,"thin-scrollbar",t)},l.createElement(r.Z,(0,a.Z)({},n,{linkClassName:o,linkActiveClassName:c})))}},3743:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7462),l=n(7294),i=n(6668);function r(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function s(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function o(e){const t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function c(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>o(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,l.useRef)(void 0),n=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=c(s,{anchorTopOffset:n.current}),m=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:a,isChild:i}=e;return t.length?l.createElement("ul",{className:i?void 0:n},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:a}))))):null}const v=l.memo(u);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:u,...g}=e;const b=(0,i.L)(),f=m??b.tableOfContents.minHeadingLevel,p=u??b.tableOfContents.maxHeadingLevel,h=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,l.useMemo)((()=>s({toc:r(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:f,maxHeadingLevel:p});return d((0,l.useMemo)((()=>{if(o&&c)return{linkClassName:o,linkActiveClassName:c,minHeadingLevel:f,maxHeadingLevel:p}}),[o,c,f,p])),l.createElement(v,(0,a.Z)({toc:h,className:n,linkClassName:o},g))}}}]);