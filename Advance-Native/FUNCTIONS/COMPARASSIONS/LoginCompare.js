import { CLEAR, DISPLAYDATA, MESSAGEUSER, VIBRATE } from "../../CONNECTION/Connection.js";

const CHECKUSERDETAILS = (DATA, DIV, ELEMENTONE, ELEMENTONEINPUT, ELEMENTTWO, ELEMENTTWOINPUT, COMPONENT, MESSAGE, ACTION) => {

    const MyData = DATA.find(user => user[ELEMENTONE] === ELEMENTONEINPUT.value && user[ELEMENTTWO] === ELEMENTTWOINPUT.value);

    if (MyData) {
        // Call ACTION function if it's a function and pass MyData as an argument
        ACTION(MyData);
        return MyData; // Return the user data
    } else {
        VIBRATE(200);
        MESSAGEUSER(DIV, 'User Not Found', '2000');
        CLEAR(COMPONENT);
        DISPLAYDATA(COMPONENT, MESSAGE);
        return null; // Return null when user is not found
    }

}

export { CHECKUSERDETAILS };
