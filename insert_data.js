const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://vivekdgrt:Pintu090703@cluster0.qxivjzg.mongodb.net/?retryWrites=true&w=majority";

function add_student(data){
    var student = {
        StudentID: data.id,
        Name: data.name,
        Email: data.email,
        Password: data.password,
        Class: data.class,
        Section: data.section,
        Announcements: {
            Announcement1: "Announcement1",
            Announcement2: "Announcement2",
            Announcement3: "Announcement3",
            Announcement4: "Announcement4",
        },
        TimeTable: {
            Monday: [data.monday1, data.monday2, data.monday3, data.monday4, data.monday5, data.monday6, data.monday7, data.monday8],
            Tuesday: [data.tuesday1, data.tuesday2, data.tuesday3, data.tuesday4, data.tuesday5, data.tuesday6, data.tuesday7, data.tuesday8],
            Wednesday: [data.wednesday1, data.wednesday2, data.wednesday3, data.wednesday4, data.wednesday5, data.wednesday6, data.wednesday7, data.wednesday8],
            Thursday: [data.thursday1, data.thursday2, data.thursday3, data.thursday4, data.thursday5, data.thursday6, data.thursday7, data.thursday8],
            Friday: [data.friday1, data.friday2, data.friday3, data.friday4, data.friday5, data.friday6, data.friday7, data.friday8],
        },
        Marks: {
            Test1: [0, 0, 0, 0, 0, 0, 0],
            Test2: [0, 0, 0, 0, 0, 0, 0],
            Test3: [0, 0, 0, 0, 0, 0, 0],
            Test4: [0, 0, 0, 0, 0, 0, 0],
        },
        Attendance: {
            English: 0,
            Hindi: 0,
            Physics: 0,
            Chemistry: 0,
            Biology: 0,
            Maths: 0,
            Social: 0,
        },
        English: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "bb",
                Option3: "bb",
                Option4: "bb",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "bb",
                Option3: "bb",
                Option4: "bb",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "bb",
                Option3: "bb",
                Option4: "bb",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "bb",
                Option3: "bb",
                Option4: "bb",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "bb",
                Option3: "bb",
                Option4: "bb",
            },
        },
        EnglishMarks: "0",
        Hindi: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        HindiMarks: "0",
        Physics: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        PhysicsMarks: "0",
        Chemistry: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        ChemistryMarks: "0",
        Biology: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        BiologyMarks: "0",
        Maths: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        MathsMarks: "0",
        Social: {
            Question1: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question2: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question3: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question4: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
            Question5: {
                Question: "aa",
                Answer: "aa",
                Option1: "aa",
                Option2: "aa",
                Option3: "aa",
                Option4: "aa",
            },
        },
        SocialMarks: "0",
        Assignments: {
            Assignment1:{
                Description: "Description",
                Marks: "NA",
            },
            Assignment2:{
                Description: "Description",
                Marks: "NA",
            },
            Assignment3:{
                Description: "Description",
                Marks: "NA",
            },
            Assignment4:{
                Description: "Description",
                Marks: "NA",
            },
        },
    };

    mongodb.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("Institution");
        dbo.collection("Students").insertOne(student, function(err,data){
            if(err) throw err;
            console.log(data);
        });
    });
}

function add_teacher(data) {
    var teacher = {
        TeacherID: data.id,
        Name: data.name,
        Email: data.email,
        Password: data.password,
        Subject: data.subject,
        Announcements: {
            Announcement1: "Announcement1",
            Announcement2: "Announcement2",
            Announcement3: "Announcement3",
            Announcement4: "Announcement4",
        },
        TimeTable: {
            Monday: [data.monday1, data.monday2, data.monday3, data.monday4, data.monday5, data.monday6, data.monday7, data.monday8],
            Tuesday: [data.tuesday1, data.tuesday2, data.tuesday3, data.tuesday4, data.tuesday5, data.tuesday6, data.tuesday7, data.tuesday8],
            Wednesday: [data.wednesday1, data.wednesday2, data.wednesday3, data.wednesday4, data.wednesday5, data.wednesday6, data.wednesday7, data.wednesday8],
            Thursday: [data.thursday1, data.thursday2, data.thursday3, data.thursday4, data.thursday5, data.thursday6, data.thursday7, data.thursday8],
            Friday: [data.friday1, data.friday2, data.friday3, data.friday4, data.friday5, data.friday6, data.friday7, data.friday8],
        },
    };

    mongodb.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("Institution");
        dbo.collection("Teachers").insertOne(teacher, function(err,data){
            if(err) throw err;
            console.log(data);
        });
    });
}

module.exports = {add_student, add_teacher};
