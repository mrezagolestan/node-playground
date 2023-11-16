import express from 'express';
import bodyParser from "body-parser";
import mongooseRoute from './src/routes/mongooseRoute'



const app = express();
const PORT = 3000;




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//serving static files
app.use(express.static('public'));

mongooseRoute(app);

app.get('/', (req, res) =>
    res.send(`Node & express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your Server is running on port ${PORT}`)
)