(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[15],{110:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return I}));var r=s(55),n=s.n(r),c=s(56),o=s(30),a=s(3),l=s(8),i=s(60),u=s(57),d=s(61),j=s(18),m=s(4);function x(e){var t=e.username,s=e.fullName,r=e.photo,n=e.setFollowingOrFollowers;return Object(m.jsxs)("div",{className:"p-2 flex mx-auto items-center",children:[Object(m.jsx)(j.b,{to:"/p/".concat(t),onClick:function(){return n()},children:Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:r,className:"h-10 w-10 rounded-full object-cover"})})}),Object(m.jsxs)("div",{className:"pl-4",children:[Object(m.jsx)(j.b,{to:"/p/".concat(t),onClick:function(){return n()},children:Object(m.jsx)("p",{className:"font-bold",children:s})}),Object(m.jsxs)("p",{className:"text-sm",children:[Object(m.jsx)("span",{className:"text-xs",children:"ID: "}),t]})]})]})}var h=s(63),b=s.n(h);function f(e){var t=e.following,s=e.followers,r=e.followingOrFollowers,l=e.setFollowingOrFollowers,i=Object(a.useState)([]),d=Object(o.a)(i,2),j=d[0],h=d[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(t);case 2:s=e.sent,h(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(c.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(s);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();"following"===r&&e(),"followers"===r&&o()}),[r]),Object(m.jsx)("div",{className:"bg-gray-light h-full sm:max-w-sm sm:w-96 w-screen rounded text-gray-dark p-8 overflow-scroll relative",children:j?j.map((function(e,t){return Object(m.jsx)(x,{username:e.username,fullName:e.fullName,photo:e.photo,setFollowingOrFollowers:l},t)})):Object(m.jsx)(b.a,{count:4,className:"w-full pb-4 h-1/4"})})}function p(e){var t=e.profileUserInfo,s=e.photoCounts,r=Object(d.a)().userInfo,i=r.username,j=r.docId,x=r.userId,h=Object(a.useState)(null),b=Object(o.a)(h,2),p=b[0],O=b[1],g=Object(a.useState)(t.followers.length),w=Object(o.a)(g,2),v=w[0],N=w[1],k=Object(a.useState)(null),y=Object(o.a)(k,2),C=y[0],I=y[1],F=Object(l.g)();Object(a.useEffect)((function(){t&&i&&function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(i,t.userId);case 2:s=e.sent,O(!!s),N(t.followers.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,i]);var S=function(){var e=Object(c.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O((function(e){return!e})),N(p?function(e){return e-1}:function(e){return e+1}),e.next=4,Object(u.j)(j,x,t.docId,t.userId,p);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"pt-24 text-gray-light",children:[C&&Object(m.jsx)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&I(null)}(e)},className:"flex justify-center w-screen h-screen pt-20 bg-gray-primary bg-opacity-50 fixed top-0 left-0 bottom-0 right-0 z-90",children:Object(m.jsxs)("div",{className:"relative h-3/4",children:[Object(m.jsx)("button",{onClick:function(){return I(null)},className:"absolute top-2 right-2 md:-right-10 md:text-gray-light text-gray-dark z-90",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 md:h-10 md:w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),Object(m.jsx)(f,{following:t.following,followers:t.followers,followingOrFollowers:C,setFollowingOrFollowers:I})]})}),Object(m.jsxs)("div",{className:"flex items-top sm:items-center ",children:[Object(m.jsx)("div",{className:"pr-2 sm:pr-4",children:Object(m.jsx)("img",{src:t.photo,alt:"".concat(t.username," profile photo"),className:"sm:w-36 sm:h-36 w-12 h-12 rounded-full object-cover"})}),Object(m.jsxs)("div",{className:"",children:[Object(m.jsxs)("div",{className:"flex items-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{className:"text-sm font-bold sm:text-lg",children:t.fullName}),Object(m.jsxs)("p",{className:"text-xs sm:text-base",children:[Object(m.jsx)("span",{className:"sm:text-sm",children:"ID: "}),t.username]})]}),Object(m.jsxs)("div",{className:"ml-4 sm:ml-10",children:[t.username===i?Object(m.jsx)("button",{className:"text-xs bg-gray-dark text-gray-light p-2 rounded",onClick:function(){return F.push("/edit/".concat(i))},children:"Edit Profile"}):null,t.username===i||null===p?null:Object(m.jsx)("button",{onClick:S,className:"rounded text-gray-light bg-red-primary text-xs p-2 sm:hidden ".concat(p?"bg-red-primary":"bg-blue-primary"),children:p?"Unfollow":"Follow"})]})]}),Object(m.jsxs)("p",{className:"text-sm sm:text-base",children:[Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:"Category: "}),t.category]}),Object(m.jsxs)("div",{className:"flex mt-2 sm:mt-4",children:[Object(m.jsxs)("p",{className:"text-sm sm:text-base",children:[s," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:1===s?"post":"posts"})]}),Object(m.jsxs)("p",{className:"px-4 cursor-pointer text-sm sm:text-base",onClick:function(){return I(t.followers.length>0&&"followers")},children:[v," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:1===t.followers.length?"follower":"followers"})]}),Object(m.jsxs)("p",{className:"cursor-pointer text-sm sm:text-base",onClick:function(){return I(t.following.length>0&&"following")},children:[t.following.length," ",Object(m.jsx)("span",{className:"text-xs sm:text-sm",children:"following"})]})]})]}),Object(m.jsx)("div",{children:t.username===i||null===p?null:Object(m.jsx)("button",{onClick:S,className:"rounded text-gray-light bg-red-primary text-sm py-2 px-6 hidden sm:block ".concat(p?"bg-red-primary":"bg-blue-primary"),children:p?"Unfollow":"Follow"})})]}),Object(m.jsxs)("div",{className:"pt-2 max-w-2xl",children:[Object(m.jsx)("p",{className:"text-sm sm:text-base",children:t.title}),Object(m.jsx)("p",{className:"text-xs sm:text-sm",children:"Bio:"}),Object(m.jsx)("p",{className:"break-words text-xs sm:text-sm",children:t.bio})]})]})}var O=s(75),g=s(76),w=s(79);function v(e){var t=e.photo,s=e.profileUsername,r=Object(a.useState)(null),l=Object(o.a)(r,2),i=l[0],j=l[1],x=Object(d.a)().userInfo.userId;return Object(a.useEffect)((function(){x&&t&&function(){var e=Object(c.a)(n.a.mark((function e(){var r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.e)(t.photoId,x,s);case 2:r=e.sent,j(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[x,t]),(null===i||void 0===i?void 0:i.username)?Object(m.jsxs)("div",{className:"bg-gray-light py-8 px-2 sm:px-8 mx-auto overflow-scroll rounded-sm",children:[Object(m.jsx)(O.a,{userId:t.userId,username:t.username,caption:t.caption,date:t.dateCreated}),Object(m.jsx)(g.a,{imageSrc:t.imageSrc}),Object(m.jsx)(w.a,{likes:t.likes,userLikedPhoto:t.userLikedPhoto,comments:t.comments,docId:t.docId})]}):Object(m.jsx)(h.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(m.jsx)(b.a,{count:1,width:600,height:600})})}function N(e){var t=e.photo,s=e.profileUserInfo,r=e.photos,n=(e.photoCounts,Object(a.useState)(!1)),c=Object(o.a)(n,2),l=c[0],i=c[1],u=Object(a.useState)(t),d=Object(o.a)(u,2),j=d[0],x=d[1],h=function(){i((function(e){return!e})),x(t)};return t?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"relative w-full",style:{paddingTop:"100%"},children:Object(m.jsx)("img",{src:t.imageSrc,alt:t.caption,className:"object-cover cursor-pointer absolute top-0 left-0 right-0 bottom-0 w-full h-full",onClick:h})}),l&&Object(m.jsxs)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&h()}(e)},className:"flex justify-center w-screen py-10 bg-gray-primary bg-opacity-70 fixed top-0 left-0 right-0 bottom-0 z-90",children:[Object(m.jsx)("button",{onClick:function(){r.indexOf(j)>0&&x((function(e){return r[r.indexOf(e)-1]}))},className:"hidden md:flex text-gray-light absolute md:left-4 lg:left-20 xl:left-40 top-1/2 p-4 rounded opacity-60 hover:opacity-100 ".concat(0===r.indexOf(j)&&"md:hidden"),children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M15 19l-7-7 7-7"})})}),Object(m.jsx)("button",{onClick:function(){r.length-1!==r.indexOf(j)&&x((function(e){return r[r.indexOf(e)+1]}))},className:"hidden md:flex text-gray-light absolute md:right-4 lg:right-20 xl:right-40 top-1/2 p-4 rounded opacity-60 hover:opacity-100 ".concat(r.length-1===r.indexOf(j)&&"md:hidden"),children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-10 w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5l7 7-7 7"})})}),Object(m.jsxs)("div",{className:"flex h-screen pb-4 sm:pb-0 sm:h-auto sm:max-h-screen relative max-w-screen-sm",children:[Object(m.jsx)("button",{onClick:h,className:" absolute top-0 right-0 text-gray-primary md:-right-10 md:text-gray-light",children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 md:h-10 md:w-10",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(m.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})}),Object(m.jsx)(v,{photo:j,profileUsername:s.username})]})]})]}):null}function k(e){var t=e.profileUserInfo,s=e.photos,r=e.photoCounts;return Object(m.jsx)("div",{className:"border-t-2 border-gray-dark my-8 pt-8",children:Object(m.jsx)("div",{className:"grid grid-cols-3 gap-2 sm:gap-8 items-center",children:s.map((function(e,n){return Object(m.jsx)(N,{photo:e,profileUserInfo:t,photos:s,photoCounts:r},n)}))})})}function y(e){var t=e.profileUserInfo,s=Object(a.useState)(null),r=Object(o.a)(s,2),l=r[0],i=r[1],j=Object(a.useState)(0),x=Object(o.a)(j,2),h=x[0],b=x[1],f=Object(d.a)().userInfo.userId;return Object(a.useEffect)((function(){var e=function(){var e=Object(c.a)(n.a.mark((function e(){var s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.f)(f,t.userId,t.username);case 2:s=e.sent,i(s.sort((function(e,t){return t.dateCreated-e.dateCreated}))),b(s.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===t||void 0===t?void 0:t.userId)&&f&&e()}),[null===t||void 0===t?void 0:t.userId,f]),Object(m.jsxs)("div",{className:"max-w-screen-lg container mx-auto px-4",children:[Object(m.jsx)(p,{profileUserInfo:t,photos:l,photoCounts:h}),l?l.length>0?Object(m.jsx)(k,{profileUserInfo:t,photos:l,photoCounts:h}):Object(m.jsx)("div",{className:"mt-8 border-t-2 border-gray-dark",children:Object(m.jsx)("p",{className:"text-gray-light text-center pt-8",children:"No Posts"})}):null]})}var C=s(11);function I(){var e=Object(l.i)().username,t=Object(a.useState)(null),s=Object(o.a)(t,2),r=s[0],d=s[1],j=Object(l.g)();return Object(a.useEffect)((function(){e&&function(){var t=Object(c.a)(n.a.mark((function t(){var s,r,c;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.i)(e);case 2:s=t.sent,r=Object(o.a)(s,1),c=r[0],d(c),c||j.push(C.d);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),Object(a.useEffect)((function(){document.title="".concat(e," - Artisto")}),[e]),(null===r||void 0===r?void 0:r.username)?Object(m.jsxs)("div",{children:[Object(m.jsx)(i.a,{}),Object(m.jsx)(y,{profileUserInfo:r})]}):Object(m.jsx)(h.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(m.jsx)("div",{className:"max-w-screen-lg h-screen mx-auto",children:Object(m.jsx)(b.a,{count:1,height:200,className:"mt-20 mx-4"})})})}}}]);
//# sourceMappingURL=15.bbf52f6b.chunk.js.map