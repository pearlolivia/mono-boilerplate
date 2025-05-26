import './loadEnv'
import mainRouter from './routes'
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const port = 3200
const app = express()

app.use(cors())

// Parsing JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`)
// })

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_STRING)
        app.listen(port, () => {
            console.info(`Server running on port: ${port}`)
        })
        app.get('/test', (req, res) => {
            res.send({ data: 'Hello from server '})
        })
        // Routes
        app.use('/api', mainRouter)
    } catch (error) {
        console.error(`Failed to start server: ${error}`)
        process.exit(1)
    }
}

start()