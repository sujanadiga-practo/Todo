/**
 * User.js
 *
 * @description :: It represent User schema 
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require('bcrypt');
module.exports = {
    
  attributes: {
    name: {
      type    : 'string',
      required: true,
      size    : 250
    },
    email: {
      type    : 'string',
      required: true,
      unique  : true
    },
    password: {
      type    : 'string',
      required: true
    },
    events: {
      collection: 'event',
      via       : 'user'
    }, 
    toJSON: function () {
      var out = this.toObject();
      delete out.password;
      return out;
    }
  },
    
  tableName: 'users',
  
  // Lifecycle Callbacks
  beforeCreate: function (user, callback) {
    bcrypt.genSalt(10, function (err, salt){
      bcrypt.hash(user.password, salt, function (err, hash){
        if (err) {
          callback(err);
        } else {
          user.password = hash;
          callback();
        }
      });
    });
  },
    
  beforeUpdate: function (user, callback) {
    if (!user.password) callback();
    else {
      bcrypt.genSalt(10, function (err, salt){
        bcrypt.hash(user.password, salt, function (err, hash){
          if (err) {
            callback(err);
          } else {
            user.password = hash;
            callback();
          }
        });
      });
    }
  }
};

