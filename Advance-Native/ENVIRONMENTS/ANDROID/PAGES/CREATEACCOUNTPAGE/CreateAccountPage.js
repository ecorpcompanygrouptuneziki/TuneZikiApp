import { ANDROIDLOGINPAGE } from "../LOGINPAGE/LoginPage.js";

const ANDROIDCREATEACCOUNTPAGE=(DIV,ADVANCE)=>{

    const WHITEICONS=ADVANCE.WHITEICONS;

    const TEALICONS=ADVANCE.TEALICONS;

    const STYLED=ADVANCE.STYLED;

    ADVANCE.DISPLAYDATA(DIV,`

    <br><br>
    
    <h1>Tune Ziki</h1>

    <input type="text"  id="UserName" placeholder="Enter User Name">

    <input type="email"  id="UserEmail" placeholder="Enter Email">

    <input type="password"  id="UserPassword" placeholder="Enter Password">

    <input type="text"  id="UserDate" placeholder="Enter Date OF Birth">

    <button id='Location' class='LocationButton'>

        <h3 id='LocationName' class='ButtonName'>Choose a Location</h3>

        <img id='Right' class='TopRight' src='${WHITEICONS}location.png'/>

    </button>

    <input type="tel"  id="" placeholder="Enter Telephone">
    
    <button id='CreateUserAccount' >Create Account</button>

    <button id='LogInButton'>LogIn</button>

    <div id='Message' class='MessageDiv'></div>

    <div class='LocationDiv'>

        <div class='Header'>

            <img id='backIcon'  class='TopLeft' src='${TEALICONS}backarrow.png'/>

            <input class='SearchInput'  type="search"   id="" placeholder="Enter Your Search">

            <img class='TopRight' src='${WHITEICONS}location.png'/>

        </div>

        <div class='PlaceDisplay'></div>
    
    </div>
    
    `);

    const LOGINBUTTON=document.querySelector('#LogInButton');

    LOGINBUTTON.addEventListener('click',()=>{

        ANDROIDLOGINPAGE(DIV,ADVANCE)

    })

    const CREATEACCOUNTBUTTON=document.querySelector('#CreateUserAccount');

    const USERNAME=document.querySelector('#UserName');

    const EMAIL=document.querySelector('#UserEmail');

    const PASSWORD=document.querySelector('#UserPassword');

    const DATE=document.querySelector('#UserDate');

    const MESSAGE=document.querySelector('#Message');

    DATE.addEventListener('click',()=>{

        DATE.type='date';

    })

    const LOCATION=document.querySelector('#Location');

    const LOCATIONDIV=document.querySelector('.LocationDiv');

    const CLOSE=document.querySelector('#backIcon');

    CLOSE.addEventListener('click',()=>{
        
        STYLED(LOCATIONDIV,'height','0%');

        STYLED(LOCATIONDIV,'display','none');

    })

    LOCATION.addEventListener('click',()=>{

        STYLED(LOCATIONDIV,'display','block');

        STYLED(LOCATIONDIV,'height','100%');

        const LOCATIONDISPLAY=document.querySelector('.PlaceDisplay');

        ADVANCE.DISPLAYDATA(LOCATIONDISPLAY,`

        <img id='CountryLoading'  class='LoadingIcon' src='${TEALICONS}spinner.png'/>
        
        `);

        const LOCATIONHOLDERNAME=document.querySelector('#LocationName');

        ADVANCE.GETPACKAGE(ADVANCE.COUNTRIESAPI)

        .then((result) => {
            
            ADVANCE.CLEAR(LOCATIONDISPLAY);

            result.forEach(element => {
            
                const LOCATONBUTTON=document.createElement('button');
                LOCATONBUTTON.classList.add('LocationButton');

                ADVANCE.DISPLAYDATA(LOCATONBUTTON,`
                
                <h1  id='LocationName' class='ButtonName'>${element.name}</h1>

                <h1 class='ButtonName' id='Code'>${element.phoneCode}</h1>

                `)
    
                ADVANCE.ADDPACKAGE(LOCATIONDISPLAY,LOCATONBUTTON);

                LOCATONBUTTON.addEventListener('click',()=>{

                    STYLED(LOCATIONDIV,'height','0%');

                    STYLED(LOCATIONDIV,'display','none');

                    ADVANCE.DISPLAYDATA(LOCATIONHOLDERNAME,element.name);

                })

                //console.log(element)

            });

         

            

        }).catch((err) => {
            console.log(err)
        });


    })

    CREATEACCOUNTBUTTON.addEventListener('click',()=>{

        if (USERNAME.value) {
            
        } else {
           
            ADVANCE.STYLED(MESSAGE,'display','block');

            ADVANCE.VIBRATE(200);

            ADVANCE.DISPLAYDATA(MESSAGE,`<h3>Fill All Parts</h3>`);

            setTimeout(() => {
                
                ADVANCE.STYLED(MESSAGE,'display','none');

            }, 2000);
            
            
        }

    })



}

export{ANDROIDCREATEACCOUNTPAGE}