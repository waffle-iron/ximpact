const Joi = require('joi');
const vogels = require('../../config/vogels');

const XebianSchema = {
  id: 'id',
  email: 'email',
  firstName: 'firstName',
  lastName: 'lastName',
};

const DynamoXebian = vogels.define('Xebian', {
  hashKey: 'id',
  timestamps: true,
  schema: {
    id: vogels.types.uuid(),
    email: Joi.string().email(),
    firstName: Joi.string(),
    lastName: Joi.string(),
  },
  tableName: `${process.env.DynamoTablePrefix}_Xebians`,
});

module.exports = {
  DynamoXebian,
  XebianSchema,
};
