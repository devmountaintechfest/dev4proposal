;/*FB_PKG_DELIM*/

__d("CometLegacyFlexibleHScroll.react",["fbt","ix","BaseScrollableAreaContext","CometLeftRailLayoutContext","CometRouteRenderType","CometScreenReaderText.react","CometTrackingNodeProvider.react","ExecutionEnvironment","FDSCircleButton.react","FocusInertRegion.react","Locale","UserAgent","emptyFunction","fbicon","focusScopeQueries","react","stylex","useVisibilityObserver"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l,m=l||(l=d("react"));b=l;b.useCallback;var n=b.useContext,o=b.useLayoutEffect;b.useMemo;var p=b.useRef,q=b.useState,r=b.c,s={buttonWrapper:{boxSizing:"x9f619",display:"x1lliihq",opacity:"x1hc1fzr",overflowX:"x6ikm8r",overflowY:"x10wlt62",position:"x10l6tqk",top:"x1tj73cw",transform:"x1cb1t30",transitionDuration:"x1d8287x",transitionProperty:"x19991ni",transitionTimingFunction:"xwji4o3",zIndex:"x1vjfegm",$$css:!0},buttonWrapperLeft:{left:"x1ar9fak",$$css:!0},buttonWrapperLeftPeek:{left:"xxwu3sf",start:null,end:null,$$css:!0},buttonWrapperRight:{right:"xao3ckt",$$css:!0},buttonWrapperRightPeek:{right:"xclnmbr",start:null,end:null,$$css:!0},card:{alignItems:"x1qjc9v5",boxSizing:"x9f619",display:"x78zum5",flexShrink:"x2lah0s",marginEnd:"xw3qccf",marginStart:"xsgj6o6",scrollSnapAlign:"x1bhewko",whiteSpace:"xeaf4i8",$$css:!0},container:{MsOverflowStyle:"x1pq812k",WebkitOverflowScrolling:"x5lxg6s",boxSizing:"x9f619",display:"x78zum5",marginBottom:"x38tqe7",marginEnd:"xcud41i",marginStart:"x139jcc6",overflowX:"xw2csxc",overflowY:"x1odjw0f",paddingBottom:"x1gan7if",paddingTop:"x1y1aw1k",scrollbarWidth:"x1rohswg",scrollPadding:"xjw1qxx",scrollSnapDestination:"xq72syc",scrollSnapPointsX:"x1siw524",whiteSpace:"xuxw1ft",width:"xhqpbu2","::-webkit-scrollbar_display":"xfk6m8","::-webkit-scrollbar_height":"x1yqm8si","::-webkit-scrollbar_width":"xjx87ck",$$css:!0},containerNoPeek:{marginEnd:"x1i44nmu",marginStart:"x1s4oyt8",width:"x1471bli",$$css:!0},containerNoScroll:{overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},containerSnap:{scrollSnapType:"xhfbhpw",$$css:!0},hidden:{opacity:"xg01cxk",pointerEvents:"x47corl",$$css:!0}},t={0:{width:"x1xspm3y","@media (max-width: 299px)_width":"x18igh9x",$$css:!0},404:{width:"x1w2cj79","@media (min-width: 404px) and (max-width: 561px)_width":"xwyr2us",$$css:!0},562:{width:"x1ey03fc","@media (min-width: 562px) and (max-width: 719px)_width":"x11b4air",$$css:!0},720:{width:"xbzbn6b","@media (min-width: 720px) and (max-width: 877px)_width":"x1lmggvb",$$css:!0},878:{width:"xa9r15i","@media (min-width: 878px) and (max-width: 1035px)_width":"xan2bkj",$$css:!0},1036:{width:"x60qled","@media (min-width: 1036px) and (max-width: 1193px)_width":"xyedik7",$$css:!0},1194:{width:"x19fmlpp","@media (min-width: 1194px) and (max-width: 1351px)_width":"x1bompe2",$$css:!0},1352:{width:"x6o9t4l","@media (min-width: 1352px) and (max-width: 1509px)_width":"xeubfqh",$$css:!0},1510:{width:"xs9f51f","@media (min-width: 1510px) and (max-width: 1667px)_width":"x16ty6bb",$$css:!0},1668:{width:"x1gr1x4c","@media (min-width: 1668px) and (max-width: 1825px)_width":"x17iarbr",$$css:!0},1826:{width:"x1a2ur7k","@media (min-width: 1826px) and (max-width: 1983px)_width":"x1f7yi64",$$css:!0},1984:{width:"xaqnpqx","@media (min-width: 1984px) and (max-width: 2142px)_width":"x1okq12l",$$css:!0}},u={0:{width:"x1xspm3y","@media (max-width: 299px)_width":"x18igh9x",$$css:!0},404:{width:"x1w2cj79","@media (min-width: 404px) and (max-width: 561px)_width":"xkro5v2",$$css:!0},562:{width:"x1ey03fc","@media (min-width: 562px) and (max-width: 719px)_width":"x11b4air",$$css:!0},720:{width:"xbzbn6b","@media (min-width: 720px) and (max-width: 1237px)_width":"xyo21nn",$$css:!0},1238:{width:"xa9r15i","@media (min-width: 1238px) and (max-width: 1395px)_width":"x162tl4j",$$css:!0},1396:{width:"x60qled","@media (min-width: 1396px) and (max-width: 1553px)_width":"x1nugz3k",$$css:!0},1554:{width:"x19fmlpp","@media (min-width: 1554px) and (max-width: 1711px)_width":"x1jdmwrp",$$css:!0},1712:{width:"x6o9t4l","@media (min-width: 1712px) and (max-width: 1869px)_width":"x1rgpafj",$$css:!0},1870:{width:"xs9f51f","@media (min-width: 1870px) and (max-width: 2027px)_width":"x13a54pu",$$css:!0},2028:{width:"x1gr1x4c","@media (min-width: 2028px) and (max-width: 2300px)_width":"x2e2558",$$css:!0}},v={0:{width:"x1xspm3y","@media (max-width: 703px)_width":"x2f3ama",$$css:!0},704:{width:"x1w2cj79","@media (min-width: 704px) and (max-width: 1071px)_width":"xzkgq12",$$css:!0},1072:{width:"x1ey03fc","@media (min-width: 1072px) and (max-width: 1319px)_width":"x1yoz1xp",$$css:!0},1320:{width:"xbzbn6b","@media (min-width: 1320px) and (max-width: 1627px)_width":"x1abn89d",$$css:!0},1628:{width:"xa9r15i","@media (min-width: 1628px) and (max-width: 1935px)_width":"x16a8ryy",$$css:!0},1936:{width:"x60qled","@media (min-width: 1936px) and (max-width: 2243px)_width":"x13k6msq",$$css:!0},2244:{width:"x19fmlpp","@media (min-width: 2244px) and (max-width: 2552px)_width":"xzzsxyq",$$css:!0}},w={0:{width:"x1xspm3y","@media (max-width: 703px)_width":"x2f3ama",$$css:!0},704:{width:"x1w2cj79","@media (min-width: 704px) and (max-width: 1371px)_width":"x1o726nu",$$css:!0},1372:{width:"x1ey03fc","@media (min-width: 1372px) and (max-width: 1679px)_width":"x4tiugz",$$css:!0},1680:{width:"xbzbn6b","@media (min-width: 1680px) and (max-width: 1987px)_width":"x1a3gmnx",$$css:!0},1988:{width:"xa9r15i","@media (min-width: 1988px) and (max-width: 2295px)_width":"xkz264k",$$css:!0},2296:{width:"x60qled","@media (min-width: 2296px) and (max-width: 2604px)_width":"x7nb7y5",$$css:!0}},x=4,y=16,aa=h._("__JHASH__J8Yoib5UPEE__JHASH__"),ba=h._("__JHASH__EhkFtPPvOVh__JHASH__");e=(j||(j=c("ExecutionEnvironment"))).canUseDOM&&window.matchMedia("(prefers-reduced-motion: reduce)");var z=e&&e.matches,ca=c("UserAgent").isBrowser("Chrome"),A=document.documentElement!=null&&"scrollBehavior"in document.documentElement.style,da=function(a,b){typeof a.scrollTo==="function"?A?a.scrollTo({behavior:z?"auto":"smooth",left:b,top:0}):a.scrollTo(b,0):a.scrollLeft=b},B=d("Locale").isRTL(),C=function(a){return a%1<.2?Math.floor(a):Math.ceil(a)},ea=function(a){return a%1>.8?Math.ceil(a):Math.floor(a)};function fa(a){var b=r(11),e=a.children;a=a.xstyle;var f=q(!1),g=f[0],h=f[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f={onHidden:function(){return h(!1)},onVisible:function(){return h(!0)}},b[0]=f):f=b[0];f=c("useVisibilityObserver")(f);var i=!g,j;b[1]!==a?(j=(k||(k=c("stylex"))).props(a),b[1]=a,b[2]=j):j=b[2];b[3]!==g||b[4]!==e?(a=m.jsx(c("FocusInertRegion.react"),{disabled:g,focusQuery:d("focusScopeQueries").tabbableScopeQuery,children:e}),b[3]=g,b[4]=e,b[5]=a):a=b[5];b[6]!==i||b[7]!==j||b[8]!==f||b[9]!==a?(g=m.jsx("div",babelHelpers["extends"]({"aria-hidden":i},j,{ref:f,children:a})),b[6]=i,b[7]=j,b[8]=f,b[9]=a,b[10]=g):g=b[10];return g}function a(a){var b=r(104),e=a.accessibilityLabel,f=a.baseCardWidth,g=a.children,h=a.disableScrolling,j=a.hideArrows,l=a.maxWidth,z=a.nextButtonLabel,A=a.onPressNext,D=a.peek,E=a.peekPadding,F=a.peekPaddingEnd;a=a.prevButtonLabel;h=h===void 0?!1:h;j=j===void 0?!1:j;var G=l===void 0?Infinity:l;l=z===void 0?aa:z;var H=A===void 0?c("emptyFunction"):A,I=D===void 0?!1:D;z=a===void 0?ba:a;A=n(c("BaseScrollableAreaContext"));D=n(c("CometLeftRailLayoutContext"));a=d("CometRouteRenderType").useIsHosted();var J=I?(E=E)!=null?E:0:0;F=I?(E=F)!=null?E:44:0;E=q(!0);var K=E[0],L=E[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(E=function(){if(ca){var a=window.requestAnimationFrame(function(){L(!0)});return function(){window.cancelAnimationFrame(a),L(!1)}}},b[0]=E):E=b[0];var M;b[1]!==g.length?(M=[g.length],b[1]=g.length,b[2]=M):M=b[2];o(E,M);var N=D||a;E=q(B?null:!0);M=E[0];var ga=E[1];D=q(B?!0:null);a=D[0];var ha=D[1],O=p(null);b[3]===Symbol["for"]("react.memo_cache_sentinel")?(E=function(){var a=O.current;if(a==null)return;var b=a.clientWidth,c=a.scrollLeft;a=a.scrollWidth;ga(c<=x);ha(a-b-c<=x)},b[3]=E):E=b[3];var P=E;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(D=function(){P()},b[4]=D):D=b[4];b[5]!==g.length?(E=[g.length],b[5]=g.length,b[6]=E):E=b[6];o(D,E);b[7]===Symbol["for"]("react.memo_cache_sentinel")?(D=function(){P()},b[7]=D):D=b[7];E=D;b[8]!==I||b[9]!==J?(D=function(a,b){var c=O.current;if(c==null)return;var d=c.clientWidth,e=c.scrollLeft,f=c.scrollWidth,g=f-88;d=d-88;var h=I?44:B?88:0,i=B?d-f%d:0;h=h+i-(B?-J:J);i=C(g/d);g=e+h;e=g%d;e=e<y?g-e:d-e<y?g+(d-e):g;g=b(e/d);b=Math.min(i,Math.max(0,g+a));e=b===i-1&&b!==0?f:b*d-h;g=b===0?0:b*d-h;da(c,B?g:e)},b[8]=I,b[9]=J,b[10]=D):D=b[10];var Q=D;b[11]!==Q?(D=function(){return Q(-1,C)},b[11]=Q,b[12]=D):D=b[12];D=D;var R;b[13]!==Q||b[14]!==H?(R=function(){Q(1,ea),H()},b[13]=Q,b[14]=H,b[15]=R):R=b[15];R=R;var S=f===150?N?u:t:N?w:v;if(b[16]!==S||b[17]!==N||b[18]!==G){var T;b[20]!==N||b[21]!==G?(T=function(a){return N?a<=G+360:a<=G},b[20]=N,b[21]=G,b[22]=T):T=b[22];var U;b[23]!==S?(U=function(a){return S[a]},b[23]=S,b[24]=U):U=b[24];T=Object.keys(S).filter(T).map(U);b[16]=S;b[17]=N;b[18]=G;b[19]=T}else T=b[19];var V=T;b[25]===Symbol["for"]("react.memo_cache_sentinel")?(U={getDOMNode:function(){return O.current}},b[25]=U):U=b[25];b[26]!==A?(T=[].concat(A,[U]),b[26]=A,b[27]=T):T=b[27];U=T;A=U;T=j||!!M;U=j||!!a;b[28]===Symbol["for"]("react.memo_cache_sentinel")?(j={className:"x1n2onr6 x1ja2u2z"},b[28]=j):j=b[28];var W=I&&s.buttonWrapperLeftPeek,X=T&&s.hidden,Y;b[29]!==W||b[30]!==X?(Y=(k||(k=c("stylex")))(s.buttonWrapper,s.buttonWrapperLeft,W,X),b[29]=W,b[30]=X,b[31]=Y):Y=b[31];b[32]!==M||b[33]!==f||b[34]!==g.length?(W=M==null?{maxWidth:68,minWidth:0,width:"calc(("+g.length*(f+8)+"px - 100%) * 9999)"}:{},b[32]=M,b[33]=f,b[34]=g.length,b[35]=W):W=b[35];b[36]===Symbol["for"]("react.memo_cache_sentinel")?(X={className:"x14yjl9h xudhj91 x18nykt9 xww2gxu xjf5wm9 x1anpbxc xmo9yow xyorhqc x17adc0v"},b[36]=X):X=b[36];M=!T;var Z;b[37]===Symbol["for"]("react.memo_cache_sentinel")?(Z=d("fbicon")._(i("492488"),20),b[37]=Z):Z=b[37];var $=B?l:z;b[38]!==M||b[39]!==$||b[40]!==D?(X=m.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:B?420:419,children:m.jsx("div",babelHelpers["extends"]({},X,{children:m.jsx(c("FDSCircleButton.react"),{color_DEPRECATED:"secondary",focusable:M,icon:Z,label:$,onPress:D,size:48,testid:void 0,type_DEPRECATED:"overlay"})}))}),b[38]=M,b[39]=$,b[40]=D,b[41]=X):X=b[41];b[42]!==T||b[43]!==Y||b[44]!==W||b[45]!==X?(Z=m.jsx("div",{"aria-hidden":T,className:Y,style:W,children:X}),b[42]=T,b[43]=Y,b[44]=W,b[45]=X,b[46]=Z):Z=b[46];b[47]===Symbol["for"]("react.memo_cache_sentinel")?(M={className:"xoruuee xhsvlbd x6ikm8r x10wlt62 x1rxj1xn x889kno x1n2onr6 xh8yej3"},b[47]=M):M=b[47];b[48]!==e?($=e!=null?m.jsx(c("CometScreenReaderText.react"),{text:e}):null,b[48]=e,b[49]=$):$=b[49];b[50]!==K||b[51]!==I||b[52]!==h?(D=(k||(k=c("stylex"))).props(s.container,K&&s.containerSnap,!I&&s.containerNoPeek,h&&s.containerNoScroll),b[50]=K,b[51]=I,b[52]=h,b[53]=D):D=b[53];b[54]!==I?(T=!I&&m.jsx("div",{style:{minWidth:44}}),b[54]=I,b[55]=T):T=b[55];b[56]!==I||b[57]!==J?(Y=I&&J>0&&m.jsx("div",{style:{minWidth:J}}),b[56]=I,b[57]=J,b[58]=Y):Y=b[58];if(b[59]!==V||b[60]!==g){b[62]!==V?(W=function(a,b){return m.jsx(fa,{xstyle:[s.card,V],children:a},b)},b[62]=V,b[63]=W):W=b[63];X=g.map(W);b[59]=V;b[60]=g;b[61]=X}else X=b[61];b[64]!==A||b[65]!==X?(e=m.jsx(c("BaseScrollableAreaContext").Provider,{value:A,children:X}),b[64]=A,b[65]=X,b[66]=e):e=b[66];b[67]!==I?(K=!I&&m.jsx("div",{style:{minWidth:44}}),b[67]=I,b[68]=K):K=b[68];b[69]!==I||b[70]!==F?(h=I&&F>0&&m.jsx("div",{style:{minWidth:F}}),b[69]=I,b[70]=F,b[71]=h):h=b[71];b[72]!==D||b[73]!==T||b[74]!==Y||b[75]!==e||b[76]!==K||b[77]!==h?(W=m.jsxs("div",babelHelpers["extends"]({},D,{onScroll:E,ref:O,children:[T,Y,e,K,h]})),b[72]=D,b[73]=T,b[74]=Y,b[75]=e,b[76]=K,b[77]=h,b[78]=W):W=b[78];b[79]!==$||b[80]!==W?(A=m.jsxs("div",babelHelpers["extends"]({},M,{children:[$,W]})),b[79]=$,b[80]=W,b[81]=A):A=b[81];X=I&&s.buttonWrapperRightPeek;F=U&&s.hidden;b[82]!==X||b[83]!==F?(E=(k||(k=c("stylex")))(s.buttonWrapper,s.buttonWrapperRight,X,F),b[82]=X,b[83]=F,b[84]=E):E=b[84];b[85]!==a||b[86]!==f||b[87]!==g.length?(D=a==null?{maxWidth:68,minWidth:0,width:"calc(("+g.length*(f+8)+"px - 100%) * 9999)"}:{},b[85]=a,b[86]=f,b[87]=g.length,b[88]=D):D=b[88];b[89]===Symbol["for"]("react.memo_cache_sentinel")?(T={className:"x14yjl9h xudhj91 x18nykt9 xww2gxu xjf5wm9 x1anpbxc xmo9yow xyorhqc x17adc0v"},b[89]=T):T=b[89];Y=!U;b[90]===Symbol["for"]("react.memo_cache_sentinel")?(e=d("fbicon")._(i("492536"),20),b[90]=e):e=b[90];K=B?z:l;b[91]!==Y||b[92]!==K||b[93]!==R?(h=m.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:B?419:420,children:m.jsx("div",babelHelpers["extends"]({},T,{children:m.jsx(c("FDSCircleButton.react"),{color_DEPRECATED:"secondary",focusable:Y,icon:e,label:K,onPress:R,size:48,testid:void 0,type_DEPRECATED:"overlay"})}))}),b[91]=Y,b[92]=K,b[93]=R,b[94]=h):h=b[94];b[95]!==U||b[96]!==E||b[97]!==D||b[98]!==h?(M=m.jsx("div",{"aria-hidden":U,className:E,style:D,children:h}),b[95]=U,b[96]=E,b[97]=D,b[98]=h,b[99]=M):M=b[99];b[100]!==Z||b[101]!==A||b[102]!==M?($=m.jsxs("div",babelHelpers["extends"]({},j,{children:[Z,A,M]})),b[100]=Z,b[101]=A,b[102]=M,b[103]=$):$=b[103];return $}g["default"]=a}),226);
__d("ProfileCometFeaturedHighlightsHScrollGlimmerCard.react",["FDSCard.react","FDSGlimmer.react","react","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={imageGlimmer:{bottom:"x1ey2m1c",boxSizing:"x9f619",end:"xds687c",start:"x17qophe",left:null,right:null,position:"x10l6tqk",top:"x13vifvy",$$css:!0}};function a(a){var b=i(7);a=a.onVisible;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d={rootMargin:200},b[0]=d):d=b[0];b[1]!==a?(d={onVisible:a,options:d},b[1]=a,b[2]=d):d=b[2];a=c("useVisibilityObserver")(d);b[3]===Symbol["for"]("react.memo_cache_sentinel")?(d="x78zum5 x5yr21d xh8yej3",b[3]=d):d=b[3];var e;b[4]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("FDSCard.react"),{background:"white",border:"solid",dropShadow:1,children:j.jsx("div",{className:"x1vrad04 xh8yej3",children:j.jsx(c("FDSGlimmer.react"),{index:0,xstyle:k.imageGlimmer})})}),b[4]=e):e=b[4];b[5]!==a?(d=j.jsx("div",{className:d,ref:a,children:e}),b[5]=a,b[6]=d):d=b[6];return d}g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsHScroll.react",["CometLegacyFlexibleHScroll.react","ProfileCometFeaturedHighlightsHScrollGlimmerCard.react","ProfileCometFeaturedHighlightsStrings","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useTransition,k=b.c;function a(a){var b=k(15),e=a.baseCardWidth,f=a.cards,g=a.hasNext,h=a.loadNext,l=a.maxWidth,m=a.pageCardCount;a=a.totalCardCount;e=e===void 0?150:e;l=l===void 0?562:l;var n=m===void 0?3:m;m=j();var o=m[0],p=m[1];b[0]!==g||b[1]!==o||b[2]!==h||b[3]!==n?(m=function(){if(!g||o)return;p(function(){h(n*3)})},b[0]=g,b[1]=o,b[2]=h,b[3]=n,b[4]=m):m=b[4];m=m;var q;if(b[5]!==f||b[6]!==g||b[7]!==a||b[8]!==n||b[9]!==m){q=Array.from(f);if(g){var r=Math.min(n,a-f.length);for(var s=0;s<r;s++)q.push(i.jsx(c("ProfileCometFeaturedHighlightsHScrollGlimmerCard.react"),{onVisible:m},"glimmer"))}b[5]=f;b[6]=g;b[7]=a;b[8]=n;b[9]=m;b[10]=q}else q=b[10];b[11]!==e||b[12]!==l||b[13]!==q?(r=i.jsx(c("CometLegacyFlexibleHScroll.react"),{accessibilityLabel:d("ProfileCometFeaturedHighlightsStrings").FEATURED_SECTION,baseCardWidth:e,maxWidth:l,children:q}),b[11]=e,b[12]=l,b[13]=q,b[14]=r):r=b[14];return r}g["default"]=a}),98);
__d("ProfileCometFeaturedHighlightsHScrollCard_featured.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null};return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsHScrollCard_featured",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},a],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[a],type:"Video",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsHScrollCard.react",["fbt","CometColumn.react","CometColumnItem.react","CometRelay","FDSCard.react","FDSText.react","ProfileCometContext","ProfileCometFeaturedHighlightsHScrollCard_featured.graphql","StoriesLoggingConstants","StoriesTrayTileView.react","StoriesTrayUtils","react","react-forget-runtime"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useContext;var l=e.c;function a(a){var e,f,g=l(17),j=a.canViewCollection,n=a.featured;a=a.testid;j=j===void 0?!1:j;a=a===void 0?"":a;n=d("CometRelay").useFragment(i!==void 0?i:i=b("ProfileCometFeaturedHighlightsHScrollCard_featured.graphql"),n);var o=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(c("ProfileCometContext"),m);o=o.isInViewAs;e=(n==null?void 0:(e=n.cover_card)==null?void 0:(e=e.attachments)==null?void 0:e.length)?(e=n.cover_card.attachments[0])==null?void 0:(e=e.media)==null?void 0:(e=e.image)==null?void 0:e.uri:null;if(n==null||e==null)return null;if(g[0]!==((f=n.cover_card)==null?void 0:f.attachments)){var p;f=(f=(f=n.cover_card)==null?void 0:(f=f.attachments[0])==null?void 0:(f=f.media)==null?void 0:f.accessibility_caption)!=null?f:h._("__JHASH__Wlsf33USkLC__JHASH__");g[0]=(p=n.cover_card)==null?void 0:p.attachments;g[1]=f}else f=g[1];p=f;f=(f=n.highlighted_cards)==null?void 0:f.count;f=f!=null&&f>1?"+ "+((f=f-1)==null?void 0:f.toString()):null;if(g[2]!==j||g[3]!==n.id){var q;q=j?d("StoriesTrayUtils").getBucketURL({bucketID:(q=n.id)!=null?q:"",source:c("StoriesLoggingConstants").ACTION_SOURCE.PROFILE_HIGHLIGHT}):void 0;g[2]=j;g[3]=n.id;g[4]=q}else q=g[4];j=f!=null?f:void 0;g[5]!==q||g[6]!==e||g[7]!==o||g[8]!==p||g[9]!==j?(f=k.jsx(c("CometColumnItem.react"),{paddingHorizontal:0,children:k.jsx(c("FDSCard.react"),{children:k.jsx(c("StoriesTrayTileView.react"),{bucketUrl:q,coverImage:e,disablePreloadOnMouseHover:o,label:p,text:j})})}),g[5]=q,g[6]=e,g[7]=o,g[8]=p,g[9]=j,g[10]=f):f=g[10];g[11]!==n.name?(q=k.jsx(c("CometColumnItem.react"),{align:"center",paddingHorizontal:0,paddingTop:8,children:k.jsx(c("FDSText.react"),{align:"center",numberOfLines:3,type:"bodyLink4",children:n.name})}),g[11]=n.name,g[12]=q):q=g[12];g[13]!==a||g[14]!==f||g[15]!==q?(e=k.jsxs(c("CometColumn.react"),{expanding:!0,testid:void 0,children:[f,q]}),g[13]=a,g[14]=f,g[15]=q,g[16]=e):e=g[16];return e}function m(a){return[a.isInViewAs]}g["default"]=a}),226);
__d("ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6240151489332741"}),null);
__d("ProfileCometFeaturedHighlightsViewPaginationQuery.graphql",["ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:3,kind:"LocalArgument",name:"count"},c={defaultValue:null,kind:"LocalArgument",name:"cursor"},d={defaultValue:null,kind:"LocalArgument",name:"id"},e={defaultValue:null,kind:"LocalArgument",name:"scale"},f=[{kind:"Variable",name:"id",variableName:"id"}],g={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},i=[{kind:"Variable",name:"after",variableName:"cursor"},{kind:"Variable",name:"first",variableName:"count"}],j={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},k=[h];return{fragment:{argumentDefinitions:[a,c,d,e],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsViewPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[{args:[{kind:"Variable",name:"count",variableName:"count"},{kind:"Variable",name:"cursor",variableName:"cursor"}],kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page"}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[a,c,e,d],kind:"Operation",name:"ProfileCometFeaturedHighlightsViewPaginationQuery",selections:[{alias:null,args:f,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:i,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,h,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[g,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},j],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[j],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:k,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:k,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:k,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},h],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null},g],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:i,filters:null,handle:"connection",key:"ProfileCometTileFeaturedHighlightsView_profile_tile_items",kind:"LinkedHandle",name:"profile_tile_items"}],type:"ProfileTileView",abstractKey:null}],storageKey:null}]},params:{id:b("ProfileCometFeaturedHighlightsViewPaginationQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometFeaturedHighlightsViewPaginationQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql",["ProfileCometFeaturedHighlightsViewPaginationQuery.graphql"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=["profile_tile_items"],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:3,kind:"LocalArgument",name:"count"},{defaultValue:null,kind:"LocalArgument",name:"cursor"},{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:{connection:[{count:"count",cursor:"cursor",direction:"forward",path:a}],refetch:{connection:{forward:{count:"count",cursor:"cursor"},backward:null,path:a},fragmentPathInResult:["node"],operation:b("ProfileCometFeaturedHighlightsViewPaginationQuery.graphql"),identifierInfo:{identifierField:"id",identifierQueryVariableName:"id"}}},name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page",selections:[{alias:"profile_tile_items",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"__ProfileCometTileFeaturedHighlightsView_profile_tile_items_connection",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[c,{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsHScrollCard_featured"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:null},c],type:"ProfileTileView",abstractKey:null}}();e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometFeaturedHighlightsIntroCardHScroll_view",selections:[{alias:"all_featured_highlights",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],storageKey:null}],type:"ProfileTileView",abstractKey:null};e.exports=a}),null);
__d("ProfileCometFeaturedHighlightsIntroCardHScroll.react",["CometRelay","ProfileCometFeaturedHighlightsHScroll.react","ProfileCometFeaturedHighlightsHScrollCard.react","ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql","ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql","react","react-relay/relay-hooks/legacy/useBlockingPaginationFragment"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(j||(j=d("react"))).c,l=j;function a(a){var e=k(9),f=a.page;a=a.view;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometFeaturedHighlightsIntroCardHScroll_view.graphql"),a);a=a.all_featured_highlights;var g;e[0]===Symbol["for"]("react.memo_cache_sentinel")?(g=i!==void 0?i:i=b("ProfileCometFeaturedHighlightsIntroCardHScroll_page.graphql"),e[0]=g):g=e[0];g=c("react-relay/relay-hooks/legacy/useBlockingPaginationFragment")(g,f);f=g.data;var j=g.hasNext;g=g.loadNext;f=f.profile_tile_items;f=f==null?void 0:f.edges;a=a==null?void 0:a.count;if(f==null||a==null)return null;var n;e[1]!==f?(n=f.map(m).filter(Boolean),e[1]=f,e[2]=n):n=e[2];f=n;e[3]===Symbol["for"]("react.memo_cache_sentinel")?(n="xwya9rg",e[3]=n):n=e[3];e[4]!==f||e[5]!==j||e[6]!==g||e[7]!==a?(n=l.jsx("div",{className:n,children:l.jsx(c("ProfileCometFeaturedHighlightsHScroll.react"),{cards:f,hasNext:j,loadNext:g,totalCardCount:a})}),e[4]=f,e[5]=j,e[6]=g,e[7]=a,e[8]=n):n=e[8];return n}function m(a,b){a=a.node;a=a==null?void 0:a.node;return a==null?null:l.jsx(c("ProfileCometFeaturedHighlightsHScrollCard.react"),{canViewCollection:!0,featured:a,testid:void 0},(a=a.id)!=null?a:b)}m.displayName=m.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_page"},{args:null,kind:"FragmentSpread",name:"ProfileCometFeaturedHighlightsIntroCardHScroll_view"},{alias:null,args:[{kind:"Literal",name:"supported",value:"49BiFf"}],concreteType:null,kind:"LinkedField",name:"view_style_edit_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",fragmentName:"ProfileCometFeaturedHighlightsEditButton_viewStyleEditRenderer",fragmentPropName:"viewStyleEditRenderer",kind:"ModuleImport"}],type:"ProfileTileEditFeaturedHighlightsRenderer",abstractKey:null}],storageKey:'view_style_edit_renderer(supported:"49BiFf")'}],storageKey:null},action:"LOG",path:"view"}],type:"ProfileTileViewFeaturedHighlightsRenderer",abstractKey:null};e.exports=a}),null);
__d("ProfileCometTileFeaturedHighlightsView.react",["CometRelay","ProfileCometFeaturedHighlightsIntroCardHScroll.react","ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql","emptyObject","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(7);a=a.viewStyleRenderer;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer.graphql"),a);if(a==null)return null;a=a.view;var f=a.view_style_edit_renderer,g;e[0]!==f?(g=f!==null?k.jsx("div",{children:k.jsx(d("CometRelay").MatchContainer,{match:f,props:c("emptyObject")})}):null,e[0]=f,e[1]=g):g=e[1];f=g;e[2]!==a?(g=k.jsx(c("ProfileCometFeaturedHighlightsIntroCardHScroll.react"),{page:a,view:a}),e[2]=a,e[3]=g):g=e[3];e[4]!==g||e[5]!==f?(a=k.jsxs(k.Fragment,{children:[g,f]}),e[4]=g,e[5]=f,e[6]=a):a=e[6];return a}g["default"]=a}),98);
__d("ProfileCometTileFeaturedHighlightsView_viewStyleRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"Literal",name:"first",value:3}],b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},d=[{alias:null,args:null,kind:"ScalarField",name:"count",storageKey:null}],e={alias:null,args:[{kind:"Literal",name:"height",value:500},{kind:"Variable",name:"scale",variableName:"scale"},{kind:"Literal",name:"width",value:500}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},f=[c];return{kind:"SplitOperation",metadata:{},name:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer$normalization",selections:[{alias:null,args:null,concreteType:"ProfileTileView",kind:"LinkedField",name:"view",plural:!1,selections:[{alias:null,args:a,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:[{alias:null,args:null,concreteType:"ProfileTileItemsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"ProfileTileItem",kind:"LinkedField",name:"node",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[b,c,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,concreteType:"StoryHighlightContainerToHighlightedCardsConnection",kind:"LinkedField",name:"highlighted_cards",plural:!1,selections:d,storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"cover_card",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[b,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"accessibility_caption",storageKey:null},e],type:"Photo",abstractKey:null},{kind:"InlineFragment",selections:[e],type:"Video",abstractKey:null},{kind:"InlineFragment",selections:f,type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:f,type:"DynamicFeedAdAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:f,type:"GenericAttachmentMedia",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageImage",abstractKey:null},{kind:"InlineFragment",selections:f,type:"MontageVideo",abstractKey:null}],storageKey:null}],storageKey:null},c],storageKey:null}],type:"StoryHighlightContainer",abstractKey:null}],storageKey:null},b],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"cursor",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PageInfo",kind:"LinkedField",name:"page_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"has_next_page",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end_cursor",storageKey:null}],storageKey:null}],storageKey:"profile_tile_items(first:3)"},{alias:null,args:a,filters:null,handle:"connection",key:"ProfileCometTileFeaturedHighlightsView_profile_tile_items",kind:"LinkedHandle",name:"profile_tile_items"},c,{alias:"all_featured_highlights",args:null,concreteType:"ProfileTileItemsConnection",kind:"LinkedField",name:"profile_tile_items",plural:!1,selections:d,storageKey:null},{alias:null,args:[{kind:"Literal",name:"supported",value:"49BiFf"}],concreteType:null,kind:"LinkedField",name:"view_style_edit_renderer",plural:!1,selections:[b,{kind:"InlineFragment",selections:[{args:null,documentName:"ProfileCometTileFeaturedHighlightsView_viewStyleRenderer",fragmentName:"ProfileCometFeaturedHighlightsEditButton_viewStyleEditRenderer",fragmentPropName:"viewStyleEditRenderer",kind:"ModuleImport"}],type:"ProfileTileEditFeaturedHighlightsRenderer",abstractKey:null}],storageKey:'view_style_edit_renderer(supported:"49BiFf")'}],storageKey:null}]}}();e.exports=a}),null);