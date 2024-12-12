import mongoose from "mongoose";

const connectDB = async (url) => {
	try {
		await mongoose.connect(url);
		console.log("Connected to  mongoDB successfully ");
	} catch (err) {
		console.log("Unable to connect mongoDB");
	}
};
export default connectDB;
