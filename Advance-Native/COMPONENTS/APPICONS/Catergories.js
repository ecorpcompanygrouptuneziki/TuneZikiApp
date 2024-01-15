import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const CATERGORYICON=document.createElement('img');
CATERGORYICON.src=`${ICONSAPI}list.png`;
//STYLES
CATERGORYICON.style.position='relative';
CATERGORYICON.style.width='25px';
CATERGORYICON.style.height='25px';
CATERGORYICON.style.background='transparent';
CATERGORYICON.style.marginTop='auto';
CATERGORYICON.style.marginBottom='auto';
CATERGORYICON.style.marginLeft='auto';
CATERGORYICON.style.marginRight='auto';
CATERGORYICON.style.display='block';


export{CATERGORYICON};