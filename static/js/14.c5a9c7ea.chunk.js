(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[14],{112:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return g}));var c=s(3),n=s(31),r=s(60),a=s(55),i=s.n(a),l=s(56),o=s(30),j=s(63),u=s.n(j),d=s(75),x=s(76),h=s(79),b=s(4);function m(e){var t=e.photo;return Object(b.jsxs)("div",{className:"bg-gray-light py-2 sm:py-8 px-2 sm:px-8 mb-8 rounded-sm",children:[Object(b.jsx)(d.a,{userId:t.userId,username:t.username,caption:t.caption,date:t.dateCreated}),Object(b.jsx)(x.a,{imageSrc:t.imageSrc}),Object(b.jsx)(h.a,{likes:t.likes,userLikedPhoto:t.userLikedPhoto,comments:t.comments,docId:t.docId})]})}var f=s(57);function O(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),s=t[0],r=t[1],a=Object(c.useContext)(n.a).user.uid;return Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(i.a.mark((function e(){var t,s,c,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=null;case 1:if(t){e.next=9;break}return e.next=4,Object(f.h)(a);case 4:s=e.sent,c=Object(o.a)(s,1),t=c[0],e.next=1;break;case 9:if(n=[],!(t.following.length>0)){e.next=16;break}return e.next=13,Object(f.d)(t.following,a);case 13:n=e.sent,e.next=17;break;case 16:case 17:n.sort((function(e,t){return t.dateCreated-e.dateCreated})),r(n);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a&&function(){e.apply(this,arguments)}()}),[a]),Object(b.jsx)("div",{className:"col-span-3 w-full mx-auto md:col-span-2",children:s?s.length>0?s.map((function(e){return Object(b.jsx)(m,{photo:e},e.docId)})):Object(b.jsx)("p",{className:"text-gray-light text-center pt-20",children:"Follow artists to see photos!"}):Object(b.jsx)(j.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)(u.a,{count:4,width:640,height:500})})})}var p=s(66);s(61);function g(){return Object(b.jsxs)("div",{className:"font-body",children:[Object(b.jsx)(r.a,{}),Object(b.jsx)("div",{className:"w-sceen flex justify-center mt-24 px-4",children:Object(b.jsxs)("div",{className:"grid grid-cols-3 w-full max-w-screen-lg",children:[Object(b.jsx)(O,{}),Object(b.jsx)(p.a,{})]})})]})}},66:function(e,t,s){"use strict";s.d(t,"a",(function(){return h}));var c=s(55),n=s.n(c),r=s(56),a=s(30),i=s(3),l=s(31),o=s(57),j=s(19),u=(s(61),s(63)),d=s.n(u),x=s(4);function h(){var e=Object(i.useState)({}),t=Object(a.a)(e,2),s=t[0],c=t[1],h=Object(i.useContext)(l.a).user.uid;return console.log("userIdSideProfile",h),Object(i.useEffect)((function(){document.title="Artisto"}),[]),Object(i.useEffect)((function(){var e=null;h&&function(){var t=Object(r.a)(n.a.mark((function t(){var s,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=10;break}return t.next=3,Object(o.h)(h);case 3:s=t.sent,r=Object(a.a)(s,1),e=r[0],c(e),console.log("resultSideProfile",e),t.next=0;break;case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[h]),Object(x.jsx)("div",{className:"md:flex pt-4 justify-center hidden",children:Object(x.jsxs)("div",{className:"mx-auto justify-center flex-col w-full sticky top-0 max-h-screen pt-20 max-w-xs",children:[Object(x.jsx)("div",{className:"flex justify-center",children:(null===s||void 0===s?void 0:s.photo)||(null===s||void 0===s?void 0:s.username)?Object(x.jsx)(j.b,{to:"/p/".concat(s.username),children:Object(x.jsx)("img",{src:s.photo,className:"h-36 w-36 rounded-full object-cover"})}):Object(x.jsx)(u.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(x.jsx)(d.a,{width:144,height:144,circle:!0})})}),(null===s||void 0===s?void 0:s.username)?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[Object(x.jsx)("p",{className:"font-bold mt-4 text-gray-light",children:s.fullName}),Object(x.jsxs)("p",{className:"text-sm text-gray-light",children:[Object(x.jsx)("span",{className:"text-xs",children:"ID: "}),s.username]}),Object(x.jsx)("p",{className:"text-sm mt-4 text-gray-light",children:s.title}),Object(x.jsxs)("p",{className:"mt-2 text-sm text-gray-light",children:[Object(x.jsx)("span",{className:"text-xs ",children:"Category: "}),s.category]})]}),Object(x.jsxs)("div",{className:"mt-2 max-w-sm p-4 mx-auto w-48 md:w-60",children:[Object(x.jsx)("p",{className:"text-sm text-gray-light",children:"Bio:"}),Object(x.jsx)("p",{className:"text-xs w-full break-words text-gray-light",children:s.bio.length>100?"".concat(s.bio.substr(0,100),"..."):s.bio})]})]}):Object(x.jsx)("div",{className:"flex justify-center flex-col items-center mt-4",children:Object(x.jsx)(u.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(x.jsx)(d.a,{width:180,height:200})})})]})})}}}]);
//# sourceMappingURL=14.c5a9c7ea.chunk.js.map