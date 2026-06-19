require('dotenv').config();
const MY_API_KEY= process.env.MY_API_KEY;

async function getMethod(){
    let res = await fetch("https://api.restful-api.dev/objects", {
        'method' : 'GET'
    });
    let data = await res.json();
    console.log(data);
}


let objectData = {
    name : "Apple MackBook Pro 17",
    data : {
        year : 2027,
        price : 20000,
        cpuModel : "M5 chip",
        HardDiskSize  : "1TB"
    }
}

async function postMethod(){
    console.log("Executing POST methods...");
    let text = await fetch("https://api.restful-api.dev/objects", {
        'method' : 'POST',
        'headers' : {
            'content-type' : 'application/json',
            'accept' : 'application/json',
            'x-api-key' :MY_API_KEY,
        },
        'body': JSON.stringify(objectData)
    });

    let serverData = await text.json();
    console.log("POST response from Server: ", serverData);
    return serverData.id;

}



async function putMethod(itemId){
    console.log("Executing Put Method: ", itemId);
    let data = await fetch(`https://api.restful-api.dev/objects/${itemId}`, {
        'method' : 'PUT',
        'headers' : {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'x-api-key' : MY_API_KEY,
        },
        'body' : JSON.stringify({
            name : "MacBook Neon",
            data : {
                year : 2027,
                price : 4000,
                cpuModel : "M5 chip",
                HardDiskSize: "2TB"
            }
        })
    });

    let serverData = await data.json();
    console.log("PUT Response from server: ", serverData);
    
}

async function patchMethod(id){
    let data = await fetch(`https://api.restful-api.dev/objects/${id}`, {
        'method' : 'PATCH',
        'headers' : {
            'content-type' : 'application/json',
            'accept' : 'application/json',
            'x-api-key' : MY_API_KEY,
            },
        'body' : JSON.stringify({
                name : "Apple MacBook Neon 2027"
            })
    });

    let serverData = await data.json();
    console.log("Server Data from Patch Method", serverData);

}

async function deleteMethod(id){
    let data = await fetch(`https://api.restful-api.dev/objects/${id}`, {
        'method' : 'DELETE',
        'x-api-key' : MY_API_KEY,
    });

    let serverData = await data.json();
    console.log("Data deleted:", serverData);
}

async function startSession(){
    try{
        await getMethod();

        let generatedId = await postMethod();

        if(generatedId){
            await putMethod(generatedId);
            await patchMethod(generatedId);
            await deleteMethod(generatedId);
        }

      
    }catch(error){
        console.error("Pipeline failure: ", error);
    }
}

startSession();