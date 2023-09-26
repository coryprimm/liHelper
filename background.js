async function getTabID() {
    return new Promise((resolve, reject) => {
        try {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                if (tabs && tabs.length > 0) {
                    resolve(tabs[0].id);
                } else {
                    reject(new Error("No active tab found."));
                }
            });
        } catch (e) {
            reject(e);
        }
    });
}

chrome.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
    const scriptInjectionResult = await getTabID().then((targetTabId) => {
        if (tabId === targetTabId && changeInfo.status === "complete") {
            return chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] });
        }
    });

    // Optionally, you can handle the result of script injection here.
    if (scriptInjectionResult) {
        // Script was injected successfully.
    } else {
        // Script injection failed or conditions were not met.
    }
});



