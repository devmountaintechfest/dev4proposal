;/*FB_PKG_DELIM*/

__d("useComposerHeaderOnClose",["fbt","CometComposerDirtyTracker","emptyFunction","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||d("react")).c;function a(a){var b=j(7),e=a.creationSessionID,f=a.isDirty,g=a.isEmpty,i=a.onClose;a=a.triggerUnsavedChangesWarning;var k=c("useCometConfirmationDialog")();if(b[0]!==a||b[1]!==f||b[2]!==g||b[3]!==k||b[4]!==e||b[5]!==i){var l;l=a===!0?function(){f===!0&&g!==!0?k({body:h._("__JHASH__IadpR1L6YdB__JHASH__"),cancel:h._("__JHASH__DJnbvd6w38Q__JHASH__"),confirm:h._("__JHASH__ZxUcPxGzo9j__JHASH__"),title:h._("__JHASH__F-CluDWnn28__JHASH__")},function(){d("CometComposerDirtyTracker").setIsComposerDirty(e,!1),i==null?void 0:i()}):i&&i()}:(l=i)!=null?l:c("emptyFunction");b[0]=a;b[1]=f;b[2]=g;b[3]=k;b[4]=e;b[5]=i;b[6]=l}else l=b[6];return l}g["default"]=a}),226);
__d("CometComposerHeader.react",["fbt","ix","CometTrackingNodeProvider.react","FDSText.react","TetraCircleButton.react","cr:8468","fbicon","react","useComposerHeaderOnClose","withComposerViewStatePart"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=(j||(j=d("react"))).c,l=j;function a(a){var e=k(26),f=a.closeButtonTestID,g=a.creationSessionID,j=a.id,m=a.isDirty,n=a.isEmpty,o=a.onBack,p=a.onClose,q=a.testid,r=a.title,s=a.triggerUnsavedChangesWarning,t=a.withBackButton;a=a.withCloseButton;f=f===void 0?"CometComposerHeader-CloseButton":f;m=m===void 0?!1:m;s=s===void 0?!1:s;t=t===void 0?!1:t;a=a===void 0?!1:a;var u;e[0]!==g||e[1]!==m||e[2]!==n||e[3]!==p||e[4]!==s?(u={creationSessionID:g,isDirty:m,isEmpty:n,onClose:p,triggerUnsavedChangesWarning:s},e[0]=g,e[1]=m,e[2]=n,e[3]=p,e[4]=s,e[5]=u):u=e[5];g=c("useComposerHeaderOnClose")(u);e[6]!==r||e[7]!==j?(m=r!=null?l.jsx("div",{className:"x6s0dn4 x1nb4dca x1q0q8m5 xso031l x9f619 x78zum5 xng8ra xl56j7k",children:l.jsx(c("FDSText.react"),{id:j,isSemanticHeading:!0,numberOfLines:1,type:"headlineEmphasized2",children:r})}):null,e[6]=r,e[7]=j,e[8]=m):m=e[8];e[9]===Symbol["for"]("react.memo_cache_sentinel")?(n="x78zum5 x92rtbv x10l6tqk x1tk7jg1",p=b("cr:8468")!=null?l.jsx(b("cr:8468"),{}):null,e[9]=n,e[10]=p):(n=e[9],p=e[10]);e[11]!==a||e[12]!==g||e[13]!==f?(s=a?l.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:141,children:l.jsx("div",{className:"xurb0ha","data-testid":void 0,children:l.jsx(c("TetraCircleButton.react"),{color_DEPRECATED:"secondary",icon:d("fbicon")._(i("478233"),20),label:h._("__JHASH__cCrSTii9yXy__JHASH__"),onPress:g,size:36,testid:void 0})})}):null,e[11]=a,e[12]=g,e[13]=f,e[14]=s):s=e[14];e[15]!==s?(u=l.jsxs("div",{className:n,children:[p,s]}),e[15]=s,e[16]=u):u=e[16];e[17]!==t||e[18]!==o?(j=t?l.jsx("div",{className:"x16q8cke x10l6tqk x1tk7jg1","data-testid":void 0,children:l.jsx(c("TetraCircleButton.react"),{color_DEPRECATED:"secondary",icon:d("fbicon")._(i("512647"),20),label:h._("__JHASH__v6nfNn2Wv-y__JHASH__"),onPress:o,size:36})}):null,e[17]=t,e[18]=o,e[19]=j):j=e[19];e[20]!==r||e[21]!==q||e[22]!==m||e[23]!==u||e[24]!==j?(a=l.jsxs("div",{"aria-label":r,"data-testid":void 0,role:"dialog",children:[m,u,j]}),e[20]=r,e[21]=q,e[22]=m,e[23]=u,e[24]=j,e[25]=a):a=e[25];return a}e=c("withComposerViewStatePart")(a,function(a){return{creationSessionID:a.creationSessionID,isDirty:a.isDirty,isEmpty:(a=a.isEmptyMetaData)==null?void 0:a.isEmpty}});g["default"]=e}),226);
__d("CometComposerPrivacySelectorButton_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorButton_scope",selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacyIcon_scope"},{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorLabel_scope"},{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDescriptionLabel_scope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorHelpers",["fbt","recoverableViolation"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){return a==null?null:h._("__JHASH__TevE6dG-7BA__JHASH__",[h._param("privacyLabel",a)])}function b(a,b){return a===!0&&b!=="NONE"}function i(a){switch(a){case null:case void 0:return null;case"SPECIFIC_FRIENDS":case"FB_STORIES_SPECIFIC_FRIENDS":return"SPECIFIC_FRIENDS";case"FRIENDS_EXCEPT":case"FB_SHORTS_FRIENDS_EXCEPT":case"SOUNDBITES_FRIENDS_EXCEPT":case"FB_STORIES_FRIENDS_EXCEPT":return"FRIENDS_EXCEPT";default:return a}}function d(a){var b=i(a);switch(b){case"SPECIFIC_FRIENDS":return h._("__JHASH__5eIB9_yETD9__JHASH__");case"FRIENDS_EXCEPT":return h._("__JHASH__OumFNOwf4eQ__JHASH__");default:c("recoverableViolation")("Unsupported saved custom type: "+((b=a)!=null?b:"null"),"comet_privacy_selector");return h._("__JHASH__JQOXnRWhFTx__JHASH__")}}g.getTagExpandedLabel=a;g.hasTagExpansion=b;g.getSavedCustomListType=i;g.getSavedCustomTypeSelectedHeading=d}),226);
__d("CometPrivacySelectorLabel_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"CometPrivacySelectorLabel_scope",selections:[{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("CometPrivacySelectorLabel.react",["CometPrivacySelectorHelpers","CometPrivacySelectorLabel_scope.graphql","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i;function a(a){var c=j(9);a=a.scope;a=d("CometRelay").useFragment(h!==void 0?h:h=b("CometPrivacySelectorLabel_scope.graphql"),a);var e=a.label,f=a.selected_option;a=a.show_tag_expansion_options;if(e==null)return null;f=f==null?void 0:f.current_tag_expansion;var g;c[0]!==a||c[1]!==f?(g=d("CometPrivacySelectorHelpers").hasTagExpansion(a,f),c[0]=a,c[1]=f,c[2]=g):g=c[2];a=g;c[3]===Symbol["for"]("react.memo_cache_sentinel")?(f="xw3qccf xeaf4i8",c[3]=f):f=c[3];c[4]!==a||c[5]!==e?(g=a?d("CometPrivacySelectorHelpers").getTagExpandedLabel(e):e,c[4]=a,c[5]=e,c[6]=g):g=c[6];c[7]!==g?(a=k.jsx("span",{className:f,children:g}),c[7]=g,c[8]=a):a=c[8];return a}g["default"]=a}),98);
__d("CometComposerPrivacySelectorButton.react",["ix","BaseFocusRing.react","CometComposerPrivacySelectorButton_scope.graphql","CometPressable.react","CometPrivacyIcon.react","CometPrivacySelectorButtonSavingOverlay.react","CometPrivacySelectorLabel.react","CometRelay","FDSIcon.react","FDSText.react","fbicon","react","stylex","useCometPrivacySelectorDescriptionLabel.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k,l=(k||(k=d("react"))).c,m=k,n={button:{backgroundColor:"x1qhmfi1",borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",paddingTop:"x1iorvi4",paddingBottom:"xjkvuk6",paddingStart:"xurb0ha",paddingEnd:"x1sxyh0",$$css:!0},content:{alignItems:"x6s0dn4",display:"x78zum5",justifyContent:"xl56j7k",$$css:!0},invisible:{visibility:"xlshs6z",$$css:!0}};e=m.forwardRef(a);function a(a,e){var f=l(14),g;f[0]!==a?(g=babelHelpers["extends"]({},a),f[0]=a,f[1]=g):g=f[1];var k,o,p;if(f[2]!==g){a=g;p=a.isSaving;k=a.scope;o=babelHelpers.objectWithoutPropertiesLoose(a,["isSaving","scope"]);f[2]=g;f[3]=k;f[4]=o;f[5]=p}else k=f[3],o=f[4],p=f[5];var q=d("CometRelay").useFragment(i!==void 0?i:i=b("CometComposerPrivacySelectorButton_scope.graphql"),k),r=c("useCometPrivacySelectorDescriptionLabel.react")(q),s=g.disabled===!0?"secondary":"primary";f[6]!==o||f[7]!==r||f[8]!==e||f[9]!==s||f[10]!==p||f[11]!==q||f[12]!==g.disabled?(a=m.jsx(c("BaseFocusRing.react"),{children:function(a){return m.jsx(c("CometPressable.react"),babelHelpers["extends"]({},o,{"aria-label":r,overlayDisabled:!0,ref:e,suppressFocusRing:!0,testid:void 0,children:m.jsx(c("FDSText.react"),{color:s,type:"bodyLink4",children:m.jsxs("div",{className:"x1n2onr6",children:[m.jsx(c("CometPrivacySelectorButtonSavingOverlay.react"),{isSaving:p}),m.jsx("div",{className:(j||(j=c("stylex")))(n.button,a),children:m.jsxs("div",{className:j(p&&n.invisible,n.content),children:[m.jsx(c("CometPrivacyIcon.react"),{"aria-hidden":!0,color:s,marginEnd:4,scope:q}),m.jsx(c("CometPrivacySelectorLabel.react"),{scope:q}),g.disabled!==!0&&m.jsx(c("FDSIcon.react"),{icon:d("fbicon")._(h("481880"),12),size:12})]})})]})})}))}}),f[6]=o,f[7]=r,f[8]=e,f[9]=s,f[10]=p,f[11]=q,f[12]=g.disabled,f[13]=a):a=f[13];return a}f=e;g["default"]=f}),98);
__d("CometComposerPrivacySelectorEntryPointButton_renderer.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"tags"}],kind:"Fragment",metadata:null,name:"CometComposerPrivacySelectorEntryPointButton_renderer",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"PrivacyRowInput_fragment"}],storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"renderLocation"},{kind:"Variable",name:"selected_override",variableName:"localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"CometPrivacySelectorTooltip_scope"},{args:null,kind:"FragmentSpread",name:"CometComposerPrivacySelectorButton_scope"}],storageKey:null}],storageKey:null}],type:"PrivacyScopeCometComposerButtonEntryPointRenderer",abstractKey:null};e.exports=a}),null);
__d("ComposerAudienceOverrideLogger",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("AudienceOverridesClientFalcoEvent").__setRef("ComposerAudienceOverrideLogger");function a(a){var b=a.creationSessionID,c=a.eventType,d=a.privacyPostParam,e=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:c,privacy_post_param:JSON.stringify(d),product_type:e}})})}function b(a){var b=a.audienceMode,c=a.creationSessionID,d=a.eventType,e=a.productType;h.onReady(function(a){return a.log(function(){return{audience_mode:b,composer_session_id:c,event_type:d,product_type:e}})})}function d(a){var b=a.creationSessionID,c=a.privacyPostParam,d=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:"client_initial_privacy_render",privacy_post_param:JSON.stringify(c),product_type:d}})})}function e(a){var b=a.creationSessionID,c=a.privacyPostParam,d=a.productType;h.onReady(function(a){return a.log(function(){return{composer_session_id:b,event_type:"client_privacy_mutation_time",privacy_post_param:JSON.stringify(c),product_type:d}})})}g.logBasicPrivacyChangeCompleted=a;g.logAdvancedPrivacyChangeCompleted=b;g.logBasicInitialPrivacyState=d;g.logPrivacyOnCreateMutation=e}),98);
__d("CometComposerPrivacySelectorEntryPointButton.react",["CometComposerPrivacySelectorButton.react","CometComposerPrivacySelectorEntryPointButton_renderer.graphql","CometPrivacySelectorTooltip.react","CometRelay","CometTrackingNodeProvider.react","ComposerAudienceOverrideLogger","PrivacyRowInput","react","unrecoverableViolation","useComposerViewStateDispatcher","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;var k=e.useEffect,l=e.useRef;function a(a){var e,f=a.creationSessionID,g=a.isEnabled,i=a.isInitialAudienceLogged,m=i===void 0?!1:i;i=a.isSaving;var n=a.onPress,o=a.renderer;a=a.triggerRef;var p=c("useComposerViewStateDispatcher")();o=d("CometRelay").useFragment(h!==void 0?h:h=b("CometComposerPrivacySelectorEntryPointButton_renderer.graphql"),o);e=(e=o.source)==null?void 0:e.scope;if(e==null)throw c("unrecoverableViolation")("Failed to render privacy selector icon entry point. Either source or source.scope were not available.","comet_privacy_selector");var q=d("PrivacyRowInput").usePrivacyRowInput((o=o.source)==null?void 0:o.privacy_row_input),r=l(!1);k(function(){m!==!0&&r.current!==!0&&(f!=null&&d("ComposerAudienceOverrideLogger").logBasicInitialPrivacyState({creationSessionID:f,privacyPostParam:q}),r.current=!0,p({type:"set_is_initial_audience_logged"}))},[]);return j.jsx(c("CometPrivacySelectorTooltip.react"),{entryPointHasLabel:!0,isLoading:i,scope:e,children:j.jsx(c("CometTrackingNodeProvider.react"),{trackingNode:29,children:j.jsx(c("CometComposerPrivacySelectorButton.react"),{disabled:i||!g,isSaving:i,onPress:n,ref:a,scope:e})})})}a.displayName=a.name+" [from "+f.id+"]";e=c("withComposerViewStatePart")(a,function(a){return{creationSessionID:a.creationSessionID,isInitialAudienceLogged:(a=a.audienceLoggingData)==null?void 0:a.isInitialAudienceLogged}});g["default"]=e}),98);
__d("CometComposerPrivacySelectorEntryPointButton_renderer$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{defaultValue:null,kind:"LocalArgument",name:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],kind:"SplitOperation",metadata:{},name:"CometComposerPrivacySelectorEntryPointButton_renderer$normalization",selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"source",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInput",kind:"LinkedField",name:"privacy_row_input",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"allow",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"base_state",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"deny",storageKey:null},{alias:null,args:null,concreteType:"PrivacyRowInputTargetingFields",kind:"LinkedField",name:"privacy_targeting",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"targeted_publishing_fields",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tag_expansion_state",storageKey:null}],storageKey:null},{alias:"scope",args:[{kind:"Variable",name:"render_location",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$renderLocation"},{kind:"Variable",name:"selected_override",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$localPrivacyRow"},{kind:"Variable",name:"tags",variableName:"CometComposerPrivacySelectorEntryPointButton_renderer$tags"}],concreteType:"PrivacyScope",kind:"LinkedField",name:"privacy_scope_for_location",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"extended_description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"height",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"scale",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"width",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"PrivacyOption",kind:"LinkedField",name:"selected_option",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"current_tag_expansion",storageKey:null},a],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"show_tag_expansion_options",storageKey:null}],storageKey:null},a],storageKey:null}]}}();e.exports=a}),null);
__d("CometComposerPushPageContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometComposerPushPageGlimmer.react",["CometComposerStylingConstants","CometProgressRingIndeterminate.react","react","stylex","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={popover:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",height:"x1vd4hg5",justifyContent:"xl56j7k",width:"xlro9se",$$css:!0},pushview:{alignItems:"x6s0dn4",boxSizing:"x9f619",display:"x78zum5",justifyContent:"xl56j7k",width:"xh8yej3",$$css:!0}};function a(a){var b=j(10),e=a.composerDialogHeight,f=a.withPopover;a=a.xstyle;var g=f&&l.popover;f=!f&&l.pushview;var i;b[0]!==g||b[1]!==f||b[2]!==a?(i=(h||(h=c("stylex")))(g,f,a),b[0]=g,b[1]=f,b[2]=a,b[3]=i):i=b[3];f=((g=e)!=null?g:d("CometComposerStylingConstants").COMPOSER_ORIGINAL_HEIGHT)-d("CometComposerStylingConstants").PUSH_PAGE_HEADER_HEIGHT;b[4]!==f?(a={minHeight:f},b[4]=f,b[5]=a):a=b[5];b[6]===Symbol["for"]("react.memo_cache_sentinel")?(e=k.jsx(c("CometProgressRingIndeterminate.react"),{color:"disabled_DEPRECATED",size:24}),b[6]=e):e=b[6];b[7]!==i||b[8]!==a?(g=k.jsx("div",{className:i,style:a,children:e}),b[7]=i,b[8]=a,b[9]=g):g=b[9];return g}b=c("withComposerViewStatePart")(a,function(a){return{composerDialogHeight:(a=a.composerSizeAndStyleMetadata)==null?void 0:a.composerDialogHeight}});g["default"]=b}),98);
__d("ComposerTabbedMinutiaePushPageGlimmmer.react",["fbt","BaseLoadingStateElement.react","CometComposerHeader.react","FDSGlimmer.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i;b=k.forwardRef(a);var l={root:{height:"x1wjmhiu",$$css:!0},searchBar:{borderTopStartRadius:"x1tlxs6b",borderTopEndRadius:"x1g8br2z",borderBottomEndRadius:"x1gn5b1j",borderBottomStartRadius:"x230xth",height:"xc9qbxq",marginTop:"x1gslohp",marginEnd:"xktsk01",marginBottom:"x12nagc",marginStart:"x1d52u69",width:"xh8yej3",$$css:!0},tabText:{borderTopStartRadius:"x8u2fvd",borderTopEndRadius:"x1ht7hnu",borderBottomEndRadius:"x1quq95r",borderBottomStartRadius:"x5yzy4c",height:"xxk0z11",marginEnd:"xq8finb",width:"xefyazp",$$css:!0}};function a(a,b){var d=j(8);a=a.onBack;var e;d[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=h._("__JHASH__Qn-9-UwmJ2N__JHASH__"),d[0]=e):e=d[0];d[1]!==a?(e=k.jsx(c("CometComposerHeader.react"),{onBack:a,title:e,withBackButton:!0}),d[1]=a,d[2]=e):e=d[2];var f;d[3]===Symbol["for"]("react.memo_cache_sentinel")?(a=k.jsxs("div",{className:"x6s0dn4 x78zum5 xng8ra x1nhvcw1 xdj266r xktsk01 xat24cr x1d52u69",children:[k.jsx(c("FDSGlimmer.react"),{index:1,xstyle:l.tabText}),k.jsx(c("FDSGlimmer.react"),{index:2,xstyle:l.tabText})]}),f=k.jsx("div",{className:"x6s0dn4 x78zum5 xdd8jsf xl56j7k",children:k.jsx(c("FDSGlimmer.react"),{index:1,xstyle:l.searchBar})}),d[3]=a,d[4]=f):(a=d[3],f=d[4]);d[5]!==b||d[6]!==e?(a=k.jsxs(c("BaseLoadingStateElement.react"),{ref:b,xstyle:l.root,children:[e,a,f]}),d[5]=b,d[6]=e,d[7]=a):a=d[7];return a}e=b;g["default"]=e}),226);
__d("FeedComposerCometWithTagTypeaheadDataSource",["Promise"],(function(a,b,c,d,e,f){"use strict";var g;a=function(){function a(a){var b=a.compositeDataSource;a=a.matchStrategy;this.$3=!1;this.$1=b;this.$2=a}var c=a.prototype;c.bootstrap=function(){if(this.$3)return;this.$3=!0;this.$1.bootstrap()};c.fetchCache=function(a){var b=a.query;b=this.$2.findMentionableString(b);return b==null?{entries:[],params:a}:this.$1.fetchCache(a)};c.fetchNetwork=function(a){var c=a.query;c=this.$2.findMentionableString(c);return c==null?(g||(g=b("Promise"))).reject():this.$1.fetchNetwork(a)};return a}();f["default"]=a}),66);
__d("UnifiedShareSheetDialogContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b={isShareSheetEntrypoint:!1,setShouldHideMessengerSection:function(a){},setShouldHideShareToSection:function(a){}};c=a.createContext(b);g["default"]=c}),98);
__d("getActiveAttachmentFeatureDefinition",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a.find(function(a){return(a.featureType==="ATTACHMENT"||a.featureType==="READ_ONLY_ATTACHMENT")&&a.attachmentType===b})}f["default"]=a}),66);
__d("getTaggerFeatureDefinitionByName",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){return a.find(function(a){return a.featureType==="TAGGER"&&a.taggerType===b})}f["default"]=a}),66);
__d("getFeatureDefinition",["CometComposerAttachmentPluginTypes","CometComposerTaggerPluginTypes","getActiveAttachmentFeatureDefinition","getTaggerFeatureDefinitionByName"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d=a.attachments,e=Object.keys(c("CometComposerAttachmentPluginTypes")).find(function(a){return a===b});d=e!=null?c("getActiveAttachmentFeatureDefinition")((d=d)!=null?d:[],e):null;e=Object.keys(c("CometComposerTaggerPluginTypes")).find(function(a){return a===b});a=e!=null?c("getTaggerFeatureDefinitionByName")((a=a.taggers)!=null?a:[],e):null;return{attachmentData:d,taggerData:a}}g["default"]=a}),98);
__d("useCometComposerFeatureDefinitions",["CometComposerFeatureDefinitionsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerFeatureDefinitionsContext")).featureDefinitions}g["default"]=a}),98);
__d("useCometComposerLoggerDispatcher",["CometComposerLoggerDispatcherContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerLoggerDispatcherContext"))}g["default"]=a}),98);
__d("useCometComposerPushPage",["CometComposerPushPageContext","JSResourceForInteraction","promiseDone","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useRef,k=b.c,l=c("JSResourceForInteraction")("missingNavigationErrorHandler").__setRef("useCometComposerPushPage");function a(){var a,b=k(1);a=(a=i(c("CometComposerPushPageContext")))==null?void 0:a.pushPageHandler;var d=j(null);if(a==null){var e;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(e=function(a){c("promiseDone")(l.load().then(function(b){return b(d,a)}))},b[0]=e):e=b[0];return e}return a}g["default"]=a}),98);
__d("useCometComposerPushMinutiaePage",["fbt","CometComposerTaggerPluginTypes","CometPlaceholder.react","ComposerTabbedMinutiaePushPageGlimmmer.react","JSResourceForInteraction","lazyLoadComponent","react","useCometComposerPushPage"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=(i||(i=d("react"))).c,k=i,l=c("lazyLoadComponent")(c("JSResourceForInteraction")("ComposerTabbedMinutiaePage.react").__setRef("useCometComposerPushMinutiaePage"));function a(){var a=j(2),b=c("useCometComposerPushPage")(),d;a[0]!==b?(d=function(){b(h._("__JHASH__Qn-9-UwmJ2N__JHASH__"),function(a){a=a.onReturn;return k.jsx(c("CometPlaceholder.react"),{fallback:k.jsx(c("ComposerTabbedMinutiaePushPageGlimmmer.react"),{onBack:a}),children:k.jsx(l,{initialTab:"FEELING",onClose:a})})},{hasCustomHeader:!0},c("CometComposerTaggerPluginTypes").MINUTIAE)},a[0]=b,a[1]=d):d=a[1];return d}g["default"]=a}),226);
__d("useCometComposerPushPageWithReducer",["react","useCometComposerPushPage"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useMemo;var j=b.c;function a(){var a=j(2),b=c("useCometComposerPushPage")(),d;a[0]!==b?(d=function(a,c,d,e){b(a,function(a){a=a.onReturn;return i.jsx(c,{onReturn:a})},e,d)},a[0]=b,a[1]=d):d=a[1];a=d;return a}g["default"]=a}),98);
__d("useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8110672078996261"}),null);
__d("useCometComposerWithTagFriendsDataSourceQuery.graphql",["useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"},{defaultValue:null,kind:"LocalArgument",name:"query"},{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:null,kind:"LocalArgument",name:"update_with_tag_comet_for_all"}],c=[{kind:"Variable",name:"id",variableName:"id"}],d=[{kind:"Variable",name:"named",variableName:"query"}],e={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},g={kind:"Variable",name:"scale",variableName:"scale"},h={alias:"photo",args:[{kind:"Literal",name:"height",value:40},g,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},l={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},m=[e,j,h],n=[e,h];i={condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Variable",name:"context_id",variableName:"id"},{kind:"Variable",name:"query",variableName:"query"},{kind:"Literal",name:"typeahead_context",value:"mentions"}],concreteType:null,kind:"LinkedField",name:"comet_composer_typeahead_search",plural:!0,selections:[i,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_shape",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[f,i,{kind:"InlineFragment",selections:[e,j,k,h,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[l],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[l,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:m,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:[e,j,{alias:"thumbnail_link",args:[g],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null},{kind:"InlineFragment",selections:m,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:m,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[e,j,k,h],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:n,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:m,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:m,type:"ProductItem",abstractKey:null},{kind:"InlineFragment",selections:m,type:"BatchMentions",abstractKey:null}],storageKey:null}],type:"CometComposerTypeaheadResultEntry",abstractKey:null}],storageKey:null}]};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"useCometComposerWithTagFriendsDataSourceQuery",selections:[{condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!1,selections:[{alias:null,args:c,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:d,concreteType:"FriendsConnection",kind:"LinkedField",name:"friends",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[e,f,h],type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},i],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"useCometComposerWithTagFriendsDataSourceQuery",selections:[{condition:"update_with_tag_comet_for_all",kind:"Condition",passingValue:!1,selections:[{alias:null,args:c,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:d,concreteType:"FriendsConnection",kind:"LinkedField",name:"friends",plural:!1,selections:[{alias:null,args:null,concreteType:"FriendsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[f,{kind:"InlineFragment",selections:n,type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null},f],storageKey:null}]},i]},params:{id:b("useCometComposerWithTagFriendsDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useCometComposerWithTagFriendsDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometComposerWithTagFriendsDataSource",["WebPixelRatio","createFeedCometMentionsDataEntry","filterNulls","gkx","react","useCometComposerWithTagFriendsDataSourceQuery.graphql","useCometTypeaheadGraphQLDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useCometComposerWithTagFriendsDataSourceQuery.graphql");function a(a){var b=j(6),e=a.actorID,f=a.limit,g=a.updateWithTagCometForAll;b[0]!==e||b[1]!==g?(a=function(a){a=a.query;return{id:e,query:a,scale:d("WebPixelRatio").get(),update_with_tag_comet_for_all:g}},b[0]=e,b[1]=g,b[2]=a):a=b[2];var h;b[3]!==f||b[4]!==a?(h={gqlQuery:k,limit:f,normalize:l,queryVariablesBuilderFunction:a},b[3]=f,b[4]=a,b[5]=h):h=b[5];return c("useCometTypeaheadGraphQLDataSource")(h)}function l(a){var b;a=[].concat((b=a==null?void 0:(b=a.user)==null?void 0:(b=b.friends)==null?void 0:b.edges)!=null?b:[],(b=a==null?void 0:a.comet_composer_typeahead_search)!=null?b:[]);return c("filterNulls")(a.map(function(a){if(a==null)return null;if(c("gkx")("5967")===!1){var b=a.node;return b==null?null:c("createFeedCometMentionsDataEntry")({data:{node:b},type:"WITH_TAG_SEARCH_RESULT"})}else if((a==null?void 0:a.__typename)==="CometComposerTypeaheadResultEntry")return c("createFeedCometMentionsDataEntry")({data:a,type:"MENTION_SEARCH_RESULT"});return null}))}g["default"]=a}),98);
__d("useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9409273152526001"}),null);
__d("useCometComposerWithTagSuggestionsDataSourceQuery.graphql",["useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"adding_metadata_with_tag"},c={defaultValue:null,kind:"LocalArgument",name:"limit"},d={defaultValue:null,kind:"LocalArgument",name:"scale"},e=[{kind:"Variable",name:"first",variableName:"limit"}],f={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},h={kind:"Variable",name:"scale",variableName:"scale"},i={alias:"photo",args:[{kind:"Literal",name:"height",value:40},h,{kind:"Literal",name:"width",value:40}],concreteType:"Image",kind:"LinkedField",name:"profile_picture",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"mentions_subtext",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"is_verified",storageKey:null},m={alias:null,args:null,concreteType:"WorkForeignEntityInfo",kind:"LinkedField",name:"work_foreign_entity_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"type",storageKey:null}],storageKey:null},n=[f,k,i],o=[f,i];j={condition:"adding_metadata_with_tag",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Variable",name:"count",variableName:"limit"},{kind:"Literal",name:"query",value:""},{kind:"Literal",name:"typeahead_context",value:"mentions"}],concreteType:null,kind:"LinkedField",name:"comet_composer_typeahead_search",plural:!0,selections:[j,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"icon_shape",storageKey:null},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"node",plural:!1,selections:[g,j,{kind:"InlineFragment",selections:[f,k,l,i,{kind:"InlineFragment",selections:[{kind:"InlineFragment",selections:[m],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[m,{alias:null,args:null,kind:"ScalarField",name:"is_multi_company_group",storageKey:null}],type:"Group",abstractKey:null}],type:"Entity",abstractKey:"__isEntity"}],type:"User",abstractKey:null},{kind:"InlineFragment",selections:n,type:"XFBWorkroomsBaseUser",abstractKey:"__isXFBWorkroomsBaseUser"},{kind:"InlineFragment",selections:[f,k,{alias:"thumbnail_link",args:[h],kind:"ScalarField",name:"icon_uri",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_title",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"doc_url",storageKey:null}],type:"KnowledgeHubDocumentData",abstractKey:null},{kind:"InlineFragment",selections:n,type:"Group",abstractKey:null},{kind:"InlineFragment",selections:n,type:"Event",abstractKey:null},{kind:"InlineFragment",selections:[f,k,l,i],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:o,type:"ContextualProfile",abstractKey:"__isContextualProfile"},{kind:"InlineFragment",selections:n,type:"GroupRule",abstractKey:null},{kind:"InlineFragment",selections:n,type:"ProductItem",abstractKey:null},{kind:"InlineFragment",selections:n,type:"BatchMentions",abstractKey:null}],storageKey:null}],type:"CometComposerTypeaheadResultEntry",abstractKey:null}],storageKey:null}]};return{fragment:{argumentDefinitions:[a,c,d],kind:"Fragment",metadata:null,name:"useCometComposerWithTagSuggestionsDataSourceQuery",selections:[{condition:"adding_metadata_with_tag",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:e,concreteType:"SuggestedWithTagsConnection",kind:"LinkedField",name:"suggested_with_tags",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedWithTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[{kind:"InlineFragment",selections:[f,g,i],type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},j],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,d,a],kind:"Operation",name:"useCometComposerWithTagSuggestionsDataSourceQuery",selections:[{condition:"adding_metadata_with_tag",kind:"Condition",passingValue:!1,selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:e,concreteType:"SuggestedWithTagsConnection",kind:"LinkedField",name:"suggested_with_tags",plural:!1,selections:[{alias:null,args:null,concreteType:"SuggestedWithTagsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"node",plural:!1,selections:[g,{kind:"InlineFragment",selections:o,type:"Profile",abstractKey:"__isProfile"}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}]},j]},params:{id:b("useCometComposerWithTagSuggestionsDataSourceQuery_facebookRelayOperation"),metadata:{},name:"useCometComposerWithTagSuggestionsDataSourceQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("useCometComposerWithTagSuggestionsDataSource",["WebPixelRatio","createFeedCometMentionsDataEntry","filterNulls","react","useCometComposerWithTagSuggestionsDataSourceQuery.graphql","useCometTypeaheadGraphQLDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c,k=h!==void 0?h:h=b("useCometComposerWithTagSuggestionsDataSourceQuery.graphql");function a(a){var b=j(6),e=a.addingMetadataWithTag,f=a.limit;b[0]!==e||b[1]!==f?(a=function(){return{adding_metadata_with_tag:e,limit:f,scale:d("WebPixelRatio").get()}},b[0]=e,b[1]=f,b[2]=a):a=b[2];var g;b[3]!==f||b[4]!==a?(g={gqlQuery:k,limit:f,normalize:l,queryVariablesBuilderFunction:a},b[3]=f,b[4]=a,b[5]=g):g=b[5];return c("useCometTypeaheadGraphQLDataSource")(g)}function l(a){var b;b=a==null?void 0:(b=a.viewer)==null?void 0:(b=b.suggested_with_tags)==null?void 0:b.edges;if((a==null?void 0:a.comet_composer_typeahead_search)!=null){return c("filterNulls")(((a=a==null?void 0:a.comet_composer_typeahead_search)!=null?a:[]).map(function(a){if((a==null?void 0:a.node)&&(a==null?void 0:a.node.__typename)==="BatchMentions")return null;return(a==null?void 0:a.__typename)==="CometComposerTypeaheadResultEntry"?c("createFeedCometMentionsDataEntry")({data:a,type:"MENTION_SEARCH_RESULT"}):null}))}return b==null?[]:b.map(function(a){if(a==null)return null;a=a.node;return a==null?null:c("createFeedCometMentionsDataEntry")({data:{node:a},type:"SUGGESTION"})}).filter(Boolean)}g["default"]=a}),98);
__d("useComposerValidationErrors",["CometComposerValidationErrorsContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerValidationErrorsContext"))}g["default"]=a}),98);
__d("useFeedComposerCometWithTagDataSource",["cr:1872646"],(function(a,b,c,d,e,f,g){"use strict";g["default"]=b("cr:1872646")}),98);
__d("useFeedComposerCometWithTagDataSourceImpl",["Actor","FeedComposerCometWithTagTypeaheadDataSource","createCometWithTagStrategy","gkx","react","useCometComposerWithTagFriendsDataSource","useCometComposerWithTagSuggestionsDataSource","useCometTypeaheadCompositeDataSource","useFeedComposerCometMentionsBootloadDataSource"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");b.useMemo;var i=b.c;function a(a){var b=i(16);a=a.limit;var e=d("Actor").useActor();e=e[0];var f=c("gkx")("3531"),g=c("gkx")("4913");f=f||g;g=c("gkx")("5967");var h;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(h=["FRIENDS_ONLY"],b[0]=h):h=b[0];var j=Math.floor(a/2),k;b[1]===Symbol["for"]("react.memo_cache_sentinel")?(k=["USER"],b[1]=k):k=b[1];b[2]!==j?(h={firstDegreeFinderOptions:h,includeViewer:!1,limit:j,storageKey:null,typeaheadContext:"mentions",typeaheadFirstDegreeFilters:k},b[2]=j,b[3]=h):h=b[3];k=c("useFeedComposerCometMentionsBootloadDataSource")(h);b[4]!==a?(j={addingMetadataWithTag:g,limit:a},b[4]=a,b[5]=j):j=b[5];h=c("useCometComposerWithTagSuggestionsDataSource")(j);b[6]!==e||b[7]!==a?(g={actorID:e,limit:a,updateWithTagCometForAll:f},b[6]=e,b[7]=a,b[8]=g):g=b[8];j=c("useCometComposerWithTagFriendsDataSource")(g);b[9]!==k||b[10]!==a||b[11]!==j||b[12]!==h?(f={bootstrapDataSource:k,limit:a,networkDataSource:j,nullstateDataSource:h},b[9]=k,b[10]=a,b[11]=j,b[12]=h,b[13]=f):f=b[13];e=c("useCometTypeaheadCompositeDataSource")(f);b[14]!==e?(g=new(c("FeedComposerCometWithTagTypeaheadDataSource"))({compositeDataSource:e,matchStrategy:c("createCometWithTagStrategy")({minMatchLength:0})}),b[14]=e,b[15]=g):g=b[15];k=g;return k}g["default"]=a}),98);
__d("useVerifyCometComposerPushPage",["CometComposerPushPageContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerPushPageContext"))!=null}g["default"]=a}),98);