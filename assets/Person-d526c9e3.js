import{j as e}from"./index-8bbec1a5.js";const s=[{key:"name",value:"Semyon"},{key:"lastName",value:"Okulov"},{key:"age",value:"between 0 and 48"},{key:"gender",value:"the only one"},{key:"hobbies",value:['"Learning English"','"Math"','"Gym"','"VK Testers & Crowd"','"Blog on Habr"','"Learning pentest"'].join(`,\n${" ".repeat(12)}`)}],n=()=>e.jsxs("pre",{children:[e.jsx("span",{className:"const",children:"const"})," ",e.jsx("span",{className:"title",children:"person"})," ",e.jsx("span",{className:"blue",children:"="})," ","{",s.map(((n,a)=>e.jsxs("pre",{children:["  ",e.jsx("span",{className:"text",children:n.key}),": ","hobbies"===n.key?"[":"","hobbies"===n.key?e.jsx("span",{className:"link",children:n.value}):e.jsx("span",{className:"link",children:`'${n.value}'`}),"hobbies"===n.key&&a!==s.length-1?",":"","hobbies"===n.key?"":e.jsx("span",{style:{color:"fff"},children:","})]},n.key))),"  ]","\n}"]});export{n as default};
