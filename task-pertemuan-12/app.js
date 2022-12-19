// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();

// Menggunakan middleware
app.use(express.json());

// Menggunakan routing (router)
app.use(router);

// Mendefinisikan port.
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`)
});
