(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[15],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var n=r(55),a=r.n(n),c=r(56),s=r(30),u=r(3),o=r(20),i=r(8),p=r(18),l=r(11),d=r(58),f=r(65),b=r(57),h=r(4);function m(){var e=Object(u.useContext)(o.a).firebase,t=Object(u.useState)(""),r=Object(s.a)(t,2),n=r[0],m=r[1],x=Object(u.useState)(""),j=Object(s.a)(x,2),v=j[0],w=j[1],O=Object(u.useState)(""),g=Object(s.a)(O,2),y=g[0],k=g[1],N=Object(u.useState)(""),I=Object(s.a)(N,2),C=I[0],S=I[1],P=Object(u.useState)(""),_=Object(s.a)(P,2),L=_[0],D=_[1],A=Object(u.useState)(""),U=Object(s.a)(A,2),F=U[0],E=U[1],W=""===y||""===v||""===n||""===C||""===L,Y=Object(i.g)();Object(u.useEffect)((function(){document.title="Sign Up - Artisto"}),[]);var z=function(){var t=Object(c.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,Object(b.b)(n);case 3:if(t.sent){t.next=21;break}return t.prev=5,t.next=8,e.auth().createUserWithEmailAndPassword(v,y);case 8:return c=t.sent,t.next=11,c.user.updateProfile({displayName:n.toLowerCase()});case 11:return t.next=13,e.firestore().collection("users").add({userId:c.user.uid,username:n.toLowerCase(),fullName:C,email:v.toLowerCase(),category:L,title:"",bio:"",followers:[],following:[],photo:"https://res.cloudinary.com/dvhwserkv/image/upload/v1629400603/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws_g5xlcp.jpg",dateCreated:Date.now()});case 13:setTimeout((function(){Y.push(l.a)}),1e3),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(5),E(t.t0.message);case 19:t.next=23;break;case 21:m(""),E("That username is already taken, please try another.");case 23:case"end":return t.stop()}}),t,null,[[5,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(h.jsxs)("div",{className:"sm:flex justify-center container max-w-screen-md items-center h-screen mx-auto px-2 my-2",children:[Object(h.jsxs)("div",{className:"sm:w-1/2 sm:mx-0 w-60 mx-auto",children:[Object(h.jsx)("h1",{className:"w-full flex items-center justify-end ",children:Object(h.jsx)("img",{src:d.a,alt:"artisto",className:""})}),Object(h.jsx)("p",{className:"w-full text-sm sm:text-base text-gray-light text-center sm:px-4 animate-fadeIn",children:"Place for artists to connect with other artists around the world"})]}),Object(h.jsx)("div",{className:"sm:w-1/2 sm:max-h-full",children:Object(h.jsxs)("div",{className:"sm:bg-gray-dark rounded",children:[Object(h.jsxs)("div",{className:"p-8",children:[F&&Object(h.jsx)("p",{className:"text-xs text-red-primary",children:F}),Object(h.jsxs)("form",{className:"flex flex-col",onSubmit:z,children:[Object(h.jsx)("input",{placeholder:"Username",type:"text",onChange:function(e){var t=e.target;return m(t.value)},value:n,className:"bg-gray-light w-full p-1 h-10 text-base mb-5"}),Object(h.jsx)("input",{placeholder:"Full Name",type:"text",onChange:function(e){var t=e.target;return S(t.value)},value:C,className:"bg-gray-light w-full p-1 h-10 text-base mb-5"}),Object(h.jsxs)("select",{className:"bg-gray-light w-full py-1 h-10 text-sm text-gray-dark mb-5",onChange:function(e){var t=e.target;return D(t.value)},value:L,children:[Object(h.jsx)("option",{hidden:!0,value:"",children:"Choose Your Art Category"}),f.a.sort().map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)})),Object(h.jsx)("option",{value:"others",children:"Others"})]}),Object(h.jsx)("input",{placeholder:"Email Address",type:"email",onChange:function(e){var t=e.target;return w(t.value)},value:v,className:"bg-gray-light w-full p-1 h-10 text-base mb-5"}),Object(h.jsx)("input",{placeholder:"Password",type:"password",onChange:function(e){var t=e.target;return k(t.value)},value:y,className:"bg-gray-light w-full p-1 h-10 text-base"}),Object(h.jsx)("button",{className:"bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded ".concat(W&&"opacity-50"),type:"submit",disabled:W,children:"Sign Up"})]})]}),Object(h.jsx)("div",{className:"flex flex-col justify-center items-end pr-8",children:Object(h.jsxs)("p",{className:"text-gray-light text-xs mb-12 mt-8",children:["You already have an account?"," ",Object(h.jsx)(p.b,{to:l.b,className:"text-yellow-primary",children:"Login"})]})})]})})]})}},57:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"g",(function(){return m})),r.d(t,"h",(function(){return j})),r.d(t,"a",(function(){return w})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return k})),r.d(t,"i",(function(){return _})),r.d(t,"c",(function(){return D})),r.d(t,"f",(function(){return U})),r.d(t,"j",(function(){return E})),r.d(t,"k",(function(){return Y}));var n=r(30),a=r(17),c=r(55),s=r.n(c),u=r(56),o=r(23),i=r(61),p=r.n(i),l=r(62),d="".concat("dvhwserkv"),f="".concat("s4onxndn");function b(e){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,e.abrupt("return",r.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("userId","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(s.a.mark((function e(t,r){var c,u,i,p,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).where("following","array-contains",r).get();case 2:return c=e.sent,u=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),i=Object(n.a)(u,1),p=i[0],l=void 0===p?{}:p,e.abrupt("return",l.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(s.a.mark((function e(t,r){var c,i,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","in",t).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(i.map(function(){var e=Object(u.a)(s.a.mark((function e(t){var c,u,o,i,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,t.likes.includes(r)&&(c=!0),e.next=4,m(t.userId);case 4:return u=e.sent,o=Object(n.a)(u,1),i=o[0],p=i.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:p},t),{},{userLikedPhoto:c}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return p=e.sent,e.abrupt("return",p);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,r){return N.apply(this,arguments)}function N(){return(N=Object(u.a)(s.a.mark((function e(t,r,n){var c,i,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","==",r).get();case 2:return c=e.sent,i=c.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(i.map(function(){var e=Object(u.a)(s.a.mark((function e(r){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=!1,r.likes.includes(t)&&(c=!0),e.abrupt("return",Object(a.a)(Object(a.a)({username:n},r),{},{userLikedPhoto:c}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return p=e.sent,e.abrupt("return",p);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,r){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({following:n?o.a.arrayRemove(r):o.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,r){return P.apply(this,arguments)}function P(){return(P=Object(u.a)(s.a.mark((function e(t,r,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({followers:n?o.a.arrayRemove(r):o.a.arrayUnion(r)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e,t,r,n,a){return L.apply(this,arguments)}function L(){return(L=Object(u.a)(s.a.mark((function e(t,r,n,a,c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,a,c);case 2:return e.next=4,S(n,r,c);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(u.a)(s.a.mark((function e(t){var r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(t);case 2:return r=e.sent,a=Object(n.a)(r,1),c=a[0],e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t){return F.apply(this,arguments)}function F(){return(F=Object(u.a)(s.a.mark((function e(t,r){var n,c,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=8;break}return e.next=3,o.b.firestore().collection("users").where("category","==",t).get();case 3:return n=e.sent,c=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",c);case 8:return e.next=10,o.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return u=e.sent,i=u.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,r,n,a,c,s){return W.apply(this,arguments)}function W(){return(W=Object(u.a)(s.a.mark((function e(t,r,n,a,c,u,i){var b,h,m,x;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),!u){e.next=24;break}return b="",h={maxSizeMB:1,maxWidthOrHeight:400},e.prev=4,e.next=7,Object(l.a)(u[0],h);case 7:return m=e.sent,(x=new FormData).append("file",m),x.append("upload_preset",f),e.next=13,p.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),x).then((function(e){var t=e.data;b=t.secure_url}));case 13:return e.next=15,o.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c,photo:b});case 15:i(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),i(!1),alert(e.t0.message);case 22:e.next=27;break;case 24:return e.next=26,o.b.firestore().collection("users").doc(t).update({fullName:r,category:n,title:a,bio:c});case 26:i(!1);case 27:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function Y(e,t,r,n){return z.apply(this,arguments)}function z(){return(z=Object(u.a)(s.a.mark((function e(t,r,n,a){var c,u,i,b;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="",u={maxWidthOrHeight:2e3},a(!0),e.prev=3,e.next=6,Object(l.a)(r[0],u);case 6:return i=e.sent,(b=new FormData).append("file",i),b.append("upload_preset",f),e.next=12,p.a.post("https://api.cloudinary.com/v1_1/".concat(d,"/image/upload"),b).then((function(e){var t=e.data;c=t.secure_url}));case 12:return e.next=14,o.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:c,likes:[],photoId:n+Date.now(),userId:n,userLatitude:34.0522,userLongitude:-188.2437});case 14:a(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),a(!1),alert(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}},58:function(e,t,r){"use strict";t.a=r.p+"static/media/logo.6dc95425.png"},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=["web design","video game","animation","graphic design","painting","illustration"]}}]);
//# sourceMappingURL=15.c450d651.chunk.js.map