(this.webpackJsonpsbp=this.webpackJsonpsbp||[]).push([[0],{246:function(e,t){},255:function(e,t){},273:function(e,t){},275:function(e,t){},294:function(e,t){},295:function(e,t){},358:function(e,t){},360:function(e,t){},393:function(e,t){},395:function(e,t){},396:function(e,t){},401:function(e,t){},403:function(e,t){},409:function(e,t){},411:function(e,t){},424:function(e,t){},436:function(e,t){},439:function(e,t){},444:function(e,t){},452:function(e,t){},461:function(e,t){},463:function(e,t){},533:function(e,t,n){},534:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,i,l,u,d,b,x,p,f,j,h,O,g=n(1),m=n(85),v=n.n(m),y=n(9),C=n.n(y),w=n(15),S=n(14),A=n(17),k=n(59),E=n(69),T=n.n(E),D=n(220),N=n.n(D),R=n(70),_=n(221),W=n(21),P={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(W.a)(Object(W.a)({},P),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(W.a)(Object(W.a)({},P),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(W.a)(Object(W.a)({},e),{},{account:t.payload.account});default:return e}},M={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(W.a)(Object(W.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(W.a)(Object(W.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(W.a)(Object(W.a)({},M),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},K=Object(R.b)({blockchain:z,data:I}),U=[_.a],L=Object(R.c)(R.a.apply(void 0,U)),V=Object(R.d)(K,L),Y=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},B=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,V.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(Y("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},F=function(e){return{type:"CONNECTION_FAILED",payload:e}},H=function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(B());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},$=n(18),Q=$.a.div(c||(c=Object(A.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),q=$.a.div(r||(r=Object(A.a)(["\n  height: 8px;\n  width: 8px;\n"]))),G=$.a.div(a||(a=Object(A.a)(["\n  height: 16px;\n  width: 16px;\n"]))),J=$.a.div(o||(o=Object(A.a)(["\n  height: 24px;\n  width: 24px;\n"]))),X=$.a.div(s||(s=Object(A.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Z=$.a.div(i||(i=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),ee=$.a.p(l||(l=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),te=($.a.p(u||(u=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),$.a.p(d||(d=Object(A.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n  word-break: break-all;\n  white-space: break-spaces;\n"])))),ne=($.a.div(b||(b=Object(A.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(2)),ce=$.a.button(x||(x=Object(A.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--hotpink);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--accent-text);\n  width: 120px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),re=($.a.button(p||(p=Object(A.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),$.a.div(f||(f=Object(A.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: column;\n  justify-content: stretched;\n  // align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n    justify-content: center;\n  }\n"])),(function(e){var t=e.flex;return t||0}))),ae=$.a.img(j||(j=Object(A.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),oe=($.a.img(h||(h=Object(A.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),$.a.a(O||(O=Object(A.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n  word-break: break-all;\n  white-space: break-spaces;\n"]))));var se=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.blockchain})),n=Object(k.c)((function(e){return e.data})),c=Object(g.useState)(!1),r=Object(S.a)(c,2),a=r[0],o=r[1],s=Object(g.useState)(!1),i=Object(S.a)(s,2),l=i[0],u=i[1],d=Object(g.useState)(!1),b=Object(S.a)(d,2),x=b[0],p=b[1],f=Object(g.useState)("Playing with puppy..."),j=Object(S.a)(f,2),h=j[0],O=j[1],m=Object(g.useState)(""),v=Object(S.a)(m,2),y=v[0],A=v[1],E=Date.now(),D=Math.floor(E/1e3),R=Object(g.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),_=Object(S.a)(R,2),W=_[0],P=_[1],z=function(){""!==t.account&&null!==t.smartContract&&e(B(t.account))},M=Object(g.useState)(0),I=Object(S.a)(M,2),K=I[0],U=I[1],L=Object(g.useState)("none"),V=Object(S.a)(L,2),Y=V[0],$=V[1],se=Object(g.useState)(0),ie=Object(S.a)(se,2),le=ie[0],ue=ie[1],de=Object(g.useState)(0),be=Object(S.a)(de,2),xe=be[0],pe=be[1],fe=Object(g.useState)(0),je=Object(S.a)(fe,2),he=je[0],Oe=je[1],ge=Object(g.useState)(0),me=Object(S.a)(ge,2),ve=me[0],ye=me[1],Ce=Object(g.useState)(),we=Object(S.a)(Ce,2),Se=we[0],Ae=we[1],ke=Object(g.useState)(0),Ee=Object(S.a)(ke,2),Te=Ee[0],De=Ee[1],Ne=Object(g.useState)(0),Re=Object(S.a)(Ne,2),_e=Re[0],We=Re[1],Pe=Object(g.useState)("none"),ze=Object(S.a)(Pe,2),Me=ze[0],Ie=ze[1],Ke=Object(g.useState)("none"),Ue=Object(S.a)(Ke,2),Le=Ue[0],Ve=Ue[1],Ye=Object(g.useState)("none"),Be=Object(S.a)(Ye,2),Fe=Be[0],He=Be[1],$e=Object(g.useState)(0),Qe=Object(S.a)($e,2),qe=Qe[0],Ge=Qe[1],Je=Object(g.useState)(0),Xe=Object(S.a)(Je,2),Ze=Xe[0],et=Xe[1];Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,tt();case 3:n=e.sent,U(n/Math.pow(10,18)),e.next=8;break;case 7:U("Connect Wallet Please");case 8:case"end":return e.stop()}}),e)}))));var tt=function(){var e=Object(w.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.smartContract.methods.balanceOf(t.account).call();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.voteDescription().call();case 3:n=e.sent,$(n),e.next=8;break;case 7:$("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.allowance(t.account,W.CONTRACT_ADDRESS).call();case 3:n=e.sent,et(n),e.next=8;break;case 7:et(0);case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.YourUnclaimedVotes(t.account).call();case 3:n=e.sent,ue(n),e.next=8;break;case 7:ue("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.TotalVotes().call();case 3:n=e.sent,pe(n),e.next=8;break;case 7:pe("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.voteAccepts().call();case 3:n=e.sent,Oe(n),e.next=8;break;case 7:Oe("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.voteRejects().call();case 3:n=e.sent,ye(n),e.next=8;break;case 7:ye("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=10;break}return e.next=3,t.smartContract.methods.votestartblock().call();case 3:return n=e.sent,e.next=6,t.smartContract.methods.voteendblock().call();case 6:c=e.sent,Ae(n<D&&D<c?"true":"false"),e.next=11;break;case 10:Ae("Connect WalletPlease");case 11:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=7;break}return e.next=3,t.smartContract.methods.voteresults().call();case 3:n=e.sent,Ie(n),e.next=8;break;case 7:Ie("Connect WalletPlease");case 8:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=10;break}return e.next=3,t.smartContract.methods.votestartblock().call();case 3:n=e.sent,De(n),c=new Date(1e3*n),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}).format(c),Ve(r),e.next=11;break;case 10:De("Connect WalletPlease");case 11:case"end":return e.stop()}}),e)})))),Object(g.useEffect)(Object(w.a)(C.a.mark((function e(){var n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===t.account||null===t.smartContract){e.next=10;break}return e.next=3,t.smartContract.methods.voteendblock().call();case 3:n=e.sent,We(n),c=new Date(1e3*n),r=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric"}).format(c),He(r),e.next=11;break;case 10:We("Connect WalletPlease");case 11:case"end":return e.stop()}}),e)}))));var nt,ct,rt=function(){var e=Object(w.a)(C.a.mark((function e(){var t,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,P(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.useEffect)((function(){rt()}),[]),Object(g.useEffect)((function(){z()}),[t.account]),Object(ne.jsx)(Q,{children:Object(ne.jsxs)(Z,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--yellow)"},image:W.SHOW_BACKGROUND?"/config/images/bg.png":null,children:[Object(ne.jsx)(ae,{alt:"logo",src:"/config/images/logo.png"}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(re,{children:[Object(ne.jsx)(oe,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",color:"var(--primary)"},target:"_self",href:"https://shibapad.finance",children:"MainPage"})," \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(ne.jsx)(oe,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",color:"var(--primary)"},target:"_self",href:"https://dash.shibapad.finance/",children:"Dashboard"})]}),Object(ne.jsxs)(re,{flex:1,style:{padding:24},test:!0,children:[Object(ne.jsxs)(Z,{flex:2,ai:"center",style:{backgroundColor:"var(--accent)",padding:20,borderRadius:24,border:"4px dashed var(--secondary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:15,fontWeight:"bold",color:"var(--primary)"},children:[h,Object(ne.jsx)(G,{})]}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--secondary-text)"},children:["Contract address :\xa0",Object(ne.jsx)(oe,{target:"_blank",href:W.SCAN_LINK,children:(nt=W.CONTRACT_ADDRESS,nt.length>ct?"".concat(nt.substring(0,ct),"..."):nt)})]}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Wallet : ",t.account]}),Object(ne.jsx)(G,{}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:["Your $SBP : ",K]}),Number(K)<1?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"You have no more vote Power."}),Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can buy ",W.token_NAME," on Pancakeswap."]}),Object(ne.jsx)(G,{}),Object(ne.jsx)(oe,{target:"_blank",href:W.MARKETPLACE_LINK,children:W.MARKETPLACE})]}):Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"1 $SBP = 1 Vote"}),Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(ee,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Note : You can't withdraw your tokens before vote ends"}),Object(ne.jsx)(J,{}),""===t.account||null===t.smartContract?Object(ne.jsxs)(Z,{ai:"center",jc:"center",children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",W.NETWORK.NAME," network"]}),Object(ne.jsx)(G,{}),Object(ne.jsx)(ce,{onClick:function(t){t.preventDefault(),e(function(){var e=Object(w.a)(C.a.mark((function e(t){var n,c,r,a,o,s,i,l,u;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:if(a=e.sent,o=window,!(s=o.ethereum)||!s.isMetaMask){e.next=33;break}return T.a.setProvider(s),i=new N.a(s),e.prev=18,e.next=21,s.request({method:"eth_requestAccounts"});case 21:return l=e.sent,e.next=24,s.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(u=new T.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:u,web3:i}}),s.on("accountsChanged",(function(e){t(H(e[0]))})),s.on("chainChanged",(function(){window.location.reload()}))):t(F("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(F("Something went wrong."));case 31:e.next=34;break;case 33:t(F("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),z()},children:"CONNECT"}),""!==t.errorMsg?Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(G,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(ne.jsxs)(ne.Fragment,{children:[Object(ne.jsx)(G,{}),Object(ne.jsxs)(Z,{flex:1,ai:"center",jc:"center",style:{flex:1,backgroundColor:"var(--primary)",marginLeft:40,marginRight:40,padding:60,borderRadius:24,border:"4px dashed var(--primary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)",maxWidth:500},children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:30,fontWeight:"bold",color:"var(--accent-text)"},children:["Vote Description : ",Y]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:["Is vote running? : ",Se]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:["Starts : \xa0",Le]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:18,fontWeight:"bold",color:"var(--secondary)"},children:["(TimeStamp : ",Te,")"]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:18,fontWeight:"bold",color:"var(--accent-text)"},children:["Ends : \xa0",Fe]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--secondary)"},children:["(TimeStamp : ",_e,")"]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:"Vote amount"}),Object(ne.jsx)("input",{type:"text",onKeyPress:function(e){/[0-9]/.test(e.key)||e.preventDefault()},value:qe,onInput:function(e){return Ge(e.target.value)},style:{padding:5,borderRadius:24,border:"4px dashed var(--accent)",textAlign:"center",fontSize:20,color:"var(--accent)",width:"300px"}}),Object(ne.jsx)(G,{}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:20,color:"var(--accent-text)"},children:y}),Object(ne.jsxs)(Z,{flex:1,ai:"center",jc:"center",fd:"row",style:{backgroundColor:"var(--primary)",padding:5,borderRadius:24,border:""},children:[Object(ne.jsx)(ce,{disabled:a?1:0,onClick:function(n){n.preventDefault(),O("Voting..."),o(!0),t.smartContract.methods.VoteAccept(qe).send({to:W.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),O("Sorry, something went wrong please try again later."),o(!1),A("Did you cancel transaction? Or check the vote is running etc")})).then((function(n){console.log(n),O("Your vote succesfully confirmed."),o(!1),A(""),e(B(t.account))})),z()},children:a?"BUSY":"VOTE ACCEPT"}),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",Object(ne.jsx)(ce,{disabled:a?1:0,onClick:function(n){n.preventDefault(),O("Voting..."),o(!0),t.smartContract.methods.VoteReject(qe).send({to:W.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),O("Sorry, something went wrong please try again later."),A("Did you cancel transaction? Or check the vote is running etc"),o(!1)})).then((function(n){console.log(n),O("Your vote succesfully confirmed."),A(""),o(!1),e(B(t.account))})),z()},children:a?"BUSY":"VOTE REJECT"})]}),Object(ne.jsx)(G,{}),Object(ne.jsx)(ce,{hidden:Ze>0?1:0,onClick:function(n){n.preventDefault(),O("Approving $SBP to vote..."),t.smartContract.methods.approveMax(W.CONTRACT_ADDRESS).send({to:W.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),O("Sorry, something went wrong please try again later.")})).then((function(n){console.log(n),O("Your tokens are approved."),e(B(t.account))})),z()},children:Ze>0?"Approved":"Approve"}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:Ze>0?"your $SBP tokens are Approved":"Approve $SBP before Vote / Withdrawl"}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:20,fontWeight:"bold",color:"var(--accent-text)"},children:["Your voted tokens : ",le]}),Object(ne.jsx)(G,{}),Object(ne.jsx)(ce,{disabled:x?1:0,onClick:function(n){n.preventDefault(),O("Withdrawing..."),p(!0),t.smartContract.methods.ClaimVotetokens().send({to:W.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),O("Sorry, something went wrong please try again later."),A("Did you cancel transaction? Or check the vote is settled etc"),p(!1)})).then((function(n){console.log(n),O("Your withdrawal is successful."),p(!1),e(B(t.account))})),z()},children:x?"BUSY":"Withdraw All Votes"})]}),Object(ne.jsx)(X,{}),Object(ne.jsx)(X,{}),Object(ne.jsxs)(Z,{flex:1,ai:"center",jc:"center",style:{flex:1,backgroundColor:"var(--primary)",marginLeft:40,marginRight:40,padding:60,borderRadius:24,border:"4px dashed var(--primary)",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)",maxWidth:500},children:[Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:["Total votes : ",xe]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:["Total Accepts : ",he]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:["Total Rejects : ",ve]}),Object(ne.jsx)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:"threshold to settle :"}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:[n.totalSupply/5/Math.pow(10,18)," votes"]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:[n.totalSupply/5/Math.pow(10,18)," votes"]}),Object(ne.jsx)(q,{}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:["is Vote Running? : ",Se]}),Object(ne.jsxs)(ee,{style:{textAlign:"center",fontSize:25,fontWeight:"bold",color:"var(--accent-text)"},children:["VoteResult : ",Me]}),Object(ne.jsx)(J,{}),Object(ne.jsx)(ce,{disabled:l?1:0,onClick:function(n){n.preventDefault(),O("Withdrawing..."),u(!0),t.smartContract.methods.closevote().send({to:W.CONTRACT_ADDRESS,from:t.account}).once("error",(function(e){console.log(e),O("Sorry, something went wrong please try again later."),u(!1)})).then((function(n){console.log(n),O("Vote is Settled."),u(!1),e(B(t.account))})),z()},children:l?"BUSY":"Settle Vote"})]})]})]}),Object(ne.jsx)(J,{})]}),Object(ne.jsx)(X,{})]}),Object(ne.jsx)(J,{}),Object(ne.jsxs)(Z,{jc:"center",ai:"center",style:{width:"70%"},children:[Object(ne.jsxs)(te,{style:{textAlign:"center",color:"var(--primary-text)"},children:["Please make sure you are connected to the right network (",W.NETWORK.NAME," Mainnet). Note : Once you settle your vote, you can't withdraw it before the vote is end."]}),Object(ne.jsx)(G,{}),Object(ne.jsx)(te,{style:{textAlign:"center",color:"var(--primary-text)"}})]})]})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,538)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};n(533);v.a.render(Object(ne.jsx)(k.a,{store:V,children:Object(ne.jsx)(se,{})}),document.getElementById("root")),ie()}},[[534,1,2]]]);
//# sourceMappingURL=main.54ba6de4.chunk.js.map