// import di express
import express, { request, response } from "express"

// creo l'applicazione Express
const app = express();

// definisco la porta del server
const port = 3000;

//rotta principale che restituissce un testo semplice
app.get('/', (request, response) => {
response.send("Server del mio blog");
});

//avvio il server
app.listen(port, () => {
console.log("server avviato")
});