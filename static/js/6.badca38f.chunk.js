(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[6],{113:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return N}));var n=r(60),c=r(55),a=r.n(c),s=r(56),o=r(30),i=r(3),u=r(63),l=r.n(u),d=r(68),p=r(69),j=r(18),m=r(73),h=r(31),b=r(20),f=r(4);function x(e){var t=e.allComments,r=e.setAllComments,n=e.docId,c=Object(i.useState)(""),a=Object(o.a)(c,2),s=a[0],u=a[1],l=Object(i.useContext)(h.a).user,d=l.displayName,p=l.uid,j=Object(i.useContext)(b.a),x=j.firebase,O=j.FieldValue;return Object(f.jsx)("div",{className:"mt-2",children:Object(f.jsxs)("form",{className:"flex",onSubmit:function(e){return e.preventDefault(e),r([{comment:s,userId:p,displayName:d}].concat(Object(m.a)(t))),u(""),x.firestore().collection("photos").doc(n).update({comments:O.arrayUnion({comment:s,userId:p,displayName:d})})},children:[Object(f.jsx)("input",{type:"text",placeholder:"add a comment...",autoComplete:"off",className:"text-base w-full p-2 rounded-l",value:s,onChange:function(e){var t=e.target;return u(t.value)}}),Object(f.jsx)("button",{type:"submit",className:"p-2 bg-blue-primary text-gray-light rounded-r sm:text-base text-sm ".concat(s.length<1&&"opacity-50"),children:"SEND"})]})})}function O(e){var t=e.allComments,r=e.setAllComments,n=e.docId,c=Object(i.useState)(!1),a=Object(o.a)(c,2),s=a[0],u=a[1],l=Object(i.useContext)(h.a).user;return Object(f.jsxs)("div",{className:"pt-2",children:[Object(f.jsx)("div",{children:t.slice(0,3).map((function(e,t){return Object(f.jsxs)("p",{className:"text-sm text-gray-dark break-words",children:[Object(f.jsx)(j.b,{to:"/p/".concat(l.displayName),children:Object(f.jsxs)("span",{className:"font-bold",children:[e.displayName," "]})}),"   ",e.comment]},t)}))}),t.length>3&&!s?Object(f.jsx)("p",{className:"text-xs text-gray-primary opacity-70 pt-2 cursor-pointer",onClick:function(){return u(!0)},children:"View All Comments"}):s?t.slice(3).map((function(e,t){return Object(f.jsxs)("p",{className:"text-sm text-gray-dark break-words",children:[Object(f.jsx)(j.b,{to:"/p/".concat(l.displayName),children:Object(f.jsxs)("span",{className:"font-bold",children:[e.displayName," "]})}),"   ",e.comment]},t)})):null,Object(f.jsx)(x,{allComments:t,setAllComments:r,docId:n})]})}function v(e){var t=e.likes,r=e.userLikedPhoto,n=e.comments,c=e.docId,u=Object(i.useState)(t.length),l=Object(o.a)(u,2),d=l[0],p=l[1],j=Object(i.useState)(n),m=Object(o.a)(j,2),x=m[0],v=m[1],w=Object(i.useState)(r),g=Object(o.a)(w,2),y=g[0],k=g[1],N=Object(i.useContext)(h.a).user.uid,C=void 0===N?"":N,I=Object(i.useContext)(b.a),L=I.firebase,S=I.FieldValue,F=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!y),e.next=3,L.firestore().collection("photos").doc(c).update({likes:y?S.arrayRemove(C):S.arrayUnion(C)});case 3:p((function(e){return y?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"",children:[Object(f.jsxs)("div",{className:"flex",children:[Object(f.jsxs)("div",{className:"flex items-end",children:[Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sm:h-8 sm:w-8 h-6 w-6 text-gray-dark cursor-pointer ".concat(y&&"fill-red"," "),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:F,children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(f.jsx)("p",{className:"text-sm text-gray-dark",children:d})]}),Object(f.jsxs)("div",{className:"flex items-end pl-4",children:[Object(f.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 sm:h-8 sm:w-8 text-gray-dark cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),Object(f.jsx)("p",{className:"text-sm text-gray-dark",children:x.length})]})]}),Object(f.jsx)(O,{setAllComments:v,allComments:x,docId:c})]})}function w(e){var t=e.photo;return Object(f.jsxs)("div",{className:"bg-gray-light py-2 sm:py-8 px-2 sm:px-8 mb-8 rounded-sm",children:[Object(f.jsx)(d.a,{userId:t.userId,username:t.username,caption:t.caption,date:t.dateCreated}),Object(f.jsx)(p.a,{imageSrc:t.imageSrc}),Object(f.jsx)(v,{likes:t.likes,userLikedPhoto:t.userLikedPhoto,comments:t.comments,docId:t.docId})]})}var g=r(57);function y(){var e=Object(i.useState)(null),t=Object(o.a)(e,2),r=t[0],n=t[1],c=Object(i.useContext)(h.a).user.uid;return Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null;case 1:if(t){e.next=9;break}return e.next=4,Object(g.g)(c);case 4:r=e.sent,s=Object(o.a)(r,1),t=s[0],e.next=1;break;case 9:if(i=[],!(t.following.length>0)){e.next=16;break}return e.next=13,Object(g.d)(t.following,c);case 13:i=e.sent,e.next=17;break;case 16:case 17:i.sort((function(e,t){return t.dateCreated-e.dateCreated})),n(i);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c&&function(){e.apply(this,arguments)}()}),[c]),Object(f.jsx)("div",{className:"col-span-3 w-full mx-auto md:col-span-2",children:r?r.length>0?r.map((function(e){return Object(f.jsx)(w,{photo:e},e.docId)})):Object(f.jsx)("p",{className:"text-gray-light text-center pt-20",children:"Follow artists to see photos!"}):Object(f.jsx)(u.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(f.jsx)(l.a,{count:4,width:640,height:500})})})}var k=r(70);function N(){return Object(f.jsxs)("div",{className:"font-body",children:[Object(f.jsx)(n.a,{}),Object(f.jsx)("div",{className:"w-sceen flex justify-center mt-24 px-4",children:Object(f.jsxs)("div",{className:"grid grid-cols-3 w-full max-w-screen-lg",children:[Object(f.jsx)(y,{}),Object(f.jsx)(k.a,{})]})})]})}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"g",(function(){return b})),r.d(t,"h",(function(){return x})),r.d(t,"a",(function(){return v})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return k})),r.d(t,"i",(function(){return F})),r.d(t,"c",(function(){return B})),r.d(t,"f",(function(){return P})),r.d(t,"j",(function(){return z})),r.d(t,"k",(function(){return E}));var n=r(30),c=r(17),a=r(55),s=r.n(a),o=r(56),i=r(23),u=r(61),l=r.n(u),d=r(62),p="".concat("dvhwserkv"),j="".concat("s4onxndn");function m(e){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(s.a.mark((function e(t,r){var a,o,u,l,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return a=e.sent,o=a.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),u=Object(n.a)(o,1),l=u[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(o.a)(s.a.mark((function e(t,r){var a,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","in",t).get();case 2:return a=e.sent,u=a.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(u.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var a,o,i,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,t.likes.includes(r)&&(a=!0),e.next=4,b(t.userId);case 4:return o=e.sent,i=Object(n.a)(o,1),u=i[0],l=u.username,e.abrupt("return",Object(c.a)(Object(c.a)({username:l},t),{},{userLikedPhoto:a}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return N.apply(this,arguments)}function N(){return(N=Object(o.a)(s.a.mark((function e(t,r,n){var a,u,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.firestore().collection("photos").where("userId","==",r).get();case 2:return a=e.sent,u=a.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(u.map(function(){var e=Object(o.a)(s.a.mark((function e(r){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,r.likes.includes(t)&&(a=!0),e.abrupt("return",Object(c.a)(Object(c.a)({username:n},r),{},{userLikedPhoto:a}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return l=e.sent,e.abrupt("return",l);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t,r){return I.apply(this,arguments)}function I(){return(I=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.b.firestore().collection("users").doc(t).update({following:n?i.a.arrayRemove(r):i.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t,r){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.b.firestore().collection("users").doc(t).update({followers:n?i.a.arrayRemove(r):i.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,r,n,c){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(s.a.mark((function e(t,r,n,c,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t,c,a);case 2:return e.next=4,L(n,r,a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return D.apply(this,arguments)}function D(){return(D=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(o.a)(s.a.mark((function e(t){var r,c,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:return r=e.sent,c=Object(n.a)(r,1),a=c[0],e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return W.apply(this,arguments)}function W(){return(W=Object(o.a)(s.a.mark((function e(t,r){var n,a,o,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,i.b.firestore().collection("users").where("category","==",t).get();case 3:return n=e.sent,a=n.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",a);case 8:return e.next=10,i.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return o=e.sent,u=o.docs.map((function(e){return Object(c.a)(Object(c.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",u);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,t,r,n,c,a,s){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(s.a.mark((function e(t,r,n,c,a,o,u){var m,h,b,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u(!0),!o){e.next=24;break}return m="",h={maxSizeMB:1,maxWidthOrHeight:400},e.prev=4,e.next=7,Object(d.a)(o[0],h);case 7:return b=e.sent,(f=new FormData).append("file",b),f.append("upload_preset",j),e.next=13,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),f).then((function(e){var t=e.data;m=t.secure_url}));case 13:return e.next=15,i.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:c,bio:a,photo:m});case 15:u(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),u(!1),alert(e.t0.message);case 22:e.next=27;break;case 24:return e.next=26,i.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:c,bio:a});case 26:u(!1);case 27:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function E(e,t,r,n){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(s.a.mark((function e(t,r,n,c){var a,o,u,m;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="",o={maxWidthOrHeight:2e3},c(!0),e.prev=3,e.next=6,Object(d.a)(r[0],o);case 6:return u=e.sent,(m=new FormData).append("file",u),m.append("upload_preset",j),e.next=12,l.a.post("https://api.cloudinary.com/v1_1/".concat(p,"/image/upload"),m).then((function(e){var t=e.data;a=t.secure_url}));case 12:return e.next=14,i.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:a,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 14:c(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),c(!1),alert(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(55),c=r.n(n),a=r(56),s=r(30),o=r(3),i=r(58),u=r(8),l=r(18),d=r(11),p=r(31),j=r(20),m=r(57),h=r(4);function b(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),r=t[0],n=t[1],b=Object(o.useContext)(p.a).user.uid,f=Object(o.useContext)(j.a).firebase,x=Object(u.g)();return Object(o.useEffect)((function(){var e=null;b&&function(){var t=Object(a.a)(c.a.mark((function t(){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(m.g)(b);case 3:r=t.sent,a=Object(s.a)(r,1),e=a[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[b]),r?Object(h.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0",children:Object(h.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex justify-between items-center",children:[Object(h.jsx)(l.b,{to:d.a,children:Object(h.jsx)("h1",{className:"flex sm:h-14 sm:w-auto w-28",children:Object(h.jsx)("img",{src:i.a,alt:"artisto",className:"sm:h-full sm:w-auto w-full h-auto"})})}),Object(h.jsxs)("div",{className:"flex flex-row items-center",children:[Object(h.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(h.jsx)(l.b,{to:d.j,children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(h.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(h.jsx)(l.b,{to:d.h,children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(h.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(h.jsx)(l.b,{to:d.c,children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(h.jsx)("div",{className:"flex h-14 items-center pr-2 sm:pr-4",children:Object(h.jsx)(l.b,{to:"/p/".concat(null===r||void 0===r?void 0:r.username),children:Object(h.jsx)("img",{src:null===r||void 0===r?void 0:r.photo,className:"h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover"})})}),Object(h.jsx)("div",{className:"pr-2 sm:pr-4 cursor-pointer",onClick:function(){f.auth().signOut(),x.push(d.b)},children:Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(h.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},68:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(55),c=r.n(n),a=r(56),s=r(30),o=r(3),i=r(18),u=r(111),l=r(57),d=r(4);function p(e){var t=e.username,r=e.userId,n=e.caption,p=e.date,j=Object(o.useState)(null),m=Object(s.a)(j,2),h=m[0],b=m[1];return Object(o.useEffect)((function(){r&&function(){var e=Object(a.a)(c.a.mark((function e(){var t,n,a,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.g)(r);case 2:t=e.sent,n=Object(s.a)(t,1),a=n[0],o=a.photo,b(o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),Object(d.jsxs)("div",{className:"",children:[Object(d.jsxs)("div",{className:"flex ",children:[Object(d.jsx)(i.b,{to:"/p/".concat(t),children:Object(d.jsx)("div",{className:"w-12 mr-2",children:Object(d.jsx)("img",{src:h,alt:"".concat(t," profile photo"),className:"w-12 h-12 rounded-full mr-4 object-cover"})})}),Object(d.jsxs)("div",{children:[Object(d.jsx)(i.b,{to:"/p/".concat(t),children:Object(d.jsx)("p",{className:"font-bold text-gray-dark",children:t})}),Object(d.jsx)("p",{className:"text-gray-dark break-words text-xs sm:text-sm",children:n})]})]}),Object(d.jsxs)("p",{className:"text-gray-primary text-xs pt-2 text-right",children:[Object(u.a)(p,new Date)," ago"]})]})}},69:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(3);var n=r(4);function c(e){var t=e.imageSrc;return Object(n.jsx)("div",{className:"flex w-full justify-center pt-2 pb-2",children:Object(n.jsx)("img",{src:t,className:"w-full"})})}},70:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n=r(55),c=r.n(n),a=r(56),s=r(30),o=r(3),i=r(31),u=r(57),l=r(18),d=r(63),p=r.n(d),j=r(4);function m(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),r=t[0],n=t[1],m=Object(o.useContext)(i.a).user.uid;return Object(o.useEffect)((function(){document.title="Artisto"}),[]),Object(o.useEffect)((function(){var e=null;m&&function(){var t=Object(a.a)(c.a.mark((function t(){var r,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(u.g)(m);case 3:r=t.sent,a=Object(s.a)(r,1),e=a[0],n(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[m]),Object(j.jsx)("div",{className:"md:flex pt-4 justify-center hidden",children:Object(j.jsxs)("div",{className:"mx-auto justify-center flex-col w-full sticky top-0 max-h-screen pt-20 max-w-xs",children:[Object(j.jsx)("div",{className:"flex justify-center",children:(null===r||void 0===r?void 0:r.photo)||(null===r||void 0===r?void 0:r.username)?Object(j.jsx)(l.b,{to:"/p/".concat(r.username),children:Object(j.jsx)("img",{src:r.photo,className:"h-36 w-36 rounded-full object-cover"})}):Object(j.jsx)(d.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(j.jsx)(p.a,{width:144,height:144,circle:!0})})}),(null===r||void 0===r?void 0:r.username)?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[Object(j.jsx)("p",{className:"font-bold mt-4 text-gray-light",children:r.fullName}),Object(j.jsxs)("p",{className:"text-sm text-gray-light",children:[Object(j.jsx)("span",{className:"text-xs",children:"ID: "}),r.username]}),Object(j.jsx)("p",{className:"text-sm mt-4 text-gray-light",children:r.title}),Object(j.jsxs)("p",{className:"mt-2 text-sm text-gray-light",children:[Object(j.jsx)("span",{className:"text-xs ",children:"Category: "}),r.category]})]}),Object(j.jsxs)("div",{className:"mt-2 max-w-sm p-4 mx-auto w-48 md:w-60",children:[Object(j.jsx)("p",{className:"text-sm text-gray-light",children:"Bio:"}),Object(j.jsx)("p",{className:"text-xs w-full break-words text-gray-light",children:r.bio.length>100?"".concat(r.bio.substr(0,100),"..."):r.bio})]})]}):Object(j.jsx)("div",{className:"flex justify-center flex-col items-center mt-4",children:Object(j.jsx)(d.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(j.jsx)(p.a,{width:180,height:200})})})]})})}}}]);
//# sourceMappingURL=6.badca38f.chunk.js.map