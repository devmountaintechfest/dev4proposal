;/*FB_PKG_DELIM*/

__d("AudienceOverridesClientFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5615");b=d("FalcoLoggerInternal").create("audience_overrides_client",a);e=b;g["default"]=e}),98);
__d("CometComposerFeatureDefinitionsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({featureDefinitions:null});g["default"]=b}),98);
__d("CometComposerIneligibilityContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(new Set());g["default"]=b}),98);
__d("CometComposerInlineErrorRenderer.react",["FDSText.react","TetraListCell_DEPRECATED.react","react","stylex"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||(i=d("react"))).c,k=i,l={errorList:{maxHeight:"x1hkcv85",overflowX:"xw2csxc",overflowY:"x1odjw0f",position:"x1n2onr6",$$css:!0}};function a(a){var b=j(10),d=a.error,e=a.icon;a=a.xstyle;if(d==null||d==="")return null;var f;b[0]!==a?(f=(h||(h=c("stylex")))(l.errorList,a),b[0]=a,b[1]=f):f=b[1];b[2]!==d?(a=k.jsx(c("FDSText.react"),{color:"negative",type:"body3",children:d}),b[2]=d,b[3]=a):a=b[3];b[4]!==e||b[5]!==a?(d=k.jsx(c("TetraListCell_DEPRECATED.react"),{addOnPrimary:e,addOnPrimaryVerticalAlign:"center",contentHorizontalPadding:0,headline:a,paddingHorizontal:0},"error"),b[4]=e,b[5]=a,b[6]=d):d=b[6];b[7]!==f||b[8]!==d?(e=k.jsx("div",{className:f,children:d}),b[7]=f,b[8]=d,b[9]=e):e=b[9];return e}g["default"]=a}),98);
__d("CometComposerLoggerDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometComposerPostSettingFeatureTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["ADMIN_CROSS_POST","POST_COLLABORATOR"]);f.CometComposerPostSettingFeatureTypes=a}),66);
__d("CometComposerPreAttachmentPluginTypes",["$InternalEnum"],(function(a,b,c,d,e,f){"use strict";a=b("$InternalEnum").Mirrored(["COMMUNITY_QA","FUN_FACT","WORK_SUMMARY"]);f.CometComposerPreAttachmentPluginTypes=a}),66);
__d("CometComposerPreSubmitHooksContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:new Map()});g["default"]=b}),98);
__d("CometComposerSATPContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({emojiPickerIsHidden:!1,satpContainerIsResponsive:!1,satpExploreIsDisabled:!1,satpFontSize:30,satpMaxNewLines:3,satpRemovalIsDisabled:!1,satpTextVerticalAlignment:"top"});g["default"]=b}),98);
__d("CometComposerTaggerPluginTypes",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BC_SUPPORT:"BC_SUPPORT",BRANDED_CONTENT:"BRANDED_CONTENT",DRAFT_FOR:"DRAFT_FOR",EVENT:"EVENT",LOCAL_ALERT:"LOCAL_ALERT",LOCATION:"LOCATION",MINUTIAE:"MINUTIAE",TAG:"TAG",WORK_AMA:"WORK_AMA",WORK_LONG_READ_POST:"WORK_LONG_READ_POST",WORK_QA:"WORK_QA"});b=a;f["default"]=b}),66);
__d("CometComposerValidationErrorsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({});g["default"]=b}),98);
__d("CometComposerViewStateAlteredContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:new Map()});g["default"]=b}),98);
__d("CometComposerViewStateContext",["createEmptyCometComposerViewState","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("createEmptyCometComposerViewState")());g["default"]=b}),98);
__d("CometComposerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CometComposerViewStateReducersContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({current:new Map()});g["default"]=b}),98);
__d("FbCreatorsCoreMobileFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("5922");b=d("FalcoLoggerInternal").create("fb_creators_core_mobile",a);e=b;g["default"]=e}),98);
__d("addTagsToWithTagsIDsTracker",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c){var d=new Map(c);b.forEach(function(b){var c;c=(c=d.get(b))!=null?c:{isDisplayedInSocialSentence:!0,withTagSourceIDs:[]};var e=c.isDisplayedInSocialSentence;c=c.withTagSourceIDs;c.includes(a)||c.push(a);d.set(b,{isDisplayedInSocialSentence:e,withTagSourceIDs:c})});return d}f["default"]=a}),66);
__d("cometComposerFooterAttachmentsEligibilityChecker",["CometComposerAttachmentPluginTypes","CometComposerFooterAttachmentPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";function h(a){switch(a){case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.CALL_NOW:return new Set([c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,c("CometComposerAttachmentPluginTypes").MEDIA]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_MESSAGES:return new Set([c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,c("CometComposerAttachmentPluginTypes").MEDIA]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.FISHBOWL:return new Set([c("CometComposerAttachmentPluginTypes").ANIMATED_IMAGE,c("CometComposerAttachmentPluginTypes").MEDIA,c("CometComposerAttachmentPluginTypes").SHARE,c("CometComposerAttachmentPluginTypes").LOCATION]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GROUP_WELCOME_POST:return new Set([c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,c("CometComposerAttachmentPluginTypes").MEDIA,c("CometComposerAttachmentPluginTypes").SHARE,c("CometComposerAttachmentPluginTypes").LINK,c("CometComposerAttachmentPluginTypes").LOCATION,c("CometComposerAttachmentPluginTypes").ANIMATED_IMAGE,c("CometComposerAttachmentPluginTypes").FILE,c("CometComposerAttachmentPluginTypes").POLL]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.NONPROFIT:return new Set([c("CometComposerAttachmentPluginTypes").MEDIA,c("CometComposerAttachmentPluginTypes").SHARE]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_WHATSAPP_MESSAGES:return new Set([c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT,c("CometComposerAttachmentPluginTypes").MEDIA]);case d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.EVENT:return new Set([c("CometComposerAttachmentPluginTypes").MEDIA]);default:return new Set(Object.keys(c("CometComposerAttachmentPluginTypes")))}}function a(a){var b=(a=a.attachmentArea)==null?void 0:a.activeAttachmentType;return b!=null?new Set(Array.from(d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.members()).filter(function(a){a=h(a);return!a.has(b)})):new Set()}g.getCompatibleMainAttachmentTypes=h;g.cometComposerFooterAttachmentsEligibilityChecker=a}),98);
__d("composerAttachmentAreaChecker",["CometComposerAttachmentPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d;if((b==null?void 0:(d=b.attachmentArea)==null?void 0:d.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").FORMATTED_TEXT)return"UNCHANGED";if((a==null?void 0:(d=a.attachmentArea)==null?void 0:d.activeAttachmentType)!==(b==null?void 0:(d=b.attachmentArea)==null?void 0:d.activeAttachmentType)){return(a==null?void 0:(d=a.attachmentArea)==null?void 0:d.activeAttachmentType)!=null&&(b==null?void 0:(d=b.attachmentArea)==null?void 0:d.activeAttachmentType)==null?"DELETED":"UPDATED"}if((b==null?void 0:(d=b.attachmentArea)==null?void 0:d.activeAttachmentType)===c("CometComposerAttachmentPluginTypes").WORK_MULTI_ATTACHMENTS){if((a==null?void 0:(d=a.workMultiAttachments)==null?void 0:(d=d.attachments)==null?void 0:d.size)!==(b==null?void 0:(d=b.workMultiAttachments)==null?void 0:(d=d.attachments)==null?void 0:d.size))return"UPDATED";if((a==null?void 0:(d=a.workMultiAttachments)==null?void 0:d.attachments)!==(b==null?void 0:(a=b.workMultiAttachments)==null?void 0:a.attachments))return"UPDATED"}return"UNCHANGED"}g["default"]=a}),98);
__d("composerCommunityQAPluginEligibilityChecker",["CometComposerAttachmentPluginTypes","CometComposerPreAttachmentPluginTypes","CometComposerTaggerPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";var h=new Set([c("CometComposerAttachmentPluginTypes").MEDIA]);function i(a){return Object.prototype.hasOwnProperty.call(c("CometComposerTaggerPluginTypes"),a)}function j(a){return a==null?!1:h.has(a)}function a(a){var b,c,e,f;b=(b=a.attachmentArea)==null?void 0:b.activeAttachmentType;c=(c=a.isEditingPreExistingStory)!=null?c:!1;e=(e=(e=a.communityQAMetadata)==null?void 0:e.isEditingPreExistingCommunityQAStory)!=null?e:!1;f=(f=(f=a.communityQAMetadata)==null?void 0:f.isEditingPreExistingCommunityQAIshStory)!=null?f:!1;if(f){f=k();f.add(d("CometComposerPreAttachmentPluginTypes").CometComposerPreAttachmentPluginTypes.COMMUNITY_QA);return f}if(c&&!e)return new Set([d("CometComposerPreAttachmentPluginTypes").CometComposerPreAttachmentPluginTypes.COMMUNITY_QA]);if(b!=null&&!j(b)&&!i(b))return new Set([d("CometComposerPreAttachmentPluginTypes").CometComposerPreAttachmentPluginTypes.COMMUNITY_QA]);c=(f=a.preAttachmentArea)==null?void 0:f.activePreAttachmentType;return c===d("CometComposerPreAttachmentPluginTypes").CometComposerPreAttachmentPluginTypes.COMMUNITY_QA?k():new Set()}function k(){var a=Object.keys(c("CometComposerAttachmentPluginTypes"));return new Set(a.filter(function(a){var b=j(a);return!i(a)&&!b}))}g.COMPATIBLE_ATTACHMENT_PLUGINS=h;g.isAttachmentCompatible=j;g.composerCommunityQAPluginEligibilityChecker=a}),98);
__d("composerAttachmentAreaReducer",["CometComposerFooterAttachmentPluginTypes","CometComposerPreAttachmentPluginTypes","CometComposerTaggerPluginTypes","cometComposerFooterAttachmentsEligibilityChecker","composerCommunityQAPluginEligibilityChecker"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,c){var d;c=(d=(d=c.attachmentArea)==null?void 0:d.activeAttachmentType)!=null?d:(d=c.attachmentArea)==null?void 0:d.previousAttachmentType;d=a.attachmentType;return b===d&&d===c}function a(a,b,c){var d=c.attachmentType;c=c.field;if(!h(b,d,a))return a;b=babelHelpers["extends"]({},a);b[c]=void 0;return b}function b(a,b){var e,f,g;e=(e=a.attachmentArea)==null?void 0:e.activeAttachmentType;f=(f=a.footerAttachmentArea)==null?void 0:f.activeFooterAttachmentType;g=(g=a.preAttachmentArea)==null?void 0:g.activePreAttachmentType;switch(b.type){case"ACTIVATE_ATTACHMENT_TYPE":if(b.attachmentType==="LINK"&&e!=="LINK"&&e!=="LOCATION"&&e!=null)return a;if(["LINK","GET_MESSAGES","GET_WHATSAPP_MESSAGES"].includes(b.attachmentType))return babelHelpers["extends"]({},a,{attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:b.attachmentType,onRemove:b.onRemove,previousAttachmentType:(b==null?void 0:b.attachmentType)==="GET_MESSAGES"?e:void 0})});if(e===b.attachmentType)return a;if(e!=null&&Object.prototype.hasOwnProperty.call(c("CometComposerTaggerPluginTypes"),b.attachmentType))return a;if(g===d("CometComposerPreAttachmentPluginTypes").CometComposerPreAttachmentPluginTypes.COMMUNITY_QA&&!d("composerCommunityQAPluginEligibilityChecker").isAttachmentCompatible(b.attachmentType))return a;g=f!=null&&!d("cometComposerFooterAttachmentsEligibilityChecker").getCompatibleMainAttachmentTypes(f).has(b.attachmentType)?null:f;b.attachmentType==="MEDIA"&&e==="GET_MESSAGES"&&(g=d("CometComposerFooterAttachmentPluginTypes").CometComposerFooterAttachmentPluginTypes.GET_MESSAGES);return babelHelpers["extends"]({},a,{attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:b.attachmentType,onRemove:b.onRemove,previousAttachmentType:e}),footerAttachmentArea:babelHelpers["extends"]({},a.footerAttachmentArea,{activeFooterAttachmentType:g})});case"REMOVE_ATTACHMENT_TYPE":var i;(b==null?void 0:b.attachmentType)==="GET_MESSAGES"&&(a.mediaAttachments||[]).length>0?i="MEDIA":(b==null?void 0:b.attachmentType)!=="LOCATION"&&((f=a.attachmentArea)==null?void 0:f.previousAttachmentType)==="LOCATION"&&(i="LOCATION");f=((e=a.attachmentArea)==null?void 0:e.activeAttachmentType)!=null&&h(b,(g=a.attachmentArea)==null?void 0:g.activeAttachmentType,a);if(f){e=b.attachmentType;if((b.attachmentType==="EVENT"||b.attachmentType==="MINUTIAE")&&a.activityMinutiae!=null){g=babelHelpers["extends"]({},a.activityMinutiae,{hideAttachment:!0});return babelHelpers["extends"]({},a,{activityMinutiae:g,attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:i,previousAttachmentType:e})})}f={nonprofit:a.nonprofit};b.attachmentType==="NONPROFIT"&&a.nonprofit!=null&&(f={nonprofit:void 0});g=a.mediaAttachments;b.attachmentType==="CALL_NOW"&&(g=null);if(b.attachmentType==="PAID_CONTENT"&&a.paidContent!=null){a.mediaAttachments!=null&&a.mediaAttachments[0].fileType==="VIDEO"&&(a.mediaAttachments||[]).length>=1&&(i="MEDIA");return babelHelpers["extends"]({},a,{attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:i,previousAttachmentType:e}),paidContent:void 0})}return babelHelpers["extends"]({},a,f,{attachmentArea:babelHelpers["extends"]({},a.attachmentArea,{activeAttachmentType:i,previousAttachmentType:e}),mediaAttachments:g})}}return a}g.getCanAlterAttachmentData=h;g.removeActiveAttachmentViewStateData=a;g.composerAttachmentAreaReducer=b}),98);
__d("composerLexicalEditorViewStateReducer",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){switch(b.type){case"SET_LEXICAL_EDITOR_STATE":return babelHelpers["extends"]({},a,{lexicalEditor:b.lexicalEditor});case"SET_LEXICAL_DIRTY_STATE":return babelHelpers["extends"]({},a,{lexicalEditorIsDirty:b.isDirty});case"SET_LEXICAL_EMPTY_STATE":return babelHelpers["extends"]({},a,{lexicalEditorIsEmpty:b.isEmpty});default:break}return a}f["default"]=a}),66);
__d("createCometWithTagStrategy",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.minMatchLength;return{findMentionableString:function(a){return a.length>=b?{leadOffset:a.length,matchingString:a,replaceableString:a}:null},name:"WithTagStrategy("+b.toString()+")"}}f["default"]=a}),66);
__d("createComposerDeferredPlugin",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;var j=b.useEffect,k=b.useRef,l=b.useState;function a(a){function b(b){var c=k(a.getModuleIfRequireable()),d=l(c.current!=null);d[0];var e=d[1];j(function(){var b=a.onReady(function(a){c.current=a,e(!0)});b=b.remove;return b},[]);if(c.current!=null){d=c.current;return i.jsx(d,babelHelpers["extends"]({},b))}return null}return i.memo(b)}g["default"]=a}),98);
__d("getResolvedShouldShrink",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b=a.activeAttachmentType,c=a.alwaysShrinkText;c=c===void 0?!1:c;var d=a.formattedTextStyling,e=a.formattingType;a=a.textExceedsLength;a=(a||b!=null)&&d==null||e==="RICHTEXT";return a||c}f["default"]=a}),66);
__d("useCometComposerSATPConfig",["CometComposerSATPContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerSATPContext"))}g["default"]=a}),98);
__d("useCometStatusAreaTextData_formattedTextPreset.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useCometStatusAreaTextData_formattedTextPreset",selections:[{alias:null,args:null,kind:"ScalarField",name:"color",storageKey:null},{alias:null,args:null,concreteType:"InspirationsCustomFont",kind:"LinkedField",name:"inspirations_custom_font_object",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"font_name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"preferred_font_size",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"avatar_story_text_format_id",storageKey:null}],type:"TextFormatMetadata",abstractKey:null};e.exports=a}),null);
__d("useCometStatusAreaTextData",["CometRelay","emptyObject","react","useCometComposerSATPConfig","useCometStatusAreaTextData_formattedTextPreset.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=(i||d("react")).c;function a(a){var e,f,g=j(9),i=c("useCometComposerSATPConfig")(),k=i.satpFontSize;i=i.satpLineHeightInPx;var l=d("CometRelay").useFragment(h!==void 0?h:h=b("useCometStatusAreaTextData_formattedTextPreset.graphql"),a),m=l==null?void 0:l.inspirations_custom_font_object;e=(e=m==null?void 0:m.font_name)!=null?e:"";f=(f=l==null?void 0:l.color)!=null?f:"00000000";k=(m=(m=m==null?void 0:m.preferred_font_size)!=null?m:k)!=null?m:30;m=(l==null?void 0:l.avatar_story_text_format_id)!=null;l="#"+f.substring(2)+f.substring(0,2);g[0]!==a||g[1]!==m||g[2]!==l||g[3]!==e||g[4]!==k||g[5]!==i?(f=a!=null?{caretColor:l,color:l,fontFamily:e,fontSize:k,fontWeight:700,lineHeight:i,marginBottom:m?150:void 0}:c("emptyObject"),g[0]=a,g[1]=m,g[2]=l,g[3]=e,g[4]=k,g[5]=i,g[6]=f):f=g[6];m=f;if(a!=null){g[7]!==m?(l={formattedTextStyling:m,textAlignment:"center"},g[7]=m,g[8]=l):l=g[8];return l}}g["default"]=a}),98);
__d("useComposerFeatureIneligibility",["CometComposerIneligibilityContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerIneligibilityContext"))}g["default"]=a}),98);
__d("useContextRef",["react","react-forget-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h;h||(h=d("react"));b=h;b.useContext;var i=b.useEffect,j=b.c;function a(a,b){var c=j(4);b=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(b,k);var e=b.current,f;c[0]!==e||c[1]!==a?(b=function(){if(e.has(a)){var b=e.get(a);e.set(a,b+1)}else e.set(a,1);return function(){var b=e.get(a);b!==void 0&&(b===1?e["delete"](a):e.set(a,b-1))}},f=[e,a],c[0]=e,c[1]=a,c[2]=b,c[3]=f):(b=c[2],f=c[3]);i(b,f)}function k(a){return[a.current]}g["default"]=a}),98);
__d("useComposerPreSubmitHook",["CometComposerPreSubmitHooksContext","useContextRef"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return c("useContextRef")(a,c("CometComposerPreSubmitHooksContext"))}g["default"]=a}),98);
__d("useComposerViewStateDispatcher",["CometComposerViewStateDispatcherContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||d("react")).useContext;function a(){return i(c("CometComposerViewStateDispatcherContext"))}g["default"]=a}),98);
__d("useComposerViewStateReducer",["CometComposerViewStateAlteredContext","CometComposerViewStateReducersContext","useContextRef"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var d=h;c("useContextRef")((b=b)!=null?b:d,c("CometComposerViewStateAlteredContext"));return c("useContextRef")(a,c("CometComposerViewStateReducersContext"))}function h(a,b){return!1}g["default"]=a}),98);
__d("withSomeContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useContext;function a(a,b,c){var d=i.memo(a);function e(a,e){var f=j(b);f=c(f,a);return i.jsx(d,babelHelpers["extends"]({},a,f,{ref:e}))}e.displayName=e.name+" [from "+f.id+"]";return i.forwardRef(e)}g["default"]=a}),98);
__d("withComposerViewStatePart",["CometComposerViewStateContext","react","withSomeContext"],(function(a,b,c,d,e,f,g){"use strict";var h;h||d("react");function a(a,b){return c("withSomeContext")(a,c("CometComposerViewStateContext"),b)}g["default"]=a}),98);
__d("withTagIDsTrackerConversionUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a){if(a==null)return null;var b=[];a!=null&&a.forEach(function(a,c){a=a.isDisplayedInSocialSentence;a&&b.push(c)});return b}function b(a,b){b===void 0&&(b="WithTagTool");var c=new Map();a=a.filter(Boolean);a.forEach(function(a){a!=null&&c.set(a,{isDisplayedInSocialSentence:!0,withTagSourceIDs:[b]})});return c}f.convertWithTagIDsTrackerToArray=a;f.convertArrayToWithTagIDsTracker=b}),66);