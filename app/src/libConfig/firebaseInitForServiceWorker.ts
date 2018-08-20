import { environment } from '../environments/environment.prod';
import * as firebase from 'firebase';

export function firebaseInitForServiceWorker() {
    firebase.initializeApp({
        'apiKey': environment.properties.firebaseAuthKey,
        'authDomain': environment.properties.authDomain,
        'databaseURL': environment.properties.databaseURL,
        'storageBucket': environment.properties.storageBucket,
        'messagingSenderId': environment.properties.messagingSenderId
    });

    const open = indexedDB.open('neutrinos_firebase_db', 1);

    open.onupgradeneeded = function () {
        const db = open.result;
        const store = db.createObjectStore('neutrinos_firebase_db_store');
        console.log(store);
    };

    open.onsuccess = function () {
        // Start a new transaction
        const db = open.result;
        const tx = db.transaction('neutrinos_firebase_db_store', 'readwrite');
        const store = tx.objectStore('neutrinos_firebase_db_store');
        // store.put(environment.properties);
        store.add(environment.properties.firebaseSenderId, 'firebaseSenderId')
        if (environment.properties.messagingSenderId) {
            store.add(environment.properties.messagingSenderId, 'messagingSenderId');
        }
        tx.oncomplete = function () {
            db.close();
        };
    }
}
