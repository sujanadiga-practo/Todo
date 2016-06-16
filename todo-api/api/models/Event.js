/**
 * Event.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
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
        required: true,
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
        defaultsTo: false,
    },
    owner: {
      columnName: 'userId',
      model     : 'user',
      required  : true
    }
  }
};

