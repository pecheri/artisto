import Firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDYOC4vSoKt8A2qLzIqw1A_BYTrqLAbFLk',
    authDomain: 'artisto-rki.firebaseapp.com',
    projectId: 'artisto-rki',
    storageBucket: 'artisto-rki.appspot.com',
    messagingSenderId: '960656414320',
    appId: '1:960656414320:web:76f34788ac2ca4954d46b5',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
