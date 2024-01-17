import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDAUTOLOGINPAGE=(DIV,ADVANCE)=>{

    if (localStorage.getItem('User')) {

        ANDROIDHOMEPAGE(DIV,ADVANCE);

    } else {
        
        ANDROIDLOGINPAGE(DIV,ADVANCE);

    }

}

export{ANDROIDAUTOLOGINPAGE}