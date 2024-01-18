import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDUSERACCOUNTPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    const WHITEICONS=ADVANCE.WHITEICONS;

    ADVANCE.DISPLAYDATA(DIV,`

    <div class='Header'>

    <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

    <img id='Right' class='TopRight' src='${TEALICONS}user.png'/>

    </div>

    <div class='DisplayDiv'>

    <div class='UserData'>

        <div class='RELEASEIMAGE'></div>
        
        <div class='RELEASEDETAILSHOLDERDIV'></div>
    
    </div>

    <br>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Edit Profile</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}review.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Post</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}post.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Submit Music</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}album.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Wallet</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}secretcode.png'/>

    </button>

    </div>
    
    `);

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);
        
    })

}

export{ANDROIDUSERACCOUNTPAGE}