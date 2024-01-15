import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const EDITICON=document.createElement('img');
//SOURCE 
EDITICON.src=ICONSAPI+'post.png';
//STYLES
EDITICON.style.position='relative';
EDITICON.style.width='25px';
EDITICON.style.height='25px';
EDITICON.style.padding='0.5rem';
EDITICON.style.position='relative';
EDITICON.style.marginTop='auto';
EDITICON.style.marginBottom='auto';
EDITICON.style.marginLeft='auto';
EDITICON.style.marginRight='auto';

export{EDITICON};