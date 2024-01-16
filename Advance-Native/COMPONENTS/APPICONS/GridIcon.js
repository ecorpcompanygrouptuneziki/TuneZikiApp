import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const GRIDICON=document.createElement('img');
GRIDICON.src=`${ICONSAPI}TEALICONS/grid.png`;
//STYLES
GRIDICON.style.position='relative';
GRIDICON.style.width='25px';
GRIDICON.style.height='25px';
GRIDICON.style.background='transparent';
GRIDICON.style.marginTop='auto';
GRIDICON.style.marginBottom='auto';
GRIDICON.style.marginLeft='auto';
GRIDICON.style.marginRight='auto';
GRIDICON.style.display='block';


export{GRIDICON};
