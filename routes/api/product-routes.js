const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  Product.findAll({
    include: [
      {
        model: Category,
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: ProductTag,
        as: 'product_tags',
      },
    ],
  })
    .then((dbProductData) => res.json(dbProductData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  // find one product by `id` value
  // be sure to include its associated Category and Tag data
  Product.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Category,
        attributes: ['id', 'category_name'],
      },
      {
        model: Tag,
        attributes: ['id', 'tag_name'],
        through: ProductTag,
        as: 'product_tags',
      },
    ],
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new product
  Product.create(req.body)
    .then((dbProductData) => {
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tagId) => ({
          product_id: dbProductData.id,
          tagId,
        }));
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(dbProductData);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) =>
      // find all associated tags from ProductTag
      ProductTag.findAll({ where: { product_id: req.params.id } })
    )
    .then((productTags) => {
      // get list of current tag_ids
      const productTagIds = productTags.map(({ tagId }) => tagId);
      // create filtered list of new tag_ids
      const newProductTags = req.body.tagIds
        .filter((tagId) => !productTagIds.includes(tagId))
        .map((tagId) => ({
          product_id: req.params.id,
          tagId,
        }));
      // figure out which ones to remove
      const productTagsToRemove = productTags
        .filter(({ tagId }) => !req.body.tagIds.includes(tagId))
        .map(({ id }) => id);

      // run both actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbProductData) => {
      if (!dbProductData) {
        res.status(404).json({ message: 'No product found with this id' });
        return;
      }
      res.json(dbProductData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
