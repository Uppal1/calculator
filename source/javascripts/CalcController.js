
var CalcController = function() {
    this.model = new CalcModel();
    this.view;

    this.intClicked = function(number) {
        this.model.addInteger(number);
        this.refreshView();
    };

    this.addClicked = function() {
        this.model.setOp('add');
        this.refreshView();
    }

    this.subtractClicked = function() {
        this.model.setOp('subtract');
        this.refreshView();
    }

    this.multiplyClicked = function() {
        this.model.setOp('multiply');
        this.refreshView();
    }

    this.divideClicked = function() {
        this.model.setOp('divide');
        this.refreshView();
    }

    this.equalsClicked = function() {
        this.model.evaluate();
        this.refreshView();
    }

    this.clearClicked = function() {
        this.model.clearAll();
        this.refreshView();
    }

    this.clearEntryClicked = function() {
        this.model.clearEntry();
        this.refreshView();
    }

    this.refreshView = function() {
        this.view.updateMainDisplay(this.model.curReg.value);
        this.view.updateMemSetDisplay('');
        this.view.updateOpSetDisplay(this.model.currentOperation);
    }
};

CalcController.prototype.init = function(callbackObj){
    console.log('Controller init');
    var self = this;

    //Set where the view will display to
    var mainDisplay = document.getElementById("calc-display");
    var memSetDisplay = document.getElementById("mem-display");
    var opSetDisplay = document.getElementById("op-display");
    this.view = new CalcView(mainDisplay, memSetDisplay, opSetDisplay);

    //Declare event listeners for all the calculator buttons

    document.getElementById("btn-0").addEventListener('mouseup', function() {self.intClicked(0)});
    document.getElementById("btn-1").addEventListener('mouseup', function() {self.intClicked(1)});
    document.getElementById("btn-2").addEventListener('mouseup', function() {self.intClicked(2)});
    document.getElementById("btn-3").addEventListener('mouseup', function() {self.intClicked(3)});
    document.getElementById("btn-4").addEventListener('mouseup', function() {self.intClicked(4)});
    document.getElementById("btn-5").addEventListener('mouseup', function() {self.intClicked(5)});
    document.getElementById("btn-6").addEventListener('mouseup', function() {self.intClicked(6)});
    document.getElementById("btn-7").addEventListener('mouseup', function() {self.intClicked(7)});
    document.getElementById("btn-8").addEventListener('mouseup', function() {self.intClicked(8)});
    document.getElementById("btn-9").addEventListener('mouseup', function() {self.intClicked(9)});


    //Clears
    document.getElementById("btn-clear").addEventListener('mouseup', function() {self.clearClicked()});
    document.getElementById("btn-clearentry").addEventListener('mouseup', function() {self.clearEntryClicked()});
//
//    //Misc
//    document.getElementById("btn-decimal").addEventListener('mouseup', clear);
//    document.getElementById("btn-neg").addEventListener('mouseup', clear);
    document.getElementById("btn-equals").addEventListener('mouseup', function() {self.equalsClicked()});
//
    //Math operations
    document.getElementById("btn-add").addEventListener('mouseup', function() {self.addClicked()});
    document.getElementById("btn-sub").addEventListener('mouseup', function() {self.subtractClicked()});
    document.getElementById("btn-mult").addEventListener('mouseup', function() {self.multiplyClicked()});
    document.getElementById("btn-div").addEventListener('mouseup', function() {self.divideClicked()});
//    document.getElementById("btn-sqrt").addEventListener('mouseup', mathOperation);
//    document.getElementById("btn-percent").addEventListener('mouseup', mathOperation);
//
//    //Memory
//    document.getElementById("btn-mem-set").addEventListener('mouseup', clear);
//    document.getElementById("btn-mem-add").addEventListener('mouseup', clear);
//    document.getElementById("btn-mem-sub").addEventListener('mouseup', clear);
//    document.getElementById("btn-mem-recall").addEventListener('mouseup', clear);
//    document.getElementById("btm-mem-clear").addEventListener('mouseup', clear);
};

CalcController.prototype.intEntry = function(event) {
    this.model.addInteger(number);
    this.view.updateMainDisplay(this.model.curReg.value);
};

CalcController.prototype.clearEntry = function() {
    this.model.clearEntry();
    this.view.updateMainDisplay(this.model.curReg.value);
};

CalcController.prototype.clearAll = function() {
    this.m
};


