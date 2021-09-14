const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Express is online!")
})

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})