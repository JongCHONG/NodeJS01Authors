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

  if (author) {
    res.send( `${author.name}, ${author.nationality}` )
  } else {
    res.status(404).send("Not found") //si api n'est pas prêt
  }
})

//Exercice 3
app.get('/authors/:index/books', (req, res) => {
  const { index } = req.params
  const book = authors[index - 1].books

  res.send( book.join(', ') )
})

//Exercice 4
app.get('/json/authors/:id', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  res.json({
    name: `${author.name}`,
    nationality: `${author.nationality}`
  })
})

app.get('/json/authors/:id/books', (req, res) => {
  const { id } = req.params
  const author = authors[id - 1]

  res.json({
    books: author.books
  })
})


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})