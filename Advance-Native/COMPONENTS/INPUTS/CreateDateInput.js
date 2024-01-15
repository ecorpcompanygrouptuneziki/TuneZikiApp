const CREATEINPUTDATE=document.createElement('input');
CREATEINPUTDATE.placeholder='Enter Date Of Birth';
//STYLES
CREATEINPUTDATE.style.position='relative';
CREATEINPUTDATE.style.width='95%';
CREATEINPUTDATE.style.height='32px';
CREATEINPUTDATE.style.minHeight='16px';
CREATEINPUTDATE.style.maxHeight='32px';
CREATEINPUTDATE.style.background='#00000080';
CREATEINPUTDATE.style.marginTop='1rem';
CREATEINPUTDATE.style.marginBottom='1rem';
CREATEINPUTDATE.style.left='2%';
CREATEINPUTDATE.style.textAlign='left';
CREATEINPUTDATE.style.display='block';
CREATEINPUTDATE.style.borderRadius='5px';
CREATEINPUTDATE.style.color='white';
CREATEINPUTDATE.style.border='none';
CREATEINPUTDATE.style.outline = 'none';
//ADD EVENT HANDLER TO CREATE DATE 
CREATEINPUTDATE.addEventListener('click',()=>{

    CREATEINPUTDATE.type='date';

})


export{CREATEINPUTDATE};