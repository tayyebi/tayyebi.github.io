if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(function cb(){
            })
            .catch(err => console.log("service worker not registered", err));
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    // DOM fully loaded and parsed
});
