const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

const bcrypt = require('bcrypt');

class User extends Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:true
      },
      unique: {
          args: true,
          msg: 'Email address already in use!'
      }
    },
   
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

User.addHook('beforeCreate', user => {
  return bcrypt
    .genSalt(5)
    .then(salt => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then(hashedPassword => {
      user.password = hashedPassword;
    });
});

module.exports = User;

