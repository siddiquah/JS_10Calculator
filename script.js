let output = document.getElementById('output');

function display(num) {
    output.value += num;
}

function calculate() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        console.log(error);
    }
}

function clr() {
    output.value = "";
}

function backspace() { 
    output.value = output.value.slice(0, -1);
}