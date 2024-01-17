import { ANDROIDLOGINPAGE } from "../ENVIRONMENTS/ANDROID/PAGES/LOGINPAGE/LoginPage.js"

const APPSTART=(DIV,ADVANCE)=>{

if (localStorage.getItem('Device')==='Android') {
    
    ADVANCE.NOTIFICATIONS('Are they Working')

    ANDROIDLOGINPAGE(DIV,ADVANCE)

} else {
    
    console.log('Web')

}
    
 
}

export{APPSTART}