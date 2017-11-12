var getUser = (id,callback) => {
    var user ={
        id:id,
        name:'amit'
    };
    
    setTimeout(() => {
        callback(user);
    },3000)
    
};

getUser(3,(userObj) => {
  console.log(userObj);
});