const notFound = (req, res) => {
	res.status(404).send('The page you are looking for is not exist.');
};

module.exports = notFound;
