(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[8],{115:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return h}));var r=s(30),a=s(3),n=s(60),c=s(18),i=s(4);function o(e){var t=e.setShowMessage,s=e.username,r=e.photo,a=e.date,n=e.setSelectedUsersUsername,o=e.setSelectedUsersPhoto;return Object(i.jsxs)("div",{className:"flex relative mb-4 cursor-pointer",onClick:function(){t(!0),n(s),o(r)},children:[Object(i.jsx)(c.b,{to:"/messages/".concat(s),className:"absolute top-0 right-0 left-0 bottom-0 z-90 sm:hidden"}),Object(i.jsx)("div",{className:"flex w-12 h-12 mr-2",children:Object(i.jsx)("img",{src:r,className:"rounded-full w-full h-full object-cover"})}),Object(i.jsxs)("div",{className:"my-auto",children:[Object(i.jsx)("p",{className:"text-sm",children:s}),Object(i.jsx)("div",{className:"flex text-xs font-extralight",children:Object(i.jsx)("p",{children:a})})]})]})}var l=s(66);function u(e){var t=e.setShowMessage,s=e.setSelectedUsersUsername,n=e.setSelectedUsersPhoto,c=Object(a.useState)(""),u=Object(r.a)(c,2),d=u[0],m=u[1],h=Object(a.useState)(l.a),p=Object(r.a)(h,2),x=p[0],j=p[1];return Object(a.useEffect)((function(){if(d){var e=l.a.filter((function(e){return e.username.includes(d.toLowerCase())}));j(e)}else j(l.a)}),[d]),Object(i.jsxs)("div",{className:"mt-24 text-gray-light w-screen sm:w-full sm:overflow-hidden relative h-5/6",children:[Object(i.jsxs)("div",{className:"flex justify-between mx-4 ",children:[Object(i.jsx)("p",{children:"Messages"}),Object(i.jsx)("button",{children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})})]}),Object(i.jsx)("div",{className:"w-full flex",children:Object(i.jsx)("input",{placeholder:"Search...",className:"w-full mx-2 rounded bg-gray-light text-gray-dark px-1 py-0.5 my-2",value:d,onChange:function(e){var t=e.target;return m(t.value)}})}),Object(i.jsx)("div",{className:"w-full px-4 pt-4 pb-4 absolute overflow-y-scroll h-5/6 mt-2",children:x.length>0?x.map((function(e,r){return Object(i.jsx)(o,{setShowMessage:t,username:e.username,photo:e.photo,date:e.date,setSelectedUsersUsername:s,setSelectedUsersPhoto:n},r)})):Object(i.jsx)("p",{className:"text-center",children:"No Results"})})]})}var d=s(71),m=s(72);function h(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),s=t[0],c=t[1],o=Object(a.useState)(""),l=Object(r.a)(o,2),h=l[0],p=l[1],x=Object(a.useState)(""),j=Object(r.a)(x,2),b=j[0],f=j[1];return Object(i.jsxs)("div",{className:"w-screen mx-auto flex h-screen max-w-screen-xl",children:[Object(i.jsxs)("div",{className:"".concat(s&&"hidden"," sm:block sm:w-80 md:w-96 sm:border-r sm:border-gray-dark sm:h-auto sm:mx-auto"),children:[Object(i.jsx)(n.a,{}),Object(i.jsx)(u,{setShowMessage:c,setSelectedUsersUsername:p,setSelectedUsersPhoto:f})]}),Object(i.jsxs)("div",{className:"".concat(!s&&"hidden"," sm:block w-full sm:relative sm:h-full"),children:[Object(i.jsx)(d.a,{setShowMessage:c,showMessage:s,username:h,photo:b}),Object(i.jsx)(m.a,{photo:b,showMessage:s})]})]})}},57:function(e,t,s){"use strict";s.d(t,"b",(function(){return p})),s.d(t,"g",(function(){return j})),s.d(t,"h",(function(){return f})),s.d(t,"a",(function(){return w})),s.d(t,"d",(function(){return v})),s.d(t,"e",(function(){return N})),s.d(t,"i",(function(){return I})),s.d(t,"c",(function(){return z})),s.d(t,"f",(function(){return W})),s.d(t,"j",(function(){return H})),s.d(t,"k",(function(){return q}));var r=s(30),a=s(17),n=s(55),c=s.n(n),i=s(56),o=s(23),l=s(61),u=s.n(l),d=s(62),m="".concat("dvhwserkv"),h="".concat("s4onxndn");function p(e){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return s=e.sent,e.abrupt("return",s.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(c.a.mark((function e(t){var s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("userId","==",t).get();case 2:return s=e.sent,r=s.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return g.apply(this,arguments)}function g(){return(g=Object(i.a)(c.a.mark((function e(t){var s,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).get();case 2:return s=e.sent,r=s.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(c.a.mark((function e(t,s){var n,i,l,u,d;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("users").where("username","==",t).where("following","array-contains",s).get();case 2:return n=e.sent,i=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),l=Object(r.a)(i,1),u=l[0],d=void 0===u?{}:u,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(c.a.mark((function e(t,s){var n,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","in",t).get();case 2:return n=e.sent,l=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(l.map(function(){var e=Object(i.a)(c.a.mark((function e(t){var n,i,o,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t.likes.includes(s)&&(n=!0),e.next=4,j(t.userId);case 4:return i=e.sent,o=Object(r.a)(i,1),l=o[0],u=l.username,e.abrupt("return",Object(a.a)(Object(a.a)({username:u},t),{},{userLikedPhoto:n}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,s){return k.apply(this,arguments)}function k(){return(k=Object(i.a)(c.a.mark((function e(t,s,r){var n,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.firestore().collection("photos").where("userId","==",s).get();case 2:return n=e.sent,l=n.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(l.map(function(){var e=Object(i.a)(c.a.mark((function e(s){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,s.likes.includes(t)&&(n=!0),e.abrupt("return",Object(a.a)(Object(a.a)({username:r},s),{},{userLikedPhoto:n}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t,s){return L.apply(this,arguments)}function L(){return(L=Object(i.a)(c.a.mark((function e(t,s,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({following:r?o.a.arrayRemove(s):o.a.arrayUnion(s)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t,s){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(c.a.mark((function e(t,s,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b.firestore().collection("users").doc(t).update({followers:r?o.a.arrayRemove(s):o.a.arrayUnion(s)});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t,s,r,a){return U.apply(this,arguments)}function U(){return(U=Object(i.a)(c.a.mark((function e(t,s,r,a,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M(t,a,n);case 2:return e.next=4,S(r,s,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(i.a)(c.a.mark((function e(t){var s,a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j(t);case 2:return s=e.sent,a=Object(r.a)(s,1),n=a[0],e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return B.apply(this,arguments)}function B(){return(B=Object(i.a)(c.a.mark((function e(t,s){var r,n,i,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=8;break}return e.next=3,o.b.firestore().collection("users").where("category","==",t).get();case 3:return r=e.sent,n=r.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 8:return e.next=10,o.b.firestore().collection("users").limit(10).where("category","==",t).get();case 10:return i=e.sent,l=i.docs.map((function(e){return Object(a.a)(Object(a.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",l);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t,s,r,a,n,c){return A.apply(this,arguments)}function A(){return(A=Object(i.a)(c.a.mark((function e(t,s,r,a,n,i,l){var p,x,j,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(!0),!i){e.next=24;break}return p="",x={maxSizeMB:1,maxWidthOrHeight:400},e.prev=4,e.next=7,Object(d.a)(i[0],x);case 7:return j=e.sent,(b=new FormData).append("file",j),b.append("upload_preset",h),e.next=13,u.a.post("https://api.cloudinary.com/v1_1/".concat(m,"/image/upload"),b).then((function(e){var t=e.data;p=t.secure_url}));case 13:return e.next=15,o.b.firestore().collection("users").doc(t).update({fullName:s,category:r,title:a,bio:n,photo:p});case 15:l(!1),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(4),l(!1),alert(e.t0.message);case 22:e.next=27;break;case 24:return e.next=26,o.b.firestore().collection("users").doc(t).update({fullName:s,category:r,title:a,bio:n});case 26:l(!1);case 27:case"end":return e.stop()}}),e,null,[[4,18]])})))).apply(this,arguments)}function q(e,t,s,r){return _.apply(this,arguments)}function _(){return(_=Object(i.a)(c.a.mark((function e(t,s,r,a){var n,i,l,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="",i={maxWidthOrHeight:2e3},a(!0),e.prev=3,e.next=6,Object(d.a)(s[0],i);case 6:return l=e.sent,(p=new FormData).append("file",l),p.append("upload_preset",h),e.next=12,u.a.post("https://api.cloudinary.com/v1_1/".concat(m,"/image/upload"),p).then((function(e){var t=e.data;n=t.secure_url}));case 12:return e.next=14,o.b.firestore().collection("photos").add({caption:t,comments:[],dateCreated:Date.now(),imageSrc:n,likes:[],photoId:r+Date.now(),userId:r,userLatitude:34.0522,userLongitude:-188.2437});case 14:a(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),a(!1),alert(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}},58:function(e,t,s){"use strict";t.a=s.p+"static/media/logo.6dc95425.png"},60:function(e,t,s){"use strict";s.d(t,"a",(function(){return j}));var r=s(55),a=s.n(r),n=s(56),c=s(30),i=s(3),o=s(58),l=s(8),u=s(18),d=s(11),m=s(31),h=s(20),p=s(57),x=s(4);function j(){var e=Object(i.useState)(""),t=Object(c.a)(e,2),s=t[0],r=t[1],j=Object(i.useContext)(m.a).user.uid,b=Object(i.useContext)(h.a).firebase,f=Object(l.g)();return Object(i.useEffect)((function(){var e=null;j&&function(){var t=Object(n.a)(a.a.mark((function t(){var s,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=9;break}return t.next=3,Object(p.g)(j);case 3:s=t.sent,n=Object(c.a)(s,1),e=n[0],r(e),t.next=0;break;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[j]),s?Object(x.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0",children:Object(x.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex justify-between items-center",children:[Object(x.jsx)(u.b,{to:d.a,children:Object(x.jsx)("h1",{className:"flex sm:h-14 sm:w-auto w-28",children:Object(x.jsx)("img",{src:o.a,alt:"artisto",className:"sm:h-full sm:w-auto w-full h-auto"})})}),Object(x.jsxs)("div",{className:"flex flex-row items-center",children:[Object(x.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(x.jsx)(u.b,{to:d.j,children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 4v16m8-8H4"})})})}),Object(x.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(x.jsx)(u.b,{to:d.h,children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})}),Object(x.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(x.jsx)(u.b,{to:d.c,children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})})}),Object(x.jsx)("div",{className:"flex h-14 items-center pr-2 sm:pr-4",children:Object(x.jsx)(u.b,{to:"/p/".concat(null===s||void 0===s?void 0:s.username),children:Object(x.jsx)("img",{src:null===s||void 0===s?void 0:s.photo,className:"h-5 w-5 sm:h-10 sm:w-10 rounded-full object-cover"})})}),Object(x.jsx)("div",{className:"pr-2 sm:pr-4 cursor-pointer",onClick:function(){b.auth().signOut(),f.push(d.b)},children:Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 sm:h-8 sm:w-8 text-gray-light",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(x.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})})]})]})}):null}},66:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return a}));var r=[{message:"test",time:"10:35AM",sender:"other"},{message:"Coding is fun!",time:"10:38AM",sender:"me"},{message:"You're kidding lol",time:"11:01AM",sender:"other"},{message:"hello",time:"10:35AM",sender:"me"},{message:"world",time:"10:36AM",sender:"me"},{message:"hoge",time:"4:10PM",sender:"other"},{message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sequi laborum eveniet officia ratione, veniam expedita placeat at perferendis blanditiis inventore dolor esse accusamus harum rerum, repellat corporis error itaque corrupti obcaecati nostrum qui nulla ad cum? Earum numquam commodi nemo placeat pariatur accusamus doloremque similique, dolore expedita, voluptates optio.",time:"6:35PM",sender:"other"},{message:"test2",time:"11:00PM",sender:"me"}],a=[{username:"maria",photo:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"2h ago"},{username:"hans",photo:"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"1d ago"},{username:"alvar",photo:"https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"3d ago"},{username:"magdalena",photo:"https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"1w ago"},{username:"masseot",photo:"https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"2w ago"},{username:"riza",photo:"https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"2w ago"},{username:"louise",photo:"https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",date:"3w ago"}]},71:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));s(3);var r=s(18),a=s(11),n=s(4);function c(e){var t=e.showMessage,s=e.username,c=e.photo;return t?Object(n.jsx)("header",{className:"sm:z-90 sm:absolute sm:w-full sm:top-16",children:Object(n.jsx)("div",{className:"bg-gray-dark w-screen h-14 flex justify-center items-center fixed z-50 top-0 left-0 sm:w-full sm:static sm:bg-gray-primary",children:Object(n.jsxs)("div",{className:"max-w-screen-xl w-full h-14 flex items-center text-gray-light",children:[Object(n.jsx)(r.b,{className:"mr-4 sm:hidden",to:a.c,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),Object(n.jsx)("div",{className:"flex w-8 h-8 mr-2 sm:ml-4",children:Object(n.jsx)("img",{src:c,className:"rounded-full w-full h-full object-cover"})}),Object(n.jsx)("p",{children:s})]})})}):null}},72:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(3);var r=s(66),a=s(4);function n(e){var t=e.photo;return e.showMessage?Object(a.jsxs)("div",{className:"pb-4 sm:overflow-y-scroll sm:absolute sm:top-28 sm:w-full sm:h-4/5 sm:z-10 mt-16 sm:mt-0",children:[Object(a.jsx)("div",{className:"flex justify-center mb-2 mt-6",children:Object(a.jsx)("p",{className:"text-gray-light text-xs mx-auto",children:"Sep 1, 2021"})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("div",{className:"flex w-5 h-5 mr-2",children:Object(a.jsx)("img",{src:t,className:"rounded-full w-full h-full object-cover"})}),Object(a.jsxs)("div",{className:"flex items-end",children:[Object(a.jsx)("p",{className:"bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52",children:r.b[0].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny ml-2",children:r.b[0].time})]})]})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsx)("div",{className:"flex justify-end items-center",children:Object(a.jsxs)("div",{className:"flex flex-row-reverse items-end",children:[Object(a.jsx)("p",{className:"bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52",children:r.b[1].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny mr-2",children:r.b[1].time})]})})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("div",{className:"flex w-5 h-5 mr-2",children:Object(a.jsx)("img",{src:t,className:"rounded-full w-full h-full object-cover"})}),Object(a.jsxs)("div",{className:"flex items-end",children:[Object(a.jsx)("p",{className:"bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52",children:r.b[2].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny ml-2",children:r.b[2].time})]})]})}),Object(a.jsx)("div",{className:"flex justify-center mb-2 mt-6",children:Object(a.jsx)("p",{className:"text-gray-light text-xs mx-auto",children:"Sep 2, 2021"})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsx)("div",{className:"flex justify-end items-center",children:Object(a.jsxs)("div",{className:"flex flex-row-reverse items-end",children:[Object(a.jsx)("p",{className:"bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52",children:r.b[3].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny mr-2",children:r.b[3].time})]})})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsx)("div",{className:"flex justify-end items-center",children:Object(a.jsxs)("div",{className:"flex flex-row-reverse items-end",children:[Object(a.jsx)("p",{className:"bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52",children:r.b[4].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny mr-2",children:r.b[4].time})]})})}),Object(a.jsx)("div",{className:"flex justify-center mb-2 mt-6",children:Object(a.jsx)("p",{className:"text-gray-light text-xs mx-auto",children:"Sep 3, 2021"})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsxs)("div",{className:"flex items-center",children:[Object(a.jsx)("div",{className:"flex w-5 h-5 mr-2",children:Object(a.jsx)("img",{src:t,className:"rounded-full w-full h-full object-cover"})}),Object(a.jsxs)("div",{className:"flex items-end",children:[Object(a.jsx)("p",{className:"bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52",children:r.b[5].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny ml-2",children:r.b[5].time})]})]})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm",children:Object(a.jsxs)("div",{className:"flex",children:[Object(a.jsx)("div",{className:"flex w-5 h-5 mr-2",children:Object(a.jsx)("img",{src:t,className:"rounded-full w-full h-full object-cover"})}),Object(a.jsxs)("div",{className:"flex items-end",children:[Object(a.jsx)("p",{className:"bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52",children:r.b[6].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny ml-2",children:r.b[6].time})]})]})}),Object(a.jsx)("div",{className:"mt-4 px-4 text-sm mb-16",children:Object(a.jsx)("div",{className:"flex justify-end items-center",children:Object(a.jsxs)("div",{className:"flex flex-row-reverse items-end",children:[Object(a.jsx)("p",{className:"bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52",children:r.b[7].message}),Object(a.jsx)("p",{className:"text-gray-light text-tiny mr-2",children:r.b[7].time})]})})}),Object(a.jsxs)("div",{className:"fixed bottom-0 h-16 w-full bg-gray-primary items-center flex",children:[Object(a.jsx)("button",{className:"ml-2 text-gray-light",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),Object(a.jsx)("button",{className:"ml-2 text-gray-light",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),Object(a.jsx)("button",{className:"ml-2 text-gray-light",children:Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"})})}),Object(a.jsx)("input",{placeholder:"Message...",className:"bg-gray-primary ml-2 sm:ml-4 h-2/3 border border-gray-light rounded-xl w-3/5 sm:w-1/2 px-2 text-gray-light focus:outline-none"})]})]}):Object(a.jsx)("div",{className:"flex justify-center items-center h-screen my-auto",children:Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)("p",{className:"text-gray-light w-auto mx-auto mb-4",children:"Send Messages to Other Artists!"}),Object(a.jsx)("button",{className:"text-gray-light bg-blue-primary px-4 py-2 w-40 mx-auto block rounded",children:"Send Message"})]})})}}}]);
//# sourceMappingURL=8.c053f6c3.chunk.js.map