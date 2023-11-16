import mongoose from 'mongoose';
import dbConfig from '../configs/db.config';

//connect
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbConfig.mongodb.user}:${dbConfig.mongodb.pass}@${dbConfig.mongodb.host}:${dbConfig.mongodb.port}/${dbConfig.mongodb.db}?authSource=${dbConfig.mongodb.authSource}`, {
    useNewUrlParser: true,
});
console.info('Mongoose: Connected to MongoDB');

export default mongoose;