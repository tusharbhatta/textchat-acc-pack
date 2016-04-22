var OTKAnalytics=function(){var e=function(e){this.url="https://hlg.tokbox.com/prod/logging/ClientEvent",this.analyticsData=e},t=function(){var e=this;if(null===e.analyticsData.sessionId||0===e.analyticsData.sessionId.length)throw console.log("Error. The sessionId field cannot be null in the log entry"),"The sessionId field cannot be null in the log entry";if(null==e.analyticsData.connectionId||0==e.analyticsData.connectionId.length)throw console.log("Error. The connectionId field cannot be null in the log entry"),"The connectionId field cannot be null in the log entry";if(0==e.analyticsData.partnerId)throw console.log("Error. The partnerId field cannot be null in the log entry"),"The partnerId field cannot be null in the log entry";if(null==e.analyticsData.clientVersion||0==e.analyticsData.clientVersion.length)throw console.log("Error. The clientVersion field cannot be null in the log entry"),"The clientVersion field cannot be null in the log entry";null!=e.analyticsData.logVersion&&0!=e.analyticsData.logVersion.length||(e.analyticsData.logVersion="2"),null!=e.analyticsData.guid&&0!=e.analyticsData.guid.length||(e.analyticsData.guid=n()),0==e.analyticsData.clientSystemTime&&(e.analyticsData.clientSystemTime=(new Date).getTime())},n=function(){for(var e=[],t="0123456789abcdef",n=0;36>n;n++)e[n]=t.substr(Math.floor(16*Math.random()),1);e[14]="4",e[19]=t.substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-";var a=e.join("");return a},a=function(){var e=this,t=e.analyticsData.payload||"";"object"==typeof t&&(t=JSON.stringify(t)),e.analyticsData.payload=t;var n=JSON.stringify(e.analyticsData),a=new XMLHttpRequest;a.open("POST",e.url,!0),a.setRequestHeader("Content-type","application/json"),a.send(n)};return e.prototype={constructor:OTKAnalytics,logEvent:function(e){this.analyticsData.action=e.action,this.analyticsData.variation=e.variation,t.call(this),a.call(this)}},e}(),TextChatAccPack=function(){var e,t,n,a,s,i,o,l=!1,c=!1,r="chat-container",d=function(t){t=t||{},imCharacterCount=t.charCountElement,e=t.acceleratorPack,n=t.sender,o=t.limitCharacterMessage||160,i=this},h=function(e){return uiLayout=['<div class="wms-widget-wrapper">','<div class="wms-widget-chat wms-widget-extras" id="chatContainer">','<div class="wms-messages-header hidden" id="chatHeader">',"<span>Chat with</span>","</div>",'<div id="wmsChatWrap">','<div class="wms-messages-holder" id="messagesHolder">','<div class="wms-message-item wms-message-sent">',"</div>","</div>",'<div class="wms-send-message-box">','<input type="text" maxlength='+o+' class="wms-message-input" placeholder="Enter your message here" id="messageBox">','<button class="wms-icon-check" id="sendMessage" type="submit"></button>','<div class="wms-character-count"><span><span id="character-count">0</span>/'+o+" characters</span></div>","</div>","</div>","</div>","</div>"].join("\n")},m=function(e){e=document.querySelector(e)||document.body;var t=document.createElement("section");t.innerHTML=h(),a=t.querySelector("#messageBox"),s=t.querySelector("#messagesHolder"),a.onkeyup=b.bind(this),a.onkeydown=T.bind(this),e.appendChild(t),document.getElementById("sendMessage").onclick=function(){g(a.value)}},u=function(e){return t&&t.senderId===e.senderId&&moment(t.sentOn).fromNow()===moment(e.sentOn).fromNow()},g=function(e){_.isEmpty(e)||$.when(f(i._remoteParticipant,e)).then(function(t){p({senderId:n.id,alias:n.alias,message:e,sentOn:Date.now()}),this.futureMessageNotice&&(this.futureMessageNotice=!1)},function(e){i._handleMessageError(e)})},f=function(t,a){var s=new $.Deferred,i={text:a,sender:{id:n.id,alias:n.alias},sentOn:Date.now()};return console.log(e.getSession()),void 0===t?e.getSession().signal({type:"text-chat",data:i},function(e){if(e){if(e.message="Error sending a message. ",413===e.code){var t=e.message+"The chat message is over size limit.";e.message=t}else if(500===e.code){var t=e.message+"Check your network connection.";e.message=t}s.reject(e)}else console.log("Message sent"),s.resolve(i)}):e.getSession().signal({type:"text-chat",data:i,to:t},function(e){e?(console.log("Error sending a message"),s.resolve(e)):(console.log("Message sent"),s.resolve(i))}),s.promise()},p=function(e){if(u(e)){$(".wms-item-text").last().append("<span>"+e.message+"</span>");var a=$(s);a[0].scrollTop=a[0].scrollHeight,C()}else w(n.id,n.alias,e.message,e.sentOn);t=e},y=function(e){"string"==typeof e.data&&(e.data=JSON.parse(e.data)),u(e.data)?$(".wms-item-text").last().append("<span>"+e.data.text+"</span>"):w(e.data.sender.id,e.data.sender.alias,e.data.text,e.data.sentOn),t=e.data},v=function(e){if(console.log(e.code,e.message),500===e.code){var t=_.template($("#chatError").html());$(this.comms_elements.messagesView).append(t())}},w=function(e,t,a,i){var o=n.id===e?"wms-message-item wms-message-sent":"wms-message-item",l=D({username:t,message:a,messageClass:o,time:i}),c=$(s);c.append(l),C(),c[0].scrollTop=c[0].scrollHeight},D=function(e){var t=['<div class="'+e.messageClass+'" >','<div class="wms-user-name-initial"> '+e.username[0]+"</div>",'<div class="wms-item-timestamp"> '+e.username+', <span data-livestamp=" '+new Date(e.time)+'" </span></div>','<div class="wms-item-text">',"<span> "+e.message+"</span>","</div>","</div>"].join("\n");return t},x=function(t){var n=e.getSession().connection.connectionId,a=t.from.connectionId;if(a!==n){var s=y(t);s&&"function"==typeof s&&s(t)}},C=function(){a.value="",$(imCharacterCount).text("0")},T=function(e){var t=13===e.which||13===e.keyCode;!e.shiftKey&&t&&(e.preventDefault(),g.call(this,a.value))},b=function(){$(imCharacterCount).text(a.value.length)};return d.prototype={constructor:d,initTextChat:function(t){l=!0,c=!0,m.call(this,t),e.getSession().on("signal:text-chat",this._handleTextChat.bind(this))},showTextChat:function(){document.getElementById(r).classList.remove("hidden"),this.setDisplayTextChat(!0)},hideTextChat:function(){document.getElementById(r).classList.add("hidden"),this.setDisplayTextChat(!1)},getEnableTextChat:function(){return l},getDisplayTextChat:function(){return c},setDisplayTextChat:function(e){c=e},_handleTextChat:function(e){x.call(this,e)},_handleMessageError:function(e){v.call(this,e)}},d}();