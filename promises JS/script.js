// setTimeout(() => {
//     console.log("Timeout1....")
// }, 20000);
// console.log('start')
// setTimeout(() => {console.log('Timeout2...')}, 5000);
// console.log('Intermediate')
// console.log('end')

// function createOrder(x, fn) {
//     console.log(x);
//     setTimeout(() => {
//         fn('vikhyat9690')
//     }, 1000);
// }

// function makePayment(orderID) {
//     console.log(orderID);
// }

// createOrder('soap', makePayment);

// let id = 'userid123';
// const pr = new Promise((resolve, reject) => {
//     //all the logic
//     if(id == 'userid123') {
//         setTimeout(() => {
//             resolve();
//         }, 10000);
//     } else {
//         reject();
//     }
// });

// console.log(pr);

setTimeout(() => {console.log('First timeout...')}, 0);

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('some items are out of stock');
        // console.log('Fulfilled...');
    }, 5000);
})

pr.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})