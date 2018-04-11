//OBJECT DESTRUCTURING

// const person = {
//     name: 'Misael',
//     age: 28,
//     location: {
//         city: 'Hermosillo',
//         temp: 41
//     }
// };
//
// const { name:firstname = 'Anonymous', age } = person;
// console.log(`${firstname} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if(city && temperature){
//     //console.log(`It's ${person.location.temp} in ${person.location.city}`);
//     console.log(`It's ${temperature} in ${city}`);
// }

//CHALLENGE:
// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
//
// const { name: publisherName = 'Self-Publised'} = book.publisher;
// console.log(publisherName);

//ARRAY DESTRUCTURING

// const address = ['9 Cda de los Condes', 'Hermosillo', 'Sonora', '83287'];
// const [, city, state = 'New York'] = address;
// console.log(`You're in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
