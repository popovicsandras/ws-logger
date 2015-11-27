'use strict';

var Logger = require('./Logger');

class LoggerFactory {
    //logger = new Logger();

    get (name) {
        return logger;
    }
}

module.exports = LoggerFactory;
