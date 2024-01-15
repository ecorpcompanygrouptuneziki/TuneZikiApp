import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LOGOUTICON=document.createElement('img');
//SOURCE 
LOGOUTICON.src=ICONSAPI+'logout.png';
//STYLES
LOGOUTICON.style.position='relative';
LOGOUTICON.style.width='25px';
LOGOUTICON.style.height='25px';
LOGOUTICON.style.padding='0.5rem';
LOGOUTICON.style.marginTop='auto';
LOGOUTICON.style.marginBottom='auto';
LOGOUTICON.style.marginLeft='auto';
LOGOUTICON.style.marginRight='auto';

export{LOGOUTICON};