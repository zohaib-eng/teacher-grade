const { GradeController } = require("../Controller");

const express = require("express");
const router = express.Router();

router.get("/", GradeController.getClint);
router.get("/:id", GradeController.getClintById);
router.put("/create", GradeController.createClint);
router.patch("/update", GradeController.updateClint);
router.delete("/:id", GradeController.deleteClint);

module.exports = router;
