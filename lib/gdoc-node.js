var Util = require('cts/util');
var Model = require('cts/model');
var GDocUtil = require('./gdoc-util');

var GDocNode = function(tree, spec) {
  this.initializeNodeBase(tree, {});
  this.spec = spec || {};
  this.kind = "GoogleDocument";
  this.initValue(this.tree.value);
  this.ctsId = Util._.uniqueId().toString();
};

Util._.extend(GDocNode.prototype, Model.Node.Base, Util.Events, {

  initValue: function(treeValue) {
    try {
      this.value = /<body.*?>([\s\S]*)<\/body>/.exec(treeValue.content)[1];
    } catch(e) {
      console.log(e);
      this.value = '';
    }
  },

  debugName: function() {
    return "GoogleDocument";
  },

  find: function(spec, ret) {
    spec = GDocUtil.fixSpec(spec);
    if (typeof ret == 'undefined') {
      ret = [];
    }
    ret.push(this);
    return ret;
  },

  isDescendantOf: function(other) {
    false;
  },

  getValue: function() {
    return this.value || '';
  },

  setValue: function() {
    this.value = val;
  },

  _subclass_realizeChildren: function() {
    var deferred = Util.Promise.defer();
    deferred.resolve();
    return deferred;
  }
});

module.exports = GDocNode;