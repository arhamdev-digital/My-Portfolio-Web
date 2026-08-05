const navLinks= document.querySelectorAll("nav a");

navLinks.forEach(function (link){
    link.addEventListener("click", function (event){
        event.preventDefault();

        const sectionId = link.getAttribute("href");

        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior:"smooth"
        });
    });
});

console.log("welcome to my Portfolio Website");