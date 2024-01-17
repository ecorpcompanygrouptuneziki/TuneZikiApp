localStorage.setItem('Device','Android');

const BODY=document.querySelector('body');

const DIV=document.querySelector('div');

setTimeout(() => {

    import("../SOURCE/index.js").then((module) => {
        
        const { CONNECTION } = module;

        CONNECTION(DIV);

    });

}, 2000);