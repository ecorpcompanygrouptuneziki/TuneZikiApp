import { ADVANCE } from "../CONNECTION/Connection.js";
import { APPSTART } from "../START/AppStart.js";

const CONNECTION=(DIV)=>{

    ADVANCE.APPNAME('Tune Ziki');

    ADVANCE.APPLOGO('../ASSETS/IMAGES/logo.png');

    ADVANCE.OPERATINGSYSTEM();

    ADVANCE.ZOOMEFFECT();

    APPSTART(DIV,ADVANCE);
    
}

export{CONNECTION};