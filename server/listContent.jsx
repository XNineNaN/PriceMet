module.exports = {
  create(req, res) {
    const { name, price } = req.body;
    console.log(name);
    console.log(price);
  },
};
