function getUppercase() {
    varinput = document.querySelectorAll(".letter");
    for(let i = 0; i< varinput.length; i++){
        if(varinput[i].classList.contains("gray")){
            varinput[i].value = ''
        } else {
            varinput[i].value = varinput[i].value.toUpperCase();
        }
    }
}

function bgGreen(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("gray")
    input.classList.remove("yellow")
    input.classList.add("green")
}

function bgYellow(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("green")
    input.classList.remove("gray")
    input.classList.add("yellow")
}

function bgGray(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("green")
    input.classList.remove("yellow")
    input.classList.add("gray")
    input.value = ''
}