"use strict";(self.webpackChunknowa=self.webpackChunknowa||[]).push([[1708],{51708:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var s=n(29439),t=n(72791),i=n(2461),r=n(89743),l=n(2677),c=n(9140),d=n(57644),o=n(2469),h=n(43360),m=n(17858),x=[{id:"1",show:"Well done!",variant:"success",text:"You successfully read this alert message."},{id:"2",show:"Heads up!",variant:"danger",text:" This alert needs your attention, but it's not super ."},{id:"3",show:"Warning!",variant:"warning",text:"Better check yourself, you're not looking too good."},{id:"4",show:"Oh snap!",variant:"info",text:"Change a few things up and try submitting again."}],u=[{id:"1",show:"Holy guacamole!",variant:"warning",text:"You should check in on some of those fields below."},{id:"2",show:"Holy guacamole!",variant:"success",text:"You should check in on some of those fields below."},{id:"3",show:"Holy guacamole!",variant:"danger",text:" You should check in on some of those fields below."},{id:"4",show:"Holy guacamole!",variant:"info",text:"You should check in on some of those fields below."}],j=[{id:"1",show:"Default!",variant:"default",icons:"fe fe-download",text:"This is a warning alert\u2014check it out that has an icon too!"},{id:"2",show:"Primary!",variant:"primary",icons:"fe fe-check-square",text:"This is a warning alert\u2014check it out that has an icon too!"},{id:"3",show:"Success!",variant:"success",icons:"fe fe-thumbs-up",text:" This is a warning alert\u2014check it out that has an icon too!"},{id:"4",show:"Info!",variant:"info",icons:"ti-bell",text:"This is a warning alert\u2014check it out that has an icon too!"},{id:"5",show:"Warning!",variant:"warning",icons:"fe fe-info",text:"This is a warning alert\u2014check it out that has an icon too!"},{id:"7",show:"Danger!",variant:"danger",icons:"fe fe-slash",text:"This is a warning alert\u2014check it out that has an icon too!"}],p=[{color:"primary"},{color:"secondary"},{color:"success"},{color:"danger"},{color:"warning"},{color:"info"},{color:"light"},{color:"dark"}],g=[{bg:"success",fe:"fe fe-check-circle",text:"Well done!"},{bg:"warning",fe:"fe fe-alert-octagon",text:"Warning!"},{bg:"danger",fe:"fe fe-delete",text:"Error!"}],f=n(80184),N=function(){var e=(0,t.useState)(!1),a=(0,s.Z)(e,2),n=a[0],N=a[1],v=(0,t.useState)(x),w=(0,s.Z)(v,2),b=w[0],k=w[1],y=(0,t.useState)(!1),Z=(0,s.Z)(y,2),A=Z[0],C=Z[1],F=(0,t.useState)(x),R=(0,s.Z)(F,2),S=R[0],D=R[1],B=(0,t.useState)(!1),L=(0,s.Z)(B,2),T=L[0],H=L[1],W=(0,t.useState)(x),q=(0,s.Z)(W,2),I=q[0],U=q[1],Y=(0,t.useState)(!1),E=(0,s.Z)(Y,2),M=E[0],O=E[1],G=(0,t.useState)(!1),P=(0,s.Z)(G,2),J=P[0],z=P[1],K=(0,t.useState)(!1),Q=(0,s.Z)(K,2),V=Q[0],X=Q[1],$=(0,t.useState)(!1),_=(0,s.Z)($,2),ee=_[0],ae=_[1],ne=(0,t.useState)(!1),se=(0,s.Z)(ne,2),te=se[0],ie=se[1],re=(0,t.useState)(u),le=(0,s.Z)(re,2),ce=le[0],de=le[1],oe=(0,t.useState)(j),he=(0,s.Z)(oe,2),me=he[0],xe=he[1];return(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"breadcrumb-header justify-content-between",children:[(0,f.jsx)("div",{className:"left-content",children:(0,f.jsx)("span",{className:"main-content-title mg-b-0 mg-b-lg-1",children:"ALERTS"})}),(0,f.jsx)("div",{className:"justify-content-center mt-2",children:(0,f.jsxs)(i.Z,{className:"breadcrumb",children:[(0,f.jsx)(i.Z.Item,{className:"breadcrumb-item tx-15",href:"#",children:"Elements"}),(0,f.jsx)(i.Z.Item,{className:"breadcrumb-item ",active:!0,"aria-current":"page",children:"Alerts"})]})})]}),(0,f.jsxs)(r.Z,{className:"alerts",children:[(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)(c.Z,{id:"basic-alert",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Basic Alerts"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return N(!n)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Use one of the four required contextual classNamees."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:b.map((function(e,a){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{className:"alert alert-dismissible fade show ",variant:e.variant,children:[" ",(0,f.jsx)("strong",{children:e.show})," ",e.text,(0,f.jsx)(h.Z,{variant:"",type:"button",onClick:function(){return function(e){var a=b.filter((function(a){return a.id!==e}));k(a)}(e.id)},className:"btn-close btn",children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},a)}))})})}),(0,f.jsx)(m.Z,{in:n,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n\n    <React.Fragment>\n      {list.map((item, k) => (\n        <React.Fragment key={k}>\n          <Alert\n            className="alert alert-dismissible fade show "\n            variant={item.variant}\n          >\n            {" "}\n            <strong>{item.show}</strong> {item.text}\n            <Button\n              variant=""\n              type="button"\n              onClick={() => handleRemove(item.id)}\n              className="btn-close btn"\n            >\n              <span aria-hidden="true">\xd7</span>\n            </Button>\n          </Alert>\n        </React.Fragment>\n                '})})})]})})}),(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)(c.Z,{id:"outline-alert",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Outline Alerts"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return C(!A)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Use one of the four required contextual classNamees."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:S.map((function(e,a){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{variant:"",className:"alert fade show alert-dismissible alert-outline-".concat(e.variant),children:[" ",(0,f.jsx)("strong",{children:e.show})," ",e.text,(0,f.jsx)(h.Z,{variant:"",type:"button",onClick:function(){return function(e){var a=S.filter((function(a){return a.id!==e}));D(a)}(e.id)},className:"btn-close",children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},a)}))})})}),(0,f.jsx)(m.Z,{in:A,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n \n    <React.Fragment>\n      {list.map((item, k) => (\n        <React.Fragment key={k}>\n          <Alert\n            variant=""\n            className={alert fade show alert-dismissible alert-outline-{item.variant}}\n          >\n            {" "}\n            <strong>{item.show}</strong> {item.text}\n            <Button\n              variant=""\n              type="button"\n              onClick={() => handleRemove(item.id)}\n              className="btn-close"\n            >\n              <span aria-hidden="true">\xd7</span>\n            </Button>\n          </Alert>\n        </React.Fragment>\n  \n'})})})]})})}),(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)(c.Z,{id:"solid-alert",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Solid Colored Alerts"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return H(!T)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Use one of the four required contextual classNamees."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:I.map((function(e,a){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{variant:"",className:"alert fade show alert-dismissible alert-solid-".concat(e.variant),children:[" ",(0,f.jsx)("strong",{children:e.show})," ",e.text,(0,f.jsx)(h.Z,{variant:"",type:"button",onClick:function(){return function(e){var a=I.filter((function(a){return a.id!==e}));U(a)}(e.id)},className:"btn-close",children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},a)}))})})}),(0,f.jsx)(m.Z,{in:T,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n export const SolidColored = () => {\n   const [list, setList] = React.useState(initialList);\n   function handleRemove(id:any) {\n     const newList = list.filter((list) => list.id !== id);\n     setList(newList);\n   }\n   return (\n     <React.Fragment>\n       {list.map((item, k) => (\n         <React.Fragment key={k}>\n           <Alert\n             variant=""\n             className={alert fade show alert-dismissible alert-solid-{item.variant}}\n           >\n             {" "}\n             <strong>{item.show}</strong> {item.text}\n             <Button\n               variant=""\n               type="button"\n               onClick={() => handleRemove(item.id)}\n               className="btn-close"\n             >\n               <span aria-hidden="true">\xd7</span>\n             </Button>\n           </Alert>\n         </React.Fragment>\n       ))}\n     </React.Fragment>\n   );\n };\n'})})})]})})}),(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)("div",{className:"card custom-card",id:"dismiss-alerts",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Dismissing Alerts"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return O(!M)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Using the alert JavaScript plugin, it\u2019s possible to dismiss any alert inline."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:ce.map((function(e){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{variant:"",className:"alert fade show alert-dismissible alert-".concat(e.variant),children:[" ",(0,f.jsx)("strong",{children:e.show})," ",e.text,(0,f.jsx)(h.Z,{variant:"",type:"button",onClick:function(){return function(e){var a=ce.filter((function(a){return a.id!==e}));de(a)}(e.id)},className:"btn-close",children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},e.id)}))})})}),(0,f.jsx)(m.Z,{in:M,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n\n    <React.Fragment>\n    \n      {Alertdismissing.map((playerData) => (\n        <React.Fragment key={playerData.id}>\n          <Alert\n            variant=""\n            className={alert fade show alert-dismissible alert-{playerData.variant}}\n          >\n            {" "}\n            <strong>{playerData.show}</strong> {playerData.text}\n            <Button\n              variant=""\n              type="button"\n              onClick={() => handleRemove(playerData.id)}\n              className="btn-close"\n            >\n              <span aria-hidden="true">\xd7</span>\n            </Button>\n          </Alert>\n        </React.Fragment>\n \n'})})})]})})}),(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)("div",{className:"card custom-card",id:"icon-alerts",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Alert With Icon"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return z(!J)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:j.map((function(e,a){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{variant:"",className:"alert fade show alert-dismissible alert-".concat(e.variant),children:[" ",(0,f.jsx)("span",{className:"alert-inner--icon",children:(0,f.jsx)("i",{className:"".concat(e.icons," ")})})," ",(0,f.jsxs)("span",{className:"alert-inner--text",children:[(0,f.jsx)("strong",{children:e.show})," ",e.text]})]})},a)}))})})}),(0,f.jsx)(m.Z,{in:J,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n\n    <React.Fragment>\n      {initialListicons.map((playerData, k) => (\n        <React.Fragment key={k}>\n          <Alert\n            variant=""\n            className={alert fade show alert-dismissible alert-{playerData.variant}}\n          >\n                  {" "}\n                  <span className="alert-inner--icon">\n                    <i className={{playerData.icons}}></i>\n                  </span>{" "}\n                  <span className="alert-inner--text">\n                    <strong>{playerData.show}</strong> {playerData.text}\n                  </span>\n                </Alert>\n              </React.Fragment>\n      ))}\n      </React.Fragment>\n'})})})]})})}),(0,f.jsx)(l.Z,{lg:6,md:12,sm:12,children:(0,f.jsx)("div",{className:"card custom-card",id:"icon-dismissalerts",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Alert With Icon Dismissing"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return ae(!ee)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:me.map((function(e){return(0,f.jsx)(t.Fragment,{children:(0,f.jsxs)(o.Z,{variant:"",className:"alert fade show alert-dismissible alert-".concat(e.variant),children:[" ",(0,f.jsx)("span",{className:"alert-inner--icon",children:(0,f.jsx)("i",{className:"".concat(e.icons," ")})})," ",(0,f.jsxs)("span",{className:"alert-inner--text",children:[(0,f.jsx)("strong",{children:e.show})," ",e.text]}),(0,f.jsx)(h.Z,{variant:"",type:"button",onClick:function(){return function(e){var a=me.filter((function(a){return a.id!==e}));xe(a)}(e.id)},className:"btn-close",children:(0,f.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]})},e.id)}))})})}),(0,f.jsx)(m.Z,{in:ee,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n export const Alertsicons = () => {\n  const [open, setOpen] = useState(false);\n  return (\n    <React.Fragment>\n      {initialListicons.map((playerData, k) => (\n        <React.Fragment key={k}>\n          <Alert\n            variant=""\n            className={alert fade show alert-dismissible alert-{playerData.variant}}\n          >\n                  {" "}\n                  <span className="alert-inner--icon">\n                    <i className={{playerData.icons}}></i>\n                  </span>{" "}\n                  <span className="alert-inner--text">\n                    <strong>{playerData.show}</strong> {playerData.text}\n                  </span>\n                </Alert>\n              </React.Fragment>\n      ))}\n      </React.Fragment>\n'})})})]})})}),(0,f.jsx)(l.Z,{lg:12,md:12,sm:12,children:(0,f.jsx)(c.Z,{className:" custom-card",id:"link-alerts",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Link color Alerts"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return X(!V)},className:"showcode d-flex ms-auto "})]}),(0,f.jsxs)("p",{className:"text-muted card-sub-title",children:["Use the ",(0,f.jsx)("code",{className:"highlighter-rouge",children:".alert-link"})," ","utility className to quickly provide matching colored links within any alert."]})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:p.map((function(e,a){return(0,f.jsxs)(o.Z,{variant:"",className:"alert alert-".concat(e.color),children:["This is a ",e.color," alert with"," ",(0,f.jsx)(o.Z.Link,{className:"alert-link",href:"#",children:"an example link"}),". Give it a click if you like."]},a)}))})})}),(0,f.jsx)(m.Z,{in:V,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n \n    <React.Fragment>\n      {Alertdatalink.map((playerData, k) => (\n        <Alert key={k} variant="" className={alert alert-{playerData.color}}>\n          This is a {playerData.color} alert with{" "}\n          <Alert.Link className="alert-link" href="#">\n            an example link\n          </Alert.Link>\n          . Give it a click if you like.\n        </Alert>\n      ))}\n      <React.Fragment>\n'})})})]})})}),(0,f.jsx)(l.Z,{lg:12,md:12,sm:12,children:(0,f.jsx)("div",{className:"card custom-card",id:"additional-alerts",children:(0,f.jsxs)(c.Z.Body,{children:[(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{className:"d-flex",children:[(0,f.jsx)("h6",{className:"card-title mb-1",children:"Additional Content Alert"}),(0,f.jsx)(d.Z.Check,{label:"Show Code",type:"switch",onClick:function(){return ie(!te)},className:"showcode d-flex ms-auto "})]}),(0,f.jsx)("p",{className:"text-muted card-sub-title",children:"Alerts can also contain additional HTML elements like headings, paragraphs and dividers."})]}),(0,f.jsx)("div",{className:"text-wrap",children:(0,f.jsx)("div",{className:"example",children:(0,f.jsx)(t.Fragment,{children:g.map((function(e,a){return(0,f.jsxs)(o.Z,{className:"alert mb-2 alert-".concat(e.bg),variant:"",children:[(0,f.jsx)(o.Z.Heading,{children:(0,f.jsxs)("h4",{className:"alert-heading",children:[(0,f.jsx)("i",{className:"".concat(e.fe," me-2 tx-20")}),e.text]})}),(0,f.jsx)("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),(0,f.jsx)("hr",{}),(0,f.jsx)("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]},a)}))})})}),(0,f.jsx)(m.Z,{in:te,className:"",children:(0,f.jsx)("pre",{children:(0,f.jsx)("code",{children:'\n\n    <React.Fragment>\n      {Alertdatacontent.map((playerData, k) => (\n        <Alert\n          key={k}\n          className={alert mb-2 alert-{playerData.bg}}\n                  variant=""\n        >\n                  <Alert.Heading>\n                    <h4 className="alert-heading">\n                      <i className={{playerData.fe} me-2 tx-20}></i>\n                      {playerData.text}\n                    </h4>\n                  </Alert.Heading>\n                  <p>\n                    Aww yeah, you successfully read this important alert message. This\n                    example text is going to run a bit longer so that you can see how\n                    spacing within an alert works with this kind of content.\n                  </p>\n                  <hr />\n                  <p className="mb-0">\n                    Whenever you need to, be sure to use margin utilities to keep things\n                    nice and tidy.\n                  </p>\n                </Alert>\n      ))}\n      </React.Fragment>\n'})})})]})})})]})]})};N.defaultProps={};var v=N}}]);
//# sourceMappingURL=1708.3811d1af.chunk.js.map