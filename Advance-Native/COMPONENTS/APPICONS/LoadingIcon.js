import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LOADINGICON = document.createElement('img');
LOADINGICON.src = `${ICONSAPI}loading.png`;

// STYLES
LOADINGICON.style.position = 'relative';
LOADINGICON.style.width = '25px';
LOADINGICON.style.height = '25px';
LOADINGICON.style.background = 'transparent';
LOADINGICON.style.marginTop = 'auto';
LOADINGICON.style.marginBottom = 'auto';
LOADINGICON.style.marginLeft = 'auto';
LOADINGICON.style.marginRight = 'auto';
LOADINGICON.style.display = 'block';

// Function to apply spinning animation
function applySpinAnimation(element) {
    let rotation = 0;
    function rotate() {
        rotation += 5;
        element.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(rotate);
    }
    rotate();
}

// Apply spinning animation to the loading icon
applySpinAnimation(LOADINGICON);

export { LOADINGICON };
