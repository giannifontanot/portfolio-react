(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{10:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(4),i=c.n(n),l=c(2),r=(c(9),c(10),c.p+"static/media/profile.d4ce5d06.jpg"),o=c(0);var j=function(e){var t=e.pageToDraw,c=e.handlePageChange;return Object(o.jsx)("div",{children:Object(o.jsxs)("header",{children:[Object(o.jsx)("nav",{className:"nav-container-top",children:Object(o.jsx)("table",{className:"nav-table vred",children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"About"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("About")},children:Object(o.jsx)("div",{className:"cell-menu",children:"about me"})})}),Object(o.jsx)("td",{className:"Portfolio"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Portfolio")},children:Object(o.jsx)("div",{className:"cell-menu",children:"portfolio"})})}),Object(o.jsx)("td",{className:"Resume"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"",href:"#",onClick:function(){return c("Resume")},children:Object(o.jsx)("div",{className:"cell-menu",children:"resume"})})}),Object(o.jsx)("td",{className:"Contact"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Contact")},children:Object(o.jsx)("div",{className:"cell-menu",children:"contact"})})})]})})}),Object(o.jsxs)("div",{className:"profile flex-grid tenths",children:[Object(o.jsxs)("div",{className:"col-3 col-3-md col-10-sm profile-image-container",children:[Object(o.jsx)("div",{className:"profile-image-right",children:Object(o.jsx)("img",{alt:"",className:"profile-image",src:r})}),Object(o.jsx)("div",{className:"profile-image-center",children:Object(o.jsx)("img",{alt:"",className:"profile-image",src:r})})]}),Object(o.jsxs)("div",{className:"col-3 col-3-md col-10-sm text-center name-container",children:[Object(o.jsx)("div",{className:"profile-name",children:"Gianni Fontanot"}),Object(o.jsx)("div",{className:"profile-email",children:"giannifontanot@gmail.com"})]}),Object(o.jsx)("nav",{className:"nav-container-right col-4 col-4-md col-10-sm vertical-centered",children:Object(o.jsx)("table",{className:"nav-table",children:Object(o.jsxs)("tr",{className:"menu-horizontal",children:[Object(o.jsx)("td",{className:"About"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("About")},children:Object(o.jsx)("div",{className:"cell-menu",children:"about me"})})}),Object(o.jsx)("td",{className:"Portfolio"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Portfolio")},children:Object(o.jsx)("div",{className:"cell-menu",children:"portfolio"})})}),Object(o.jsx)("td",{className:"Resume"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"",href:"#",onClick:function(){return c("Resume")},children:Object(o.jsx)("div",{className:"cell-menu",children:"resume"})})}),Object(o.jsx)("td",{className:"Contact"===t?"nav-table-cell-active":"nav-table-cell",children:Object(o.jsx)("a",{className:"nav-item-right",href:"#",onClick:function(){return c("Contact")},children:Object(o.jsx)("div",{className:"cell-menu",children:"contact"})})})]})})})]})]})})},d=c.p+"static/media/tech-blog.0f9aeb22.jpg",m=c.p+"static/media/ecommerce-backend.361e8569.jpg",b=c.p+"static/media/employee-management-system.90711c86.jpg",h=c.p+"static/media/test-taker.8ad5d5dd.jpg",u=c.p+"static/media/weather-dashboard.f62635be.jpg",O=c.p+"static/media/password-generator.cf6e2515.gif",x=c.p+"static/media/portfolio.5085f37e.jpg";function g(e){return Object(o.jsx)("div",{className:"col-6 col-6-md col-10-sm text-center vertical-center",children:Object(o.jsx)("img",{alt:"",className:"img-thumbnail imgProject",src:e.src})})}function p(e){return Object(o.jsxs)("div",{className:"ProjectDescription",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:Object(o.jsx)("strong",{children:e.title})})}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:e.subtitle})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:Object(o.jsx)("p",{children:e.content})})]})}function v(e){var t;"GitHub"===e.live?t="GitHub":"Heroku"===e.live&&(t="Heroku");var c=!1;return"none"!=e.live&&(c=!0),Object(o.jsxs)("div",{className:"button-container",children:[Object(o.jsxs)("button",{className:"button button-red",onClick:function(){return window.fOpenRepo(e.location)},children:[Object(o.jsx)("i",{className:"fab fa-github"}),"GitHub repo"]}),"\xa0",c&&Object(o.jsxs)("button",{className:"button button-blue",onClick:function(){return window["fOpenLive"+t](e.location)},children:[Object(o.jsx)("i",{className:"fas fa-satellite-dish"}),"Live link"]})||""]})}function f(e){return Object(o.jsxs)("div",{className:"col-4 col-4-md col-10-sm text-left vertical-center ContentsProject",children:[Object(o.jsx)(p,{title:e.title,subtitle:e.subtitle,content:e.content}),Object(o.jsx)(v,{location:e.location,live:e.live})]})}function N(e){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"flex-grid tenths work-container",style:{padding:15},children:[Object(o.jsx)(f,{title:e.title,subtitle:e.subtitle,location:e.location,live:e.live,content:e.content}),Object(o.jsx)(g,{src:e.image})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})}function w(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"background-portfolio",children:Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",style:{backgroundColor:"lightgray"},children:Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"mywork-container",children:[Object(o.jsx)("a",{id:"work"}),Object(o.jsx)("h2",{children:"Portfolio"}),Object(o.jsx)("hr",{}),"Following you will find a selection of my best projects completed during my ",Object(o.jsx)("strong",{children:"Bootcamp"})," in ",Object(o.jsx)("strong",{children:"SMU"}),".",Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]}),Object(o.jsx)(N,{title:"Tech Blog",subtitle:"A Blog Site for Techies",location:"tech-blog",live:"Heroku",image:d,content:Object(o.jsxs)(a.a.Fragment,{children:["This project is made using ",Object(o.jsx)("strong",{children:"Express' handlebars"})," to generate the front-end dynamically, and ",Object(o.jsx)("strong",{children:"Squelize"})," with ",Object(o.jsx)("strong",{children:"MySQL"})," to record blogger's entries in the back-end. It is live on ",Object(o.jsx)("strong",{children:"Heroku!"})]})}),Object(o.jsx)(N,{title:"Employee Management System",subtitle:"Manage Your Business",location:"employee-management-system",live:"none",image:b,content:Object(o.jsxs)(a.a.Fragment,{children:["This application helps a small business owner to organize the departments, roles, and employees in the company. It is a ",Object(o.jsx)("strong",{children:"back-end project"})," that uses the ",Object(o.jsx)("strong",{children:"terminal"})," as a front-end and interacts with ",Object(o.jsx)("strong",{children:"MySQL"})," and ",Object(o.jsx)("strong",{children:"InquirerJS"})," in the back-end."]})}),Object(o.jsx)(N,{title:"Test Taker",subtitle:"Show What You Know",location:"test-taker",live:"GitHub",image:h,content:Object(o.jsxs)(a.a.Fragment,{children:["This little app is built with ",Object(o.jsx)("strong",{children:"Javascript, CSS, and HTML"}),", and although it doesn't have a back-end per se, it saves your score using your browser's ",Object(o.jsx)("strong",{children:"local storage"}),"."]})}),Object(o.jsx)(N,{title:"E-commerce Backend",subtitle:"Organize Your Inventory",location:"ecommerce-backend",live:"none",image:m,content:Object(o.jsxs)(a.a.Fragment,{children:["This is a ",Object(o.jsx)("strong",{children:"backend project"})," that helps a small business organize their products. This application uses ",Object(o.jsx)("strong",{children:"Sequelize"})," and ",Object(o.jsx)("strong",{children:"Express JS"})," to abstract the SQL into regular Javascript code."]})}),Object(o.jsx)(N,{title:"This Portfolio Site",subtitle:"My Best Projects",location:"portfolio-react",live:"none",image:x,content:Object(o.jsxs)(a.a.Fragment,{children:["This is my website to show my projects, and it's in itself a whole project. I used ",Object(o.jsx)("strong",{children:"React, PureCSS, CSS, media queries"}),", and ",Object(o.jsx)("strong",{children:"HTML5"})," to build it. No pre-made templates!"]})}),Object(o.jsx)(N,{title:"Weather Dashboard",subtitle:"Do You Need an Umbrella?",location:"Wheather-Dashboard",live:"GitHub",image:u,content:Object(o.jsx)(a.a.Fragment,{children:"This little app aims to show the weather of any country in the world, along with the moon phases for the next five days... Werewolves, take note!"})}),Object(o.jsx)(N,{title:"Password Generator",subtitle:"Create Yours Today ",location:"password-generator",live:"GitHub",image:O,content:Object(o.jsx)(a.a.Fragment,{children:"Password generator is a webapp that creates a password following this criteria: It can have from 1 to 128 combinations of lowercase, uppercase, numeric, and/or special characters."})})]})})})}),Object(o.jsx)("div",{className:"end-portfolio"})]})}var y=c.p+"static/media/img1.912e52d0.jpeg",k=c.p+"static/media/img2.f303ed8e.jpeg",S=c.p+"static/media/img3.82edd0da.jpeg";function C(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("a",{id:"about"}),Object(o.jsx)("h2",{children:"About me"}),Object(o.jsx)("hr",{}),Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("p",{children:"Hi there! My name is Gianni Fontanot, and I have been programming computers in many languages since 1998. Back then I was working with now old technologies like PowerDynamo, Internet Information Server, and the Sybase database ... (have you ever heard of any of them?) and later with a much more modern set of languages as a Full Stack Java Web Developer with Java EE and SQL. "}),Object(o.jsxs)("p",{children:["In 2011, I did an intermission and decided to come to the United States to teach children in a bilingual classroom, and for ten years I enjoyed doing so. Now, after getting acquainted by the excellent ",Object(o.jsx)("strong",{children:"SMU Bootcamp instructors"})," about the new technologies developed in recent years, I am ready to get back to coding!"]})]})]})})})}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"polaroid-container",children:[Object(o.jsx)("div",{className:"polaroid rotate-15",children:Object(o.jsx)("img",{className:"pure-img img-about",src:y,alt:""})}),Object(o.jsx)("div",{className:"polaroid rotate20",children:Object(o.jsx)("img",{className:"pure-img img-about",src:k,alt:""})}),Object(o.jsx)("div",{className:"polaroid rotate10",children:Object(o.jsx)("img",{className:"pure-img img-about",src:S,alt:""})})]})]})}function T(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],m=Object(s.useState)(!1),b=Object(l.a)(m,2),h=b[0],u=b[1],O=Object(s.useState)(!1),x=Object(l.a)(O,2),g=x[0],p=x[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"pure-control-group",children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.InputName}),Object(o.jsx)("input",{id:e.id,type:"text",onFocus:function(e){u(!0),p(!1),console.log(e)},onBlur:function(e){u(!1),p(!0),a.match(/^[a-z][a-z\s]*$/i)?d(!0):d(!1),console.log(e)},value:a,onChange:function(e){n(e.target.value)},className:"input",placeholder:e.placeholder}),h&&Object(o.jsx)("span",{className:"pure-form-message-inline hint",children:"Only letters and spaces are acceptable."}),g&&!j&&Object(o.jsx)("p",{className:"pure-form-message-inline error",children:"The name you entered is required."}),g&&j&&Object(o.jsx)("p",{className:"pure-form-message-inline success",children:"The name you entered looks good."})]})})})}function I(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],m=Object(s.useState)(!1),b=Object(l.a)(m,2),h=b[0],u=b[1],O=Object(s.useState)(!1),x=Object(l.a)(O,2),g=x[0],p=x[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"pure-control-group",children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.InputName}),Object(o.jsx)("input",{id:e.id,type:"text",onFocus:function(e){u(!0),p(!1),console.log(e)},onBlur:function(e){u(!1),p(!0),a.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i)?d(!0):d(!1),console.log(e)},value:a,onChange:function(e){n(e.target.value)},className:"input",placeholder:e.placeholder}),h&&Object(o.jsx)("span",{className:"pure-form-message-inline hint",children:"Only letters and the @ are acceptable."}),g&&!j&&Object(o.jsx)("p",{className:"pure-form-message-inline error",children:"The email you entered is required. There is an error."}),g&&j&&Object(o.jsx)("p",{className:"pure-form-message-inline success",children:"The email you entered looks good."})]})})})}function F(e){var t=Object(s.useState)(""),c=Object(l.a)(t,2),a=c[0],n=c[1],i=Object(s.useState)(!1),r=Object(l.a)(i,2),j=r[0],d=r[1],m=Object(s.useState)(!1),b=Object(l.a)(m,2),h=b[0],u=b[1],O=Object(s.useState)(!1),x=Object(l.a)(O,2),g=x[0],p=x[1];return Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("div",{className:"pure-control-group",children:[Object(o.jsx)("label",{htmlFor:e.id,children:e.InputName}),Object(o.jsx)("textarea",{id:e.id,onFocus:function(e){u(!0),p(!1),console.log(e)},onBlur:function(e){u(!1),p(!0),a.match(/^[a-z][a-z\s]*$/i)?d(!0):d(!1),console.log(e)},value:a,onChange:function(e){n(e.target.value)},className:"input",children:e.placeholder}),h&&Object(o.jsx)("span",{className:"pure-form-message-inline hint",children:"Only letters and spaces are acceptable."}),g&&!j&&Object(o.jsx)("p",{className:"pure-form-message-inline error",children:"The name you entered is required."}),g&&j&&Object(o.jsx)("p",{className:"pure-form-message-inline success",children:"The name you entered looks good."})]})})})}function P(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("main",{children:Object(o.jsx)("div",{className:"contact-container flex-grid tenths",children:Object(o.jsxs)("div",{className:"col-10",children:[Object(o.jsx)("h2",{children:"Contact"}),Object(o.jsx)("hr",{}),Object(o.jsx)("h4",{children:"Drop me an email. Old-fashioned phone calls work too!"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"form-email",children:Object(o.jsx)("form",{className:"pure-form pure-form-aligned",children:Object(o.jsxs)("fieldset",{children:[Object(o.jsx)(T,{InputName:"name",id:"aligned-name",placeholder:"Please enter your name"}),Object(o.jsx)(I,{InputName:"email",id:"aligned-email",placeholder:"Please enter your email"}),Object(o.jsx)(F,{InputName:"message",id:"aligned-message",placeholder:"Enter something here..."}),Object(o.jsx)("div",{className:"pure-controls",children:Object(o.jsx)("button",{type:"submit",className:"pure-button pure-button-primary",children:"Submit"})})]})})})]})})})})})}var B=c.p+"static/media/resume.ea87001e.jpg";function H(){return Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"flex-grid",children:Object(o.jsx)("div",{className:"main-content",children:Object(o.jsx)("main",{children:Object(o.jsxs)("div",{className:"about-container",children:[Object(o.jsx)("h2",{children:"Resume"}),Object(o.jsx)("hr",{}),Object(o.jsx)("p",{children:"I am a proactive software development professional accustomed to working with Internet applications. Skilled at developing, optimizing, and reworking systems to meet specific customer requirements. Proficient in many types of programming languages. US Permanent Resident / W2."}),Object(o.jsxs)("div",{className:"flex-grid tenths resume-container",children:[Object(o.jsx)("div",{className:"skills-resume col-5 col-5-md  col-10-sm",children:Object(o.jsxs)("div",{className:"skill-list",children:[Object(o.jsx)("div",{children:"Skills"}),Object(o.jsx)("div",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"React, NodeJS, ExpressJS"}),Object(o.jsx)("li",{children:"Java, SQL, JSP"}),Object(o.jsx)("li",{children:"JavaScript, HTML5, CCS3"}),Object(o.jsx)("li",{children:"MongoDB, GraphQL"}),Object(o.jsx)("li",{children:"Bilingual (English / Spanish)"})]})})]})}),Object(o.jsx)("div",{className:"col-5 col-5-md col-10-sm ",children:Object(o.jsxs)("div",{className:"resume-link-container",children:[Object(o.jsx)("a",{className:"",href:"/portfolio-react/assets/pdf/resume.pdf",target:"_blank",children:"Resume"}),Object(o.jsx)("a",{className:"",href:"/portfolio-react/assets/pdf/resume.pdf",target:"_blank",children:Object(o.jsx)("img",{className:"img-resume",src:B})})]})})]})]})})})})})}var J=c.p+"static/media/linkedin.e65fd24a.png",M=c.p+"static/media/github.553c6615.png",z=c.p+"static/media/gmail.23d2a9b0.png",L=c.p+"static/media/overflowing.ee62b10b.png";function R(){return Object(o.jsx)("footer",{className:"",children:Object(o.jsxs)("div",{className:"footer-logo-container",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"logo-container",children:[Object(o.jsx)("div",{className:"logo-img",children:Object(o.jsx)("a",{href:"mailto:giannifontanot@gmail.com",children:Object(o.jsx)("img",{className:"img-thumbnail",alt:"",src:z})})}),Object(o.jsx)("div",{className:"logo-img",children:Object(o.jsx)("a",{href:"https://stackoverflow.com/users/15772854/gianni-fontanot",children:Object(o.jsx)("img",{className:"img-thumbnail",alt:"",src:L})})}),Object(o.jsx)("div",{className:"logo-img",children:Object(o.jsx)("a",{href:"https://www.linkedin.com/in/gianni-fontanot",children:Object(o.jsx)("img",{className:"img-thumbnail",alt:"",src:J})})}),Object(o.jsx)("div",{className:"logo-img",children:Object(o.jsx)("a",{href:"https://github.com/giannifontanot",children:Object(o.jsx)("img",{className:"img-thumbnail",alt:"",src:M})})})]})}),Object(o.jsx)("div",{className:"center-text",children:Object(o.jsxs)("span",{className:"copyright-message",children:["Icons made by",Object(o.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from",Object(o.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})})]})})}function D(){var e=Object(s.useState)("About"),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{pageToDraw:c,handlePageChange:function(e){return a(e)}}),"Portfolio"===c?Object(o.jsx)(w,{}):"About"===c?Object(o.jsx)(C,{}):"Portfolio"===c?Object(o.jsx)(w,{}):"Resume"===c?Object(o.jsx)(H,{}):"Contact"===c?Object(o.jsx)(P,{}):Object(o.jsx)(C,{}),Object(o.jsx)(R,{})]})}var E=function(){return Object(o.jsx)(D,{})};c(12),c(13);i.a.render(Object(o.jsx)(E,{}),document.getElementById("root"))},9:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.9ed3a88b.chunk.js.map