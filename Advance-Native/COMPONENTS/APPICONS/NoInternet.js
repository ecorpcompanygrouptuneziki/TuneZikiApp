import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const NOINTERNET=document.createElement('img');
NOINTERNET.src=`${ICONSAPI}no-wifi.png`;
//STYLES
NOINTERNET.style.position='relative';
NOINTERNET.style.width='25px';
NOINTERNET.style.height='25px';
NOINTERNET.style.background='transparent';
NOINTERNET.style.marginTop='auto';
NOINTERNET.style.marginBottom='auto';
NOINTERNET.style.marginLeft='auto';
NOINTERNET.style.marginRight='auto';
NOINTERNET.style.display='block';


export{NOINTERNET};
