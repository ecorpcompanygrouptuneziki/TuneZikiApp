import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PARENTALCONTROLICON=document.createElement('img');
PARENTALCONTROLICON.src=`${ICONSAPI}parentalcontrol.png`;
//STYLES
PARENTALCONTROLICON.style.position='relative';
PARENTALCONTROLICON.style.width='25px';
PARENTALCONTROLICON.style.height='25px';
PARENTALCONTROLICON.style.background='transparent';
PARENTALCONTROLICON.style.marginTop='auto';
PARENTALCONTROLICON.style.marginBottom='auto';
PARENTALCONTROLICON.style.marginLeft='auto';
PARENTALCONTROLICON.style.marginRight='auto';
PARENTALCONTROLICON.style.display='block';


export{PARENTALCONTROLICON};
