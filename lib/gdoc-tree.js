var Util = require('cts/util');
var Model = require('cts/model');
var GDocNode = require('./gdoc-node');

var GDocTree = function(forrest, spec) {
  this.forrest = forrest;
  this.spec = spec;
  this.root = null;
  this.kind = 'gdoc';
  this.insertionListener = null;
};

Util._.extend(GDocTree.prototype, Model.Tree.Base, {
  initializeWithRemoteRoot: function() {
    // Defined in RemoteAdapter
    var promise = Util.Promise.defer();
    var self = this;

    self.value = {"path":"content","name":"Content","type":"html","content":"<html><head><title>Document [Cloudstitch]</title><meta content=\"text/html; charset=UTF-8\" http-equiv=\"content-type\"><style type=\"text/css\">ol{margin:0;padding:0}.c1{widows:2;orphans:2;height:11pt;direction:ltr}.c0{max-width:468pt;background-color:#ffffff;padding:72pt 72pt 72pt 72pt}.title{widows:2;padding-top:0pt;line-height:1.15;orphans:2;text-align:left;color:#000000;font-size:21pt;font-family:\"Trebuchet MS\";padding-bottom:0pt;page-break-after:avoid}.subtitle{widows:2;padding-top:0pt;line-height:1.15;orphans:2;text-align:left;color:#666666;font-style:italic;font-size:13pt;font-family:\"Trebuchet MS\";padding-bottom:10pt;page-break-after:avoid}li{color:#000000;font-size:11pt;font-family:\"Arial\"}p{color:#000000;font-size:11pt;margin:0;font-family:\"Arial\"}h1{widows:2;padding-top:10pt;line-height:1.15;orphans:2;text-align:left;color:#000000;font-size:16pt;font-family:\"Trebuchet MS\";padding-bottom:0pt;page-break-after:avoid}h2{widows:2;padding-top:10pt;line-height:1.15;orphans:2;text-align:left;color:#000000;font-size:13pt;font-family:\"Trebuchet MS\";font-weight:bold;padding-bottom:0pt;page-break-after:avoid}h3{widows:2;padding-top:8pt;line-height:1.15;orphans:2;text-align:left;color:#666666;font-size:12pt;font-family:\"Trebuchet MS\";font-weight:bold;padding-bottom:0pt;page-break-after:avoid}h4{widows:2;padding-top:8pt;line-height:1.15;orphans:2;text-align:left;color:#666666;font-size:11pt;text-decoration:underline;font-family:\"Trebuchet MS\";padding-bottom:0pt;page-break-after:avoid}h5{widows:2;padding-top:8pt;line-height:1.15;orphans:2;text-align:left;color:#666666;font-size:11pt;font-family:\"Trebuchet MS\";padding-bottom:0pt;page-break-after:avoid}h6{widows:2;padding-top:8pt;line-height:1.15;orphans:2;text-align:left;color:#666666;font-style:italic;font-size:11pt;font-family:\"Trebuchet MS\";padding-bottom:0pt;page-break-after:avoid}</style></head><body class=\"c0\"><p class=\"c1\"><span></span></p></body></html>","url":"#"};
    self.root = new GDocNode(self);
    promise.resolve(self);

    // this._loadRemotePromise = this.loadRemote(this.spec);
    // this._loadRemotePromise.then(
    //   function(ssObj) {
    //     self.value = ssObj;
    //     self.root = new GDocNode(self);
    //     promise.resolve(self);
    //   },
    //   function(err) {
    //     Util.Log.Error("Could not load spreadsheet tree from remote", err);
    //     promise.reject("Could not load spreadsheet tree from remote");
    //   }
    // );
    return promise;
  },

  find: function(spec) {
    return this.root.find(spec);
  }

});

module.exports = GDocTree;