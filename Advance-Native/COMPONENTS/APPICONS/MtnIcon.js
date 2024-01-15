import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const MTNICON=document.createElement('img');
//SOURCE 
MTNICON.src=ICONSAPI+'mtn.jpg';
//STYLES
MTNICON.style.position='relative';
MTNICON.style.width='25px';
MTNICON.style.height='25px';
MTNICON.style.padding='0.5rem';
MTNICON.style.marginTop='auto';
MTNICON.style.marginBottom='auto';
MTNICON.style.marginLeft='auto';
MTNICON.style.marginRight='auto';

export{MTNICON};