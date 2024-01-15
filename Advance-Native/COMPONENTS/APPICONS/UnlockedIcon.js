import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const UNLOCKEDICON=document.createElement('img');
UNLOCKEDICON.src=`${ICONSAPI}unlocked.png`;
//STYLES
UNLOCKEDICON.style.position='relative';
UNLOCKEDICON.style.width='25px';
UNLOCKEDICON.style.height='25px';
UNLOCKEDICON.style.background='transparent';
UNLOCKEDICON.style.marginTop='auto';
UNLOCKEDICON.style.marginBottom='auto';
UNLOCKEDICON.style.marginLeft='auto';
UNLOCKEDICON.style.marginRight='auto';
UNLOCKEDICON.style.display='block';


export{UNLOCKEDICON};
