const { Product } = require('../../models');

const productData = [
  {
    product_name: 'Burger',
    price: 5.0,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Burger with Cheese',
    price: 5.5,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Special Burger',
    price: 5.95,
    stock: 100,
    category_id: 1,
  },
  {
    product_name: 'Fries',
    price: 2.0,
    stock: 100,
    category_id: 2,
  },
  {
    product_name: 'Side Salad',
    price: 2.5,
    stock: 100,
    category_id: 3,
  },
  {
    product_name: 'Soft Drink',
    price: 2.0,
    stock: 100,
    category_id: 4,
  },
  {
    product_name: 'Beer',
    price: 4.0,
    stock: 100,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
