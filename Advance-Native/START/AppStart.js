import { ANDROIDHOMEPAGE } from "../ENVIRONMENT/ANDROID/PAGES/HOMEPAGE/HomePage.js"

const APPSTART=(DIV,ADVANCE)=>{

 
if (localStorage.getItem('Device')==='Android') {
    
    ANDROIDHOMEPAGE(DIV,ADVANCE);

} else {
    
    alert('Not Android')

}
    

    
    
    
}

export{APPSTART}