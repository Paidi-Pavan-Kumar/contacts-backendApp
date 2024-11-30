const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);
app.use(express.json());
connectDB();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.status(200).json({message: "hi from backend"});
})

app.use("/api/contacts", require("./routes/contactRoutes"));


app.listen(port, () => {
    console.log(`server running on port ${port}`);
})