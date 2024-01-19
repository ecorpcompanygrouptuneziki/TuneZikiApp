import { ANDROIDCONNECTION } from "../ENVIRONMENTS/ANDROID/CONNECTION/Connection.js"

const APPSTART=(DIV,ADVANCE)=>{

    if (localStorage.getItem('Device')==='Android') {
        
        ANDROIDCONNECTION(DIV,ADVANCE);
    
    } else {
        
        console.log('Web')

    }
    
 
}

export{APPSTART}
