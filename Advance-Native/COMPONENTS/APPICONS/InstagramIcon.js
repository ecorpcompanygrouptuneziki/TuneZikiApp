import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const INSTAGRAMICON=document.createElement('img');
//SOURCE 
INSTAGRAMICON.src=ICONSAPI+'instagram.png';
//STYLES
INSTAGRAMICON.style.position='relative';
INSTAGRAMICON.style.width='25px';
INSTAGRAMICON.style.height='25px';
INSTAGRAMICON.style.padding='0.5rem';
INSTAGRAMICON.style.marginTop='auto';
INSTAGRAMICON.style.marginBottom='auto';
INSTAGRAMICON.style.marginLeft='auto';
INSTAGRAMICON.style.marginRight='auto';

export{INSTAGRAMICON};