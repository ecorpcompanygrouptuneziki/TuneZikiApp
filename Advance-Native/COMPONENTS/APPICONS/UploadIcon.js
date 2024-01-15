import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const UPLOADICON=document.createElement('img');
//SOURCE 
UPLOADICON.src=ICONSAPI+'upload.png';
//STYLES
UPLOADICON.style.position='relative';
UPLOADICON.style.width='25px';
UPLOADICON.style.height='25px';
UPLOADICON.style.padding='0.5rem';
UPLOADICON.style.marginTop='auto';
UPLOADICON.style.marginBottom='auto';
UPLOADICON.style.marginLeft='auto';
UPLOADICON.style.marginRight='auto';


export{UPLOADICON};