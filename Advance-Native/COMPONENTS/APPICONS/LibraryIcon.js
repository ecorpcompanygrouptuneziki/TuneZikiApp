import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const LIBRARYICON=document.createElement('img');
LIBRARYICON.src=`${ICONSAPI}library.png`;
//STYLES
LIBRARYICON.style.position='relative';
LIBRARYICON.style.width='25px';
LIBRARYICON.style.height='25px';
LIBRARYICON.style.background='transparent';
LIBRARYICON.style.marginTop='auto';
LIBRARYICON.style.marginBottom='auto';
LIBRARYICON.style.marginLeft='auto';
LIBRARYICON.style.marginRight='auto';
LIBRARYICON.style.display='block';


export{LIBRARYICON};