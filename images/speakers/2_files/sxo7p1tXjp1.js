;/*FB_PKG_DELIM*/

__d("CometProfilePlusOnboardingDialog.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{}}},root:c("JSResourceForInteraction")("CometProfilePlusOnboardingDialog.react").__setRef("CometProfilePlusOnboardingDialog.entrypoint")};g["default"]=a}),98);
__d("ProfileCometActionEditProfileHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionEditProfileHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_type_name_for_content",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionEditProfileHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileTypeNameForContentV2$FbtEnum",[],(function(a,b,c,d,e,f){"use strict";a={COMMUNITY:"community profile",PAGE:"Page",PROFILE:"profile"};b=a;f["default"]=b}),66);
__d("XFBProfileTypeNameForContent.facebook",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["COMMUNITY","PAGE","PROFILE"]);c=a;f["default"]=c}),66);
__d("ProfileCometSingleEditDialogStrings",["fbt","ProfileTypeNameForContentV2$FbtEnum"],(function(a,b,c,d,e,f,g,h){"use strict";a=function(a){return a!=null?h._("__JHASH__d4mNEZfJYHX__JHASH__",[h._enum(a,c("ProfileTypeNameForContentV2$FbtEnum"))]):h._("__JHASH__FpYl6NJngba__JHASH__")};b=function(a){return a!=null&&a!=="PROFILE"?h._("__JHASH__Un91Cd1TJ67__JHASH__",[h._enum(a,c("ProfileTypeNameForContentV2$FbtEnum"))]):a==="PAGE"?h._("__JHASH__yFW8cDswGY9__JHASH__"):h._("__JHASH__ucSblBZkCYW__JHASH__")};d=function(a){return a!=null&&a!=="PROFILE"?h._("__JHASH__o7XmuvRT7pN__JHASH__",[h._enum(a,c("ProfileTypeNameForContentV2$FbtEnum"))]):a==="PAGE"?h._("__JHASH__9hGuRXT-KSG__JHASH__"):h._("__JHASH__T5d6S8UwEoi__JHASH__")};g.getSingleEditDialogTitle=a;g.getBioEditorPlaceholderText=b;g.getDefaultBioText=d}),226);
__d("ProfileCometActionEditProfileHandler.react",["CometRelay","FDSCardedDialogLoadingStateLegacy.react","ProfileCometActionEditProfileHandler_handler.graphql","ProfileCometContext","ProfileCometSingleEditDialog.entrypoint","ProfileCometSingleEditDialogStrings","react","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useCallback,l=e.useContext,m=e.useRef;function a(a){var e=a.children;a=a.handler;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionEditProfileHandler_handler.graphql"),a);a=a.profile_action;var f=l(c("ProfileCometContext")),g=f.profileID,i=a==null?void 0:(f=a.profile_owner)==null?void 0:f.profile_type_name_for_content;a=k(function(a){return j.jsx(c("FDSCardedDialogLoadingStateLegacy.react"),{onClose:a,title:d("ProfileCometSingleEditDialogStrings").getSingleEditDialogTitle(i),withCloseButton:!0})},[i]);f=m(null);a=c("useCometEntryPointDialog")(c("ProfileCometSingleEditDialog.entrypoint"),{},"button",a);var n=a[0],o=a[1],p=a[2];a=a[3];return e({onHoverIn:o,onHoverOut:p,onPress:function(){return n({profileID:g})},onPressIn:a,ref:f})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("ProfileCometActionEditProfileHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionEditProfileHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_type_name_for_content",storageKey:null},a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionLockProfileHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionLockProfileHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionLockProfileHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileCometLockedProfileHomeDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4912205825562571"}),null);
__d("ProfileCometLockedProfileHomeDialogQuery$Parameters",["ProfileCometLockedProfileHomeDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("ProfileCometLockedProfileHomeDialogQuery_facebookRelayOperation"),metadata:{},name:"ProfileCometLockedProfileHomeDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("ProfileCometLockedProfileHomeDialog.entrypoint",["JSResourceForInteraction","ProfileCometLockedProfileHomeDialogQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(){return{queries:{cometLockProfileQueryReference:{parameters:b("ProfileCometLockedProfileHomeDialogQuery$Parameters"),variables:{}}}}},root:c("JSResourceForInteraction")("ProfileCometLockedProfileHomeDialog.react").__setRef("ProfileCometLockedProfileHomeDialog.entrypoint")};d=a;g["default"]=d}),98);
__d("ProfileCometActionLockProfileHandler.react",["CometRelay","ProfileCometActionLockProfileHandler_handler.graphql","ProfileCometLockedProfileHomeDialog.entrypoint","react","unrecoverableViolation","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i;e=i||d("react");e.useCallback;var j=e.useRef,k=e.c;function a(a){var e=k(9),f=a.children;a=a.handler;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionLockProfileHandler_handler.graphql"),a);a=a==null?void 0:(a=a.profile_action)==null?void 0:(a=a.profile_owner)==null?void 0:a.id;if(a==null)throw c("unrecoverableViolation")("No profile owner is available when attempting to open Onboarding dialog.","profile_comet");j(null);e[0]===Symbol["for"]("react.memo_cache_sentinel")?(a={},e[0]=a):a=e[0];a=c("useCometEntryPointDialog")(c("ProfileCometLockedProfileHomeDialog.entrypoint"),a);var g=a[0],i=a[1],l=a[2];a=a[3];var m;e[1]!==g?(m=function(){g({entryPoint:"profile_section"})},e[1]=g,e[2]=m):m=e[2];m=m;var n;e[3]!==i||e[4]!==l||e[5]!==m||e[6]!==a||e[7]!==f?(n=f({onHoverIn:i,onHoverOut:l,onPress:m,onPressIn:a}),e[3]=i,e[4]=l,e[5]=m,e[6]=a,e[7]=f,e[8]=n):n=e[8];return n}g["default"]=a}),98);
__d("ProfileCometActionLockProfileHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionLockProfileHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionProfessionalModeOnboardingHandler_handler.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionProfessionalModeOnboardingHandler_handler",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}],storageKey:null}],type:"ProfileActionProfessionalModeOnboardingHandler",abstractKey:null};e.exports=a}),null);
__d("ProfileCometActionProfessionalModeOnboardingHandler.react",["CometProfilePlusOnboardingDialog.entrypoint","CometRelay","ProfileCometActionProfessionalModeOnboardingHandler_handler.graphql","react","unrecoverableViolation","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";var h,i;e=i||d("react");e.useCallback;var j=e.useRef,k=e.c;function a(a){var e=k(9),f=a.children;a=a.handler;a=d("CometRelay").useFragment(h!==void 0?h:h=b("ProfileCometActionProfessionalModeOnboardingHandler_handler.graphql"),a);a=a==null?void 0:(a=a.profile_action)==null?void 0:(a=a.profile_owner)==null?void 0:a.id;if(a==null)throw c("unrecoverableViolation")("No profile owner is available when attempting to open Onboarding dialog.","profile_plus");j(null);e[0]===Symbol["for"]("react.memo_cache_sentinel")?(a={},e[0]=a):a=e[0];a=c("useCometEntryPointDialog")(c("CometProfilePlusOnboardingDialog.entrypoint"),a);var g=a[0],i=a[1],l=a[2];a=a[3];var m;e[1]!==g?(m=function(){g({})},e[1]=g,e[2]=m):m=e[2];m=m;var n;e[3]!==i||e[4]!==l||e[5]!==m||e[6]!==a||e[7]!==f?(n=f({onHoverIn:i,onHoverOut:l,onPress:m,onPressIn:a}),e[3]=i,e[4]=l,e[5]=m,e[6]=a,e[7]=f,e[8]=n):n=e[8];return n}g["default"]=a}),98);
__d("ProfileCometActionProfessionalModeOnboardingHandler_handler$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{kind:"SplitOperation",metadata:{},name:"ProfileCometActionProfessionalModeOnboardingHandler_handler$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"profile_owner",plural:!1,selections:[a],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("ProfileCometActionProfessionalModeOnboardingLogger_logger.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"ProfileCometActionProfessionalModeOnboardingLogger_logger",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_disabled",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_locked_profile_see_promode_turn_on_button",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_ineligible_profile_see_turn_on_button",storageKey:null}],type:"ProfileActionOnboarding",abstractKey:null}],storageKey:null}],type:"ProfileActionProfessionalModeOnboardingLogger",abstractKey:null};e.exports=a}),null);
__d("useCometProfessionalModeOnboardingViewUnitLogger",["Actor","react","requireDeferred","useSinglePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useCallback;var i=b.c,j=c("requireDeferred")("CometPrimaryProfilePlusOnboardingFalcoEvent").__setRef("useCometProfessionalModeOnboardingViewUnitLogger");function a(a,b,e,f,g){var h=i(9),k=f===void 0?null:f,l=g===void 0?null:g;f=d("Actor").useActor();var m=f[0];h[0]!==l||h[1]!==a||h[2]!==b||h[3]!==k||h[4]!==m||h[5]!==e?(g=function(){j.onReady(function(c){c.log(function(){return{eligibility_failure_reason:l,event:a,event_target:b,extra_data:k===null?null:{is_disabled:k.toString()},flow_type:"general",profile_id:m,surface:e}})})},h[0]=l,h[1]=a,h[2]=b,h[3]=k,h[4]=m,h[5]=e,h[6]=g):g=h[6];f=g;h[7]!==f?(g={onImpressionStart:f},h[7]=f,h[8]=g):g=h[8];return c("useSinglePartialViewImpression")(g)}g["default"]=a}),98);
__d("ProfileCometActionProfessionalModeOnboardingLogger.react",["ProfileCometActionProfessionalModeOnboardingLogger_logger.graphql","RelayHooks","react","useCometProfessionalModeOnboardingViewUnitLogger"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var e=j(5),f=a.children;a=a.logger;a=d("RelayHooks").useFragment(h!==void 0?h:h=b("ProfileCometActionProfessionalModeOnboardingLogger_logger.graphql"),a);if(e[0]!==a.profile_action){var g;g=(g=a.profile_action)!=null?g:{};e[0]=a.profile_action;e[1]=g}else g=e[1];a=g;g=a.can_ineligible_profile_see_turn_on_button;var i=a.can_locked_profile_see_promode_turn_on_button;a=a.is_disabled;g=g===void 0?!1:g;i=i===void 0?!1:i;var l=null;i===!0?l="locked_profile":g===!0&&(l="not_transitionable");i=c("useCometProfessionalModeOnboardingViewUnitLogger")("exposure_onboarding","permanent_onboarding_entry_point","permanent_entry",a,l);e[2]!==i||e[3]!==f?(g=k.jsx("div",{ref:i,children:f}),e[2]=i,e[3]=f,e[4]=g):g=e[4];return g}g["default"]=a}),98);
__d("ProfileCometActionProfessionalModeOnboardingLogger_logger$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"ProfileCometActionProfessionalModeOnboardingLogger_logger$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"profile_action",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_disabled",storageKey:null},{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"can_locked_profile_see_promode_turn_on_button",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"can_ineligible_profile_see_turn_on_button",storageKey:null}],type:"ProfileActionOnboarding",abstractKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]};e.exports=a}),null);