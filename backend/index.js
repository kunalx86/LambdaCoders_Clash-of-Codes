/* Importing data and models*/
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import fileUpload from "express-fileupload";
import { data } from "./data.js";

import User from "./model/User.js";


/* CONFIGURATION */
console.log(data.length)
dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(fileUpload({
    useTempFiles: true,
}));


/* Routes */

app.get("/", (req, res) => {
    res.send("Server is running");
})

app.use("/user", userRouter);

/* Mongodb connection */

const PORT = process.env.PORT || 9000;
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log("Server started at ", PORT))

    /* Adding data */
    // User.insertMany(data)

}).catch((error) => console.log(`${error} occured`))


