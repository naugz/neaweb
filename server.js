/**
 * Neaweb - Neat Web Framework
 * Freeware by Stinte Ltd
 * @file    Main server file
 * @version 0.1
 * @author  John Lowvale 
 *
 * Notes:
 * Current NodeJS version for this project is NodeJS 4.x as
 * - NodeJS 0.12.x is too old
 * - IoJS   3.x is old too
 * - NodeJS 4.x has Couchbase binary library
 * - NodeJS 5.x hasn't come with Couchbase binary library yet (April 2016)
 * Beside Couchbase, ExpressJS and other popular NodeJS modules
 * are also used.
 * Client side of this project comes with Quickt (AngularJS-like)
 * which is a very light-weight library for browser JavaScript.  
 *
 * Version info:
 * 0.1 Initial version
 * 0.2 Fixed bug calling handle_post on undefined
 * 0.3 server.handle_get only handles routes, not files.
 */
"use strict";

//project modules
var server = require("./modules/server");

//constants
var SERVER_NAME      = "Neaweb";
var SERVER_VERSION   = 0.3;
var SERVER_PORT      = 80;
var DEFAULT_CHEST    = "default";
var DEFAULT_SCROLL   = "home";
var DEFAULT_TEMPLATE = "simple";

//create server
var Server = new server(
  SERVER_NAME,SERVER_VERSION,SERVER_PORT,
  DEFAULT_CHEST,DEFAULT_SCROLL,DEFAULT_TEMPLATE
);
Server.start();

//end of file