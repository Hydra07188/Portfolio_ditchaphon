const header = document.querySelector("#siteHeader");
const navToggle = document.querySelector("#navToggle");
const navMenu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.querySelector("#contactForm");

function setHeaderState() {
    header?.classList.toggle("scrolled", window.scrollY > 20);
}

function closeMobileMenu() {
    navMenu?.classList.remove("open");
    navToggle?.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
    const isOpen = navMenu?.classList.toggle("open");

    navToggle?.classList.toggle("open", Boolean(isOpen));
    navToggle?.setAttribute("aria-expanded", String(Boolean(isOpen)));
}

function updateActiveLink() {
    const currentSection = Array.from(sections).find((section) => {
        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        return window.scrollY >= top && window.scrollY < bottom;
    });

    if (!currentSection) {
        return;
    }

    navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${currentSection.id}`;
        link.classList.toggle("active", isActive);
    });
}

navToggle?.addEventListener("click", toggleMobileMenu);

navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("scroll", () => {
    setHeaderState();
    updateActiveLink();
});

contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    contactForm.reset();
    alert("Thanks for your message. I will get back to you soon.");
});

setHeaderState();
updateActiveLink();
