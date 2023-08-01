import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./Routes/authRoute.js";
import userRoute from "./Routes/userRoute.js";
import cors from "cors";

//Configure env
dotenv.config();

//database configure
connectDB();
//Rest Object
const app = express();

//MiddleWares
app.use(cors({origin: ['http://localhost:5173']}));
app.use(express.json());
// app.use(morgan("dev"));

//static
// app.use(express.static("dist"));

//routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

//Rest API
app.get("/", (req, res) => {
  res.send("<h1>Welcome To Blog App Backend</h1>");
});

//route matching
// app.use("/*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "dist", "index.html"));
// });

//PORT
const Port = process.env.Port || 1009;

//run listen
app.listen(Port, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on Port ${Port}`
  );
});
