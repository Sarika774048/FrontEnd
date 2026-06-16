
let arr = [
    [34, 67, 90],
    [100, 19, 80],
    [49, 39, 32]
];

for(let i = 0; i<arr.length; i++){
    for(let j= 0; j<arr[i].length; j++){
        console.log(arr[i][j]);
    }
}

console.log("The Number: ",arr[2][1]);

// 3 dimensional arrays

let d3 = [
    [
        [10, 20],
        [30, 40]
    ],
    [
        [50, 60],
        [70, 80] 
    ]
];

for(let i=0; i<d3.length; i++){
    for(let j =0; j<d3[i].length; j++){
        for(let k = 0; k < d3[i][j].length; k++){
            console.log(d3[i][j][k]);
        }

    }
}