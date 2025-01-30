const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
    averageWord=0;
    averageWord1=0;
    averageWord2=0;
    
    for(element of list){
        if (typeof element==="number") {
            averageWord1+=element;
        }
        if(typeof element==="string"){
            averageWord2+=element.length
        }
        averageWord=(averageWord1+averageWord2) / list.length;
    }
    console.log(averageWord);
   
}


averageWord(mixedElements);
