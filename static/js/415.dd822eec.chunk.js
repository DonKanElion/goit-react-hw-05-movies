"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{3041:function(t,n,r){r.d(n,{Z:function(){return f}});var e,a=r(168),u=r(6444),c=r(1087),i=r(7689),o=r(184),s=u.ZP.li(e||(e=(0,a.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n"]))),p=function(t){var n=t.props,r=n.id,e=n.original_title,a=(0,i.TH)();return(0,o.jsx)(s,{children:(0,o.jsx)(c.rU,{to:"/movies/:".concat(r),state:{from:a},children:e})})},f=function(t){var n=t.movies;return(0,o.jsx)("ul",{children:n.map((function(t){var n=t.id;return(0,o.jsx)(p,{props:t},n)}))})}},5415:function(t,n,r){r.r(n);var e=r(3433),a=r(9439),u=r(2791),c=r(5264),i=r(273),o=r(3041),s=r(966),p=r(184);n.default=function(){var t=(0,u.useState)([]),n=(0,a.Z)(t,2),r=n[0],f=n[1],h=(0,u.useState)(!1),v=(0,a.Z)(h,2),l=v[0],d=v[1];(0,u.useEffect)((function(){d(!0),(0,i.XT)().then((function(t){var n=t.results;return 0===n?y("\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430"):f((0,e.Z)(n))})).catch((function(t){return m(t),console.log(t)})).finally((function(){d(!1)}))}),[]);var y=function(t){c.Notify.warning("".concat(t))},m=function(){c.Notify.error("Oops, something went wrong, please try again.")};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("h3",{children:"Trending today:"}),l?(0,p.jsx)(s.Z,{}):(0,p.jsx)(o.Z,{movies:r})]})}},273:function(t,n,r){r.d(n,{XT:function(){return o},YJ:function(){return h},q:function(){return p},q5:function(){return l},yo:function(){return y}});var e=r(5861),a=r(7757),u=r.n(a),c=r(1243),i="a0869b2b27b58a659702b4629a364211";function o(){return s.apply(this,arguments)}function s(){return(s=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,e=r.data,t.abrupt("return",e.cast);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=415.dd822eec.chunk.js.map