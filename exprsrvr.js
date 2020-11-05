const exprs=require("express");
const app=exprs();
const bdyPrsr=require("body-parser");
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.get("/calc",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
    // console.log(__dirname)
});
app.use(bdyPrsr.urlencoded({extended:true}));
app.post("/calc",(req,res)=>{res.send(
  `Adding them to get:${
    parseInt(req.body.v1) + parseInt(req.body.v2)
  }<br> Subtracting them to get:${parseInt(req.body.v1) - parseInt(req.body.v2)}
  <br> Multiplying them to get:${parseInt(req.body.v1) * parseInt(req.body.v2)}
  <br> Dividing them to get:${Number(req.body.v1) / Number(req.body.v2)}`
  );
console.log(req.body);
})
app.get("/contact", (req, res) => {
  res.send("kyun bhai...bhag jao!");
});
app.listen(3000,(req,res)=>{console.log("Server is running now")});
