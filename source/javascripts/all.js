//= require_tree .

window.onload = init;

// <------ Constructors for Model/View/Controller ----->
function Model(mainVal, tempVal, memVal) {

    //Declare the registers as objects so that they can be aliased by curReg
    this.mainReg = { value: mainVal };
    this.tempReg = { value: tempVal };
    this.memReg = { value: memVal };
    this.curReg = this.mainReg;
    this.firstNumEntered = false;
    this.inOperation = false;

}
function View(mainDisplay, screenWidth) {
    this.mainDisplay = mainDisplay;
    this.screenWidth = screenWidth;
}
function Controller() {
    // functions to evaluate calculations
    // functions to evaluate "M" buttons (ex. memory recall)

}

// <----Initialize MVC, buttons ---->

function init() {
    var mainDisplay = document.getElementById("calc-display");

    var model = new Model(0, 0, null);
    var view = (mainDisplay, 10);

    //Declare event listeners for all the calculator buttons

    //Numbers
    for (var i = 0; i < 10; i++) {
        document.getElementById("btn-" + i).addEventListener('mouseup', buttonPressInt);
    }

    //Clears
    document.getElementById("btn-clear").addEventListener('mouseup', clear);
    document.getElementById("btn-clearentry").addEventListener('mouseup', clearEntry);

    //Misc
    document.getElementById("btn-decimal").addEventListener('mouseup', clear);
    document.getElementById("btn-neg").addEventListener('mouseup', clear);
    document.getElementById("btn-equals").addEventListener('mouseup', evaluate);

    //Math operations
    document.getElementById("btn-add").addEventListener('mouseup', mathOperation);
    document.getElementById("btn-sub").addEventListener('mouseup', mathOperation);
    document.getElementById("btn-mult").addEventListener('mouseup', mathOperation);
    document.getElementById("btn-div").addEventListener('mouseup', mathOperation);
    document.getElementById("btn-sqrt").addEventListener('mouseup', mathOperation);
    document.getElementById("btn-percent").addEventListener('mouseup', mathOperation);

    //Memory
    document.getElementById("btn-mem-set").addEventListener('mouseup',memClear );
    document.getElementById("btn-mem-add").addEventListener('mouseup',mathOperation);
    document.getElementById("btn-mem-sub").addEventListener('mouseup',mathOperation);
    document.getElementById("btn-mem-recall").addEventListener('mouseup', memRecall);
    document.getElementById("btm-mem-clear").addEventListener('mouseup', memClear);
}

// <--- End Init --->

// <--- Need to include these in the controller object, I think --->


//Add an integer to the current register
function buttonPressInt() {
    //Make sure we won't overflow the string
    if (String(curReg.value).length < (SCREEN_WIDTH - 2)) {
        var curInt = Number(this.getAttribute("data-intval"));
        curReg.value = (curReg.value * 10) + curInt;
        console.log(curReg.value);
    }

    refreshDisplay();
}

//Clear both registers
function clear() {
    mainReg.value = 0;
    tempReg.value = 0;
    curReg = mainReg;
    refreshDisplay();
}

//Clear the current register
function clearEntry() {
    curReg.value = 0;
    refreshDisplay();
}
//clears memory
function memClear() {
    memReg.value=0;
    refreshDisplay();
}

function memRecall()
{
    mainDisplay.innerHTML = memReg.value;
}

function memSet()
{
    mainDisplay.innerHTML = memReg.value;
}
function memSet()
{

}
function mathOperation() {
    //Steps
    //1. Check state - are we already in the middle of another op?
    //2. If in middle of operation, evaluate the math expression (call '=' method) and refresh the display
    //3. Set state that we are about to perform another operation
    //4.

    if (inOperation && firstNumEntered) {
        evaluate();
        refreshDisplay(); // factored out into View object?
    }

    switch (this.id) {
        case 'btn-add':
            break;
        case 'btn-sub':
            break;
        case 'btn-div':
            break;
        case 'btn-mult':
            break;
        case 'btn-mem-add':
            break;
        case 'btn-mem-sub':
            break;



    }
}

function evaluate() {
    // Evaluates an arithmetic op between two registers
}


function refreshDisplay() {
    //If in middle of operation,
    //  puts result of most recent operation

    mainDisplay.innerHTML = curReg.value;
}

// <---- End controller functions ---->