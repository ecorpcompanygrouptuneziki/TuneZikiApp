import { ANDROIDAUTOLOGINPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/AUTOLOGINPAGE/AutoLoginPage.js";

const APPSTART=(DIV,ADVANCE)=>{

if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDAUTOLOGINPAGE(DIV,ADVANCE);
  
} else {
    
    console.log('Web')

}
    
 
}

export{APPSTART}
