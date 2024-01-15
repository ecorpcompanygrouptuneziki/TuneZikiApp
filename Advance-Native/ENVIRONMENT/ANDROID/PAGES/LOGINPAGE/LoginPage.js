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
    const CREATEACCOUNTBUTTON=ADVANCE.LOGINCREATEACCOUNTBUTTON;

    //STYLE SECTION
    STYLED(APPNAME,'color','teal');

    CLEAR(DIV);
    
    ADD(DIV,APPNAME);

    DISPLAY(APPNAME,`Tune Ziki`);

    ADD(DIV,EMAILINPUT);

    ADD(DIV,PASSWORDINPUT);

    ADD(DIV,LOGINBUTTON);

    ADD(DIV,CREATEACCOUNTBUTTON);



    


}

export{ANDROIDLOGINPAGE}