
// ========================================
// KAIROVA INFORMATION CENTER
// JAVASCRIPT
// ========================================

// THEME TOGGLE

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeEnabled =
        document.body.classList.contains("dark-mode");

    themeButton.textContent = darkModeEnabled
        ? "Light Mode"
        : "Dark Mode";

});


// ONLINE STATUS

const onlineStatus = document.getElementById("onlineStatus");
const sidebarStatus = document.getElementById("sidebarStatus");
const statusDot = document.getElementById("statusDot");

function updateOnlineStatus() {

    const isOnline = navigator.onLine;

    onlineStatus.textContent = isOnline
        ? "Online — Connection available"
        : "Offline — No network connection";

    sidebarStatus.textContent = isOnline
        ? "Status: Online"
        : "Status: Offline";

    statusDot.classList.toggle("offline", !isOnline);

}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);

updateOnlineStatus();


// LIVE CLOCK

const clock = document.getElementById("clock");

function updateClock() {

    const currentTime = new Date();

    clock.textContent = currentTime.toLocaleTimeString();

}

updateClock();

setInterval(updateClock, 1000);


// CURRENT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// FEEDBACK FORM

const feedbackForm = document.getElementById("feedbackForm");
const formMessage = document.getElementById("formMessage");

feedbackForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("visitorName").value.trim();

    if (!name) {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    formMessage.textContent =
        `Thank you, ${name}! Your local feedback demo was submitted.`;

    feedbackForm.reset();

});