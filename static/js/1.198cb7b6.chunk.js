(this.webpackJsonpapxfinance=this.webpackJsonpapxfinance||[]).push([[1],{1087:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36).d.div(a||(a=Object(r.a)(["\n  background-color: #1f1f2b; //",";\n  color: #9090ff !important;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n"])),(function(e){return e.theme.color.grey[800]})),i=function(e){var t=e.children;return o.a.createElement(l,null,t)}},1090:function(e,t,n){e.exports=n.p+"static/media/twitter.08d2ade8.svg"},1091:function(e,t,n){e.exports=n.p+"static/media/github.1f24f07c.svg"},1092:function(e,t,n){e.exports=n.p+"static/media/telegram.28146bd8.svg"},1093:function(e,t,n){e.exports=n.p+"static/media/discord.5f33a495.svg"},1094:function(e,t,n){e.exports=n.p+"static/media/youtube.503d2e22.svg"},1095:function(e,t,n){e.exports=n.p+"static/media/cryto_stone.07eac78d.png"},1101:function(e,t,n){e.exports=n.p+"static/media/wallet-connect.37f2bc6e.svg"},1102:function(e,t,n){e.exports=n.p+"static/media/coinbase_logo.3765bf16.jpeg"},1103:function(e,t,n){e.exports=n.p+"static/media/stone_c.b61ba6c2.png"},1104:function(e,t,n){e.exports=n.p+"static/media/sshares_c.9b9fab6c.png"},1105:function(e,t,n){e.exports=n.p+"static/media/crypto_tomb_cash.fbd96145.png"},1106:function(e,t,n){e.exports=n.p+"static/media/crypto_tomb_share.0f0467bf.png"},1107:function(e,t,n){e.exports=n.p+"static/media/sbonds_c.93cbafc5.png"},1108:function(e,t,n){e.exports=n.p+"static/media/tomb_ftm_lp.9968c327.png"},1109:function(e,t,n){e.exports=n.p+"static/media/tshare_ftm_lp.2cdbbc14.png"},1110:function(e,t,n){e.exports=n.p+"static/media/ftm_logo_blue.3af63018.svg"},1111:function(e,t,n){e.exports=n.p+"static/media/spooky.1b007b4a.png"},1112:function(e,t,n){e.exports=n.p+"static/media/DAI.26d4501f.png"},1113:function(e,t,n){e.exports=n.p+"static/media/USDC.c76b33ca.png"},748:function(e,t,n){"use strict";var a=n(0),r=n(351);t.a=function(){var e=Object(a.useContext)(r.a);return{fastRefresh:e.fast,slowRefresh:e.slow}}},759:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var a=n(0),r=n(52),c=n(59),o=n(92);function l(){var e=Object(c.b)(),t=e.chainId,n=e.account,l=Object(r.b)();return Object(a.useCallback)((function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a.summary,c=a.approval;if(n&&t){var i=e.hash;if(!i)throw Error("No transaction hash found.");l(Object(o.a)({hash:i,from:n,chainId:t,approval:c,summary:r}))}}),[l,t,n])}function i(){var e,t=Object(c.b)().chainId,n=Object(r.c)((function(e){return e.transactions}));return t&&null!==(e=n[t])&&void 0!==e?e:{}}function s(e,t){var n=i();return Object(a.useMemo)((function(){return"string"===typeof e&&"string"===typeof t&&Object.keys(n).some((function(a){var r=n[a];if(!r)return!1;if(r.receipt)return!1;var c=r.approval;return!!c&&(c.spender===t&&c.tokenAddress===e&&function(e){return(new Date).getTime()-e.addedTime<864e5}(r))}))}),[n,t,e])}},776:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a,r,c,o,l,i,s=n(44),u=n(0),m=n.n(u),d=n(36),f=n(1554),p=d.d.div(a||(a=Object(s.a)(["\n  align-items: center;\n  background-color: ",";\n  border-radius: ","px;\n  display: flex;\n  padding: 0 ","px;\n"])),(function(e){return e.theme.color.grey[200]}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.spacing[3]})),b=d.d.input(r||(r=Object(s.a)(["\n  background: none;\n  border: 0;\n  color: ",";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n"])),(function(e){return e.theme.color.grey[600]})),g=function(e){var t=e.endAdornment,n=e.onChange,a=e.placeholder,r=e.startAdornment,c=e.value;return m.a.createElement(p,null,!!r&&r,m.a.createElement(b,{placeholder:a,value:c,onChange:n}),!!t&&t)},h=d.d.div(c||(c=Object(s.a)([""]))),E=d.d.div(o||(o=Object(s.a)(["\n  width: ","px;\n"])),(function(e){return e.theme.spacing[3]})),x=d.d.div(l||(l=Object(s.a)(["\n  align-items: center;\n  display: flex;\n"]))),v=d.d.div(i||(i=Object(s.a)(["\n  align-items: center;\n  color: ",";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n"])),(function(e){return e.theme.color.grey[700]})),y=function(e){var t=e.max,n=e.symbol,a=e.onChange,r=e.onSelectMax,c=e.value;return m.a.createElement(h,null,m.a.createElement(v,null,t.toLocaleString()," ",n," Available"),m.a.createElement(g,{endAdornment:m.a.createElement(x,null,m.a.createElement(E,null),m.a.createElement("div",null,m.a.createElement(f.a,{size:"small",color:"primary",variant:"contained",onClick:r},"Max"))),onChange:a,placeholder:"0",value:c}))}},777:function(e,t,n){"use strict";n.d(t,"a",(function(){return N}));var a=n(0),r=n.n(a),c=n(1103),o=n.n(c),l=n(1104),i=n.n(l),s=n(1105),u=n.n(s),m=n(1106),d=n.n(m),f=n(1107),p=n.n(f),b=n(1108),g=n.n(b),h=n(1109),E=n.n(h),x=n(1110),v=n.n(x),y=n(1111),O=n.n(y),j=n(1112),w=n.n(j),k=n(1113),S=n.n(k),C={STONE:o.a,TOMBPNG:u.a,TSHAREPNG:d.a,SSHARE:i.a,SBOND:p.a,WFTM:v.a,BOO:O.a,USDC:S.a,DAI:w.a,"STONE-FTM-LP":g.a,"SSHARE-FTM-LP":E.a},N=function(e){var t=e.symbol,n=e.size,a=void 0===n?64:n;return r.a.createElement("img",{src:C[t],alt:"".concat(t," Logo"),width:a,height:a})}},778:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36),i=l.d.div(a||(a=Object(r.a)(["\n  color: ",";\n"])),(function(e){return e.color})),s=function(e){var t,n=e.text,a=e.variant,r=void 0===a?"secondary":a,s=e.color,u=Object(c.useContext)(l.a).color;return s?t=s:"primary"===r?t=u.primary.main:("secondary"===r||"normal"===r)&&(t="#9090ff"),o.a.createElement(i,{color:t},n)}},780:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(27),s=n(227),u=n(38);t.a=function(e){var t=Object(l.useState)(i.a.from(0)),n=Object(o.a)(t,2),a=n[0],m=n[1],d=Object(s.a)(),f=null===d||void 0===d?void 0:d.isUnlocked,p=Object(l.useCallback)(Object(c.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=m,t.next=3,e.balanceOf(d.myAccount);case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)}))),[e,d.myAccount]);return Object(l.useEffect)((function(){if(f){p().catch((function(e){return console.error("Failed to fetch token balance: ".concat(e.stack))}));var e=setInterval(p,u.b.refreshInterval);return function(){return clearInterval(e)}}}),[f,e,p,d]),a}},781:function(e,t,n){"use strict";var a=n(2),r=n.n(a),c=n(16),o=n(37),l=n(0),i=n(59);t.a=function(e,t,n){var a=Object(l.useState)(null),s=Object(o.a)(a,2),u=s[0],m=s[1],d=Object(i.b)().account,f=Object(l.useCallback)(Object(c.a)(r.a.mark((function n(){var a;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.allowance(d,t);case 2:a=n.sent,m(a);case 4:case"end":return n.stop()}}),n)}))),[d,t,e]);return Object(l.useEffect)((function(){d&&t&&e&&f().catch((function(e){return console.error("Failed to fetch allowance: ".concat(e.stack))}))}),[d,t,e,n,f]),u}},786:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a,r,c=n(44),o=n(0),l=n.n(o),i=n(36),s=n(1087),u=n(965),m=i.d.div(a||(a=Object(c.a)(["\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: ","px;\n  padding: 0 ","px;\n  width: 100%;\n"])),(function(e){return e.width}),(function(e){return e.theme.spacing[4]})),d=function(e){var t,n=e.children,a=e.size,r=void 0===a?"md":a,c=Object(o.useContext)(i.a).siteWidth;switch(r){case"sm":t=c/2;break;case"md":t=2*c/3;break;case"lg":default:t=c}return l.a.createElement(m,{width:t},n)},f=i.d.div(r||(r=Object(c.a)(["\n  border-radius: 12px;\n  position: relative;\n"]))),p=function(e){var t=e.children;return l.a.createElement(d,{size:"sm"},l.a.createElement(f,null,l.a.createElement(s.a,null,l.a.createElement(u.a,null,t))))}},788:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36).d.div(a||(a=Object(r.a)(["\n  align-items: center;\n  // color: ",";\n  color: #d5d8e5;\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: ","px;\n  justify-content: center;\n  margin-top: ","px;\n"])),(function(e){return e.theme.color.grey[300]}),(function(e){return e.theme.topBarSize}),(function(e){return-e.theme.spacing[4]})),i=function(e){var t=e.text;return o.a.createElement(l,null,t)}},819:function(e,t,n){"use strict";n.d(t,"a",(function(){return q}));var a=n(0),r=n.n(a),c=n(1549),o=n(59),l=function(){var e=Object(o.b)(),t=e.account,n=e.connect,r=e.connector;t&&""===window.localStorage.getItem("connectorId")&&window.localStorage.setItem("connectorId",r),Object(a.useEffect)((function(){var e=window.localStorage.getItem("connectorId");e&&!t&&n(e)}),[n,t])},i=n(100),s=n(1548),u=n(1550),m=n(732),d=n(1551),f=n(1090),p=n.n(f),b=(n(1091),n(1092)),g=n.n(b),h=n(1093),E=n.n(h),x=(n(1094),Object(s.a)((function(e){return{footer:Object(i.a)({position:"absolute",bottom:"0",paddingTop:"15px",paddingBottom:"15px",width:"100%",color:"white",backgroundColor:"#28283D",textAlign:"center",height:"1.3rem"},e.breakpoints.down("xs"),{display:"none"}),link:{width:"24px",height:"24px",display:"inline",marginLeft:"20px"},img:{width:"24px",height:"24px"}}}))),v=function(){var e=x();return r.a.createElement("footer",{className:e.footer},r.a.createElement(c.a,{maxWidth:"lg"},r.a.createElement(u.a,{container:!0},r.a.createElement(u.a,{item:!0,xs:6},r.a.createElement(m.a,{variant:"body2",color:"textSecondary",align:"left"},"Copyright \xa9 ",r.a.createElement(d.a,{color:"inherit",href:"/"},"The Stone Finance")," ",(new Date).getFullYear())),r.a.createElement(u.a,{item:!0,xs:6,style:{textAlign:"right"}},r.a.createElement("a",{href:"https://twitter.com/StoneFinance9",rel:"noopener noreferrer",target:"_blank",className:e.link},r.a.createElement("img",{alt:"twitter",src:p.a,className:e.img})),r.a.createElement("a",{href:"https://t.me/StoneFinance",rel:"noopener noreferrer",target:"_blank",className:e.link},r.a.createElement("img",{alt:"telegram",src:g.a,className:e.img})),r.a.createElement("a",{href:"https://discord.gg/xKE3qtemBY",rel:"noopener noreferrer",target:"_blank",className:e.link},r.a.createElement("img",{alt:"discord",src:E.a,className:e.img}))))))},y=n(37),O=n(228),j=n(230),w=n(1095),k=n.n(w),S=n(973),C=n.n(S),N=n(1556),T=n(1557),A=n(1559),B=n(1575),D=n(1560),F=n(1582),I=n(1561),_=n(1555),z=n(1552),M=n(1553),P=function(e){var t=e.primary,n=e.to,a=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(j.b,Object.assign({ref:t,to:n},e))}))}),[n]);return r.a.createElement("li",null,r.a.createElement(z.a,{button:!0,component:a},r.a.createElement(M.a,{primary:t})))},W=n(1114),R=n.n(W),H=n(1116),L=n.n(H),G=n(1115),U=n.n(G),J=n(809),K=n(847),V=Object(s.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},appBar:{color:"#d5d8e5","background-color":"#1f1f2b",padding:"10px",marginBottom:"3rem"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},hide:{display:"none"},toolbar:{flexWrap:"wrap"},toolbarTitle:{fontFamily:'"Poppins", sans-serif',fontSize:"30px",flexGrow:1},link:{textTransform:"capitalize",color:"#d5d8e5",fontSize:"14px",margin:e.spacing(1,2),textDecoration:"none","&:hover":{textDecoration:"none"}},brandLink:{textDecoration:"none",color:"#d5d8e5","&:hover":{textDecoration:"none"}}}})),Y=function(){var e=Object(N.a)("(min-width:900px)"),t=V(),n=Object(J.a)(),a=r.a.useState(!1),c=Object(y.a)(a,2),o=c[0],l=c[1],i=function(){l(!1)};return r.a.createElement(T.a,{position:"sticky",elevation:0,className:t.appBar},r.a.createElement(A.a,{className:t.toolbar},e?r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.toolbarTitle,style:{display:"flex",alignItems:"center"}},r.a.createElement(C.a,{color:"none",style:{width:"40px",height:"40px",paddingTop:"0px"},src:k.a}),r.a.createElement(j.b,{to:"/",style:{color:"#fff",fontSize:"20px"},className:t.brandLink},"THE STONE FINANCE")),r.a.createElement(B.a,{mr:5},r.a.createElement(j.b,{color:"textPrimary",to:"/",className:t.link},"Home"),r.a.createElement(j.b,{color:"textPrimary",to:"/farm",className:t.link},"Farm"),r.a.createElement(j.b,{color:"textPrimary",to:"/boardroom",className:t.link},"Board Room"),r.a.createElement(j.b,{color:"textPrimary",to:"/bonds",className:t.link},"Buy & Redeem Bonds"),r.a.createElement(j.b,{color:"textPrimary",to:"/#",className:t.link},"NFT MarketPlace (Soon)"),r.a.createElement(j.b,{color:"textPrimary",to:"/#",className:t.link},"Vote (Soon)"),r.a.createElement("a",{href:"#",className:t.link},"Docs")),r.a.createElement(K.a,{text:"Connect Wallet"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{color:"inherit","aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(O.default)(o&&t.hide)},r.a.createElement(R.a,null)),r.a.createElement(C.a,{color:"none",style:{width:"40px",height:"40px",paddingTop:"0px"},src:k.a}),r.a.createElement(j.b,{to:"/",style:{color:"#fff",fontSize:"20px"},className:t.brandLink},"STONE"),r.a.createElement(F.a,{className:t.drawer,onEscapeKeyDown:i,onBackdropClick:i,variant:"temporary",anchor:"left",open:o,classes:{paper:t.drawerPaper}},r.a.createElement("div",null,r.a.createElement(D.a,{onClick:i},"rtl"===n.direction?r.a.createElement(U.a,null):r.a.createElement(L.a,null))),r.a.createElement(I.a,null),r.a.createElement(_.a,null,r.a.createElement(P,{primary:"Home",to:"/"}),r.a.createElement(P,{primary:"Farm",to:"/farm"}),r.a.createElement(P,{primary:"Board Room",to:"/boardroom"}),r.a.createElement(P,{primary:"Buy & Redeem Bonds",to:"/bonds"}),r.a.createElement(P,{primary:"NFT MarketPlace(Soon)",to:"/#"}),r.a.createElement(P,{primary:"Vote (Soon)",to:"/#"}),r.a.createElement(z.a,{button:!0,component:"a",href:"#"},r.a.createElement(M.a,null,"Docs")),r.a.createElement(z.a,{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement(K.a,{text:"Connect Wallet"})))))))},q=function(e){var t=e.children;return l(),r.a.createElement("div",{style:{position:"relative",minHeight:"100vh"}},r.a.createElement(Y,null),r.a.createElement(c.a,{maxWidth:"lg",style:{paddingBottom:"5rem"}},t),r.a.createElement(v,null))}},824:function(e,t,n){"use strict";var a=n(0),r=n(350);t.a=function(e){var t=Object(a.useContext)(r.a),n=t.onDismiss,c=t.onPresent;return[Object(a.useCallback)((function(){c(e)}),[e,c]),n]}},847:function(e,t,n){"use strict";var a,r,c,o,l,i=n(37),s=n(44),u=n(0),m=n.n(u),d=n(1554),f=n(59),p=n(36),b=n(824),g=function(e){var t=e.icon,n=e.onConnect,a=e.title;return m.a.createElement(d.a,{fullWidth:!0,onClick:n,className:"wallet-button"},m.a.createElement("span",{style:{marginRight:"1rem",height:"2rem"}},t),m.a.createElement("span",null,a))},h=n(1577),E=n(1555),x=n(1548),v=n(975),y=n.n(v),O=n(1101),j=n.n(O),w=n(1102),k=n.n(w),S=Object(x.a)((function(e){return{paper:{position:"absolute",width:"400px",maxWidth:"100%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(4),outline:"none"}}})),C=function(e){var t=e.open,n=e.handleClose,a=S(),r=Object(f.b)(),c=r.account,o=r.connect;return Object(u.useEffect)((function(){c&&n()})),m.a.createElement(h.a,{"aria-labelledby":"connect a wallet","aria-describedby":"connect your crypto wallet",open:t,style:{display:"flex",alignItems:"center",justifyContent:"center"},onClose:n},m.a.createElement("div",{className:a.paper},m.a.createElement("h2",null,"Connect Wallet"),m.a.createElement(E.a,{component:"nav","aria-label":"main mailbox folders"},m.a.createElement(g,{icon:m.a.createElement("img",{src:y.a,alt:"Metamask logo",style:{height:32}}),onConnect:function(){o("injected")},title:"Metamask"}),m.a.createElement(g,{icon:m.a.createElement("img",{src:j.a,alt:"Wallet Connect logo",style:{height:24}}),onConnect:function(){o("walletconnect")},title:"WalletConnect"}),m.a.createElement(g,{icon:m.a.createElement("img",{src:k.a,alt:"Coinbase wallet logo",style:{height:32}}),onConnect:function(){o("walletlink")},title:"Coinbase Wallet"}))))},N=n(780),T=n(28),A=n(778),B=n(786),D=n(788),F=n(227),I=n(777),_=p.d.div(a||(a=Object(s.a)(["\n  //color: ",";\n  font-size: 30px;\n  font-weight: 700;\n"])),(function(e){return e.theme.color.grey[300]})),z=p.d.div(r||(r=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n"]))),M=p.d.div(c||(c=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.spacing[4]})),P=p.d.div(o||(o=Object(s.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin: 0 ","px;\n"])),(function(e){return e.theme.spacing[3]})),W=function(e){e.onDismiss;var t=Object(F.a)(),n=Object(N.a)(t.STONE),a=Object(u.useMemo)((function(){return Object(T.a)(n)}),[n]),r=Object(N.a)(t.SSHARE),c=Object(u.useMemo)((function(){return Object(T.a)(r)}),[r]),o=Object(N.a)(t.SBOND),l=Object(u.useMemo)((function(){return Object(T.a)(o)}),[o]);return m.a.createElement(B.a,null,m.a.createElement(D.a,{text:"My Wallet"}),m.a.createElement(M,null,m.a.createElement(P,null,m.a.createElement(I.a,{symbol:"STONE"}),m.a.createElement(z,null,m.a.createElement(_,null,a),m.a.createElement(A.a,{text:"STONE Available"}))),m.a.createElement(P,null,m.a.createElement(I.a,{symbol:"SSHARE"}),m.a.createElement(z,null,m.a.createElement(_,null,c),m.a.createElement(A.a,{text:"SSHARE Available"}))),m.a.createElement(P,null,m.a.createElement(I.a,{symbol:"SBOND"}),m.a.createElement(z,null,m.a.createElement(_,null,l),m.a.createElement(A.a,{text:"SBOND Available"})))))},R=Object(p.d)(d.a)(l||(l=Object(s.a)(["\n    border-radius: 3px!important;\n    border-color: #1FE7ABFF !important;\n    height: 40px;\n    &:hover {\n      background-color: #0086ff !important;\n    }\n  "])));t.a=function(e){var t=e.text,n=Object(f.b)().account,a=n?n.substring(0,4)+"..."+n.substring(n.length-4):null,r=Object(b.a)(m.a.createElement(W,null)),c=Object(i.a)(r,1)[0],o=Object(u.useState)(!1),l=Object(i.a)(o,2),s=l[0],d=l[1],p=t||"Connect Wallet";return m.a.createElement("div",null,n?m.a.createElement(R,{color:"primary",variant:"contained",onClick:c},m.a.createElement("p",{style:{color:"#212121",fontSize:"18px"}},m.a.createElement("b",null,a))):m.a.createElement(R,{onClick:function(){d(!0)},color:"primary",variant:"contained"},m.a.createElement("p",{style:{color:"#212121"}},p)),m.a.createElement(C,{open:s,handleClose:function(){d(!1)}}))}},965:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a,r=n(44),c=n(0),o=n.n(c),l=n(36).d.div(a||(a=Object(r.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: ","px;\n"])),(function(e){return e.theme.spacing[4]})),i=function(e){var t=e.children;return o.a.createElement(l,null,t)}},975:function(e,t,n){e.exports=n.p+"static/media/metamask-fox.c06f3a3e.svg"}}]);
//# sourceMappingURL=1.198cb7b6.chunk.js.map