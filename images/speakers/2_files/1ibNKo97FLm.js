;/*FB_PKG_DELIM*/

__d("BusinessMessagingProductsAnalysisFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1118");b=d("FalcoLoggerInternal").create("business_messaging_products_analysis",a);e=b;g["default"]=e}),98);
__d("BizMessagingLoggingUtils",["Actor","BusinessMessagingProductsAnalysisFalcoEvent","react","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h;f=h||d("react");f.useCallback;var i=f.c,j=function(a){var b=(a=a)!=null?a:{},c={};Object.keys(b).forEach(function(a){b[a]!=null&&(c[a]=b[a])});return c};function a(a,b,e,f,g){var h=i(9),k=d("Actor").useActor(),l=k[0];h[0]!==a||h[1]!==b||h[2]!==f||h[3]!==g||h[4]!==l||h[5]!==e?(k=function(){c("BusinessMessagingProductsAnalysisFalcoEvent").log(function(){var c;return{event:"impression",event_location:a,event_target:b,extra_data:j(f),page_id:(c=g)!=null?c:l,ref:e}})},h[0]=a,h[1]=b,h[2]=f,h[3]=g,h[4]=l,h[5]=e,h[6]=k):k=h[6];k=k;var m;h[7]!==k?(m={onImpressionStart:k},h[7]=k,h[8]=m):m=h[8];return c("useSinglePartialViewImpression")(m)}function b(a,b,e){var f=i(5),g=d("Actor").useActor(),h=g[0];f[0]!==a||f[1]!==e||f[2]!==h||f[3]!==b?(g=function(d,f){c("BusinessMessagingProductsAnalysisFalcoEvent").log(function(){var c;return{event:"click",event_location:a,event_target:d,extra_data:j(f),page_id:(c=e)!=null?c:h,ref:b}})},f[0]=a,f[1]=e,f[2]=h,f[3]=b,f[4]=g):g=f[4];return g}function e(a,b,d,e,f,g){c("BusinessMessagingProductsAnalysisFalcoEvent").log(function(){return{error_message:e,event:"click",event_location:a,event_target:b,extra_data:j(g),page_id:d,ref:f}})}g.useBizMessagingImpressionLogger=a;g.useBizMessagingClickLogger=b;g.logBizMessagingClick=e}),98);
__d("CometHiddenCommentTransparencyNUXDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="27342606218721413"}),null);
__d("CometHiddenCommentTransparencyNUXDialogQuery$Parameters",["CometHiddenCommentTransparencyNUXDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometHiddenCommentTransparencyNUXDialogQuery_facebookRelayOperation"),metadata:{},name:"CometHiddenCommentTransparencyNUXDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometHiddenCommentTransparencyNUXDialog.entrypoint",["CometHiddenCommentTransparencyNUXDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{hiddenCommentTransparencyNUXDialogQueryRef:{parameters:b("CometHiddenCommentTransparencyNUXDialogQuery$Parameters"),variables:{id:a.storyID,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometHiddenCommentTransparencyNUXDialog.react").__setRef("CometHiddenCommentTransparencyNUXDialog.entrypoint")};e=a;g["default"]=e}),98);
__d("CometUFICommentHideActionLink_commentActionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentHideActionLink_commentActionLink",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFIHideCommentLink_feedback"}],storageKey:null}],storageKey:null}],type:"XFBCommentHideActionLink",abstractKey:null};e.exports=a}),null);
__d("CometUFIHideCommentActionContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({hasHideCommentAction:!1,setHasHideCommentAction:c("emptyFunction")});g["default"]=b}),98);
__d("CometUFIHideCommentLink_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFIHideCommentLink_feedback",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"comment_hiding_transparency_bottom_screen_eligibility",storageKey:null}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("useCometHideToastMessage",["fbt","ix","FDSIcon.react","cometPushToast","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j;function a(a){var b=k(9),e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__cCUq-C3s3z8__JHASH__"),b[0]=e):e=b[0];b[1]!==a?(e={label:e,onPress:function(){return a()}},b[1]=a,b[2]=e):e=b[2];var f,g;b[3]===Symbol["for"]("react.memo_cache_sentinel")?(f=l.jsx(c("FDSIcon.react"),{icon:d("fbicon")._(i("2020"),20)}),g=h._("__JHASH__2D8cZ_F9R9J__JHASH__"),b[3]=f,b[4]=g):(f=b[3],g=b[4]);b[5]!==e?(f={action:e,icon:f,message:g,supressCloseButton:!0},b[5]=e,b[6]=f):f=b[6];var j=f;b[7]!==j?(g=function(){d("cometPushToast").cometPushToast(j)},b[7]=j,b[8]=g):g=b[8];return g}g["default"]=a}),226);
__d("CometUFIHideCommentLink.react",["fbt","ARIA_LABEL_PLACEHOLDER_FIXME","CometHiddenCommentTransparencyNUXDialog.entrypoint","CometLink.react","CometRelay","CometUFICommentActionLinkLoggingUtils","CometUFIFunnelLoggerConstants","CometUFIHideCommentActionContext","CometUFIHideCommentLink_feedback.graphql","CometUFIQPLInstanceKeyContext","FBLogger","nux:94","react","requireDeferred","useCometEntryPointDialog","useCometHideToastMessage","useCometUFICommentActionLinkImpressionLogger","useEmptyFunction","useNullthrowsViolation"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;var l=e.useCallback,m=e.useContext,n=e.useMemo,o=c("requireDeferred")("CometUFIFunnelLogger").__setRef("CometUFIHideCommentLink.react"),p=c("requireDeferred")("CometUFIHideCommentMutation").__setRef("CometUFIHideCommentLink.react"),q=c("requireDeferred")("CometUFIUnhideCommentMutation").__setRef("CometUFIHideCommentLink.react"),r={tooltipWithMaxWidth:{maxWidth:"x1jkqq1h",$$css:!0}};function a(a){var e=a.commentId,f=a.feedback,g=a.feedbackSource,j=a.feedLocation;a=m(c("CometUFIHideCommentActionContext"));var s=a.hasHideCommentAction,t=a.setHasHideCommentAction,u=d("CometRelay").useRelayEnvironment();a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometUFIHideCommentLink_feedback.graphql"),f);f=c("useNullthrowsViolation")(a.id,"tried to fetch post id of the comment item with missing data");f=c("useCometEntryPointDialog")(c("CometHiddenCommentTransparencyNUXDialog.entrypoint"),{storyID:f});var v=f[0],w=!s&&a.comment_hiding_transparency_bottom_screen_eligibility===!0;f=function(){q.onReadyImmediately(function(a){a.commit(u,{commentId:e,feedbackSource:g,feedLocation:j,isComet:!0})})};var x=c("useCometHideToastMessage")(f);a=(s=b("nux:94")==null?void 0:b("nux:94")("comet_quick_hide_tooltip_nux"))!=null?s:c("useEmptyFunction");f=a({align:"start","aria-label":c("ARIA_LABEL_PLACEHOLDER_FIXME"),arrowStyle:"inset",content:h._("__JHASH__5aNKuVhWnLG__JHASH__"),position:"above",type:"accent",xstyle:r.tooltipWithMaxWidth});var y=l(function(){t(!0),p.load().then(function(a){a.commit(u,{commentId:e,feedbackSource:g,feedLocation:j,hideLocation:"UFI",onCompleted:x,onError:function(){}})})["catch"](function(a){c("FBLogger")("ufi2").catching(a).mustfix("Error hiding comment in CometUFI, please investigate")})},[e,u,j,g,t,x]),z=l(function(){v({},function(a){a===!0&&y()})},[y,v]),A=m(c("CometUFIQPLInstanceKeyContext")),B=n(function(){return{actionLinkType:"HIDE",feedLocation:j}},[j]);s=l(function(){d("CometUFICommentActionLinkLoggingUtils").logCommentActionLinkClick(B),o.onReady(function(a){a.addPoint(A,d("CometUFIFunnelLoggerConstants").CometUFIFunnelLoggerEvents.COMMENT_ACTION_REPLY)}),w?z():y()},[B,y,w,A,z]);a=c("useCometUFICommentActionLinkImpressionLogger")(B);return k.jsx("div",{ref:a,children:k.jsx(c("CometLink.react"),{color_DEPRECATED:"secondary",display_DEPRECATED:"inline",onClick:s,ref:f,role:"button",testid:void 0,weight_DEPRECATED:"bold",children:h._("__JHASH__joKOm-4XF_K__JHASH__")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),226);
__d("CometUFICommentHideActionLink.react",["CometRelay","CometUFICommentActionLinksListItem.react","CometUFICommentHideActionLink_commentActionLink.graphql","CometUFIHideCommentLink.react","FBLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(5),f=a.commentActionLink,g=a.feedbackSource;a=a.feedLocation;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentHideActionLink_commentActionLink.graphql"),f);f=f.comment;if(f==null||f.id==null){c("FBLogger")("ufi2").mustfix("CometUFICommentHideActionLink: Can't render hide action link without a comment id");return null}var i=f.parent_feedback;if(i==null){c("FBLogger")("ufi2").mustfix("CometUFICommentHideActionLink: Can't render hide action link without a valid parent feedback");return null}var l;e[0]!==f.id||e[1]!==a||e[2]!==i||e[3]!==g?(l=k.jsx(c("CometUFICommentActionLinksListItem.react"),{children:k.jsx(c("CometUFIHideCommentLink.react"),{commentId:f.id,feedLocation:a,feedback:i,feedbackSource:g},"hideLink")},"hideLink"),e[0]=f.id,e[1]=a,e[2]=i,e[3]=g,e[4]=l):l=e[4];return l}g["default"]=a}),98);
__d("CometUFICommentHideActionLink_commentActionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFICommentHideActionLink_commentActionLink$normalization",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[a,{alias:null,args:null,kind:"ScalarField",name:"comment_hiding_transparency_bottom_screen_eligibility",storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentPagePrivateReplyActionLink_commentActionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentPagePrivateReplyActionLink_commentActionLink",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometUFICommentPrivateReplyLink_feedback"}],storageKey:null}],storageKey:null}],type:"XFBCommentPageAdminPrivateReplyActionLink",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentPrivateReplyLink_feedback.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentPrivateReplyLink_feedback",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:null,concreteType:"PrivateReplyContext",kind:"LinkedField",name:"page_private_reply",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"private_reply_render",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentPrivateReplyLink_feedback",fragmentName:"CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer",fragmentPropName:"privateReplyCometRenderer",kind:"ModuleImport"}],type:"PagesMessagingPrivateReplyCometRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentPrivateReplyLink_feedback",fragmentName:"BizInboxCommentPrivateReplyLinkRenderer_privateReplyBizRenderer",fragmentPropName:"privateReplyBizRenderer",kind:"ModuleImport"}],type:"BizMessagingPrivateReplyRenderer",abstractKey:null}],storageKey:null}],storageKey:null}],type:"Feedback",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentPrivateReplyLink.react",["CometErrorBoundary.react","CometRelay","CometUFICommentPrivateReplyLink_feedback.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l=h!==void 0?h:h=b("CometUFICommentPrivateReplyLink_feedback.graphql");function a(a){var b=j(8),e=a.commentID,f=a.feedback,g=a.feedbackSource;a=a.feedLocation;f=d("CometRelay").useFragment(l,f);var h=f==null?void 0:f.id;if(e==null||h==null)return null;f=f==null?void 0:(f=f.page_private_reply)==null?void 0:f.private_reply_render;var i;b[0]!==e||b[1]!==h||b[2]!==g||b[3]!==a?(i={commentID:e,feedbackID:h,feedbackSource:g,feedLocation:a},b[0]=e,b[1]=h,b[2]=g,b[3]=a,b[4]=i):i=b[4];b[5]!==f||b[6]!==i?(e=k.jsx(c("CometErrorBoundary.react"),{fallback:m,children:k.jsx(d("CometRelay").MatchContainer,{match:f,props:i})}),b[5]=f,b[6]=i,b[7]=e):e=b[7];return e}function m(){}g["default"]=a}),98);
__d("CometUFICommentPagePrivateReplyActionLink.react",["CometRelay","CometUFICommentActionLinksListItem.react","CometUFICommentPagePrivateReplyActionLink_commentActionLink.graphql","CometUFICommentPrivateReplyLink.react","FBLogger","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(5),f=a.commentActionLink,g=a.feedbackSource;a=a.feedLocation;f=d("CometRelay").useFragment(h!==void 0?h:h=b("CometUFICommentPagePrivateReplyActionLink_commentActionLink.graphql"),f);f=f.comment;var i=f==null?void 0:f.id;f=f==null?void 0:f.feedback;if(i==null||f==null){c("FBLogger")("ufi2").warn("CometUFICommentPagePrivateReplyActionLink: comment id or feedback cannot be null");return null}var l;e[0]!==i||e[1]!==a||e[2]!==f||e[3]!==g?(l=k.jsx(c("CometUFICommentActionLinksListItem.react"),{children:k.jsx(c("CometUFICommentPrivateReplyLink.react"),{commentID:i,feedLocation:a,feedback:f,feedbackSource:g})},"pageAdminPrivateReply"),e[0]=i,e[1]=a,e[2]=f,e[3]=g,e[4]=l):l=e[4];return l}g["default"]=a}),98);
__d("CometUFICommentPagePrivateReplyActionLink_commentActionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"CometUFICommentPagePrivateReplyActionLink_commentActionLink$normalization",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"feedback",plural:!1,selections:[a,{alias:null,args:null,concreteType:"PrivateReplyContext",kind:"LinkedField",name:"page_private_reply",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"private_reply_render",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentPrivateReplyLink_feedback",fragmentName:"CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer",fragmentPropName:"privateReplyCometRenderer",kind:"ModuleImport"}],type:"PagesMessagingPrivateReplyCometRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"CometUFICommentPrivateReplyLink_feedback",fragmentName:"BizInboxCommentPrivateReplyLinkRenderer_privateReplyBizRenderer",fragmentPropName:"privateReplyBizRenderer",kind:"ModuleImport"}],type:"BizMessagingPrivateReplyRenderer",abstractKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentPinActionLink_commentActionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentPinActionLink_commentActionLink",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"BroadcastPinnedCommentEvent",kind:"LinkedField",name:"latest_pinned_comment_event",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"pinned_comment",plural:!1,selections:b,storageKey:null}],storageKey:null},a,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:b,storageKey:null}],storageKey:null}],storageKey:null}],type:"XFBCommentPinActionLink",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentPinActionLink.react",["fbt","CometLink.react","CometRelay","CometUFICommentActionLinkLoggingUtils","CometUFICommentActionLinksListItem.react","CometUFICommentPinActionLink_commentActionLink.graphql","FBLogger","react","requireDeferred","useCometUFICommentActionLinkImpressionLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;e.useMemo;var l=e.c,m=c("requireDeferred")("CometUFIPinCommentMutation").__setRef("CometUFICommentPinActionLink.react");function a(a){var e=l(15),f=a.commentActionLink,g=a.feedLocation;a=d("CometRelay").useFragment(i!==void 0?i:i=b("CometUFICommentPinActionLink_commentActionLink.graphql"),f);f=a.comment;var j=f==null?void 0:(a=f.parent_feedback)==null?void 0:a.id,n=f==null?void 0:(a=f.parent_feedback)==null?void 0:(a=a.associated_video)==null?void 0:a.id,o=f==null?void 0:f.id,p=d("CometRelay").useRelayEnvironment();e[0]!==g?(a={actionLinkType:"PIN",feedLocation:g},e[0]=g,e[1]=a):a=e[1];a=a;var q=a;a=c("useCometUFICommentActionLinkImpressionLogger")(q);var r;e[2]!==o||e[3]!==j||e[4]!==n||e[5]!==q||e[6]!==p||e[7]!==g?(r=function(){if(o==null){c("FBLogger")("ufi2").mustfix("CometUFICommentPinActionLink: Can't render pin action link without a valid comment");return}if(j==null||n==null)return;d("CometUFICommentActionLinkLoggingUtils").logCommentActionLinkClick(q);m.onReady(function(a){a.commit(p,g,{commentID:o,feedbackID:j,videoID:n})})},e[2]=o,e[3]=j,e[4]=n,e[5]=q,e[6]=p,e[7]=g,e[8]=r):r=e[8];r=r;if((f==null?void 0:(f=f.parent_feedback)==null?void 0:(f=f.latest_pinned_comment_event)==null?void 0:(f=f.pinned_comment)==null?void 0:f.id)===o)return null;e[9]===Symbol["for"]("react.memo_cache_sentinel")?(f=h._("__JHASH__2voeM_C1sQA__JHASH__"),e[9]=f):f=e[9];e[10]!==r?(f=k.jsx(c("CometLink.react"),{color_DEPRECATED:"secondary",onClick:r,role:"button",testid:void 0,weight_DEPRECATED:"bold",children:f}),e[10]=r,e[11]=f):f=e[11];e[12]!==a||e[13]!==f?(r=k.jsx(c("CometUFICommentActionLinksListItem.react"),{children:k.jsx("div",{ref:a,children:f})}),e[12]=a,e[13]=f,e[14]=r):r=e[14];return r}g["default"]=a}),226);
__d("CometUFICommentPinActionLink_commentActionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentPinActionLink_commentActionLink$normalization",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[{alias:null,args:null,concreteType:"BroadcastPinnedCommentEvent",kind:"LinkedField",name:"latest_pinned_comment_event",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"pinned_comment",plural:!1,selections:b,storageKey:null},a],storageKey:null},a,{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:b,storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);
__d("CometUFICommentPrivateReplyDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9181264505271194"}),null);
__d("CometUFICommentPrivateReplyDialogQuery$Parameters",["CometUFICommentPrivateReplyDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometUFICommentPrivateReplyDialogQuery_facebookRelayOperation"),metadata:{},name:"CometUFICommentPrivateReplyDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometUFICommentPrivateReplyDialog.entrypoint",["CometUFICommentPrivateReplyDialogQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=a.commentID;return{queries:{privateReplyDialogQueryReference:{parameters:b("CometUFICommentPrivateReplyDialogQuery$Parameters"),variables:{id:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("CometUFICommentPrivateReplyDialog.react").__setRef("CometUFICommentPrivateReplyDialog.entrypoint")};g["default"]=a}),98);
__d("CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer",selections:[{alias:null,args:null,concreteType:"PrivateReplyContext",kind:"LinkedField",name:"page_private_reply",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink",storageKey:null}],storageKey:null}],type:"PagesMessagingPrivateReplyCometRenderer",abstractKey:null};e.exports=a}),null);
__d("CometUFICommentPrivateReplyLinkRenderer.react",["fbt","BizMessagingLoggingUtils","CometEntryPointDialogTrigger.react","CometLink.react","CometRelay","CometUFICommentActionLinkLoggingUtils","CometUFICommentPrivateReplyDialog.entrypoint","CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer.graphql","CometUFITooltip.react","FDSText.react","JSResourceForInteraction","react","useCometUFICommentActionLinkImpressionLogger"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;e.useMemo;var l=e.c,m=c("JSResourceForInteraction")("CometUFIPrivateReplyTooltipContent.react").__setRef("CometUFICommentPrivateReplyLinkRenderer.react"),n=i!==void 0?i:i=b("CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer.graphql");function a(a){var b,e=l(38),f=a.commentID,g=a.feedbackID,i=a.feedbackSource,j=a.feedLocation;a=a.privateReplyCometRenderer;a=d("CometRelay").useFragment(n,a);var o;e[0]!==j?(o={actionLinkType:"PAGE_ADMIN_PRIVATE_REPLY",feedLocation:j},e[0]=j,e[1]=o):o=e[1];j=o;var p=j;o=c("useCometUFICommentActionLinkImpressionLogger")(p);e[2]!==f||e[3]!==g||e[4]!==p?(j=function(a){if(f==null)return;d("BizMessagingLoggingUtils").logBizMessagingClick("comment_private_reply",a,null,null,null,{commentID:f,feedbackID:g});d("CometUFICommentActionLinkLoggingUtils").logCommentActionLinkClick(p)},e[2]=f,e[3]=g,e[4]=p,e[5]=j):j=e[5];var q=j;e[6]!==q?(j=function(){q("private_reply_send_message_button")},e[6]=q,e[7]=j):j=e[7];var r=j;e[8]!==q?(j=function(){q("private_reply_see_response_button")},e[8]=q,e[9]=j):j=e[9];j=j;if(f==null||g==null)return null;b=a==null?void 0:(b=a.page_private_reply)==null?void 0:b.status;a=a==null?void 0:(a=a.page_private_reply)==null?void 0:a.permalink;var s;e[10]===Symbol["for"]("react.memo_cache_sentinel")?(s=h._("__JHASH__sAiUT_OadXs__JHASH__"),e[10]=s):s=e[10];var t=s,u;bb0:switch(b){case"REPLYABLE":e[11]!==i?(s={feedbackSource:i},e[11]=i,e[12]=s):s=e[12];e[13]!==f?(b={commentID:f},e[13]=f,e[14]=b):b=e[14];e[15]!==r?(i=function(a){return k.jsx(c("CometLink.react"),{color_DEPRECATED:"highlight",display_DEPRECATED:"inline",onClick:function(){a(),r()},weight_DEPRECATED:"bold",children:t})},e[15]=r,e[16]=i):i=e[16];var v;e[17]!==s||e[18]!==b||e[19]!==i?(v=k.jsx(c("CometEntryPointDialogTrigger.react"),{dialogEntryPoint:c("CometUFICommentPrivateReplyDialog.entrypoint"),otherProps:s,preloadParams:b,preloadTrigger:"button",children:i}),e[17]=s,e[18]=b,e[19]=i,e[20]=v):v=e[20];u=v;break bb0;case"ALREADY_REPLIED":if(a==null){e[21]!==g?(s={queryVariables:{feedbackTargetID:g}},e[21]=g,e[22]=s):s=e[22];e[23]===Symbol["for"]("react.memo_cache_sentinel")?(b=k.jsx(c("FDSText.react"),{color:"primary",type:"meta4",children:t}),e[23]=b):b=e[23];e[24]!==s?(i=k.jsx(c("CometUFITooltip.react"),{tooltipContentComponent:m,tooltipContentProps:s,children:b}),e[24]=s,e[25]=i):i=e[25];u=i}else{e[26]===Symbol["for"]("react.memo_cache_sentinel")?(v=h._("__JHASH__JKFWaf2e7w5__JHASH__"),e[26]=v):v=e[26];e[27]!==a||e[28]!==j?(b=k.jsx(c("CometLink.react"),{color_DEPRECATED:"secondary",href:a,onClick:j,weight_DEPRECATED:"bold",children:v}),e[27]=a,e[28]=j,e[29]=b):b=e[29];u=b}break bb0;default:e[30]!==g?(s={queryVariables:{feedbackTargetID:g}},e[30]=g,e[31]=s):s=e[31];e[32]===Symbol["for"]("react.memo_cache_sentinel")?(i=k.jsx(c("FDSText.react"),{color:"primary",type:"meta4",children:t}),e[32]=i):i=e[32];e[33]!==s?(v=k.jsx(c("CometUFITooltip.react"),{tooltipContentComponent:m,tooltipContentProps:s,children:i}),e[33]=s,e[34]=v):v=e[34];u=v}e[35]!==o||e[36]!==u?(a=k.jsx("div",{ref:o,children:u}),e[35]=o,e[36]=u,e[37]=a):a=e[37];return a}g["default"]=a}),226);
__d("CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"CometUFICommentPrivateReplyLinkRenderer_privateReplyCometRenderer$normalization",selections:[{alias:null,args:null,concreteType:"PrivateReplyContext",kind:"LinkedField",name:"page_private_reply",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"permalink",storageKey:null}],storageKey:null}]};e.exports=a}),null);
__d("CometUFICommentUnpinActionLink_commentActionLink.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometUFICommentUnpinActionLink_commentActionLink",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[a,{alias:null,args:null,concreteType:"BroadcastPinnedCommentEvent",kind:"LinkedField",name:"latest_pinned_comment_event",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"pinned_comment",plural:!1,selections:b,storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:b,storageKey:null}],storageKey:null}],storageKey:null}],type:"XFBCommentUnpinActionLink",abstractKey:null}}();e.exports=a}),null);
__d("CometUFICommentUnpinActionLink.react",["fbt","CometLink.react","CometRelay","CometUFICommentActionLinkLoggingUtils","CometUFICommentActionLinksListItem.react","CometUFICommentUnpinActionLink_commentActionLink.graphql","react","requireDeferred","useCometUFICommentActionLinkImpressionLogger","useCometUFIVideoPlayerStateAndController"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=j||(j=d("react"));e=j;e.useCallback;e.useMemo;var l=e.c,m=c("requireDeferred")("CometUFIUnpinCommentMutation").__setRef("CometUFICommentUnpinActionLink.react");function a(a){var e,f,g=l(14),j=a.commentActionLink;a=a.feedLocation;j=d("CometRelay").useFragment(i!==void 0?i:i=b("CometUFICommentUnpinActionLink_commentActionLink.graphql"),j);j=j.comment;var n=j==null?void 0:(e=j.parent_feedback)==null?void 0:e.id,o=j==null?void 0:(e=j.parent_feedback)==null?void 0:(e=e.associated_video)==null?void 0:e.id;e=j==null?void 0:j.id;var p=d("CometRelay").useRelayEnvironment(),q=(f=c("useCometUFIVideoPlayerStateAndController")())==null?void 0:f.controller;g[0]!==a?(f={actionLinkType:"UNPIN",feedLocation:a},g[0]=a,g[1]=f):f=g[1];a=f;var r=a;f=c("useCometUFICommentActionLinkImpressionLogger")(r);g[2]!==n||g[3]!==o||g[4]!==r||g[5]!==p||g[6]!==q?(a=function(){if(n==null||o==null)return;d("CometUFICommentActionLinkLoggingUtils").logCommentActionLinkClick(r);m.onReady(function(a){a.commit(p,{feedbackID:n,video_time_offset:q==null?void 0:q.getPlayheadPosition(),videoID:o})})},g[2]=n,g[3]=o,g[4]=r,g[5]=p,g[6]=q,g[7]=a):a=g[7];a=a;if((j==null?void 0:(j=j.parent_feedback)==null?void 0:(j=j.latest_pinned_comment_event)==null?void 0:(j=j.pinned_comment)==null?void 0:j.id)!==e)return null;g[8]===Symbol["for"]("react.memo_cache_sentinel")?(j=h._("__JHASH__gRstX6xjr1w__JHASH__"),g[8]=j):j=g[8];g[9]!==a?(e=k.jsx(c("CometLink.react"),{color_DEPRECATED:"secondary",onClick:a,role:"button",testid:void 0,weight_DEPRECATED:"bold",children:j}),g[9]=a,g[10]=e):e=g[10];g[11]!==f||g[12]!==e?(j=k.jsx(c("CometUFICommentActionLinksListItem.react"),{children:k.jsx("div",{ref:f,children:e})}),g[11]=f,g[12]=e,g[13]=j):j=g[13];return j}g["default"]=a}),226);
__d("CometUFICommentUnpinActionLink_commentActionLink$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b=[a];return{kind:"SplitOperation",metadata:{},name:"CometUFICommentUnpinActionLink_commentActionLink$normalization",selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"comment",plural:!1,selections:[a,{alias:null,args:null,concreteType:"Feedback",kind:"LinkedField",name:"parent_feedback",plural:!1,selections:[a,{alias:null,args:null,concreteType:"BroadcastPinnedCommentEvent",kind:"LinkedField",name:"latest_pinned_comment_event",plural:!1,selections:[{alias:null,args:null,concreteType:"Comment",kind:"LinkedField",name:"pinned_comment",plural:!1,selections:b,storageKey:null},a],storageKey:null},{alias:null,args:null,concreteType:"Video",kind:"LinkedField",name:"associated_video",plural:!1,selections:b,storageKey:null}],storageKey:null}],storageKey:null}]}}();e.exports=a}),null);