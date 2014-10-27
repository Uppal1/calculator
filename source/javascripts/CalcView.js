
var CalcView = function(mainDisplay, memSetDisplay, opSetDisplay) {
    this.mainDisplay = mainDisplay;
    this.memSetDisplay = memSetDisplay;
    this.opSetDisplay = opSetDisplay;
};

//Update the main calculator display
CalcView.prototype.updateMainDisplay = function(value) {
    this.mainDisplay.innerHTML = value;
};

//Update "memory set" indicator
CalcView.prototype.updateMemSetDisplay = function(value) {
    this.memSetDisplay.innerHTML = value;
};

//Update "operation set" indicator
CalcView.prototype.updateOpSetDisplay = function(value) {
    this.opSetDisplay.innerHTML = value;
};