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
	const { oldUri, newUri } = req.body;

	//Validate params
	if( !oldUri ){
		return res.status(400).json({msg : "Please enter the uri to be shortened"});
	}

	else if ( !newUri ) {
		const generatedUri =  generateNewUri();
		return res.status(200).json({ msg : `etu.kk/${generatedUri}` });
	}

	// Check for availability of new URI name	
	SlicedUri.findOne({ newUri })
		.then( uri => {
			if(uri){ 
				return res.status(400).json({ msg :  `etu.kk/${newUri} unavailable..Please modify name`});
			} 

			console.log(newUri);
			
			const newSlicedUri = new SlicedUri({
				oldUri,
				newUri : `etu.kk/${newUri}`
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