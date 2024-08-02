let userNames = ["mahad", "ali", "zeehan", "yasub", "hamza"]
if(userNames.length === 0){
console.log("your arry is empt we need to find some users!")
}else{
    //using foreach loop on arry
    userNames.forEach(oneUser =>{
    if(oneUser === "yasub"){
        console.log(`hello ${oneUser}, would you like to se a status report?`)
    }else{
        console.log(`helo ${oneUser}, thankyou for logging in again.`)
    }
})
}


