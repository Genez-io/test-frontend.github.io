"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[5316],{57246:function(e,n,t){t.d(n,{Z:function(){return x}});var o=t(29439),r=t(78376);function a(e){void 0===e&&(e=(0,r.Z)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var i,s=t(53189),l=t(97357),c=t(92899),u=t(72791),d=t(54164),f=t(55746),v=t(91683),h=t(52803),m=t(39007),g=t(65177),p=t(90183),Z=t(58865),b=t(80184),y=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function E(e){var n=(0,Z.Z)(),t=e||function(e){return i||(i=new g.Z({ownerDocument:null==e?void 0:e.document})),i}(n),o=(0,u.useRef)({dialog:null,backdrop:null});return Object.assign(o.current,{add:function(){return t.add(o.current)},remove:function(){return t.remove(o.current)},isTopModal:function(){return t.isTopModal(o.current)},setDialogRef:(0,u.useCallback)((function(e){o.current.dialog=e}),[]),setBackdropRef:(0,u.useCallback)((function(e){o.current.backdrop=e}),[])})}var k=(0,u.forwardRef)((function(e,n){var t=e.show,r=void 0!==t&&t,i=e.role,g=void 0===i?"dialog":i,Z=e.className,k=e.style,x=e.children,w=e.backdrop,N=void 0===w||w,C=e.keyboard,R=void 0===C||C,j=e.onBackdropClick,O=e.onEscapeKeyDown,T=e.transition,F=e.backdropTransition,S=e.autoFocus,D=void 0===S||S,B=e.enforceFocus,L=void 0===B||B,A=e.restoreFocus,M=void 0===A||A,P=e.restoreFocusOptions,H=e.renderDialog,W=e.renderBackdrop,I=void 0===W?function(e){return(0,b.jsx)("div",Object.assign({},e))}:W,K=e.manager,z=e.container,V=e.onShow,U=e.onHide,$=void 0===U?function(){}:U,_=e.onExit,q=e.onExited,G=e.onExiting,J=e.onEnter,Q=e.onEntering,X=e.onEntered,Y=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,y),ee=(0,p.Z)(z),ne=E(K),te=(0,f.Z)(),oe=(0,h.Z)(r),re=(0,u.useState)(!r),ae=(0,o.Z)(re,2),ie=ae[0],se=ae[1],le=(0,u.useRef)(null);(0,u.useImperativeHandle)(n,(function(){return ne}),[ne]),l.Z&&!oe&&r&&(le.current=a()),T||r||ie?r&&ie&&se(!1):se(!0);var ce=(0,m.Z)((function(){if(ne.add(),me.current=(0,c.Z)(document,"keydown",ve),he.current=(0,c.Z)(document,"focus",(function(){return setTimeout(de)}),!0),V&&V(),D){var e=a(document);ne.dialog&&e&&!(0,s.Z)(ne.dialog,e)&&(le.current=e,ne.dialog.focus())}})),ue=(0,m.Z)((function(){var e;(ne.remove(),null==me.current||me.current(),null==he.current||he.current(),M)&&(null==(e=le.current)||null==e.focus||e.focus(P),le.current=null)}));(0,u.useEffect)((function(){r&&ee&&ce()}),[r,ee,ce]),(0,u.useEffect)((function(){ie&&ue()}),[ie,ue]),(0,v.Z)((function(){ue()}));var de=(0,m.Z)((function(){if(L&&te()&&ne.isTopModal()){var e=a();ne.dialog&&e&&!(0,s.Z)(ne.dialog,e)&&ne.dialog.focus()}})),fe=(0,m.Z)((function(e){e.target===e.currentTarget&&(null==j||j(e),!0===N&&$())})),ve=(0,m.Z)((function(e){R&&27===e.keyCode&&ne.isTopModal()&&(null==O||O(e),e.defaultPrevented||$())})),he=(0,u.useRef)(),me=(0,u.useRef)(),ge=T;if(!ee||!(r||ge&&!ie))return null;var pe=Object.assign({role:g,ref:ne.setDialogRef,"aria-modal":"dialog"===g||void 0},Y,{style:k,className:Z,tabIndex:-1}),Ze=H?H(pe):(0,b.jsx)("div",Object.assign({},pe,{children:u.cloneElement(x,{role:"document"})}));ge&&(Ze=(0,b.jsx)(ge,{appear:!0,unmountOnExit:!0,in:!!r,onExit:_,onExiting:G,onExited:function(){se(!0),null==q||q.apply(void 0,arguments)},onEnter:J,onEntering:Q,onEntered:X,children:Ze}));var be=null;if(N){var ye=F;be=I({ref:ne.setBackdropRef,onClick:fe}),ye&&(be=(0,b.jsx)(ye,{appear:!0,in:!!r,children:be}))}return(0,b.jsx)(b.Fragment,{children:d.createPortal((0,b.jsxs)(b.Fragment,{children:[be,Ze]}),ee)})}));k.displayName="Modal";var x=Object.assign(k,{Manager:g.Z})},65177:function(e,n,t){t.d(n,{Z:function(){return u}});var o=t(93433),r=t(4942),a=t(15671),i=t(43144),s=t(75427);var l=(0,t(71306).PB)("modal-open"),c=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,o=n.handleContainerOverflow,r=void 0===o||o,i=n.isRTL,s=void 0!==i&&i;(0,a.Z)(this,e),this.handleContainerOverflow=r,this.isRTL=s,this.modals=[],this.ownerDocument=t}return(0,i.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();e.style=(0,r.Z)({overflow:o.style.overflow},t,o.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt((0,s.Z)(o,t)||"0",10)+e.scrollBarWidth,"px")),o.setAttribute(l,""),(0,s.Z)(o,n)}},{key:"reset",value:function(){var e=this;(0,o.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(l),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),u=c},32086:function(e,n,t){var o=t(1413),r=t(45987),a=t(72791),i=t(39007),s=t(80473),l=t(99820),c=t(80184),u=["closeLabel","closeVariant","closeButton","onHide","children"],d=a.forwardRef((function(e,n){var t=e.closeLabel,d=e.closeVariant,f=e.closeButton,v=e.onHide,h=e.children,m=(0,r.Z)(e,u),g=(0,a.useContext)(l.Z),p=(0,i.Z)((function(){null==g||g.onHide(),null==v||v()}));return(0,c.jsxs)("div",(0,o.Z)((0,o.Z)({ref:n},m),{},{children:[h,f&&(0,c.jsx)(s.Z,{"aria-label":t,variant:d,onClick:p})]}))}));d.defaultProps={closeLabel:"Close",closeButton:!1},n.Z=d},28099:function(e,n,t){t.d(n,{Z:function(){return E},t:function(){return y}});var o=t(4942),r=t(15671),a=t(43144),i=t(11752),s=t(61120),l=t(60136),c=t(29388),u=t(6755);var d=t(75427),f=t(13808);function v(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var h,m=t(65177),g=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",p=".sticky-top",Z=".navbar-toggler",b=function(e){(0,l.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,r.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,(0,d.Z)(n,(0,o.Z)({},e,"".concat(parseFloat((0,d.Z)(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],(0,d.Z)(n,(0,o.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;(0,i.Z)((0,s.Z)(t.prototype),"setContainerStyle",this).call(this,e);var o,r,a=this.getElement();if(r="modal-open",(o=a).classList?o.classList.add(r):(0,u.Z)(o,r)||("string"===typeof o.className?o.className=o.className+" "+r:o.setAttribute("class",(o.className&&o.className.baseVal||"")+" "+r)),e.scrollBarWidth){var l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(a,g).forEach((function(t){return n.adjustAndStore(l,t,e.scrollBarWidth)})),(0,f.Z)(a,p).forEach((function(t){return n.adjustAndStore(c,t,-e.scrollBarWidth)})),(0,f.Z)(a,Z).forEach((function(t){return n.adjustAndStore(c,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;(0,i.Z)((0,s.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var o,r,a=this.getElement();r="modal-open",(o=a).classList?o.classList.remove(r):"string"===typeof o.className?o.className=v(o.className,r):o.setAttribute("class",v(o.className&&o.className.baseVal||"",r));var l=this.isRTL?"paddingLeft":"paddingRight",c=this.isRTL?"marginLeft":"marginRight";(0,f.Z)(a,g).forEach((function(e){return n.restore(l,e)})),(0,f.Z)(a,p).forEach((function(e){return n.restore(c,e)})),(0,f.Z)(a,Z).forEach((function(e){return n.restore(c,e)}))}}]),t}(m.Z);function y(e){return h||(h=new b(e)),h}var E=b},80473:function(e,n,t){var o=t(1413),r=t(45987),a=t(52007),i=t.n(a),s=t(72791),l=t(81694),c=t.n(l),u=t(80184),d=["className","variant"],f={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},v=s.forwardRef((function(e,n){var t=e.className,a=e.variant,i=(0,r.Z)(e,d);return(0,u.jsx)("button",(0,o.Z)({ref:n,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),t)},i))}));v.displayName="CloseButton",v.propTypes=f,v.defaultProps={"aria-label":"Close"},n.Z=v},95316:function(e,n,t){t.d(n,{Z:function(){return z}});var o,r=t(29439),a=t(45987),i=t(1413),s=t(81694),l=t.n(s),c=t(3070),u=t(97357),d=t(78376),f=t(36382);function v(e){if((!o&&0!==o||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),o=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return o}var h=t(28633),m=t(39007),g=t(73201),p=t(91683),Z=t(33690),b=t(72791),y=t(57246),E=t(28099),k=t(72709),x=t(66543),w=(0,x.Z)("modal-body"),N=t(99820),C=t(10162),R=t(80184),j=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],O=b.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=e.contentClassName,s=e.centered,c=e.size,u=e.fullscreen,d=e.children,f=e.scrollable,v=(0,a.Z)(e,j);t=(0,C.vE)(t,"modal");var h="".concat(t,"-dialog"),m="string"===typeof u?"".concat(t,"-fullscreen-").concat(u):"".concat(t,"-fullscreen");return(0,R.jsx)("div",(0,i.Z)((0,i.Z)({},v),{},{ref:n,className:l()(h,o,c&&"".concat(t,"-").concat(c),s&&"".concat(h,"-centered"),f&&"".concat(h,"-scrollable"),u&&m),children:(0,R.jsx)("div",{className:l()("".concat(t,"-content"),r),children:d})}))}));O.displayName="ModalDialog";var T=O,F=(0,x.Z)("modal-footer"),S=t(32086),D=["bsPrefix","className"],B=b.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,r=(0,a.Z)(e,D);return t=(0,C.vE)(t,"modal-header"),(0,R.jsx)(S.Z,(0,i.Z)((0,i.Z)({ref:n},r),{},{className:l()(o,t)}))}));B.displayName="ModalHeader",B.defaultProps={closeLabel:"Close",closeButton:!1};var L=B,A=(0,t(27472).Z)("h4"),M=(0,x.Z)("modal-title",{Component:A}),P=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],H={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:T};function W(e){return(0,R.jsx)(k.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function I(e){return(0,R.jsx)(k.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var K=b.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,s=e.style,k=e.dialogClassName,x=e.contentClassName,w=e.children,j=e.dialogAs,O=e["aria-labelledby"],T=e["aria-describedby"],F=e["aria-label"],S=e.show,D=e.animation,B=e.backdrop,L=e.keyboard,A=e.onEscapeKeyDown,M=e.onShow,H=e.onHide,K=e.container,z=e.autoFocus,V=e.enforceFocus,U=e.restoreFocus,$=e.restoreFocusOptions,_=e.onEntered,q=e.onExit,G=e.onExiting,J=e.onEnter,Q=e.onEntering,X=e.onExited,Y=e.backdropClassName,ee=e.manager,ne=(0,a.Z)(e,P),te=(0,b.useState)({}),oe=(0,r.Z)(te,2),re=oe[0],ae=oe[1],ie=(0,b.useState)(!1),se=(0,r.Z)(ie,2),le=se[0],ce=se[1],ue=(0,b.useRef)(!1),de=(0,b.useRef)(!1),fe=(0,b.useRef)(null),ve=(0,h.Z)(),he=(0,r.Z)(ve,2),me=he[0],ge=he[1],pe=(0,g.Z)(n,ge),Ze=(0,m.Z)(H),be=(0,C.SC)();t=(0,C.vE)(t,"modal");var ye=(0,b.useMemo)((function(){return{onHide:Ze}}),[Ze]);function Ee(){return ee||(0,E.t)({isRTL:be})}function ke(e){if(u.Z){var n=Ee().getScrollbarWidth()>0,t=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;ae({paddingRight:n&&!t?v():void 0,paddingLeft:!n&&t?v():void 0})}}var xe=(0,m.Z)((function(){me&&ke(me.dialog)}));(0,p.Z)((function(){(0,f.Z)(window,"resize",xe),null==fe.current||fe.current()}));var we=function(){ue.current=!0},Ne=function(e){ue.current&&me&&e.target===me.dialog&&(de.current=!0),ue.current=!1},Ce=function(){ce(!0),fe.current=(0,Z.Z)(me.dialog,(function(){ce(!1)}))},Re=function(e){"static"!==B?de.current||e.target!==e.currentTarget?de.current=!1:null==H||H():function(e){e.target===e.currentTarget&&Ce()}(e)},je=(0,b.useCallback)((function(e){return(0,R.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),Y,!D&&"show")}))}),[D,Y,t]),Oe=(0,i.Z)((0,i.Z)({},s),re);Oe.display="block";return(0,R.jsx)(N.Z.Provider,{value:ye,children:(0,R.jsx)(y.Z,{show:S,ref:pe,backdrop:B,container:K,keyboard:!0,autoFocus:z,enforceFocus:V,restoreFocus:U,restoreFocusOptions:$,onEscapeKeyDown:function(e){L||"static"!==B?L&&A&&A(e):(e.preventDefault(),Ce())},onShow:M,onHide:H,onEnter:function(e,n){e&&ke(e),null==J||J(e,n)},onEntering:function(e,n){null==Q||Q(e,n),(0,c.ZP)(window,"resize",xe)},onEntered:_,onExit:function(e){null==fe.current||fe.current(),null==q||q(e)},onExiting:G,onExited:function(e){e&&(e.style.display=""),null==X||X(e),(0,f.Z)(window,"resize",xe)},manager:Ee(),transition:D?W:void 0,backdropTransition:D?I:void 0,renderBackdrop:je,renderDialog:function(e){return(0,R.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Oe,className:l()(o,t,le&&"".concat(t,"-static")),onClick:B?Re:void 0,onMouseUp:Ne,"aria-label":F,"aria-labelledby":O,"aria-describedby":T,children:(0,R.jsx)(j,(0,i.Z)((0,i.Z)({},ne),{},{onMouseDown:we,className:k,contentClassName:x,children:w}))}))}})})}));K.displayName="Modal",K.defaultProps=H;var z=Object.assign(K,{Body:w,Header:L,Title:M,Footer:F,Dialog:T,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},99820:function(e,n,t){var o=t(72791).createContext({onHide:function(){}});n.Z=o},11752:function(e,n,t){t.d(n,{Z:function(){return a}});var o=t(61120);function r(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,o.Z)(e)););return e}function a(){return a="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var o=r(e,n);if(o){var a=Object.getOwnPropertyDescriptor(o,n);return a.get?a.get.call(arguments.length<3?e:t):a.value}},a.apply(this,arguments)}}}]);
//# sourceMappingURL=5316.770c5292.chunk.js.map