(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[15],{110:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return C}));var r=s(55),n=s.n(r),c=s(56),o=s(30),a=s(3),l=s(8),i=s(60),u=s(57),j=s(61),d=s(19),m=s(4);function x(e){var t=e.username,s=e.fullName,r=e.photo,n=e.setFollowingOrFollowers;return Object(m.jsxs)("div",{className:"p-2 flex mx-auto items-center",children:[Object(m.jsx)(d.b,{to:"/p/".concat(t),onClick:function(){return n()},children:Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:r,className:"h-10 w-10 rounded-full object-cover"})})}),Object(m.jsxs)("div",{className:"pl-4",children:[Object(m.jsx)(d.b,{to:"/p/".concat(t),onClick:function(){return n()},children:Object(m.jsx)("p",{className:"font-bold",children:s})}),Object(m.jsxs)("p",{className:"text-sm",children:[Object(m.jsx)("span",{className:"text-xs",children:"ID: "}),t]})]})]})}var b=s(63),h=s.n(b);function f(e){var t=e.following,s=e.followers,r=e.followingOrFollowers,l=e.setFollowingOrFollowers,i=Object(a.useState)([]),j=Object(o.a)(i,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(t);case 2:s=e.sent,b(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(s);case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();"following"===r&&e(),"followers"===r&&o()}),[r]),Object(m.jsx)("div",{className:"bg-gray-light h-3/4 sm:max-w-sm sm:w-96 w-screen rounded text-gray-dark p-8 overflow-scroll relative",children:d?d.map((function(e,t){return Object(m.jsx)(x,{username:e.username,fullName:e.fullName,photo:e.photo,setFollowingOrFollowers:l},t)})):Object(m.jsx)(h.a,{count:4,className:"w-full pb-4 h-1/4"})})}function p(e){var t=e.profileUserInfo,s=e.photoCounts,r=Object(j.a)().userInfo,i=r.username,d=r.docId,x=r.userId,b=Object(a.useState)(null),h=Object(o.a)(b,2),p=h[0],O=h[1],g=Object(a.useState)(t.followers.length),w=Object(o.a)(g,2),v=w[0],N=w[1],y=Object(a.useState)(null),k=Object(o.a)(y,2),I=k[0],C=k[1],F=Object(l.g)();Object(a.useEffect)((function(){t&&i&&function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(i,t.userId);case 2:s=e.sent,O(!!s),N(t.followers.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,i]);var S=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O((function(e){return!e})),N(p?function(e){return e-1}:function(e){return e+1}),e.next=4,Object(u.j)(d,x,t.docId,t.userId,p);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"pt-24 text-gray-light",children:[I&&Object(m.jsx)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&C(null)}(e)},className:"flex justify-center w-screen h-screen pt-20 bg-gray-primary bg-opacity-50 fixed top-0 left-0 bottom-0 right-0 z-90",children:Object(m.jsxs)("div",{className:"relative",children:[Object(m.jsx)("button",{onClick:function(){return C(null)},className:"absolute top-2 right-2 md:-right-10 md:text-gray-light text-gray-dark z-90",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 md:h-10 md:w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),Object(m.jsx)(f,{following:t.following,followers:t.followers,followingOrFollowers:I,setFollowingOrFollowers:C})]})}),Object(m.jsxs)("div",{className:"flex items-top sm:items-center ",children:[Object(m.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(m.jsx)("img",{src:t.photo,alt:"".concat(t.username," profile photo"),className:"sm:w-36 sm:h-36 w-12 h-12 rounded-full object-cover"})}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"text-sm font-bold sm:text-lg",children:t.fullName}),Object(m.jsxs)("p",{className:"text-xs sm:text-base",children:[Object(m.jsx)("span",{className:"sm:text-sm",children:"ID: "}),t.username]})]}),Object(m.jsxs)("div",{className:"ml-4 sm:ml-10",children:[t.username===i?Object(m.jsx)("button",{className:"text-xs bg-gray-dark text-gray-light p-2 rounded",onClick:function(){return F.push("/edit/".concat(i))},children:"Edit Profile"}):null,t.username===i||null===p?null:Object(m.jsx)("button",{onClick:S,className:"rounded text-gray-light bg-red-primary text-xs p-2 sm:hidden ".concat(p?"bg-red-primary":"bg-blue-primary"),children:p?"Unfollow":"Follow"})]})]}),Object(m.jsxs)("p",{className:"text-sm sm:text-base",children:[Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:"Category: "}),t.category]}),Object(m.jsxs)("div",{className:"flex mt-2 sm:mt-4",children:[Object(m.jsxs)("p",{className:"text-sm sm:text-base",children:[s," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:1===s?"post":"posts"})]}),Object(m.jsxs)("p",{className:"px-4 cursor-pointer text-sm sm:text-base",onClick:function(){return C(t.followers.length>0&&"followers")},children:[v," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:1===t.followers.length?"follower":"followers"})]}),Object(m.jsxs)("p",{className:"cursor-pointer text-sm sm:text-base",onClick:function(){return C(t.following.length>0&&"following")},children:[t.following.length," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:"following"})]})]})]}),Object(m.jsx)("div",{children:t.username===i||null===p?null:Object(m.jsx)("button",{onClick:S,className:"rounded text-gray-light bg-red-primary text-sm py-2 px-6 hidden sm:block ".concat(p?"bg-red-primary":"bg-blue-primary"),children:p?"Unfollow":"Follow"})})]}),Object(m.jsxs)("div",{className:"pt-2 max-w-2xl",children:[Object(m.jsx)("p",{className:"text-sm sm:text-base",children:t.title}),Object(m.jsx)("p",{className:"text-xs sm:text-sm",children:"Bio:"}),Object(m.jsx)("p",{className:"break-words text-xs sm:text-sm",children:t.bio})]})]})}var O=s(75),g=s(76),w=s(79);function v(e){var t=e.photo,s=e.profileUsername,r=Object(a.useState)(null),l=Object(o.a)(r,2),i=l[0],d=l[1],x=Object(j.a)().userInfo.userId;return Object(a.useEffect)((function(){x&&t&&function(){var e=Object(c.a)(n.a.mark((function e(){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.e)(t.photoId,x,s);case 2:r=e.sent,d(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[x,t]),console.log("photo",t),console.log("photoWithDetails",i),(null===i||void 0===i?void 0:i.username)?Object(m.jsxs)("div",{className:"bg-gray-light py-8 px-8 mx-auto overflow-scroll rounded-sm",children:[Object(m.jsx)(O.a,{userId:i.userId,username:i.username,caption:i.caption,date:i.dateCreated}),Object(m.jsx)(g.a,{imageSrc:i.imageSrc}),Object(m.jsx)(w.a,{likes:i.likes,userLikedPhoto:i.userLikedPhoto,comments:i.comments,docId:i.docId})]}):Object(m.jsx)(b.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(m.jsx)(h.a,{count:1,width:600,height:600})})}function N(e){var t=e.photo,s=e.profileUserInfo,r=Object(a.useState)(!1),n=Object(o.a)(r,2),c=n[0],l=n[1],i=function(){l((function(e){return!e}))};return t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:t.imageSrc,alt:t.caption,className:"object-cover cursor-pointer",style:{width:"100%",aspectRatio:"1"},onClick:i}),c&&Object(m.jsx)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&i()}(e)},className:"flex justify-center w-screen py-10 bg-gray-primary bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 z-90",children:Object(m.jsxs)("div",{className:"flex max-w-screen-sm h-auto max-h-screen relative",children:[Object(m.jsx)("button",{onClick:i,className:" absolute top-0 right-0 text-gray-primary md:-right-10 md:text-gray-light",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 md:h-10 md:w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),Object(m.jsx)(v,{photo:t,profileUsername:s.username})]})})]}):null}function y(e){var t=e.profileUserInfo,s=e.photos;return Object(m.jsx)("div",{className:"border-t-2 border-gray-dark my-8 pt-8",children:Object(m.jsx)("div",{className:"grid grid-cols-3 gap-2 sm:gap-8 items-center",children:s.map((function(e,s){return Object(m.jsx)(N,{photo:e,profileUserInfo:t},s)}))})})}function k(e){var t=e.profileUserInfo,s=Object(a.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(0),d=Object(o.a)(j,2),x=d[0],b=d[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.f)(t.userId);case 2:s=e.sent,i(s.sort((function(e,t){return t.dateCreated-e.dateCreated}))),b(s.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===t||void 0===t?void 0:t.userId)&&e()}),[null===t||void 0===t?void 0:t.userId]),Object(m.jsxs)("div",{className:"max-w-screen-lg container mx-auto px-4",children:[Object(m.jsx)(p,{profileUserInfo:t,photos:l,photoCounts:x}),l?l.length>0?Object(m.jsx)(y,{profileUserInfo:t,photos:l}):Object(m.jsx)("div",{className:"mt-8 border-t-2 border-gray-dark",children:Object(m.jsx)("p",{className:"text-gray-light text-center pt-8",children:"No Posts"})}):null]})}var I=s(11);function C(){var e=Object(l.h)().username,t=Object(a.useState)(null),s=Object(o.a)(t,2),r=s[0],j=s[1],d=Object(l.g)();return Object(a.useEffect)((function(){e&&function(){var t=Object(c.a)(n.a.mark((function t(){var s,r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.i)(e);case 2:s=t.sent,r=Object(o.a)(s,1),c=r[0],j(c),c||d.push(I.d);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),(null===r||void 0===r?void 0:r.username)?Object(m.jsxs)("div",{children:[Object(m.jsx)(i.a,{}),Object(m.jsx)(k,{profileUserInfo:r})]}):Object(m.jsx)(b.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(m.jsx)("div",{className:"max-w-screen-lg h-screen mx-auto",children:Object(m.jsx)(h.a,{count:1,height:200,className:"mt-20 mx-4"})})})}}}]);
//# sourceMappingURL=15.94e091af.chunk.js.map