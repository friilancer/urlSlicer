const express = require('express');
const Router = express.Router();
const SlicedUri = require('../models/slicedUrls');

Router.post('/', (req, res) => {
	const { oldUrl , newUrl} = req.body;
})

module.exports = Router;