"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[442],{2461:function(a,e,r){r.d(e,{Z:function(){return b}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(16445),d=r(80184),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],u=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.active,i=a.children,u=a.className,v=a.as,m=void 0===v?"li":v,p=a.linkAs,b=void 0===p?o.Z:p,Z=a.linkProps,N=a.href,x=a.title,h=a.target,P=(0,n.Z)(a,f),y=(0,l.vE)(r,"breadcrumb-item");return(0,d.jsx)(m,(0,s.Z)((0,s.Z)({ref:e},P),{},{className:c()(y,u,{active:t}),"aria-current":t?"page":void 0,children:t?i:(0,d.jsx)(b,(0,s.Z)((0,s.Z)({},Z),{},{href:N,title:x,target:h,children:i}))}))}));u.displayName="BreadcrumbItem",u.defaultProps={active:!1,linkProps:{}};var v=u,m=["bsPrefix","className","listProps","children","label","as"],p=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,i=a.listProps,o=a.children,f=a.label,u=a.as,v=void 0===u?"nav":u,p=(0,n.Z)(a,m),b=(0,l.vE)(r,"breadcrumb");return(0,d.jsx)(v,(0,s.Z)((0,s.Z)({"aria-label":f,className:t,ref:e},p),{},{children:(0,d.jsx)("ol",(0,s.Z)((0,s.Z)({},i),{},{className:c()(b,null==i?void 0:i.className),children:o}))}))}));p.displayName="Breadcrumb",p.defaultProps={label:"breadcrumb",listProps:{}};var b=Object.assign(p,{Item:v})},9140:function(a,e,r){r.d(e,{Z:function(){return O}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(66543),d=r(27472),f=r(80184),u=["bsPrefix","className","variant","as"],v=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,i=a.variant,o=a.as,d=void 0===o?"img":o,v=(0,n.Z)(a,u),m=(0,l.vE)(r,"card-img");return(0,f.jsx)(d,(0,s.Z)({ref:e,className:c()(i?"".concat(m,"-").concat(i):m,t)},v))}));v.displayName="CardImg";var m=v,p=r(96040),b=["bsPrefix","className","as"],Z=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,o=a.as,d=void 0===o?"div":o,u=(0,n.Z)(a,b),v=(0,l.vE)(r,"card-header"),m=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,f.jsx)(p.Z.Provider,{value:m,children:(0,f.jsx)(d,(0,s.Z)((0,s.Z)({ref:e},u),{},{className:c()(t,v)}))})}));Z.displayName="CardHeader";var N=Z,x=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,d.Z)("h5"),P=(0,d.Z)("h6"),y=(0,o.Z)("card-body"),j=(0,o.Z)("card-title",{Component:h}),g=(0,o.Z)("card-subtitle",{Component:P}),w=(0,o.Z)("card-link",{Component:"a"}),C=(0,o.Z)("card-text",{Component:"p"}),E=(0,o.Z)("card-footer"),R=(0,o.Z)("card-img-overlay"),k=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,i=a.bg,o=a.text,d=a.border,u=a.body,v=a.children,m=a.as,p=void 0===m?"div":m,b=(0,n.Z)(a,x),Z=(0,l.vE)(r,"card");return(0,f.jsx)(p,(0,s.Z)((0,s.Z)({ref:e},b),{},{className:c()(t,Z,i&&"bg-".concat(i),o&&"text-".concat(o),d&&"border-".concat(d)),children:u?(0,f.jsx)(y,{children:v}):v}))}));k.displayName="Card",k.defaultProps={body:!1};var O=Object.assign(k,{Img:m,Title:j,Subtitle:g,Body:y,Link:w,Text:C,Header:N,Footer:E,ImgOverlay:R})},96040:function(a,e,r){var s=r(72791).createContext(null);s.displayName="CardHeaderContext",e.Z=s},2677:function(a,e,r){var s=r(29439),n=r(1413),t=r(45987),c=r(81694),i=r.n(c),l=r(72791),o=r(10162),d=r(80184),f=["as","bsPrefix","className"],u=["className"];var v=l.forwardRef((function(a,e){var r=function(a){var e=a.as,r=a.bsPrefix,s=a.className,c=(0,t.Z)(a,f);r=(0,o.vE)(r,"col");var l=(0,o.pi)(),d=(0,o.zG)(),u=[],v=[];return l.forEach((function(a){var e,s,n,t=c[a];delete c[a],"object"===typeof t&&null!=t?(e=t.span,s=t.offset,n=t.order):e=t;var i=a!==d?"-".concat(a):"";e&&u.push(!0===e?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(e)),null!=n&&v.push("order".concat(i,"-").concat(n)),null!=s&&v.push("offset".concat(i,"-").concat(s))})),[(0,n.Z)((0,n.Z)({},c),{},{className:i().apply(void 0,[s].concat(u,v))}),{as:e,bsPrefix:r,spans:u}]}(a),c=(0,s.Z)(r,2),l=c[0],v=l.className,m=(0,t.Z)(l,u),p=c[1],b=p.as,Z=void 0===b?"div":b,N=p.bsPrefix,x=p.spans;return(0,d.jsx)(Z,(0,n.Z)((0,n.Z)({},m),{},{ref:e,className:i()(v,!x.length&&N)}))}));v.displayName="Col",e.Z=v},8116:function(a,e,r){r.d(e,{Z:function(){return j}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(16445),d=r(80184),f=["active","disabled","className","style","activeLabel","children"],u=["children"],v=i.forwardRef((function(a,e){var r=a.active,t=a.disabled,i=a.className,l=a.style,u=a.activeLabel,v=a.children,m=(0,n.Z)(a,f),p=r||t?"span":o.Z;return(0,d.jsx)("li",{ref:e,style:l,className:c()(i,"page-item",{active:r,disabled:t}),children:(0,d.jsxs)(p,(0,s.Z)((0,s.Z)({className:"page-link",disabled:t},m),{},{children:[v,r&&u&&(0,d.jsx)("span",{className:"visually-hidden",children:u})]}))})}));v.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},v.displayName="PageItem";var m=v;function p(a,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,t=i.forwardRef((function(a,t){var c=a.children,i=(0,n.Z)(a,u);return(0,d.jsxs)(v,(0,s.Z)((0,s.Z)({},i),{},{ref:t,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:c||e}),(0,d.jsx)("span",{className:"visually-hidden",children:r})]}))}));return t.displayName=a,t}var b=p("First","\xab"),Z=p("Prev","\u2039","Previous"),N=p("Ellipsis","\u2026","More"),x=p("Next","\u203a"),h=p("Last","\xbb"),P=["bsPrefix","className","size"],y=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,i=a.size,o=(0,n.Z)(a,P),f=(0,l.vE)(r,"pagination");return(0,d.jsx)("ul",(0,s.Z)((0,s.Z)({ref:e},o),{},{className:c()(t,f,i&&"".concat(f,"-").concat(i))}))}));y.displayName="Pagination";var j=Object.assign(y,{First:b,Prev:Z,Ellipsis:N,Item:m,Next:x,Last:h})},89743:function(a,e,r){var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=r(72791),l=r(10162),o=r(80184),d=["bsPrefix","className","as"],f=i.forwardRef((function(a,e){var r=a.bsPrefix,t=a.className,i=a.as,f=void 0===i?"div":i,u=(0,n.Z)(a,d),v=(0,l.vE)(r,"row"),m=(0,l.pi)(),p=(0,l.zG)(),b="".concat(v,"-cols"),Z=[];return m.forEach((function(a){var e,r=u[a];delete u[a],e=null!=r&&"object"===typeof r?r.cols:r;var s=a!==p?"-".concat(a):"";null!=e&&Z.push("".concat(b).concat(s,"-").concat(e))})),(0,o.jsx)(f,(0,s.Z)((0,s.Z)({ref:e},u),{},{className:c().apply(void 0,[t,v].concat(Z))}))}));f.displayName="Row",e.Z=f},66543:function(a,e,r){r.d(e,{Z:function(){return v}});var s=r(1413),n=r(45987),t=r(81694),c=r.n(t),i=/-(.)/g;var l=r(72791),o=r(10162),d=r(80184),f=["className","bsPrefix","as"],u=function(a){return a[0].toUpperCase()+(e=a,e.replace(i,(function(a,e){return e.toUpperCase()}))).slice(1);var e};function v(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.displayName,t=void 0===r?u(a):r,i=e.Component,v=e.defaultProps,m=l.forwardRef((function(e,r){var t=e.className,l=e.bsPrefix,u=e.as,v=void 0===u?i||"div":u,m=(0,n.Z)(e,f),p=(0,o.vE)(l,a);return(0,d.jsx)(v,(0,s.Z)({ref:r,className:c()(t,p)},m))}));return m.defaultProps=v,m.displayName=t,m}},27472:function(a,e,r){var s=r(1413),n=r(72791),t=r(81694),c=r.n(t),i=r(80184);e.Z=function(a){return n.forwardRef((function(e,r){return(0,i.jsx)("div",(0,s.Z)((0,s.Z)({},e),{},{ref:r,className:c()(e.className,a)}))}))}},89611:function(a,e,r){function s(a,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,e){return a.__proto__=e,a},s(a,e)}r.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=442.f56bdbe4.chunk.js.map