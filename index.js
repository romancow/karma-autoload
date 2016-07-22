var pkgUp = require('pkg-up');

var createPattern = function(path, included, served, watched) {
  return {pattern: path, included: included, served: served, watched: watched};
};


function initAutoload (files, config, args, logger) {
  var log = logger.create('autoload.framework');

  if(!config){
    config = {};
  }
  config.included = config.included == null ? true : config.included;
  config.served = config.served == null ? true : config.served;
  config.watched = config.watched == null ? true : config.watched;

  try {
    var dependencies = require(pkgUp.sync()).dependencies;

    var path;
    for(var key in dependencies){
      path = require.resolve(key);
      files.unshift(createPattern(path, config.included, config.served, config.watched));
    }
  } catch(e){
    log.error(e);
  }
}

initAutoload.$inject = ['config.files', 'config.autoloadFramework', 'args', 'logger'];

module.exports = {
  'framework:autoload': ['factory', initAutoload]
}
