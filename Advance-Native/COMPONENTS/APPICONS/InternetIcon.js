import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const INTERNETICON=document.createElement('img');
//SOURCE 
INTERNETICON.src=ICONSAPI+'internet.png';
//STYLES
INTERNETICON.style.position='relative';
INTERNETICON.style.width='25px';
INTERNETICON.style.height='25px';
INTERNETICON.style.padding='0.5rem';
INTERNETICON.style.marginTop='auto';
INTERNETICON.style.marginBottom='auto';
INTERNETICON.style.marginLeft='auto';
INTERNETICON.style.marginRight='auto';

export{INTERNETICON};