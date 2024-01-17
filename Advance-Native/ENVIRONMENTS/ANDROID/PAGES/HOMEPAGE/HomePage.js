import { ANDROIDCATERGORIESPAGE } from "../CATERGORIESPAGE/CatergroiesPage.js";

const ANDROIDHOMEPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    ADVANCE.DISPLAYDATA(DIV,`

        <div class='Header'>

        <h1 class='AppName'>Tune Ziki</h1>

        <img  class='TopRight' src='${TEALICONS}bell.png'/>

        <img class='TopRight' src='${TEALICONS}user.png'/>
        
        </div>

        <div class='Footer'>

        <img id='CatergoriesIcon' src='${TEALICONS}grid.png'/>

        <img src='${TEALICONS}playmusic.png'/>

        <img src='${TEALICONS}heartfull.png'/>

        <img src='${TEALICONS}user-music.png'/>

        <img src='${TEALICONS}settings.png'/>
        
        </div>

    `);

    const CATERGORIESICON=document.querySelector('#CatergoriesIcon');

    CATERGORIESICON.addEventListener('click',()=>{
        
        ANDROIDCATERGORIESPAGE(DIV,ADVANCE);

    })


}

export{ANDROIDHOMEPAGE}