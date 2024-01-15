import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const CHATICON=document.createElement('img');
//SOURCE 
CHATICON.src=ICONSAPI+'chat.png';
//STYLES
CHATICON.style.position='relative';
CHATICON.style.width='25px';
CHATICON.style.height='25px';
CHATICON.style.padding='0.5rem';
CHATICON.style.position='relative';
CHATICON.style.marginTop='auto';
CHATICON.style.marginBottom='auto';
CHATICON.style.marginLeft='auto';
CHATICON.style.marginRight='auto';

export{CHATICON};