import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDCREATEACCOUNTPAGE=(DIV,ADVANCE)=>{

    ADVANCE.DISPLAYDATA(DIV,`

    <br><br>
    
    <h1>Tune Ziki</h1>

    <input type="text"  id="" placeholder="Enter User Name">

    <input type="email"  id="" placeholder="Enter Email">

    <input type="password"  id="" placeholder="Enter Password">

    <input type="text"  id="" placeholder="Enter Date OF Birth">

    <input type="text"  id="" placeholder="Enter Country">

    <input type="tel"  id="" placeholder="Enter Telephone">
    
    <button >Create Account</button>

    <button id='LogInButton'>LogIn</button>
    
    `);

    const LOGINBUTTON=document.querySelector('#LogInButton');

    LOGINBUTTON.addEventListener('click',()=>{

        ANDROIDLOGINPAGE(DIV,ADVANCE)

    })



}

export{ANDROIDCREATEACCOUNTPAGE}