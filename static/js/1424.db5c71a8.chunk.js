"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[1424],{95441:function(e,a,n){n.r(a),n.d(a,{default:function(){return F}});var t=n(29439),s=n(72791),r=n(2461),i=n(89743),c=n(2677),l=n(9140),o=n(57644),d=n(17858),u=n(11087),m=n(4942),f={data:""},g=function(e){return"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||f},x=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,p=/\/\*[^]*?\*\/|  +/g,h=/\n+/g,v=function e(a,n){var t="",s="",r="",i=function(i){var l=a[i];"@"==i[0]?"i"==i[1]?t=i+" "+l+";":s+="f"==i[1]?e(l,i):i+"{"+e(l,"k"==i[1]?"":n)+"}":"object"==typeof l?s+=e(l,n?n.replace(/([^,])+/g,(function(e){return i.replace(/(^:.*)|([^,])+/g,(function(a){return/&/.test(a)?a.replace(/&/g,e):e?e+" "+a:a}))})):i):null!=l&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=e.p?e.p(i,l):i+":"+l+";"),c=i};for(var c in a)i(c);return t+(n&&r?n+"{"+r+"}":r)+s},N={},j=function e(a){if("object"==typeof a){var n="";for(var t in a)n+=t+e(a[t]);return n}return a},b=function(e,a,n,t,s){var r=j(e),i=N[r]||(N[r]=function(e){for(var a=0,n=11;a<e.length;)n=101*n+e.charCodeAt(a++)>>>0;return"go"+n}(r));if(!N[i]){var c=r!==e?e:function(e){for(var a,n,t=[{}];a=x.exec(e.replace(p,""));)a[4]?t.shift():a[3]?(n=a[3].replace(h," ").trim(),t.unshift(t[0][n]=t[0][n]||{})):t[0][a[1]]=a[2].replace(h," ").trim();return t[0]}(e);N[i]=v(s?(0,m.Z)({},"@keyframes "+i,c):c,n?"":"."+i)}var l=n&&N.g?N.g:null;return n&&(N.g=N[i]),function(e,a,n,t){t?a.data=a.data.replace(t,e):-1===a.data.indexOf(e)&&(a.data=n?e+a.data:a.data+e)}(N[i],a,t,l),i},Z=function(e,a,n){return e.reduce((function(e,t,s){var r=a[s];if(r&&r.call){var i=r(n),c=i&&i.props&&i.props.className||/^go/.test(i)&&i;r=c?"."+c:i&&"object"==typeof i?i.props?"":v(i,""):!1===i?"":i}return e+t+(null==r?"":r)}),"")};function y(e){var a=this||{},n=e.call?e(a.p):e;return b(n.unshift?n.raw?Z(n,[].slice.call(arguments,1),a.p):n.reduce((function(e,n){return Object.assign(e,n&&n.call?n(a.p):n)}),{}):n,g(a.target),a.g,a.o,a.k)}y.bind({g:1}),y.bind({k:1});function w(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.filter((function(e){return e})).join(" ")}var E=y({alignItems:"center",background:"var(--rti-tag)",borderRadius:"var(--rti-radius)",display:"inline-flex",justifyContent:"center",padding:"var(--rti-tag-padding)",button:{background:"none",border:0,borderRadius:"50%",cursor:"pointer",lineHeight:"inherit",padding:"0 var(--rti-s)","&:hover":{color:"var(--rti-tag-remove)"}}});function k(e){var a=e.text,n=e.remove,t=e.disabled,r=e.className;return s.createElement("span",{className:w("rti--tag",E,r)},s.createElement("span",null,a),!t&&s.createElement("button",{type:"button",onClick:function(e){e.stopPropagation(),n(a)},"aria-label":"remove "+a},"\u2715"))}!function(e,a,n,t){v.p=a,e,n,t}(s.createElement);var L=y({"--rti-bg":"#fff","--rti-border":"#ccc","--rti-main":"#3182ce","--rti-radius":"0.375rem","--rti-s":"0.5rem","--rti-tag":"#edf2f7","--rti-tag-remove":"#e53e3e","--rti-tag-padding":"0.15rem 0.25rem","*":{boxSizing:"border-box",transition:"all 0.2s ease"},alignItems:"center",bg:"var(--rti-bg)",border:"1px solid var(--rti-border)",borderRadius:"var(--rti-radius)",display:"flex",flexWrap:"wrap",gap:"var(--rti-s)",lineHeight:1.4,padding:"var(--rti-s)","&:focus-within":{borderColor:"var(--rti-main)",boxShadow:"var(--rti-main) 0px 0px 0px 1px"}}),C=y({border:0,outline:0,fontSize:"inherit",lineHeight:"inherit",width:"50%"}),S=["Enter"],T=function(e){var a=e.name,n=e.placeHolder,t=e.value,r=e.onChange,i=e.onBlur,c=e.seprators,l=e.onExisting,o=e.onRemoved,d=e.disabled,u=e.isEditOnRemove,m=e.beforeAddValidate,f=e.onKeyUp,g=e.classNames,x=(0,s.useState)(t||[]),p=x[0],h=x[1];(0,s.useEffect)((function(){r&&r(p)}),[p]),(0,s.useEffect)((function(){JSON.stringify(t)!==JSON.stringify(p)&&h(t)}),[t]);var v=function(e){h(p.filter((function(a){return a!==e}))),o&&o(e)};return s.createElement("div",{"aria-labelledby":a,className:w("rti--container",L)},p.map((function(e){return s.createElement(k,{key:e,className:null==g?void 0:g.tag,text:e,remove:v,disabled:d})})),s.createElement("input",{className:w("rti--input",C,null==g?void 0:g.input),type:"text",name:a,placeholder:n,onKeyDown:function(e){e.stopPropagation();var a=e.target.value;if("Backspace"===e.key&&p.length&&!a&&(e.target.value=u?p.at(-1)+" ":"",h([].concat(p.slice(0,-1)))),a&&(c||S).includes(e.key)){if(m&&!m(a,p))return;if(p.includes(a))return void(l&&l(a));h([].concat(p,[a])),e.target.value="",e.preventDefault()}},onBlur:i,disabled:d,onKeyUp:f}))},P=n(18622),U=n(80184),O=function(){var e=s.useState(["Javascript","ReactJs","AngularJs","VueJs","jQuery","Script","Net"]),a=(0,t.Z)(e,2),n=a[0],m=a[1];function f(){var e=s.useState(""),a=(0,t.Z)(e,2),n=a[0],r=a[1];return(0,U.jsx)(P.ZP,{onChange:function(){r(n)},options:[{value:"category-2",label:"Firefox"},{value:"category-3",label:"Chrome"},{value:"category-4",label:"Safari"},{value:"category-5",label:"Opera"},{value:"category-6",label:"Internet Explorer"}],className:"mt-2 ",classNamePrefix:"selectproduct",isSearchable:!0,placeholder:"Firefox"})}var g=s.useState(!1),x=(0,t.Z)(g,2),p=x[0],h=x[1],v=s.useState(!1),N=(0,t.Z)(v,2),j=N[0],b=N[1],Z=s.useState(!1),y=(0,t.Z)(Z,2),w=y[0],E=y[1],k=s.useState(!1),L=(0,t.Z)(k,2),C=L[0],S=L[1];return(0,U.jsxs)("div",{children:[(0,U.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,U.jsx)("div",{className:"left-content",children:(0,U.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"TAGS"})}),(0,U.jsx)("div",{className:"justify-content-center mt-2",children:(0,U.jsxs)(r.Z,{className:"breadcrumb",children:[(0,U.jsx)(r.Z.Item,{className:"breadcrumb-item tx-15",href:"#",children:"Elements"}),(0,U.jsx)(r.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Tags"})]})})]}),(0,U.jsxs)(i.Z,{children:[(0,U.jsx)(c.Z,{xl:6,lg:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsxs)("div",{className:"d-flex",children:[(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"DEFAULT TAG"}),(0,U.jsx)(o.Z,{className:"ms-auto",children:(0,U.jsx)(o.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return h(!p)},className:"showcode d-flex ms-auto "})})]}),(0,U.jsx)("p",{className:"mg-b-20",children:"It is Very Easy to Customize and it uses in your website aplication."}),(0,U.jsxs)("div",{className:"text-wrap",children:[(0,U.jsx)("div",{className:"example",children:(0,U.jsxs)("div",{className:"tags",children:[(0,U.jsxs)("span",{className:"tag",children:["First tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag",children:["Second tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag",children:["Third tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag",children:["Fourth tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]})]})}),(0,U.jsx)(d.Z,{in:p,className:"mt-2",children:(0,U.jsx)("pre",{children:(0,U.jsx)("code",{children:'\n<div className="text-wrap">\n\t<div className="example">\n        <div className="tags">\n        \t<span className="tag">First tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>\n        \t<span className="tag">Second tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>\n        \t<span className="tag">Third tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>\n        \t<span className="tag">Fourth tag<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>\n        </div>\n\t</div>\n</div>\n\t\t\t\t\t\t\t\t\t\t\t'})})})]})]})})}),(0,U.jsx)(c.Z,{xl:6,lg:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsxs)("div",{className:"d-flex",children:[(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"Link Tag"}),(0,U.jsx)(o.Z,{className:"ms-auto",children:(0,U.jsx)(o.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return b(!j)},className:"showcode d-flex ms-auto "})})]}),(0,U.jsx)("p",{className:"mg-b-20",children:"It is Very Easy to Customize and it uses in your website aplication."}),(0,U.jsxs)("div",{className:"text-wrap",children:[(0,U.jsx)("div",{className:"example",children:(0,U.jsxs)("div",{className:"tags",children:[(0,U.jsxs)("span",{className:"tag tag-rounded",children:["First tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon rounded-pill",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-rounded",children:["Second tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon rounded-pill",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-rounded",children:["Third tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon rounded-pill",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-rounded",children:["Fourth tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon rounded-pill ",children:(0,U.jsx)("i",{className:"fe fe-x"})})]})]})}),(0,U.jsx)(d.Z,{in:j,className:"mt-2",children:(0,U.jsx)("pre",{children:(0,U.jsx)("code",{children:'\n<div className="text-wrap">\n\t<div className="example">\n\t\t<div className="tags">\n            <span className="tag tag-rounded">First tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>\n            <span className="tag tag-rounded">Second tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>\n            <span className="tag tag-rounded">Third tag<Link to="#" className="tag-addon rounded-pill"><i className="fe fe-x"></i></Link></span>\n            <span className="tag tag-rounded">Fourth tag<Link to="#" className="tag-addon rounded-pill "><i className="fe fe-x"></i></Link></span>\n\t\t</div>\n\t</div>\n</div>\n\t\t\t\t\t\t\t\t\t\t\t'})})})]})]})})}),(0,U.jsx)(c.Z,{xl:6,lg:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsxs)("div",{className:"d-flex",children:[(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"Default Tags Addon"}),(0,U.jsx)(o.Z,{className:"ms-auto",children:(0,U.jsx)(o.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return E(!w)},className:"showcode d-flex ms-auto "})})]}),(0,U.jsx)("p",{className:"mg-b-20",children:"It is Very Easy to Customize and it uses in your website aplication."}),(0,U.jsxs)("div",{className:"text-wrap",children:[(0,U.jsx)("div",{className:"example",children:(0,U.jsxs)("div",{className:"tags",children:[(0,U.jsxs)("span",{className:"tag tag-default bg-light",children:["One",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-default  bg-light",children:["Two",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-default  bg-light",children:["Three",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]}),(0,U.jsxs)("span",{className:"tag tag-default  bg-light",children:["Four",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon",children:(0,U.jsx)("i",{className:"fe fe-x"})})]})]})}),(0,U.jsx)(d.Z,{in:w,className:"mt-2",children:(0,U.jsx)("pre",{children:(0,U.jsx)("code",{children:'\n<div className="text-wrap">\n    <div className="example">\n    \t<div className="tags">\n    \t\t<span className="tag tag-default bg-light">\n    \t\t\tOne\n    \t\t\t<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>\n    \t\t</span>\n    \t\t<span className="tag tag-default  bg-light">\n    \t\t\tTwo\n    \t\t\t<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>\n    \t\t</span>\n    \t\t<span className="tag tag-default  bg-light">\n    \t\t\tThree\n    \t\t\t<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>\n    \t\t</span>\n    \t\t<span className="tag tag-default  bg-light">\n    \t\t\tFour\n    \t\t\t<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link>\n    \t\t</span>\n    \t</div>\n    </div>\n</div>\n\t\t\t\t\t\t\t\t\t\t'})})})]})]})})}),(0,U.jsx)(c.Z,{xl:6,lg:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsxs)("div",{className:"d-flex",children:[(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"Colored tags"}),(0,U.jsx)(o.Z,{className:"ms-auto",children:(0,U.jsx)(o.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return S(!C)},className:"showcode d-flex ms-auto "})})]}),(0,U.jsx)("p",{className:"mg-b-20",children:"It is Very Easy to Customize and it uses in your website aplication."}),(0,U.jsxs)("div",{className:"text-wrap",children:[(0,U.jsx)("div",{className:"example",children:(0,U.jsxs)("div",{className:"tags",children:[(0,U.jsxs)("span",{className:"tag tag-primary br-5",children:["primary tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-primary",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]}),(0,U.jsxs)("span",{className:"tag tag-secondary br-5",children:["secondary tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-secondary",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]}),(0,U.jsxs)("span",{className:"tag tag-success br-5",children:["success tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-success",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]}),(0,U.jsxs)("span",{className:"tag tag-warning br-5",children:["warning tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-warning",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]}),(0,U.jsxs)("span",{className:"tag tag-teal br-5",children:["teal tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-teal",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]}),(0,U.jsxs)("span",{className:"tag tag-danger br-5",children:["danger tag",(0,U.jsx)(u.rU,{to:"#",className:"tag-addon bg-danger",children:(0,U.jsx)("i",{className:"fe fe-x"})})," "]})]})}),(0,U.jsx)(d.Z,{in:C,className:"mt-2",children:(0,U.jsx)("pre",{children:(0,U.jsx)("code",{children:'\n<div className="text-wrap">\n    <div className="example">\n    \t<div className="tags">\n    \t\t<span className="tag tag-primary br-5">primary tag<Link to="#" className="tag-addon bg-primary"><i className="fe fe-x"></i></Link> </span>\n    \t\t<span className="tag tag-secondary br-5">secondary tag<Link to="#" className="tag-addon bg-secondary"><i className="fe fe-x"></i></Link> </span>\n    \t\t<span className="tag tag-success br-5">success tag<Link to="#" className="tag-addon bg-success"><i className="fe fe-x"></i></Link> </span>\n    \t\t<span className="tag tag-warning br-5">warning tag<Link to="#" className="tag-addon bg-warning"><i className="fe fe-x"></i></Link> </span>\n    \t\t<span className="tag tag-teal br-5">teal tag<Link to="#" className="tag-addon bg-teal"><i className="fe fe-x"></i></Link> </span>\n    \t\t<span className="tag tag-danger br-5">danger tag<Link to="#" className="tag-addon bg-danger"><i className="fe fe-x"></i></Link> </span>\n    \t</div>\n    </div>\n</div>\n\t\t\t\t\t\t\t\t\t\t\t'})})})]})]})})}),(0,U.jsx)(c.Z,{lg:12,xl:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsx)("div",{className:"d-flex",children:(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"Input Tags"})}),(0,U.jsx)("p",{className:"mg-b-20",children:"It is Very Easy to Customize and it uses in your website aplication."}),(0,U.jsx)("div",{className:"text-wrap",children:(0,U.jsx)("div",{className:"",children:(0,U.jsx)("div",{className:"form-group",children:(0,U.jsx)("div",{className:"bootstrap-tagsinput",children:(0,U.jsx)(T,{value:n,onChange:m,name:"courses"})})})})})]})})}),(0,U.jsx)(c.Z,{lg:12,xl:12,children:(0,U.jsx)(l.Z,{children:(0,U.jsxs)(l.Z.Body,{children:[(0,U.jsx)("div",{className:"main-content-label mg-b-5",children:"Multiple select Tags"}),(0,U.jsx)("p",{className:"mg-b-10",children:"Multiple Select"}),(0,U.jsx)(f,{})]})})})]})]})};O.defaultProps={};var F=O},73201:function(e,a,n){var t=n(72791),s=function(e){return e&&"function"!==typeof e?function(a){e.current=a}:e};a.Z=function(e,a){return(0,t.useMemo)((function(){return function(e,a){var n=s(e),t=s(a);return function(e){n&&n(e),t&&t(e)}}(e,a)}),[e,a])}},3070:function(e,a,n){var t=n(97357),s=!1,r=!1;try{var i={get passive(){return s=!0},get once(){return r=s=!0}};t.Z&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(c){}a.ZP=function(e,a,n,t){if(t&&"boolean"!==typeof t&&!r){var i=t.once,c=t.capture,l=n;!r&&i&&(l=n.__once||function e(t){this.removeEventListener(a,e,c),n.call(this,t)},n.__once=l),e.addEventListener(a,l,s?t:c)}e.addEventListener(a,n,t)}},97357:function(e,a){a.Z=!("undefined"===typeof window||!window.document||!window.document.createElement)},75427:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(78376);function s(e,a){return function(e){var a=(0,t.Z)(e);return a&&a.defaultView||window}(e).getComputedStyle(e,a)}var r=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var l=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var o=function(e,a){var n="",t="";if("string"===typeof a)return e.style.getPropertyValue(c(a))||s(e).getPropertyValue(c(a));Object.keys(a).forEach((function(s){var r=a[s];r||0===r?!function(e){return!(!e||!l.test(e))}(s)?n+=c(s)+": "+r+";":t+=s+"("+r+") ":e.style.removeProperty(c(s))})),t&&(n+="transform: "+t+";"),e.style.cssText+=";"+n}},92899:function(e,a,n){var t=n(3070),s=n(36382);a.Z=function(e,a,n,r){return(0,t.ZP)(e,a,n,r),function(){(0,s.Z)(e,a,n,r)}}},78376:function(e,a,n){function t(e){return e&&e.ownerDocument||document}n.d(a,{Z:function(){return t}})},36382:function(e,a){a.Z=function(e,a,n,t){var s=t&&"boolean"!==typeof t?t.capture:t;e.removeEventListener(a,n,s),n.__once&&e.removeEventListener(a,n.__once,s)}},33690:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(75427),s=n(92899);function r(e,a,n){void 0===n&&(n=5);var t=!1,r=setTimeout((function(){t||function(e,a,n,t){if(void 0===n&&(n=!1),void 0===t&&(t=!0),e){var s=document.createEvent("HTMLEvents");s.initEvent(a,n,t),e.dispatchEvent(s)}}(e,"transitionend",!0)}),a+n),i=(0,s.Z)(e,"transitionend",(function(){t=!0}),{once:!0});return function(){clearTimeout(r),i()}}function i(e,a,n,i){null==n&&(n=function(e){var a=(0,t.Z)(e,"transitionDuration")||"",n=-1===a.indexOf("ms")?1e3:1;return parseFloat(a)*n}(e)||0);var c=r(e,n,i),l=(0,s.Z)(e,"transitionend",a);return function(){c(),l()}}},9140:function(e,a,n){n.d(a,{Z:function(){return T}});var t=n(1413),s=n(45987),r=n(81694),i=n.n(r),c=n(72791),l=n(10162),o=n(66543),d=n(27472),u=n(80184),m=["bsPrefix","className","variant","as"],f=c.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,c=e.variant,o=e.as,d=void 0===o?"img":o,f=(0,s.Z)(e,m),g=(0,l.vE)(n,"card-img");return(0,u.jsx)(d,(0,t.Z)({ref:a,className:i()(c?"".concat(g,"-").concat(c):g,r)},f))}));f.displayName="CardImg";var g=f,x=n(96040),p=["bsPrefix","className","as"],h=c.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,o=e.as,d=void 0===o?"div":o,m=(0,s.Z)(e,p),f=(0,l.vE)(n,"card-header"),g=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,u.jsx)(x.Z.Provider,{value:g,children:(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:a},m),{},{className:i()(r,f)}))})}));h.displayName="CardHeader";var v=h,N=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,d.Z)("h5"),b=(0,d.Z)("h6"),Z=(0,o.Z)("card-body"),y=(0,o.Z)("card-title",{Component:j}),w=(0,o.Z)("card-subtitle",{Component:b}),E=(0,o.Z)("card-link",{Component:"a"}),k=(0,o.Z)("card-text",{Component:"p"}),L=(0,o.Z)("card-footer"),C=(0,o.Z)("card-img-overlay"),S=c.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,c=e.bg,o=e.text,d=e.border,m=e.body,f=e.children,g=e.as,x=void 0===g?"div":g,p=(0,s.Z)(e,N),h=(0,l.vE)(n,"card");return(0,u.jsx)(x,(0,t.Z)((0,t.Z)({ref:a},p),{},{className:i()(r,h,c&&"bg-".concat(c),o&&"text-".concat(o),d&&"border-".concat(d)),children:m?(0,u.jsx)(Z,{children:f}):f}))}));S.displayName="Card",S.defaultProps={body:!1};var T=Object.assign(S,{Img:g,Title:y,Subtitle:w,Body:Z,Link:E,Text:k,Header:v,Footer:L,ImgOverlay:C})},96040:function(e,a,n){var t=n(72791).createContext(null);t.displayName="CardHeaderContext",a.Z=t},17858:function(e,a,n){n.d(a,{Z:function(){return y}});var t=n(1413),s=n(45987),r=n(4942),i=n(81694),c=n.n(i),l=n(75427),o=n(72791),d=n(26752),u=n(71380);var m,f=function(){for(var e=arguments.length,a=new Array(e),n=0;n<e;n++)a[n]=arguments[n];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var n=arguments.length,t=new Array(n),s=0;s<n;s++)t[s]=arguments[s];e.apply(this,t),a.apply(this,t)}}),null)},g=n(67202),x=n(85007),p=n(80184),h=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],v={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function N(e,a){var n=a["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],t=v[e];return n+parseInt((0,l.Z)(a,t[0]),10)+parseInt((0,l.Z)(a,t[1]),10)}var j=(m={},(0,r.Z)(m,d.Wj,"collapse"),(0,r.Z)(m,d.Ix,"collapsing"),(0,r.Z)(m,d.d0,"collapsing"),(0,r.Z)(m,d.cn,"collapse show"),m),b={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:N},Z=o.forwardRef((function(e,a){var n=e.onEnter,r=e.onEntering,i=e.onEntered,l=e.onExit,d=e.onExiting,m=e.className,v=e.children,b=e.dimension,Z=void 0===b?"height":b,y=e.getDimensionValue,w=void 0===y?N:y,E=(0,s.Z)(e,h),k="function"===typeof Z?Z():Z,L=(0,o.useMemo)((function(){return f((function(e){e.style[k]="0"}),n)}),[k,n]),C=(0,o.useMemo)((function(){return f((function(e){var a="scroll".concat(k[0].toUpperCase()).concat(k.slice(1));e.style[k]="".concat(e[a],"px")}),r)}),[k,r]),S=(0,o.useMemo)((function(){return f((function(e){e.style[k]=null}),i)}),[k,i]),T=(0,o.useMemo)((function(){return f((function(e){e.style[k]="".concat(w(k,e),"px"),(0,g.Z)(e)}),l)}),[l,w,k]),P=(0,o.useMemo)((function(){return f((function(e){e.style[k]=null}),d)}),[k,d]);return(0,p.jsx)(x.Z,(0,t.Z)((0,t.Z)({ref:a,addEndListener:u.Z},E),{},{"aria-expanded":E.role?E.in:null,onEnter:L,onEntering:C,onEntered:S,onExit:T,onExiting:P,childRef:v.ref,children:function(e,a){return o.cloneElement(v,(0,t.Z)((0,t.Z)({},a),{},{className:c()(m,v.props.className,j[e],"width"===k&&"collapse-horizontal")}))}}))}));Z.defaultProps=b;var y=Z},89743:function(e,a,n){var t=n(1413),s=n(45987),r=n(81694),i=n.n(r),c=n(72791),l=n(10162),o=n(80184),d=["bsPrefix","className","as"],u=c.forwardRef((function(e,a){var n=e.bsPrefix,r=e.className,c=e.as,u=void 0===c?"div":c,m=(0,s.Z)(e,d),f=(0,l.vE)(n,"row"),g=(0,l.pi)(),x=(0,l.zG)(),p="".concat(f,"-cols"),h=[];return g.forEach((function(e){var a,n=m[e];delete m[e],a=null!=n&&"object"===typeof n?n.cols:n;var t=e!==x?"-".concat(e):"";null!=a&&h.push("".concat(p).concat(t,"-").concat(a))})),(0,o.jsx)(u,(0,t.Z)((0,t.Z)({ref:a},m),{},{className:i().apply(void 0,[r,f].concat(h))}))}));u.displayName="Row",a.Z=u},85007:function(e,a,n){var t=n(1413),s=n(45987),r=n(72791),i=n(26752),c=n(73201),l=n(37002),o=n(80184),d=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],u=r.forwardRef((function(e,a){var n=e.onEnter,u=e.onEntering,m=e.onEntered,f=e.onExit,g=e.onExiting,x=e.onExited,p=e.addEndListener,h=e.children,v=e.childRef,N=(0,s.Z)(e,d),j=(0,r.useRef)(null),b=(0,c.Z)(j,v),Z=function(e){b((0,l.Z)(e))},y=function(e){return function(a){e&&j.current&&e(j.current,a)}},w=(0,r.useCallback)(y(n),[n]),E=(0,r.useCallback)(y(u),[u]),k=(0,r.useCallback)(y(m),[m]),L=(0,r.useCallback)(y(f),[f]),C=(0,r.useCallback)(y(g),[g]),S=(0,r.useCallback)(y(x),[x]),T=(0,r.useCallback)(y(p),[p]);return(0,o.jsx)(i.ZP,(0,t.Z)((0,t.Z)({ref:a},N),{},{onEnter:w,onEntered:k,onEntering:E,onExit:L,onExited:S,onExiting:C,addEndListener:T,nodeRef:j,children:"function"===typeof h?function(e,a){return h(e,(0,t.Z)((0,t.Z)({},a),{},{ref:Z}))}:r.cloneElement(h,{ref:Z})}))}));a.Z=u},27472:function(e,a,n){var t=n(1413),s=n(72791),r=n(81694),i=n.n(r),c=n(80184);a.Z=function(e){return s.forwardRef((function(a,n){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},a),{},{ref:n,className:i()(a.className,e)}))}))}},37002:function(e,a,n){n.d(a,{Z:function(){return s}});var t=n(54164);function s(e){return e&&"setState"in e?t.findDOMNode(e):null!=e?e:null}},71380:function(e,a,n){n.d(a,{Z:function(){return i}});var t=n(75427),s=n(33690);function r(e,a){var n=(0,t.Z)(e,a)||"",s=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*s}function i(e,a){var n=r(e,"transitionDuration"),t=r(e,"transitionDelay"),i=(0,s.Z)(e,(function(n){n.target===e&&(i(),a(n))}),n+t)}},67202:function(e,a,n){function t(e){e.offsetHeight}n.d(a,{Z:function(){return t}})},87462:function(e,a,n){function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},t.apply(this,arguments)}n.d(a,{Z:function(){return t}})}}]);
//# sourceMappingURL=1424.db5c71a8.chunk.js.map