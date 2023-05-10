const express = require('express');
const sqlite3 = require('sqlite3').verbose();


const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const db = new sqlite3.Database("database.db", err=>{
  if(err){
      console.err(err.message);
  }
  console.log("Connected to the database");
});




app.get("/", (req, res)=>{
    res.render("index")
});

app.get("/contact", (req, res)=>{
    res.render("contact")
});

app.get("/FAQ", (req, res)=>{
    res.render("FAQ")
});

app.get("/stages", (req, res)=>{
    res.render("stages")
});



app.get('/red_stage', (req, res) => {
  db.all('SELECT * FROM red_stage', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }
    res.render('red_stage', { band: rows });
  });
});

app.get('/blue_stage', (req, res) => {
  db.all('SELECT * FROM blue_stage', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      return;
    }
    res.render('blue_stage', { band: rows });
  });
});

  

app.listen(5000, ()=>{ console.log ("Server has started") });