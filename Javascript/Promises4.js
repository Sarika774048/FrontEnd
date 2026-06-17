function step1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 executed!");
      resolve();
    }, 3000);
  });
}

function step2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2 executed!");
      resolve();
    }, 4000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 3 executed!");
      resolve();
    }, 2000);
  });
}
function step4() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 4 executed!");
      resolve();
    }, 1500);
  });
}

step1()
.then(step2)
.then(step3)
.then(step4)
.then( () => {
  console.log("All steps are successful!");
} )
.catch( () => {
  console.log("Promise failed!");
});