const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/todo');

const PORT = 4000
const app = express()
app.use(cors())
app.use(express.json())
// const todosArr = [
//     {
//         title: 'Buy bananna',
//         id: 1,
//         completed: false,
//         order: 1,
//         date: new Date().toLocaleString()
//     },
//     {
//         title: 'Bye orange',
//         id: 2,
//         completed: false,
//         order: 2,
//         date: new Date().toLocaleString()
//     },

// ]

app.get('/', (req, res) => {
    res.send('<h1>Hello it is products api</h1>')
})

// app.get('/api/todos', (req, res) => {
//     // const products = await Product.find()
//     res.json(todosArr)
// })

app.get('/api/todos', async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
})

// app.post('/api/products', async (req, res) => {
//     console.log(req.body);
//     const { name, price, code, color, id } = req.body
//     const product = await Product.create({ name, price, code, color, id })
//     // const { __v, ...restProduct } = product
//     res.status(201).send(product)
// })

mongoose.connect('mongodb+srv://olz:todolist12345@cluster0.w0ot4.mongodb.net/todos', {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

mongoose.connection.once('open', () => console.log('database is connected'))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})



// {
//     "_id": {
//         "$oid": "60d1e17281d85189aeed1a5d"
//     },
//     "title": "buy orange",
//     "completed": false,
//     "order": 1,
//     "date": 10
// }