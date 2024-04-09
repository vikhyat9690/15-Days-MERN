// const arr2 = [10.22, 12.12, 20.12, 11.23];
// const ans = arr.map((a) => {
    //     // console.log(a);
    //     return a * 2;
    // })
    
    // const ans = arr.map(a => Math.pow(a,2));
    // const ans2 = arr2.map(a => parseInt(a));
    // console.log(ans2);
    // console.log(ans);
    
    // const ans = arr.filter((a) => {
        //     if(a > 20) {
            //         return true;
            //     } else {
                //         return false;
                //     }
                // })
                
                // console.log(ans);
               
               
// const arr = [10, 22, 34];

// const arr = ['Delhi', 'Mumbai', 'Chennai',
//             'Kolkata', 'India', 'Russia', 'USA', 'Iraq'];

// const res = arr.filter((a) => {
//     if(a.includes('i') || a.includes('I')) {
//         return true;
//     } else {
//         return false;
//     }
// })

// console.log(res);


// const country = ['Delhi, India','Mumbai, India','Chennai, India', 'St. Petersberg, Russia','Moscow, Russia', 'Vladivostok, Russia','Bejing, China', 'Wuhan, China', 'Shanghai, China',]

// const ans = country.filter((a) => {a.toLowerCase().includes('india')});

// console.log(ans);

const arr = [2, 4, 8, 10];
const ans = arr.reduce((a) => {
    return a*5;
})

console.log(ans)
