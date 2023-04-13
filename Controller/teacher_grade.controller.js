// const { Teacher_GardeService } = require("../Service");
// const Teacher_Grade = require("../database/model/teacher.model");

// class Teacher_Grade{ findAll = () => {
//     return Tag.findAll({
//       include: [
//         {
//           model: Tutorial,
//           as: "tutorials",
//           attributes: ["id", "title", "description"],
//           through: {
//             attributes: ["tagId","tutorialId"],
//           }
//         },
//       ],
//     })
//       .then((tags) => {
//         return tags;
//       })
//       .catch((err) => {
//         console.log(">> Error while retrieving Tags: ", err);
//       });
//   };

//     findById = (id) => {
//     return Tag.findByPk(id, {
//       include: [
//         {
//           model: Tutorial,
//           as: "tutorials",
//           attributes: ["id", "title", "description"],
//           through: {
//             attributes: ["tagId", "tutorialId"],
//           }
//         },
//       ],
//     })
//       .then((tag) => {
//         return tag;
//       })
//       .catch((err) => {
//         console.log(">> Error while finding Tag: ", err);
//       });
//   };
// };
// module.exports = Teacher_Grade;