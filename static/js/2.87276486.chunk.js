(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[2],{57:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return h})),r.d(t,"a",(function(){return O})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return g})),r.d(t,"f",(function(){return N})),r.d(t,"j",(function(){return D})),r.d(t,"c",(function(){return B})),r.d(t,"g",(function(){return _})),r.d(t,"k",(function(){return A})),r.d(t,"l",(function(){return F}));var n=r(30),a=r(17),c=r(55),s=r.n(c),o=r(56),u=r(23),i=r(62),l=r.n(i),p="".concat("dvhwserkv"),d="".concat("s4onxndn");function f(e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(s.a.mark((function e(t,r){var c,o,i,l,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,o=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),i=Object(n.a)(o,1),l=i[0],p=void 0===l?{}:l,e.abrupt("return",p.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(s.a.mark((function e(t,r){var c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","in",t).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(i.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var c,o,u,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,t.likes.includes(r)&&(c=!0),e.next=4,b(t.userId);case 4:return o=e.sent,u=Object(n.a)(o,1),i=u[0],l=i.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:l},t),{},{userLikedPhoto:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,r){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(s.a.mark((function e(t,r,c){var o,i,l,p,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("photoId","==",t).get();case 2:return o=e.sent,e.next=5,o.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})}));case 5:return i=e.sent,l=Object(n.a)(i,1),p=l[0],d=!1,p.likes.includes(r)&&(d=!0),e.abrupt("return",Object(a.a)(Object(a.a)({},p),{},{userLikedPhoto:d,username:c}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,r){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(s.a.mark((function e(t,r,n){var c,i,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","==",r).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(i.map(function(){var e=Object(o.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,r.likes.includes(t)&&(c=!0),e.abrupt("return",Object(a.a)(Object(a.a)({username:n},r),{},{userLikedPhoto:c}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r){return L.apply(this,arguments)}function L(){return(L=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.b.firestore().collection("users").doc(t).update({following:n?u.a.arrayRemove(r):u.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,r){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.b.firestore().collection("users").doc(t).update({followers:n?u.a.arrayRemove(r):u.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e,t,r,n,a){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(s.a.mark((function e(t,r,n,a,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,a,c);case 2:return e.next=4,M(n,r,c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t){return z.apply(this,arguments)}function z(){return(z=Object(o.a)(s.a.mark((function e(t,r){var n,c,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,u.b.firestore().collection("users").where("category","==",t).get();case 3:return n=e.sent,c=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",c);case 8:return e.next=10,u.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return o=e.sent,i=o.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,r,n,a,c,s){return E.apply(this,arguments)}function E(){return(E=Object(o.a)(s.a.mark((function e(t,r,n,a,c,o,i){var f,j;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),!o){e.next=20;break}return f="",(j=new FormData).append("file",o[0]),j.append("upload_preset",d),e.prev=6,e.next=9,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),j).then((function(e){var t=e.data;f=t.secure_url}));case 9:return e.next=11,u.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c,photo:f});case 11:i(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),i(!1),alert(e.t0.message);case 18:e.next=23;break;case 20:return e.next=22,u.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c});case 22:i(!1);case 23:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}function F(e,t,r,n){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(s.a.mark((function e(t,r,n,a){var c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",(o=new FormData).append("file",r[0]),o.append("upload_preset",d),a(!0),e.prev=5,e.next=8,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),o).then((function(e){var t=e.data;c=t.secure_url}));case 8:return e.next=10,u.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:c,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 10:a(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),a(!1),alert(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),u=r(58),i=r(8),l=r(18),p=r(11),d=r(31),f=r(20),j=r(57),b=r(4);function m(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],m=Object(o.useContext)(d.a).user.uid,h=Object(o.useContext)(f.a).firebase,x=Object(i.g)();return Object(o.useEffect)((function(){var e=null;m&&function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(j.h)(m);case 3:r=t.sent,c=Object(s.a)(r,1),e=c[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[m]),r?Object(b.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0",children:Object(b.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex justify-between items-center",children:[Object(b.jsx)(l.b,{to:p.a,children:Object(b.jsx)("h1",{className:"flex sm:h-14 sm:w-auto w-28",children:Object(b.jsx)("img",{src:u.a,alt:"artisto",className:"sm:h-full sm:w-auto w-full h-auto"})})}),Object(b.jsxs)("div",{className:"flex flex-row items-center",children:[Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.i,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.g,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.c,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(b.jsx)("div",{className:"flex h-14 items-center pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:"/p/".concat(null===r||void 0===r?void 0:r.username),children:Object(b.jsx)("img",{src:null===r||void 0===r?void 0:r.photo,className:"h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover"})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4 cursor-pointer",onClick:function(){h.auth().signOut(),x.push(p.b)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),u=r(31),i=r(57);function l(){var e=Object(o.useContext)(u.a).user,t=Object(o.useState)({}),r=Object(s.a)(t,2),n=r[0],l=r[1];return Object(o.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(i.h)(e.uid);case 2:r=t.sent,n=Object(s.a)(r,1),c=n[0],l(c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){t.apply(this,arguments)}()}),[e]),{userInfo:n}}},75:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),u=r(18),i=r(109),l=r(57),p=r(4);function d(e){var t=e.username,r=e.userId,n=e.caption,d=e.date,f=Object(o.useState)(null),j=Object(s.a)(f,2),b=j[0],m=j[1];return Object(o.useEffect)((function(){r&&function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.h)(r);case 2:t=e.sent,n=Object(s.a)(t,1),c=n[0],o=c.photo,m(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),Object(p.jsxs)("div",{className:"",children:[Object(p.jsxs)("div",{className:"flex ",children:[Object(p.jsx)(u.b,{to:"/p/".concat(t),children:Object(p.jsx)("div",{className:"w-12 mr-2",children:Object(p.jsx)("img",{src:b,alt:"".concat(t," profile photo"),className:"w-12 h-12 rounded-full mr-4 object-cover"})})}),Object(p.jsxs)("div",{children:[Object(p.jsx)(u.b,{to:"/p/".concat(t),children:Object(p.jsx)("p",{className:"font-bold text-gray-dark",children:t})}),Object(p.jsx)("p",{className:"text-gray-dark break-words text-xs sm:text-sm",children:n})]})]}),Object(p.jsxs)("p",{className:"text-gray-primary text-xs pt-2 text-right",children:[Object(i.a)(d,new Date)," ago"]})]})}},76:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(3);var n=r(4);function a(e){var t=e.imageSrc;return Object(n.jsx)("div",{className:"flex w-full justify-center pt-2 pb-2",children:Object(n.jsx)("img",{src:t,className:"w-full"})})}},79:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(55),a=r.n(n),c=r(56),s=r(30),o=r(3),u=r(18),i=r(100),l=r(31),p=r(20),d=r(4);function f(e){var t=e.allComments,r=e.setAllComments,n=e.docId,a=Object(o.useState)(""),c=Object(s.a)(a,2),u=c[0],f=c[1],j=Object(o.useContext)(l.a).user,b=j.displayName,m=j.uid,h=Object(o.useContext)(p.a),x=h.firebase,O=h.FieldValue;return Object(d.jsx)("div",{className:"mt-2",children:Object(d.jsxs)("form",{className:"flex",onSubmit:function(e){return e.preventDefault(e),r([{comment:u,userId:m,displayName:b}].concat(Object(i.a)(t))),f(""),x.firestore().collection("photos").doc(n).update({comments:O.arrayUnion({comment:u,userId:m,displayName:b})})},children:[Object(d.jsx)("input",{type:"text",placeholder:"add a comment...",autoComplete:"off",className:"text-base w-full p-2 rounded-l",value:u,onChange:function(e){var t=e.target;return f(t.value)}}),Object(d.jsx)("button",{type:"submit",className:"p-2 bg-blue-primary text-gray-light rounded-r sm:text-base text-sm ".concat(u.length<1&&"opacity-50"),children:"SEND"})]})})}function j(e){var t=e.allComments,r=e.setAllComments,n=e.docId,a=Object(o.useState)(!1),c=Object(s.a)(a,2),i=c[0],p=c[1],j=Object(o.useContext)(l.a).user;return Object(d.jsxs)("div",{className:"pt-2",children:[Object(d.jsx)("div",{children:t.slice(0,3).map((function(e,t){return Object(d.jsxs)("p",{className:"text-sm text-gray-dark break-words",children:[Object(d.jsx)(u.b,{to:"/p/".concat(j.displayName),children:Object(d.jsxs)("span",{className:"font-bold",children:[e.displayName," "]})}),"   ",e.comment]},t)}))}),t.length>3&&!i?Object(d.jsx)("p",{className:"text-xs text-gray-primary opacity-70 pt-2 cursor-pointer",onClick:function(){return p(!0)},children:"View All Comments"}):i?t.slice(3).map((function(e,t){return Object(d.jsxs)("p",{className:"text-sm text-gray-dark break-words",children:[Object(d.jsx)(u.b,{to:"/p/".concat(j.displayName),children:Object(d.jsxs)("span",{className:"font-bold",children:[e.displayName," "]})}),"   ",e.comment]},t)})):null,Object(d.jsx)(f,{allComments:t,setAllComments:r,docId:n})]})}function b(e){var t=e.likes,r=e.userLikedPhoto,n=e.comments,u=e.docId,i=Object(o.useState)(t.length),f=Object(s.a)(i,2),b=f[0],m=f[1],h=Object(o.useState)(n),x=Object(s.a)(h,2),O=x[0],v=x[1],w=Object(o.useState)(r),y=Object(s.a)(w,2),g=y[0],k=y[1],N=Object(o.useContext)(l.a).user.uid,C=void 0===N?"":N,I=Object(o.useContext)(p.a),L=I.firebase,M=I.FieldValue,S=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!g),e.next=3,L.firestore().collection("photos").doc(u).update({likes:g?M.arrayRemove(C):M.arrayUnion(C)});case 3:m((function(e){return g?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("div",{className:"flex items-end",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:h-8 sm:w-8 h-6 w-6 text-gray-dark cursor-pointer ".concat(g&&"fill-red"," "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:S,children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(d.jsx)("p",{className:"text-sm text-gray-dark",children:b})]}),Object(d.jsxs)("div",{className:"flex items-end pl-4",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 sm:h-8 sm:w-8 text-gray-dark cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),Object(d.jsx)("p",{className:"text-sm text-gray-dark",children:O.length})]})]}),Object(d.jsx)(j,{setAllComments:v,allComments:O,docId:u})]})}}}]);
//# sourceMappingURL=2.87276486.chunk.js.map