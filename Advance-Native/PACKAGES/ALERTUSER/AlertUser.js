const ALERTUSER=(ELEMENT,TITLE,MESSAGE,CLOSURE)=>{

const ALERTBOX=document.createElement('div');
//STYLES
ALERTBOX.style.position='absolute';
ALERTBOX.style.width='95%';
ALERTBOX.style.height='30%';
ALERTBOX.style.top='35%';
ALERTBOX.style.bottom='0';
ALERTBOX.style.borderRadius='10px';
ALERTBOX.style.left='2%';
ALERTBOX.style.display='block';
ALERTBOX.style.overflow='hidden';
ALERTBOX.style.background='#00000080';

//ENTER TITLE OF ALERT
const HEADEROFALERT=document.createElement('h1');
HEADEROFALERT.innerHTML=TITLE;
//STYLES
HEADEROFALERT.style.position='relative';
HEADEROFALERT.style.width='auto';
HEADEROFALERT.style.height='auto';
HEADEROFALERT.style.top='0.1rem';
HEADEROFALERT.style.fontSize='25px';
HEADEROFALERT.style.color='white';
HEADEROFALERT.style.textAlign='center';
HEADEROFALERT.style.display='block';
HEADEROFALERT.style.overflow='hidden';

//ENTER TITLE OF ALERT
const MESSAGEOFALERT=document.createElement('p');
MESSAGEOFALERT.innerHTML=MESSAGE;
//STYLES
MESSAGEOFALERT.style.position='relative';
MESSAGEOFALERT.style.width='100%';
MESSAGEOFALERT.style.height='auto';
MESSAGEOFALERT.style.fontSize='15px';
MESSAGEOFALERT.style.padding='1rem';
MESSAGEOFALERT.style.color='white';
MESSAGEOFALERT.style.textAlign='left';
MESSAGEOFALERT.style.display='block';
MESSAGEOFALERT.style.overflow='hidden';

const LOGINACCOUNTBUTTON=document.createElement('button');
LOGINACCOUNTBUTTON.innerHTML=CLOSURE;
//STYLES
LOGINACCOUNTBUTTON.style.position='relative';
LOGINACCOUNTBUTTON.style.width='95%';
LOGINACCOUNTBUTTON.style.height='50px';
LOGINACCOUNTBUTTON.style.minHeight='16px';
LOGINACCOUNTBUTTON.style.maxHeight='50px';
LOGINACCOUNTBUTTON.style.background='#00000080';
LOGINACCOUNTBUTTON.style.marginTop='1rem';
LOGINACCOUNTBUTTON.style.marginBottom='1rem';
LOGINACCOUNTBUTTON.style.left='2%';
LOGINACCOUNTBUTTON.style.textAlign='center';
LOGINACCOUNTBUTTON.style.display='block';
LOGINACCOUNTBUTTON.style.borderRadius='5px';
LOGINACCOUNTBUTTON.style.color='white';
LOGINACCOUNTBUTTON.style.border='none';

LOGINACCOUNTBUTTON.addEventListener('click',()=>{

    ALERTBOX.style.display='none';

})



ALERTBOX.append(HEADEROFALERT);

ALERTBOX.append(MESSAGEOFALERT);

ALERTBOX.append(LOGINACCOUNTBUTTON);

ELEMENT.append(ALERTBOX);



}



export{ALERTUSER};