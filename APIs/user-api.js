//create mini express app
const exp = require('express')
const userApi = exp.Router();
const expressErrorHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { request } = require('http');

//add body parsing middleware
userApi.use(exp.json())




//missing code

//import MongoCLient
const mc = require("mongodb").MongoClient;



//connection string
const databaseUrl = "mongodb://FranchiseFrizz:franchise123@cluster0-shard-00-00.9zb7h.mongodb.net:27017,cluster0-shard-00-01.9zb7h.mongodb.net:27017,cluster0-shard-00-02.9zb7h.mongodb.net:27017/FranchiseFrizz?ssl=true&replicaSet=atlas-8ld744-shard-0&authSource=admin&retryWrites=true&w=majority"

//const databaseUrl="mongodb://<username>:<password>@cluster0-shard-00-00.rjvoz.mongodb.net:27017,cluster0-shard-00-01.rjvoz.mongodb.net:27017,cluster0-shard-00-02.rjvoz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"

let userCollectionObj;

//connect to DB
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("FranchiseFrizz")
        //create usercollection object

        userCollectionObj = databaseObj.collection("FranchiseCollection")
        console.log("connected to database")

    }
})
//missing code endssss





//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers", expressErrorHandler(async (req, res) => {

    let userCollectionObj = req.app.get("userCollectionObj")

    let userList = await userCollectionObj.find().toArray()
    res.send({ message: userList })

}))





//get user by username
userApi.get("/getuser/:username", expressErrorHandler(async (req, res, next) => {

    let userCollectionObj = req.app.get("userCollectionObj")

    //get username from url
    let un = req.params.username;
    //search
    let userObj = await userCollectionObj.findOne({ username: un })

    if (userObj === null) {
        res.send({ message: "User not existed" })
    }
    else {
        res.send({ message: userObj })
    }
}))




















//http://localhost:3000/user/createuser
//create user
userApi.post("/createuser", expressErrorHandler(async (req, res, next) => {
    //get user obj
    let userCollectionObj = req.app.get("userCollectionObj")
    let newUser = req.body;
    //search for existing user
    let user = await userCollectionObj.findOne({ username: newUser.username })
    //if user existed
    if (user !== null) {
        res.send({ message: "User already existed" });
    }
    else {
        //hash password
        let hashedPassword = await bcryptjs.hash(newUser.password, 7)
        //replace password
        newUser.password = hashedPassword;
        //insert
        await userCollectionObj.insertOne(newUser)
        res.send({ message: "User created" })
    }
}))




//http://localhost:3000/user/updateuser/<username>

userApi.put("/updateuser/:username", expressErrorHandler(async (req, res, next) => {

    //get modified user
    let userCollectionObj = req.app.get("userCollectionObj")
    let modifiedUser = req.body;
    //update
    await userCollectionObj.updateOne({ username: modifiedUser.username }, { $set: { ...modifiedUser } })
    //send res
    res.send({ message: "User modified" })

}))




//delete user
userApi.delete("/deleteuser/:username", expressErrorHandler(async (req, res) => {

    //get username from url
    let un = req.params.username;
    //find the user
    let user = await userCollectionObj.findOne({ username: un })

    if (user === null) {
        res.send({ message: "User not existed" })
    }
    else {
        await userCollectionObj.deleteOne({ username: un })
        res.send({ message: "user removed" })
    }
}))




//user login
userApi.post('/login', expressErrorHandler(async (req, res) => {

    //get user credetials
    let userCollectionObj = req.app.get("userCollectionObj")
    let credentials = req.body;
    //search user by username
    let user = await userCollectionObj.findOne({ username: credentials.username })
    //if user not found
    if (user === null) {
        res.send({ message: "invalid username" })
    }
    else if (credentials.username === "admin"){
        res.send({ message : "admin" })
    }
    else {
        //compare the password
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if not matched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        else {
            //create a token
            let signedToken = jwt.sign({ username: credentials.username }, 'abcdef', { expiresIn: 120 })
            //send token to client
            res.send({ message: "login success", token: signedToken, username: credentials.username, userObj: user })
        }

    }

}))


//export
module.exports = userApi;