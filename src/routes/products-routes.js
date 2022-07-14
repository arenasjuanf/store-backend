const {Router} = require("express");
const productController = require('../controllers/products-controller');
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
  res.status(id==999 ? 404 : 201 ).json(id==999 ? {message: 'not found'} : productController.getOne(id) );
});

router.post('/', (req, res) => {
  const {body} = req;
  res.status(201).json({
    message: 'created',
    data: body,
  })

});

router.patch('/:id', (req, res) => {
  const {body, params:{id}} = req;
  res.json({
    message: 'updated',
    data: body,
    id
  })
});


module.exports = router;
