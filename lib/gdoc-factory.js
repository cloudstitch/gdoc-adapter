var Util = require('cts/util');
var GSheetParser = require('./parser');
var GDocTree = require('./gdoc-tree');

var Factory = {
  Tree: function(treespec, forrest) {
    var tree = new GDocTree(forrest, treespec);
    var promise = Util.Promise.defer();

    var buildOutTree = function() {
      tree.initializeWithRemoteRoot().then(
        function() {
          tree.root.realizeChildren().then(
            function() {
              if (treespec.receiveEvents) {
                tree.toggleReceiveRelationEvents(true);
              }
              promise.resolve(tree);
            },
            function(err) {
              promise.reject(err);
            }
          );
        },
        function(err) {
          promise.reject(err);
        }
      );      
    }
    buildOutTree();
    return promise;
  },

  SelectionSpec: function(selectorString) {
    GSheetParser.parseSelectorString(selectorString);
  }

};

module.exports = Factory;

