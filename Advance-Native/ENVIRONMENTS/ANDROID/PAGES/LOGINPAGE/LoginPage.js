import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLOGINPAGE=(DIV,ADVANCE)=>{

    ADVANCE.DISPLAYDATA(DIV,`

    <br><br>
    
    <h1>Tune Ziki</h1>

    <input type="email"  id="" placeholder="Enter Email">

    <input type="password"  id="" placeholder="Enter Password">

    <br>
    
    <button id='LoginUser'>LogIn</button>

    <button id='CreateAccount'>Create Account</button>
    
    `);

    const CREATEACCOUNT=document.querySelector('#CreateAccount');

    CREATEACCOUNT.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADVANCE);

    })

    const LOGINUSER=document.querySelector('#LoginUser');

    LOGINUSER.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    })



}

export{ANDROIDLOGINPAGE}