(this.webpackJsonpconstruction=this.webpackJsonpconstruction||[]).push([[0],{37:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var r=t(1),i=t(2),a=t.n(i),o=t(23),c=t.n(o),s=t(7),d=t(12),l=t(5),h=t(24),p=t.n(h),m=(t(36),t(37),t(4)),b=t(3),g=[{title:"Home",link:"/"},{title:"Mortgage",link:"/mortgage"},{title:"Rentals",link:"/rental"},{title:"Buy",link:"/buy"}];function u(){var e=Object(m.a)(["\n  background: ",";\n\n  white-space: nowrap;\n  outline: none;\n  border: none;\n  min-width: 100px;\n  max-width: 200px;\n  cursor: pointer;\n  text-decoration: none;\n  transition: 0.3s;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  transition: all 0.3s linear;\n\n  &:hover {\n    transform: translateY(-1px);\n    background: #cd853f;\n    color: white;\n  }\n"]);return u=function(){return e},e}var j=Object(b.c)(s.b)(u(),(function(e){return e.primary?"#000d1a":"CD853F"}),(function(e){return e.big?"16px 40px":"14px 24px"}),(function(e){return e.primary?"#fff":"#000d1a"}),(function(e){return e.big?"20px":"14px"})),f=t(28);function x(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return x=function(){return e},e}function O(){var e=Object(m.a)(["\n  display: flex;\n  color: #fff;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  cursor: pointer;\n  transition: 0.2s linear;\n  &:hover {\n    color: #000d1a;\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(m.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(4, 80px);\n  text-align: center;\n  margin-bottom: 4rem;\n  @media screen and (max-width: 480px) {\n    grid-template-rows: repeat(4, 60px);\n  }\n"]);return w=function(){return e},e}function v(){var e=Object(m.a)([""]);return v=function(){return e},e}function y(){var e=Object(m.a)(["\n  color: #000d1a;\n"]);return y=function(){return e},e}function H(){var e=Object(m.a)(["\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]);return H=function(){return e},e}function k(){var e=Object(m.a)(["\n  position: fixed;\n  z-index: 685;\n  width: 100%;\n  height: 100%;\n  background: rgb(100, 150, 150);\n  display: grid;\n  align-items: center;\n  top: ",";\n  left: 0;\n  transition: 0.3s ease-in-out;\n  opacity: ",";\n"]);return k=function(){return e},e}var C=b.c.div(k(),(function(e){return e.isOpen?"0":"-100%"}),(function(e){return e.isOpen?"1":"0"})),R=b.c.div(H()),_=Object(b.c)(f.a)(y()),N=b.c.div(v()),z=b.c.div(w()),B=b.c.div(O()),E=b.c.div(x()),I=function(e){var n=e.isOpen,t=e.toggle;return Object(r.jsxs)(C,{isOpen:n,onClick:t,children:[Object(r.jsx)(R,{onClick:t,children:Object(r.jsx)(_,{})}),Object(r.jsxs)(N,{children:[Object(r.jsx)(z,{children:g.map((function(e,n){return Object(r.jsx)(B,{to:e.link,children:e.title},n)}))}),Object(r.jsx)(E,{children:Object(r.jsxs)(j,{primary:"true",round:"true",big:"true",to:"/contact",children:[" ","Contact Us"]})})]})]})},S=t(29);function M(){var e=Object(m.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n  text-decoration: none;\n"]);return M=function(){return e},e}var A=b.c.nav.withConfig({displayName:"Navbar__Nav",componentId:"dcmksi-0"})(["height:60px;display:flex;justify-content:space-between;padding:1rem 2rem;z-index:100;position:fixed;width:100%;text-decoration:none;background:",";"],(function(e){return e.y>600?"rgb(0, 0, 50)":""})),T=Object(b.b)(M()),L=Object(b.c)(s.b).withConfig({displayName:"Navbar__Logo",componentId:"dcmksi-1"})(["text-decoration:line-through;text-shadow:0.5px 0.5px;font-size:1.5rem;span{color:orange;font-size:1rem;text-shadow:0;}",""],T),q=Object(b.c)(S.a).withConfig({displayName:"Navbar__MenuBars",componentId:"dcmksi-2"})(["display:none;height:40px;width:40px;color:white;@media screen and (max-width:768px){display:block;}"]),P=b.c.div.withConfig({displayName:"Navbar__NavMenu",componentId:"dcmksi-3"})(["display:flex;align-items:center;margin-right:-48px;@media screen and (max-width:768px){display:none;}"]),V=Object(b.c)(s.b).withConfig({displayName:"Navbar__NavMenuLinks",componentId:"dcmksi-4"})(["transition:all 0.3s linear;"," &:hover{color:orange;}"],T),F=b.c.div.withConfig({displayName:"Navbar__NavBtn",componentId:"dcmksi-5"})(["display:flex;align-items:center;margin-right:24px;@media screen and (max-width:768px){display:none;}"]),G=function(e){var n=e.toggle,t=Object(i.useState)(300),a=Object(d.a)(t,2),o=a[0],c=a[1],s=function(){c(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[o]),Object(r.jsxs)(A,{y:o,children:[Object(r.jsxs)(L,{to:"/",children:["H",Object(r.jsx)("span",{children:"&"}),"H"]}),Object(r.jsx)(q,{onClick:n}),Object(r.jsx)(P,{children:g.map((function(e,n){return Object(r.jsx)(V,{to:e.link,children:e.title},n)}))}),Object(r.jsx)(F,{children:Object(r.jsx)(j,{to:"/contactRentals",primary:!0,children:"Contact Us"})})]})};function Y(){var e=Object(m.a)(["\n \n\n *{\n       margin:0;\n       padding:0;\n       box-sizing: border-box;\n       font-family:'Montserrat' , sans-serif;\n }\n html , body {\n       overflow-x: hidden;\n }\n\n"]);return Y=function(){return e},e}var D=Object(b.a)(Y());function W(){var e=Object(m.a)(["\n  a {\n    padding: 1% 0;\n    font-size: 0.8rem;\n    text-decoration: none;\n    color: white;\n\n    &:hover {\n      color: orange;\n    }\n  }\n"]);return W=function(){return e},e}function U(){var e=Object(m.a)(["\n  width: 100%;\n  padding-top: 2%;\n  border-top: 1px solid white;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2% 0;\n  p {\n    font-size: 0.8rem;\n  }\n"]);return U=function(){return e},e}function Z(){var e=Object(m.a)(["\n  width: 90%;\n\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 4% 0;\n  div {\n    width: 25%;\n    h1 {\n      font-size: 1.2rem;\n      margin: 2% 0;\n    }\n    p {\n      font-size: 0.9rem;\n    }\n  }\n"]);return Z=function(){return e},e}function J(){var e=Object(m.a)(["\n  width: 100%;\n\n  background: rgb(0, 0, 30);\n  margin-top: 5%;\n  margin-bottom: 0;\n  color: wheat;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return J=function(){return e},e}var K=b.c.div(J()),X=b.c.div(Z()),Q=b.c.div(U()),$=b.c.div(W()),ee=function(){return Object(r.jsxs)(K,{children:[Object(r.jsxs)(X,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"About Us"}),Object(r.jsxs)("p",{children:[" ","A new property agency in the centre of Birmingham. Working with local communtiy to bring affordable property for residents"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Get in touch"}),Object(r.jsxs)("p",{children:[" ","185 High Street ",Object(r.jsx)("br",{}),"Edgbaston ",Object(r.jsx)("br",{}),"Birmingham ",Object(r.jsx)("br",{})," 012152974521"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Affliate Companies"}),Object(r.jsxs)($,{children:[" ",Object(r.jsx)("a",{href:"https://www.zoopla.co.uk/",children:"Zoopla"})]}),Object(r.jsxs)($,{children:[" ",Object(r.jsx)("a",{href:"https://www.zoopla.co.uk/",children:"Zillow"})]}),Object(r.jsxs)($,{children:[" ",Object(r.jsx)("a",{href:"https://www.zoopla.co.uk/",children:"Realtor"})]})]})]}),Object(r.jsx)(Q,{children:Object(r.jsxs)("p",{children:["Copyrights \xa9 2021 - Samuel Mekonen, All Rights Reserved."," ",Object(r.jsx)("a",{href:"https://www.zoopla.co.uk/",children:"Zoopla"})]})})]})},ne=t(21),te=t.p+"static/media/a.6178770e.jpg",re=t.p+"static/media/b.29c46946.jpg",ie={heading:"Testimonies",paragraphOne:"'A huge thank you to Sasha and Lucie for their outstanding service and continuous help in the process of buying our first house.'",paragraphTwo:"'Amazing support from stuff and management in securing my flat'",buttonLabel:"View More",to:"/rental",image:te,reverse:!1,delay:100},ae={heading:"Choose Us",paragraphOne:"Connells is committed to providing the highest levels of customer care alongside a range of products and services. We understand that deciding what to do with any property can be a stressful time. That\u2019s why we\u2019ve based the success of Connells on one simple philosophy; to remove all those stresses and strains by offering a personal yet innovative approach with you in mind. Since the first Connells opened its doors in 1936, the company has risen to become one of the largest and most successful estate agency groups in the country.!",buttonLabel:"View More",to:"/rental",image:re,reverse:!0,delay:100},oe=t.p+"static/media/c.fa0dabc3.jpg",ce=t.p+"static/media/d.acf3880e.jpg",se=t.p+"static/media/e.6d0533da.jpg",de=[{title:"New property in Great Barr",price:"\xa3 450,000",path:"/buy",label:"View Home",image:te,alt:"house"},{title:"Newly refurbished property",price:"\xa3 368,800",path:"/buy",label:"View Home",image:re,alt:"house"},{title:"Luxury house in Hamstead",price:"\xa3 515,214",path:"/buy",label:"View Home",image:oe,alt:"house"},{title:"Brand new flat in Edgbaston",price:"\xa3 215,214",path:"/buy",label:"View Home",image:ce,alt:"house"},{title:"Two bed room flat to rent",price:"\xa3 850",path:"/rental",label:"View Home",image:se,alt:"house"}],le=t(30),he=t(16);function pe(){var e=Object(m.a)(["\n  width: 40px;\n  height: 40px;\n  color: #fff;\n  cursor: pointer;\n  background: #000d1a;\n  border-radius: 50px;\n  padding: 10px;\n  margin-right: 1rem;\n  user-select: none;\n  transition: 0.3s;\n\n  &:hover {\n    background: #cd853f;\n    transform: scale(1.05);\n  }\n"]);return pe=function(){return e},e}var me=b.c.section.withConfig({displayName:"Hero__HeroSection",componentId:"q8tknf-0"})(["height:100vh;max-height:1100px;position:relative;overflow:hidden;"]),be=b.c.div.withConfig({displayName:"Hero__HeroWrapper",componentId:"q8tknf-1"})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]),ge=b.c.div.withConfig({displayName:"Hero__HeroSlide",componentId:"q8tknf-2"})(["z-index:1;width:100%;height:100%;"]),ue=b.c.div.withConfig({displayName:"Hero__HeroSlider",componentId:"q8tknf-3"})(['position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:"";position:absolute;z-index:2;width:100vw;height:100vh;botoom:0;left:0;overflow:hidden;opacity:0.4;background:linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,1));}']),je=b.c.img.withConfig({displayName:"Hero__HeroImage",componentId:"q8tknf-4"})(["background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;"]),fe=b.c.div.withConfig({displayName:"Hero__HeroContent",componentId:"q8tknf-5"})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1600px;width:calc(100%-100px);color:#fff;h1{font-size:clamp(1rem,8vw,3rem);font-weight:400;text-transform:uppercase;text-shadow:0px 0px 20px rgba(0,0,0,0.5) text-align:left;margin-bottom:0.8rem;}p{margin-bottom:1.2rem;text-shadow:0px 0px 20px rgba(0,0,0,0.5);color:rgb(255,153,0);font-weight:bold;}"]),xe=b.c.div.withConfig({displayName:"Hero__SliderButtons",componentId:"q8tknf-6"})(["position:absolute;bottom:50px;right:50px;display:flex;z-index:10;"]),Oe=Object(b.c)(le.a).withConfig({displayName:"Hero__Arrow",componentId:"q8tknf-7"})(["margin-left:0.5rem;"]),we=Object(b.b)(pe()),ve=Object(b.c)(he.a).withConfig({displayName:"Hero__PrevArrow",componentId:"q8tknf-8"})(["",""],we),ye=Object(b.c)(he.b).withConfig({displayName:"Hero__NextArrow",componentId:"q8tknf-9"})(["",""],we),He=Object(b.c)(j).withConfig({displayName:"Hero___StyledButton",componentId:"q8tknf-10"})(["max-width:160px;"]),ke=function(e){var n=e.slides,t=Object(i.useState)(0),a=Object(d.a)(t,2),o=a[0],c=a[1],s=n.length,l=Object(i.useRef)(null);Object(i.useEffect)((function(){return l.current=setTimeout((function(){c(o===s-1?0:o+1)}),3e3),function(){l.current&&clearTimeout(l.current)}}),[o,s]);return!Array.isArray(n)||n.length<=0?null:Object(r.jsx)(me,{children:Object(r.jsxs)(be,{children:[" ",n.map((function(e,n){return Object(r.jsx)(ge,{children:n===o&&Object(r.jsxs)(ue,{children:[Object(r.jsx)(je,{src:e.image,alt:e.alt}),Object(r.jsxs)(fe,{children:[Object(r.jsx)("h1",{"data-aos":"fade-down",children:e.title}),Object(r.jsx)("p",{"data-aos":"fade-down",children:e.price}),Object(r.jsxs)(He,{"data-aos":"fade-up",to:e.path,primary:!0,children:[e.label,Object(r.jsx)(Oe,{})]})]})]})},n)})),Object(r.jsxs)(xe,{children:[Object(r.jsx)(ve,{onClick:function(){c(0===o?s-1:o-1),console.log(o)}}),Object(r.jsx)(ye,{onClick:function(){c(o===s-1?0:o+1)}})]})]})})};function Ce(){var e=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n\n  padding: 1rem 2rem;\n  order: ",";\n\n  @media screen and (max-width: 768px) {\n    order: ",";\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  @media screen and (max-width: 768px) {\n    width: 90%;\n    height: 90%;\n  }\n"]);return Ce=function(){return e},e}function Re(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  line-height: 1.4;\n  padding: 1rem 2rem;\n\n  order: ",";\n  h1 {\n    margin-bottom: 1rem;\n    font-size: clamp(1.5rem, 6vw, 2rem);\n    color: rgb(255, 153, 0);\n  }\n  p {\n    margin-bottom: 2rem;\n  }\n"]);return Re=function(){return e},e}function _e(){var e=Object(m.a)(["\n  padding: 3rem calc((100vw-1300px) / 2);\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 400px;\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]);return _e=function(){return e},e}function Ne(){var e=Object(m.a)(["\n  width: 100%;\n  height: 80%;\n  padding: 3rem 0rem;\n"]);return Ne=function(){return e},e}var ze=b.c.section(Ne()),Be=b.c.div(_e()),Ee=b.c.div(Re(),(function(e){return e.reverse?"2":"1"})),Ie=b.c.div(Ce(),(function(e){return e.reverse?"1":"2"}),(function(e){return e.reverse?"2":"1"})),Se=function(e){var n=e.heading,t=e.paragraphOne,i=e.paragraphTwo,a=e.buttonLabel,o=e.reverse,c=e.image;return Object(r.jsx)(ze,{children:Object(r.jsxs)(Be,{children:[Object(r.jsxs)(Ee,{reverse:o,children:[Object(r.jsx)("h1",{children:n}),Object(r.jsx)("p",{children:t}),Object(r.jsx)("p",{children:i}),Object(r.jsx)(j,{to:"/rental",primary:"true",children:a})]}),Object(r.jsx)(Ie,{reverse:o,"data-aos":"fade-left",children:Object(r.jsx)("img",{src:c,alt:""})})]})})},Me=[{title:"CEO ",paragraph:"When Hilary Huang cofounded H&H, in late 2020, she focused on a single niche: building a company that targets the interest of Birmingham Residents.",path:"/contactCEO",label:"Contact our CEO",image:t.p+"static/media/ceo.a5786bef.jpg",alt:"house"},{title:"Rent Officer",paragraph:"Our rent officers consider all factors such as location and state of repair of the home but should disregard personal circumstances.",path:"/contactRentals",label:"Contact our Officer",image:t.p+"static/media/rental.49833382.jpg",alt:"house"},{title:"Directors",paragraph:"We have two active company directors and three non attending directors.",path:"/contactDirectors",label:"Contact our Directors",image:t.p+"static/media/directors.cdf296da.jpg",alt:"house"}];function Ae(){var e=Object(m.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 2.5rem 1rem 2.5rem;\n  color: wheat;\n\n  img {\n    width: 90%;\n    height: 80%;\n    object-fit: cover;\n  }\n\n  h1 {\n    margin: 0.2rem 1rem 1rem 0;\n    padding-top: 0.5rem;\n\n    font-size: clamp(1rem, 6vw, 1.2rem);\n    justify-self: center;\n  }\n  p {\n    margin-bottom: 2rem;\n    font-size: 0.8rem;\n  }\n"]);return Ae=function(){return e},e}function Te(){var e=Object(m.a)(["\n  padding: 3rem 1rem;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 400px;\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n  }\n"]);return Te=function(){return e},e}function Le(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 3rem 0rem;\n  background: black;\n  overflow: hidden;\n"]);return Le=function(){return e},e}var qe=b.c.section(Le()),Pe=b.c.div(Te()),Ve=b.c.div(Ae()),Fe=function(){return Object(r.jsx)(qe,{children:Object(r.jsx)(Pe,{children:Me.map((function(e,n){return Object(r.jsxs)(Ve,{"data-aos":"fade-in-left",children:[Object(r.jsx)("img",{src:e.image,alt:""}),Object(r.jsxs)("h1",{children:[" ",e.title]}),Object(r.jsxs)("p",{children:[" ",e.paragraph]}),Object(r.jsx)(j,{to:e.path,primary:"true",children:e.label})]},n)}))})})},Ge=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ke,{slides:de}),Object(r.jsx)(Se,Object(ne.a)({},ie)),Object(r.jsx)(Se,Object(ne.a)({},ae)),Object(r.jsx)(Fe,{})]})},Ye=[{title:"Santander mortgage and loan",paragraph:"First time buyers welcome",path:"/homes",label:"View Home",image:t.p+"static/media/a.c233cb72.jpg",alt:"house"},{title:"HSBC Mortage Service",paragraph:"0% mortgage available for first time buyers",path:"/homes",label:"View Home",image:t.p+"static/media/b.979be27d.jpg",alt:"house"},{title:"Barclays mortgage at a fantastic rate",paragraph:"Remortgage your house",path:"/homes",label:"View Home",image:t.p+"static/media/c.ed1343b7.jpg",alt:"house"},{title:"NatWest Bank",paragraph:"World famouse business bank",path:"/homes",label:"View Home",image:t.p+"static/media/d.b0b00394.jpg",alt:"house"}],De=t.p+"static/media/g.ece01387.jpg",We=b.c.section.withConfig({displayName:"Mortgage__HeroSection",componentId:"bc3o7l-0"})(["position:relative;overflow:hidden;"]),Ue=b.c.div.withConfig({displayName:"Mortgage__HeroWrapper",componentId:"bc3o7l-1"})(["width:100%;height:80vh;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]),Ze=b.c.div.withConfig({displayName:"Mortgage__HeroSlider",componentId:"bc3o7l-2"})(['position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:"";position:absolute;z-index:2;width:100vw;height:100vh;botoom:0;left:0;overflow:hidden;opacity:0.4;background:linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,1));}']),Je=b.c.img.withConfig({displayName:"Mortgage__HeroImage",componentId:"bc3o7l-3"})(["position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;filter:grayscale(100%);"]),Ke=b.c.div.withConfig({displayName:"Mortgage__HeroContent",componentId:"bc3o7l-4"})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1600px;width:calc(100%-100px);color:#fff;h1{font-size:clamp(1rem,8vw,3rem);font-weight:400;text-transform:uppercase;text-shadow:0px 0px 20px rgba(0,0,0,0.5) text-align:left;margin-bottom:0.8rem;}p{margin-bottom:1.2rem;text-shadow:0px 0px 20px rgba(0,0,0,0.5);}"]),Xe=b.c.div.withConfig({displayName:"Mortgage__MainContent",componentId:"bc3o7l-5"})(["display:grid;grid-template-columns:3fr 1fr;grid-template-rows:1fr;margin:3rem 0;"]),Qe=b.c.div.withConfig({displayName:"Mortgage__LeftContent",componentId:"bc3o7l-6"})(["background:rgb(0,0,50);margin-right:0rem;padding:2rem 1rem;color:wheat;h1{padding:2rem 2rem;word-spacing:6px;}p{padding:0.8rem 2rem;word-spacing:6px;font-size:0.8rem;}"]),$e=b.c.div.withConfig({displayName:"Mortgage__RightContent",componentId:"bc3o7l-7"})(["background:rgb(0,0,50);padding:2rem 1rem 3rem 1rem;color:wheat;h1{font-size:0.9rem;padding:1rem 1rem;color:rgb(240,20,0);}ul{padding:1rem 2rem;}p{padding:2rem 1rem;}"]),en=b.c.div.withConfig({displayName:"Mortgage__SubRail",componentId:"bc3o7l-8"})(["display:grid;padding:2rem;grid-template-columns:1fr 1fr;grid-template-rows:1fr;margin:2rem auto 2rem 4rem;@media screen and (max-width:768px){grid-template-columns:1fr;}"]),nn=b.c.div.withConfig({displayName:"Mortgage__RailCard",componentId:"bc3o7l-9"})(["box-shadow:0 4px 8px 0 rgba(0,0,0,0.3),0 6px 20px 0 rgba(0,0,0,0.19);padding:1rem;display:flex;justify-content:center;align-items:center;flex-direction:column;width:70%;img{width:250px;height:250px;}h1{margin:0;padding:0.5rem 0.2rem;font-size:1rem;color:wheat;word-spacing:6px;}p{margin:0;padding:0;width:100%;color:red;word-spacing:6px;}"]),tn=function(){return Object(r.jsxs)(We,{children:[Object(r.jsx)(Ue,{children:Object(r.jsxs)(Ze,{children:[Object(r.jsx)(Je,{src:De,alt:"train"}),Object(r.jsxs)(Ke,{children:[Object(r.jsx)("h1",{"data-aos":"fade-down",children:"Free mortgage advice"}),Object(r.jsx)("p",{"data-aos":"fade-down",children:"Contact us before its too late"})]})]})}),Object(r.jsxs)(Xe,{children:[Object(r.jsxs)(Qe,{children:[Object(r.jsx)("h1",{children:"MORTGAGE SERVICES"}),Object(r.jsx)("p",{children:"Connells Mortgage Services are fully focused on customers needs and available through all our estate agency branches."}),Object(r.jsx)("p",{children:"We take the responsibility of finding you the right mortgage very seriously, which is why Connells continuously monitors the quality and standard of our qualified consultants."}),Object(r.jsx)("h1",{children:"FOR PEOPLE WHO ARE THINKING OF MOVING HOME OR REMORTGAGING"}),Object(r.jsx)("p",{children:"We will provide advice and information about all the costs and charges involved when buying a new home or remortgaging and how some of these could be reduced. Meanwhile you can contact the following banks for tailored mortgage advise."}),Object(r.jsx)(en,{children:Ye.map((function(e,n){return Object(r.jsxs)(nn,{children:[Object(r.jsx)("img",{src:e.image,alt:""}),Object(r.jsx)("h1",{children:e.title}),Object(r.jsx)("p",{children:e.paragraph})]},n)}))})]}),Object(r.jsxs)($e,{children:[Object(r.jsx)("h1",{children:"How we can help?"}),Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"Expert Advice"}),Object(r.jsx)("li",{children:"Moving Home"}),Object(r.jsx)("li",{children:"First time buyers"}),Object(r.jsx)("li",{children:"Remortgage"})]}),Object(r.jsx)("p",{children:"YOUR HOME OR PROPERTY MAY BE REPOSSESSED IF YOU DO NOT KEEP UP REPAYMENTS ON YOUR MORTGAGE."}),Object(r.jsx)("h1",{children:"Remortgage?"}),Object(r.jsx)("p",{children:"YOU MAY HAVE TO PAY AN EARLY REPAYMENT CHARGE TO YOUR EXISTING LENDER IF YOU RE-MORTGAGE."}),Object(r.jsx)("h1",{children:"Open 7 days a week"}),Object(r.jsxs)("p",{children:["Busy schedule? Always on the go? We're here to make life easy. That's why our conveyancing service is open 7 days a week and late nights.",Object(r.jsx)("p",{children:"Monday - Friday 9.00am to 7.00pm"}),Object(r.jsx)("p",{children:"Saturday 9.30am to 4.30pm "}),Object(r.jsx)("p",{children:"Subday 10.00am to 3.30pm"}),Object(r.jsxs)("p",{children:[" ","In fact we're only closed on Christmas Day, Easter Sunday and Bank Holidays."]})]})]})]})]})},rn=t.p+"static/media/photo-1.185c5f0b.jpg",an=t.p+"static/media/a.affc404b.jpg",on=t.p+"static/media/b.edf3c730.jpg",cn=[{id:"456452",title:"Northfield Road  Birmingham",price:"700 per month",label:"1 bedroom property",image:an,alt:"house"},{id:"456452",title:"Hamstead Road Handsworth Birmingham",price:"750 per month",label:"3 bedroom property",image:on,alt:"house"},{id:"456452",title:"Soho Road Handsworth Birmingham",price:"890 per month",label:"2 bedroom  property",image:t.p+"static/media/c.12cf9c85.jpg",alt:"house"},{id:"456452",title:"Church Road Handsworth Birmingham",price:"690 per month",label:"3 bedroom detached property",image:t.p+"static/media/d.edf3c730.jpg",alt:"house"},{id:"456452",title:"Aston Road Handsworth Birmingham",price:"980 per month",label:"2 bedroom detached proprty",image:t.p+"static/media/e.270356c8.jpg",alt:"house"},{id:"456452",title:"Villa Road Handsworth Birmingham",price:"700 per month",label:"3 bedroom detached property",image:t.p+"static/media/f.17abf67e.jpg",alt:"house"},{id:"456452",title:"Soho Hill Handsworth Birmingham",price:"1100 per month",label:"2 bedroom flat",image:t.p+"static/media/g.582d2c49.jpg",alt:"house"},{id:"456452",title:"Soho Road Handsworth Birmingham",price:"980 per month",label:"2 bedroom detached house",image:t.p+"static/media/h.58105b05.jpg",alt:"house"},{id:"456452",title:"Hamstead Road Handsworth Birmingham",price:"800 per month",label:"1 bedroom detached house",image:t.p+"static/media/i.55921f50.jpg",alt:"house"},{id:"456452",title:"Lozzels Road Handsworth Birmingham",price:"770 per month",label:"3 bedroom flat",image:t.p+"static/media/j.375c354d.jpg",alt:"house"},{id:"456452",title:"Brewbery Road Handsworth Birmingham",price:"870 per month",label:"3 bedroom detached house",image:t.p+"static/media/k.a395b631.jpg",alt:"house"},{id:"456452",title:"All Saints Road Handsworth Birmingham",price:"700 per month",label:"2 bedroom detached house",image:on,alt:"house"}];function sn(){var e=Object(m.a)(["\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.8);\n"]);return sn=function(){return e},e}function dn(){var e=Object(m.a)(["\n  width: 100%;\n  height: 5rem;\n  padding: 2rem 2rem 0 2.5rem;\n  h1 {\n    font-size: 1.5rem;\n    color: brown;\n  }\n"]);return dn=function(){return e},e}function ln(){var e=Object(m.a)(["\n  height: 350px;\n  transition: 0.2s linear;\n  img {\n    width: 100%;\n    height: 60%;\n  }\n  h1 {\n    font-size: 1rem;\n    padding: 0.3rem 0.2rem;\n  }\n  p {\n    font-size: 0.8rem;\n    padding: 0.3rem 0.2rem;\n    font-weight: bold;\n    color: brown;\n  }\n  h3 {\n    font-size: 0.9rem;\n    font-weight: normal;\n    padding: 0.3rem 0.2rem;\n  }\n  &:hover {\n    transform: scale(1.03);\n  }\n"]);return ln=function(){return e},e}function hn(){var e=Object(m.a)(["\n  background: rgba(240, 240, 240, 0.7);\n  width: 96%;\n  margin: 0.5rem auto;\n  padding: 0.5rem 0.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  //grid-template-columns: repeat(4, minmax(100px, 300px));\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-template-rows: 350px;\n"]);return hn=function(){return e},e}function pn(){var e=Object(m.a)(["\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(",');\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 10;\n  height: calc(70vh - 60px);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  color: brown;\n  position: relative;\n  h1 {\n    position: absolute;\n    top: 50%;\n    left: 2%;\n    margin-left: 5rem;\n    z-index: 50;\n  }\n  p {\n    position: absolute;\n    top: 65%;\n    left: 2%;\n    margin-left: 5rem;\n  }\n  &::after {\n    content: "";\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.2),\n      rgba(100, 100, 100, 0.1)\n    );\n    display: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n']);return pn=function(){return e},e}function mn(){var e=Object(m.a)([""]);return mn=function(){return e},e}function bn(){var e=Object(m.a)(["\n  width: 100vw;\n  height: 1500px;\n  overflow-y: scroll;\n"]);return bn=function(){return e},e}var gn=b.c.div(bn()),un=b.c.div(mn()),jn=b.c.div(pn(),se),fn=b.c.div(hn()),xn=b.c.div(ln()),On=b.c.div(dn()),wn=Object(b.c)(s.b)(sn()),vn=function(){return Object(r.jsx)(gn,{children:Object(r.jsxs)(un,{children:[Object(r.jsx)(jn,{children:Object(r.jsx)("p",{})}),Object(r.jsx)(On,{children:Object(r.jsx)("h1",{children:"Current Properties in Birmingham"})}),Object(r.jsx)(fn,{children:cn.map((function(e,n){return Object(r.jsx)(wn,{to:"/contactRentals",children:Object(r.jsxs)(xn,{children:[Object(r.jsx)("img",{src:"".concat(e.image),alt:""}),Object(r.jsx)("h1",{children:e.title}),Object(r.jsxs)("p",{children:["\xa3",e.price]}),Object(r.jsx)("h3",{children:e.label})]})})}))})]})})},yn=t.p+"static/media/a.d1cef87c.jpg",Hn=t.p+"static/media/b.4138ca20.jpg",kn=[{id:"456452",title:"Northfield Road  Birmingham",price:"215,520",label:"1 bedroom property",image:yn,alt:"house"},{id:"456452",title:"Hamstead Road Handsworth Birmingham",price:"750,000",label:"3 bedroom property",image:Hn,alt:"house"},{id:"456452",title:"Soho Road Handsworth Birmingham",price:"789,000",label:"2 bedroom  property",image:t.p+"static/media/c.90e601ee.jpg",alt:"house"},{id:"456452",title:"Church Road Handsworth Birmingham",price:"269,000",label:"3 bedroom detached property",image:t.p+"static/media/d.2cc1bf73.jpg",alt:"house"},{id:"456452",title:"Aston Road Handsworth Birmingham",price:"299,000",label:"2 bedroom detached proprty",image:t.p+"static/media/e.a9459176.jpg",alt:"house"},{id:"456452",title:"Villa Road Handsworth Birmingham",price:"455,900",label:"3 bedroom detached property",image:t.p+"static/media/f.a9249e06.jpg",alt:"house"},{id:"456452",title:"Soho Hill Handsworth Birmingham",price:"200,000",label:"2 bedroom flat",image:t.p+"static/media/g.928d9375.jpg",alt:"house"},{id:"456452",title:"Soho Road Handsworth Birmingham",price:"155,500",label:"2 bedroom detached house",image:t.p+"static/media/h.262cc0f3.jpg",alt:"house"},{id:"456452",title:"Hamstead Road Handsworth Birmingham",price:"455,000",label:"1 bedroom detached house",image:t.p+"static/media/i.312809d8.jpg",alt:"house"},{id:"456452",title:"Lozzels Road Handsworth Birmingham",price:"250,000",label:"3 bedroom flat",image:t.p+"static/media/j.87c9ec06.jpg",alt:"house"},{id:"456452",title:"Brewbery Road Handsworth Birmingham",price:"350,200",label:"3 bedroom detached house",image:t.p+"static/media/k.6cb2fa41.jpg",alt:"house"},{id:"456452",title:"All Saints Road Handsworth Birmingham",price:"250,000",label:"2 bedroom detached house",image:Hn,alt:"house"}];function Cn(){var e=Object(m.a)(["\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.8);\n"]);return Cn=function(){return e},e}function Rn(){var e=Object(m.a)(["\n  width: 100%;\n  height: 5rem;\n  padding: 2rem 2rem 0 2.5rem;\n  h1 {\n    font-size: 1.3rem;\n    color: brown;\n    text-decoration: none;\n  }\n"]);return Rn=function(){return e},e}function _n(){var e=Object(m.a)(["\n  height: 350px;\n  transition: 0.2s linear;\n  img {\n    width: 100%;\n    height: 60%;\n  }\n  h1 {\n    font-size: 0.9rem;\n    padding: 0.3rem 0.2rem;\n  }\n  p {\n    font-size: 0.8rem;\n    padding: 0.3rem 0.2rem;\n    font-weight: bold;\n    color: brown;\n  }\n  h3 {\n    font-size: 0.9rem;\n    font-weight: normal;\n    padding: 0.3rem 0.2rem;\n  }\n  &:hover {\n    transform: scale(1.03);\n  }\n"]);return _n=function(){return e},e}function Nn(){var e=Object(m.a)(["\n  background: rgba(240, 240, 240, 0.7);\n  width: 96%;\n  margin: 2rem auto;\n  padding: 0.5rem 0.5rem;\n  display: grid;\n  grid-gap: 1rem;\n  //grid-template-columns: repeat(4, minmax(100px, 300px));\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-template-rows: 350px;\n"]);return Nn=function(){return e},e}function zn(){var e=Object(m.a)(["\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(",');\n\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  z-index: 10;\n  height: calc(70vh - 60px);\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  color: wheat;\n  position: relative;\n  h1 {\n    position: absolute;\n    top: 50%;\n    left: 2%;\n    margin-left: 5rem;\n    z-index: 50;\n  }\n  p {\n    position: absolute;\n    top: 65%;\n    left: 2%;\n    margin-left: 5rem;\n  }\n  &::after {\n    content: "";\n    background-image: linear-gradient(\n      to right,\n      rgba(0, 0, 0, 0.2),\n      rgba(100, 100, 100, 0.1)\n    );\n    display: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n']);return zn=function(){return e},e}function Bn(){var e=Object(m.a)([""]);return Bn=function(){return e},e}function En(){var e=Object(m.a)(["\n  width: 100vw;\n  height: 1500px;\n  overflow-y: scroll;\n"]);return En=function(){return e},e}var In=b.c.div(En()),Sn=b.c.div(Bn()),Mn=b.c.div(zn(),De),An=b.c.div(Nn()),Tn=b.c.div(_n()),Ln=b.c.div(Rn()),qn=Object(b.c)(s.b)(Cn()),Pn=function(){return Object(r.jsx)(In,{children:Object(r.jsxs)(Sn,{children:[Object(r.jsx)(Mn,{g:rn,children:Object(r.jsx)("p",{})}),Object(r.jsx)(Ln,{children:Object(r.jsx)("h1",{children:"Current Properties for sale"})}),Object(r.jsx)(An,{children:kn.map((function(e,n){return Object(r.jsx)(qn,{to:"/contactRentals",children:Object(r.jsxs)(Tn,{children:[Object(r.jsx)("img",{src:"".concat(e.image),alt:""}),Object(r.jsx)("h1",{children:e.title}),Object(r.jsxs)("p",{children:["\xa3",e.price]}),Object(r.jsx)("h3",{children:e.label})]})})}))})]})})};function Vn(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(0, 0, 20);\n  h1 {\n    padding: 7rem 1rem 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    border-bottom: 1px solid orange;\n  }\n  p {\n    padding: 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    line-height: 1.8;\n  }\n"]);return Vn=function(){return e},e}var Fn=b.c.div(Vn()),Gn=function(){return Object(r.jsxs)(Fn,{children:[Object(r.jsx)("h1",{children:"Contact Our CEO"}),Object(r.jsxs)("p",{children:["Our CEO can be contacted by the contact details ",Object(r.jsx)("br",{}),"mentioned below. ",Object(r.jsx)("br",{})," ",Object(r.jsx)("br",{}),"However our rental and sales officers ",Object(r.jsx)("br",{}),"are always happy to assist you if your ",Object(r.jsx)("br",{}),"enquiry is in relation to property",Object(r.jsx)("br",{}),"rental or property purchase. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Hannah Audrey ",Object(r.jsx)("br",{}),"Receptionist ",Object(r.jsx)("br",{}),"tel 01215452874"]})]})};function Yn(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(0, 0, 20);\n  h1 {\n    padding: 7rem 1rem 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    border-bottom: 1px solid orange;\n  }\n  p {\n    padding: 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    line-height: 1.8;\n  }\n"]);return Yn=function(){return e},e}var Dn=b.c.div(Yn()),Wn=function(){return Object(r.jsxs)(Dn,{children:[Object(r.jsx)("h1",{children:"Contact Our Rental Officers"}),Object(r.jsxs)("p",{children:["Our rental and sales Officers can be contacted by the contact details"," ",Object(r.jsx)("br",{}),"mentioned below. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Our business is built on happy customers and to ensure ",Object(r.jsx)("br",{}),"that each and every one of our customers receives a quick property"," ",Object(r.jsx)("br",{}),"solution that is tailored to them in an open, honest and",Object(r.jsx)("br",{}),"informative service throughout every",Object(r.jsx)("br",{}),"stage of the process we have set out our H&H Promises that all",Object(r.jsx)("br",{}),"our customers will receive.",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Allison Harvey ",Object(r.jsx)("br",{}),"Rental and sales ",Object(r.jsx)("br",{}),"tel 01215452874"]})]})};function Un(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  background-color: rgb(0, 0, 20);\n  h1 {\n    padding: 7rem 1rem 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    border-bottom: 1px solid orange;\n  }\n  p {\n    padding: 2rem 7rem;\n    color: white;\n    letter-spacing: 3px;\n    line-height: 1.8;\n  }\n"]);return Un=function(){return e},e}var Zn=b.c.div(Un()),Jn=function(){return Object(r.jsxs)(Zn,{children:[Object(r.jsx)("h1",{children:"Contact Our Directors"}),Object(r.jsxs)("p",{children:["Our Directors can be contacted by the contact details ",Object(r.jsx)("br",{}),"mentioned below. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{})," However our rental and sales officers ",Object(r.jsx)("br",{}),"are always happy to assist you if your ",Object(r.jsx)("br",{}),"enquiry is in relation to property",Object(r.jsx)("br",{}),"rental or property purchase. ",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"Hannah Audrey ",Object(r.jsx)("br",{}),"Receptionist ",Object(r.jsx)("br",{}),"tel 01215452874"]})]})},Kn=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1],o=function(){a(!t)};return Object(i.useEffect)((function(){p.a.init({duration:1e3})}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),Object(r.jsx)(G,{toggle:o}),Object(r.jsx)(I,{isOpen:t,toggle:o}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",exact:!0,component:Ge}),Object(r.jsx)(l.a,{path:"/mortgage",exact:!0,component:tn}),Object(r.jsx)(l.a,{path:"/rental",exact:!0,component:vn}),Object(r.jsx)(l.a,{path:"/buy",exact:!0,component:Pn}),Object(r.jsx)(l.a,{path:"/contactCEO",exact:!0,component:Gn}),Object(r.jsx)(l.a,{path:"/contactDirectors",exact:!0,component:Jn}),Object(r.jsx)(l.a,{path:"/contactRentals",exact:!0,component:Wn})]}),Object(r.jsx)(ee,{})]})},Xn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,r=n.getFID,i=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),i(e),a(e),o(e)}))};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(s.a,{children:Object(r.jsx)(Kn,{})})}),document.getElementById("root")),Xn()}},[[44,1,2]]]);
//# sourceMappingURL=main.b5d8cf9d.chunk.js.map