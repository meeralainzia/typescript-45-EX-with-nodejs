// array of current user
let current_user = ["ayyan", "yasub", "mamoon" , "rayyan"]
//array of new user
let new_user = ["mohib" ,"ali" ,"yasub" , "mamoon" ,"ayyan"]
// loop through new_user to check for usernames avaibility
new_user.forEach(new_one_user =>{
    //making a comdition for username already exist and save in oue_condition variable
    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase())
   //print different meesageusing if-else statments
    if(our_condition){
     console.log(`sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`this username ${new_one_user} is avaiable`)
    }
    })




