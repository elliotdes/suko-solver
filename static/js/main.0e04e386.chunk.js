(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(4),o=t.n(r),l=(t(14),t(2)),u=t(1);t(15);function i(e){var n=e.value,t=e.color,a=e.row,r=e.col,o=e.onChange,l=e.onClick;return c.a.createElement("td",{onClick:function(){l(a,r)}},c.a.createElement("input",{className:"square",type:"number",value:n,onChange:function(e){var n=e.target.value;o(a,r,n)},style:{backgroundColor:t}}))}var s=function(e){return c.a.createElement("table",{className:"grid"},c.a.createElement("tbody",null,e.grid.map(function(n,t){return c.a.createElement("tr",{key:t},n.map(function(n,a){return c.a.createElement(i,{key:a,value:e.grid[t][a],color:e.colors[t][a],row:t,col:a,onChange:e.onChange,onClick:e.onClick})}))})))},F=function(e){var n=e.color,t=e.initialValue,r=e.onChange,o=e.onClick,l=Object(a.useState)(t),i=Object(u.a)(l,2),s=i[0],F=i[1];return c.a.createElement("input",{className:"sum",type:"number",value:s,onChange:function(e){var t=e.target.value;F(t),r(n,t)},onClick:function(){o(n)},style:{backgroundColor:n}})},f=function(e){return c.a.createElement("input",{className:e.className,type:"number",value:e.quads[e.coords[1]][e.coords[0]],onChange:function(n){return function(n){e.onChange(e.coords[1],e.coords[0],n.target.value)}(n)}})};function m(e,n,t,a){return!!(function(e){for(var n=e.flat(),t=new Set,a=0;a<n.length;a++){if(n[a]<1||n[a]>9)return!1;if(t.has(n[a]))return!1;t.add(n[a])}return!0}(e)&&function(e,n,t){for(var a=0,c=0,r=0,o=0;o<e.length;o++)for(var l=0;l<e[o].length;l++)"#FFA07A"===n[o][l]?a+=e[o][l]:"#87CEFA"===n[o][l]?c+=e[o][l]:"#7FFFAA"===n[o][l]&&(r+=e[o][l]);return a===t["#FFA07A"]&&c===t["#87CEFA"]&&r===t["#7FFFAA"]}(e,n,a)&&function(e,n){for(var t=[e[0][0]+e[0][1]+e[1][0]+e[1][1],e[0][1]+e[0][2]+e[1][1]+e[1][2],e[1][0]+e[1][1]+e[2][0]+e[2][1],e[1][1]+e[1][2]+e[2][1]+e[2][2]],a=n.flat(),c=0;c<a.length;c++)if(t[c]!==a[c])return!1;return!0}(e,t))}var C=function(){var e=Object(a.useState)([[0,0,0],[0,0,0],[0,0,0]]),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([[17,15],[21,21]]),i=Object(u.a)(o,2),C=i[0],A=i[1],g=Object(a.useState)([["#FFA07A","#87CEFA","#87CEFA"],["#FFA07A","#87CEFA","#7FFFAA"],["#7FFFAA","#7FFFAA","#7FFFAA"]]),d=Object(u.a)(g,2),v=d[0],E=d[1],h=Object(a.useState)(24),b=Object(u.a)(h,2),k=b[0],p=b[1],j=Object(a.useState)(12),O=Object(u.a)(j,2),N=O[0],S=O[1],w=Object(a.useState)(9),y=Object(u.a)(w,2),q=y[0],T=y[1],V=Object(a.useState)(null),I=Object(u.a)(V,2),B=I[0],J=I[1],L={"#FFA07A":q,"#87CEFA":N,"#7FFFAA":k},P=function(e,n,t){var a=Object(l.a)(C);a[e][n]=t,A(a)},R=function(e,n){"#FFA07A"===e?T(n):"#87CEFA"===e?S(n):"#7FFFAA"===e&&p(n)},x=function(e){J(e)};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"Suko Solver")),c.a.createElement("div",{className:"grid-container"},c.a.createElement(s,{grid:t,colors:v,onChange:function(e,n,a){var c=Object(l.a)(t);c[e][n]=""===a?"":parseInt(a),r(c)},onClick:function(e,n){if(B){var t=Object(l.a)(v);t[e][n]=B,E(t),J(null)}}}),c.a.createElement(f,{className:"nw",onChange:P,quads:C,coords:[0,0]}),c.a.createElement(f,{className:"ne",onChange:P,quads:C,coords:[1,0]}),c.a.createElement(f,{className:"se",onChange:P,quads:C,coords:[0,1]}),c.a.createElement(f,{className:"sw",onChange:P,quads:C,coords:[1,1]})),c.a.createElement("div",{className:"sum-container"},c.a.createElement(F,{color:"#7FFFAA",initialValue:k,onChange:R,onClick:x}),c.a.createElement(F,{color:"#87CEFA",initialValue:N,onChange:R,onClick:x}),c.a.createElement(F,{color:"#FFA07A",initialValue:q,onChange:R,onClick:x})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){m(t,v,C,L)?alert("That is correct!"):alert("That is incorrect.")}},"Check"),c.a.createElement("button",{onClick:function(){var e=function(e,n,t){for(var a,c=function(e){var n=[];return function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(0===t.length)n.push(a);else for(var c=0;c<t.length;c++){var r=t.slice(),o=r.splice(c,1);e(r.slice(),a.concat(o))}}(e),n}([1,2,3,4,5,6,7,8,9]),r=0;r<c.length;r++){var o=[(a=c[r]).slice(0,3),a.slice(3,6),a.slice(6)];if(m(o,e,n,t))return o}return!1}(v,C,L);e?r(e):alert("No solution found!")}},"Solve"),c.a.createElement("button",{onClick:function(){r([[0,0,0],[0,0,0],[0,0,0]])}},"Reset")))},A=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then(function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),a(e),c(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null))),A()},5:function(e,n,t){e.exports=t(16)}},[[5,1,2]]]);
//# sourceMappingURL=main.0e04e386.chunk.js.map