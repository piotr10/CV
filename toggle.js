console.log();
let toggleBtn = document.querySelector('.toggleBtn');
let toggleBtn2 = document.querySelector('.toggleBtn2');
let toggleBtn3 = document.querySelector('.toggleBtn3');
let containerPlus = document.querySelector('.containerPlus');
let containerPlus2 = document.querySelector('.containerPlus2');
let containerPlus3 = document.querySelector('.containerPlus3');

toggleBtn.onclick = function(){
    containerPlus.classList.toggle('active');
}

toggleBtn2.onclick = function(){
    containerPlus2.classList.toggle('active');
}

toggleBtn3.onclick = function(){
    containerPlus3.classList.toggle('active');
}


