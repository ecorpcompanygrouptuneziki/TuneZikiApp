import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const APPICON=document.createElement('img');
APPICON.src=`${ICONSAPI}app.png`;
//STYLES
APPICON.style.position='relative';
APPICON.style.width='25px';
APPICON.style.height='25px';
APPICON.style.background='transparent';
APPICON.style.marginTop='auto';
APPICON.style.marginBottom='auto';
APPICON.style.marginLeft='auto';
APPICON.style.marginRight='auto';
APPICON.style.display='block';


export{APPICON};
