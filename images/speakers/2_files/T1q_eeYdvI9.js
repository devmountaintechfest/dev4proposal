;/*FB_PKG_DELIM*/

__d("MWMediaGalleryVideoThumbnail.react",["FDSImageCover.react","MWXVideoStatusListener.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react"));b=h;b.useCallback;var j=b.useRef,k=b.c;function a(a){var b=k(22),d=a.alt,e=a.fallbackVideoUrl,f=a.mediaRenderQpl;a=a.previewUrl;var g=j(null),h;b[0]!==f?(h=function(a){f==null?void 0:f.endFail("load-video-error",{string:{video_error_name:a}})},b[0]=f,b[1]=h):h=b[1];h=h;var l;b[2]!==f?(l=function(){f==null?void 0:f.endSuccess()},b[2]=f,b[3]=l):l=b[3];l=l;if(c("gkx")("3368")===!1||a!==""){var m;m=(m=d)!=null?m:"video thumbnail";var n,o;b[4]!==f?(n=function(){return f==null?void 0:f.endFail("load-image-error")},o=function(){return f==null?void 0:f.endSuccess()},b[4]=f,b[5]=n,b[6]=o):(n=b[5],o=b[6]);var p;b[7]!==m||b[8]!==n||b[9]!==o||b[10]!==a?(p=i.jsx(c("FDSImageCover.react"),{alt:m,onError:n,onLoad:o,src:a}),b[7]=m,b[8]=n,b[9]=o,b[10]=a,b[11]=p):p=b[11];return p}b[12]!==h||b[13]!==l?(m=i.jsx(c("MWXVideoStatusListener.react"),{onError:h,onLoad:l,videoRef:g}),b[12]=h,b[13]=l,b[14]=m):m=b[14];o=(n=d)!=null?n:"video thumbnail";b[15]===Symbol["for"]("react.memo_cache_sentinel")?(a="x5yr21d xl1xv1r xh8yej3",b[15]=a):a=b[15];b[16]!==o||b[17]!==e?(p=i.jsx("video",{alt:o,className:a,controls:!1,ref:g,src:e}),b[16]=o,b[17]=e,b[18]=p):p=b[18];b[19]!==m||b[20]!==p?(h=i.jsxs(i.Fragment,{children:[m,p]}),b[19]=m,b[20]=p,b[21]=h):h=b[21];return h}g["default"]=a}),98);
__d("MWXIconPause",["MWXSvgIcon","SVGIcon","cr:12516","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=d("MWXSvgIcon").mwxSvgIcon(d("SVGIcon").svgIcon(b("cr:12516")),c("gkx")("23219"));g["default"]=a}),98);
__d("MWXIconPlay",["MWXSvgIcon","SVGIcon","cr:12532","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=d("MWXSvgIcon").mwxSvgIcon(d("SVGIcon").svgIcon(b("cr:12532")),c("gkx")("23219"));g["default"]=a}),98);
__d("MWXIconReplay",["MWXSvgIcon","SVGIcon","cr:12554","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=d("MWXSvgIcon").mwxSvgIcon(d("SVGIcon").svgIcon(b("cr:12554")),c("gkx")("23219"));g["default"]=a}),98);
__d("MWVideoPlayerPlayButton.react",["fbt","MWXIconPause","MWXIconPlay","MWXIconReplay","MWXIconStrict.react","MWXPressable.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=(j||(j=d("react"))).c,l=j,m={buttonLarge:{height:"xdd8jsf",marginTop:"xuqeo79",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"xbuoto1",width:"xvni27",$$css:!0},buttonSmall:{height:"xxk0z11",marginTop:"x7wgvq7",marginEnd:"x11i5rnm",marginBottom:"xat24cr",marginStart:"x16hk5td",width:"xvy4d1p",$$css:!0},circleButton:{backgroundColor:"x18l40ae",borderTopStartRadius:"x14yjl9h",borderTopEndRadius:"xudhj91",borderBottomEndRadius:"x18nykt9",borderBottomStartRadius:"xww2gxu",opacity:"x1hc1fzr",$$css:!0},container:{alignItems:"x6s0dn4",cursor:"x1ypdohk",display:"x78zum5",start:"xtzzx4i",left:null,right:null,justifyContent:"xl56j7k",position:"x10l6tqk",top:"xwa60dl",$$css:!0},playIconHidden:{opacity:"xg01cxk",visibility:"xlshs6z",$$css:!0}};function a(a){var b=k(8),d=a.isVisible,e=a.onClick,f=a.size;a=a.type;f=f===void 0?"LARGE":f;a=a===void 0?"PLAY":a;var g;bb0:switch(a){case"PAUSE":g=c("MWXIconPause");break bb0;case"REPLAY":g=c("MWXIconReplay");break bb0;case"PLAY":default:g=c("MWXIconPlay")}a=f==="LARGE"?24:12;var j;b[0]!==g||b[1]!==a?(j=l.jsx(c("MWXIconStrict.react"),{color:"white",icon:g,size:a}),b[0]=g,b[1]=a,b[2]=j):j=b[2];a=j;b[3]!==e||b[4]!==f||b[5]!==d||b[6]!==a?(j=e!=null?l.jsx(c("MWXPressable.react"),{display:"inline",label:h._("__JHASH__pymzrO9zrya__JHASH__"),onPress:e,overlayDisabled:!0,xstyle:[m.circleButton,m.container,f==="LARGE"&&m.buttonLarge,f==="SMALL"&&m.buttonSmall,!d&&m.playIconHidden],children:a}):l.jsx("div",{className:(i||(i=c("stylex")))(m.circleButton,m.container,f==="LARGE"&&m.buttonLarge,f==="SMALL"&&m.buttonSmall,!d&&m.playIconHidden),children:a}),b[3]=e,b[4]=f,b[5]=d,b[6]=a,b[7]=j):j=b[7];e=j;return e}g["default"]=a}),226);
__d("CometMediaViewerFilmstrip.react",["fbt","ix","CometBackgroundImage.react","CometImage.react","CometPressable.react","CometThrottle","FDSIcon.react","Locale","MWMediaGalleryVideoThumbnail.react","MWVideoPlayerPlayButton.react","fbicon","gkx","react","stylex"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k,l=k||(k=d("react"));b=k;b.useCallback;var m=b.useEffect,n=b.useRef,o=b.useState,p=b.c,q=c("gkx")("1775"),r={imageInner:{height:"x5yr21d",objectFit:"x19kjcj4",overflowX:"x6ikm8r",overflowY:"x10wlt62",width:"xh8yej3",$$css:!0},maxRootWidth:{maxWidth:"x193iq5w",$$css:!0},root:{alignItems:"x6s0dn4",display:"x78zum5",paddingTop:"x1y1aw1k",paddingBottom:"xwib8y2",transitionDuration:"xu6gjpd",transitionProperty:"x11xpdln",transitionTimingFunction:"x1r7x56h",whiteSpace:"xuxw1ft",$$css:!0},rootOverflow:{overflowX:"xw2csxc",overflowY:"x10wlt62",overscrollBehavior:"xish69e",$$css:!0},thumbnail:{cursor:"x1ypdohk",$$css:!0},thumbnailContainer:{borderTopStartRadius:"xhk9q7s",borderTopEndRadius:"x1otrzb0",borderBottomEndRadius:"x1i1ezom",borderBottomStartRadius:"x1o6z2jb",display:"x1rg5ohu",flexShrink:"x2lah0s",overflowX:"x6ikm8r",overflowY:"x10wlt62",$$css:!0},thumbnailNonActive:{opacity:"xti2d7y",":hover_opacity":"x5z6fxw",$$css:!0},thumbnailNonActiveDarken:{filter:"x1vra34",":hover_filter":"x19oicha",$$css:!0}},s={2:{marginStart:"x12mruv9",marginEnd:"xfs2ol5",marginLeft:null,marginRight:null,$$css:!0},6:{marginStart:"x1mnrxsn",marginEnd:"x1w0mnb",marginLeft:null,marginRight:null,$$css:!0}},t={36:{width:"x14qfxbe",$$css:!0},40:{width:"x100vrsf",$$css:!0}},u={36:{height:"xc9qbxq",$$css:!0},40:{height:"x1vqgdyp",$$css:!0}};function v(a){var b=p(40),e;b[0]!==a.image.mediaType||b[1]!==a.image.isUseImageResizing||b[2]!==a.image.backgroundColor?(e=a.image.mediaType!=="video"&&Boolean(a.image.isUseImageResizing)?{backgroundColor:a.image.backgroundColor}:{},b[0]=a.image.mediaType,b[1]=a.image.isUseImageResizing,b[2]=a.image.backgroundColor,b[3]=e):e=b[3];e=e;var f=a.image.mediaType!=="video"?a.image.uri:a.image.thumbnailUri,g=a.thumbnailMargin,k=a.thumbnailSize,o=a.thumbnailUseDarken;o=o?r.thumbnailNonActiveDarken:r.thumbnailNonActive;var v="comet-media-viewer-filmstrip-thubmnail-"+a.index,w=n(null),x;b[4]!==a.active||b[5]!==a.canScrollToActiveThumbnail?(x=function(){if(a.active&&a.canScrollToActiveThumbnail&&q){var b;(b=w.current)==null?void 0:b.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}},b[4]=a.active,b[5]=a.canScrollToActiveThumbnail,b[6]=x):x=b[6];var y=x,z;b[7]!==y?(x=function(){y()},z=[y],b[7]=y,b[8]=x,b[9]=z):(x=b[8],z=b[9]);m(x,z);b[10]!==y?(x=function(){if(!q)return;var a=c("CometThrottle")(y,100);window.addEventListener("resize",a);return function(){window.removeEventListener("resize",a)}},z=[y],b[10]=y,b[11]=x,b[12]=z):(x=b[11],z=b[12]);m(x,z);x=u[k];z=t[k];g=s[g];var A;b[13]!==x||b[14]!==z||b[15]!==g?(A=(j||(j=c("stylex")))([r.thumbnailContainer,x,z,g]),b[13]=x,b[14]=z,b[15]=g,b[16]=A):A=b[16];b[17]!==a.index?(x=h._("__JHASH__4fCl582nKTG__JHASH__",[h._param("index",a.index)]),b[17]=a.index,b[18]=x):x=b[18];z=a.onClick;g=u[k];k=t[k];o=a.active!==!0&&o;var B;b[19]!==g||b[20]!==k||b[21]!==o?(B=(j||(j=c("stylex")))(r.thumbnail,g,k,o),b[19]=g,b[20]=k,b[21]=o,b[22]=B):B=b[22];b[23]!==a.image.mediaType||b[24]!==a.image.uri||b[25]!==a.image.isUseImageResizing||b[26]!==f?(g=a.image.mediaType==="video"?l.jsxs(l.Fragment,{children:[c("gkx")("8622")===!0?l.jsx("div",{className:"x6s0dn4 x78zum5 x3igimt xl56j7k x10l6tqk x1qrby5j",children:l.jsx(c("MWVideoPlayerPlayButton.react"),{isVisible:!0,size:"SMALL"})}):l.jsx("div",{className:"x6s0dn4 x78zum5 x3igimt xl56j7k x10l6tqk x1qrby5j",children:l.jsx(c("FDSIcon.react"),{color:"white",icon:d("fbicon")._(i("507224"),12)})}),c("gkx")("3368")?l.jsx(c("MWMediaGalleryVideoThumbnail.react"),{fallbackVideoUrl:a.image.uri,previewUrl:f}):l.jsx(c("CometBackgroundImage.react"),{src:f})]}):Boolean(a.image.isUseImageResizing)?l.jsx(c("CometImage.react"),{src:f,xstyle:r.imageInner}):l.jsx(c("CometBackgroundImage.react"),{src:f}),b[23]=a.image.mediaType,b[24]=a.image.uri,b[25]=a.image.isUseImageResizing,b[26]=f,b[27]=g):g=b[27];b[28]!==B||b[29]!==e||b[30]!==g?(k=l.jsx("div",{className:B,style:e,children:g}),b[28]=B,b[29]=e,b[30]=g,b[31]=k):k=b[31];b[32]!==x||b[33]!==a.onClick||b[34]!==k?(o=l.jsx(c("CometPressable.react"),{display:"inline",label:x,onPress:z,overlayDisabled:!0,children:k}),b[32]=x,b[33]=a.onClick,b[34]=k,b[35]=o):o=b[35];b[36]!==A||b[37]!==v||b[38]!==o?(f=l.jsx("div",{className:A,"data-testid":void 0,ref:w,children:o}),b[36]=A,b[37]=v,b[38]=o,b[39]=f):f=b[39];return f}function a(a){var b=p(26),e=o(0),f=e[0],g=e[1],h=n(null),i=n(null),k=n(null);e=o(!1);var s=e[0],t=e[1];e=a.thumbnailMargin;var w=a.thumbnailSize,x=a.thumbnailUseDarken,y=e===void 0?6:e,z=w===void 0?36:w,A=x===void 0?!1:x,B=z+y*2;b[0]!==f||b[1]!==B||b[2]!==a.activeIndex||b[3]!==a.images.length?(e=function(){var b=function(){if(h.current!=null){var b=h.current,c=b.offsetWidth;b=b.scrollWidth;var d=k.current;if(b===c)return;b=-f/B;var e=Math.floor((c+-f)/B),i=b+Math.floor((e-b)/2);if(d!=null){if(a.activeIndex>d&&(a.activeIndex<i||e===a.images.length)){k.current=a.activeIndex;return}if(a.activeIndex<d&&(a.activeIndex>i||b===0)){k.current=a.activeIndex;return}}i=f-(a.activeIndex-((e=d)!=null?e:0))*B;i=Math.min(0,i);i=Math.max(Math.floor(c-a.images.length*B),i);k.current=a.activeIndex;g(i)}};if(q)return;b();i.current!=null&&window.removeEventListener("resize",i.current);b=c("CometThrottle")(b,100);i.current=b;window.addEventListener("resize",b);return function(){i.current!=null&&window.removeEventListener("resize",i.current)}},b[0]=f,b[1]=B,b[2]=a.activeIndex,b[3]=a.images.length,b[4]=e):e=b[4];b[5]!==a.images||b[6]!==a.activeIndex||b[7]!==f||b[8]!==B?(w=[a.images,a.activeIndex,f,B],b[5]=a.images,b[6]=a.activeIndex,b[7]=f,b[8]=B,b[9]=w):w=b[9];m(e,w);b[10]===Symbol["for"]("react.memo_cache_sentinel")?(x=function(){t(!0)},e=[],b[10]=x,b[11]=e):(x=b[10],e=b[11]);m(x,e);if(a.images.length<2)return null;w=u[z];b[12]!==w?(x=(j||(j=c("stylex")))([r.root,w,q?r.rootOverflow:r.maxRootWidth]),b[12]=w,b[13]=x):x=b[13];b[14]!==f?(e=q?void 0:{transform:"translate3d("+(d("Locale").isRTL()?-f:f)+"px, 0, 0)"},b[14]=f,b[15]=e):e=b[15];b[16]!==a||b[17]!==s||b[18]!==y||b[19]!==z||b[20]!==A?(w=a.images.map(function(b,c){return l.jsx(v,{active:a.activeIndex===c,canScrollToActiveThumbnail:s,image:b,index:c,onClick:function(b){a.onSetImage(c)},thumbnailMargin:y,thumbnailSize:z,thumbnailUseDarken:A},"thumbnail_"+c)}),b[16]=a,b[17]=s,b[18]=y,b[19]=z,b[20]=A,b[21]=w):w=b[21];var C;b[22]!==x||b[23]!==e||b[24]!==w?(C=l.jsx("div",{className:x,ref:h,style:e,children:w}),b[22]=x,b[23]=e,b[24]=w,b[25]=C):C=b[25];return C}g["default"]=a}),226);
__d("FBIconPauseFilled12.svg.react",["XPlatReactSVG","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(d("XPlatReactSVG").Svg,babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor",title:a.title},a,{children:[a.children!=null&&i.jsx(d("XPlatReactSVG").Defs,{children:a.children}),i.jsx(d("XPlatReactSVG").G,{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsxs(d("XPlatReactSVG").G,{children:[i.jsx(d("XPlatReactSVG").Path,{d:"M98.75 924h-1a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25",transform:"translate(355.5 159.5)"}),i.jsx(d("XPlatReactSVG").Path,{fillRule:"nonzero",d:"M98.75 924.5h-1a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75zm-.25-1v-7H98v7h.5z",transform:"translate(355.5 159.5)"}),i.jsx(d("XPlatReactSVG").Path,{d:"M103.25 924h-1a.25.25 0 0 1-.25-.25v-7.5a.25.25 0 0 1 .25-.25h1a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25",transform:"translate(355.5 159.5)"}),i.jsx(d("XPlatReactSVG").Path,{fillRule:"nonzero",d:"M103.25 924.5h-1a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-.75.75zm-.25-1v-7h-.5v7h.5z",transform:"translate(355.5 159.5)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("FBIconPlayFilled12.svg.react",["XPlatReactSVG","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(d("XPlatReactSVG").Svg,babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor",title:a.title},a,{children:[a.children!=null&&i.jsx(d("XPlatReactSVG").Defs,{children:a.children}),i.jsx(d("XPlatReactSVG").G,{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsxs(d("XPlatReactSVG").G,{children:[i.jsx(d("XPlatReactSVG").Path,{d:"m104.658 920.28-6.256-4.021a.26.26 0 0 0-.402.22v8.042a.26.26 0 0 0 .402.22l6.256-4.021a.261.261 0 0 0 0-.44",transform:"translate(355.5 159)"}),i.jsx(d("XPlatReactSVG").Path,{fillRule:"nonzero",d:"m104.929 919.86-6.256-4.022a.76.76 0 0 0-1.173.64v8.043a.76.76 0 0 0 1.173.64l6.256-4.02a.761.761 0 0 0 .06-1.238l-.06-.043zm-6.429 4.224v-7.168l5.575 3.584-5.575 3.584z",transform:"translate(355.5 159)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);
__d("FBIconRefreshLeftFilled12.svg.react",["XPlatReactSVG","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(d("XPlatReactSVG").Svg,babelHelpers["extends"]({viewBox:"0 0 12 13",width:"1em",height:"1em",fill:"currentColor",title:a.title},a,{children:[a.children!=null&&i.jsx(d("XPlatReactSVG").Defs,{children:a.children}),i.jsx(d("XPlatReactSVG").G,{fillRule:"evenodd",transform:"translate(-450 -1073)",children:i.jsxs(d("XPlatReactSVG").G,{fillRule:"nonzero",children:[i.jsx(d("XPlatReactSVG").Path,{d:"M103.5 920a4 4 0 1 1-2.361.771.75.75 0 1 0-.887-1.21 5.5 5.5 0 1 0 3.248-1.061.75.75 0 1 0 0 1.5z",transform:"translate(352.5 156)"}),i.jsx(d("XPlatReactSVG").Path,{d:"M104.53 918.53a.75.75 0 0 0-1.06-1.06l-1.25 1.25a.75.75 0 0 0 0 1.06l1.25 1.25a.75.75 0 0 0 1.06-1.06l-.72-.72.72-.72z",transform:"translate(352.5 156)"})]})})]}))}a.displayName=a.name+" [from "+f.id+"]";a._isSVG=!0;b=a;g["default"]=b}),98);