import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const MENUICON=document.createElement('img');
//SOURCE 
MENUICON.src=ICONSAPI+'menu.png';
//STYLES
MENUICON.style.position='relative';
MENUICON.style.width='25px';
MENUICON.style.height='25px';
MENUICON.style.padding='0.5rem';
MENUICON.style.marginTop='auto';
MENUICON.style.marginBottom='auto';
MENUICON.style.marginLeft='auto';
MENUICON.style.marginRight='auto';

export{MENUICON};