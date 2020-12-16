document.addEventListener("contextmenu", function(event){
    console.log(event);
    if(event.button != 2){
        return false;
    }
    var text = window.getSelection()?.toString();
    console.log(text);
    if(event.button == 2 && text != ""){
        chrome.runtime.sendMessage({
            type: "onRightClick",
            text: text
        }, function() :void{})
    }else{
        chrome.runtime.sendMessage({
            type: "onRightClick",
            text: ""
        }, function() :void{})
    }
});