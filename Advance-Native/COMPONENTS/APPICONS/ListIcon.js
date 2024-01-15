import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LISTICON=document.createElement('img');
LISTICON.src=`${ICONSAPI}list.png`;
//STYLES
LISTICON.style.position='relative';
LISTICON.style.width='25px';
LISTICON.style.height='25px';
LISTICON.style.background='transparent';
LISTICON.style.marginTop='auto';
LISTICON.style.marginBottom='auto';
LISTICON.style.marginLeft='auto';
LISTICON.style.marginRight='auto';
LISTICON.style.display='block';


export{LISTICON};
