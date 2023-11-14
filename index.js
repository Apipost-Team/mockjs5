//Libraries
const _ = require("lodash"),
  MOCK_EXTENSIONS = require('./constants/extensions'),
  FAKER_EXTENSIONS = require('./constants/faker'),
  Mockjs = require('apipost-mock');

const mockjsRandomExtend = {};

//Extensions assignment
_.forEach(FAKER_EXTENSIONS, (item, method) => {
  method = _.trimStart(method, "$");

  if (!_.isEmpty(method) && _.isFunction(item?.generator)) {
    mockjsRandomExtend[method] = function () { return item?.generator() };
  }
});

//Clearly explain the purpose of this function
mockjsRandomExtend.string = function (pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', start, end) {
  pool = typeof pool === 'string' ? Mockjs.mock(pool) : pool;

  if (typeof pool === 'number') {
    [start, pool] = [pool, start];
  }

  try {
    if (!isNaN(Number(start))) {
      const size = isNaN(Number(end)) ? start : _.random(start, end);
      return _.sampleSize(pool, size).join('');
    }
  } catch (ex) { }

  return _.sample(pool);
};

//Extensions assignment
_.forEach(MOCK_EXTENSIONS, ({ methods, generator }) => {
  methods.forEach((method) => {
    mockjsRandomExtend[method] = generator;
  });
});

//Mockjs extension
Mockjs.Random.extend(mockjsRandomExtend);

//Exports
module.exports = {
  Mockjs,
  extend: MOCK_EXTENSIONS,
  ...Mockjs,
}