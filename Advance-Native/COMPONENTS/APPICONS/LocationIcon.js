import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LOCATIONICON=document.createElement('img');
//SOURCE 
LOCATIONICON.src=ICONSAPI+'location.png';
//STYLES
LOCATIONICON.style.position='relative';
LOCATIONICON.style.width='25px';
LOCATIONICON.style.height='25px';
LOCATIONICON.style.padding='0.5rem';
LOCATIONICON.style.marginTop='auto';
LOCATIONICON.style.marginBottom='auto';
LOCATIONICON.style.marginLeft='auto';
LOCATIONICON.style.marginRight='auto';

export{LOCATIONICON};