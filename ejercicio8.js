const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList){
    let LongestWord=" "
    for (string of stringList){
        if (string.length>LongestWord.length) {
            LongestWord=string
        }
    }
     console.log(LongestWord);
        
    
    
}
findLongestWord(avengers)
