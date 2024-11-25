import express from "express";
import rootRoute from "./.src/routes/rootRoutes.js";

const app = express();

//convert string về json ( dùng với phương thức post)
app.use(express.json());
app.use(rootRoute);
//define port cho BE
app.listen(5000, () => {

  console.log("Starting with port 8080");
});

