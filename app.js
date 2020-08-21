const express = require('express');
const { mongoURI } = require('./config');
const mongoose = require('mongoose');



const app = express();

const dbOptions = {
	useNewUrlParser : true,
	useUnifiedTopology : true
}
//connect to database
mongoose.connect(mongoURI, dbOptions, () => {
	console.log('db connected')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('server started');
});