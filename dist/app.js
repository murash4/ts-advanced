"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
const max = new Person('Maxim');
let anyFlag;
function logInfo(data) {
    console.log(data);
    anyFlag = true;
    console.log(anyFlag);
    anyFlag = '111';
    console.log(anyFlag);
}
logInfo('tratata');
//# sourceMappingURL=app.js.map