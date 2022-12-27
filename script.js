
function countWord() {

    let sentence = document.getElementById("evaluatedText").value;
    let counter = 0;
    let arrayOfWords = sentence.split(' ');

    words = arrayOfWords.filter( word => word!=='');
    
    words.forEach( word => counter++);

    console.log(counter);
    display = document.getElementById("wordCount");
    display.innerHTML =counter;
}
