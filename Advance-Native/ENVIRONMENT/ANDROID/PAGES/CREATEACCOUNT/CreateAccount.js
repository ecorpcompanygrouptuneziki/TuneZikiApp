import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDCREATEACCOUNTPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const APPNAME=ADVANCE.LOGINAPPNAME
    const DISPLAY=ADVANCE.DISPLAYDATA;
    const USERNAME=ADVANCE.CREATEACCOUNTUSERNAMEINPUT;
    const EMAILINPUT=ADVANCE.CREATEEMAILINPUT;
    const PASSWORDINPUT=ADVANCE.LOGINPASSWORDINPUT;
    const DATE=ADVANCE.CREATEINPUTDATE;
    const LOCATION=ADVANCE.CREATELOCATIONINPUT;
    const TELEPHONE=ADVANCE.CREATEPHONENUMBER;
    const CREATELOGINBUTTON=ADVANCE.CREATELOGINBUTTON;
    const CREATEACCOUNTBUTTON=ADVANCE.CREATEACCOUNTBUTTTON;

    //STYLE SECTION
    STYLED(APPNAME,'color','teal');

    CLEAR(DIV);
    
    ADD(DIV,APPNAME);

    DISPLAY(APPNAME,`Tune Ziki`);

    ADD(DIV,USERNAME);

    ADD(DIV,EMAILINPUT);

    ADD(DIV,PASSWORDINPUT);

    ADD(DIV,DATE);

    ADD(DIV,LOCATION);

    ADD(DIV,TELEPHONE);

    ADD(DIV,CREATEACCOUNTBUTTON);

    ADD(DIV,CREATELOGINBUTTON);

    //FUNCTIONS SECTIONS

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        alert('clicked');

    })

    CREATELOGINBUTTON.addEventListener('click',()=>{

        ANDROIDLOGINPAGE(DIV,ADVANCE);

    })



}

export{ANDROIDCREATEACCOUNTPAGE}