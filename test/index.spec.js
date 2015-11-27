'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var wsLogger = require('../index');

describe('wsLogger', function() {

    it('should expose Log4jsConfigLoggerFactory', function() {

        var Log4jsConfigLoggerFactory = require('../source/Log4jsConfigLoggerFactory');
        expect(wsLogger.Log4jsConfigLoggerFactory).to.be.equal(Log4jsConfigLoggerFactory);
    });

    it('should expose LoggerFactory', function() {

        var LoggerFactory = require('../source/LoggerFactory');
        expect(wsLogger.LoggerFactory).to.be.equal(LoggerFactory);
    });

    it('should expose Logger', function() {

        var Logger = require('../source/Logger');
        expect(wsLogger.Logger).to.be.equal(Logger);
    });
});
