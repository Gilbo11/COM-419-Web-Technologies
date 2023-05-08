const express = require('express');

const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/contact", (req, res)=>{
    res.render("contact")
});

app.get("/FAQ", (req, res)=>{
    res.render("FAQ")
});

app.listen(5000, ()=>{ console.log ("Server has started") });