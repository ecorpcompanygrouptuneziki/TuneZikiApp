import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SAVEDICON=document.createElement('img');
SAVEDICON.src=`${ICONSAPI}saved.png`;
//STYLES
SAVEDICON.style.position='relative';
SAVEDICON.style.width='25px';
SAVEDICON.style.height='25px';
SAVEDICON.style.background='transparent';
SAVEDICON.style.marginTop='auto';
SAVEDICON.style.marginBottom='auto';
SAVEDICON.style.marginLeft='auto';
SAVEDICON.style.marginRight='auto';
SAVEDICON.style.display='block';


export{SAVEDICON};
