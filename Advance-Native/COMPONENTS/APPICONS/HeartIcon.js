import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const HEARTICON=document.createElement('img');
//SOURCE 
HEARTICON.src=ICONSAPI+'heart.png';
//STYLES
HEARTICON.style.position='relative';
HEARTICON.style.width='25px';
HEARTICON.style.height='25px';
HEARTICON.style.padding='0.5rem';
HEARTICON.style.marginTop='auto';
HEARTICON.style.marginBottom='auto';
HEARTICON.style.marginLeft='auto';
HEARTICON.style.marginRight='auto';


export{HEARTICON};