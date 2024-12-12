import Url from "../models/url.model.js";
import uniqid from "uniqid";
const getUrlAndGenerateIdAndPost = async (req, res, next) => {
	const { url } = req.body;
	const id = uniqid("r.jth", undefined);

	console.log(url);
	try {
		await Url.create({ url, id });
		res.status(201).json({ url: url, id: id });
	} catch (err) {
		res.status(400).json({ msg: err.message });
	}
};
const redirectShortUrl = async (req, res, next) => {
	const id = req.params;
	console.log("id:", id);
	try {
		const data = await Url.findOne({ id });
		console.log("data", data);
		res.redirect(data.url);
	} catch (err) {}
};
export { getUrlAndGenerateIdAndPost, redirectShortUrl };
