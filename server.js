const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(errorHandler);
connectDB();

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.get("/", (req, res) => {
    res.status(200).json({message: "Welcome to the root endpoint!"});
})

app.listen(port, () => {
    console.log(`server running on port ${port}`);
})