import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const MUSICICON=document.createElement('img');
MUSICICON.src=`${ICONSAPI}music.png`;
//STYLES
MUSICICON.style.position='relative';
MUSICICON.style.width='25px';
MUSICICON.style.height='25px';
MUSICICON.style.background='transparent';
MUSICICON.style.marginTop='auto';
MUSICICON.style.marginBottom='auto';
MUSICICON.style.marginLeft='auto';
MUSICICON.style.marginRight='auto';
MUSICICON.style.display='block';


export{MUSICICON};