const express = require ("express")
const path= require("path")
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname,"public")))

app.get("/", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","index.html")))
app.get("/babbage", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","babbage.html")))
app.get("/berners-lee", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","berners-lee.html")))
app.get("/clarke", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","clarke.html")))
app.get("/hamilton", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","hamilton.html")))
app.get("/hopper", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","hopper.html")))
app.get("/lovelace", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","lovelace.html")))
app.get("/turing", (rerq,res) => res.sendFile(path.resolve(__dirname, "views","turing.html")))


app.listen(port,()=> console.log(`Se levanto con exito el servidor en http://localhost:${port}`));


