window.onload = () =>{
    const toggleButton = document.getElementById("navToggleButton");
    const navSVG = document.querySelector(".NavMore");
    const menuLinks = document.getElementById("MenuLinks");

    if(toggleButton && navSVG && menuLinks){
        toggleButton.addEventListener('click', () =>
        {
            navSVG.classList.toggle('rotated');
            menuLinks.classList.toggle('openMenu');
        })
    }
    else {
        console.error("Could not find all required elements (button, svg, or menuLinks).");
    }
}