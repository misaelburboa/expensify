const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Misael',
        //     age: 29
        // });
        reject('Something went wrong!')
    }, 1500);
});

console.log("before");
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error: ', error);
});

//Alternative Syntax: We can remove the catch and pass the catch function as 2nd argument in the "then" method
// promise.then((data) => {
//     console.log('1', data);
// },(error) => {
//     console.log('error: ', error);
// });
console.log("after");
