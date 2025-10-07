// enum type object
const currentPageMap = Object.freeze({
    HOME: "Home",
    PROGRAMMING: "Programming",
    GRAPHICDESIGN: "Graphic Design",
    VIDEOEDITING: "Video Editing",
    UNKNOWN: "Unknown"
});

// Store the key for the current page
const currentPageKey = getCurrentPageKey();

function getPageKey(){
    const path = window.location.pathname;

    if(path === "/" || path.endsWith("/index.html")){
        return "HOME";
    }

    for(const key in currentPageMap){
        if(key !== "HOME"){
            const fileNamePart = path.split('/').pop().split('.')[0].toLowerCase();

            if (fileNamePart.includes(key.toLowerCase())) {
                return key;
            }
        }
    }

    return "UNKNOWN";
}