const names = [ "Lisa", "Kaitlin", "Jan"]
function writeCards() {
    let newArr = []
    for (let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return newArr
}

function countDown(positiveNumber) {
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
    
}
