import { ANDROIDHOMEPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/HOMEPAGE/HomePage.js";
import { ANDROIDLOGINPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/LOGINPAGE/LoginPage.js"

const APPSTART=(DIV,ADVANCE)=>{

if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDHOMEPAGE(DIV,ADVANCE);
  
} else {
    
    console.log('Web')

}
    
 
}

export{APPSTART}
