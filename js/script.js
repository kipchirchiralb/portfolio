//scroll to top on reload
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

//turn to dark navbar when scrolling down 
const navBar = document.querySelector(".navbar")
const humbuggerBar = document.querySelectorAll(".bar")
window.onload = function() {
    window.onscroll = function() {
        if (scrollY > 260) {
            navBar.classList.add("fixed-top")
            navBar.classList.add("dark-bg")
            humbuggerBar.forEach((bar) => {
                bar.style.backgroundColor = "#F2F5F8"
            })

        } else {
            navBar.classList.remove("fixed-top")
            navBar.classList.remove("dark-bg")
            humbuggerBar.forEach((bar) => {
                bar.style.backgroundColor = "#0E1E25"
            })
        }
    }
}


//small screen menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// show case sliding efect