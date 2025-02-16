// Utility Codes

'use-strict'

// On page load

if (performance.navigation.type === 1) {
    console.log("Page was refreshed!");
}

if (performance.getEntriesByType("navigation")[0]?.type === "reload") {
    console.log("Page was refreshed 2!");
}