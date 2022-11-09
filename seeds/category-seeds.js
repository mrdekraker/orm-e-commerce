const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Burger',
  },
  {
    category_name: 'Fries',
  },
  {
    category_name: 'Side_Salad',
  },
  {
    category_name: 'Soft_Drink',
  },
  {
    category_name: 'Beer',
  },
  {
    category_name: 'Soft_Serve_Ice_Cream',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
