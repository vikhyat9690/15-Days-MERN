const getAllRecipes = async (req, res)=>{
    const data = await fsPromises.readFile('./data10.json', 'utf-8');
    const arr = JSON.parse(data);
    res.status(200);
    res.json({
        status: 'success',
        result: arr.length,
        data: {
            recipe: arr
        }
    })
}

const addRecipe = async(req, res)=>{
    
}

module.exports = {
    getAllRecipes,
    
}