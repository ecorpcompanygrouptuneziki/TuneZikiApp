import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const DOWNLOADICON=document.createElement('img');
//SOURCE 
DOWNLOADICON.src=ICONSAPI+'download.png';
//STYLES
DOWNLOADICON.style.position='relative';
DOWNLOADICON.style.width='25px';
DOWNLOADICON.style.height='25px';
DOWNLOADICON.style.padding='0.5rem';
DOWNLOADICON.style.marginTop='auto';
DOWNLOADICON.style.marginBottom='auto';
DOWNLOADICON.style.marginLeft='auto';
DOWNLOADICON.style.marginRight='auto';


export{DOWNLOADICON};