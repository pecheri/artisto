(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[10],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),u=r(60),o=r(64),l=r(65),p=r(57),d=r(8),f=r(4);function h(){var e=Object(o.a)().userInfo,t=e.bio,r=e.category,n=e.fullName,h=e.title,b=e.userId,j=e.docId,m=e.username,x=Object(i.useState)(t),O=Object(s.a)(x,2),g=O[0],v=O[1],w=Object(i.useState)(r),y=Object(s.a)(w,2),k=y[0],N=y[1],I=Object(i.useState)(n),C=Object(s.a)(I,2),L=C[0],S=C[1],P=Object(i.useState)(h),M=Object(s.a)(P,2),B=M[0],U=M[1],z=Object(i.useState)(null),E=Object(s.a)(z,2),W=E[0],_=E[1],D=Object(i.useState)(null),F=Object(s.a)(D,2),H=F[0],R=F[1],J=Object(i.useState)(!1),T=Object(s.a)(J,2),A=T[0],V=T[1],q=Object(d.g)();Object(i.useEffect)((function(){b&&(v(t),N(r),S(n),U(h))}),[b]),Object(i.useEffect)((function(){document.title="Profile Edit - Artisto"}),[m]);var G=g===t&&k===r&&L===n&&B===h&&!W,K=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(p.j)(j,L,k,B,g,W,V);case 3:q.push("/p/".concat(m));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(u.a,{}),A&&Object(f.jsx)("div",{className:"flex fixed top-0 left-0 w-screen h-screen bg-gray-dark opacity-70 z-90 items-center justify-center",children:Object(f.jsx)("p",{className:"text-2xl text-gray-light bg-gradient-to-r from-blue-primary via-yellow-primary to-red-primary py-4 px-8 rounded animate-pulse",children:"Uploading..."})}),Object(f.jsxs)("div",{className:"cotainer max-w-screen-sm py-20 px-10 mx-auto",children:[Object(f.jsx)("p",{className:"text-xl text-gray-light",children:"Edit Profile"}),b?Object(f.jsxs)("form",{className:"flex flex-col",onSubmit:K,children:[Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Full Name"}),Object(f.jsx)("input",{placeholder:"Full Name",type:"text",onChange:function(e){var t=e.target;return S(t.value)},value:L,className:"bg-gray-light w-full p-1 h-10 text-base col-span-3"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Category"}),Object(f.jsxs)("select",{className:"bg-gray-light w-full h-10 text-sm col-span-3 capitalize",onChange:function(e){var t=e.target;return N(t.value)},value:k,children:[l.a.sort().map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)})),Object(f.jsx)("option",{value:"others",children:"Others"})]})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Title"}),Object(f.jsx)("input",{placeholder:"Title",type:"text",onChange:function(e){var t=e.target;return U(t.value)},value:B,className:"bg-gray-light w-full p-1 h-10 text-base col-span-3"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Bio"}),Object(f.jsx)("textarea",{placeholder:"Bio",type:"text",onChange:function(e){var t=e.target;return v(t.value)},value:g,className:"bg-gray-light w-full p-1 text-sm col-span-3 h-28"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Profile Photo"}),Object(f.jsxs)("div",{className:"col-span-3 flex items-center justify-evenly",children:[Object(f.jsxs)("div",{className:"col-span-2",children:[Object(f.jsx)("label",{htmlFor:"imageUploader",className:"cursor-pointer text-xs sm:text-sm text-gray-light bg-gray-dark p-2 rounded",children:"Choose Image"}),Object(f.jsx)("input",{type:"file",id:"imageUploader",accept:"image/*",className:"text-gray-light w-full p-1 h-10 text-base hidden",onChange:function(e){_(e.target.files),e.target.files&&e.target.files[0]&&R(URL.createObjectURL(e.target.files[0]))}})]}),Object(f.jsx)("div",{className:"flex sm:w-24 sm:h-24 w-16 h-16",children:H&&Object(f.jsx)("img",{src:H,className:"rounded-full object-cover w-full h-full"})})]})]}),Object(f.jsx)("div",{className:"grid grid-cols-4 mt-4 items-center",children:Object(f.jsx)("button",{className:"bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded  col-start-2 col-end-5 ".concat(G&&"opacity-50"),type:"submit",disabled:G,children:"Submit"})})]}):null]})]})}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return h})),r.d(t,"g",(function(){return j})),r.d(t,"h",(function(){return x})),r.d(t,"a",(function(){return g})),r.d(t,"d",(function(){return w})),r.d(t,"e",(function(){return k})),r.d(t,"i",(function(){return P})),r.d(t,"c",(function(){return B})),r.d(t,"f",(function(){return z})),r.d(t,"j",(function(){return W})),r.d(t,"k",(function(){return D}));var n=r(30),a=r(17),c=r(55),s=r.n(c),i=r(56),u=r(23),o=r(61),l=r.n(o),p=r(62),d="".concat("dvhwserkv"),f="".concat("s4onxndn");function h(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return v.apply(this,arguments)}function v(){return(v=Object(i.a)(s.a.mark((function e(t,r){var c,i,o,l,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),o=Object(n.a)(i,1),l=o[0],p=void 0===l?{}:l,e.abrupt("return",p.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(s.a.mark((function e(t,r){var c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","in",t).get();case 2:return c=e.sent,o=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(o.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var c,i,u,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,t.likes.includes(r)&&(c=!0),e.next=4,j(t.userId);case 4:return i=e.sent,u=Object(n.a)(i,1),o=u[0],l=o.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:l},t),{},{userLikedPhoto:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return N.apply(this,arguments)}function N(){return(N=Object(i.a)(s.a.mark((function e(t,r,n){var c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.b.firestore().collection("photos").where("userId","==",r).get();case 2:return c=e.sent,o=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(o.map(function(){var e=Object(i.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,r.likes.includes(t)&&(c=!0),e.abrupt("return",Object(a.a)(Object(a.a)({username:n},r),{},{userLikedPhoto:c}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.b.firestore().collection("users").doc(t).update({following:n?u.a.arrayRemove(r):u.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,r){return S.apply(this,arguments)}function S(){return(S=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u.b.firestore().collection("users").doc(t).update({followers:n?u.a.arrayRemove(r):u.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,r,n,a){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(s.a.mark((function e(t,r,n,a,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,a,c);case 2:return e.next=4,L(n,r,c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(s.a.mark((function e(t,r){var n,c,i,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,u.b.firestore().collection("users").where("category","==",t).get();case 3:return n=e.sent,c=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",c);case 8:return e.next=10,u.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return i=e.sent,o=i.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t,r,n,a,c,s){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(s.a.mark((function e(t,r,n,a,c,i,o){var h,b,j,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o(!0),!i){e.next=24;break}return h="",b={maxSizeMB:1,maxWidthOrHeight:400},e.prev=4,e.next=7,Object(p.a)(i[0],b);case 7:return j=e.sent,(m=new FormData).append("file",j),m.append("upload_preset",f),e.next=13,l.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),m).then((function(e){var t=e.data;h=t.secure_url}));case 13:return e.next=15,u.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c,photo:h});case 15:o(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),o(!1),alert(e.t0.message);case 22:e.next=27;break;case 24:return e.next=26,u.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c});case 26:o(!1);case 27:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function D(e,t,r,n){return F.apply(this,arguments)}function F(){return(F=Object(i.a)(s.a.mark((function e(t,r,n,a){var c,i,o,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",i={maxWidthOrHeight:2e3},a(!0),e.prev=3,e.next=6,Object(p.a)(r[0],i);case 6:return o=e.sent,(h=new FormData).append("file",o),h.append("upload_preset",f),e.next=12,l.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),h).then((function(e){var t=e.data;c=t.secure_url}));case 12:return e.next=14,u.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:c,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 14:a(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),a(!1),alert(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),u=r(58),o=r(8),l=r(18),p=r(11),d=r(31),f=r(20),h=r(57),b=r(4);function j(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],j=Object(i.useContext)(d.a).user.uid,m=Object(i.useContext)(f.a).firebase,x=Object(o.g)();return Object(i.useEffect)((function(){var e=null;j&&function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(h.g)(j);case 3:r=t.sent,c=Object(s.a)(r,1),e=c[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[j]),r?Object(b.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0",children:Object(b.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex justify-between items-center",children:[Object(b.jsx)(l.b,{to:p.a,children:Object(b.jsx)("h1",{className:"flex sm:h-14 sm:w-auto w-28",children:Object(b.jsx)("img",{src:u.a,alt:"artisto",className:"sm:h-full sm:w-auto w-full h-auto"})})}),Object(b.jsxs)("div",{className:"flex flex-row items-center",children:[Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.j,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.h,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:p.c,children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(b.jsx)("div",{className:"flex h-14 items-center pr-2 sm:pr-4",children:Object(b.jsx)(l.b,{to:"/p/".concat(null===r||void 0===r?void 0:r.username),children:Object(b.jsx)("img",{src:null===r||void 0===r?void 0:r.photo,className:"h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover"})})}),Object(b.jsx)("div",{className:"pr-2 sm:pr-4 cursor-pointer",onClick:function(){m.auth().signOut(),x.push(p.b)},children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),u=r(31),o=r(57);function l(){var e=Object(i.useContext)(u.a).user,t=Object(i.useState)({}),r=Object(s.a)(t,2),n=r[0],l=r[1];return Object(i.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(o.g)(e.uid);case 2:r=t.sent,n=Object(s.a)(r,1),c=n[0],l(c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){t.apply(this,arguments)}()}),[e]),{userInfo:n}}},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=["web design","video game","animation","graphic design","painting","illustration"]}}]);
//# sourceMappingURL=10.e5359812.chunk.js.map