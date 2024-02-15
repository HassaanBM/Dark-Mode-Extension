chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'toggleDarkMode') {
        if (message.enabled) {
            chrome.tabs.query({ url: 'https://docs.google.com/spreadsheets/*' }, function(tabs) {
                tabs.forEach(function(tab) {
                    chrome.scripting.insertCSS({
                        target: { tabId: tab.id },
                        files: ['dark-mode.css']
                    });
                });
            });
        } else {
            chrome.tabs.query({ url: 'https://docs.google.com/spreadsheets/*' }, function(tabs) {
                tabs.forEach(function(tab) {
                    chrome.scripting.removeCSS({
                        target: { tabId: tab.id },
                        files: ['dark-mode.css']
                    });
                });
            });
        }
    }
});
