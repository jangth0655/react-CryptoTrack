(this.webpackJsonppractice=this.webpackJsonppractice||[]).push([[0],{73:function(n,e,t){"use strict";t.r(e);var o=t(0),c=t.n(o),r=t(23),i=t.n(r),a=t(15),s=t(14),l=t(10),d=t(9),b=t(22),u=t(4),h=t(12),j=t.n(h),p=t(29),x="https://api.coinpaprika.com/v1";function m(){return f.apply(this,arguments)}function f(){return(f=Object(p.a)(j.a.mark((function n(){var e,t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(x,"/coins"));case 2:return n.next=4,n.sent.json();case 4:return e=n.sent,t=e.slice(0,51),n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function O(){return(O=Object(p.a)(j.a.mark((function n(e){var t,o,c,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=Math.floor(Date.now()/1e3),o=t-2419200,n.next=4,fetch("".concat(x,"/coins/").concat(e,"/ohlcv/historical?start=").concat(o,"&end=").concat(t));case 4:if((c=n.sent).ok){n.next=7;break}throw new Error("Network response was not ok");case 7:return r=c.json(),n.abrupt("return",r);case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var g=t(34),v=t.n(g),y=Object(s.b)({key:"dark",default:!1}),w=t(1);var k=function(n){var e=n.coinId,t=Object(s.c)(y),o=Object(a.useQuery)(["ohlcv",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-604800;return fetch("".concat(x,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)})),c=o.isLoading,r=o.data;return Object(w.jsx)("div",{children:c?"Loading Chart":Object(w.jsx)(v.a,{type:"line",series:[{name:"Price",data:null===r||void 0===r?void 0:r.map((function(n){return n.close}))}],options:{theme:{mode:t?"dark":"light"},chart:{background:"transparent",height:300,width:500,toolbar:{show:!1}},stroke:{curve:"smooth",width:5},grid:{show:!1},yaxis:{show:!1},xaxis:{type:"datetime",labels:{show:!1},categories:null===r||void 0===r?void 0:r.map((function(n){return n.time_close})),axisTicks:{show:!1},axisBorder:{show:!1}},fill:{type:"gradient",gradient:{gradientToColors:["#0be881"],stops:[0,100]}},colors:["#0fbcf9"],tooltip:{y:{formatter:function(n){return"$ ".concat(n.toFixed(3))}}}}})})};var C,L,I,q,z,S,Q,T,P,F,M,B,D,_,A,E,H,J,R,$=function(n){var e=n.coinId,t=Object(s.c)(y),o=Object(a.useQuery)(["price",e],(function(){return function(n){return O.apply(this,arguments)}(e)})),c=o.isLoading,r=o.data;return console.log(null===r||void 0===r?void 0:r.map((function(n){return n}))),Object(w.jsx)("div",{children:c?"Loading...":Object(w.jsx)(v.a,{type:"candlestick",series:[{data:null===r||void 0===r?void 0:r.map((function(n){return{x:n.time_close,y:[n.open,n.high,n.low,n.close].map((function(n){return n.toFixed(3)}))}}))}],options:{theme:{mode:t?"dark":"light"},chart:{background:"transparent",height:400,width:500,toolbar:{show:!1}},grid:{show:!0},yaxis:{show:!0},xaxis:{type:"datetime",labels:{show:!1},axisTicks:{show:!1},axisBorder:{show:!1}},tooltip:{enabled:!0}}})})},G=t(35),N=d.c.div(C||(C=Object(l.a)(["\n  position: relative;\n  max-width: 30em;\n  margin: auto;\n  padding: 0.8em;\n"]))),U=d.c.header(L||(L=Object(l.a)(["\n  height: 10vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 0.5em;\n"]))),K=d.c.h1(I||(I=Object(l.a)(["\n  font-size: 2rem;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),V=d.c.span(q||(q=Object(l.a)(["\n  font-size: 1.25rem;\n"]))),W=d.c.div(z||(z=Object(l.a)(["\n  -webkit-box-shadow: 0px 7px 15px 0px #000000;\n  box-shadow: 0px 7px 15px 0px #000000;\n  display: flex;\n  justify-content: space-between;\n  background-color: ",";\n  padding: 0.6em 1.25px;\n  border-radius: 10px;\n"])),(function(n){return n.theme.bgColor})),X=d.c.div(S||(S=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  span:first-child {\n    font-size: 0.5rem;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin-bottom: 0.3em;\n  }\n"]))),Y=d.c.p(Q||(Q=Object(l.a)(["\n  margin: 1.25em 0px;\n"]))),Z=d.c.div(T||(T=Object(l.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  margin: 1.5rem 0px;\n  gap: 0.6rem;\n  height: 1em;\n  line-height: 1em;\n"]))),nn=d.c.p(P||(P=Object(l.a)(["\n  -webkit-box-shadow: 0px 7px 15px 0px #000000;\n  box-shadow: 0px 7px 15px 0px #000000;\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 0.7rem;\n  font-weight: 400;\n  background-color: ",";\n  border-radius: 10px;\n  color: ",";\n  a {\n    display: block;\n    height: 100%;\n  }\n  &:active {\n    transform: scale(0.8);\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.textColor})),en=d.c.div(F||(F=Object(l.a)(["\n  width: 100%;\n  height: 1.8em;\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 0.5em;\n  transition: all 0.2s ease-in;\n  & button:hover {\n    color: whitesmoke;\n    background-color: ",";\n  }\n  a {\n    display: block;\n    width: 5em;\n    height: 1.8em;\n    button {\n      font-size: 0.5rem;\n      border-radius: 15px;\n      background-color: ",";\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor})),tn=function(){var n=Object(u.e)().state,e=Object(u.h)().coinId,t=Object(u.f)("/:coinId/price"),o=Object(u.f)("/:coinId/chart"),c=Object(a.useQuery)(["info",e],(function(){return function(n){return fetch("".concat(x,"/coins/").concat(n)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),r=c.isLoading,i=c.data,s=Object(a.useQuery)(["tickers",e],(function(){return function(n){return fetch("".concat(x,"/tickers/").concat(n)).then((function(n){return n.json()}))}(e)})),l=s.isLoading,d=s.data,h=r||l;return Object(w.jsxs)(N,{children:[Object(w.jsx)(G.a,{children:Object(w.jsx)("title",{children:(null===n||void 0===n?void 0:n.name)?n.name:h?"loading...":null===i||void 0===i?void 0:i.name})}),Object(w.jsx)(U,{children:Object(w.jsx)(K,{children:(null===n||void 0===n?void 0:n.name)?n.name:h?"loading...":null===i||void 0===i?void 0:i.name})}),Object(w.jsx)(en,{children:Object(w.jsx)(b.b,{to:"/react-CryptoTrack/",children:Object(w.jsx)("button",{children:"Go Home"})})}),h?Object(w.jsx)(V,{children:"Loading..."}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(W,{children:[Object(w.jsxs)(X,{children:[Object(w.jsx)("span",{children:"Rank:"}),Object(w.jsx)("span",{children:null===i||void 0===i?void 0:i.rank})]}),Object(w.jsxs)(X,{children:[Object(w.jsx)("span",{children:"Symbol:"}),Object(w.jsxs)("span",{children:["$",null===i||void 0===i?void 0:i.symbol]})]}),Object(w.jsxs)(X,{children:[Object(w.jsx)("span",{children:"Price :"}),Object(w.jsx)("span",{children:null===d||void 0===d?void 0:d.quotes.USD.price.toFixed(3)})]})]}),Object(w.jsx)(Y,{children:null===i||void 0===i?void 0:i.description}),Object(w.jsxs)(W,{children:[Object(w.jsxs)(X,{children:[Object(w.jsx)("span",{children:"Total Supply:"}),Object(w.jsx)("span",{children:null===d||void 0===d?void 0:d.total_supply})]}),Object(w.jsxs)(X,{children:[Object(w.jsx)("span",{children:"Max Supply:"}),Object(w.jsx)("span",{children:null===d||void 0===d?void 0:d.max_supply})]})]}),Object(w.jsxs)(Z,{children:[Object(w.jsx)(nn,{isActive:null!==o,children:Object(w.jsx)(b.b,{to:"chart",children:"Chart"})}),Object(w.jsx)(nn,{isActive:null!==t,children:Object(w.jsx)(b.b,{to:"price",children:"Price"})})]}),Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"price",element:Object(w.jsx)($,{coinId:e})}),Object(w.jsx)(u.a,{path:"chart",element:Object(w.jsx)(k,{coinId:e})})]})]})]})},on=d.c.div(M||(M=Object(l.a)(["\n  position: relative;\n  max-width: 30em;\n  margin: auto;\n  padding: 0.8em;\n"]))),cn=d.c.header(B||(B=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),rn=d.c.ul(D||(D=Object(l.a)(["\n  padding: 0 1.25em;\n"]))),an=d.c.li(_||(_=Object(l.a)(["\n  -webkit-box-shadow: 0px 7px 15px 0px #000000;\n  box-shadow: 0px 7px 15px 0px #000000;\n  background-color: ",";\n  color: ",";\n  margin-bottom: 0.8em;\n  border-radius: 15px;\n  a {\n    display: flex;\n    align-items: center;\n    padding: 1.25em;\n    transition: color 0.2s ease-in;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.coinLi}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),sn=d.c.p(A||(A=Object(l.a)([""]))),ln=d.c.h1(E||(E=Object(l.a)(["\n  font-size: 3rem;\n  margin-bottom: 1rem;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),dn=d.c.span(H||(H=Object(l.a)(["\n  font-size: 1.25rem;\n"]))),bn=d.c.img(J||(J=Object(l.a)(["\n  width: 1.5em;\n  height: 1.5em;\n  margin-right: 0.5em;\n"]))),un=d.c.button(R||(R=Object(l.a)(["\n  position: absolute;\n  top: 1.5em;\n  right: 0.5em;\n  font-size: 0.5rem;\n  padding: 0.5em;\n  border-radius: 15px;\n  background-color: transparent;\n  color: ",";\n  transition: all 0.2s ease-in;\n  &:hover {\n    color: whitesmoke;\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor})),hn=function(){var n=Object(a.useQuery)("allCoins",m),e=n.isLoading,t=n.data,o=Object(s.d)(y);return Object(w.jsxs)(on,{children:[Object(w.jsx)(G.a,{children:Object(w.jsx)("title",{children:"Coins"})}),Object(w.jsx)(cn,{children:Object(w.jsx)(ln,{children:"Coins"})}),Object(w.jsx)(un,{onClick:function(){o((function(n){return!n}))},children:"ToggleBtn"}),e?Object(w.jsx)(dn,{children:"Loading..."}):Object(w.jsx)(rn,{children:null===t||void 0===t?void 0:t.map((function(n){return Object(w.jsx)(an,{children:Object(w.jsxs)(b.b,{to:"/".concat(n.id),state:{name:n.name},children:[Object(w.jsx)(bn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase()),alt:"logo"}),Object(w.jsxs)(sn,{children:[n.name," \u2192"]})]})},n.id)}))})]})};var jn,pn=function(){return Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.c,{children:[Object(w.jsx)(u.a,{path:"/react-CryptoTrack/",element:Object(w.jsx)(hn,{})}),Object(w.jsx)(u.a,{path:"/:coinId/*",element:Object(w.jsx)(tn,{})})]})})},xn=t(52),mn={bgColor:"#2f3640",coinLi:"#353b48",textColor:"#f5f6fa",accentColor:"#c23616"},fn={bgColor:"whitesmoke",coinLi:"#f5f6fa",textColor:"#black",accentColor:"#c23616"},On=Object(d.b)(jn||(jn=Object(l.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;400;600;700&display=swap');\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\n\n* { \n  box-sizing: border-box;\n}\n\nbody {\n\tline-height: 1;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color: ",";\n}\n\na { \n  text-decoration: none;\n  color: inherit;\n}\n\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var gn=function(){var n=Object(s.c)(y);return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(d.a,{theme:n?mn:fn,children:[Object(w.jsx)(On,{}),Object(w.jsx)(pn,{}),Object(w.jsx)(xn.ReactQueryDevtools,{initialIsOpen:!0})]})})},vn=new a.QueryClient;i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(a.QueryClientProvider,{client:vn,children:Object(w.jsx)(s.a,{children:Object(w.jsx)(gn,{})})})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.6c916419.chunk.js.map