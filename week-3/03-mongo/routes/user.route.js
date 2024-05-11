const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.middle");
const { User, Course } = require("../db/index.db.js");

// User Routes
router.post("/signup", async (req, res) => {
  // app.use(body-parser) already called globally
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  try {
    const userSignupMess = await User.create({
      username: username,
      password: password,
    });
    if (userSignupMess) {
      res.send("User created successfully");
    }
  } catch (err) {
    res.send("User acc doesn't created");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courses = await Course.find({});

  res.json({ "Available  courses:": courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const password = req.headers.password;

  const courseId = req.params.courseId;

  await User.updateOne(
    { username},
    {
     "$push": {
        purchasedCourses: courseId,
      },
    }
  );
  res.send(`course ${courseId} purchased successfully`);
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
     "$in": user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
