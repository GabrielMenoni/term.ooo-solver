const fs = require('fs');

function search(myLetters, myStates){
    const lettersPath = "Misc/terms.txt"

    return new Promise((resolve, reject) => {
        let answers = [];
        
        //Read the terms file
        fs.readFile(lettersPath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            
            //Split all lines into a vector
            const linhas = data.split('\n')
        
            //Pass all words to the verify function and add to answers vector if true
            for (let i = 0; i < linhas.length; i++) {
                if(verify(myLetters, myStates, linhas[i]) === true) {
                    answers.push(linhas[i].toUpperCase().replace(/\r/g, ''));
                }
            }
            
            //return answers
            resolve(answers);
        });
        
        function verify(letters, states, word) {
            let bool = true;
            for(let i = 0; i < letters.length; i++){
                switch(states[i]) {
                    case 'V':
                        if(word[i] != letters[i]){
                            bool = false;
                        }
                        break;
                    case 'A':
                        if(word[i] === letters[i] || !word.includes(letters[i])){
                            bool = false;
                        }
                        break;
                    case 'C':
                        break;
                }
            }
            return bool;
        }
    });
}

module.exports = search;