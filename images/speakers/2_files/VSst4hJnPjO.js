;/*FB_PKG_DELIM*/

__d("ArrowsCircleOutline20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -398)",children:i.jsxs("g",{fillRule:"nonzero",children:[i.jsx("path",{d:"M96.628 206.613A7.97 7.97 0 0 1 96 203.5a7.967 7.967 0 0 1 2.343-5.657A7.978 7.978 0 0 1 104 195.5a7.978 7.978 0 0 1 5.129 1.86.75.75 0 0 0 .962-1.15A9.479 9.479 0 0 0 104 194a9.478 9.478 0 0 0-6.717 2.783A9.467 9.467 0 0 0 94.5 203.5a9.47 9.47 0 0 0 .747 3.698.75.75 0 1 0 1.381-.585zm14.744-6.226A7.97 7.97 0 0 1 112 203.5a7.967 7.967 0 0 1-2.343 5.657A7.978 7.978 0 0 1 104 211.5a7.978 7.978 0 0 1-5.128-1.86.75.75 0 0 0-.962 1.152A9.479 9.479 0 0 0 104 213a9.478 9.478 0 0 0 6.717-2.783 9.467 9.467 0 0 0 2.783-6.717 9.47 9.47 0 0 0-.747-3.698.75.75 0 1 0-1.381.585z",transform:"translate(352 204.5)"}),i.jsx("path",{d:"M109.5 197h-2.25a.75.75 0 1 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 1 0-1.5 0V197zm-11 13h2.25a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 1 0 1.5 0V210z",transform:"translate(352 204.5)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("MutationObserver",[],(function(a,b,c,d,e,f){b=function(){function a(a){}var b=a.prototype;b.observe=function(a,b){};b.disconnect=function(){};b.takeRecords=function(){return[]};return a}();e=(d=(c=a.MutationObserver)!=null?c:a.WebKitMutationObserver)!=null?d:b;c=e;f["default"]=c}),66);
__d("useMutationObserver",["MutationObserver","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useCallback,j=b.useRef;function a(a,b){var d=j({observer:null,callback:a}),e=j(null),f=j({element:null,options:null,observer:null}),g=i(function(){var a=f.current,c=a.observer,g=a.element;a=a.options;var h=d.current.observer,i=e.current;(g!=i||b!=a||h!=c)&&(c&&c.disconnect(),h&&i&&h.observe(i,b),f.current={observer:h,element:i,options:b})},[b]);(d.current.observer==null||d.current.callback!==a)&&(d.current.observer!=null&&d.current.observer.disconnect(),d.current={observer:new(c("MutationObserver"))(a),callback:a});g();return i(function(a){e.current=a,g()},[g])}g["default"]=a}),98);
__d("useShallowEqualState",["react","shallowEqual"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.useState,j=b.c;function a(a){var b=j(3);a=i(a);var d=a[0],e=a[1];b[0]===Symbol["for"]("react.memo_cache_sentinel")?(a=function(a){if(typeof a==="function"){var b=a;return e(function(a){var d=b(a);return c("shallowEqual")(a,d)?a:d})}return e(function(b){return c("shallowEqual")(b,a)?b:a})},b[0]=a):a=b[0];a=a;b[1]!==d?(a=[d,a],b[1]=d,b[2]=a):a=b[2];return a}g["default"]=a}),98);
__d("BasePulseEffect.react",["BasePulseEffectBase.react","react","useMergeRefs","useMutationObserver","useResizeObserver","useShallowEqualState","useVisibilityObserver"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.useRef,k=b.useState,l=b.c;function a(a){var b=l(24),d=a.children,e=a.disabled,f=a.pulseColor_DEPRECATED;a=a.xstyle;e=e===void 0?!1:e;var g=j(null),h=k(null),m=h[0],n=h[1];h=k(null);var o=h[0],p=h[1];h=c("useShallowEqualState")(null);var q=h[0],r=h[1];h=k(!1);var s=h[0],t=h[1];b[0]!==s?(h=function(a){a=a.hiddenReason;s&&a!=="COMPONENT_UNMOUNTED"&&t(!1)},b[0]=s,b[1]=h):h=b[1];var u;b[2]===Symbol["for"]("react.memo_cache_sentinel")?(u=function(){return t(!0)},b[2]=u):u=b[2];b[3]!==h?(u={onHidden:h,onVisible:u},b[3]=h,b[4]=u):u=b[4];h=c("useVisibilityObserver")(u);b[5]!==r?(u=function(a){if(a!=null){a=window.getComputedStyle(a);var b=a.borderBottomLeftRadius,c=a.borderBottomRightRadius,d=a.borderTopLeftRadius;a=a.borderTopRightRadius;r({borderBottomLeftRadius:b,borderBottomRightRadius:c,borderTopLeftRadius:d,borderTopRightRadius:a})}},b[5]=r,b[6]=u):u=b[6];var v=u;b[7]!==r?(u=function(a,b){p(a.height);n(a.width);a=window.getComputedStyle(b);b=a.borderBottomLeftRadius;var c=a.borderBottomRightRadius,d=a.borderTopLeftRadius;a=a.borderTopRightRadius;r({borderBottomLeftRadius:b,borderBottomRightRadius:c,borderTopLeftRadius:d,borderTopRightRadius:a})},b[7]=r,b[8]=u):u=b[8];u=c("useResizeObserver")(u);var w;b[9]!==v?(w=function(){return v(g.current)},b[9]=v,b[10]=w):w=b[10];var x;b[11]===Symbol["for"]("react.memo_cache_sentinel")?(x={attributeFilter:["style","class"],attributes:!0},b[11]=x):x=b[11];w=c("useMutationObserver")(w,x);x=c("useMergeRefs")(g,h,v,u,w);b[12]!==d||b[13]!==x?(h=d(x),b[12]=d,b[13]=x,b[14]=h):h=b[14];b[15]!==e||b[16]!==o||b[17]!==f||b[18]!==q||b[19]!==s||b[20]!==m||b[21]!==a||b[22]!==h?(u=i.jsx(c("BasePulseEffectBase.react"),{disabled:e,height:o,pulseColor:f,radii:q,visible:s,width:m,xstyle:a,children:h}),b[15]=e,b[16]=o,b[17]=f,b[18]=q,b[19]=s,b[20]=m,b[21]=a,b[22]=h,b[23]=u):u=b[23];return u}g["default"]=a}),98);
__d("CometAccessibilitySettingsFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1808128");b=d("FalcoLoggerInternal").create("comet_accessibility_settings",a);e=b;g["default"]=e}),98);
__d("CometFeedPreferencesControlPanelConstants",["fbt","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";a=c("gkx")("23047");b=h._("__JHASH__Ldp_jMAE1RD__JHASH__");d=h._("__JHASH__Ldp_jMAE1RD__JHASH__");e=h._("__JHASH__T81Ei3n1FWv__JHASH__");f=h._("__JHASH__XGgn180xEI0__JHASH__");c=h._("__JHASH__qfyjFqeOEPK__JHASH__");var i=h._("__JHASH__pZq0iiwdyi0__JHASH__"),j=h._("__JHASH__aimYhLFaQ5c__JHASH__"),k=h._("__JHASH__fT-RTgHRHjV__JHASH__"),l=h._("__JHASH__4zP2K3HkJzj__JHASH__"),m=h._("__JHASH__x1qqxDi6pJ3__JHASH__"),n=h._("__JHASH__u9bkjHzd7wl__JHASH__"),o=h._("__JHASH__f02ngmSiB5U__JHASH__"),p=h._("__JHASH__h4ZnX54LWRc__JHASH__"),q=h._("__JHASH__yzq7fRSvzad__JHASH__"),r=h._("__JHASH__jJLFPP-KXXr__JHASH__"),s=h._("__JHASH__H8ytYrBrt3h__JHASH__"),t=h._("__JHASH__jJLFPP-KXXr__JHASH__"),u=h._("__JHASH__H8ytYrBrt3h__JHASH__"),v=h._("__JHASH__UfwdxLaXC9i__JHASH__"),w=h._("__JHASH__w40YFq3HtDb__JHASH__"),x=h._("__JHASH__mqoutCDuyex__JHASH__"),y=h._("__JHASH__hF87C777iR9__JHASH__"),z=h._("__JHASH__NTPLB20Reeu__JHASH__"),A=h._("__JHASH__t6_k3BTVbR8__JHASH__"),B=h._("__JHASH__HWltnQ_wQof__JHASH__"),C=h._("__JHASH__tFmCeNiGFJW__JHASH__"),D=h._("__JHASH__tn_pYBzPz8g__JHASH__"),E=h._("__JHASH__7bnnDAq13JS__JHASH__"),F=h._("__JHASH__xGmd46-PivH__JHASH__");h=h._("__JHASH__cGr4N0_kxfR__JHASH__");g.CONTROL_PANEL_LAUNCH_GK=a;g.CONTROL_PANEL_DIALOG_TITLE=b;g.CONTROL_PANEL_NFP_ENTRYPOINT_NAME=d;g.CONTROL_PANEL_INTRO_TEXT=e;g.CONTROL_PANEL_INTRO_LEARN_MORE_HEADLINE=f;g.CONTROL_PANEL_INTRO_LEARN_MORE_TEXT=c;g.CONTROL_PANEL_LEARN_MORE_POSTS_HEADER=i;g.CONTROL_PANEL_LEARN_MORE_POSTS_BODY=j;g.CONTROL_PANEL_LEARN_MORE_PREFERENCE_HEADER=k;g.CONTROL_PANEL_LEARN_MORE_PREFERENCE_BODY=l;g.CONTROL_PANEL_LEARN_MORE_UPDATE_HEADER=m;g.CONTROL_PANEL_LEARN_MORE_UPDATE_BODY=n;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_FRIENDS=o;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_COMMUNITIES=p;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_PPF=q;g.WORK_CONTROL_PANEL_CONTENT_PREFERENCE_HEADER=r;g.WORK_CONTROL_PANEL_CONTENT_PREFERENCE_BODY=s;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_HEADER=t;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_BODY=u;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_BUTTON=v;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_HEADER=w;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_NORMAL_BODY=x;g.CONTROL_PANEL_CONTENT_SOURCE_PREFERENCE_LESS_BUTTON=y;g.CONTROL_PANEL_CONNECTIONS_HEADER=z;g.CONTROL_PANEL_SURVEY_MESSAGE=A;g.CONTROL_PANEL_SURVEY_RESPONDED_HEADER=B;g.CONTROL_PANEL_SURVEY_RESPONDED_BODY=C;g.CONTROL_PANEL_EDUCATIONAL_BANNER_HEADER=D;g.CONTROL_PANEL_EDUCATIONAL_BANNER_BODY=E;g.CONTROL_PANEL_TOAST_TEXT=F;g.CONTROL_PANEL_WAIST_TEXT=h}),226);
__d("CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6261900600538922"}),null);
__d("CometFeedPreferencesControlPanelDialogQuery$Parameters",["CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedPreferencesControlPanelDialogQuery_facebookRelayOperation"),metadata:{},name:"CometFeedPreferencesControlPanelDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedPreferencesControlPanelDialog.entrypoint",["CometFeedPreferencesControlPanelDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{dialogQueryReference:{parameters:c("CometFeedPreferencesControlPanelDialogQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometFeedPreferencesControlPanelDialog.react").__setRef("CometFeedPreferencesControlPanelDialog.entrypoint")};g["default"]=a}),98);
__d("CometFeedPreferencesDialogLoadingState.react",["fbt","CometFeedPreferencesControlPanelConstants","FDSCardedDialogLegacy.react","FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||d("react"),k={anchor:{minHeight:"xvv7gvb",$$css:!0},bodyGlimmer:{borderTopStartRadius:"x1rcc7c0",borderTopEndRadius:"xbtbmw4",borderBottomEndRadius:"x1lie4ck",borderBottomStartRadius:"x16hxpj1",height:"x1v9usgg",marginBottom:"x1u7kmwd",$$css:!0},bodyGlimmerFirst:{width:"xktia5q",$$css:!0},bodyGlimmerSecond:{width:"xz84dc7",$$css:!0}};function a(a){return j.jsx("div",{className:"x4b6v7d xmqsq3q x1ojsi0c",children:j.jsx(c("FDSCardedDialogLegacy.react"),babelHelpers["extends"]({anchorXStyle:k.anchor,size:"medium",title:d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_LAUNCH_GK?d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_DIALOG_TITLE:h._("__JHASH__dEuExL-OBiK__JHASH__"),withCloseButton:!0},a,{children:j.jsx("div",{className:"xnmwye4",children:j.jsxs("div",{className:"x1cnzs8 xc73u3c x1gwgq1z x5ib6vp",children:[j.jsx(c("FDSGlimmer.react"),{index:1,xstyle:[k.bodyGlimmer,k.bodyGlimmerFirst]}),j.jsx(c("FDSGlimmer.react"),{index:2,xstyle:[k.bodyGlimmer,k.bodyGlimmerSecond]})]})})}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4980175375436403"}),null);
__d("CometFeedPreferencesDialogNoFavoriteQuery$Parameters",["CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometFeedPreferencesDialogNoFavoriteQuery_facebookRelayOperation"),metadata:{},name:"CometFeedPreferencesDialogNoFavoriteQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometFeedPreferencesDialogNoFavorite.entrypoint",["CometFeedPreferencesDialogNoFavoriteQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{dialogQueryReference:{parameters:b("CometFeedPreferencesDialogNoFavoriteQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("CometFeedPreferencesDialogNoFavorite.react").__setRef("CometFeedPreferencesDialogNoFavorite.entrypoint")};g["default"]=a}),98);
__d("CometGroupReshareComposerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9447234098638509"}),null);
__d("CometProfileSwitcherDialog.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("CometProfileSwitcherDialog.react").__setRef("CometProfileSwitcherDialog.entrypoint")};g["default"]=a}),98);
__d("CometProfileTypeDialogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6721068408014724"}),null);
__d("CometProfileTypeDialogRootQuery$Parameters",["CometProfileTypeDialogRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometProfileTypeDialogRootQuery_facebookRelayOperation"),metadata:{},name:"CometProfileTypeDialogRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometProfileTypeDialog.entrypoint",["CometProfileTypeDialogRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{root:{parameters:b("CometProfileTypeDialogRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometProfileTypeDialog.react").__setRef("CometProfileTypeDialog.entrypoint")};g["default"]=a}),98);
__d("FDSPulseEffect.react",["BasePulseEffect.react","FDSPulseEffectBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(2),e;b[0]!==a?(e=j.jsx(c("BasePulseEffect.react"),babelHelpers["extends"]({},a,{pulseColor_DEPRECATED:d("FDSPulseEffectBase.react").FDS_PULSE_COLORS.primary})),b[0]=a,b[1]=e):e=b[1];return e}g["default"]=a}),98);
__d("FDSListCellPulseEffect.react",["FDSPulseEffect.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={pulseEffect:{display:"x1lliihq",marginStart:"x1i64zmx",marginEnd:"x1emribx",marginLeft:null,marginRight:null,maxWidth:"x193iq5w",$$css:!0}};function a(a){var b=i(12),d,e,f;b[0]!==a?(e=a.children,d=a.xstyle,f=babelHelpers.objectWithoutPropertiesLoose(a,["children","xstyle"]),b[0]=a,b[1]=d,b[2]=e,b[3]=f):(d=b[1],e=b[2],f=b[3]);b[4]!==d?(a=[k.pulseEffect,d],b[4]=d,b[5]=a):a=b[5];b[6]!==e?(d=function(a){return j.jsx("div",{className:"xhk9q7s x1otrzb0 x1i1ezom x1o6z2jb xdj266r x11i5rnm xat24cr x1mh8g0r",ref:a,children:e})},b[6]=e,b[7]=d):d=b[7];var g;b[8]!==f||b[9]!==a||b[10]!==d?(g=j.jsx(c("FDSPulseEffect.react"),babelHelpers["extends"]({},f,{xstyle:a,children:d})),b[8]=f,b[9]=a,b[10]=d,b[11]=g):g=b[11];return g}g["default"]=a}),98);
__d("CometSettingsDropdownListItem.react",["FDSListCellPulseEffect.react","TetraListCell_DEPRECATED.react","react","useTopNavigationLogging"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.c;function a(a){var b=j(8),e=a.cellProps,f=a.itemKey,g=a.position,h=a.selected;a=a.showPulseEffect;a=a===void 0?!1:a;var k=e.onPress;f=d("useTopNavigationLogging").useSettingsItemLoggingCallbacks(f,g,h);var l=f[0];g=f[1];b[0]!==l||b[1]!==k?(h=function(a){l(),k&&k(a)},b[0]=l,b[1]=k,b[2]=h):h=b[2];f=h;b[3]!==a||b[4]!==e||b[5]!==f||b[6]!==g?(h=a?i.jsx(c("FDSListCellPulseEffect.react"),{children:i.jsx(c("TetraListCell_DEPRECATED.react"),babelHelpers["extends"]({paddingHorizontal:0},e,{onPress:f,ref:g}))}):i.jsx(c("TetraListCell_DEPRECATED.react"),babelHelpers["extends"]({},e,{onPress:f,ref:g})),b[3]=a,b[4]=e,b[5]=f,b[6]=g,b[7]=h):h=b[7];return h}g["default"]=a}),98);
__d("useCometTypeaheadLayoutInlineStrategyARIAProps",["react","useCometInternalTypeaheadFetch","useCometInternalTypeaheadState","useCometTypeaheadViewLabel"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useId;b.useMemo;var j=b.c;function a(a){var b=j(17),d=a.helperText,e=a.inputLabel;a=a.viewRole;e=e===void 0?"":e;var f=i(),g=c("useCometInternalTypeaheadFetch")();g=g.isLoading;var h=c("useCometInternalTypeaheadState")();h=h.activeEntries;var k;b[0]!==h?(k={activeEntries:h},b[0]=h,b[1]=k):k=b[1];h=c("useCometTypeaheadViewLabel")(k);b[2]!==e?(k={"aria-label":e,role:"textbox"},b[2]=e,b[3]=k):k=b[3];e=k;if(d!=null&&String(d).length>0){b[4]!==e||b[5]!==f?(k=babelHelpers["extends"]({},e,{"aria-describedby":f}),b[4]=e,b[5]=f,b[6]=k):k=b[6];e=k}d=e;k=d;b[7]!==g||b[8]!==h||b[9]!==a?(e={"aria-busy":g,"aria-label":h,role:a},b[7]=g,b[8]=h,b[9]=a,b[10]=e):e=b[10];d=e;g=d;b[11]!==f?(h={id:f},b[11]=f,b[12]=h):h=b[12];b[13]!==h||b[14]!==k||b[15]!==g?(a={ariaDescribedByProps:h,ariaInputProps:k,ariaViewProps:g},b[13]=h,b[14]=k,b[15]=g,b[16]=a):a=b[16];e=a;return e}g["default"]=a}),98);
__d("CometTypeaheadLayoutInlineStrategy.react",["CometTypeaheadHelperText.react","CometTypeaheadInternalLayoutInlineStrategy.react","react","useBaseTypeaheadLayoutContextualStrategyStateContext","useCometInternalTypeaheadFetch","useCometTypeaheadInputRefs","useCometTypeaheadInternalLayoutInlineStrategyHandlers","useCometTypeaheadLayoutInlineStrategyARIAProps"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.c,l={view:{backgroundColor:"x1jx94hy",boxSizing:"x9f619",display:"x78zum5",flexDirection:"xdt5ytf",flexGrow:"x1iyjqo2",$$css:!0}};function a(a){var b=k(56),d,e,f,g,h,m,n,o,p,q,r,s,t,u,v,w;b[0]!==a?(u=a.extraLayoutProps,r=a.helperText,d=a.inputRef,s=a.label,e=a.onBlur,f=a.onChange,g=a.onDownArrow,h=a.onEnter,m=a.onEscape,n=a.onHighlightEntry,o=a.onOutsideClick,p=a.onPressEntry,q=a.onUpArrow,t=a.viewRole,v=a.xstyles,w=babelHelpers.objectWithoutPropertiesLoose(a,["extraLayoutProps","helperText","inputRef","label","onBlur","onChange","onDownArrow","onEnter","onEscape","onHighlightEntry","onOutsideClick","onPressEntry","onUpArrow","viewRole","xstyles"]),b[0]=a,b[1]=d,b[2]=e,b[3]=f,b[4]=g,b[5]=h,b[6]=m,b[7]=n,b[8]=o,b[9]=p,b[10]=q,b[11]=r,b[12]=s,b[13]=t,b[14]=u,b[15]=v,b[16]=w):(d=b[1],e=b[2],f=b[3],g=b[4],h=b[5],m=b[6],n=b[7],o=b[8],p=b[9],q=b[10],r=b[11],s=b[12],t=b[13],u=b[14],v=b[15],w=b[16]);a=c("useCometInternalTypeaheadFetch")();a=a.isLoading;var x=c("useBaseTypeaheadLayoutContextualStrategyStateContext")(),y=x.dispatchIsOpened,z;b[17]!==y?(x=function(){y(!0)},z=[y],b[17]=y,b[18]=x,b[19]=z):(x=b[18],z=b[19]);j(x,z);x=c("useCometTypeaheadInputRefs")(d);z=x.composedRef;d=x.inputRef;b[20]!==d||b[21]!==e||b[22]!==f||b[23]!==g||b[24]!==h||b[25]!==m||b[26]!==n||b[27]!==o||b[28]!==p||b[29]!==q?(x={inputRef:d,onBlur:e,onChange:f,onDownArrow:g,onEnter:h,onEscape:m,onHighlightEntry:n,onOutsideClick:o,onPressEntry:p,onUpArrow:q},b[20]=d,b[21]=e,b[22]=f,b[23]=g,b[24]=h,b[25]=m,b[26]=n,b[27]=o,b[28]=p,b[29]=q,b[30]=x):x=b[30];d=c("useCometTypeaheadInternalLayoutInlineStrategyHandlers")(x);b[31]!==r||b[32]!==s||b[33]!==t?(e={helperText:r,inputLabel:s,viewRole:t},b[31]=r,b[32]=s,b[33]=t,b[34]=e):e=b[34];f=c("useCometTypeaheadLayoutInlineStrategyARIAProps")(e);m=(h=(g=u)==null?void 0:g.afterViewContent)!=null?h:null;p=(o=(n=u)==null?void 0:n.beforeViewContent)!=null?o:null;b[35]!==r?(q=r!=null?i.jsx(c("CometTypeaheadHelperText.react"),{text:r}):null,b[35]=r,b[36]=q):q=b[36];b[37]!==m||b[38]!==f||b[39]!==p||b[40]!==q||b[41]!==a?(x={afterViewContent:m,ariaProps:f,beforeViewContent:p,helperTextComponent:q,isAlwaysOpened:!0,isLoading:a},b[37]=m,b[38]=f,b[39]=p,b[40]=q,b[41]=a,b[42]=x):x=b[42];g=(e=v)==null?void 0:e.viewXStyle_DO_NOT_USE;b[43]!==g?(h=[l.view,g],b[43]=g,b[44]=h):h=b[44];b[45]!==v||b[46]!==h?(u=babelHelpers["extends"]({},v,{viewXStyle_DO_NOT_USE:h}),b[45]=v,b[46]=h,b[47]=u):u=b[47];b[48]!==w||b[49]!==d||b[50]!==x||b[51]!==z||b[52]!==s||b[53]!==t||b[54]!==u?(n=i.jsx(c("CometTypeaheadInternalLayoutInlineStrategy.react"),babelHelpers["extends"]({},w,d,{extraLayoutProps:x,inputRef:z,label:s,viewRole:t,xstyles:u})),b[48]=w,b[49]=d,b[50]=x,b[51]=z,b[52]=s,b[53]=t,b[54]=u,b[55]=n):n=b[55];return n}g["default"]=a}),98);
__d("PagesIntegrityEventTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:PagesIntegrityEventLoggerConfig")}),null);
__d("XFBPrivacyCenterHomeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/privacy/center/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("useCometFeedPreferencesDialog",["CometFeedPreferencesControlPanelConstants","CometFeedPreferencesControlPanelDialog.entrypoint","CometFeedPreferencesDialogLoadingState.react","CometFeedPreferencesDialogNoFavorite.entrypoint","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.useRef,k=b.c,l=function(a){return i.jsx(c("CometFeedPreferencesDialogLoadingState.react"),{onClose:a})};function a(a){var b=k(7);j(null);var e=(a=a)!=null?a:"unknown";a=d("CometFeedPreferencesControlPanelConstants").CONTROL_PANEL_LAUNCH_GK?c("CometFeedPreferencesControlPanelDialog.entrypoint"):c("CometFeedPreferencesDialogNoFavorite.entrypoint");var f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f={},b[0]=f):f=b[0];a=c("useCometEntryPointDialog")(a,f,"button",l);var g=a[0];a[1];a[2];f=a[3];b[1]!==g||b[2]!==e?(a=function(a){g({controlPanelEntryPoint:e},function(){a!=null&&a()})},b[1]=g,b[2]=e,b[3]=a):a=b[3];a=a;var h;b[4]!==a||b[5]!==f?(h=[a,f],b[4]=a,b[5]=f,b[6]=h):h=b[6];return h}g["default"]=a}),98);
__d("useCometLogoutSubmitForm",["Banzai","Promise","ServiceWorkerLoginAndLogout","WebStorageMonster","cr:3564","justknobx","react","recoverableViolation","waitForCleanupWithTimeout"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).useCallback;function a(a,d,e){return j(function(){var f=d.current;if(f==null){c("recoverableViolation")("Unable to get form ref to submit","comet_infra");return}c("waitForCleanupWithTimeout")(function(){c("ServiceWorkerLoginAndLogout").logout();c("Banzai").flush();if(c("justknobx")._("48")&&b("cr:3564")!=null)return b("cr:3564")().then(function(){c("WebStorageMonster").cleanOnLogout(a,e)});c("WebStorageMonster").cleanOnLogout(a,e);return(h||(h=b("Promise"))).resolve()},{onDone:function(){f.submit()}})},[d,a,e])}g["default"]=a}),98);
__d("useCometTypeaheadScrollableViewListStrategy",["CometScrollableArea.react","react","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea","useCometTypeaheadViewListStrategy"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.c;function a(a){var b=j(11),d=a.emptyStateContent,e=a.extraViewProps,f=a.nullstateContent,g=a.scrollableXStyle,h=a.viewItemStrategyRenderer,k=a.viewListStrategyRenderer;a=a.viewXStyle;var l=c("useCometInternalTypeaheadState")();l=l.highlightedEntry;var m=c("useCometTypeaheadKeyboardForScrollableArea")(l);b[0]!==d||b[1]!==e||b[2]!==f||b[3]!==h||b[4]!==k||b[5]!==a?(l={emptyStateContent:d,extraViewProps:e,nullstateContent:f,viewItemStrategyRenderer:h,viewListStrategyRenderer:k,viewXStyle:a},b[0]=d,b[1]=e,b[2]=f,b[3]=h,b[4]=k,b[5]=a,b[6]=l):l=b[6];var n=c("useCometTypeaheadViewListStrategy")(l);b[7]!==m||b[8]!==g||b[9]!==n?(d=function(a){return i.jsx(c("CometScrollableArea.react"),{horizontal:!1,ref:m,xstyle:g,children:i.jsx(n,babelHelpers["extends"]({},a))})},b[7]=m,b[8]=g,b[9]=n,b[10]=d):d=b[10];return d}g["default"]=a}),98);
__d("useProfileSwitcherEngagementClickCallback",["react","recoverableViolation","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;b.useMemo;var i=b.c,j=c("requireDeferred")("ProfileEngagementFalcoEvent").__setRef("useProfileSwitcherEngagementClickCallback");function a(a,b){var d=i(5),e;d[0]!==a?(e=babelHelpers["extends"]({profile_event_type:"click",profile_product_bucket:"unknown",profile_surface:"unknown"},a),d[0]=a,d[1]=e):e=d[1];e=e;var f=e;(a==null?void 0:a.profile_product_bucket)==null&&c("recoverableViolation")("profile_product_bucket is a required field for profile engagement logging","profile_comet");(a==null?void 0:a.profile_surface)==null&&c("recoverableViolation")("profile_surface is a required field for profile engagement logging","profile_comet");d[2]!==f||d[3]!==b?(e=function(a){j.onReady(function(a){a=a.log;a(function(){return f})}),b&&b(a)},d[2]=f,d[3]=b,d[4]=e):e=d[4];return e}g["default"]=a}),98);