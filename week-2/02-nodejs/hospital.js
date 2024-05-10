// inMemory hospital

const express = require("express");

const app = express();

const port = 3000;

//middleware
app.use(express.json());

//inMemory dataBase
var user = [{ name: "John", kidneys: [{ healthy: true }] }];

//routes

app.get("/", (req, res) => {
  const johnKidneys = user[0].kidneys;

  let healthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      healthyKidneys = healthyKidneys + 1;
    }
  }
  let unHealthyKidneys = johnKidneys.length - healthyKidneys;
  const totalKidneys = johnKidneys.length;
  res.json({
    totalKidneys,
    healthyKidneys,
    unHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;

  let health = user[0].kidneys;

  health.push({ healthy: isHealthy });

  res.send("addition done");
});

app.put("/", (req, res) => {
  let toSet = user[0].kidneys;

  for (let i = 0; i < toSet.length; i++) {
    toSet[i] = { healthy: true };
  }

  res.send("Update done");
});

app.delete("/", (req, res) => {
    const newKidneys = [];
    for (let i = 0; i<user[0].kidneys.length; i++) {
        if (user[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    user[0].kidneys = newKidneys;
    res.json({msg: "done"})   
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
