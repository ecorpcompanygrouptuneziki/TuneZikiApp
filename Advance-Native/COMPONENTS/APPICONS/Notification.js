import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const NOTIFICATIONICON=document.createElement('img');
//SOURCE 
NOTIFICATIONICON.src=ICONSAPI+'notifications.png';
//STYLES
NOTIFICATIONICON.style.position='relative';
NOTIFICATIONICON.style.width='25px';
NOTIFICATIONICON.style.height='25px';
NOTIFICATIONICON.style.padding='0.5rem';
NOTIFICATIONICON.style.marginTop='auto';
NOTIFICATIONICON.style.marginBottom='auto';
NOTIFICATIONICON.style.marginLeft='auto';
NOTIFICATIONICON.style.marginRight='auto';

export{NOTIFICATIONICON};