;/*FB_PKG_DELIM*/

__d("CometAIProductTagSuggestionsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6585238521599481"}),null);
__d("CometAIProductTagSuggestionsQuery.graphql",["CometAIProductTagSuggestionsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"max_suggestions_per_photo"},c={defaultValue:null,kind:"LocalArgument",name:"media_ids"},d=[{kind:"Variable",name:"max_suggestions_per_photo",variableName:"max_suggestions_per_photo"},{kind:"Variable",name:"media_ids",variableName:"media_ids"}],e={alias:null,args:null,kind:"ScalarField",name:"media_id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"top_left",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"bottom_right",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m={alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:64,sizing:"cover-fill-cropped",width:64)'},n={alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null}],storageKey:null},o={alias:null,args:null,concreteType:"CatalogItemUnitPrice",kind:"LinkedField",name:"per_unit_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_text",storageKey:null}],storageKey:null},p={alias:null,args:null,concreteType:"XFBCommerceProductTagTimeRange",kind:"LinkedField",name:"time_range",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"start",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"end",storageKey:null}],storageKey:null},q={alias:null,args:null,kind:"ScalarField",name:"confidence",storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[m],storageKey:null},n,o],storageKey:null},j,p],storageKey:null},q],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m,k],storageKey:null},n,o],storageKey:null},j,p],storageKey:null},q],storageKey:null}],storageKey:null}]},params:{id:b("CometAIProductTagSuggestionsQuery_facebookRelayOperation"),metadata:{},name:"CometAIProductTagSuggestionsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometAIProductTagSuggestionsQuery.react",["CometAIProductTagSuggestionsQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h!==void 0?h:h=b("CometAIProductTagSuggestionsQuery.graphql");g["default"]=a}),98);
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("ProductTagConfidence",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["HIGH","LOW","VERY_HIGH","VERY_LOW"]);c=a;f["default"]=c}),66);
__d("ProductTagConfidenceUtils.facebook",["$InternalEnumUtils","ProductTagConfidence"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));b=d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("SharedAIProductTagUtils",["ProductTagConfidenceUtils.facebook"],(function(a,b,c,d,e,f,g){"use strict";var h=5;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.media_id;a=a.suggestions;if(c==null||a==null)return;var e=[],f=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,g=a.center_y,h=a.confidence,i=a.products,j=a.score;a=a.top_left;if(c==null||g==null||j==null)return;c=c*100;g=g*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;h=d("ProductTagConfidenceUtils.facebook").toJSEnum(h);var l=i==null?void 0:i.time_range;i=(i=i==null?void 0:i.product_item)!=null?i:{};var m=i.id,n=i.listing_price,o=i.name,p=i.per_unit_price;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,confidence:h,productID:m,productScore:k,timeRange:l};if((h==="VERY_HIGH"||h==="HIGH")&&e.length===0){if(m==null||o==null)return null;j={id:m,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:o,product_per_unit_price:p==null?void 0:p.formatted_text,product_price:n==null?void 0:n.formatted_amount};k=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:j,x:c,y:g});e.push(k)}else l==null&&h==="LOW"&&f.push(babelHelpers["extends"]({},b,{x:c,y:g}))});b.set(c,{knownSuggestions:e,unknownSuggestions:f})});return b}function b(a,b,c,d){return a>=c-h&&a<=c+h&&b>=d-h&&b<=d+h}g.USER_TAGGING_TOLERANCE=h;g.processAIProductTagSuggestionsQueryResponse=a;g.isPointNearbyPoint=b}),98);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometAIProductTagSuggestionsUtil_photo.graphql");function j(a,b){return a.productID===b.productID||d("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,b.x,b.y)}function k(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.listing)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c==null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function c(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);return!b?[]:b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b})}function e(a){return!a}g.getUntaggedKnownTags=a;g.getUntaggedUnknownTags=c;g.canUsePretagExperience=e}),98);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;b=1;c=94;f.BOX_BORDER_SIZE=a;f.INITIAL_PHOTO_RENDER_SCALE=b;f.TAGGING_BOX_SIZE=c}),66);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});g["default"]=b}),98);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("CommerceShoppableContentLandingClickFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("3079");b=d("FalcoLoggerInternal").create("commerce_shoppable_content_landing_click",a);e=b;g["default"]=e}),98);
__d("CommerceViewProductTagFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743420");b=d("FalcoLoggerInternal").create("commerce_view_product_tag",a);e=b;g["default"]=e}),98);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext({hoveredProductID:null,setHoveredProductID:c("emptyFunction")});g["default"]=b}),98);
__d("LiveShoppingLoggerSurface",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum")({FULL_SCREEN_VIDEO:"full_screen_video",LIVE_PRODUCER:"live_producer",LIVE_SHOPPING_ADS_PRODUCT_EXTENSION:"live_shopping_ads_product_extension"});c=a;f["default"]=c}),66);
__d("LiveShoppingLoggerUtils",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("LiveShoppingFalcoEvent").__setRef("LiveShoppingLoggerUtils");e=function(){function a(){this.data={}}var b=a.prototype;b.setError=function(a){this.data.error=a.toString();return this};b.setProductID=function(a){a!==null&&(this.data.product_id=a);return this};b.setUIComponent=function(a){this.data.ui_component=a;return this};b.setReferralUIComponent=function(a){this.data.referral_ui_component=a;return this};b.setSurface=function(a){this.data.surface=a;return this};b.setReferralSurface=function(a){this.data.referral_surface=a;return this};b.setVideoID=function(a){a!==null&&(this.data.video_id=a);return this};return a}();function a(a){i(a,"click")}function b(a){i(a,"impression")}function i(a,b){h.onReady(function(c){return c.log(function(){return{event:b,product_id:a.data.product_id,referral_surface:a.data.referral_surface,referral_ui_component:a.data.referral_ui_component,surface:a.data.surface,ui_component:a.data.ui_component,video_id:a.data.video_id}})})}function d(a){h.onReady(function(b){return b.log(function(){var b;return{event:"mutation_error",extra_data:{error:(b=a.data.error)!=null?b:""},product_id:a.data.product_id,referral_surface:a.data.referral_surface,referral_ui_component:a.data.referral_ui_component,surface:"live_producer",ui_component:a.data.ui_component,video_id:a.data.video_id}})})}g.LiveShoppingLoggerContext=e;g.logLiveShoppingClick=a;g.logLiveShoppingImpression=b;g.logLiveShoppingEvent=i;g.logLiveShoppingMutationError=d}),98);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1743808");b=d("FalcoLoggerInternal").create("live_shopping_viewer",a);e=b;g["default"]=e}),98);
__d("MediaTaggingGating",["cr:10363","gkx"],(function(a,b,c,d,e,f,g){"use strict";function a(){return c("gkx")("6128")}g.getIsTaggingPolishEnabled=a;g.CometContextualLayerAnchorRoot=b("cr:10363")}),98);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1744233");b=d("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e=b;g["default"]=e}),98);