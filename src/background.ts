chrome.runtime.onInstalled.addListener((): void => {
    chrome.contextMenus.create({
      id: "moji_num",
      title: "文字数は " + " 文字です",
      contexts: ["selection"]
    });
});

chrome.runtime.onMessage.addListener(function(res, sender, sendResponse){
    if(res.type="onRightClick"){
        chrome.contextMenus.update("moji_num", {
            title: "文字数は " + String(String(res.text).length) + " 文字です"
        })
        sendResponse(true);
    }
    sendResponse(false);
})