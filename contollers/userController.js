const User = require('./../models/userModels')



exports.allUsers = async (req, res) => {
    const users = await User.find();
    res
        .status(200)
        .json({
            status: 'success',
            data:{
                users
            }
        })
}

exports.addUsers = async (req, res) => {
    console.log(req.body)
    try{
        const newUser = await User.create(req.body);
            res
                .status(201)
                .json({
                    status: 'success',
                    data:{
                        user: newUser
                    }
                });
    }catch(err){
        res
            .status(500)
            .json({status: 'Fail', Message: err})
    }
}

exports.userId = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
exports.updateUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}
exports.deleteUsers = (req, res) => {
    res
        .status(500)
        .json({status: 'Fail', Message: 'Route Not Yet Defined!'})
}