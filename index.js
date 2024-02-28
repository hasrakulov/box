let fatherBox = document.querySelector('.box-father');
let box = document.querySelector('.box');
let center = document.querySelector('.btn1');
let around = document.querySelector('.btn2');
let between = document.querySelector('.btn3');
let end = document.querySelector('.btn4');


fatherBox.style.justifyContent = "center"
center.onclick = () => {
    if (fatherBox.style.justifyContent == "start") {
        fatherBox.style.justifyContent = "center"
    } else {
        fatherBox.style.justifyContent = "center"
    }
}
around.onclick = () => {
    if (fatherBox.style.justifyContent == "space-between") {
        fatherBox.style.justifyContent = "space-around"
    } else {
        fatherBox.style.justifyContent = "space-around"
    }
}
between.onclick = () => {
    if (fatherBox.style.justifyContent == "center") {
        fatherBox.style.justifyContent = "space-between"
    } else {
        fatherBox.style.justifyContent = "space-between"
    }
}
end.onclick = () => {
    if (fatherBox.style.justifyContent == "space-around") {
        fatherBox.style.justifyContent = "end"
    } else {
        fatherBox.style.justifyContent = "end"
    }
}