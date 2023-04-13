const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const GRADE = db.define("grades", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    semester: {
      type: DataTypes.TEXT,
    },
    course: {
      type: DataTypes.TEXT,
    },
    grade: {
      type: DataTypes.TEXT,
    },
    teacherId: {
      type: DataTypes.INTEGER,
    }
  });

  return GRADE;
};