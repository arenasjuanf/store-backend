const {Router} = require("express");
const productController = require('../controllers/categories-controller');
const router = Router();

router.get('/', (req,res) => {
  res.json(new productController().getAll());
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json(new productController().getOne(id));
})

module.exports = router;
