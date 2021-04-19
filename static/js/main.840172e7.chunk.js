(this["webpackJsonpreact-landingpage"]=this["webpackJsonpreact-landingpage"]||[]).push([[0],{17:function(e,n,t){"use strict";t.r(n);var c=t(1),s=t(11),a=t.n(s),i=(t(3),Object(c.createContext)()),r=t(0);var o=function(){var e=Object(c.useContext)(i),n=e.netIncome,t=e.expenditure;return Object(r.jsxs)("div",{className:"balance_field",children:[Object(r.jsxs)("h1",{className:"balance",children:["\u20a6",n-t]}),Object(r.jsx)("p",{className:"app__header",children:"Balance"})]})};var j=function(){var e=Object(c.useContext)(i),n=e.netIncome,t=e.expenditure;return Object(r.jsxs)("div",{className:"income_exp",children:[Object(r.jsxs)("div",{className:"income",children:[Object(r.jsx)("p",{className:"net-income",children:"Net Income"}),Object(r.jsxs)("h2",{className:"net-income-amt",children:["\u20a6",n]})]}),Object(r.jsxs)("div",{className:"expense-side",children:[Object(r.jsx)("p",{className:"exp",children:"Expenditure"}),Object(r.jsxs)("h2",{className:"exp-amt",children:["\u20a6",t]})]})]})},l=t(4),m=t(2),u=t(6),x=t(9),d=t.n(x);var b=function(){var e=Object(c.useContext)(i).submitIncome,n=Object(c.useContext)(i).submitExpenses,t=Object(c.useState)({incomeText:"",incomeAmount:0}),s=Object(u.a)(t,2),a=s[0],o=s[1],j=Object(c.useState)({expenseText:"",expenseAmount:0}),x=Object(u.a)(j,2),b=x[0],p=x[1],O=function(e){o(Object(m.a)(Object(m.a)({},a),{},Object(l.a)({},e.target.name,e.target.value)))},h=function(e){p(Object(m.a)(Object(m.a)({},b),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(r.jsxs)("div",{className:"addtrans",children:[Object(r.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={id:d()(),incomeText:a.incomeText,incomeAmount:Number(a.incomeAmount)};e(t),console.log(t)},className:"add-trans",children:[Object(r.jsx)("h2",{className:"income-head  ",children:"INCOME"}),Object(r.jsx)("input",{value:a.incomeText,name:"incomeText",className:"income-text",type:"text",placeholder:"Income",onChange:O}),Object(r.jsx)("input",{value:a.incomeAmount,name:"incomeAmount",className:"income-amt ",type:"number",placeholder:"Amount",onChange:O}),Object(r.jsx)("button",{className:"income-btn ",children:"Submit"})]}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:d()(),expenseText:b.expenseText,expenseAmount:Number(b.expenseAmount)};n(t),console.log(t)},className:"add-trans",children:[Object(r.jsx)("h2",{className:"expense-head  ",children:"EXPENSE"}),Object(r.jsx)("input",{name:"expenseText",value:b.expenseText,className:"expense-text",type:"text",placeholder:"Expenditure",onChange:h}),Object(r.jsx)("input",{onChange:h,value:b.expenseAmount,name:"expenseAmount",className:"expense-amt ",type:"number",placeholder:"Amount"}),Object(r.jsx)("button",{className:"expense-btn ",children:"Submit"})]})]})};var p=function(e){var n=e.incomeTransaction,t=Object(c.useContext)(i).deleteIncome;return Object(r.jsxs)("li",{className:"ins",children:[n.incomeText," -",Object(r.jsxs)("span",{children:[" \u20a6",n.incomeAmount]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),t(n.id)},className:"del-btn",children:"X"})]},n.id)};var O=function(){var e=Object(c.useContext)(i).incomeTransactions;return console.log(e),Object(r.jsxs)("div",{className:"income-list-items",children:[Object(r.jsx)("h3",{children:"Transaction History"}),Object(r.jsx)("ul",{children:e.map((function(e){return Object(r.jsx)(p,{incomeTransaction:e})}))})]})};var h=function(e){var n=e.expenseTransaction,t=Object(c.useContext)(i).deleteExpense;return Object(r.jsx)("div",{children:Object(r.jsxs)("li",{className:"expexp",children:[n.expenseText,Object(r.jsxs)("span",{children:[" - \u20a6",n.expenseAmount]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),t(n.id)},className:"del-btn",children:"X"})]},n.id)})};var v=function(){var e=Object(c.useContext)(i).expenseTransactions;return console.log(e),Object(r.jsxs)("div",{className:"expense-list",children:[Object(r.jsx)("h3",{children:"Transaction History"}),Object(r.jsx)("div",{children:e.map((function(e){return Object(r.jsx)(h,{expenseTransaction:e})}))})]})},N=t(10),T=function(e,n){switch(n.type){case"SUBMIT_INCOME":return Object(m.a)(Object(m.a)({},e),{},{incomeTransactions:[n.payload].concat(Object(N.a)(e.incomeTransactions))});case"SUBMIT_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenseTransactions:[n.payload].concat(Object(N.a)(e.expenseTransactions))});case"DELETE_INCOME":return Object(m.a)(Object(m.a)({},e),{},{incomeTransactions:e.incomeTransactions.filter((function(e){return e.id!==n.payload}))});case"DELETE_EXPENSE":return Object(m.a)(Object(m.a)({},e),{},{expenseTransactions:e.expenseTransactions.filter((function(e){return e.id!==n.payload}))})}};var f=function(e){var n=e.children,t=Object(c.useReducer)(T,{incomeTransactions:[],expenseTransactions:[]}),s=Object(u.a)(t,2),a=s[0],o=s[1],j=a.incomeTransactions.map((function(e){return e.incomeAmount})),l=a.expenseTransactions.map((function(e){return e.expenseAmount})),m=j.reduce((function(e,n){return e+n}),0),x=l.reduce((function(e,n){return e+n}),0);return Object(r.jsx)(i.Provider,{value:{incomeTransactions:a.incomeTransactions,expenseTransactions:a.expenseTransactions,submitIncome:function(e){o({type:"SUBMIT_INCOME",payload:e})},submitExpenses:function(e){o({type:"SUBMIT_EXPENSE",payload:e})},deleteIncome:function(e){o({type:"DELETE_INCOME",payload:e})},deleteExpense:function(e){o({type:"DELETE_EXPENSE",payload:e})},netIncome:m,expenditure:x},children:n})};var E=function(){return Object(r.jsxs)("main",{children:[Object(r.jsx)("h1",{className:"oga",children:"Expense Tracker"}),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(f,{children:[Object(r.jsxs)("div",{className:"left_side",children:[Object(r.jsx)(o,{}),Object(r.jsx)(j,{})]}),Object(r.jsxs)("div",{className:"mid_side",children:[Object(r.jsx)(b,{}),Object(r.jsxs)("div",{className:"trans-list",children:[Object(r.jsx)(O,{}),Object(r.jsx)(v,{})]})]})]})})]})};a.a.render(Object(r.jsx)(E,{}),document.getElementById("root"))},3:function(e,n,t){}},[[17,1,2]]]);
//# sourceMappingURL=main.840172e7.chunk.js.map