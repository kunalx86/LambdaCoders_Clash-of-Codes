import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

/* Importing data and models*/




/* CONFIGURATION */

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


/* Routes */

app.get("/", (req, res) => {
    res.send("Server is running");
})


/* Mongodb connection */

const PORT = process.env.PORT || 9000;
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log("Server started at ", PORT))

    /* Adding data */
    // User.insertMany(dataUser)

}).catch((error) => console.log(`${error} occured`))


