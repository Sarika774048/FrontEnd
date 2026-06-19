
// fetch api using promise chaining

// fetch("https://catfact.ninja/fact")
// .then( (res) => res.text())
// .then((data) =>{console.log(data) 
//   let txt = JSON.parse(data); 
//   console.log(txt);
//   console.log(txt.fact);;
//   console.log(txt.length)
//  })
// .catch("API fetch failed");


// using async and await


async function fetchCatFacts(){
    try{
    console.log("Using async and await");
    let data = await fetch("https://catfact.ninja/fact");
    let txt = await data.json();
    console.log(txt);
    }catch(error){
        console.log(error);
    }

}
fetchCatFacts();