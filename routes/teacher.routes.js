const { TeacherController } = require("../Controller");

const express = require("express");
const router = express.Router();

router.get("/", TeacherController.getTeacher);
router.get("/:id", TeacherController.getTeacherById);
router.put("/create", TeacherController.createTeacher);
router.patch("/update", TeacherController.updateTeacher);
router.delete("/:id", TeacherController.deleteTeacher);

module.exports = router;
