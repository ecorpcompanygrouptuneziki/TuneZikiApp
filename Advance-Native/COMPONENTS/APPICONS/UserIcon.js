import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const USERICON=document.createElement('img');
//SOURCE 
USERICON.src=ICONSAPI+'TEALICONS/user-music.png';
//STYLES
USERICON.style.position='relative';
USERICON.style.width='25px';
USERICON.style.height='25px';
USERICON.style.padding='0.5rem';
USERICON.style.marginTop='auto';
USERICON.style.marginBottom='auto';
USERICON.style.marginLeft='auto';
USERICON.style.marginRight='auto';

export{USERICON};