
describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
        browser.get('http://localhost:8080/');
        element(by.css("button")).click();
        expect(element(by.css("h1")).getText()).toBe("Deepak Prakash");
    });
});