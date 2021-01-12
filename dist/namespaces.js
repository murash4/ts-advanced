"use strict";
var Form1;
(function (Form1) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    Form1.myForm = new MyForm('v@mail.ru');
})(Form1 || (Form1 = {}));
console.log(Form1.myForm);
//# sourceMappingURL=namespaces.js.map