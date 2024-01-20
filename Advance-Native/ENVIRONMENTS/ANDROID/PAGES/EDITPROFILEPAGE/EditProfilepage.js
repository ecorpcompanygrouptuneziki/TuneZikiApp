import { ANDROIDUSERACCOUNTPAGE } from "../USERACCOUNTPAGE/UserAccountPage.js";

const ANDROIDEDITPROFILEPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    const WHITEICONS=ADVANCE.WHITEICONS;

    ADVANCE.DISPLAYDATA(DIV,`

    <div class='Header'>

    <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

    <img id='Right' class='TopRight' src='${TEALICONS}cloud-upload-alt.png'/>

    </div>
    `
    );

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDUSERACCOUNTPAGE(DIV,ADVANCE);
        
    })

}

export{ANDROIDEDITPROFILEPAGE}