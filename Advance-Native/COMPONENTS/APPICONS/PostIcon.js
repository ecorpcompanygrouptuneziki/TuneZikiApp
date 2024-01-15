import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const POSTICON=document.createElement('img');
//SOURCE 
POSTICON.src=ICONSAPI+'post.png';
//STYLES
POSTICON.style.position='relative';
POSTICON.style.width='25px';
POSTICON.style.height='25px';
POSTICON.style.padding='0.5rem';
POSTICON.style.marginTop='auto';
POSTICON.style.marginBottom='auto';
POSTICON.style.marginLeft='auto';
POSTICON.style.marginRight='auto';

export{POSTICON};