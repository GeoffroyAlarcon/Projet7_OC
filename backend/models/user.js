const { Sequelize,DataTypes , Model} = require('sequelize')

const sequelize = new Sequelize({
  database:'groupomania',
  username: 'root',
  password:'root', 
  host: 'localhost',
  dialect: 'mysql'
});
class User extends Model {}

User.init({
  // Model attributes are defined here
  nom: {
    type: DataTypes.STRING,
    allowNull: false
  },
  prenom: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
 departement: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'utilisateur',
    freezeTableName: true,
  createdAt: false,
  updatedAt:false,
});

module.exports = User;