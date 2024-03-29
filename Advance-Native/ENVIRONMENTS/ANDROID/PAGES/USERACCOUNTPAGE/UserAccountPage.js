import { ANDROIDEDITPROFILEPAGE } from "../EDITPROFILEPAGE/EditProfilepage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDPOSTPAGE } from "../POSTPAGE/PostPage.js";

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

    <button id='EditButton' class='ButtonIcon'>

        <h1 class='ButtonName'>Edit Profile</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}review.png'/>

    </button>

    <button id='PostButton' class='ButtonIcon'>

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

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Business Tools</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}createdon.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Account Data</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}info.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Community</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}chat.png'/>

    </button>

    <button class='ButtonIcon'>

        <h1 class='ButtonName'>Library</h1>

        <img id='Right' class='TopRight' src='${WHITEICONS}library.png'/>

    </button>

    </div>
    
    `);

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);
        
    })

    const EDITBUTTON=document.querySelector('#EditButton');

    EDITBUTTON.addEventListener('click',()=>{

        ANDROIDEDITPROFILEPAGE(DIV,ADVANCE);

    })

    const POSTBUTTON=document.querySelector('#PostButton');

    POSTBUTTON.addEventListener('click',()=>{

        ANDROIDPOSTPAGE(DIV,ADVANCE);

    })
}

export{ANDROIDUSERACCOUNTPAGE}