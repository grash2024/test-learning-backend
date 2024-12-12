import express from "express";
import connectDB from "./helper/connectDB";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.listen(3000, () => {
	connectDB();
	console.log("server is connected...");
});
