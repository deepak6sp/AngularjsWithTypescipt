import * as angular from "angular";
import 'angular-mocks';

var myAppDev = angular
.module('myAppE2E', ['myApp', 'ngMockE2E'])

myAppDev.run(function($httpBackend) {
    let data = [{
        "title": "Deepak Prakash",
        "year": 2000,
        "rated": "N/A"
    },{
        "title": "Deepak Prakash2",
        "year": 2004,
        "rated": "N/A"
    }];
    

  $httpBackend.whenGET("/app/movieData.json").respond(data);
});