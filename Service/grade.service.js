// Package Imports

// Local Imports
const { where } = require("sequelize");
const { db } = require("../database");
const { catchError } = require("../utils");



class Grade {
  // Get All
  static getAll = async () =>
    await catchError(async () => {
      const result = await db.Grade.findAll({
        include: [
          {
            model:db.Teacher,
            attributes: ["id", "email", "name", "password", "role"],
            through: {
              attributes: [],
              
            },
          },
        
        ],
      });
      if (result) return { result };
      else throw new Error();
    });

    // Get By Id

    static getById = async (id) => await catchError(async () => {
      const result = await db.Grade.findByPk(id);
      if (result) return { result };
      else throw new Error();
    });

    //Create

    static create = async (data) => 
    await catchError(async () => {
      const result = await db.Grade.create(data);
      return { result };
    });

    // update

    static update= async (id, data) => 
    await catchError(async () => {
      const affectedRows = await db.Grade.update(data , { where: { id }});
      console.log(affectedRows);
      if (affectedRows == 1) return { result:true };
      else throw new Error();
    });

    //delete

    static delete= async (id) => 
    await catchError(async () => {
      const affectedRows = await db.Grade.destroy( { where: { id }} );
      console.log(affectedRows);
      if (affectedRows == 1) return { result:true };
      else throw new Error();
    });
}


module.exports=Grade;
















// // Package Imports

// // Local Imports
// const { db } = require("../database");
// const { catchError } = require("../utils");

// class User {
//   // Get All
//   static getAll = async () =>
//     await catchError(async () => {
//       const result = await db.User.findAll();
//       if (result) return { result };
//       else throw new Error();
//     });

//   // Get By Id
//   static getById = async (id) =>
//     await catchError(async () => {
//       const result = await db.User.findByPk(id);
//       if (result) return { result };
//       else throw new Error();
//     });

//   // Create
//   static create = async (data) =>
//     await catchError(async () => {
//       const result = await db.User.create(data);
//       return { result };
//     });

//   // Update
//   static update = async (id, data) =>
//     await catchError(async () => {
//       const affectedRows = await db.User.update(data, { where: { id } });
//       console.log(affectedRows);
//       if (affectedRows == 1) return { result: true };
//       else throw new Error();
//     });

//   // Delete
//   static delete = async (id) =>
//     await catchError(async () => {
//       const affectedRows = await db.User.destroy({ where: { id } });
//       if (affectedRows == 1) return { result: true };
//       else throw new Error();
//     });
// }

// module.exports = User;