const RETRIEVEINDEXEDDB = (DATABASE, DATABASETABLE, key) => {
    return new Promise((resolve, reject) => {
        const dbName = DATABASE;

        const openRequest = indexedDB.open(dbName);

        openRequest.onsuccess = (event) => {
            const db = event.target.result;

            const transaction = db.transaction(DATABASETABLE, 'readonly');
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
