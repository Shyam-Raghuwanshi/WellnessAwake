console.log("I am in script js");

const cookieArray = document.cookie.split(';');
console.log(cookieArray, "this is cookies");
for (const cookie of cookieArray) {
    const [cookieName, cookieValue] = cookie.trim().split('=');
    
}

