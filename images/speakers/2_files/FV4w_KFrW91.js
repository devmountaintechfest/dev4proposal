;/*FB_PKG_DELIM*/

__d("UnifiedShareSheetSendMessageButtonPlaceholder.react",["FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={glimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"xc9qbxq",width:"xh8yej3",$$css:!0}};function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",{className:"xexx8yu",children:j.jsx(c("FDSGlimmer.react"),{index:0,xstyle:k.glimmer})}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("UnifiedShareSheetSendMessageComposerPlaceholder.react",["FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={glimmer:{borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",height:"xc9qbxq",width:"xh8yej3",$$css:!0}};function a(){var a=i(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx("div",{className:"x1pi30zi x1l90r2v x1swvt13 xexx8yu",children:j.jsx(c("FDSGlimmer.react"),{index:0,xstyle:k.glimmer})}),a[0]=b):b=a[0];return b}g["default"]=a}),98);
__d("CometMessengerReshareFooterPlaceholder.react",["CometColumn.react","CometColumnItem.react","UnifiedShareSheetSendMessageButtonPlaceholder.react","UnifiedShareSheetSendMessageComposerPlaceholder.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h;function a(a){var b=i(4);a=a.footerXStyle;var d;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(d=j.jsx(c("CometColumnItem.react"),{paddingHorizontal:0,children:j.jsx(c("UnifiedShareSheetSendMessageComposerPlaceholder.react"),{})}),b[0]=d):d=b[0];var e;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,children:j.jsx(c("UnifiedShareSheetSendMessageButtonPlaceholder.react"),{})}),b[1]=e):e=b[1];b[2]!==a?(d=j.jsxs(c("CometColumn.react"),{paddingVertical:12,spacing:0,xstyle:a,children:[d,e]}),b[2]=a,b[3]=d):d=b[3];return d}g["default"]=a}),98);
__d("CometMessengerResharesDialogWrapper.react",["FDSDialog.react","FDSDialogPage.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={dialogPage:{maxHeight:"x1fd7afb",minHeight:"xajhti9",$$css:!0}};function a(a){var b=i(6),d=a.children,e=a.footer,f=a.header,g=a.isPushPageView;a=a.onClose;var h;b[0]!==g||b[1]!==e||b[2]!==f||b[3]!==d||b[4]!==a?(h=g?j.jsx(c("FDSDialogPage.react"),{disablePageScroll:!0,footer:e,header:f,mobileFullHeight:!1,pageXStyle:k.dialogPage,children:d}):j.jsx(c("FDSDialog.react"),{disablePageScroll:!0,footer:e,header:f,mobileFullHeight:!1,onClose:a,pageXStyle:k.dialogPage,children:d}),b[0]=g,b[1]=e,b[2]=f,b[3]=d,b[4]=a,b[5]=h):h=b[5];return h}g["default"]=a}),98);
__d("CometResharesSearchTargetsAreaPlaceholder.react",["CometColumn.react","CometColumnItem.react","CometRow.react","CometRowItem.react","FDSGlimmer.react","FDSUnitHeader.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).c,j=h,k={profilePictureGlimmer:{borderTopStartRadius:"x107yiy2",borderTopEndRadius:"xv8uw2v",borderBottomEndRadius:"x1tfwpuw",borderBottomStartRadius:"x2g32xy",height:"x1vqgdyp",width:"x100vrsf",$$css:!0},searchBarGlimmer:{borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",height:"xc9qbxq",width:"xh8yej3",$$css:!0},userNameGlimmer:{borderTopStartRadius:"x1a2cdl4",borderTopEndRadius:"xnhgr82",borderBottomEndRadius:"x1qt0ttw",borderBottomStartRadius:"xgk8upj",height:"x1qx5ct2",width:"xh8yej3",$$css:!0}},l=function(){return j.jsx(c("CometColumnItem.react"),{children:j.jsxs(c("CometRow.react"),{paddingHorizontal:0,paddingTop:8,spacing:12,verticalAlign:"center",children:[j.jsx(c("CometRowItem.react"),{children:j.jsx(c("FDSGlimmer.react"),{index:1,xstyle:k.profilePictureGlimmer})}),j.jsx(c("CometRowItem.react"),{expanding:!0,children:j.jsx(c("FDSGlimmer.react"),{index:1,xstyle:k.userNameGlimmer})})]})})};function a(a){var b=i(16),d=a.headline,e=a.numberOfListCells,f=a.paddingHorizontal,g=a.paddingTop,h=a.paddingVertical;a=a.shouldShowSearchBar;e=e===void 0?3:e;f=f===void 0?16:f;h=h===void 0?12:h;a=a===void 0?!1:a;var m;if(b[0]!==e){m=[];for(var n=0;n<e;n++)m.push(j.jsx(l,{},n));b[0]=e;b[1]=m}else m=b[1];b[2]!==a?(n=a&&j.jsx(c("CometColumnItem.react"),{paddingTop:0,paddingVertical:8,children:j.jsx(c("FDSGlimmer.react"),{index:1,xstyle:k.searchBarGlimmer})}),b[2]=a,b[3]=n):n=b[3];b[4]!==d||b[5]!==a?(e=d!=null&&j.jsx(c("CometColumnItem.react"),{paddingTop:a?void 0:0,paddingVertical:12,children:j.jsx(c("FDSUnitHeader.react"),{headline:d,level:3,paddingHorizontal:0,paddingTop:8})}),b[4]=d,b[5]=a,b[6]=e):e=b[6];b[7]!==m?(d=j.jsx(c("CometColumnItem.react"),{children:j.jsx(c("CometColumn.react"),{paddingHorizontal:8,paddingTop:4,spacing:8,children:m})}),b[7]=m,b[8]=d):d=b[8];b[9]!==f||b[10]!==g||b[11]!==h||b[12]!==n||b[13]!==e||b[14]!==d?(a=j.jsxs(c("CometColumn.react"),{paddingHorizontal:f,paddingTop:g,paddingVertical:h,children:[n,e,d]}),b[9]=f,b[10]=g,b[11]=h,b[12]=n,b[13]=e,b[14]=d,b[15]=a):a=b[15];return a}g["default"]=a}),98);
__d("CometMessengerResharesDialogPlaceholder.react",["fbt","CometMessengerReshareFooterPlaceholder.react","CometMessengerResharesDialogWrapper.react","CometResharesSearchTargetsAreaPlaceholder.react","FDSDialogHeader.react","react","usePopPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l={footer:{backgroundColor:"x1jx94hy",borderTopColor:"x1pdss0j",borderTopStyle:"x13fuv20",borderTopWidth:"x178xt8z",$$css:!0}};function a(a){var b=j(15),d=a.isPushPageView,e=a.numberOfTargetRows;a=a.onClose;e=e===void 0?10:e;var f;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(f=h._("__JHASH__o5REzpc2Zyg__JHASH__"),b[0]=f):f=b[0];f=f;var g=c("usePopPage")(),i;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(i=k.jsx(c("CometMessengerReshareFooterPlaceholder.react"),{footerXStyle:l.footer}),b[1]=i):i=b[1];var m;b[2]!==g?(m=function(){g&&g()},b[2]=g,b[3]=m):m=b[3];b[4]!==m||b[5]!==a||b[6]!==d?(f=k.jsx(c("FDSDialogHeader.react"),{onBack:m,onClose:a,text:f,withBackButton:d,withCloseButton:!0}),b[4]=m,b[5]=a,b[6]=d,b[7]=f):f=b[7];b[8]!==e?(m=k.jsx(c("CometResharesSearchTargetsAreaPlaceholder.react"),{numberOfListCells:e,paddingHorizontal:16,paddingTop:12,paddingVertical:12,shouldShowSearchBar:!0}),b[8]=e,b[9]=m):m=b[9];b[10]!==f||b[11]!==d||b[12]!==a||b[13]!==m?(e=k.jsx(c("CometMessengerResharesDialogWrapper.react"),{footer:i,header:f,isPushPageView:d,onClose:a,children:m}),b[10]=f,b[11]=d,b[12]=a,b[13]=m,b[14]=e):e=b[14];return e}g["default"]=a}),226);
__d("CometMessengerResharesUpdatedDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7308187005970048"}),null);
__d("CometMessengerResharesUpdatedDialogQuery$Parameters",["CometMessengerResharesUpdatedDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometMessengerResharesUpdatedDialogQuery_facebookRelayOperation"),metadata:{},name:"CometMessengerResharesUpdatedDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometMessengerResharesUpdatedDialog.entrypoint",["CometMessengerResharesUpdatedDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){var a=c("gkx")("927"),b=c("gkx")("24317");return{queries:{queryReference:{parameters:c("CometMessengerResharesUpdatedDialogQuery$Parameters"),variables:{isLinkSharingEnabled:a,scale:d("WebPixelRatio").get(),shouldDisableMessengerListRanking:b}}}}},root:c("JSResourceForInteraction")("CometMessengerResharesUpdatedDialog.react").__setRef("CometMessengerResharesUpdatedDialog.entrypoint")};g["default"]=a}),98);
__d("CometUFIAdaptiveWhatsAppActionRenderer_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIAdaptiveWhatsAppActionRenderer_renderer",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},a,{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"shareable_from_perspective_of_feed_ufi",plural:!1,selections:[a],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"external_share_url",storageKey:null},{alias:null,args:null,concreteType:"LinkSharingDisclosureImpressionCount",kind:"LinkedField",name:"ls_disclosure_impression_count",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"inline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bottom_sheet",storageKey:null}],storageKey:null}],type:"XFBUFIAdaptiveWhatsAppActionRenderer",abstractKey:null}}();e.exports=a}),null);
__d("CometUFILinkSharingDisclosureDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7963469257017751"}),null);
__d("CometUFILinkSharingDisclosureDialogQuery$Parameters",["CometUFILinkSharingDisclosureDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometUFILinkSharingDisclosureDialogQuery_facebookRelayOperation"),metadata:{},name:"CometUFILinkSharingDisclosureDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometUFILinkSharingDisclosureDialog.entrypoint",["CometUFILinkSharingDisclosureDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{disclosureDialogQueryRef:{parameters:c("CometUFILinkSharingDisclosureDialogQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUFILinkSharingDisclosureDialog.react").__setRef("CometUFILinkSharingDisclosureDialog.entrypoint")};g["default"]=a}),98);
__d("CometUnifiedShareSheetGating",["gkx","qex"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("24315")}function b(){return c("gkx")("24317")}function d(){return c("qex")._("799")===!0||c("qex")._("604")===!0}function e(){return c("gkx")("6245")}function f(){return c("gkx")("7452")}function h(){return c("qex")._("667")===!0}g.shouldEnableE2EEDebugIndicator=a;g.shouldDisableMessengerListRanking=b;g.shouldForceShowLinkSharingDisclosure=d;g.shouldUseOriginalPostUrl=e;g.shouldEnable30Recent70SuggestedContacts=f;g.shouldEnableUSSSingleFetchXMA=h}),98);
__d("useLinkSharingCreateWrappedUrlMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8809105015789696"}),null);
__d("useLinkSharingCreateWrappedUrlMutation.graphql",["useLinkSharingCreateWrappedUrlMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"XFBCreateShareUrlWrapperResponsePayload",kind:"LinkedField",name:"xfb_create_share_url_wrapper",plural:!1,selections:[{alias:null,args:null,concreteType:"XFBShareURLWrapper",kind:"LinkedField",name:"share_url_wrapper",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_content_url",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"wrapped_url",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useLinkSharingCreateWrappedUrlMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useLinkSharingCreateWrappedUrlMutation",selections:c},params:{id:b("useLinkSharingCreateWrappedUrlMutation_facebookRelayOperation"),metadata:{},name:"useLinkSharingCreateWrappedUrlMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useLinkSharingCreateWrappedUrlMutation",["RelayHooks","react","useLinkSharingCreateWrappedUrlMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;c=i||d("react");c.useCallback;var j=c.c,k=h!==void 0?h:h=b("useLinkSharingCreateWrappedUrlMutation.graphql");function a(){var a=j(2),b=d("RelayHooks").useMutation(k),c=b[0];a[0]!==c?(b=function(a){var b=a.onCompleted,d=a.onError,e=a.originalContentUrl;a=a.productType;return c({onCompleted:b,onError:d,variables:{input:{original_content_url:e,product_type:a}}})},a[0]=c,a[1]=b):b=a[1];return b}g["default"]=a}),98);
__d("useLinkSharingGetWrappedUrlPushToast",["fbt","CometProgressRingIndeterminate.react","cometPushToast","react","useCurrentDisplayMode"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.c;function a(a){var b=k(3),e=c("useCurrentDisplayMode")(),f;b[0]!==e||b[1]!==a?(f=function(){return d("cometPushToast").cometPushToast({icon:j.jsx(c("CometProgressRingIndeterminate.react"),{color:e==="light"?"light":"dark",size:16}),message:h._("__JHASH__rgd6hk1-bPZ__JHASH__")},void 0,a)},b[0]=e,b[1]=a,b[2]=f):f=b[2];return f}g["default"]=a}),226);
__d("CometUFIAdaptiveWhatsAppActionRenderer.react",["fbt","ix","CometAdaptiveUFIGating","CometExternalShareTracking","CometLinkSharingUtil","CometPressable.react","CometRelay","CometRow.react","CometRowItem.react","CometUFIAdaptiveWhatsAppActionRenderer_renderer.graphql","CometUFILinkSharingDisclosureDialog.entrypoint","CometUnifiedShareSheetGating","FDSIcon.react","FDSText.react","TintableIconSource","WebStorage","cr:8265","goUriOnNewWindow","react","useCometEntryPointDialog","useLinkSharingCreateWrappedUrlMutation","useLinkSharingGetWrappedUrlPushToast","useToasterStateManager","useUnifiedShareSheetLogger"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l,m=l||(l=d("react"));e=l;e.useCallback;e.useMemo;var n=e.useRef,o=e.c,p=d("CometUnifiedShareSheetGating").shouldForceShowLinkSharingDisclosure(),q=d("CometAdaptiveUFIGating").getWrappedUrlMaxDelayMS(),r={labelContainer:{height:"xn3w4p2",whiteSpace:"xuxw1ft",$$css:!0}};function a(a){var e,f=o(54),g=a.color,l=a.feedLocation,s=a.renderer,t=a.textType;a=a.xstyle;t=t===void 0?"bodyLink3":t;s=d("CometRelay").useFragment(j!==void 0?j:j=b("CometUFIAdaptiveWhatsAppActionRenderer_renderer.graphql"),s);var u=s==null?void 0:s.story,v=(e=(e=u==null?void 0:(e=u.shareable_from_perspective_of_feed_ufi)==null?void 0:e.url)!=null?e:u==null?void 0:u.url)!=null?e:"";if(f[0]!==(s==null?void 0:s.external_share_url)||f[1]!==v){e=(e=(e=s==null?void 0:s.external_share_url)!=null?e:d("CometExternalShareTracking").getWhatsAppShareURL(v))!=null?e:"";f[0]=s==null?void 0:s.external_share_url;f[1]=v;f[2]=e}else e=f[2];var w=e,x=d("CometLinkSharingUtil").ENABLE_LINK_SHARING_ON_4TH_UFI&&((e=s==null?void 0:(e=s.ls_disclosure_impression_count)==null?void 0:e.bottom_sheet)!=null?e:0)<d("CometLinkSharingUtil").DIALOG_DISCLOSURE_IMPRESSION_COUNT_MAX&&((s=s==null?void 0:(e=s.ls_disclosure_impression_count)==null?void 0:e.inline)!=null?s:0)<d("CometLinkSharingUtil").INLINE_DISCLOSURE_IMPRESSION_COUNT_MAX&&((e=(k||(k=c("WebStorage"))).getLocalStorageForRead())==null?void 0:e.getItem(d("CometLinkSharingUtil").DIALOG_DISCLOSURE_STORAGE_KEY))!=="true"||p,y=n(""),z=n(null);s=c("useUnifiedShareSheetLogger")();var A=s.onShareOptionSelected,B=c("useLinkSharingCreateWrappedUrlMutation")();f[3]!==l?(e=d("CometLinkSharingUtil").getProductTypeAndSurfaceByFeedLocation(l),f[3]=l,f[4]=e):e=f[4];s=e;var C=s.productType,D=s.shareSheetSurface,E=b("cr:8265")();f[5]===Symbol["for"]("react.memo_cache_sentinel")?(e={},f[5]=e):e=f[5];s=c("useCometEntryPointDialog")(c("CometUFILinkSharingDisclosureDialog.entrypoint"),e);var F=s[0],G=c("useToasterStateManager")(),H=c("useLinkSharingGetWrappedUrlPushToast")(G);u==null?void 0:u.post_id;e=u==null?void 0:u.post_id;f[6]!==l||f[7]!==e?(s={entry_point:l,shareable_entity_fbid:e,sharing_action_audience:"private",sharing_action_destination:"whatsapp",sharing_component_name:"ufi_whatsapp_button"},f[6]=l,f[7]=e,f[8]=s):s=f[8];e=s;var I=e;f[9]!==A||f[10]!==I?(s=function(a){A(babelHelpers["extends"]({},I,{is_link_sharing_url_used:d("CometLinkSharingUtil").isLinkSharingUrlUsed(a)})),c("goUriOnNewWindow")(a)},f[9]=A,f[10]=I,f[11]=s):s=f[11];var J=s;f[12]!==J||f[13]!==w?(e=function(a){window.clearTimeout(z.current);a=(a=a.xfb_create_share_url_wrapper)==null?void 0:a.share_url_wrapper;a=d("CometExternalShareTracking").getWhatsAppShareURL(a==null?void 0:a.wrapped_url);a!=null&&(y.current=a);if(z.current){J((a=a)!=null?a:w)}},f[12]=J,f[13]=w,f[14]=e):e=f[14];var K=e;f[15]!==w||f[16]!==J||f[17]!==H||f[18]!==B||f[19]!==G||f[20]!==K||f[21]!==v||f[22]!==C?(s=function(){if(!d("CometLinkSharingUtil").ENABLE_LINK_SHARING_ON_4TH_UFI||y.current!==""){var a=y.current===""?w:y.current;J(a);return}var b=H();B({onCompleted:function(a){G["delete"](b),K(a)},originalContentUrl:v,productType:C});z.current=window.setTimeout(function(){G["delete"](b),J(y.current===""?w:y.current),z.current=null},q);return function(){window.clearTimeout(z.current)}},f[15]=w,f[16]=J,f[17]=H,f[18]=B,f[19]=G,f[20]=K,f[21]=v,f[22]=C,f[23]=s):s=f[23];var L=s;if(u==null||w==null)return null;s=(e=g)!=null?e:"secondary";g=(e=g)!=null?e:"secondary";f[24]!==E||f[25]!==D||f[26]!==x||f[27]!==B||f[28]!==K||f[29]!==v||f[30]!==C||f[31]!==F||f[32]!==u||f[33]!==J||f[34]!==w||f[35]!==L?(e=function(){y.current!==""&&E&&E({loggingMetrics:{},shareSheetSurface:D,wrappedUrl:y.current});if(x){var a;B({onCompleted:K,originalContentUrl:v,productType:C});F({shareableID:(a=u==null?void 0:u.post_id)!=null?a:""},function(){J(y.current===""?w:y.current)});(k||(k=c("WebStorage"))).setItemGuarded(k.getLocalStorage(),d("CometLinkSharingUtil").DIALOG_DISCLOSURE_STORAGE_KEY,"true")}else L()},f[24]=E,f[25]=D,f[26]=x,f[27]=B,f[28]=K,f[29]=v,f[30]=C,f[31]=F,f[32]=u,f[33]=J,f[34]=w,f[35]=L,f[36]=e):e=f[36];var M;f[37]!==a?(M=[r.labelContainer,a],f[37]=a,f[38]=M):M=f[38];f[39]===Symbol["for"]("react.memo_cache_sentinel")?(a=new(c("TintableIconSource"))("FB",i("389937"),20),f[39]=a):a=f[39];var N;f[40]!==g||f[41]!==a?(N=m.jsx(c("CometRowItem.react"),{children:m.jsx(c("FDSIcon.react"),{color:g,icon:a})}),f[40]=g,f[41]=a,f[42]=N):N=f[42];f[43]!==l||f[44]!==s||f[45]!==t?(g=l==="COMET_MEDIA_VIEWER"?null:m.jsx(c("CometRowItem.react"),{children:m.jsx(c("FDSText.react"),{color:s,type:t,children:h._("__JHASH__Ga1UMOUnQnv__JHASH__")})}),f[43]=l,f[44]=s,f[45]=t,f[46]=g):g=f[46];f[47]!==M||f[48]!==N||f[49]!==g?(a=m.jsxs(c("CometRow.react"),{align:"center",expanding:!0,paddingTop:0,spacingHorizontal:8,verticalAlign:"center",xstyle:M,children:[N,g]}),f[47]=M,f[48]=N,f[49]=g,f[50]=a):a=f[50];f[51]!==e||f[52]!==a?(l=m.jsx(c("CometPressable.react"),{onPress:e,overlayRadius:4,preventContextMenu:!0,testid:void 0,children:a}),f[51]=e,f[52]=a,f[53]=l):l=f[53];return l}g["default"]=a}),226);
__d("CometUFIAdaptiveWhatsAppActionRenderer_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFIAdaptiveWhatsAppActionRenderer_renderer$normalization",selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"story",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"post_id",storageKey:null},a,b,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"shareable_from_perspective_of_feed_ufi",plural:!1,selections:[b,a,{kind:"InlineFragment",selections:[c],type:"Node",abstractKey:"__isNode"}],storageKey:null},c],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"external_share_url",storageKey:null},{alias:null,args:null,concreteType:"LinkSharingDisclosureImpressionCount",kind:"LinkedField",name:"ls_disclosure_impression_count",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"inline",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"bottom_sheet",storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("useUpdateLinkSharingUrlMetadataMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6953785288084415"}),null);
__d("useUpdateLinkSharingUrlMetadataMutation.graphql",["useUpdateLinkSharingUrlMetadataMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"XFBCreateOrUpdateShareUrlWrapperMetadataResponsePayload",kind:"LinkedField",name:"xfb_create_or_update_share_url_wrapper_metadata",plural:!1,selections:[{alias:null,args:null,concreteType:"XFBShareURLWrapperMetadata",kind:"LinkedField",name:"share_url_wrapper_metadata",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useUpdateLinkSharingUrlMetadataMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useUpdateLinkSharingUrlMetadataMutation",selections:c},params:{id:b("useUpdateLinkSharingUrlMetadataMutation_facebookRelayOperation"),metadata:{},name:"useUpdateLinkSharingUrlMetadataMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("useUpdateLinkSharingUrlMetadataMutation",["RelayHooks","react","useUpdateLinkSharingUrlMetadataMutation.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i;c=i||d("react");c.useCallback;var j=c.c,k=h!==void 0?h:h=b("useUpdateLinkSharingUrlMetadataMutation.graphql");function a(){var a=j(2),b=d("RelayHooks").useMutation(k),c=b[0];a[0]!==c?(b=function(a){var b=a.loggingMetrics,d=a.onCompleted,e=a.onError,f=a.shareSheetSurface;a=a.wrappedUrl;return c({onCompleted:d,onError:e,variables:{input:{logging_metrics:b,sharesheet_surface:f,wrapped_url:a}}})},a[0]=c,a[1]=b):b=a[1];return b}g["default"]=a}),98);