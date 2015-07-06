var Parser = {
  parseSelectionSpec: function(selectorString) {
    var s = selectorString.trim();
    return {query: s};
  }
};

module.exports = Parser;