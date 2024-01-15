import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const INFOICON=document.createElement('img');
INFOICON.src=`${ICONSAPI}info.png`;
//STYLES
INFOICON.style.position='relative';
INFOICON.style.width='25px';
INFOICON.style.height='25px';
INFOICON.style.background='transparent';
INFOICON.style.marginTop='auto';
INFOICON.style.marginBottom='auto';
INFOICON.style.marginLeft='auto';
INFOICON.style.marginRight='auto';
INFOICON.style.display='block';


export{INFOICON};
