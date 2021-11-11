const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks'); //model->controllers->routes->app.js
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.json());
app.use(express.static('./public'));
app.use(notFound); //for wrong urls 404 error
app.use(errorHandlerMiddleware);

//routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log(`Listening on port ${port}`);
		});
	} catch (error) {
		console.error(error);
	}
};
start();
