(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{10:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(3),a=c.n(s),r=c(4),l=(c(9),c(10),c.p+"static/media/profile.d4ce5d06.jpg"),o=c(0);var j=function(e){var t=e.pageToDraw,c=e.handlePageChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("header",{children:[Object(o.jsx)("nav",{className:"nav-container-top",children:Object(o.jsx)("table",{className:"nav-table vred",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"About"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("About")},children:"about me"})}),Object(o.jsx)("td",{className:"Work"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Work")},children:"my work"})}),Object(o.jsx)("td",{className:"Resume"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"/portfolio-react/assets/pdf/resume.pdf",target:"_blank",children:"resume"})}),Object(o.jsx)("td",{className:"Contact"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Contact")},children:"Contact"})})]})})}),Object(o.jsxs)("div",{className:"profile flex-grid tenths",children:[Object(o.jsxs)("div",{className:"col-3 col-3-md col-10-sm profile-image-container",children:[Object(o.jsx)("div",{className:"profile-image-right",children:Object(o.jsx)("img",{alt:"",className:"profile-image",src:l})}),Object(o.jsx)("div",{className:"profile-image-center",children:Object(o.jsx)("img",{alt:"",className:"profile-image",src:l})})]}),Object(o.jsxs)("div",{className:"col-3 col-3-md col-10-sm text-center name-container",children:[Object(o.jsx)("div",{className:"profile-name",children:"Gianni Fontanot"}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"profile-email",children:"giannifontanot@gmail.com"})]}),Object(o.jsx)("nav",{className:"nav-container-right col-4 col-4-md col-10-sm vertical-centered",children:Object(o.jsx)("table",{className:"nav-table",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"",href:"#",onClick:function(){return c("About")},children:"about me"})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"",href:"#",onClick:function(){return c("Work")},children:"my work"})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"",href:"/portfolio-react/assets/pdf/resume.pdf",target:"_blank",children:"resume"})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{className:"",href:"#",onClick:function(){return c("Contact")},children:"Contact"})})]})})})]})]})})},d=c.p+"static/media/tech-blog.0f9aeb22.jpg",b=c.p+"static/media/ecommerce-backend.361e8569.jpg",h=c.p+"static/media/employee-management-system.90711c86.jpg",m=c.p+"static/media/test-taker.8ad5d5dd.jpg",x=c.p+"static/media/weather-dashboard.f62635be.jpg",O=c.p+"static/media/portfolio.5085f37e.jpg";function g(e){return Object(o.jsx)("div",{className:"col-6 col-6-md col-10-sm text-center vertical-center",children:Object(o.jsx)("img",{alt:"",className:"img-thumbnail imgProject",src:e.src})})}function u(e){return Object(o.jsxs)("div",{className:"ProjectDescription",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:Object(o.jsx)("strong",{children:e.title})})}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:e.subtitle})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.content})})]})}function v(e){var t;"GitHub"===e.live?t="GitHub":"Heroku"===e.live&&(t="Heroku");var c=!1;return"none"!=e.live&&(c=!0),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsxs)("button",{className:"button button-red",onClick:function(){return window.fOpenRepo(e.location)},children:[Object(o.jsx)("i",{className:"fab fa-github"}),"GitHub repo"]}),"\xa0",c&&Object(o.jsxs)("button",{className:"button button-blue",onClick:function(){return window["fOpenLive"+t](e.location)},children:[Object(o.jsx)("i",{className:"fas fa-satellite-dish"}),"Live link"]})||""]})}function p(e){return Object(o.jsxs)("div",{className:"col-4 col-4-md col-10-sm text-left vertical-center ContentsProject",children:[Object(o.jsx)(u,{title:e.title,subtitle:e.subtitle,content:e.content}),Object(o.jsx)(v,{location:e.location,live:e.live})]})}function f(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex-grid tenths work-container",style:{padding:15},children:[Object(o.jsx)(p,{title:e.title,subtitle:e.subtitle,location:e.location,live:e.live,content:e.content}),Object(o.jsx)(g,{src:e.image})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}function N(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",style:{backgroundColor:"lightgray"},children:Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"mywork-container",children:[Object(o.jsx)("a",{id:"work"}),Object(o.jsx)("h2",{children:"My Work"}),Object(o.jsx)("hr",{}),"Following you will find a selection of my best projects completed during my ",Object(o.jsx)("strong",{children:"Bootcamp"})," in ",Object(o.jsx)("strong",{children:"SMU"}),".",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)(f,{title:"Tech Blog",subtitle:"A Blog Site for Techies",location:"tech-blog",live:"Heroku",image:d,content:Object(o.jsxs)(i.a.Fragment,{children:["This project is made using ",Object(o.jsx)("strong",{children:"Express' handlebars"})," to generate the front-end dynamically, and ",Object(o.jsx)("strong",{children:"Squelize"})," with ",Object(o.jsx)("strong",{children:"MySQL"})," to record blogger's entries in the back-end. It is live on ",Object(o.jsx)("strong",{children:"Heroku!"})]})}),Object(o.jsx)(f,{title:"Employee Management System",subtitle:"Manage Your Business",location:"employee-management-system",live:"none",image:h,content:Object(o.jsxs)(i.a.Fragment,{children:["This application helps a small business owner to organize the departments, roles, and employees in the company. It is a ",Object(o.jsx)("strong",{children:"back-end project"})," that uses the ",Object(o.jsx)("strong",{children:"terminal"})," as a front-end and interacts with ",Object(o.jsx)("strong",{children:"MySQL"})," and ",Object(o.jsx)("strong",{children:"InquirerJS"})," in the back-end."]})}),Object(o.jsx)(f,{title:"Test Taker",subtitle:"Show What You Know",location:"test-taker",live:"GitHub",image:m,content:Object(o.jsxs)(i.a.Fragment,{children:["This little app is built with ",Object(o.jsx)("strong",{children:"Javascript, CSS, and HTML"}),", and although it doesn't have a back-end per se, it saves your score using your browser's ",Object(o.jsx)("strong",{children:"local storage"}),"."]})}),Object(o.jsx)(f,{title:"E-commerce Backend",subtitle:"Organize Your Inventory",location:"ecommerce-backend",live:"none",image:b,content:Object(o.jsxs)(i.a.Fragment,{children:["This is a ",Object(o.jsx)("strong",{children:"backend project"})," that helps a small business organize their products. This application uses ",Object(o.jsx)("strong",{children:"Sequelize"})," and ",Object(o.jsx)("strong",{children:"Express JS"})," to abstract the SQL into regular Javascript code."]})}),Object(o.jsx)(f,{title:"This Portfolio Site",subtitle:"My Best Projects",location:"portfolio-react",live:"none",image:O,content:Object(o.jsxs)(i.a.Fragment,{children:["This is my website to show my projects, and it's in itself a whole project. I used ",Object(o.jsx)("strong",{children:"React, PureCSS, CSS, media queries"}),", and ",Object(o.jsx)("strong",{children:"HTML5"})," to build it. No pre-made templates!"]})}),Object(o.jsx)(f,{title:"Weather Dashboard",subtitle:"Do You Need an Umbrella?",location:"Wheather-Dashboard",live:"GitHub",image:x,content:Object(o.jsx)(i.a.Fragment,{children:"This little app aims to show the weather of any country in the world, along with the moon phases for the next five days... Werewolves, take note!"})})]})})})})}var k=c.p+"static/media/img1.33043ca7.jpeg",w=c.p+"static/media/img2.32f43228.jpeg",y=c.p+"static/media/img3.01ea064f.jpeg";function S(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("a",{id:"about"}),Object(o.jsx)("h2",{children:"About me"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"Hi there! My name is Gianni Fontanot, and I have been programming computers in many languages since 1998. Back then I was working with now old technologies like PowerDynamo, Internet Information Server, and the Sybase database ... (have you ever heard of any of them?) and later with a much more modern set of languages as a Full Stack Java Web Developer with Java EE and SQL. "}),Object(o.jsx)("p",{children:"In 2011, I did an intermission and decided to come to the United States to teach children in a bilingual classroom, and for ten years I enjoyed doing it. Now, after getting acquainted by the excellent SMU Bootcamp instructors about the new technologies developed in recent years, I am ready to get back to coding!"})]})})})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"polaroid-container",children:[Object(o.jsx)("div",{className:"polaroid rotate-15",children:Object(o.jsx)("img",{className:"pure-img img-about",src:k,alt:""})}),Object(o.jsx)("div",{className:"polaroid rotate20",children:Object(o.jsx)("img",{className:"pure-img img-about",src:w,alt:""})}),Object(o.jsx)("div",{className:"polaroid rotate10",children:Object(o.jsx)("img",{className:"pure-img img-about",src:y,alt:""})})]})]})}function C(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"contact-container flex-grid tenths",children:[Object(o.jsxs)("div",{className:"col-10",children:[Object(o.jsx)("a",{id:"contact"}),Object(o.jsx)("h2",{children:"Contact"}),Object(o.jsx)("hr",{})]}),Object(o.jsxs)("div",{className:"col-5 col-5-md col-10-sm contact-container-left",children:[Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:"email"})}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"mailto:giannifontanot@gmail.com",children:"giannifontanot@gmail.com"})}),Object(o.jsx)("div",{children:"\xa0"}),Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:"phone \xb7 sms"})}),Object(o.jsx)("div",{children:"(214) 809 - 4544"})]}),Object(o.jsxs)("div",{className:"col-5 col-5-md col-10-sm text-right contact-container-right",children:[Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:"Linkedin"})}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/gianni-fontanot",children:"linkedin.com/in/gianni-fontanot"})}),Object(o.jsx)("div",{children:"\xa0"}),Object(o.jsx)("div",{children:Object(o.jsx)("strong",{children:"GitHub"})}),Object(o.jsx)("div",{children:Object(o.jsx)("a",{href:"https://github.com/giannifontanot",children:"github.com/giannifontanot"})})]})]})})})})})}function T(){var e=Object(n.useState)("Home"),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{pageToDraw:c,handlePageChange:function(e){return i(e)}}),"Home"===c?Object(o.jsx)(N,{}):"About"===c?Object(o.jsx)(S,{}):"Work"===c?Object(o.jsx)(N,{}):Object(o.jsx)(C,{})]})}var H=function(){return Object(o.jsx)(T,{})};c(12),c(13);a.a.render(Object(o.jsx)(H,{}),document.getElementById("root"))},9:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.4d4a2cff.chunk.js.map