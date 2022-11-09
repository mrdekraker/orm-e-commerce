const { ProductTag } = require('../../models');

const productTagData = [
  {
    product_id: 1, // Burger
    tag_id: 1, // Regular
  },
  {
    product_id: 2, // Burger
    tag_id: 2, // Regular with Cheese
  },
  {
    product_id: 3, // Special Burger
    tag_id: 14, // 14-35
  },
  {
    product_id: 3,
    tag_id: 15,
  },
  {
    product_id: 3,
    tag_id: 16,
  },
  {
    product_id: 3,
    tag_id: 17,
  },
  {
    product_id: 3,
    tag_id: 18,
  },
  {
    product_id: 3,
    tag_id: 19,
  },
  {
    product_id: 3,
    tag_id: 20,
  },
  {
    product_id: 3,
    tag_id: 21,
  },
  {
    product_id: 3,
    tag_id: 22,
  },
  {
    product_id: 3,
    tag_id: 23,
  },
  {
    product_id: 3,
    tag_id: 24,
  },
  {
    product_id: 3,
    tag_id: 25,
  },
  {
    product_id: 3,
    tag_id: 26,
  },
  {
    product_id: 3,
    tag_id: 27,
  },
  {
    product_id: 3,
    tag_id: 28,
  },
  {
    product_id: 3,
    tag_id: 29,
  },
  {
    product_id: 3,
    tag_id: 30,
  },
  {
    product_id: 3,
    tag_id: 31,
  },
  {
    product_id: 3,
    tag_id: 32,
  },
  {
    product_id: 3,
    tag_id: 33,
  },
  {
    product_id: 3,
    tag_id: 34,
  },
  {
    product_id: 3,
    tag_id: 35,
  },
  {
    product_id: 4, // Fries
    tag_id: 3, // Fries
  },
  {
    product_id: 4,
    tag_id: 4, // Fries with Gravy
  },
  {
    product_id: 5, // Side Salad
    tag_id: 5, // Italian
  },
  {
    product_id: 5,
    tag_id: 6, // Ranch
  },
  {
    product_id: 5,
    tag_id: 7, // Bleu Cheese
  },
  {
    product_id: 6, // Soft Drink
    tag_id: 8, // Coke
  },
  {
    product_id: 6,
    tag_id: 9, // Diet Coke
  },
  {
    product_id: 6,
    tag_id: 10, // Sprite
  },
  {
    product_id: 6,
    tag_id: 11, // Root Beer
  },
  {
    product_id: 7, // Beer
    tag_id: 12, // Domestic
  },
  {
    product_id: 7,
    tag_id: 13, // Imported
  },
];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;
