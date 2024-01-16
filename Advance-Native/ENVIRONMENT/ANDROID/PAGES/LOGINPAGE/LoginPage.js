import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNT/CreateAccount.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLOGINPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const APPNAME=ADVANCE.LOGINAPPNAME;
    const DISPLAY=ADVANCE.DISPLAYDATA;
    const EMAILINPUT=ADVANCE.LOGINEMAILINPUT;
    const PASSWORDINPUT=ADVANCE.LOGINPASSWORDINPUT;
    const LOGINBUTTON=ADVANCE.LOGINACCOUNTBUTTON;
    const LOGINCREATEACCOUNTBUTTON=ADVANCE.LOGINCREATEACCOUNTBUTTON;
    const GET=ADVANCE.GETPACKAGE;
    const MESSAGEUSER =ADVANCE.MESSAGEUSER;
    const VIBRATE=ADVANCE.VIBRATE;


    CLEAR(DIV);
    
    ADD(DIV,APPNAME);

    DISPLAY(APPNAME,`Tune Ziki`);

    ADD(DIV,EMAILINPUT);

    ADD(DIV,PASSWORDINPUT);

    ADD(DIV,LOGINBUTTON);

    ADD(DIV,LOGINCREATEACCOUNTBUTTON);

    
  

    //FUNCTIONS SECTIONS

    LOGINBUTTON.addEventListener('click',()=>{

        if (EMAILINPUT.value && PASSWORDINPUT.value) {
            


        } else {

            VIBRATE(200);

            MESSAGEUSER(DIV,'Fill All Parts','2000');  
        }
        

    })

    LOGINCREATEACCOUNTBUTTON.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADVANCE);

    })


}

export{ANDROIDLOGINPAGE}