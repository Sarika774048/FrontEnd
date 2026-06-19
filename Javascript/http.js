let data = await fetch("https://catfact.ninja/fact", { method: "GET" });

let text = await data.json();
console.log(text);

console.log("GET method");

async function testRestApi() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "GET",
  });
  console.log("Status:", data.status);
  console.log(data);
  let txt = await data.json();
  console.log(txt);
}

// testRestApi();

let object = { userId: 101, id: 101, title: "http methods", completed: true };

async function postRestApi() {
  let data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(object)
  });

  console.log(data);
}
// we should pass strings to the post method
postRestApi();


async function fetchByID(){
    console.log("Fetch by id: 101");
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/101", {
        'method' : 'GET'
    });
    let response =await data.json();
    console.log(response);
}
fetchByID();