import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;;

const SHORTMENUICON=document.createElement('img');
//SOURCE 
SHORTMENUICON.src=ICONSAPI+'menu.png';
//STYLES
SHORTMENUICON.style.position='relative';
SHORTMENUICON.style.width='25px';
SHORTMENUICON.style.height='25px';
SHORTMENUICON.style.padding='0.5rem';
SHORTMENUICON.style.marginTop='auto';
SHORTMENUICON.style.marginBottom='auto';
SHORTMENUICON.style.marginLeft='auto';
SHORTMENUICON.style.marginRight='auto';

export{SHORTMENUICON};