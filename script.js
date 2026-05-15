// ===== SMOOTH SCROLL BUTTON =====
document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.style.background = "#020617";
        nav.style.boxShadow = "0 0 10px #38bdf8";
    } else {
        nav.style.background = "rgba(15, 23, 42, 0.8)";
        nav.style.boxShadow = "none";
    }
});

// ===== FADE IN ANIMATION =====
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});
// ===== FORM SUBMIT =====
document.getElementById("form").addEventListener("submit", async function(e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    try {

        const response = await fetch("http://127.0.0.1:3000/send", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

    } catch (error) {

        alert("Server error");

        console.log(error);

    }

});