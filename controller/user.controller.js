const User = require('./../model/user.model');

exports.signin = async () => {
    await User.create({
        email: "avaast@myges.fr",
        password: "123456"
    });
}