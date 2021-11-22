const navBar = document.querySelector(".navbar")
const showCases = document.que


// //scroll to top on reload
// window.onbeforeunload = function() {
//     window.scrollTo(0, 0);
// };

//turn to dark navbar when scrolling down 
window.onload = function() {
    window.onscroll = function() {
        if (scrollY > 260) {
            navBar.classList.add("fixed-top")
            navBar.classList.add("dark-bg")
        } else {
            navBar.classList.remove("fixed-top")
            navBar.classList.remove("dark-bg")
        }
    }
}

// show case sliding efect