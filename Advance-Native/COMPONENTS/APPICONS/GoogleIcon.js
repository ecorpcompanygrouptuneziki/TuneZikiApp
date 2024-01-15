import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const GOOGLEICON=document.createElement('img');
//SOURCE 
GOOGLEICON.src=ICONSAPI+'gmail.png';
//STYLES
GOOGLEICON.style.position='relative';
GOOGLEICON.style.width='25px';
GOOGLEICON.style.height='25px';
GOOGLEICON.style.padding='0.5rem';
GOOGLEICON.style.marginTop='auto';
GOOGLEICON.style.marginBottom='auto';
GOOGLEICON.style.marginLeft='auto';
GOOGLEICON.style.marginRight='auto';

export{GOOGLEICON};