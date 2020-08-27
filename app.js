const express = require('express');
const { mongoURI } = require('./config');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//Parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


//mongoose options
const dbOptions = {
	useNewUrlParser : true,
	useUnifiedTopology : true,
	useCreateIndex : true
}

//connect to database
mongoose.connect(mongoURI, dbOptions, () => {
	console.log('db connected')
})

//routes
app.use('/slice', require('./routes/slicer'));
app.use('/', require('./routes/redirect'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('server started');
});