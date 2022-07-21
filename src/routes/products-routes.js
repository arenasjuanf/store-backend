const {Router} = require("express");
const productController = require('../controllers/products-controller');
const validatorHandler = require('../middlewares/validator-handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product-schema');

const router = Router();
const controller = new productController();

router.get('/', async (req,res) => {
  res.json(await controller.getAll());
});

router.get('/filter/:id', async (req,res) => {
  const {id} = req.params;
  res.json(await controller.filter(id));
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    return res.statusCode(id==999 ? 404 : 201 ).json(id==999 ? {message: 'not found'} : await controller.getOne(id, next) );
  }
);

router.post('/',[
  validatorHandler(createProductSchema, 'body'),
], async(req, res) => {

  const {body: data} = req;

  res.status(201).json(await controller.create(data));

});

router.patch('/:id',
[
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body')
],
async (req, res, next) => {
  const {body:data, params:{id}} = req;
  res.json(await controller.update(id, data, next));
});


router.delete('/:id', async (req, res, next) => {
  const {params:{id}} = req;
  res.json(await controller.delete(id, next));
});

module.exports = router;
