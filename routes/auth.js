const express = require('express');
const router = express.Router();
const User = required("../models/User");
const bcrypt = require('bcrypt');

router.post("/auth/signup", async (requestAnimationFrame, res) => {  // call back fxn

    try{
        const formData = requestAnimationFrame.body;
        const existingUser = await User.findOne ({email: formData.email});

        if(existingUser){
            return res.status(401).json({message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(formData.password, 10);
        const newData = {...formData, password: hashedPassword};
        const savedData = new User(newData);
        await savedData.save();
        return res.status(201).json({message: "User registered successfully"});

    } catch (err){

        console.log("Error registering user:", err);
        return res.status(501).json({ message: "Internal server error"});


    }
});

module.exports = router;