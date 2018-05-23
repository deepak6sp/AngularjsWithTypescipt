import * as angular from "angular";
import { Controller } from "./controller";
import { Service } from "./service";

var myApp = angular
.module("myApp", [])
.controller("MyController", Controller)
.service("MyService", Service);



