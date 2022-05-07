
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

AOS.init();

