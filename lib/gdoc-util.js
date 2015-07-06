var Parser = require('cts/parser');

var GDocUtil = {
  fixSpec: function(spec) {
    if (typeof spec == 'string') {
      specString = spec;      
      spec = new Parser.SelectionSpec('', specString);
    }
    return spec;
  }
};

module.exports = GDocUtil;