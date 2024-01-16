import { MESSAGEUSER} from "../../CONNECTION/Connection.js";

const AUTOLOGINUSER = (DIV,DATA,ELEMENTONE, ELEMENTONEINPUT,ACTION,ACTIONONE,MESSAGE) => {

    const MyData = DATA.find(user => user[ELEMENTONE] === ELEMENTONEINPUT);

    if (MyData) {

        ACTION(MyData);

        return MyData; // Return the user data

    } else {
        
        ACTIONONE();

        MESSAGEUSER(DIV,MESSAGE,'2000');
        
    }

}

export { AUTOLOGINUSER };
