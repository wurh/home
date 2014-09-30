/**
 * 发布书单列表
 */
'use strict';

var tpl = {
    head: __inline('../head/head.handlebars'),
    content:__inline('content.handlebars')
  },
  $root,
  page = {};

page.show = function (state) {
  this.load();
};

page.hide = function () {
  $root.remove();
};

page.load = function () {
  $root = $(tpl.head({page:{index:''}})).appendTo('body');
   $(tpl.content()).appendTo($root);
};

page.unload = function () {

};

module.exports = page;