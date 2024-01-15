import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SENDICON=document.createElement('img');
SENDICON.src=`${ICONSAPI}send.png`;
//STYLES
SENDICON.style.position='relative';
SENDICON.style.width='25px';
SENDICON.style.height='25px';
SENDICON.style.background='transparent';
SENDICON.style.marginTop='auto';
SENDICON.style.marginBottom='auto';
SENDICON.style.marginLeft='auto';
SENDICON.style.marginRight='auto';
SENDICON.style.display='block';


export{SENDICON};
