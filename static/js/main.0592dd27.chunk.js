(this["webpackJsonpsnake-react"]=this["webpackJsonpsnake-react"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(10),a=n.n(c),i=(n(29),n(8)),u=(n(30),n(21)),s=n(11),l=n(15),f=n(22),d=function(){function e(){Object(s.a)(this,e),this.bg=void 0,this.bg=new f.Howl({src:["./sound/bg-sound.mp3"],loop:!0,volume:.1})}return Object(l.a)(e,[{key:"stopBg",value:function(){this.bg&&this.bg.stop()}},{key:"muteBg",value:function(){this.bg.volume(0)}},{key:"unMuteBg",value:function(){this.bg.volume(.5)}},{key:"startBg",value:function(){this.bg&&this.bg.play()}},{key:"playKey",value:function(e){this["foo".concat(e)].play()}}]),e}(),j=function(){function e(){Object(s.a)(this,e)}return Object(l.a)(e,null,[{key:"createRandomInt",value:function(e,t){return Math.floor(Math.random()*t+e)}},{key:"suffulArray",value:function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e}}]),e}(),b=(n(32),n(4)),O=function(e){var t=e.value,n=e.dir,r="cell ";return"snakePart"===t?r="".concat(r," snakePart ").concat(h(n)):t&&(r="".concat(r," ").concat(t)),Object(b.jsx)("td",{className:r})},h=function(e){switch(e){case k.DOWON:return"dir-down";case k.UP:return"dir-up";case k.LEFT:return"dir-left";case k.RIGHT:default:return"dir-right"}},m=function(e){for(var t=e.boardSize,n=e.foods,r=e.snake,o=new Array(t).fill(0,0,t-1),c=0;c<o.length;c++)o[c]=new Array(t).fill(0,0,t-1);n.forEach((function(e){o[e.row][e.colm]=e})),r.forEach((function(e){o[e.row][e.colm]=e}));var a=function(e,t){return e.map((function(e,n){return Object(b.jsx)(O,{value:e.value,dir:e.dir},"".concat(t," - ").concat(n))}))};return Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:o.map((function(e,t){return Object(b.jsx)("tr",{children:a(e,t)},t)}))})})},v=n(41),p=n(42),x=n(43),g=(n(34),[{questionText:"\u05dc\u05da \u05d0\u05dc \u05d4\u05e0\u05de\u05dc\u05d4 \u05e2\u05e6\u05dc ...",options:["\u05e8\u05d0\u05d4 \u05d0\u05ea \u05d3\u05e8\u05db\u05d9\u05d4 \u05d5\u05e9\u05d1 \u05d1\u05e6\u05dc","\u05d5\u05ea\u05d7\u05d6\u05d5\u05e8 \u05de\u05dc\u05d0 \u05de\u05e8\u05e5","\u05e8\u05d0\u05d4 \u05d0\u05ea \u05d3\u05e8\u05db\u05d9\u05d4 \u05d5\u05db\u05d7\u05dd"],answerIndex:0},{questionText:"\u05db\u05de\u05d4 \u05e8\u05d2\u05dc\u05d9\u05dd \u05d9\u05e9 \u05dc\u05e0\u05de\u05dc\u05d4",options:["\u05e9\u05ea\u05d9 \u05e8\u05d2\u05dc\u05d9\u05dd \u05d4\u05e9\u05d0\u05e8 \u05d9\u05d3\u05d9\u05d9\u05dd","\u05e9\u05de\u05d5\u05e0\u05d4 \u05e8\u05d2\u05dc\u05d9\u05dd \u05db\u05de\u05d5 \u05dc\u05e2\u05db\u05d1\u05d9\u05e9","\u05e9\u05d9\u05e9\u05d4 \u05e8\u05d2\u05dc\u05d9\u05dd "],answerIndex:2},{questionText:"\u05d4\u05d0\u05dd \u05e0\u05de\u05dc\u05d4 \u05de\u05e7\u05d9\u05de\u05d4 \u05e7\u05df \u05dc\u05d9\u05d3 \u05de\u05e7\u05d5\u05d3\u05d5\u05ea \u05de\u05d6\u05d5\u05df",options:["\u05db\u05df","\u05dc\u05d0","\u05d4\u05d9\u05d0 \u05dc\u05d0 \u05d0\u05d5\u05db\u05dc\u05ea"],answerIndex:0},{questionText:"\u05d4\u05d0\u05dd \u05d4\u05de\u05dc\u05db\u05d4 \u05d4\u05d9\u05d0 \u05d4\u05e0\u05de\u05dc\u05d4 \u05d4\u05d9\u05d7\u05d9\u05d3\u05d4 \u05d1\u05e7\u05df \u05e9\u05d9\u05db\u05d5\u05dc\u05d4 \u05dc\u05d4\u05ea\u05e8\u05d1\u05d5\u05ea",options:["\u05db\u05df ","\u05dc\u05d0"],answerIndex:1}]),w=function(e){var t=e.onClose,n=Object(r.useState)(j.suffulArray(g)[0]),o=Object(i.a)(n,1)[0],c=Object(r.useState)(-1),a=Object(i.a)(c,2),u=a[0],s=a[1];return Object(b.jsx)(v.a,{show:!0,dir:"rtl",className:"question-modal",onHide:function(){return t(0)},children:Object(b.jsxs)(p.a,{dir:"rtl",children:[Object(b.jsx)(v.a.Header,{closeButton:!0,children:Object(b.jsx)(v.a.Title,{children:"\u05e2\u05e0\u05d4 \u05e2\u05dc \u05d4\u05e9\u05d0\u05dc\u05d4 \u05e0\u05db\u05d5\u05df \u05d5\u05e7\u05d1\u05dc \u05e0\u05e7\u05d5\u05d3\u05d5\u05ea"})}),Object(b.jsxs)(v.a.Body,{children:[o.questionText,o.options.map((function(e,t){return Object(b.jsx)(p.a.Check,{type:"radio",dir:"rtl",name:"answerOptions",onChange:function(){return s(t)},id:"default-radio",label:e},t)}))]}),Object(b.jsx)(v.a.Footer,{children:Object(b.jsx)(x.a,{variant:"primary",onClick:function(){var e=0;u===o.answerIndex&&(e=50),t(e)},children:"\u05e9\u05dc\u05d7"})})]})})},k=function e(){Object(s.a)(this,e)};k.LEFT="left",k.RIGHT="right",k.DOWON="down",k.UP="UP";var y,T=17,I=function(e){var t=e.onGameEnd,n=new d,o=Object(r.useState)(),c=Object(i.a)(o,2),a=c[0],s=c[1],l=Object(r.useState)(0),f=Object(i.a)(l,2),O=f[0],h=f[1],v=Object(r.useState)([]),p=Object(i.a)(v,2),x=p[0],g=p[1],y=Object(r.useState)(k.RIGHT),I=Object(i.a)(y,2),S=I[0],G=I[1],M=Object(r.useState)([]),C=Object(i.a)(M,2),N=C[0],E=C[1],F=Object(r.useState)(!1),H=Object(i.a)(F,2),P=H[0],R=H[1];Object(r.useEffect)((function(){B()}),[]);var B=function(){n.startBg(),J(),L(),D(),Y()},L=function(){for(var e=0;e<8;e++)A();E(N)},D=function(){W(),document.onkeydown=function(e){return U(e)}},U=function(e){console.log("set dit",e),38===e.keyCode&&S!==k.DOWON?S=k.UP:40===e.keyCode&&S!==k.UP?S=k.DOWON:37===e.keyCode&&S!==k.RIGHT?S=k.LEFT:39===e.keyCode&&S!==k.LEFT&&(S=k.RIGHT),G(S),console.log("set dit",S)},q=function(){clearInterval(a)},W=function(){a=setInterval((function(){return Q()}),300),s(a)},A=function(){var e=z();e.value="food-".concat(j.createRandomInt(1,3)),N.push(e)},z=function e(){var t=Math.floor(Math.random()*Math.floor(16)),n=Math.floor(Math.random()*Math.floor(16));return x.some((function(e){return e.row===t&&e.colm===n}))||N.some((function(e){return e.row===t&&e.colm===n}))?e():{row:t,colm:n}},J=function(){var e={row:Math.floor(8.5),colm:Math.floor(8.5),dir:k.RIGHT,value:"snakePart"};x.push(e);for(var t=0;t<5;t++)e=K(e,S),x.push(e);g(x)},K=function(e,t){var n=Object.assign({},e);switch(t){case k.LEFT:n.colm=n.colm-1;break;case k.RIGHT:n.colm=n.colm+1;break;case k.DOWON:n.row=n.row+1;break;case k.UP:n.row=n.row-1}return n},Q=function(){Z()&&X()},V=function(){return x[x.length-1]},X=function(){n.stopBg(),q(),setTimeout((function(){return t()}),1e3)},Y=function(){G(S),E(N),g(x)},Z=function(){var e=!1,t=K(V(),S);if(!ne(t))return e=!0;var n=x.shift();if(x.push(t),$(),te())return e=!0;var r=N.findIndex((function(e){return ee(e,t)}));return-1!==r&&(x.unshift(n),console.log("eatedFood",r),h(O+=10),N.splice(r,1),A(),j.createRandomInt(0,6)>2&&(q(),R(!0))),g(Object(u.a)(x)),E(Object(u.a)(N)),e},$=function(){for(var e=0;e<x.length-1;e++){var t=_(x[e],x[e+1]);x[e].dir=t}x[x.length-1].dir=S},_=function(e,t){return e.colm>t.colm?k.LEFT:e.colm<t.colm?k.RIGHT:e.row<t.row?k.DOWON:e.row>t.row?k.UP:k.RIGHT},ee=function(e,t){return e.row===t.row&&e.colm===t.colm},te=function(){for(var e=V(),t=0;t<x.length-1;t++){var n=x[t];if(ee(e,n))return!0}return!1},ne=function(e){return console.log("check if game over",e),!(e.row>=T||e.row<0||e.colm>=16||e.colm<0)};return Object(b.jsx)("div",{className:"game-screen",children:Object(b.jsxs)("div",{className:"game-board",children:[Object(b.jsxs)("div",{className:"score",children:["\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea: ",O," "]}),Object(b.jsx)(m,{boardSize:T,snake:x,foods:N}),P?Object(b.jsx)(w,{onClose:function(e){h(O+=e),R(!1),W(),document.onkeydown=function(e){return U(e)}}}):null]})})},S=n(44),G=n.p+"static/media/closeup.8e44aa94.jpg",M=function(e){var t=e.onStart;return Object(b.jsx)("div",{className:"screen",children:Object(b.jsxs)(S.a,{style:{width:"38rem"},children:[Object(b.jsx)(S.a.Img,{variant:"top",src:G}),Object(b.jsxs)(S.a.Body,{children:[Object(b.jsx)(S.a.Title,{children:" \u05de\u05e9\u05d7\u05e7 \u05d4\u05e0\u05de\u05dc\u05d4"}),Object(b.jsx)(S.a.Text,{children:"\u05e9\u05d7\u05e7\u05d5 \u05d5\u05e2\u05e0\u05d5 \u05e2\u05dc \u05d4\u05e9\u05d0\u05dc\u05d5\u05ea "}),Object(b.jsx)(x.a,{variant:"primary",onClick:t,size:"lg",children:"\u05d4\u05ea\u05d7\u05dc \u05de\u05e9\u05d7\u05e7 \u05d7\u05d3\u05e9"})]})]})})};n(38);!function(e){e.OpenScreen="OpenScreen",e.Game="Game"}(y||(y={}));var C=function(){var e=Object(r.useState)(y.OpenScreen),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(b.jsx)("div",{className:"App",children:n===y.OpenScreen?Object(b.jsx)(M,{onStart:function(){return o(y.Game)}}):Object(b.jsx)(I,{onGameEnd:function(){return o(y.OpenScreen)}})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(C,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.0592dd27.chunk.js.map