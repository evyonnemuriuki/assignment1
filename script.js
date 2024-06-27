document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const age = parseInt(document.getElementById('age').value);
    let responseMessage;

    if (age < 15) {
        responseMessage = 'Hello' ${username}, 'you are a Gen Alpha.';
    } else if (age >= 15 && age < 25) {
        responseMessage = "Hello" ${username}, "you are Gen-Z.";
    } else if (age >= 25 && age < 35) {
        responseMessage = "Hello" ${username}, "you are a millenial.";
    } else if (age >= 35 && age < 45) {
        responseMessage = Hello ${username}, you are a bloomer.;
    } else if (age >= 45 && age < 65 ) {
        responseMessage = Hello ${username}, you are Gen-X.;
    } 
    } else {
        responseMessage = Hello ${username}, you are a senior citizen.;
    }

    document.getElementById('response').textContent = responseMessage;
    
});