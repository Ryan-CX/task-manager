const express = require('express');
const app = express();
//routes
app.get('/hello', (req, res) => {
	res.send('task manager app');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
