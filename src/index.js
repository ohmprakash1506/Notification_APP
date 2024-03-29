const express = require('express');
// const job = require('../cronJob');
const text = require('./router/textLocal.route');
const user = require('./router/user.route');
const order = require('./router/order.route');
const connection = require('./dbConfig/db.index')

const app = express();
const port = 3000;

app.use(express.json());

// job.runJob();

connection.once("open", () => {
    try {
        console.log(`Connected to DB`)
    } catch (error) {
        console.log(error.message)
    }
    
} )

app.use("/api/textlocal",text);
app.use("/api/user",user);
app.use("/api/order", order);

app.listen(port , () => {
    console.log(`Server is up and running ... at port ... ${port}`)
})