import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SUNICON=document.createElement('img');
SUNICON.src=`${ICONSAPI}sun.png`;
//STYLES
SUNICON.style.position='relative';
SUNICON.style.width='25px';
SUNICON.style.height='25px';
SUNICON.style.background='transparent';
SUNICON.style.marginTop='auto';
SUNICON.style.marginBottom='auto';
SUNICON.style.marginLeft='auto';
SUNICON.style.marginRight='auto';
SUNICON.style.display='block';


export{SUNICON};