const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const route = require('./routes/tasks');

//routes
app.get('/hello', (req, res) => {
	res.send('task manager app');
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
