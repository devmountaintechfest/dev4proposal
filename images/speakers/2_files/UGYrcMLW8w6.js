;/*FB_PKG_DELIM*/

__d("MWAudioPlayerWithRetry.react",["I64","MAWGetIsMediaDownloadStatusEnabled","MWPAudioHighlightStylesHooks","MWPAudioPlaybackButton.react","MWPAudioPlayerButtons.react","MWPAudioPlayerContainer.react","MWPAudioPlayerHighlight.react","MWPAudioPlayerKeyCommands.react","MWPAudioPlayerSharedStyles","MWPAudioPlayerTimer.react","MWPAudioPlayerUtils","MWXMessageBubbleCornerStyles.react","react","requireDeferred","stylex","useMAWMediaStatusUIState","useMWNextAttachment","useMWPAudioWaveformData.react","useMWPMarkAudioAttachmentAsConsumed.react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=i||(i=d("react"));b=i;var l=b.useEffect,m=b.useRef,n=b.c,o=c("requireDeferred")("MWChatAudioLog").__setRef("MWAudioPlayerWithRetry.react");function p(){o.onReady(function(a){return a.logBrowserDenyAccess()})}function a(a){var b=n(71),e=a.attachment,f=a.connectBottom,g=a.connectTop,i=a.getPlayableUrl,o=a.isReply,q=a.isSecure,r=a.mediaRenderQpl,s=a.message,t=a.outgoing,u=a.renderUnsupportedAttachment;a=a.width;o=o===void 0?!1:o;var v=e.playableDurationMs,w=(j||(j=d("I64"))).to_float((v=v)!=null?v:(j||(j=d("I64"))).zero)/1e3,x=c("useMWNextAttachment")(e,s);b[0]!==q||b[1]!==x?(v=q&&d("MAWGetIsMediaDownloadStatusEnabled").getIsMediaDownloadStatusEnabled()?x:null,b[0]=q,b[1]=x,b[2]=v):v=b[2];q=v;v=c("useMAWMediaStatusUIState")(q,r);q=v.downloadStatus;b[3]!==i||b[4]!==e||b[5]!==r?(v=i(e,"MWAudioPlayer",r),b[3]=i,b[4]=e,b[5]=r,b[6]=v):v=b[6];var y=v,z=c("useMWPAudioWaveformData.react")(e,y);v=d("MWXMessageBubbleCornerStyles.react").getMWXBubbleCornerStyles({align:t===!0?"right":"left",connectBottom:f,connectTop:g});b[7]!==x||b[8]!==q||b[9]!==i?(f=x!=null&&(q==null||q==="downloaded")?i(x,"MWAudioPlayer"):void 0,b[7]=x,b[8]=q,b[9]=i,b[10]=f):f=b[10];g=d("MWPAudioPlayerUtils").useControlCenterWithRetry(y,f,s.messageId,x==null?void 0:x.messageId,p,!1,w,r);q=g[0];i=g[1];f=g[2];var A=g[3],B=g[4];g=g[5];c("useMWPMarkAudioAttachmentAsConsumed.react")(f,e);if(b[11]!==s.ephemeralDurationInSec){var C;C=(j||(j=d("I64"))).gt((C=s.ephemeralDurationInSec)!=null?C:(j||(j=d("I64"))).zero,j.zero);b[11]=s.ephemeralDurationInSec;b[12]=C}else C=b[12];var D=C;s=q===d("MWPAudioPlayerUtils").State.NONE;C=q===d("MWPAudioPlayerUtils").State.PLAYING;var E=q===d("MWPAudioPlayerUtils").State.PAUSED,F=q===d("MWPAudioPlayerUtils").State.LOADING;q=q===d("MWPAudioPlayerUtils").State.ENDED;var G=C||E,H=m(),I=d("MWPAudioHighlightStylesHooks").useHighlightStyles(t);a=d("MWPAudioPlayerUtils").useCalculatePlayerWidth(a,D);a=a+"px";var J;b[13]!==a?(J={width:a},b[13]=a,b[14]=J):J=b[14];a=J;J=G?Math.max(w-i,0):0;var K,L;b[15]!==r||b[16]!==x||b[17]!==w||b[18]!==y||b[19]!==z||b[20]!==D?(K=function(){r==null?void 0:r.addPoint("render-audio-player",{bool:{has_next_attachment:x!=null,has_non_zero_duration:w>0,has_playable_url:Boolean(y),has_waveform:z!=null,is_disappearing_message:D}})},L=[w,D,r,x,y,z],b[15]=r,b[16]=x,b[17]=w,b[18]=y,b[19]=z,b[20]=D,b[21]=K,b[22]=L):(K=b[21],L=b[22]);l(K,L);if(y==null||y.length===0){r==null?void 0:r.endFail("empty_preview_url");if(u!=null){b[23]!==u||b[24]!==e?(K=u(e),b[23]=u,b[24]=e,b[25]=K):K=b[25];return K}}L=c("MWPAudioPlayerKeyCommands.react");u=c("MWPAudioPlayerContainer.react");K="mw_audio_player";K=d("MWPAudioPlayerUtils").UseCase;v=(h||(h=c("stylex")))(d("MWPAudioPlayerSharedStyles").styles.common,v,t?d("MWPAudioPlayerSharedStyles").styles.commonOutgoing:d("MWPAudioPlayerSharedStyles").styles.commonIncoming,o&&d("MWPAudioPlayerSharedStyles").styles.commonReply,t&&o&&d("MWPAudioPlayerSharedStyles").styles.commonOutgoingReply);o=e.isAttachmentConsumed===!0;b[26]!==s||b[27]!==q||b[28]!==F||b[29]!==E||b[30]!==C||b[31]!==A||b[32]!==t||b[33]!==H?(e=k.jsx(c("MWPAudioPlaybackButton.react"),{disabled:s,hasEnded:q,isLoading:F,isPaused:E,isPlaying:C,onPress:A,outgoing:t,scrubberRef:H}),b[26]=s,b[27]=q,b[28]=F,b[29]=E,b[30]=C,b[31]=A,b[32]=t,b[33]=H,b[34]=e):e=b[34];b[35]!==f||b[36]!==i||b[37]!==w||b[38]!==q||b[39]!==G||b[40]!==o||b[41]!==C||b[42]!==g||b[43]!==t||b[44]!==B||b[45]!==H||b[46]!==z||b[47]!==I||b[48]!==e?(s=k.jsx(d("MWPAudioPlayerHighlight.react").MWPAudioPlayerHighlightV2,{audioEl:f,currentTime:i,duration:w,hasEnded:q,hasScrubber:G,isListened:o,isPlaying:C,onUpdateScrubber:g,outgoing:t,progressHighlightRef:B,scrubberRef:H,waveformData:z,xstyle:I,children:e}),b[35]=f,b[36]=i,b[37]=w,b[38]=q,b[39]=G,b[40]=o,b[41]=C,b[42]=g,b[43]=t,b[44]=B,b[45]=H,b[46]=z,b[47]=I,b[48]=e,b[49]=s):s=b[49];b[50]!==C||b[51]!==t||b[52]!==J?(F=k.jsx("div",{children:C?k.jsxs(k.Fragment,{children:[k.jsx(c("MWPAudioPlayerTimer.react"),{outgoing:t,time:J}),k.jsx(d("MWPAudioPlayerButtons.react").PlaybackRateButton,{outgoing:t})]}):k.jsx(c("MWPAudioPlayerTimer.react"),{outgoing:t,time:J})}),b[50]=C,b[51]=t,b[52]=J,b[53]=F):F=b[53];b[54]!==v||b[55]!==s||b[56]!==F?(E=k.jsxs("div",{className:v,children:[s,F]}),b[54]=v,b[55]=s,b[56]=F,b[57]=E):E=b[57];b[58]!==u||b[59]!==f||b[60]!==G||b[61]!==r||b[62]!==H||b[63]!==a||b[64]!==K.PLAYER||b[65]!==E?(A=k.jsx(u,{audioEl:f,hasScrubber:G,mediaRenderQpl:r,scrubberRef:H,style:a,testid:void 0,useCase:K.PLAYER,children:E}),b[58]=u,b[59]=f,b[60]=G,b[61]=r,b[62]=H,b[63]=a,b[64]=K.PLAYER,b[65]=E,b[66]=A):A=b[66];b[67]!==L||b[68]!==f||b[69]!==A?(i=k.jsx(L,{audioEl:f,children:A}),b[67]=L,b[68]=f,b[69]=A,b[70]=i):i=b[70];return i}g["default"]=a}),98);
__d("useMWPDarkModeTheme",["I64","LSIntEnum","MessengerAppColorMode","ReQL","ReQLSuspense","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j,k=(h||d("react")).c;function a(a,b){var e=k(4),g,h;e[0]!==b||e[1]!==a?(g=function(){return b==null?d("ReQL").empty():d("ReQL").fromTableAscending(a.tables.thread_themes).filter(function(a){return(i||(i=d("I64"))).equal(a.normalThemeId,b)&&(i||(i=d("I64"))).equal(a.appColorMode,(j||(j=d("LSIntEnum"))).ofNumber(c("MessengerAppColorMode").DARK))})},h=[a,b],e[0]=b,e[1]=a,e[2]=g,e[3]=h):(g=e[2],h=e[3]);return d("ReQLSuspense").useFirst(g,h,f.id+":25")}g["default"]=a}),98);