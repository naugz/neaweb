
"use strict";

//nodejs modules
var sha1 = require("sha1");

//project modules
var cb = require(process.cwd()+"/modules/cb");

class register_handler {

  constructor() {
  }
  
  handle_get(Request,Response) {
  }
  
  handle_post(Request,Response) {
    var Body = Request.body;
    
    //user object
    var User = {
      Type:            "USER",
      Username:        Body.Username,
      Password_Sha1:   sha1(Body.Username.toLowerCase()+Body.Password),
      Email:           Body.Email,
      Given_Name:      Body.Given_Name,
      Family_Name:     Body.Family_Name,
      Full_Name:       Body.Full_Name
    };       
                                      
    cb.next_id("user",function(Error,Next_Id){
      cb.insert().values(Next_Id,User).query({},
      function(Error,Results){
        if (Error)
          Response.json(Error);
        else
          Response.json({Id:Next_Id});
      });//insert
    });//counter    
  }
}

//nodejs exports
module.exports = register_handler;

//end of file