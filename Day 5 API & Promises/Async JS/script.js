// console.log('GEC Start');

// function printPretty(elem) {
//     console.log('prettyStart');
//     let ans = 2 + 3;
//     console.log(ans);
//     console.log('prettyEnd');
// }

// // setTimeout(printPretty, 10000);
// // console.log('GEC End');

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     printPretty();
// })

// console.log('Start');
// console.log(res);
// res.then(() => console.log('Fetched'));
// console.log('End');

console.log("Start");
let req = fetch("https://dummyjson.com/products/2").then((req) => req.json());
// .then(json => console.log(json))
console.log("End");
console.log(req);
console.log("hello world");

function callApi() {
    fetch("https://newsapi.org/v2/everything?q=tesla@from=2024-03-08&dptyBy=publishedAt&apiKey=0febf593df714aefa406dbed6c6a1a6b")
        .then((res) => {
            console.log(res);
            res.json().then((data) => {
                renderUI(data);
            })
        })
    const res = fetch("https://api.github.com/users/vikhyat9690")
        .then((res) => res.json())
        .then((json) => console.log(json));
}

callApi();

function renderUI(data) {
    //got the artices from the data
    const articles = data.articles;

    //single article from the articles array
    for (let i = 0; i < articles.length; i++) {
        const ar = articles[i];

        //created parent div
        const div = document.createElement("div");
        div.setAttribute("class", "news-card");
        const h3 = document.createElement("h3");
        const root = document.getElementById("root");

        const img = document.createElement("img");
        const p = document.createElement("p");
        img.src = ar.urlToImage;
        p.innerText = ar.description;
        console.log(data);
        console.log(articles);
        root.appendChild(div);
        root.appendChild(h3);
        root.appendChild(p);
        root.appendChild(img);
        h3.innerText = ar.title;
        // div.innerText = ar.title;
    }
}

//github key = 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