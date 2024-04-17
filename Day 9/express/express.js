const express = require("express");
// const fs = require("fs");
const fsPromises = require("fs/promises");
const app = express();

app.use(express.json());

app.get('/api/recipe',async(req, res) => {
    const data = await fsPromises.readFile('./data-cpy.json', 'utf-8');
    const arr = JSON.parse(data).recipes;
    res.json({
        status: 'success',
        results: arr.length,
        data: {
            recipes: arr,
        }
    });
});


app.post('/api/recipe', async(req, res) => {
    const data = req.body;
    // data.id = 121;
    // console.log(data);

    const db = await fsPromises.readFile("./data-cpy.json", "utf-8");
    const arr = JSON.parse(db);
    const len = arr.length;
    const newRecipe = data;
    if(len === 0) {
        newRecipe.id = 1;
        // console.log(db);
        arr.push(newRecipe);
        // console.log(arr);
        // fsPromises.writeFile("./data-cpy.json", JSON.stringify(arr));
    }
    else {
        // const newRecipe = data;
        newRecipe.id = (arr[len - 1].id)+1;
        arr.push(newRecipe);
        
    }
    fsPromises.writeFile("./data-cpy.json", JSON.stringify(arr));
    res.json({
        status: 'success',
        results: 1,
        data: {
            newRecipe: newRecipe,
        }
    })
});

app.put('api/recipe/:id', async (req, res) => {
    const arr = JSON.parse(await fsPromises.readFile("./data-cpy.json", "utf-8"));
    res.send("work in progress...");
    const reqId = parseInt(req.params.id);
    const data = req.body;
    const newArr = arr.map((elem) => {
        if(elem.id == reqId) return data;
        else return elem;
    });
    res.json({
        status: "success",
        result: 1,
        data: {
            newProduct: data,
        }
    })
});

// app.delete('/api/recipe/:id', async (req, res) => {
//     const reqId = parseInt(req.params.id);
//     const arr = JSON.parse(await fsPromises.readFile("./data-cpy.json", "utf-8"));
//     const newArr = 
// })
app.listen(1400);