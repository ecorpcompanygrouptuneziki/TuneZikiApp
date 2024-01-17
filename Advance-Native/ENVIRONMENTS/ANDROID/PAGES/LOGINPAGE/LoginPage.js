import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";

const ANDROIDLOGINPAGE=(DIV,ADVANCE)=>{

    ADVANCE.DISPLAYDATA(DIV,`

    <br><br>
    
    <h1>Tune Ziki</h1>

    <input type="email"  id="" placeholder="Enter Email">

    <input type="password"  id="" placeholder="Enter Password">

    <br>
    
    <button>LogIn</button>

    <button id='CreateAccount'>Create Account</button>
    
    `);

    const CREATEACCOUNT=document.querySelector('#CreateAccount');

    CREATEACCOUNT.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADVANCE);

    })



}

export{ANDROIDLOGINPAGE}