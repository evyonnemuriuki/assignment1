document.addEventListener('DOMContentLoaded',function(){
    document.querySelector("button").onclick=ageBracket
});
       
function ageBracket(){
    const age = parseInt(document.getElementById('age').value);
    let responseMessage;
    if (age >0 && age < 15) {
        responseMessage=("Gen Alpha");
    } else if (age >= 15 && age < 25) {
        responseMessage=("Gen-Z");
    } else if (age >= 25 && age < 35) {
        responseMessage=("Millenial");
    } else if (age >= 35 && age < 45) {
        responseMessage=("Gen-X");
    } else if (age >= 45 && age < 65 ) {
        responseMessage=("Bloomer");
    } else if (age >= 65 && age < 120){
        responseMessage=("Senior citizen");
    }else{
        responseMessage = ("Invalid entry")
    }
    alert(responseMessage)
}