function add(){
    const input1 = document.getElementById("val1");
    const inputValue1 = Number(input1.value);
    const input2 = document.getElementById("val2");
    const inputValue2 = Number(input2.value);
    let x = (inputValue1 + inputValue2);
    var y = document.getElementById("box");
    y.querySelector(".result").value = x;
}

function subtract(){
    const input1 = document.getElementById("val1");
    const inputValue1 = Number(input1.value);
    const input2 = document.getElementById("val2");
    const inputValue2 = Number(input2.value);
    let x = (inputValue1 - inputValue2);
    var y = document.getElementById("box");
    y.querySelector(".result").value = x;
}

function multiply(){
    const input1 = document.getElementById("val1");
    const inputValue1 = Number(input1.value);
    const input2 = document.getElementById("val2");
    const inputValue2 = Number(input2.value);
    let x = (inputValue1 * inputValue2);
    var y = document.getElementById("box");
    y.querySelector(".result").value = x;
}

function divide(){
    const input1 = document.getElementById("val1");
    const inputValue1 = Number(input1.value);
    const input2 = document.getElementById("val2");
    const inputValue2 = Number(input2.value);
    let x = (inputValue1 / inputValue2);
    var y = document.getElementById("box");
    y.querySelector(".result").value = x;
}

