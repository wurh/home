
'use strict';

var tpl = {
    head: __inline('../head/head.handlebars')
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
  $root = $(tpl.head({page:{detail:''}})).appendTo('body');
};

page.unload = function () {

};

module.exports = page;