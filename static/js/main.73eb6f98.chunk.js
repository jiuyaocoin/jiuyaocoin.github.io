(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{432:function(e,t,a){},949:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(38),i=a.n(l),o=(a(432),a(271),a(161)),u=a(81),s=a.n(u),m=a(128),d=a(197),p=a(50),f=a(406),g=(a(216),a(83)),b=(a(165),a(33)),E=(a(275),a(67)),h=(a(164),a(51)),v=(a(273),a(115)),x=a(82),y=a.n(x),j=a(419),O=(a(950),a(424)),w=a(199),_=a(214),N=a(407),I=a.n(N),S=function(e){return Number(e)>=0?"green":Number(e)<0?"red":"grey"},k=function(e){return Number(e)>=0?"+".concat(e):e},D=function(e){return Number(e)>=0},L=function(e,t){var a=e.toString(),n=a.indexOf(".");for(n<0&&(n=a.length,a+=".");a.length<=n+t;)a+="0";return a},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.pow(10,t);if(Number(e)>0){var n=Math.floor(Number(e)*a)/a;return L(n,t)}var r=Math.ceil(Number(e)*a)/a;return L(r,t)},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD";return I()(new Date(e)).format(t)},M=function(e){var t=e.title,a=void 0===t?"title":t,n=e.value,r=void 0===n?0:n,l=e.percision,i=void 0===l?2:l,o=e.isNormal,u=void 0===o||o,s=Object(_.a)(e,["title","value","percision","isNormal"]);return c.a.createElement(O.a,Object(w.a)({title:a,value:r,precision:i,valueStyle:{color:function(e,t){return e||"--"===t?"#000":t>=0?"#389e0d":"#cf1322"}(u,r),fontWeight:600},prefix:!u&&D(r)?"+":""},s))},R=function(e){var t=e.timestamp,a=e.pps,n=t?F(new Date(1e3*t)):"--";return c.a.createElement(M,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(n,"\uff09"),value:a||0,precision:4,suffix:"USD"})},A=function(e){var t,a=e.title,n=e.value;return t="--"===n?n:isNaN(n)?0:100*n,c.a.createElement(M,{title:a,value:t,precision:2,suffix:"%",isNormal:!1})},C=a(158),Y=a(98),z=a.n(Y),T=a(426),U=function(e){var t=e.className,a=void 0===t?"":t,n=e.style,l=void 0===n?{}:n,i=e.option,o=void 0===i?{}:i,u=e.showLoading,s=void 0!==u&&u,m=e.loadingOption,d=void 0===m?{}:m,p=Object(_.a)(e,["className","style","option","showLoading","loadingOption"]),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=z.a.getInstanceByDom(f.current)||z.a.init(f.current);return e.setOption(o),function(){z.a.dispose(e)}}),[o,f]),Object(T.a)(f,(function(e){(z.a.getInstanceByDom(f.current)||z.a.init(f.current)).resize()})),Object(r.useEffect)((function(){var e=z.a.getInstanceByDom(f.current)||z.a.init(f.current);s?e.showLoading("default",d):e.hideLoading()}),[s,d]),c.a.createElement("div",Object(w.a)({ref:f,className:"react-echarts ".concat(a),style:Object(C.a)({height:"300px",width:"600px"},l)},p))},K=function(e){var t=e.option,a=e.showLoading,n=void 0===a||a,r=e.height;return c.a.createElement(U,{option:t,style:{height:r||"350px",width:"100%"},showLoading:n,loadingOption:{text:"\u52a0\u8f7d\u4e2d...",color:"rgb(74,151,247)",zlevel:0}})},P={all:0,"1m":30,"3m":90,"6m":180,"12m":360},H="https://raw.githubusercontent.com/share-fund/fund-data/main",J=function(e){var t=e.fundManager,a=e.fundCode,n=e.dateRange,c=Object(r.useState)([]),l=Object(p.a)(c,2),i=l[0],o=l[1],u=Object(r.useState)([]),d=Object(p.a)(u,2),f=d[0],g=d[1],b=Object(r.useState)(!0),E=Object(p.a)(b,2),h=E[0],v=E[1];return Object(r.useEffect)((function(){var e="".concat(H,"/").concat(t,"/").concat(a,"/raw/btc_price.json"),r="".concat(H,"/").concat(t,"/").concat(a,"/").concat(n,".json");return function(){var t=Object(m.a)(s.a.mark((function t(){var a,c,l,i,u,m,d,f;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([y.a.get(e),y.a.get(r)]);case 2:a=t.sent,c=Object(p.a)(a,2),l=c[0].data,i=c[1].data,u=l.slice(-1*P[n]),m=u[0][1],d=i.map((function(e){return[1e3*e[0],100*e[2]]})),f=u.map((function(e){return[1e3*e[0],100*(e[1]/m-1)]})),o(d),g(f),v(!1);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){o([]),g([]),v(!0)}}),[t,a,n]),{income:i,handleIncome:f,isLoading:h}},W=function(e){var t=e.fundManager,a=e.fundCode,n=e.height,r=void 0===n?360:n,l=e.dateRange,i=J({fundManager:t,fundCode:a,dateRange:void 0===l?"all":l}),o=i.income,u=i.handleIncome,s=i.isLoading,m={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=F(t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(B(n.data[1],2),"%"):"--",l=r?"".concat(B(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(l,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?o:u;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(k(B(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:o,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#fa541c"}},{name:"BTCUSD",type:"line",data:u,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]};return c.a.createElement(K,{option:m,showLoading:s,height:r})},G=(a(951),a(423)),V=a(411),q=a.n(V),Q=a(412),X=a.n(Q),Z=function(e){var t=e.fund,a=Object(r.useState)("\u52a0\u8f7d\u4e2d..."),n=Object(p.a)(a,2),l=n[0],i=n[1];return Object(r.useEffect)((function(){t.manager&&t.code&&fetch("".concat("https://raw.githubusercontent.com/share-fund/fund-data/main","/").concat(t.manager,"/").concat(t.code,"/description.md")).then((function(e){return e.text()})).then((function(e){i(e)}))}),[t]),c.a.createElement(G.a,null,c.a.createElement(q.a,{plugins:[X.a],children:l}))},$=(a(394),a(53)),ee=function(e){var t=e.statistic,a=function(e){return k(B(100*e||0,2))};return c.a.createElement($.b,{bordered:!0,column:1,size:"small"},c.a.createElement($.b.Item,{label:"\u8fd11\u6708"},c.a.createElement("span",{className:S(t.last_1m_pnl_rate||0)},a(t.last_1m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd13\u6708"},c.a.createElement("span",{className:S(t.last_3m_pnl_rate||0)},a(t.last_3m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd16\u6708"},c.a.createElement("span",{className:S(t.last_6m_pnl_rate||0)},a(t.last_6m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd11\u5e74"},c.a.createElement("span",{className:S(t.last_12m_pnl_rate||0)},a(t.last_12m_pnl_rate)," %")))},te=(a(405),a(162)),ae=a(425),ne=function(e){var t=e.data,a=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u51c0\u503c",dataIndex:"value",key:"value",render:function(e){return e}},{title:"\u65e5\u6da8\u5e45",dataIndex:"incomeRate",key:"incomeRate",render:function(e){return c.a.createElement("span",{className:S(e)},k(B(e,2)),"%")}}];return c.a.createElement(te.a,{columns:a,dataSource:function(e){return e.length>0?e.map((function(e){return{date:F(1e3*e[0]),value:B(e[1],4),incomeRate:100*e[3],key:e[0]}})):[]}(Object(ae.a)(t).reverse()),pagination:{simple:!0}})},re=function(e){var t=e.metrics;return c.a.createElement($.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"}},c.a.createElement($.b.Item,{label:"\u65e5\u80dc\u7387"},t.strategy&&(100*t.strategy.daily_winning_ratio).toFixed(2)||"--"," %"),c.a.createElement($.b.Item,{label:"\u5e74\u5316\u6ce2\u52a8\u7387"},t.strategy&&(100*t.strategy.annual_volatility).toFixed(2)||"--"," %"),c.a.createElement($.b.Item,{label:"Alpha"},t.strategy&&t.strategy.alpha.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"Beta"},t.strategy&&t.strategy.beta.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u590f\u666e\u6bd4\u7387"},t.strategy&&t.strategy.sharpe_ratio.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u7d22\u63d0\u8bfa\u6bd4\u7387"},t.strategy&&t.strategy.sortino_ratio.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u6700\u5927\u56de\u64a4\u7387"},t.strategy&&(100*t.strategy.max_drawdown).toFixed(2)||"--"," %"))},ce=(a(403),a(212)),le=function(e){var t,a=e.metrics,n=e.statistic,r=e.fundName,l=e.showAnnualReturn,i=void 0!==l&&l,o=e.status;return c.a.createElement(b.a,{xs:24},c.a.createElement(g.a,{title:c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("span",{style:{marginRight:"20px"}},r)),extra:c.a.createElement(c.a.Fragment,null,c.a.createElement(ce.a,{color:"default"},function(e){return"stopped"===e?"\u5df2\u7ed3\u675f":"prepare"===e?"\u5f85\u542f\u52a8":"running"===e?"\u8fd0\u884c\u4e2d":"\u5df2\u7ed3\u675f"}(o)))},c.a.createElement(h.a,null,c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:(t=i,t?a.strategy&&a.strategy.annual_return:"--")})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:n.pnl_rate})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(R,{timestamp:n.timestamp,pps:n.pps})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(A,{title:"\u6628\u65e5\u6da8\u8dcc",value:n.last_day_pnl_rate})),c.a.createElement(b.a,{sm:4,xs:12},c.a.createElement(M,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})))))},ie=a(26),oe=a(418),ue=a.n(oe),se=o.a.Content,me=v.a.TabPane,de="https://raw.githubusercontent.com/share-fund/fund-data/main",pe=Object(j.a)((function(e){var t,a=e.className,n=e.data,l=Object(r.useState)([]),i=Object(p.a)(l,2),u=i[0],d=i[1],f=Object(r.useState)({}),x=Object(p.a)(f,2),j=x[0],O=x[1],w=Object(r.useState)({}),_=Object(p.a)(w,2),N=_[0],I=_[1],S=Object(r.useState)("all"),k=Object(p.a)(S,2),D=k[0],L=k[1],B=Object(ie.f)().search,F=ue.a.parse(B.replace("?","")),M=F.code,R=F.manager,A=(null===(t=n[R])||void 0===t?void 0:t.funds)?n[R].funds.find((function(e){return e.code===M})):{};A.manager=R;var C=A.showAnnualReturn,Y=A.status;Object(r.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([y.a.get("".concat(de,"/").concat(R,"/").concat(M,"/all.json")),y.a.get("".concat(de,"/").concat(R,"/").concat(M,"/statistic.json")),y.a.get("".concat(de,"/").concat(R,"/").concat(M,"/metrics.json"))]);case 2:t=e.sent,a=Object(p.a)(t,3),n=a[0].data,r=a[1].data,c=a[2].data,I(c),d(n),O(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[M,R]);return c.a.createElement(o.a,{className:a},c.a.createElement(se,null,c.a.createElement(h.a,{className:"content",gutter:24},c.a.createElement(le,{fundName:A.name,metrics:N,statistic:j,showAnnualReturn:C,status:Y})),c.a.createElement(h.a,{className:"content",gutter:24},c.a.createElement(b.a,{sm:15,xs:24},c.a.createElement(g.a,{title:"\u4e1a\u7ee9\u8d70\u52bf"},c.a.createElement(h.a,null,c.a.createElement(b.a,{xs:24,style:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(r.useMemo)((function(){return c.a.createElement(W,{fundManager:R,fundCode:M,dateRange:D})}),[M,D,R]),c.a.createElement(E.a.Group,{defaultValue:"all",buttonStyle:"solid",onChange:function(e){L(e.target.value)},style:{marginTop:"10px"}},c.a.createElement(E.a.Button,{value:"1m"},"\u8fd11\u6708"),c.a.createElement(E.a.Button,{value:"3m"},"\u8fd13\u6708"),c.a.createElement(E.a.Button,{value:"6m"},"\u8fd16\u6708"),c.a.createElement(E.a.Button,{value:"12m"},"\u8fd11\u5e74"),c.a.createElement(E.a.Button,{value:"all"},"\u6240\u6709")))))),c.a.createElement(b.a,{sm:9,xs:24},c.a.createElement(g.a,{title:"\u7edf\u8ba1\u6307\u6807"},c.a.createElement(re,{metrics:N})))),c.a.createElement(h.a,{className:"content",gutter:24},c.a.createElement(b.a,{sm:15,xs:24},c.a.createElement(g.a,{className:"p-t-0"},c.a.createElement(v.a,{defaultActiveKey:"1",style:{background:"#fff"},size:"large"},c.a.createElement(me,{tab:"\u9879\u76ee\u7b80\u4ecb",key:"1"},c.a.createElement(Z,{fund:A}))))),c.a.createElement(b.a,{sm:9,xs:24},c.a.createElement(g.a,{className:"p-t-0"},c.a.createElement(v.a,{defaultActiveKey:"1",size:"large"},c.a.createElement(me,{tab:"\u5386\u53f2\u4e1a\u7ee9",key:"1"},c.a.createElement(ee,{statistic:j})),c.a.createElement(me,{tab:"\u5386\u53f2\u51c0\u503c",key:"2"},c.a.createElement(ne,{data:u}))))))))}))(n||(n=Object(f.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .p-t-0 {\n    padding-top: 0;\n    .ant-card-body {\n      padding-top: 0;\n    }\n  }\n  .content {\n    padding-top: 24px;\n    max-width: 1200px;\n    margin: 0 auto !important;\n  }\n  .title-p-t-10 {\n    padding-top: 20px;\n  }\n"]))),fe=a(127),ge=a(422),be=a.n(ge),Ee=function(e){var t=e.data,a=Object.keys(t),n=[{title:"\u540d\u79f0",dataIndex:"name",key:"name",render:function(e,t){var a=t.code,n=t.manager;return"prepare"===t.status?e:c.a.createElement(fe.b,{to:"details?code=".concat(a,"&manager=").concat(n)},e)}},{title:"\u65e5\u671f",dataIndex:"data",render:function(e){return be()(+new Date(e.datetime)).format("YYYY-MM-DD")}},{title:"\u6700\u65b0\u51c0\u503c",dataIndex:"data",render:function(e){return e.pps}},{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",dataIndex:"data",render:function(e){return c.a.createElement("span",{className:e.cum_pnl_rate>=0?"green":"red"},(100*e.cum_pnl_rate).toFixed(2)," %")}},{title:"\u6628\u65e5\u6da8\u8dcc",dataIndex:"data",render:function(e){return c.a.createElement("span",{className:e.daily_pnl_rate>=0?"green":"red"},(100*e.daily_pnl_rate).toFixed(2)," %")}},{title:"\u72b6\u6001",key:"status",dataIndex:"status",render:function(e){var t="running"===e?"green":"default";return c.a.createElement(ce.a,{color:t,key:e},function(e){switch(e){case"prepare":return"\u5f85\u542f\u52a8";case"running":return"\u8fd0\u884c\u4e2d";case"done":return"\u5df2\u7ed3\u675f";default:return"\u672a\u77e5"}}(e))}}],r=function(e,t){return e.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{manager:t})}))};return c.a.createElement("div",{style:{maxWidth:"1200px",margin:"24px auto",width:"100%"}},a.map((function(e){return c.a.createElement(h.a,{key:t[e].name,gutter:[24,24],style:{margin:"24px auto"}},c.a.createElement(b.a,{xs:24},c.a.createElement(g.a,{title:t[e].name},t[e].funds.filter((function(e){return"prepare"===e.status||"running"===e.status})).length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement(te.a,{rowKey:"code",columns:n,dataSource:r(t[e].funds.filter((function(e){return"prepare"===e.status||"running"===e.status})),e),pagination:!1})),t[e].funds.filter((function(e){return"done"===e.status})).length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{style:{marginTop:"48px"}},"\u5f80\u671f\u9879\u76ee"),c.a.createElement(te.a,{rowKey:"code",columns:n,dataSource:r(t[e].funds.filter((function(e){return"done"===e.status||"done"===e.status})),e),pagination:!1})))))})))},he=function(e){var t=e.url;return c.a.createElement("div",{style:{background:"#0A1825",height:"56px",lineHeight:"56px"}},c.a.createElement("a",{href:"/"},c.a.createElement("img",{style:{height:"26px",padding:"0 16px"},src:t,alt:"logo"})))},ve=function(e){var t=e.url,a=t?"url(".concat(t,") center center / cover"):"#000";return c.a.createElement("div",{style:{height:"300px",background:a}})},xe="jiuyao",ye=function(){var e=Object(r.useState)({}),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("https://raw.githubusercontent.com/share-fund/fund-data/main","/list.json"));case 2:t=e.sent,n((a=t.data).jiuyao?Object(d.a)({},xe,a.jiuyao):{});case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(o.a,null,c.a.createElement(he,{url:"https://raw.githubusercontent.com/share-fund/fund-assets/main/".concat(xe,"/logo.png")}),c.a.createElement(ie.c,null,c.a.createElement(ie.a,{path:"/",element:c.a.createElement(ve,{url:"https://raw.githubusercontent.com/share-fund/fund-assets/main/".concat(xe,"/banner.png")})})),c.a.createElement(ie.c,null,c.a.createElement(ie.a,{path:"/",element:c.a.createElement(Ee,{data:a})}),c.a.createElement(ie.a,{path:"/details",element:c.a.createElement(pe,{data:a})})))},je=a(62),Oe=Object(je.c)();i.a.render(c.a.createElement(fe.a,{history:Oe},c.a.createElement(ye,null)),document.getElementById("root"))}},[[949,1,2]]]);