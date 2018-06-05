import * as firebase from 'firebase';
import moment from 'moment';

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

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {

// //         const expenses = [];
// //         snapshot.forEach(childSnapshot => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// /**With subscription */
// // database.ref('expenses').on('value', snapshot => {
// //         const expenses = [];
// //         snapshot.forEach(childSnapshot => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

// database.ref('expenses').push({
//     description: 'Energy Bill',
//     note: 'Some Note',
//     amount: 800,
//     createdAt: moment().toString()
// });

// // const constOnValueChange = database.ref().on('value', (snapshot) => {
// //     const obj = snapshot.val();
// //     console.log(`${obj.name} is a ${obj.job.title} in ${obj.job.company}`);
// // }, (e) => {
// //     console.log("Error");
// // });

// // database.ref('job/company').set('Internet Brands');
// // constOnValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });


// // setTimeout(() => {
// //     database.ref('age').set(28);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(constOnValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(31);
// // }, 10500);

// // database.ref().set({
// //     name: 'Misael Burboa',
// //     age: 29,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Web Developer',
// //         company: 'Internet Brands'
// //     },
// //     location: {
// //         city: 'Hermosillo',
// //         country: 'Mexico'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((e) => {
// //     console.log('This failed', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Google',
// //     'location/city': 'LA',
// //     'location/country': 'United States'
// // });

// // database.ref('isSingle')
// //     .remove()
// //     .then(() => {
// //         console.log("Remove succeded!");
// //     }).catch((e) => {
// //         console.log("Something failed: " + e.message);
// //     });

// //Alternative method for removing data:
// //database.ref('isSingle').set(null);
