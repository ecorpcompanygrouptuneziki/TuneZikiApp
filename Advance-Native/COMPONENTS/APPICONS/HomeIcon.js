import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const HOMEICON=document.createElement('img');
//SOURCE 
HOMEICON.src=ICONSAPI+'home.png';
//STYLES
HOMEICON.style.position='relative';
HOMEICON.style.width='25px';
HOMEICON.style.height='25px';
HOMEICON.style.padding='0.5rem';
HOMEICON.style.marginTop='auto';
HOMEICON.style.marginBottom='auto';
HOMEICON.style.marginLeft='auto';
HOMEICON.style.marginRight='auto';


export{HOMEICON};