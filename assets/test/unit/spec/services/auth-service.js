'use strict';

describe('Service: AuthService', function () {

  var AuthService;

  beforeEach(function () {

    module('myApp');

    inject(function (_AuthService_) {
      AuthService = _AuthService_;
    });

  });


  it('should do something', function () {
    expect(!!AuthService).toBe(true);
  });

});