import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDCATERGORIESPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    ADVANCE.DISPLAYDATA(DIV,`

    <div class='Header'>

    <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

    <input class='SearchInput'  type="search"   id="" placeholder="Enter Your Search">

    <img class='TopRight' src='${TEALICONS}grid.png'/>

    </div>
    
    `);

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);
        
    })

}

export{ANDROIDCATERGORIESPAGE}