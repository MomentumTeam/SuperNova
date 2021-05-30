if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({path : 'supernova.env'});
}
import * as C from './config';

const name : string = "barak";
console.log(C.clientId);
console.log(`Hello ${name} !`);