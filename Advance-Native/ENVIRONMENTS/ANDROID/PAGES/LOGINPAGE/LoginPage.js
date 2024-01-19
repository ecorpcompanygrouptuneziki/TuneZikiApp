import { ANDROIDLOGINAPI } from "../../APIS/AndroidApis.js";
import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNTPAGE/CreateAccountPage.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLOGINPAGE=(DIV,ADVANCE)=>{

    ADVANCE.DISPLAYDATA(DIV,`

    <br><br>
    
    <h1>Tune Ziki</h1>

    <input type="email" id="Email" placeholder="Enter Email">

    <input type="password"  id="Password" placeholder="Enter Password">

    <br>

    <h3 class='ForgotPassword'>Forgot Password</h3>
    
    <button id='LoginUser'>LogIn</button>

    <button id='CreateAccount'>Create Account</button>

    <div id='Message' class='MessageDiv'></div>
    
    `);

    const CREATEACCOUNT=document.querySelector('#CreateAccount');

    CREATEACCOUNT.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADVANCE);

    })

    const LOGINUSER=document.querySelector('#LoginUser');

    const EMAIL=document.querySelector('#Email');

    const PASSWORD=document.querySelector('#Password');

    const MESSAGE=document.querySelector('#Message');


    LOGINUSER.addEventListener('click',()=>{

        if (EMAIL.value && PASSWORD.value) {

            ADVANCE.DISPLAYDATA(LOGINUSER,`
            
            <img class='LoadingIcon' src='${ADVANCE.WHITEICONS}loading.png'/>

            `)

            ADVANCE.GETPACKAGE(ANDROIDLOGINAPI,'cors')

            .then((result) => {
                
                console.log(result)

                const user = result.find(user => user.UserEmail === EMAIL.value && user.UserPassword === PASSWORD.value );

                if (user) {

                    ADVANCE.VIBRATE(200);

                    ADVANCE.ADDSTORAGE('local','User',user.UserEmail);

                    ANDROIDHOMEPAGE(DIV,ADVANCE);
                    
                } else {
                  
                    ADVANCE.STYLED(MESSAGE,'display','block');

                    ADVANCE.VIBRATE(200);

                    ADVANCE.DISPLAYDATA(MESSAGE,`<h3>User Not Found</h3>`);

                    setTimeout(() => {
                        
                        ADVANCE.STYLED(MESSAGE,'display','none');

                        ADVANCE.DISPLAYDATA(LOGINUSER,`LogIn`);

                    }, 2000);
                    
                }

            }).catch((err) => {
                
                ADVANCE.STYLED(MESSAGE,'display','block');

                ADVANCE.VIBRATE(200);

                ADVANCE.DISPLAYDATA(MESSAGE,`<h3>Something Went Wrong</h3>`);

                setTimeout(() => {
                    
                    ADVANCE.STYLED(MESSAGE,'display','none');

                    ADVANCE.DISPLAYDATA(LOGINUSER,`LogIn`);

                }, 2000);

            });
            
        } else {

            ADVANCE.STYLED(MESSAGE,'display','block');

            ADVANCE.VIBRATE(200);

            ADVANCE.DISPLAYDATA(MESSAGE,`<h3>Fill All Parts</h3>`);

            setTimeout(() => {
                
                ADVANCE.STYLED(MESSAGE,'display','none');

            }, 2000);
            

        }

        ADVANCE.GETPACKAGE(ANDROIDLOGINAPI)
        
    })



}

export{ANDROIDLOGINPAGE}