import { ANDROIDMUSICFEEDAPI } from "../../APIS/AndroidApis.js"

const ANDROIDMUSICFEEDFETCH=(DIV,ADVANCE)=>{

    const IMAGESAPI=ADVANCE.IMAGESAPI;

    const HOMEDIV=document.querySelector('.StoriesDiv');

    const CLEAR=ADVANCE.CLEAR;

    const ADD=ADVANCE.ADDPACKAGE;

    CLEAR(HOMEDIV);

    ADVANCE.GETPACKAGE(ANDROIDMUSICFEEDAPI)

    .then((result) => {
        
        result.forEach(element => {

            //RELEASE HOLDER DIV
            const RELEASEHOLDERDIV=document.createElement('div');
            RELEASEHOLDERDIV.classList.add('RELEASEHOLDERDIV');

            ADD(HOMEDIV,RELEASEHOLDERDIV);

            //RELEASEIMAGE
            const RELEASEIMAGE=document.createElement('img');
            RELEASEIMAGE.classList.add('RELEASEIMAGE');
            RELEASEIMAGE.src=IMAGESAPI+'logo.png';

            ADD(RELEASEHOLDERDIV,RELEASEIMAGE);

            //DETAILS DIV HOLDER
            const RELEASEDETAILSHOLDERDIV=document.createElement('div');
            RELEASEDETAILSHOLDERDIV.classList.add('RELEASEDETAILSHOLDERDIV');

            ADD(RELEASEHOLDERDIV,RELEASEDETAILSHOLDERDIV);

            //RELEASESRTISTS NAME
            const RELEASEARTISTNAME=document.createElement('h1');
            RELEASEARTISTNAME.classList.add('RELEASEARTISTNAME');
            ADVANCE.DISPLAYDATA(RELEASEARTISTNAME,element.UserName);

            ADD(RELEASEDETAILSHOLDERDIV,RELEASEARTISTNAME);
            
            
            console.log(element)

        });

    }).catch((err) => {
        console.log(err)
    });



}

export{ANDROIDMUSICFEEDFETCH}