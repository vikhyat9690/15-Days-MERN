// var figlet = require("figlet");
// figlet("Sherrr!!", (err, data) => {
//     console.log(data);
// });

// async function getApi() {
//     console.log('api calling....');
//     const pr = await fetch("https://api.github.com/users/deepak3440") ;
//     console.log('making json');
//     const data = await pr.json();
//     // console.log(data);
//     console.log("::fetched data::");
// }
// getApi();

console.log('start');

async function callAPI() {
  const pr = new Promise((res, rej) => {
    console.log('promise started');
    setTimeout(() => {
      console.log('timeout 1');
    }, 10000);
  })
  console.log('promise completed');
}

callAPI();