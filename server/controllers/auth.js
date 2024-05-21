const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const {createError} =require("../utils/error")

module.exports.register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save().then(()=>{console.log("user made")});
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User not found!"));

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect)
            return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT,
            {
                expiresIn:"2h"
            }
        );
        console.log(token);
           
      //  user.token=token;

        const { password, ...otherDetails } = user._doc;
        
        res.status(200).json({details:{...otherDetails}, token})
       /* res
            .cookie("jwt", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ details: { ...otherDetails }, token});*/

    } catch (err) {
        next(err);
    }
};