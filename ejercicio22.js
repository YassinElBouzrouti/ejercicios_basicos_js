const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let veganSchedule=[]

for(food of foodSchedule){
    if(food.isVegan==true){
        veganSchedule.push(food.name)
    }else{
        for(fruit of fruits){
            if(!veganSchedule.includes(fruit)){
                veganSchedule.push(fruit)
            }
        }
    }
}

console.log(veganSchedule);

