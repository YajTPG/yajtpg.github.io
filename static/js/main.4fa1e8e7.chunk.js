(this["webpackJsonpyajtpg.github.io"]=this["webpackJsonpyajtpg.github.io"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),j=n.n(i),s=n(15),r=n.n(s),o=n(16),a=n(17),h=n(21),d=n(20),b=n(18),l=n.n(b),u=n(7),O=n(2),x=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Hello!"})})},p=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"404 - Not Found"}),Object(c.jsx)(u.b,{to:"/",children:"Go Home"})]})},v=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"projects!"})})},f=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Navigation"}),Object(c.jsxs)("ul",{children:[Object(c.jsx)(u.b,{to:"/index",className:"link",children:Object(c.jsx)("li",{children:"Go to main page."})}),Object(c.jsx)("br",{}),Object(c.jsx)(u.b,{to:"/projects",className:"link",children:Object(c.jsx)("li",{children:"Have a look at my projects!"})})]})]})};function m(){return Object(c.jsx)(u.a,{children:Object(c.jsx)("div",{className:"Home",children:Object(c.jsxs)(O.c,{children:[Object(c.jsx)(O.a,{path:"/projects",children:Object(c.jsx)(v,{})}),Object(c.jsx)(O.a,{exact:!0,path:["/","/index"],children:Object(c.jsx)(x,{})}),Object(c.jsx)(O.a,{path:["/nav","/navigate","/menu"],children:Object(c.jsx)(f,{})}),Object(c.jsx)(O.a,{path:["*","/404","/NotFound"],children:Object(c.jsx)(p,{})})]})})})}var g="https://cdn.yajtpg.now.sh",y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),j=0;j<c;j++)i[j]=arguments[j];return(e=t.call.apply(t,[this].concat(i))).state={someData:[],isLoading:!0},e.someFetch=function(){fetch(g).then((function(e){return e.json()})).then((function(t){return e.setState({someData:t,isLoading:!1})}))},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.someFetch()}),250)}},{key:"render",value:function(){return Object(c.jsx)("div",{children:this.state.isLoading?Object(c.jsx)("div",{id:"div1",children:Object(c.jsx)("center",{children:Object(c.jsx)(l.a,{type:"spin",color:"white"})})}):Object(c.jsx)(m,{})})}}]),n}(i.Component);n(32);r.a.render(Object(c.jsx)(j.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.4fa1e8e7.chunk.js.map