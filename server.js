const express = require('express')

const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    // res.send('hello world')
    const articles = [{
        title: "test art",
        createdAt: new Date(),
        description: 'test des'
    }]
    res.render('index', {
       articles: articles 
    })
})



app.listen(5000)

