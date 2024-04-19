//Verify if the input received is a letter, remove if is not a letter
//Also forces the letter to be Uppercase
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

//Function to send the inputs to the algortim
function sendWords(){
    closeTutorial();

    letters = document.querySelectorAll(".letter");

    let values = [];
    let states = [];


    for(let i = 0; i < letters.length; i++){
        //If any of the input is colores and don't contains a letter, send an alert.
        if(!letters[i].classList.contains("gray") && letters[i].value == ''){
            alert("Preencha todos os campos diferentes de cinza.");
            return;
        }

        //Insert all values and colors to the arrays
        values.push(letters[i].value.toLowerCase());
        if(letters[i].classList.contains("green")){
            states.push("V");
        } else if(letters[i].classList.contains("yellow")){
            states.push("A");
        } else {
            states.push("C");
        }
    }

    //If all of the inputs are "gray", send an alert.
    if(states.every(elemento => elemento === "C")){
        alert("Preencha pelo menos um campo.");
        return;
    }

    //Make the request to the server
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/words", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        //When done, receive the answers in possibleWords
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
            response = JSON.parse(xhr.responseText);
            possibleWords = response.resultado;

            //Show the responses div and print possibleWords
            div = document.getElementById("responses");
            div.classList.remove("hidden");
            document.getElementById("words").innerHTML = possibleWords.join(",  ");
        }
    };
    
    xhr.send(JSON.stringify({values: values, states: states}));

    document.addEventListener('click', clickOutsideAnswers);
}

//Close the responses div
function closeResponses(){
    div = document.getElementById("responses");
    div.classList.add("hidden");

    document.removeEventListener('click', clickOutsideAnswers);
}

//Open tutorialbox div
//Also verify if is not already open
function openTutorial(){
    closeResponses();
    div = document.getElementById("tutorialbox");

    if (!div.classList.contains("hidden")){
        div.classList.add("hidden")
    } else {
        div.classList.remove("hidden");
    }

    document.addEventListener('click', clickOutsideTutorial);
}

//Close tutorialbox div
function closeTutorial(){
    div = document.getElementById("tutorialbox");
    div.classList.add("hidden");

    document.removeEventListener('click', clickOutsideTutorial);
}

//Function to close tutorial when user click outside of the div
function clickOutsideTutorial(event) {
    const div = document.getElementById('tutorial');
    if (!div.contains(event.target) && !event.target.closest('#tutorialbox')) {
        closeTutorial();
    }
}

//Function to close response when user click outside of the div
function clickOutsideAnswers(event) {
    const div = document.getElementById('responses');
    if (!div.contains(event.target) && !event.target.closest('#search')) {
        closeResponses();
    }
}