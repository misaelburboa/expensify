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

const database = firebase.database();

database.ref().set({
    name: 'Misael Burboa',
    age: 29,
    isSingle: false,
    location: {
        city: 'Hermosillo',
        country: 'Mexico'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed', e);
});

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log("Remove succeded!");
//     }).catch((e) => {
//         console.log("Something failed: " + e.message);
//     });

//Alternative method for removing data:
//database.ref('isSingle').set(null);
