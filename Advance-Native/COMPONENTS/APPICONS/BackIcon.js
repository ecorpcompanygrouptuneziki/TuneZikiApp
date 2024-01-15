import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const BACKICON=document.createElement('img');
//SOURCE 
BACKICON.src=ICONSAPI+'back.png';
//STYLES
BACKICON.style.position='relative';
BACKICON.style.width='25px';
BACKICON.style.height='25px';
BACKICON.style.padding='0.5rem';
BACKICON.style.position='relative';
BACKICON.style.marginTop='auto';
BACKICON.style.marginBottom='auto';
BACKICON.style.marginLeft='auto';
BACKICON.style.marginRight='auto';

export{BACKICON};