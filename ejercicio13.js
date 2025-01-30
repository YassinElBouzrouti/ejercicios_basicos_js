const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, nameToFind) {      
    
    if(nameList.includes(nameToFind)){
        console.log("true", nameList.indexOf(nameToFind));
        
    }else{
        console.log("false");
        
}
    
  }

  nameFinder(names, "Tony")