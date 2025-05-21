const { default: mongoose } = require("mongoose");
const mangoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{type: String, require: true},
    email:{type: String, require:true, unique: true},
    phone:{type: String, require:true, unique: true},
    password:{type: String, require:true},
    created_at:{type: Date, defualt:Date.now}

});

const User = mangoose.Model("User",userSchema);
module.exports=User;