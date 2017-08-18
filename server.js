const
    express = require('express'),
    path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, '/client')))
app.use(require('./api/routes')())

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is running.')
})
