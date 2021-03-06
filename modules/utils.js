/**
 * Neaweb - Neat Web Framework in Full Stack JavaScript
 * Freeware by Stitec Ltd
 * @file    Utilities file 
 * @version 0.1
 * @author  John Lowvale
 */
"use strict";

//nodejs modules
var crypto = require("crypto"); 

/**
 * Utilities class
 */
class utils {

  /**
   * Constructor
   */
  constructor() {
  }
                
  /**
   * SHA1 hash
   */
  static sha1(Text) {
    var Sha1 = crypto.createHash("sha1");
    Sha1.update(Text);
    return Sha1.digest("hex");    
  }
              
  /**
   * SHA256 hash
   */
  static sha256(Text) {
    var Sha256 = crypto.createHash("sha256");
    Sha256.update(Text);
    return Sha256.digest("hex");    
  }   
  
  /**
   * Get a date from today
   */                     
  static date_from_today(Day_Delta) {
    var Result = new Date();
    Result.setDate(Result.getDate()+Day_Delta);
    return Result;
  }
}

//nodejs exports
module.exports = utils;

//end of file