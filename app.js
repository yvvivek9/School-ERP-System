const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const https = require("https");
const mongodb = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectId;
const dburl = "mongodb+srv://vivekdgrt:Pintu090703@cluster0.qxivjzg.mongodb.net/?retryWrites=true&w=majority";
const edit_data = require("./edit_data.js");
const insert_data = require("./insert_data.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("website-images"));
app.use(express.static("profile-images"));
app.use(express.static("front-end"));
app.use(express.static("assignments"));
app.use(express.static("notes"));
app.set("view engine", "ejs");

const assignment_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./assignments")
    },
    filename: (req, file, cb) => {
        cb(null, req.query.name + "_" + req.query.assignment + ".pdf")
    }
});
const assignment_upload = multer({storage: assignment_storage});

const notes_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./notes")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.class + "_" + req.body.subject + ".pdf")
    }
});
const notes_upload = multer({storage: notes_storage});

const slideshow_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./website-images")
    },
    filename: (req, file, cb) => {
        cb(null, req.query.name + ".png")
    },
});
const slideshow_upload = multer({storage: slideshow_storage});

const profilephoto_storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./profile-images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name + ".png")
    },
});
const profilephoto_upload = multer({storage: profilephoto_storage});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/homepage.html");
});

app.get("/contact", function(req,res){
    res.sendFile(__dirname + "/contact.html");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.post("/login/validate", function(req,res){
    if(req.body.email === "admin") {
        if(req.body.password === "admin@123") res.redirect(307, "/admin");
        else res.render("login_alert");
    }
    else{
        mongodb.connect(dburl, function(err,dbase1){
            if(err) throw err;
            dbase2 = dbase1.db("Institution");
            dbase2.collection("Students").findOne({Email: req.body.email}, function(err, dbase3){
                if(err) throw err;
                if(dbase3) {
                    if(dbase3.Password === req.body.password) {
                        res.redirect(307, `/student/?id=${dbase3._id}`);
                    }
                    else res.render("login_alert");
                }
            })
            dbase2.collection("Teachers").findOne({Email: req.body.email}, function(err, dbase3){
                if(err) throw err;
                if(dbase3) {
                    if(dbase3.Password === req.body.password) {
                        res.redirect(307, `/teacher/?id=${dbase3._id}`);
                    }
                    else res.render("login_alert");
                }
                else res.render("login_alert");
            })
        })
    }
})

app.post("/teacher", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("teacher_main", {data:data});
        });
    });
});

app.post("/teacher/timetable", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("teacher_timetable", {data:data});
        });
    });
});

app.post("/teacher/attendance", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(!req.query.student) res.render("teacher_attendance", {data:data, students: null, edit: null});
            else if(req.query.student === "find") {
                dbase2.collection("Students").find({Class: req.body.class, Section: req.body.section}).toArray(function(err, dbase3){
                    if(err) throw err;
                    res.render("teacher_attendance", {data:data, students: dbase3, edit: null});
                })
            }
            else if(req.query.student === "edit") {
                dbase2.collection("Students").findOne({Name: req.query.name}, function(err, dbase4){
                    if(err) throw err;
                    res.render("teacher_attendance", {data:data, students: null, edit: dbase4})
                })
            }
        });
    });
});

app.post("/teacher/editattendance", function(req,res){
    edit_data.edit_attendance(req.body, req.query.name);
    res.redirect(307, `/teacher/attendance?id=${req.query.id}`);
})

app.post("/teacher/results", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(!req.query.student) res.render("teacher_results", {data:data, students: null, edit: null});
            else if(req.query.student === "find") {
                dbase2.collection("Students").find({Class: req.body.class, Section: req.body.section}).toArray(function(err, dbase3){
                    if(err) throw err;
                    res.render("teacher_results", {data:data, students: dbase3, edit: null});
                })
            }
            else if(req.query.student === "edit") {
                dbase2.collection("Students").findOne({Name: req.query.name}, function(err, dbase4){
                    if(err) throw err;
                    res.render("teacher_results", {data:data, students: null, edit: dbase4})
                })
            }
        });
    });
});

app.post("/teacher/editresults", function(req,res){
    edit_data.edit_results(req.body, req.query.name);
    res.redirect(307, `/teacher/results?id=${req.query.id}`);
});

app.post("/teacher/notes", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            res.render("teacher_notes", {data: data});
        })
    })
})

app.post("/teacher/notes/save", notes_upload.single("notes"), function(req,res){
    res.redirect(307, `/teacher/notes?id=${req.query.id}`);
})

app.post("/teacher/assignments", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(!req.query.student) res.render("teacher_assignments", {data:data, students: null, edit: null});
            else if(req.query.student === "find") {
                dbase2.collection("Students").find({Class: req.body.class, Section: req.body.section}).toArray(function(err, dbase3){
                    if(err) throw err;
                    res.render("teacher_assignments", {data:data, students: dbase3, edit: null, class: req.body.class, section: req.body.section});
                })
            }
            else if(req.query.student === "edit") {
                dbase2.collection("Students").findOne({Name: req.query.name}, function(err, dbase4){
                    if(err) throw err;
                    res.render("teacher_assignments", {data:data, students: null, edit: dbase4});
                })
            }
        });
    });
});

app.post("/teacher/updateassignments", function(req,res){
    mongodb.connect(dburl, function(err,dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({Name: req.query.name}, function(err, dbase3){
            if(err) throw err;
            edit_data.update_assignments(dbase3.Assignments, req.body, req.query.name);
            res.redirect(307, `/teacher/assignments?id=${req.query.id}`);
        })
    })
});

app.post("/teacher/gassignments", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(req.query.search === "find") res.render("teacher_gassignments", {data: data, edit: null});
            else if(req.query.search === "found"){
                dbase2.collection("Students").findOne({Class: req.body.class, Section: req.body.section}, function(err, dbase3){
                    if(err) throw err;
                    res.render("teacher_gassignments", {data: data, edit: dbase3, clas: req.body.class, sectio: req.body.section});
                })
            }
        })
    })
})

app.post("/teacher/gassignments/save", function(req,res){
    edit_data.edit_assignments(req.body, req.query);
    res.redirect(307, `/teacher/gassignments?id=${req.query.id}&search=find`);
})

app.post("/teacher/testportal", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(req.query.test === "find") {
                dbase2.collection("Students").findOne({Class: req.body.class}, function(err, dbase3){
                    if(err) throw err;
                    if(req.body.subject === "english") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.English), subjec: "english", clas: req.body.class});
                    if(req.body.subject === "hindi") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Hindi), subjec: "hindi", clas: req.body.class});
                    if(req.body.subject === "physics") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Physics), subjec: "physics", clas: req.body.class});
                    if(req.body.subject === "chemistry") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Chemistry), subjec: "chemistry", clas: req.body.class});
                    if(req.body.subject === "biology") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Biology), subjec: "biology", clas: req.body.class});
                    if(req.body.subject === "maths") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Maths), subjec: "maths", clas: req.body.class});
                    if(req.body.subject === "social") res.render("teacher_testportal", {data: data, test: Object.values(dbase3.Social), subjec: "social", clas: req.body.class});
                })
            }
            else res.render("teacher_testportal_select", {data: data, test: null});
        })
    })
})

app.post("/teacher/savetestportal", function(req,res){
    if(req.query.subject === "english") edit_data.edit_english(req.body, req.query.class);
    if(req.query.subject === "hindi") edit_data.edit_hindi(req.body, req.query.class);
    if(req.query.subject === "physics") edit_data.edit_physics(req.body, req.query.class);
    if(req.query.subject === "chemistry") edit_data.edit_chemistry(req.body, req.query.class);
    if(req.query.subject === "biology") edit_data.edit_biology(req.body, req.query.class);
    if(req.query.subject === "maths") edit_data.edit_maths(req.body, req.query.class);
    if(req.query.subject === "social") edit_data.edit_social(req.body, req.query.class);
    res.redirect(307, `/teacher/testportal?id=${req.query.id}`);
})

app.post("/student", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_main", {data:data});
        });
    });
});

app.post("/student/timetable", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_timetable", {data:data});
        });
    });
});

app.post("/student/attendance", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_attendance", {data:data});
        });
    });
});

app.post("/student/results", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_results", {data:data});
        });
    });
});

app.post("/student/notes", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_notes", {data: data});
        });
    });
});

app.post("/student/assignments", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            res.render("student_assignments", {data:data});
        });
    });
});

app.post("/student/saveassignments", assignment_upload.single("assignment"), function(req,res){
    res.redirect(307, `/student/assignments/?id=${req.query.id}`)
});

app.post("/student/testportal", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").findOne({_id: ObjectID(req.query.id)}, function(err, data){
            if(err) throw err;
            if(req.query.subject === "search") res.render("student_selecttest", {data: data});
            else if(req.query.subject === "english") res.render("student_taketest", {data: data, test: data.English, subject: "english"});
            else if(req.query.subject === "hindi") res.render("student_taketest", {data: data, test:  data.Hindi, subject: "hindi"});
            else if(req.query.subject === "physics") res.render("student_taketest", {data: data, test:  data.Physics, subject: "physics"});
            else if(req.query.subject === "chemistry") res.render("student_taketest", {data: data, test:  data.Chemistry, subject: "chemistry"});
            else if(req.query.subject === "biology") res.render("student_taketest", {data: data, test:  data.Biology, subject: "biology"});
            else if(req.query.subject === "maths") res.render("student_taketest", {data: data, test:  data.Maths, subject: "maths"});
            else if(req.query.subject === "social") res.render("student_taketest", {data: data, test:  data.Social, subject: "social"});
        });
    });
});

app.post("/student/submit-test", function(req,res){
    var marks = 0;
    if(req.body.question1 === "correct") marks++;
    if(req.body.question2 === "correct") marks++;
    if(req.body.question3 === "correct") marks++;
    if(req.body.question4 === "correct") marks++;
    if(req.body.question5 === "correct") marks++;
    console.log(marks);
    var query = {_id: ObjectID(req.query.id)};
    if(req.query.subject === "english") var update = {$set: {EnglishMarks: marks}};
    if(req.query.subject === "hindi") var update = {$set: {HindiMarks: marks}};
    if(req.query.subject === "physics") var update = {$set: {PhysicsMarks: marks}};
    if(req.query.subject === "chemistry") var update = {$set: {ChemistryMarks: marks}};
    if(req.query.subject === "biology") var update = {$set: {BiologyMarks: marks}};
    if(req.query.subject === "maths") var update = {$set: {MathsMarks: marks}};
    if(req.query.subject === "social") var update = {$set: {SocialMarks: marks}};
    mongodb.connect(dburl, function(err,dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateOne(query, update, function(err,dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
    res.redirect(307, `/student/testportal/?id=${req.query.id}`);
});

app.post("/admin", function(req,res){
    res.render("admin");
});

app.post("/admin/save-announcements", function(req,res){
    var announcements = {$set: {
        Announcements: {
            Announcement1: req.body.announcement1,
            Announcement2: req.body.announcement2,
            Announcement3: req.body.announcement3,
            Announcement4: req.body.announcement4,
        }
    }};
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({}, announcements, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Teachers").updateMany({}, announcements, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        res.redirect(307, "/admin");
    })
});

app.post("/admin/save-slideshow", slideshow_upload.single("slideshow"), function(req,res){
    res.redirect(307, "/admin");
});

app.post("/admin/add-student", function(req,res){
    res.render("add_student");
});

app.post("/admin/add-student/save", profilephoto_upload.single("profile"), function(req,res){
    insert_data.add_student(req.body);
    res.redirect(307, "/admin");
})

app.post("/admin/remove-student", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").find({}).toArray(function(err, data){
            if(err) throw err;
            res.render("admin_remove_student", {data: data});
        })
    })
});

app.post("/admin/remove-student/delete", function(req, res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").deleteOne({_id: ObjectID(req.query.id)}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
    res.redirect(307, "/admin");
});

app.post("/admin/add-teacher", function(req,res){
    res.render("add_teacher");
});

app.post("/admin/add-teacher/save", profilephoto_upload.single("profile"), function(req,res){
    insert_data.add_teacher(req.body);
    res.redirect(307, "/admin");
});

app.post("/admin/remove-teacher", function(req,res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").find({}).toArray(function(err, data){
            if(err) throw err;
            res.render("admin_remove_teacher", {data: data});
        })
    })
});

app.post("/admin/remove-teacher/delete", function(req, res){
    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Teachers").deleteOne({_id: ObjectID(req.query.id)}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    });
    res.redirect(307, "/admin");
});

app.listen(3000, () => (
    console.log("Server started running on port 3000.")
));