const User = require('./../model/user.model');


exports.getAll = async (req,res) => {
    try{
        let userList = await User.findAll();
        res.status(200).json(userList);
    }catch(e){
        res.status(400).json({error: "Impossible de récupérer les utilsateurs"})
    }
}

exports.getById = async (req,res) => {
    try{
        let user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: "Impossible de récupérer les utilsateurs"})
    }
}

exports.signin = async (req, res, next) => {
    try {
        let user = await User.create({
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: "Ce compte existe déjà!"})
    }
}

exports.update = async (req, res, next) => {
    try {
        let user = await User.update({
            password: req.body.password
        },{
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(user);
    }catch(e){
        res.status(400).json({error: "Ce compte existe déjà!"})
    }
}

exports.delete = async (req,res) => {
    try{
        let user = await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(user);
    }catch(e){
        res.status(400).json({error: "Impossible de récupérer les utilsateurs"})
    }
}

