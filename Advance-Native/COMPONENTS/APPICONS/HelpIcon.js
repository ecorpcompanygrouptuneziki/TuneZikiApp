import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const HELPICON=document.createElement('img');
//SOURCE 
HELPICON.src=ICONSAPI+'help.png';
//STYLES
HELPICON.style.position='relative';
HELPICON.style.width='25px';
HELPICON.style.height='25px';
HELPICON.style.padding='0.5rem';
HELPICON.style.marginTop='auto';
HELPICON.style.marginBottom='auto';
HELPICON.style.marginLeft='auto';
HELPICON.style.marginRight='auto';

export{HELPICON};