const fsPromises=require("fs/promises");

const getUser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        Message:'Route is not implemented',
    });
}

const addUser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        Message:'Route is not implemented',
    });
}

const replaceUser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        Message:'Route is not implemented',
    });
}

const deleteUser=(req,res)=>{
    res.status(501);
    res.json({
        status:'fail',
        Message:'Route is not implemented',
    });
}
module.exports=
{
    getUser,
    addUser,
    replaceUser,
    deleteUser

}