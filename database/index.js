// Package Imports
const Sequelize = require("sequelize");


// Local Imports
const { Teacher } = require("./model");
const { Grade } = require("./model");
const { Teacher_Grade } = require("./model");
const dbConfig = require("./db.config");

class Database {
    static db={};
    static connect() {
        const sequelize= new Sequelize(
            dbConfig.DB,
            dbConfig.Teacher,
            dbConfig.PASSWORD,
            {
                host: dbConfig.HOST,
                dialect: dbConfig.dialect,
                operatorAliases: false,

                pool: {...dbConfig.pool},
            }
        );

        const { db } = Database;

        db.Sequelize=Sequelize;
        db.sequelize=sequelize;

        db.Teacher = Teacher(sequelize);
        db.Grade = Grade(sequelize);
        // db.Teacher_Grade= Teacher_Grade(sequelize);

        db.Teacher.belongsToMany(db.Grade,{through:"teacher_grade"});
        db.Grade.belongsToMany(db.Teacher,{through:"teacher_grade"});
        // foreignKey: { allowNull: false },
        // //as:"Teacher"
        // });


        // db.Teacher.belongsToMany(db.Grade, {
        //     through: "Teacher_Grades",
        //     as: "Grade",
        //     foreignKey: "gradeId",
        //   });
        //   db.Grade.belongsToMany(db.Teacher, {
        //     through: "Teacher_Grades",
        //     as: "teacher",
        //     foreignKey: "teacherId",
        //   });
           

        db.sequelize.sync({force:false}).then(()=>{
            console.log("Synced db.")
        })
        .catch((err)=>{
            console.log("Failed to sync db: " + err.message);
        });
    }
}

module.exports = Database;