//Get the letter in the input and force it to be uppercase
//Also if the input have the class "grey" remove letter from input
function getUppercase() {
    varinput = document.querySelectorAll(".letter");

    const regex = /^[a-zA-Z]*$/;
    for(let i = 0; i< varinput.length; i++){

        if(!regex.test(varinput[i].value)){
            varinput[i].value = '';
        }

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
    id = 'letter'+num;
    input = document.getElementById(id);
    input.classList.remove("gray");
    input.classList.remove("yellow");
    input.classList.add("green");
    input.disabled = false;
}

//Clean the classes "green" and "grey" and add the "yellow" class to a input
//param: number of the row
function bgYellow(num){
    id = 'letter'+num;
    input = document.getElementById(id);
    input.classList.remove("green");
    input.classList.remove("gray");
    input.classList.add("yellow");
    input.disabled = false;
}

//Clean the classes "yellow" and "green" and add the "gray" class to a input
//Also remove the letter in the input
//param: number of the row
function bgGray(num){
    id = 'letter'+num;
    input = document.getElementById(id);
    input.classList.remove("green");
    input.classList.remove("yellow");
    input.classList.add("gray");
    input.value = '';
    input.disabled = true;
}

function sendWords(){
    closeTutorial();

    letters = document.querySelectorAll(".letter");

    let values = [];
    let states = [];


    for(let i = 0; i < letters.length; i++){

        if(!letters[i].classList.contains("gray") && letters[i].value == ''){
            alert("Preencha todos os campos diferentes de cinza.");
            return;
        }

        values.push(letters[i].value.toLowerCase());
        if(letters[i].classList.contains("green")){
            states.push("V");
        } else if(letters[i].classList.contains("yellow")){
            states.push("A");
        } else {
            states.push("C");
        }
    }

    if(states.every(elemento => elemento === "C")){
        alert("Preencha pelo menos um campo.");
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/words", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            response = JSON.parse(xhr.responseText);
            possibleWords = response.resultado;

    div = document.getElementById("responses");
    div.classList.remove("hidden");
    document.getElementById("words").innerHTML = possibleWords.join(",  ");
        }
    };
    
    xhr.send(JSON.stringify({values: values, states: states}));

    document.addEventListener('click', clickOutsideAnswers);
}

function closeResponses(){
    div = document.getElementById("responses");
    div.classList.add("hidden");

    document.removeEventListener('click', clickOutsideAnswers);
}

function openTutorial(){
    closeResponses();
    div = document.getElementById("tutorialbox");
    div.classList.remove("hidden");

    document.addEventListener('click', clickOutsideTutorial);
}

function closeTutorial(){
    div = document.getElementById("tutorialbox");
    div.classList.add("hidden");

    document.removeEventListener('click', clickOutsideTutorial);
}

function clickOutsideTutorial(event) {
    const div = document.getElementById('tutorial');
    if (!div.contains(event.target) && !event.target.closest('#tutorialbox')) { // Verifica se o clique ocorreu fora da div
        closeTutorial();
    }
}

function clickOutsideAnswers(event) {
    const div = document.getElementById('responses');
    if (!div.contains(event.target) && !event.target.closest('#search')) { // Verifica se o clique ocorreu fora da div
        closeResponses();
    }
}