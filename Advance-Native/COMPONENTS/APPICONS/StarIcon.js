import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const STARICON=document.createElement('img');
STARICON.src=`${ICONSAPI}star.png`;
//STYLES
STARICON.style.position='relative';
STARICON.style.width='25px';
STARICON.style.height='25px';
STARICON.style.background='transparent';
STARICON.style.marginTop='auto';
STARICON.style.marginBottom='auto';
STARICON.style.marginLeft='auto';
STARICON.style.marginRight='auto';
STARICON.style.display='block';


export{STARICON};
