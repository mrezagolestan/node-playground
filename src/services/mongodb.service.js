import dbConfig from '../configs/db.config'


//import { MongoClient } from "mongodb";
const connectionString = `mongodb://${dbConfig.mongodb.user}:${dbConfig.mongodb.pass}@${dbConfig.mongodb.host}:${dbConfig.mongodb.port}/${dbConfig.mongodb.db}?authSource=${dbConfig.mongodb.authSource}`;
console.log(connectionString);

// const client = new MongoClient(connectionString);
//
// let conn;
// try {
//     conn = await client.connect();
// } catch(e) {
//     console.error(e);
// }
// let db = conn.db(${dbConfig.mongodb.db});
let db;
export default db;