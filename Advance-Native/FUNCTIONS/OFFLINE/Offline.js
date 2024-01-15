const OFFLINE=(PATH,SERVICEWORKER)=>{

    const linkElement = document.createElement('link');

    linkElement.rel = 'manifest';

    linkElement.href = PATH;
    
    document.head.appendChild(linkElement);

    if ('serviceWorker' in navigator) {

        navigator.serviceWorker.register(SERVICEWORKER)

        .then((registration) => {

            console.log('Service Worker registered with scope:', registration.scope);
        
        })

        .catch((error) => {

            console.error('Service Worker registration failed:', error);
        
        });

    }


}

export{OFFLINE}