import { ANDROIDLOGINPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/LOGINPAGE/LoginPage.js"

const APPSTART=(DIV,ADVANCE)=>{

if (localStorage.getItem('Device')==='Android') {
    
    //ANDROIDLOGINPAGE(DIV,ADVANCE);

    ADVANCE.CAMERA(DIV)

  

} else {
    
    console.log('Web')

}
    
 
}

export{APPSTART}
