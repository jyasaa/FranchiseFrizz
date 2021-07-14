//create express app
const exp = require("express")
const app = exp();
const path = require("path")
const expressErrorHandler = require("express-async-handler")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { request } = require('http');

app.use(exp.json())
//connect angular app with express server
app.use(exp.static(path.join(__dirname, './dist/franchise/')))

//import APIS
const userApi = require("./APIS/user-api")
const productApi = require("./APIs/products-api")

//execute specific api based on path
app.use("/user", userApi)
app.use("/product",productApi)

//import MongoCLient
const mc = require("mongodb").MongoClient;



//connection string
const databaseUrl = "mongodb://FranchiseFrizz:franchise123@cluster0-shard-00-00.9zb7h.mongodb.net:27017,cluster0-shard-00-01.9zb7h.mongodb.net:27017,cluster0-shard-00-02.9zb7h.mongodb.net:27017/FranchiseFrizz?ssl=true&replicaSet=atlas-8ld744-shard-0&authSource=admin&retryWrites=true&w=majority"

//const databaseUrl="mongodb://<username>:<password>@cluster0-shard-00-00.rjvoz.mongodb.net:27017,cluster0-shard-00-01.rjvoz.mongodb.net:27017,cluster0-shard-00-02.rjvoz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"


//connect to DB
mc.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {

    if (err) {
        console.log("err in db connection", err);
    }
    else {
        //get database object
        let databaseObj = client.db("FranchiseFrizz")
        //create usercollection object

        let productCollectionObj = databaseObj.collection("ProductCollection")

        app.set("productCollectionObj",productCollectionObj)

        let userCollectionObj = databaseObj.collection("FranchiseCollection")

        app.set("userCollectionObj",userCollectionObj)
        console.log("connected to database")


    }
})

//invalid path
app.use((req, res, next) => {

    res.send({ message: `path ${req.url} is invalid` })
})

//error handling middleware
app.use((err, req, res, next) => {
    res.send({ message: `error is ${err.message}` })
})


//assign port
const port = 3000;
app.listen(port, () => console.log(`server on ${port}...`))