import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PLAYICON=document.createElement('img');
//SOURCE 
PLAYICON.src=ICONSAPI+'TEALICONS/play.png';
//STYLES
PLAYICON.style.position='relative';
PLAYICON.style.width='25px';
PLAYICON.style.height='25px';
PLAYICON.style.padding='0.5rem';
PLAYICON.style.marginTop='auto';
PLAYICON.style.marginBottom='auto';
PLAYICON.style.marginLeft='auto';
PLAYICON.style.marginRight='auto';

export{PLAYICON};