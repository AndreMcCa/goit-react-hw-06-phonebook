(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{35:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(6),i=n.n(o),b=n(3),l=n(19),j=n(8),s=n(16);function u(t){var e=t.label,n=t.type,a=t.name,r=t.value,o=t.onChange;return Object(c.jsxs)("label",{children:[" ",e,Object(c.jsx)("input",{type:n,name:a,value:r,onChange:o})]})}var d="contacts/add",O="contacts/delete",f="contacts/changeFilter",m=n(4),h=n(37),p={addContact:Object(m.b)(d,(function(t,e){return{payload:{id:Object(h.a)(),name:t,number:e}}})),deleteContact:Object(m.b)(O),filterContact:Object(m.b)(f)};n(32);function x(){var t=Object(b.c)((function(t){return t.contacts.items})),e=Object(b.b)(),n=Object(a.useState)(""),r=Object(s.a)(n,2),o=r[0],i=r[1],l=Object(a.useState)(""),d=Object(s.a)(l,2),O=d[0],f=d[1];return Object(c.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),""!==o.trim()&&""!==O.trim()){var c=o.toLowerCase();t.find((function(t){return t.name.toLowerCase()===c}))?j.b.error("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ".concat(o," \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")):(e(p.addContact(o,O)),i(""),f(""))}else j.b.error("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435")},autoComplete:"off",children:[Object(c.jsx)(u,{label:"Name",type:"text",name:"name",value:o,onChange:function(t){var e=t.target.value;i(e)}}),Object(c.jsx)(u,{label:"Number",type:"text",name:"number",value:O,onChange:function(t){var e=t.target.value;f(e)}}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]},"AddContactForm")}function C(t){var e=t.contact,n=t.onDelete;return Object(c.jsxs)("li",{children:[Object(c.jsxs)("p",{children:[e.name," ",e.number]}),Object(c.jsx)("button",{id:e.id,onClick:n,children:"Delete"})]})}function v(){var t=Object(b.c)((function(t){var e=t.contacts,n=e.filter,c=e.items,a=n.toLowerCase();return c.filter((function(t){return t.name.toLowerCase().includes(a)}))})),e=Object(b.b)();return Object(c.jsx)("ul",{children:t.map((function(t){return Object(c.jsx)(C,{contact:t,onDelete:function(){return e(p.deleteContact(t.id))}},t.id)}))})}function g(){var t=Object(b.c)((function(t){return t.contacts.filter})),e=Object(b.b)();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(u,{label:"Find contacts by name",value:t,type:"text",name:"filter",onChange:function(t){return e(p.filterContact(t.target.value))}}),Object(c.jsx)(v,{}),Object(c.jsx)(j.a,{autoClose:2500})]})}var y,w=n(10),k=n(2),D=n(5),F=n(20),L=n.n(F),S=n(21),A=n.n(S),J=n(11),N=Object(m.c)([],(y={},Object(J.a)(y,p.addContact,(function(t,e){return[].concat(Object(w.a)(t),[e.payload])})),Object(J.a)(y,p.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),y)),z=Object(m.c)("",Object(J.a)({},p.filterContact,(function(t,e){return e.payload}))),B=Object(k.c)({items:N,filter:z}),E={key:"root",storage:L.a,blacklist:["filter"]},I=[].concat(Object(w.a)(Object(m.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[A.a]),M=Object(k.c)({contacts:Object(D.g)(E,B)}),T=Object(m.a)({reducer:M,devTools:!1,middleware:I}),q={persistor:Object(D.h)(T),store:T};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(b.a,{store:q.store,children:Object(c.jsx)(l.a,{loading:null,persistor:q.persistor,children:Object(c.jsx)(g,{})})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c4dab27e.chunk.js.map