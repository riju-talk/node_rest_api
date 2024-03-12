const express = require("express")
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))

let movies = [
    {
        id: 1,
        title: "Schindler's List",
        director: "Steven Spielberg",
        releaseDate: "1993-11-30"
    },
    {
        id: 2,
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        releaseDate: "1994-10-14"
    },
    {
        id: 3,
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseDate: "1972-03-24"
    },
    {
        id: 4,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        releaseDate: "2008-07-18"
    },
    {
        id: 5,
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        releaseDate: "1994-10-14"
    },
    {
        id: 6,
        title: "Forrest Gump",
        director: "Robert Zemeckis",
        releaseDate: "1994-07-06"
    },
    {
        id: 7,
        title: "Inception",
        director: "Christopher Nolan",
        releaseDate: "2010-07-16"
    },
    {
        id: 8,
        title: "The Matrix",
        director: "Lana Wachowski, Lilly Wachowski",
        releaseDate: "1999-03-31"
    },
    {
        id: 9,
        title: "Fight Club",
        director: "David Fincher",
        releaseDate: "1999-10-15"
    },
    {
        id: 10,
        title: "Goodfellas",
        director: "Martin Scorsese",
        releaseDate: "1990-09-19"
    }
];

app.get("/movie",(req,res)=>{
    res.json(movies)
})

app.get("/movie/:id",(req,res)=>{
    const id =  parseInt(req.params.id)
    for(let movie of movies){
        if(movie.id===id){
            res.json(movie)
            return
        }
    }
    res.sendStatus(400)
})


app.post("/movie",(req,res)=>{
    const movie = req.body;
    console.log(movie)
    movies.push(movie)
    res.send("Movie is added")
})

app.put("/movie/:id",(req,res)=>{
    movies.forEach(element => {
        if(element.id===parseInt(req.params.id)){
            element.title=req.body.title
            element.director=req.body.director
            element.releaseDate=req.body.releaseDate
            res.send("Movie Data changed")
        }
    });
})

app.delete("/movie/:id",(req,res)=>{
    const id = req.params.id;
    movies.forEach(element => {
        if(element.id===parseInt(req.params.id)){
            console.log(element)
        }
    });
    movies = movies.filter(movie => {return movie.id != id});
    res.send("Movie is removed")
})
app.listen(port,()=>console.log(`Server is running on port ${port}`))