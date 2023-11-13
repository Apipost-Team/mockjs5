//Libraries
const lodash = require("lodash"),
  MOCK_EXTENSIONS = require('./constants/extensions'),
  Mockjs = require('apipost-mock');

const mockjsRandomExtend = {};

//Clearly explain the purpose of this function
mockjsRandomExtend.string = function (pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', start, end) {
  pool = typeof pool === 'string' ? Mockjs.mock(pool) : pool;

  if (typeof pool === 'number') {
    [start, pool] = [pool, start];
  }

  try {
    if (!isNaN(Number(start))) {
      const size = isNaN(Number(end)) ? start : lodash.random(start, end);
      return lodash.sampleSize(pool, size).join('');
    }
  } catch (ex) { }

  return lodash.sample(pool);
};

//Extensions assignment
lodash.forEach(MOCK_EXTENSIONS, ({ methods, func }) => {
  methods.forEach((method) => {
    mockjsRandomExtend[method] = func;
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