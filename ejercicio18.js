const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]

for (element of placesToTravel){
    if(element.id === 40|| element.id === 11){
        placesToTravel.splice(placesToTravel.indexOf(element),1)
        
        
    }
}
console.log(placesToTravel);
