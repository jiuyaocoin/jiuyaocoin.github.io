(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{431:function(e,t,a){},948:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(38),i=a.n(l),o=(a(431),a(270),a(161)),s=a(81),u=a.n(s),m=a(128),d=a(196),p=a(50),f=a(406),g=(a(216),a(83)),b=(a(164),a(33)),E=(a(274),a(67)),v=(a(163),a(51)),h=(a(272),a(115)),y=a(82),x=a.n(y),j=a(419),O=(a(949),a(423)),w=a(198),_=a(214),N=a(407),S=a.n(N),I=function(e){return Number(e)>=0?"green":Number(e)<0?"red":"grey"},k=function(e){return Number(e)>=0?"+".concat(e):e},L=function(e){return Number(e)>=0},D=function(e,t){var a=e.toString(),n=a.indexOf(".");for(n<0&&(n=a.length,a+=".");a.length<=n+t;)a+="0";return a},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Math.pow(10,t);if(Number(e)>0){var n=Math.floor(Number(e)*a)/a;return D(n,t)}var r=Math.ceil(Number(e)*a)/a;return D(r,t)},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY/MM/DD";return S()(new Date(e)).format(t)},A=function(e){var t=e.title,a=void 0===t?"title":t,n=e.value,r=void 0===n?0:n,l=e.percision,i=void 0===l?2:l,o=e.isNormal,s=void 0===o||o,u=Object(_.a)(e,["title","value","percision","isNormal"]);return c.a.createElement(O.a,Object(w.a)({title:a,value:r,precision:i,valueStyle:{color:function(e,t){return e||"--"===t?"#000":t>=0?"#389e0d":"#cf1322"}(s,r),fontWeight:600},prefix:!s&&L(r)?"+":""},u))},M=function(e){var t=e.timestamp,a=e.pps,n=t?R(new Date(1e3*t)):"--";return c.a.createElement(A,{title:"\u6700\u65b0\u51c0\u503c\uff08".concat(n,"\uff09"),value:a||0,precision:4,suffix:"USD"})},C=function(e){var t,a=e.title,n=e.value;return t="--"===n?n:isNaN(n)?0:100*n,c.a.createElement(A,{title:a,value:t,precision:2,suffix:"%",isNormal:!1})},F=a(158),z=a(98),T=a.n(z),U=a(425),Y=function(e){var t=e.className,a=void 0===t?"":t,n=e.style,l=void 0===n?{}:n,i=e.option,o=void 0===i?{}:i,s=e.showLoading,u=void 0!==s&&s,m=e.loadingOption,d=void 0===m?{}:m,p=Object(_.a)(e,["className","style","option","showLoading","loadingOption"]),f=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=T.a.getInstanceByDom(f.current)||T.a.init(f.current);return e.setOption(o),function(){T.a.dispose(e)}}),[o,f]),Object(U.a)(f,(function(e){(T.a.getInstanceByDom(f.current)||T.a.init(f.current)).resize()})),Object(r.useEffect)((function(){var e=T.a.getInstanceByDom(f.current)||T.a.init(f.current);u?e.showLoading("default",d):e.hideLoading()}),[u,d]),c.a.createElement("div",Object(w.a)({ref:f,className:"react-echarts ".concat(a),style:Object(F.a)({height:"300px",width:"600px"},l)},p))},K=function(e){var t=e.option,a=e.showLoading,n=void 0===a||a,r=e.height;return c.a.createElement(Y,{option:t,style:{height:r||"350px",width:"100%"},showLoading:n,loadingOption:{text:"\u52a0\u8f7d\u4e2d...",color:"rgb(74,151,247)",zlevel:0}})},P={all:0,"1m":30,"3m":90,"6m":180,"12m":360},J="https://raw.githubusercontent.com/share-fund",W=function(e){var t=e.fundManager,a=e.fundCode,n=e.dateRange,c=Object(r.useState)([]),l=Object(p.a)(c,2),i=l[0],o=l[1],s=Object(r.useState)([]),d=Object(p.a)(s,2),f=d[0],g=d[1],b=Object(r.useState)(!0),E=Object(p.a)(b,2),v=E[0],h=E[1];return Object(r.useEffect)((function(){var e="".concat(J,"/").concat(t,"/main/").concat(a,"/raw/btc_price.json"),r="".concat(J,"/").concat(t,"/main/").concat(a,"/").concat(n,".json");return function(){var t=Object(m.a)(u.a.mark((function t(){var a,c,l,i,s,m,d,f;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([x.a.get(e),x.a.get(r)]);case 2:a=t.sent,c=Object(p.a)(a,2),l=c[0].data,i=c[1].data,s=l.slice(-1*P[n]),m=s[0][1],d=i.map((function(e){return[1e3*e[0],100*e[2]]})),f=s.map((function(e){return[1e3*e[0],100*(e[1]/m-1)]})),o(d),g(f),h(!1);case 13:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){o([]),g([]),h(!0)}}),[t,a,n]),{income:i,handleIncome:f,isLoading:v}},G=function(e){var t=e.fundManager,a=e.fundCode,n=e.height,r=void 0===n?360:n,l=e.dateRange,i=W({fundManager:t,fundCode:a,dateRange:void 0===l?"all":l}),o=i.income,s=i.handleIncome,u=i.isLoading,m={title:{text:"\u4e1a\u7ee9\u8d70\u52bf",textStyle:{color:"rgba(0, 0, 0, 0.45)",fontSize:"14px"}},animation:!0,tooltip:{trigger:"axis",formatter:function(e){var t=new Date(e[0].data[0]),a=R(t),n=e.find((function(e){return 0===e.seriesIndex})),r=e.find((function(e){return 1===e.seriesIndex})),c=n?"".concat(B(n.data[1],2),"%"):"--",l=r?"".concat(B(r.data[1],2),"%"):"--";return"<span>".concat(a,"</span><br/><span>\u672c\u7b56\u7565\uff1a").concat(c,"</span> <br/> <span>BTCUSD: ").concat(l,"</span>")}},legend:{data:[{name:"\u672c\u7b56\u7565"},{name:"BTCUSD"}],formatter:function(e){var t="\u672c\u7b56\u7565"===e?o:s;return 0===t.length?"".concat(e," +0.00%"):"".concat(e," ").concat(k(B(t[t.length-1][1],2)),"%")},right:0,top:3},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"time",splitLine:{show:!1},axisLine:{lineStyle:{color:"#888"}}},yAxis:{type:"value",axisLabel:{show:!0,formatter:"{value}%"},splitLine:{show:!0},splitNumber:3,axisLine:{lineStyle:{color:"#888"}}},series:[{name:"\u672c\u7b56\u7565",type:"line",data:o,showSymbol:!1,hoverAnimation:!0,itemStyle:{color:"#fa541c"}},{name:"BTCUSD",type:"line",data:s,itemStyle:{color:"rgba(0,0,0,.4)"},showSymbol:!1,hoverAnimation:!0}]};return c.a.createElement(K,{option:m,showLoading:u,height:r})},H=(a(950),a(422)),V=a(411),q=a.n(V),Q=a(412),X=a.n(Q),Z=function(e){var t=e.fund,a=Object(r.useState)("\u52a0\u8f7d\u4e2d..."),n=Object(p.a)(a,2),l=n[0],i=n[1];return Object(r.useEffect)((function(){t.manager&&t.code&&fetch("".concat("https://raw.githubusercontent.com/share-fund/fund-descriptions/main","/").concat(t.manager,"/").concat(t.code,".md")).then((function(e){return e.text()})).then((function(e){i(e)}))}),[t]),c.a.createElement(H.a,null,c.a.createElement(q.a,{plugins:[X.a],children:l}))},$=(a(393),a(53)),ee=function(e){var t=e.statistic,a=function(e){return k(B(100*e||0,2))};return c.a.createElement($.b,{bordered:!0,column:1,size:"small"},c.a.createElement($.b.Item,{label:"\u8fd11\u6708"},c.a.createElement("span",{className:I(t.last_1m_pnl_rate||0)},a(t.last_1m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd13\u6708"},c.a.createElement("span",{className:I(t.last_3m_pnl_rate||0)},a(t.last_3m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd16\u6708"},c.a.createElement("span",{className:I(t.last_6m_pnl_rate||0)},a(t.last_6m_pnl_rate)," %")),c.a.createElement($.b.Item,{label:"\u8fd11\u5e74"},c.a.createElement("span",{className:I(t.last_12m_pnl_rate||0)},a(t.last_12m_pnl_rate)," %")))},te=(a(405),a(210)),ae=a(424),ne=function(e){var t=e.data,a=[{title:"\u65e5\u671f",dataIndex:"date",key:"date"},{title:"\u51c0\u503c",dataIndex:"value",key:"value",render:function(e){return e}},{title:"\u65e5\u6da8\u5e45",dataIndex:"incomeRate",key:"incomeRate",render:function(e){return c.a.createElement("span",{className:I(e)},k(B(e,2)),"%")}}];return c.a.createElement(te.a,{columns:a,dataSource:function(e){return e.length>0?e.map((function(e){return{date:R(1e3*e[0]),value:B(e[1],4),incomeRate:100*e[3],key:e[0]}})):[]}(Object(ae.a)(t).reverse()),pagination:{simple:!0}})},re=function(e){var t=e.metrics;return c.a.createElement($.b,{bordered:!0,column:1,size:"small",style:{minHeight:"400px"}},c.a.createElement($.b.Item,{label:"\u65e5\u80dc\u7387"},t.strategy&&(100*t.strategy.daily_winning_ratio).toFixed(2)||"--"," %"),c.a.createElement($.b.Item,{label:"\u5e74\u5316\u6ce2\u52a8\u7387"},t.strategy&&(100*t.strategy.annual_volatility).toFixed(2)||"--"," %"),c.a.createElement($.b.Item,{label:"Alpha"},t.strategy&&t.strategy.alpha.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"Beta"},t.strategy&&t.strategy.beta.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u590f\u666e\u6bd4\u7387"},t.strategy&&t.strategy.sharpe_ratio.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u7d22\u63d0\u8bfa\u6bd4\u7387"},t.strategy&&t.strategy.sortino_ratio.toFixed(2)||"--"),c.a.createElement($.b.Item,{label:"\u6700\u5927\u56de\u64a4\u7387"},t.strategy&&(100*t.strategy.max_drawdown).toFixed(2)||"--"," %"))},ce=(a(403),a(212)),le=function(e){var t,a=e.metrics,n=e.statistic,r=e.fundName,l=e.showAnnualReturn,i=void 0!==l&&l,o=e.status;return c.a.createElement(b.a,{xs:24},c.a.createElement(g.a,{title:c.a.createElement("div",{style:{display:"flex",alignItems:"center"}},c.a.createElement("span",{style:{marginRight:"20px"}},r)),extra:c.a.createElement(c.a.Fragment,null,c.a.createElement(ce.a,{color:"default"},function(e){return"stopped"===e?"\u5df2\u7ed3\u675f":"prepare"===e?"\u5f85\u542f\u52a8":"running"===e?"\u8fd0\u884c\u4e2d":"\u5df2\u7ed3\u675f"}(o)))},c.a.createElement(v.a,null,c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(C,{title:"\u5386\u53f2\u5e74\u5316\u6536\u76ca\u7387",value:(t=i,t?a.strategy&&a.strategy.annual_return:"--")})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(C,{title:"\u6210\u7acb\u4ee5\u6765\u6536\u76ca\u7387",value:n.pnl_rate})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(M,{timestamp:n.timestamp,pps:n.pps})),c.a.createElement(b.a,{sm:5,xs:12},c.a.createElement(C,{title:"\u6628\u65e5\u6da8\u8dcc",value:n.last_day_pnl_rate})),c.a.createElement(b.a,{sm:4,xs:12},c.a.createElement(A,{title:"\u4ef7\u503c\u672c\u4f4d",value:"USD"})))))},ie=a(26),oe=a(418),se=a.n(oe),ue=o.a.Content,me=h.a.TabPane,de="https://raw.githubusercontent.com/share-fund",pe=Object(j.a)((function(e){var t,a=e.className,n=e.data,l=Object(r.useState)([]),i=Object(p.a)(l,2),s=i[0],d=i[1],f=Object(r.useState)({}),y=Object(p.a)(f,2),j=y[0],O=y[1],w=Object(r.useState)({}),_=Object(p.a)(w,2),N=_[0],S=_[1],I=Object(r.useState)("all"),k=Object(p.a)(I,2),L=k[0],D=k[1],B=Object(ie.f)().search,R=se.a.parse(B.replace("?","")),A=R.code,M=R.manager,C=(null===(t=n[M])||void 0===t?void 0:t.funds)?n[M].funds.find((function(e){return e.code===A})):{};C.manager=M;var F=C.showAnnualReturn,z=C.status;Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([x.a.get("".concat(de,"/").concat(M,"/main/").concat(A,"/all.json")),x.a.get("".concat(de,"/").concat(M,"/main/").concat(A,"/statistic.json")),x.a.get("".concat(de,"/").concat(M,"/main/").concat(A,"/metrics.json"))]);case 2:t=e.sent,a=Object(p.a)(t,3),n=a[0].data,r=a[1].data,c=a[2].data,S(c),d(n),O(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A,M]);return c.a.createElement(o.a,{className:a},c.a.createElement(ue,null,c.a.createElement(v.a,{className:"content",gutter:24},c.a.createElement(le,{fundName:C.name,metrics:N,statistic:j,showAnnualReturn:F,status:z})),c.a.createElement(v.a,{className:"content",gutter:24},c.a.createElement(b.a,{sm:15,xs:24},c.a.createElement(g.a,{title:"\u4e1a\u7ee9\u8d70\u52bf"},c.a.createElement(v.a,null,c.a.createElement(b.a,{xs:24,style:{display:"flex",flexDirection:"column",alignItems:"center"}},Object(r.useMemo)((function(){return c.a.createElement(G,{fundManager:M,fundCode:A,dateRange:L})}),[A,L,M]),c.a.createElement(E.a.Group,{defaultValue:"all",buttonStyle:"solid",onChange:function(e){D(e.target.value)},style:{marginTop:"10px"}},c.a.createElement(E.a.Button,{value:"1m"},"\u8fd11\u6708"),c.a.createElement(E.a.Button,{value:"3m"},"\u8fd13\u6708"),c.a.createElement(E.a.Button,{value:"6m"},"\u8fd16\u6708"),c.a.createElement(E.a.Button,{value:"12m"},"\u8fd11\u5e74"),c.a.createElement(E.a.Button,{value:"all"},"\u6240\u6709")))))),c.a.createElement(b.a,{sm:9,xs:24},c.a.createElement(g.a,{title:"\u7edf\u8ba1\u6307\u6807"},c.a.createElement(re,{metrics:N})))),c.a.createElement(v.a,{className:"content",gutter:24},c.a.createElement(b.a,{sm:15,xs:24},c.a.createElement(g.a,{className:"p-t-0"},c.a.createElement(h.a,{defaultActiveKey:"1",style:{background:"#fff"},size:"large"},c.a.createElement(me,{tab:"\u9879\u76ee\u7b80\u4ecb",key:"1"},c.a.createElement(Z,{fund:C}))))),c.a.createElement(b.a,{sm:9,xs:24},c.a.createElement(g.a,{className:"p-t-0"},c.a.createElement(h.a,{defaultActiveKey:"1",size:"large"},c.a.createElement(me,{tab:"\u5386\u53f2\u4e1a\u7ee9",key:"1"},c.a.createElement(ee,{statistic:j})),c.a.createElement(me,{tab:"\u5386\u53f2\u51c0\u503c",key:"2"},c.a.createElement(ne,{data:s}))))))))}))(n||(n=Object(f.a)(["\n  .p-24 {\n    padding: 24px;\n  }\n  .m-t-24 {\n    margin-top: 24px;\n  }\n  .m-b-24 {\n    margin-bottom: 24px;\n  }\n  .p-t-0 {\n    padding-top: 0;\n    .ant-card-body {\n      padding-top: 0;\n    }\n  }\n  .content {\n    padding-top: 24px;\n    max-width: 1200px;\n    margin: 0 auto !important;\n  }\n  .title-p-t-10 {\n    padding-top: 20px;\n  }\n"]))),fe=a(127),ge=function(e){var t=e.data,a=Object.keys(t),n=[{title:"\u540d\u79f0",dataIndex:"name",key:"name",render:function(e,t){var a=t.code,n=t.manager;return"prepare"===t.status?e:c.a.createElement(fe.b,{to:"details?code=".concat(a,"&manager=").concat(n)},e)}},{title:"\u72b6\u6001",key:"status",dataIndex:"status",render:function(e){var t="running"===e?"green":"default";return c.a.createElement(ce.a,{color:t,key:e},function(e){switch(e){case"prepare":return"\u5f85\u542f\u52a8";case"running":return"\u8fd0\u884c\u4e2d";case"done":return"\u5df2\u7ed3\u675f";default:return"\u672a\u77e5"}}(e))}}],r=function(e,t){return e[t].funds.map((function(e){return Object(F.a)(Object(F.a)({},e),{},{manager:t})}))};return c.a.createElement("div",{style:{maxWidth:"1200px",margin:"0 auto",width:"100%"}},a.map((function(e){return c.a.createElement(v.a,{key:t[e].name,gutter:[24,24]},c.a.createElement(b.a,{xs:24},c.a.createElement(g.a,{title:t[e].name},c.a.createElement(te.a,{rowKey:"code",columns:n,dataSource:r(t,e),pagination:!1}))))})))},be="jiuyao",Ee=function(){var e=Object(r.useState)({}),t=Object(p.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat("https://raw.githubusercontent.com/share-fund","/fund-data/main/list.json"));case 2:t=e.sent,n((a=t.data).jiuyao?Object(d.a)({},be,a.jiuyao):{});case 4:case"end":return e.stop()}var a}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),c.a.createElement(o.a,null,c.a.createElement(ie.c,null,c.a.createElement(ie.a,{path:"/",element:c.a.createElement(ge,{data:a})}),c.a.createElement(ie.a,{path:"/details",element:c.a.createElement(pe,{data:a})})))},ve=a(62),he=Object(ve.c)();i.a.render(c.a.createElement(fe.a,{history:he},c.a.createElement(Ee,null)),document.getElementById("root"))}},[[948,1,2]]]);