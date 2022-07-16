const {Router} = require("express");
const productController = require('../controllers/products-controller');
const router = Router();
const controller = new productController();

router.get('/', async (req,res) => {
  res.json(await controller.getAll());
});

router.get('/filter/:id', async (req,res) => {
  const {id} = req.params;
  res.json(await controller.filter(id));
});

router.get('/:id', async (req,res) => {
  const {id} = req.params;
  res.status(id==999 ? 404 : 201 ).json(id==999 ? {message: 'not found'} : productController.getOne(id) );
});

router.post('/', async(req, res) => {
  const {body: data} = req;

  res.status(201).json(await controller.create(data));

});

router.patch('/:id', async (req, res) => {
  const {body:data, params:{id}} = req;
  res.json(await controller.update(id, data));
});


router.delete('/:id', async (req, res) => {
  const {params:{id}} = req;
  res.json(await controller.delete(id));
});

module.exports = router;
