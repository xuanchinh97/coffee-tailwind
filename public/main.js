

// init animation 
AOS.init();


// menu
const topMenu = document.querySelector('#top-menu')
const toggleTopMenu = document.querySelector('#toggle-top-menu')

document.addEventListener('click', (e) => {
    // click to toogle top menu icon 
    if (toggleTopMenu.contains(e.target)) {
        topMenu.classList.toggle('hidden')
        topMenu.classList.toggle('ct-top-menu-expanded')
    } else {
        // click outside from toggle top menu icon 
        if (topMenu.classList.contains('ct-top-menu-expanded')) {
            topMenu.classList.remove('ct-top-menu-expanded')
            topMenu.classList.add('hidden')
        }

    }
})

//Get the button:
const btnScrollTop = document.querySelector("#scroll-to-top")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollTop.style.display = "block";
    } else {
        btnScrollTop.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    window.scrollTo({top: 0, behavior: 'smooth'}); // For Chrome, Firefox, IE and Opera
}

btnScrollTop.addEventListener("click" , topFunction)
