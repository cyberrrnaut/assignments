const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.middle");
const router = Router();
const { Admin, Course } = require("../db/index.db.js");

const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const jwtKey = process.env.JWT_KEY;

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;
  await Admin.create({
    username,
    password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username });

  if (admin) {
    const jwtToken = jwt.sign({ username }, jwtKey);

    res.json({ jwtToken });
  } else {
    res.send("Admin doesn't exist");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // zod
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const response = await Course.find({});

  res.json({ Courses: response });
});

module.exports = router;
