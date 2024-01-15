import { ADVANCE } from "../../API/AdvanceApi.js";

const ICONSAPI=ADVANCE.ICONSAPI;;

const LIKEICON=document.createElement('img');
LIKEICON.src=`${ICONSAPI}heart.png`;
//STYLES
LIKEICON.style.position='relative';
LIKEICON.style.width='25px';
LIKEICON.style.height='25px';
LIKEICON.style.background='transparent';
LIKEICON.style.marginTop='auto';
LIKEICON.style.marginBottom='auto';
LIKEICON.style.marginLeft='auto';
LIKEICON.style.marginRight='auto';
LIKEICON.style.display='block';


export{LIKEICON};
