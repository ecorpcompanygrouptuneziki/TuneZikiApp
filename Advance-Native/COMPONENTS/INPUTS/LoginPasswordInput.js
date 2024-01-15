const LOGINPASSWORDINPUT=document.createElement('input');
LOGINPASSWORDINPUT.placeholder='Enter Password';
LOGINPASSWORDINPUT.type='password';
//STYLES
LOGINPASSWORDINPUT.style.position='relative';
LOGINPASSWORDINPUT.style.width='95%';
LOGINPASSWORDINPUT.style.height='32px';
LOGINPASSWORDINPUT.style.minHeight='16px';
LOGINPASSWORDINPUT.style.maxHeight='32px';
LOGINPASSWORDINPUT.style.background='#00000080';
LOGINPASSWORDINPUT.style.marginTop='1rem';
LOGINPASSWORDINPUT.style.marginBottom='1rem';
LOGINPASSWORDINPUT.style.left='2%';
LOGINPASSWORDINPUT.style.textAlign='left';
LOGINPASSWORDINPUT.style.display='block';
LOGINPASSWORDINPUT.style.borderRadius='5px';
LOGINPASSWORDINPUT.style.color='white';
LOGINPASSWORDINPUT.style.border='none';
LOGINPASSWORDINPUT.style.userSelect = 'none'; 
LOGINPASSWORDINPUT.minLength = '6'; 
LOGINPASSWORDINPUT.style.outline = 'none';



export{LOGINPASSWORDINPUT};