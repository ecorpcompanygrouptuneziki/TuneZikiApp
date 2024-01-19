const POSTPACKAGE = (URL, POSTDATA, MODE) => {

    return fetch(URL, {

        method: 'POST',

        mode: MODE,

        body: JSON.stringify(POSTDATA),
        
    })
    .then((response) => {

        if (!response.ok) {

            throw new Error('Network response was not ok');
        }

        // Check if the response content type is JSON
            
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {

            return response.json();

        } else {

                // If not JSON, return the response text
            return response.text();

        }

        })

        .catch((error) => {

            console.error('There has been a problem with your fetch operation:', error);
            
            throw error; // Re-throw the error to handle it where you call POSTPACKAGE
        
        });
 
};

export { POSTPACKAGE };