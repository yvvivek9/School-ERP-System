const express = require("express");
const mongodb = require("mongodb").MongoClient;
const dburl = "mongodb://localhost:27017/"
const bodyParser = require("body-parser");
const alert = require("alert");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("profile-images"));

app.get("/", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Bangalore_City");
        dbase2.collection("Companies").find({}).toArray(function(err, dbase3){
            if(err) throw err;
            res.render("project", {data: dbase3});
        });
    });
});

app.get("/showCompany:name", function(req,res){
    var company = req.params.name;
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Bangalore_City");
        dbase2.collection("Companies").findOne({Name: company}, function(err,dbase3){
            if(err) throw err;
            console.log(dbase3);
            alert("Check console for inserted data");
            res.redirect("/");
        })
    })
})

app.post("/", function(req,res){
    var redirect = "/showCompany" + req.body.name;
    mongodb.connect(dburl, function(err,dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Bangalore_City");
        dbase2.collection("Companies").insertOne({
            Name: req.body.name,
            Rank: req.body.rank,
            Website: req.body.website,
            Location: req.body.location,
            EmployeeSize: req.body.employeesize,
            Revenue: req.body.revenue,
        }, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
            res.redirect(redirect);
        });
    });
});

app.listen("8081", function(err){
    if(err) throw err;
    console.log("Server started running on port 8081");
});