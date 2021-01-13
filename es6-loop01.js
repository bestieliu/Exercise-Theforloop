// program to display numbers 1 to 5
// program to display text 5 times
const n = 5;


// Display a Text Five Times
// looping from i = 1 to 5
for(let i = 1;i<n;i++){
    console.log(`I love JavaScript`);
}

// Display Numbers from 1 to 5
// looping from i = 1 to 5
// in each iteration, i is increased by 1
for(let i = 1;i<n;i++){
    console.log(i); // print the value of i
}

// for loops

// for (let i=0;i<5;i++){
//    console.log(i);
// }

const names = ['shaun','mario','luigi'];
        //        0      1       2      

for(let i = 1;i<names.length;i++){
    let html = `<div>${names[i]}</div>`          // [i] is Sort position
    console.log(html);
    // 
}