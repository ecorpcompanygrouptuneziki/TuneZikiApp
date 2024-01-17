import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDAUTOLOGINPAGE=(DIV,ADVANCE)=>{

    if (localStorage.getItem('User')) {

        ADVANCE.VIBRATE(200);

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    } else {

        ADVANCE.VIBRATE(200);
        
        ANDROIDLOGINPAGE(DIV,ADVANCE);

    }

}

export{ANDROIDAUTOLOGINPAGE}