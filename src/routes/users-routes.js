const {Router} = require("express");
const userController = require('../controllers/users-controller');
const router = Router();

router.get('/', (req,res) => {
  res.json(userController.getAll());
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
