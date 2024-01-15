import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const CAKEICON=document.createElement('img');
//SOURCE 
CAKEICON.src=ICONSAPI+'cake.png';
//STYLES
CAKEICON.style.position='relative';
CAKEICON.style.width='25px';
CAKEICON.style.height='25px';
CAKEICON.style.padding='0.5rem';
CAKEICON.style.position='relative';
CAKEICON.style.marginTop='auto';
CAKEICON.style.marginBottom='auto';
CAKEICON.style.marginLeft='auto';
CAKEICON.style.marginRight='auto';

export{CAKEICON};