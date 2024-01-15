import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PHONEICON=document.createElement('img');
PHONEICON.src=`${ICONSAPI}phone.png`;
//STYLES
PHONEICON.style.position='relative';
PHONEICON.style.width='25px';
PHONEICON.style.height='25px';
PHONEICON.style.background='transparent';
PHONEICON.style.marginTop='auto';
PHONEICON.style.marginBottom='auto';
PHONEICON.style.marginLeft='auto';
PHONEICON.style.marginRight='auto';
PHONEICON.style.display='block';


export{PHONEICON};
