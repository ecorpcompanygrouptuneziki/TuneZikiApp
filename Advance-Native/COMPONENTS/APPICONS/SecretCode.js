import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SECRETCODEICON=document.createElement('img');
//SOURCE 
SECRETCODEICON.src=ICONSAPI+'secretcode.png';
//STYLES
SECRETCODEICON.style.position='relative';
SECRETCODEICON.style.width='25px';
SECRETCODEICON.style.height='25px';
SECRETCODEICON.style.padding='0.5rem';
SECRETCODEICON.style.position='relative';
SECRETCODEICON.style.marginTop='auto';
SECRETCODEICON.style.marginBottom='auto';
SECRETCODEICON.style.marginLeft='auto';
SECRETCODEICON.style.marginRight='auto';

export{SECRETCODEICON};