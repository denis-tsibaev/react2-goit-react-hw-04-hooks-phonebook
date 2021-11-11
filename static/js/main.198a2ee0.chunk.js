(this["webpackJsonpreact2-goit-react-hw-04-hooks-phonebook"]=this["webpackJsonpreact2-goit-react-hw-04-hooks-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={orderList:"ContactList_orderList__2Z6YF",contactListItem:"ContactList_contactListItem__3-suJ"}},12:function(e,t,n){e.exports={deleteBtn:"ContactItem_deleteBtn__2gNxl"}},13:function(e,t,n){e.exports={filterInput:"Filter_filterInput__1Q21s"}},14:function(e,t,n){e.exports={section:"Section_section__td0T2"}},20:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),o=n.n(r),i=(n(20),n(21),n(15)),s=n(2),u=n(8),l=(n(22),n(11)),j=n.n(l),b=n(7),d=n.n(b),m=n(1),f=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),u=Object(s.a)(i,2),l=u[0],j=u[1],b=function(e){var t=e.target,n=t.name,c=t.value;"name"===n&&o(c),"number"===n&&j(c)};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r,l),o(""),j("")},autoComplete:"off",children:[Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{className:d.a.inputName,onChange:b,type:"text",name:"name",value:r,placeholder:"text here",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})}),Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{className:d.a.inputNumber,onChange:b,type:"tel",name:"number",value:l,placeholder:"text here",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})}),Object(m.jsx)("button",{type:"submit",className:d.a.formButton,children:"Add contact"})]})},h=n(12),O=n.n(h),p=function(e){var t=e.name,n=e.number,c=e.onDelete,a=e.id;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{children:[t,": ",n]}),Object(m.jsx)("button",{type:"submit",onClick:function(){return c(a)},className:O.a.deleteBtn,children:"Delete"})]})},x=n(10),v=n.n(x),_=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(m.jsx)("ol",{className:v.a.orderList,children:t.map((function(e){var t=e.id,c=e.name,a=e.number;return Object(m.jsx)("li",{className:v.a.contactListItem,children:Object(m.jsx)(p,{name:c,number:a,id:t,onDelete:n})},t)}))})},C=n(13),N=n.n(C),g=function(e){var t=e.value,n=e.onFilterChange;return Object(m.jsx)("div",{children:Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",className:N.a.filterInput,value:t,onChange:n})]})})},S=n(14),I=n.n(S),L=function(e){var t=e.title,n=e.children;return Object(m.jsxs)("section",{className:I.a.section,children:[t&&Object(m.jsx)("h2",{children:t}),n]})},w=function(){var e,t=Object(c.useState)(null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]),n=Object(s.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(a))}),[a]);var o=Object(c.useState)(""),l=Object(s.a)(o,2),b=l[0],d=l[1];return Object(m.jsxs)("div",{className:"appDiv",children:[Object(m.jsx)(L,{title:"Phonebook",children:Object(m.jsx)(f,{onSubmit:function(e,t){var n={id:j.a.generate(),name:e,number:t};e&&t||u.b.error("Invalid name or number value!"),a.find((function(e){return e.name===n.name}))?u.b.error("".concat(e," is already in contacts")):r([n].concat(Object(i.a)(a)))}})}),Object(m.jsx)(L,{children:Object(m.jsx)(g,{onFilterChange:function(e){return d(e.target.value)},value:b})}),Object(m.jsx)(L,{title:"Contacts",children:Object(m.jsx)(_,{contacts:function(){var e=b.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDeleteContact:function(e){r(a.filter((function(t){return t.id!==e})))}})}),Object(m.jsx)(u.a,{autoClose:2e3})]})};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(w,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={inputName:"ContactForm_inputName__2SSLf",inputNumber:"ContactForm_inputNumber__1ij9K",formButton:"ContactForm_formButton__3HjyE"}}},[[32,1,2]]]);
//# sourceMappingURL=main.198a2ee0.chunk.js.map