import { ANDROIDARTISTPAGE } from "../ARTISTPAGE/ArtistPage.js";
import { ANDROIDCATERGORY } from "../CATERGORYPAGE/CatergoryPage.js";
import { ANDROIDLKEDPAGE } from "../LIKEDPAGE/LikedPage.js";
import { ANDROIDMUSICPAGES } from "../MUSICPAGE/MusicPage.js";
import { ANDROIDNOTIFICATIONSPAGE } from "../NOTIFICATIONSPAGE/NotificationsPage.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";
import { ANDROIDUSERPROFILEPAGE } from "../USERPROFILEPAGE/UserProfilePage.js";

const ANDROIDHOMEPAGE=(DIV,ADVANCE)=>{

    //DECLARATION
    const STYLED=ADVANCE.STYLED;
    const CLEAR=ADVANCE.CLEAR;
    const ADD=ADVANCE.ADDPACKAGE;
    const APPNAME=ADVANCE.LOGINAPPNAME;
    const DISPLAY=ADVANCE.DISPLAYDATA;
    const HEADER=ADVANCE.HEADER;
    const FOOTER=ADVANCE.FOOTER;
    const HOMEICON=ADVANCE.HOMEICON;
    const GRIDICON=ADVANCE.GRIDICON;
    const MUSICICON=ADVANCE.MUSICICON;
    const HEARTICON=ADVANCE.HEARTICON;
    const USERICON=ADVANCE.USERICON;
    const SETTINGSICON=ADVANCE.SETTINGSICON;
    const NOTIFICATIONICON=ADVANCE.NOTIFICATIONICON;
    const PROFILEICON=ADVANCE.PROFILEICON;
    const HORIZONTALSCROLLINGDIV=ADVANCE.HORIZONTALSCROLLINGDIV;

    CLEAR(DIV);

    CLEAR(HEADER);

    CLEAR(FOOTER);

    DISPLAY(APPNAME,'Tune Ziki');

    //STYLES ZONE
    STYLED(DIV,'background','#010114');
    STYLED(HOMEICON,'marginLeft','0.2rem');
    STYLED(HOMEICON,'marginRight','1rem');
    STYLED(NOTIFICATIONICON,'marginLeft','auto');
    STYLED(NOTIFICATIONICON,'marginRight','1rem');
    STYLED(PROFILEICON,'marginLeft','1rem');
    STYLED(PROFILEICON,'marginRight','1rem');
    STYLED(APPNAME,'marginLeft','1rem');
    STYLED(APPNAME,'marginRight','1rem');
    STYLED(APPNAME,'marginTop','auto');
    STYLED(APPNAME,'marginBottom','auto');
    STYLED(APPNAME,'fontSize','20px');
    STYLED(APPNAME,'color','teal');
    STYLED(HORIZONTALSCROLLINGDIV,'top','0');
    STYLED(HORIZONTALSCROLLINGDIV,'left','0');
    STYLED(HORIZONTALSCROLLINGDIV,'bottom','0');
    STYLED(HEADER,'left','0');
    STYLED(FOOTER,'left','0');
    
    //LAYOUT ZONE
    ADD(DIV,HORIZONTALSCROLLINGDIV);

    ADD(DIV,HEADER);

    ADD(HEADER,APPNAME);

    ADD(HEADER,NOTIFICATIONICON);

    ADD(HEADER,PROFILEICON);

    ADD(DIV,FOOTER);

    ADD(FOOTER,GRIDICON);

    ADD(FOOTER,MUSICICON);

    ADD(FOOTER,HEARTICON);

    ADD(FOOTER,USERICON);

    ADD(FOOTER,SETTINGSICON);

    //FUNCTIONS

    GRIDICON.addEventListener('click',()=>{

        ANDROIDCATERGORY(DIV,ADVANCE);        

    })
    
    MUSICICON.addEventListener('click',()=>{

        ANDROIDMUSICPAGES(DIV,ADVANCE);        

    })

    HEARTICON.addEventListener('click',()=>{

        ANDROIDLKEDPAGE(DIV,ADVANCE);        

    })

    
    USERICON.addEventListener('click',()=>{

        ANDROIDARTISTPAGE(DIV,ADVANCE);        

    })

    NOTIFICATIONICON.addEventListener('click',()=>{

        ANDROIDNOTIFICATIONSPAGE(DIV,ADVANCE);        

    })

    PROFILEICON.addEventListener('click',()=>{

        ANDROIDUSERPROFILEPAGE(DIV,ADVANCE);        

    })

    SETTINGSICON.addEventListener('click',()=>{

        ANDROIDSETTINGSPAGE(DIV,ADVANCE);        

    })



    


}

export{ANDROIDHOMEPAGE}