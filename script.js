document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll('nav ul li a[href^= "#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            let targetSection = document.querySelector(this.getAttribute("href"));
            if(targetSection)
            {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
})


