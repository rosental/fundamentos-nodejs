const express = require ("express");
const {request, response} = require("express");

const app = express();

app.get("/courses", (request, response) => {
    //return response.send("Hello word")
    //return response.json({message: "Hello Word, Ignite!!!"})
    //json pode retornar tanto um objeto, como array, como pode retornar nenhum dado
    return response.json(["Curso1", "Curso2","Curso3"])
});
app.post("/courses", (request, response) => {
    return response.json(["Curso1", "Curso2","Curso3","Curso4"])
});

app.put("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso2","Curso3","Curso4"])
});

app.patch("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7","Curso3","Curso4"])
});

app.delete("/courses/:id", (request, response) => {
    return response.json(["Curso6", "Curso7","Curso4"])
});
//Colocar a porta que vai usar
//ex: localhost:3333
app.listen(3333);