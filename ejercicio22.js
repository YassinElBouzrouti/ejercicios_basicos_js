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
let i=0
for(food of foodSchedule){
    if(food.isVegan){
        veganSchedule.push(food)
    }else{
        veganSchedule.push({
            name:fruits[i],
            isVegan:true,
        })
        i++
    }
}
console.log(veganSchedule);

