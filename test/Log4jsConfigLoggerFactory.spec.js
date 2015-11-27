'use strict';

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var Log4jsConfigLoggerFactory = require('../source/Log4jsConfigLoggerFactory');
var log4js = require('log4js-config');

describe('Log4jsConfigLoggerFactory', function() {

    var logger;

    beforeEach(function() {
        logger = new Log4jsConfigLoggerFactory();
    });

    it('should require log4js', function() {

        sinon.spy(log4js, 'get');

        logger.get('foo');

        expect(log4js.get).to.have.been.calledWith('foo');
    });
});
