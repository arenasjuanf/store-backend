// routers
const productRoutes = require('../products/products-routes');
const categoryRoutes = require('../categories/categories-routes');
const userRoutes = require('../users/users-routes');

function routerApi(app){
  app.get('/', (_,res) => {
    res.send('server running');
  });
  app.use('/products', productRoutes);
  app.use('/categories', categoryRoutes);
  app.use('/users', userRoutes);
}

module.exports = routerApi;
