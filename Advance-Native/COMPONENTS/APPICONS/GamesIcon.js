import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const GAMESICON=document.createElement('img');
//SOURCE 
GAMESICON.src=ICONSAPI+'games.png';
//STYLES
GAMESICON.style.position='relative';
GAMESICON.style.width='25px';
GAMESICON.style.height='25px';
GAMESICON.style.padding='0.5rem';
GAMESICON.style.position='relative';
GAMESICON.style.marginTop='auto';
GAMESICON.style.marginBottom='auto';
GAMESICON.style.marginLeft='auto';
GAMESICON.style.marginRight='auto';

export{GAMESICON};