(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a("q1tI"),i=a.n(n),l=(a("pJf4"),a("Wbzz")),m=a("iSRb"),r=a.n(m),o=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:r.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:r.a.author__photo,width:"75",height:"75",alt:t.name})),a?i.a.createElement("h1",{className:r.a.author__title},i.a.createElement(l.Link,{className:r.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:r.a.author__title},i.a.createElement(l.Link,{className:r.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:r.a.author__subtitle},"💻 Android  👀 UX  ⌨️ Kotlin",i.a.createElement("p",null,i.a.createElement("strong",null,"Google Developer Expert, Android"))))},c=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("7Qib")),s=a("euHg"),_=a.n(s),d=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:_.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},u=a("aU/I"),f=a.n(u),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:f.a.contacts},i.a.createElement("ul",{className:f.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:f.a["contacts__list-item"],key:e},i.a.createElement("a",{className:f.a["contacts__list-item-link"],href:Object(c.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(d,{name:e,icon:Object(c.b)(e)}))):null}))))},E=(a("Nrk+"),a("je8k")),h=a.n(E),g=function(e){var t=e.menu;return i.a.createElement("nav",{className:h.a.menu},i.a.createElement("ul",{className:h.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:h.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:h.a["menu__list-item-link"],activeClassName:h.a["menu__list-item-link--active"]},e.label))}))))},k=a("SySy"),b=a.n(k),N=a("gGy4"),v=function(e){var t=e.isIndex,a=Object(N.b)(),n=a.author,l=(a.copyright,a.menu);return i.a.createElement("div",{className:b.a.sidebar},i.a.createElement("div",{className:b.a.sidebar__inner},i.a.createElement(o,{author:n,isIndex:t}),i.a.createElement(g,{menu:l}),i.a.createElement(p,{contacts:n.contacts})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1ariN"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--2nMky",page__inner:"Page-module--page__inner--2M_vz",page__title:"Page-module--page__title--GPD8L",page__body:"Page-module--page__body--Ic6i6"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),m=a.n(l),r=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return i.a.createElement("div",{ref:l,className:m.a.page},i.a.createElement("div",{className:m.a.page__inner},t&&i.a.createElement("h1",{className:m.a.page__title},t),i.a.createElement("div",{className:m.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--X4z2p",sidebar__inner:"Sidebar-module--sidebar__inner--Jdc5s"}},U3HV:function(e,t,a){e.exports={feed__item:"PresentationFeed-module--feed__item--1wU6F","feed__item-title":"PresentationFeed-module--feed__item-title--1sS_C","feed__item-title-link":"PresentationFeed-module--feed__item-title-link--1uyaG","feed__item-description":"PresentationFeed-module--feed__item-description--1tDRU","feed__item-meta-time":"PresentationFeed-module--feed__item-meta-time--hDGP5","feed__item-meta-divider":"PresentationFeed-module--feed__item-meta-divider--6U98D","feed__item-meta-category-link":"PresentationFeed-module--feed__item-meta-category-link--1qoDF","feed__item-readmore":"PresentationFeed-module--feed__item-readmore--N9zMe"}},"aU/I":function(e,t,a){e.exports={contacts__list:"Contacts-module--contacts__list--3OgdW","contacts__list-item":"Contacts-module--contacts__list-item--16p9q","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2MIDn"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--Gpyvw"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--36xCH",author__title:"Author-module--author__title--2CaTb","author__title-link":"Author-module--author__title-link--Yrism",author__subtitle:"Author-module--author__subtitle--cAaEB"}},"j6+C":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));var n=a("q1tI"),i=a.n(n),l=a("Zttt"),m=a("/d1K"),r=a("wd/R"),o=a.n(r),c=a("Wbzz"),s=a("U3HV"),_=a.n(s),d=function(e){var t=e.edges;return i.a.createElement("div",{className:_.a.feed},t.map((function(e){return i.a.createElement("div",{className:_.a.feed__item,key:e.node.fields.slug},i.a.createElement("div",{className:_.a["feed__item-meta"]},i.a.createElement("time",{className:_.a["feed__item-meta-time"],dateTime:o()(e.node.frontmatter.date).format("MMMM D, YYYY")},o()(e.node.frontmatter.date).format("MMMM YYYY")),i.a.createElement("span",{className:_.a["feed__item-meta-divider"]}),i.a.createElement("span",{className:_.a["feed__item-meta-category"]},i.a.createElement("span",{className:_.a["feed__item-meta-category-link"]},e.node.frontmatter.category))),i.a.createElement("h2",{className:_.a["feed__item-title"]},i.a.createElement(c.Link,{className:_.a["feed__item-title-link"],to:e.node.fields.slug},e.node.frontmatter.title)),i.a.createElement("p",{className:_.a["feed__item-description"]},e.node.frontmatter.description))})))},u=a("RXmK"),f=a("gGy4"),p="4086029738";t.default=function(e){var t=e.data,a=Object(f.b)(),n=a.title,r=a.subtitle,o=t.allMarkdownRemark.edges,c=n;return console.log(o),i.a.createElement(l.a,{title:c,description:r},i.a.createElement(m.a,{isIndex:!0}),i.a.createElement(u.a,null,i.a.createElement(d,{edges:o})))}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--Efbin",menu__list:"Menu-module--menu__list--31Zeo","menu__list-item":"Menu-module--menu__list-item--1lJ6B","menu__list-item-link":"Menu-module--menu__list-item-link--10Ush","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2CbUO"}}}]);
//# sourceMappingURL=component---src-templates-presentations-template-js-598df8a69cb8f1b94fc5.js.map