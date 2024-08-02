var userNames = ["mahad", "ali", "zeehan", "yasub", "hamza"];
if (userNames.length === 0) {
    console.log("your arry is empt we need to find some users!");
}
else {
    //using foreach loop on arry
    userNames.forEach(function (oneUser) {
        if (oneUser === "yasub") {
            console.log("hello ".concat(oneUser, ", would you like to se a status report?"));
        }
        else {
            console.log("helo ".concat(oneUser, ", thankyou for logging in again."));
        }
    });
}
