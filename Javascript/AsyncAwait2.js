function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username == "Sarika" && password == "java123") {
        resolve({ userId: 94827 });
      } else {
        reject("Authentication Failed: Invalid Credentials");
      }
    }, 2000);
  });
}

function fetchUserProfile(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching profile for USer Id: ${userId}`);
      resolve({
        name: "Sarika",
        role: "Developer",
      });
    }, 2000);
  });
}

function loadDashboard(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        `Dashboard fully loaded! Welcome back ${profile.name} (${profile.role})`,
      );
    }, 1500);
  });
}

async function startUserSession() {
  try {
    console.log("Starting session.....");
    let authData = await loginUser("Sarika", "java123");
    let profile = await fetchUserProfile(authData.userId);
    let finalMessage = await loadDashboard(profile);
    console.log(finalMessage);
  } catch (error) {
    console.log("Session error: ", error);
  }
}
startUserSession();
