import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const COMMENTICON=document.createElement('img');
//SOURCE 
COMMENTICON.src=ICONSAPI+'comment.png';
//STYLES
COMMENTICON.style.position='relative';
COMMENTICON.style.width='25px';
COMMENTICON.style.height='25px';
COMMENTICON.style.padding='0.5rem';
COMMENTICON.style.marginTop='auto';
COMMENTICON.style.marginBottom='auto';
COMMENTICON.style.marginLeft='auto';
COMMENTICON.style.marginRight='auto';

export{COMMENTICON};