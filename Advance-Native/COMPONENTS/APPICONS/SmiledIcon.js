import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SMILEDICON=document.createElement('img');
SMILEDICON.src=`${ICONSAPI}liked.png`;
//STYLES
SMILEDICON.style.position='relative';
SMILEDICON.style.width='25px';
SMILEDICON.style.height='25px';
SMILEDICON.style.background='transparent';
SMILEDICON.style.marginTop='auto';
SMILEDICON.style.marginBottom='auto';
SMILEDICON.style.marginLeft='auto';
SMILEDICON.style.marginRight='auto';
SMILEDICON.style.display='block';


export{SMILEDICON};