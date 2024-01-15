import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PRICVACYPOLICYICON=document.createElement('img');
PRICVACYPOLICYICON.src=`${ICONSAPI}privacypolicy.png`;
//STYLES
PRICVACYPOLICYICON.style.position='relative';
PRICVACYPOLICYICON.style.width='25px';
PRICVACYPOLICYICON.style.height='25px';
PRICVACYPOLICYICON.style.background='transparent';
PRICVACYPOLICYICON.style.marginTop='auto';
PRICVACYPOLICYICON.style.marginBottom='auto';
PRICVACYPOLICYICON.style.marginLeft='auto';
PRICVACYPOLICYICON.style.marginRight='auto';
PRICVACYPOLICYICON.style.display='block';


export{PRICVACYPOLICYICON};
