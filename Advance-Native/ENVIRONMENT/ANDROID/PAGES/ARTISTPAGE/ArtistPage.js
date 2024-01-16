import { ANDROIDHOMEPAGE } from "../HOMEPAGE/HomePage.js";

const ANDROIDARTISTPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const HEADER=ADVANCE.HEADER;
    const HORIZONTALSCROLLINGDIV=ADVANCE.HORIZONTALSCROLLINGDIV;
    const BACKICON=ADVANCE.BACKICON;
    const GRIDICON=ADVANCE.USERICON;
    const SEARCHINPUT=ADVANCE.SEARCHINPUT;
     
    
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
        


    //LAYOUT ZONE
    ADD(DIV,HORIZONTALSCROLLINGDIV);

    ADD(DIV,HEADER);

    ADD(HEADER,BACKICON);

    ADD(HEADER,SEARCHINPUT);

    ADD(HEADER,GRIDICON);

        

        

    

    //FUNCTIONS
    BACKICON.addEventListener('click',()=>{

        ANDROIDHOMEPAGE(DIV,ADVANCE)

    })


}

export{ANDROIDARTISTPAGE}