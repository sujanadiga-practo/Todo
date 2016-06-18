/**
 * Event.js
 *
 * @description :: It represent Event schema 
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type    : 'string',
      required: true
    },
    dueDate: {
      type    : 'datetime',
      required: true
    },
    place: {
      type    : 'string',
      required: true
    },
    description: {
      type: 'text'
    },
    isDeleted: {
      type      : 'boolean',
      defaultsTo: false
    },
    user: {
      columnName: 'userId',
      model     : 'user',
      required  : true
    }
  },
  tableName: 'events'
};

