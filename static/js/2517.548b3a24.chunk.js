"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[2517],{92517:function(a,s,e){e.r(s),e.d(s,{Toasts:function(){return x}});var t=e(29439),n=e(72791),i=e(2461),l=e(89743),o=e(2677),r=e(9140),c=e(57644),d=e(16657),m=e(43360),h=e(17858),u=e(80184);function x(){var a=n.useState(!0),s=(0,t.Z)(a,2),e=s[0],x=s[1],N=n.useState(!0),j=(0,t.Z)(N,2),f=j[0],b=j[1],v=n.useState(!1),p=(0,t.Z)(v,2),g=p[0],Z=p[1],y=n.useState(!0),w=(0,t.Z)(y,2),T=w[0],C=w[1],k=n.useState(!1),B=(0,t.Z)(k,2),E=B[0],S=B[1],H=n.useState(!0),I=(0,t.Z)(H,2),L=I[0],R=I[1],D=n.useState(!0),A=(0,t.Z)(D,2),M=A[0],J=A[1],P=n.useState(!1),O=(0,t.Z)(P,2),V=O[0],q=O[1],U=n.useState(!1),W=(0,t.Z)(U,2),z=W[0],F=W[1];var G=n.useState([{id:"1",TITLE:"bg-primary"},{id:"2",TITLE:"bg-secondary"},{id:"3",TITLE:"bg-success"},{id:"4",TITLE:"bg-info"}]),K=(0,t.Z)(G,2),Q=K[0],X=K[1];return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,u.jsx)("div",{className:"left-content",children:(0,u.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"TOAST"})}),(0,u.jsx)("div",{className:"justify-content-center mt-2",children:(0,u.jsxs)(i.Z,{className:"breadcrumb",children:[(0,u.jsx)(i.Z.Item,{className:"breadcrumb-item tx-15",href:"#",children:"Elements"}),(0,u.jsx)(i.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Toast"})]})})]}),(0,u.jsx)(l.Z,{children:(0,u.jsxs)(o.Z,{xl:12,lg:12,children:[(0,u.jsx)(r.Z,{className:"custom-card",id:"basic",children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("h6",{className:"card-title mb-1",children:"Basic Example"}),(0,u.jsx)(c.Z,{className:"ms-auto",children:(0,u.jsx)(c.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return Z(!g)},className:"showcode d-flex ms-auto "})})]}),(0,u.jsx)("p",{className:"text-muted card-sub-title",children:"Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your \u201ctoasted\u201d content and strongly encourage a dismiss button."})]}),(0,u.jsxs)("div",{className:"text-wrap",children:[(0,u.jsx)("div",{className:"example",children:(0,u.jsx)("div",{className:"demo-static-toast",children:f?(0,u.jsxs)(d.Z,{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)(d.Z.Header,{className:"toast-header",children:[(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"text-muted me-3",children:"11 mins ago"}),(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close",onClick:function(){return b(!1)},"data-bs-dismiss":"toast",type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)(d.Z.Body,{className:"toast-body",children:"Hello, world! This is a toast message."})]}):null})}),(0,u.jsx)(h.Z,{in:g,className:"mt-2",children:(0,u.jsx)("pre",{children:(0,u.jsx)("code",{children:'\n<div className="demo-static-toast">\n  {Basic ? (\n    <Toast\n      aria-atomic="true"\n      aria-live="assertive"\n      className="toast fade show"\n      role="alert"\n      data-bs-autohide="false"\n    >\n      <Toast.Header className="toast-header">\n        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>\n        <small className="text-muted me-3">11 mins ago</small>\n        <Button\n          variant=""\n          aria-label="Close"\n          className="ms-2 mb-1 close"\n          onClick={() => setBasic(false)}\n          data-bs-dismiss="toast"\n          type="button"\n        >\n          <span aria-hidden="true">&times;</span>\n        </Button>\n      </Toast.Header>\n      <Toast.Body className="toast-body">\n        Hello, world! This is a toast message.\n      </Toast.Body>\n    </Toast>\n  ) : null}\n</div>\n                        '})})})]})]})}),(0,u.jsx)(r.Z,{className:"custom-card",id:"stacking",children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("h6",{className:"card-title mb-1",children:"Stacking"}),(0,u.jsx)(c.Z,{className:"ms-auto",children:(0,u.jsx)(c.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return S(!E)},className:"showcode d-flex ms-auto "})})]}),(0,u.jsx)("p",{className:"text-muted card-sub-title",children:"When you have multiple toasts, we default to vertiaclly stacking them in a readable manner."})]}),(0,u.jsx)("div",{className:"text-wrap",children:(0,u.jsxs)("div",{className:"example",children:[(0,u.jsxs)("div",{className:"demo-static-toast",children:[(0,u.jsx)(u.Fragment,{children:T?(0,u.jsxs)(d.Z,{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)(d.Z.Header,{className:"toast-header",children:[(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"text-muted me-3",children:"Just now"}),(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close",onClick:function(){return C(!1)},"data-bs-dismiss":"toast",type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)(d.Z.Body,{className:"toast-body",children:"See? Just like this."})]}):null}),L?(0,u.jsxs)(d.Z,{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)(d.Z.Header,{className:"toast-header",children:[(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"text-muted me-3",children:"11 mins ago"})," ",(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close tx-normal","data-bs-dismiss":"toast",onClick:function(){return R(!1)},type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)(d.Z.Body,{className:"toast-body",children:"Hello, world! This is a toast message."})]}):null]}),(0,u.jsx)(h.Z,{in:E,className:"mt-2",children:(0,u.jsx)("pre",{children:(0,u.jsx)("code",{children:'\n<div className="demo-static-toast">\n  <>\n    {Stacking ? (\n      <Toast\n        aria-atomic="true"\n        aria-live="assertive"\n        className="toast fade show"\n        role="alert"\n        data-bs-autohide="false"\n      >\n        <Toast.Header className="toast-header">\n          <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>\n          <small className="text-muted me-3">Just now</small>\n          <Button\n            variant=""\n            aria-label="Close"\n            className="ms-2 mb-1 close"\n            onClick={() => setStacking(false)}\n            data-bs-dismiss="toast"\n            type="button"\n          >\n            <span aria-hidden="true">&times;</span>\n          </Button>\n        </Toast.Header>\n        <Toast.Body className="toast-body">See? Just like this.</Toast.Body>\n      </Toast>\n    ) : null}\n  </>\n  {Stacking2 ? (\n    <Toast\n      aria-atomic="true"\n      aria-live="assertive"\n      className="toast fade show"\n      role="alert"\n      data-bs-autohide="false"\n    >\n      <Toast.Header className="toast-header">\n        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>\n        <small className="text-muted me-3">11 mins ago</small>{" "}\n        <Button\n          variant=""\n          aria-label="Close"\n          className="ms-2 mb-1 close tx-normal"\n          data-bs-dismiss="toast"\n          onClick={() => setStacking2(false)}\n          type="button"\n        >\n          <span aria-hidden="true">&times;</span>\n        </Button>\n      </Toast.Header>\n      <Toast.Body className="toast-body">\n        Hello, world! This is a toast message.\n      </Toast.Body>\n    </Toast>\n  ) : null}\n</div>\n                        '})})})]})})]})}),(0,u.jsx)(r.Z,{className:"custom-card",id:"place",children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("h6",{className:"card-title mb-1",children:"Placement"}),(0,u.jsx)(c.Z,{className:"ms-auto",children:(0,u.jsx)(c.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return q(!V)},className:"showcode d-flex ms-auto "})})]}),(0,u.jsx)("p",{className:"text-muted card-sub-title",children:"Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle."})]}),(0,u.jsx)("div",{className:"text-wrap mb-3",children:(0,u.jsx)("div",{className:"example",children:(0,u.jsx)("div",{className:"ht-150 pos-relative mb-3",children:(0,u.jsx)("div",{className:"demo-static-toast pos-absolute t-10 r-10",children:M?(0,u.jsxs)(d.Z,{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)(d.Z.Header,{className:"toast-header",children:[(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"text-muted me-3",children:"11 mins ago"})," ",(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close tx-normal",onClick:function(){return J(!1)},"data-bs-dismiss":"toast",type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)(d.Z.Body,{className:"toast-body",children:"Hello, world! This is a toast message."})]}):null})})})}),(0,u.jsxs)("div",{className:"text-wrap mb-3",children:[(0,u.jsx)("div",{className:"example",children:(0,u.jsx)("div",{className:"demo-static-toast d-flex justify-content-center align-items-center",children:e?(0,u.jsxs)(d.Z,{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)(d.Z.Header,{className:"toast-header",children:[(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"text-muted me-3",children:"11 mins ago"})," ",(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close tx-normal",onClick:function(){return x(!1)},"data-bs-dismiss":"toast",type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)(d.Z.Body,{className:"toast-body",children:"Hello, world! This is a toast message."})]}):null})}),(0,u.jsx)(h.Z,{in:V,className:"mt-2",children:(0,u.jsx)("pre",{children:(0,u.jsx)("code",{children:'\n<div className="demo-static-toast pos-absolute t-10 r-10">\n  {Right ? (\n    <Toast\n      aria-atomic="true"\n      aria-live="assertive"\n      className="toast fade show"\n      role="alert"\n      data-bs-autohide="false"\n    >\n      <Toast.Header className="toast-header">\n        <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>\n        <small className="text-muted me-3">11 mins ago</small>{" "}\n        <Button\n          variant=""\n          aria-label="Close"\n          className="ms-2 mb-1 close tx-normal"\n          onClick={() => setRight(false)}\n          data-bs-dismiss="toast"\n          type="button"\n        >\n          <span aria-hidden="true">&times;</span>\n        </Button>\n      </Toast.Header>\n      <Toast.Body className="toast-body">\n        Hello, world! This is a toast message.\n      </Toast.Body>\n    </Toast>\n  ) : null}\n</div>\n                          '})})})]})]})})]})}),(0,u.jsx)(l.Z,{children:(0,u.jsx)(o.Z,{xl:12,children:(0,u.jsx)(r.Z,{className:"custom-card",id:"tarns",children:(0,u.jsxs)(r.Z.Body,{children:[(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{className:"d-flex",children:[(0,u.jsx)("h6",{className:"card-title mb-1",children:"Color Toasts"}),(0,u.jsx)(c.Z,{className:"ms-auto",children:(0,u.jsx)(c.Z.Check,{label:"Show Code",type:"switch",id:"custom-switch",onClick:function(){return F(!z)},className:"showcode d-flex ms-auto "})})]}),(0,u.jsx)("p",{className:"text-muted card-sub-title",children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over."})]}),(0,u.jsxs)("div",{className:"text-wrap",children:[(0,u.jsx)("div",{className:"example",children:(0,u.jsx)(l.Z,{children:(0,u.jsx)(o.Z,{xl:12,children:(0,u.jsx)(l.Z,{children:Q.map((function(a,s){return(0,u.jsx)(o.Z,{xl:6,lg:6,md:12,children:(0,u.jsx)("div",{className:"demo-static-toast mb-2 mt-2",children:(0,u.jsxs)("div",{"aria-atomic":"true","aria-live":"assertive",className:"toast fade show",role:"alert","data-bs-autohide":"false",children:[(0,u.jsxs)("div",{className:"toast-header text-white p-2 ".concat(a.TITLE),children:[(0,u.jsx)("i",{className:"fe fe-home me-2"}),(0,u.jsx)("h6",{className:"tx-14 mg-b-0 mg-r-auto",children:"Notification"}),(0,u.jsx)("small",{className:"me-3",children:"11 mins ago"}),(0,u.jsx)(m.Z,{variant:"","aria-label":"Close",className:"ms-2 mb-1 close tx-normal",onClick:function(){return function(a){var s=Q.filter((function(s){return s.id!==a}));X(s)}(a.id)},"data-bs-dismiss":"toast",type:"button",children:(0,u.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),(0,u.jsx)("div",{className:"toast-body p-3",children:"Hello, world! This is a toast message."})]})})},s)}))})})})}),(0,u.jsx)(h.Z,{in:z,className:"mt-2",children:(0,u.jsx)("pre",{children:(0,u.jsx)("code",{children:'\n<Row>\n  {list.map((playerData, k) => (\n    <Col xl={6} lg={6} md={12} key={k}>\n      <div className="demo-static-toast mb-2 mt-2">\n        <div\n          aria-atomic="true"\n          aria-live="assertive"\n          className="toast fade show"\n          role="alert"\n          data-bs-autohide="false"\n        >\n          <div\n            className={toast-header text-white p-2 {playerData.TITLE}}\n          >\n            <i className="fe fe-home me-2"></i>\n            <h6 className="tx-14 mg-b-0 mg-r-auto">Notification</h6>\n            <small className="me-3">11 mins ago</small>\n            <Button\n              variant=""\n              aria-label="Close"\n              className="ms-2 mb-1 close tx-normal"\n              onClick={() => handleRemove(playerData.id)}\n              data-bs-dismiss="toast"\n              type="button"\n            >\n              <span aria-hidden="true">&times;</span>\n            </Button>\n          </div>\n          <div className="toast-body p-3">\n            Hello, world! This is a toast message.\n          </div>\n        </div>\n      </div>\n    </Col>\n  ))}\n</Row>\n                    '})})})]})]})})})})]})}x.defaultProps={},s.default=x},17858:function(a,s,e){e.d(s,{Z:function(){return y}});var t=e(1413),n=e(45987),i=e(4942),l=e(81694),o=e.n(l),r=e(75427),c=e(72791),d=e(26752),m=e(71380);var h,u=function(){for(var a=arguments.length,s=new Array(a),e=0;e<a;e++)s[e]=arguments[e];return s.filter((function(a){return null!=a})).reduce((function(a,s){if("function"!==typeof s)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===a?s:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];a.apply(this,t),s.apply(this,t)}}),null)},x=e(67202),N=e(85007),j=e(80184),f=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],b={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function v(a,s){var e=s["offset".concat(a[0].toUpperCase()).concat(a.slice(1))],t=b[a];return e+parseInt((0,r.Z)(s,t[0]),10)+parseInt((0,r.Z)(s,t[1]),10)}var p=(h={},(0,i.Z)(h,d.Wj,"collapse"),(0,i.Z)(h,d.Ix,"collapsing"),(0,i.Z)(h,d.d0,"collapsing"),(0,i.Z)(h,d.cn,"collapse show"),h),g={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:v},Z=c.forwardRef((function(a,s){var e=a.onEnter,i=a.onEntering,l=a.onEntered,r=a.onExit,d=a.onExiting,h=a.className,b=a.children,g=a.dimension,Z=void 0===g?"height":g,y=a.getDimensionValue,w=void 0===y?v:y,T=(0,n.Z)(a,f),C="function"===typeof Z?Z():Z,k=(0,c.useMemo)((function(){return u((function(a){a.style[C]="0"}),e)}),[C,e]),B=(0,c.useMemo)((function(){return u((function(a){var s="scroll".concat(C[0].toUpperCase()).concat(C.slice(1));a.style[C]="".concat(a[s],"px")}),i)}),[C,i]),E=(0,c.useMemo)((function(){return u((function(a){a.style[C]=null}),l)}),[C,l]),S=(0,c.useMemo)((function(){return u((function(a){a.style[C]="".concat(w(C,a),"px"),(0,x.Z)(a)}),r)}),[r,w,C]),H=(0,c.useMemo)((function(){return u((function(a){a.style[C]=null}),d)}),[C,d]);return(0,j.jsx)(N.Z,(0,t.Z)((0,t.Z)({ref:s,addEndListener:m.Z},T),{},{"aria-expanded":T.role?T.in:null,onEnter:k,onEntering:B,onEntered:E,onExit:S,onExiting:H,childRef:b.ref,children:function(a,s){return c.cloneElement(b,(0,t.Z)((0,t.Z)({},s),{},{className:o()(h,b.props.className,p[a],"width"===C&&"collapse-horizontal")}))}}))}));Z.defaultProps=g;var y=Z}}]);
//# sourceMappingURL=2517.548b3a24.chunk.js.map