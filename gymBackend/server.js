const express = require("express");
const app = express();
const api = require("./routes/api");
const auth = require("./routes/auth") ;
const dbConnect = require('./config/database');
const cookieParser = require("cookie-parser");
const cors = require('cors');

dbConnect();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use("/api", api);
app.use("/auth", auth);





app.listen(4000, (req, res) => {
    console.log("listening");
})