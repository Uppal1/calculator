
var CalcModel = function() {
    this.firstNumEntered = false;   //true if an operation is in progress and a number entered
    this.MAX_WIDTH = 10;           //Max number of chars on the screen at once

    //Registers declared as objects so they can be aliased
    this.mainReg = {name: 'main', value: 0};
    this.tempReg = {name: 'temp', value: 0};
    this.memReg = {name: 'mem', value: 0};

    //curReg aliases both mainReg and tempReg based on if we're in the
    //middle of a math operation or not.
    this.curReg = this.mainReg;

    //Holds the operation which is in progress, otherwise null
    this.currentOperation = null;
};

CalcModel.prototype.addInteger = function(number){

    if (this.currentOperation != null) {
        this.firstNumEntered = true;
    }

    //So the user can still see the number they entered before entering an operation
    if (this.firstNumEntered) {
        this.curReg = this.tempReg;
    }

    //Make sure the number fits on the screen
    if (String(this.curReg.value).length < this.MAX_WIDTH - 2) {
        this.curReg.value = (this.curReg.value * 10) + number;
    }




    console.log(this.curReg.name + ': ' + this.curReg.value);
};

CalcModel.prototype.clearAll = function () {
    console.log('CLEAR ALL');
    this.mainReg.value = 0;
    this.tempReg.value = 0;
    this.curReg = this.mainReg;
}

CalcModel.prototype.clearEntry = function () {
    console.log('CLEAR ENTRY');
    this.curReg.value = 0;
}

//Sets the current operation of the calculator
CalcModel.prototype.setOp = function(op) {
    //If another operation is not currently active, set operation
    if (this.currentOperation == null) {
        this.currentOperation = op;
        console.log('Set op to ' + op);
    }
    else if (this.firstNumEntered === true){
        console.log('Already have an op in progress');
        var result = this.evaluate();
        this.curReg = this.mainReg;
        this.currentOperation = op;
        return result;
    }

}

CalcModel.prototype.opAdd = function(){
    console.log('ADD ' + this.mainReg.value + ' + ' + this.tempReg.value);
    this.mainReg.value = this.mainReg.value + this.tempReg.value;
};

CalcModel.prototype.opSubtract = function(){
    console.log('SUBTRACT ' + this.mainReg.value + ' - ' + this.tempReg.value);
    this.mainReg.value = this.mainReg.value - this.tempReg.value;
};

CalcModel.prototype.opMultiply = function(){
    console.log('MULTIPLY ' + this.mainReg.value + ' * ' + this.tempReg.value);
    this.mainReg.value = this.mainReg.value * this.tempReg.value;
};

CalcModel.prototype.opDivide = function(){
    console.log('DIVIDE ' + this.mainReg.value + ' / ' + this.tempReg.value);
    this.mainReg.value = this.mainReg.value / this.tempReg.value;
};

CalcModel.prototype.evaluate = function () {
    switch(this.currentOperation) {
        case 'add':
            this.opAdd();
            break;
        case 'subtract':
            this.opSubtract();
            break;
        case 'multiply':
            this.opMultiply();
            break;
        case 'divide':
            this.opDivide();
            break;
        default:
            break;
    }

    this.tempReg = 0;
    this.curReg = this.mainReg;
    this.firstNumEntered = false;
    this.currentOperation = null;

};