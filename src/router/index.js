// routers
const productRoutes = require('../routes/products-routes');
const categoryRoutes = require('../routes/categories-routes');
const userRoutes = require('../routes/users-routes');
const {Router} = require("express");


function routerApi(app){

  const router = Router();
  app.use('/api/v1', router);
  router.get('/', (_,res) => {
    res.send('server running');
  });
  router.use('/products', productRoutes);
  router.use('/categories', categoryRoutes);
  router.use('/users', userRoutes);
}

module.exports = routerApi;
