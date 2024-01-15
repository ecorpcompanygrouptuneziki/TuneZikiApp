import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;

const MOVIESICON=document.createElement('img');
//SOURCE 
MOVIESICON.src=ICONSAPI+'movies.png';
//STYLES
MOVIESICON.style.position='relative';
MOVIESICON.style.width='25px';
MOVIESICON.style.height='25px';
MOVIESICON.style.padding='0.5rem';
MOVIESICON.style.marginTop='auto';
MOVIESICON.style.marginBottom='auto';
MOVIESICON.style.marginLeft='auto';
MOVIESICON.style.marginRight='auto';

export{MOVIESICON};