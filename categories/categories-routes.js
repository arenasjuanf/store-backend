const {Router} = require("express");
const productController = require('./categories-controller');
const router = Router();

router.get('/', (req,res) => {
  res.json(productController.getAll());
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json(productController.getOne(id));
})

module.exports = router;
