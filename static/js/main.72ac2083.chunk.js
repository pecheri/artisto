(this.webpackJsonpartisto=this.webpackJsonpartisto||[]).push([[4],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return a})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return s})),n.d(t,"j",(function(){return b})),n.d(t,"d",(function(){return j}));var r="/",c="/login",a="/sign-up",u="/p/:username",o="/edit/:username",i="/search",l="/messages",s="/upload",b="/welcome",j="/not-found"},20:function(e,t,n){"use strict";var r=n(3),c=Object(r.createContext)(null);t.a=c},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(29),c=(n(52),n(53),r.a.initializeApp({apiKey:"AIzaSyDYOC4vSoKt8A2qLzIqw1A_BYTrqLAbFLk",authDomain:"artisto-rki.firebaseapp.com",projectId:"artisto-rki",storageBucket:"artisto-rki.appspot.com",messagingSenderId:"960656414320",appId:"1:960656414320:web:76f34788ac2ca4954d46b5"})),a=r.a.firestore.FieldValue},31:function(e,t,n){"use strict";var r=n(3),c=Object(r.createContext)(null);t.a=c},43:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(37),a=n.n(c),u=(n(43),n(19)),o=n(8),i=n(11),l=n(31),s=n(30),b=n(20);var j=n(17),d=n(22),h=n(4);function f(e){var t=e.user,n=e.children,r=Object(d.a)(e,["user","children"]);return Object(h.jsx)(o.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){var r=e.location;return t?n:t?null:Object(h.jsx)(o.a,{to:{pathname:i.b,state:{from:r}}})}}))}function O(e){var t=e.user,n=e.loggedInPath,r=e.children,c=Object(d.a)(e,["user","loggedInPath","children"]);return console.log("rest",c),Object(h.jsx)(o.b,Object(j.a)(Object(j.a)({},c),{},{render:function(e){var c=e.location;return t?t?Object(h.jsx)(o.a,{to:{pathname:n,state:{from:c}}}):null:r}}))}var p=Object(r.lazy)((function(){return n.e(9).then(n.bind(null,102))})),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,103))})),x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(14)]).then(n.bind(null,112))})),g=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(2),n.e(15)]).then(n.bind(null,110))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,104))})),y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,111))})),P=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,105))})),z=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,106))})),I=Object(r.lazy)((function(){return n.e(16).then(n.bind(null,107))})),S=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,108))}));var k=function(){var e=function(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("authUser"))),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(r.useContext)(b.a).firebase;return Object(r.useEffect)((function(){var e=a.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),c(e)):(localStorage.removeItem("authUser"),c(null))}));return function(){return e()}}),[a]),{user:n}}().user;return Object(h.jsx)(l.a.Provider,{value:{user:e},children:Object(h.jsx)(u.a,{children:Object(h.jsx)(r.Suspense,{fallback:Object(h.jsx)("p",{className:"text-gray-light text-center w-screen text-xl",children:"Loading..."}),children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(O,{user:e,loggedInPath:i.a,path:i.b,children:Object(h.jsx)(o.b,{path:i.b,component:p})}),Object(h.jsx)(O,{user:e,loggedInPath:i.a,path:i.h,children:Object(h.jsx)(o.b,{path:i.h,component:m})}),Object(h.jsx)(f,{user:e,path:i.a,exact:!0,children:Object(h.jsx)(x,{})}),Object(h.jsx)(o.b,{path:i.e,component:g}),Object(h.jsx)(o.b,{path:i.f,component:v}),Object(h.jsx)(o.b,{path:i.g,component:y}),Object(h.jsx)(o.b,{path:i.c,component:P}),Object(h.jsx)(o.b,{path:i.i,component:z}),Object(h.jsx)(o.b,{path:i.j,component:I}),Object(h.jsx)(o.b,{component:S})]})})})})},w=n(23);a.a.render(Object(h.jsx)(b.a.Provider,{value:{firebase:w.b,FieldValue:w.a},children:Object(h.jsx)(k,{})}),document.getElementById("root"))}},[[54,5,6]]]);
//# sourceMappingURL=main.72ac2083.chunk.js.map