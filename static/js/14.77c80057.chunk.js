(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[14],{112:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return g}));var s=c(3),n=c(31),r=c(60),a=c(55),i=c.n(a),l=c(56),o=c(30),j=c(63),u=c.n(j),d=c(75),x=c(76),h=c(79),b=c(4);function m(e){var t=e.photo;return Object(b.jsxs)("div",{className:"bg-gray-light py-2 sm:py-8 px-2 sm:px-8 mb-8 rounded-sm",children:[Object(b.jsx)(d.a,{userId:t.userId,username:t.username,caption:t.caption,date:t.dateCreated}),Object(b.jsx)(x.a,{imageSrc:t.imageSrc}),Object(b.jsx)(h.a,{likes:t.likes,userLikedPhoto:t.userLikedPhoto,comments:t.comments,docId:t.docId})]})}var f=c(57);function O(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(s.useContext)(n.a).user.uid;return Object(s.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,c,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null;case 1:if(t){e.next=9;break}return e.next=4,Object(f.h)(a);case 4:c=e.sent,s=Object(o.a)(c,1),t=s[0],e.next=1;break;case 9:if(n=[],!(t.following.length>0)){e.next=16;break}return e.next=13,Object(f.d)(t.following,a);case 13:n=e.sent,e.next=17;break;case 16:case 17:n.sort((function(e,t){return t.dateCreated-e.dateCreated})),r(n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a]),Object(b.jsx)("div",{className:"col-span-3 container mx-auto md:col-span-2",children:c?c.length>0?c.map((function(e){return Object(b.jsx)(m,{photo:e},e.docId)})):Object(b.jsx)("p",{className:"text-gray-light text-center pt-20",children:"Follow artists to see photos!"}):Object(b.jsx)(j.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)(u.a,{count:4,width:640,height:500})})})}var p=c(66);c(61);function g(){return Object(b.jsxs)("div",{className:"font-body",children:[Object(b.jsx)(r.a,{}),Object(b.jsx)("div",{className:"w-sceen flex justify-center pt-24",children:Object(b.jsxs)("div",{className:"grid grid-cols-3 w-full max-w-screen-lg mx-4",children:[Object(b.jsx)(O,{}),Object(b.jsx)(p.a,{})]})})]})}},66:function(e,t,c){"use strict";c.d(t,"a",(function(){return h}));var s=c(55),n=c.n(s),r=c(56),a=c(30),i=c(3),l=c(31),o=c(57),j=c(19),u=(c(61),c(63)),d=c.n(u),x=c(4);function h(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),c=t[0],s=t[1],h=Object(i.useContext)(l.a).user.uid;return console.log("userIdSideProfile",h),Object(i.useEffect)((function(){document.title="Artisto"}),[]),Object(i.useEffect)((function(){var e=null;h&&function(){var t=Object(r.a)(n.a.mark((function t(){var c,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=10;break}return t.next=3,Object(o.h)(h);case 3:c=t.sent,r=Object(a.a)(c,1),e=r[0],s(e),console.log("resultSideProfile",e),t.next=0;break;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[h]),Object(x.jsx)("div",{className:"md:flex pt-4 justify-center hidden",children:Object(x.jsxs)("div",{className:"mx-auto justify-center flex-col w-full sticky top-0 max-h-screen pt-20 max-w-xs",children:[Object(x.jsx)("div",{className:"flex justify-center",children:(null===c||void 0===c?void 0:c.photo)||(null===c||void 0===c?void 0:c.username)?Object(x.jsx)(j.b,{to:"/p/".concat(c.username),children:Object(x.jsx)("img",{src:c.photo,className:"h-36 w-36 rounded-full object-cover"})}):Object(x.jsx)(u.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(x.jsx)(d.a,{width:144,height:144,circle:!0})})}),(null===c||void 0===c?void 0:c.username)?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[Object(x.jsx)("p",{className:"font-bold mt-4 text-gray-light",children:c.fullName}),Object(x.jsxs)("p",{className:"text-sm text-gray-light",children:[Object(x.jsx)("span",{className:"text-xs",children:"ID: "}),c.username]}),Object(x.jsx)("p",{className:"text-sm mt-4 text-gray-light",children:c.title}),Object(x.jsxs)("p",{className:"mt-2 text-sm text-gray-light",children:[Object(x.jsx)("span",{className:"text-xs ",children:"Category: "}),c.category]})]}),Object(x.jsxs)("div",{className:"mt-2 max-w-sm p-4 mx-auto w-48 md:w-60",children:[Object(x.jsx)("p",{className:"text-sm text-gray-light",children:"Bio:"}),Object(x.jsx)("p",{className:"text-xs w-full break-words text-gray-light",children:c.bio.length>100?"".concat(c.bio.substr(0,100),"..."):c.bio})]})]}):Object(x.jsx)("div",{className:"flex justify-center flex-col items-center mt-4",children:Object(x.jsx)(u.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(x.jsx)(d.a,{width:180,height:200})})})]})})}}}]);
//# sourceMappingURL=14.77c80057.chunk.js.map