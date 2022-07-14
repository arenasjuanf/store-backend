const CategoriesService = require('../services/categories-service');

module.exports = {
  getAll: () => ({
    categories: new CategoriesService().categories,
  }),
  getOne: (id) => {
    return new CategoriesService().getOne(id);
  }

}
