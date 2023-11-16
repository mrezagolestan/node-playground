import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import routes from './src/routes/crmRoute'
import 'dotenv/config'

import dbConfig from './src/configs/db.config'


const app = express();
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbConfig.mongodb.user}:${dbConfig.mongodb.pass}@${dbConfig.mongodb.host}:${dbConfig.mongodb.port}/${dbConfig.mongodb.db}?authSource=${dbConfig.mongodb.authSource}`, {
    useNewUrlParser: true,
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//serving static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) =>
    res.send(`Node & express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Server is running on port ${PORT}`)
)