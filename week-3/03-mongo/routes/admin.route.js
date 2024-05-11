const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.middle.js");
const router = Router();
const { Admin, Course } = require("../db/index.db.js");
// Admin Routes
router.post("/signup", async (req, res) => {
  // app.use(body-parser) already called globally
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  try {
    const mess = await Admin.create({
      username: username,
      password: password,
    });
    if (mess) {
      res.send("Admin created successfully");
    }
  } catch (err) {
    res.send("Admin acc doesn't created");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  try {
    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });
    if (newCourse) {
      res.send(`course ${newCourse._id} created successfully`);
    } else {
      res.send("Course not indexed");
    }
  } catch (err) {
    res.send("Error oocured while creating courses!");
  }
});

router.get("/courses", async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({"courses": response})
});

module.exports = router;
