const { DataTypes } = require("sequelize");

module.exports = (db) => {
  const TEACHER = db.define("teachers", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
    },
    password: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.TEXT,
    },
    // gradeId: {
    //   type: DataTypes.INTEGER,
    // }
  });

  return TEACHER;
};