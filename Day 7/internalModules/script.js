// const fs = require('fs');

// console.log('Start');

// const data = fs.readFileSync('./myReadme.txt', {encoding: 'utf-8'});

// console.log(data);
// console.log('End');

// const data = fs.writeFileSync('./logs.txt','10 April 2024: Day 7');

//USING PROMISE MODULE

// const fsPromises = require('fs/promises');
// console.log('start');
// const pr = fsPromises.readFile('./myReadme.txt', {encoding: 'utf-8'});
// console.log(pr)
// pr.then((res) => {
//     console.log(res);
// })
// console.log('end');

//CALLBACK IN FILE SYSTEM
const http = require("http");
const { isUtf8 } = require('buffer');
const fs = require('fs');
 
// fs.readFileSync('./myReadme.txt', {encoding: 'utf8'}, (err, data) => {
//     console.log(data);
// })
const data = fs.readFileSync('./data.json', 'utf8');
const dataObj = JSON.parse(data);
const products = dataObj.products;

// console.log(data);

const htmlTemplate = `
    <!DOCTYPE HTML>
    <html>
        <head>
            <style>
                    * {
                        font-family : poppins;
                    }
            
                    .product-card {
                    max-width: 500px;
                    margin: 20px auto;
                    border: 5px solid red;
                    border-radius: 8px;
                    padding: 16px;
                    background-color: beige;
                }
            </style>
        <body>
        _PRODUCTS_CARDS_
        <img src="https://cdn.dummyjson.com/product-images/30/1.jpg"></img>
        </body>
        </head>
    </html>
    `
const cardTemplate = `
    <div class="product-card">
        <h2>__TITLE__</h2>
        <p>__INFO__</p>
    </div> `

const allCards = products.map((elem) => {
    let newCards = cardTemplate;
    newCards = newCards.replace('__TITLE__', elem.title);
    newCards = newCards.replace('__INFO__', elem.description);
    return newCards;
})

const allCardsString = allCards.join(' ');

    // const card1 = cardTemplate.replace('__TITLE__', products[0].title).replace('__INFO__', products[0].description);
    // const card2 = cardTemplate.replace('__TITLE__', products[1].title).replace('__INFO__', products[1].description);
    // const card3 = cardTemplate.replace('__TITLE__', products[2].title).replace('__INFO__', products[2].description);
    // const allCards = card1 + card2+card3;
    const page = htmlTemplate.replace('_PRODUCTS_CARDS_', allCardsString);
const server = http.createServer((req, res) => {
    console.log('recived');
    console.log(req.url);
    res.writeHead(200,{
        'content-type': 'text/html',
    })
    res.end(page);

})

server.listen(1400, () => {
    console.log("........Server Start........");
})