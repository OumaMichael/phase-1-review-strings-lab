const currentUser = 'Grace Hopper';
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
//welcomeMessage becomes: "Welcome to Flatbook, Grace Hopper!"
const excitedWelcomeMessage = welcomeMessage.toUpperCase();
//excitedWelcomeMessage becomes: "WELCOME TO FLATBOOK, GRACE HOPPER!"
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`
//The .slice(0, 1) method extracts a portion of the string, starting at index 0 and stopping before index 1. This effectively gets just the first character of currentUser (which is "G" in "Grace Hopper").
