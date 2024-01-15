import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const SETTINGSICON=document.createElement('img');
//SOURCE 
SETTINGSICON.src=ICONSAPI+'setting.png';
//STYLES
SETTINGSICON.style.position='relative';
SETTINGSICON.style.width='25px';
SETTINGSICON.style.height='25px';
SETTINGSICON.style.padding='0.5rem';
SETTINGSICON.style.marginTop='auto';
SETTINGSICON.style.marginBottom='auto';
SETTINGSICON.style.marginLeft='auto';
SETTINGSICON.style.marginRight='auto';

export{SETTINGSICON};