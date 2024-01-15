import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDLKEDPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const HEADER=ADVANCE.HEADER;
    const HORIZONTALSCROLLINGDIV=ADVANCE.HORIZONTALSCROLLINGDIV;
    const BACKICON=ADVANCE.BACKICON;
    const GRIDICON=ADVANCE.HEARTICON;
    const SEARCHINPUT=ADVANCE.SEARCHINPUT;
    const ROUNDFOOTER=ADVANCE.ROUNDFOOTER;
     
    
    CLEAR(DIV);

    CLEAR(HEADER);

        
        
    //STYLES ZONE
    STYLED(BACKICON,'marginLeft','0.2rem');
    STYLED(BACKICON,'marginRight','1rem');
    STYLED(GRIDICON,'marginLeft','auto');
    STYLED(GRIDICON,'marginRight','1rem');
    STYLED(SEARCHINPUT,'marginTop','auto');
    STYLED(SEARCHINPUT,'marginBottom','auto');
    STYLED(SEARCHINPUT,'marginLeft','auto');
    STYLED(SEARCHINPUT,'marginRight','2rem');
    STYLED(SEARCHINPUT,'width','70%');
    STYLED(ROUNDFOOTER,'borderRadius','10px');
        


    //LAYOUT ZONE
    ADD(DIV,HORIZONTALSCROLLINGDIV);

    ADD(DIV,HEADER);

    ADD(HEADER,BACKICON);

    ADD(HEADER,SEARCHINPUT);

    ADD(HEADER,GRIDICON);

    ADD(DIV,ROUNDFOOTER);

    

        

        

    

    //FUNCTIONS
    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE)

    })

}

export{ANDROIDLKEDPAGE}