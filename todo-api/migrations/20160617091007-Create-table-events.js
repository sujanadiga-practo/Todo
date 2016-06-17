'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('events', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      notNull:  true
    },
    title: {
      type: 'string',
      notNull: true
    },
    dueDate: {
      type: 'datetime',
      notNull: true
    },
    place: {
      type: 'string',
      notNull: true
    },
    description: 'text',
    isDeleted: {
      type: 'boolean',
      defaultValue: false
    },
    userId: {
      type: 'int',
      unsigned: true,
      notNull: true
    },   
    createdAt: 'datetime',
    updatedAt: 'datetime'
    
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('events', callback);  
};