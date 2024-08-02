// creating an arry
let userNames = ["ali", "hussain" , "husaan", "ali akabar", "abbas", "umar"];
// using foreach loop on arry
userNames.forEach(oneUser => {
    if(oneUser === "ali"){
        console.log(`hello $ {oneUser}, would you like to se a status report?`)
    }else{
    console.log(`hello ${oneUser}, thankyou for logging in again.`)
     }
})
