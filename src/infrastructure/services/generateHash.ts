/**
 * something is wrong with bcrypt 
 *  - does not work properly
 *  - this might be some dependencies to use bcrypt in nodejs
 *  - see its github
 *  - for now, I skip bcrypt password for database
 *  - when implementing in real server, you can implement this
 **/
const bcrypt = require('bcrypt');

const saltRounds = 10;

type generateHashType = ( password: string ) => string; 

const generateHash: generateHashType =  ( password: string ) => {
  //console.log("return password");
  //return password;
  return bcrypt.hashSync( password, saltRounds );
}

console.log(generateHash("satoshi"));

export default generateHash;
