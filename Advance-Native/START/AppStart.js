import { ANDROIDHOMEPAGE } from "../ENVIRONMENT/ANDROID/PAGES/HOMEPAGE/HomePage.js"
import { ANDROIDLOGINPAGE } from "../ENVIRONMENT/ANDROID/PAGES/LOGINPAGE/LoginPage.js";

const APPSTART=(DIV,ADVANCE)=>{

 
if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDLOGINPAGE(DIV,ADVANCE);

} else {
    
    alert('Not Android')

}
    

    
    
    
}

export{APPSTART}