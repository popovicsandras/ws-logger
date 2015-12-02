'use strict';

var Logger = require('./Logger');

class LoggerFactory {
    constructor() {
        this.logger = new Logger();
    }

    get (name) {
        return this.logger;
    }
}

module.exports = LoggerFactory;
