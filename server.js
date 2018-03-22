var express = require('express')
var app = express()
var port = process.env.PORT || 8080

var movies = {
  avengers: {
    title: 'Avengers',
    longTitle: 'Avengers: Infinity War',
    link: '/avengers',
    description: 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
    directors: ['Anthony Russo', 'Joe Russo'],
    imgLink: '/images/avenger-card.jpg',
    homeImgLink: 'https://news.marvel.com/wp-content/uploads/2018/03/AIW_master-1-960x540.jpg'
  },
  transformers: {
    title: 'Transformers',
    longTitle: 'Transformers: The Last Knight',
    link: '/transformers',
    description: 'Autobots and Decepticons are at war, with humans on the sidelines. Optimus Prime is gone. The key to saving our future lies buried in the secrets of the past, in the hidden history of Transformers on Earth.',
    directors: ['Michael Bay'],
    imgLink: '/images/transformer-card.jpg',
    homeImgLink: 'https://i.ytimg.com/vi/e_uBTsgRJlk/maxresdefault.jpg'
  },
  black: {
    title: 'Black Panther',
    longTitle: 'Black Panther',
    link: '/black-panther',
    description: 'T\'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T\'Challa\'s father\'s mistake.',
    directors: ['Ryan Coogler'],
    imgLink: '/images/black-card.jpg',
    homeImgLink: 'https://longreadsblog.files.wordpress.com/2018/02/black-panther.jpg?w=1680'
  }
}

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.get('/', function (request, response) {
  response.render('pages/index', {
    movies: movies
  })
})
app.get('/avengers', function (request, response) {
  response.render('pages/movie-data', {
    movies: movies,
    movie: movies['avengers']
  })
})
app.get('/transformers', function (request, response) {
  response.render('pages/movie-data', {
    movies: movies,
    movie: movies['transformers']
  })
})
app.get('/black-panther', function (request, response) {
  response.render('pages/movie-data', {
    movies: movies,
    movie: movies['black']
  })
})

app.listen(port)
