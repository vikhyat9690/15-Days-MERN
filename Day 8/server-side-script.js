const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;
// console.log(dataObj);

const cardTemplate = `
    <div class = "productCard">
        <h3>$Title$</h3>
        <p>$Desc</p>
        <img src="IMAGE" alt="product-image"/>
        <a href="PRODUCT_LINK"> More Info</a>
        <hr>
    </div>
    `;

let result = [];
for(let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;
    temp = temp.replace('$Title$', dataObj[i].title)
    .replace('IMAGE',dataObj[i].images[0])
    .replace('PRODUCT_LINK',`?id=${i}`)
    .replace('$Desc', dataObj[i].description);
    result.push(temp);
}

result = result.join(' ');

const server = http.createServer((req, res) => {
    const route = req.url;
    console.log('\n',route,'\n');

    // const path = url.parse(route);
    const path = url.parse(req.url, true);
    const pathname = path.id;
    console.log('\n',query,'\n');
    // const q = path.query;
    if(pathname == '/home') {
        res.end(result);
    } else if(pathname == '/product') {
        const id = query.id;
        const items = dataObj[id];
        res.end(`
        <div>
            <h4>${items.title}</h4>
            <p>${items.rating}</p>
        </div>`);
    } else {
        res.end('Error 404 Not found');
    }

    // res.end(result);
});

server.listen(1400)