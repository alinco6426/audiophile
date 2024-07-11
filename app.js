const express = require("express");

const app = express();

const cors = require("cors");

const router = require("./Router/productsRoute");

app.use(cors())
app.use("/api/audiophile/products" , router)

module.exports = app;