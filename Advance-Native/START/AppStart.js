import { ANDROIDAUTOLOGIN } from "../ENVIRONMENT/ANDROID/PAGES/AUTOLOGIN/AutoLoginUser.js";

const APPSTART=(DIV,ADVANCE)=>{

 
if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDAUTOLOGIN(DIV,ADVANCE);

} else {
    
    alert('Not Android')

}
    

    
    
    
}

export{APPSTART}