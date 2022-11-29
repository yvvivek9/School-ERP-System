const mongodb = require("mongodb").MongoClient;
const dburl = "mongodb+srv://vivekdgrt:Pintu090703@cluster0.qxivjzg.mongodb.net/?retryWrites=true&w=majority";

function edit_english(data, cls){
    var testupdate = {$set: {English: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {EnglishMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_hindi(data, cls){
    var testupdate = {$set: {Hindi: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {HindiMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_physics(data, cls){
    var testupdate = {$set: {Physics: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {PhysicsMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_chemistry(data, cls){
    var testupdate = {$set: {Chemistry: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {ChemistryMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_biology(data, cls){
    var testupdate = {$set: {Biology: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {BiologyMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_maths(data, cls){
    var testupdate = {$set: {Maths: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {MathsMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_social(data, cls){
    var testupdate = {$set: {Social: {
        Question1:{
            Question: data.question1,
            Answer: data.answer1,
            Option1: data.question1option1,
            Option2: data.question1option2,
            Option3: data.question1option3,
            Option4: data.question1option4,
        },
        Question2:{
            Question: data.question2,
            Answer: data.answer2,
            Option1: data.question2option1,
            Option2: data.question2option2,
            Option3: data.question2option3,
            Option4: data.question2option4,
        },
        Question3:{
            Question: data.question3,
            Answer: data.answer3,
            Option1: data.question3option1,
            Option2: data.question3option2,
            Option3: data.question3option3,
            Option4: data.question3option4,
        },
        Question4:{
            Question: data.question4,
            Answer: data.answer4,
            Option1: data.question4option1,
            Option2: data.question4option2,
            Option3: data.question4option3,
            Option4: data.question4option4,
        },
        Question5:{
            Question: data.question5,
            Answer: data.answer5,
            Option1: data.question5option1,
            Option2: data.question5option2,
            Option3: data.question5option3,
            Option4: data.question5option4,
        },
    }}};
    
    mongodb.connect(dburl, function(err, dbase1){
        if (err) throw err;
        var dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: cls}, testupdate, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
        dbase2.collection("Students").updateMany({Class: cls}, {$set: {SocialMarks: "NA"}}, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        });
    });
};

function edit_attendance(data, name) {
    var attendance = {$set: {
        Attendance: {
            English: data.english,
            Hindi: data.hindi,
            Physics: data.physics,
            Chemistry: data.chemistry,
            Biology: data.biology,
            Maths: data.maths,
            Social: data.social,
        }
    }};

    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateOne({Name: name}, attendance, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
}

function edit_results(data, name) {
    var results = {$set: {
        Marks: {
            Test1: [data.Test10, data.Test11, data.Test12, data.Test13, data.Test14, data.Test15, data.Test16],
            Test2: [data.Test20, data.Test21, data.Test22, data.Test23, data.Test24, data.Test25, data.Test26],
            Test3: [data.Test30, data.Test31, data.Test32, data.Test33, data.Test34, data.Test35, data.Test36],
            Test4: [data.Test40, data.Test44, data.Test42, data.Test43, data.Test44, data.Test45, data.Test46],
        }
    }}

    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateOne({Name: name}, results, function(err, dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
}

function update_assignments(data, update, name){
    var assignment = {$set: {
        Assignments : {
            Assignment1: {
                Description: data.Assignment1.Description,
                Marks: update.assignment1,
            },
            Assignment2: {
                Description: data.Assignment2.Description,
                Marks: update.assignment2,
            },
            Assignment3: {
                Description: data.Assignment3.Description,
                Marks: update.assignment3,
            },
            Assignment4: {
                Description: data.Assignment4.Description,
                Marks: update.assignment4,
            },
        }
    }
    }

    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateOne({Name: name}, assignment, function(err,dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
}

function edit_assignments(data, query){
    var assignment = {$set: {
        Assignments : {
            Assignment1: {
                Description: data.assignment1,
                Marks: "NA",
            },
            Assignment2: {
                Description: data.assignment2,
                Marks: "NA",
            },
            Assignment3: {
                Description: data.assignment3,
                Marks: "NA",
            },
            Assignment4: {
                Description: data.assignment4,
                Marks: "NA",
            },
        }
    }
    }

    mongodb.connect(dburl, function(err, dbase1){
        if(err) throw err;
        dbase2 = dbase1.db("Institution");
        dbase2.collection("Students").updateMany({Class: query.class, Section: query.section}, assignment, function(err,dbase3){
            if(err) throw err;
            console.log(dbase3);
        })
    })
}


module.exports = {edit_english, edit_hindi, edit_physics, edit_chemistry, edit_biology, edit_maths, edit_social, edit_attendance, edit_results, update_assignments, edit_assignments};