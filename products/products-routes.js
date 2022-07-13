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

router.post('/', (req, res) => {
  const {body} = req;
  console.log(body);
  res.json({
    message: 'created',
    data: body,
  })

});

router.patch('/:id', (req, res) => {
  const {body, params:{id}} = req;
  console.log(id);
  res.json({
    message: 'updated',
    data: body,
    id
  })
});


module.exports = router;
