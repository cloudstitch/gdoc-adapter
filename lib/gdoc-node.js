var Util = require('cts/util');
var Model = require('cts/model');
var WorksheetNode = require('./worksheet-node');
var GDocUtil = require('./gdoc-util');

var GDocNode = function(tree, spec) {
  this.initializeNodeBase(tree, {});
  this.spec = spec || {};
  this.kind = "GoogleDocument";
  this.value = this.tree.value;
  this.ctsId = Util._.uniqueId().toString();
};

Util._.extend(GDocNode.prototype, Model.Node.Base, Util.Events, {

  debugName: function() {
    return "GoogleDocument";
  },

  find: function(spec, ret) {
    spec = GDocUtil.fixSpec(spec);
    if (typeof ret == 'undefined') {
      ret = [];
    }
    debugger;
    ret.push(this);
    return ret;
  },

  isDescendantOf: function(other) {
    false;
  },

  getValue: function() {
    return this.value.content || '';
  },

  setValue: function() {
    this.value.content = val;
  },

  _subclass_realizeChildren: function() {
    var deferred = Util.Promise.defer();
    deferred.resolve();
    return deferred;
  }
});

module.exports = GDocNode;