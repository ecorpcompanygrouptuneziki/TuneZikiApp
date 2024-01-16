import { ANDROIDLOGINAPI } from "../../APIS/AndroidApi.js";
import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDAUTOLOGIN=(DIV,ADVANCE)=>{

    const GET=ADVANCE.GETPACKAGE;

    const GETSTORED=ADVANCE.RETRIEVEINDEXEDDB;

    const AUTOLOGIN=ADVANCE.AUTOLOGINUSER;

    GETSTORED('User','MyDetails','01')

    .then((data) => {

        GET(ANDROIDLOGINAPI,'cors')

        .then((result) => {
    
            AUTOLOGIN(DIV,result,'UserEmail',data.Details.UserEmail,NAV,FALLBACK,'Something Went Wrong');
            
        }).catch((err) => {
            
            ANDROIDLOGINPAGE(DIV,ADVANCE)
    
        });

    }).catch((err) => {

        ANDROIDLOGINPAGE(DIV,ADVANCE);

    });

    const NAV=(userData)=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    }

    const FALLBACK=()=>{

        ANDROIDLOGINPAGE(DIV,ADVANCE);

    }

    

}

export{ANDROIDAUTOLOGIN}