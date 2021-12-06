const express = require("express")
const app = express()
// const axios = require('axios')
const port = 5000

var authors = [
  {
      name: "Lawrence Nowell",
      nationality: "UK",
      books: ["Beowulf"]
  },
  {
      name: "William Shakespeare",
      nationality: "UK",
      books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
  },
  {
      name: "Charles Dickens",
      nationality: "US",
      books: ["Oliver Twist", "A Christmas Carol"]
  },
  {
      name: "Oscar Wilde",
      nationality: "UK",
      books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
  },
]

//Exercice 1
app.get('/', (req, res) => {
  res.send("Authors API")
})

//Exercice 2
app.get('/authors/:index', (req, res) => {
  const { index } = req.params
  const author = authors[index - 1]
  res.send( `${author.name}, ${author.nationality}` )
})

//Exercice 3
app.get('/authors/:index/books', (req, res) => {
  const { index } = req.params
  const books = authors[index - 1].books
  res.send( books.join(', ') )
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})