const label = document.getElementById("label");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    label.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    label.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    label.textContent = count;
}

