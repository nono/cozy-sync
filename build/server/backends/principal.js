// Generated by CoffeeScript 1.9.3
var PrincipalBackend;

module.exports = PrincipalBackend = (function() {
  var principal;

  function PrincipalBackend() {}

  principal = {
    uri: 'principals/me',
    '{DAV:}displayname': 'cozy owner'
  };

  PrincipalBackend.prototype.getPrincipalsByPrefix = function(prefixPath, callback) {
    return callback(null, [principal]);
  };

  PrincipalBackend.prototype.getPrincipalByPath = function(path, callback) {
    return callback(null, principal);
  };

  PrincipalBackend.prototype.updatePrincipal = function(path, mutations, callback) {
    return callback(null, false);
  };

  PrincipalBackend.prototype.searchPrincipals = function(prefixPath, searchProperties, callback) {
    return callback(null, [principal.uri]);
  };

  PrincipalBackend.prototype.getGroupMemberSet = function(principal, callback) {
    return callback(null, [principal]);
  };

  PrincipalBackend.prototype.getGroupMemberShip = function(principal, callback) {
    return callback(null, [principal]);
  };

  PrincipalBackend.prototype.setGroupMemberSet = function(principal, members, callback) {
    return callback(null, false);
  };

  return PrincipalBackend;

})();
