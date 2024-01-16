import { ANDROIDLOGINAPI } from "../../APIS/AndroidApi.js";
import { ANDROIDCREATEACCOUNTPAGE } from "../CREATEACCOUNT/CreateAccount.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLOGINPAGE = (DIV, ADVANCE) => {

    // Declaration
    const STYLED = ADVANCE.STYLED;
    const CLEAR = ADVANCE.CLEAR;
    const ADD = ADVANCE.ADDPACKAGE;
    const APPNAME = ADVANCE.LOGINAPPNAME;
    const DISPLAY = ADVANCE.DISPLAYDATA;
    const EMAILINPUT = ADVANCE.LOGINEMAILINPUT;
    const PASSWORDINPUT = ADVANCE.LOGINPASSWORDINPUT;
    const LOGINBUTTON = ADVANCE.LOGINACCOUNTBUTTON;
    const LOGINCREATEACCOUNTBUTTON = ADVANCE.LOGINCREATEACCOUNTBUTTON;
    const GET = ADVANCE.GETPACKAGE;
    const MESSAGEUSER = ADVANCE.MESSAGEUSER;
    const VIBRATE = ADVANCE.VIBRATE;
    const LOADINGICON = ADVANCE.LOADINGICON;
    const CHECKUSERDETAILS = ADVANCE.CHECKUSERDETAILS;
    const STOREUSER=ADVANCE.STOREINDEXEDDB;

    CLEAR(DIV);

    ADD(DIV, APPNAME);

    DISPLAY(APPNAME, `Tune Ziki`);

    ADD(DIV, EMAILINPUT);

    ADD(DIV, PASSWORDINPUT);

    ADD(DIV, LOGINBUTTON);

    ADD(DIV, LOGINCREATEACCOUNTBUTTON);

    // FUNCTIONS SECTION

    LOGINBUTTON.addEventListener('click', () => {

        if (EMAILINPUT.value && PASSWORDINPUT.value) {

            CLEAR(LOGINBUTTON);

            ADD(LOGINBUTTON, LOADINGICON);

            GET(ANDROIDLOGINAPI, 'cors')
            
                .then((result) => {

                    const LOGGINEDINUSER = (userData) => {
                        
                        STOREUSER('User','MyDetails',{id:'01',"Details":userData})

                        ANDROIDHOMEPAGE(DIV,ADVANCE);

                    };

                    CHECKUSERDETAILS(result, DIV, 'UserEmail', EMAILINPUT, 'UserPassword', PASSWORDINPUT,LOGINBUTTON, 'Login', LOGGINEDINUSER);

                })

                .catch((err) => {

                    VIBRATE(200);

                    MESSAGEUSER(DIV, 'Error Occurred. Try Again Later', '2000');

                    CLEAR(LOGINBUTTON);

                    DISPLAY(LOGINBUTTON, 'LogIn');

                });

        } else {

            VIBRATE(200);

            MESSAGEUSER(DIV, 'Fill All Parts', '2000');

        }

    });

    LOGINCREATEACCOUNTBUTTON.addEventListener('click', () => {

        ANDROIDCREATEACCOUNTPAGE(DIV, ADVANCE);

    });

}

export { ANDROIDLOGINPAGE };
