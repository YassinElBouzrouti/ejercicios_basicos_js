const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'code',
  ];
  function repeatCounter(list) {
    wordCount={}
    for(word of words){
      if(!wordCount[word]){
        wordCount[word]=0
      }
      wordCount[word]++
    }
  console.log(wordCount);
  
}


repeatCounter(words)