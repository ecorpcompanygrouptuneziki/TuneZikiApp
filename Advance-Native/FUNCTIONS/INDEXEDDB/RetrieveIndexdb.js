const RETRIEVEINDEXEDDB = (DATABASE, DATABASETABLE, key) => {
    return new Promise((resolve, reject) => {
        const dbName = DATABASE;

        const openRequest = indexedDB.open(dbName, 1);

        openRequest.onupgradeneeded = (event) => {
            const db = event.target.result;

            // Create object store if it doesn't exist
            if (!db.objectStoreNames.contains(DATABASETABLE)) {
                const objectStore = db.createObjectStore(DATABASETABLE, { keyPath: 'id', autoIncrement: true });

                // Put demo data into the object store
                const demoData = [
                    { data: 'Demo 1' },
                    { data: 'Demo 2' },
                    // Add more demo data as needed
                ];

                demoData.forEach((item) => {
                    objectStore.add(item);
                });
            }
        };

        openRequest.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction([DATABASETABLE], 'readonly');

            const objectStore = transaction.objectStore(DATABASETABLE);

            const getRequest = objectStore.get(key);

            getRequest.onsuccess = (event) => {
                const result = event.target.result;
                resolve(result);
            };

            getRequest.onerror = (event) => {
                reject(event.target.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };
        };

        openRequest.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

export { RETRIEVEINDEXEDDB };
