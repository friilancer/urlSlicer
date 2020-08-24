const express = require('express');
const Router = express.Router();
const SlicedUri = require('../models/slicedUrls');

const generateNewUri = () => {
	const arr = [];

	for(let i=0; i < 8 ; i++){
		let str = Math.floor(Math.random() * 26 ) + 97;
		arr.push(String.fromCharCode(str)); 
	}

	let newUri = arr.join('');

	return newUri;
}

Router.post('/', (req, res) => {
	const { oldUri, newUriCode } = req.body;

	//Validate params
	if( !oldUri ){
		return res.status(400).json({msg : "Please enter the uri to be shortened"});
	}

	else if ( !newUriCode ) {
		const generatedUri =  generateNewUri();
		return res.status(200).json({ msg : `etu.kk/${generatedUri}` });
	}

	// Check for availability of new URI name	
	SlicedUri.findOne({ newUriCode })
		.then( uri => {
			if(uri){ 
				return res.status(400).json({ msg :  `etu.kk/${newUriCode} unavailable..Please modify name`});
			} 

			const newSlicedUri = new SlicedUri({
				oldUri,
				newUriCode 
			})

			newSlicedUri.save()
				.then(data => res.json(data));
			
			
		})
	
})

Router.get('/', (req, res) => {
	SlicedUri.find({})
		.then( data => res.json(data))
})

module.exports = Router;