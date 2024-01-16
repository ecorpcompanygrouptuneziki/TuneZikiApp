const BODY = document.querySelector('body');
//STYLES
BODY.style.position='fixed';
BODY.style.width='100%';
BODY.style.height='100%';
BODY.style.background='#010114';
BODY.style.overflow='hidden';
BODY.style.padding='0';
BODY.style.margin='0';
BODY.style.color='White';
BODY.style.fontFamily='san-serif';
BODY.style.fontSize='20px';
BODY.style.textDecoration='none';
BODY.style.scrollBehavior='smooth';
//#010114
const DIV = document.querySelector('div');
//STYLES
DIV.style.position='fixed';
DIV.style.width='100%';
DIV.style.height='100%';
DIV.style.background='';
DIV.style.overflow='hidden';

//Change It Basing On the Following (Android,Web,Ios,Windows)
localStorage.setItem('Device','Android');


const SPLASHSCREEN = () => {

    const SPLASHSCREENIMAGE = document.createElement('img');
    SPLASHSCREENIMAGE.src='../ASSETS/IMAGES/logo.png'
    //STYLES
    SPLASHSCREENIMAGE.style.position='absolute';
    SPLASHSCREENIMAGE.style.width='95%';
    SPLASHSCREENIMAGE.style.top='20%';
    SPLASHSCREENIMAGE.style.left='2%';
    SPLASHSCREENIMAGE.style.height='auto';
    SPLASHSCREENIMAGE.style.background='transparent';
    SPLASHSCREENIMAGE.style.overflow='hidden';
    DIV.append(SPLASHSCREENIMAGE);
       
    setTimeout(() => {

        import("../SOURCE/index.js").then((module) => {
            
            const { CONNECTION } = module;

            CONNECTION(DIV);

        });

    }, 2000);
    
};

SPLASHSCREEN();