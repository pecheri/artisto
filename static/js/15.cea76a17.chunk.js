(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[15],{110:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return F}));var n=r(55),c=r.n(n),s=r(56),a=r(30),o=r(3),l=r(8),i=r(60),u=r(57),j=r(61),d=r(19),b=r(4);function f(e){var t=e.username,r=e.fullName,n=e.photo,c=e.setFollowingOrFollowers;return Object(b.jsxs)("div",{className:"p-2 flex mx-auto items-center",children:[Object(b.jsx)(d.b,{to:"/p/".concat(t),onClick:function(){return c()},children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:n,className:"h-10 w-10 rounded-full object-cover"})})}),Object(b.jsxs)("div",{className:"pl-4",children:[Object(b.jsx)(d.b,{to:"/p/".concat(t),onClick:function(){return c()},children:Object(b.jsx)("p",{className:"font-bold",children:r})}),Object(b.jsxs)("p",{className:"text-sm",children:[Object(b.jsx)("span",{className:"text-xs",children:"ID: "}),t]})]})]})}var p=r(63),h=r.n(p);function m(e){var t=e.following,r=e.followers,n=e.followingOrFollowers,l=e.setFollowingOrFollowers,i=Object(o.useState)([]),j=Object(a.a)(i,2),d=j[0],p=j[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(t);case 2:r=e.sent,p(r);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),a=function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.c)(r);case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();"following"===n&&e(),"followers"===n&&a()}),[n]),Object(b.jsx)("div",{className:"bg-gray-light h-3/4 max-w-sm w-96 rounded text-gray-dark p-8",children:d?d.map((function(e,t){return Object(b.jsx)(f,{username:e.username,fullName:e.fullName,photo:e.photo,setFollowingOrFollowers:l},t)})):Object(b.jsx)(h.a,{count:4,className:"w-full pb-4 h-1/4"})})}function x(e){var t=e.profileUserInfo,r=e.photoCounts,n=Object(j.a)().userInfo,i=n.username,d=n.docId,f=n.userId,p=Object(o.useState)(null),h=Object(a.a)(p,2),x=h[0],O=h[1],g=Object(o.useState)(t.followers.length),v=Object(a.a)(g,2),w=v[0],N=v[1],y=Object(o.useState)(null),k=Object(a.a)(y,2),I=k[0],F=k[1],C=Object(l.g)();Object(o.useEffect)((function(){t&&i&&function(){var e=Object(s.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.a)(i,t.userId);case 2:r=e.sent,O(!!r),N(t.followers.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t,i]);var S=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O((function(e){return!e})),N(x?function(e){return e-1}:function(e){return e+1}),e.next=4,Object(u.j)(d,f,t.docId,t.userId,x);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"pt-24 text-gray-light",children:[I&&Object(b.jsx)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&F(null)}(e)},className:"flex justify-center w-screen h-screen pt-20 bg-gray-primary bg-opacity-50 absolute top-0 left-0 z-90",children:Object(b.jsx)("div",{className:"",children:Object(b.jsx)(m,{following:t.following,followers:t.followers,followingOrFollowers:I,setFollowingOrFollowers:F})})}),Object(b.jsxs)("div",{className:"flex items-center ",children:[Object(b.jsx)("div",{className:"pr-4",children:Object(b.jsx)("img",{src:t.photo,alt:"".concat(t.username," profile photo"),className:"w-36 h-36 rounded-full object-cover"})}),Object(b.jsxs)("div",{className:"w-1/2",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"text-lg font-bold",children:t.fullName}),Object(b.jsxs)("p",{children:[Object(b.jsx)("span",{className:"text-sm",children:"ID: "}),t.username]})]}),Object(b.jsx)("div",{className:"ml-10",children:t.username===i?Object(b.jsx)("button",{className:"text-xs bg-gray-dark text-gray-light p-2 rounded",onClick:function(){return C.push("/edit/".concat(i))},children:"Edit Profile"}):null})]}),Object(b.jsxs)("p",{className:"",children:[Object(b.jsx)("span",{className:"text-sm",children:"Category: "}),t.category]}),Object(b.jsxs)("div",{className:"flex mt-4",children:[Object(b.jsxs)("p",{children:[r," ",Object(b.jsx)("span",{className:"text-sm",children:1===r?"post":"posts"})]}),Object(b.jsxs)("p",{className:"px-4 cursor-pointer",onClick:function(){return F(t.followers.length>0&&"followers")},children:[w," ",Object(b.jsx)("span",{className:"text-sm",children:1===t.followers.length?"follower":"followers"})]}),Object(b.jsxs)("p",{className:"cursor-pointer",onClick:function(){return F(t.following.length>0&&"following")},children:[t.following.length," ",Object(b.jsx)("span",{className:"text-sm",children:"following"})]})]})]}),Object(b.jsx)("div",{children:t.username===i||null===x?null:Object(b.jsx)("button",{onClick:S,className:"rounded text-gray-light bg-red-primary text-sm py-2 px-6 ".concat(x?"bg-red-primary":"bg-blue-primary"),children:x?"Unfollow":"Follow"})})]}),Object(b.jsxs)("div",{className:"pt-2 max-w-2xl",children:[Object(b.jsx)("p",{className:"",children:t.title}),Object(b.jsx)("p",{className:"text-sm",children:"Bio:"}),Object(b.jsx)("p",{className:"break-words text-sm",children:t.bio})]})]})}var O=r(75),g=r(76),v=r(79);function w(e){var t=e.photo,r=e.profileUsername,n=Object(o.useState)(null),l=Object(a.a)(n,2),i=l[0],d=l[1],f=Object(j.a)().userInfo.userId;return Object(o.useEffect)((function(){f&&t&&function(){var e=Object(s.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.e)(t.photoId,f,r);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[f,t]),console.log("photo",t),console.log("photoWithDetails",i),(null===i||void 0===i?void 0:i.username)?Object(b.jsxs)("div",{className:"bg-gray-light py-8 px-16 mb-8",children:[Object(b.jsx)(O.a,{userId:i.userId,username:i.username,caption:i.caption,date:i.dateCreated}),Object(b.jsx)(g.a,{imageSrc:i.imageSrc}),Object(b.jsx)(v.a,{likes:i.likes,userLikedPhoto:i.userLikedPhoto,comments:i.comments,docId:i.docId})]}):Object(b.jsx)(p.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)(h.a,{count:1,width:600,height:600})})}function N(e){var t=e.photo,r=e.profileUserInfo,n=Object(o.useState)(!1),c=Object(a.a)(n,2),s=c[0],l=c[1],i=function(){l((function(e){return!e}))};return t?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:t.imageSrc,alt:t.caption,className:"object-cover cursor-pointer",style:{width:"100%",aspectRatio:"1"},onClick:i}),s&&Object(b.jsx)("div",{onClick:function(e){!function(e){e.target===e.currentTarget&&i()}(e)},className:"flex justify-center w-screen pt-20 bg-gray-primary bg-opacity-50 absolute top-0 left-0 z-90 h-screen",children:Object(b.jsx)("div",{className:"w-full max-w-screen-sm pb-8",children:Object(b.jsx)(w,{photo:t,profileUsername:r.username})})})]}):null}function y(e){var t=e.profileUserInfo,r=e.photos;return Object(b.jsx)("div",{className:"border-t-2 border-gray-dark my-8 pt-8",children:Object(b.jsx)("div",{className:"grid grid-cols-3 gap-8 items-center",children:r.map((function(e,r){return Object(b.jsx)(N,{photo:e,profileUserInfo:t},r)}))})})}function k(e){var t=e.profileUserInfo,r=Object(o.useState)(null),n=Object(a.a)(r,2),l=n[0],i=n[1],j=Object(o.useState)(0),d=Object(a.a)(j,2),f=d[0],p=d[1];return Object(o.useEffect)((function(){var e=function(){var e=Object(s.a)(c.a.mark((function e(){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.f)(t.userId);case 2:r=e.sent,i(r.sort((function(e,t){return t.dateCreated-e.dateCreated}))),p(r.length);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(null===t||void 0===t?void 0:t.userId)&&e()}),[null===t||void 0===t?void 0:t.userId]),Object(b.jsxs)("div",{className:"max-w-screen-lg container mx-auto px-4",children:[Object(b.jsx)(x,{profileUserInfo:t,photos:l,photoCounts:f}),l?l.length>0?Object(b.jsx)(y,{profileUserInfo:t,photos:l}):Object(b.jsx)("div",{className:"mt-8 border-t-2 border-gray-dark",children:Object(b.jsx)("p",{className:"text-gray-light text-center pt-8",children:"No Posts"})}):null]})}var I=r(11);function F(){var e=Object(l.h)().username,t=Object(o.useState)(null),r=Object(a.a)(t,2),n=r[0],j=r[1],d=Object(l.g)();return Object(o.useEffect)((function(){e&&function(){var t=Object(s.a)(c.a.mark((function t(){var r,n,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.i)(e);case 2:r=t.sent,n=Object(a.a)(r,1),s=n[0],j(s),s||d.push(I.d);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[e]),(null===n||void 0===n?void 0:n.username)?Object(b.jsxs)("div",{children:[Object(b.jsx)(i.a,{}),Object(b.jsx)(k,{profileUserInfo:n})]}):Object(b.jsx)(p.SkeletonTheme,{color:"#494848",highlightColor:"#F1F1F1",children:Object(b.jsx)("div",{className:"max-w-screen-lg h-screen mx-auto",children:Object(b.jsx)(h.a,{count:1,height:200,className:"mt-20 mx-4"})})})}}}]);
//# sourceMappingURL=15.cea76a17.chunk.js.map