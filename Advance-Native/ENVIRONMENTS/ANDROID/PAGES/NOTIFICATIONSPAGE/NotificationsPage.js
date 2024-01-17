import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDNOTIFICATIONSPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    ADVANCE.DISPLAYDATA(DIV,`

    <div class='Header'>

    <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

    <img id='Right' class='TopRight' src='${TEALICONS}bell.png'/>

    </div>
    
    `);

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);
        
    })

}

export{ANDROIDNOTIFICATIONSPAGE}