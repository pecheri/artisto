(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[7],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return v}));var n=r(3),a=r(60),c=r(66),s=r(55),o=r.n(s),i=r(56),u=r(30),l=r(64),d=r(19),p=r.n(d),b=r(18),f=r(4);function j(e){var t=e.username,r=e.fullName,n=e.photo,a=e.title,c=e.bio;return Object(f.jsx)("div",{className:"w-full mx-auto text-gray-light mb-8",children:Object(f.jsxs)("div",{className:"grid grid-cols-6 items-center",children:[Object(f.jsx)("div",{className:"flex justify-end",children:Object(f.jsx)(b.b,{to:"/p/".concat(t),children:Object(f.jsx)("img",{src:n,alt:"".concat(t," profile photo"),className:"sm:w-16 sm:h-16 w-12 h-12 rounded-full object-cover"})})}),Object(f.jsxs)("div",{className:"ml-6 col-span-5",children:[Object(f.jsx)(b.b,{to:"/p/".concat(t),children:Object(f.jsx)("p",{className:"sm:text-lg text-base",children:r})}),Object(f.jsxs)("p",{className:"text-sm",children:[Object(f.jsx)("span",{className:"text-xs",children:"ID: "}),t]}),Object(f.jsx)("p",{className:"text-sm pt-2",children:a}),Object(f.jsxs)("p",{className:"text-xs break-words w-full max-w-md",children:[Object(f.jsx)("span",{className:"text-sm",children:"Bio: "}),c.length>100?"".concat(c.substr(0,100),"..."):c]})]})]})})}var h=r(61);function m(e){var t=e.results,r=e.selectedFilter,n=(e.searchKeyword,e.fixedSearchKeyword),a=Object(f.jsx)("div",{className:"w-full",children:Object(f.jsx)("p",{className:"text-center text-gray-light",children:"No Results"})}),c=Object(h.a)().userInfo.userId;return t?function(){var e=t.filter((function(e){return c!==e.userId}));if(!n){var s=e.map((function(e,t){return Object(f.jsx)(j,{username:e.username,fullName:e.fullName,photo:e.photo,title:e.title,bio:e.bio},t)}));return s.length>0?s:a}if("all"===r){var o=e.filter((function(e){return e.username.includes(n.toLowerCase())||e.fullName.toLowerCase().includes(n.toLowerCase())||e.title.includes(n.toLowerCase())||e.bio.includes(n.toLowerCase())})).map((function(e,t){return Object(f.jsx)(j,{username:e.username,fullName:e.fullName,photo:e.photo,title:e.title,bio:e.bio},t)}));return o.length>0?o:a}if("username"===r){var i=e.filter((function(e){return e.username.includes(n.toLowerCase())||e.fullName.toLowerCase().includes(n.toLowerCase())})).map((function(e,t){return Object(f.jsx)(j,{username:e.username,fullName:e.fullName,photo:e.photo,title:e.title,bio:e.bio},t)}));return i.length>0?i:a}if("title"===r){var u=e.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())})).map((function(e,t){return Object(f.jsx)(j,{username:e.username,fullName:e.fullName,photo:e.photo,title:e.title,bio:e.bio},t)}));return u.length>0?u:a}if("bio"===r){var l=e.filter((function(e){return e.bio.toLowerCase().includes(n.toLowerCase())})).map((function(e,t){return Object(f.jsx)(j,{username:e.username,fullName:e.fullName,photo:e.photo,title:e.title,bio:e.bio},t)}));return l.length>0?l:a}}():null}m.propTypes={results:p.a.array,selectedFilter:p.a.string.isRequired,searchKeyword:p.a.string.isRequired,fixedSearchKeyword:p.a.string.isRequired};var x=r(57);function O(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),r=t[0],a=t[1],c=Object(n.useState)(""),s=Object(u.a)(c,2),d=s[0],p=s[1],b=Object(n.useState)(""),j=Object(u.a)(b,2),h=j[0],O=j[1],v=Object(n.useState)("all"),w=Object(u.a)(v,2),g=w[0],y=w[1],N=Object(n.useState)(null),k=Object(u.a)(N,2),C=k[0],L=k[1],I=Object(n.useState)(!1),S=Object(u.a)(I,2),F=S[0],P=S[1],B=Object(n.useState)(!1),D=Object(u.a)(B,2),M=D[0],K=D[1],R=""===h,_=function(){var e=Object(i.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y("all"),e.next=4,Object(x.g)(h);case 4:n=e.sent,L(n),p(r),r?(P(!0),K(!1)):(P(!1),K(!0));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"md:col-span-2 col-span-3 container mx-auto",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"grid grid-cols-3 sm:grid-cols-7 items-center",onSubmit:_,children:[Object(f.jsx)("input",{type:"text",placeholder:"Search...",className:"bg-gray-light p-1 h-10 text-base rounded sm:rounded-none sm:rounded-l border-r border-gray-primary sm:col-span-4 col-span-3",value:r,onChange:function(e){var t=e.target;return a(t.value)}}),Object(f.jsxs)("select",{className:"bg-gray-light p-1 h-10 text-sm text-gray-dark col-span-2 capitalize mt-2 mr-2 sm:mt-0 sm:mr-0 rounded-none",onChange:function(e){var t=e.target;return O(t.value)},value:h,children:[Object(f.jsx)("option",{hidden:!0,value:"",children:"Category"}),l.a.sort().map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)})),Object(f.jsx)("option",{value:"others",children:"Others"})]}),Object(f.jsx)("button",{type:"submit",className:"bg-gray-dark text-gray-light h-10 p-1 text-sm rounded sm:rounded-none sm:rounded-r mt-2 sm:mt-0 ".concat(R&&"opacity-50"),disabled:R,children:"Search"})]})}),Object(f.jsxs)("div",{className:"flex justify-evenly text-gray-light h-10 mt-4 mb-8 ".concat(!F&&"hidden"),children:[Object(f.jsx)("button",{type:"button",className:"px-4 font-bold ".concat("all"===g&&"border-b  border-yellow-primary "),value:"all",onClick:function(e){var t=e.target;return y(t.value)},children:"All"}),Object(f.jsx)("button",{type:"button",value:"username",className:"px-4 ".concat("username"===g&&"border-b  border-yellow-primary "),onClick:function(e){var t=e.target;return y(t.value)},children:"Username"}),Object(f.jsx)("button",{type:"button",value:"title",className:"px-4 ".concat("title"===g&&"border-b  border-yellow-primary "),onClick:function(e){var t=e.target;return y(t.value)},children:"Title"}),Object(f.jsx)("button",{type:"button",value:"bio",className:"px-4 ".concat("bio"===g&&"border-b  border-yellow-primary "),onClick:function(e){var t=e.target;return y(t.value)},children:"Bio"})]}),Object(f.jsx)("div",{className:"flex items-center text-gray-light h-10 mt-4 mb-8 ml-4 ".concat(!M&&"hidden"),children:Object(f.jsx)("p",{className:"h-10 leading-10 border-b border-yellow-primary px-4",children:"Suggested Users"})}),Object(f.jsx)(m,{results:C,selectedFilter:g,searchKeyword:r,fixedSearchKeyword:d})]})}function v(){return Object(n.useEffect)((function(){document.title="Search - Artisto"}),[]),Object(f.jsxs)("div",{className:"font-body",children:[Object(f.jsx)(a.a,{}),Object(f.jsx)("div",{className:"w-sceen flex justify-center pt-24",children:Object(f.jsxs)("div",{className:"grid grid-cols-3 w-full max-w-screen-lg mx-4",children:[Object(f.jsx)(O,{}),Object(f.jsx)(c.a,{})]})})]})}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return m})),r.d(t,"a",(function(){return O})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return y})),r.d(t,"f",(function(){return k})),r.d(t,"j",(function(){return P})),r.d(t,"c",(function(){return D})),r.d(t,"g",(function(){return K})),r.d(t,"k",(function(){return _})),r.d(t,"l",(function(){return z}));var n=r(30),a=r(17),c=r(55),s=r.n(c),o=r(56),i=r(23),u=r(62),l=r.n(u),d="".concat("dvhwserkv"),p="".concat("s4onxndn");function b(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(s.a.mark((function e(t,r){var c,o,u,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,o=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),u=Object(n.a)(o,1),l=u[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(s.a.mark((function e(t,r){var c,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","in",t).get();case 2:return c=e.sent,u=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(u.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var c,o,i,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,t.likes.includes(r)&&(c=!0),e.next=4,j(t.userId);case 4:return o=e.sent,i=Object(n.a)(o,1),u=i[0],l=u.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:l},t),{},{userLikedPhoto:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t,r){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(s.a.mark((function e(t,r,c){var o,u,l,d,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("photoId","==",t).get();case 2:return o=e.sent,e.next=5,o.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})}));case 5:return u=e.sent,l=Object(n.a)(u,1),d=l[0],p=!1,d.likes.includes(r)&&(p=!0),e.abrupt("return",Object(a.a)(Object(a.a)({},d),{},{userLikedPhoto:p,username:c}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function e(t,r,n){var c,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",r).get();case 2:return c=e.sent,u=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(u.map(function(){var e=Object(o.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,r.likes.includes(t)&&(c=!0),e.abrupt("return",Object(a.a)(Object(a.a)({username:n},r),{},{userLikedPhoto:c}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,r){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.b.firestore().collection("users").doc(t).update({following:n?i.a.arrayRemove(r):i.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,r){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.b.firestore().collection("users").doc(t).update({followers:n?i.a.arrayRemove(r):i.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,r,n,a){return B.apply(this,arguments)}function B(){return(B=Object(o.a)(s.a.mark((function e(t,r,n,a,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t,a,c);case 2:return e.next=4,S(n,r,c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e,t){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(s.a.mark((function e(t,r){var n,c,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,i.b.firestore().collection("users").where("category","==",t).get();case 3:return n=e.sent,c=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",c);case 8:return e.next=10,i.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return o=e.sent,u=o.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t,r,n,a,c,s){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(s.a.mark((function e(t,r,n,a,c,o,u){var b,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!o){e.next=20;break}return b="",(f=new FormData).append("file",o[0]),f.append("upload_preset",p),e.prev=6,e.next=9,l.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),f).then((function(e){var t=e.data;b=t.secure_url}));case 9:return e.next=11,i.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c,photo:b});case 11:u(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),u(!1),alert(e.t0.message);case 18:e.next=23;break;case 20:return e.next=22,i.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c});case 22:u(!1);case 23:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}function z(e,t,r,n){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(s.a.mark((function e(t,r,n,a){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",(o=new FormData).append("file",r[0]),o.append("upload_preset",p),a(!0),e.prev=5,e.next=8,l.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),o).then((function(e){var t=e.data;c=t.secure_url}));case 8:return e.next=10,i.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:c,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 10:a(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),a(!1),alert(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),i=r(58),u=r(8),l=r(18),d=r(11),p=r(31),b=r(20),f=r(57),j=r(4);function h(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],h=Object(o.useContext)(p.a).user.uid,m=Object(o.useContext)(b.a).firebase,x=Object(u.g)();return Object(o.useEffect)((function(){var e=null;h&&function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(f.h)(h);case 3:r=t.sent,c=Object(s.a)(r,1),e=c[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[h]),r?Object(j.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0",children:Object(j.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex justify-between items-center",children:[Object(j.jsx)(l.b,{to:d.a,children:Object(j.jsx)("h1",{className:"flex sm:h-14 sm:w-auto w-28",children:Object(j.jsx)("img",{src:i.a,alt:"artisto",className:"sm:h-full sm:w-auto w-full h-auto"})})}),Object(j.jsxs)("div",{className:"flex flex-row items-center",children:[Object(j.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(j.jsx)(l.b,{to:d.i,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(j.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(j.jsx)(l.b,{to:d.g,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(j.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(j.jsx)(l.b,{to:d.c,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(j.jsx)("div",{className:"flex h-14 items-center pr-2 sm:pr-4",children:Object(j.jsx)(l.b,{to:"/p/".concat(null===r||void 0===r?void 0:r.username),children:Object(j.jsx)("img",{src:null===r||void 0===r?void 0:r.photo,className:"h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover"})})}),Object(j.jsx)("div",{className:"pr-2 sm:pr-4 cursor-pointer",onClick:function(){m.auth().signOut(),x.push(d.b)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),i=r(31),u=r(57);function l(){var e=Object(o.useContext)(i.a).user,t=Object(o.useState)({}),r=Object(s.a)(t,2),n=r[0],l=r[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.h)(e.uid);case 2:r=t.sent,n=Object(s.a)(r,1),c=n[0],l(c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){t.apply(this,arguments)}()}),[e]),{userInfo:n}}},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=["web design","video game","animation","graphic design","painting","illustration"]},66:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),i=r(31),u=r(57),l=r(18),d=(r(61),r(63)),p=r.n(d),b=r(4);function f(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),r=t[0],n=t[1],f=Object(o.useContext)(i.a).user.uid;return console.log("userIdSideProfile",f),Object(o.useEffect)((function(){document.title="Artisto"}),[]),Object(o.useEffect)((function(){var e=null;f&&function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=10;break}return t.next=3,Object(u.h)(f);case 3:r=t.sent,c=Object(s.a)(r,1),e=c[0],n(e),console.log("resultSideProfile",e),t.next=0;break;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[f]),Object(b.jsx)("div",{className:"md:flex pt-4 justify-center hidden",children:Object(b.jsxs)("div",{className:"mx-auto justify-center flex-col w-full sticky top-0 max-h-screen pt-20 max-w-xs",children:[Object(b.jsx)("div",{className:"flex justify-center",children:(null===r||void 0===r?void 0:r.photo)||(null===r||void 0===r?void 0:r.username)?Object(b.jsx)(l.b,{to:"/p/".concat(r.username),children:Object(b.jsx)("img",{src:r.photo,className:"h-36 w-36 rounded-full object-cover"})}):Object(b.jsx)(d.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)(p.a,{width:144,height:144,circle:!0})})}),(null===r||void 0===r?void 0:r.username)?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[Object(b.jsx)("p",{className:"font-bold mt-4 text-gray-light",children:r.fullName}),Object(b.jsxs)("p",{className:"text-sm text-gray-light",children:[Object(b.jsx)("span",{className:"text-xs",children:"ID: "}),r.username]}),Object(b.jsx)("p",{className:"text-sm mt-4 text-gray-light",children:r.title}),Object(b.jsxs)("p",{className:"mt-2 text-sm text-gray-light",children:[Object(b.jsx)("span",{className:"text-xs ",children:"Category: "}),r.category]})]}),Object(b.jsxs)("div",{className:"mt-2 max-w-sm p-4 mx-auto w-48 md:w-60",children:[Object(b.jsx)("p",{className:"text-sm text-gray-light",children:"Bio:"}),Object(b.jsx)("p",{className:"text-xs w-full break-words text-gray-light",children:r.bio.length>100?"".concat(r.bio.substr(0,100),"..."):r.bio})]})]}):Object(b.jsx)("div",{className:"flex justify-center flex-col items-center mt-4",children:Object(b.jsx)(d.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)(p.a,{width:180,height:200})})})]})})}}}]);
//# sourceMappingURL=7.3ac8d4cf.chunk.js.map