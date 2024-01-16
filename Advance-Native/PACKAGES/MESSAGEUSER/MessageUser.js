const MESSAGEUSER=(ELEMENT,MESSAGE,CLOSURE)=>{

    const ALERTBOX=document.createElement('div');
    //STYLES
    ALERTBOX.style.position='absolute';
    ALERTBOX.style.width='95%';
    ALERTBOX.style.height='10%';
    ALERTBOX.style.bottom='0';
    ALERTBOX.style.marginBottom='1rem';
    ALERTBOX.style.borderRadius='10px';
    ALERTBOX.style.left='2%';
    ALERTBOX.style.display='inlineflex';
    ALERTBOX.style.overflow='hidden';
    ALERTBOX.style.background='#00000080';
    
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
    MESSAGEOFALERT.style.textAlign='center';
    MESSAGEOFALERT.style.display='block';
    MESSAGEOFALERT.style.overflow='hidden';
    
    ALERTBOX.append(MESSAGEOFALERT);
        
    ELEMENT.append(ALERTBOX);
    
    setTimeout(() => {
        
        ALERTBOX.style.display='none';

    }, CLOSURE);
    
    
    }
    
    
    
    export{MESSAGEUSER};