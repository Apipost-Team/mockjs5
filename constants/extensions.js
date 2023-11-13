//Libraries
const lodash = require("lodash"),
  uuidLib = require('uuid'),
  idCardGenerator = require('idcard'),
  Mockjs = require('apipost-mock');

//Exports
module.exports = [
  {
    methods: ['telephone', 'phone', 'mobile'],
    description: "手机号码",
    func: () => lodash.sample(['13', '14', '15', '16', '17', '18', '19']) + lodash.random(100000000, 999999999),
  },
  {
    methods: ['username', 'user_name', 'nickname', 'nick_name'],
    description: "昵称",
    func: () => Mockjs.mock('@cname'),
  },
  {
    methods: ['avatar', 'icon', 'img', 'photo', 'pic'],
    description: "头像/图片",
    func: () => Mockjs.mock(`@image('400x400')`),
  },
  {
    methods: ['description'],
    description: "简介描述",
    func: () => Mockjs.mock('@cparagraph'),
  },
  {
    methods: ['id', 'userid', 'user_id', 'articleid', 'article_id'],
    description: "整形ID",
    func: () => Mockjs.mock('@integer(100, 1000)'),
  },
  {
    methods: ['empty'],
    description: "空字符串",
    func: () => '',
  },
  {
    methods: ['idcard'],
    description: "身份证号",
    func: () => idCardGenerator.generateIdcard(),
  },
  {
    methods: ['uuid'],
    description: "UUIDv4格式的UUID",
    func: () => uuidLib.v4(),
  },
]