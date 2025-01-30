const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
       sum=0;
       for (let index = 0; index < numberList.length; index++) {
        const number = numberList[index];
        sum += number
       }
       console.log(sum);
    

  
}
sumNumbers(numbers);