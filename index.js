const _ = require("lodash"),
uuid = require('uuid'),
Mockjs = require('apipost-mock');

// 拓展 mockjs

/**
 *  拓展mockjs， 定义一些内置 mock
 */
const _mockjsRandomExtend = {};

new Array('telephone', 'phone', 'mobile').forEach((func) => {
    _mockjsRandomExtend[func] = function () {
        return this.pick(['131', '132', '137', '188']) + Mockjs.mock(/\d{8}/);
    };
});
new Array('username', 'user_name', 'nickname', 'nick_name').forEach((func) => {
    _mockjsRandomExtend[func] = function () {
        return Mockjs.mock(`@cname`);
    };
});
new Array('avatar', 'icon', 'img', 'photo', 'pic').forEach((func) => {
    _mockjsRandomExtend[func] = function () {
        return Mockjs.mock(`@image('400x400')`);
    };
});

new Array('description').forEach((func) => {
    _mockjsRandomExtend[func] = function () {
        return Mockjs.mock(`@cparagraph`);
    };
});

new Array('id', 'userid', 'user_id', 'articleid', 'article_id').forEach((func) => {
    _mockjsRandomExtend[func] = function () {
        return Mockjs.mock(`@integer(100, 1000)`);
    };
});

//空字符串
_mockjsRandomExtend['empty'] = function () {
    return '';
};

Mockjs.Random.extend(_mockjsRandomExtend);
module.exports = Mockjs;
