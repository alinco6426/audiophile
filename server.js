const dotEnv = require("dotenv");

dotEnv.config({path : "./Config.env"});


const app = require("./app");

const port = process.env.PORT || 3000;
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/audiophile-e-commerce")
.then(() => {
     console.log("Database connected successfully");
})
.catch((erro) => {
     console.log(error ,":error occured")
});

app.listen(port, () => {
     console.log(`app is running on port ${port}`)
});



