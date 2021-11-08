const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
	res.send('task manager app');
});

app.use('/api/v1/tasks', tasks);

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
