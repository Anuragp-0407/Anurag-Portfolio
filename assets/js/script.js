const ham = document.querySelector('.hamburger');
const menu= document.querySelector('.nav-menu')
ham.addEventListener('click',() => {
    menu.classList.toggle("open");

})

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });

        
        menu.classList.remove("open");
    });
});

const form = document.querySelector("#contact form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.querySelector("#name").value.trim();
    const email = form.querySelector("#email").value.trim();
    const message = form.querySelector("#message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all the fields");
        return;
    }
    form.submit();
    form.reset();
});
