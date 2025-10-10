function generateNavBar(){
    return `
        <nav class="NavBarContainer">
        <div class="NavGrid">
            <a href="/index.html" class="NavIconCont">
                <img src="images/home-icon.svg" alt="home-icon" class="NavHome">
            </a>

            <a href="/programming.html">
                <button class="NavButton"><h2 class="NavText">programming</h2></button>
            </a>

            <a href="/photography.html">
                <button class="NavButton"><h2 class="NavText">photography</h2></button>
            </a>
            
            <button class="NavIconCont" id="navToggleButton">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF" class="NavMore"><path d="M412-412H222q-29 0-48.5-20.2T154-480q0-29 19.5-48.5T222-548h190v-191q0-27.6 20.2-47.8Q452.4-807 480-807q27.6 0 47.8 20.2Q548-766.6 548-739v191h190q29 0 48.5 19.5t19.5 48q0 28.5-19.5 48.5T738-412H548v190q0 27.6-20.2 47.8Q507.6-154 480-154q-27.6 0-47.8-20.2Q412-194.4 412-222v-190Z"/></svg>
            </button>

            <div id="MenuLinks" class="menu-closed">
                <button class="" onclick=" window.open('https://www.linkedin.com/in/khalid-zeidan/','_blank')"><h2 class="HeaderText">Linkedin</h2>
                </button>

                <button class="" onclick=" window.open('https://github.com/khalid-zeidan','_blank')"><h2 class="HeaderText">Github</h2>
                </button>

                <a class="Header Email" href="mailto:khalidyahia.work@gmail.com"><button class="">
                    <h2 class="HeaderText">Email</h2>
                </button></a>
            </div>
        </div>
    </nav>
    `;
}

function generateFooter(){
    return `
    <footer class="Footer">
        <div class="FooterGrid">
            <p class="Footer">&copy; 2025 Khalid Zeidan - All rights reserved</p>
            <p class="Footer">v1.0.0 last updated 11-10-2025</p>
        </div>
        <img src="images/khalid-zeidan.png" alt="khalid zeidan text" draggable="false" class="footerIMG">
    </footer>
    `;
}

window.onload = () =>{
    const navPlaceHolder = document.getElementById("navPlaceHolder");
    const footerPlaceHolder = document.getElementById("footerPlaceHolder")

    if(navPlaceHolder){
        navPlaceHolder.innerHTML = generateNavBar();
    }
    if(footerPlaceHolder){
        footerPlaceHolder.innerHTML = generateFooter();
    }

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