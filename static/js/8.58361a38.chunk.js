(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[8],{104:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),o=r(60),u=r(61),l=r(64),p=r(57),d=r(8),f=(r(11),r(4));function h(){var e=Object(u.a)().userInfo,t=e.bio,r=e.category,n=e.fullName,h=e.photo,j=e.title,b=e.userId,x=e.docId,m=e.username,O=Object(i.useState)(t),g=Object(s.a)(O,2),v=g[0],w=g[1],y=Object(i.useState)(r),k=Object(s.a)(y,2),N=k[0],I=k[1],C=Object(i.useState)(n),L=Object(s.a)(C,2),S=L[0],M=L[1],P=Object(i.useState)(j),U=Object(s.a)(P,2),B=U[0],_=U[1],z=Object(i.useState)(null),D=Object(s.a)(z,2),F=D[0],E=D[1],R=Object(i.useState)(null),W=Object(s.a)(R,2),H=W[0],J=W[1],T=Object(i.useState)(!1),V=Object(s.a)(T,2),q=V[0],A=V[1];console.log(h);var G=Object(d.g)();Object(i.useEffect)((function(){b&&(w(t),I(r),M(n),_(j))}),[b]);var K=v===t&&N===r&&S===n&&B===j&&!F,Q=function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,Object(p.k)(x,S,N,B,v,F,A);case 3:G.push("/p/".concat(m));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)(o.a,{}),q&&Object(f.jsx)("div",{className:"flex absolute top-0 left-0 w-screen h-screen bg-gray-dark opacity-70 z-90 items-center justify-center",children:Object(f.jsx)("p",{className:"text-2xl text-gray-light bg-gradient-to-r from-blue-primary via-yellow-primary to-red-primary py-4 px-8 rounded animate-pulse",children:"Uploading..."})}),Object(f.jsxs)("div",{className:"cotainer max-w-screen-sm py-20 px-10 mx-auto",children:[Object(f.jsx)("p",{className:"text-xl text-gray-light",children:"Edit Profile"}),b?Object(f.jsxs)("form",{className:"flex flex-col",onSubmit:Q,children:[Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Full Name"}),Object(f.jsx)("input",{placeholder:"Full Name",type:"text",onChange:function(e){var t=e.target;return M(t.value)},value:S,className:"bg-gray-light w-full p-1 h-10 text-sm col-span-3"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Category"}),Object(f.jsxs)("select",{className:"bg-gray-light w-full h-10 text-sm col-span-3 capitalize",onChange:function(e){var t=e.target;return I(t.value)},value:N,children:[l.a.sort().map((function(e,t){return Object(f.jsx)("option",{value:e,children:e},t)})),Object(f.jsx)("option",{value:"others",children:"Others"})]})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Title"}),Object(f.jsx)("input",{placeholder:"Title",type:"text",onChange:function(e){var t=e.target;return _(t.value)},value:B,className:"bg-gray-light w-full p-1 h-10 text-sm col-span-3"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Bio"}),Object(f.jsx)("textarea",{placeholder:"Bio",type:"text",onChange:function(e){var t=e.target;return w(t.value)},value:v,className:"bg-gray-light w-full p-1 text-sm col-span-3 h-28"})]}),Object(f.jsxs)("div",{className:"grid grid-cols-4 mt-8 items-center",children:[Object(f.jsx)("p",{className:"text-gray-light text-sm text-center",children:"Profile Photo"}),Object(f.jsxs)("div",{className:"col-span-3 flex items-center justify-evenly",children:[Object(f.jsxs)("div",{className:"col-span-2",children:[Object(f.jsx)("label",{htmlFor:"imageUploader",className:"cursor-pointer text-sm text-gray-light bg-gray-dark p-2 rounded",children:"Choose Image"}),Object(f.jsx)("input",{type:"file",id:"imageUploader",accept:"image/*",className:"text-gray-light w-full p-1 h-10 text-sm hidden",onChange:function(e){E(e.target.files),e.target.files&&e.target.files[0]&&J(URL.createObjectURL(e.target.files[0]))}})]}),Object(f.jsx)("div",{className:"flex w-24 h-24",children:H&&Object(f.jsx)("img",{src:H,className:"rounded-full object-cover w-full h-full"})})]})]}),Object(f.jsx)("div",{className:"grid grid-cols-4 mt-4 items-center",children:Object(f.jsx)("button",{className:"bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded  col-start-2 col-end-5 ".concat(K&&"opacity-50"),type:"submit",disabled:K,children:"Submit"})})]}):null]})]})}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return f})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return x})),r.d(t,"a",(function(){return O})),r.d(t,"d",(function(){return v})),r.d(t,"f",(function(){return y})),r.d(t,"e",(function(){return N})),r.d(t,"j",(function(){return P})),r.d(t,"c",(function(){return B})),r.d(t,"g",(function(){return z})),r.d(t,"k",(function(){return F})),r.d(t,"l",(function(){return R}));var n=r(30),a=r(17),c=r(55),s=r.n(c),i=r(56),o=r(23),u=r(62),l=r.n(u),p="".concat("dvhwserkv"),d="".concat("s4onxndn");function f(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(t,r){var c,i,u,l,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),u=Object(n.a)(i,1),l=u[0],p=void 0===l?{}:l,e.abrupt("return",p.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(s.a.mark((function e(t,r){var c,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","in",t).get();case 2:return c=e.sent,u=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(u.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var c,i,o,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,t.likes.includes(r)&&(c=!0),e.next=4,j(t.userId);case 4:return i=e.sent,o=Object(n.a)(i,1),u=o[0],l=u.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:l},t),{},{userLikedPhoto:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,r){return I.apply(this,arguments)}function I(){return(I=Object(i.a)(s.a.mark((function e(t,r,c){var i,u,l,p,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("photoId","==",t).get();case 2:return i=e.sent,e.next=5,i.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})}));case 5:return u=e.sent,l=Object(n.a)(u,1),p=l[0],d=!1,p.likes.includes(r)&&(d=!0),e.abrupt("return",Object(a.a)(Object(a.a)({},p),{},{userLikedPhoto:d,username:c}));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,r){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({following:n?o.a.arrayRemove(r):o.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,r){return M.apply(this,arguments)}function M(){return(M=Object(i.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({followers:n?o.a.arrayRemove(r):o.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t,r,n,a){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(s.a.mark((function e(t,r,n,a,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,a,c);case 2:return e.next=4,S(n,r,c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i.a)(s.a.mark((function e(t){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return D.apply(this,arguments)}function D(){return(D=Object(i.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("category","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,r,n,a,c,s){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(s.a.mark((function e(t,r,n,a,c,i,u){var f,h;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!i){e.next=20;break}return f="",(h=new FormData).append("file",i[0]),h.append("upload_preset",d),e.prev=6,e.next=9,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),h).then((function(e){var t=e.data;f=t.secure_url}));case 9:return e.next=11,o.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c,photo:f});case 11:u(!1),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),u(!1),alert(e.t0.message);case 18:e.next=23;break;case 20:return e.next=22,o.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c});case 22:u(!1);case 23:case"end":return e.stop()}}),e,null,[[6,14]])})))).apply(this,arguments)}function R(e,t,r,n){return W.apply(this,arguments)}function W(){return(W=Object(i.a)(s.a.mark((function e(t,r,n,a){var c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",(i=new FormData).append("file",r[0]),i.append("upload_preset",d),a(!0),e.prev=5,e.next=8,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),i).then((function(e){var t=e.data;c=t.secure_url}));case 8:return e.next=10,o.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:c,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 10:a(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(5),a(!1),alert(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),o=r(58),u=r(8),l=r(19),p=r(11),d=r(31),f=r(20),h=r(57),j=r(4);function b(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],b=Object(i.useContext)(d.a).user.uid,x=Object(i.useContext)(f.a).firebase,m=Object(u.g)();return Object(i.useEffect)((function(){var e=null;b&&function(){var t=Object(c.a)(a.a.mark((function t(){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(h.h)(b);case 3:r=t.sent,c=Object(s.a)(r,1),e=c[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b]),r?Object(j.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50",children:Object(j.jsxs)("div",{className:"max-w-screen-xl w-screen h-14 flex justify-between items-center",children:[Object(j.jsx)(l.b,{to:p.a,children:Object(j.jsx)("h1",{className:"h-14 flex",children:Object(j.jsx)("img",{src:o.a,alt:"artisto"})})}),Object(j.jsxs)("div",{className:"flex flex-row items-center",children:[Object(j.jsx)("div",{className:"pr-4",children:Object(j.jsx)(l.b,{to:p.i,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(j.jsx)("div",{className:"pr-4",children:Object(j.jsx)(l.b,{to:p.g,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(j.jsx)("div",{className:"pr-4",children:Object(j.jsx)(l.b,{to:p.c,children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(j.jsx)("div",{className:"flex h-14 items-center pr-4",children:Object(j.jsx)(l.b,{to:"/p/".concat(null===r||void 0===r?void 0:r.username),children:Object(j.jsx)("img",{src:null===r||void 0===r?void 0:r.photo,className:"h-10 w-10 rounded-full object-cover"})})}),Object(j.jsx)("div",{className:"pr-4 cursor-pointer",onClick:function(){x.auth().signOut(),m.push(p.b)},children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},61:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(55),a=r.n(n),c=r(56),s=r(30),i=r(3),o=r(31),u=r(57);function l(){var e=Object(i.useContext)(o.a).user,t=Object(i.useState)({}),r=Object(s.a)(t,2),n=r[0],l=r[1];return Object(i.useEffect)((function(){function t(){return(t=Object(c.a)(a.a.mark((function t(){var r,n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.h)(e.uid);case 2:r=t.sent,n=Object(s.a)(r,1),c=n[0],l(c);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){t.apply(this,arguments)}()}),[e]),{userInfo:n}}},64:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=["web design","video game","animation","graphic design","painting","illustration"]}}]);
//# sourceMappingURL=8.58361a38.chunk.js.map