;/*FB_PKG_DELIM*/

__d("DeleteMediaAttemptedFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743549");b=d("FalcoLoggerInternal").create("delete_media_attempted",a);e=b;g["default"]=e}),98);
__d("DraftEditorFlushControlled",["ReactDOM"],(function(a,b,c,d,e,f){e.exports=b("ReactDOM").flushSync}),null);
__d("Keys",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({BACKSPACE:8,TAB:9,RETURN:13,SHIFT:16,CTRL:17,ALT:18,PAUSE_BREAK:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,LEFT_WINDOW_KEY:91,RIGHT_WINDOW_KEY:92,SELECT_KEY:93,NUMPAD_0:96,NUMPAD_1:97,NUMPAD_2:98,NUMPAD_3:99,NUMPAD_4:100,NUMPAD_5:101,NUMPAD_6:102,NUMPAD_7:103,NUMPAD_8:104,NUMPAD_9:105,MULTIPLY:106,ADD:107,SUBTRACT:109,DECIMAL_POINT:110,DIVIDE:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUM_LOCK:144,SCROLL_LOCK:145,SEMI_COLON:186,EQUAL_SIGN:187,COMMA:188,DASH:189,PERIOD:190,FORWARD_SLASH:191,GRAVE_ACCENT:192,OPEN_BRACKET:219,BACK_SLASH:220,CLOSE_BRAKET:221,SINGLE_QUOTE:222});f["default"]=a}),66);
__d("isSoftNewlineEvent",["Keys"],(function(a,b,c,d,e,f){"use strict";function a(a){return a.which===b("Keys").RETURN&&(a.getModifierState("Shift")||a.getModifierState("Alt")||a.getModifierState("Control"))}e.exports=a}),null);
__d("KeyBindingUtil",["UserAgent","isSoftNewlineEvent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h={isCtrlKeyCommand:function(a){return!!a.ctrlKey&&!a.altKey},isOptionKeyCommand:function(a){return g&&a.altKey},usesMacOSHeuristics:function(){return g},hasCommandModifier:function(a){return g?!!a.metaKey&&!a.altKey:h.isCtrlKeyCommand(a)},isSoftNewlineEvent:b("isSoftNewlineEvent")};e.exports=h}),null);
__d("LSTriggerOnDemandCutoverIfNeeded",["LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return d[0]=new c.Map(),d[0].set("open_thread_id",a[0]),d[1]=d[0].get("open_thread_id"),d[0],d[2]=c.toJSON(d[0]),c.storedProcedure(b("LSIssueNewTask"),c.i64.to_string(d[1]),c.i64.cast([0,741]),d[2],void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]),void 0,void 0,c.i64.cast([0,0]),c.i64.cast([0,0]))},function(a){return c.resolve(e)}])}a.__sproc_name__="LSE2EEMessagingMetadataMailboxTriggerOnDemandCutoverIfNeededStoredProcedure";e.exports=a}),null);
__d("LSTriggerOnDemandCutoverIfNeededStoredProcedure",["LSTriggerOnDemandCutoverIfNeeded","cr:8709"],(function(a,b,c,d,e,f,g){function a(a,b){return c("LSTriggerOnDemandCutoverIfNeeded")(b.waJid,a)}g["default"]=a}),98);
__d("MAWMiActOnMiThreadReadyForJidDeferred",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("MAWMiActOnMiThreadReadyForJid").__setRef("MAWMiActOnMiThreadReadyForJidDeferred");function a(a,b,c,d){return h.load().then(function(e){e=e.onMiThreadReadyForJid;return e(a,b,c,d)})}g["default"]=a}),98);
__d("MAWCreateAndWaitForAuthoritativeOneToOneThread",["I64","LSIntEnum","LSResult","MAWCreateOneToOneThread","MAWMiActOnMiThreadReadyForJidDeferred","MWV2OnAuthoritativeThreadInsert","Promise","WAJids","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j;function a(a,e,g,k){c("promiseDone")(d("MAWCreateOneToOneThread").call(a,e,void 0,g).then(function(e){return a.runInTransaction(function(f){return c("MAWMiActOnMiThreadReadyForJidDeferred")(f,e.jid,g,function(f,g){g!=null&&(e.created?d("MWV2OnAuthoritativeThreadInsert").onAuthoritativeThreadInsert(c("LSResult")(g),a,function(a){return k(a.threadKey,a.clientThreadKey,a.threadType)}):k(g,(i||(i=d("I64"))).of_string(d("WAJids").threadIdForChatJid(e.jid)),(j||(j=d("LSIntEnum"))).ofNumber(15)));return(h||(h=b("Promise"))).resolve()})},"readwrite",void 0,void 0,f.id+":44")}))}g["default"]=a}),98);
__d("MAWOnDemandCutoverQPLLogger",["I64","MAWLoggerUtils","QPLUserFlow","WALoggerDeferred","promiseDone","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h;function i(){var a=babelHelpers.taggedTemplateLiteralLoose(["[OD-Cutover] Cutover (non-blocking) cancelled for ThreadKey: ",". ",""]);i=function(){return a};return a}function j(){var a=babelHelpers.taggedTemplateLiteralLoose(["[OD-Cutover] Cutover (non-blocking) finished with error for ThreadKey: ",". ",""]);j=function(){return a};return a}function k(){var a=babelHelpers.taggedTemplateLiteralLoose(["[OD-Cutover] Cutover (non-blocking) finished successfully for ThreadKey: ",". ",""]);k=function(){return a};return a}function l(){var a=babelHelpers.taggedTemplateLiteralLoose(["[OD-Cutover] Secure thread created for od-cutover (non-blocking) for ThreadKey: ",""]);l=function(){return a};return a}function m(){var a=babelHelpers.taggedTemplateLiteralLoose(["[OD-Cutover] Triggering cutover (non-blocking) from "," for ThreadKey: ",""]);m=function(){return a};return a}var n=new Set();function a(a,b){var e=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));n.has(e)?o(a,"already_in_progress"):(c("promiseDone")(d("WALoggerDeferred").LOG(m(),b,(h||(h=d("I64"))).to_string(a))),n.add(e),c("QPLUserFlow").start(c("qpl")._(1056847893,"505"),{annotations:{bool:{is_non_blocking:!0},string:{entrypoint:b}},instanceKey:e}))}function o(a,b,e){var f=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));b==="secure_thread_created"&&c("promiseDone")(d("WALoggerDeferred").LOG(l(),(h||(h=d("I64"))).to_string(a)));c("QPLUserFlow").addPoint(c("qpl")._(1056847893,"505"),b,babelHelpers["extends"]({instanceKey:f},e))}function b(a,b){a=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));c("QPLUserFlow").addAnnotations(c("qpl")._(1056847893,"505"),b,{instanceKey:a})}function e(a,b){var e=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));n.has(e)&&(c("promiseDone")(d("WALoggerDeferred").LOG(k(),(h||(h=d("I64"))).to_string(a),b!=null?b:"")),c("QPLUserFlow").endSuccess(c("qpl")._(1056847893,"505"),babelHelpers["extends"]({},b!==null&&{annotations:{string:{message:b}}},{instanceKey:e})),n["delete"](e))}function f(a,b){var e=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));n.has(e)&&(c("promiseDone")(d("WALoggerDeferred").LOG(j(),(h||(h=d("I64"))).to_string(a),b!=null?b:"")),c("QPLUserFlow").endFailure(c("qpl")._(1056847893,"505"),b,{instanceKey:e}),n["delete"](e))}function p(a,b){var e=d("MAWLoggerUtils").getInstanceKeyFromId((h||(h=d("I64"))).to_string(a));n.has(e)&&(c("promiseDone")(d("WALoggerDeferred").LOG(i(),(h||(h=d("I64"))).to_string(a),b!=null?b:"")),c("QPLUserFlow").endCancel(c("qpl")._(1056847893,"505"),babelHelpers["extends"]({},b!==null&&{annotations:{string:{reason:b}}},{instanceKey:e})),n["delete"](e))}g.startQpl=a;g.addPoint=o;g.addAnnotations=b;g.endSuccessIfInProgress=e;g.endFailureIfInProgress=f;g.endCancelIfInProgress=p}),98);
__d("MAWOnDemandCutoverTrigger",["LSCutoverMappingQueryFromOpenThreadIdStoredProcedure","LSFactory","LSTriggerOnDemandCutoverIfNeededStoredProcedure","MAWCreateAndWaitForAuthoritativeOneToOneThread","MAWOnDemandCutoverQPLLogger","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,e){d("MAWOnDemandCutoverQPLLogger").startQpl(b,e),c("promiseDone")(a.runInTransaction(function(a){return c("LSCutoverMappingQueryFromOpenThreadIdStoredProcedure")(c("LSFactory")(a),{openThreadId:b})},"readwrite",void 0,void 0,f.id+":35")),c("promiseDone")(a.runInTransaction(function(a){return c("LSTriggerOnDemandCutoverIfNeededStoredProcedure")(c("LSFactory")(a),{waJid:b})},"readwrite",void 0,void 0,f.id+":45"))}function a(a,b,e){h(a,b,e),c("MAWCreateAndWaitForAuthoritativeOneToOneThread")(a,b,"MAWOnDemandCutoverTrigger",function(){d("MAWOnDemandCutoverQPLLogger").addPoint(b,"secure_thread_created")})}g.triggerOnDemandCutover=h;g.triggerOnDemandCutoverAndCreateSecureThread=a}),98);
__d("MaybeTriggerOnDemandCutover",["FBLogger","I64","LSFactory","LSPlatformWaitForTaskCompletion","LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure","MAWCreateAndWaitForAuthoritativeOneToOneThread","MAWOnDemandCutoverQPLLogger","MAWOnDemandCutoverTrigger","Promise","QPLUserFlow","asyncToGeneratorRuntime","cr:13129","gkx","qpl"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,b,c){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e,f){var g=(yield b("cr:13129")(a,e));if(!g)return;var j=(i||(i=d("I64"))).of_string(a.targetID);c("gkx")("7946")?d("MAWOnDemandCutoverTrigger").triggerOnDemandCutover(e,j,f):(c("QPLUserFlow").start(c("qpl")._(1056847893,"505"),{annotations:{bool:{is_non_blocking:!1},string:{entrypoint:f}}}),yield c("LSPlatformWaitForTaskCompletion")(e,function(a){return c("LSThreadPointQueryAndRestoreMessagesWithJIDStoredProcedure")(c("LSFactory")(a),{waJid:j})},"readwrite"));g=babelHelpers["extends"]({},a);try{g.targetID=(i||(i=d("I64"))).to_string(yield new(h||(h=b("Promise")))(function(a){c("MAWCreateAndWaitForAuthoritativeOneToOneThread")(e,j,"maybeTriggerOnDemandCutover",function(b){c("gkx")("7946")?d("MAWOnDemandCutoverQPLLogger").addPoint(j,"secure_thread_created"):c("QPLUserFlow").endSuccess(c("qpl")._(1056847893,"505")),a(b)})})),g.isTargetE2E=!0}catch(a){c("FBLogger")("default_e2ee").mustfix("Failed to get cutover thread for forward/sharing",a)}return(h||(h=b("Promise"))).resolve(g)});return j.apply(this,arguments)}g["default"]=a}),98);
__d("MaybeUpdateTargetBasedOnDefaultE2eeEligibility",["FBLogger","I64","MAWCreateAndWaitForAuthoritativeOneToOneThread","MWThreadCreationUtil","Promise","asyncToGeneratorRuntime","ensureContactsExistAndUpdatedSync","gkx","hasDefaultThreadOneToOneCapability"],(function(a,b,c,d,e,f,g){"use strict";var h,i;function a(a,b){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,e){if(a.isTargetE2E===!0||a.targetType!=="USER")return(i||(i=b("Promise"))).resolve(a);var f=(h||(h=d("I64"))).of_string(a.targetID);c("gkx")("23866")&&(yield c("ensureContactsExistAndUpdatedSync")(e,f));var g=(yield c("hasDefaultThreadOneToOneCapability")(f,e));a=babelHelpers["extends"]({},a);if(d("MWThreadCreationUtil").passesWebSearchDefaultE2eeThreadCreationGating()&&g)try{a.targetID=(h||(h=d("I64"))).to_string(yield new(i||(i=b("Promise")))(function(a){c("MAWCreateAndWaitForAuthoritativeOneToOneThread")(e,f,"maybeUpdateTargetBasedOnDefaultE2eeEligibility",function(b){return a(b)})})),a.isTargetE2E=!0}catch(a){c("FBLogger")("default_e2ee").mustfix("Failed to create e2ee thread for forward/sharing",a)}return(i||(i=b("Promise"))).resolve(a)});return j.apply(this,arguments)}g.maybeUpdateTargetBasedOnDefaultE2eeEligibility=a}),98);
__d("MaybeUpdateTargetBasedOnODCutoverOrDefaultE2EE",["I64","MaybeTriggerOnDemandCutover","MaybeUpdateTargetBasedOnDefaultE2eeEligibility","asyncToGeneratorRuntime","ensureContactsExistAndUpdatedSync","sendToSentQPLLogger"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a,b,c,d){return i.apply(this,arguments)}function i(){i=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a,b,e,f){b=(yield b);d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_ensure_contact_exists_start");yield c("ensureContactsExistAndUpdatedSync")(b,(h||(h=d("I64"))).of_string(a.targetID));d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_ensure_contact_exists_end");d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_maybe_trigger_on_demand_cutover_start");e=(e=(yield c("MaybeTriggerOnDemandCutover")(a,b,e)))!=null?e:a;d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_maybe_trigger_on_demand_cutover_end");e.targetID===a.targetID&&(d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_maybe_update_target_based_on_eligibility_start"),e=(yield d("MaybeUpdateTargetBasedOnDefaultE2eeEligibility").maybeUpdateTargetBasedOnDefaultE2eeEligibility(a,b)),d("sendToSentQPLLogger").markSendToSentPoint(f,"update_target_maybe_update_target_based_on_eligibility_end"));return e});return i.apply(this,arguments)}g["default"]=a}),98);
__d("OpenMediaFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744082");b=d("FalcoLoggerInternal").create("open_media",a);e=b;g["default"]=e}),98);
__d("OpenSeenSummaryFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744083");b=d("FalcoLoggerInternal").create("open_seen_summary",a);e=b;g["default"]=e}),98);
__d("adjustBlockDepthForContentState",[],(function(a,b,c,d,e,f){"use strict";function a(a,b,c,d){var e=b.getStartKey(),f=b.getEndKey(),g=a.getBlockMap(),h=g.toSeq().skipUntil(function(a,b){return b===e}).takeUntil(function(a,b){return b===f}).concat([[f,g.get(f)]]).map(function(a){var b=a.getDepth()+c;b=Math.max(0,b);d!=null&&(b=Math.min(b,d));return a.set("depth",b)});g=g.merge(h);return a.merge({blockMap:g,selectionBefore:b,selectionAfter:b})}e.exports=a}),null);
__d("RichTextEditorUtil",["DraftModifier","EditorState","adjustBlockDepthForContentState","nullthrows"],(function(a,b,c,d,e,f){"use strict";var g={currentBlockContainsLink:function(a){var b=a.getSelection(),c=a.getCurrentContent();return c.getBlockForKey(b.getAnchorKey()).getCharacterList().slice(b.getStartOffset(),b.getEndOffset()).some(function(a){a=a.getEntity();return!!a&&c.getEntity(a).getType()==="LINK"})},getCurrentBlockType:function(a){var b=a.getSelection();return a.getCurrentContent().getBlockForKey(b.getStartKey()).getType()},getDataObjectForLinkURL:function(a){return{url:a.toString()}},handleKeyCommand:function(a,b,c){switch(b){case"bold":return g.toggleInlineStyle(a,"BOLD");case"italic":return g.toggleInlineStyle(a,"ITALIC");case"underline":return g.toggleInlineStyle(a,"UNDERLINE");case"strikethrough":return g.toggleInlineStyle(a,"STRIKETHROUGH");case"subscript":return g.toggleInlineStyle(a,"SUBSCRIPT");case"superscript":return g.toggleInlineStyle(a,"SUPERSCRIPT");case"code":return g.toggleCode(a);case"backspace":case"backspace-word":case"backspace-to-start-of-line":return g.onBackspace(a);case"delete":case"delete-word":case"delete-to-end-of-block":return g.onDelete(a);default:return null}},insertSoftNewline:function(a){var c=b("DraftModifier").insertText(a.getCurrentContent(),a.getSelection(),"\n",a.getCurrentInlineStyle(),null);a=b("EditorState").push(a,c,"insert-characters");return b("EditorState").forceSelection(a,c.getSelectionAfter())},onBackspace:function(a){var c=a.getSelection();if(!c.isCollapsed()||c.getAnchorOffset()||c.getFocusOffset())return null;var d=a.getCurrentContent(),e=c.getStartKey();e=d.getBlockBefore(e);if(e&&e.getType()==="atomic"){e=d.getBlockMap()["delete"](e.getKey());e=d.merge({blockMap:e,selectionAfter:c});if(e!==d)return b("EditorState").push(a,e,"remove-range")}c=g.tryToRemoveBlockStyle(a);return c?b("EditorState").push(a,c,"change-block-type"):null},onDelete:function(a){var c=a.getSelection();if(!c.isCollapsed())return null;var d=a.getCurrentContent(),e=c.getStartKey(),f=d.getBlockForKey(e);f=f.getLength();if(c.getStartOffset()<f)return null;f=d.getBlockAfter(e);if(!f||f.getType()!=="atomic")return null;e=c.merge({focusKey:f.getKey(),focusOffset:f.getLength()});c=b("DraftModifier").removeRange(d,e,"forward");return c!==d?b("EditorState").push(a,c,"remove-range"):null},onTab:function(a,c){var d=c.getSelection(),e=d.getAnchorKey(),f=c.getCurrentContent();e=f.getBlockForKey(e);e=e.getType();if(e!=="unordered-list-item"&&e!=="ordered-list-item")return c;a.preventDefault();e=b("adjustBlockDepthForContentState")(f,d,a.shiftKey?-1:1);return b("EditorState").push(c,e,"adjust-depth")},toggleBlockType:function(a,c){var d=a.getSelection(),e=d.getStartKey(),f=d.getEndKey(),g=a.getCurrentContent(),h=d;if(e!==f&&d.getEndOffset()===0){var i=b("nullthrows")(g.getBlockBefore(f));f=i.getKey();h=h.merge({anchorKey:e,anchorOffset:d.getStartOffset(),focusKey:f,focusOffset:i.getLength(),isBackward:!1})}d=g.getBlockMap().skipWhile(function(a,b){return b!==e}).reverse().skipWhile(function(a,b){return b!==f}).some(function(a){return a.getType()==="atomic"});if(d)return a;i=g.getBlockForKey(e).getType()===c?"unstyled":c;return b("EditorState").push(a,b("DraftModifier").setBlockType(g,h,i),"change-block-type")},toggleCode:function(a){var b=a.getSelection(),c=b.getAnchorKey(),d=b.getFocusKey();return b.isCollapsed()||c!==d?g.toggleBlockType(a,"code-block"):g.toggleInlineStyle(a,"CODE")},toggleInlineStyle:function(a,c){var d=a.getSelection(),e=a.getCurrentInlineStyle();if(d.isCollapsed())return b("EditorState").setInlineStyleOverride(a,e.has(c)?e.remove(c):e.add(c));var f=a.getCurrentContent();e.has(c)?e=b("DraftModifier").removeInlineStyle(f,d,c):e=b("DraftModifier").applyInlineStyle(f,d,c);return b("EditorState").push(a,e,"change-inline-style")},toggleLink:function(a,c,d){c=b("DraftModifier").applyEntity(a.getCurrentContent(),c,d);return b("EditorState").push(a,c,"apply-entity")},tryToRemoveBlockStyle:function(a){var c=a.getSelection(),d=c.getAnchorOffset();if(c.isCollapsed()&&d===0){d=c.getAnchorKey();a=a.getCurrentContent();var e=a.getBlockForKey(d);e=e.getType();d=a.getBlockBefore(d);if(e==="code-block"&&d&&d.getType()==="code-block"&&d.getLength()!==0)return null;if(e!=="unstyled")return b("DraftModifier").setBlockType(a,c,"unstyled")}return null}};e.exports=g}),null);
__d("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4116176868485633"}),null);
__d("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql",["StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:!1,kind:"LocalArgument",name:"enable_profile_story_consumption"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};d=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"StoriesDeleteResponsePayload",kind:"LinkedField",name:"stories_delete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deleted_story_thread_ids",storageKey:null},{condition:"enable_profile_story_consumption",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"buckets",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"is_bucket_seen_by_viewer",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null}],storageKey:null}],storageKey:null}]}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:d,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:d},params:{id:b("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation"),metadata:{},name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("TrashOutline20.svg.react",["react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs("svg",babelHelpers["extends"]({viewBox:"0 0 20 20",width:"1em",height:"1em",fill:"currentColor"},a,{children:[a.title!=null&&i.jsx("title",{children:a.title}),a.children!=null&&i.jsx("defs",{children:a.children}),i.jsx("g",{fillRule:"evenodd",transform:"translate(-446 -398)",children:i.jsxs("g",{fillRule:"nonzero",children:[i.jsx("path",{d:"m106.523 196.712-2.32-2.256a1.62 1.62 0 0 0-1.13-.456h-3.146a1.62 1.62 0 0 0-1.13.456l-2.32 2.256a.75.75 0 0 0 1.046 1.076l2.32-2.256a.12.12 0 0 1 .084-.032h3.146a.12.12 0 0 1 .084.032l2.32 2.256a.75.75 0 1 0 1.046-1.076zm-5.773 5.788v8a.75.75 0 1 0 1.5 0v-8a.75.75 0 1 0-1.5 0zm3.501-.047-.5 8a.75.75 0 1 0 1.498.094l.5-8a.75.75 0 1 0-1.498-.094zm-7 .094.5 8a.75.75 0 1 0 1.498-.094l-.5-8a.75.75 0 1 0-1.498.094z",transform:"translate(354.5 204)"}),i.jsx("path",{d:"M109.327 196.5H93.673a1.17 1.17 0 0 0-1.173 1.167v1.666a1.17 1.17 0 0 0 1.173 1.167h15.654a1.17 1.17 0 0 0 1.173-1.167v-1.666a1.17 1.17 0 0 0-1.173-1.167zM109 199H94v-1h15v1z",transform:"translate(354.5 204)"}),i.jsx("path",{d:"M108.25 199a.75.75 0 0 1 .747.818l-1.092 12.011a2.387 2.387 0 0 1-2.377 2.171h-8.056a2.386 2.386 0 0 1-2.377-2.17l-1.092-12.012a.75.75 0 0 1 .747-.818h13.5zm-12.679 1.5 1.018 11.194a.887.887 0 0 0 .883.806h8.056c.459 0 .842-.35.883-.806l1.018-11.194H95.57z",transform:"translate(354.5 204)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("StoriesTrashOutline20IconSVG.react",["SVGIcon","TrashOutline20.svg.react"],(function(a,b,c,d,e,f,g){"use strict";a=d("SVGIcon").svgIcon(c("TrashOutline20.svg.react"));g["default"]=a}),98);
__d("useStoriesDeleteCardDialogBox",["fbt","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i;b=i||d("react");var j=b.useRef,k=b.c;function a(a){var b=k(19),d=a.mediaType,e=a.onDeleteConfirmClick,f=a.onHideConfirmationDialog,g=a.onOpenConfirmationDialog,i=a.storyOptionType;j(null);var l=c("useCometConfirmationDialog")();b[0]!==d?(a=function(){var a;switch(((a=d)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__L2_wSxUnG2t__JHASH__");case"VIDEO":return h._("__JHASH__qFrpFkyacl8__JHASH__");default:return h._("__JHASH__Tkm1iaHNdIh__JHASH__")}},b[0]=d,b[1]=a):a=b[1];var m=a;b[2]!==d?(a=function(){var a;switch(((a=d)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__BY5DT1_5pXB__JHASH__");case"VIDEO":return h._("__JHASH__0abv05OQkrS__JHASH__");default:return h._("__JHASH__cnWXzqpUQEv__JHASH__")}},b[2]=d,b[3]=a):a=b[3];var n=a;b[4]!==d?(a=function(){var a;switch(((a=d)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__DUSQNHSjkpB__JHASH__");case"VIDEO":return h._("__JHASH__mvEEzEbEu_n__JHASH__");default:return h._("__JHASH__YuqFYVgOtAM__JHASH__")}},b[4]=d,b[5]=a):a=b[5];a=a;var o;b[6]!==l||b[7]!==m||b[8]!==n||b[9]!==e||b[10]!==f||b[11]!==g||b[12]!==i?(o=function(){l({body:m(),confirm:h._("__JHASH__lbbK_pYtDxY__JHASH__"),title:n()},e,function(){f&&f()}),g(i)},b[6]=l,b[7]=m,b[8]=n,b[9]=e,b[10]=f,b[11]=g,b[12]=i,b[13]=o):o=b[13];o=o;var p;b[14]!==a?(p=a(),b[14]=a,b[15]=p):p=b[15];b[16]!==o||b[17]!==p?(a={handleDeleteClick:o,primaryText:p},b[16]=o,b[17]=p,b[18]=a):a=b[18];return a}g["default"]=a}),226);
__d("StoriesDeleteCardOptionMenuItem.react",["CometRelay","FDSMenuItem.react","StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql","StoriesEnums","StoriesLoggerContext","StoriesSuspenseContuxActionsContext","StoriesTrashOutline20IconSVG.react","react","react-forget-runtime","relay-runtime","useStoriesDeleteCardDialogBox"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=i||(i=d("react"));e=i;e.useContext;var k=e.c,l=h!==void 0?h:h=b("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql");function a(a){var b=k(15),e=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(c("StoriesLoggerContext"),n),f=e.logger,g=d("CometRelay").useRelayEnvironment();e=d("react-forget-runtime").useContextWithBailoutExperiment__unstable(c("StoriesSuspenseContuxActionsContext"),m);var h=e.handleCardDeletion,i=a.bucketID,o=a.cardID;e=a.mediaType;var p=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var q;b[0]!==f||b[1]!==p||b[2]!==i||b[3]!==o||b[4]!==g||b[5]!==h?(q=function(){f.deleteLog();p();var a=function(a){a=i!=null?a.get(i):null;if(!a)return;var b=a.getLinkedRecord("unified_stories");if(b==null)return;d("relay-runtime").ConnectionHandler.deleteNode(b,o);var c=b.getLinkedRecords("edges")||[];b.setValue(c.length,"count");b.setValue(c.length===0,"is_empty");c.length===0&&a.setValue(null,"thumbnail_story_to_show")},b=function(b){a(b)};d("CometRelay").commitMutation(g,{mutation:l,optimisticUpdater:b,updater:b,variables:{input:{story_ids:[o]}}});h()},b[0]=f,b[1]=p,b[2]=i,b[3]=o,b[4]=g,b[5]=h,b[6]=q):q=b[6];q=q;var r;b[7]!==e||b[8]!==q||b[9]!==p||b[10]!==a?(r={mediaType:e,onDeleteConfirmClick:q,onHideConfirmationDialog:p,onOpenConfirmationDialog:a,storyOptionType:d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER},b[7]=e,b[8]=q,b[9]=p,b[10]=a,b[11]=r):r=b[11];e=c("useStoriesDeleteCardDialogBox")(r);q=e.handleDeleteClick;a=e.primaryText;b[12]!==q||b[13]!==a?(r=j.jsx(c("FDSMenuItem.react"),{icon:c("StoriesTrashOutline20IconSVG.react"),iconSize:20,onClick:q,primaryText:a,testid:void 0},"delete"),b[12]=q,b[13]=a,b[14]=r):r=b[14];return r}function m(a){return[a.handleCardDeletion]}function n(a){return[a.logger]}g.StoriesDeleteMutation=l;g.StoriesDeleteCardOptionMenuItem=a}),98);
__d("getActiveElement",[],(function(a,b,c,d,e,f){function a(a){a===void 0&&(a=document);if(a===void 0)return null;try{return a.activeElement||a.body}catch(b){return a.body}}f["default"]=a}),66);
__d("getDefaultKeyBinding",["KeyBindingUtil","Keys","UserAgent"],(function(a,b,c,d,e,f){"use strict";var g=b("UserAgent").isPlatform("Mac OS X"),h=g&&b("UserAgent").isBrowser("Firefox < 29"),i=b("KeyBindingUtil").hasCommandModifier,j=b("KeyBindingUtil").isCtrlKeyCommand;function k(a){return g&&a.altKey||j(a)}function l(a){return!i(a)?null:a.shiftKey?"redo":"undo"}function m(a){return!g&&a.shiftKey?null:k(a)?"delete-word":"delete"}function n(a){return i(a)&&g?"backspace-to-start-of-line":k(a)?"backspace-word":"backspace"}function a(a){switch(a.keyCode){case 66:return i(a)?"bold":null;case 68:return j(a)?"delete":null;case 72:return j(a)?"backspace":null;case 73:return i(a)?"italic":null;case 74:return i(a)?"code":null;case 75:return g&&j(a)?"secondary-cut":null;case 77:return j(a)?"split-block":null;case 79:return j(a)?"split-block":null;case 84:return g&&j(a)?"transpose-characters":null;case 85:return i(a)?"underline":null;case 87:return g&&j(a)?"backspace-word":null;case 88:return i(a)&&a.shiftKey?"strikethrough":null;case 89:return j(a)?g?"secondary-paste":"redo":null;case 90:return l(a)||null;case 187:return i(a)?"superscript":null;case 189:return i(a)?"subscript":null;case b("Keys").RETURN:return"split-block";case b("Keys").DELETE:return m(a);case b("Keys").BACKSPACE:return n(a);case b("Keys").LEFT:return h&&i(a)?"move-selection-to-start-of-block":null;case b("Keys").RIGHT:return h&&i(a)?"move-selection-to-end-of-block":null;default:return null}}e.exports=a}),null);
__d("getRangeClientRects",["invariant","UserAgent"],(function(a,b,c,d,e,f,g){"use strict";c=b("UserAgent").isBrowser("Chrome");function a(a){var b=a.cloneRange(),c=[];for(var d=a.endContainer;d!=null;d=d.parentNode){var e=d===a.commonAncestorContainer;e?b.setStart(a.startContainer,a.startOffset):b.setStart(b.endContainer,0);var f=Array.from(b.getClientRects());c.push(f);if(e){c.reverse();return(f=[]).concat.apply(f,c)}b.setEndBefore(d)}g(0,578)}d=c?a:function(a){return Array.from(a.getClientRects())};e.exports=d}),null);