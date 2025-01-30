const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  let mayores=[]
  let menores=[]

  for(user of users){
    if(user.years>=18){
        mayores.push(user)
        
        
    }else if (user.years<18) {
        menores.push(user)
        
        
    } 
  }
  console.log("Usuarios mayores de edad:", mayores);

  console.log("Usuarios menores de edad:", menores);