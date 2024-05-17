chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
        id: "speak",
        title: "Speak Text",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "speak") {
        chrome.tts.speak(info.selectionText, {rate: 0.7});
    }
});
