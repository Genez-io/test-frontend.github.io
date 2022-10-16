"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[2054,2628],{3070:function(e,n,r){var t=r(97357),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};t.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(c){}n.ZP=function(e,n,r,t){if(t&&"boolean"!==typeof t&&!o){var i=t.once,c=t.capture,s=r;!o&&i&&(s=r.__once||function e(t){this.removeEventListener(n,e,c),r.call(this,t)},r.__once=s),e.addEventListener(n,s,a?t:c)}e.addEventListener(n,r,t)}},97357:function(e,n){n.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},75427:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(78376);function a(e,n){return function(e){var n=(0,t.Z)(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var u=function(e,n){var r="",t="";if("string"===typeof n)return e.style.getPropertyValue(c(n))||a(e).getPropertyValue(c(n));Object.keys(n).forEach((function(a){var o=n[a];o||0===o?!function(e){return!(!e||!s.test(e))}(a)?r+=c(a)+": "+o+";":t+=a+"("+o+") ":e.style.removeProperty(c(a))})),t&&(r+="transform: "+t+";"),e.style.cssText+=";"+r}},92899:function(e,n,r){var t=r(3070),a=r(36382);n.Z=function(e,n,r,o){return(0,t.ZP)(e,n,r,o),function(){(0,a.Z)(e,n,r,o)}}},78376:function(e,n,r){function t(e){return e&&e.ownerDocument||document}r.d(n,{Z:function(){return t}})},36382:function(e,n){n.Z=function(e,n,r,t){var a=t&&"boolean"!==typeof t?t.capture:t;e.removeEventListener(n,r,a),r.__once&&e.removeEventListener(n,r.__once,a)}},33690:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(75427),a=r(92899);function o(e,n,r){void 0===r&&(r=5);var t=!1,o=setTimeout((function(){t||function(e,n,r,t){if(void 0===r&&(r=!1),void 0===t&&(t=!0),e){var a=document.createEvent("HTMLEvents");a.initEvent(n,r,t),e.dispatchEvent(a)}}(e,"transitionend",!0)}),n+r),i=(0,a.Z)(e,"transitionend",(function(){t=!0}),{once:!0});return function(){clearTimeout(o),i()}}function i(e,n,r,i){null==r&&(r=function(e){var n=(0,t.Z)(e,"transitionDuration")||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}(e)||0);var c=o(e,r,i),s=(0,a.Z)(e,"transitionend",n);return function(){c(),s()}}},28949:function(e,n,r){r.d(n,{Z:function(){return S}});var t=r(1413),a=r(45987),o=r(81694),i=r.n(o),c=r(72791),s=r(32592),u=r(10162),l=r(17858);function d(e,n){return Array.isArray(e)?e.includes(n):e===n}var f=c.createContext({});f.displayName="AccordionContext";var v=f,m=r(80184),Z=["as","bsPrefix","className","children","eventKey"],p=c.forwardRef((function(e,n){var r=e.as,o=void 0===r?"div":r,s=e.bsPrefix,f=e.className,p=e.children,x=e.eventKey,y=(0,a.Z)(e,Z),b=(0,c.useContext)(v).activeEventKey;return s=(0,u.vE)(s,"accordion-collapse"),(0,m.jsx)(l.Z,(0,t.Z)((0,t.Z)({ref:n,in:d(b,x)},y),{},{className:i()(f,s),children:(0,m.jsx)(o,{children:c.Children.only(p)})}))}));p.displayName="AccordionCollapse";var x=p,y=c.createContext({eventKey:""});y.displayName="AccordionItemContext";var b=y,h=["as","bsPrefix","className"],E=c.forwardRef((function(e,n){var r=e.as,o=void 0===r?"div":r,s=e.bsPrefix,l=e.className,d=(0,a.Z)(e,h);s=(0,u.vE)(s,"accordion-body");var f=(0,c.useContext)(b).eventKey;return(0,m.jsx)(x,{eventKey:f,children:(0,m.jsx)(o,(0,t.Z)((0,t.Z)({ref:n},d),{},{className:i()(l,s)}))})}));E.displayName="AccordionBody";var N=E,g=r(93433),w=["as","bsPrefix","className","onClick"];var C=c.forwardRef((function(e,n){var r=e.as,o=void 0===r?"button":r,s=e.bsPrefix,l=e.className,f=e.onClick,Z=(0,a.Z)(e,w);s=(0,u.vE)(s,"accordion-button");var p=(0,c.useContext)(b).eventKey,x=function(e,n){var r=(0,c.useContext)(v),t=r.activeEventKey,a=r.onSelect,o=r.alwaysOpen;return function(r){var i=e===t?null:e;o&&(i=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,g.Z)(t),[e]):[e]),null==a||a(i,r),null==n||n(r)}}(p,f),y=(0,c.useContext)(v).activeEventKey;return"button"===o&&(Z.type="button"),(0,m.jsx)(o,(0,t.Z)((0,t.Z)({ref:n,onClick:x},Z),{},{"aria-expanded":p===y,className:i()(l,s,!d(y,p)&&"collapsed")}))}));C.displayName="AccordionButton";var P=C,j=["as","bsPrefix","className","children","onClick"],k=c.forwardRef((function(e,n){var r=e.as,o=void 0===r?"h2":r,c=e.bsPrefix,s=e.className,l=e.children,d=e.onClick,f=(0,a.Z)(e,j);return c=(0,u.vE)(c,"accordion-header"),(0,m.jsx)(o,(0,t.Z)((0,t.Z)({ref:n},f),{},{className:i()(s,c),children:(0,m.jsx)(P,{onClick:d,children:l})}))}));k.displayName="AccordionHeader";var A=k,R=["as","bsPrefix","className","eventKey"],K=c.forwardRef((function(e,n){var r=e.as,o=void 0===r?"div":r,s=e.bsPrefix,l=e.className,d=e.eventKey,f=(0,a.Z)(e,R);s=(0,u.vE)(s,"accordion-item");var v=(0,c.useMemo)((function(){return{eventKey:d}}),[d]);return(0,m.jsx)(b.Provider,{value:v,children:(0,m.jsx)(o,(0,t.Z)((0,t.Z)({ref:n},f),{},{className:i()(l,s)}))})}));K.displayName="AccordionItem";var L=K,I=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],O=c.forwardRef((function(e,n){var r=(0,s.Ch)(e,{activeKey:"onSelect"}),o=r.as,l=void 0===o?"div":o,d=r.activeKey,f=r.bsPrefix,Z=r.className,p=r.onSelect,x=r.flush,y=r.alwaysOpen,b=(0,a.Z)(r,I),h=(0,u.vE)(f,"accordion"),E=(0,c.useMemo)((function(){return{activeEventKey:d,onSelect:p,alwaysOpen:y}}),[d,p,y]);return(0,m.jsx)(v.Provider,{value:E,children:(0,m.jsx)(l,(0,t.Z)((0,t.Z)({ref:n},b),{},{className:i()(Z,h,x&&"".concat(h,"-flush"))}))})}));O.displayName="Accordion";var S=Object.assign(O,{Button:P,Collapse:x,Item:L,Header:A,Body:N})},2461:function(e,n,r){r.d(n,{Z:function(){return p}});var t=r(1413),a=r(45987),o=r(81694),i=r.n(o),c=r(72791),s=r(10162),u=r(16445),l=r(80184),d=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],f=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.active,c=e.children,f=e.className,v=e.as,m=void 0===v?"li":v,Z=e.linkAs,p=void 0===Z?u.Z:Z,x=e.linkProps,y=e.href,b=e.title,h=e.target,E=(0,a.Z)(e,d),N=(0,s.vE)(r,"breadcrumb-item");return(0,l.jsx)(m,(0,t.Z)((0,t.Z)({ref:n},E),{},{className:i()(N,f,{active:o}),"aria-current":o?"page":void 0,children:o?c:(0,l.jsx)(p,(0,t.Z)((0,t.Z)({},x),{},{href:y,title:b,target:h,children:c}))}))}));f.displayName="BreadcrumbItem",f.defaultProps={active:!1,linkProps:{}};var v=f,m=["bsPrefix","className","listProps","children","label","as"],Z=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.listProps,u=e.children,d=e.label,f=e.as,v=void 0===f?"nav":f,Z=(0,a.Z)(e,m),p=(0,s.vE)(r,"breadcrumb");return(0,l.jsx)(v,(0,t.Z)((0,t.Z)({"aria-label":d,className:o,ref:n},Z),{},{children:(0,l.jsx)("ol",(0,t.Z)((0,t.Z)({},c),{},{className:i()(p,null==c?void 0:c.className),children:u}))}))}));Z.displayName="Breadcrumb",Z.defaultProps={label:"breadcrumb",listProps:{}};var p=Object.assign(Z,{Item:v})},9140:function(e,n,r){r.d(n,{Z:function(){return R}});var t=r(1413),a=r(45987),o=r(81694),i=r.n(o),c=r(72791),s=r(10162),u=r(66543),l=r(27472),d=r(80184),f=["bsPrefix","className","variant","as"],v=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.variant,u=e.as,l=void 0===u?"img":u,v=(0,a.Z)(e,f),m=(0,s.vE)(r,"card-img");return(0,d.jsx)(l,(0,t.Z)({ref:n,className:i()(c?"".concat(m,"-").concat(c):m,o)},v))}));v.displayName="CardImg";var m=v,Z=r(96040),p=["bsPrefix","className","as"],x=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,u=e.as,l=void 0===u?"div":u,f=(0,a.Z)(e,p),v=(0,s.vE)(r,"card-header"),m=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:v}}),[v]);return(0,d.jsx)(Z.Z.Provider,{value:m,children:(0,d.jsx)(l,(0,t.Z)((0,t.Z)({ref:n},f),{},{className:i()(o,v)}))})}));x.displayName="CardHeader";var y=x,b=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,l.Z)("h5"),E=(0,l.Z)("h6"),N=(0,u.Z)("card-body"),g=(0,u.Z)("card-title",{Component:h}),w=(0,u.Z)("card-subtitle",{Component:E}),C=(0,u.Z)("card-link",{Component:"a"}),P=(0,u.Z)("card-text",{Component:"p"}),j=(0,u.Z)("card-footer"),k=(0,u.Z)("card-img-overlay"),A=c.forwardRef((function(e,n){var r=e.bsPrefix,o=e.className,c=e.bg,u=e.text,l=e.border,f=e.body,v=e.children,m=e.as,Z=void 0===m?"div":m,p=(0,a.Z)(e,b),x=(0,s.vE)(r,"card");return(0,d.jsx)(Z,(0,t.Z)((0,t.Z)({ref:n},p),{},{className:i()(o,x,c&&"bg-".concat(c),u&&"text-".concat(u),l&&"border-".concat(l)),children:f?(0,d.jsx)(N,{children:v}):v}))}));A.displayName="Card",A.defaultProps={body:!1};var R=Object.assign(A,{Img:m,Title:g,Subtitle:w,Body:N,Link:C,Text:P,Header:y,Footer:j,ImgOverlay:k})},96040:function(e,n,r){var t=r(72791).createContext(null);t.displayName="CardHeaderContext",n.Z=t},17858:function(e,n,r){r.d(n,{Z:function(){return g}});var t=r(1413),a=r(45987),o=r(4942),i=r(81694),c=r.n(i),s=r(75427),u=r(72791),l=r(26752),d=r(71380);var f,v=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var r=arguments.length,t=new Array(r),a=0;a<r;a++)t[a]=arguments[a];e.apply(this,t),n.apply(this,t)}}),null)},m=r(67202),Z=r(85007),p=r(80184),x=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],y={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,n){var r=n["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],t=y[e];return r+parseInt((0,s.Z)(n,t[0]),10)+parseInt((0,s.Z)(n,t[1]),10)}var h=(f={},(0,o.Z)(f,l.Wj,"collapse"),(0,o.Z)(f,l.Ix,"collapsing"),(0,o.Z)(f,l.d0,"collapsing"),(0,o.Z)(f,l.cn,"collapse show"),f),E={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:b},N=u.forwardRef((function(e,n){var r=e.onEnter,o=e.onEntering,i=e.onEntered,s=e.onExit,l=e.onExiting,f=e.className,y=e.children,E=e.dimension,N=void 0===E?"height":E,g=e.getDimensionValue,w=void 0===g?b:g,C=(0,a.Z)(e,x),P="function"===typeof N?N():N,j=(0,u.useMemo)((function(){return v((function(e){e.style[P]="0"}),r)}),[P,r]),k=(0,u.useMemo)((function(){return v((function(e){var n="scroll".concat(P[0].toUpperCase()).concat(P.slice(1));e.style[P]="".concat(e[n],"px")}),o)}),[P,o]),A=(0,u.useMemo)((function(){return v((function(e){e.style[P]=null}),i)}),[P,i]),R=(0,u.useMemo)((function(){return v((function(e){e.style[P]="".concat(w(P,e),"px"),(0,m.Z)(e)}),s)}),[s,w,P]),K=(0,u.useMemo)((function(){return v((function(e){e.style[P]=null}),l)}),[P,l]);return(0,p.jsx)(Z.Z,(0,t.Z)((0,t.Z)({ref:n,addEndListener:d.Z},C),{},{"aria-expanded":C.role?C.in:null,onEnter:j,onEntering:k,onEntered:A,onExit:R,onExiting:K,childRef:y.ref,children:function(e,n){return u.cloneElement(y,(0,t.Z)((0,t.Z)({},n),{},{className:c()(f,y.props.className,h[e],"width"===P&&"collapse-horizontal")}))}}))}));N.defaultProps=E;var g=N},85007:function(e,n,r){var t=r(1413),a=r(45987),o=r(72791),i=r(26752),c=r(73201),s=r(37002),u=r(80184),l=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],d=o.forwardRef((function(e,n){var r=e.onEnter,d=e.onEntering,f=e.onEntered,v=e.onExit,m=e.onExiting,Z=e.onExited,p=e.addEndListener,x=e.children,y=e.childRef,b=(0,a.Z)(e,l),h=(0,o.useRef)(null),E=(0,c.Z)(h,y),N=function(e){E((0,s.Z)(e))},g=function(e){return function(n){e&&h.current&&e(h.current,n)}},w=(0,o.useCallback)(g(r),[r]),C=(0,o.useCallback)(g(d),[d]),P=(0,o.useCallback)(g(f),[f]),j=(0,o.useCallback)(g(v),[v]),k=(0,o.useCallback)(g(m),[m]),A=(0,o.useCallback)(g(Z),[Z]),R=(0,o.useCallback)(g(p),[p]);return(0,u.jsx)(i.ZP,(0,t.Z)((0,t.Z)({ref:n},b),{},{onEnter:w,onEntered:P,onEntering:C,onExit:j,onExited:A,onExiting:k,addEndListener:R,nodeRef:h,children:"function"===typeof x?function(e,n){return x(e,(0,t.Z)((0,t.Z)({},n),{},{ref:N}))}:o.cloneElement(x,{ref:N})}))}));n.Z=d},27472:function(e,n,r){var t=r(1413),a=r(72791),o=r(81694),i=r.n(o),c=r(80184);n.Z=function(e){return a.forwardRef((function(n,r){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},n),{},{ref:r,className:i()(n.className,e)}))}))}},37002:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(54164);function a(e){return e&&"setState"in e?t.findDOMNode(e):null!=e?e:null}},71380:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(75427),a=r(33690);function o(e,n){var r=(0,t.Z)(e,n)||"",a=-1===r.indexOf("ms")?1e3:1;return parseFloat(r)*a}function i(e,n){var r=o(e,"transitionDuration"),t=o(e,"transitionDelay"),i=(0,a.Z)(e,(function(r){r.target===e&&(i(),n(r))}),r+t)}},67202:function(e,n,r){function t(e){e.offsetHeight}r.d(n,{Z:function(){return t}})},59199:function(e,n,r){function t(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(n,{Z:function(){return t}})},93433:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(30907);var a=r(59199),o=r(40181);function i(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=2054.5dea87ad.chunk.js.map