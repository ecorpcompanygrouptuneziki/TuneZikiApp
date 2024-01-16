import { ANDROIDLOGINAPI } from "../../APIS/AndroidApi.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDAUTOLOGIN=(DIV,ADVANCE)=>{

    const GET=ADVANCE.GETPACKAGE;

    const AUTOLOGIN=ADVANCE.AUTOLOGINUSER;

    const VIBRATE = ADVANCE.VIBRATE;

    GET(ANDROIDLOGINAPI,'cors')

    .then((result) => {

        const USER=localStorage.getItem('User');

        AUTOLOGIN(DIV,result,'UserEmail',USER,NAV,FALLBACK,'Something Went Wrong');
        
    }).catch((err) => {
        
        VIBRATE(200);

        ANDROIDLOGINPAGE(DIV,ADVANCE);

    });

    const NAV=(userData)=>{

        VIBRATE(200);

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    }

    const FALLBACK=()=>{

        VIBRATE(200);

        ANDROIDLOGINPAGE(DIV,ADVANCE);

    }

}

export{ANDROIDAUTOLOGIN}