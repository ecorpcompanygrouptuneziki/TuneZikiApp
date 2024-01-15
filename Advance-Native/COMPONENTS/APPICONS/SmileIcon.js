import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SMILEICON=document.createElement('img');
SMILEICON.src=`${ICONSAPI}like.png`;
//STYLES
SMILEICON.style.position='relative';
SMILEICON.style.width='25px';
SMILEICON.style.height='25px';
SMILEICON.style.background='transparent';
SMILEICON.style.marginTop='auto';
SMILEICON.style.marginBottom='auto';
SMILEICON.style.marginLeft='auto';
SMILEICON.style.marginRight='auto';
SMILEICON.style.display='block';


export{SMILEICON};
