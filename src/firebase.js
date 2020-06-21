import app, { analytics } from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);

        this.auth = app.auth();
        this.db = app.firestore();
    }

    login = (email, password, onSuccess, onError) => {
        this.auth.signInWithEmailAndPassword(email, password)
            .then(onSuccess)
            .catch(onError => console.log(onError.message));
    }

    logout = () => {
        this.auth.signOut();
    }

    register = (name, email, password, onSuccess, onError) => {
        if (!(name.trim().length > 0)) {
            onError("Must provide your name.");
            return;
        }

        this.auth.createUserWithEmailAndPassword(email, password)
            .then((data) => {
                this.db.collection('users')
                    .doc(data.user.uid)
                    .set({
                        name: name,
                        email: email
                        // can create more fields later
                    }).then(() => {
                        console.log("Created new user!");
                        onSuccess(data);
                    }).catch(onError);
            })
            .catch(onError);

    }

    loggedIn = () => {
        return (this.auth.currentUser != null);
    }
}

export default new Firebase();