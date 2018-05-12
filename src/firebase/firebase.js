import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCf6ih7gQRI2bBD_rHjAiUoZQQ2tfkFU5k",
    authDomain: "expensify-6862f.firebaseapp.com",
    databaseURL: "https://expensify-6862f.firebaseio.com",
    projectId: "expensify-6862f",
    storageBucket: "expensify-6862f.appspot.com",
    messagingSenderId: "505545250484"
};

firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Misael Burboa'
});
