import { IMAGESAPI } from "../../../../API/ImagesApi.js";
import { ANDROIDMUSICFEEDAPI } from "../../APIS/AndroidApi.js";

const ANDROIDMUSICFEED=(DIV,ADVANCE,STORIESDIV)=>{

    const CLEAR=ADVANCE.CLEAR;
    
    CLEAR(STORIESDIV);

    const GET=ADVANCE.GETPACKAGE;

    const ADD=ADVANCE.ADDPACKAGE;

    GET(ANDROIDMUSICFEEDAPI,'cors')

    .then((data) => {

        ADVANCE.SHUFFLEDATA(data);
        
        data.forEach(element => {

            //DIV TO HOLD THE FEED
            const STORIESDIVHOLDER=document.createElement('div');
            //STYLES
            STORIESDIVHOLDER.style.position='relative';
            STORIESDIVHOLDER.style.width='50%';
            STORIESDIVHOLDER.style.height='90%';
            STORIESDIVHOLDER.style.marginTop='auto';
            STORIESDIVHOLDER.style.marginBottom='auto';
            STORIESDIVHOLDER.style.marginLeft='1rem';
            STORIESDIVHOLDER.style.marginRight='1rem';
            STORIESDIVHOLDER.style.display='block';
            STORIESDIVHOLDER.style.overflowX='auto';
            STORIESDIVHOLDER.style.overflowY='hidden';
            STORIESDIVHOLDER.style.background='#00000080';
            STORIESDIVHOLDER.style.flexShrink='0';
            STORIESDIVHOLDER.style.borderRadius='10px';

            ADD(STORIESDIV,STORIESDIVHOLDER);

            const APPICON=document.createElement('img');
            APPICON.src=`${IMAGESAPI}tune ziki logo 512.jpg`;
            //STYLES
            APPICON.style.position='absolute';
            APPICON.style.width='100%';
            APPICON.style.height='100%';
            APPICON.style.background='transparent';
            APPICON.style.marginTop='auto';
            APPICON.style.marginBottom='auto';
            APPICON.style.marginLeft='auto';
            APPICON.style.marginRight='auto';
            APPICON.style.display='block';

            ADD(STORIESDIVHOLDER,APPICON);

            //APPNAMES
            const LOGINMESSAGE=document.createElement('h1');
            LOGINMESSAGE.innerHTML=element.UserName;
            //STYLES
            LOGINMESSAGE.style.position='absolute';
            LOGINMESSAGE.style.textAlign='right';
            LOGINMESSAGE.style.fontSize='16px';
            LOGINMESSAGE.style.fontStyle='italic';
            LOGINMESSAGE.style.right='1rem';

            ADD(STORIESDIVHOLDER,LOGINMESSAGE);

            console.log(element)
            
        });

    }).catch((err) => {

      console.log(err)  
      
    });



}

export{ANDROIDMUSICFEED}