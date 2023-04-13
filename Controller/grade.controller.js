// Packege Imports

// Local Imports
const { GradeService } = require("../Service");
const TEACHER = require("../database/model/teacher.model");

class Grade {
  static async getClint(_, res) {
    const data = await GradeService.getAll({
      include: [
        {
          model: TEACHER,
          as: "teacher",
          attributes: ["id", "name", "email","password","role"],
          through: {
            attributes: ["gradeId","teacherlId"],
          }
        },
      ],
    });
    if(data.error) {
      res.json({ success: false, message: "Ruqest could not be processed." });
    }else{
      res.json({ success: true, grade: data.result });
    }
  }


    // Get By Id
    static async getClintById(req, res) {
      const { id } = req.params;
  
      if (id) {
        const data = await GradeService.getById(id);
        if (data.error) {
          res.json({ success: false, message: "Not found." });
        } else {
          res.json({ success: true, grade: data.result });
        }
      } else {
        res.json({ success: false, message: "Please provide an ID." });
      }
    }


      // Create
  static async createClint(req, res) {
    const { ...rest } = req.body;

    const id = new Date().getTime();

    const data = await GradeService.create({
      id,
      ...rest,
    });
    if (data.error) {
      res.json({ success: false, message: "Request could not be processed." });
    } else {
      res.json({ success: true, grade: data.result });
    }
  }



    // Update
    static async updateClint(req, res) {
      const { id, ...rest } = req.body;
  
      console.log(rest);
  
      if (id) {
        const data = await GradeService.update(id, { ...rest });
        if (data.error) {
          res.json({
            success: false,
            message: "Request could not be processed.",
          });
        } else {
          res.json({ success: true });
        }
      } else {
        res.json({ success: false, message: "Please provide an ID." });
      }
    }


      // Delete
  static async deleteClint(req, res) {
    const { id } = req.params;

    if (id) {
      const data = await GradeService.delete(id);
      if (data.error) {
        res.json({
          success: false,
          message: "Request could not be processed.",
        });
      } else {
        res.json({ success: true });
      }
    } else {
      res.json({ success: false, message: "Please provide an ID" });
    }
  }
}

module.exports=Grade;








// // Package Imports

// // Local Imports
// const { UserService } = require("../services");

// class User {
//   // Get All
//   static async getUsers(_, res) {
//     const data = await UserService.getAll();
//     if (data.error) {
//       res.json({ success: false, message: "Request could not be processed." });
//     } else {
//       res.json({ success: true, users: data.result });
//     }
//   }

  // // Get By Id
  // static async getUserById(req, res) {
  //   const { id } = req.params;

  //   if (id) {
  //     const data = await UserService.getById(id);
  //     if (data.error) {
  //       res.json({ success: false, message: "Not found." });
  //     } else {
  //       res.json({ success: true, user: data.result });
  //     }
  //   } else {
  //     res.json({ success: false, message: "Please provide an ID." });
  //   }
  // }

  // // Create
  // static async createUser(req, res) {
  //   const { ...rest } = req.body;

  //   const id = new Date().getTime();

  //   const data = await UserService.create({
  //     id,
  //     ...rest,
  //   });
  //   if (data.error) {
  //     res.json({ success: false, message: "Request could not be processed." });
  //   } else {
  //     res.json({ success: true, user: data.result });
  //   }
  // }

  // // Update
  // static async updateUser(req, res) {
  //   const { id, ...rest } = req.body;

  //   console.log(rest);

  //   if (id) {
  //     const data = await UserService.update(id, { ...rest });
  //     if (data.error) {
  //       res.json({
  //         success: false,
  //         message: "Request could not be processed.",
  //       });
  //     } else {
  //       res.json({ success: true });
  //     }
  //   } else {
  //     res.json({ success: false, message: "Please provide an ID." });
  //   }
  // }

  // // Delete
  // static async deleteUser(req, res) {
  //   const { id } = req.params;

  //   if (id) {
  //     const data = await UserService.delete(id);
  //     if (data.error) {
  //       res.json({
  //         success: false,
  //         message: "Request could not be processed.",
  //       });
  //     } else {
  //       res.json({ success: true });
  //     }
  //   } else {
  //     res.json({ success: false, message: "Please provide an ID" });
  //   }
  // }
// }

// module.exports = User;
