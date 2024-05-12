const { Router, json } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user.middle");
const z = require("zod");
const { User, Course } = require("../db/index.db.js");

//jwt
const jwt = require("jsonwebtoken");
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../.env");
dotenv.config({ path: envPath });

const jwtKey = process.env.JWT_KEY;

//ZOD validation
const usernameSchema = z.string().email();
const passwordSchema = z.string().min(6);

function validateInput(username, password) {
  const usernameValidation = usernameSchema.safeParse(username);
  const passwordValidation = passwordSchema.safeParse(password);

  let flag = false;

  if (usernameValidation.success && passwordValidation.success) {
    flag = true;
  }

  return flag;
}
// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (validateInput(username, password)) {
    await User.create({
      username,
      password,
    });
    res.send("User created successfully");
  }

  res.json({
    username: "should be email",
    password: "should be of min 6 digit",
  });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const response = await User.findOne({ username });

  console.log(response.username);
  if (response.username) {
    const token = jwt.sign({ username }, jwtKey);

    res.json({ token });
  } else {
    res.send("User doesn't exist, Please signup");
  }
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.username;

  const courseId = req.params.courseId;

  try {
    await User.updateOne(
      { username },
      {
        $push: { purchasedCourses: courseId },
      }
    );

    res.send(`course ${courseId} purchased successfully`);
  } catch (err) {
    res.send("Course not purchased");
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  console.log(user.purchasedCourses);
  res.json({ "Courses:": courses });
});

module.exports = router;
