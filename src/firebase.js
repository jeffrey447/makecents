import app, { analytics } from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/database';

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
        this.db = app.database();
    }

    login = async (email, password, onSuccess, onError) => {
        await this.auth.signInWithEmailAndPassword(email, password)
            .then(onSuccess => onSuccess)
            .catch(onError => console.log(onError.message));
    }

    logout = () => {
        this.auth.signOut();
    }

    register = async (name, email, password, onSuccess, onError) => {
        await this.auth.createUserWithEmailAndPassword(email, password)
            .then((data) => {
                this.db.ref(`/users/${data.user.uid}`)
                    .set({
                        name: name,
                        email: email,
                        transactions: [
                            /*
                            {
                                organization
                                date
                                amount
                                donation
                            }
                            */
                        ]
                        // can create more fields later
                    }).then(() => {
                        console.log("Created new user!");
                        return data;
                    }).catch(onError => console.log(onError.message));
            })
            .catch(onError => console.log(onError.message));

    }

    loggedIn = () => {
        return (this.auth.currentUser != null);
    }
}

export default new Firebase();