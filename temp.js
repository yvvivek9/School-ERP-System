app.get("/editEnglish", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.English);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/saveEnglish", subject: "English"});
        });
    });
});

app.post("/saveEnglish", function(req, res) {
    var x = req.body;
    edit_test.edit_english(x);
    res.redirect("/editEnglish");
});

app.get("/editHindi", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Hindi);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "saveHindi", subject: "Hindi"});
        });
    });
});

app.post("/saveHindi", function(req, res) {
    var x = req.body;
    edit_test.edit_hindi(x);
    res.redirect("/editHindi");
});

app.get("/editPhysics", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Physics);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/savePhysics", subject: "Physics"});
        });
    });
});

app.post("/savePhysics", function(req, res) {
    var x = req.body;
    edit_test.edit_physics(x);
    res.redirect("/editPhysics");
});

app.get("/editChemistry", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Chemistry);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/saveChemistry", subject: "Chemistry"});
        });
    });
});

app.post("/saveChemistry", function(req, res) {
    var x = req.body;
    edit_test.edit_chemistry(x);
    res.redirect("/editChemistry");
});

app.get("/editBiology", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Biology);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/saveBiology", subject: "Biology"});
        });
    });
});

app.post("/saveBiology", function(req, res) {
    var x = req.body;
    edit_test.edit_biology(x);
    res.redirect("/editBiology");
});

app.get("/editMaths", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Maths);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/saveMaths", subject: "Maths"});
        });
    });
});

app.post("/saveMaths", function(req, res) {
    var x = req.body;
    edit_test.edit_maths(x);
    res.redirect("/editMaths");
});

app.get("/editSocial", function (req, res) {
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({}, function(err, dbase3){
            var z = Object.values(dbase3.Social);
            z.splice(-1);
            res.render("edit_test", {data: z, redirect: "/saveSocial", subject: "Social"});
        });
    });
});

app.post("/saveSocial", function(req, res) {
    var x = req.body;
    edit_test.edit_maths(x);
    res.redirect("/editSocial");
});