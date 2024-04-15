//Get the letter in the input and force it to be uppercase
//Also if the input have the class "grey" remove letter from input
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

//Clean the classes "yellow" and "grey" and add the "green" class to a input
//param: number of the row
function bgGreen(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("gray")
    input.classList.remove("yellow")
    input.classList.add("green")
}

//Clean the classes "green" and "grey" and add the "yellow" class to a input
//param: number of the row
function bgYellow(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("green")
    input.classList.remove("gray")
    input.classList.add("yellow")
}

//Clean the classes "yellow" and "green" and add the "gray" class to a input
//Also remove the letter in the input
//param: number of the row
function bgGray(num){
    id = 'letter'+num
    input = document.getElementById(id);
    input.classList.remove("green")
    input.classList.remove("yellow")
    input.classList.add("gray")
    input.value = ''
}