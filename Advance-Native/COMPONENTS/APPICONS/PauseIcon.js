import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const PAUSEICON=document.createElement('img');
//SOURCE 
PAUSEICON.src=ICONSAPI+'pause.png';
//STYLES
PAUSEICON.style.position='relative';
PAUSEICON.style.width='25px';
PAUSEICON.style.height='25px';
PAUSEICON.style.padding='0.5rem';
PAUSEICON.style.marginTop='auto';
PAUSEICON.style.marginBottom='auto';
PAUSEICON.style.marginLeft='auto';
PAUSEICON.style.marginRight='auto';

export{PAUSEICON};