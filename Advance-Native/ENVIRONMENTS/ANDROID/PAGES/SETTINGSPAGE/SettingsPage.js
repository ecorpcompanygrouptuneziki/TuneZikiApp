import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDSETTINGSPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    const WHITEICONS=ADVANCE.WHITEICONS;

    ADVANCE.DISPLAYDATA(DIV,`

    <div class='Header'>

    <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

    <img id='Right' class='TopRight' src='${TEALICONS}settings.png'/>

    </div>

    <div class='DisplayDiv'>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>Contact Us</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}phone.png'/>

        </button>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>App Help</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}help.png'/>

        </button>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>Privacy Policy</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}privacypolicy.png'/>

        </button>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>More Apps</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}app.png'/>
        
        </button>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>Updates</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}info.png'/>

        </button>

        <button class='ButtonIcon'>

            <h1 class='ButtonName'>Delete My Account</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}delete.png'/>
    
        </button>

        <button id='LogOut' class='ButtonIcon'>

            <h1 class='ButtonName'>Log Out</h1>

            <img id='Right' class='TopRight' src='${WHITEICONS}logout.png'/>
        
        </button>

        
    
    </div>
    
    `);

    const BACKICON=document.querySelector('#backIcon');

    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);
        
    })

    const LOGOUT=document.querySelector('#LogOut');

    LOGOUT.addEventListener('click',()=>{

        ADVANCE.REMOVESTORAGE('local','User');

        ANDROIDLOGINPAGE(DIV,ADVANCE);
        
    })


}

export{ANDROIDSETTINGSPAGE}