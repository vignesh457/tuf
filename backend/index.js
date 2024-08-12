const express =  require('express');
const bannerRouter = require("./router/bannerRoute");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(bannerRouter);

app.listen(process.env.PORT,()=>{
    console.log("listening on port " +process.env.PORT);
});