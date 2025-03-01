const logIn = document.getElementById("toLogIn");

document.addEventListener("DOMContentLoaded", () => {
    const logIn = document.getElementById("toLogIn");
    
    if (logIn) {
        logIn.addEventListener("click", () => {
            window.location.href = "home.html";
        });
    } else {
        console.error("Elemento con ID 'toLogIn' non trovato!");
    }
});
