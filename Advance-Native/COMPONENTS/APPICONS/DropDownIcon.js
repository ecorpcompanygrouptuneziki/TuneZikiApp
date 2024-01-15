import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const DROPDOWNICON=document.createElement('img');
//SOURCE 
DROPDOWNICON.src=ICONSAPI+'dropdown.png';
//STYLES
DROPDOWNICON.style.position='relative';
DROPDOWNICON.style.width='25px';
DROPDOWNICON.style.height='25px';
DROPDOWNICON.style.padding='0.5rem';
DROPDOWNICON.style.position='relative';
DROPDOWNICON.style.marginTop='auto';
DROPDOWNICON.style.marginBottom='auto';
DROPDOWNICON.style.marginLeft='auto';
DROPDOWNICON.style.marginRight='auto';

export{DROPDOWNICON};