for(let i=1; i<=5; i++){
    console.log("*");
}
console.log("While loop");
let i = 1;
while(i <= 5){
    console.log("*");
    i++;
}
console.log("Do-while loop");
i =1;
do{
    console.log("*");
    i++;
}while(i <= 5);

console.log("Pattern programming: ")
// pattern printing

for(let j=1; j<=5; j++){
let star = "";
for(let i=1; i<=5; i++){
    star += "* ";
}
console.log(star);
} 

console.log("Pattern - 2");


let space;
for(i=1; i<=5; i++){
    let star="";
    for(j = 1; j<=5; j++){
        if(i == 1 || i == 5 || j == 1 || j == 5){
            star += "* ";
        }else{
            star+="  ";
        }

    }
    console.log(star);
}

console.log("Pattern 3");

let n = 11;
console.log(n/2);
for(i= 1; i<=n; i++){
    rows = "";
    for(j = 1; j<=n; j++){
        if(i == 1|| i == n|| j== 1|| j == n || i == (Math.ceil(n/2)) || j == Math.ceil((n /2)) || i == j || i == (n -j+1) || i + j == Math.ceil(n/2 +1) || i - j == Math.floor(n /2) || j - i == Math.floor(n /2) || i + j == Math.ceil(n + n/2)){
        rows+= "* ";
        }else{
            rows += "  ";
        }

    }
    console.log(rows);
}