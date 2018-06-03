import * as angular from "angular";
import "angular-mocks";
import { Controller } from "./controller";

describe("Controller", () => {

    // unit test goes here
    let controller: Controller;

    beforeEach(angular.mock.module("MyAppE2E"));

    // beforeEach(inject(($q) => {
    //     controller = new Controller();
    // }));

    it("4-4", () => {
        expect(4).toEqual(4);
    });

});
