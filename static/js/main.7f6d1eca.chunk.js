(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(3),s=n.n(r),l=(n(9),n(10),n(0));function i(e){return Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(l.jsxs)("form",{className:"d-flex",children:[Object(l.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Search"})]})})]})})}var o=n(4);function b(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),c=n[0],r=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"mb-3 container my-3",children:[Object(l.jsx)("h2",{children:e.heading}),Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){r(e.target.value)},placeholder:"Enter Text here",id:"myBox",rows:"8"}),Object(l.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){var e=c.toUpperCase();r(e)},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-3",onClick:function(){var e=c.toLowerCase();r(e)},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){r("")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-3",onClick:function(){var e=document.getElementById("myBox");c.select(),navigator.clipboard.writeText(e.value)},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary my-3",onClick:function(){var e=c.split(/[ ]+/);r(e.join(" "))},children:"Remove Extra Spaces"})]}),Object(l.jsxs)("div",{className:"container my-3",children:[Object(l.jsx)("h2",{children:"Your Text Summery"}),Object(l.jsxs)("p",{children:[c.split(" ").length," Words and ",c.length," Characters"]}),Object(l.jsxs)("p",{children:[.008*c.split(" ").length," Minutes Read"]}),Object(l.jsx)("h3",{children:"Preview"}),Object(l.jsx)("p",{children:c})]})]})}var j=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{title:"TextUtils"}),Object(l.jsx)(b,{heading:"Enter the text to analyze below"})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.7f6d1eca.chunk.js.map