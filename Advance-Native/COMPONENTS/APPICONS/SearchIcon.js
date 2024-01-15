
import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SEARCHICON=document.createElement('img');
//SOURCE 
SEARCHICON.src=ICONSAPI+'search.png';
//STYLES
SEARCHICON.style.position='relative';
SEARCHICON.style.width='25px';
SEARCHICON.style.height='25px';
SEARCHICON.style.padding='0.5rem';
SEARCHICON.style.position='relative';
SEARCHICON.style.marginTop='auto';
SEARCHICON.style.marginBottom='auto';
SEARCHICON.style.marginLeft='auto';
SEARCHICON.style.marginRight='auto';

export{SEARCHICON};