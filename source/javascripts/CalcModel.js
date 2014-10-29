
var CalcModel = function() {
    this.firstNumEntered = false;   //true if an operation is in progress and a number entered
    this.MAX_WIDTH = 10;           //Max number of chars on the screen at once

    //Registers declared as objects so they can be aliased
    this.mainReg = {name: 'main', value: 0};
    this.tempReg = {name: 'temp', value: 0};
//    this.memReg={name: 'memReg',value:0};

    //curReg aliases both mainReg and tempReg based on if we're in the
    //middle of a math operation or not.
    this.curReg = this.mainReg;

    //Holds the operation which is in progress, otherwise null
    this.currentOperation = null;

    // Initial display is always 0
    this.decimalMode = false;
    this.decimalDisplay = false;
    this.decimalCounter = null;
};

CalcModel.prototype.setDecimal = function() {
    this.decimalCounter = 1;
    this.decimalDisplay = true;
    this.decimalMode = true;
}

CalcModel.prototype.resetDecimal = function() {
    this.decimalCounter = null;
    this.decimalDisplay = false;
    this.decimalMode = false;
}

CalcModel.prototype.addInteger = function(number){
    //After evaluating the previous operation, begin entering a new number, not changing the returned answer
    if (this.curReg == this.mainReg && this.firstNumEntered == false && this.currentOperation == null) {
        this.mainReg.value = 0;
    }

    this.firstNumEntered = true;
    this.decimalDisplay = false;

    //So the user can still see the number they entered before entering an operation
    if (this.currentOperation != null) {
        this.curReg = this.tempReg;
    }

    //Make sure the number fits on the screen
    if (String(this.curReg.value).length < this.MAX_WIDTH - 1) {
        if(this.decimalMode) {
            //alert(number / Math.pow(10, this.decimalCounter));
            this.curReg.value = this.curReg.value + (number / Math.pow(10, this.decimalCounter));
            this.decimalCounter++;
        } else {
            this.curReg.value = (this.curReg.value * 10) + number;
        }
    }

    console.log(this.curReg.name + ': ' + this.curReg.value);
};

CalcModel.prototype.clearAll = function () {
    this.mainReg.value = 0;
    this.tempReg.value = 0;
    this.curReg = this.mainReg;
    this.currentOperation = null;
    this.resetDecimal();
};

CalcModel.prototype.clearEntry = function () {
    this.curReg.value = 0;
    this.resetDecimal();
};

//memory methods
//clears memory
CalcModel.prototype.memClear = function () {
    this.memReg.value = 0;
    this.resetDecimal();
};

CalcModel.prototype.memRecall = function () {
    mainDisplay.innerHTML = curReg.value;
    this.resetDecimal();
};




//Sets the current operation of the calculator
CalcModel.prototype.setOp = function(op) {
    //If another operation is not currently active, set operation
    if (this.currentOperation == null) {
        this.currentOperation = op;
    }
    else if (this.firstNumEntered === true){
        //If an operation is already active, evaluate it then set the operation
        this.evaluate();
        this.curReg = this.mainReg;
        this.currentOperation = op;
    }

    this.firstNumEntered = false;
};

CalcModel.prototype.opAdd = function(){
    //Add the value of tempReg to mainReg
    this.mainReg.value = this.mainReg.value + this.tempReg.value;
};
CalcModel.prototype.opmAdd = function(){
    this.memReg.value = this.mainReg.value+this.tempReg.value;
};
CalcModel.prototype.opmSubtract = function(){
    this.memReg.value = this.mainReg.value-this.tempReg.value;
};
CalcModel.prototype.opSubtract = function(){
    //Subtract the value of tempReg from mainReg
    this.mainReg.value = this.mainReg.value - this.tempReg.value;
};

CalcModel.prototype.opMultiply = function(){
    //Multiply mainReg by tempReg
    this.mainReg.value = this.mainReg.value * this.tempReg.value;
};

CalcModel.prototype.opDivide = function(){
    //Divide mainReg by tempReg
    this.mainReg.value = this.mainReg.value / this.tempReg.value;
};

CalcModel.prototype.opPercent = function(){
    //Divide curReg by 100
    if(this.curReg== this.mainReg){
    	this.mainReg.value = this.mainReg.value / 100;
    }else{
	this.tempReg.value=this.tempReg.value/100;
    }
    
};

CalcModel.prototype.opSqrt = function(){
    //Take sqrt of curReg
    if(this.curReg== this.mainReg){
    	this.mainReg.value = Math.sqrt(this.mainReg.value);
    }else{
	this.tempReg.value= Math.sqrt(this.tempReg.value);
    }
    
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
        case 'mem-add':
            this.opmAdd();
        case 'mem-sub':
            this.opmSubtract();
        default:
            break;
    }

    this.tempReg.value = 0;
    this.curReg = this.mainReg;    //Result is stored in mainReg
    this.firstNumEntered = false;
    this.currentOperation = null;
    this.resetDecimal();

};
