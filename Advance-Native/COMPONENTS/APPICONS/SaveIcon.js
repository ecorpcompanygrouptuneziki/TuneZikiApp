import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SAVEICON=document.createElement('img');
SAVEICON.src=`${ICONSAPI}save.png`;
//STYLES
SAVEICON.style.position='relative';
SAVEICON.style.width='25px';
SAVEICON.style.height='25px';
SAVEICON.style.background='transparent';
SAVEICON.style.marginTop='auto';
SAVEICON.style.marginBottom='auto';
SAVEICON.style.marginLeft='auto';
SAVEICON.style.marginRight='auto';
SAVEICON.style.display='block';


export{SAVEICON};
