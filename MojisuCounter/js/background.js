(()=>{"use strict";chrome.runtime.onInstalled.addListener((function(){chrome.contextMenus.create({id:"moji_num",title:"文字数は  文字です",contexts:["selection"]})})),chrome.runtime.onMessage.addListener((function(e,t,n){(e.type="onRightClick")&&(chrome.contextMenus.update("moji_num",{title:"文字数は "+String(String(e.text).length)+" 文字です"}),n(!0)),n(!1)}))})();