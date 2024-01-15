import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const REVIEWICON=document.createElement('img');
REVIEWICON.src=`${ICONSAPI}review.png`;
//STYLES
REVIEWICON.style.position='relative';
REVIEWICON.style.width='25px';
REVIEWICON.style.height='25px';
REVIEWICON.style.background='transparent';
REVIEWICON.style.marginTop='auto';
REVIEWICON.style.marginBottom='auto';
REVIEWICON.style.marginLeft='auto';
REVIEWICON.style.marginRight='auto';
REVIEWICON.style.display='block';


export{REVIEWICON};
