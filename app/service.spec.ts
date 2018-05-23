import * as angular from "angular";
import "angular-mocks";
import {Service} from './service';

describe("Test My Name", () => {
    let $http, $httpBackend;
    let serviceObj;
    beforeEach(angular.mock.module("MyApp"));

    beforeEach(inject((_$http_, _$httpBackend_) => {
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        serviceObj = new Service($http);
    }));
});