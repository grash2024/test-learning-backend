import mongoose from "mongoose";
const UrlSchema = new mongoose.Schema({
	url: {
		required: true,
		type: String,
		unique: {
			value: true,
			message: "url should be unique",
		},
	},
	id: {
		required: true,
		unique: true,
		type: String,
	},
});
export default mongoose.model("url", UrlSchema);
