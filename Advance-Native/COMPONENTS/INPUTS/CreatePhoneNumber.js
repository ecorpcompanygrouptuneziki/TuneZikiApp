const CREATEPHONENUMBER=document.createElement('input');
CREATEPHONENUMBER.placeholder='Enter TelePhone';
CREATEPHONENUMBER.type='tel';
//STYLES
CREATEPHONENUMBER.style.position='relative';
CREATEPHONENUMBER.style.width='95%';
CREATEPHONENUMBER.style.height='32px';
CREATEPHONENUMBER.style.minHeight='16px';
CREATEPHONENUMBER.style.maxHeight='32px';
CREATEPHONENUMBER.style.background='#00000080';
CREATEPHONENUMBER.style.marginTop='1rem';
CREATEPHONENUMBER.style.marginBottom='1rem';
CREATEPHONENUMBER.style.left='2%';
CREATEPHONENUMBER.style.textAlign='left';
CREATEPHONENUMBER.style.display='block';
CREATEPHONENUMBER.style.borderRadius='5px';
CREATEPHONENUMBER.style.color='white';
CREATEPHONENUMBER.style.border='none';
CREATEPHONENUMBER.minLength = '10'; 
CREATEPHONENUMBER.style.outline = 'none';

export{CREATEPHONENUMBER};