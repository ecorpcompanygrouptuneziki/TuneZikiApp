import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const CLOSEICON=document.createElement('img');
//SOURCE 
CLOSEICON.src=ICONSAPI+'close.png';
//STYLES
CLOSEICON.style.position='relative';
CLOSEICON.style.width='25px';
CLOSEICON.style.height='25px';
CLOSEICON.style.padding='0.5rem';
CLOSEICON.style.marginTop='auto';
CLOSEICON.style.marginBottom='auto';
CLOSEICON.style.marginLeft='auto';
CLOSEICON.style.marginRight='auto';


export{CLOSEICON};