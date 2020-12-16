// let input = prompt("Input String");


// let s="";
// for(let i =input.length-1;i>=0;i--){
// s+= input.charAt(i);
// }
// console.log(s);


// let input = prompt("Input String");

// let takeInput=[];

// let newArray=[]

// takeInput = input.split(" ");

//  console.log(takeInput);

//  for(let i=0;i<takeInput.length;i++){
//     let newWord="";
//     for(let j=0;j<takeInput[i].length;j++){
        
//         if(j==0){
//             newWord+= takeInput[i].charAt(0).toUpperCase();
//             console.log(newWord)
//        continue;
//         }
//         newWord += takeInput[i].charAt(j);

//     }
//     newArray.push(newWord);
    
//  }
//  console.log(newArray);

// console.log(s);
// ex3
// let inputArray = ["one", "two" ,"three","one","one","four","five","four","five", "five"];
// let newArray=[];
// for(let i=0;i<inputArray.length;i++){
// let check =0;
//     for(let j=0;j<inputArray.length;j++){
       
//         if (inputArray[i] === inputArray[j]){
//             check++;
//         }
//         if(check>=2){
//             inputArray.splice(j,1);
//             check--;
//         }
        
//     }

// }
// console.log(inputArray);

//ex4
let mindX =[
    {
        name : "Tuan",
        age : 27,
        salary : 1000,
        position : "senior"

    },
    {
        name : "Thanh",
        age : 18,
        salary : 1000,
        position : "Junior"

    },
    {
        name : "Vu",
        age : 20,
        salary : 1000,
        position : "Depater"

    },
    {
        name : "Thao",
        age : 25,
        salary : 1000,
        position : "Winner"

    }
]

let input ;
while(true){
    input = prompt ("C/R/U/D");
if(input === "C"){
    let name = prompt("input name");
    let age = prompt("input age");
    let salary = prompt("input salary");
    let position = prompt("input position")
    let newPerson ={
        name : name,
        age :age,
        salary : salary,
        position:position
    
    }
    mindX.push(newPerson);
}
if(input === "R"){
    mindX.forEach(function(item,index){
        console.log(`View : +${item.name} +${item.age}+${item.salary}+${item.position}`)
    }
    )
}
if(input = "U"){
    let input = prompt("input name");
    for(let i=0;i<mindX.length;i++){
        if(mindX[i].name===input){
            mindX.splice(i,1);
            let age = prompt("new age");
            let salary = Number(prompt("new salary"));
            let position = prompt("new position");
            let updatePerson = {
                name : input,
                age : age,
                salary : salary,
                position : position
                

            }
            mindX.push(updatePerson);
        }
    }
    if(input === "D"){
        let getName = prompt("insert name");
        for(let i=0;i<mindX.length;i++){
            if(mindX[i].name===input){
                mindX.splice(i,1);
    }
}

}
}

}
