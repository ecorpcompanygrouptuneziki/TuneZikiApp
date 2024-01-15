import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SHAREICON=document.createElement('img');
SHAREICON.src=`${ICONSAPI}share.png`;
//STYLES
SHAREICON.style.position='relative';
SHAREICON.style.width='25px';
SHAREICON.style.height='25px';
SHAREICON.style.background='transparent';
SHAREICON.style.marginTop='auto';
SHAREICON.style.marginBottom='auto';
SHAREICON.style.marginLeft='auto';
SHAREICON.style.marginRight='auto';
SHAREICON.style.display='block';


export{SHAREICON};
