const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Regular',
  },
  {
    tag_name: 'Regular with Cheese',
  },
  {
    tag_name: 'Fries',
  },
  {
    tag_name: `Fries with Gravy`,
  },
  {
    tag_name: 'Italian',
  },
  {
    tag_name: 'Ranch',
  },
  {
    tag_name: 'Bleu Cheese',
  },
  {
    tag_name: 'Coke',
  },
  {
    tag_name: 'Diet Coke',
  },
  {
    tag_name: 'Sprite',
  },
  {
    tag_name: 'Root Beer',
  },
  {
    tag_name: `Domestic Beer`,
  },
  {
    tag_name: `Imported Beer`,
  },
  {
    tag_name: `Tunami`,
  },
  {
    tag_name: `Pepper Don't Preach`,
  },
  {
    tag_name: `Fig-eta Bout It`,
  },
  {
    tag_name: `These Collards Don't Run`,
  },
  {
    tag_name: `The Beet Goes On`,
  },
  {
    tag_name: `Last of the Mo-Jicama`,
  },
  {
    tag_name: `Olive and Let Die`,
  },
  {
    tag_name: `Salvador Cauliflower`,
  },
  {
    tag_name: `Shootout at the Okra Corral`,
  },
  {
    tag_name: `Chard To A Crisp`,
  },
  {
    tag_name: `Papaya Was A Rollin' Stone`,
  },
  {
    tag_name: `Use It or Bleus It (Blue Cheese)`,
  },
  {
    tag_name: `Poutine on the Ritz`,
  },
  {
    tag_name: `Chipotle Off the Old Block`,
  },
  {
    tag_name: `Woulda Coulda Gouda`,
  },
  {
    tag_name: `You Gouda Be Kidding Me`,
  },
  {
    tag_name: `As Gouda As It Gets`,
  },
  {
    tag_name: `Gouda Gouda Two Shoes`,
  },
  {
    tag_name: `Sprouts! Sprouts! Sprout It All Out!`,
  },
  {
    tag_name: `I Don't Bay Leaf In Magic`,
  },
  {
    tag_name: `Walking In A Winter Muensterland`,
  },
  {
    tag_name: `I Fought The Slaw (And The Slaw Won)`,
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
