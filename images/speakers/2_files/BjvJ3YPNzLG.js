;/*FB_PKG_DELIM*/

__d("CDSDivider.react",["BaseDivider.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2);a=a.xstyle;var d;b[0]!==a?(d=j.jsx(c("BaseDivider.react"),{xstyle:a}),b[0]=a,b[1]=d):d=b[1];return d}g["default"]=a}),98);
__d("ChevronLeftOutline24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("path",{d:"M6.053 12.53a.748.748 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.061 1.06L7.644 12l6.97 6.97a.75.75 0 0 1-1.061 1.06z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("ChevronRightOutline24.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("path",{d:"M17.947 12.53a.748.748 0 0 0 0-1.06l-7.5-7.5a.75.75 0 1 0-1.061 1.06l6.97 6.97-6.97 6.97a.75.75 0 0 0 1.061 1.06z"})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("FDSCopyToClipboardLink.react",["cr:9899","react"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");g["default"]=b("cr:9899")}),98);
__d("MWPThreadItemsFocusContainer.react",["MWThreadListFocusableTable.react","XPlatReactFocusRegion.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2);a=a.children;var e;b[0]!==a?(e=j.jsx(c("XPlatReactFocusRegion.react"),{autoRestoreFocus:!0,recoverFocusQuery:d("MWThreadListFocusableTable.react").MWThreadListFocusableTableScopeQuery,children:j.jsx(d("MWThreadListFocusableTable.react").MWThreadListFocusableTable,{children:a})}),b[0]=a,b[1]=e):e=b[1];return e}g["default"]=a}),98);
__d("MWPThreadItemsContainer.react",["MWPThreadItemsFocusContainer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(5),d=a.children;a=a.gridLabel;var e;b[0]!==d?(e=j.jsx(c("MWPThreadItemsFocusContainer.react"),{children:d}),b[0]=d,b[1]=e):e=b[1];b[2]!==a||b[3]!==e?(d=j.jsx("div",{"aria-label":a,"data-testid":void 0,role:"grid",children:e}),b[2]=a,b[3]=e,b[4]=d):d=b[4];return d}g["default"]=a}),98);
__d("PayPalFraudNetNew",[],(function(a,b,c,d,e,f){var g=function(){var a="abcdefghijklmnopqrstuvwxyz0123456789",b="";for(var c=0;c<32;c++)b+=a[Math.floor(Math.random()*a.length)];return b},h="fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99",i=function(a){var b=window.parent.document.body;b.appendChild(a)};a=function(a,b){"use strict";var c=g(),d=document.getElementById("fconfig");d&&d.parentNode&&d.parentNode.removeChild(d);d=document.createElement("script");d.id="fconfig";d.type="application/json";d.setAttribute("fncls",h);a===void 0&&(a="FB_UNDEF_FLOW_ID");a={f:c,s:a,u:b};d.text=JSON.stringify(a);i(d);a=document.createElement("script");a.src=b;i(a);return c};e.exports={collectFraudnetFeatures:a}}),null);
__d("XCMSLegalPaymentsTermsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/payments_terms/{?terms_section}/{?preview}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("isEmail",[],(function(a,b,c,d,e,f){var g=/^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;function a(a){return g.test(a)}f["default"]=a}),66);