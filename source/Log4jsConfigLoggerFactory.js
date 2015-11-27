'use strict';

var LoggerFactory = require('./LoggerFactory');

class Log4jsConfigLoggerFactory extends LoggerFactory {
    get (name) {
        return require('log4js-config').get(name);
    }
}

module.exports = Log4jsConfigLoggerFactory;
