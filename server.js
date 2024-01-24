const express = require('express');
const userRoute = require('./routes/userRoutes')
const projectRoute = require('./routes/projectRoutes')
const departmentRoute = require('./routes/departmentRoutes')


const app = express();
app.use(express.json());

app.use('/api', userRoute)
app.use('/api', projectRoute)
app.use('/api', departmentRoute)

app.listen('5000', ()=>{
    console.log("Server running at port 5000")
})
