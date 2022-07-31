const {Router} = require("express");
const UserController = require("../controllers/users-controller");
const router = Router();

const controller = new UserController();

router.get('/', async (req,res) => {
  const response = await controller.getAll()
  res.json(response);
});

router.get('/get', (req,res) => {
  const getParams = req.query;
  res.json(getParams);
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json(controller.getOne(id));
})


router.post('/', (req,res) => {
  const {body: data} = req;
  console.log(data);
  res.json(controller.create(data));
})


module.exports = router;
