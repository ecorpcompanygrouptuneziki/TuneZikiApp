import { ANDROIDCATERGORIESPAGE } from "../CATERGORIESPAGE/CatergroiesPage.js";
import { ANDROIDLOVEDMUSICPAGE } from "../LOVEDMUSICPAGE/LovedMusicPage.js";
import { ANDROIDMUSICIANPAGE } from "../MUSICIANPAGE/MusicianPage.js";
import { ANDROIDMUSICPAGE } from "../MUSICPAGE/MusicPage.js";
import { ANDROIDSETTINGSPAGE } from "../SETTINGSPAGE/SettingsPage.js";

const ANDROIDHOMEPAGE=(DIV,ADVANCE)=>{

    const TEALICONS=ADVANCE.TEALICONS;

    ADVANCE.DISPLAYDATA(DIV,`

        <div class='Header'>

        <h1 class='AppName'>Tune Ziki</h1>

        <img  class='MiddleIcon' src='${TEALICONS}bell.png'/>

        <img class='TopRight' src='${TEALICONS}user.png'/>
        
        </div>

        <div class='Footer'>

        <img id='CatergoriesIcon' src='${TEALICONS}grid.png'/>

        <img  id='playmusic' src='${TEALICONS}playmusic.png'/>

        <img  id='heartfull' src='${TEALICONS}heartfull.png'/>

        <img id='Musician' src='${TEALICONS}user-music.png'/>

        <img id='Settings' src='${TEALICONS}settings.png'/>
        
        </div>

    `);

    const CATERGORIESICON=document.querySelector('#CatergoriesIcon');

    CATERGORIESICON.addEventListener('click',()=>{
        
        ANDROIDCATERGORIESPAGE(DIV,ADVANCE);

    })

    const PLAYMUSICICON=document.querySelector('#playmusic');

    PLAYMUSICICON.addEventListener('click',()=>{
        
        ANDROIDMUSICPAGE(DIV,ADVANCE);

    })

    const HEARTFULLICON=document.querySelector('#heartfull');

    HEARTFULLICON.addEventListener('click',()=>{
        
        ANDROIDLOVEDMUSICPAGE(DIV,ADVANCE);

    })

    const MUSICIAN=document.querySelector('#Musician');

    MUSICIAN.addEventListener('click',()=>{
        
        ANDROIDMUSICIANPAGE(DIV,ADVANCE);

    })

    const SETTINGSICON=document.querySelector('#Settings');

    SETTINGSICON.addEventListener('click',()=>{
        
        ANDROIDSETTINGSPAGE(DIV,ADVANCE);

    })


}

export{ANDROIDHOMEPAGE}