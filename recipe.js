const db = require('./dbConfig');
const Sequelize = require('sequelize');


const Recipe = db.define('Recipe', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
      defaultValue: 'cereal',
    },
      vegan: {
        type: Sequelize.BOOLEAN,
      },
})

//--------------------
module.exports = Recipe;
