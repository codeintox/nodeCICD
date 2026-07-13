const express = require('express')
const app = express();
const axios = require('axios')
const path = require('path');
const hbs = require('hbs')
const fs = require('fs')
const port = 3435;

//buil-in middleware

//const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


//to set view engine

app.set("view engine","hbs");
app.set("views",templatePath);
//app.set("views",partialsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(templatePath));

//TO set template engine route

app.get("/", (req, res) => {

	res.render("index");
});

app.get("/about", (req, res) => {
        res.render("about");
        
    res.end;
 
  });


app.get("/contact",(req,res) => {
    res.render("contact");
    });
app.get("*", (req,res)=>{
	res.render("404",{
	errcmt: "Could not found",
	});
})

app.listen(port, () => {
    console.log(`The site is working on port ${port}`);
});

