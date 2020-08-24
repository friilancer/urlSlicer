const express = require('express');
const Router = express.Router();
const SlicedUri = require('../models/slicedUrls');


Router.get('/:newUriCode', (req, res) => {
	const newUriCode = req.params.newUriCode;

	SlicedUri.findOne({ newUriCode })
		.then( doc => {
			if ( !doc ) return res.status(404).json({ msg : 'This page does not exist' });	
			res.redirect(doc.oldUri);		
		})
})


module.exports = Router;