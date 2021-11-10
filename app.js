const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks'); //controllers->routes->app.js

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
	res.send('task manager app');
});

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
