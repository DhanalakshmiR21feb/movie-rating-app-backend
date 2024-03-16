require("dotenv").config({path:"src/.env"});
const express=require("express");
const mongoose=require("mongoose");

const userRoutes=require("../src/routes/authRoutes");
const movieRoutes=require("../src/routes/movieRoutes");


const app=express();
const PORT=process.env.PORT;

app.use(express.json());
app.use("/api/auth",userRoutes);
app.use("/api/movies",movieRoutes);

app.get("/",(req,res)=>{
    res.send("Backend server is running");
});

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.error("Could not connect to MongoDB"));

app.listen(PORT,()=>{
    console.log(`server is listening on PORT ${PORT}`);
});

