import { ADVANCE } from "../API/AdvanceApi.js";
import { APPSTART } from "../START/AppStart.js";

const CONNECTION=(DIV)=>{

    ADVANCE.APPNAME('Advance');

    ADVANCE.APPLOGO('../ASSETS/IMAGES/logo.png');

    ADVANCE.OPERATINGSYSTEM();

    ADVANCE.ZOOMEFFECT();

    APPSTART(DIV,ADVANCE);
    
}

export{CONNECTION};