import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const GMAILICON=document.createElement('img');
//SOURCE 
GMAILICON.src=ICONSAPI+'gmail.png';
//STYLES
GMAILICON.style.position='relative';
GMAILICON.style.width='25px';
GMAILICON.style.height='25px';
GMAILICON.style.padding='0.5rem';
GMAILICON.style.marginTop='auto';
GMAILICON.style.marginBottom='auto';
GMAILICON.style.marginLeft='auto';
GMAILICON.style.marginRight='auto';

export{GMAILICON};