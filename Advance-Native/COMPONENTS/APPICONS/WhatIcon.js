import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const WHATSAPPICON=document.createElement('img');
//SOURCE 
WHATSAPPICON.src=ICONSAPI+'whatsapp.png';
//STYLES
WHATSAPPICON.style.position='relative';
WHATSAPPICON.style.width='25px';
WHATSAPPICON.style.height='25px';
WHATSAPPICON.style.padding='0.5rem';
WHATSAPPICON.style.marginTop='auto';
WHATSAPPICON.style.marginBottom='auto';
WHATSAPPICON.style.marginLeft='auto';
WHATSAPPICON.style.marginRight='auto';

export{WHATSAPPICON};