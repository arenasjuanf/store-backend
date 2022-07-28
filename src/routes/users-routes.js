const {Router} = require("express");
const userController = require('../controllers/users-controller');
const router = Router();

router.get('/', async (req,res) => {
  const response = await userController.getAll()
  res.json(response);
});

router.get('/get', (req,res) => {
  const getParams = req.query;
  res.json(getParams);
})

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json(userController.getOne(id));
})



module.exports = router;
