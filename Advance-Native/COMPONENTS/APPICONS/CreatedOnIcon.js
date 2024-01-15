import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const CREATEDONICON=document.createElement('img');
//SOURCE 
CREATEDONICON.src=ICONSAPI+'createdon.png';
//STYLES
CREATEDONICON.style.position='relative';
CREATEDONICON.style.width='25px';
CREATEDONICON.style.height='25px';
CREATEDONICON.style.padding='0.5rem';
CREATEDONICON.style.position='relative';
CREATEDONICON.style.marginTop='auto';
CREATEDONICON.style.marginBottom='auto';
CREATEDONICON.style.marginLeft='auto';
CREATEDONICON.style.marginRight='auto';

export{CREATEDONICON};