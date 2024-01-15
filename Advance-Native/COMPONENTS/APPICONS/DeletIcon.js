import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const DELETEICON=document.createElement('img');
//SOURCE 
DELETEICON.src=ICONSAPI+'delete.png';
//STYLES
DELETEICON.style.position='relative';
DELETEICON.style.width='25px';
DELETEICON.style.height='25px';
DELETEICON.style.padding='0.5rem';
DELETEICON.style.marginTop='auto';
DELETEICON.style.marginBottom='auto';
DELETEICON.style.marginLeft='auto';
DELETEICON.style.marginRight='auto';

export{DELETEICON};