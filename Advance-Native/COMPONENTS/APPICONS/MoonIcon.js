import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const MOONICON=document.createElement('img');
MOONICON.src=`${ICONSAPI}moon.png`;
//STYLES
MOONICON.style.position='relative';
MOONICON.style.width='25px';
MOONICON.style.height='25px';
MOONICON.style.background='transparent';
MOONICON.style.marginTop='auto';
MOONICON.style.marginBottom='auto';
MOONICON.style.marginLeft='auto';
MOONICON.style.marginRight='auto';
MOONICON.style.display='block';


export{MOONICON};