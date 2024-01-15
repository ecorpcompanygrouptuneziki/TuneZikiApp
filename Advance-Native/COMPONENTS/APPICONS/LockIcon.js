import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LOCKICON=document.createElement('img');
//SOURCE 
LOCKICON.src=ICONSAPI+'lock.png';
//STYLES
LOCKICON.style.position='relative';
LOCKICON.style.width='25px';
LOCKICON.style.height='25px';
LOCKICON.style.padding='0.5rem';
LOCKICON.style.marginTop='auto';
LOCKICON.style.marginBottom='auto';
LOCKICON.style.marginLeft='auto';
LOCKICON.style.marginRight='auto';

export{LOCKICON};