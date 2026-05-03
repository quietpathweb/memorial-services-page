console.log("🔥 script.js is loaded");

const toggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (toggle && navigation) {
    toggle.addEventListener("click", () => {
        navigation.classList.toggle("active");

        toggle.setAttribute(
            "aria-expanded",
            navigation.classList.contains("active")
        );
    });
}

console.log("Site loaded");