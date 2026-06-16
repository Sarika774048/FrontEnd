// ways to create string

// 1 double quotes
let str1 = "My first string";
console.log(str1);
// 2 single quotes
let str2 = 'My second string';
console.log(str2);
let name1 = "Sarika";
// 3 backticks
let str3 = `My name is ${name1}`;
console.log(str3);
// 4 using new keyword
let str4 = new String("My fourth string");
console.log(str4);

let s1 = "JavaScript";
let s2 = "JavaScript";
let s3 = "JavaScript";
// there is no way to compare strings references in javascript
console.log(s1 == s2);
console.log(s2 == s3);

console.log("Java".concat("Script"));
console.log(s1.concat(" as a Programming Language"));


// string methods

let rawBigData = "   #USER_ID:94827__name:sArIkA__role:DEVELOPER__status:active_verification:PENDING#  |  #USER_ID:10294__name:eMiLy_sMiTh__role:ANALYST__status:inactive_verification:APPROVED#  |  #USER_ID:58392__name:rItHiK_sHaRmA__role:MANAGER__status:active_verification:PENDING#   ";
rawBigData = rawBigData.replaceAll("#", "");
let users = rawBigData.split("|");
console.log("Users: ", users);
let user= [];
for(let i=0; i<users.length; i++){
    user[i] = users[i].trim().split("__");
}
console.log(user);

let userId;
let namee;
let role;
let status;
let UniqueUser;
let cleanedDatabase = [];
for(let i=0; i<user.length; i++){
        user_id = user[i][0].split(":")[1];
        namee = user[i][1].split(":")[1].toLowerCase();
        role = user[i][2].split(":")[1].toLowerCase();
        status = user[i][3].split(":")[2].toLowerCase();
    console.log(`
            User Id : ${user_id},
            Name    : ${namee},
            Role    : ${role},
            Status  : ${status},
        `);
        
        UniqueUser = {
            id : user_id,
            name : namee,
            role :role,
            status : status
        }
        cleanedDatabase.push(UniqueUser);
}

console.log("Cleaned Database: ");
console.log(cleanedDatabase);




