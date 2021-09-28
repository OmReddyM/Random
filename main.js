function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let reasons = ["You are always hiding from others", "You always cheat", "You're too bossy", "You always want everything to be your way"];
function DisplayRandomReason() {
    window.alert(reasons[getRandomInt(reasons.length)]);    
}
function DisplayAllReasons() {
    window.alert(reasons);       
}
