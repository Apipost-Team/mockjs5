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
    methods: ['address'],
    description: "详细地址",
    func: () => _.sample([
      '上地三街9号',
      '政立路400号',
      '中南路67号',
      '深大南路24号',
      '中山五路123号',
      '山西路168号',
      '天目山路288号',
      '湘府路818号',
      '科技二路11号',
      '南湖路422号',
      '人民南路12号',
      '民族路68号',
      '中华路99号',
      '工业园区金鸡湖路18号',
      '南滨河东路2号',
      '东海西路56号',
      '珞狮南路24号',
      '红军街101号',
      '人民中路333号',
      '吉大直街666号',
      '建设北路一段88号',
      '中山路999号',
      '建国路88号',
      '长风街168号',
      '莲花路11号',
      '三阳路6号',
      '人民路1001号',
      '天宁路160号',
      '经十路888号',
      '人民东路77号'
    ]),
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