import express from "express";
import connectDB from "./helper/connectDB.js";
import router from "./routers/url.router.js";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT_NO;
const url = process.env.MONGODB_URL;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/api/url", router);
app.listen(port, () => {
	connectDB(url);
	console.log("server is connected...", port);
});
