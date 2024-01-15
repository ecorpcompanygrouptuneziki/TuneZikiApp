import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PROFILEICON=document.createElement('img');
//SOURCE 
PROFILEICON.src=ICONSAPI+'profile.png';
//STYLES
PROFILEICON.style.position='relative';
PROFILEICON.style.width='25px';
PROFILEICON.style.height='25px';
PROFILEICON.style.padding='0.5rem';
PROFILEICON.style.marginTop='auto';
PROFILEICON.style.marginBottom='auto';
PROFILEICON.style.marginLeft='auto';
PROFILEICON.style.marginRight='auto';

export{PROFILEICON};