const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
peliculas_pequeñas=[]
peliculas_medianas=[]
peliculas_grandes=[]  
for(movie of movies){
    if(movie.durationInMinutes<100){
        peliculas_pequeñas.push(movie.name)
    }else if(movie.durationInMinutes=100 && movie.durationInMinutes<200){
        peliculas_medianas.push(movie.name)
    }else{
        peliculas_grandes.push(movie.name)
    }
}

console.log("Películas pequeñas:", peliculas_pequeñas);
console.log("Películas medianas:", peliculas_medianas);
console.log("Películas grandes:", peliculas_grandes);


