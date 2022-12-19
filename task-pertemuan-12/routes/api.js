// Import Student Controller
const StudentController = require("../controllers/StudentController");

// Import express
const express = require("express");
// Call router object
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

// Export router
module.exports = router;