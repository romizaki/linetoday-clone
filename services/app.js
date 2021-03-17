const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const { default: axios } = require('axios')
const simpleStringify = require('./helper/stringify')

app.use(cors())
app.get('/data', async (req, res) => {
    try {
        const temp = await axios.get('https://today.line.me/id/portaljson')
        const data = simpleStringify(temp)
        const result = JSON.parse(data)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: 'Internal server error' })
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})