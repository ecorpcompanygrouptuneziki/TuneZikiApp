import { ADVANCE } from "../API/AdvanceApi.js";
import { APPSTART } from "../START/AppStart.js";

const CONNECTION=(DIV)=>{

    const APPNAME=ADVANCE.APPNAME;

    const LOGO=ADVANCE.APPLOGO;

    LOGO('../ASSETS/IMAGES/logo.png');

    APPNAME.innerHTML='Tune Ziki';

    ADVANCE.OPERATINGSYSTEM();

    ADVANCE.ZOOMEFFECT();

    APPSTART(DIV,ADVANCE);

}

export{CONNECTION};
