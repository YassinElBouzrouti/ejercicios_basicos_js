const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(list) {
    newList=[]
    for (element of list) {
        if (!newList.includes(element) ){
            newList.push(element)
            console.log(newList);
            
        }
            
        }
        
    }


  removeDuplicates(duplicates)