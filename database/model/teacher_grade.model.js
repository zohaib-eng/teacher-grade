const { DataTypes } = require("sequelize");

// const Teacher = require("./teacher.model");
// const Grade = require("./grade.model");

module.exports = (db) => {
  const Teacher_Grade = db.define("teacher_grade", {
    teacherId: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: Teacher, 
        //   key: 'id'
        // }
      },
      gradeId: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: Grade, 
        //   key: 'id'
        // }
      }
  });

  return Teacher_Grade;
};