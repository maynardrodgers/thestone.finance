(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[13],{1117:function(e,t,n){e.exports=n.p+"static/media/crypto_tomb_cash.c44f7ab6.svg"},1118:function(e,t,n){"use strict";function a(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n(25)),o=n(0),i=a(o),c=a(n(1119)),u=a(n(1120));function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var E=function(e,t){var n=t.decimal,a=t.decimals,r=t.duration,o=t.easingFn,i=t.end,c=t.formattingFn,l=t.prefix,s=t.separator,p=t.start,m=t.suffix,f=t.useEasing;return new u(e,p,i,a,r,{decimal:n,easingFn:o,formattingFn:c,separator:s,prefix:l,suffix:m,useEasing:f,useGrouping:!!s})},h=function(e){function t(){var e,n;l(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return p(b(n=g(this,(e=f(t)).call.apply(e,[this].concat(r)))),"createInstance",(function(){return"function"===typeof n.props.children&&c(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement||n.containerRef.current instanceof SVGTSpanElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),E(n.containerRef.current,n.props)})),p(b(n),"pauseResume",(function(){var e=b(n),t=e.reset,a=e.restart,r=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:a,update:r})})),p(b(n),"reset",(function(){var e=b(n),t=e.pauseResume,a=e.restart,r=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:a,update:r})})),p(b(n),"restart",(function(){n.reset(),n.start()})),p(b(n),"start",(function(){var e=b(n),t=e.pauseResume,a=e.reset,r=e.restart,o=e.update,i=n.props,c=i.delay,u=i.onEnd,l=i.onStart,s=function(){return n.instance.start((function(){return u({pauseResume:t,reset:a,start:r,update:o})}))};c>0?n.timeoutId=setTimeout(s,1e3*c):s(),l({pauseResume:t,reset:a,update:o})})),p(b(n),"update",(function(e){var t=b(n),a=t.pauseResume,r=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:a,reset:r,start:o})})),p(b(n),"containerRef",i.createRef()),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"===typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.redraw,c=t.duration,u=t.separator,l=t.decimals,s=t.decimal;return c!==e.duration||n!==e.end||a!==e.start||r!==e.suffix||o!==e.prefix||u!==e.separator||l!==e.decimals||s!==e.decimal||i}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.end,a=t.start,r=t.suffix,o=t.prefix,i=t.duration,c=t.separator,u=t.decimals,l=t.decimal,s=t.preserveValue;i===e.duration&&a===e.start&&r===e.suffix&&o===e.prefix&&c===e.separator&&u===e.decimals&&l===e.decimal||(this.instance.reset(),this.instance=this.createInstance(),this.start()),n!==e.end&&(s||this.instance.reset(),this.instance.update(n))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,c=this.reset,u=this.restart,l=this.update;return"function"===typeof t?t({countUpRef:r,pauseResume:o,reset:c,start:u,update:l}):i.createElement("span",{className:n,ref:r,style:a})}}])&&s(n.prototype,a),r&&s(n,r),t}(o.Component);p(h,"propTypes",{decimal:r.string,decimals:r.number,delay:r.number,easingFn:r.func,end:r.number.isRequired,formattingFn:r.func,onEnd:r.func,onStart:r.func,prefix:r.string,redraw:r.bool,separator:r.string,start:r.number,startOnMount:r.bool,suffix:r.string,style:r.object,useEasing:r.bool,preserveValue:r.bool}),p(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});var y={innerHTML:null};t.default=h,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h.defaultProps,{},e),n=t.start,a=t.formattingFn,r=v(o.useState("function"===typeof a?a(n):n),2),i=r[0],c=r[1],u=o.useRef(null),l=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=E(y,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);c(e)},e}();return u.current=n,n},s=function(){var e=t.onReset;l().reset(),e({pauseResume:d,start:f,update:b})},f=function e(){var n=t.onStart,a=t.onEnd;l().reset(),l().start((function(){a({pauseResume:d,reset:s,start:e,update:b})})),n({pauseResume:d,reset:s,update:b})},d=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:s,start:f,update:b})},b=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:d,reset:s,start:f})};return o.useEffect((function(){var e=t.delay,n=t.onStart,a=t.onEnd;if(t.startOnMount)var r=setTimeout((function(){n({pauseResume:d,reset:s,update:b}),l().start((function(){clearTimeout(r),a({pauseResume:d,reset:s,start:f,update:b})}))}),1e3*e);return s}),[]),{countUp:i,start:f,pauseResume:d,reset:s,update:b}}},1119:function(e,t,n){"use strict";var a=function(){};e.exports=a},1120:function(e,t,n){var a,r;void 0===(r="function"===typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){return"number"==typeof e&&!isNaN(e)}var c=this;if(c.version=function(){return"1.9.3"},c.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,o,i,u=e<0;if(e=Math.abs(e).toFixed(c.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?c.options.decimal+t[1]:"",c.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3===0&&(r=c.options.separator+r),r=n[i-o-1]+r;n=r}return c.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]})),a=a.replace(/[0-9]/g,(function(e){return c.options.numerals[+e]}))),(u?"-":"")+c.options.prefix+n+a+c.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in c.options)o.hasOwnProperty(u)&&null!==o[u]&&(c.options[u]=o[u]);""===c.options.separator?c.options.useGrouping=!1:c.options.separator=""+c.options.separator;for(var l=0,s=["webkit","moz","ms","o"],p=0;p<s.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[s[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[s[p]+"CancelAnimationFrame"]||window[s[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-l)),r=window.setTimeout((function(){e(n+a)}),a);return l=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),c.initialize=function(){return!!c.initialized||(c.error="",c.d="string"==typeof e?document.getElementById(e):e,c.d?(c.startVal=Number(t),c.endVal=Number(n),i(c.startVal)&&i(c.endVal)?(c.decimals=Math.max(0,a||0),c.dec=Math.pow(10,c.decimals),c.duration=1e3*Number(r)||2e3,c.countDown=c.startVal>c.endVal,c.frameVal=c.startVal,c.initialized=!0,!0):(c.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",!1)):(c.error="[CountUp] target is null or undefined",!1))},c.printValue=function(e){var t=c.options.formattingFn(e);"INPUT"===c.d.tagName?this.d.value=t:"text"===c.d.tagName||"tspan"===c.d.tagName?this.d.textContent=t:this.d.innerHTML=t},c.count=function(e){c.startTime||(c.startTime=e),c.timestamp=e;var t=e-c.startTime;c.remaining=c.duration-t,c.options.useEasing?c.countDown?c.frameVal=c.startVal-c.options.easingFn(t,0,c.startVal-c.endVal,c.duration):c.frameVal=c.options.easingFn(t,c.startVal,c.endVal-c.startVal,c.duration):c.countDown?c.frameVal=c.startVal-(c.startVal-c.endVal)*(t/c.duration):c.frameVal=c.startVal+(c.endVal-c.startVal)*(t/c.duration),c.countDown?c.frameVal=c.frameVal<c.endVal?c.endVal:c.frameVal:c.frameVal=c.frameVal>c.endVal?c.endVal:c.frameVal,c.frameVal=Math.round(c.frameVal*c.dec)/c.dec,c.printValue(c.frameVal),t<c.duration?c.rAF=requestAnimationFrame(c.count):c.callback&&c.callback()},c.start=function(e){c.initialize()&&(c.callback=e,c.rAF=requestAnimationFrame(c.count))},c.pauseResume=function(){c.paused?(c.paused=!1,delete c.startTime,c.duration=c.remaining,c.startVal=c.frameVal,requestAnimationFrame(c.count)):(c.paused=!0,cancelAnimationFrame(c.rAF))},c.reset=function(){c.paused=!1,delete c.startTime,c.initialized=!1,c.initialize()&&(cancelAnimationFrame(c.rAF),c.printValue(c.startVal))},c.update=function(e){if(c.initialize()){if(!i(e=Number(e)))return void(c.error="[CountUp] update() - new endVal is not a number: "+e);c.error="",e!==c.frameVal&&(cancelAnimationFrame(c.rAF),c.paused=!1,delete c.startTime,c.startVal=c.frameVal,c.endVal=e,c.countDown=c.startVal>c.endVal,c.rAF=requestAnimationFrame(c.count))}},c.initialize()&&c.printValue(c.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},1121:function(e){e.exports=JSON.parse("{}")},1578:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return J}));var a,r,o,i,c=n(37),u=n(100),l=n(44),s=n(0),p=n.n(s),m=n(819),f=n(892),d=n.n(f),b=(n(1117),n(973),n(36)),g=n(1118),v=n.n(g),E=b.d.div(a||(a=Object(l.a)(["\n  background-color: ",";\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 95px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  // box-shadow: inset 4px 4px 8px ",",\n  //   inset -6px -6px 12px ",";\n  margin: 0 auto ","px;\n"])),(function(e){return e.theme.color.grey[500]}),(function(e){return e.theme.color.grey[300]}),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[3]})),h=function(e){var t=e.children;return p.a.createElement(E,null,t)},y=n(777),O=n(789),x=n(810),j=n(824),S=n(893),w=n(894),k=n(895),F=n(2),T=n.n(F),R=n(16),A=n(227),N=n(748),V=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(N.a)().slowRefresh,o=Object(A.a)();return Object(s.useEffect)((function(){function e(){return(e=Object(R.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,o.getTotalValueLocked();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,o,r]),n},P=(n(1121),n(239)),M=n(790),C=n.n(M),D=n(975),L=n.n(D),z=n(978),I=n(1550),U=n(1123),_=n(732),H=n(1554),q=n(1575),B=n(966),$=n(1548),G=Object(b.c)(r||(r=Object(l.a)(["\n  body {\n    // background: url(",") no-repeat !important;\n    // background-size: cover !important;\n    background: url(",") no-repeat !important;\n  }\n"])),d.a,C.a),Z=Object($.a)((function(e){return{button:Object(u.a)({},e.breakpoints.down("415"),{marginTop:"10px"})}})),W=(b.d.a(o||(o=Object(l.a)(["\nfont-weight: 700;\ntext-decoration: none;\n"]))),Object(b.d)(z.a)(i||(i=Object(l.a)(["\nborder-radius: 3px!important;\nbackground: #1f1f2b !important;\n"])))),J=function(){console.log("debug rendering this");Z();var e,t,n=V(),a=Object(x.a)("STONE-FTM-LP"),r=Object(x.a)("SSHARE-FTM-LP"),o=Object(O.a)(),i=Object(k.a)(),u=Object(w.a)(),l=Object(A.a)();e=P.tomb,t=P.tShare;e.address,t.address;var f=Object(s.useMemo)((function(){return a||null}),[a]),d=Object(s.useMemo)((function(){return r||null}),[r]),b=Object(s.useMemo)((function(){return o?Number(o.priceInDollars).toFixed(2):null}),[o]),g=Object(s.useMemo)((function(){return o?Number(o.tokenInFtm).toFixed(4):null}),[o]),E=Object(s.useMemo)((function(){return o?String(o.circulatingSupply):null}),[o]),F=Object(s.useMemo)((function(){return o?String(o.totalSupply):null}),[o]),T=Object(s.useMemo)((function(){return i?Number(i.priceInDollars).toFixed(2):null}),[i]),R=Object(s.useMemo)((function(){return i?Number(i.tokenInFtm).toFixed(4):null}),[i]),N=Object(s.useMemo)((function(){return i?String(i.circulatingSupply):null}),[i]),M=Object(s.useMemo)((function(){return i?String(i.totalSupply):null}),[i]),C=Object(s.useMemo)((function(){return u?Number(u.priceInDollars).toFixed(2):null}),[u]),D=Object(s.useMemo)((function(){return u?Number(u.tokenInFtm).toFixed(4):null}),[u]),$=Object(s.useMemo)((function(){return u?String(u.circulatingSupply):null}),[u]),J=Object(s.useMemo)((function(){return u?String(u.totalSupply):null}),[u]),K=Object(S.a)({depositTokenName:"STONE-FTM-LP"}),Y=Object(S.a)({depositTokenName:"SSHARE-FTM-LP"}),Q=Object(j.a)(p.a.createElement(B.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(K.onZap(e,t,n),ee())},tokenName:"STONE-FTM-LP"})),X=Object(c.a)(Q,2),ee=(X[0],X[1]),te=Object(j.a)(p.a.createElement(B.a,{decimals:18,onConfirm:function(e,t,n){Number(n)<=0||isNaN(Number(n))||(Y.onZap(e,t,n),ae())},tokenName:"SSHARE-FTM-LP"})),ne=Object(c.a)(te,2),ae=(ne[0],ne[1]);return p.a.createElement(m.a,null,p.a.createElement(G,null),p.a.createElement(I.a,{container:!0,spacing:3},p.a.createElement(I.a,{item:!0,xs:12,sm:4},p.a.createElement(W,{style:{height:"100%"}},p.a.createElement(U.a,{style:{paddingLeft:"30px"}},p.a.createElement(_.a,{style:{color:"#fff"},align:"center",variant:"h4",gutterBottom:!0},"Welcome to the Stone Finance")))),p.a.createElement(I.a,{item:!0,xs:12,sm:8},p.a.createElement(W,{style:{height:"100%"}},p.a.createElement(U.a,{style:{paddingLeft:"30px"}},p.a.createElement("p",null,"DYOR before investing. Please note that investing in Defi Project may contain risk and result in monetary loss. By using our protocol, you agreed that our team is not responsible for any financial losses from investing in our protocol.")))),p.a.createElement(I.a,{item:!0,xs:12,sm:4},p.a.createElement(W,{style:{height:"100%"}},p.a.createElement(U.a,{align:"center",style:{marginTop:"17px"}},p.a.createElement(_.a,{style:{color:"#fff"}},"Total Value Locked"),p.a.createElement(v.a,{style:{fontSize:"25px"},end:n,separator:",",prefix:"$"})))),p.a.createElement(I.a,{item:!0,xs:12,sm:8},p.a.createElement(z.a,{style:{height:"100%"}},p.a.createElement(U.a,{align:"center",style:{marginTop:"2.5%"}},p.a.createElement(H.a,{color:"primary",href:"/farm",variant:"contained",style:{marginRight:"25px"}},"Farm"),p.a.createElement(H.a,{color:"contained",target:"_blank",href:"https://spookyswap.finance/swap?outputCurrency=0x4D7F7Fd518dC81bF60eadE7A677892F2Af912798",variant:"contained",style:{marginRight:"10px"}},"Buy STONE"),p.a.createElement(H.a,{color:"contained",target:"_blank",href:"https://spookyswap.finance/swap?outputCurrency=0xc4f71eF3fb3A4De4c48499F8CBF16fE4F999459A",variant:"contained",style:{marginRight:"10px"}},"Buy SSHARE"),p.a.createElement(H.a,{color:"contained",target:"_blank",href:"https://dexscreener.com/fantom/0x878FF079892Da1d4Da6F29aD154b4CFb18463CeF",variant:"contained",style:{marginRight:"10px"}},"STONE Chart"),p.a.createElement(H.a,{color:"contained",target:"_blank",href:"https://dexscreener.com/fantom/0x642Dae5853B579AEda09D8AC6CAE8e3fc4DD50d3",variant:"contained",style:{marginRight:"10px"}},"SSHARE Chart")))),p.a.createElement(I.a,{item:!0,xs:12,sm:4},p.a.createElement(W,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(_.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"STONE"),p.a.createElement(H.a,{onClick:function(){l.watchAssetInMetamask("STONE")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:L.a})),p.a.createElement(q.a,{mt:2},p.a.createElement(y.a,{symbol:"STONE"})),"Current Price",p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},g||"-.----"," FTM")),p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"16px",alignContent:"flex-start"}},"$",b||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",(E*b).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",E," ",p.a.createElement("br",null),"Total Supply: ",F)))),p.a.createElement(I.a,{item:!0,xs:12,sm:4},p.a.createElement(W,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(_.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"SSHARE"),p.a.createElement(H.a,{onClick:function(){l.watchAssetInMetamask("SSHARE")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:L.a})),p.a.createElement(q.a,{mt:2},p.a.createElement(y.a,{symbol:"SSHARE"})),"Current Price",p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},R||"-.----"," FTM")),p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"16px"}},"$",T||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",(N*T).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",N," ",p.a.createElement("br",null),"Total Supply: ",M)))),p.a.createElement(I.a,{item:!0,xs:12,sm:4},p.a.createElement(W,null,p.a.createElement(U.a,{align:"center",style:{position:"relative"}},p.a.createElement(_.a,{style:{color:"#fff"},variant:"h5",gutterBottom:!0},"SBOND"),p.a.createElement(H.a,{onClick:function(){l.watchAssetInMetamask("SBOND")},style:{position:"absolute",top:"10px",right:"10px"}},p.a.createElement("img",{alt:"metamask fox",style:{width:"20px"},src:L.a})),p.a.createElement(q.a,{mt:2},p.a.createElement(y.a,{symbol:"SBOND"})),"Current Price",p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"30px"}},D||"-.----"," FTM")),p.a.createElement(q.a,null,p.a.createElement("span",{style:{fontSize:"16px"}},"$",C||"-.--")),p.a.createElement("span",{style:{fontSize:"12px"}},"Market Cap: $",($*C).toFixed(2)," ",p.a.createElement("br",null),"Circulating Supply: ",$," ",p.a.createElement("br",null),"Total Supply: ",J)))),p.a.createElement(I.a,{item:!0,xs:12,sm:6},p.a.createElement(W,null,p.a.createElement(U.a,{align:"center"},p.a.createElement("h2",{style:{color:"white"}},"STONE-FTM Spooky LP"),p.a.createElement(q.a,{mt:2},p.a.createElement(h,null,p.a.createElement(y.a,{symbol:"STONE-FTM-LP"}))),p.a.createElement(q.a,{mt:2}),p.a.createElement(q.a,{mt:2},p.a.createElement("span",{style:{fontSize:"26px"}},(null===f||void 0===f?void 0:f.tokenAmount)?null===f||void 0===f?void 0:f.tokenAmount:"-.--"," STONE /"," ",(null===f||void 0===f?void 0:f.ftmAmount)?null===f||void 0===f?void 0:f.ftmAmount:"-.--"," FTM")),p.a.createElement(q.a,null,"$",(null===f||void 0===f?void 0:f.priceOfOne)?f.priceOfOne:"-.--"),p.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===f||void 0===f?void 0:f.totalLiquidity)?f.totalLiquidity:"-.--"," ",p.a.createElement("br",null),"Total supply: ",(null===f||void 0===f?void 0:f.totalSupply)?f.totalSupply:"-.--")))),p.a.createElement(I.a,{item:!0,xs:12,sm:6},p.a.createElement(W,null,p.a.createElement(U.a,{align:"center"},p.a.createElement("h2",null,"SSHARE-FTM Spooky LP"),p.a.createElement(q.a,{mt:2},p.a.createElement(h,null,p.a.createElement(y.a,{symbol:"SSHARE-FTM-LP"}))),p.a.createElement(q.a,{mt:2}),p.a.createElement(q.a,{mt:2},p.a.createElement("span",{style:{fontSize:"26px"}},(null===d||void 0===d?void 0:d.tokenAmount)?null===d||void 0===d?void 0:d.tokenAmount:"-.--"," SSHARE /"," ",(null===d||void 0===d?void 0:d.ftmAmount)?null===d||void 0===d?void 0:d.ftmAmount:"-.--"," FTM")),p.a.createElement(q.a,null,"$",(null===d||void 0===d?void 0:d.priceOfOne)?d.priceOfOne:"-.--"),p.a.createElement("span",{style:{fontSize:"12px"}},"Liquidity: $",(null===d||void 0===d?void 0:d.totalLiquidity)?d.totalLiquidity:"-.--",p.a.createElement("br",null),"Total supply: ",(null===d||void 0===d?void 0:d.totalSupply)?d.totalSupply:"-.--"))))))}},753:function(e,t,n){"use strict";var a=n(0),r=n(759),o=n(98);t.a=function(){var e=Object(r.b)(),t=Object(o.b)();return Object(a.useCallback)((function(n,a){n.then((function(t){return e(t,{summary:a})})).catch((function(e){if(!e.message.includes("User denied")){var n="Unable to ".concat(a[0].toLowerCase()).concat(a.slice(1));console.error("".concat(n,": ").concat(e.message||e.stack)),t({error:{message:n,stack:e.message||e.stack}})}}))}),[t,e])}},771:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a,r,o,i=n(44),c=n(0),u=n.n(c),l=n(36),s=l.d.div(a||(a=Object(i.a)(["\n  align-items: center;\n  background-color: ","00;\n  display: flex;\n  height: 96px;\n  margin: ","px ","px\n    ","px;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[100]}),(function(e){return e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return-e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),p=l.d.div(r||(r=Object(i.a)(["\n  flex: 1;\n"]))),m=l.d.div(o||(o=Object(i.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]})),f=function(e){var t=e.children,n=u.a.Children.toArray(t).length;return u.a.createElement(s,null,u.a.Children.map(t,(function(e,t){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p,null,e),t<n-1&&u.a.createElement(m,null))})))}},789:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),l=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.a)().fastRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getTombStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,s]),n}},790:function(e,t,n){e.exports=n.p+"static/media/bg.1923e644.jpg"},810:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),l=n(748);t.a=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0],s=n[1],p=Object(l.a)().slowRefresh,m=Object(u.a)();return Object(c.useEffect)((function(){function t(){return(t=Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.t0=s,t.next=4,m.getLPStat(e);case 4:t.t1=t.sent,(0,t.t0)(t.t1),t.next=11;break;case 8:t.prev=8,t.t2=t.catch(0),console.error(t.t2);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[s,m,p,e]),a}},892:function(e,t,n){e.exports=n.p+"static/media/home.87c905bf.png"},893:function(e,t,n){"use strict";var a=n(0),r=n(227),o=n(753);t.a=function(e){var t=Object(r.a)(),n=Object(o.a)();return{onZap:Object(a.useCallback)((function(a,r,o){n(t.zapIn(a,r,o),"Zap ".concat(o," in ").concat(e.depositTokenName,"."))}),[e,t,n])}}},894:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),l=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.a)().slowRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getBondStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,s]),n}},895:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(16),i=n(37),c=n(0),u=n(227),l=n(748);t.a=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(l.a)().slowRefresh,p=Object(u.a)();return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=a,e.next=4,p.getShareStat();case 4:e.t1=e.sent,(0,e.t0)(e.t1),e.next=11;break;case 8:e.prev=8,e.t2=e.catch(0),console.error(e.t2);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,p,s]),n}},966:function(e,t,n){"use strict";var a,r=n(44),o=n(2),i=n.n(o),c=n(16),u=n(37),l=n(0),s=n.n(l),p=n(732),m=n(1583),f=n(1574),d=n(1554),b=n(229),g=n(1562),v=n(786),E=n(771),h=n(788),y=n(776),O=n(36),x=n(28),j=n(778),S=n(810),w=n(780),k=n(227),F=n(59),T=n(96),R=n(27),A=n(759),N=n(781),V=n(79),P=T.a.constants.MaxUint256,M=R.a.from("1000000000000000000000000");!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.NOT_APPROVED=1]="NOT_APPROVED",e[e.PENDING=2]="PENDING",e[e.APPROVED=3]="APPROVED"}(a||(a={}));var C,D,L=function(e){var t,n=Object(k.a)();e===V.a?t=n.FTM:e===V.d?t=n.STONE:e===V.e&&(t=n.SSHARE);var r=Object(A.a)(t.address,V.f),o=Object(N.a)(t,V.f,r),u=Object(l.useMemo)((function(){return t===n.FTM?a.APPROVED:o?o.lt(M)?r?a.PENDING:a.NOT_APPROVED:a.APPROVED:a.UNKNOWN}),[o,r,t,n]),s=Object(A.b)(),p=Object(l.useCallback)(Object(c.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u===a.NOT_APPROVED){e.next=3;break}return console.error("approve was called unnecessarily"),e.abrupt("return");case 3:return e.next=5,t.approve(V.f,P);case 5:n=e.sent,s(n,{summary:"Approve ".concat(t.symbol),approval:{tokenAddress:t.address,spender:V.f}});case 7:case"end":return e.stop()}}),e)}))),[u,t,s]);return[u,p]},z=n(1086),I=O.d.div(C||(C=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n"])),(function(e){return e.theme.spacing[4]}),(function(e){return e.theme.spacing[4]})),U=O.d.div(D||(D=Object(r.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n"])),(function(e){return e.theme.color.grey[400]})),_=Object(b.a)({root:{backgroundColor:"white",color:"#fff","&:hover":{backgroundColor:"grey",color:"#fff"},selected:{backgroundColor:"black"}}})(g.a);t.a=function(e){var t=e.onConfirm,n=(e.onDismiss,e.tokenName),r=void 0===n?"":n,o=e.decimals,b=void 0===o?18:o,g=Object(k.a)(),O=Object(F.b)().balance,T=(Number(O)/1e18).toFixed(4).toString(),R=Object(w.a)(g.STONE),A=Object(w.a)(g.SSHARE),N=Object(l.useState)(""),P=Object(u.a)(N,2),M=P[0],C=P[1],D=Object(l.useState)(V.a),H=Object(u.a)(D,2),q=H[0],B=H[1],$=Object(l.useState)(T),G=Object(u.a)($,2),Z=G[0],W=G[1],J=Object(l.useState)({token0:"0",token1:"0"}),K=Object(u.a)(J,2),Y=K[0],Q=K[1],X=L(q),ee=Object(u.a)(X,2),te=ee[0],ne=ee[1],ae=Object(S.a)("STONE-FTM-LP"),re=Object(S.a)("SSHARE-FTM-LP"),oe=Object(l.useMemo)((function(){return ae||null}),[ae]),ie=Object(l.useMemo)((function(){return re||null}),[re]),ce=r.startsWith(V.d)?null===oe||void 0===oe?void 0:oe.ftmAmount:null===ie||void 0===ie?void 0:ie.ftmAmount;var ue=function(){var e=Object(c.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.currentTarget.value&&0!==t.currentTarget.value||(C(t.currentTarget.value),Q({token0:"0",token1:"0"})),a=t.currentTarget.value,!isNaN(parseFloat(a))&&isFinite(a)){e.next=3;break}return e.abrupt("return");case 3:return C(t.currentTarget.value),e.next=6,g.estimateZapIn(q,r,String(t.currentTarget.value));case 6:n=e.sent,Q({token0:n[0].toString(),token1:n[1].toString()});case 8:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(c.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(Z),e.next=3,g.estimateZapIn(q,r,String(Z));case 3:t=e.sent,Q({token0:t[0].toString(),token1:t[1].toString()});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s.a.createElement(v.a,null,s.a.createElement(h.a,{text:"Zap in ".concat(r)}),s.a.createElement(p.a,{variant:"h6",align:"center"},"Powered by"," ",s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://mlnl.finance"},"mlnl.finance")),s.a.createElement(I,null),s.a.createElement(m.a,{style:{color:"#fff"},id:"label"},"Select asset to zap with"),s.a.createElement(f.a,{onChange:function(e){var t=e.target.value;B(t),W(T),e.target.value===V.e&&W(Object(x.a)(A,b)),e.target.value===V.d&&W(Object(x.a)(R,b))},style:{color:"#fff"},labelId:"label",id:"select",value:q},s.a.createElement(_,{value:V.a},"FTM"),s.a.createElement(_,{value:V.e},"SSHARE")),s.a.createElement(y.a,{onSelectMax:le,onChange:ue,value:M,max:Z,symbol:q}),s.a.createElement(j.a,{text:"Zap Estimations"}),s.a.createElement(U,null," ",r,": ",Number(Y.token0)/Number(ce)),s.a.createElement(U,null," ","(",Number(Y.token0)," ",V.a," / ",Number(Y.token1)," ",r.startsWith(V.d)?V.d:V.e,")"," "),s.a.createElement(E.a,null,s.a.createElement(d.a,{color:"primary",variant:"contained",onClick:function(){return te!==a.APPROVED?ne():t(q,r,M)}},te!==a.APPROVED?"Approve":"Let's go")),s.a.createElement(I,null),s.a.createElement(z.a,{variant:"filled",severity:"warning"},"Beta feature. Use at your own risk!"))}}}]);
//# sourceMappingURL=13.72d70bb1.chunk.js.map