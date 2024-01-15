import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNT/CreateAccount.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLOGINPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const APPNAME=ADVANCE.LOGINAPPNAME
    const DISPLAY=ADVANCE.DISPLAYDATA;
    const EMAILINPUT=ADVANCE.LOGINEMAILINPUT;
    const PASSWORDINPUT=ADVANCE.LOGINPASSWORDINPUT;
    const LOGINBUTTON=ADVANCE.LOGINACCOUNTBUTTON;
    const LOGINCREATEACCOUNTBUTTON=ADVANCE.LOGINCREATEACCOUNTBUTTON;


    CLEAR(DIV);
    
    ADD(DIV,APPNAME);

    DISPLAY(APPNAME,`Tune Ziki`);

    ADD(DIV,EMAILINPUT);

    ADD(DIV,PASSWORDINPUT);

    ADD(DIV,LOGINBUTTON);

    ADD(DIV,LOGINCREATEACCOUNTBUTTON);

    //FUNCTIONS SECTIONS

    LOGINBUTTON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    })

    LOGINCREATEACCOUNTBUTTON.addEventListener('click',()=>{

        ANDROIDCREATEACCOUNTPAGE(DIV,ADVANCE);

    })


}

export{ANDROIDLOGINPAGE}