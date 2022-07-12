const {Router} = require("express");
const productController = require('./products-controller');
const router = Router();

router.get('/', (req,res) => {
  res.json(productController.getAll());
});

router.get('/filter/:id', (req,res) => {
  const {id} = req.params;
  res.json(productController.filter(id));
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json(productController.getOne(id));
});
module.exports = router;
