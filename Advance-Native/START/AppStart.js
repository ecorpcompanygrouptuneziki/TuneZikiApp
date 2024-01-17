import { ANDROIDLOGINPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/LOGINPAGE/LoginPage.js"

const APPSTART=(DIV,ADVANCE)=>{

if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDLOGINPAGE(DIV,ADVANCE);
  
} else {
    
    console.log('Web')

}
    
 
}

export{APPSTART}
