// import di express
import express, { request, response } from "express"

// creo l'applicazione Express
const app = express();

// configuriamo la cartella public per gli asset statici
app.use(express.static('public'));

// definisco la porta del server
const port = 3000;

// array con la lista dei post del blog
const posts = [
  {
    id: 1,
    title: 'Il mio primo post',
    content: 'Questo è il contenuto del mio primo post sul blog.',
    image: 'post1.jpg',
    tags: ['blog', 'primo post', 'benvenuto']
  },
  {
    id: 2,
    title: 'Come imparare JavaScript',
    content: 'JavaScript è uno dei linguaggi più usati nel web.',
    image: 'post2.jpg',
    tags: ['javascript', 'programmazione', 'web']
  },
  {
    id: 3,
    title: 'Introduzione a React',
    content: 'React è una libreria JavaScript per costruire interfacce utente.',
    image: 'post3.jpg',
    tags: ['react', 'javascript', 'frontend']
  },
  {
    id: 4,
    title: 'Node.js e il backend',
    content: 'Node.js ci permette di usare JavaScript anche sul server.',
    image: 'post4.jpg',
    tags: ['nodejs', 'backend', 'javascript']
  },
  {
    id: 5,
    title: 'Express per le API',
    content: 'Express è un framework per creare API con Node.js.',
    image: 'post5.jpg',
    tags: ['express', 'api', 'backend']
  }
];

//rotta principale che restituissce un testo semplice
app.get('/', (request, response) => {
response.send("Server del mio blog");
});

// rotta che restituisce la lista dei post
app.get('/bacheca', (request, response) => {
response.json(posts);
});

//avvio il server
app.listen(port, () => {
console.log("server avviato")
});