const notFound = (req, res) => {
  res.status(404).send("Resource no found");
};

module.exports = notFound;
