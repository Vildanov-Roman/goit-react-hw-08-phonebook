"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[823],{1823:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(885),r=n(2791),o=n(5984),i=n(8174),s=n(6052),l=n(9434),c=n(9059),u={};!function e(t,n,a,r){var o=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL);function i(){}function s(e){var a=n.exports.Promise,r=void 0!==a?a:t.Promise;return"function"===typeof r?new r(e):(e(i,i),null)}var l,c=function(){var e,t,n=Math.floor(1e3/60),a={},r=0;return"function"===typeof requestAnimationFrame&&"function"===typeof cancelAnimationFrame?(e=function(e){var t=Math.random();return a[t]=requestAnimationFrame((function o(i){r===i||r+n-1<i?(r=i,delete a[t],e()):a[t]=requestAnimationFrame(o)})),t},t=function(e){a[e]&&cancelAnimationFrame(a[e])}):(e=function(e){return setTimeout(e,n)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),u=function(){var t,n,r={};return function(){if(t)return t;if(!a&&o){var i=["var CONFETTI, SIZE = {}, module = {};","("+e.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join("\n");try{t=new Worker(URL.createObjectURL(new Blob([i])))}catch(l){return void 0!==typeof console&&"function"===typeof console.warn&&console.warn("\ud83c\udf8a Could not load worker",l),null}!function(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(a,o,i){if(n)return t(a,null),n;var l=Math.random().toString(36).slice(2);return n=s((function(o){function s(t){t.data.callback===l&&(delete r[l],e.removeEventListener("message",s),n=null,i(),o())}e.addEventListener("message",s),t(a,l),r[l]=s.bind(null,{data:{callback:l}})}))},e.reset=function(){for(var t in e.postMessage({reset:!0}),r)r[t](),delete r[t]}}(t)}return t}}(),d={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function h(e,t,n){return function(e,t){return t?t(e):e}(e&&(null!==(a=e[t])&&void 0!==a)?e[t]:d[t],n);var a}function f(e){return e<0?0:Math.floor(e)}function m(e){return parseInt(e,16)}function b(e){return e.map(p)}function p(e){var t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:m(t.substring(0,2)),g:m(t.substring(2,4)),b:m(t.substring(4,6))}}function g(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function v(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function y(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:10*Math.random(),wobbleSpeed:Math.min(.11,.1*Math.random()+.05),velocity:.5*e.startVelocity+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(.5*Math.random()+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:3*e.gravity,ovalScalar:.6,scalar:e.scalar}}function x(e,t,n,o,i){var l,u,d=t.slice(),h=e.getContext("2d"),f=s((function(t){function s(){l=u=null,h.clearRect(0,0,o.width,o.height),i(),t()}l=c.frame((function t(){!a||o.width===r.width&&o.height===r.height||(o.width=e.width=r.width,o.height=e.height=r.height),o.width||o.height||(n(e),o.width=e.width,o.height=e.height),h.clearRect(0,0,o.width,o.height),d=d.filter((function(e){return function(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.wobble+=t.wobbleSpeed,t.velocity*=t.decay,t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble);var n=t.tick++/t.totalTicks,a=t.x+t.random*t.tiltCos,r=t.y+t.random*t.tiltSin,o=t.wobbleX+t.random*t.tiltCos,i=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-n)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(o-a)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):function(e,t,n,a,r,o,i,s,l){e.save(),e.translate(t,n),e.rotate(o),e.scale(a,r),e.arc(0,0,1,i,s,l),e.restore()}(e,t.x,t.y,Math.abs(o-a)*t.ovalScalar,Math.abs(i-r)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if("star"===t.shape)for(var s=Math.PI/2*3,l=4*t.scalar,c=8*t.scalar,u=t.x,d=t.y,h=5,f=Math.PI/h;h--;)u=t.x+Math.cos(s)*c,d=t.y+Math.sin(s)*c,e.lineTo(u,d),s+=f,u=t.x+Math.cos(s)*l,d=t.y+Math.sin(s)*l,e.lineTo(u,d),s+=f;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(r)),e.lineTo(Math.floor(o),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}(h,e)})),d.length?l=c.frame(t):s()})),u=s}));return{addFettis:function(e){return d=d.concat(e),f},canvas:e,promise:f,reset:function(){l&&c.cancel(l),u&&u()}}}function w(e,n){var a,r=!e,i=!!h(n||{},"resize"),l=h(n,"disableForReducedMotion",Boolean),c=o&&!!h(n||{},"useWorker")?u():null,d=r?g:v,m=!(!e||!c)&&!!e.__confetti_initialized,p="function"===typeof matchMedia&&matchMedia("(prefers-reduced-motion)").matches;function w(t,n,r){for(var o,i,s=h(t,"particleCount",f),l=h(t,"angle",Number),c=h(t,"spread",Number),u=h(t,"startVelocity",Number),m=h(t,"decay",Number),p=h(t,"gravity",Number),g=h(t,"drift",Number),v=h(t,"colors",b),w=h(t,"ticks",Number),_=h(t,"shapes"),M=h(t,"scalar"),C=function(e){var t=h(e,"origin",Object);return t.x=h(t,"x",Number),t.y=h(t,"y",Number),t}(t),N=s,k=[],I=e.width*C.x,j=e.height*C.y;N--;)k.push(y({x:I,y:j,angle:l,spread:c,startVelocity:u,color:v[N%v.length],shape:_[(o=0,i=_.length,Math.floor(Math.random()*(i-o))+o)],ticks:w,decay:m,gravity:p,drift:g,scalar:M}));return a?a.addFettis(k):(a=x(e,k,d,n,r)).promise}function _(n){var o=l||h(n,"disableForReducedMotion",Boolean),u=h(n,"zIndex",Number);if(o&&p)return s((function(e){e()}));r&&a?e=a.canvas:r&&!e&&(e=function(e){var t=document.createElement("canvas");return t.style.position="fixed",t.style.top="0px",t.style.left="0px",t.style.pointerEvents="none",t.style.zIndex=e,t}(u),document.body.appendChild(e)),i&&!m&&d(e);var f={width:e.width,height:e.height};function b(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};return d(t),void c.postMessage({resize:{width:t.width,height:t.height}})}f.width=f.height=null}function g(){a=null,i&&t.removeEventListener("resize",b),r&&e&&(document.body.removeChild(e),e=null,m=!1)}return c&&!m&&c.init(e),m=!0,c&&(e.__confetti_initialized=!0),i&&t.addEventListener("resize",b,!1),c?c.fire(n,f,g):w(n,f,g)}return _.reset=function(){c&&c.reset(),a&&a.reset()},_}function _(){return l||(l=w(null,{useWorker:!0,resize:!0})),l}n.exports=function(){return _().apply(this,arguments)},n.exports.reset=function(){_().reset()},n.exports.create=w}(function(){return"undefined"!==typeof window?window:"undefined"!==typeof self?self:this||{}}(),u,!1);var d=u.exports,h=(u.exports.create,n(3329)),f=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],f=(0,r.useState)(""),m=(0,a.Z)(f,2),b=m[0],p=m[1],g=(0,l.v9)((function(e){return e.contacts.contacts})),v=(0,l.I0)(),y=(0,r.useCallback)((function(){d({particleCount:200,spread:200})}),[]),x=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"contactName":u(a);break;case"contactNumber":p(a);break;default:return}},w=(0,o.x0)(),_=(0,o.x0)();return(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),null!==g&&void 0!==g&&g.find((function(e){return e.name.toLocaleLowerCase()===n.toLocaleLowerCase()})))return i.Am.error("".concat(n," is already in Phonebook"));v((0,s.uK)({name:n,number:b})),u(""),p("")},className:c.Z.form,children:[(0,h.jsx)("label",{className:c.Z.label,htmlFor:w,children:"Name"}),(0,h.jsx)("input",{id:w,type:"text",name:"contactName",value:n,onChange:x,pattern:"^[a-zA-Za-\u044f\u0410-\u042f]+(([' -][a-zA-Za-\u044f\u0410-\u042f ])?[a-zA-Za-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Input name",className:c.Z.input}),(0,h.jsx)("label",{className:c.Z.label,htmlFor:_,children:"Number"}),(0,h.jsx)("input",{id:_,type:"tel",name:"contactNumber",value:b,onChange:x,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Input number",className:c.Z.input}),(0,h.jsx)("button",{type:"submit",className:c.Z.btn,onClick:y,children:"Add contact"})]})},m="ContactItem_contactItem__Pnk5T",b="ContactItem_contactText__Unqs0",p="ContactItem_btn__pJk3d",g=function(e){var t=e.data,n=(0,l.I0)(),a=t.id,r=t.name,o=t.number;return(0,h.jsxs)("li",{className:m,children:[(0,h.jsxs)("p",{className:b,children:[r,": ",o]}),(0,h.jsx)("button",{type:"button",className:p,id:a,onClick:function(e){return function(e,t){t===e.target.id&&(e.target.textContent="Deleting...",e.target.setAttribute("disabled","true")),n((0,s.GK)(t))}(e,a)},children:"Delete"})]})},v="ContactList_list__lyie7",y=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.contacts.contacts})),n=(0,l.v9)((function(e){return e.filter.data}));(0,r.useEffect)((function(){e((0,s.yF)())}),[e]);var a=n?t.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())})):t;return(0,h.jsx)("ul",{className:v,children:null===a||void 0===a?void 0:a.map((function(e){return(0,h.jsx)(g,{data:e},e.id)}))})},x="Filter_filter__ESc4Y",w="Filter_label__hOULN",_="Filter_input__8EywS",M=n(1634),C=function(){var e=(0,l.I0)(),t=(0,l.v9)((function(e){return e.filter.data})),n=(0,o.x0)();return(0,h.jsxs)("div",{className:x,children:[(0,h.jsx)("label",{htmlFor:n,className:w,children:"Find contacts by name"}),(0,h.jsx)("input",{id:n,type:"text",name:"filter",value:t,onChange:function(t){e((0,M.q)(t.target.value))},className:_,placeholder:"Choise name"})]})},N={text:"Phonebook_text__Y2xzx",letter:"Phonebook_letter__V+f6j",source:"Phonebook_source__j4wl8",overlay:"Phonebook_overlay__+IOL-",shadow:"Phonebook_shadow__rCNpp"},k=function(e){var t=e.value;return(0,h.jsx)("div",{className:N.text,children:t.split("").map((function(e,t){return(0,h.jsxs)("div",{className:N.letter,style:{"--delay":"".concat(.2*t,"s")},children:[(0,h.jsx)("span",{className:N.source,children:e}),(0,h.jsx)("span",{className:N.shadow,children:e}),(0,h.jsx)("span",{className:N.overlay,children:e})]})}))})},I=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:N.app,children:(0,h.jsx)(k,{value:"Phonebook"})}),(0,h.jsx)(f,{}),(0,h.jsx)("div",{className:N.app,children:(0,h.jsx)(k,{value:"Contacts"})}),(0,h.jsx)(C,{}),(0,h.jsx)(y,{})]})}},9059:function(e,t){t.Z={form:"RegisterForm_form__vTcyZ",label:"RegisterForm_label__iJORI",input:"RegisterForm_input__2qBY6",btn:"RegisterForm_btn__rCTjz"}},5984:function(e,t,n){n.d(t,{x0:function(){return a}});var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=823.1957bbda.chunk.js.map