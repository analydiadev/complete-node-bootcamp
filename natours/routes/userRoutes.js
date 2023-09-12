const express = require("express");
const {
  getAllUser,
  createUser,
  getUser,
  updateUser,
} = require("../controllers/userController");
const router = express.Router();

router.param("id", (req, resp, next, val) => {
  console.log(`User id ${val}`);
  resp.status(200).json({
    status: "success",
  });
  next();
});

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").get(getUser).patch(updateUser).delete(updateUser);
module.exports = router;
